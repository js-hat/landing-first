/* eslint-disable */


import {Style2} from "../../responsive-lib";

export const section7 = new Style2('section7')
    .addMediaQuery({orientation: "portrait"}, {
        ".section7 .content-container .left img": {
            bottom: "5px"
        },
        ".section7 .content-container .right": {
            paddingLeft: "0px",
            marginTop: "30px"
        },
        ".section7 .content-container .right > p": {
            padding: "10px 0"
        },
        ".section7 .content-container .right .list": {
            gap: "10px"
        },
        ".section7 .content-container .right .list .item": {
            gap: "10px"
        },
        ".section7 .content-container .right .list .item .img-container": {
            width: "40px",
            height: "40px"
        },
        ".section7 .content-container .right .list .item .content": {
            height: "50px"
        }
    })
    .addMediaQuery({orientation: "landscape"}, {
        ".section7 .content-container .left img": {
            bottom: "15px"
        },
        ".section7 .content-container .right": {
            paddingLeft: "80px"
        },
        ".section7 .content-container .right > p": {
            padding: "10px 0"
        },
        ".section7 .content-container .right .list": {
            gap: "40px"
        },
        ".section7 .content-container .right .list .item": {
            gap: "15px"
        },
        ".section7 .content-container .right .list .item .img-container": {
            width: "50px",
            height: "50px"
        },
        ".section7 .content-container .right .list .item .content": {
            height: "50px"
        }
    })
    .update()
