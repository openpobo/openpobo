import { layout } from "../lib/render";
import { getPosts } from "../lib/api";
import { SITE, canonical, cardImage, postUrl } from "../lib/config";

export async function onRequest(context){
	try{
		const reqUrl = new URL(context.request.url);
		const page = parseInt(reqUrl.searchParams.get("page")) || 1;

		const posts = await getPosts();

		const perPage = 12;
		const totalPage = Math.ceil(posts.length / perPage);

		const start = (page - 1) * perPage;
		const currentPosts = posts.slice(start, start + perPage);

		const grid = currentPosts.map(p => `
			<div class="card">
				<a href="${postUrl(p)}">
					${cardImage(`/og/${p.slug}`, p.title)}
					<h3>${p.title}</h3>
				</a>
			</div>
		`).join("");

		return layout({
			title: SITE.name,
			description: SITE.description,
			canonical: canonical(page > 1 ? "/?page=" + page : "/"),

			schema: `
${page > 1 ? '<meta name="robots" content="noindex,follow">' : ""}
<script type="application/ld+json">
{
	"@context": "https://schema.org",
	"@type": "WebSite",
	"name": "${SITE.name}",
	"url": "${SITE.domain}"
}
</script>
			`,

			content: `
<!-- HERO -->
<section class="hero">
	<div class="container">
		<h1>🚀 ${SITE.name}</h1>
		<p>Artikel SEO dan teknologi terbaru</p>
	</div>
</section>

<!-- CATEGORY -->
<section class="section">
	<div class="container">

		<h2 class="section-title">Kategori Populer</h2>

		<div class="grid">
			<a class="card" href="/seo"><h3>SEO</h3></a>
			<a class="card" href="/blog"><h3>Blog</h3></a>
			<a class="card" href="/teknologi"><h3>Teknologi</h3></a>
		</div>

	</div>
</section>

<!-- SEARCH -->
<section class="section">
	<div class="container">

		<input class="search" id="search" type="search"
			placeholder="Cari artikel..." autocomplete="off">

		<div id="results"></div>

	</div>
</section>

<!-- POSTS -->
<section class="section">
	<div class="container">

		<h2 class="section-title">Artikel Terbaru</h2>

		<div class="grid">
			${grid}
		</div>

		${pagination(page, totalPage)}

	</div>
</section>
			`
		});

	}catch(e){
		return new Response("Error: " + e.message, { status: 500 });
	}
}
