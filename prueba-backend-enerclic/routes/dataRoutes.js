const express = require("express");
const router = express.Router();
const dataController = require("../controllers/dataController");

router.get("/:id", dataController.getAllData);

module.exports = router