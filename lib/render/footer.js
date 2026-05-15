import { SITE } from "../config";
import { renderFooterNav } from "./nav-footer";

export function renderFooter(props = {}){
	const post = props.post || {};
	const kategori = post.kategori || "";

	let ctaTitle = "";
	let ctaText = "";

	if(kategori === "seo"){
		ctaTitle = "Belajar SEO Lebih Dalam";
		ctaText = "Strategi ranking & optimasi terbaru.";
	}else if(kategori === "blog"){
		ctaTitle = "Tips Blogging";
		ctaText = "Bangun blog cepat & SEO friendly.";
	}else if(kategori === "teknologi"){
		ctaTitle = "Update Teknologi";
		ctaText = "AI & tools digital terbaru.";
	}

	return `
<footer class="footer">

  ${kategori ? `
  <div class="footer-cta">
    <h3>${ctaTitle}</h3>
    <p>${ctaText}</p>
    <a href="/kategori/${kategori}">Lihat Artikel</a>
  </div>
  ` : ""}

  <div class="container footer-grid">

    <div class="footer-brand">
      <h3>${SITE.name}</h3>
      <p>Platform AI modern untuk produktivitas digital.</p>
    </div>

    <div class="footer-right">
      <div class="footer-box">
        <h4>MENU</h4>
        ${renderFooterNav(props)}
      </div>

      <div class="footer-box">
        <h4>INFO</h4>
        <a href="/contact">Contact</a>
        <a href="/privacy-policy">Privacy</a>
        <a href="/faq">FAQ</a>
      </div>
    </div>

  </div>

  <div class="footer-bottom">
    © ${new Date().getFullYear()} ${SITE.name}
  </div>

</footer>
`;
}
