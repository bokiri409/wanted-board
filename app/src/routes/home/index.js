"use strict";

const express = require("express");
const router = express.Router();

const controller = require("./controller")

router.get("/", controller.view.main); // 게시판 리스트
router.get("/login", controller.view.login);
router.post("/login", controller.process.login);

router.get("/boardwrite", controller.view.boardwrite);
router.get("/boardcontent", controller.view.boardcontent);
router.post("/boardedit", controller.view.boardedit);

// 외부로 내보내기
module.exports = router;