export const styles = `


:root{
  --bg:#fff;
  --card:#fff;
  --text:#0f172a;
  --muted:#64748b;
  --primary:#4f46e5;
  --border:#e2e8f0
}

*{
  box-sizing:border-box
}

html{
  scroll-behavior:smooth
}

body{
  margin:0;
  font-family:system-ui,-apple-system,sans-serif;
  background:var(--bg);
  color:var(--text);
  line-height:1.7
}

a{
  text-decoration:none;
  color:var(--primary)
}

img{
  max-width:100%;
  height:auto;
  display:block
}

.header{
  position:sticky;
  top:0;
  z-index:99;
  background:rgba(255,255,255,.95);
  backdrop-filter:blur(10px);
  border-bottom:1px solid var(--border)
}

.header-wrap{
  max-width:1100px;
  margin:auto;
  padding:14px 20px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:20px
}

.logo{
  font-size:22px;
  font-weight:800;
  color:var(--primary)
}

.nav{
  display:flex;
  gap:16px;
  flex-wrap:wrap
}

.nav a{
  font-size:14px;
  font-weight:600;
  color:var(--text)
}

.container{
  max-width:1100px;
  margin:auto;
  padding:20px
}

.hero{
  padding:70px 25px;
  border-radius:22px;
  background:linear-gradient(135deg,#4f46e5,#6366f1);
  color:#fff;
  text-align:center;
  margin-bottom:35px
}

.hero h1{
  margin:0 0 12px;
  font-size:42px;
  line-height:1.1
}

.hero p{
  margin:0;
  font-size:17px
}

.grid{
  display:grid;
  grid-template-columns:
  repeat(auto-fit,minmax(260px,1fr));
  gap:20px
}

.card{
  background:var(--card);
  border:1px solid var(--border);
  border-radius:18px;
  overflow:hidden;
  transition:.2s
}

.card:hover{
  transform:translateY(-4px);
  box-shadow:0 10px 30px rgba(0,0,0,.06)
}

.card img{
  width:100%;
  aspect-ratio:400/210;
  object-fit:cover
}

.card h3,
.card h4{
  padding:16px;
  margin:0;
  font-size:18px;
  line-height:1.5;
  color:var(--text)
}

.search{
  width:100%;
  padding:16px;
  border-radius:14px;
  border:1px solid var(--border);
  font-size:15px;
  margin:25px 0 15px;
  outline:none
}

.search:focus{
  border-color:var(--primary)
}

.post{
  max-width:860px;
  margin:auto
}

.post img{
  border-radius:18px;
  aspect-ratio:1200/630;
  object-fit:cover;
  margin-bottom:20px
}

.post h1{
  font-size:38px;
  line-height:1.3;
  margin:20px 0
}

.post-content{
  font-size:18px;
  line-height:1.9;
  word-break:break-word
}

.post-content h2,
.post-content h3{
  margin-top:34px;
  line-height:1.4
}

.post-content a{
  text-decoration:underline
}

.post-content ul,
.post-content ol{
  padding-left:22px
}

.breadcrumb{
  font-size:14px;
  margin-bottom:20px;
  color:var(--muted)
}

.pagination{
  display:flex;
  justify-content:center;
  gap:10px;
  margin:45px 0;
  flex-wrap:wrap
}

.pagination a{
  padding:10px 16px;
  border-radius:12px;
  border:1px solid var(--border);
  color:var(--text);
  font-weight:600
}

.pagination a.active{
  background:var(--primary);
  color:#fff;
  border-color:var(--primary)
}

.footer{
  margin-top:60px;
  padding:40px 20px;
  border-top:1px solid var(--border);
  text-align:center;
  font-size:14px;
  color:var(--muted)
}

@media(max-width:768px){

.container{
  padding:16px
}

.hero{
  padding:50px 20px;
  border-radius:18px
}

.hero h1{
  font-size:32px
}

.post h1{
  font-size:28px
}

.post-content{
  font-size:16px
}

.nav{
  gap:12px
}

}


/* ================= RESET ================= */
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

html, body{
  width:100%;
  overflow-x:hidden;
  font-family:Inter,sans-serif;
}

/* ================= THEME ================= */
:root{
  --bg:#0b1120;
  --card:#111827;
  --text:#f9fafb;
  --muted:#94a3b8;
  --border:rgba(255,255,255,.08);
}

body.light{
  --bg:#f8fafc;
  --card:#ffffff;
  --text:#0f172a;
  --muted:#475569;
  --border:rgba(0,0,0,.08);
}

body{
  background:var(--bg);
  color:var(--text);
  transition:.3s;
}

/* ================= CONTAINER ================= */
.container{
  width:100%;
  max-width:1200px;
  margin:0 auto;
  padding:0 24px;
}

/* ================= HEADER ================= */
header{
  position:sticky;
  top:0;
  z-index:999;
  background:var(--bg);
  border-bottom:1px solid var(--border);
}

.navbar{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:18px 0;
}

.logo{
  font-weight:800;
}

nav ul{
  display:flex;
  gap:20px;
  list-style:none;
}

nav a{
  color:var(--muted);
  text-decoration:none;
}

.menu-btn,
.theme-btn{
  background:none;
  border:1px solid var(--border);
  padding:8px 12px;
  border-radius:10px;
  cursor:pointer;
  color:var(--text);
}

.menu-btn{display:none;}

/* ================= MOBILE MENU ================= */
.mobile-menu{
  display:none;
  flex-direction:column;
  background:var(--card);
  position:fixed;
  top:60px;
  left:0;
  right:0;
  padding:15px 24px;
  z-index:9999;
}

.mobile-menu a{
  padding:12px 0;
  border-bottom:1px solid var(--border);
  color:var(--muted);
  text-decoration:none;
}

/* ================= HERO ================= */
.hero{
  padding:clamp(40px, 8vw, 90px) 0;
}

.hero-grid{
  display:grid;
  grid-template-columns:1.2fr 1fr;
  gap:50px;
  align-items:center;
}

.hero-badge{
  display:inline-block;
  padding:8px 14px;
  border:1px solid var(--border);
  border-radius:999px;
  color:var(--muted);
  margin-bottom:18px;
  font-size:14px;
  background:rgba(255,255,255,0.03);
}

.hero h1{
  font-size:46px;
  line-height:1.2;
  margin-bottom:18px;
  font-weight:800;
}

.hero h1 span{
  color:#60a5fa;
}

.hero p{
  color:var(--muted);
  font-size:16px;
  line-height:1.7;
  margin-bottom:25px;
  max-width:600px;
}

.hero-buttons{
  display:flex;
  gap:12px;
  flex-wrap:wrap;
}

.btn{
  padding:12px 18px;
  border-radius:12px;
  text-decoration:none;
  font-weight:600;
  border:1px solid var(--border);
}

.btn-primary{
  background:#2563eb;
  color:white;
  border:none;
}

.btn-secondary{
  color:var(--text);
  background:transparent;
}
/* ================= HERO ================= */
.hero{
  padding:70px 0;
}

.hero-grid{
  display:grid;
  grid-template-columns:1.2fr 1fr;
  gap:40px;
  align-items:center;
}

.hero-card{
  background:var(--card);
  border:1px solid var(--border);
  border-radius:18px;
  padding:30px;
}

.hero-title{
  font-size:42px;
  font-weight:800;
  margin-bottom:15px;
}

.hero-title span{
  color:#60a5fa;
}

.hero-text{
  color:var(--muted);
  margin-bottom:20px;
}
/* HERO IMAGE */
.hero-card img{
  width:100%;
  border-radius:18px;
  border:1px solid var(--border);
}

/* ================= SECTIONS ================= */
.section{
  padding:clamp(40px, 7vw, 63px) 0;
}

.section-title{
  text-align:center;
  font-size:32px;
  margin-bottom:10px;
}

.section-subtitle{
  text-align:center;
  color:var(--muted);
  max-width:700px;
  margin:0 auto 40px;
  line-height:1.6;
}

/* ================= FEATURES ================= */
.feature-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
  gap:20px;
}

.feature-card{
  background:var(--card);
  border:1px solid var(--border);
  padding:25px;
  border-radius:16px;
  transition:.3s;
}

.feature-card:hover{
  transform:translateY(-5px);
}

.feature-icon{
  font-size:24px;
  margin-bottom:10px;
}

/* ================= ABOUT ================= */
.content-wrapper{
  max-width:900px;
  margin:auto;
}

.content-wrapper h2{
  font-size:26px;
  margin:40px 0 15px;
}

.content-wrapper p{
  color:var(--muted);
  line-height:1.8;
  margin-bottom:15px;
}

/* ================= FAQ ================= */
.faq-item details{
  background:var(--card);
  border:1px solid var(--border);
  border-radius:14px;
  padding:18px;
  margin-bottom:15px;
  cursor:pointer;
}

/* summary layout */
.faq-item summary{
  display:flex;
  justify-content:space-between;
  align-items:center;
  font-weight:600;
  color:var(--text);
  list-style:none;
  cursor:pointer;
}

/* hide default arrow */
.faq-item summary::-webkit-details-marker{
  display:none;
}

/* icon */
.faq-icon{
  font-size:18px;
  transition:.3s;
  color:var(--muted);
}

/* rotate icon saat open */
details[open] .faq-icon{
  transform:rotate(180deg);
  color:#60a5fa;
}

/* content */
.faq-item p{
  margin-top:12px;
  color:var(--muted);
  line-height:1.7;
}

/* hover effect */
.faq-item details:hover{
  border-color:#3b82f6;
}
/* ================= FOOTER ================= */
footer{
  margin-top:60px;
  border-top:1px solid var(--border);
}

.footer-grid{
  display:grid;
  grid-template-columns:1.5fr 1fr;
  gap:40px;
  padding:50px 0 30px;
}

.footer-brand p{
  color:var(--muted);
  margin-top:10px;
  line-height:1.6;
}

.footer-right{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:30px;
}

.footer-box p{
  color:var(--muted);
  margin-bottom:6px;
}

.footer-bottom{
  text-align:center;
  padding:20px 0;
  border-top:1px solid var(--border);
  color:var(--muted);
}

/* ================= RESPONSIVE ================= */
@media(max-width:768px){

  nav ul{display:none;}
  .menu-btn{display:inline-block;}

  .hero-grid{
    grid-template-columns:1fr;
  }

  .footer-grid{
    grid-template-columns:1fr;
  }

  .footer-right{
    grid-template-columns:1fr 1fr;
  }

  .container{
    padding:0 16px;
  }

  .hero h1{
    font-size:32px;
  }
}

@media(max-width:500px){
  .footer-right{
    grid-template-columns:1fr;
  }
}

.cta-section{
  padding:80px 0;
}

.cta-box{
  background:linear-gradient(135deg, rgba(59,130,246,.15), rgba(16,185,129,.08));
  border:1px solid var(--border);
  border-radius:20px;
  padding:40px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:30px;
  flex-wrap:wrap;
}

/* TEXT */
.cta-text h2{
  font-size:28px;
  margin-bottom:10px;
}

.cta-text p{
  color:var(--muted);
  max-width:500px;
  line-height:1.6;
}

/* BUTTONS */
.cta-action{
  display:flex;
  gap:12px;
  flex-wrap:wrap;
}

.cta-btn{
  padding:12px 18px;
  border-radius:12px;
  text-decoration:none;
  font-weight:600;
  border:1px solid var(--border);
}

.cta-btn.primary{
  background:#2563eb;
  color:#fff;
  border:none;
}

.cta-btn.secondary{
  color:var(--text);
  background:transparent;
}

/* RESPONSIVE */
@media(max-width:768px){
  .cta-box{
    text-align:center;
    justify-content:center;
  }

  .cta-text h2{
    font-size:22px;
  }
}
`;
