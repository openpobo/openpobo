export const styles = `
:root{
  /* DARK MODE DEFAULT */
  --bg:#0b1220;
  --card:#111a2e;
  --text:#e5e7eb;
  --muted:#94a3b8;
  --primary:#4f46e5;
  --border:#1f2a44;
}

/* LIGHT MODE */
body.light{
  --bg:#ffffff;
  --card:#ffffff;
  --text:#0f172a;
  --muted:#64748b;
  --primary:#4f46e5;
  --border:#e2e8f0;
}

*{
  box-sizing:border-box;
}

body{
  margin:0;
  font-family:system-ui,-apple-system,sans-serif;
  background:var(--bg);
  color:var(--text);
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
  display:flex;
  align-items:center;
  justify-content:space-between;
}

/* LOGO */
.logo{
  font-size:22px;
  font-weight:800;
  color:var(--primary);
}

/* NAV DESKTOP */
.nav{
  display:flex;
  gap:16px;
}

/* NAV LINKS */
.nav a{
  color:var(--text);
  font-weight:600;
  font-size:14px;
}

/* BUTTON */
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

/* ================= MOBILE DRAWER ================= */
@media(max-width:768px){

  .menu-btn{
    display:block;
  }

  .theme-btn{
    margin-left:auto;
  }

  /* overlay */
  .nav{
    position:fixed;
    top:0;
    left:-260px;
    width:260px;
    height:100vh;
    background:var(--bg);
    flex-direction:column;
    padding:60px 20px;
    gap:18px;
    border-right:1px solid var(--border);
    transition:.3s ease;
    z-index:1000;
  }

  .nav.show{
    left:0;
  }

  /* CLOSE BUTTON */
  .close-menu{
    position:absolute;
    top:12px;
    right:12px;
    background:none;
    border:1px solid var(--border);
    color:var(--text);
    width:34px;
    height:34px;
    border-radius:8px;
    cursor:pointer;
  }

  /* hide desktop layout spacing */
}

/* ================= CONTENT ================= */
.container{
  max-width:1100px;
  margin:auto;
  padding:20px;
}
`;
