# Blog API
> This is a simple personal blog API for documenting the best and not so best parts of your daily life.
## 📃Description
This blog API allows users to write, read, modify and delete their personal blogs.
## ✨Features
* User authentication
* Create, read, update and delete options for blog posts
## 💣API Endpoints
* **POST /auth/register**: Create an account
  * **Request Body**:
  ```js
  {
  "name": "james doe",
  "email": "jamesdoe@email.com",
  "password": "secret"
  }
  ```
  * **Response Body**:
  ```js
  {
  "user": {
    "name": "james doe"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmU3YTNmNDE1MWEwZjc4MGY2NGM3ODUiLCJuYW1lIjoiamFtZXMgZG9lIiwiaWF0IjoxNjU5MzQ3OTU2LCJleHAiOjE2NjE5Mzk5NTZ9.2C06hNRRD9jjSaO5qv8OdyY5N5j-yAlFj8AY5q9oQ8M"
  }
  ```
* **POST /auth/login**: Login into an existing account
  * **Request Body**:
  ```js
  {
  "email": "janedoe@email.com",
  "password": "secret"
  }
  ```
  * **Response Body**:
  ```js
  {
  "user": {
    "name": "jane doe"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmM1OTg4ZmI2MzhkODI0M2M4NDYxNDMiLCJuYW1lIjoiamFuZSBkb2UiLCJpYXQiOjE2NTkzNDg4MDcsImV4cCI6MTY2MTk0MDgwN30.NBOmSpH0d5bdlEsZdqBHEFeoKFJwkcUG2CcPh3nGc1Q"
  }
  ```
* **POST /posts**: Create a blog post
  * **Request Body**:
 ```js
 {
  "title": "Thailand Trips",
  "body": "Yesterday we arrived in Thailand for our 2 weeks vacation."
 }
 ```
  * **Response Body**:
 ```js
 {
  "post": {
    "title": "Thailand Trips",
    "body": "Yesterday we arrived in Thailand for our 2 weeks vacation.",
    "createdBy": "62c5988fb638d8243c846143",
    "_id": "62e7a8b9151a0f780f64c788",
    "createdAt": "2022-08-01T10:19:37.347Z",
    "updatedAt": "2022-08-01T10:19:37.347Z",
    "__v": 0
  }
 }
 ```
* **GET /posts**: Retrieve all the posts by the current user logged in
  * **Request Body**: *No request body is necessary*
  * **Response Body**:
   ```js
   {
    "posts": [
      {
        "_id": "62c69739d5e5c9b969e7a9ba",
        "title": "First trip abroad",
        "body": "My first trip abroad was to Seychelles.",
        "createdBy": "62c5988fb638d8243c846143",
        "createdAt": "2022-07-07T08:20:09.376Z",
        "updatedAt": "2022-07-07T08:20:09.376Z",
        "__v": 0
      },
      {
        "_id": "62c69d0eec1f10e3fded8e5a",
        "title": "Things to eat before I die",
        "body": "turkish delight, thieboudienne",
        "createdBy": "62c5988fb638d8243c846143",
        "createdAt": "2022-07-07T08:45:02.444Z",
        "updatedAt": "2022-07-07T08:45:02.444Z",
        "__v": 0
      },
      {
        "_id": "62e7a8b9151a0f780f64c788",
        "title": "Thailand Trips",
        "body": "Yesterday we arrived in Thailand for our 2 weeks vacation.",
        "createdBy": "62c5988fb638d8243c846143",
        "createdAt": "2022-08-01T10:19:37.347Z",
        "updatedAt": "2022-08-01T10:19:37.347Z",
        "__v": 0
      },
      {
        "_id": "62e7aab0151a0f780f64c78b",
        "title": "Darth Maul vs Obi-Wan Kenobi",
        "body": "This is in my personal opinion the best lightsaber duel in the whole Star Wars franchise.",
        "createdBy": "62c5988fb638d8243c846143",
        "createdAt": "2022-08-01T10:28:00.418Z",
        "updatedAt": "2022-08-01T10:28:00.418Z",
        "__v": 0
      }
    ],
    "count": 4
   }
   ```
* **GET /posts/:id**: Retrieve a single post by the current user logged in
  * **Request Body**: *No request body is necessary just provide the post id*
  * **Response Body**:
   ```js
   {
    "post": {
      "_id": "62e7aab0151a0f780f64c78b",
      "title": "Darth Maul vs Obi-Wan Kenobi",
      "body": "This is in my personal opinion the best lightsaber duel in the whole Star Wars franchise.",
      "createdBy": "62c5988fb638d8243c846143",
      "createdAt": "2022-08-01T10:28:00.418Z",
      "updatedAt": "2022-08-01T10:28:00.418Z",
      "__v": 0
    }
   }
   ```
* **PATCH /posts/:id**: Update a post by the current user logged in
  * **Request Body**: *Post id should also be provided along with request body*
  ```js
  {
  "title": "Darth Maul vs Obi-Wan Kenobi",
  "body": "This is in my personal opinion the best lightsaber duel in the whole Star Wars franchise to this day."
  }
  ```
  * **Response Body**:
  ```js
  {
  "post": {
    "_id": "62e7aab0151a0f780f64c78b",
    "title": "Darth Maul vs Obi-Wan Kenobi",
    "body": "This is in my personal opinion the best lightsaber duel in the whole Star Wars franchise to this day.",
    "createdBy": "62c5988fb638d8243c846143",
    "createdAt": "2022-08-01T10:28:00.418Z",
    "updatedAt": "2022-08-01T11:01:17.668Z",
    "__v": 0
  }
  }
  ```
* **DELETE /posts/:id**: Delete a post by the current user logged in
  * **Request Body**: *No request body is necessary just provide the post id*
  * **Response Body**: `code status 200`
Test the endpoints using your favourite API client, I would strongly recommend [Postman](https://www.postman.com/ "Postman") though ✌🏿.
## 🛠Tools used
* **Server-side framework**: *node/express*
* **Deployment**: *heroku*
* **Documentation**: *swagger*
## 🔩Use this project
Before anything first check if you have [nodejs](https://nodejs.org/en/download/ "nodejs"), [Postman](https://www.postman.com/ "Postman") and [git](https://git-scm.com/downloads "git") installed in your machine.
Assuming those are installed, follow the following steps:
* **Clone the project repo**:
```git
git clone https://github.com/IRAKOZEAimeAubin/blog-post.git
```
* **Install all the dependencies**:
```bash
npm install
```
* **Create a .env file and add environment variables**
* **Run the app**:
```bash
npm run start
```
* **To run the app in development**:
  * *First, install **nodemon** using `npm install -D nodemon`*
  * *Secondly, add the following line in the `package.json` file in the `scripts` section
  ```json
  "dev": "nodemon app.js"
  ```
  * *Then, run the following command*:
  ```bash
  npm run dev
  ```
Have fun 🎉
---
---
This was made by [Aubin](https://github.com/IRAKOZEAimeAubin "Aubin") with ❤ and javaScript 👨🏿‍💻
