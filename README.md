# 📚 Assignment Workflow & Submission Tracking System

## 🚀 Project Overview

This project is a backend system built using Node.js, Express, and MongoDB to manage assignments, submissions, and workflow lifecycle in an educational environment.

It allows instructors to create assignments and students to submit their work before deadlines.

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Postman (for API testing)

---

## 📁 Project Structure

```
assignment-tracker/
│
├── server.js
├── config/
│   └── db.js
├── models/
│   ├── Assignment.js
│   └── Submission.js
├── routes/
│   ├── assignmentRoutes.js
│   └── submissionRoutes.js
├── middleware/
│   └── logger.js
```

---

## ⚙️ Setup Instructions

1. Clone the repository:

```
git clone <your-repo-link>
cd assignment-tracker
```

2. Install dependencies:

```
npm install
```

3. Configure MongoDB Atlas:

* Create a cluster
* Create a database user
* Add IP: `0.0.0.0/0`

4. Update MongoDB connection string in `config/db.js`

5. Run the server:

```
npm run dev
```

---

## 📌 API Endpoints

### 🔹 Assignment APIs

| Method | Endpoint             | Description           |
| ------ | -------------------- | --------------------- |
| POST   | /api/assignments     | Create assignment     |
| GET    | /api/assignments     | Get all assignments   |
| GET    | /api/assignments/:id | Get single assignment |
| PUT    | /api/assignments/:id | Update assignment     |
| DELETE | /api/assignments/:id | Delete assignment     |

---

### 🔹 Submission APIs

| Method | Endpoint                       | Description       |
| ------ | ------------------------------ | ----------------- |
| POST   | /api/submissions/:assignmentId | Submit assignment |
| GET    | /api/submissions/:assignmentId | Get submissions   |

---

## 🔄 Workflow Logic

* Assignments are created with status **active**
* After due date → automatically marked **closed**
* Submissions are:

  * ✅ Allowed before deadline
  * ❌ Rejected after deadline

---

## 🧪 Testing

APIs are tested using Postman.

---

## 🎯 Features

* Assignment creation & management
* Submission tracking
* Deadline validation
* CRUD operations
* MongoDB data storage

---

## ⭐ Bonus (Optional)

* Filter assignments
* Prevent duplicate submissions
* Sort by due date


