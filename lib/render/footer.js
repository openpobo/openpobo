import {
SITE,
kategoriUrl,
kategoriPostUrl,
sanitizeSlug
} from "../config";

import {
renderFooterNav
} from "./nav-footer";

export function renderFooter(props = {}){

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

<footer class="footer">

${kategori ? `

<div class="footer-category">

<a href="${kategoriLink}">
${kategori}
</a>

</div>

` : ""}

${post.slug ? `

<div class="footer-post">

<a href="${postLink}">
${post.title || post.slug}
</a>

</div>

` : ""}

<div class="footer-nav">

${renderFooterNav(props)}

</div>

<p>

© ${new Date().getFullYear()}
${SITE.name}

</p>

</footer>

`;

}
