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

/* ================= Related ================= */
.related{
max-width:860px;
margin:40px auto 0;
padding-top:24px;
border-top:1px solid var(--border);
}

.related h3{
margin-bottom:18px;
font-size:1.2rem;
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
  aspect-ratio:400/210;
  object-fit:cover;
}

.card h3,
.card h4{
  padding:16px;
  margin:0;
  font-size:18px;
}



.toc{
	background:var(--card);
	border:1px solid var(--border);
	border-radius:18px;
	padding:16px 20px;
	margin:28px 0;
	box-shadow:var(--shadow)
}

.toc-title{
	cursor:pointer;
	font-weight:700;
	font-size:16px;
	color:var(--text);
	list-style:none;
	outline:none;
	display:flex;
	align-items:center;
	justify-content:space-between;
	gap:10px
}

.toc-title::-webkit-details-marker{
	display:none
}

.toc ul{
	margin:16px 0 0;
	padding-left:18px
}

.toc li{
	margin:10px 0;
	color:var(--muted);
	line-height:1.55
}

.toc li.lv-3{
	margin-left:14px;
	font-size:14px;
	opacity:.9
}

.toc a{
	color:var(--text);
	text-decoration:none;
	transition:.2s
}

.toc a:hover{
	color:var(--primary);
	padding-left:2px
}

.toc-toggle{
	font-size:0
}

.toc-toggle::before{
	content:"Buka";
	font-size:13px;
	color:var(--muted)
}

.toc[open] .toc-toggle::before{
	content:"Tutup";
	color:var(--primary)
}

html{
	scroll-behavior:smooth
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
    .grid{
    grid-template-columns:repeat(2,1fr);
    gap:12px;
  }
  
}



`;
