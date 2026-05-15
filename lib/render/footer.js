import { SITE, kategoriUrl, kategoriPostUrl } from "../config";

export function renderFooter(props = {}){
	const post = props.post || {};
	const kategoriList = props.kategoriList || [];
	const posts = props.posts || [];

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

	// ====================== KATEGORI LIST (MAX 5) ======================
	const kategoriHtml = kategoriList?.length
		? kategoriList.slice(0, 5).map(k => `
			<a href="${kategoriUrl(k)}">${k}</a>
		`).join("")
		: "";

	// ====================== POST LIST (MAX 5) ======================
	const postHtml = posts?.length
		? posts.slice(0, 5).map(p => `
			<a href="${kategoriPostUrl(p)}">
				📰 ${p.title || p.slug}
			</a>
		`).join("")
		: "";

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

    <div class="footer-menu">
      <h4>Kategori</h4>

      <a href="/terms">Terms</a>
      <a href="/disclaimer">Disclaimer</a>
      <a href="/pedoman-media-siber">Pedoman Media Siber</a>
      <a href="/rss.xml">RSS Feed</a>

      ${kategoriHtml}
    </div>

    <div class="footer-menu">
      <h4>Postingan Terbaru</h4>

      <a href="/about">Tentang Kami</a>
      <a href="/contact">Contact</a>
      <a href="/privacy-policy">Privacy Policy</a>

      ${postHtml}
    </div>

  </div>

  ${kategori ? `
    <div class="footer-menu">
      <h4>${ctaTitle}</h4>
      <p>${ctaText}</p>
      <a href="${kategoriLink}">
        Lihat Artikel ${kategori}
      </a>
    </div>
  ` : ""}

  <div class="footer-bottom">
    © ${new Date().getFullYear()} ${SITE.name} • All Rights Reserved
  </div>
</footer>
`;
}
