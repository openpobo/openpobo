import {
API_BASE,
kategoriUrl,
kategoriPostUrl
} from "../config";

export async function renderFooterNav(
props = {}
){

const post =
props.post || {};

const kategori =
post.kategori || "";

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
},

{
name:"RSS",
url:"/rss.xml"
},

{
name:"Sitemap",
url:"/sitemap.xml"
}

];


// ======================
// KATEGORI AKTIF
// ======================
if(kategori){

menus.push({

name:kategori,

url:kategoriUrl(kategori)

});

}


// ======================
// POST AKTIF
// ======================
if(post.slug){

menus.push({

name:post.title || post.slug,

url:kategoriPostUrl(post)

});

}


// ======================
// FOOTER API
// ======================
try{

const footer =
await fetch(
`${API_BASE}/footer`
).then(r => r.json());


// LATEST
(footer.latest || [])

.slice(0,5)

.forEach(p => {

menus.push({

name:p.title,

url:kategoriPostUrl(p)

});

});

}catch(e){}


// ======================
// RENDER
// ======================
return menus

.map(menu => `
<a href="${menu.url}">
${menu.name}
</a>
`)

.join("");

}
