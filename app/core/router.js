import { HomeComponent } from '../pages/home.js';
import { AboutComponent } from '../pages/about.js';

export const routes = {
    '/': { name: 'Home', component: HomeComponent},
    '/home': { name: 'Home', component: HomeComponent},
    '/about': { name: 'About', component: AboutComponent}
};

export class Router {

    constructor() {
        this.route = window.location.pathname;
    }

    async start() {
        const component = new routes[this.route].component();
        const render = await component.render();
        app.innerHTML += `<main>${render}</main>`;
    }
}