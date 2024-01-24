import { Router } from "express";
import { getStocksData } from "../controllers/stockinfo.controller.js";

const router = Router()

router.route("/stock-info").get(getStocksData)

export default router;