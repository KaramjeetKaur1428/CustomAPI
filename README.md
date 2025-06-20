# CustomAPI

# 🎓 Student Record API
A simple custom API server built using **Node.js + Express**, with a JSON file as the database.  
This API allows you to **Create, Read, Update, and Delete (CRUD)** student records — no database server needed!

---
## 🚀 Features
- Add new student records
- Fetch all or individual students
- Update a student’s data
- Delete a student by ID
- Stores data persistently in `data.json`

---
## 🛠️ Tech Stack
- Node.js
- Express.js
- Native `fs` module (file system for JSON storage)
- Postman (for API testing)

---

## 📁 Project Structure
student-api/
├── server.js
├── data.json
├── utils/
│ └── fileHandler.js
├── package.json

---

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/student-api.git
cd student-api
2. Install Dependencies  ---->  npm install
3. Run the Server ----> node server.js.
4. Server will start at: ----> http://localhost:5000

---

###📬 API Endpoints
🔹 GET /students  : Get all student records
Response:
[
  {
    "id": 1719014873543,
    "name": "Karamjeet",
    "age": 21,
    "course": "CSE"
  }
]

🔹 GET /students/:id     Get a specific student by ID
GET http://localhost:5000/students/1719014873543
🔹 POST /students
  -->Create a new student
{
  "name": "Karamjeet",
  "age": 21,
  "course": "CSE"
}

Response:
{
  "id": 1719014873543,
  "name": "Karamjeet",
  "age": 21,
  "course": "CSE"
}
🔹 PUT /students/:id
Update an existing student

Request Body:
{
  "course": "AI & ML"
}
Response:
{
  "id": 1719014873543,
  "name": "Karamjeet",
  "age": 21,
  "course": "AI & ML"
}

🔹 DELETE /students/:id    Delete a student by ID
Response:
{
  "message": "Student deleted"
}


🧪 Testing
Use Postman or curl to test the endpoints.

Sample:
curl -X POST http://localhost:5000/students \
-H "Content-Type: application/json" \
-d '{"name": "Karamjeet", "age": 21, "course": "CSE"}'
📂 Data Storage
All student records are stored in:

data.json
Example contents:
[
  {
    "id": 1719014873543,
    "name": "Karamjeet",
    "age": 21,
    "course": "CSE"
  }
]

✨ Author
Created with ❤️ by Karamjeet Kaur
🔗https://github.com/KaramjeetKaur1428/
