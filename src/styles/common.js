/* eslint-disable */

import {Style2} from "../responsive-lib";

export const common = new Style2('common')
    .addMediaQuery({orientation: "portrait"}, {

    })
    .addMediaQuery({orientation: "landscape"}, {
        ".button-round": {
            padding: "12px 18px",
            fontSize: "15px",
        },
        ".button-small": {
            fontSize: "12px",
        },
        ".button-rect": {
            padding: "14px 22px",
            fontSize: "13px",
        },


    })
    .update()
