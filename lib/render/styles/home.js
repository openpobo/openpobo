export const homeStyles = `
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
  font-size:17px;
}

/* ================= SEARCH ================= */
.search{
  width:100%;
  padding:16px;
  border-radius:14px;
  border:1px solid var(--border);
  margin:25px 0 15px;
  background:transparent;
  color:var(--text);
}

.search:focus{
  border-color:var(--primary);
  outline:none;
}

/* ================= GRID ================= */
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
  .hero{
    padding:50px 20px;
  }

  .hero h1{
    font-size:32px;
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
