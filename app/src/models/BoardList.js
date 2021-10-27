"use strict";

class BoardList {
    // #는 외부에서 접근 못하게
    static #boardlist = {
        num: ["1", "2", "3", "4", "5"],
        title: ["제목1", "제목2", "제목3", "제목4", "제목5"],
        writer: ["user1", "user2", "user3", "user4", "user5"],
        date: ["2021-10-10", "2021-10-10", "2021-10-10", "2021-10-10", "2021-10-10"],
    };

    static getBoardLists(...fields) {
        const boardlist = this.#boardlist;
        const newBoardList = fields.reduce((newBoardList, field) => {
            if(boardlist.hasOwnProperty(field)){
                newBoardList[field] = boardlist[field];
            }
            return newBoardList;
        }, {});
        return newBoardList;
    }

    static getBoardInfo(writer) {
        const contents = this.#boardlist;
        const idx = contents.writer.indexOf(writer);
        const contentKeys = Object.keys(contents);
        const contentInfo = contentKeys.reduce((newBoardList, info) => {
            newBoardList[info] = contents[info][idx];
            return newBoardList;
        }, {});
        return contentInfo;
    }

    // static getUserInfo(id) {
    //     const users = this.#users;
    //     const idx = users.id.indexOf(id);
    //     const usersKeys = Object.keys(users); // => [id, pw, nickname]
    //     const userInfo = usersKeys.reduce((newUsers, info) => {
    //         newUsers[info] = users[info][idx];
    //         return newUsers;
    //     }, {});

    //     return userInfo;
    // }
}

module.exports = BoardList;