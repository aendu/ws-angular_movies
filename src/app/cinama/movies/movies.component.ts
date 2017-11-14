import {Component, OnInit} from "@angular/core";
import {Movie} from "./movie.model";

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html'
})
export class MoviesComponent implements OnInit{

  movies: Movie[];

  ngOnInit(): void {
    this.movies = [
      {
        "title": "Dawn of the Planet of the Apes",
        "image": "http://api.androidhive.info/json/movies/1.jpg",
        "rating": 8.3,
        "releaseYear": 2014,
        "genre": [
          "Action",
          "Drama",
          "Sci-Fi"
        ]
      },
      {
        "title": "District 9",
        "image": "http://api.androidhive.info/json/movies/2.jpg",
        "rating": 8,
        "releaseYear": 2009,
        "genre": [
          "Action",
          "Sci-Fi",
          "Thriller"
        ]
      },
      {
        "title": "Transformers: Age of Extinction",
        "image": "http://api.androidhive.info/json/movies/3.jpg",
        "rating": 6.3,
        "releaseYear": 2014,
        "genre": [
          "Action",
          "Adventure",
          "Sci-Fi"
        ]
      }
    ];
  }

  onDeleteMovie(movieToDelete: Movie) {
    this.movies = this.movies.filter(movie => movieToDelete !== movie)
  }
}
