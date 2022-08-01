# Blog API
> This is a simple personal blog API for documenting the best and not so best parts of your daily life.
## Description
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
 * * **Request Body**:
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
 * * **Request Body**:
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
 * * **Request Body**:
 *No request body is necessary*
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
 * * **Request Body**:
 *No request body is necessary just provide the post id*
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
 
 
