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

addMoviesToDom(movies);
