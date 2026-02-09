const { createHandler } = require('./_netlifyAdapter');
const { handler } = require('../user-stats.js');

module.exports = createHandler(handler);
