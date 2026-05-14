import { layout } from "../../lib/render";
import { canonical, sanitizeSlug, cardImage } from "../../lib/config";
import { getByKategori } from "../../lib/api";

export async function onRequest(context){
	try{
		const { slug } = context.params;
		const kategori = sanitizeSlug(slug);

		const reqUrl = new URL(context.request.url);
		const page = parseInt(reqUrl.searchParams.get("page")) || 1;

		const filtered = await getByKategori(kategori);

		const perPage = 12;
		const totalPage = Math.ceil(filtered.length / perPage);

		const start = (page - 1) * perPage;
		const currentPosts = filtered.slice(start, start + perPage);

		const grid = currentPosts.map(p => `
			<div class="card">
				<a href="/${sanitizeSlug(p.kategori)}/${sanitizeSlug(p.slug)}">
					${cardImage(`/og/${sanitizeSlug(p.slug)}`, p.title)}
					<h3>${escapeHtml(p.title)}</h3>
				</a>
			</div>
		`).join("");

		const title = `Kategori ${toTitle(kategori)}`;

		return layout({
			title,
			description: `Artikel dalam kategori ${title}`,
			canonical: canonical(
				page > 1
					? `/kategori/${kategori}?page=${page}`
					: `/kategori/${kategori}`
			),

			content: `
<h1>${title}</h1>

<div class="grid">
	${grid}
</div>

${pagination(page, totalPage, kategori)}
`
		});

	}catch(e){
		return new Response("Error: " + e.message, { status:500 });
	}
}
