/* eslint-disable */


import {Style2} from "../responsive-lib";

export const section1 = new Style2('section1')
    .addMediaQuery({orientation: "portrait"}, {

    })
    .addMediaQuery({orientation: "landscape"}, {
        ".section1 .circle-container": {
            gap: "32px",
            width: "950px",
            height: "950px",
        },
        ".section1 .circle-container h1": {
            width: "950px"
        },
        ".section1 .circle-container p": {
            width: "800px"
        },
        ".section1 .services .service": {
            width: "210px",
            height: "210px",
        },
        ".section1 .services .service i": {
            fontSize: "30px"
        },


    })
    .update()
