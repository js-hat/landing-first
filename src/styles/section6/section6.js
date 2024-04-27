/* eslint-disable */


import {Style2} from "../../responsive-lib";

export const section6 = new Style2('section6')
    .addMediaQuery({orientation: "portrait"}, {
        ".section6 .content-container": {
            width: "350px",
        },
        ".section6 .content-container .left .container": {
            gap: "14px"
        },
        ".section6 .content-container .right .service": {
            width: "155px",
            height: "155px",
            padding: "18px"
        },
        ".section6 .content-container .right .service .small-js": {
            fontSize: "9px",
            paddingTop: "10px"
        },
        ".section6 .content-container .right .service i": {
            fontSize: "20px"
        },
    })
    .addMediaQuery({orientation: "landscape"}, {
        ".section6 .content-container": {
            width: "1300px",
            height: "580px"
        },
        ".section6 .content-container .left .container": {
            gap: "30px"
        },

        ".section6 .content-container .right .service": {
            width: "250px",
            height: "250px",
            padding: "35px"
        },
        ".section6 .content-container .right .service .small-js": {
            paddingTop: "20px"
        },
        ".section6 .content-container .right .service i": {
            fontSize: "40px",
        },
    })
    .update()
