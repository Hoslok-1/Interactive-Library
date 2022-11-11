let myLibrary = [];
let book;

document.getElementById('submitBtn').onclick = function addBookToLibrary(){
    book = document.getElementById('bookName').value
    page = document.getElementById('pages').value
    const bookObj = new Book(book,page)
    myLibrary.push(bookObj)
    console.log(myLibrary)
}
function Book(bookName,page)
{
    this.bookName = bookName;
    this.page = page;
    this.info = function(){
        return "This book's name is "+bookName+" and number of pages are "+page;
    }
}

