
# Node.js를 이용한 게시판 만들기
<br>

## 📎 Install
```swift
npm install
```

## 📎 get start
```swift
npm start
```
<br>

## 📋 CRUD API
**게시판 목록**<br>
  * get, localhost:3000/


**게시판 글작성**<br>
  * post, localhost:3000/boardwrite


**게시판 글수정**<br>
  * post, localhost:3000/{id}/boardedit
  * 해당 id값을 파라미터로 넘겨 작성한 글쓴이와 같은지 확인하고 수정


**게시판 글삭제**<br>
  * delete, localhost:3000/{id}
  * 해당 id값을 파라미터로 넘겨 작성한 글쓴이와 같은지 확인하고 삭제

