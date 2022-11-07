let myLibrary = [];

const gridContainer = document.querySelector(".gridcontainer");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages + " pages";
        this.read = read;
    }

    getTitle() { return this.title; }
    getAuthor() { return this.author; }
    getPages() { return this.pages; }
    getRead() { return this.read; }

    setTitle(title) { this.title = title; }
    setAuthor(author) { this.author = author; }
    setPages(pages) { this.pages = pages; }
    setRead(read) { this.read = read; }

    removeCard(e) {
        let card = e.target.parentNode;
        gridContainer.removeChild(card);
        let i = 0;
        for (let element of myLibrary) {
            if (e.target.parentNode.firstChild.textContent === element.getTitle()) {
                myLibrary.splice(i, 1);
            }
            i++;
        }
    }

    changeRead(e) {
        let readProperty = e.target.parentNode.lastChild;
        if (e.target.textContent === "read") {
            e.target.textContent = "not read";
            e.target.style.backgroundColor = "#f87171";
            readProperty = false;
        } else {
            e.target.textContent = "read";
            e.target.style.backgroundColor = "#22c55e";
            readProperty = true;
        }
    }

    makeCard() {
        const divCard = document.createElement("div");

        const rmBtn = document.createElement("button");
        rmBtn.classList.add("rmBtn");
        rmBtn.textContent = "Remove";

        const divTitle = document.createElement("div");
        divTitle.textContent = this.getTitle();
        divTitle.style.fontWeight = "bold";
        divTitle.style.fontSize = "1.5rem";
        const divAuthor = document.createElement("div");
        divAuthor.textContent = this.getAuthor();
        divAuthor.style.fontStyle = "italic";
        const divPages = document.createElement("div");
        divPages.textContent = this.getPages();
        const readBtn = document.createElement("button");
        readBtn.classList.add("readBtn");
        if (this.getRead() === true) {
            readBtn.textContent = "read"
            readBtn.style.backgroundColor = "#22c55e";
        } else {
            readBtn.textContent = "not read"
            readBtn.style.backgroundColor = "#f87171";
        }

        divCard.appendChild(divTitle);
        divCard.appendChild(divAuthor);
        divCard.appendChild(divPages);
        divCard.appendChild(rmBtn);
        divCard.appendChild(readBtn);
        gridContainer.appendChild(divCard);

        document.querySelectorAll('.rmBtn').forEach(item => {
            item.addEventListener('click', this.removeCard);
        });
        document.querySelectorAll('.readBtn').forEach(item => {
            item.addEventListener('click', this.changeRead);
        });
    }
}

function addBookToLibrary(e) {
    //e.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    newBook.makeCard();
    document.getElementById("myForm").style.display = "none";
}

const newBookBtn = document.getElementById("newBook");
newBookBtn.addEventListener("click", () => {
    title.value = "";
    author.value = "";
    pages.value = "";
});

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

const submitBtn = document.getElementById("submit");
submitBtn.addEventListener('click', () => {
    validate();
});

title.addEventListener("click", rmTitleError);
author.addEventListener("click", rmAuthorError);
pages.addEventListener("click", rmPagesError);


function rmTitleError() {
    title.value = "";
    title.style.color = "black";
}
function rmAuthorError() {
    author.value = "";
    author.style.color = "black";
}
function rmPagesError() {
    pages.value = "";
    pages.style.color = "black";
}

function validate() {
    let valid = true;
    if (title.value === "") {
        title.validity.valid = "false";
        title.value = "Title missing!";
        title.style.color = "red";
        valid = false;
    }
    if (author.value === "") {
        author.validity.valid = "false";
        author.value = "Author missing!";
        author.style.color = "red";
        valid = false;
    }
    if (pages.value === "") {
        pages.validity.valid = "false";
        pages.value = "Pages missing!";
        pages.style.color = "red";
        valid = false;
    }
    if (isNaN(pages.value) === true) {
        pages.validity.valid = "false";
        pages.value = "Must be a number!";
        pages.style.color = "red";
        valid = false;
    }
    if (valid === true) {
        addBookToLibrary();
    }



}

const harryPotter = new Book("Harry Potter", "J.K. Rowling", "394", false);
myLibrary.push(harryPotter);

for (const thisbook of myLibrary) {
    thisbook.makeCard(thisbook.title, thisbook.author, thisbook.pages, thisbook.read);
}



