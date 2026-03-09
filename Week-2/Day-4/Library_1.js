/* Problem Statement: Library Book Management System
Objective : Create a Book class and use it to manage a collection of books in a library.
Requirements:
Create a Book class with the following:
Properties:
title (string)
author (string)
pages (number)
isAvailable (boolean, default: true)*/
class Book 
{
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
// 1.borrow() - Marks the book as not available
    borrow() {
        this.isAvailable = false
        return 'Book borrowed'
    }
// 2.returnBook() - Marks the book as available
    returnBook() {
        this.isAvailable = true
        return 'Book returned'
    }
// 3.getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
    getInfo() {
        console.log(`"${this.title} by ${this.author} (${this.pages} pages)"`)
    }
// 4.isLongBook() - Returns true if pages > 300, false otherwise 
    isLongBook() {
        if(this.pages > 300) return true
        else return false
    }
}
//Creating 5 different objects using a single class
const b1 = new Book('Onepiece','Eiichiro Oda',280)
const b2 = new Book('Ikigai','Hector Garcia',250)
const b3 = new Book('Atomic Habits','James Clear',320)
const b4 = new Book('Life of Pi','Yann Martel',350)
const b5 = new Book('Harry Potter','J.K.Rowling',280)
b1.getInfo()
console.log(b1.borrow())
console.log(b1.isAvailable)
b2.getInfo()
console.log(b2.borrow())
console.log(b2.isLongBook())
console.log(b1.returnBook())
console.log(b1.isAvailable)