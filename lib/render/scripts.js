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

const footerMenus =
document.querySelectorAll('.footer-menu');

function updateFooterMenu(){

  if(window.innerWidth >= 769){

    footerMenus.forEach(menu => {
      menu.setAttribute('open','');
    });

  }else{

    footerMenus.forEach(menu => {
      menu.removeAttribute('open');
    });

  }

}

updateFooterMenu();

window.addEventListener(
'resize',
updateFooterMenu
);

</script>

<script>
const menuBtn = document.getElementById("menuBtn");
const closeMenu = document.getElementById("closeMenu");
const navMenu = document.getElementById("navMenu");
const themeBtn = document.getElementById("themeBtn");

/* MENU OPEN */
menuBtn?.addEventListener("click", () => {
  navMenu.classList.add("show");
});

/* MENU CLOSE */
closeMenu?.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

/* klik luar */
document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
    navMenu.classList.remove("show");
  }
});

/* THEME */
function setTheme(mode){
  if(mode === "light"){
    document.body.classList.add("light");
    themeBtn.textContent = "☀️";
  }else{
    document.body.classList.remove("light");
    themeBtn.textContent = "🌙";
  }
  localStorage.setItem("theme", mode);
}

setTheme(localStorage.getItem("theme") || "dark");

themeBtn?.addEventListener("click", () => {
  const isLight = document.body.classList.contains("light");
  setTheme(isLight ? "dark" : "light");
});
</script>


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
`;
}
