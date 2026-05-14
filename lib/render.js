import { seo } from "./seo";

import { styles } from "./render/styles";

import { renderHeader } from "./render/header";
import { renderBody } from "./render/body";
import { renderFooter } from "./render/footer";
import { renderScripts } from "./render/scripts";

export const layout = (props = {}) => {

return new Response(`<!DOCTYPE html>

<html lang="id">

<head>

${seo(props)}

<style>
${styles}
</style>

${renderScripts(props)}

</head>

<body>

${renderHeader(props)}

${renderBody(props)}

${renderFooter(props)}

</body>

</html>`,{

headers:{
  "content-type":"text/html;charset=UTF-8",
  "cache-control":"public,max-age=300"
}

});

};
