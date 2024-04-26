/* eslint-disable */


import {Style2} from "../../responsive-lib";

export const section5 = new Style2('section5')
    .addMediaQuery({orientation: "portrait"}, {
        ".section5 .content-container .right": {
            /*left: "190px",
            top: "110px"*/

        },

    })
    .addMediaQuery({orientation: "landscape"}, {



    })
    .update()
