import { GLOBAL_VARS } from '../../core/globals.js';

export class Footer {
    render() {
        return `
        <footer>
            <h4>${GLOBAL_VARS.APP_TITLE}</h4>
        </footer>
        `;
    }
}