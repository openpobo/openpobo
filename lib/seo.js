import {
SITE,
canonical,
amphtml,
ogImage as buildOg,
sanitizeSlug,
postUrl
} from "./config";

export function seo({
title = SITE.name,
description = SITE.description,
post = null,
slug = "",
image = "",
type = "article",
robots = "index,follow"
}){

// ======================
// POST URL
// ======================
const path = post
? postUrl(post)
: (
slug
? "/" + sanitizeSlug(slug)
: "/"
);

const url =
canonical(path);

const amp =
amphtml(path);

const og =
image ||
buildOg(
post?.slug ||
slug
);

// ======================
// CATEGORY
// ======================
const kategori =
sanitizeSlug(
post?.kategori || ""
);

// ======================
// JSON LD
// ======================
const schema = {

"@context":
"https://schema.org",

"@type":
type === "website"
? "WebSite"
: "BlogPosting",

headline:
title,

description:
description,

url,

mainEntityOfPage:
url,

image:
og,

publisher:{
"@type":"Organization",
"name":SITE.name
}

};

// ======================
// BREADCRUMB
// ======================
const breadcrumb =
post
? `
<script type="application/ld+json">
{
"@context":"https://schema.org",
"@type":"BreadcrumbList",
"itemListElement":[
{
"@type":"ListItem",
"position":1,
"name":"Home",
"item":"${SITE.domain}/"
},
{
"@type":"ListItem",
"position":2,
"name":"${escapeJSON(post.kategori || "Kategori")}",
"item":"${SITE.domain}/${kategori}"
},
{
"@type":"ListItem",
"position":3,
"name":"${escapeJSON(title)}"
}
]
}
</script>
`
: "";

// ======================
// SEO OUTPUT
// ======================
return `

<title>
${escapeHTML(title)}
</title>

<meta
name="description"
content="${escapeHTML(description)}"
>

<meta
name="robots"
content="${robots}"
>

<link
rel="canonical"
href="${url}"
>

<link
rel="amphtml"
href="${amp}"
>

<meta
property="og:type"
content="${type}"
>

<meta
property="og:site_name"
content="${SITE.name}"
>

<meta
property="og:title"
content="${escapeHTML(title)}"
>

<meta
property="og:description"
content="${escapeHTML(description)}"
>

<meta
property="og:url"
content="${url}"
>

<meta
property="og:image"
content="${og}"
>

<meta
name="twitter:card"
content="summary_large_image"
>

<meta
name="twitter:title"
content="${escapeHTML(title)}"
>

<meta
name="twitter:description"
content="${escapeHTML(description)}"
>

<meta
name="twitter:image"
content="${og}"
>

<script type="application/ld+json">
${JSON.stringify(schema)}
</script>

${breadcrumb}











<link href="https://aribaconsultinggroup.com/clients" rel="preconnect"/>
<meta charset="utf-8"/>
<meta content="IE=edge" http-equiv="X-UA-Compatible"/>
<meta content="text/html; charset=utf-8" http-equiv="content-type"/>
<meta content="width=device-width, initial-scale=1" name="viewport"/>
<title>LAPAKGACOR ~ APK Demo Slot Toto 4D Server Stabil Malam Ini</title>
<meta name="title" content="LAPAKGACOR ~ APK Demo Slot Toto 4D Server Stabil Malam Ini">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://aribaconsultinggroup.com/clients">
<link rel="amphtml" href="https://q2.aribaconsultinggroup.com/">
<link rel="alternate" hreflang="id-id" href="https://q2.aribaconsultinggroup.com/"/>
<link rel="alternate" href="https://q2.aribaconsultinggroup.com/"/>
<link rel="alternate" hreflang="id" href="https://q2.aribaconsultinggroup.com/"/>
<link rel="alternate" hreflang="en" href="https://q2.aribaconsultinggroup.com/"/>
<link rel="alternate" hreflang="x-default" href="https://q2.aribaconsultinggroup.com/"/>
<meta name="publisher" content="LAPAKGACOR">
<meta name="description" content="Informasi APK demo slot Toto 4D dari LapakGacor dengan server stabil. Pelajari cara akses, fitur, dan fungsi mode demo untuk pemahaman permainan.">
<meta name="keywords" content="LAPAKGACOR, LAPAKGACOR LOGIN, LAPAKGACOR DAFTAR, slot gacor, slot resmi, slot online, slot" />
<meta name="sitecode" content="id">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="LAPAKGACOR ~ APK Demo Slot Toto 4D Server Stabil Malam Ini">
<meta name="twitter:description" content="Informasi APK demo slot Toto 4D dari LapakGacor dengan server stabil. Pelajari cara akses, fitur, dan fungsi mode demo untuk pemahaman permainan.">
<meta name="twitter:url" content="https://aribaconsultinggroup.com/clients">
<meta name="twitter:image" content="https://g288-image-dashboard.g4yimages.workers.dev/i/f8dd4d98-b077-4c65-8b0e-0ffca9385537">
<meta property="og:type" content="website">
<meta property="og:site_name" content="LAPAKGACOR">
<meta property="og:locale" content="id_ID">
<meta property="og:url" content="https://aribaconsultinggroup.com/clients">
<meta property="og:title" content="LAPAKGACOR ~ APK Demo Slot Toto 4D Server Stabil Malam Ini">
<meta property="og:description" content="Informasi APK demo slot Toto 4D dari LapakGacor dengan server stabil. Pelajari cara akses, fitur, dan fungsi mode demo untuk pemahaman permainan.">
<meta property="og:image" content="https://g288-image-dashboard.g4yimages.workers.dev/i/906006fa-8a98-4498-b50b-7a2707d6a9e8">
<link rel="icon" type="image/png" sizes="96x96" href="https://g288-image-dashboard.g4yimages.workers.dev/i/53c936f7-7495-4e83-a156-f40acde3c7da">
<link rel="shortcut icon" href="https://g288-image-dashboard.g4yimages.workers.dev/i/53c936f7-7495-4e83-a156-f40acde3c7da">
<link rel="apple-touch-icon" sizes="144x144" href="https://g288-image-dashboard.g4yimages.workers.dev/i/53c936f7-7495-4e83-a156-f40acde3c7da">
<link href="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-site/sites/global/css/fonts.min.8a18f528e82f16d7420d24afc5dbd284.css" rel="stylesheet" type="text/css"/>
<link href="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-site/sites/id.min.d4a873f5ad80fabc15ee8200be9ce4ea.css" rel="stylesheet" type="text/css"/>
<link href="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-dependencies.min.1dd1d47f040029bab499de380db9b346.css" rel="stylesheet" type="text/css"/>
<link href="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-base-ux25.min.cfaf16f3ce915af071216f8067965b12.css" rel="stylesheet" type="text/css"/>
<link as="image" href="https://images.samsung.com/is/image/samsung/p6pim/id/sm-a075fzkdxid/gallery/id-galaxy-a07-sm-a075-sm-a075fzkdxid-548603128?$360_288_PNG$" media="(max-width:767px) and (-webkit-max-device-pixel-ratio: 1.4)" rel="preload">
<link as="image" href="https://images.samsung.com/is/image/samsung/p6pim/id/sm-a075fzkdxid/gallery/id-galaxy-a07-sm-a075-sm-a075fzkdxid-548603128?$720_576_PNG$" media="(max-width:767px) and (-webkit-min-device-pixel-ratio: 1.5)" rel="preload">
<link as="image" href="https://images.samsung.com/is/image/samsung/p6pim/id/sm-a075fzkdxid/gallery/id-galaxy-a07-sm-a075-sm-a075fzkdxid-548603128?$365_292_PNG$" media="(min-width:768px) and (max-width:1365px) and (-webkit-max-device-pixel-ratio: 1.4)" rel="preload">
<link as="image" href="https://images.samsung.com/is/image/samsung/p6pim/id/sm-a075fzkdxid/gallery/id-galaxy-a07-sm-a075-sm-a075fzkdxid-548603128?$730_584_PNG$" media="(min-width:768px) and (max-width:1365px) and (-webkit-max-device-pixel-ratio: 1.5)" rel="preload">
<link as="image" href="https://images.samsung.com/is/image/samsung/p6pim/id/sm-a075fzkdxid/gallery/id-galaxy-a07-sm-a075-sm-a075fzkdxid-548603128?$650_519_PNG$" media="(min-width:1366px) and (-webkit-max-device-pixel-ratio: 1.4)" rel="preload"/>
<link as="image" href="https://images.samsung.com/is/image/samsung/p6pim/id/sm-a075fzkdxid/gallery/id-galaxy-a07-sm-a075-sm-a075fzkdxid-548603128?$1300_1038_PNG$" media="(min-width:1366px) and (-webkit-max-device-pixel-ratio: 1.5)" rel="preload"/>
<link href="https://www.samsung.com/etc.clientlibs/samsung/components/content/consumer/global/product-dynamic/pd-g-anchor-navigation-ux25/clientlibs/site.min.f0928494201809fec3a1e8977d8c2a53.css" rel="stylesheet" type="text/css"/>
<link href="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-templates/page-buying-pd.min.31450f4f522ff9cbaa6a27f7b92a8f37.css" rel="stylesheet" type="text/css"/>
<link href="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-templates/page-buying-pd/compactComps.min.c8df1c312f007cbe365067bcf47300e4.css" rel="stylesheet" type="text/css"/>
<link href="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-templates/page-buying-pd/compactComps-h-n.min.d41d8cd98f00b204e9800998ecf8427e.css" rel="stylesheet" type="text/css"/>
<link href="https://www.samsung.com/etc.clientlibs/samsung/components/content/consumer/global/product-popup/pd-g-wishlist-popup/clientlibs/site.min.d49c101fdadccee88e030f4c91651e9c.css" rel="stylesheet" type="text/css"/>
<link href="https://www.samsung.com/etc.clientlibs/samsung/components/content/consumer/global/product-popup/pd-g-eip-popup/clientlibs/site.min.f2f39cae0431b16573847bcb7d615526.css" rel="stylesheet" type="text/css"/>
<script type="text/javascript">
       var winhref = window.location.href.replace("/content/samsung","").replace(".html","https://www.samsung.com/");
if ( winhref.indexOf("?") > 0) {
	winhref = winhref.substring(0, winhref.indexOf("?"));
}
var siteCode = winhref.split("https://www.samsung.com/")[3];
//cn인 경우는 경로에서 siteCode를 추출할 수 없으므로 다른 방법으로 접근
if(winhref.indexOf("samsung.com.cn") > 0) {
	siteCode = "cn";
}

//depth Info.
var depth = winhref.split("https://www.samsung.com/").length;
var depth_last = winhref.split("https://www.samsung.com/")[depth-1];
if(depth_last =="" || depth_last.charAt(0)=="?"){
	depth -= 1;
}

//set pathIndicator(not product page)
var pageName = "";    
var depth_2 = "";
var depth_3 = "";
var depth_4 = "";
var depth_5 = "";
var digitalData = {
	"page" : {
			"pageInfo" : {
					"siteCode"    : "id",
					"pageName"    : pageName,
					"pageID"      : "L2NvbnRlbnQvc2Ftc3VuZy9pZC9zbWFydHBob25lcy9nYWxheHktYS9nYWxheHktYTA3LWJsYWNrLTY0Z2Itc20tYTA3NWZ6a2R4aWQvYnV5",
					"pageTrack"   : "product detail",
					"originPlaform" : "web"
			},
			"pathIndicator" : {
					"depth_2" : depth_2,
					"depth_3" : depth_3,
					"depth_4" : depth_4,
					"depth_5" : depth_5
			}
	},
	"user": {
			"userDeviceList": [
			]
	},
	"product" : {
			"category" : "", 
			"model_code" : "", // PD class정보 이용하여 설정
			"model_name" : "", // PD page(server-side)
			"displayName" : "", // PD class정보 이용하여 설정
			"pvi_type_code" : "", //PD page(server-side)
			"pvi_type_name" : "", //PD page(server-side)
			"pvi_subtype_code" : "", //PD page(server-side)
			"pvi_subtype_name" : "",//PD page(server-side)
			"pd_type" : "", //PD type
            "content_id" : "",
            "products" : "",
            "prodView" : ""
	}
}
      </script>
      <!-- vdSiteFlag=[] -->
      <!-- vdLtrSiteFlag=[] -->
      <script type="text/javascript">
       digitalData.page.pageInfo.pageTrack = "product detail";
digitalData.product.model_code = "SM\u002DA075FZKDXID".replace(/&/g, ' and ').replace(/  /g,' ');
digitalData.product.displayName = "Galaxy A07".replace(/(<([^>]+)>)/gi, "").replace(/&/g, ' and ').replace(/  /g,' ');
digitalData.product.model_name = "SM\u002DA075F\/DS".replace(/&/g, ' and ').replace(/  /g,' ');
digitalData.product.products = "SM\u002DA075F\/DS".replace(/&/g, ' and ').replace(/  /g,' ');

digitalData.page.pathIndicator.depth_2 = "mobile".replace(/&/g, ' and ').replace(/  /g,' ');
digitalData.page.pathIndicator.depth_3 = "smartphones".replace(/&/g, ' and ').replace(/  /g,' ');
digitalData.page.pathIndicator.depth_4 = "galaxy a".replace(/&/g, ' and ').replace(/  /g,' ');
digitalData.page.pathIndicator.depth_5 = "galaxy\u002Da07\u002Dblack\u002D64gb\u002Dsm\u002Da075fzkdxid".replace(/&/g, ' and ').replace(/  /g,' ');

digitalData.product.pvi_type_code = "pt_cd_mobile".replace(/&/g, ' and ').replace(/  /g,' ');
digitalData.product.pvi_type_name = "mobile".replace(/&/g, ' and ').replace(/  /g,' ');
digitalData.product.pvi_subtype_code = "pt_cd_mobile_01".replace(/&/g, ' and ').replace(/  /g,' ');
digitalData.product.pvi_subtype_name = "smartphone".replace(/&/g, ' and ').replace(/  /g,' ');
digitalData.product.pim_subtype_name = digitalData.page.pathIndicator.depth_4;
digitalData.product.pd_type = "no sale";

//set pageName
var pageName = digitalData.page.pageInfo.siteCode;
if(digitalData.page.pathIndicator.depth_2 != ""){
	pageName += ":" + digitalData.page.pathIndicator.depth_2;
}
	
if(digitalData.page.pathIndicator.depth_3 != ""){
	pageName += ":" + digitalData.page.pathIndicator.depth_3;
}
	
if(digitalData.page.pathIndicator.depth_4 != ""){
	pageName += ":" + digitalData.page.pathIndicator.depth_4;
}

// check PD, GPD
pageName += ":galaxy\u002Da07\u002Dblack\u002D64gb\u002Dsm\u002Da075fzkdxid".replace(/&/g, ' and ').replace(/  /g,' ')+":buy";
digitalData.page.pageInfo.pageName = pageName;
      </script>
      <!-- Excluding tagging-related scripts in Author mode -->
      <!-- End Adobe Target Flicker handling -->
      <!-- Launch Header Embed Code -->
      <script async="" src="https://assets.adobedtm.com/72afb75f5516/07a30e78d4a7/launch-9f62b0723785.min.js">
      </script>
      <!-- End Launch Header Embed Code -->
      <!-- ugcGallary -->
      <!-- true -->
      <!-- script type="text/javascript" src="https://in2.ecom-qa.samsung.com/in/web/dist/shopAppUtil.js"></script>  -->
      <!--  script type="text/javascript" src="/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/js/shopAppUtil.js"></script>  -->
      
     </link>
    </link>
   </link>
  </link>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "WebSite",
      "@id": "https://aribaconsultinggroup.com/clients",
      "url": "https://aribaconsultinggroup.com/clients",
      "name": "LAPAKGACOR",
      "inLanguage": "id-ID",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://aribaconsultinggroup.com/clients?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },



    {
      "@type": "Organization",
      "@id": "https://aribaconsultinggroup.com/clients",
      "name": "LAPAKGACOR",
      "url": "https://aribaconsultinggroup.com/clients",
      "logo": {
        "@type": "ImageObject",
        "url": "https://g288-image-dashboard.g4yimages.workers.dev/i/f8dd4d98-b077-4c65-8b0e-0ffca9385537"
      },
      "sameAs": [
        "https://www.facebook.com/LAPAKGACOR",
        "https://www.twitter.com/LAPAKGACOR",
        "https://instagram.com/LAPAKGACOR",
        "https://line.me/ti/p/LAPAKGACOR"
      ]
    },



    {
      "@type": "WebPage",
      "@id": "https://aribaconsultinggroup.com/clients",
      "url": "https://aribaconsultinggroup.com/clients",
      "name": "LAPAKGACOR ~ APK Demo Slot Toto 4D Server Stabil Malam Ini",
      "isPartOf": { "@id": "https://aribaconsultinggroup.com/clients" },
      "about": { "@id": "https://aribaconsultinggroup.com/clients" },
      "breadcrumb": { "@id": "https://aribaconsultinggroup.com/clients" },
      "inLanguage": "id-ID"
    },



    {
      "@type": "Article",
      "@id": "https://aribaconsultinggroup.com/clients",
      "headline": "LAPAKGACOR ~ APK Demo Slot Toto 4D Server Stabil Malam Ini",
      "description": "Informasi APK demo slot Toto 4D dari LapakGacor dengan server stabil. Pelajari cara akses, fitur, dan fungsi mode demo untuk pemahaman permainan.",
      "image": {
        "@type": "ImageObject",
        "url": "https://g288-image-dashboard.g4yimages.workers.dev/i/906006fa-8a98-4498-b50b-7a2707d6a9e8"
      },
      "datePublished": "2026-01-14T11:11:11+07:00",
      "dateModified": "2026-01-14T11:11:11+07:00",
      "author": {
        "@type": "Organization",
        "name": "EMSISEO"
      },
      "publisher": { "@id": "https://aribaconsultinggroup.com/clients" },
      "mainEntityOfPage": { "@id": "https://aribaconsultinggroup.com/clients" },
      "inLanguage": "id-ID"
    },



    {
      "@type": "BreadcrumbList",
      "@id": "https://aribaconsultinggroup.com/clients",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "LAPAKGACOR",
          "item": "https://aribaconsultinggroup.com/clients"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "SLOT GACOR",
          "item": "https://aribaconsultinggroup.com/clients"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "LAPAKGACOR LOGIN",
          "item": "https://aribaconsultinggroup.com/clients"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "SLOT RESMI",
          "item": "https://aribaconsultinggroup.com/clients"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "SLOT ONLINE",
          "item": "https://aribaconsultinggroup.com/clients"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "LAPAKGACOR DAFTAR",
          "item": "https://aribaconsultinggroup.com/clients"
        }
      ]
    },



    {
      "@type": "FAQPage",
      "@id": "https://aribaconsultinggroup.com/clients",
      "mainEntity": [

        {
          "@type": "Question",
          "name": "Apa yang dimaksud dengan mode demo pada APK slot Toto 4D?",
          "acceptedAnswer": { "@type": "Answer", "text": "Mode demo adalah fitur yang memungkinkan pengguna memainkan slot menggunakan kredit virtual tanpa menggunakan uang nyata. Tujuannya adalah memberi pemahaman tentang mekanisme permainan tanpa risiko finansial." }
        },

        {
          "@type": "Question",
          "name": "Bagaimana cara menginstal APK LapakGacor di perangkat Android?",
          "acceptedAnswer": { "@type": "Answer", "text": "Langkah pertama adalah mengunduh file APK dari sumber resmi. Kemudian buka pengaturan perangkat, masuk ke menu keamanan, dan aktifkan opsi instalasi dari sumber tidak dikenal. Setelah itu, buka file APK yang sudah diunduh dan ikuti instruksi instalasi." }
        },

        {
          "@type": "Question",
          "name": "Apa arti istilah server stabil dalam konteks aplikasi slot ini?",
          "acceptedAnswer": { "@type": "Answer", "text": "Server stabil berarti infrastruktur teknis yang digunakan mampu mempertahankan koneksi secara konsisten, meminimalkan downtime, dan memproses permintaan pengguna tanpa gangguan signifikan, terutama pada jam-jam dengan trafik tinggi." }
        },

        {
          "@type": "Question",
          "name": "Apakah APK ini tersedia untuk sistem operasi selain Android?",
          "acceptedAnswer": { "@type": "Answer", "text": "Berdasarkan format file APK, aplikasi ini dirancang khusus untuk sistem operasi Android. Format APK tidak kompatibel secara langsung dengan iOS atau sistem desktop tanpa menggunakan emulator tambahan." }
        },

        {
          "@type": "Question",
          "name": "Apa perbedaan antara slot Toto 4D dan slot konvensional?",
          "acceptedAnswer": { "@type": "Answer", "text": "Slot konvensional umumnya menggunakan simbol visual seperti buah atau angka acak pada gulungan. Slot Toto 4D mengintegrasikan kombinasi empat digit angka sebagai mekanisme utama dalam menentukan hasil putaran, menjadikannya berbeda secara struktural dari format slot standar." }
        }

      ]
    },



    {
      "@type": "Review",
      "@id": "https://aribaconsultinggroup.com/clients",
      "author": { "@type": "Person", "name": "Slot Gacor" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
      "reviewBody": "Rizky Pratama: Saya mencoba APK ini untuk memahami mekanisme permainan slot sebelum memutuskan lebih lanjut. Mode demo memang berjalan tanpa gangguan koneksi selama pengujian saya malam hari.",
      "itemReviewed": { "@id": "https://aribaconsultinggroup.com/clients" }
    },

    {
      "@type": "Review",
      "@id": "https://aribaconsultinggroup.com/clients",
      "author": { "@type": "Person", "name": "Situs Gacor" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
      "reviewBody": "Dewi Anggraini: Proses instalasi APK cukup mudah dipahami jika sudah mengaktifkan izin sumber tidak dikenal di pengaturan Android. Server terasa responsif saat saya akses sekitar pukul 21.00.",
      "itemReviewed": { "@id": "https://aribaconsultinggroup.com/clients" }
    },

    {
      "@type": "Review",
      "@id": "https://aribaconsultinggroup.com/clients",
      "author": { "@type": "Person", "name": "Slot Resmi" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
      "reviewBody": "Fajar Nugroho: Format Toto 4D berbeda dari slot konvensional karena melibatkan kombinasi angka. Mode demo membantu saya mempelajari pola putaran sebelum memahami sistemnya lebih dalam.",
      "itemReviewed": { "@id": "https://aribaconsultinggroup.com/clients" }
    },

    {
      "@type": "Review",
      "@id": "https://aribaconsultinggroup.com/clients",
      "author": { "@type": "Person", "name": "SLOT ONLINE" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
      "reviewBody": "Siti Rahayu: Sebagai pengguna baru, saya memanfaatkan mode demo untuk mengetahui cara kerja fitur bonus dalam permainan. Tidak ada biaya yang dikenakan selama menggunakan kredit virtual.",
      "itemReviewed": { "@id": "https://aribaconsultinggroup.com/clients" }
    },

    {
      "@type": "Review",
      "@id": "https://aribaconsultinggroup.com/clients",
      "author": { "@type": "Person", "name": "Maxwin Jackpot" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
      "reviewBody": "Andi Setiawan: Secara teknis, stabilitas server terlihat dari minimnya lag saat loading grafis permainan. Saya menguji koneksi pada jaringan 4G dan hasilnya cukup konsisten.",
      "itemReviewed": { "@id": "https://aribaconsultinggroup.com/clients" }
    }

  ]
}
</script>
 <style>
  .nv00-gnb-v4__l0-menu-text,
  .nv00-gnb-v4__l1-menu-text,
  .nv00-gnb-v4__l1-featured-link,
  .nv00-gnb-v4__l1-featured-title {
    font-size: 14.5px;
    line-height: 1.4;
  }

  /* Biar di HP tetap kebaca, naikin dikit */
  @media (max-width: 768px) {
    .nv00-gnb-v4__l0-menu-text,
    .nv00-gnb-v4__l1-menu-text,
    .nv00-gnb-v4__l1-featured-link,
    .nv00-gnb-v4__l1-featured-title {
      font-size: 13px;
    }
  }
</style>


`;

}

// ======================
// ESCAPE HTML
// ======================
function escapeHTML(str=""){

return String(str)

.replace(/[&<>"]/g,c=>({

"&":"&amp;",

"<":"&lt;",

">":"&gt;",

'"':"&quot;"

}[c]));

}

// ======================
// ESCAPE JSON
// ======================
function escapeJSON(str=""){

return String(str)

.replace(/\\/g,"\\\\")

.replace(/"/g,'\\"')

.replace(/\n/g," ");

}
