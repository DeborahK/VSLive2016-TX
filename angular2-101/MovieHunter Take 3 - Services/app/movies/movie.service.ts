import { Injectable } from '@angular/core';
import { IMovie } from './movie';

@Injectable()
export class MovieService {

    getMovies(): IMovie[] {
       return  [
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
                'director': 'Peter Jackson',
                'imageurl': 'http://www.coverwhiz.com/content/The-Lord-Of-The-Rings-The-Two-Towers_small.jpg',
                'movieId': 2,
                'mpaa': 'pg-13',
                'releaseDate': '2002-12-18T00:00:00',
                'title': 'The Lord of the Rings: The Two Towers',
                'price': 14.95,
                'starRating': 4.2,
                'approvalRating': 0.94
            },
            {
                'director': 'Peter Jackson',
                'imageurl': 'http://www.coverwhiz.com/content/The-Lord-Of-The-Rings-The-Return-Of-The-King_small.jpg',
                'movieId': 3,
                'mpaa': 'pg-13',
                'releaseDate': '2003-12-17T00:00:00',
                'title': 'The Lord of the Rings: The Return of the King',
                'price': 15.95,
                'starRating': 4.5,
                'approvalRating': 0.9895
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
}
