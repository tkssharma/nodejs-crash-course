
import logger from '../util/logger';
import commonUtil from '../util/common.util';
import errorMessages from '../../config/error.messages';
import * as userService from '../service/user.service';

const operations = {
    list: (req, res, next) => {
        console.log('olaola');
        logger.info('About to get users ');
        return userService.list(req.query)
            .then(data => {
                res.status(200).json(data);
            }).catch(err => {
                res.status(500).send(errorMessages.SERVER_ERROR);
            })
    },
    get: (req, res, next) => {
        const userId = req.query.userId;
        return userService.findById(userId)
            .then(data => {
                res.status(200).json(data);
            }).catch(err => {
                // next(err);
                res.status(404).send(errorMessages.POST_NOT_FOUND);
            })
    },
    create: (req, res, next) => {
        const user = req.body;
        logger.info('About to create user');
        return userService
            .create(user)
            .then((data) => {
                res.status(200).json(data);
            }).catch(err => {
                console.log(err);
                res.status(500).send(errorMessages.SERVER_ERROR);
            })
    },
    delete: (req, res) => {
        const userId = req.params.userId;
        logger.info('About to delete post ', userId);
        return userService
            .deleteUser(userId)
            .then((affectedRows) => {
                logger.info('rows deleted', affectedRows);
                res.status(500).send(errorMessages.SERVER_ERROR);
            });
    }
}

export default operations;
