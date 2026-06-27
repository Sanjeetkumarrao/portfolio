const errorHandler = (err, _req, res, _next) => {
  console.error('❌', err.message);
  if (err.name === 'ValidationError')
    return res.status(400).json({ success: false, errors: Object.values(err.errors).map((e) => e.message) });
  if (err.code === 11000)
    return res.status(409).json({ success: false, error: 'Duplicate entry' });
  res.status(err.statusCode || 500).json({
    success: false,
    error: process.env.NODE_ENV === 'production' ? 'Server Error' : err.message,
  });
};

module.exports = errorHandler;
