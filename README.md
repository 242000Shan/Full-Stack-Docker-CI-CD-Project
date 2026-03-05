# 🚀 Full Stack Docker CI/CD Project

A **Full Stack Web Application** deployed using **Docker, Docker Compose, GitHub Actions CI/CD, and AWS EC2**.
This project demonstrates how to build, containerize, and automatically deploy a full stack application using a **modern DevOps workflow**.

Whenever new code is pushed to the **main branch**, the CI/CD pipeline automatically:

1. Builds Docker images
2. Pushes images to DockerHub
3. Deploys the updated containers to an AWS EC2 server

---

# 📌 Project Architecture

Frontend → Backend API → MongoDB
GitHub → GitHub Actions → DockerHub → AWS EC2

The frontend sends requests to the backend API, which stores and retrieves user data from MongoDB.

---

# 🗂️ Project Structure

```
Full-Stack-Docker-CI-CD-Project/

├── frontend/
│   ├── index.html
│   └── Dockerfile
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── Dockerfile
│
├── docker-compose.yml
│
└── .github/
    └── workflows/
        └── deploy.yml
```

---

# ⚙️ Technologies Used

* **Frontend:** HTML, JavaScript
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Containerization:** Docker
* **Container Orchestration:** Docker Compose
* **CI/CD:** GitHub Actions
* **Cloud Platform:** AWS EC2

---

# 🖥️ Application Features

* Add user names from the frontend
* Store user data in MongoDB
* Retrieve and display users dynamically
* Fully containerized application
* Automated CI/CD deployment pipeline

---

# 🐳 Running the Application Locally

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/Full-Stack-Docker-CI-CD-Project.git
cd Full-Stack-Docker-CI-CD-Project
```

### 2️⃣ Start the containers

```
docker-compose up --build
```

### 3️⃣ Open the application

```
http://localhost
```

---

# ☁️ AWS Deployment

The application is deployed on an **AWS EC2 instance** using Docker.

### Steps

1. Launch EC2 instance (Ubuntu)
2. Install Docker and Docker Compose
3. Clone the repository
4. Start the application using Docker Compose

```
docker-compose up -d
```

---

# 🔄 CI/CD Pipeline

The project includes a **GitHub Actions pipeline** that automates deployment.

### Pipeline Workflow

1️⃣ Developer pushes code to GitHub

2️⃣ GitHub Actions pipeline starts

3️⃣ Docker images are built

4️⃣ Images are pushed to DockerHub

5️⃣ Pipeline connects to AWS EC2 using SSH

6️⃣ Containers are updated using Docker Compose

---

# 🔐 GitHub Secrets

The following secrets are required for CI/CD:

```
DOCKER_USERNAME
DOCKER_PASSWORD
EC2_HOST
EC2_USER
EC2_SSH_KEY
```

These allow secure authentication with **DockerHub and the EC2 server**.

---

# 📊 Application Workflow

1. User enters a name in the frontend
2. Frontend sends a request to the backend API
3. Backend stores the name in MongoDB
4. Backend returns the updated user list
5. Frontend displays the users dynamically

---

# 🎯 Learning Outcomes

This project demonstrates:

* Full Stack application deployment
* Docker containerization
* Multi-container applications using Docker Compose
* CI/CD automation with GitHub Actions
* Cloud deployment on AWS EC2
* Backend API development with Node.js
* Database integration with MongoDB

---

# 🔮 Future Improvements

* Add authentication system
* Implement HTTPS using Nginx
* Add monitoring with Prometheus and Grafana
* Deploy using Kubernetes
* Use managed database services like MongoDB Atlas or AWS RDS

---

# 👩‍💻 Author

**Shanmuga Priya**

DevOps | Cloud | Full Stack Projects

---
