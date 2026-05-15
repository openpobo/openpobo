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
