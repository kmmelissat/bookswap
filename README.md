# BookSwap API

A NestJS-based API for a book swapping platform where users can publish and discover books.

## Setup

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Configure PostgreSQL:

- Create a database named `bookswap`
- The default configuration uses:
  - Host: localhost
  - Port: 5432
  - Username: postgres
  - Password: (empty)
  - Database: bookswap

4. Start the application:

```bash
npm run start:dev
```

The API will be available at `http://localhost:3000`

## API Documentation

Once the application is running, visit `http://localhost:3000/api` for Swagger documentation.

### Authentication

#### Register a new user

```http
POST /auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123",
  "name": "John Doe"
}
```

#### Login

```http
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

Response includes a JWT token that must be used for authenticated requests.

### Books

#### Create a book (requires authentication)

```http
POST /books
Authorization: Bearer <your-jwt-token>
Content-Type: application/json

{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "description": "A story of the fabulously wealthy Jay Gatsby",
  "condition": "GOOD"
}
```

#### Get all books

```http
GET /books
```
