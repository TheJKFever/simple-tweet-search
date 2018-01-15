/**
 *
 * Tweet model
 *
 */

import mongoose from "mongoose";
const Schema = mongoose.Schema;

let TweetSchema = new Schema({
  text: {type: String, required: true},
  userId: {type: String, required: true},
  // author: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date},
  deletedAt: {type: Date}
});

TweetSchema.index({ text: "text" });

module.exports = mongoose.model("Tweet", TweetSchema);
