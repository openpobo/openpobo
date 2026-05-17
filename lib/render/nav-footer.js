import { API_BASE, kategoriUrl, kategoriPostUrl } from "../config";

export async function renderFooterNav(props = {}){
	const post = props.post || {};
	const kategori = post.kategori || "";

	const staticMenus = [
		{ name:"About", url:"/about" },
		{ name:"Contact", url:"/contact" },
		{ name:"Privacy Policy", url:"/privacy-policy" },
		{ name:"RSS", url:"/rss.xml" },
		{ name:"Sitemap", url:"/sitemap.xml" }
	];

	const kategoriMenus = [];

	if(kategori){
		kategoriMenus.push({
			name:kategori,
			url:kategoriUrl(kategori)
		});
	}

	const latestMenus = [];
	const popularMenus = [];

	try{
		const footer =
		await fetch(`${API_BASE}/footer`)
		.then(r => r.json());

		// ====================== LATEST POSTS ======================
		(footer.latest || []).slice(0,5).forEach(p => {
			latestMenus.push({
				name:p.title,
				url:kategoriPostUrl(p)
			});
		});

		// ====================== POPULAR POSTS ======================
		(footer.popular || []).slice(0,5).forEach(p => {
			popularMenus.push({
				name:p.title,
				url:kategoriPostUrl(p)
			});
		});

	}catch(e){}

	return `
<div class="footer-menu">
<h4>Menu</h4>
${staticMenus.map(menu => `<a href="${menu.url}">${menu.name}</a>`).join("")}
</div>

<div class="footer-menu">
<h4>Kategori</h4>
${kategoriMenus.map(menu => `<a href="${menu.url}">${menu.name}</a>`).join("")}
</div>

<div class="footer-menu">
<h4>Latest</h4>
${latestMenus.map(menu => `<a href="${menu.url}">${menu.name}</a>`).join("")}
</div>

<div class="footer-menu">
<h4>Popular</h4>
${popularMenus.map(menu => `<a href="${menu.url}">${menu.name}</a>`).join("")}
</div>
`;
}
