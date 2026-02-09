const { createHandler } = require('../lib/netlifyAdapter');

const routes = {
  'chapters': require('../chapters.js').handler,
  'check-user-limits': require('../check-user-limits.js').handler,
  'community-notes': require('../community-notes.js').handler,
  'delete-story': require('../delete-story.js').handler,
  'following': require('../following.js').handler,
  'get-chapters': require('../get-chapters.js').handler,
  'get-stories': require('../get-stories.js').handler,
  'groq-chat': require('../groq-chat.js').handler,
  'likes': require('../likes.js').handler,
  'migrate-firebase-to-s3': require('../migrate-firebase-to-s3.js').handler,
  'notes': require('../notes.js').handler,
  'notifications': require('../notifications.js').handler,
  'scheduled-chapters': require('../scheduled-chapters.js').handler,
  'send-support-email': require('../send-support-email.js').handler,
  'update-story': require('../update-story.js').handler,
  'upload-image': require('../upload-image.js').handler,
  'upload-story': require('../upload-story.js').handler,
  'user-stats': require('../user-stats.js').handler,
  'users': require('../users.js').handler
};

function getRouteKey(rawPath) {
  if (!rawPath) return '';
  if (Array.isArray(rawPath)) {
    return rawPath.filter(Boolean).join('/');
  }
  return String(rawPath);
}

module.exports = async (req, res) => {
  const routeKey = getRouteKey(req.query.path).replace(/^\/+|\/+$/g, '');
  const handler = routes[routeKey];

  if (!handler) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Endpoint not found' }));
    return;
  }

  return createHandler(handler)(req, res);
};
