import { SITE } from "../config";
import { renderHeaderNav } from "./nav-header";

export function renderHeader(props = {}){
	return `
<header class="header">
  <div class="container header-wrap">

    <a href="/" class="logo">⚡ ${SITE.name}</a>

    <button class="menu-btn" onclick="toggleMenu()">☰</button>
    <button class="theme-btn" onclick="toggleTheme()">🌙</button>

    <nav class="nav" id="navMenu">
      <button class="close-btn" onclick="toggleMenu()">✕</button>
      ${renderHeaderNav(props)}
    </nav>

  </div>
</header>
`;
}
