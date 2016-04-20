import {Component} from 'angular2/core';

import {MovieListComponent} from './movies/movie-list.component';

@Component({
    selector: 'mh-app',
    template: `
    <div class="container">
        <h1>{{pageTitle}}</h1>
        <div>
            <mh-movies></mh-movies>
        </div>
     </div>
    `,
    directives: [MovieListComponent]
})
export class AppComponent {
    pageTitle: string = 'InStep Movie Hunter';
}
