export default function tokenExtractor(req, res, next) {

  const autorization = req.get('authorization');
  
  if (autorization && autorization.startsWith('Bearer ')) {
    req.token = autorization.replace('Bearer ', '')
  }
  next();
}