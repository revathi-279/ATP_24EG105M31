/* Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)


  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise */

class Book {
    title;
    author;
    pages;
    isAvailable = true;

    constructor(title,author,pages)
    {
        this.title = title
        this.author = author
        this.pages = pages
    }
    borrow() {
      this.isAvailable = false
    }
    returnBook() {
        this.isAvailable = true
    }
    getInfo() {
        console.log(`"${this.title} by ${this.author} (${this.pages} pages)"`)
    }
    isLongBook() {
        if(this.pages > 300) return true
        else return false
    }
}
const b1 = new Book('Onepiece','Oda',350)
const b2 = new Book('Ikigai','James',250)
b1.getInfo()
b1.borrow()
console.log(b1.isAvailable)
