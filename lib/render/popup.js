import {
SITE,
kategoriUrl,
escapeHTML
} from "../config";

export function renderPopup(props = {}){

const post =
props.post || {};

const kategori =
(post.kategori || "umum")
.toLowerCase();

const kategoriLink =
kategoriUrl(kategori);

const title =
post.title || SITE.name;

// ======================
// CTA URL PER KATEGORI
// ======================

const CTA = {

blog:{

login:
"https://example.com/menujuguaffiliateblog",

register:
"https://example.com/daftarblog"

},

seo:{

login:
"https://example.com/menujuguaffiliateseo",

register:
"https://example.com/daftarseo"

},

teknologi:{

login:
"https://example.com/menujuguaffiliatetech",

register:
"https://example.com/daftarteknologi"

}

};

const cta =
CTA[kategori] || {};

const loginUrl =
cta.login || kategoriLink;

const registerUrl =
cta.register || kategoriLink;

return `

<div
class="popup-overlay"
id="popupOverlay"
>

<div class="popup-container">

<div
class="close-btn"
onclick="closePopup()"
></div>

<div
class="gold-particle"
style="
width:10px;
height:10px;
top:15%;
left:12%;
animation-delay:0s;
"
></div>

<div
class="gold-particle"
style="
width:8px;
height:8px;
top:35%;
left:88%;
animation-delay:1.5s;
"
></div>

<div
class="gold-particle"
style="
width:12px;
height:12px;
top:65%;
left:18%;
animation-delay:3s;
"
></div>

<div
class="gold-particle"
style="
width:6px;
height:6px;
top:25%;
left:75%;
animation-delay:4.5s;
"
></div>

<div
class="gold-particle"
style="
width:9px;
height:9px;
top:80%;
left:60%;
animation-delay:6s;
"
></div>

<div class="luxury-border"></div>

<div class="popup-content">

<img
src="https://g288-image-dashboard.g4yimages.workers.dev/i/906006fa-8a98-4498-b50b-7a2707d6a9e8"
alt="${escapeHTML(title)}"
class="popup-image"
/>

<div
class="clk-btn-sgp"
style="font-size:20px;"
>

<a
href="${loginUrl}"
target="_blank"
rel="nofollow noreferrer"
class="login"
>
LOGIN
</a>

<a
href="${registerUrl}"
target="_blank"
rel="nofollow noreferrer"
class="register"
>
DAFTAR
</a>

</div>

<div class="popup-footer">

${escapeHTML(title)}

<br>

<span
style="
color:#6A994E;
font-weight:600;
text-shadow:0 0 5px rgba(212,175,55,.5);
"
>

© COPYRIGHT
${new Date().getFullYear()}
${SITE.name}

</span>

</div>

</div>

</div>

</div>

`;

}
