import { kategoriUrl,kategoriPostUrl } from "../config";

export function renderFooterNav(props = {}){
	const post = props.post || {};
	const kategori = post.kategori || "";

	const menus = [
		{
			name:"About",
			url:"/about"
		},
		{
			name:"Contact",
			url:"/contact"
		},
		{
			name:"Privacy Policy",
			url:"/privacy-policy"
		},
		{
			name:"RSS",
			url:"/rss.xml"
		},
		{
			name:"Sitemap",
			url:"/sitemap.xml"
		}
	];

	// kategori aktif
	if(kategori){
		menus.push({
			name:kategori,
			url:kategoriUrl(kategori)
		});
	}

	// post aktif
	if(post.slug){
		menus.push({
			name:post.title || post.slug,
			url:kategoriPostUrl(post)
		});
	}

	return menus.map(menu=>`
<a href="${menu.url}">
${menu.name}
</a>
`).join("");
}
