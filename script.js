let myLibrary = [];

const harryPotter= new Book("Harry Potter","J.K. Rowling","394",false);
myLibrary.push(harryPotter);

const gridContainer = document.querySelector(".gridcontainer");

function removeCard(e) {
    let card = e.target.parentNode;
    gridContainer.removeChild(card);
    let i=0;
    for (let element of myLibrary) {
        if (e.target.parentNode.firstChild.textContent === element.title) {
            myLibrary.splice(i, 1);
        }
        i++;
    }
}

function changeRead(e) {
    let readProperty = e.target.parentNode.lastChild;
   if (e.target.textContent === "read") {
        e.target.textContent = "not read";
        e.target.style.backgroundColor = "#f87171";
        readProperty = false;
   } else {
        e.target.textContent = "read";
        e.target.style.backgroundColor="#22c55e";
        readProperty = true;
   }
   console.log(readProperty);
}

function makeCard(title,author,pages,read) {
    const divCard = document.createElement("div");

    const rmBtn = document.createElement("button");
    rmBtn.classList.add("rmBtn");
    rmBtn.textContent="Remove";

    const divTitle = document.createElement("div");
    divTitle.textContent=title;
    divTitle.style.fontWeight = "bold";
    divTitle.style.fontSize = "1.5rem";
    const divAuthor = document.createElement("div");
    divAuthor.textContent=author;
    divAuthor.style.fontStyle="italic";
    const divPages = document.createElement("div");
    divPages.textContent=pages;
    const readBtn = document.createElement("button");
    readBtn.classList.add("readBtn");
    if (read===true) {
        readBtn.textContent="read"
        readBtn.style.backgroundColor="#22c55e";
    } else {
        readBtn.textContent="not read"
        readBtn.style.backgroundColor="#f87171";
    }
    
    divCard.appendChild(divTitle);
    divCard.appendChild(divAuthor);
    divCard.appendChild(divPages);
    divCard.appendChild(rmBtn);
    divCard.appendChild(readBtn);
    gridContainer.appendChild(divCard);

    document.querySelectorAll('.rmBtn').forEach(item => {
        item.addEventListener('click', removeCard);
    });
    document.querySelectorAll('.readBtn').forEach(item => {
        item.addEventListener('click', changeRead);
    });
}

for (const thisbook of myLibrary) {
    makeCard(thisbook.title,thisbook.author,thisbook.pages,thisbook.read);
}

function Book(title,author,pages,read) {
    this.title=title;
    this.author=author;
    this.pages=pages+" pages";
    this.read=read;
}

function addBookToLibrary() {
    let title = prompt("Title: ");
    let author = prompt("Author: ");
    let pages = prompt("Nr. of pages: ");
    let read = prompt("Read? y/n ");
   
   

    let booleanRead;
    if (read==="y") {
        booleanRead=true;
    } else if (read === "n") {
        booleanRead = false;
    } else {
        alert("error");
    }
    const newBook= new Book(title,author,pages,booleanRead);
    myLibrary.push(newBook);
    makeCard(title,author,pages,booleanRead);
}

const newBookBtn = document.getElementById("newBook");
newBookBtn.addEventListener('click', addBookToLibrary);

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }