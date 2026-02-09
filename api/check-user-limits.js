const { createHandler } = require('./_netlifyAdapter');
const { handler } = require('../check-user-limits.js');

module.exports = createHandler(handler);
