import {Component, OnInit}  from 'angular2/core';
import {HTTP_PROVIDERS}     from 'angular2/http';

import {IMovie} from './movie';
import {MovieService} from './movie.service';
import {MovieFilterPipe} from './movieFilter.pipe';

@Component({
    selector: 'mh-movies',
    templateUrl: 'app/movies/movie-list.component.html',
    styleUrls: ['app/movies/movie-list.component.css'],
    providers: [HTTP_PROVIDERS, MovieService],
    pipes: [MovieFilterPipe]
})
export class MovieListComponent implements OnInit {
    pageTitle: string = 'Movie List';
    listFilter: string = '';
    showImage: boolean = false;
    movies: IMovie[];
    errorMessage: string;

    constructor(private _movieService: MovieService) {
    }

    ngOnInit() { this.getMovies(); }

    getMovies() {
        this._movieService.getMovies()
            .subscribe(
            movies => this.movies = movies,
            error => this.errorMessage = <any>error);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    convertToDate(dateString: string): Date {
        return new Date(dateString);
    }
}
