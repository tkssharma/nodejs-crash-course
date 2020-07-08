/*The path module provides a lot of very useful functionality to access and interact with the file system.

There is no need to install it. Being part of the Node core, it can be used by requiring it: */

/** These are the path methods:  **/
/*
path.basename()
path.dirname()
path.extname()
path.isAbsolute()
path.join()
path.normalize()
path.parse()
path.relative()
path.resolve()
*/
const path = require('path');

const name = 'test'
require('path').join('/', 'users', name, 'notes.txt') //'/users/test/notes.txt'