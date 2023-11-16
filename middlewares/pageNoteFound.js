export default function pageNotFound(req, res) {
  res.status(404).send({error: "Page not found"});
}