import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { isMobile } from "react-device-detect";

const globalstyles = createGlobalStyle`
${reset};
     a{
         text-decoration:none;
     }
     *{
         box-sizing:boerder-box;
         word-break: keep-all;
     }
     #root {
         min-width : ${isMobile ? "unset" : "1280px"};
        position: relative;
        ::before {
        content: "";
        position: ${isMobile ? "none" : "absolute"};
        bottom: 0;
        left: 0;
        width: 100%;
        height: 900px;
        background-repeat: no-repeat;
        background-position: bottom center;
        background-image: url(${require("../assets/bg2.png")});
        transform: rotate(180deg);
        z-index: -1;
  }
     }
     body{
         font-size: 14px;
         font-family : "notopen_numbers";
         height : 100%;

     }
     html, body, div, span, applet, object, iframe,

h1, h2, h3, h4, h5, h6, p, blockquote, pre,

a, abbr, acronym, address, big, cite, code,

del, dfn, em, img, ins, kbd, q, s, samp,

small, strike, strong, sub, sup, tt, var,

b, u, i, center,

dl, dt, dd, ol, ul, li,

fieldset, form, label, legend,

table, caption, tbody, tfoot, thead, tr, th, td,

article, aside, canvas, details, embed, 

figure, figcaption, footer, header, hgroup, 

menu, nav, output, ruby, section, summary,

time, mark, audio, video {

    margin: 0;

    padding: 0;

    border: 0;


}
     @font-face {
         font-family: "notopen_numbers";
         src: url(${require("../assets/notopen_numbers.ttf")});
     }
`;

export default globalstyles;
