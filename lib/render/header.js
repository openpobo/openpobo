import { SITE } from "../config";

export function renderHeader(){

return `

<header class="header">

<div class="header-wrap">

<a href="/" class="logo">
⚡ ${SITE.name}
</a>

<nav class="nav">

<a href="/">
Home
</a>

<a href="/kategori/seo">
SEO
</a>

<a href="/kategori/blog">
Blog
</a>

<a href="/kategori/teknologi">
Teknologi
</a>

</nav>

</div>

</header>

`;

}
