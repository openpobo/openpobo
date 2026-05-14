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
		const currentPosts = posts.slice(start,start + perPage);

		const grid = currentPosts.map(p=>`
			<div class="card">
				<a href="${postUrl(p)}">
					${cardImage(`/og/${p.slug}`,p.title)}
					<h3>${p.title}</h3>
				</a>
			</div>
		`).join("");

		return layout({
			title:SITE.name,
			description:SITE.description,
			canonical:canonical(page > 1 ? "/?page=" + page : "/"),
			schema:`
${page > 1 ? '<meta name="robots" content="noindex,follow">' : ""}
<script type="application/ld+json">
{
"@context":"https://schema.org",
"@type":"WebSite",
"name":"${SITE.name}",
"url":"${SITE.domain}"
}
</script>
`,
			content:`
<div class="hero">
<h1>🚀 ${SITE.name}</h1>
<p>Artikel SEO dan teknologi terbaru</p>
</div>

<section>
<h2>Kategori Populer</h2>

<div class="grid">
<a class="card" href="/seo"><h3>SEO</h3></a>
<a class="card" href="/blog"><h3>Blog</h3></a>
<a class="card" href="/teknologi"><h3>Teknologi</h3></a>
</div>
</section>

<input class="search" id="search" type="search" placeholder="Cari artikel..." autocomplete="off">

<div id="results"></div>

<h2>Artikel Terbaru</h2>

<div class="grid">
${grid}
</div>

${pagination(page,totalPage)}

${searchScript()}
`
		});
	}catch(e){
		return new Response("Error: " + e.message,{ status:500 });
	}
}

function pagination(current,total){
	if(total <= 1) return "";

	let html = `<div class="pagination">`;

	const group = Math.floor((current - 1) / 5);
	const start = group * 5 + 1;
	const end = Math.min(start + 4,total);

	if(start > 1){
		html += `<a href="/?page=${start - 1}">«</a>`;
	}

	for(let i = start; i <= end; i++){
		html += `<a href="/?page=${i}" class="${i === current ? "active" : ""}">${i}</a>`;
	}

	if(end < total){
		html += `<a href="/?page=${end + 1}">»</a>`;
	}

	html += `</div>`;
	return html;
}

function searchScript(){
	return `
<style>
/* SEARCH RESULTS */
#results{
	margin:14px 0 24px;
	display:grid;
	gap:10px;
}

.search-item{
	display:block;
	padding:14px;
	border:1px solid var(--border);
	border-radius:12px;
	background:var(--card);
	color:var(--text);
	text-decoration:none;
	transition:.2s;
}

.search-item:hover{
	border-color:#3b82f6;
	transform:translateY(-2px);
}

.search-item h4{
	margin:0;
	font-size:15px;
	line-height:1.5;
}

/* PAGINATION */
.pagination{
	display:flex;
	gap:8px;
	justify-content:center;
	margin:30px 0;
	flex-wrap:wrap;
}

.pagination a{
	padding:8px 12px;
	border:1px solid var(--border);
	border-radius:10px;
	text-decoration:none;
	color:var(--muted);
	background:var(--card);
	transition:.2s;
	font-size:14px;
}

.pagination a:hover{
	color:var(--text);
	border-color:#3b82f6;
}

.pagination a.active{
	background:#3b82f6;
	color:#fff;
	border-color:#3b82f6;
}

/* MOBILE FIX */
@media(max-width:768px){
	.hero{
		padding:60px 0;
	}

	.hero h1{
		font-size:28px;
	}
}
</style>

<script>
const input = document.getElementById("search");
const results = document.getElementById("results");

let timer;

input?.addEventListener("input",e=>{

clearTimeout(timer);

const q = e.target.value.trim();

if(q.length < 2){
results.innerHTML = "";
return;
}

timer = setTimeout(async()=>{

try{

const res = await fetch("/search?q=" + encodeURIComponent(q));

const data = await res.json();

results.innerHTML = data.map(d=>\`
	<a class="search-item" href="/\${d.kategori}/\${d.slug}">
		<h4>\${d.title}</h4>
	</a>
\`).join("");

}catch{

results.innerHTML = "";

}

},300);

});
</script>
`;
}
