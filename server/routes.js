/**
 *
 * Entry point for all routes
 *
 */

import api_v1 from "./api/v1";
import { Router } from "express";

const routes = Router();

routes.use("/api/v1", api_v1);

export default routes;
