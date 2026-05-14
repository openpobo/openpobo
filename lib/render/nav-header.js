import { kategoriUrl, kategoriPostUrl } from "../config";

export function renderHeaderNav(props = {}){
	const post = props.post || {};
	const kategori = post.kategori || "";

	const menus = [
		{ name: "Home", url: "/" },
		{ name: "SEO", url: kategoriUrl("seo") },
		{ name: "Blog", url: kategoriUrl("blog") },
		{ name: "Teknologi", url: kategoriUrl("teknologi") }
	];

	// ❗ HANYA TAMBAH POST AKTIF (kategori aktif DIHAPUS)
	if(post.slug){
		menus.push({
			name: post.title || "Artikel",
			url: kategoriPostUrl(post)
		});
	}

	return `
<div class="nav-links">
  ${menus.map(menu => `
    <a class="nav-link" href="${menu.url}">
      ${menu.name}
    </a>
  `).join("")}
</div>
`;
}
