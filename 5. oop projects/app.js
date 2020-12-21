// book constructor
function Book (title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI constructor
function UI () {}

UI.prototype.addBookToList = function(book) {
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

UI.prototype.clearInput = function() {
  document.querySelectorAll('input').forEach(ele => ele.value = '');
}

UI.prototype.showAlert = function(message, classname) {
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

UI.prototype.deleteBookFromList = function(target) {
  if (target.className === 'delete') {
    target.parentNode.parentNode.remove();
  }
}

// construct a ui instance
ui = new UI();

// event listener for add book
document.querySelector('#book-form').addEventListener('submit', createBookObject)

// event listener for delete book
document.querySelector('#book-list').addEventListener('click', deleteBookObject);

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
    // show success
    ui.showAlert('Book Added!', 'success');
    //clear all input value
    ui.clearInput();
  }
  
  console.log(ui);

  e.preventDefault();
}

function deleteBookObject(e) {
  // console.log(e.target);
  ui.deleteBookFromList(e.target);
  ui.showAlert('Book Deleted!', 'success');
}
