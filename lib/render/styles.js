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
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:15px;
}

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

.nav a{
  font-size:14px;
  font-weight:600;
  color:var(--text);
}

/* BUTTONS */
.menu-btn{
  display:none;
  background:none;
  border:1px solid var(--border);
  color:var(--text);
  padding:6px 10px;
  border-radius:8px;
  font-size:18px;
  cursor:pointer;
}

.theme-btn{
  background:none;
  border:1px solid var(--border);
  color:var(--text);
  padding:6px 10px;
  border-radius:8px;
  cursor:pointer;
}

/* ================= CONTAINER ================= */
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

.hero p{
  margin:0;
  font-size:17px;
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
  width:100%;
  aspect-ratio:400/210;
  object-fit:cover;
}

.card h3,
.card h4{
  padding:16px;
  margin:0;
  font-size:18px;
  line-height:1.5;
}

/* ================= SEARCH ================= */
.search{
  width:100%;
  padding:16px;
  border-radius:14px;
  border:1px solid var(--border);
  font-size:15px;
  margin:25px 0 15px;
  outline:none;
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

/* ================= NAV MOBILE ================= */
@media(max-width:768px){

  .container{
    padding:16px;
  }

  .hero{
    padding:50px 20px;
    border-radius:18px;
  }

  .hero h1{
    font-size:32px;
  }

  .post h1{
    font-size:28px;
  }

  .post-content{
    font-size:16px;
  }

  .nav{
    position:absolute;
    top:60px;
    left:0;
    right:0;
    background:var(--bg);
    flex-direction:column;
    padding:15px;
    border-bottom:1px solid var(--border);
    display:none;
  }

  .nav.show{
    display:flex;
  }

  .menu-btn{
    display:block;
  }
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
  font-weight:600;
}

.pagination a.active{
  background:var(--primary);
  color:#fff;
  border-color:var(--primary);
}

/* ================= FOOTER ================= */
.footer{
  margin-top:60px;
  padding:40px 20px;
  border-top:1px solid var(--border);
  text-align:center;
  font-size:14px;
  color:var(--muted);
}

`;
