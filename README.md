# 🔐 Auth Tutorial – Node.js, Express, MongoDB & Swagger

This project is a Node.js-based authentication system that handles user registration, login, email verification, password reset, and more. It also includes Swagger API documentation.

## 📁 Project Structure

```
auth-tutorial/
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── utils/
│   ├── mailtrap/
│   ├── swagger.yaml
│   └── server.js
├── frontend/
├── node_modules/
├── .env
├── package.json
└── README.md
```

## 🚀 Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/auth-tutorial.git
cd auth-tutorial
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add the following:

```
PORT=5000
MONGO_URI=mongodb+srv://user:password@cluster.mongodb.net/dbname
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
```

### 4. Start the App

```bash
npm start
```

## 📬 Auth Endpoints

- ✅ Sign Up: `POST /api/auth/signup`
- ✅ Login: `POST /api/auth/login`
- ✅ Logout: `POST /api/auth/logout`
- ✅ Verify Email: `POST /api/auth/verify-email`
- ✅ Forgot Password: `POST /api/auth/forgot-password`
- ✅ Reset Password: `POST /api/auth/reset-password/:token`
- ✅ Check Auth: `GET /api/auth/check-auth`

## 📘 Swagger API Documentation

Access Swagger UI at:

```bash
http://localhost:5000/api-docs
```

Swagger schema file: `backend/swagger.yaml`

## ✉️ Email Service

This project uses [Mailtrap](https://mailtrap.io/) for testing email functionalities. Email credentials are stored in `.env`. These actions are email-supported:

- Email verification
- Sending password reset link
- Welcome email
- Password reset success message

## ⚠️ Security Notes

- Passwords are hashed with `bcryptjs`.
- Authentication is managed via JWT.
- Cookies are used for secure session handling (HTTPOnly).
- Token expiration is implemented for enhanced security.

## 👨‍💻 Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (JSON Web Tokens)
- Swagger
- Mailtrap
- BcryptJS

## 🧪 Sample Request Bodies

### Sign Up

```json
{
  "email": "test@example.com",
  "name": "Berkan",
  "password": "secret123"
}
```

### Login

```json
{
  "email": "test@example.com",
  "password": "secret123"
}
```

### Verify Email

```json
{
  "code": "123456"
}
```

### Forgot Password

```json
{
  "email": "test@example.com"
}
```

### Reset Password

```json
{
  "password": "newPassword123"
}
```

## 🧡 Contributing

Pull requests are welcome! Feel free to report bugs, suggest improvements, or contribute to the project.

---

**Developed by BerkanJS**  
To integrate with frontend, don't forget to set the `CLIENT_URL` in your `.env`:

```bash
CLIENT_URL=http://localhost:5173
```
