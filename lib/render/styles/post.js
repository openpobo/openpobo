export const postStyles = `
/* ================= POST LAYOUT ================= */
.post{
  max-width:860px;
  margin:auto;
  padding:20px;
}

/* ================= HEADER POST ================= */
.post-header{
  margin-bottom:24px;
}

.post-header h1{
  font-size:38px;
  line-height:1.2;
  margin:16px 0;
  letter-spacing:-.02em;
}

.post-header .meta{
  color:var(--muted);
  font-size:.95rem;
  margin:0;
}

/* ================= FEATURE IMAGE ================= */
.post img{
  border-radius:18px;
  aspect-ratio:1200/630;
  object-fit:cover;
  margin-bottom:20px;
}

/* ================= CONTENT ================= */
.post-content{
  font-size:18px;
  line-height:1.9;
  word-break:break-word;
}

.post-content h2,
.post-content h3{
  margin-top:34px;
}

/* ================= BREADCRUMB ================= */
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
  transition:.2s;
}

.breadcrumb a:hover{
  color:var(--primary);
}

.breadcrumb span{
  color:var(--text);
  font-weight:600;
}

/* ================= RELATED ================= */
.related{
  margin-top:40px;
  padding-top:24px;
  border-top:1px solid var(--border);
}

.related h3{
  margin-bottom:18px;
  font-size:1.2rem;
}

/* ================= MOBILE ================= */
@media(max-width:768px){
  .post-header h1{
    font-size:30px;
  }

  .post-content{
    font-size:16px;
  }

  .breadcrumb{
    font-size:.85rem;
    gap:6px;
  }
}
`;
