import {
sanitizeSlug
} from "../config";

export function renderFooter(props={}){

const post =
props.post || {};

const kategori =
post.kategori || "";

const kategoriUrl =
"/kategori/" +
sanitizeSlug(kategori);

return `

<footer class="footer">

${kategori ? `

<a href="${kategoriUrl}">
${kategori}
</a>

` : ""}

<p>

© ${new Date().getFullYear()}

</p>

</footer>

`;

}
