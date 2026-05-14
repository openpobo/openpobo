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

	// kategori aktif
	if(kategori){
		menus.push({
			name: kategori,
			url: kategoriUrl(kategori)
		});
	}

	// post aktif
	if(post.slug){
		menus.push({
			name: post.title || post.slug,
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
