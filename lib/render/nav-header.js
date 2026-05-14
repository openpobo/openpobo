import {
kategoriUrl
} from "../config";

export function renderHeaderNav(){

const menus = [

{
name:"Home",
url:"/"
},

{
name:"SEO",
url:kategoriUrl("seo")
},

{
name:"Blog",
url:kategoriUrl("blog")
},

{
name:"Teknologi",
url:kategoriUrl("teknologi")
}

];

return menus.map(menu => `

<a href="${menu.url}">
${menu.name}
</a>

`).join("");

}
