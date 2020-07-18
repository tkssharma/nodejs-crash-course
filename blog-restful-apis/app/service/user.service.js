
const User  = require('../models/user');

export function findByUserName (name) {
    return User.findOne({ userName: name}).exec();
}
export function list({ limit=50,offset=0, ...args} = {}) {
    return User.find().exec()
}
export function findById(UserId) {
    return User.findById(UserId);
}
export function create(user) {
    return User.create(user);
}
export function deleteUser(UserId) {
    return User.findByIdAndRemove(UserId);
}