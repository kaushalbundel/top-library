// class based file for library

class Library {
  constructor() {
    this.books = [];
    this.initializeEventListners(); // should be available as soon as the Library is created
  }

  // static book class (inside a class) to insert books
  static Book = class {
    constructor(name, author, pages, read) {
      this.name = name;
      this.author = author;
      this.pages = pages;
      this.read = read;
    }
    // method to toggle the status of books and reshow the result
    toggleReading() {
      this.read = !this.read;
    }
  };

  addBook(name, author, pages, read) {
    const book = new Library.Book(name, author, pages, read); // why this is not used?
    this.books.push(book);
    this.displayBooks();
  }

  displayBooks() {
    const tabledata = document.getElementById("datatable");
    tabledata.innerHTML = "";
    this.books.forEach((book, index) => {
      // if some instance is getting called from inside of the class then this keyword is used
      datatable.innerHTML += `
  <tr>
  <td> ${book.name}</td>
  <td> ${book.author}</td>
  <td> ${book.pages}</td>
  <td> ${book.read ? "Yes" : "No"}</td>
  <td> <button onclick="library.deleteBook(${index})">Delete</button></td>
  <td> <button onclick="library.toggleReadStatus(${index})">Toggle</button></td>
  </tr>
  `;
    });
  }

  toggleReadStatus(index) {
    this.books[index].toggleReading();
    this.displayBooks();
  }

  deleteBook(index) {
    this.books.splice(index, 1);
    this.displayBooks();
  }

  initializeEventListners() {
    const showButton = document.getElementById("showDialog");
    const favDialog = document.getElementById("favDialog");
    const confirmBtn = document.getElementById("confirmBtn");
    //showing dialog modal
    showButton.addEventListener("click", () => {
      favDialog.showModal();
    });

    confirmBtn.addEventListener("click", (e) => {
      // to prevent the default behavior which is to submit the form
      e.preventDefault();

      const title = document.getElementById("title").value;
      const author = document.getElementById("author").value;
      const pages = document.getElementById("pages").value;
      const read = document.getElementById("read").checked;
      // adding values to the array using the object
      this.addBook(title, author, pages, read);

      this.displayBooks();

      document.querySelector("form").reset();
      favDialog.close();
    });

    const cancelBtn = document.querySelector('button[value="cancel"]');
    cancelBtn.addEventListener("click", () => {
      document.querySelector("form").reset();
      favDialog.close();
    });
  }
}

const library = new Library();
library.addBook("Hobbit", "JRRTolkien", 600, true);
