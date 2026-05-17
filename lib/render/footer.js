import { SITE } from "../config";
import { renderFooterNav } from "./nav-footer";

// ====================== FOOTER ======================
export async function renderFooter(props = {}){
	const footerNav = await renderFooterNav(props);

	return `
<footer class="footer">
<div class="footer-wrap">
<div class="footer-brand">
<h3>⚡ ${SITE.name}</h3>
<p>
Platform informasi aplikasi penghasil cuan,
AI modern, teknologi digital,
tips internet, dan tren online terbaru
dengan tampilan cepat, ringan,
dan modern.
</p>
</div>
${footerNav}
</div>
<div class="footer-bottom">
© ${new Date().getFullYear()} ${SITE.name} • All Rights Reserved
</div>
</footer>
`;
}
