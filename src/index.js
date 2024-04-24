import "./styles/reset.scss";
import "./styles/vars.scss";
import "./styles/common.scss";
import "./styles/typography.scss";
import "./styles/header.scss";
import "./styles/section1.scss";
import "./styles/section2.scss";
import "./styles/section3.scss";
import "./styles/section4.scss";
import "./styles/section5.scss";
import "./styles/section6.scss";
import "./styles/section7.scss";
import {typography} from "./styles/typoghraphy";
import {common} from "./styles/common";
import {header} from "./styles/header";
import {section1} from "./styles/section1";
import {section2} from "./styles/section2";
import {section3} from "./styles/section3";
import {heroAnimation} from "./animation/section1.js"
console.log("privat");

heroAnimation()

export const createStyles = () => {
    const styles = {
        typography,
        common,
        header,
        section1,
        section2,
        section3
    }
}
createStyles();