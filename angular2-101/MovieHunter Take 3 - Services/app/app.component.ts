import { Component } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';

import { MovieListComponent } from './movies/movie-list.component';

@Component({
    selector: 'mh-app',
    template: `
    <div class="container">
        <h1>{{pageTitle}}</h1>
        <router-outlet></router-outlet>
     </div>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@Routes([
    { path: '/', component: MovieListComponent }
])
export class AppComponent {
    pageTitle: string = 'InStep Movie Hunter';

    constructor(private router: Router) {}
}
