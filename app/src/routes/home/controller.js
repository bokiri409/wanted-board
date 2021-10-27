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
        console.log("board write");
        const boardlists = BoardList.getBoardLists("num", "title", "writer", "date");
        const newItem = {
            num: req.body.num,
            title: req.body.title,
            writer: req.body.writer,
            date: new Date()
        };

        console.log(newItem);
        res.json(newItem);
    },
    boardedit:(req, res) => {

    },
    boarddelete: (req, res) => {
        
    }
}

module.exports = {
    // main, 
    // login,
    view, 
    process
};