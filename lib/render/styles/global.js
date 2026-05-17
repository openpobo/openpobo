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
  border-top:1px solid #222;
  background:#0f172a;
}

.footer-wrap{
  max-width:1300px;
  margin:auto;

  display:grid;

  grid-template-columns:
  2fr
  1fr
  1fr
  1fr;

  gap:40px;
  padding:20px;
}

/* BRAND */

.footer-brand h3{
  font-size:22px;
  margin-bottom:14px;
  color:#fff;
}

.footer-brand p{
  color:#94a3b8;
  line-height:1.7;
  max-width:420px;
}

/* MENU */

.footer-menu{
  display:flex;
  flex-direction:column;
}

.footer-menu summary{
  list-style:none;

  display:flex;
  align-items:center;
  justify-content:space-between;

  font-weight:700;
  margin-bottom:16px;

  color:#fff;
}

.footer-menu summary::-webkit-details-marker{
  display:none;
}

/* ICON */

.footer-menu summary i{
  display:none;

  width:12px;
  height:12px;
  position:relative;
}

.footer-menu summary i::before,
.footer-menu summary i::after{
  content:"";
  position:absolute;
  background:#fff;
  border-radius:20px;
  transition:.25s;
}

.footer-menu summary i::before{
  width:12px;
  height:2px;
  top:5px;
  left:0;
}

.footer-menu summary i::after{
  width:2px;
  height:12px;
  top:0;
  left:5px;
}

.footer-menu[open] summary i::after{
  transform:scaleY(0);
}

/* LINKS */

.footer-links{
  display:flex;
  flex-direction:column;
  gap:12px;
}

.footer-links a{
  font-size:14px;

  color:#94a3b8;
  text-decoration:none;
  transition:.2s;
  
  display:-webkit-box;
  -webkit-line-clamp:2;
  -webkit-box-orient:vertical;
  overflow:hidden;
  min-height:15px;
}

.footer-links a:hover{
  color:#fff;
  transform:translateX(3px);
}

/* BOTTOM */

.footer-bottom{
  margin-top:40px;
  padding-top:20px;

  border-top:1px solid #222;

  text-align:center;
  font-size:14px;
  color:#94a3b8;
}

/* ================= DESKTOP ================= */

@media(min-width:769px){

  .footer-menu summary{
    pointer-events:none;
  }

}

/* ================= MOBILE ================= */

@media(max-width:768px){

  .footer{
    padding:40px 16px;
  }

  .footer-wrap{
    grid-template-columns:1fr;
    gap:10px;
    padding:0;
  }

  .footer-brand{
    margin-bottom:10px;
  }

  .footer-menu{
    border-top:1px solid #222;
    padding-top:16px;
  }

  .footer-menu summary{
    cursor:pointer;
    pointer-events:auto;
    margin-bottom:0;
    padding-bottom:16px;
  }

  /* tampil icon */
  .footer-menu summary i{
    display:block;
  }

  /* DEFAULT HIDDEN */
  .footer-menu .footer-links{
    display:none;
    padding-bottom:18px;
  }

  /* tampil saat dibuka */
  .footer-menu[open] .footer-links{
    display:flex;
  }

}
`;
