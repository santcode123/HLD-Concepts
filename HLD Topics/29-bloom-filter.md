#### Bloom Filter

bloom filter is probalistic data structure which help us to identify some thning exists in the set(probalistic) or not. if bloom filter says that something does not exists in the set then definitly it does not exists, but it can give false positive answer, so it's trade off between space and accuracy. in  some use case accuracy can be tolerated for space optimization then we can think of bloom filter.

How we implement bloom filter:

We have k number of hash functions and a array of boolean values of size m, each hash function map to boolean array index. we give input value to all k hash function and get k index which we mark to 1 or true in boolean value.

when we want to check whether something exists or not,
if all index generated from all k hash fuction contains 1 then we return true otherwise we say input value does not exists in the set(return false).