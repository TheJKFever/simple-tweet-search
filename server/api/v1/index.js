/**
 *
 * Entry point for API v1
 *
 */

import tweets from "./tweets";
import { Router } from "express";

const api_v1_routes = Router();

api_v1_routes.use("/", tweets);

export default api_v1_routes;
