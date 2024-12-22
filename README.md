# NoteBook

# 📒 Spring Boot CRUD API with MongoDB and JWT Authentication

A Spring Boot project demonstrating CRUD operations using MongoDB as the database and JWT (JSON Web Token) for authentication.

---

**🚀 Features**

✅ CRUD Operations on ModelData

🔐 JWT-based Authentication (Login, Signup, Forgot Password, Change Password)

👤 User Management (Create User, Update Profile, Password Encode/Decode, Token Verification)

📝 Note Management – Responsive UI for CRUD operations on Notes

📂 MongoDB Database Integration

📡 RESTful APIs

📱 Responsive UI for managing Notes with authentication
---

## 🛠️ Tech Stack
- **Java 17+**  
- **Spring Boot 3+**  
- **MongoDB**  
- **JWT (Json Web Token)**  
- **Maven**  
- **Angular (Responsive Frontend)**
---

## 📂 Project Structure
src/
 - ┣ main/
 - ┃ ┣ java/com/example/notebook/
 - ┃ ┃ ┣ controller/         # API Controllers
 - ┃ ┃ ┣ service/            # Business Logic
 - ┃ ┃ ┣ repository/         # MongoDB Repositories
 - ┃ ┃ ┗ model/              # Data Models (ModelData, User)
 - ┃ ┣ resources/
 - ┃ ┃ ┣ application.properties
 - ┗ test/
- frontend/
 - ┗ src/                   # Angular Frontend for Note CRUD
## 📂 MongoDB Url configuration
- spring.application.name=note
- spring.data.mongodb.uri=mongodb://localhost:27017/local
- spring.data.mongodb.database=local
- server.port=8092
- jwt.secret = rajnishRaj@#1234

## 📂 UI URL setup
- change export const URL: string = "http://localhost:8092";
- change this url according to your backend URL

## To Run the Backend Project (Java+Srpingboot):
- mvn spring-boot:run
## To Run the Frontend Project (Angular):
- cd NoteUI
- npm i
- ng serve
- Access the UI at: http://localhost:4200/
