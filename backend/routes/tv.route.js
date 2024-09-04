import express from "express";
import {
  getTrendingTV,
  getTVTrailers,
  getTVDetails,
  getTVSimilar,
  getTVByCategory,
} from "../controller/tv.controller.js";

const router = express.Router();

router.get("/trending", getTrendingTV);
router.get("/:id/trailers", getTVTrailers);
router.get("/:id/details", getTVDetails);
router.get("/:id/similar", getTVSimilar);
router.get("/:category", getTVByCategory);
export default router;
