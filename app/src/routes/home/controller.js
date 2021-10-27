"use strict";

const User = require("../../models/User");
const BoardList = require("../../models/BoardList");
const { response } = require("express");

const view = {
    main: (req, res) => {
        // 기능
        // res.render("home/index");
        const boardlists = BoardList.getBoardLists("num", "title", "writer", "date");
        const response = { boardlists };
        response.success = true;
        return res.json(response);
    },
    
    login: (req, res) => {
        res.render("home/login");
    },

    boardcontent: (req, res) => {
        res.render("home/boardcontent");
    }, 
    
    boardedit: (req, res) => {
        res.render("home/boardedit");
    },
    
};

const process = {
    login: (req, res) => {
        //처리하기 위해서 bodyParser를 사용해준다.
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);

        // const id = req.body.id;
        // const pw = req.body.pw;
        
        // // const user = new User();

        // const users = UserStorage.getUsers("id", "pw");
        
        // const response = {};
        // if(users.id.includes(id)){
        //     const idx = users.id.indexOf(id);
        //     if(users.pw[idx] === pw){
        //         response.success = true;
        //         return res.json(response);
        //     }
        // }

        // // 로그인 실패 시
        // response.success = false;
        // response.msg = "로그인에 실패하였습니다."
        // return res.json(response);
    },
    boardwrite: (req, res) => {
        const newItem = {
            num: req.body.num,
            title: req.body.title,
            writer: req.body.writer,
            date: new Date()
        };

        res.json(newItem);
    },
    boardedit:(req, res) => {
        const id = BoardList.getBoardInfo(req.params.id);
        const editItem = {
            num: id.num,
            title: id.title,
            writer: id.writer,
            date: new Date()
        };

        res.json(editItem);
    },
    boarddelete: (req, res) => {
        const id = req.params.id;
        const boardlists = BoardList.getBoardLists("num", "title", "writer", "date");
        const content = BoardList.getBoardInfo(req.params.id);
        console.log(content);

        console.log(boardlists);
        if(content.writer === id) {
            const idx = boardlists.writer.indexOf(id);
            console.log(boardlists);
            boardlists.num.splice(idx, 1);
            boardlists.title.splice(idx, 1);
            boardlists.writer.splice(idx, 1);
            boardlists.date.splice(idx, 1);
            console.log(boardlists);
        }
        else{
            response.success = false;
            response.msg = "해당 게시물을 삭제할 수 없습니다.";
        }

        const response = {};
        response.success = true;
        res.json(response);
    }
}

module.exports = {
    // main, 
    // login,
    view, 
    process
};