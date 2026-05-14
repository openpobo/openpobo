import { SITE } from "./config";

import { seo } from "./seo";

import { styles } from "./render/styles";

import { renderHeader } from "./render/header";
import { renderBody } from "./render/body";
import { renderFooter } from "./render/footer";

export const layout = ({
  title = SITE.name,
  description = SITE.description,
  canonical = "",
  image = "",
  schema = "",
  robots = "",
  content = ""
} = {}) => {

return new Response(`<!DOCTYPE html>

<html lang="id">

<head>

${seo({
  title,
  description,
  canonical,
  image,
  schema,
  robots
})}

<style>
${styles}
</style>

</head>

<body>

${renderHeader()}

${renderBody(content)}

${renderFooter()}

</body>

</html>`,{

headers:{
  "content-type":"text/html;charset=UTF-8",
  "cache-control":"public,max-age=300"
}

});

};
