export default function errorHandler(error, req, res, next) {
  console.log(error.message);

  if (error.name === 'CastError') {
    return res.status(400).json({error: "id is not defined"});
  } else if (error.name === 'ValidationError') {
    return res.status(400).json({error: error.message});
  }
  next(error);
}