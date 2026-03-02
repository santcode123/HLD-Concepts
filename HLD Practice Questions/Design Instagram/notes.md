### Design a scalable instagram 

functional requirements
1. user can create an account on instagram and login
2. user can see his/her time line where connectiosn post or celebrities post will be available
3. user can post the his/her post with photos and contents, we can have multiple photos in one post
4. user can like, comments, someone else post
5. send In app and push notifications when some comments on your post

Out of scope but can thing of them
1. uploading 24hrs format stories
2. making reels and uploading
3. video call
4. chat on instagram
5. nested comments are out of scope


Non functional requirements
1. system should be highly available
2. system can sacrifice consistency with latency (eventual consistency will okay)


### We need to think of below points while designing instagram

1. how does multiple images upload workd under the hood, do we store images to our backend or s3?
2. How does CDN caches the images and how requests are servered directly from cdn
3. how does instagram stories work, give a system design overview
4. how does push notifications works in instagram messages