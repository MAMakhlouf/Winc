let movies = [
  {
    title: "X-Men: Days of Future Past",
    year: "2014",
    imdbID: "tt1877832",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZGIzNWYzN2YtMjcwYS00YjQ3LWI2NjMtOTNiYTUyYjE2MGNkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    title: "X-Men: First Class",
    year: "2011",
    imdbID: "tt1270798",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTg5OTMxNzk4Nl5BMl5BanBnXkFtZTcwOTk1MjAwNQ@@._V1_SX300.jpg",
  },
  {
    title: "X-Men",
    year: "2000",
    imdbID: "tt0120903",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZmIyMDk5NGYtYjQ5NS00ZWQxLTg2YzQtZDk1ZmM4ZDBlN2E3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    title: "X2: X-Men United",
    year: "2003",
    imdbID: "tt0290334",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDk0NjYxMzIzOF5BMl5BanBnXkFtZTYwMTc1MjU3._V1_SX300.jpg",
  },
  {
    title: "X-Men: The Last Stand",
    year: "2006",
    imdbID: "tt0376994",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNDJiMWEtOTg4Yi00NTYzLWEzOGMtMjNmNjAxNTBlMzY3XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
  },
  {
    title: "X-Men Origins: Wolverine",
    year: "2009",
    imdbID: "tt0458525",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZWRhMzdhMzEtZTViNy00YWYyLTgxZmUtMTMwMWM0NTEyMjk3XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
  },
  {
    title: "X-Men: Apocalypse",
    year: "2016",
    imdbID: "tt3385516",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjU1ODM1MzYxN15BMl5BanBnXkFtZTgwOTA4NDE2ODE@._V1_SX300.jpg",
  },
  {
    title: "X-Men: The Animated Series",
    year: "1992–1997",
    imdbID: "tt0103584",
    type: "series",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNTVjNmEwNTMtNmQ2ZC00MGJkLWI3MDgtNzMyNTc4YjVkNTQ1L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    title: "X-Men: Evolution",
    year: "2000–2003",
    imdbID: "tt0247827",
    type: "series",
    poster:
      "https://m.media-amazon.com/images/M/MV5BOWMyMThhN2UtMGMzYi00ODVmLWFlODItYmZlMzMxYzE3MmZkXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg",
  },
  {
    title: "Wolverine and the X-Men",
    year: "2008–2009",
    imdbID: "tt0772145",
    type: "series",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNzk4Nzg3NjMyMV5BMl5BanBnXkFtZTcwMjk3MjU0Mg@@._V1_SX300.jpg",
  },
  {
    title: "The Avengers",
    year: "2012",
    imdbID: "tt0848228",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    title: "Avengers: Infinity War",
    year: "2018",
    imdbID: "tt4154756",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    title: "Avengers: Age of Ultron",
    year: "2015",
    imdbID: "tt2395427",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    title: "Avengers: Endgame",
    year: "2019",
    imdbID: "tt4154796",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
  {
    title: "The Avengers",
    year: "1998",
    imdbID: "tt0118661",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYWE1NTdjOWQtYTQ2Ny00Nzc5LWExYzMtNmRlOThmOTE2N2I4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
  },
  {
    title: "The Avengers: Earth's Mightiest Heroes",
    year: "2010–2012",
    imdbID: "tt1626038",
    type: "series",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYzA4ZjVhYzctZmI0NC00ZmIxLWFmYTgtOGIxMDYxODhmMGQ2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg",
  },
  {
    title: "Ultimate Avengers",
    year: "2006",
    imdbID: "tt0491703",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDFmZTkxMjktMzRiYS00YzMwLWFhZDctOTQ2N2NlOTAyZDJhXkEyXkFqcGdeQXVyNjgzNDU2ODI@._V1_SX300.jpg",
  },
  {
    title: "Ultimate Avengers II",
    year: "2006",
    imdbID: "tt0803093",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZjI3MTI5ZTYtZmNmNy00OGZmLTlhNWMtNjZiYmYzNDhlOGRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    title: "The Avengers",
    year: "1961–1969",
    imdbID: "tt0054518",
    type: "series",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZWI4ZWM4ZWQtODk1ZC00MzMxLThlZmMtOGFmMTYxZTAwYjc5XkEyXkFqcGdeQXVyMTk0MjQ3Nzk@._V1_SX300.jpg",
  },
  {
    title: "Batman Begins",
    year: "2005",
    imdbID: "tt0372784",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
  },
  {
    title: "Batman v Superman: Dawn of Justice",
    year: "2016",
    imdbID: "tt2975590",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    title: "Batman",
    year: "1989",
    imdbID: "tt0096895",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
  },
  {
    title: "Batman Returns",
    year: "1992",
    imdbID: "tt0103776",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg",
  },
  {
    title: "Batman Forever",
    year: "1995",
    imdbID: "tt0112462",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    title: "Batman & Robin",
    year: "1997",
    imdbID: "tt0118688",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg",
  },
  {
    title: "The Lego Batman Movie",
    year: "2017",
    imdbID: "tt4116284",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg",
  },
  {
    title: "Batman: The Animated Series",
    year: "1992–1995",
    imdbID: "tt0103359",
    type: "series",
    poster:
      "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg",
  },
  {
    title: "Batman: Under the Red Hood",
    year: "2010",
    imdbID: "tt1569923",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNmY4ZDZjY2UtOWFiYy00MjhjLThmMjctOTQ2NjYxZGRjYmNlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    title: "Batman: The Dark Knight Returns, Part 1",
    year: "2012",
    imdbID: "tt2313197",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg",
  },
  {
    title: "The Princess Bride",
    year: "1987",
    imdbID: "tt0093779",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMGM4M2Q5N2MtNThkZS00NTc1LTk1NTItNWEyZjJjNDRmNDk5XkEyXkFqcGdeQXVyMjA0MDQ0Mjc@._V1_SX300.jpg",
  },
  {
    title: "Princess Mononoke",
    year: "1997",
    imdbID: "tt0119698",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTVlNWM4NTAtNDQxYi00YWU5LWIwM2MtZmVjYWFmODZiODE5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    title: "The Princess Diaries",
    year: "2001",
    imdbID: "tt0247638",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMzcwYjEwMzEtZTZmMi00ZGFhLWJhZjItMDAzNDVkNjZmM2U5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    title: "The Princess and the Frog",
    year: "2009",
    imdbID: "tt0780521",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjEyOTQ5NzAzNl5BMl5BanBnXkFtZTcwMTcyNTU1Mg@@._V1_SX300.jpg",
  },
  {
    title: "The Princess Diaries 2: Royal Engagement",
    year: "2004",
    imdbID: "tt0368933",
    type: "movie",
    poster:
      "https://m.media-amazon.com/images/M/MV5BODljNTU2ZGMtMWI5Yy00MGNkLTg2MTktN2NhZjY0NDcwMDhiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    title: "Xena: Warrior Princess",
    year: "1995–2001",
    imdbID: "tt0112230",
    type: "series",
    poster:
      "https://m.media-amazon.com/images/M/MV5BOTdkYjA4YzAtMjNiZS00OTgyLTg5Y2ItNGIwZGQyMTUzNzFiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
];

