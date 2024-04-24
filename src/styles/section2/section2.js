/* eslint-disable */

import {Style2} from "../../responsive-lib";

export const section2 = new Style2('section2')
    .addMediaQuery({orientation: "portrait"}, {

    })
    .addMediaQuery({orientation: "landscape"}, {
        ".section2 .content-container .left, .section2 .content-container .right": {
            width: "580px"
        },
        ".section2 .content-container .right .codeLines": {
            padding: "30px 35px 35px 35px"
        },



    })
    .update()
