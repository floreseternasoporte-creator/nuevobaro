const { createHandler } = require('./_netlifyAdapter');
const { handler } = require('../migrate-firebase-to-s3.js');

module.exports = createHandler(handler);
