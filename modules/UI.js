import {
  title, author, displayContentContainer, errorMessage,
} from './variables.js';

export default class AwesomeBook {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.bookArray = JSON.parse(localStorage.getItem('books')) || [];
    this.displayBook();
  }

  displayBook = () => {
    displayContentContainer.innerHTML = `
      <h1>Book Store</h1>
      ${this.bookArray
      .map(
        (book, index) => `
          <div class="show-added-books">
          <div class="user-input">
          <div class="input-div">
          <h3 class="input-value">"${book.title}"</h3>
          <h3 class="input-value"> by ${book.author}</h3>
          </div>
          <div class="detele-btn-div">
          <button class="delete-btn" id=${index}>Remove</button>
          </div>
          </div>
          </div>
        `,
      )
      .join('')}
        `;
  }

   addAwesomeBook = () => {
     if ((title.value === '') || (author.value === '')) {
       errorMessage.style.display = 'block';
     } else {
       errorMessage.style.display = 'none';
       const newBook = new AwesomeBook(title.value, author.value);
       this.bookArray.push(newBook);
       localStorage.setItem('books', JSON.stringify(this.bookArray));
       this.displayBook();
     }
   }

  removeAwesomeBook = (event) => {
    if (event.target.matches('button')) {
      this.bookArray.splice(event.target.id, 1);
      localStorage.setItem('books', JSON.stringify(this.bookArray));
      this.displayBook();
    }
  }
}

export const bookInput = new AwesomeBook();