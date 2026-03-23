# 🛒 NovaMart

A scalable **full-stack eCommerce web application** built using modern web technologies. NovaMart demonstrates real-world architecture with a clean separation between frontend and backend, RESTful APIs, and database integration.

---

## 🚀 Tech Stack

### Frontend

* Angular 19
* TypeScript
* HTML5 & CSS3

### Backend

* Node.js
* Express.js

### Database

* MongoDB (Atlas)

---

## ✨ Features

### 🛍 Product Module

* Get all products
* Create new product
* Structured product schema
* MongoDB integration using Mongoose

### ⚙️ Backend

* RESTful API architecture
* MVC folder structure (Models, Controllers, Routes)
* Environment-based configuration
* Scalable and modular design

### 🌐 Frontend

* Angular-based UI
* Service-based API integration
* Environment configuration for API endpoints

---

## 📁 Project Structure

```
novamart/
│
├── frontend/          # Angular application
│
├── backend/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── server.js
│   └── .env
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```
git clone https://github.com/YOUR_USERNAME/novamart.git
cd novamart
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
```

Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Run backend:

```
npm run dev
```

Server will run at:

```
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
ng serve
```

Frontend will run at:

```
http://localhost:4200
```

---

## 🔗 API Endpoints

### Products

| Method | Endpoint      |
| ------ | ------------- |
| GET    | /api/products |
| POST   | /api/products |

---

## 🧪 Sample Product JSON

```json
{
  "name": "Laptop",
  "price": 60000,
  "description": "Gaming laptop",
  "category": "Electronics",
  "brand": "Asus",
  "image": "laptop.jpg",
  "images": ["img1.jpg", "img2.jpg"],
  "countInStock": 5
}
```

---

## 📌 Future Enhancements

* User Authentication (JWT)
* Cart functionality
* Order management
* Payment integration
* Product search & filtering
* Admin dashboard

---

## 💡 Learning Highlights

* Built a complete backend from scratch
* Integrated Angular with REST APIs
* Designed scalable database schema
* Implemented modular architecture

---

## 👩‍💻 Author

**Trishita Roy**

---

## ⭐ Show Your Support

If you like this project, give it a ⭐ on GitHub!

---
