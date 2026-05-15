import { SITE } from "../config";
import { renderHeaderNav } from "./nav-header";

export function renderHeader(props = {}){
	return `
<header class="header">
<div class="header-wrap">
<a href="/" class="logo">⚡ ${SITE.name}</a>
<nav class="nav">
${renderHeaderNav()}
</nav>
</div>
</header>
`;
}
