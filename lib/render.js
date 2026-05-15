import { seo } from "./seo";
import { getStyles } from "./render/styles";

import { renderHeader } from "./render/header";
import { renderBody } from "./render/body";
import { renderFooter } from "./render/footer";
import { renderScripts } from "./render/scripts";
import { renderPopup } from "./render/popup";

export const layout = (props = {}) => {
	const html = `<!DOCTYPE html>
<html lang="id">
<head>
${seo(props)}
<style>${getStyles(props.page)}</style>
</head>

<body>
${renderHeader(props)}
${renderBody(props)}
${renderFooter(props)}

${renderPopup(props)}

${(props.page === "post" || props.page === "home") ? renderPopup(props) : ""}
</body>
</html>`;

	return new Response(html, {
		headers: {
			"content-type": "text/html;charset=UTF-8",
			"cache-control": "public,max-age=300"
		}
	});
};
