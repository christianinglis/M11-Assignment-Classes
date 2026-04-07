// Define the Movie class
class Movie {
  #title;
  #cast;
  #description;
  #rating;
// title, cast, description, rating

  constructor(title, cast, description, rating) {
    this.#title = title;
    this.#cast = cast;
    this.#description = description;
    this.#rating = rating;
  }

// Method to update the rating of the movie
  updateRating(newRating) {
    this.#rating = newRating;
  }

// Method to display the movie's information
  displayInfo() {
    const movieInfoDiv = document.getElementById("movie-info");xsaxaswddqw
    movieInfoDiv.innerHTML = `
    <h2>Title: ${this.#title}</h2> 
    <p><strong>Cast:</strong> ${this.#description}</p> 
    <p><strong>Rating:</strong> ${this.#rating}</p>
  `;
  }

  getTitle() {
    return this.#title;
  }
}


// Test your implementation
const firstMovie = new Movie(
  "The Shawshank Redemption",
  ["Tim Robbins", "Morgan Freeman"],
  "Two imprisoned men bond over a number of years, finding eventual redemption through acts of common decency",
  9.3
);

// Display the initial information of the movie
firstMovie.displayInfo();

const movies = [];
movies.push(firstMovie);

// Update the rating of the movie

// Display the updated information of the movie