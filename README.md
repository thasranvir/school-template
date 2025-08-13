# School Portal (Angular + Spring Boot + Kafka + MongoDB)

Quickstart

- Prereqs: Docker, Docker Compose, Node 18+, Java 17+

Backend

- Configure env in `school-portal-backend/src/main/resources/application.yml` (defaults OK with compose)
- Run with Docker Compose (recommended):
  - `docker compose up -d --build`
  - Backend: http://localhost:8080
  - Kafka: localhost:9092, MongoDB: localhost:27017
- Or run locally:
  - `cd school-portal-backend && ./mvnw spring-boot:run`

Frontend

- `cd school-portal-frontend`
- `npm install`
- `npm start`
- App: http://localhost:4200 (proxied to backend at /api)

Auth endpoint

- POST /api/auth/login { email, password }
- Seed user: admin@school.local / admin123

Notes

- Login publishes a Kafka event to topic `user.login.events`.
- MongoDB stores users in `schooldb.users`.