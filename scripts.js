let myLibrary = [];
let book;

document.getElementById('submitBtn').onclick = function addBookToLibrary(){
    book = document.getElementById('bookName').value
    page = document.getElementById('pages').value
    const bookObj = new Book(book,page)
    myLibrary.push(bookObj)
    console.log(myLibrary)
    displayBooks();
}

function Book(bookName,page)
{
    this.bookName = bookName;
    this.page = page;
    this.info = function(){
        return "This book's name is "+bookName+" and number of pages are "+page;
    }
}

function displayBooks()
{
    arrLength = myLibrary.length -1
    tempName = myLibrary[arrLength].bookName;
    tempPage = myLibrary[arrLength].page;
    switch(arrLength)
    {
        case 0:
            document.getElementById('book1-name').textContent = tempName;
            document.getElementById('book1-pages').textContent = tempPage;
            break;
        case 1:
            document.getElementById('book2-name').textContent = tempName;
            document.getElementById('book2-pages').textContent = tempPage;
            break;
        case 2:
            document.getElementById('book3-name').textContent = tempName;
            document.getElementById('book3-pages').textContent = tempPage;
            break;
        case 3:
            document.getElementById('book4-name').textContent = tempName;
            document.getElementById('book4-pages').textContent = tempPage;
            break;
        case 4:
            document.getElementById('book5-name').textContent = tempName;
            document.getElementById('book5-pages').textContent = tempPage;  
    }

}