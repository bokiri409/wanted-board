"use strict";

const express = require("express");
const router = express.Router();

const controller = require("./controller")

router.get("/", controller.view.main); // 게시판 리스트
router.get("/login", controller.view.login);
router.post("/login", controller.process.login);

router.get("/:id/boardcontent", controller.view.boardcontent);
router.post("/boardwrite", controller.process.boardwrite);
router.post("/:id/boardedit", controller.process.boardedit);
router.delete("/:id", controller.process.boarddelete);

// 외부로 내보내기
module.exports = router;