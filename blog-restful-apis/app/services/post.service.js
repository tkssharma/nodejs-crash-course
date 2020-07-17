
const Post = require('../models/post');
/**
 * Find all posts by a Post in the db
 *
**/
export async function findAll ({limit = 50, offset = 0, userName='',...otherOptions} = {}){
	return await Post.find({})
};
/**
 * Find post by id
 * @param postId id of the post to find
**/
export async function findById (postId){
	return await Post.findById(postId);
};

/**
 * Create a new post
 * @param post object literal containing info about a post
 * - title {String}
 * - content {String}
 * - userId {String}
 * - status: draf vs published
**/
export async function create (post, userId){
  const post = await Post.create(post);
  const user = await User.findById(userId);
	return user;
};

/**
 * Update a post
 * @param post {Object} object literal containing info about a post
 * - id {UUID} required
 * - title {String}
 * - content {String}
 * - userId {String}
 * - status: draf vs published
**/
export async  function update (post){
	return Post
			.findById(post.id)
			.then((p)=>{
				return p.update(post);
			});

};
/**
 * Delete a post by id
 * @param postId {UUID}
**/
export function deletePost (postId){
	return Post.findByIdAndRemove(postId);
};
