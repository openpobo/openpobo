import { SITE, sanitizeSlug } from "../../lib/config";
import { getPost } from "../../lib/api";

export async function onRequest(context){
	try{
		let { slug } = context.params;

		// ====================== SANITIZE SLUG ======================
		slug = sanitizeSlug(slug);

		// ====================== FETCH DATA ======================
		let post = null;

		try{
			post = await getPost(slug);
		}catch{}

		const title = post?.title || formatSlug(slug);
		const kategori = post?.kategori || "Blog";

         const kategoriText = `🔥 ${kategori}`;
         const badgeWidth = (kategoriText.length * 18) + 60;

		// ====================== AUTO CATEGORY COLOR ======================
		const categoryColor = stringToColor(kategori);

		// ====================== SITE ======================
		const siteName = SITE.name || "LebahHack";
		const logo = "🤖";

		// ====================== SVG ======================
		const svg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">

<defs>

<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
<stop offset="0%" stop-color="${categoryColor}"/>
<stop offset="100%" stop-color="#020617"/>
</linearGradient>

<linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
<stop offset="0%" stop-color="${categoryColor}"/>
<stop offset="100%" stop-color="#22d3ee"/>
</linearGradient>

<linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
<stop offset="0%" stop-color="rgba(255,255,255,0.12)"/>
<stop offset="100%" stop-color="rgba(255,255,255,0.03)"/>
</linearGradient>

<filter id="blur">
<feGaussianBlur stdDeviation="80"/>
</filter>

<filter id="shadow">
<feDropShadow dx="0" dy="10" stdDeviation="14" flood-opacity="0.35"/>
</filter>

</defs>

<!-- Background -->
<rect width="1200" height="630" rx="30" fill="url(#bg)"/>

<!-- Glow -->
<circle
cx="980"
cy="120"
r="240"
fill="${categoryColor}"
opacity="0.25"
filter="url(#blur)"
/>

<circle
cx="180"
cy="560"
r="180"
fill="#ffffff"
opacity="0.05"
filter="url(#blur)"
/>

<!-- Glass Container -->
<rect
x="40"
y="40"
width="1120"
height="550"
rx="28"
fill="url(#glass)"
stroke="rgba(255,255,255,0.08)"
/>

<!-- Grid -->
<g opacity="0.04">
<line x1="0" y1="100" x2="1200" y2="100" stroke="#fff"/>
<line x1="0" y1="300" x2="1200" y2="300" stroke="#fff"/>
<line x1="0" y1="500" x2="1200" y2="500" stroke="#fff"/>

<line x1="200" y1="0" x2="200" y2="630" stroke="#fff"/>
<line x1="400" y1="0" x2="400" y2="630" stroke="#fff"/>
<line x1="600" y1="0" x2="600" y2="630" stroke="#fff"/>
<line x1="800" y1="0" x2="800" y2="630" stroke="#fff"/>
<line x1="1000" y1="0" x2="1000" y2="630" stroke="#fff"/>
</g>

<!-- Category -->
<rect
x="90"
y="70"
rx="18"
ry="18"
width="${badgeWidth}"
height="56"
fill="${categoryColor}"
opacity="0.9"
/>

<text
x="125"
y="107"
fill="white"
font-size="26"
font-weight="bold"
font-family="sans-serif">
${escapeXML(kategoriText)}
</text>

<!-- Brand Top Right -->
<rect
x="760"
y="58"
width="360"
height="64"
rx="18"
fill="rgba(255,255,255,0.08)"
stroke="rgba(255,255,255,0.08)"
/>

<text
x="790"
y="100"
fill="white"
font-size="34"
font-weight="bold"
font-family="sans-serif">
⚡ ${escapeXML(siteName)}
</text>

<!-- Title -->
<text
x="90"
y="250"
fill="white"
font-size="64"
font-weight="bold"
font-family="sans-serif"
filter="url(#shadow)">
${wrapText(title,24)}
</text>

<!-- Accent Line -->
<rect
x="90"
y="420"
width="320"
height="5"
rx="10"
fill="url(#accent)"
opacity="0.9"
/>

<!-- Right Icon -->
<circle
cx="980"
cy="330"
r="120"
fill="rgba(255,255,255,0.08)"
/>

<text
x="935"
y="368"
font-size="88">
${logo}
</text>

<!-- Footer -->
<text
x="90"
y="560"
fill="#cbd5e1"
font-size="24"
font-family="sans-serif">
${SITE.domain}
</text>

<text
x="840"
y="560"
fill="#cbd5e1"
font-size="22"
font-family="sans-serif">
AI • Teknologi • Viral
</text>

</svg>
`;

		return new Response(svg,{
			headers:{
				"Content-Type":"image/svg+xml",
				"Cache-Control":"public, max-age=86400"
			}
		});

	}catch(err){
		return new Response("OG Error: " + err.message,{
			status:500
		});
	}
}

// ====================== UTIL ======================

function formatSlug(slug = ""){
	return decodeURIComponent(slug)
		.replace(/-/g," ")
		.replace(/\b\w/g,c=>c.toUpperCase());
}

function escapeXML(str = ""){
	return str.replace(/[<>&'"]/g,c=>({
		"<":"&lt;",
		">":"&gt;",
		"&":"&amp;",
		"'":"&apos;",
		'"':"&quot;"
	}[c]));
}

function wrapText(text,maxLen){
	const words = text.split(" ");
	let lines = [];
	let current = "";

	for(let w of words){
		if((current + w).length > maxLen){
			lines.push(current.trim());
			current = w + " ";
		}else{
			current += w + " ";
		}
	}

	lines.push(current.trim());

	return lines.map((line,i)=>
		`<tspan x="90" dy="${i === 0 ? 0 : 72}">
${escapeXML(line)}
</tspan>`
	).join("");
}

// ====================== AUTO COLOR ======================

function stringToColor(str = ""){
	const palette = [
		"#8b5cf6",
		"#ec4899",
		"#06b6d4",
		"#22c55e",
		"#f59e0b",
		"#ef4444",
		"#3b82f6",
		"#14b8a6"
	];

	let hash = 0;

	for(let i = 0; i < str.length; i++){
		hash = str.charCodeAt(i) + ((hash << 5) - hash);
	}

	return palette[Math.abs(hash % palette.length)];
}
