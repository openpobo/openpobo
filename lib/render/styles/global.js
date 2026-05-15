export const globalStyles = `
:root{
  /* THEME */
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

  --footer-bg:#ffffff;
  --footer-text:#0f172a;
  --footer-border:#e2e8f0;
}

/* RESET */
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

.menu-btn{justify-self:start;}
.logo{justify-self:center;font-size:22px;font-weight:800;color:var(--primary);}
.theme-btn{justify-self:end;}

/* NAV */
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

.nav.show{left:0;}

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

/* ================= FOOTER ================= */
.footer{
  margin-top:70px;
  padding:50px 20px;
  border-top:1px solid var(--footer-border);
  background:var(--footer-bg);
}

.footer-wrap{
  max-width:1100px;
  margin:auto;
  display:grid;
  grid-template-columns:2fr 1fr 1fr;
  gap:40px;
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
}

.footer-menu a:hover{
  color:var(--footer-text);
}

.footer-bottom{
  margin-top:40px;
  padding-top:20px;
  border-top:1px solid var(--footer-border);
  text-align:center;
  font-size:14px;
  color:var(--muted);
}

/* RESPONSIVE FOOTER */
@media(max-width:768px){
  .footer-wrap{
    grid-template-columns:1fr 1fr;
    gap:24px;
  }

  .footer-brand{
    grid-column:1/-1;
  }
}
`;
