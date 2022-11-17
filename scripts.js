let title = document.getElementById('bookTitle');
let author = document.getElementById('bookAuthor');
let pages = document.getElementById('bookPages');
let readStatus = document.getElementById('readStatus');
let grid = document.getElementById('grid-container');

function openForm()
{
    document.getElementById("myForm").style.display = "block";
}
function closeForm()
{
    title.value = ""
    author.value = ""
    pages.value = ""
    document.getElementById("myForm").style.display = "none";
}




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
    console.log(title)
    //document.getElementById(`bookTitle`).value = ``
    closeForm();
}

function displayCards(book)
{
    readDecision = readStatus.checked
    const gridItems = document.createElement('div')
    const card = document.createElement('div')
    const bookTitle = document.createElement('h5')
    const bookAuthor = document.createElement('h5')
    const pages = document.createElement('h5')
    const deleteBtn = document.createElement('button')
    const readStatusBtn = document.createElement('button')

    gridItems.classList.add("grid-item")
    card.classList.add("card");
    deleteBtn.classList.add("deleteBtn")
    readStatusBtn.classList.add("readStatus")

    bookTitle.textContent = `Name:${book.title}`;
    bookAuthor.textContent = `Author:${book.author}`;
    pages.textContent = `Pages:${book.pages}`
    deleteBtn.textContent = "🗑️"
    if(readDecision)
    {readStatusBtn.textContent="Read"}
    else{readStatusBtn.textContent="Not Read"}
    
    grid.appendChild(gridItems);
    gridItems.appendChild(card);
    card.appendChild(deleteBtn)
    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(pages);
    card.appendChild(readStatusBtn)

    deleteBtn.addEventListener('click',()=>{
        let tempTitle = `${book.title}`
        let obj = myLibrary.find(book => book.title === tempTitle);
        let index = myLibrary.indexOf(obj);
        console.log(index);

        const children = document.getElementById('grid-container').children
        console.log(children);

        const deleteChild = children.item(index);
        console.log(deleteChild);
        deleteChild.remove();
        myLibrary.pop(myLibrary[index])
        console.log(myLibrary)
    })

    readStatusBtn.addEventListener('click',()=>{
        if (readDecision)
        {readStatusBtn.textContent = "Not Read"; readDecision = 0}
        else{readStatusBtn.textContent = "Read";readDecision = 1}
    })
    
}


