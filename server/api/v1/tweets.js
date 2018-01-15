/**
 *
 * Tweets API v1
 *
 */

import { Router } from "express";
import Tweet from "../../models/Tweet";
const router = Router();

const byRelevance = { score: { $meta: "textScore" } };

router.get("/search/:query", function search(req, res) {
  const conditions = { $text: { $search: req.params.query } };
  const projection = { score: { $meta: "textScore" } };
  const options = { sort: byRelevance };
  Tweet.find(conditions, projection, options, function(err, tweets) {
    let status = 200;
    let errors = []
    // TODO: Return a client friendly error instead
    // TODO: Be more specific than 500
    if (err) {
      errors = [err];
      status = 500;
    }
    res.status(status).json({
      query: req.params.query,
      result: tweets,
      errors: errors
    });
  });
});

export default router;
