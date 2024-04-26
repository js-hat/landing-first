/* eslint-disable */

import {Style2} from "../../responsive-lib";

export const section2 = new Style2('section2')
    .addMediaQuery({orientation: "portrait"}, {
        ".section2 .content-container .left, .section2 .content-container .right": {
            width: "375px",

        },
        ".section2 .content-container .right .codeLines": {
            padding: "15px 15px 15px 15px",
            width: "128px",
            left: "123px",
            top: "55px"
        },
        ".section2 .content-container .right": {
            minHeight: "200px",
            maxHeight: "200px"
        },
        ".section2 .content-container .right img": {
            width: "165px",
            height: "165px"
        },


    })
    .addMediaQuery({orientation: "landscape"}, {
        ".section2 .content-container .left, .section2 .content-container .right": {
            width: "580px",

        },
        ".section2 .content-container .right img": {
            width: "250px",
            height: "250px"

        },
        ".section2 .content-container .right .codeLines": {
            padding: "30px 35px 35px 35px"
        },



    })
    .update()
