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
  font-family:Inter, sans-serif;
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

.header-wrap{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:16px 0;
}

.logo{
  font-weight:800;
  color:var(--text);
  text-decoration:none;
}

.nav{
  display:flex;
  gap:20px;
}

.nav a{
  color:var(--muted);
  text-decoration:none;
}

/* MOBILE MENU */
.menu-btn{
  display:none;
  background:none;
  border:1px solid var(--border);
  padding:6px 10px;
  border-radius:8px;
  color:var(--text);
}

.close-btn{
  display:none;
}

/* ================= HERO ================= */
.hero{
  padding:clamp(40px, 6vw, 90px) 0;
}

.hero-grid{
  display:grid;
  grid-template-columns:1.2fr 1fr;
  gap:40px;
  align-items:center;
}

.hero h1{
  font-size:clamp(28px, 4vw, 46px);
  font-weight:800;
  margin-bottom:15px;
}

.hero h1 span{
  color:#60a5fa;
}

.hero p{
  color:var(--muted);
  line-height:1.7;
  margin-bottom:20px;
}

.hero-badge{
  display:inline-block;
  padding:6px 12px;
  border:1px solid var(--border);
  border-radius:999px;
  margin-bottom:12px;
  font-size:13px;
  color:var(--muted);
}

/* BUTTON */
.btn{
  padding:10px 16px;
  border-radius:10px;
  text-decoration:none;
  font-weight:600;
}

.btn-primary{
  background:#2563eb;
  color:#fff;
}

.btn-secondary{
  border:1px solid var(--border);
  color:var(--text);
}

/* ================= SECTION ================= */
.section{
  padding:clamp(35px, 5vw, 80px) 0;
}

.section-title{
  text-align:center;
  font-size:28px;
  margin-bottom:10px;
}

.section-subtitle{
  text-align:center;
  color:var(--muted);
  max-width:700px;
  margin:0 auto 40px;
}

/* ================= FEATURES ================= */
.feature-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));
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
  transform:translateY(-6px);
}

.feature-header{
  display:flex;
  align-items:center;
  gap:10px;
  margin-bottom:10px;
}

.feature-icon{
  font-size:22px;
}

/* ================= GRID ================= */
.grid{
  display:grid;
  grid-template-columns:repeat(4, 1fr);
  gap:20px;
}

.card{
  background:var(--card);
  border:1px solid var(--border);
  border-radius:14px;
  overflow:hidden;
  transition:.3s;
}

.card:hover{
  transform:translateY(-5px);
}

.card img{
  width:100%;
  aspect-ratio:16/9;
  object-fit:cover;
}

.card h3{
  padding:12px;
  font-size:16px;
}

/* ================= CTA ================= */
.cta-section{
  padding:60px 0;
}

.cta-box{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:20px;
  flex-wrap:wrap;
  padding:30px;
  border-radius:16px;
  border:1px solid var(--border);
  background:linear-gradient(135deg, rgba(59,130,246,.15), rgba(99,102,241,.08));
}

.cta-btn{
  padding:10px 14px;
  border-radius:10px;
  background:#2563eb;
  color:#fff;
  text-decoration:none;
}

/* ================= FAQ ================= */
.faq-item{
  background:var(--card);
  border:1px solid var(--border);
  padding:18px;
  border-radius:14px;
  margin-bottom:15px;
}

/* ================= FOOTER ================= */
.footer{
  margin-top:60px;
  border-top:1px solid var(--border);
  padding:40px 0;
}

.footer-grid{
  display:grid;
  grid-template-columns:1.5fr 1fr;
  gap:30px;
}

.footer-bottom{
  text-align:center;
  margin-top:20px;
  color:var(--muted);
}

/* ================= RESPONSIVE ================= */
@media(max-width:1024px){
  .grid{
    grid-template-columns:repeat(2, 1fr);
  }
}

@media(max-width:768px){
  .hero-grid{
    grid-template-columns:1fr;
  }

  .nav{
    display:none;
  }

  .menu-btn{
    display:block;
  }

  .footer-grid{
    grid-template-columns:1fr;
  }

  .grid{
    grid-template-columns:1fr;
  }
}
`;
