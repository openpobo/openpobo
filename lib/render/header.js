import { SITE } from "../config";
import { renderHeaderNav } from "./nav-header";

export function renderHeader(props = {}){
	return `
<header class="header">
  <div class="header-wrap">

    <!-- LEFT: MENU TOGGLE -->
    <button class="menu-btn" id="menuBtn">☰</button>

    <!-- CENTER: LOGO -->
    <a href="/" class="logo">⚡ ${SITE.name}</a>

    <!-- RIGHT: THEME -->
    <button class="theme-btn" id="themeBtn">🌙</button>

    <!-- NAV -->
    <nav class="nav" id="navMenu">

      <!-- CLOSE BUTTON (mobile + desktop) -->
      <button class="close-menu" id="closeMenu">✕</button>

      ${renderHeaderNav()}
    </nav>

  </div>
</header>
`;
}
