# Blog API
> This is a simple personal blog API for documenting the best and not so best parts of your daily life.
## Description
This blog API allows users to write, read, modify and delete their personal blogs.
## ✨Features
* User authentication
* Create, read, update and delete options for blog posts
## API Endpoints
* **POST /auth/register**: Create an account
  * **Request**:
  ```js
  {
  "name": "james doe",
  "email": "jamesdoe@email.com",
  "password": "secret"
  }
  ```
