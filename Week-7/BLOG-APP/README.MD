# Blog Application – README.md

## Overview

A full-stack MERN Blog Application with role-based authentication for Users, Authors, and Admins.
The application allows authors to publish articles, users to read and comment on articles, and admins to manage platform content.

Built using:

* Frontend: React + TailwindCSS + Zustand
* Backend: Node.js + Express.js
* Database: MongoDB + Mongoose
* Authentication: JWT + Cookies
* Image Uploads: Cloudinary + Multer

# Features

## Authentication & Authorization

* JWT-based authentication
* Secure HTTP-only cookie handling
* Role-based access:
  * USER
  * AUTHOR
  * ADMIN
* Protected frontend routes
* Backend token verification middleware

## User Features

* Register/Login
* Upload profile image
* View all active articles
* Read full article
* Add comments to articles
* Logout functionality

## Author Features

* Create articles
* Edit articles
* Soft delete / restore articles
* View own articles
* Role protected dashboard


## Admin Features

* View all articles
* Block / unblock articles
* Admin-only dashboard

## Image Upload

* Cloudinary integration
* Multer memory storage
* JPG/PNG validation
* File size validation

# Tech Stack

## Frontend

* React
* React Router
* Axios
* Zustand
* TailwindCSS
* React Hook Form
* React Hot Toast

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* Multer
* Cloudinary
* Cookie Parser
* CORS

# Application Overview

This Blog Application is a full-stack MERN platform designed to support technical content publishing with secure role-based access control. The system is built around three different user roles — User, Author, and Admin — where each role has its own permissions, dashboard experience, and workflows.

The application focuses on clean UI design, secure authentication, scalable backend architecture, and modern frontend state management.


# Core Functionalities

## Multi-Role Authentication System

The platform supports three independent roles:

### USER

Regular users can:

* Register and login securely
* Upload profile images
* Browse all active articles
* Read full article content
* Add comments to articles
* Maintain authenticated sessions using cookies

### AUTHOR

Authors are content creators on the platform.

They can:

* Create new articles
* Edit existing articles
* Soft delete articles
* Restore deleted articles
* View all their published content
* Manage content through a dedicated author dashboard

### ADMIN

Admins are responsible for platform moderation.

They can:

* Access the admin dashboard
* View all articles from every author
* Block inappropriate articles
* Unblock articles when required
* Moderate platform content
# Authentication & Authorization

The application uses JWT-based authentication with HTTP-only cookies.

Authentication flow includes:

* User login using email and password
* JWT token generation on successful login
* Token storage in cookies
* Automatic authentication restoration on refresh
* Protected routes for secure access
* Backend middleware verification
* Role validation before accessing restricted APIs

The authorization system ensures:

* Users cannot access author/admin routes
* Authors cannot access admin functionalities
* Unauthorized users are redirected safely

# Article Management System

The article system is one of the core modules of the platform.

Each article contains:

* Title
* Category
* Content
* Author details
* Comments
* Active/Inactive status
* Created & updated timestamps

Authors can manage articles completely from their dashboard.

Instead of permanently deleting articles, the application uses a soft delete mechanism:

* `isArticleActive = true` → visible article
* `isArticleActive = false` → hidden/deleted article

This approach improves:

* Data safety
* Recovery support
* Content moderation
* Admin control


# Comment System

Users can interact with articles through comments.

The comment system supports:

* User-linked comments
* Real-time article updates after commenting
* Timestamp tracking
* Dynamic rendering of comments

Each comment stores:

* User reference
* Comment content
* Creation timestamP

# Profile Image Upload System

The application integrates Cloudinary for cloud image storage.

Image upload flow:

1. User selects profile image
2. Multer temporarily stores image in memory
3. Buffer is sent to Cloudinary
4. Cloudinary uploads image securely
5. Image URL is stored in MongoDB

Validation features include:

* JPG/PNG validation
* Maximum file size restrictions
* Secure upload handling
* Memory-based upload optimization


# Frontend Architecture

The frontend is developed using React and follows a component-based architecture.

Major frontend features:

* Reusable UI components
* Protected routes
* Zustand state management
* React Hook Form validation
* Dynamic role-based navigation
* Axios API integration
* Toast notifications
* Responsive layouts using TailwindCSS

The application dynamically updates the interface based on user role and authentication state.

# State Management

The application uses Zustand for global authentication state management.

The auth store manages:

* Current logged-in user
* Authentication status
* Login functionality
* Logout functionality
* Authentication restoration
* Loading states
* Error handling

This allows seamless authentication persistence across page refreshes.

# Database Design

MongoDB is used as the primary database.

The application includes two major collections:

## Users Collection

Stores:

* User information
* Email credentials
* Role details
* Profile image URL
* Account activity status

## Articles Collection

Stores:

* Article details
* Author reference
* Embedded comments
* Article status
* Timestamps

Mongoose schemas enforce:

* Strict validation
* Required fields
* Enum-based role restrictions
* Relationship mapping using ObjectId references

# Error Handling

The backend includes centralized error handling middleware.

Handled errors include:

* Validation errors
* Duplicate email errors
* Invalid object IDs
* Unauthorized access
* Invalid tokens
* Server-side failures

Frontend error handling includes:

* API error rendering
* Toast notifications
* Loading states
* Unauthorized redirections

# Security Features

The application includes multiple security mechanisms:

* JWT authentication
* Protected backend APIs
* Role-based authorization
* Cookie-based session handling
* Multer file validation
* Strict mongoose schemas
* File size restrictions
* Invalid route handling
* CORS configuration


# User Experience Features

The UI focuses on modern clean design and usability.

Features include:

* Responsive layouts
* Dynamic dashboards
* Live loading indicators
* Toast notifications
* Clean article cards
* Comment rendering
* Profile avatars
* Smooth navigation
* Role-specific navigation menus

# Deployment

The application is fully deployed online.

## Frontend Hosting

The frontend is deployed using Vercel.

## Backend Hosting

The backend server is deployed using Render.

## Database Hosting

MongoDB Atlas is used for cloud database hosting.

# Security Features

* JWT authentication
* Password hashing
* Protected routes
* Role authorization
* File type validation
* File size validation
* Secure cookies
* Strict mongoose schema validation

# Cloudinary Upload Flow

1. User uploads image
2. Multer stores file in memory
3. Buffer passed to Cloudinary
4. Cloudinary returns image URL
5. URL stored in MongoDB