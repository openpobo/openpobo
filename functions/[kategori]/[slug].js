import { layout } from "../../lib/render";
import {
  SITE,
  canonical,
  ogImage as buildOg,
  sanitizeSlug,
  stripHTML,
  readingTime,
  postImage,
  cardImage,
  kategoriUrl
} from "../../lib/config";

import { getPosts, getPost } from "../../lib/api";

export async function onRequest(context){
	try{
		let { kategori, slug } = context.params;

		kategori = sanitizeSlug(kategori);
		slug = sanitizeSlug(slug);

		const post = await getPost(slug);

		if(!post || sanitizeSlug(post.kategori) !== kategori){
			return new Response("404 Not Found", { status:404 });
		}

		const posts = await getPosts();

		const related = posts
			.filter(p =>
				sanitizeSlug(p.slug) !== slug &&
				sanitizeSlug(p.kategori) === kategori
			)
			.sort(() => 0.5 - Math.random())
			.slice(0, 6);

		const safeContent = autoLink(post.content, related);

		const read = readingTime(post.content);
		const desc = stripHTML(post.content).slice(0,160);

		const postUrl = `/${kategori}/${slug}`;
		const og = buildOg(slug);

		const breadcrumb = `
<nav class="breadcrumb">
	<a href="/">Home</a>
	›
	<a href="${kategoriUrl(kategori)}">${post.kategori}</a>
	›
	<span>${post.title}</span>
</nav>
`;

		const schema = `
<script type="application/ld+json">
{
	"@context":"https://schema.org",
	"@type":"BlogPosting",
	"headline":"${escapeHtml(post.title)}",
	"description":"${escapeHtml(desc)}",
	"image":"${og}",
	"mainEntityOfPage":"${canonical(postUrl)}",
	"author":{
		"@type":"Organization",
		"name":"${SITE.name}"
	},
	"publisher":{
		"@type":"Organization",
		"name":"${SITE.name}"
	}
}
</script>
`;

		return layout({
			post,
			title: post.title,
			description: desc,
			canonical: canonical(postUrl),
			image: og,
			schema,
			content: `
${breadcrumb}

<article class="post">
	${postImage(og, post.title)}

	<h1>${post.title}</h1>

	<p>⏱ ${read} min read</p>

	<div class="post-content">
		${safeContent}
	</div>
</article>

<h3>Artikel Terkait</h3>

<div class="grid">
	${related.map(p => `
	<div class="card">
		<a href="/${sanitizeSlug(p.kategori)}/${sanitizeSlug(p.slug)}">
			${cardImage(`/og/${sanitizeSlug(p.slug)}`, p.title)}
			<h4>${escapeHtml(p.title)}</h4>
		</a>
	</div>
	`).join("")}
</div>
`
		});

	}catch(e){
		return new Response("Error: " + e.message, { status:500 });
	}
}
