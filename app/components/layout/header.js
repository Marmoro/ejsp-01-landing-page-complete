import { GLOBAL_VARS } from '../../core/globals.js';

export class Header {
    async render() {
        return `
        <header class="flex flex-align-items-center">
        <img src="../../../assets/img/logo-secondary.png">
        <h1>${GLOBAL_VARS.APP_TITLE}</h1>
        </header>
        `;
    }
}