import { Component } from 'angular2/core';

@Component({
    selector: 'mh-app',
    template: `
    <div>
        <h1>{{pageTitle}}</h1>
        <div>My First Component</div>
    </div>
    `
})
export class AppComponent {
    pageTitle: string = 'InStep Movie Hunter';
}
