import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

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
@RouteConfig([
    { path: '/movies', name: 'Movies', component: MovieListComponent, useAsDefault: true }
])
export class AppComponent {
    pageTitle: string = 'InStep Movie Hunter';
}
