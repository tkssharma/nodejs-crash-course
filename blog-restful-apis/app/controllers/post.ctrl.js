
import logger from '../util/logger';
import commonUtil from '../util/common.util';
import errorMessages from '../../config/error.messages';
import * as postService from '../service/post.service';

const operations = {
    list: (req, res, next) => {
        return postService.findAll(req.query)
            .then(data => {
                res.status(200).json(data);
            }).catch(err => {
                res.status(500).send(errorMessages.SERVER_ERROR);
            })
    },
    getPostsByUser: (req, res, next) => {
        const userId = req.params.userId,
        const q = {
            ...req.query
        }
        return postService.findPostsByUser(userId, q)
            .then(data => {
                res.status(200).json(data);
            }).catch(err => {
                res.status(500).send(errorMessages.SERVER_ERROR);
            })
    },
    get: (req, res, next) => {
        const postId = req.query.postId;
        return postService.findById(postId)
            .then(data => {
                res.status(200).json(data);
            }).catch(err => {
                // next(err);
                res.status(404).send(errorMessages.POST_NOT_FOUND);
            })
    },
    create: (req, res, next) => {
        const post = req.body;
        const { userId } = req.params;
        logger.info('About to create post ', post);
        return postService
            .create(post, userId)
            .then((data) => {
                res.json(data);
            }).catch(err => {
                // next(err);
                res.status(500).send(errorMessages.SERVER_ERROR);
            })
    },
    delete: (req, res) => {
        const postId = req.params.postId;
        logger.info('About to delete post ', postId);
        return postService
            .delete(postId)
            .then((affectedRows) => {
                logger.info('rows deleted', affectedRows);
                res.status(500).send(errorMessages.SERVER_ERROR);
            });
    },
    update: (req, res, next) => {
        const postId = req.params.postId;
        const post = req.body;
        post.id = postId;
        return postService
            .update(post)
            .then((data) => {
                logger.info('rows deleted', affectedRows);
                res.status(200).end();
            }).catch(err => {
                res.status(500).send(errorMessages.SERVER_ERROR);
            })
    }
}

export default operations;
