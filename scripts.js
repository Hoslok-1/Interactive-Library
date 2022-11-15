
function openForm()
{
    document.getElementById("myForm").style.display = "block";
}
function closeForm()
{
    document.getElementById("myForm").style.display = "none";
}


let title = document.getElementById('bookTitle');
let author = document.getElementById('bookAuthor');
let pages = document.getElementById('bookPages');
let grid = document.getElementById('grid-container');
document.getElementById('submitBtn').addEventListener('click', addBookToLibrary)


let myLibrary = [];

function Book(title,author,pages)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
}
function addBookToLibrary()
{
    const bookObj = new Book(title.value,author.value,pages.value)
    myLibrary.push(bookObj);
    console.log(myLibrary)
    displayCards(bookObj);
    closeForm();
}

function displayCards(book)
{
    const gridItems = document.createElement('div')
    const card = document.createElement('div')
    const bookTitle = document.createElement('h5')
    const bookAuthor = document.createElement('h6')
    const pages = document.createElement('h6')

    gridItems.classList.add("grid-item")
    card.classList.add("card");

    bookTitle.textContent = `Book Name:${book.title}`;
    bookAuthor.textContent = `Book Author:${book.author}`;
    pages.textContent = `Pages:${book.pages}`

    grid.appendChild(gridItems);
    gridItems.appendChild(card);
    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(pages);
}

