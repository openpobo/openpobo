import { SITE, canonical, amphtml, ogImage as buildOg, sanitizeSlug, postUrl, kategoriUrl, kategoriPostUrl, escapeJSON } from "../config";

export function renderScripts(props = {}){
	const post = props.post || {};
	const kategori = post.kategori || "";
	const slug = post.slug || "";
	const kategoriLink = kategori ? kategoriUrl(kategori) : "";
	const postLink = slug ? kategoriPostUrl(post) : "";
	const canonicalUrl = slug ? canonical(postUrl(post)) : canonical("/");
	const ampUrl = slug ? amphtml(postUrl(post)) : amphtml("/");
	const ogImage = buildOg(slug);

	return `
	
<script>
let isWebView = false;
let isPlatformReady = false;

const SITE_NAME = "${escapeJSON(SITE.name)}";
const SITE_URL = "${escapeJSON(SITE.domain)}";
const POST_SLUG = "${escapeJSON(slug)}";
const POST_KATEGORI = "${escapeJSON(kategori)}";
const POST_URL = "${escapeJSON(postLink)}";
const KATEGORI_URL = "${escapeJSON(kategoriLink)}";
const CANONICAL_URL = "${escapeJSON(canonicalUrl)}";
const AMP_URL = "${escapeJSON(ampUrl)}";
const OG_IMAGE = "${escapeJSON(ogImage)}";

class ShopAppUtil {
	constructor(params){
		this.params = params;

		let appCookie = document.cookie.match(/(^|;) ?WebView=([^;]*)(;|$)/);

		if(appCookie != null && appCookie[2] === "Y"){
			isWebView = true;
		}
	}
}
</script>

<script>
/* ================= MOBILE MENU ================= */
function toggleMenu(){
  const nav = document.querySelector(".nav");
  if(nav){
    nav.classList.toggle("active");
  }
}

/* ================= DARK / LIGHT THEME ================= */
function toggleTheme(){
  const body = document.body;
  const isLight = body.classList.toggle("light");

  localStorage.setItem("theme", isLight ? "light" : "dark");
}

/* apply theme on load */
(function(){
  const saved = localStorage.getItem("theme");

  if(saved === "light"){
    document.body.classList.add("light");
  }
})();

/* ================= CLOSE MENU ON LINK CLICK (MOBILE UX) ================= */
document.addEventListener("click", function(e){
  if(e.target.classList.contains("nav-link")){
    document.querySelector(".nav")?.classList.remove("active");
  }
});
</script>

`;
}
