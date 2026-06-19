import config from '../config.js';

export const requireApiKey = (req, res, next) => {
  if (!config.inboundApiKey) return next();

  const key = req.headers['x-api-key'];

  if (!key || key !== config.inboundApiKey) {
    return res.status(401).json({
      success: false,
      message: 'Invalid or missing API key'
    });
  }

  next();
};