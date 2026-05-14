export function renderFooterNav(){

const menus = [

{
  name:"About",
  url:"/about"
},

{
  name:"Contact",
  url:"/contact"
},

{
  name:"Privacy Policy",
  url:"/privacy-policy"
}

];

return menus.map(menu=>`

<a href="${menu.url}">
${menu.name}
</a>

`).join("");

}
