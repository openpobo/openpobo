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

	if(kategori){
		menus.push({ name: kategori, url: kategoriUrl(kategori) });
	}

	if(post.slug){
		menus.push({ name: post.title || post.slug, url: kategoriPostUrl(post) });
	}

	return `
<div class="nav-links">
  ${menus.map(m => `
    <a class="nav-link" href="${m.url}">${m.name}</a>
  `).join("")}
</div>
`;
}
