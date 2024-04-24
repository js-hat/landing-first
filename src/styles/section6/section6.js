/* eslint-disable */


import {Style2} from "../../responsive-lib";

export const section6 = new Style2('section6')
    .addMediaQuery({orientation: "portrait"}, {

    })
    .addMediaQuery({orientation: "landscape"}, {
        ".section6 .content-container": {
            width: "1300px",
            height: "580px"
        },

        ".section6 .content-container .right .service": {
            width: "250px",
            height: "250px"
        },
        ".section6 .content-container .right .service i": {
            fontSize: "40px"
        },
    })
    .update()
