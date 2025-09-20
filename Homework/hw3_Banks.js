/*
Jalen Banks
Homework 3 – Objects and exception handling in JS
*/

console.log("Jalen Banks - Homework 3")

console.log("\n------ Movie Class ------")

// Movie class object
class Movie {
    // Constructor to initialize properties
    constructor(title, director, year) {
        this.title = title
        this.director = director
        this.year = year
    }
    
    // Method to get movie details
    getDetails() {
        return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}`
    }
}

console.log("\n------ MovieCollection Class ------")

// MovieCollection class object
class MovieCollection {
    // Constructor to initialize movies array
    constructor() {
        this.movies = []
    }
    
    // Method to add a movie to the collection
    addMovie(movie) {
        this.movies.push(movie)
        console.log(`Added movie: ${movie.title}`)
    }
    
    // Method to remove a movie by title
    removeMovie(title) {
        let movieIndex = -1
        
        // Find the movie index
        for (let i = 0; i < this.movies.length; i++) {
            if (this.movies[i].title === title) {
                movieIndex = i
                break
            }
        }
        
        // If movie not found, throw an error
        if (movieIndex === -1) {
            throw new Error(`Movie "${title}" not found in collection`)
        }
        
        // Remove the movie from array
        this.movies.splice(movieIndex, 1)
        console.log(`Removed movie: ${title}`)
    }
    
    // Method to show all movies
    showMovies() {
        // If no movies exist, throw an error
        if (this.movies.length === 0) {
            throw new Error("No movies in collection")
        }
        
        console.log("Movies in collection:")
        for (let i = 0; i < this.movies.length; i++) {
            console.log(`${i + 1}. ${this.movies[i].getDetails()}`)
        }
    }
}

console.log("\n------ Movie Collection System ------")

// Create a new movie collection
let myMovieCollection = new MovieCollection()

// Interactive menu system
while (true) {
    console.log("\nMovie Collection Menu:")
    console.log("1. Add a movie")
    console.log("2. Remove a movie")
    console.log("3. Show all movies")
    console.log("4. Exit")
    
    let choice = prompt("Movie Collection Menu:\n1. Add a movie\n2. Remove a movie\n3. Show all movies\n4. Exit\n\nEnter your choice (1-4):")
    
    if (choice === "1") {
        // Add movie
        let title = prompt("Enter movie title:")
        let director = prompt("Enter movie director:")
        let year = parseInt(prompt("Enter movie year:"))
        
        if (title && director && !isNaN(year)) {
            let newMovie = new Movie(title, director, year)
            myMovieCollection.addMovie(newMovie)
        } else {
            console.log("Invalid input! Please enter valid movie details.")
        }
    }
    else if (choice === "2") {
        // Remove movie
        let titleToRemove = prompt("Enter the title of the movie to remove:")
        
        try {
            myMovieCollection.removeMovie(titleToRemove)
        } catch (error) {
            console.log(`Error: ${error.message}`)
        }
    }
    else if (choice === "3") {
        // Show all movies
        try {
            myMovieCollection.showMovies()
        } catch (error) {
            console.log(`Error: ${error.message}`)
        }
    }
    else if (choice === "4") {
        console.log("Thank you for using Movie Collection System!")
        break
    }
    else {
        console.log("Invalid choice! Please enter 1, 2, 3, or 4.")
    }
}