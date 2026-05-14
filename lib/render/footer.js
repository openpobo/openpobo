import { SITE } from "../config";

import {
  renderFooterNav
} from "./nav-footer";

export function renderFooter(){

return `

<footer class="footer">

<div class="footer-nav">

${renderFooterNav()}

</div>

<p>

© ${new Date().getFullYear()}
${SITE.name}

</p>

</footer>

`;

}
