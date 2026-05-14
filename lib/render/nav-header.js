import { kategoriUrl,kategoriPostUrl } from "../config";

export function renderHeaderNav(props = {}){
	const post = props.post || {};
	const kategori = post.kategori || "";

	const menus = [
		{
			name:"Home",
			url:"/"
		},
		{
			name:"SEO",
			url:kategoriUrl("seo")
		},
		{
			name:"Blog",
			url:kategoriUrl("blog")
		},
		{
			name:"Teknologi",
			url:kategoriUrl("teknologi")
		}
	];

	// tambah kategori post aktif
	if(kategori){
		menus.push({
			name:kategori,
			url:kategoriUrl(kategori)
		});
	}

	// tambah post aktif
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
