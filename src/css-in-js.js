/* eslint-disable */
import { typoghraphy} from "./styles/typoghraphy";
import {section1} from "./section1";
import {section2} from "./section2";
import {section4} from "./section4";
import {section5} from "./section5";
import {global} from "./global";
import {section6} from "./section6";

export const createStyles = () => { 
    const styles = {
        global,
        typoghraphy,
        section1,
        section2,
        section4,
        section5,
        section6
    }
}
function loadResizeHandler() {
    const videoContainer = document.querySelector('.video-container');
    const dataMobile = videoContainer.getAttribute('data-mobile');
    const dataDesktop = videoContainer.getAttribute('data-desktop');
    if(dataDesktop && innerWidth > innerHeight) {
        document.querySelector('.hp-hb').setAttribute('src', dataDesktop);
    } else {
        document.querySelector('.hp-hb').setAttribute('src', dataMobile);
    }
}

window.addEventListener("load", loadResizeHandler);

let lastOrientationIsPortrait;
function checkOrientation() {
    const isPortrait = window.innerHeight > window.innerWidth;


    if (isPortrait !== lastOrientationIsPortrait) {
        console.log('check orientation')
        loadResizeHandler()

        lastOrientationIsPortrait = isPortrait;
    }
}
window.addEventListener('resize', checkOrientation);

  

   