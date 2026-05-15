import { SITE, kategoriUrl, escapeHTML, ogImage, sanitizeSlug } from "../config";

export function renderPopup(props = {}){
	const post = props.post || {};
	const kategori = (post.kategori || "").toLowerCase();
	const kategoriLink = kategori ? kategoriUrl(kategori) : "/";
	const title = post.title || SITE.name;

	// ====================== DEFAULT POPUP ======================
	const DEFAULT_POPUP = {
		image:"https://your-default-image.com/banner.webp",
		login:"https://example.com/login",
		register:"https://example.com/register"
	};

	// ====================== POPUP IMAGE ======================
	const popupImage = post.slug ? ogImage(sanitizeSlug(post.slug)) : DEFAULT_POPUP.image;

	// ====================== CTA URL PER KATEGORI ======================
	const CTA = {
		blog:{
			login:"https://example.com/menujuguaffiliateblog",
			register:"https://example.com/daftarblog"
		},
		seo:{
			login:"https://example.com/menujuguaffiliateseo",
			register:"https://example.com/daftarseo"
		},
		teknologi:{
			login:"https://example.com/menujuguaffiliatetech",
			register:"https://example.com/daftarteknologi"
		}
	};

	const cta = CTA[kategori] || {};
	const loginUrl = cta.login || DEFAULT_POPUP.login;
	const registerUrl = cta.register || DEFAULT_POPUP.register;

	// ====================== RENDER ======================
	return `
<div class="popup-overlay" id="popupOverlay">
  <div class="popup-container">

    <div class="close-btn" onclick="closePopup()"></div>

    <div class="popup-content">
      <img src="${popupImage}" alt="${escapeHTML(title)}" class="popup-image"/>

      <div class="clk-btn-sgp">
        <a href="${loginUrl}" target="_blank" rel="nofollow noreferrer" class="login">LOGIN</a>
        <a href="${registerUrl}" target="_blank" rel="nofollow noreferrer" class="register">DAFTAR</a>
      </div>

      <div class="popup-footer">
        ${escapeHTML(title)}<br>
        <span>
          © COPYRIGHT ${new Date().getFullYear()} ${SITE.name}
        </span>
      </div>
    </div>

  </div>
</div>

<script>
function closePopup() {
  const popupOverlay = document.getElementById('popupOverlay');
  popupOverlay.style.opacity = '0';
  popupOverlay.style.transition = 'opacity 0.3s ease';

  setTimeout(() => {
    popupOverlay.style.display = 'none';
  }, 300);
}

document.getElementById('popupOverlay').addEventListener('click', function (event) {
  if (event.target === this) closePopup();
});
</script>

<style>
.popup-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(3px);
}

.popup-container {
  width: 90%;
  max-width: 420px;
  background: linear-gradient(145deg, #111, #1a1510);
  border-radius: 18px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0,0,0,0.6);
}

.popup-image {
  width: 100%;
  display: block;
}

.clk-btn-sgp {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  padding: 18px;
}

.clk-btn-sgp a {
  padding: 14px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  transition: 0.3s;
}

.login {
  background: #000;
  color: #fff;
  border: 1px solid #48CAE4;
}

.register {
  background: linear-gradient(145deg, #6A994E, #48CAE4);
  color: #000;
}

.clk-btn-sgp a:hover {
  transform: translateY(-3px);
}

.popup-footer {
  padding: 15px;
  font-size: 13px;
  color: #ccc;
}

.close-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.close-btn::before,
.close-btn::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 18px;
  height: 2px;
  background: #48CAE4;
}

.close-btn::before { transform: translate(-50%, -50%) rotate(45deg); }
.close-btn::after { transform: translate(-50%, -50%) rotate(-45deg); }

@media (max-width: 480px) {
  .clk-btn-sgp {
    grid-template-columns: 1fr;
  }
}
</style>
  
  
`;
}
