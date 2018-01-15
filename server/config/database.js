/**
 *
 * Database Config
 */
import mongoose from "mongoose";
import env from "./env";

const dbHost = {
  dev: "mongodb://localhost/tweetSearch",
  production: "xxxxx"
};
mongoose.Promise = require("bluebird");
mongoose.connect(dbHost[env.name], {"useMongoClient": true});
