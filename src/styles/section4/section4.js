/* eslint-disable */


import {Style2} from "../../responsive-lib";

export const section4 = new Style2('section4')
    .addMediaQuery({orientation: "portrait"}, {
        ".section4 .content-container .types": {
            width: "370px",
            height: "90px"
        },
        ".section4 .content-container .types .type .h4-js": {
            top: "30px"
        },
    })
    .addMediaQuery({orientation: "landscape"}, {
        ".section4 .content-container .types": {
            width: "1200px",
            height: "265px"
        },
        ".section4 .content-container .types .type .h4-js": {
            top: "60px"
        },


    })
    .update()
