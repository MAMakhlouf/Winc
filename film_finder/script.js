//Roept UL element via de DOM
const moviesList = document.getElementById("container-list");
//Voor het gemak van uittypen URL deze const aangemaakt
const imdbUrl = "https://www.imdb.com/title/";

//Maakt daadwerkelijk een list element van de gegeven film
function createItem(movie) {
  const li = document.createElement("li");
  const link = document.createElement("a");
  const image = document.createElement("img");

  image.setAttribute("src", movie.poster);
  link.setAttribute("href", imdbUrl + movie.imdbID);
  link.setAttribute("target", "_new");

  li.appendChild(link).appendChild(image);
  return li;
}

// Pakt films uit de database en maakt voor elke een list element in de container
function addMoviesToDom(movies) {
  const items = movies.map(createItem);

  items.forEach((item) => {
    moviesList.appendChild(item);
  });
}

//roept de functie aan
addMoviesToDom(movies);

//leegmaken van de Ul om Li's toe te voegen
function clearUl() {
  while (moviesList.firstChild) {
    moviesList.removeChild(moviesList.firstChild);
  }
}
// Selecteer alle radiobuttons
const filmFilters = document.querySelectorAll('[name = "film-filter"]');

//Connect een eventlistener aan elke radio button (dit kan ook door bovenstaande aan te passen naar een Array maar deze manier vond ik makkelijker en duidelijker)
filmFilters.forEach((radioButton) => {
  radioButton.addEventListener("change", handleOnChangeEvent);
});
//Onderstaande functie verwerkt het change event met een vervolgstap.
function handleOnChangeEvent(event) {
  console.log(event.target.value);
  //vervolgstap van het change event om de films te filteren.
  switch (event.target.value) {
    case "latest":
      message = "laatste films,2014 of nieuwer";
      console.log("Hi ik ben van", message);
      break;
    case "avenger":
      message = "Avengers films";
      console.log("Hi ik ben van", message);
      const avengerMovies = movies.filter((movie) =>
        movie.title.includes("Avenger")
      );
      clearUl();
      addMoviesToDom(avengerMovies);
      break;
    case "x-men":
      message = "X-men films";
      console.log("Hi ik ben van", message);
      const xmenMovies = movies.filter((movie) =>
        movie.title.includes("X-Men")
      );
      clearUl();
      addMoviesToDom(xmenMovies);
      break;
    case "princess":
      message = "Princess films";
      console.log("Hi ik ben van", message);
      const princessMovies = movies.filter((movie) =>
        movie.title.includes("Princess")
      );
      clearUl();
      addMoviesToDom(princessMovies);
      break;
    case "batman":
      message = "Batman films";
      console.log("Hi ik ben van", message);
      const batmanMovies = movies.filter((movie) =>
        movie.title.includes("Batman")
      );
      clearUl();
      addMoviesToDom(batmanMovies);
      break;
  }
}
//change event om nieuwe films naar de dom te sturen
const latestMovieBtn = document.querySelector("#latest");
latestMovieBtn.addEventListener("change", (e) => {
  const latestMovies = movies.filter((movie) => {
    return movie.year == "2014", movie.year > "2014";
  });
  clearUl();
  addMoviesToDom(latestMovies);
});
