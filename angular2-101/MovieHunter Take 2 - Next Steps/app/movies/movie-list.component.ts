import { Component }  from '@angular/core';

import { IMovie } from './movie';
import { MovieFilterPipe } from './movieFilter.pipe';

@Component({
    templateUrl: 'app/movies/movie-list.component.html',
    styleUrls: ['app/movies/movie-list.component.css'],
    pipes: [MovieFilterPipe]
})
export class MovieListComponent {
    pageTitle: string = 'Movie List';
    listFilter: string = '';
    showImage: boolean = false;
    movies: IMovie[];
    errorMessage: string;

    constructor() {
        this.getMovies();
    }

    getMovies() {
        this.movies = [
            {
                'director': 'Peter Jackson',
                'imageurl': 'http://www.coverwhiz.com/content/The-Lord-Of-The-Rings-The-Fellowship-Of-The-Ring_small.jpg',
                'movieId': 1,
                'mpaa': 'pg-13',
                'releaseDate': '2001-12-19T00:00:00',
                'title': 'The Lord of the Rings: The Fellowship of the Ring',
                'price': 12.95,
                'starRating': 4.88,
                'approvalRating': 0.97
            },
            {
                'director': 'Fred Wolf',
                'imageurl': '',
                'movieId': 4,
                'mpaa': 'nr',
                'releaseDate': '1971-02-02T00:00:00',
                'title': 'The Point',
                'price': 9.95,
                'starRating': 4.9,
                'approvalRating': 0.9295
            }
        ];
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    convertToDate(dateString: string): Date {
        return new Date(dateString);
    }
}
