const { createHandler } = require('./_netlifyAdapter');
const { handler } = require('../upload-image.js');

module.exports = createHandler(handler);
