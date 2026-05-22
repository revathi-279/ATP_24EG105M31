# 1️Generate `package.json`

The first step in building the backend project is generating the `package.json` file.
This file acts as the central configuration file for the Node.js application.

It contains:

* Project metadata
* Installed dependencies
* Scripts
* Project version
* Entry point file

By generating `package.json`, the project becomes manageable and scalable because all required packages and configurations are tracked in one place.

This step also prepares the application for installing important backend libraries such as:

* Express.js
* Mongoose
* JWT
* bcrypt
* dotenv

The file helps maintain consistency when the project is shared with teammates because everyone can install the same dependencies easily.

---

#  Create `.env` File

The `.env` file is used to store environment variables and sensitive project configurations.

Instead of writing sensitive data directly inside source code, they are stored securely inside this file.

Typical values stored inside `.env` include:

* Port number
* Database connection URL
* JWT secret key
* API keys

This approach improves:

* Security
* Code organization
* Flexibility between development and production environments

For example, if the application moves from local development to cloud deployment, only the environment variables need to be changed instead of modifying the entire codebase.

The `.env` file is generally ignored from GitHub using `.gitignore` to prevent exposing private credentials publicly.

---

#  Create Express App & Assign Port Number

Express.js is used to create the backend server of the application.

The Express application acts as the central system that:

* Receives requests from clients
* Processes data
* Sends responses
* Handles APIs

After creating the Express app, a port number is assigned so the server can listen for incoming requests.

The port acts like a communication channel between:

* Frontend and backend
* Browser and server
* API clients and application

The application typically reads the port number from the `.env` file to allow flexible configuration.

Middleware is also configured during this stage to handle:

* JSON request parsing
* Cookies
* CORS
* Authentication-related processing

Once configured, the server starts running and becomes ready to accept API requests.

---

# Connect With Database

The backend application needs a database to permanently store application data.

MongoDB is used as the database system, while Mongoose acts as the ODM (Object Data Modeling) library that connects Node.js with MongoDB.

Database connection is one of the most important backend steps because all user and article information depends on it.

The connection process includes:

* Reading database URL from `.env`
* Connecting to MongoDB
* Handling successful connection
* Handling connection errors

Once connected successfully, the backend can:

* Store users
* Store articles
* Fetch records
* Update documents
* Delete data

Without database connectivity, the application would lose all data after the server stops.

---

# Define Schemas and Create Models

Schemas define how data should be structured inside the database.

Models are created from schemas and are used to interact with MongoDB collections.

This step ensures that all stored data follows a consistent structure.

---

# UserTypeSchema

The User schema manages all user-related information in the application.

It contains fields such as:

* First name
* Last name
* Email
* Password
* Role
* Profile image
* Active status

### Purpose of Each Field

### `firstName`

Stores the user's first name.

### `lastName`

Stores the user's surname or family name.

### `email`

Stores the email address of the user.

This field is marked as unique to ensure:

* No duplicate accounts
* Unique authentication identity

### `password`

Stores the encrypted password of the user.

Passwords are hashed before storage to improve security and protect user credentials.

### `role`

Defines the role of the user inside the system.

Examples:

* user
* admin
* editor

This field helps implement authorization and access control.

### `profileImageUrl`

Stores the profile image path or URL of the user.

### `isUserActive`

Used to check whether the user account is active or disabled.

Instead of permanently deleting users, this field allows soft deactivation.

---

## 📰 ArticleSchema

The Article schema manages all article-related information.

Each article belongs to a specific user through the author field.

### Purpose of Each Field

### `author`

Stores the reference to the user who created the article.

This creates a relationship between:

* Users
* Articles

### `title`

Stores the title of the article.

### `category`

Defines the category or type of article.

Examples:

* Technology
* Sports
* Education
* News

### `content`

Stores the main article content or body text.

### `comments`

Stores comments related to the article.

This field usually contains:

* User feedback
* Discussions
* Replies

### `isArticleActive`

Used to determine whether the article is active or removed.

This supports soft deletion instead of permanently deleting article data.

---

#  Implement APIs

APIs (Application Programming Interfaces) allow communication between frontend and backend systems.

The backend exposes multiple APIs to perform different operations.

These APIs follow REST architecture principles.

Main operations include:

* Creating data
* Reading data
* Updating data
* Deleting data

---

## Authentication APIs

Authentication APIs manage user access.

These include:

* Register API
* Login API
* Logout API

They help verify user identity and maintain secure sessions.

---

## Article APIs

Article APIs manage article operations such as:

* Creating articles
* Fetching articles
* Updating articles
* Deleting articles

These APIs interact directly with the Article model and database.

---

## API Workflow

The general API workflow is:

1. Client sends request
2. Route receives request
3. Controller processes business logic
4. Model interacts with database
5. Response returned to client

This architecture improves:

* Scalability
* Code organization
* Reusability
* Maintainability

---

# 7️Create Common API for Register, Login and Logout

Authentication is a critical part of backend development.

The application creates common APIs for:

* User registration
* User login
* User logout

These APIs work together to manage secure user authentication.

---

## Register API

The Register API is responsible for creating new users.

Main tasks include:

* Receiving user data
* Validating information
* Checking duplicate emails
* Hashing password
* Saving user to database
* Generating authentication token

This ensures secure account creation.

---

## Login API

The Login API authenticates existing users.

Main tasks include:

* Verifying email
* Comparing passwords
* Generating JWT token
* Creating authenticated session

JWT tokens are commonly stored in cookies for secure session management.

---

## Logout API

The Logout API removes the user's authentication token.

Its main purpose is:

* Ending user session
* Clearing stored token
* Preventing unauthorized access after logout

This improves overall application security.

---

# Final Summary

This backend system establishes the complete foundational structure required for a modern web application.

The project includes:

* Node.js backend setup
* Express server creation
* MongoDB database integration
* Schema and model design
* REST API implementation
* Authentication system
* JWT-based security

Together, these components form a scalable backend architecture suitable for MERN stack applications and real-world projects 🌱
