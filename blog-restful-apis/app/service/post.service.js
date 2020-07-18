
const Post  = require('../models/post');
const User  = require('../models/user');

export function list({ limit=50,offset=0, ...args} = {}) {
    return Post.find({})
}
export function findPostsByUser(userId, { limit=50,offset=0, ...args} = {}) {
    return Post.find({});
}
export function findById(UserId) {
    return Post.findById(UserId).populate('user')
}
export function create(post, userId) {
     Post.create(post).then(postData => {
        const id = postData._id;
        User.findById(userId).then(data => {
            let posts = user.post;
            posts.push(id);
            data.post = posts;
            return data.save();
        })
     })
}
export function update(UserId) {
    return Post.findById(UserId).populate('user')
}
export function deletePost(postId) {
    return Post.findByIdAndRemove(postId);
}