import crypto from "crypto";

export class ConsistentHashing {
    private readonly numReplicas: number;
    private ring: Map<number, string>;
    private sortedKeys: number[];
    private servers: Set<string>;

    constructor(servers: string[], numReplicas: number) {
        this.numReplicas = numReplicas;
        this.ring = new Map();
        this.sortedKeys = [];
        this.servers = new Set();

        for (const server of servers) {
            this.addServer(server);
        }
    }

    /**
     * Generates a 32-bit hash using MD5
     */
    private hash(key: string): number {
        const digest = crypto.createHash("md5").update(key).digest();
        return (
            ((digest[0] & 0xff) << 24) |
            ((digest[1] & 0xff) << 16) |
            ((digest[2] & 0xff) << 8) |
            (digest[3] & 0xff)
        ) >>> 0; // ensure unsigned
    }

    /**
     * Add a physical server with virtual nodes
     */
    public addServer(server: string): void {
        if (this.servers.has(server)) return;

        this.servers.add(server);

        for (let i = 0; i < this.numReplicas; i++) {
            const hash = this.hash(`${server}-${i}`);
            this.ring.set(hash, server);
            this.sortedKeys.push(hash);
        }

        this.sortedKeys.sort((a, b) => a - b);
    }

    /**
     * Remove a server and its virtual nodes
     */
    public removeServer(server: string): void {
        if (!this.servers.delete(server)) return;

        for (let i = 0; i < this.numReplicas; i++) {
            const hash = this.hash(`${server}-${i}`);
            this.ring.delete(hash);
            const index = this.sortedKeys.indexOf(hash);
            if (index !== -1) {
                this.sortedKeys.splice(index, 1);
            }
        }
    }

    /**
     * Get the server for a given key
     */
    public getServer(key: string): string | null {
        if (this.sortedKeys.length === 0) {
            return null;
        }

        const hash = this.hash(key);

        // Binary search for the first key >= hash
        let left = 0;
        let right = this.sortedKeys.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (this.sortedKeys[mid] >= hash) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        // Wrap around if needed
        const targetHash =
            left < this.sortedKeys.length
                ? this.sortedKeys[left]
                : this.sortedKeys[0];

        return this.ring.get(targetHash) ?? null;
    }
}
