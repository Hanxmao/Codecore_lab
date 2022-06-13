// Using class syntax, model a library that holds books. Both the library and books
// should be constructed objects.
// Create a Library class and a Book class.



class Book {
    constructor (authors,title,edition){
        this.authors =authors
        this.title=title
        this.edition=edition
    }
}

class Library {
    constructor() {
        this.books = [];
    }
    shelve(book) {
        this.books.push(book);
        this.books.sort((a, b) => { a.title.localeCompare(b.title) });
        //this.books.sort((a,b)=>{a.title<b.title? return -1 : a.title>b.title ? return 1 : 0})
        return this;
    }

    findByTitle(str){
        return this.books.find((book)=>{book.title.toLowerCase().includes(str.toLowerCase())})
        
    }

    list(){
        return this.books
    }
}



const eloquentJS = new Book("Eloquent Javascript", ["Marijn Haverbeke"], 3);
const speakingJS = new Book("Speaking JavaScript", ["Dr. Axel Rauschmayer"], 1);
const theRustProgLang = new Book(
  "The Rust Programming Language",
  ["Steve Klabnik", "Carol Nichols"],
  2
);
console.log(eloquentJS.title)
const lib = new Library();
console.log(lib.shelve(eloquentJS).shelve(speakingJS).shelve(theRustProgLang))
// console.log()