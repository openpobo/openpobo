import { SITE } from "../config";
import { renderHeaderNav } from "./nav-header";

export function renderHeader(props = {}){
	return `
<header class="header">
  <div class="header-wrap">

    <button class="menu-btn" id="menuBtn">☰</button>

    <a href="/" class="logo">⚡ ${SITE.name}</a>

    <nav class="nav" id="navMenu">
      
      <!-- CLOSE BUTTON (MOBILE ONLY) -->
      <button class="close-menu" id="closeMenu">✕</button>

      ${renderHeaderNav()}
    </nav>

    <button class="theme-btn" id="themeBtn">🌙</button>

  </div>
</header>
`;
}
