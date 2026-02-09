const { createHandler } = require('./_netlifyAdapter');
const { handler } = require('../upload-story.js');

module.exports = createHandler(handler);
