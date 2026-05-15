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
  <div class="footer-wrap">

    <div class="footer-brand">
      <h3>⚡ ${SITE.name}</h3>
      <p>
        Platform informasi aplikasi penghasil cuan,
        AI modern, teknologi digital,
        tips internet, dan tren online terbaru
        dengan tampilan cepat, ringan,
        dan modern.
      </p>
    </div>
	
  ${kategori ? `
    <div class="footer-menu" style="margin-top:20px; text-align:center;">
	  <h4>Kategori</h4>
      <a href="${kategoriLink}">
        Lihat Artikel ${kategori}
      </a>
    </div>
  ` : ""}

  ${post?.slug ? `
        <div class="footer-menu">
      <h4>Postingan</h4>
      <a href="${postLink}">
        📰 ${post.title || post.slug}
      </a>
    </div>
  ` : ""}

  <div class="footer-bottom">
    © ${new Date().getFullYear()} ${SITE.name} • All Rights Reserved
  </div>
</footer>
`;
}
