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


// Test your implementation

// Display the initial information of the movie

// Update the rating of the movie

// Display the updated information of the movie