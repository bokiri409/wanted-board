"use strict";

const express = require("express");
const router = express.Router();

const controller = require("./controller")

router.get("/", controller.main);
router.get("/login", controller.login);

// 외부로 내보내기
module.exports = router;