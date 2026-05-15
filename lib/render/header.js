import { SITE } from "../config";
import { renderHeaderNav } from "./nav-header";

export function renderHeader(props = {}){
	return `
<header class="header">
  <div class="header-wrap">

    <a href="/" class="logo">⚡ ${SITE.name}</a>

    <!-- tombol mobile -->
    <button class="menu-btn" id="menuBtn">☰</button>

    <!-- nav -->
    <nav class="nav" id="navMenu">
      ${renderHeaderNav()}
    </nav>

    <!-- dark mode toggle -->
    <button class="theme-btn" id="themeBtn">🌙</button>

  </div>
</header>
`;
}
