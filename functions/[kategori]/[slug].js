import { layout } from "../../lib/render";
import { SITE, canonical, ogImage as buildOg, sanitizeSlug, stripHTML, readingTime, postImage, cardImage } from "../../lib/config";
import { getPosts, getPost } from "../../lib/api";

export async function onRequest(context){
	try{
		let { kategori, slug } = context.params;

		kategori = sanitizeSlug(kategori);
		slug = sanitizeSlug(slug);

		// ====================== GET POST ======================
		const post = await getPost(slug);

		// ====================== VALIDASI ======================
		if(!post || sanitizeSlug(post.kategori) !== kategori){
			return new Response("404 Not Found",{ status:404 });
		}

		// ====================== RELATED POST ======================
		const posts = await getPosts();

		const related = posts.filter(p=>
			sanitizeSlug(p.slug) !== slug &&
			sanitizeSlug(p.kategori) === kategori
		).sort(() => 0.5 - Math.random()).slice(0,6);



// ====================== AUTO TOC ======================
const tocData = generateTOC(post.content);

post.content = tocData.html;

// ====================== AUTO TOC ======================
function generateTOC(content = ""){
	if(!content){
		return {
			html:content,
			toc:""
		};
	}

	const headings = [];

	const html = content.replace(
		/<h([2-3])>(.*?)<\/h\1>/gi,
		(match,level,text)=>{
			const cleanText = stripHTML(text).trim();

			const id = sanitizeSlug(cleanText);

			headings.push({
				level:Number(level),
				text:cleanText,
				id
			});

			return `<h${level} id="${id}">${text}</h${level}>`;
		}
	);

	if(!headings.length){
		return {
			html,
			toc:""
		};
	}

	const toc = `
<details class="toc">
<summary class="toc-title">
<span>📑 Daftar Isi</span>
<span class="toc-toggle"></span>
</summary>

<ul>
${headings.map(h=>`
<li class="lv-${h.level}">
<a href="#${h.id}">
${h.text}
</a>
</li>
`).join("")}
</ul>

</details>
`;

	return {
		html,
		toc
	};
}
		// ====================== SEO ======================
		const read = readingTime(post.content);
		const desc = stripHTML(post.content).slice(0,160);
		const postUrl = `/${kategori}/${slug}`;

		const breadcrumb = `
<nav class="breadcrumb">
<a href="/">Home</a>
›
<a href="/kategori/${kategori}">
${post.kategori}
</a>
›
<span>
${post.title}
</span>
</nav>
`;

		const og = buildOg(slug);

		// ====================== JSON LD ======================
		const schema = `
<script type="application/ld+json">
{
"@context":"https://schema.org",
"@type":"BlogPosting",
"headline":"${post.title}",
"description":"${desc}",
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

<script type="application/ld+json">
{
"@context":"https://schema.org",
"@type":"BreadcrumbList",
"itemListElement":[
{
"@type":"ListItem",
"position":1,
"name":"Home",
"item":"${SITE.domain}/"
},
{
"@type":"ListItem",
"position":2,
"name":"${post.kategori}",
"item":"${SITE.domain}/kategori/${kategori}"
},
{
"@type":"ListItem",
"position":3,
"name":"${post.title}",
"item":"${SITE.domain}${postUrl}"
}
]
}
</script>
`;

		// ====================== RENDER ======================
		return layout({
			page: "post",
			post,
			title:post.title,
			description:desc,
			canonical:canonical(postUrl),
			image:og,
			schema,
			content:`


<article class="post">
<header class="post-header">
${breadcrumb}
<h1>${post.title} </h1>
<p class="meta"> ⏱ ${read} min read </p>
</header>
${postImage(og,post.title)}
${tocData.toc}
<div class="post-content">
${post.content}
</div>
</article>

<section class="related">
<h3>Artikel Terkait</h3>
<div class="grid">
${related.map(p=>`
<div class="card">
<a href="/${sanitizeSlug(p.kategori)}/${sanitizeSlug(p.slug)}">
${cardImage(`/og/${sanitizeSlug(p.slug)}`,p.title)}
<h4>
${p.title}
</h4>
</a>
</div>

`).join("")}

</div>
</section>
`
		});
	}catch(e){
		return new Response("Error: " + e.message,{
			status:500
		});
	}
}

