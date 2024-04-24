import "./styles/global/reset.scss";
import "./styles/global/vars.scss";
import "./styles/global/common.scss";
import "./styles/global/typography.scss";
import "./styles/header/header.scss";
import "./styles/section1/section1.scss";
import "./styles/section2/section2.scss";
import "./styles/section3/section3.scss";
import "./styles/section4/section4.scss";
import "./styles/section5/section5.scss";
import "./styles/section6/section6.scss";
import "./styles/section7/section7.scss";
import {typography} from "./styles/global/typoghraphy";
import {common} from "./styles/global/common";
import {header} from "./styles/header/header";
import {section1} from "./styles/section1/section1";
import {section2} from "./styles/section2/section2";
import {section3} from "./styles/section3/section3";
import {heroAnimation} from "./animation/section1.js"
import {section7} from "./styles/section7/section7"
import {section4} from "./styles/section4/section4"

console.log("privat");

heroAnimation()

export const createStyles = () => {
    const styles = {
        typography,
        common,
        header,
        section1,
        section2,
        section3,
        section7,
        section4
    }
}
createStyles();