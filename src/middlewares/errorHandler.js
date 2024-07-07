export const errorHandler = (err, req, res, _next) => {
  const { status = 500, message = 'Internal server error ' } = err;
  res.status(status).json({
    status,
    message,
    data: message,
  });
};
