import { GLOBAL_SVG, SVG_DIR, GLOBAL_IMG } from "../core/globals.js";

export class HomeComponent {

    constructor() {

    }

    render() {
        return `
        <section class="box" id="hero-header" style="background-image: linear-gradient(var(--theme-dark-opacue), rgba(0,0,0, 0.1) 70%), url('${GLOBAL_IMG.HERO_HEADER}')">

            <article class="flex flex-wrap flex-justify-content-center" style="margin-top: var(--theme-padding-xxl)">
                <div class="flex flex-column" style="max-width:50%">
                    <p class="hero-header-cta-text" style="max-width:400px">We build, deliver and future-proof websites for everyone.</p>
                    <img class="img-svg box" src="${GLOBAL_SVG.BUILDING_WEBSITES}" />
                </div>
                <div class="box">
                    <a href="#" class="cta-button">Get Started</a>
                </div>
            </article>
            
            <article class="floating-box">
                <div class="flex flex-wrap flex-align-items-center">
                    <div class="flex-box">
                        <img class="img-svg box" src="${GLOBAL_SVG.SUCCESS_FACTORS}" />
                    </div>

                    <div class="flex-box">
                        <h3>Featured In</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel pretium lectus quam id leo in. Id ornare arcu odio ut sem.</p>
                    </div>
                </div>
            </article>

            <article class="floating-box">
                <div class="flex flex-wrap flex-align-items-center">
                    <div class="flex-box">
                        <img class="img-svg box" src="${GLOBAL_SVG.ACCEPT_REQUEST}" />
                    </div>

                    <div class="flex-box">
                        <h3>How We Can Help You</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel pretium lectus quam id leo in. Id ornare arcu odio ut sem.</p>
                    </div>
                </div>
            </article>

            <article class="floating-box">
            <h3>Meet The Team</h3>
                <div class="flex flex-wrap flex-align-items-center">
                    <div class="flex-box flex flex-column">
                        <img class="img-avatar" src="${SVG_DIR}/team_1.svg">
                        <h5 class="txt-avatar">Gilbert Douglas</h5>
                    </div>

                    <div class="flex-box flex flex-column">
                        <img class="img-avatar" src="${SVG_DIR}/team_2.svg">
                        <h5 class="txt-avatar">Jack Dixon</h5>
                    </div>
                    
                    <div class="flex-box flex flex-column">
                        <img class="img-avatar" src="${SVG_DIR}/team_3.svg">
                        <h5 class="txt-avatar">Donald Gray</h5>
                    </div>
                </div>
            </article>

        </section>
        `;
    }

};