/* eslint-disable */


import {Style2} from "../responsive-lib";

export const header = new Style2('header')
    .addMediaQuery({orientation: "portrait"}, {

    })
    .addMediaQuery({orientation: "landscape"}, {
        "header": {
            paddingTop: "20px"
        },

        "header .header-container": {
            width: "1300px"
        },
        "header .header-container .logo": {
            width: "140px"
        },
        "header .header-container .menu": {
            gap: "20px"
        }

    })
    .update()
