import { kategoriUrl, kategoriPostUrl } from "../config";

export function renderFooterNav(props = {}){
	const post = props.post || {};
	const kategori = post.kategori || "";

	const menus = [
		{ name:"About", url:"/about" },
		{ name:"Contact", url:"/contact" },
		{ name:"Privacy", url:"/privacy-policy" },
		{ name:"RSS", url:"/rss.xml" },
		{ name:"Sitemap", url:"/sitemap.xml" }
	];

	if(kategori){
		menus.push({ name:kategori, url:kategoriUrl(kategori) });
	}

	if(post.slug){
		menus.push({ name:post.title || post.slug, url:kategoriPostUrl(post) });
	}

	return menus.map(m => `<a href="${m.url}">${m.name}</a>`).join("");
}
