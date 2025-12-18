const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// const book = getBook(3);
// book;
// // const title = book.title;
// // const author = book.author;

// const { title, author, pages, publicationDate, genres, hasMovieAdaptation } = book;
// console.log(title, author, genres, hasMovieAdaptation, pages, publicationDate);


// // const primaryGenre = genres[0];
// // const secondaryGenre = genres[1];

// const [primary, secondary, ...other] = genres;
// //rest operator collects the remaining items into an array
// console.log(primary, secondary, other);

// const nwGenres = [...genres, "classic"]; //spread operator
// nwGenres;

// const updatedBook = {
//   ...book,
//   // Adding new properties
//   moviePublicationDate: "1972-12-15",

//   // Overriding existing properties
//   pages: 150,
// };
// updatedBook;

// // arrow functions
// // function getYear(str) {
// //   return str.split("-")[0];
// // }

// const getYear = (str) => str.split("-")[0];
// console.log(getYear(publicationDate));

// const summarizeBook = `${title}, a ${pages}-page long book, was written by ${author} and published in ${
//   getYear(publicationDate)
// }. It falls under the genres: ${genres.join(", ")}. The book has ${hasMovieAdaptation ? "" : "no "}movie adaptation.`;
// summarizeBook;

// // ternary operator

// const longBook = pages > 200 ?  "It is a long book" : "It is a short book";
// longBook;

// console.log(true && "Some string");
// console.log(false && "Some string");
// console.log(hasMovieAdaptation && `${title} has a movie adaptation.`);

// // falsy values: false, 0, "", null, undefined, NaN
// console.log("jonathan" && "guest");
// console.log(0 && "guest");

// console.log(true || "Some string");
// console.log(false || "Some string");
// console.log(hasMovieAdaptation || `${title} has no movie adaptation.`);

// console.log(book.translations.spanish);
// const spanishTranslation = book.translations.spanish || "Not Translated"
// spanishTranslation;

// // console.log(book.reviews.librarything.reviewsCount);
// // const ltReviewsCount = book.reviews.librarything.reviewsCount || 'No reviews yet';
// // ltReviewsCount;

// // const count = book.reviews.librarything.reviewsCount ?? 'No reviews yet';
// // count;

// function getTotalReviews(book) {
//   const goodread = book.reviews.goodreads.reviewsCount;
//   goodread;
//   const librarything = book.reviews.librarything?.reviewsCount ?? 0;
//   librarything;
//   return goodread + librarything;
// }
// console.log(getTotalReviews(book));

// // mapping data
// const books = getBooks();
// const a = [1,2,3,4,5].map((el) => el*3);
// console.log(a);

// const titles = books.map((book) => book.title);
// titles;

// const essentialData = books.map((book) => ({
//     title: book.title,
//     author: book.author,
//     pages: book.pages,
//     reviews: getTotalReviews(book),
//     rating: book.reviews.goodreads.rating
// }));
// essentialData;

// // filtering data
// const longBooks = books
// .filter((book) => book.pages > 500)
// .filter((book) => book.hasMovieAdaptation);
// longBooks;

// const scifiBooks = books.filter((book) => book.genres.includes("science fiction")).map((book) => book.title);
// scifiBooks;

// // reduce method
// const totalPages = books.reduce((sum, book) => sum + book.pages, 0);
// totalPages;

// // Array sorting
// const s = [5,3,8,1,4];
// const sortedS = s.slice().sort((a,b) => a - b);
// sortedS;
// s;

// const sortedByPages = books.slice().sort((a,b) => b.pages - a.pages);
// sortedByPages;

// // working with immutable arrays
// // 1) add book object to data array
// const newBook = {
//   id: 6,
//   title: "The Hobbit",
//   publicationDate: "1937-09-21",
//   author: "J.R.R. Tolkien",
//   genres: ["fantasy", "adventure"],
//   hasMovieAdaptation: true,
// };

// const newBooks = [...books, newBook];
// newBooks;

// // 2) dtelete book with id 6
// const bookAfterDelete = newBooks.filter((book) => book.id !== 6);
// bookAfterDelete;

// // 3) update book with id 5 to not have movie adaptation
// const updatedBooks = newBooks.map((book) =>
//   book.id === 5 ? { ...book, hasMovieAdaptation: true } : book
// );
// updatedBooks;

// Asynchronous js with Promises
// fetch("https://jsonplaceholder.typicode.com/todos/")
// .then((response) => response.json())
// .then((data) => {
//   console.log(data);
// });

// console.log("jonas");

// Async/Await
async function fetchTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await response.json();
  console.log(data);

  return data;
}

const todos = fetchTodos();
console.log(todos);

console.log("jonas");
