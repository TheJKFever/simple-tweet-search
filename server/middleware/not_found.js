/**
 *
 * 404 Not Found middleware
 *
 */

export default function(req, res) {
  res.status(404).send({url: req.originalUrl + " Not Found"})
}
