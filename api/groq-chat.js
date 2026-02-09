const { createHandler } = require('./_netlifyAdapter');
const { handler } = require('../groq-chat.js');

module.exports = createHandler(handler);
