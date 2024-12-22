# NoteBook

# 📒 Spring Boot CRUD API with MongoDB and JWT Authentication

A Spring Boot project demonstrating CRUD operations using MongoDB as the database and JWT (JSON Web Token) for authentication.

---

## 🚀 Features
- ✅ **CRUD Operations** on `ModelData`  
- 🔐 JWT-based Authentication (Login & Signup)  
- 📂 MongoDB Database Integration  
- 📡 RESTful APIs  
- 📑 User Management (Password Encode, Decode, and Token Verification)
- 📂 Perform Crud operation on note(having title and content)

---

## 🛠️ Tech Stack
- **Java 17+**  
- **Spring Boot 3+**  
- **MongoDB**  
- **JWT (Json Web Token)**  
- **Maven**  

---

## 📂 Project Structure
src/ ┣ main/ ┃ ┣ java/com/example/notebook/ ┃ ┃ ┣ controller/ # API Controllers ┃ ┃ ┣ service/ # Business Logic ┃ ┃ ┣ repository/ # MongoDB Repositories ┃ ┃ ┗ model/ # Data Models (ModelData, User) ┃ ┣ resources/ ┃ ┃ ┣ application.properties ┗ test/


## 📂 MongoDB Url configuration
spring.application.name=note
spring.data.mongodb.uri=mongodb://localhost:27017/local
spring.data.mongodb.database=local
server.port=8092
jwt.secret = rajnishRaj@#1234

## 📂 UI URL setup
-change export const URL: string = "http://localhost:8092";
this url according to your backend URL
