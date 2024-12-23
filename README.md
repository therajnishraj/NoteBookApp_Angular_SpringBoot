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
- change URL: string = "http://localhost:8092"; of this file (src/app/utility/common-component/common-url.ts)  
- change above url according to your backend URL and port (if you have changed the backend application port else no need to change)

## To Run the Backend Project (Java+Srpingboot):
- mvn spring-boot:run

## Setup and configuration for Angular Project 

- **Install NVM (If Not Installed): Run this command to install NVM:**
**(NVM is a tool that makes it easy to manage multiple versions of Node.js.)**
- curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

- **Then activate NVM:**
- source ~/.nvm/nvm.sh

- **Check Installed Versions: Verify NVM is installed correctly:**
- nvm --version

- **Install Node.js Version 18:**
- nvm install 18

- **Check node version**
 node -v

- **Set Node.js Version 18 as Default:**
nvm use 18
nvm alias default 18

- **Install Angular CLI globally:**
npm install -g @angular/cli


## To Run the Frontend Project (Angular):
- **Go to project**
- cd NoteUI
- **Install all dependency of the project**
- npm i
- **Start the project**
- ng serve
- **Go to your browser and acess the below URL**
- Access the UI at: http://localhost:4200/
