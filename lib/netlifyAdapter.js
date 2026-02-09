function createHandler(netlifyHandler) {
  return async (req, res) => {
    if (req.method === 'OPTIONS') {
      res.statusCode = 200;
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      res.end('');
      return;
    }

    const event = {
      httpMethod: req.method,
      headers: req.headers,
      queryStringParameters: req.query,
      body: req.body ? JSON.stringify(req.body) : null
    };

    const result = await netlifyHandler(event);
    res.statusCode = result.statusCode || 200;
    if (result.headers) {
      for (const [key, value] of Object.entries(result.headers)) {
        res.setHeader(key, value);
      }
    }
    res.end(result.body || '');
  };
}

module.exports = { createHandler };
