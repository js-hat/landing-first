/* eslint-disable */

import {Style2} from "../../responsive-lib";

export const section3 = new Style2('section3')
    .addMediaQuery({orientation: "portrait"}, {
        ".section3 .content-container": {
            gap: "30px"
        },
        ".section3 .content-container .right .list .line": {
            width: "270px"
        },
        ".section3 .content-container .left .codeLines": {
            width: "150px",
            height: "100px",
            padding: "10px 15px 15px 15px"
        },
        ".section3 .content-container .left .codeLines .medium-js": {
            fontSize: "10px"
        },
        ".section3 .content-container .left .codeLines.dark": {
            width: "200px",
            left: "170px"
        },
        ".section3 .content-container .left .codeLines.light": {
            left: "10px"
        },
    })
    .addMediaQuery({orientation: "landscape"}, {

        ".section3 .content-container .left .codeLines": {
            width: "310px",
            height: "190px",
            padding: "20px 30px 30px 30px"
        },
        ".section3 .content-container .left .codeLines.light": {
            right: "300px"
        },
        ".section3 .content-container .right": {

            paddingLeft: "110px"
        },
        ".section3 .content-container .right .list .line": {
            width: "510px"
        },



    })
    .update()
