import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";
import favicon from "serve-favicon";
import helmet from "helmet";
import compression from "compression";
import path from "path";
import middleware from "./middleware"

import env from "./config/env";
require("./config/database");
import routes from "./routes";

const app = express();

/**********************************
 *            Middleware          *
 **********************************/
app.use(favicon(path.join(__dirname, "favicon.ico")));
app.use(helmet()); // Helmet helps you secure your Express apps by setting various HTTP headers.
app.use(compression());
app.use(logger("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// serve static files, this is for React
app.use("/static", express.static(path.join(__dirname, "public", "static")));

// Routes
app.use("/", routes);
app.use(middleware.not_found);

// Load React App
// Serve HTML file for production
if (env.name === "production") {
  app.get("*", function response(req, res) {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });
}

export default app;
