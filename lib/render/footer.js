import { SITE } from "../config";

export function renderFooter(){

return `

<footer class="footer">

© ${new Date().getFullYear()}
${SITE.name}
— Built for speed ⚡

</footer>

`;

}
