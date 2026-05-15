import { seo } from "./render/seo";
import { getStyles } from "./render/styles";

import { renderHeader } from "./render/header";
import { renderBody } from "./render/body";
import { renderFooter } from "./render/footer";
import { renderScripts } from "./render/scripts";
import { renderPopup } from "./render/popup";

/**
 * HTML Layout Engine
 * - tidak menangani CSS detail
 * - hanya menggabungkan bagian page
 */
export const layout = (props = {}) => {
	return new Response(
`<!DOCTYPE html>
<html lang="id">
<head>
${seo(props)}
<style>${getStyles(props.page)}</style>
</head>

<body>
${renderHeader(props)}
${renderBody(props)}
${renderFooter(props)}

${renderScripts(props)}
${renderPopup(props)}
</body>
</html>`,
	{
		headers: {
			"content-type": "text/html;charset=UTF-8",
			"cache-control": "public,max-age=300"
		}
	});
};
