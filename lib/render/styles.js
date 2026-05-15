export const styles = `
:root{
  --bg:#0b1220;
  --card:#111a2e;
  --text:#e5e7eb;
  --muted:#94a3b8;
  --primary:#4f46e5;
  --border:#1f2a44;

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

  --footer-bg:#ffffff;
  --footer-text:#0f172a;
  --footer-border:#e2e8f0;
}

*{
  box-sizing:border-box;
}

html{ scroll-behavior:smooth; }

body{
  margin:0;
  font-family:system-ui,-apple-system,sans-serif;
  background:var(--bg);
  color:var(--text);
  line-height:1.7;
}

a{
  text-decoration:none;
  color:var(--primary);
}

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
}

/* ================= POST ================= */
.post{
  max-width:860px;
  margin:auto;
}

/* ================= PAGINATION ================= */
.pagination{
  display:flex;
  justify-content:center;
  gap:10px;
  margin:45px 0;
  flex-wrap:wrap;
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
}

/* FOOTER TEXT */
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

  .container{ padding:16px; }

  .hero{ padding:50px 20px; }

  .hero h1{ font-size:32px; }

  .post h1{ font-size:28px; }

  .post-content{ font-size:16px; }

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
`;
