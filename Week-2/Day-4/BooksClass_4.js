/*1. Create at least 5 book objects using the class:
Example: "Harry Potter", "1984", "The Hobbit", etc.
2. Perform the following operations:

ii. Borrow 2 books and show their availability status
iii. Return 1 book and show updated status
iv. Count how many books are "long books" (more than 300 pages)
v. List all available books*/

class Books {
    title;
    isAvailable = true;
    pages;
    
    constructor(title,pages)
    {
        this.title = title
        this.pages = pages
    }
    display() {
        return this.title
    }
    borrow() {
        this.isAvailable = false
    }
    return() {
        this.isAvailable = true
    }
    isLongBook() {
        if(this.pages > 300) 
            return true
        else return false
    }
    listBooks() {
        if(this.isAvailable === true)
            console.log(this.title)
    }
}

b1 = new Books('Harry Potter',700)
b2 = new Books('The Alchemist',200)
b3 = new Books('Focus',150)
b4 = new Books('Mindset',200)
b5 = new Books('Onepiece',250)

//Display info of all books
let books = [b1,b2,b3,b4,b5]
for ( let book of books)
    console.log(book)

//Borrow 2 books and show their availability status
console.log(b3.title,` is borrowed`)
b3.borrow()
console.log(b5.title,` is borrowed`)
b5.borrow()

//Return 1 book and show updated status
b3.return()
console.log(b3.title,` is returned`)

//Count how many books are "long books" (more than 300 pages)
let longBooks = books.reduce((count,bookObj)=> {
    if(bookObj.isLongBook())
        count++
    return count
},0)
console.log(`Number of long books are ${longBooks}`)

//List all available books
let availableBooks = books.filter(bookObj => bookObj.isAvailable === true)
console.log(`The available books are:`)
for(let book of availableBooks)
    console.log(book.title)