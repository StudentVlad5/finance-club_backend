const express = require("express");
const { packages } = require("../../controllers");
const ctrlWrapper = require("../../middleWares/ctrlWrapper");

const {  createPackages, getById } = packages;
const router = express.Router();

router.post("/", ctrlWrapper(createPackages));
router.get("/", ctrlWrapper(getById));

module.exports = routerPackages = router;
