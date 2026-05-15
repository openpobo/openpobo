export const styles = `
*{margin:0;padding:0;box-sizing:border-box}
html,body{overflow-x:hidden;font-family:Inter,sans-serif}

:root{
  --bg:#0b1120;
  --card:#111827;
  --text:#f9fafb;
  --muted:#94a3b8;
  --border:rgba(255,255,255,.08);
}

body.light{
  --bg:#f8fafc;
  --card:#fff;
  --text:#0f172a;
  --muted:#475569;
  --border:rgba(0,0,0,.08);
}

body{background:var(--bg);color:var(--text)}

/* container */
.container{
  max-width:1200px;
  margin:auto;
  padding:0 20px;
}

/* HEADER */
.header{
  position:sticky;top:0;
  background:var(--bg);
  border-bottom:1px solid var(--border);
  z-index:1000;
}

.header-wrap{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:14px 0;
}

.logo{font-weight:800}

.nav-links{
  display:flex;
  gap:16px;
}

.nav-link{
  color:var(--muted);
  text-decoration:none;
}

/* HERO */
.hero{padding:60px 0}

.hero-grid{
  display:grid;
  grid-template-columns:1fr;
  gap:20px;
}

/* GRID */
.grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:16px;
}

@media(max-width:900px){
  .grid{grid-template-columns:repeat(2,1fr)}
}

@media(max-width:500px){
  .grid{grid-template-columns:1fr}
}

/* CARD */
.card{
  background:var(--card);
  border:1px solid var(--border);
  border-radius:14px;
  overflow:hidden;
}

/* FOOTER */
.footer{
  margin-top:60px;
  border-top:1px solid var(--border);
}

.footer-grid{
  display:grid;
  grid-template-columns:2fr 1fr;
  gap:30px;
  padding:40px 0;
}

.footer-bottom{
  text-align:center;
  padding:20px;
  border-top:1px solid var(--border);
  color:var(--muted);
}

/* CTA */
.footer-cta{
  margin:40px auto;
  padding:30px;
  max-width:900px;
  background:linear-gradient(135deg,rgba(59,130,246,.15),rgba(16,185,129,.1));
  border:1px solid var(--border);
  border-radius:16px;
}

/* MOBILE MENU */
@media(max-width:768px){
  .nav-links{display:none}
}
`;
