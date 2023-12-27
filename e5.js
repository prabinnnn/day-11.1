const book = [
  { title: "physic", genre: "phy", history: 1990, publisher: "gita" },
  { title: "hero love", genre: "romatic", history: 1993, publisher: "sita" },
  { title: "detective", genre: "crime", history: 1900, publisher: "hera" },
  { title: "cinderalla", genre: "romantic", history: 1990, publisher: "tam" },
];
const newuser = book.filter((bk) => bk.genre === "romantic");
console.log(newuser);
