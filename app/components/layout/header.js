import { GLOBAL_VARS } from '../../core/globals.js';

export class Header {
    render() {
        return `
        <header>
            <h1>${GLOBAL_VARS.APP_TITLE}</h1>
        </header>
        `;
    }
}