export const styles = `
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
