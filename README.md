# Natours API

The **Natours API** is a complete RESTful API built using **Node.js**, **Express**, and **MongoDB (Mongoose)**.
It was originally created as part of [Jonas Schmedtmann’s Node.js Bootcamp](https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/), and further improved with custom features and better error handling.

---

## Features

* Full CRUD operations for tours, users, reviews, and bookings
* JWT Authentication and Authorization
* Password reset and email sending functionality
* Custom Error Handling and `AppError` utility
* Security Middlewares (rate limiting, data sanitization, helmet, etc.)
* Advanced Filtering, Sorting, Pagination, and Field Limiting
* Image uploading and resizing with Multer and Sharp
* Environment variable configuration with dotenv

---

## Technologies Used

* Node.js
* Express.js
* MongoDB & Mongoose
* JSON Web Token (JWT)
* Nodemailer (Mailtrap)
* Multer + Sharp
* dotenv
* bcryptjs

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/Natours.git
cd Natours
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the server

```bash
npm start
```

Server will run at:
[http://localhost:3000](http://localhost:3000)

---

## Improvements Added

* Enhanced global error handling
* Better asynchronous control using a custom `catchAsync` utility
* Cleaner `AppError` class for operational errors
* Improved code structure for scalability

---

## Testing

You can test API endpoints using **Postman** or any HTTP client.
Collection examples are included in the `/postman` folder (if available).

---

## API Overview

| Route              | Description                   |
| ------------------ | ----------------------------- |
| `/api/v1/tours`    | Manage tours                  |
| `/api/v1/users`    | Manage users                  |
| `/api/v1/reviews`  | Manage reviews                |
| `/api/v1/bookings` | Manage bookings               |
| `/api/v1/auth`     | Signup, login, password reset |

---

## Acknowledgements

* Original project from [Jonas Schmedtmann](https://codingheroes.io)
* Custom improvements and maintenance by **Mohamed Kamel**
