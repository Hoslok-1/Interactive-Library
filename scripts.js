let myLibrary = [];
let book;
let readFlag = 0;

document.getElementById('submitBtn').onclick = function addBookToLibrary(){
    book = document.getElementById('bookName').value
    page = document.getElementById('pages').value
    author = document.getElementById('author').value
    readStatus = document.getElementById('readStatus')
    const bookObj = new Book(book,page,author,readStatus)

    myLibrary.push(bookObj)
    console.log(myLibrary)
    console.log(readStatus.checked)
    displayBooks();
}

function Book(bookName,page,author,readStatus)
{
    this.bookName = bookName;
    this.page = page;
    this.author = author
    this.readStatus = readStatus
    this.info = function(){
        return "This book's name is "+bookName+" and number of pages are "+page;
    }
}

function displayBooks()
{
    arrLength = myLibrary.length -1
    tempName = myLibrary[arrLength].bookName;
    tempPage = myLibrary[arrLength].page;
    tempAuthor = myLibrary[arrLength].author
    tempStatus = myLibrary[arrLength].readStatus
    if(tempStatus.checked)
    {
        readFlag = 1;
    }
    switch(arrLength)
    {
        case 0:
            console.log(readFlag)
            document.getElementById('book1-name').textContent = tempName;
            document.getElementById('book1-pages').textContent = tempPage;
            document.getElementById('book1-author').textContent = tempAuthor
            if(readFlag!=0){document.getElementById('readStatusBtn1').textContent = "Read";readFlag=0}
            else if(readFlag == 0)
            {document.getElementById('readStatusBtn1').textContent = "Not Read";readFlag=0}
            break;
        case 1:
            document.getElementById('book2-name').textContent = tempName;
            document.getElementById('book2-pages').textContent = tempPage;
            document.getElementById('book2-author').textContent = tempAuthor
            if(readFlag!=0){document.getElementById('readStatusBtn2').textContent = "Read";readFlag=0}
            else if(readFlag == 0)
            {document.getElementById('readStatusBtn2').textContent = "Not Read";readFlag=0}
            break;
        case 2:
            document.getElementById('book3-name').textContent = tempName;
            document.getElementById('book3-pages').textContent = tempPage;
            document.getElementById('book3-author').textContent = tempAuthor
            break;
        case 3:
            document.getElementById('book4-name').textContent = tempName;
            document.getElementById('book4-pages').textContent = tempPage;
            document.getElementById('book4-author').textContent = tempAuthor
            break;
        case 4:
            document.getElementById('book5-name').textContent = tempName;
            document.getElementById('book5-pages').textContent = tempPage;  
            document.getElementById('book5-author').textContent = tempAuthor
            break;
        case 5:
            document.getElementById('book6-name').textContent = tempName;
            document.getElementById('book6-pages').textContent = tempPage;  
            document.getElementById('book6-author').textContent = tempAuthor;
            break;
    }

}