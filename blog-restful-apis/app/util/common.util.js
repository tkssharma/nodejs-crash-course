'use strict';
import fs from 'fs';
import path from 'path';

const baseRgx = /(.*).(js)$/;
const commonUtil = {
    isEmty: (str)=> !str || str.length === 0,
    // recursively walk modules path and callback for each file
}
export default commonUtil;
