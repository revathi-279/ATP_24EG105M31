# Frontend Development Weekly README

# Week Overview

This week focused on strengthening frontend development fundamentals and modern UI development practices using:

- HTML5
- CSS3
- Responsive Web Design
- Flexbox
- CSS Grid
- Tailwind CSS
- React.js
- JSX
- Component-Based Architecture

The assignments covered:
- Table structures
- Card layouts
- Marketing webpages
- Responsive layouts
- Tailwind CSS practice
- React reusable components
- Dynamic rendering using arrays and props

The overall goal was to improve webpage structuring, styling, responsiveness, and React component design.

---

# Assignment 1

# 1. Table Layout Projects

This assignment focused on mastering HTML table structures and styling techniques using CSS.

---

## Project 1 — Basic Table Layout

### Files
- `table1.html`
- `table1.css`

### Objective
To create a structured table layout using:
- `colspan`
- table borders
- spacing and alignment

### Concepts Used
- HTML `<table>`
- `<thead>`
- `<tbody>`
- `<tr>`
- `<th>`
- `<td>`
- CSS border styling
- `border-collapse`
- spacing using `padding`

### Features
- Main title section
- Subtitle rows
- Multiple item rows
- Footer-style sub subtitle section
- Center aligned table

### CSS Features
```css
border-collapse: collapse;
padding: 10px;
margin: auto;
```

### Learning Outcomes
- Learned how to structure complex tables
- Understood table alignment and spacing
- Practiced merging columns using `colspan`

---

## Project 2 — Student Marks Table

### Files
- `table2.html`
- `table2.css`

### Objective
To design a student grading table using both:
- `rowspan`
- `colspan`

### Concepts Used
- Nested table structures
- Subject-wise grading
- Row grouping
- Cell alignment

### Features
- Biology, Chemistry, and Physics grades
- Practical and Theory rows
- Student comparison table
- Organized academic result layout

### CSS Features
```css
text-align: center;
border-collapse: collapse;
```

### Learning Outcomes
- Understood row grouping using `rowspan`
- Improved table readability using alignment
- Practiced structured academic data representation

---

## Project 3 — Users Table UI

### Files
- `table3.html`
- `table3.css`

### Objective
To create a modern user information table with images and styled rows.

### Concepts Used
- Image embedding
- Profile table design
- Modern UI styling
- CSS background colors

### Features
- User profile pictures
- Name, email, phone, and comments
- Styled table headers
- Circular profile images

### CSS Features
```css
border-radius: 50%;
background: #a8dede;
```

### Learning Outcomes
- Learned how to display images inside tables
- Practiced modern table UI styling
- Improved CSS design understanding

---

# 2. Cards Layout Project

### Files
- `cards.html`
- `cards.css`

---

## Objective
To create a travel-themed card layout webpage using Flexbox.

---

## Concepts Used
- Flexbox
- Navigation bar design
- Card-based UI
- Image styling
- Box shadows
- Responsive spacing

---

## Features

### Navigation Bar
Contains:
- Home
- Places
- Bucketlist
- About

### Card Sections
Four travel destination cards:
1. Aurora Borealis
2. Paris
3. Maldives Bioluminescence
4. Swiss Alps

Each card contains:
- Circular image
- Heading
- Subtitle
- Description paragraph

---

## CSS Features

### Flexbox Layout
```css
display: flex;
justify-content: center;
gap: 80px;
```

### Card Styling
```css
box-shadow: 0px 4px 10px rgb(100, 108, 108);
border-radius: 10%;
```

### Circular Images
```css
border-radius: 50%;
```

---

## Learning Outcomes
- Learned Flexbox layouts
- Designed reusable card structures
- Improved UI styling techniques
- Practiced spacing and alignment

---

# Assignment 3

# Responsive Marketing Website

### Files
- `layout.html`
- `style.css`

---

## Objective
To build a responsive marketing/informational landing page.

---

## Concepts Used
- Hero Sections
- Responsive layouts
- Media Queries
- Flexbox
- Reusable button styling

---

## Website Structure

### Hero Section
Contains:
- Main heading
- Introductory paragraph
- Call-to-action button

### Content Cards
Three informational sections with:
- Heading
- Description
- Buttons

### Footer
Simple copyright footer

---

## CSS Features

### Responsive Typography
```css
font-size: 64px;
```

### Media Queries
```css
@media (max-width: 768px)
```

### Responsive Flex Layout
```css
flex-wrap: wrap;
```

---

## Learning Outcomes
- Learned responsive webpage design
- Practiced media queries
- Improved section organization
- Built reusable button styles

---

# Tailwind CSS Projects

# 1. Best City Guide

### File
- `1.html`

---

## Objective
To create a responsive city guide webpage using Tailwind CSS utility classes.

---

## Concepts Used
- Tailwind utility-first styling
- Responsive grid systems
- Flexbox
- Typography utilities
- Image styling

---

## Features

### Navbar
Contains:
- Website title
- Navigation menu items

### Hero Section
Contains:
- Circular city image
- Main heading
- Supporting text

### Information Grid
Three content sections:
1. Welcome
2. Great Food
3. How to Get Here

---

## Tailwind Features Used

### Responsive Grid
```html
grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3
```

### Flexbox Utilities
```html
flex justify-between items-center
```

### Typography
```html
text-2xl font-semibold
```

---

## Learning Outcomes
- Learned utility-first CSS styling
- Improved responsive design skills
- Practiced Tailwind layout systems

---

# 2. Libertarians Layout

### File
- `2.html`

---

## Objective
To create a themed responsive webpage using Tailwind CSS.

---

## Concepts Used
- Responsive layouts
- Tailwind grid system
- Utility-based styling
- Flexbox alignment

---

## Features

### Navigation Section
Simple breadcrumb-style navbar.

### Main Hero Area
Contains:
- Large heading
- Informational content
- Image section

### Information Cards
Three themed informational sections:
1. Roads discussion
2. Taxation topic
3. Liberty explanation

---

## Tailwind Features Used

### Grid Layout
```html
grid sm:grid-cols-2 md:grid-cols-3
```

### Background Utilities
```html
bg-red-950
bg-red-600
```

### Spacing Utilities
```html
px-10 py-5
```

---

## Learning Outcomes
- Improved Tailwind CSS understanding
- Practiced responsive UI creation
- Built themed layouts efficiently

---

# React App 1

# Product Listing Application

### Files
- `App.jsx`
- `Product.jsx`

---

## Objective
To build a reusable product listing interface using React components.

---

## Concepts Used
- Functional Components
- Props
- JSX
- Dynamic rendering
- Array mapping
- Tailwind CSS

---

## Application Structure

### `App.jsx`
Contains:
- Product data array
- Grid layout
- Dynamic rendering using `.map()`

### `Product.jsx`
Reusable component that displays:
- Product image
- Title
- Category
- Rating
- Price

---

## React Features Used

### Props Destructuring
```javascript
const { productObj } = props
```

### Dynamic Rendering
```javascript
products.map((product) => (
  <Product productObj={product} />
))
```

---

## Tailwind Features Used

### Responsive Grid
```html
grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3
```

### Gradient Background
```html
bg-gradient-to-tr from-blue-50 via-blue-100 to-white
```

---

## Learning Outcomes
- Learned reusable component design
- Understood props passing
- Practiced rendering lists dynamically
- Improved React component structuring

---

# React App 2

# User Management Interface

### Files
- `App.jsx`
- `Navbar.jsx`
- `Footer.jsx`
- `User.jsx`
- `UsersList.jsx`

---

## Objective
To create a multi-component React application with reusable UI sections.

---

## Components Overview

### `Navbar.jsx`
Contains:
- Logo
- Navigation links

### `Footer.jsx`
Contains:
- About section
- Privacy policy
- Careers
- FAQ links

### `User.jsx`
Reusable user card component displaying:
- User image
- User name
- Email address

### `UsersList.jsx`
Contains:
- User data array
- Dynamic rendering of user cards

### `App.jsx`
Main application structure integrating:
- Navbar
- UsersList
- Footer

---

## React Features Used

### Props Passing
```javascript
<User user={userObj} />
```

### Dynamic Rendering
```javascript
users.map(userObj => <User user={userObj} />)
```

### Component Composition
```javascript
<Navbar />
<UsersList />
<Footer />
```

---

## Tailwind Features Used

### Responsive Grid
```html
grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3
```

### Card Styling
```html
shadow-2xl rounded-2xl
```

### Layout Utilities
```html
flex justify-between
```

---

## Learning Outcomes
- Learned React component architecture
- Practiced reusable UI design
- Understood component composition
- Improved Tailwind styling skills

---

# Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Webpage Structure |
| CSS3 | Styling |
| Flexbox | Layout Alignment |
| CSS Grid | Responsive Layouts |
| Tailwind CSS | Utility-Based Styling |
| React.js | Component-Based UI |
| JSX | React Syntax |
| Media Queries | Responsive Design |

---

# Overall Learning Outcomes

By completing these assignments and projects, the following skills were improved:

- Building structured webpages
- Styling modern user interfaces
- Responsive web design
- Flexbox and Grid layouts
- Tailwind CSS utility usage
- React functional components
- Props handling
- Dynamic rendering
- Reusable component creation
- UI organization and spacing

---

# Conclusion

This week provided strong practical experience in frontend development using both traditional web technologies and modern frameworks.

The assignments improved:
- HTML structuring skills
- CSS styling techniques
- Responsive design understanding
- Tailwind CSS proficiency
- React component architecture knowledge

These projects also strengthened the ability to build reusable, scalable, and responsive user interfaces suitable for modern web applications.
