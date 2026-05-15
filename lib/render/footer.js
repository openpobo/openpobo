import { SITE, kategoriUrl, kategoriPostUrl, sanitizeSlug } from "../config";
import { renderFooterNav } from "./nav-footer";

export function renderFooter(props = {}){
	const post = props.post || {};
	const kategori = post.kategori || "";
	const kategoriLink = kategori ? kategoriUrl(kategori) : "";
	const postLink = post.slug ? kategoriPostUrl(post) : "";

	// ====================== CTA KATEGORI ======================
	let ctaTitle = "";
	let ctaText = "";

	if(kategori === "seo"){
		ctaTitle = "Belajar SEO Lebih Dalam";
		ctaText = "Temukan strategi ranking, keyword, dan optimasi SEO terbaru.";
	}else if(kategori === "blog"){
		ctaTitle = "Tips Blogging";
		ctaText = "Pelajari cara membuat blog cepat dan SEO friendly.";
	}else if(kategori === "teknologi"){
		ctaTitle = "Update Teknologi";
		ctaText = "Ikuti perkembangan AI, tools, dan teknologi terbaru.";
	}

	return `
<footer class="footer">
${kategori ? `
<div class="footer-cta">
<h3>${ctaTitle}</h3>
<p>${ctaText}</p>
<a href="${kategoriLink}">Lihat Artikel ${kategori}</a>
</div>
` : ""}
${post.slug ? `
<div class="footer-post">
<a href="${postLink}">${post.title || post.slug}</a>
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
