// array to store books
const myLibrary = [];

// object to store book instances
function Book(name, author, pages, read) {
  (this.name = name),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

//function created on the prototype
Book.prototype.toggleReading = function () {
  this.read = !this.read;
};

// function to add books
function addBookToLibrary(name, author, pages, read) {
  name = new Book(name, author, pages, read);
  myLibrary.push(name);
}

addBookToLibrary("Hobbit", "J R R Tolkien", 300, true);

//displaying data on html
function displayBooks() {
  const tabledata = document.getElementById("datatable");
  tabledata.innerHTML = "";
  myLibrary.forEach((book, index) => {
    datatable.innerHTML += `
  <tr>
  <td> ${book.name}</td>
  <td> ${book.author}</td>
  <td> ${book.pages}</td>
  <td> ${book.read ? "Yes" : "No"}</td>
  <td> <button onclick="deleteBook(${index})">Delete</button></td>
  <td> <button onclick="toggleReadStatus(${index})">Toggle</button></td>
  </tr>
  `;
  });
}

//displaying the modal, storing values and pushing the values in the object
//showing modal

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
  addBookToLibrary(title, author, pages, read);

  displayBooks();

  document.querySelector("form").reset();
  favDialog.close();
});

const cancelBtn = document.querySelector('button[value="cancel"]');
cancelBtn.addEventListener("click", () => {
  document.querySelector("form").reset();
  favDialog.close();
});

// function to delete the button
function deleteBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

//function to toggle read books
function toggleReadStatus(index) {
  myLibrary[index].toggleReading();
  displayBooks();
}

displayBooks();
