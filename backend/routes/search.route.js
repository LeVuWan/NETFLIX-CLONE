import express from "express";
import {
  searchMovie,
  searchPerson,
  searchTV,
  getSearchHistory,
  removeItemFromSearchHistory,
} from "../controller/search.controller.js";

const router = express.Router();

router.get("/person/:query", searchPerson);
router.get("/movie/:query", searchMovie);
router.get("/tv/:query", searchTV);
router.get("/history", getSearchHistory);
router.get("/history/:id", removeItemFromSearchHistory);

export default router;
