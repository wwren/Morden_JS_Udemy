class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  // Add book
  addBookToList(book) {
    const bookList = document.querySelector('#book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `
    bookList.appendChild(row);
  }

  // Clear inputs
  clearInput() {
    document.querySelectorAll('input').forEach(ele => ele.value = '');
  }

  // Show alert
  showAlert(message, classname) {
    const alert = document.createElement('div');
    alert.className = classname;
    const text = document.createTextNode(message);
    alert.appendChild(text);
    
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(alert, form);
  
    setTimeout(() => {
      document.querySelector(`.${classname}`).remove();
    }, 3000
    );
  }

  // Delete message
  deleteBookFromList(target) {
    if (target.className === 'delete') {
      target.parentNode.parentNode.remove();
    }
  }
}


class Storage {
  static getBooks() {
    let books
    return localStorage.getItem('books') === null ? books = [] : books = JSON.parse(localStorage.getItem('books'));
  }

  static displayBooks() {
    const books = Storage.getBooks();
    
    let title, author, isbn;
    books.forEach(book => {
      title = book.title;
      author = book.author;
      isbn = book.isbn;
      book = new Book(title, author, isbn);
     
      ui.addBookToList(book);
    })
    
  }

  static clearBooks(target) {
    if (target.className === 'delete') {
      const parent = target.parentNode.parentNode;
      const childrenList = parent.children;
      const isbn = childrenList[2].innerHTML;

      const books = Storage.getBooks();
      books.forEach((book, idx) => {
        if (book.isbn === isbn) {
          books.splice(idx, 1);
        }
      })
      
      
      localStorage.setItem('books', JSON.stringify(books));
    }
  }

  static addBooks(book) {
    const books = Storage.getBooks();

    books.push(book);

    localStorage.setItem('books', JSON.stringify(books));
  }
}


// construct a ui instance
ui = new UI();

// event listener for add book
document.querySelector('#book-form').addEventListener('submit', createBookObject)

// event listener for delete book
document.querySelector('#book-list').addEventListener('click', deleteBookObject);

//when screenload, add data from localStorage to ui
document.addEventListener('DOMContentLoaded', Storage.displayBooks);

function createBookObject(e) {
  // construct a book instance
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const isbn = document.querySelector('#isbn');
  book = new Book (title.value, author.value, isbn.value);

  // validation 
  if (title.value == '' || author.value == '' || isbn.value == '') {
    ui.showAlert('Please enter correct value!', 'error');
  } else {
    // add book instance to bookList  
    ui.addBookToList(book);
    // also add book to locakStorage
    Storage.addBooks(book);

    // show success
    ui.showAlert('Book Added!', 'success');
    //clear all input value
    ui.clearInput();
  }
  
  console.log(ui);

  e.preventDefault();
}

function deleteBookObject(e) {
  // delete the book from localStorage
  Storage.clearBooks(e.target);

  // delete the book from ui 
  ui.deleteBookFromList(e.target);
  ui.showAlert('Book Deleted!', 'success');
  
 
  
}
