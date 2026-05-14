export function renderHeaderNav(){

const menus = [

{
  name:"Home",
  url:"/"
},

{
  name:"SEO",
  url:"/kategori/seo"
},

{
  name:"Blog",
  url:"/kategori/blog"
},

{
  name:"Teknologi",
  url:"/kategori/teknologi"
}

];

return menus.map(menu=>`

<a href="${menu.url}">
${menu.name}
</a>

`).join("");

}
