/* eslint-disable */


import {Style2} from "../../responsive-lib";

export const section1 = new Style2('section1')
    .addMediaQuery({orientation: "portrait"}, {
        ".section1 .circle-container": {
            gap: "32px",
            width: "375px",
            height: "375px",
            top: "675px"
        },
        ".section1 .services .service": {
            width: "160px",
            height: "160px",
        },
        ".section1 .services .service:nth-child(1), .section1 .services .service:nth-child(2)": {
            top: "120px",
        },
        ".section1 .services .service:nth-child(5)": {
            width: "80px",
            height: "80px"
        },
        ".section1 .services .service:nth-child(6)": {
            width: "80px",
            height: "80px"
        },
        ".section1 .services .service i": {
            fontSize: "20px"
        },
        ".section1 .services .title": {
            gap: "20px"
        },
    })
    .addMediaQuery({orientation: "landscape"}, {
        ".section1 .circle-container": {
            gap: "32px",
            width: "950px",
            height: "950px",
        },
        ".section1 .circle-container h1": {
            width: "950px"
        },
        ".section1 .circle-container p": {
            width: "800px"
        },
        ".section1 .services .service": {
            width: "210px",
            height: "210px",
        },
        ".section1 .services .service:nth-child(5)": {
            width: "80px",
            height: "80px"
        },
        ".section1 .services .service:nth-child(6), .section1 .services .service:nth-child(7)": {
            width: "150px",
            height: "150px"
        },
        ".section1 .services .service i": {
            fontSize: "30px"
        },
        ".section1 .services .title": {
            gap: "50px"
        },


    })
    .update()
