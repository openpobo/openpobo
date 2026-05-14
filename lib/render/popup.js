import {
SITE,
kategoriUrl,
escapeHTML
} from "../config";

export function renderPopup(props = {}){

const post =
props.post || {};

const kategori =
(post.kategori || "umum")
.toLowerCase();

const kategoriLink =
kategoriUrl(kategori);

const title =
post.title || SITE.name;

// ======================
// CTA URL PER KATEGORI
// ======================

const CTA = {

blog:{

login:
"https://example.com/menujuguaffiliateblog",

register:
"https://example.com/daftarblog"

},

seo:{

login:
"https://example.com/menujuguaffiliateseo",

register:
"https://example.com/daftarseo"

},

teknologi:{

login:
"https://example.com/menujuguaffiliatetech",

register:
"https://example.com/daftarteknologi"

}

};

const cta =
CTA[kategori] || {};

const loginUrl =
cta.login || kategoriLink;

const registerUrl =
cta.register || kategoriLink;

return `

<div
class="popup-overlay"
id="popupOverlay"
>

<div class="popup-container">

<div
class="close-btn"
onclick="closePopup()"
></div>

<div
class="gold-particle"
style="
width:10px;
height:10px;
top:15%;
left:12%;
animation-delay:0s;
"
></div>

<div
class="gold-particle"
style="
width:8px;
height:8px;
top:35%;
left:88%;
animation-delay:1.5s;
"
></div>

<div
class="gold-particle"
style="
width:12px;
height:12px;
top:65%;
left:18%;
animation-delay:3s;
"
></div>

<div
class="gold-particle"
style="
width:6px;
height:6px;
top:25%;
left:75%;
animation-delay:4.5s;
"
></div>

<div
class="gold-particle"
style="
width:9px;
height:9px;
top:80%;
left:60%;
animation-delay:6s;
"
></div>

<div class="luxury-border"></div>

<div class="popup-content">

<img
src="https://g288-image-dashboard.g4yimages.workers.dev/i/906006fa-8a98-4498-b50b-7a2707d6a9e8"
alt="${escapeHTML(title)}"
class="popup-image"
/>

<div
class="clk-btn-sgp"
style="font-size:20px;"
>

<a
href="${loginUrl}"
target="_blank"
rel="nofollow noreferrer"
class="login"
>
LOGIN
</a>

<a
href="${registerUrl}"
target="_blank"
rel="nofollow noreferrer"
class="register"
>
DAFTAR
</a>

</div>

<div class="popup-footer">

${escapeHTML(title)}

<br>

<span
style="
color:#6A994E;
font-weight:600;
text-shadow:0 0 5px rgba(212,175,55,.5);
"
>

© COPYRIGHT
${new Date().getFullYear()}
${SITE.name}

</span>

</div>

</div>

</div>

</div>


<script>
    function closePopup() {
        const popupOverlay = document.getElementById('popupOverlay');
        popupOverlay.style.opacity = '0';
        popupOverlay.style.transition = 'opacity 0.3s ease';
        
        setTimeout(() => {
            popupOverlay.style.display = 'none';
        }, 300);
    }
    

    document.getElementById('popupOverlay').addEventListener('click', function(event) {
        if (event.target === this) {
            closePopup();
        }
    });
</script>

</div>

<style>
    .situs-888-gacor {
      margin: 0;
      padding: 0;
      font-family: 'Playfair Display', 'Segoe UI', serif;
      background-color: transparent;
      color: 48CAE4;
      overflow: hidden;
    }

    .popup-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(3px);
      -webkit-backdrop-filter: blur(3px);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    }

    .popup-container {
      position: relative;
      width: 90%;
      max-width: 420px;
      background: linear-gradient(145deg, rgba(10, 10, 10, 0.9), rgba(26, 21, 16, 0.85));
      border-radius: 20px;
      overflow: hidden;
      text-align: center;
      animation: rotateScaleIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275), goldPulse 3.5s infinite ease-in-out;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(212, 175, 55, 0.2);
      padding-bottom: 20px;
      border: 1px solid rgba(212, 175, 55, 0.15);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
    }

    /* 💛 Emas berdenyut yang mewah */
    @keyframes goldPulse {
      0%, 100% {
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7), 0 0 20px rgba(212, 175, 55, 0.3), 0 0 0 1px rgba(212, 175, 55, 0.2);
      }
      50% {
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7), 0 0 30px rgba(212, 175, 55, 0.5), 0 0 0 1px rgba(212, 175, 55, 0.3);
      }
    }

    /* ✨ Shiny diagonal emas yang elegan */
    .popup-container::before {
      content: "";
      position: absolute;
      top: -100%;
      left: -100%;
      width: 200%;
      height: 200%;
      background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0) 45%,
        rgba(255, 215, 0, 0.15) 50%,
        rgba(255, 255, 255, 0) 55%
      );
      animation: shineDiagonal 5s linear infinite;
      z-index: 2;
      pointer-events: none;
    }

    @keyframes shineDiagonal {
      0% {
        transform: translate(-100%, -100%) rotate(30deg);
      }
      100% {
        transform: translate(100%, 100%) rotate(30deg);
      }
    }

    .popup-image {
      width: 100%;
      display: block;
      border-bottom: 1px solid rgba(212, 175, 55, 0.15);
    }

    .clk-btn-sgp {
    width: 97%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    padding: 20px;
    position: relative;
    overflow: hidden;
    
}

/* Gold Accent Line */
.clk-btn-sgp::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - 30px);
    height: 2px;
    background: linear-gradient(90deg, 
        transparent, 
        6A994E, 
        6A994E, 
        6A994E, 
        transparent);
    opacity: 0.4;
    filter: blur(1px);
}

.clk-btn-sgp a {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    padding: 16px 12px;
    margin: 0;
    border-radius: 14px;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 2px solid transparent;
    box-shadow: 0 8px 0px #000000;
    clip-path: polygon(var(--blade-cut) 0%, 100% 0%, 100% calc(100% - var(--blade-cut)), calc(100% - var(--blade-cut)) 100%, 0% 100%, 0% var(--blade-cut));
    z-index: 1;
}

/* Gold Border Effect */
.clk-btn-sgp a::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, 
        48CAE4, 
        6A994E, 
        6A994E, 
        6A994E, 
        48CAE4);
    border-radius: 16px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.clk-btn-sgp a:hover::after {
    opacity: 1;
}

.clk-btn-sgp a:hover {
    transform: translateY(-6px) scale(1.03);
    border-color: 6A994E;
}

/* LOGIN BUTTON - Black & Gold */
.login {
    color: 6A994E !important;
    background: linear-gradient(145deg, #535050, #000000);
    border: 2px solid 48CAE4;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    position: relative;
}

.login::before {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 18px;
    opacity: 0.7;
    transition: all 0.3s ease;
    filter: drop-shadow(0 0 3px 6A994E);
}

.login:hover {
    background: linear-gradient(145deg, #222222,#000000);
    box-shadow: 
        0 12px 0px #000000,
        0 20px 40px rgba(212, 175, 55, 0.4),
        0 0 30px rgba(255, 215, 0, 0.2);
    color: #fff8dc !important;
    border-color: 6A994E;
}

.login:hover::before {
    opacity: 1;
    transform: translateY(-50%) rotate(15deg);
    filter: drop-shadow(0 0 8px 6A994E);
}

/* REGISTER BUTTON - Gold & Black */
.register {
    color: #000000 !important;
    background: linear-gradient(145deg, 6A994E, 48CAE4);
    border: 2px solid #000000;
    text-shadow: 0 1px 2px rgba(255, 255, 255, 0.3);
    position: relative;
}

.register::before {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 18px;
    opacity: 0.7;
    transition: all 0.3s ease;
}

.register:hover {
    background: linear-gradient(145deg, 6A994E, 6A994E);
    box-shadow: 
        0 12px 0px #000000,
        0 20px 40px rgba(212, 175, 55, 0.5),
        0 0 35px rgba(255, 215, 0, 0.3);
    color: #000000 !important;
    border-color: #000000;
}

.register:hover::before {
    opacity: 1;
    transform: translateY(-50%) scale(1.2) rotate(360deg);
    filter: drop-shadow(0 0 5px 355070);
}

/* Button Text Container */
.clk-btn-sgp a span {
    display: inline-block;
    transition: transform 0.3s ease;
}

.clk-btn-sgp a:hover span {
    transform: translateX(3px);
}

/* Responsive Design */
@media (max-width: 768px) {
    .clk-btn-sgp {
        grid-template-columns: 1fr;
        gap: 12px;
    }
    
    .clk-btn-sgp a {
        padding: 18px 12px;
    }
    
    .login::before,
    .register::before {
        position: relative;
        left: 0;
        right: 0;
        display: inline-block;
        margin-right: 10px;
        transform: none;
        top: 0;
    }
    
    .login:hover::before,
    .register:hover::before {
        transform: none;
    }
}

/* Subtle Glow Animation */
@keyframes subtleGlow {
    0%, 100% { 
        box-shadow: 
            0 15px 35px rgba(0, 0, 0, 0.6),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
    }
    50% { 
        box-shadow: 
            0 15px 35px rgba(0, 0, 0, 0.6),
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            0 0 20px rgba(212, 175, 55, 0.15);
    }
}


    .info-table {
      width: 90%;
      margin: 20px auto;
      border-collapse: collapse;
      color: #eee;
      font-size: 14px;
      position: relative;
      z-index: 3;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }

    .info-table th {
      background: linear-gradient(135deg, 6A994E, #b8941f);
      padding: 14px 10px;
      font-size: 15px;
      color: #000;
      border: none;
      font-weight: 700;
      letter-spacing: 0.8px;
      text-transform: uppercase;
    }

    .info-table td {
      padding: 12px;
      border-bottom: 1px solid rgba(212, 175, 55, 0.1);
      text-align: left;
    }

    .info-table tr:last-child td {
      border-bottom: none;
    }

    .popup-footer {
      font-size: 13px;
      color: #ccc;
      padding: 20px 10px;
      position: relative;
      z-index: 3;
      line-height: 1.6;
      font-family: 'Playfair Display', serif;
    }

    @keyframes rotateScaleIn {
      0% {
        opacity: 0;
        transform: scale(0.3) rotate(-10deg);
      }
      50% {
        transform: scale(1.05) rotate(2deg);
      }
      100% {
        opacity: 1;
        transform: scale(1) rotate(0deg);
      }
    }

    /* Efek partikel emas */
    .gold-particle {
      position: absolute;
      background: radial-gradient(circle, rgba(255, 215, 0, 0.8) 0%, rgba(212, 175, 55, 0.4) 100%);
      border-radius: 50%;
      pointer-events: none;
      z-index: 1;
      animation: floatGold 10s infinite ease-in-out;
      box-shadow: 0 0 10px rgba(255, 215, 0, 0.6);
    }

    @keyframes floatGold {
      0%, 100% {
        transform: translateY(0) translateX(0);
        opacity: 0;
      }
      10% {
        opacity: 0.8;
      }
      90% {
        opacity: 0.8;
      }
      100% {
        transform: translateY(-120px) translateX(40px);
        opacity: 0;
      }
    }

    /* Efek border emas mewah */
    .luxury-border {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: 1px solid rgba(212, 175, 55, 0.2);
      border-radius: 20px;
      pointer-events: none;
      z-index: 4;
      background: linear-gradient(135deg, 
        rgba(212, 175, 55, 0) 0%, 
        rgba(212, 175, 55, 0.1) 50%, 
        rgba(212, 175, 55, 0) 100%);
    }

    /* Tombol Close */
    .close-btn {
      position: absolute;
      top: 15px;
      right: 15px;
      width: 32px;
      height: 32px;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      z-index: 10;
      transition: all 0.3s ease;
      border: 1px solid rgba(212, 175, 55, 0.3);
    }

    .close-btn:hover {
      background: rgba(212, 175, 55, 0.8);
      transform: rotate(90deg);
    }

    .close-btn::before,
    .close-btn::after {
      content: '';
      position: absolute;
      width: 16px;
      height: 2px;
      background: 48CAE4;
    }

    .close-btn::before {
      transform: rotate(45deg);
    }

    .close-btn::after {
      transform: rotate(-45deg);
    }

    /* Responsif untuk layar kecil */
    @media (max-width: 480px) {
      .popup-container {
        width: 95%;
        max-width: 350px;
      }
      
      .popup-buttons a {
        font-size: 14px;
        padding: 16px 0;
      }
      
      .info-table {
        font-size: 13px;
      }
      
      .popup-footer {
        font-size: 12px;
      }
      
      .close-btn {
        width: 28px;
        height: 28px;
      }
    }
  </style>

`;

}
