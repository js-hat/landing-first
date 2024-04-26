/* eslint-disable */

import {Style2} from "../../responsive-lib";

export const typography = new Style2('typography')
    .addMediaQuery({orientation: "portrait"}, {
        ".h1-js": {
            fontSize: "30px"
        },
        ".h2-js": {
            fontSize: "32px"
        },
        ".h4-js": {
            fontSize: "13px"
        },

        ".p-js": {
            fontSize: "12px"
        },
        ".medium-js": {
            fontSize: "11px"
        },
        ".small-js": {
            fontSize: "10px"
        },
    })
    .addMediaQuery({orientation: "landscape"}, {
        ".h1-js": {
            fontSize: "65px"
        },
        ".h2-js": {
            fontSize: "52px"
        },
        ".h5-js": {
            fontSize: "52px"
        },
        ".h4-js": {
            fontSize: "24px"
        },
        ".p-js": {
            fontSize: "18px"
        },
        ".medium-js": {
            fontSize: "14px"
        },
        ".small-js": {
            fontSize: "12px"
        },

    })
    .update()
