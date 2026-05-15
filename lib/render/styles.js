export const styles = `
:root{
  /* DARK MODE DEFAULT */
  --bg:#0b1220;
  --card:#111a2e;
  --text:#e5e7eb;
  --muted:#94a3b8;
  --primary:#4f46e5;
  --border:#1f2a44;

  /* FOOTER */
  --footer-bg:rgba(255,255,255,.02);
  --footer-text:#fff;
  --footer-border:rgba(255,255,255,.08);
}

/* LIGHT MODE */
body.light{
  --bg:#ffffff;
  --card:#ffffff;
  --text:#0f172a;
  --muted:#64748b;
  --primary:#4f46e5;
  --border:#e2e8f0;

  /* FOOTER LIGHT */
  --footer-bg:#ffffff;
  --footer-text:#0f172a;
  --footer-border:#e2e8f0;
}

*{
  box-sizing:border-box;
}

html{
  scroll-behavior:smooth;
}

body{
  margin:0;
  font-family:system-ui,-apple-system,sans-serif;
  background:var(--bg);
  color:var(--text);
  line-height:1.7;
}

/* LINK */
a{
  text-decoration:none;
  color:var(--primary);
}

/* IMAGE */
img{
  max-width:100%;
  height:auto;
  display:block;
}

/* ================= HEADER ================= */
.header{
  position:sticky;
  top:0;
  z-index:99;
  background:rgba(10,15,30,.9);
  backdrop-filter:blur(10px);
  border-bottom:1px solid var(--border);
}

body.light .header{
  background:rgba(255,255,255,.9);
}

.header-wrap{
  max-width:1100px;
  margin:auto;
  padding:14px 20px;
  display:grid;
  grid-template-columns:1fr auto 1fr;
  align-items:center;
}

.menu-btn,
.theme-btn{
  background:none;
  border:1px solid var(--border);
  color:var(--text);
  padding:6px 10px;
  border-radius:8px;
  cursor:pointer;
  font-size:18px;
}

.menu-btn{ justify-self:start; }
.logo{ justify-self:center; font-size:22px; font-weight:800; color:var(--primary); }
.theme-btn{ justify-self:end; }

/* ================= NAV ================= */
.nav{
  position:fixed;
  top:0;
  left:-280px;
  width:280px;
  height:100vh;
  background:var(--bg);
  border-right:1px solid var(--border);
  padding:60px 20px;
  display:flex;
  flex-direction:column;
  gap:18px;
  transition:.3s ease;
  z-index:1000;
}

.nav.show{ left:0; }

.close-menu{
  position:absolute;
  top:12px;
  right:12px;
  width:34px;
  height:34px;
  border:1px solid var(--border);
  background:none;
  color:var(--text);
  border-radius:8px;
  cursor:pointer;
}

.nav a{
  color:var(--text);
  font-weight:600;
  font-size:14px;
}

/* ================= LAYOUT ================= */
.container{
  max-width:1100px;
  margin:auto;
  padding:20px;
}

/* ================= HERO ================= */
.hero{
  padding:70px 25px;
  border-radius:22px;
  background:linear-gradient(135deg,#4f46e5,#6366f1);
  color:#fff;
  text-align:center;
  margin-bottom:35px;
}

.hero h1{
  margin:0 0 12px;
  font-size:42px;
  line-height:1.1;
}

.hero p{ font-size:17px; }
/* ================= Breadcrumb ================= */
.breadcrumb{
display:flex;
flex-wrap:wrap;
align-items:center;
gap:8px;
font-size:.95rem;
margin-bottom:20px;
color:var(--muted);
}

.breadcrumb a{
color:var(--muted);
text-decoration:none;
transition:.2s;
}

.breadcrumb a:hover{
color:var(--primary);
}

.breadcrumb span{
color:var(--text);
font-weight:600;
}

@media(max-width:768px){

.breadcrumb{
font-size:.85rem;
gap:6px;
line-height:1.5;
}

}

/* ================= Related ================= */
.related{
max-width:860px;
margin:40px auto 0;
padding-top:24px;
border-top:1px solid var(--border);
}

.related h3{
margin-bottom:18px;
font-size:1.2rem;
}
/* ================= GRID ================= */
.grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
  gap:20px;
}

/* CARD */
.card{
  background:var(--card);
  border:1px solid var(--border);
  border-radius:18px;
  overflow:hidden;
  transition:.2s;
}

.card:hover{
  transform:translateY(-4px);
  box-shadow:0 10px 30px rgba(0,0,0,.15);
}

.card img{
  aspect-ratio:400/210;
  object-fit:cover;
}

.card h3,
.card h4{
  padding:16px;
  margin:0;
  font-size:18px;
}

/* ================= SEARCH ================= */
.search{
  width:100%;
  padding:16px;
  border-radius:14px;
  border:1px solid var(--border);
  margin:25px 0 15px;
  background:transparent;
  color:var(--text);
}

.search:focus{
  border-color:var(--primary);
}

/* ================= POST ================= */
.post{
  max-width:860px;
  margin:auto;
}

.post img{
  border-radius:18px;
  aspect-ratio:1200/630;
  object-fit:cover;
  margin-bottom:20px;
}

.post h1{
  font-size:38px;
  margin:20px 0;
}

.post-content{
  font-size:18px;
  line-height:1.9;
  word-break:break-word;
}

.post-content h2,
.post-content h3{
  margin-top:34px;
}

/* ================= PAGINATION ================= */
.pagination{
  display:flex;
  justify-content:center;
  gap:10px;
  margin:45px 0;
  flex-wrap:wrap;
}

.pagination a{
  padding:10px 16px;
  border-radius:12px;
  border:1px solid var(--border);
  color:var(--text);
}

.pagination a.active{
  background:var(--primary);
  color:#fff;
  border-color:var(--primary);
}

/* ================= FOOTER ================= */
.footer{
  margin-top:70px;
  padding:50px 20px;
  border-top:1px solid var(--footer-border);
  background:var(--footer-bg);
}

/* 🔥 FIX: biar tidak terlalu lebar di desktop */
.footer-wrap{
  max-width:1100px;
  margin:auto;
  display:grid;
  grid-template-columns:2fr 1fr 1fr;
  gap:40px;
  margin:auto;
  padding:20px;
}


.footer-brand h3,
.footer-menu h4{
  color:var(--footer-text);
}

.footer-brand p{
  color:var(--muted);
  max-width:420px;
}

.footer-menu{
  display:flex;
  flex-direction:column;
  gap:12px;
}

.footer-menu a{
  font-size:14px;
  color:var(--muted);
  transition:.2s;
}

.footer-menu a:hover{
  color:var(--footer-text);
  transform:translateX(3px);
}

.footer-bottom{
  margin-top:40px;
  padding-top:20px;
  border-top:1px solid var(--footer-border);
  text-align:center;
  font-size:14px;
  color:var(--muted);
}

/* ================= RESPONSIVE ================= */
@media(max-width:768px){

  .header-wrap{
    grid-template-columns:1fr auto 1fr;
  }

  .container{ padding:16px; }

  .hero{ padding:50px 20px; }

  .hero h1{ font-size:32px; }

  .post h1{ font-size:28px; }

  .post-content{ font-size:16px; }

  .footer-wrap{
    grid-template-columns:1fr 1fr;
    gap:24px;
  }


  /* 🔥 FOOTER jadi 2 kolom di HP */
  .footer-wrap{
    grid-template-columns:1fr 1fr;
    gap:24px;
  }

  .footer-brand{
    grid-column:1/-1;
  }

  /* 🔥 GRID CARD di mobile tetap bagus */
  .grid{
    grid-template-columns:repeat(2,1fr);
    gap:12px;
  }
}
}
`;
