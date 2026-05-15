export const categoryStyles = `
/* ================= CATEGORY HEADER ================= */
.category-header{
  max-width:860px;
  margin:auto;
  padding:20px;
}

.category-title{
  font-size:34px;
  margin:0 0 10px;
  line-height:1.2;
}

.category-desc{
  color:var(--muted);
  margin:0 0 20px;
  font-size:16px;
}

/* ================= GRID (SAME AS HOME) ================= */
.grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
  gap:20px;
}

/* ================= CARD ================= */
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
  aspect-ratio:400/210;
  object-fit:cover;
}

.card h3,
.card h4{
  padding:16px;
  margin:0;
  font-size:18px;
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
}

.pagination a.active{
  background:var(--primary);
  color:#fff;
  border-color:var(--primary);
}

/* ================= MOBILE ================= */
@media(max-width:768px){
  .category-title{
    font-size:26px;
  }

  .grid{
    grid-template-columns:repeat(2,1fr);
    gap:12px;
  }

  .card h3,
  .card h4{
    font-size:16px;
    padding:12px;
  }
}

@media(max-width:480px){
  .grid{
    grid-template-columns:1fr;
  }
}
`;
