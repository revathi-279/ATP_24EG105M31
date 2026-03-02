
  /*1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.


  2. Perform the following operations:

      i. Display info of all books
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
    if(this.pages > 300) return true
    else return false
}
listBooks() {
    if(this.isAvailable === true)
        console.log(this.title)
}
}
b1 = new Books('Gita','Krishna',1000)
b2 = new Books('Mahabharat','Vyasa',2000)
b3 = new Books('Focus','James',150)
b4 = new Books('Mindset','John',200)
b5 = new Book('Onepiece','Oda',250)