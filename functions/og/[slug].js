import { SITE, sanitizeSlug } from "../../lib/config";
import { getPost } from "../../lib/api";

export async function onRequest(context){
	try{
		let { slug } = context.params;

		// ====================== SANITIZE ======================
		slug = sanitizeSlug(slug);

		// ====================== FETCH ======================
		let post = null;

		try{
			post = await getPost(slug);
		}catch{}

		const title = post?.title || formatSlug(slug);
		const kategori = post?.kategori || "Blog";

		// ====================== CATEGORY ======================
		const kategoriText = `🔥 ${kategori}`;

		const badgePadding = 60;
		const badgeWidth = (kategoriText.length * 18) + badgePadding;

		// ====================== COLORS ======================
		const categoryColor = stringToColor(kategori);

		// ====================== SITE ======================
		const siteName = SITE.name || "LebahHack";
		const logo = "🤖";

		// ====================== DOTS ======================
		const dots = Array.from({length:7}).map((_,row)=>
			Array.from({length:10}).map((_,col)=>`
<circle
cx="${20 + (col * 26)}"
cy="${520 + (row * 26)}"
r="4"
fill="${categoryColor}"
/>
`).join("")
		).join("");

		// ====================== SVG ======================
		const svg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">

<defs>

<!-- Background -->
<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
<stop offset="0%" stop-color="${categoryColor}"/>
<stop offset="45%" stop-color="#0f172a"/>
<stop offset="100%" stop-color="#020617"/>
</linearGradient>

<!-- Accent -->
<linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
<stop offset="0%" stop-color="#ff6b6b"/>
<stop offset="50%" stop-color="#ec4899"/>
<stop offset="100%" stop-color="#3b82f6"/>
</linearGradient>

<!-- Glass -->
<linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
<stop offset="0%" stop-color="rgba(255,255,255,0.10)"/>
<stop offset="100%" stop-color="rgba(255,255,255,0.03)"/>
</linearGradient>

<!-- Planet Glow -->
<radialGradient id="planetGlow" cx="50%" cy="50%" r="50%">
<stop offset="0%" stop-color="${categoryColor}" stop-opacity="0.95"/>
<stop offset="100%" stop-color="${categoryColor}" stop-opacity="0"/>
</radialGradient>

<!-- Blur -->
<filter id="blur">
<feGaussianBlur stdDeviation="90"/>
</filter>

<!-- Shadow -->
<filter id="shadow">
<feDropShadow
dx="0"
dy="10"
stdDeviation="12"
flood-opacity="0.35"
/>
</filter>

</defs>

<!-- BG -->
<rect width="1200" height="630" fill="url(#bg)"/>

<!-- Planet -->
<circle
cx="1040"
cy="60"
r="240"
fill="url(#planetGlow)"
opacity="0.55"
/>

<!-- Glow Left -->
<circle
cx="120"
cy="120"
r="260"
fill="${categoryColor}"
opacity="0.18"
filter="url(#blur)"
/>

<!-- Glow Bottom -->
<circle
cx="1150"
cy="620"
r="260"
fill="#2563eb"
opacity="0.25"
filter="url(#blur)"
/>

<!-- Glass Card -->
<rect
x="40"
y="40"
width="1120"
height="550"
rx="28"
fill="url(#glass)"
stroke="rgba(255,255,255,0.18)"
stroke-width="2"
/>

<!-- Grid -->
<g opacity="0.05">

<line x1="0" y1="120" x2="1200" y2="120" stroke="#fff"/>
<line x1="0" y1="300" x2="1200" y2="300" stroke="#fff"/>
<line x1="0" y1="480" x2="1200" y2="480" stroke="#fff"/>

<line x1="180" y1="0" x2="180" y2="630" stroke="#fff"/>
<line x1="360" y1="0" x2="360" y2="630" stroke="#fff"/>
<line x1="540" y1="0" x2="540" y2="630" stroke="#fff"/>
<line x1="720" y1="0" x2="720" y2="630" stroke="#fff"/>
<line x1="900" y1="0" x2="900" y2="630" stroke="#fff"/>
</g>

<!-- Dots -->
<g opacity="0.25">
${dots}
</g>

<!-- Category -->
<rect
x="90"
y="58"
rx="20"
ry="20"
width="${badgeWidth}"
height="64"
fill="${categoryColor}"
/>

<text
x="118"
y="100"
fill="white"
font-size="28"
font-weight="bold"
font-family="sans-serif">
${escapeXML(kategoriText)}
</text>

<!-- Site -->
<rect
x="760"
y="58"
width="360"
height="64"
rx="20"
fill="rgba(255,255,255,0.08)"
stroke="rgba(255,255,255,0.12)"
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
font-size="66"
font-weight="bold"
font-family="sans-serif"
filter="url(#shadow)">
${wrapText(title,22)}
</text>

<!-- Accent Line -->
<rect
x="90"
y="420"
width="320"
height="8"
rx="99"
fill="url(#accent)"
/>

<!-- Right Icon -->
<circle
cx="980"
cy="330"
r="120"
fill="rgba(255,255,255,0.10)"
stroke="rgba(255,255,255,0.15)"
stroke-width="2"
/>

<text
x="920"
y="368"
font-size="88">
${logo}
</text>

<!-- Footer -->
<text
x="90"
y="560"
fill="#d1d5db"
font-size="24"
font-family="sans-serif">
🌐 ${SITE.domain}
</text>

<text
x="860"
y="560"
fill="#d1d5db"
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
`<tspan
x="90"
dy="${i === 0 ? 0 : 78}">
${escapeXML(line)}
</tspan>`
	).join("");
}

// ====================== AUTO COLOR ======================

function stringToColor(str = ""){

	const palette = [
		"#ff4d6d",
		"#ff6b6b",
		"#8b5cf6",
		"#06b6d4",
		"#3b82f6",
		"#14b8a6",
		"#22c55e",
		"#f59e0b",
		"#ec4899"
	];

	let hash = 0;

	for(let i = 0; i < str.length; i++){
		hash = str.charCodeAt(i) + ((hash << 5) - hash);
	}

	return palette[Math.abs(hash % palette.length)];
}
