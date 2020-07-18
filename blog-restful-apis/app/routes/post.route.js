
import postCtrl from '../controllers/post.ctrl';
import postValidator from '../validators/post.validator';
import * as express from 'express';
const router = express.Router()

// ALL POSTS FOR USERID
router.route('/user/:userId')
	.get([postCtrl.getPostsByUser])

// ALL POSTS
router.route('/')
	.get([postCtrl.list])

// GET POST BY ID 	
router.route('/:postId')
    .get([postValidator.uuidValidator, postCtrl.list])
	.get([postValidator.uuidValidator, postCtrl.get])
	.put([postValidator.uuidValidator, postCtrl.update])
	.delete([postValidator.uuidValidator, postCtrl.delete]);

export default router

