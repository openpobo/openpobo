import { SITE, kategoriUrl, kategoriPostUrl } from "../config";
import { renderFooterNav } from "./nav-footer";

export function renderFooter(props = {}){
	const post = props.post || {};
	const kategori = post.kategori || "";
	const kategoriLink = kategori ? kategoriUrl(kategori) : "";
	const postLink = post.slug ? kategoriPostUrl(post) : "";

	let ctaTitle = "";
	let ctaText = "";

	if(kategori === "seo"){
		ctaTitle = "Belajar SEO Lebih Dalam";
		ctaText = "Strategi ranking, keyword, dan optimasi terbaru.";
	}else if(kategori === "blog"){
		ctaTitle = "Tips Blogging";
		ctaText = "Cara membuat blog cepat, rapi, dan SEO friendly.";
	}else if(kategori === "teknologi"){
		ctaTitle = "Update Teknologi";
		ctaText = "AI, tools, dan teknologi digital terbaru.";
	}

	return `
<footer class="footer">

  ${kategori ? `
  <div class="footer-cta">
    <div class="footer-cta-text">
      <h3>${ctaTitle}</h3>
      <p>${ctaText}</p>
    </div>
    <a class="footer-cta-btn" href="${kategoriLink}">
      Lihat Artikel ${kategori}
    </a>
  </div>
  ` : ""}

  <div class="footer-grid">
    <div class="footer-brand">
      <h3>${SITE.name}</h3>
      <p>Platform AI modern untuk produktivitas digital.</p>
    </div>

    <div class="footer-nav">
      ${renderFooterNav(props)}
    </div>
  </div>

  ${post.slug ? `
  <div class="footer-post">
    <a href="${postLink}">
      Lanjut baca: ${post.title || post.slug}
    </a>
  </div>
  ` : ""}

  <p class="footer-bottom">
    © ${new Date().getFullYear()} ${SITE.name}
  </p>

</footer>
`;
}
