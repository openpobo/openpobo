import {
SITE,
kategoriUrl,
kategoriPostUrl
} from "../config";

import {
renderHeaderNav
} from "./nav-header";

export function renderHeader(props = {}){

const post =
props.post || {};

const kategori =
post.kategori || "";

const kategoriLink =
kategori
? kategoriUrl(kategori)
: "";

const postLink =
post.slug
? kategoriPostUrl(post)
: "";

return `

<header class="header">

<div class="header-wrap">

<a href="/" class="logo">

⚡ ${SITE.name}

</a>

<nav class="nav">

${renderHeaderNav(props)}

</nav>

</div>

${kategori ? `

<div class="header-category">

<a href="${kategoriLink}">
${kategori}
</a>

</div>

` : ""}

${post.slug ? `

<div class="header-post">

<a href="${postLink}">
${post.title || post.slug}
</a>

</div>

` : ""}

</header>

`;

}
