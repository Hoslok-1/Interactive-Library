function openForm()
{
    document.getElementById("myForm").style.display = "block";
}
function closeForm()
{
    document.getElementById("myForm").style.display = "none";
}

title = document.getElementById('bookTitle');
author = document.getElementById('bookAuthor');
pages = document.getElementById('bookPages');
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
}

function displayCards()
{
    
}