
import {
  sanitizeSlug
} from "../config";

export function renderFooter(props={}){

const post =
props.post || {};

const kategori =
post.kategori || "";

const kategoriUrl =
"/kategori/" +
sanitizeSlug(kategori);

import {
  renderFooterNav
} from "./nav-footer";

export function renderFooter(){
const url =
canonical(path);
return `

   <div class="pdd39-anchor-nav__bottom-wrap" id="anchorNavigationPriceBarMobile">
    <div class="pdd39-anchor-nav__bottom">
     <div class="pdd39-anchor-nav__price pd-buying-price" id="sgDevPriceAreaBaseMobile">
     </div>
    </div>
   </div>
   <footer class="footer">
    <!--googleoff: all-->
    <div class="footer">
      <div class="footer-column">
        <p class="hidden">
          Footer Navigation
        </p>

        <!-- ===== COLUMN 1: PRODUCTS ===== -->
        <div class="footer-column__item">
          <div class="footer-category">
            <p class="footer-category__title" id="footer-category-title-0">
              Products
            </p>
            <a an-ac="footer" an-ca="navigation" an-la="products" an-tr="nv01_footer sitemap|menu1Depth" aria-expanded="false" aria-labelledby="footer-category-title-0" class="footer-category__anchor" href="javascript:void(0);" role="button">
              <span class="hidden" data-i18n-close="Tutup" data-i18n-open="Buka">
                Buka
              </span>
              <svg class="icon" focusable="false">
                <use href="#open-down-regular" xlink:href="#open-down-regular"></use>
              </svg>
            </a>
            <div class="footer-category__list-wrap">
              <ul class="footer-category__list" role="list">
                <li class="footer-category__item" role="listitem">
                  <a class="footer-category__link" href="${url}">
                    LAPAKGACOR
                  </a>
                </li>
                <li class="footer-category__item" role="listitem">
                  <a class="footer-category__link" href="${url}">
                    SLOT GACOR
                  </a>
                </li>
                <li class="footer-category__item" role="listitem">
                  <a class="footer-category__link" href="${url}">
                    LAPAKGACOR LOGIN
                  </a>
                </li>
                <li class="footer-category__item" role="listitem">
                  <a class="footer-category__link" href="${url}">
                    SLOT RESMI
                  </a>
                </li>
                <li class="footer-category__item" role="listitem">
                  <a class="footer-category__link" href="${url}">
                    SITUS SLOT GACOR
                  </a>
                </li>
                <li class="footer-category__item" role="listitem">
                  <a class="footer-category__link" href="${url}">
                    PASTI MAXWIN
                  </a>
                </li>
                <li class="footer-category__item" role="listitem">
                  <a class="footer-category__link" href="${url}">
                    LAPAKGACOR DAFTAR
                  </a>
                </li>
                <li class="footer-category__item" role="listitem">
                  <a class="footer-category__link" href="${url}">
                    SLOT ONLINE
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- ===== COLUMN 2: SERVICES ===== -->
        <div class="footer-column__item">
          <div class="footer-category">
            <p class="footer-category__title" id="footer-category-title-1">
              Services
            </p>
            <a an-ac="footer" an-ca="navigation" an-la="services" an-tr="nv01_footer sitemap|menu1Depth" aria-expanded="false" aria-labelledby="footer-category-title-1" class="footer-category__anchor" href="javascript:void(0);" role="button">
              <span class="hidden" data-i18n-close="Tutup" data-i18n-open="Buka">
                Buka
              </span>
              <svg class="icon" focusable="false">
                <use href="#open-down-regular" xlink:href="#open-down-regular"></use>
              </svg>
            </a>
            <div class="footer-category__list-wrap">
              <ul class="footer-category__list" role="list">
                <li class="footer-category__item" role="listitem">
                  <a class="footer-category__link" href="${url}">
                    Promo &amp; Bonus Harian
                  </a>
                </li>
                <li class="footer-category__item" role="listitem">
                  <a class="footer-category__link" href="${url}">
                    Turnamen &amp; Event
                  </a>
                </li>
                <li class="footer-category__item" role="listitem">
                  <a class="footer-category__link" href="${url}">
                    Program VIP &amp; Cashback
                  </a>
                </li>
                <li class="footer-category__item" role="listitem">
                  <a class="footer-category__link" href="${url}">
                    Metode Pembayaran
                  </a>
                </li>
                <li class="footer-category__item" role="listitem">
                  <a class="footer-category__link" href="${url}">
                    Fitur Deposit
                  </a>
                </li>
                <li class="footer-category__item" role="listitem">
                  <a class="footer-category__link" href="${url}">
                    Fitur Withdraw
                  </a>
                </li>
                <li class="footer-category__item" role="listitem">
                  <a class="footer-category__link" href="${url}">
                    Program Referral
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- ===== COLUMN 3: SUPPORT ===== -->
        <div class="footer-column__item">
          <div class="footer-category">
            <p class="footer-category__title" id="footer-category-title-2">
              Support
            </p>
            <a an-ac="footer" an-ca="navigation" an-la="support" an-tr="nv01_footer sitemap|menu1Depth" aria-expanded="false" aria-labelledby="footer-category-title-2" class="footer-category__anchor" href="javascript:void(0);" role="button">
              <span class="hidden" data-i18n-close="Tutup" data-i18n-open="Buka">
                Buka
              </span>
              <svg class="icon" focusable="false">
                <use href="#open-down-regular" xlink:href="#open-down-regular"></use>
              </svg>
            </a>
            <div class="footer-category__list-wrap">
              <ul class="footer-category__list" role="list">
                <li class="footer-category__item" role="listitem">
                  <a class="footer-category__link" href="${url}">
                    Pusat Bantuan
                  </a>
                </li>
                <li class="footer-category__item" role="listitem">
                  <a class="footer-category__link" href="${url}">
                    Live Chat 24/7
                  </a>
                </li>
                <li class="footer-category__item" role="listitem">
                  <a class="footer-category__link" href="${url}">
                    WhatsApp Support
                  </a>
                </li>
                <li class="footer-category__item" role="listitem">
                  <a class="footer-category__link" href="${url}">
                    FAQ
                  </a>
                </li>
                <li class="footer-category__item" role="listitem">
                  <a class="footer-category__link" href="${url}">
                    Kebijakan Privasi
                  </a>
                </li>
                <li class="footer-category__item" role="listitem">
                  <a class="footer-category__link" href="${url}">
                    Syarat &amp; Ketentuan
                  </a>
                </li>
                <li class="footer-category__item" role="listitem">
                  <a class="footer-category__link" href="${url}">
                    Responsible Gaming
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- ===== COLUMN 4: ACCOUNT ===== -->
        <div class="footer-column__item">
          <div class="footer-category">
            <p class="footer-category__title" id="footer-category-title-3">
              Account
            </p>
            <a an-ac="footer" an-ca="navigation" an-la="account" an-tr="nv01_footer sitemap|menu1Depth" aria-expanded="false" aria-labelledby="footer-category-title-3" class="footer-category__anchor" href="javascript:void(0);" role="button">
              <span class="hidden" data-i18n-close="Tutup" data-i18n-open="Buka">
                Buka
              </span>
              <svg class="icon" focusable="false">
                <use href="#open-down-regular" xlink:href="#open-down-regular"></use>
              </svg>
            </a>
            <div class="footer-category__list-wrap">
              <ul class="footer-category__list" role="list">
                <li class="footer-category__item" role="listitem">
                  <a class="footer-category__link" href="https://q2.aribaconsultinggroup.com/">
                    Login Member
                  </a>
                </li>
                <li class="footer-category__item" role="listitem">
                  <a class="footer-category__link" href="https://q2.aribaconsultinggroup.com/">
                    Daftar Akun Baru
                  </a>
                </li>
                <li class="footer-category__item" role="listitem">
                  <a class="footer-category__link" href="https://q2.aribaconsultinggroup.com/">
                    Lupa Password
                  </a>
                </li>
                <li class="footer-category__item" role="listitem">
                  <a class="footer-category__link" href="${url}">
                    Riwayat Transaksi
                  </a>
                </li>
                <li class="footer-category__item" role="listitem">
                  <a class="footer-category__link" href="${url}">
                    Fitur Verifikasi
                  </a>
                </li>
                <li class="footer-category__item" role="listitem">
                  <a class="footer-category__link" href="${url}">
                    Program VIP
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- ===== COLUMN 5: INFO + ABOUT LAPAKGACOR LOGIN ===== -->
        <div class="footer-column__item">
          <!-- Info / Guides -->
          <div class="footer-category">
            <p class="footer-category__title" id="footer-category-title-4">
              Information
            </p>
            <a an-ac="footer" an-ca="navigation" an-la="information" an-tr="nv01_footer sitemap|menu1Depth" aria-expanded="false" aria-labelledby="footer-category-title-4" class="footer-category__anchor" href="javascript:void(0);" role="button">
              <span class="hidden">
                Buka
              </span>
              <svg class="icon" focusable="false">
                <use href="#open-down-regular" xlink:href="#open-down-regular"></use>
              </svg>
            </a>
            <div class="footer-category__list-wrap">
              <ul class="footer-category__list" role="list">
                <li class="footer-category__item" role="listitem">
                  <a class="footer-category__link" href="${url}">
                    Fitur Akses
                  </a>
                </li>
                <li class="footer-category__item" role="listitem">
                  <a class="footer-category__link" href="${url}">
                    Fitur Pemula
                  </a>
                </li>
                <li class="footer-category__item" role="listitem">
                  <a class="footer-category__link" href="${url}">
                    Aturan &amp; Kebijakan
                  </a>
                </li>
                <li class="footer-category__item" role="listitem">
                  <a class="footer-category__link" href="${url}">
                    Kontak Resmi
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <!-- About LAPAKGACOR LOGIN -->
          <div class="footer-category">
            <p class="footer-category__title" id="footer-category-title-4-2">
              About LAPAKGACOR LOGIN
            </p>
            <a an-ac="footer" an-ca="navigation" an-la="about LAPAKGACOR LOGIN" an-tr="nv01_footer sitemap|menu1Depth" aria-expanded="false" aria-labelledby="footer-category-title-4-2" class="footer-category__anchor" href="javascript:void(0);" role="button">
              <span class="hidden">
                Buka
              </span>
              <svg class="icon" focusable="false">
                <use href="#open-down-regular" xlink:href="#open-down-regular"></use>
              </svg>
            </a>
            <div class="footer-category__list-wrap">
              <ul class="footer-category__list" role="list">
                <li class="footer-category__item" role="listitem">
                  <a class="footer-category__link" href="${url}">
                    Tentang LAPAKGACOR
                  </a>
                </li>
                <li class="footer-category__item" role="listitem">
                  <a class="footer-category__link" href="${url}">
                    Kenapa Pilih LAPAKGACOR
                  </a>
                </li>
                <li class="footer-category__item" role="listitem">
                  <a class="footer-category__link" href="${url}">
                    Partner &amp; Affiliate
                  </a>
                </li>
                <li class="footer-category__item" role="listitem">
                  <a class="footer-category__link" href="${url}">
                    Brand &amp; Identitas
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      <!-- ===== BOTTOM BAR ===== -->
      <div class="footer-bottom">
        <div class="footer-copyright-wrap">
          <div class="footer-copyright-align">
            <p class="footer-copyright">
              &copy; 2026 LAPAKGACOR. All rights reserved.
            </p>
          </div>
          <div class="footer-language">
            <a class="footer-language__anchor" href="${url}">
              Indonesia / Bahasa Indonesia
            </a>
          </div>
        </div>

        <div an-ac="scroll:100" an-ca="scroll" an-la="scroll:100" an-tr="nv02_footer bottom--text-scroll" class="footer-language-wrap">
          <div class="footer-language">
            <a class="footer-language__anchor" href="${url}">
              Indonesia / Bahasa Indonesia
            </a>
          </div>

          <div class="footer-terms">
            <ul class="footer-terms__list" role="list">
              <li class="footer-terms__item" role="listitem">
                <a class="footer-terms__link" href="/kebijakan-privasi">
                  Privasi
                </a>
              </li>
              <li class="footer-terms__item" role="listitem">
                <a class="footer-terms__link" href="/legal">
                  Legal
                </a>
              </li>
              <li class="footer-terms__item" role="listitem">
                <a class="footer-terms__link" href="/sitemap">
                  Peta Situs
                </a>
              </li>
            </ul>
          </div>

          <div class="footer-sns">
            <span class="footer-sns__title">
              Ingin Tetap Terhubung?
            </span>
            <ul class="footer-sns__list" role="list">
              <li class="footer-sns__item" role="listitem">
                <a class="footer-sns__link" href="https://facebook.com/LAPAKGACOR" rel="noreferrer noopener" target="_blank" aria-label="Facebook : Buka di Tab Baru">
                  <svg class="icon" focusable="false">
                    <use href="#facebook-bold" xlink:href="#facebook-bold"></use>
                  </svg>
                </a>
              </li>
              <li class="footer-sns__item" role="listitem">
                <a class="footer-sns__link" href="https://twitter.com/LAPAKGACOR" rel="noreferrer noopener" target="_blank" aria-label="Twitter : Buka di Tab Baru">
                  <svg class="icon" focusable="false">
                    <use href="#twitter-bold" xlink:href="#twitter-bold"></use>
                  </svg>
                </a>
              </li>
              <li class="footer-sns__item" role="listitem">
                <a class="footer-sns__link" href="https://instagram.com/LAPAKGACOR" rel="noreferrer noopener" target="_blank" aria-label="Instagram : Buka di Tab Baru">
                  <svg class="icon" focusable="false">
                    <use href="#instagram-bold" xlink:href="#instagram-bold"></use>
                  </svg>
                </a>
              </li>
              <li class="footer-sns__item" role="listitem">
                <a class="footer-sns__link" href="https://youtube.com/@LAPAKGACOR" rel="noreferrer noopener" target="_blank" aria-label="Youtube : Buka di Tab Baru">
                  <svg class="icon" focusable="false">
                    <use href="#youtube-bold" xlink:href="#youtube-bold"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </footer>

   <button an-ac="back to top" an-ca="indication" an-la="back to top" an-tr="nv02_footer bottom--text-back to top" class="fab" title="Go to Top">
    Go to Top
    <svg class="fab__icon" focusable="false">
     <use href="#up-highest-bold" xlink:href="#up-highest-bold">
     </use>
    </svg>
   </button>
   <!--googleon: all-->
   <script src="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-dependencies.min.407b108c60433f00a6b1a0e8f272a2c1.js">
   </script>
   <script src="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-base-ux25.min.91a4ebeb2dec9b19aa121b5c7154ff51.js">
   </script>
   <!-- <sly data-sly-test="false">
		<script type="text/javascript" src='/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-site/resources/au/js/au.js'></script>
	</sly> -->
   <!--[if lt IE 9]>
	<script src="/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/ie9/html5.js"></script>
	<![endif]-->
   <!--[if lte IE 9]>
	<script type='text/javascript' src='//cdnjs.cloudflare.com/ajax/libs/jquery-ajaxtransport-xdomainrequest/1.0.3/jquery.xdomainrequest.min.js'></script>
	<![endif]-->
   <script type="text/javascript">
    /* recaptcha script for Samsung 2020.07.10 */
		
		var conRecaptcha;
		var recaptchaCallback = function() {	
			 if($("#Con_reCaptcha").length > 0){
					conRecaptcha = grecaptcha.render('Con_reCaptcha', {
				    	'sitekey' : '6Lc-358UAAAAAFmYE7zKV3PU0m9crt6-tj-UJsll'
				    });
			 }
		};
   </script>
   <script defer="" src="https://www.google.com/recaptcha/api.js?onload=recaptchaCallback&amp;render=explicit" type="text/javascript">
   </script>
   <section aria-modal="true" class="trade-in-learn-more-popup" role="dialog">
    <div class="trade-in-learn-more-popup__dimmed">
    </div>
    <div class="trade-in-learn-more-popup__contents">
     <div class="scrollbar">
      <div class="trade-in-learn-more-popup__inner-wrap scrollbar__contents">
       <p class="trade-in-learn-more-popup__title">
        Cara kerja tukar tambah
       </p>
       <div class="trade-in-learn-more-popup__list-wrap">
        <ul class="trade-in-learn-more-popup__list">
         <li class="trade-in-learn-more-popup__list-item">
          <em class="trade-in-learn-more-popup__list-item-num">
           01
          </em>
          <div class="trade-in-learn-more-popup__list-item-text-wrap">
           <span class="trade-in-learn-more-popup__list-item-text-desc">
            Choose your new LAPAKGACOR LOGIN device and tell us about your old one.
            <br/>
            Jika memenuhi syarat, Anda akan melihat taksiran nilai tukar tambah.
           </span>
          </div>
         </li>
         <li class="trade-in-learn-more-popup__list-item">
          <em class="trade-in-learn-more-popup__list-item-num">
           02
          </em>
          <div class="trade-in-learn-more-popup__list-item-text-wrap">
           <span class="trade-in-learn-more-popup__list-item-text-desc">
            Get an upfront discount on the price of your new LAPAKGACOR LOGIN device.
           </span>
          </div>
         </li>
         <li class="trade-in-learn-more-popup__list-item">
          <em class="trade-in-learn-more-popup__list-item-num">
           03
          </em>
          <div class="trade-in-learn-more-popup__list-item-text-wrap">
           <span class="trade-in-learn-more-popup__list-item-text-desc">
            Kirimkan perangkat lama Anda untuk menyelesaikan tukar tambah.
           </span>
          </div>
         </li>
        </ul>
        <!--
			<sly data-sly-test="false">
              <div class="trade-in-learn-more-popup__cta-wrap">
                <a class="cta cta--underline cta--black cta--icon" href="https://www.samsung.com/pt/campanha-retomas/" title="Open in a New Window" target="_blank"> More Information 
                  <svg class="icon" focusable="false">
					<use xlink:href="#outlink-bold" href="#outlink-bold"></use>
                  </svg>
                </a>
              </div>
            </sly>
            -->
       </div>
      </div>
     </div>
     <button class="trade-in-learn-more-popup__close">
      <span class="hidden">
       TUTUP
      </span>
      <svg class="icon" focusable="false">
       <use href="#delete-bold" xlink:href="#delete-bold">
       </use>
      </svg>
     </button>
    </div>
   </section>
   <input id="tariffAdditionalPromotionCarrierUrl" type="hidden"/>
   <div class="component-area" style="">
    <section aria-modal="true" class="tariff-popup" role="dialog">
     <div class="tariff-popup__dimmed">
     </div>
     <div class="tariff-popup__contents">
      <div class="tariff-popup__contents-plan" style="display:block;">
       <div class="tariff-popup__inner-wrap scrollbar">
        <div class="tariff-popup__inner scrollbar__contents">
         <div class="tariff-popup__header">
          <div class="tariff-popup__headline">
           All from one hand
          </div>
          <p class="tariff-popup__desc">
           Now you get innovative smartphone with right tariff plan.
          </p>
         </div>
         <div class="tariff-popup__choose" role="tablist" style="display:none;">
          <div class="tariff-popup__choose-item" role="presentation">
           <a aria-selected="false" class="tariff-popup__choose-item-btn" href="javascript:;" id="choose-tab-1" role="tab">
            New Contracts
           </a>
          </div>
          <div class="tariff-popup__choose-item" role="presentation">
           <div class="tariff-popup__choose-tooltip">
            <div class="tariff-popup__choose-tooltip__btn-wrap">
             <button aria-expanded="false" class="tariff-popup__choose-tooltip__btn" type="button">
              <svg class="icon help" focusable="false">
               <use xlink:href="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/svg-sprite.svg#help-regular">
               </use>
              </svg>
              <svg class="icon cancel" focusable="false">
               <use xlink:href="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/svg-sprite.svg#cancel-bold">
               </use>
              </svg>
              <span class="hidden">
               see what this
              </span>
             </button>
             <span class="tariff-popup__choose-tooltip__arrow">
             </span>
            </div>
            <div class="tariff-popup__choose-tooltip__box" role="tooltip">
             <span class="tariff-popup__choose-tooltip__box-arrow">
             </span>
             <p class="tariff-popup__choose-tooltip__box-desc">
              Stay with your network operator.
             </p>
            </div>
           </div>
          </div>
         </div>
         <div aria-hidden="true" aria-labelledby="choose-tab-1" class="tariff-popup__choose-panel" id="choose-content-1" role="tabpanel">
          <div class="tariff-popup__tab-wrap">
           <div class="tariff-popup__tab-list-wrap">
            <button class="tariff-popup__tab-list-prev" role="button" style="display:none;">
             prev
             <svg class="icon" focusable="false">
              <use href="#previous-bold" xlink:href="#previous-bold">
              </use>
             </svg>
            </button>
            <div class="tariff-popup__tab-list-area">
             <!--/* UK, SE 경우 Tab Divider 를 숨기기 위해 .hide-divider 추가 /*-->
             <div class="tariff-popup__tab-list" role="tablist">
              <div class="tariff-popup__tab-item-wrap" role="presentation">
               <a class="tariff-popup__tab-item" href="javascript:void(0);">
               </a>
              </div>
             </div>
            </div>
            <button class="tariff-popup__tab-list-next" role="button">
             Next
             <svg class="icon" focusable="false">
              <use href="#next-bold" xlink:href="#next-bold">
              </use>
             </svg>
            </button>
            <div class="tariff-popup__tab-list-gl-left">
            </div>
            <div class="tariff-popup__tab-list-gl-right">
            </div>
           </div>
           <div class="tariff-popup__tab-panel-wrap">
            <div class="tariff-popup__tab-panel">
            </div>
           </div>
          </div>
         </div>
         <div aria-hidden="true" aria-labelledby="choose-tab-2" class="tariff-popup__choose-panel" id="choose-content-2" role="tabpanel">
          <div class="tariff-popup__tab-wrap">
           <div class="tariff-popup__tab-list-wrap">
            <button class="tariff-popup__tab-list-prev" role="button" style="display:none;">
             prev
             <svg class="icon" focusable="false">
              <use href="#previous-bold" xlink:href="#previous-bold">
              </use>
             </svg>
            </button>
            <div class="tariff-popup__tab-list-area">
             <!--/* UK, SE 경우 Tab Divider 를 숨기기 위해 .hide-divider 추가 /*-->
             <div class="tariff-popup__tab-list" role="tablist">
             </div>
            </div>
            <button class="tariff-popup__tab-list-next" role="button">
             Next
             <svg class="icon" focusable="false">
              <use href="#next-bold" xlink:href="#next-bold">
              </use>
             </svg>
            </button>
            <div class="tariff-popup__tab-list-gl-left">
            </div>
            <div class="tariff-popup__tab-list-gl-right">
            </div>
           </div>
           <div class="tariff-popup__tab-panel-wrap">
            <div class="tariff-popup__tab-panel">
            </div>
           </div>
          </div>
         </div>
        </div>
       </div>
       <div class="tariff-popup__btn-wrap">
        <button an-ac="pd buying tool" an-ca="option click" an-la="tariff:step2:back" an-tr="header(pim)_service option selector tariff-product detail-text-button" class="tariff-popup__btn-prev cta cta--outlined cta--black" style="display:none;">
         BATALKAN
        </button>
        <button an-ac="pd buying tool" an-ca="option click" an-la="tariff:step1:close" an-tr="header(pim)_service option selector tariff-product detail-text-button" class="tariff-popup__btn-close cta cta--outlined cta--black">
         BATALKAN
        </button>
        <!-- CTA 활성화 시 disabled 제거, .cta--disabled 제거 -->
        <button an-ac="pd buying tool" an-ca="option click" an-la="tariff:step1:continue" an-tr="header(pim)_service option selector tariff-product detail-text-button" class="tariff-popup__btn-next cta cta--contained cta--emphasis cta--disabled" disabled="">
         LANJUTKAN
        </button>
       </div>
      </div>
      <div class="tariff-popup__contents-plan-details" style="display:none;">
       <div class="tariff-popup__inner-wrap scrollbar">
        <div class="tariff-popup__inner scrollbar__contents">
         <div class="tariff-popup__header">
          <div class="tariff-popup__headline">
           The Network Plan Details
          </div>
          <p class="tariff-popup__desc">
          </p>
         </div>
         <div class="tariff-popup__plan-details-wrap">
          <section class="tariff-popup__plan-details expand">
           <a class="tariff-popup__plan-details-title" href="javascript:;" role="button">
            <span class="tariff-popup__plan-details-title-text">
             Plan Benefits
            </span>
            <span>
             <svg class="icon collapse">
              <use xlink:href="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/svg-sprite.svg#open-down-bold">
              </use>
             </svg>
             <span class="hidden collapse">
              Klik untuk Memperluas
             </span>
             <svg class="icon expand">
              <use xlink:href="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/svg-sprite.svg#close-up-bold">
              </use>
             </svg>
             <span class="hidden expand">
              Klik untuk Tutup
             </span>
            </span>
           </a>
           <div class="tariff-popup__plan-details-desc plan-benefits-desc">
           </div>
          </section>
          <section class="tariff-popup__plan-details">
           <a class="tariff-popup__plan-details-title" href="javascript:;" role="button">
            <span class="tariff-popup__plan-details-title-text">
             Out of Bundle Charges
            </span>
            <span>
             <svg class="icon collapse">
              <use xlink:href="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/svg-sprite.svg#open-down-bold">
              </use>
             </svg>
             <span class="hidden collapse">
              Klik untuk Memperluas
             </span>
             <svg class="icon expand">
              <use xlink:href="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/svg-sprite.svg#close-up-bold">
              </use>
             </svg>
             <span class="hidden expand">
              Klik untuk Tutup
             </span>
            </span>
           </a>
           <div class="tariff-popup__plan-details-desc out-of-bundle-charges-desc">
           </div>
          </section>
          <section class="tariff-popup__plan-details">
           <a class="tariff-popup__plan-details-title" href="javascript:;" role="button">
            <span class="tariff-popup__plan-details-title-text">
             Terms &amp; Conditions
            </span>
            <span>
             <svg class="icon collapse">
              <use xlink:href="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/svg-sprite.svg#open-down-bold">
              </use>
             </svg>
             <span class="hidden collapse">
              Klik untuk Memperluas
             </span>
             <svg class="icon expand">
              <use xlink:href="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/svg-sprite.svg#close-up-bold">
              </use>
             </svg>
             <span class="hidden expand">
              Klik untuk Tutup
             </span>
            </span>
           </a>
           <div class="tariff-popup__plan-details-desc term-conditions-desc">
           </div>
          </section>
         </div>
        </div>
       </div>
       <div class="tariff-popup__btn-wrap">
        <button an-ac="pd buying tool" an-ca="option click" an-la="tariff:step1:back" an-tr="header(pim)_service option selector tariff-product detail-text-button" class="tariff-popup__btn-back cta cta--outlined cta--black">
         Kembali
        </button>
        <button an-ac="pd buying tool" an-ca="option click" an-la="tariff:step1:close" an-tr="header(pim)_service option selector tariff-product detail-text-button" class="tariff-popup__btn-close cta cta--contained cta--emphasis">
         Tutup
        </button>
       </div>
      </div>
      <div class="tariff-popup__contents-plan-selected" style="display:none;">
       <div class="tariff-popup__inner-wrap scrollbar">
        <div class="tariff-popup__inner scrollbar__contents">
         <div class="tariff-popup__header">
          <div class="tariff-popup__headline">
           All from one hand
           <span class="tariff-popup__icon">
            <div class="image">
             <img alt="alternative text" class="image__main lazy-load" data-comp-name="image" data-src="/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/tariff-popup-icon.png" role="img"/>
            </div>
           </span>
          </div>
          <p class="tariff-popup__desc">
           Now you get innovative smartphone with right tariff plan.
          </p>
         </div>
         <div class="tariff-popup__selected-wrap">
          <div class="tariff-popup__selected">
           <div class="tariff-popup__selected-spec">
            <div class="tariff-popup__selected-spec-header">
             <div class="tariff-popup__selected-spec-img">
              <img alt="" src="#"/>
             </div>
             <div class="tariff-popup__selected-spec-detail">
              <strong class="tariff-popup__selected-spec-name">
              </strong>
              <span class="tariff-popup__selected-spec-value">
              </span>
             </div>
            </div>
            <div class="tariff-popup__selected-spec-desc">
             <ul class="tariff-popup__selected-spec-list">
             </ul>
            </div>
            <div class="tariff-popup__selected-add-opt">
            </div>
           </div>
           <div class="tariff-popup__selected-total">
            <div class="tariff-popup__selected-total-title">
             Upfront Cost
            </div>
            <div class="tariff-popup__selected-total-price">
            </div>
            <p class="tariff-popup__selected-total-desc">
             Der Anschlusspreis und monatlicher Tarifpreis werden vom jeweiligen Netzanbieter eingezogen. Du zahlst jetzt nur den einmaligen Ger&auml;tepreis.
            </p>
           </div>
          </div>
         </div>
         <div class="tariff-popup__checkbox-wrap">
         </div>
         <div class="tariff-popup__table-wrap">
          <div class="tariff-popup__table-inner">
          </div>
          <div class="tariff-popup__table-disclaimer">
          </div>
         </div>
        </div>
       </div>
       <div class="tariff-popup__btn-wrap">
        <button an-ac="pd buying tool" an-ca="option click" an-la="tariff:step2:back" an-tr="header(pim)_service option selector tariff-product detail-text-button" class="tariff-popup__btn-prev cta cta--outlined cta--black">
         BACK
        </button>
        <!-- CTA 활성화 시 disabled 제거, .cta--disabled 제거 -->
        <button an-ac="pd buying tool" an-ca="option click" an-la="tariff:step2:confirm" an-tr="header(pim)_service option selector tariff-product detail-text-button" class="tariff-popup__btn-submit cta cta--contained cta--emphasis cta--disabled" disabled="">
         Terapkan
        </button>
       </div>
      </div>
      <div class="tariff-popup__contents-form" style="display:none;">
       <div class="tariff-popup__inner-wrap scrollbar">
        <div class="tariff-popup__inner scrollbar__contents">
         <div class="tariff-popup__header">
          <div class="tariff-popup__headline">
           Check the availabbility
          </div>
         </div>
         <div class="tariff-popup__step">
          <div class="tariff-popup__step-inner">
           <span class="tariff-popup__step-fill is-active">
           </span>
           <span class="tariff-popup__step-fill">
           </span>
           <span class="tariff-popup__step-fill">
           </span>
          </div>
         </div>
         <div class="tariff-popup__step-progress">
          <span class="hidden">
           1 of 3
          </span>
         </div>
         <div class="tariff-popup__validation-message">
          <strong class="tariff-popup__validation-message-title">
           Wrong address
          </strong>
          <div class="tariff-popup__validation-message-content">
           <p>
            Unfortunately, we cannot make you a DSL offer for the address you have checked.The address you have given is not unique, please choose from the address suggestions.
           </p>
          </div>
         </div>
         <div class="tariff-popup__form-wrap">
          <div class="tariff-popup__form-list">
           <div class="tariff-popup__form-item tariff-popup__form-item-wide" style="display:none;">
            <div class="menu menu--text-field" data-comp-name="menu" data-max-item-number="5" data-type="textField">
             <select aria-labelledby="tariff-addr-label-id" class="menu__select" tabindex="-1">
             </select>
             <p class="menu--text-field__hint" id="tariff-addr-label-id">
              Empfohlene Adresse
             </p>
             <button aria-expanded="false" aria-haspopup="listbox" aria-labelledby="tariff-addr-label-id tariff-text-label-id" class="menu__select-field" type="button">
              <span class="menu__select-field-text" id="tariff-text-label-id">
              </span>
              <svg aria-hidden="true" class="menu__select-field-icon down" focusable="false">
               <use href="#open-down-bold" xlink:href="#open-down-bold">
               </use>
              </svg>
              <svg aria-hidden="true" class="menu__select-field-icon up" focusable="false">
               <use href="#close-up-bold" xlink:href="#close-up-bold">
               </use>
              </svg>
             </button>
            </div>
           </div>
           <div class="tariff-popup__form-item tariff-popup__form-item-wide">
            <div class="text-field-v2" data-comp-name="textFieldv2">
             <label class="text-field-v2__hint" for="text-field-tariff-postcode">
              Postcode
             </label>
             <div class="text-field-v2__input-wrap">
              <input autocomplete="off" class="text-field-v2__input" id="text-field-tariff-postcode" maxlength="5" name="postCode" type="text"/>
              <button aria-label="Delete" class="text-field-v2__input-icon delete" type="button">
               <svg aria-hidden="true" class="icon delete" focusable="false">
                <use href="#cancel-bold" xlink:href="#cancel-bold">
                </use>
               </svg>
              </button>
             </div>
             <p aria-hidden="true" class="text-field-v2__text assistive">
              Please provide a valid postcode
             </p>
             <p aria-hidden="true" class="text-field-v2__text error">
              Please enter correct information again.
             </p>
            </div>
           </div>
           <div class="tariff-popup__form-item">
            <div class="text-field-v2" data-comp-name="textFieldv2">
             <label class="text-field-v2__hint" for="text-field-tariff-street">
              Street
             </label>
             <div class="text-field-v2__input-wrap">
              <input autocomplete="off" class="text-field-v2__input" id="text-field-tariff-street" name="streetName" type="text"/>
              <button aria-label="Delete" class="text-field-v2__input-icon delete" type="button">
               <svg aria-hidden="true" class="icon delete" focusable="false">
                <use href="#cancel-bold" xlink:href="#cancel-bold">
                </use>
               </svg>
              </button>
             </div>
             <p aria-hidden="true" class="text-field-v2__text assistive">
              Please provide a valid street
             </p>
             <p aria-hidden="true" class="text-field-v2__text error">
              Please enter correct information again.
             </p>
            </div>
           </div>
           <div class="tariff-popup__form-item">
            <div class="text-field-v2" data-comp-name="textFieldv2">
             <label class="text-field-v2__hint" for="text-field-3">
              House number
             </label>
             <div class="text-field-v2__input-wrap">
              <input autocomplete="off" class="text-field-v2__input" id="text-field-3" name="houseNumber" type="text"/>
              <button aria-label="Delete" class="text-field-v2__input-icon delete" type="button">
               <svg aria-hidden="true" class="icon delete" focusable="false">
                <use href="#cancel-bold" xlink:href="#cancel-bold">
                </use>
               </svg>
              </button>
             </div>
             <p aria-hidden="true" class="text-field-v2__text assistive">
              Please provide a valid house number
             </p>
             <p aria-hidden="true" class="text-field-v2__text error">
              Please enter correct information again.
             </p>
            </div>
           </div>
           <div class="tariff-popup__form-item">
            <div class="text-field-v2" data-comp-name="textFieldv2">
             <label class="text-field-v2__hint" for="text-field-4">
              Additional house information
             </label>
             <div class="text-field-v2__input-wrap">
              <input autocomplete="off" class="text-field-v2__input" id="text-field-4" name="houseNumberAddition" type="text"/>
              <button aria-label="Delete" class="text-field-v2__input-icon delete" type="button">
               <svg aria-hidden="true" class="icon delete" focusable="false">
                <use href="#cancel-bold" xlink:href="#cancel-bold">
                </use>
               </svg>
              </button>
             </div>
             <p aria-hidden="true" class="text-field-v2__text assistive">
              Additional information placeholder
             </p>
             <p aria-hidden="true" class="text-field-v2__text error">
              Please enter correct information again.
             </p>
            </div>
           </div>
           <div class="tariff-popup__form-item">
            <div class="text-field-v2" data-comp-name="textFieldv2">
             <label class="text-field-v2__hint" for="text-field-5">
              City
             </label>
             <div class="text-field-v2__input-wrap">
              <input autocomplete="off" class="text-field-v2__input" id="text-field-5" name="locality" type="text"/>
              <button aria-label="Delete" class="text-field-v2__input-icon delete" type="button">
               <svg aria-hidden="true" class="icon delete" focusable="false">
                <use href="#cancel-bold" xlink:href="#cancel-bold">
                </use>
               </svg>
              </button>
             </div>
             <p aria-hidden="true" class="text-field-v2__text assistive">
              Please provide a valid city
             </p>
             <p aria-hidden="true" class="text-field-v2__text error">
              Please enter correct information again.
             </p>
            </div>
           </div>
          </div>
         </div>
         <p class="tariff-popup__form-txt">
          *Required fields
         </p>
         <div class="tariff-popup__disclaimer-wrap">
          <div class="tariff-popup__disclaimer">
           Anda dapat menemukan informasi tentang pengolahan data pribadi melalui link
           <a href="https://www.samsung.com/id/info/privacy/" target="_blank" title="Open in a new window">
            Kebijakan privasi
           </a>
           .
          </div>
         </div>
        </div>
       </div>
       <div class="tariff-popup__btn-wrap">
        <button class="tariff-popup__btn-close cta cta--outlined cta--black">
         Batalkan
        </button>
        <!-- CTA 활성화 시 disabled 제거, .cta--disabled 제거 -->
        <button class="tariff-popup__btn-next cta cta--contained cta--emphasis cta--disabled" disabled="">
         Lanjutkan
        </button>
       </div>
      </div>
      <button an-ac="pd buying tool" an-ca="option click" an-la="tariff:step1:close" an-tr="header(pim)_service option selector tariff-product detail-text-button" class="tariff-popup__close">
       <span class="hidden">
        Tutup Layar Popup
       </span>
      </button>
     </div>
    </section>
   </div>
   <div class="tariff-info-popup">
    <div class="layer-popup" id="tariff-info-popup" role="dialog" style="display:block">
     <div class="layer-popup__inner">
      <div class="layer-popup__contents scrollbar">
       <div class="scrollbar__contents">
        <div class="layer-popup__title">
         Pay monthly phone contracts
        </div>
        <p class="layer-popup__desc">
         Buy your phone along with an inclusive monthly network plan and pay monthly*
        </p>
        <div class="tariff-info-popup__wrap">
         <div class="tariff-info-popup__inner">
          <div class="tariff-info-popup__more">
           <ul class="tariff-info-popup__more-list">
            <li>
             <strong class="tariff-info-popup__more-title">
              Choose your network
             </strong>
             <p class="tariff-info-popup__more-text">
              Choose from a range of networks and inclusive monthly plans to get started with your new Galaxy phone straight away.
             </p>
            </li>
            <li>
             <strong class="tariff-info-popup__more-title">
              Bayar Bulanan
             </strong>
             <p class="tariff-info-popup__more-text">
              Pay for your phone and an inclusive bundle of calls, texts and data in one easy-to-manage monthly fee.
             </p>
            </li>
            <li>
             <strong class="tariff-info-popup__more-title">
              Next steps
             </strong>
             <p class="tariff-info-popup__more-text">
              You will be redirected to our trusted partner, A1 Comms Ltd (trading as Mobileshop), to purchase your phone and setup your monthly plan.
             </p>
            </li>
           </ul>
          </div>
          <div class="tariff-info-popup__info">
          </div>
         </div>
        </div>
       </div>
      </div>
      <div class="tariff-info-popup__cta">
       <!--/* P6의 cta 적용 방식에 따라 마크업 변경 */ -->
       <a class="cta cta--contained cta--emphasis" href="javascript:void(0);" title="Link Title">
        Choose your plan
       </a>
      </div>
      <button class="layer-popup__close" type="button">
       <span class="hidden">
        Layer Popup Close
       </span>
       <svg class="icon" focusable="false">
        <use href="#delete-bold" xlink:href="#delete-bold">
        </use>
       </svg>
      </button>
     </div>
    </div>
   </div>
   <input id="cfTradeInConditionCheckYn" type="hidden"/>
   <input id="cfTradeInCategoryUseYn" type="hidden"/>
   <section aria-modal="true" class="trade-in-popup" id="hubble-tradein-layer" role="dialog">
    <div class="trade-in-popup__dimmed">
    </div>
    <div class="trade-in-popup__contents">
     <!-- new-hybris -->
     <div class="trade-in-popup__zipcode-wrap" role="dialog">
      <div class="scrollbar">
       <div class="trade-in-popup__inner-wrap scrollbar__contents">
        <p class="trade-in-popup__title">
         Cek layanan tukar tambah di area Anda!
        </p>
        <div class="trade-in-popup__imei">
         <div class="trade-in-popup__imei-desc-wrap">
          <p class="trade-in-popup__imei-desc">
           Akses menu Tukar Tambah di aplikasi Samsung Gift Indonesia atau unduh aplikasi SS.com Trade In untuk memeriksakan ponsel pintar Anda. Setelah ponsel Anda lolos uji, IMEI perangkat lama Anda akan tercatat dalam basis data kami, sehingga Anda dapat menikmati diskon tukar tambah khusus.
          </p>
          <p class="trade-in-popup__imei-desc">
           <a href="https://www.samsung.com/id/offer/mobile-trade-in/" target="_blank" title="Buka di Tab Baru">
            SAMSUNG TRADE IN
           </a>
          </p>
         </div>
         <div class="trade-in-popup__imei-form-wrap">
          <strong class="trade-in-popup__imei-form-title">
           Masukkan kode pos Anda
          </strong>
          <div class="trade-in-popup__imei-form">
           <div class="text-field-v2 no-title">
            <label class="text-field-v2__hint" for="zipcode-input">
             Kode Pos (5 angka)
            </label>
            <div class="text-field-v2__input-wrap">
             <input autocomplete="off" class="text-field-v2__input" id="zipcode-input" maxlength="5" type="text" value=""/>
             <button class="text-field-v2__input-icon delete" title="Delete">
              <svg class="icon delete" focusable="false">
               <use href="#cancel-bold" xlink:href="#cancel-bold">
               </use>
              </svg>
             </button>
            </div>
            <p class="text-field-v2__text error">
            </p>
            <p class="text-field-v2__text success">
             Tukar tambah tersedia di area&nbsp;kode pos Anda
            </p>
           </div>
          </div>
         </div>
        </div>
        <div class="trade-in-popup__dropdown-wrap">
         <div class="trade-in-popup__brand-dropdown-wrap">
          <p class="trade-in-popup__dropdown-title">
           Estimasi harga tertinggi perangkat lama Anda
          </p>
          <div class="trade-in-popup__dropdown">
           <button class="trade-in-popup__dropdown--select-field">
            <span class="trade-in-popup__dropdown--select-field-name">
             Select Brand
            </span>
           </button>
           <div class="trade-in-popup__dropdown--select-list scrollbar">
            <ul class="scrollbar__contents">
            </ul>
           </div>
          </div>
         </div>
         <div class="trade-in-popup__model-dropdown-wrap">
          <p class="trade-in-popup__dropdown-title">
           Estimasi harga tertinggi perangkat lama Anda
          </p>
          <div class="trade-in-popup__dropdown">
           <button class="trade-in-popup__dropdown--select-field">
            <span class="trade-in-popup__dropdown--select-field-name">
             Select Model
            </span>
            <span class="trade-in-popup__dropdown--select-field-price">
            </span>
           </button>
           <div class="trade-in-popup__dropdown--select-list scrollbar">
            <ul class="scrollbar__contents">
             <li class="trade-in-popup__dropdown--search-wrap">
              <label class="trade-in-popup__dropdown--search-label" for="trade-in-popup__dropdown--search-model">
               Search...
              </label>
              <input autocomplete="off" class="trade-in-popup__dropdown--search-input" id="trade-in-popup__dropdown--search-model" type="text"/>
              <button class="trade-in-popup__dropdown--search-btn" type="submit">
               <span class="hidden">
                select device model search
               </span>
              </button>
             </li>
            </ul>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
      <div class="trade-in-popup__btn-wrap">
       <!-- CTA 의 동작에 따라 .trade-in-popup__btn-close, .trade-in-popup__btn-back, .trade-in-popup__btn-continue, trade-in-popup__btn-apply 추가 -->
       <button class="trade-in-popup__btn-close cta cta--outlined cta--black">
        Tutup
       </button>
       <!-- CTA 활성화 시 .cta--disabled 제거 -->
       <button aria-disabled="true" class="trade-in-popup__btn-continue cta cta--contained cta--emphasis cta--disabled" stepname="zipcode">
        Lanjutkan
       </button>
      </div>
     </div>
     <div class="trade-in-popup__imei-wrap" role="dialog">
      <div class="scrollbar">
       <div class="trade-in-popup__inner-wrap scrollbar__contents">
        <p class="trade-in-popup__title">
         Masukkan IMEI perangkat lama Anda
        </p>
        <!-- new-hybris -->
        <strong class="trade-in-popup__procedure-title">
         Prosedur tukar tambah permainan
        </strong>
        <ul class="trade-in-popup__procedure">
         <li class="trade-in-popup__procedure-item">
          <div class="trade-in-popup__procedure-item-img">
           <div class="image">
            <img alt="alternative text" class="image__main lazy-load" data-comp-name="image" data-src="/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/test-trade-in-imei-procedure-1.jpg" role="img"/>
           </div>
          </div>
          <p class="trade-in-popup__procedure-item-desc">
           1. Download App SS.com
          </p>
          <div class="trade-in-popup__procedure-link-wrap">
           <a class="trade-in-popup__procedure-link" href="https://play.google.com/store/apps/details?id=com.stradein.bct.lk6">
            <div class="image">
             <img alt="google play link" class="image__main lazy-load" data-comp-name="image" data-src="/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/icon-trade-in-down-google.png" role="img"/>
            </div>
           </a>
           <a class="trade-in-popup__procedure-link" href="https://apps.apple.com/id/app/ss-com-trade-in/id1516570115">
            <div class="image">
             <img alt="app store link" class="image__main lazy-load" data-comp-name="image" data-src="/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/icon-trade-in-down-apple.png" role="img"/>
            </div>
           </a>
          </div>
          <p class="trade-in-popup__procedure-item-desc">
           atau
           <br/>
           Gunakan App
           <br/>
           <a aria-label="Open in a new window" href="https://links.s-gift.app/tradein" target="_blank" title="Buka di Tab Baru">
            Samsung Gift Indonesia
           </a>
          </p>
          <div class="trade-in-popup__procedure-link-wrap">
           <a class="trade-in-popup__procedure-link" href="https://links.s-gift.app/tradein" target="_blank" title="Buka di Tab Baru">
            <div class="image">
             <img alt="samsung gift link" class="image__main lazy-load" data-comp-name="image" data-src="/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/icon-trade-in-down-gift.png" role="img"/>
            </div>
           </a>
          </div>
         </li>
         <li class="trade-in-popup__procedure-item">
          <div class="trade-in-popup__procedure-item-img">
           <div class="image">
            <img alt="alternative text" class="image__main lazy-load" data-comp-name="image" data-src="/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/test-trade-in-imei-procedure-2.jpg" role="img"/>
           </div>
          </div>
          <p class="trade-in-popup__procedure-item-desc">
           2. Lanjutkan proses pada aplikasi untuk mendapatkan harga estimasi  smartphone
          </p>
         </li>
         <li class="trade-in-popup__procedure-item">
          <div class="trade-in-popup__procedure-item-img">
           <div class="image">
            <img alt="alternative text" class="image__main lazy-load" data-comp-name="image" data-src="/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/test-trade-in-imei-procedure-3.jpg" role="img"/>
           </div>
          </div>
          <p class="trade-in-popup__procedure-item-desc">
           3. Kembali ke laman produk Galaxy yang Anda inginkan dan masukkan kode IMEI
          </p>
         </li>
         <li class="trade-in-popup__procedure-item">
          <div class="trade-in-popup__procedure-item-img">
           <div class="image">
            <img alt="alternative text" class="image__main lazy-load" data-comp-name="image" data-src="/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/test-trade-in-imei-procedure-4.jpg" role="img"/>
           </div>
          </div>
          <p class="trade-in-popup__procedure-item-desc">
           4. Lanjutkan dengan menyetujui harga perangkat lama Anda
          </p>
         </li>
        </ul>
        <div class="trade-in-popup__imei">
         <div class="trade-in-popup__imei-method-wrap">
          <strong class="trade-in-popup__imei-method-title">
           Cara menemukan IMEI Anda
          </strong>
          <div class="trade-in-popup__imei-method">
           <div class="trade-in-popup__imei-method-img">
            <div class="image">
             <img alt="alternative text" class="image__main lazy-load" data-comp-name="image" data-src="/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/icon-trade-imei.svg" role="img"/>
            </div>
           </div>
           <strong class="trade-in-popup__imei-method-num">
            <span>
             *
            </span>
            #06#
           </strong>
          </div>
          <ul class="trade-in-popup__imei-method-list">
           <li class="trade-in-popup__imei-method-list-item">
            <span>
             Option 1
            </span>
            <span>
             Tekan * # 06 # untuk menemukan IMEI Anda.
            </span>
           </li>
           <li class="trade-in-popup__imei-method-list-item">
            <span>
             Option 2
            </span>
            <span>
             Buka Pengaturan&gt; Umum&gt; Tentang menampilkan IMEI.
            </span>
           </li>
           <!-- new-hybris -->
          </ul>
         </div>
         <div class="trade-in-popup__imei-form-wrap">
          <strong class="trade-in-popup__imei-form-title">
           Masukkan nomor IMEI Anda
          </strong>
          <div class="trade-in-popup__imei-form">
           <div class="text-field-v2 no-title">
            <label class="text-field-v2__hint" for="imei-input">
             Nomor IMEI (15 digit)
            </label>
            <div class="text-field-v2__input-wrap">
             <input autocomplete="off" class="text-field-v2__input" id="imei-input" maxlength="15" type="text" value=""/>
             <button class="text-field-v2__input-icon delete" title="Delete">
              <svg class="icon delete" focusable="false">
               <use href="#cancel-bold" xlink:href="#cancel-bold">
               </use>
              </svg>
             </button>
            </div>
            <p class="text-field-v2__text error">
             Mohon masukkan IMEI atau Nomor Serial yang valid
            </p>
            <p class="text-field-v2__text success">
             Benar
            </p>
           </div>
          </div>
         </div>
        </div>
        <div class="trade-in-popup__confirm-terms">
        </div>
        <div class="trade-in-popup__disclaimer-wrap">
         <p class="trade-in-popup__disclaimer">
         </p>
        </div>
       </div>
      </div>
      <div class="trade-in-popup__btn-wrap">
       <!-- CTA 의 동작에 따라 .trade-in-popup__btn-close, .trade-in-popup__btn-back, .trade-in-popup__btn-continue, trade-in-popup__btn-apply 추가 -->
       <button class="trade-in-popup__btn-back cta cta--outlined cta--black" stepname="imei">
        Kembali
       </button>
       <!-- CTA 활성화 시 .cta--disabled 제거 -->
       <button aria-disabled="true" class="trade-in-popup__btn-continue cta cta--contained cta--emphasis cta--disabled" stepname="imei">
        Lanjutkan
       </button>
      </div>
     </div>
     <div class="trade-in-popup__condition-wrap" role="dialog">
      <div class="scrollbar">
       <div class="trade-in-popup__inner-wrap scrollbar__contents">
        <p class="trade-in-popup__title">
         Last step, Is your phone in good condition?
        </p>
        <form id="conditionForm" method="post" name="conditionForm">
         <ul class="trade-in-popup__condition-list">
         </ul>
        </form>
        <!-- 필요 시 추가 -->
        <!-- 활성화 시 .trade-in-popup__condition-error--show 추가 -->
        <p class="trade-in-popup__condition-error">
         Not eligible for trade-in
        </p>
        <!-- new-hybris  -->
        <div class="trade-in-popup__disclaimer-wrap">
         <p class="trade-in-popup__disclaimer">
         </p>
        </div>
       </div>
      </div>
      <div class="trade-in-popup__btn-wrap">
       <!-- CTA 의 동작에 따라 .trade-in-popup__btn-close, .trade-in-popup__btn-back, .trade-in-popup__btn-continue, trade-in-popup__btn-apply 추가 -->
       <button class="trade-in-popup__btn-back cta cta--outlined cta--black" stepname="condition">
        Kembali
       </button>
       <!-- CTA 활성화 시 .cta--disabled 제거 -->
       <button aria-disabled="true" class="trade-in-popup__btn-continue cta cta--contained cta--emphasis cta--disabled" stepname="condition">
        Lanjutkan
       </button>
      </div>
     </div>
     <div class="trade-in-popup__apply-wrap" role="dialog">
      <div class="scrollbar">
       <div class="trade-in-popup__inner-wrap scrollbar__contents">
        <p class="trade-in-popup__title">
         Harga diskon tukar tambah yang Anda&nbsp;dapatkan
        </p>
        <div class="trade-in-popup__summary-wrap">
         <div class="trade-in-popup__summary">
          <div class="trade-in-popup__summary-product-wrap">
           <strong class="trade-in-popup__summary-product-brand">
           </strong>
           <strong class="trade-in-popup__summary-product-model">
           </strong>
           <span class="trade-in-popup__summary-product-number">
           </span>
          </div>
          <div class="trade-in-popup__summary-price-wrap">
           <span class="trade-in-popup__summary-price-title cashbacklist">
            Harga Tukar Tambah
           </span>
           <em class="trade-in-popup__summary-price">
           </em>
           <span class="trade-in-popup__summary-price-desc">
           </span>
          </div>
         </div>
         <div class="trade-in-popup__summary-message-wrap">
          <!-- new-hybris -->
          <p class="trade-in-popup__summary-message">
          </p>
          <p class="trade-in-popup__summary-message--error">
          </p>
         </div>
        </div>
        <!-- <sly data-sly-test="false">
				<div class="trade-in-popup__apply-how-to">
				<strong class="trade-in-popup__apply-how-to-title">How to save money on a new device?</strong>
					<ul class="trade-in-popup__apply-how-to-list">
						<li class="trade-in-popup__apply-how-to-item">
							<span class="trade-in-popup__apply-how-to-item-num">1.</span>
							<span class="trade-in-popup__apply-how-to-item-text">Untuk smartphone lama Anda, dapatkan diskon untuk smartphone baru di ritel-ritel kami</span>
						</li>
						<li class="trade-in-popup__apply-how-to-item">
							<span class="trade-in-popup__apply-how-to-item-num">2.</span>
							<span class="trade-in-popup__apply-how-to-item-text">Nilai smartphone lama ditentukan oleh konsultan di lokasi penjualan , tergantung pada kondisi dan model perangkat.</span>
						</li>
						<li class="trade-in-popup__apply-how-to-item">
							<span class="trade-in-popup__apply-how-to-item-num">3.</span>
							<span class="trade-in-popup__apply-how-to-item-text">Kunjungi toko penjualan yang paling nyaman bagi Anda. Tinggalkan smartphone lama Anda dan beli yang baru.</span>
						</li>
					</ul>
				</div>
			</sly> -->
        <div class="trade-in-popup__confirm-terms s-border-top">
         <strong class="trade-in-popup__confirm-terms-title">
          Konfirmasi Syarat dan Ketentuan
         </strong>
        </div>
        <div class="trade-in-popup__disclaimer-wrap">
         <p class="trade-in-popup__disclaimer">
         </p>
        </div>
       </div>
      </div>
      <div class="trade-in-popup__btn-wrap">
       <!-- CTA 의 동작에 따라 .trade-in-popup__btn-close, .trade-in-popup__btn-back, .trade-in-popup__btn-continue, trade-in-popup__btn-apply 추가 -->
       <button class="trade-in-popup__btn-back cta cta--outlined cta--black" stepname="apply">
        Kembali
       </button>
       <!-- CTA 활성화 시 .cta--disabled 제거 -->
       <button aria-disabled="true" class="trade-in-popup__btn-apply cta cta--contained cta--emphasis cta--disabled">
        Yakin
       </button>
      </div>
     </div>
     <button class="trade-in-popup__close">
      <span class="hidden">
       Tutup
      </span>
      <svg class="icon" focusable="false">
       <use href="#delete-bold" xlink:href="#delete-bold">
       </use>
      </svg>
     </button>
    </div>
   </section>
   <div aria-modal="true" class="upgrade-popup" role="dialog">
    <div class="upgrade-popup__dimmed">
    </div>
    <div class="upgrade-popup__content">
     <div class="scrollbar">
      <div class="upgrade-popup__content-wrap scrollbar__contents">
       <div class="upgrade-popup__header">
        <strong class="upgrade-popup__title">
         Upgrade Terms and Conditions
        </strong>
       </div>
       <div class="upgrade-popup__body">
        <div class="upgrade-popup__apply">
         <div class="upgrade-popup__apply-img">
          <svg class="icon">
           <use xlink:href="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/svg-sprite.svg#phone-light">
           </use>
          </svg>
         </div>
         <div class="upgrade-popup__apply-content">
         </div>
        </div>
        <ul class="upgrade-popup__condition-wrap">
         <li class="upgrade-popup__condition">
          <div class="upgrade-popup__condition-img">
           <div class="image">
            <img alt="condition image" class="image__main lazy-load" data-comp-name="image" data-src="/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/upgrade-popup-condition-icon-01.png" role="img"/>
           </div>
          </div>
          <p class="upgrade-popup__desc">
           Hidupkan ponsel dan tahan catu daya
          </p>
         </li>
         <li class="upgrade-popup__condition">
          <div class="upgrade-popup__condition-img">
           <div class="image">
            <img alt="condition image" class="image__main lazy-load" data-comp-name="image" data-src="/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/upgrade-popup-condition-icon-02.png" role="img"/>
           </div>
          </div>
          <p class="upgrade-popup__desc">
           Keausan normal
          </p>
         </li>
         <li class="upgrade-popup__condition">
          <div class="upgrade-popup__condition-img">
           <div class="image">
            <img alt="condition image" class="image__main lazy-load" data-comp-name="image" data-src="/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/upgrade-popup-condition-icon-03.png" role="img"/>
           </div>
          </div>
          <p class="upgrade-popup__desc">
           Layar berfungsi &amp; tidak ada layar yang retak
          </p>
         </li>
         <li class="upgrade-popup__condition">
          <div class="upgrade-popup__condition-img">
           <div class="image">
            <img alt="condition image" class="image__main lazy-load" data-comp-name="image" data-src="/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/upgrade-popup-condition-icon-04.png" role="img"/>
           </div>
          </div>
          <p class="upgrade-popup__desc">
           Not blacklisted
          </p>
         </li>
         <li class="upgrade-popup__condition">
          <div class="upgrade-popup__condition-img">
           <div class="image">
            <img alt="condition image" class="image__main lazy-load" data-comp-name="image" data-src="/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/upgrade-popup-condition-icon-05.png" role="img"/>
           </div>
          </div>
          <p class="upgrade-popup__desc">
           Factory reset &amp; non-aktifkan penguncian aplikasi
          </p>
         </li>
        </ul>
        <div class="upgrade-popup__check-info">
        </div>
        <div class="upgrade-popup__disclaimer-wrap">
         <p>
         </p>
        </div>
       </div>
      </div>
     </div>
     <div class="upgrade-popup__footer">
      <div class="upgrade-popup__cta-wrap">
       <button an-ac="pd buying tool" an-ca="option click" an-la="upgrade program:close" an-tr="header(pim)_service option selector-product detail-text-button" class="cta cta--outlined cta--black upgrade-popup__cta--close">
        TUTUP
       </button>
       <button an-ac="pd buying tool" an-ca="option click" an-la="upgrade program:confirm" an-tr="header(pim)_service option selector-product detail-text-button" class="cta cta--contained cta--emphasis upgrade-popup__cta--submit">
        Yakin
       </button>
      </div>
     </div>
     <button class="upgrade-popup__close">
      <svg class="icon">
       <use href="#delete-bold" xlink:href="#delete-bold">
       </use>
      </svg>
      <span class="hidden">
       Tutup Layar Popup
      </span>
     </button>
    </div>
   </div>
   <div aria-modal="true" class="upgrade-learn-more-popup" role="dialog" style="display: none">
    <div class="upgrade-learn-more-popup__dimmed">
    </div>
    <div class="upgrade-learn-more-popup__content">
     <div class="scrollbar">
      <div class="upgrade-learn-more-popup__content-wrap scrollbar__contents">
      </div>
      <button class="upgrade-learn-more-popup__close">
       <svg class="icon">
        <use href="#delete-bold" xlink:href="#delete-bold">
        </use>
       </svg>
       <span class="hidden">
        close popup
       </span>
      </button>
     </div>
    </div>
   </div>
   <div aria-modal="true" class="cancel-return-policy-popup" role="dialog" tabindex="0">
    <div class="layer-popup">
     <div class="layer-popup__inner">
      <div class="layer-popup__contents scrollbar">
       <div class="scrollbar__contents">
        <p class="layer-popup__title">
        </p>
        <div class="cancel-return-policy-popup__description">
         <div class="cancel-return-policy-popup__content">
          <p class="cancel-return-policy-popup__text">
          </p>
         </div>
        </div>
       </div>
      </div>
      <button class="layer-popup__close" type="button">
       <span class="hidden">
        Tutup Layar Popup
       </span>
       <svg class="icon" focusable="false">
        <use href="#delete-bold" xlink:href="#delete-bold">
        </use>
       </svg>
      </button>
     </div>
    </div>
   </div>
   <div aria-modal="true" class="warranty-policy-popup" role="dialog" tabindex="0">
    <div class="layer-popup">
     <div class="layer-popup__inner">
      <div class="layer-popup__contents scrollbar">
       <div class="scrollbar__contents">
        <p class="layer-popup__title">
         Jaminan
        </p>
        <div class="warranty-policy-popup__description">
         <div class="warranty-policy-popup__content">
          <p class="warranty-policy-popup__text">
          </p>
         </div>
        </div>
       </div>
      </div>
      <button class="layer-popup__close" type="button">
       <span class="hidden">
        Tutup Layar Popup
       </span>
       <svg class="icon" focusable="false">
        <use href="#delete-bold" xlink:href="#delete-bold">
        </use>
       </svg>
      </button>
     </div>
    </div>
   </div>
   <div class="fold-alert-popup">
    <div class="layer-popup" id="fold-alert-popup" role="dialog" style="display:block" tabindex="0">
     <div class="layer-popup__inner">
      <div class="layer-popup__contents scrollbar">
       <div class="scrollbar__contents">
        <div class="layer-popup__title">
         We recommend to set as below to see optimized screen
        </div>
        <div class="fold-alert-popup__wrap">
         <div class="fold-alert-popup__inner">
          <ul class="fold-alert-popup__list">
           <li class="fold-alert-popup__item">
            <strong class="fold-alert-popup__title">
             Option 01
            </strong>
            <p class="fold-alert-popup__text">
             Rotate the device until it is horizontal to view the screen in landscape mode.
            </p>
           </li>
           <li class="fold-alert-popup__item">
            <strong class="fold-alert-popup__title">
             Option 02
            </strong>
            <p class="fold-alert-popup__text">
             Tab on desktop version in the browser.
            </p>
           </li>
          </ul>
         </div>
        </div>
       </div>
      </div>
      <div class="fold-alert-popup__cta">
       <!--/* P6의 cta 적용 방식에 따라 마크업 변경 */ -->
       <a class="cta cta--outlined cta--black" href="${url}" title="Tutup">
        Tutup
       </a>
      </div>
      <button class="layer-popup__close" type="button">
       <span class="hidden">
        Tutup Layar Popup
       </span>
       <svg class="icon" focusable="false">
        <use href="#delete-bold" xlink:href="#delete-bold">
        </use>
       </svg>
      </button>
     </div>
    </div>
   </div>
   <div aria-modal="true" class="eip-popup" role="dialog">
    <div class="layer-popup" id="eip-popup">
     <div class="layer-popup__inner">
      <div class="layer-popup__contents scrollbar">
       <div class="scrollbar__contents">
        <div class="layer-popup__title">
         Program CICILAN 0%
        </div>
        <div class="eip-popup__wrap">
         <p class="eip-popup__top-text">
          <strong>
           Harga Produk:
           <span class="eip-popup__top-text--price">
            Rp 17.099.000
           </span>
          </strong>
         </p>
         <div class="tab">
          <ul class="tab__list" role="tablist">
           <li class="tab__item" role="presentation">
            <button class="tab__item-title" role="tab">
             Cicilan Kartu Kredit
             <span class="tab__item-line">
             </span>
            </button>
           </li>
          </ul>
         </div>
         <div class="eip-popup__tab-wrap">
          <div class="eip-popup__tab">
           <div class="eip-popup__tab--dropdown-wrap">
            <p class="eip-popup__tab--dropdown-title">
             Pilih Bank
            </p>
            <button class="eip-popup__tab--dropdown">
             BCA
            </button>
           </div>
           <div class="eip-popup__tab--select-wrap scrollbar">
            <div class="scrollbar__contents">
             <ul>
             </ul>
            </div>
           </div>
           <div class="eip-popup__tab--table-wrap scrollbar">
            <div class="scrollbar__contents">
            </div>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
      <button class="layer-popup__close" type="button">
       <span class="hidden">
        Tutup Layar Popup
       </span>
       <svg class="icon" focusable="false">
        <use href="#cancel-close-regular" xlink:href="#cancel-close-regular">
        </use>
       </svg>
      </button>
     </div>
    </div>
   </div>
   <div aria-modal="true" class="hubble-careinfo-popup" role="dialog">
    <div class="layer-popup" id="hubble-careinfo">
     <div class="layer-popup__inner">
      <div class="layer-popup__contents scrollbar">
       <div class="scrollbar__contents">
        <p class="layer-popup__title">
         Samsung Care+
        </p>
        <div class="hubble-careinfo-popup__body">
         <div class="hubble-careinfo-popup__info-wrap">
          <dl class="hubble-careinfo-popup__info">
          </dl>
         </div>
         <div class="hubble-careinfo-popup__explain">
          <p>
           Samsung Care+ Disclaimer with link
          </p>
         </div>
        </div>
       </div>
      </div>
      <!-- siteCode == 'za' -->
      <button class="hubble-care-popup__close">
       <span class="hidden">
        Tutup Layar Popup
       </span>
       <svg class="icon" focusable="false">
        <use href="#delete-bold" xlink:href="#delete-bold">
        </use>
       </svg>
      </button>
     </div>
    </div>
   </div>
   <div aria-modal="true" class="sc-learn-more-popup" role="dialog">
    <div class="layer-popup" id="ScLearnMorePopup">
     <div class="layer-popup__inner">
      <div class="layer-popup__contents scrollbar">
       <div class="scrollbar__contents">
        <p class="layer-popup__title">
         Here&rsquo;s what&rsquo;s covered
        </p>
        <div class="sc-learn-more-popup__body">
         <ul class="sc-learn-more-popup__list">
          <li class="sc-learn-more-popup__item">
           <div class="sc-learn-more-popup__image">
            <div class="image">
             <img alt="alt text" class="image__preview lazy-load responsive-img" data-desktop-src="/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/03-coverage-accidental-damage-repair-pc.png?$198_106_PNG$" data-mobile-src="/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/03-coverage-accidental-damage-repair-mo.png?$260_140_PNG$" role="img"/>
             <img alt="alt text" class="image__main lazy-load responsive-img" data-desktop-src="/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/03-coverage-accidental-damage-repair-pc.png?$198_106_PNG$" data-mobile-src="/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/03-coverage-accidental-damage-repair-mo.png?$260_140_PNG$" role="img"/>
            </div>
           </div>
           <strong class="sc-learn-more-popup__title">
            Hardware repairs
           </strong>
           <p class="sc-learn-more-popup__text">
            Get fast, convenient repairs using genuine LAPAKGACOR LOGIN parts, from our authorized technicians.
           </p>
          </li>
          <li class="sc-learn-more-popup__item">
           <div class="sc-learn-more-popup__image">
            <div class="image">
             <img alt="alt text" class="image__preview lazy-load responsive-img" data-desktop-src="/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/03-coverage-software-malfunction-pc.png?$198_106_PNG$" data-mobile-src="/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/03-coverage-software-malfunction-mo.png?$260_140_PNG$" role="img"/>
             <img alt="alt text" class="image__main lazy-load responsive-img" data-desktop-src="/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/03-coverage-software-malfunction-pc.png?$198_106_PNG$" data-mobile-src="/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/03-coverage-software-malfunction-mo.png?$260_140_PNG$" role="img"/>
            </div>
           </div>
           <strong class="sc-learn-more-popup__title">
            Software coverage
           </strong>
           <p class="sc-learn-more-popup__text">
            If your device isn&rsquo;t running smoothly, we&rsquo;ll check and fix the issue.
           </p>
          </li>
          <li class="sc-learn-more-popup__item">
           <div class="sc-learn-more-popup__image">
            <div class="image">
             <img alt="alt text" class="image__preview lazy-load responsive-img" data-desktop-src="/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/03-coverage-battery-replacement-pc.png?$198_106_PNG$" data-mobile-src="/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/03-coverage-battery-replacement-mo.png?$260_140_PNG$" role="img"/>
             <img alt="alt text" class="image__main lazy-load responsive-img" data-desktop-src="/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/03-coverage-battery-replacement-pc.png?$198_106_PNG$" data-mobile-src="/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/03-coverage-battery-replacement-mo.png?$260_140_PNG$" role="img"/>
            </div>
           </div>
           <strong class="sc-learn-more-popup__title">
            Battery replacement
           </strong>
           <p class="sc-learn-more-popup__text">
            Stay powered up with hassle-free battery replacements.
           </p>
          </li>
          <li class="sc-learn-more-popup__item">
           <div class="sc-learn-more-popup__image">
            <div class="image">
             <img alt="alt text" class="image__preview lazy-load responsive-img" data-desktop-src="/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/03_coverage_Upto2claims.png?$198_106_PNG$" data-mobile-src="/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/03_coverage_Upto2claims.png$260_140_PNG$" role="img"/>
             <img alt="alt text" class="image__main lazy-load responsive-img" data-desktop-src="/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/03_coverage_Upto2claims.png?$198_106_PNG$" data-mobile-src="/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/03_coverage_Upto2claims.png$260_140_PNG$" role="img"/>
            </div>
           </div>
           <strong class="sc-learn-more-popup__title">
            4 claims within
           </strong>
           <p class="sc-learn-more-popup__text">
            Make up to 4 claims for repair  or replacement  within 2 years,  and save with a low deductible  per claim.
           </p>
          </li>
         </ul>
         <div class="sc-learn-more-popup__cta">
          <a aria-label="Link Title" class="cta cta--underline cta--black cta--icon" href="https://www.samsung.com/id/offer/samsung-care-plus/" target="_blank">
           See all benefits
           <svg aria-hidden="true" class="icon" focusable="false">
            <use href="#outlink-bold" xlink:href="#outlink-bold">
            </use>
           </svg>
          </a>
         </div>
         <div class="sc-learn-more-popup__disclaimer">
         </div>
        </div>
       </div>
      </div>
      <button class="sc-learn-more-popup__close">
       <span class="hidden">
        Close popup
       </span>
       <svg aria-hidden="true" class="icon" focusable="false">
        <use href="#delete-bold" xlink:href="#delete-bold">
        </use>
       </svg>
      </button>
     </div>
    </div>
   </div>
   <div aria-modal="true" class="hubble-care-popup smcpopup" role="dialog">
    <div class="layer-popup" id="hubble-care">
     <div class="layer-popup__inner">
      <div class="layer-popup__contents scrollbar">
       <div class="scrollbar__contents">
        <p class="layer-popup__title layer-popup__title--no-icon">
         Samsung Care+
        </p>
        <p class="layer-popup__desc">
         <!-- CRHQ-3719 -->
         Layanan Perbaikan Secara Total untuk Smartphone Galaxy Anda. Hindari Kejadian Tidak Terduga Dengan Perlindungan Ekstra
        </p>
        <div class="hubble-care-popup__body">
         <div class="hubble-care-popup__smc">
          <div class="hubble-care-popup__smc-inner">
          </div>
          <p class="hubble-care-popup__smc-message" style="display: none">
          </p>
         </div>
         <div class="hubble-care-popup__image">
          <div class="image">
           <img alt="Accidental damage, Worldwide cover, Repairs by genuine parts" class="image__preview lazy-load responsive-img" data-desktop-src="/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/@care-image-new.jpg" data-mobile-src="/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/@care-image.jpg"/>
           <img alt="Accidental damage, Worldwide cover, Repairs by genuine parts" class="image__main lazy-load responsive-img" data-desktop-src="/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/@care-image-new.jpg" data-mobile-src="/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/@care-image.jpg"/>
          </div>
         </div>
         <div class="hubble-care-popup__check">
          <div class="hubble-care-popup__check-title">
           Syarat dan Ketentuan Samsung Protection
          </div>
          <ul class="hubble-care-popup__check-list-wrap">
          </ul>
          <p aria-hidden="true" class="hubble-care-popup__check-error">
           *Anda harus menyetujui terlebih dahulu
          </p>
         </div>

        </div>
       </div>
      </div>
      <div class="hubble-care-popup__foot">
       <div class="hubble-care-popup__button">
        <div class="hubble-care-popup__button-inner">
         <div class="hubble-care-popup__button-item">
          <a an-ac="pd buying tool" an-ca="option click" an-la="samsung care:close" an-tr="header(pim)_service option selector:samsung care-product detail-close-option_click1" class="cta cta--outlined cta--black" href="javascript:void(0)" role="button">
           Tutup
          </a>
         </div>
         <div class="hubble-care-popup__button-item">
          <a an-ac="pd buying tool" an-ca="option click" an-la="samsung care:confirm" an-tr="header(pim)_service option selector:samsung care-product detail-confirm-option_click1" aria-disabled="true" class="cta cta--contained cta--emphasis cta--disabled" href="javascript:void(0)" role="button">
           Yakin
          </a>
         </div>
        </div>
       </div>
      </div>
      <button class="hubble-care-popup__close">
       <span class="hidden">
        Tutup Layar Popup
       </span>
       <svg class="icon" focusable="false">
        <use href="#delete-bold" xlink:href="#delete-bold">
        </use>
       </svg>
      </button>
     </div>
    </div>
   </div>
   <div aria-modal="true" class="hubble-care-popup__alert" role="dialog" tabindex="0">
    <div class="layer-popup" id="hubble-care-alert1">
     <div class="layer-popup__inner">
      <div class="layer-popup__contents">
       Ich habe die Allgemeinen Versicherungsbedingungen heruntergeladen, gelesen und erkl&auml;re mich mit diesen einverstanden.
       <div class="hubble-care-popup__alert-button">
        <a class="cta cta--contained cta--emphasis" href="${url}" title="Best&auml;tigen">
         Best&auml;tigen
        </a>
       </div>
      </div>
      <button class="hubble-care-popup__alert-close">
       <span class="hidden">
        Tutup Layar Popup
       </span>
       <svg class="icon" focusable="false">
        <use href="#delete-bold" xlink:href="#delete-bold">
        </use>
       </svg>
      </button>
     </div>
    </div>
   </div>
   <div aria-modal="true" class="hubble-care-popup__alert" role="dialog" tabindex="0">
    <div class="layer-popup" id="hubble-care-alert2">
     <div class="layer-popup__inner">
      <div class="layer-popup__contents">
       Ich habe das Informationsblatt zur Versicherung heruntergeladen und sorgf&auml;ltig durchgelesen.
       <div class="hubble-care-popup__alert-button">
        <a class="cta cta--contained cta--emphasis" href="${url}" title="Best&auml;tigen">
         Best&auml;tigen
        </a>
       </div>
      </div>
      <button class="hubble-care-popup__alert-close">
       <span class="hidden">
        Tutup Layar Popup
       </span>
       <svg class="icon" focusable="false">
        <use href="#delete-bold" xlink:href="#delete-bold">
        </use>
       </svg>
      </button>
     </div>
    </div>
   </div>
   <input id="WishlistPopupUrl" type="hidden" value="/id/web/my-wishlist/"/>
   <div class="wishlist-popup">
    <div aria-modal="true" class="layer-popup" id="wishlist-popup" role="dialog" style="display:block">
     <div class="layer-popup__inner">
      <div class="layer-popup__contents">
       <p class="layer-popup__title">
       </p>
       <div class="wishlist-popup__desc">
       </div>
       <div class="wishlist-popup__selectbox__wrap">
        <div class="wishlist-popup__selectbox">
         <div class="wishlist-popup__selectbox-inner">
          <div class="menu filled">
           <select class="menu__select" data-default-message="My Wishlist" tabindex="-1">
            <option value="">
             My Wishlist 1
            </option>
            <option value="">
             My Wishlist 2
            </option>
            <option value="">
             My Wishlist 3
            </option>
            <option value="">
             My Wishlist 4
            </option>
            <option value="">
             My Wishlist 5
            </option>
            <option value="">
             My Wishlist 6
            </option>
            <option value="">
             My Wishlist 7
            </option>
            <option value="">
             My Wishlist 8
            </option>
            <option value="">
             My Wishlist 9
            </option>
           </select>
           <button aria-expanded="false" aria-haspopup="listbox" class="menu__select-field">
            <span class="menu__select-field-text">
            </span>
            <svg aria-hidden="true" class="menu__select-field-icon down" focusable="false">
             <use xlink:href="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/svg-sprite.svg#open-down-bold">
             </use>
            </svg>
            <svg aria-hidden="true" class="menu__select-field-icon up" focusable="false">
             <use xlink:href="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/svg-sprite.svg#close-up-bold">
             </use>
            </svg>
           </button>
          </div>
         </div>
        </div>
       </div>
      </div>
      <div class="wishlist-popup__cta-wrap">
       <div class="wishlist-popup__cta">
        <a aria-label="Link Title" class="cta cta--outlined cta--black" href="${url}" role="button">
        </a>
       </div>
       <div class="wishlist-popup__cta">
        <a class="cta cta--contained cta--emphasis" href="${url}" role="button">
        </a>
       </div>
      </div>
      <button class="layer-popup__close wishlist-popup__close" type="button">
       <span class="hidden">
        Close popup
       </span>
       <svg aria-hidden="true" class="icon" focusable="false">
        <use href="#delete-bold" xlink:href="#delete-bold">
        </use>
       </svg>
      </button>
     </div>
    </div>
   </div>
   <div aria-modal="true" class="extended-warranty-popup" role="dialog" tabindex="0">
    <div class="layer-popup" id="extended-warranty">
     <div class="layer-popup__inner">
      <div class="layer-popup__contents scrollbar">
       <div class="scrollbar__contents">
        <p class="layer-popup__title">
         EXTENDED WARRANTY
        </p>
        <p class="layer-popup__desc">
         Layanan Perbaikan Secara Total untuk Smartphone Galaxy Anda. Hindari Kejadian Tidak Terduga Dengan Perlindungan Ekstra
        </p>
        <div class="extended-warranty-popup__body">
         <div class="extended-warranty-popup__smc">
          <div class="extended-warranty-popup__smc-inner">
          </div>
          <p class="extended-warranty-popup__smc-message" style="display: none">
           ※ Cover until canceled. Financing program is not available with device purchasing
          </p>
          <p class="extended-warranty-popup__smc-message" style="display: none">
           ※ Cover for 24 months. Financing program is available with device purchasing
          </p>
         </div>
         <div class="extended-warranty-popup__image">
          <div class="image">
           <img alt="Accidental damage, Worldwide cover, Repairs by genuine parts" class="image__preview lazy-load responsive-img" data-desktop-src="/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/care-image-pc-uk.jpg?$380_223_PNG$" data-mobile-src="/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/care-image-mo-uk.jpg?$680_398_PNG$"/>
           <img alt="Accidental damage, Worldwide cover, Repairs by genuine parts" class="image__main lazy-load responsive-img" data-desktop-src="/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/care-image-pc-uk.jpg?$380_223_PNG$" data-mobile-src="/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/care-image-mo-uk.jpg?$680_398_PNG$"/>
          </div>
         </div>
         <div class="extended-warranty-popup__info-box">
          <!-- 필요 시 smc-inner 의 .checkbox-radio 의 갯수와 동일하게 구현 -->
         </div>
         <div class="extended-warranty-popup__check">
          <div class="extended-warranty-popup__check-title">
           Syarat dan Ketentuan LAPAKGACOR Protection
          </div>
         </div>
         <div class="extended-warranty-popup__policy-text" id="cfCareIPID">
         </div>
        </div>
       </div>
      </div>
      <div class="extended-warranty-popup__foot">
       <div class="extended-warranty-popup__button">
        <div class="extended-warranty-popup__button-description">
         <p>
          By clicking on confirm, you agree to Samsung terms and conditions.
         </p>
        </div>
        <div class="extended-warranty-popup__button-inner">
         <div class="extended-warranty-popup__button-item">
          <a an-ac="pd buying tool" an-ca="option click" an-la="samsung warranty:close" an-tr="header(pim)_service option selector-product detail-popup-button" class="cta cta--outlined cta--black" href="${url}" role="button">
           Tutup
          </a>
         </div>
         <div class="extended-warranty-popup__button-item">
          <a an-ac="pd buying tool" an-ca="option click" an-la="samsung warranty:confirm" an-tr="header(pim)_service option selector-product detail-popup-button" class="cta cta--contained cta--emphasis cta--disabled" href="${url}" role="button">
           Yakin
          </a>
         </div>
        </div>
       </div>
      </div>
      <button class="extended-warranty-popup__close">
       <span class="hidden">
        Layer Popup Close
       </span>
       <svg class="icon">
        <use href="#delete-bold" xlink:href="#delete-bold">
        </use>
       </svg>
      </button>
     </div>
    </div>
   </div>
   <div aria-modal="true" class="extended-warranty-popup__alert" role="dialog" tabindex="0">
    <div class="layer-popup" id="extended-warranty-alert1">
     <div class="layer-popup__inner">
      <div class="layer-popup__contents">
       Ich habe die Allgemeinen Versicherungsbedingungen heruntergeladen, gelesen und erkl&auml;re mich mit diesen einverstanden.
       <div class="extended-warranty-popup__alert-button">
        <a class="cta cta--contained cta--emphasis" href="${url}">
         Best&auml;tigen
        </a>
       </div>
      </div>
      <button class="extended-warranty-popup__alert-close">
       <span class="hidden">
        Layer Popup Close
       </span>
       <svg class="icon">
        <use href="#delete-bold" xlink:href="#delete-bold">
        </use>
       </svg>
      </button>
     </div>
    </div>
   </div>
   <div aria-modal="true" class="extended-warranty-popup__alert" role="dialog" tabindex="0">
    <div class="layer-popup" id="extended-warranty-alert2">
     <div class="layer-popup__inner">
      <div class="layer-popup__contents">
       Ich habe das Informationsblatt zur Versicherung heruntergeladen und sorgf&auml;ltig durchgelesen.
       <div class="extended-warranty-popup__alert-button">
        <a class="cta cta--contained cta--emphasis" href="${url}" title="">
         Best&auml;tigen
        </a>
       </div>
      </div>
      <button class="extended-warranty-popup__alert-close">
       <span class="hidden">
        Layer Popup Close
       </span>
       <svg class="icon">
        <use href="#delete-bold" xlink:href="#delete-bold">
        </use>
       </svg>
      </button>
     </div>
    </div>
   </div>
   <div aria-modal="true" class="extended-warranty-popup-vd" role="dialog" tabindex="0">
    <div class="layer-popup" id="extended-warranty-vd">
     <div class="layer-popup__inner">
      <div class="layer-popup__contents scrollbar">
       <div class="scrollbar__contents">
        <p class="layer-popup__title">
         Extended Warranty
        </p>
        <p class="layer-popup__desc">
         Perpanjang durasi garansi pabrik untuk produk Anda
        </p>
        <div class="extended-warranty-popup-vd__body">
         <div class="extended-warranty-popup-vd__option">
          <div class="pd-select-option">
           <div class="pd-select-option__wrap">
            <ul class="pd-select-option__list pd-select-option__list--wide" role="list">
            </ul>
           </div>
          </div>
         </div>
         <div class="extended-warranty-popup-vd__check">
          <div class="extended-warranty-popup-vd__check-title">
           Ketentuan Untuk Extended Warranty
          </div>
          <ul class="extended-warranty-popup-vd__check-list-wrap">
          </ul>
         </div>
        </div>
       </div>
      </div>
      <div class="extended-warranty-popup-vd__foot">
       <div class="extended-warranty-popup-vd__button">
        <div class="extended-warranty-popup-vd__button-inner">
         <div class="extended-warranty-popup-vd__button-item">
          <a class="cta cta--outlined cta--black" href="${url}" role="button">
           Tutup
          </a>
         </div>
         <div class="extended-warranty-popup-vd__button-item">
          <a class="cta cta--contained cta--emphasis cta--disabled" href="${url}" role="button">
           Yakin
          </a>
         </div>
        </div>
       </div>
      </div>
      <button class="extended-warranty-popup-vd__close">
       <span class="hidden">
        Close popup
       </span>
       <svg aria-hidden="true" class="icon" focusable="false">
        <use href="#delete-bold" xlink:href="#delete-bold">
        </use>
       </svg>
      </button>
     </div>
    </div>
   </div>
   <div class="warranty-info-popup">
    <div class="layer-popup" role="dialog" style="display:none" tabindex="0">
     <div class="layer-popup__inner">
      <div class="layer-popup__contents scrollbar">
       <div class="scrollbar__contents">
        <p class="layer-popup__title">
         EXTENDED WARRANTY
        </p>
        <div class="warranty-info-popup__content">
         <div class="warranty-info-popup__info">
          <dl class="warranty-info-popup__info-list">
          </dl>
         </div>
         <div class="warranty-info-popup__explain">
          <p>
          </p>
         </div>
        </div>
       </div>
      </div>
      <button class="layer-popup__close" type="button">
       <span class="hidden">
        Tutup Layar Popup
       </span>
       <svg class="icon" focusable="false">
        <use href="#delete-bold" xlink:href="#delete-bold">
        </use>
       </svg>
      </button>
     </div>
    </div>
   </div>
   <div aria-modal="true" class="shop-combo-popup" id="shop-combo-popup" role="dialog">
    <div class="layer-popup">
     <div class="layer-popup__inner">
      <div class="layer-popup__title">
       Pilih opsi paket kombo
      </div>
      <div class="layer-popup__contents scrollbar">
       <div class="scrollbar__contents">
        <div class="shop-combo-popup__list">
         <div class="shop-combo-popup__list-area">
          <div class="shop-combo-popup__list-in">
           <ul>
           </ul>
          </div>
         </div>
        </div>
       </div>
      </div>
      <div class="layer__fixed-wrap">
       <div class="shop-combo-popup__summary">
        <div class="shop-combo-popup__summary-title">
         <p>
          Produk terpilih (
          <span class="s-bundle-option-count">
           0
          </span>
          )
         </p>
        </div>
        <div class="shop-combo-popup__summary-save">
         <span class="shop-combo-popup__summary-save-original">
          <span class="hidden">
           Harga awal:
          </span>
          <del>
          </del>
         </span>
         <span class="shop-combo-popup__summary-save-price">
         </span>
        </div>
        <div class="shop-combo-popup__summary-total">
         <span class="shop-combo-popup__summary-option-total">
          <strong>
          </strong>
         </span>
        </div>
        <div class="shop-combo-popup__summary-reset">
         <button an-ac="pd buying tool" an-ca="option click" an-la="bundle offer:add-on:clear all" an-tr="header(pim)_offer option:bundle offer:add-on -product detail-popup-button" class="cta-reset" type="reset">
          Kosongkan semua
         </button>
        </div>
       </div>
      </div>
      <div class="shop-combo-popup__btn-wrap">
       <button an-ac="pd buying tool" an-ca="option click" an-la="bundle offer:add-on:close" an-tr="header(pim)_offer option:bundle offer:add-on -product detail-popup-button" class="shop-combo-popup__btn-close cta cta--outlined cta--black">
        Tutup
       </button>
       <button an-ac="pd buying tool" an-ca="option click" an-la="bundle offer:add-on:confirm" an-tr="header(pim)_offer option:bundle offer:add-on -product detail-popup-button" class="shop-combo-popup__btn-confirm cta cta--contained cta--emphasis cta--disabled">
        Yakin
       </button>
      </div>
      <button an-ac="pd buying tool" an-ca="option click" an-la="bundle offer:add-on:close" an-tr="header(pim)_offer option:bundle offer:add-on -product detail-popup-button" class="layer-popup__close" type="button">
       <span class="hidden">
        Tutup Layar Popup
       </span>
       <svg class="icon" focusable="false">
        <use href="#delete-bold" xlink:href="#delete-bold">
        </use>
       </svg>
      </button>
     </div>
    </div>
   </div>
   <div aria-modal="true" class="free-gift-popup" role="dialog" tabindex="0">
    <div class="layer-popup" id="free-gift-popup">
     <div class="layer-popup__inner">
      <div class="layer-popup__title type-left">
       Pilih hadiah Pre-order Anda
      </div>
      <div class="layer-popup__contents scrollbar">
       <div class="scrollbar__contents">
        <div class="free-gift-popup__wrap">
        </div>
       </div>
      </div>
      <div class="layer-popup__foot">
       <div class="layer-popup__button">
        <div class="layer-popup__button-inner">
         <div class="layer-popup__button-item close-popup">
          <button an-ac="pd buying tool" an-ca="option click" an-la="bundle offer:free gift:close" an-tr="header(pim)_offer option:bundle offer:free gift-product detail-popup-link" class="cta cta--outlined cta--black">
           Tutup
          </button>
         </div>
         <div class="layer-popup__button-item">
          <button an-ac="pd buying tool" an-ca="option click" an-la="bundle offer:free gift:confirm" an-tr="header(pim)_offer option:bundle offer:free gift-product detail-popup-link" class="cta cta--contained cta--emphasis cta--disabled">
           Yakin
          </button>
         </div>
        </div>
       </div>
      </div>
      <button an-ac="pd buying tool" an-ca="option click" an-la="bundle offer:free gift:layer popup close" an-tr="header(pim)_offer option:bundle offer:free gift-product detail-popup-link" class="layer-popup__close" type="button">
       <span class="hidden">
        Tutup Layar Popup
       </span>
       <svg class="icon" focusable="false">
        <use xlink:href="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/svg-sprite.svg#cancel-close-regular">
        </use>
       </svg>
      </button>
     </div>
    </div>
   </div>
   <div class="finance-ee-popup" style="display:none">
    <div class="layer-popup" id="finance ee" role="dialog" style="display:block" tabindex="0">
     <div class="layer-popup__inner">
      <div class="layer-popup__contents scrollbar">
       <div class="finance-ee-popup__contents scrollbar__contents">
        <div class="finance-ee-popup__title">
         <strong class="finance-ee-popup__title-text">
          Choose convenient Instalment plans provided by Inbank
         </strong>
        </div>
        <div class="finance-ee-popup__description">
         <div class="finance-ee-popup__plans-contents">
          <div class="finance-ee-popup__plans-table" role="table">
           <div class="finance-ee-popup__plans-row" role="row">
            <div class="finance-ee-popup__plans-header" role="rowheader">
             Harga produk
            </div>
            <div class="finance-ee-popup__plans-cell" role="cell">
             <p class="finance-ee-popup__plans-text" id="productprice">
             </p>
            </div>
           </div>
           <div class="finance-ee-popup__plans-row" role="row">
            <div class="finance-ee-popup__plans-header" role="rowheader">
             Plan
            </div>
            <div class="finance-ee-popup__plans-cell" role="cell">
             <div class="menu">
              <select class="menu__select" id="selectplan" tabindex="-1">
              </select>
              <button aria-expanded="false" aria-haspopup="listbox" class="menu__select-field">
               <span class="menu__select-field-text">
               </span>
               <svg class="menu__select-field-icon down" focusable="false">
                <use href="#open-down-bold" xlink:href="#open-down-bold">
                </use>
               </svg>
               <svg class="menu__select-field-icon up" focusable="false">
                <use href="#close-up-bold" xlink:href="#close-up-bold">
                </use>
               </svg>
              </button>
             </div>
            </div>
           </div>
           <div class="finance-ee-popup__plans-row" role="row">
            <div class="finance-ee-popup__plans-header" role="rowheader">
             Months
            </div>
            <div class="finance-ee-popup__plans-cell" role="cell">
             <div class="menu">
              <select class="menu__select" id="selectmonths" tabindex="-1">
              </select>
              <button aria-expanded="false" aria-haspopup="listbox" class="menu__select-field">
               <span class="menu__select-field-text">
               </span>
               <svg class="menu__select-field-icon down" focusable="false">
                <use href="#open-down-bold" xlink:href="#open-down-bold">
                </use>
               </svg>
               <svg class="menu__select-field-icon up" focusable="false">
                <use href="#close-up-bold" xlink:href="#close-up-bold">
                </use>
               </svg>
              </button>
             </div>
            </div>
           </div>
           <div class="finance-ee-popup__plans-row" role="row">
            <div class="finance-ee-popup__plans-header" role="rowheader">
             Interest rate
            </div>
            <div class="finance-ee-popup__plans-cell" role="cell">
             <p class="finance-ee-popup__plans-text" id="interestrate">
             </p>
            </div>
           </div>
           <div class="finance-ee-popup__plans-row" role="row">
            <div class="finance-ee-popup__plans-header" role="rowheader">
             Monthly payment
            </div>
            <div class="finance-ee-popup__plans-cell" role="cell">
             <p class="finance-ee-popup__plans-text" id="monthlypayment">
             </p>
            </div>
           </div>
          </div>
         </div>
         <p class="finance-ee-popup__disclaimer">
          Ketentu Paket Angsuran
         </p>
        </div>
       </div>
      </div>
      <button class="layer-popup__close" type="button">
       <span class="hidden">
        Tutup Layar Popup
       </span>
       <svg class="icon" focusable="false">
        <use href="#delete-bold" xlink:href="#delete-bold">
        </use>
       </svg>
      </button>
     </div>
    </div>
   </div>
   <!-- <sly data-sly-include="ebt-popup"/> -->
   <div aria-modal="true" class="contact-mail-form-popup" role="dialog" style="display: none">
    <input id="fn06_headlineText" name="fn06_headlineText" type="hidden" value="Thank you!"/>
    <input id="fn06_description" name="fn06_description" type="hidden" value="Your enquiry has been successfully submitted. We will get back to you shortly."/>
    <input id="fn06_headlineHeadingLevel" name="fn06_headlineHeadingLevel" type="hidden" value="h2"/>
    <input id="eloquaPostUrl" name="eloquaPostUrl" type="hidden"/>
    <input id="eloquaYn" name="eloquaYn" type="hidden"/>
    <input id="inquiryType" name="inquiryType" type="hidden" value="SalesInquiry"/>
    <input id="Subsidiary" name="Subsidiary" type="hidden" value="SEIN"/>
    <div class="layer-popup">
     <div class="layer-popup__inner">
      <p class="layer-popup__title">
       B2B Enquiry Form
      </p>
      <p class="layer-popup__description">
      </p>
      <div class="layer-popup__contents">
       <div class="contact-mail-form-popup__contents">
        <div class="contact-mail-form-popup__form">
         <form name="contact-mail-form-popup__form">
          <div class="append-from-data">
          </div>
         </form>
         <div class="contact-mail-form-popup__form-wrap">
          <div class="contact-mail-form-popup__form-field form--size-half is-required field--single-text">
           <div class="text-field-v2">
            <label class="text-field-v2__hint" for="popUp_form_0">
             Company Name
             <span class="required-text">
              *
              <span class="hidden">
               Wajib Diisi
              </span>
             </span>
            </label>
            <div class="text-field-v2__input-wrap">
             <input autocomplete="organization" class="text-field-v2__input" data-form-name="CustomerName" id="popUp_form_0" maxlength="255" type="text" value=""/>
             <button aria-label="Delete" class="text-field-v2__input-icon delete" type="button">
              <svg aria-hidden="true" class="icon delete" focusable="false">
               <use href="#cancel-bold" xlink:href="#cancel-bold">
               </use>
              </svg>
             </button>
             <div class="text-field-v2__input-icon error">
              <svg aria-hidden="true" class="icon error" focusable="false">
               <use href="#information-error-bold" xlink:href="#information-error-bold">
               </use>
              </svg>
             </div>
            </div>
            <p class="text-field-v2__text error">
             * This field is required
            </p>
           </div>
          </div>
          <div class="contact-mail-form-popup__form-field form--size-half is-required field--single-text">
           <div class="text-field-v2">
            <label class="text-field-v2__hint" for="popUp_form_1">
             First Name
             <span class="required-text">
              *
              <span class="hidden">
               Wajib Diisi
              </span>
             </span>
            </label>
            <div class="text-field-v2__input-wrap">
             <input autocomplete="given-name" class="text-field-v2__input" data-form-name="ContactFirstName" id="popUp_form_1" maxlength="40" type="text" value=""/>
             <button aria-label="Delete" class="text-field-v2__input-icon delete" type="button">
              <svg aria-hidden="true" class="icon delete" focusable="false">
               <use href="#cancel-bold" xlink:href="#cancel-bold">
               </use>
              </svg>
             </button>
             <div class="text-field-v2__input-icon error">
              <svg aria-hidden="true" class="icon error" focusable="false">
               <use href="#information-error-bold" xlink:href="#information-error-bold">
               </use>
              </svg>
             </div>
            </div>
            <p class="text-field-v2__text error">
             * This field is required
            </p>
           </div>
          </div>
          <div class="contact-mail-form-popup__form-field form--size-half is-required field--single-text">
           <div class="text-field-v2">
            <label class="text-field-v2__hint" for="popUp_form_2">
             Last Name
             <span class="required-text">
              *
              <span class="hidden">
               Wajib Diisi
              </span>
             </span>
            </label>
            <div class="text-field-v2__input-wrap">
             <input autocomplete="family-name" class="text-field-v2__input" data-form-name="ContactName" id="popUp_form_2" maxlength="80" type="text" value=""/>
             <button aria-label="Delete" class="text-field-v2__input-icon delete" type="button">
              <svg aria-hidden="true" class="icon delete" focusable="false">
               <use href="#cancel-bold" xlink:href="#cancel-bold">
               </use>
              </svg>
             </button>
             <div class="text-field-v2__input-icon error">
              <svg aria-hidden="true" class="icon error" focusable="false">
               <use href="#information-error-bold" xlink:href="#information-error-bold">
               </use>
              </svg>
             </div>
            </div>
            <p class="text-field-v2__text error">
             * This field is required
            </p>
           </div>
          </div>
          <div class="contact-mail-form-popup__form-field form--size-half is-required field--single-text">
           <div class="text-field-v2">
            <label class="text-field-v2__hint" for="popUp_form_3">
             E-mail Address
             <span class="required-text">
              *
              <span class="hidden">
               Wajib Diisi
              </span>
             </span>
            </label>
            <div class="text-field-v2__input-wrap">
             <input autocomplete="email" class="text-field-v2__input" data-form-name="EmailAddress" id="popUp_form_3" maxlength="80" type="text" value=""/>
             <button aria-label="Delete" class="text-field-v2__input-icon delete" type="button">
              <svg aria-hidden="true" class="icon delete" focusable="false">
               <use href="#cancel-bold" xlink:href="#cancel-bold">
               </use>
              </svg>
             </button>
             <div class="text-field-v2__input-icon error">
              <svg aria-hidden="true" class="icon error" focusable="false">
               <use href="#information-error-bold" xlink:href="#information-error-bold">
               </use>
              </svg>
             </div>
            </div>
            <p class="text-field-v2__text error">
             * This field is required
            </p>
           </div>
          </div>
          <div class="contact-mail-form-popup__form-field form--size-half field--checkbox checkbox--list is-required">
           <fieldset>
            <legend>
             Product Interest
             <span>
              * Wajib Diisi
             </span>
            </legend>
            <div class="field--checkbox-list-wrap">
             <div aria-hidden="ture" class="contact-mail-form-popup__form-field-title-wrap">
              <strong aria-hidden="true" class="contact-mail-form-popup__form-field-title">
               Product Interest
              </strong>
              <p aria-hidden="true" class="checkbox--required-text">
               * Wajib Diisi
              </p>
              <p class="checkbox--error-text">
               * This checkbox is required
              </p>
             </div>
             <div class="contact-mail-form-popup__form-field-list-wrap">
              <div class="field--checkbox-wrap">
               <div class="checkbox-v2">
                <input class="checkbox-v2__input" data-form-name="ProductSolution" data-orignal="Mobile" id="popUp_form_4-0" type="checkbox" value="Mobile"/>
                <label class="checkbox-v2__label" for="popUp_form_4-0">
                 <span class="checkbox-v2__label-box-wrap">
                  <span class="checkbox-v2__label-box">
                   <svg aria-hidden="true" class="checkbox-v2__label-box-icon" focusable="false">
                    <use href="#done-bold" xlink:href="#done-bold">
                    </use>
                   </svg>
                  </span>
                 </span>
                 <span class="checkbox-v2__label-text">
                  Seluler
                 </span>
                </label>
               </div>
              </div>
              <div class="field--checkbox-wrap">
               <div class="checkbox-v2">
                <input class="checkbox-v2__input" data-form-name="ProductSolution" data-orignal="Computing" id="popUp_form_4-1" type="checkbox" value="Computing"/>
                <label class="checkbox-v2__label" for="popUp_form_4-1">
                 <span class="checkbox-v2__label-box-wrap">
                  <span class="checkbox-v2__label-box">
                   <svg aria-hidden="true" class="checkbox-v2__label-box-icon" focusable="false">
                    <use href="#done-bold" xlink:href="#done-bold">
                    </use>
                   </svg>
                  </span>
                 </span>
                 <span class="checkbox-v2__label-text">
                  Computing
                 </span>
                </label>
               </div>
              </div>
              <div class="field--checkbox-wrap">
               <div class="checkbox-v2">
                <input class="checkbox-v2__input" data-form-name="ProductSolution" data-orignal="Displays" id="popUp_form_4-2" type="checkbox" value="Displays"/>
                <label class="checkbox-v2__label" for="popUp_form_4-2">
                 <span class="checkbox-v2__label-box-wrap">
                  <span class="checkbox-v2__label-box">
                   <svg aria-hidden="true" class="checkbox-v2__label-box-icon" focusable="false">
                    <use href="#done-bold" xlink:href="#done-bold">
                    </use>
                   </svg>
                  </span>
                 </span>
                 <span class="checkbox-v2__label-text">
                  Displays
                 </span>
                </label>
               </div>
              </div>
              <div class="field--checkbox-wrap">
               <div class="checkbox-v2">
                <input class="checkbox-v2__input" data-form-name="ProductSolution" data-orignal="Home Appliance" id="popUp_form_4-3" type="checkbox" value="Home Appliance"/>
                <label class="checkbox-v2__label" for="popUp_form_4-3">
                 <span class="checkbox-v2__label-box-wrap">
                  <span class="checkbox-v2__label-box">
                   <svg aria-hidden="true" class="checkbox-v2__label-box-icon" focusable="false">
                    <use href="#done-bold" xlink:href="#done-bold">
                    </use>
                   </svg>
                  </span>
                 </span>
                 <span class="checkbox-v2__label-text">
                  Peralatan Rumah Tangga
                 </span>
                </label>
               </div>
              </div>
              <div class="field--checkbox-wrap">
               <div class="checkbox-v2">
                <input class="checkbox-v2__input" data-form-name="ProductSolution" data-orignal="Climate" id="popUp_form_4-4" type="checkbox" value="Climate"/>
                <label class="checkbox-v2__label" for="popUp_form_4-4">
                 <span class="checkbox-v2__label-box-wrap">
                  <span class="checkbox-v2__label-box">
                   <svg aria-hidden="true" class="checkbox-v2__label-box-icon" focusable="false">
                    <use href="#done-bold" xlink:href="#done-bold">
                    </use>
                   </svg>
                  </span>
                 </span>
                 <span class="checkbox-v2__label-text">
                  Climate
                 </span>
                </label>
               </div>
              </div>
              <div class="field--checkbox-wrap">
               <div class="checkbox-v2">
                <input class="checkbox-v2__input" data-form-name="ProductSolution" data-orignal="Memory" id="popUp_form_4-5" type="checkbox" value="Memory"/>
                <label class="checkbox-v2__label" for="popUp_form_4-5">
                 <span class="checkbox-v2__label-box-wrap">
                  <span class="checkbox-v2__label-box">
                   <svg aria-hidden="true" class="checkbox-v2__label-box-icon" focusable="false">
                    <use href="#done-bold" xlink:href="#done-bold">
                    </use>
                   </svg>
                  </span>
                 </span>
                 <span class="checkbox-v2__label-text">
                  Penyimpanan
                 </span>
                </label>
               </div>
              </div>
              <div class="field--checkbox-wrap">
               <div class="checkbox-v2">
                <input class="checkbox-v2__input" data-form-name="ProductSolution" data-orignal="Healthcare" id="popUp_form_4-6" type="checkbox" value="Healthcare"/>
                <label class="checkbox-v2__label" for="popUp_form_4-6">
                 <span class="checkbox-v2__label-box-wrap">
                  <span class="checkbox-v2__label-box">
                   <svg aria-hidden="true" class="checkbox-v2__label-box-icon" focusable="false">
                    <use href="#done-bold" xlink:href="#done-bold">
                    </use>
                   </svg>
                  </span>
                 </span>
                 <span class="checkbox-v2__label-text">
                  Healthcare
                 </span>
                </label>
               </div>
              </div>
             </div>
            </div>
            <fieldset>
            </fieldset>
           </fieldset>
          </div>
          <div class="contact-mail-form-popup__form-field form--size-full field--single-text">
           <div class="text-field-v2">
            <label class="text-field-v2__hint" for="popUp_form_5">
             Company Address
            </label>
            <div class="text-field-v2__input-wrap">
             <input autocomplete="address-line1" class="text-field-v2__input" data-form-name="CompanyAddress" id="popUp_form_5" maxlength="255" type="text" value=""/>
             <button aria-label="Delete" class="text-field-v2__input-icon delete" type="button">
              <svg aria-hidden="true" class="icon delete" focusable="false">
               <use href="#cancel-bold" xlink:href="#cancel-bold">
               </use>
              </svg>
             </button>
             <div class="text-field-v2__input-icon error">
              <svg aria-hidden="true" class="icon error" focusable="false">
               <use href="#information-error-bold" xlink:href="#information-error-bold">
               </use>
              </svg>
             </div>
            </div>
            <p class="text-field-v2__text error">
             * This field is required
            </p>
           </div>
          </div>
          <div class="contact-mail-form-popup__form-field form--size-full field--single-text">
           <div class="text-field-v2">
            <label class="text-field-v2__hint" for="popUp_form_6">
             Company Industry
            </label>
            <div class="text-field-v2__input-wrap">
             <input autocomplete="organization" class="text-field-v2__input" data-form-name="CompanyInterest" id="popUp_form_6" maxlength="255" type="text" value=""/>
             <button aria-label="Delete" class="text-field-v2__input-icon delete" type="button">
              <svg aria-hidden="true" class="icon delete" focusable="false">
               <use href="#cancel-bold" xlink:href="#cancel-bold">
               </use>
              </svg>
             </button>
             <div class="text-field-v2__input-icon error">
              <svg aria-hidden="true" class="icon error" focusable="false">
               <use href="#information-error-bold" xlink:href="#information-error-bold">
               </use>
              </svg>
             </div>
            </div>
            <p class="text-field-v2__text error">
             * This field is required
            </p>
           </div>
          </div>
          <div class="contact-mail-form-popup__form-field form--size-full field--single-text">
           <div class="text-field-v2">
            <label class="text-field-v2__hint" for="popUp_form_7">
             Job Title
            </label>
            <div class="text-field-v2__input-wrap">
             <input autocomplete="organization-title" class="text-field-v2__input" data-form-name="JobTitle" id="popUp_form_7" maxlength="128" type="text" value=""/>
             <button aria-label="Delete" class="text-field-v2__input-icon delete" type="button">
              <svg aria-hidden="true" class="icon delete" focusable="false">
               <use href="#cancel-bold" xlink:href="#cancel-bold">
               </use>
              </svg>
             </button>
             <div class="text-field-v2__input-icon error">
              <svg aria-hidden="true" class="icon error" focusable="false">
               <use href="#information-error-bold" xlink:href="#information-error-bold">
               </use>
              </svg>
             </div>
            </div>
            <p class="text-field-v2__text error">
             * This field is required
            </p>
           </div>
          </div>
          <div class="contact-mail-form-popup__form-field form--size-full is-required field--single-text">
           <div class="text-field-v2">
            <label class="text-field-v2__hint" for="popUp_form_8">
             Contact Number
             <span class="required-text">
              *
              <span class="hidden">
               Wajib Diisi
              </span>
             </span>
            </label>
            <div class="text-field-v2__input-wrap">
             <input autocomplete="tel" class="text-field-v2__input" data-form-name="Telephone" id="popUp_form_8" maxlength="40" type="text" value=""/>
             <button aria-label="Delete" class="text-field-v2__input-icon delete" type="button">
              <svg aria-hidden="true" class="icon delete" focusable="false">
               <use href="#cancel-bold" xlink:href="#cancel-bold">
               </use>
              </svg>
             </button>
             <div class="text-field-v2__input-icon error">
              <svg aria-hidden="true" class="icon error" focusable="false">
               <use href="#information-error-bold" xlink:href="#information-error-bold">
               </use>
              </svg>
             </div>
            </div>
            <p class="text-field-v2__text error">
             * This field is required
            </p>
           </div>
          </div>
          <div class="contact-mail-form-popup__form-field form--size-full field--dropdown">
           <div class="menu menu--text-field">
            <select aria-labelledby="hint_popUp_form_9" class="menu__select" data-form-name="Employee" tabindex="-1">
             <option value="&lt;50">
              &lt;50
             </option>
             <option value="50-99">
              50 ~ 99
             </option>
             <option value="100-199">
              100 ~ 199
             </option>
             <option value="200-499">
              200 ~ 499
             </option>
             <option value="500-999">
              500 ~ 999
             </option>
             <option value="&gt;1000">
              &gt;1000
             </option>
            </select>
            <p class="menu--text-field__hint" id="hint_popUp_form_9">
             No. of Employees
            </p>
            <button aria-expanded="false" aria-haspopup="listbox" aria-labelledby="hint_popUp_form_9 text_hint_popUp_form_9" class="menu__select-field" type="button">
             <span class="menu__select-field-text" id="text_hint_popUp_form_9">
             </span>
             <svg class="menu__select-field-icon down" focusable="false">
              <use href="#open-down-bold" xlink:href="#open-down-bold">
              </use>
             </svg>
             <svg class="menu__select-field-icon up" focusable="false">
              <use href="#close-up-bold" xlink:href="#close-up-bold">
              </use>
             </svg>
            </button>
            <p class="menu--text-field__error">
             * This field is required
            </p>
           </div>
          </div>
          <div class="contact-mail-form-popup__form-field form--size-full is-required field--dropdown">
           <div class="menu menu--text-field">
            <select aria-labelledby="hint_popUp_form_10" class="menu__select" data-form-name="Industry" tabindex="-1">
             <option value="Communications">
              Communications
             </option>
             <option value="Education">
              Education
             </option>
             <option value="Finance">
              Finance
             </option>
             <option value="Government">
              Government
             </option>
             <option value="Healthcare">
              Healthcare
             </option>
             <option value="Hospitality">
              Hospitality
             </option>
             <option value="Manufacturing">
              Manufacturing
             </option>
             <option value="Retail">
              Retail
             </option>
             <option value="Transportation &amp; Logistics">
              Transportation &amp; Logistics
             </option>
             <option value="Others">
              Lainnya
             </option>
            </select>
            <p class="menu--text-field__hint" id="hint_popUp_form_10">
             Product / Industry Interest
             <span class="text-field--required-text">
              *
              <span class="hidden">
               Wajib Diisi
              </span>
             </span>
            </p>
            <button aria-expanded="false" aria-haspopup="listbox" aria-labelledby="hint_popUp_form_10 text_hint_popUp_form_10" class="menu__select-field" type="button">
             <span class="menu__select-field-text" id="text_hint_popUp_form_10">
             </span>
             <svg class="menu__select-field-icon down" focusable="false">
              <use href="#open-down-bold" xlink:href="#open-down-bold">
              </use>
             </svg>
             <svg class="menu__select-field-icon up" focusable="false">
              <use href="#close-up-bold" xlink:href="#close-up-bold">
              </use>
             </svg>
            </button>
            <p class="menu--text-field__error">
             * This field is required
            </p>
           </div>
          </div>
          <div class="contact-mail-form-popup__form-field form--size-half field--checkbox checkbox--list">
           <fieldset>
            <legend>
             Solution Interest
             <span>
              * Wajib Diisi
             </span>
            </legend>
            <div class="field--checkbox-list-wrap">
             <div class="contact-mail-form-popup__form-field-title-wrap">
              <strong aria-hidden="true" class="contact-mail-form-popup__form-field-title">
               Solution Interest
              </strong>
              <p class="checkbox--error-text">
               * This checkbox is required
              </p>
             </div>
             <fieldset>
              <legend>
               Solusi Bisnis Mobile
              </legend>
              <div class="contact-mail-form-popup__form-field-list-wrap">
               <strong aria-hidden="true" class="contact-mail-form-popup__form-field-sub-title">
                Solusi Bisnis Mobile
               </strong>
               <div class="field--checkbox-wrap">
                <div class="checkbox-v2">
                 <input class="checkbox-v2__input" data-form-name="SolutionInterest" data-orignal="LAPAKGACOR" id="mbs_popUp_form_11-0" type="checkbox" value="LAPAKGACOR"/>
                 <label class="checkbox-v2__label" for="mbs_popUp_form_11-0">
                  <span class="checkbox-v2__label-box-wrap">
                   <span class="checkbox-v2__label-box">
                    <svg aria-hidden="true" class="checkbox-v2__label-box-icon" focusable="false">
                     <use href="#done-bold" xlink:href="#done-bold">
                     </use>
                    </svg>
                   </span>
                  </span>
                  <span class="checkbox-v2__label-text">
                   LAPAKGACOR
                  </span>
                 </label>
                </div>
               </div>
               <div class="field--checkbox-wrap">
                <div class="checkbox-v2">
                 <input class="checkbox-v2__input" data-form-name="SolutionInterest" data-orignal="LAPAKGACOR" id="mbs_popUp_form_11-1" type="checkbox" value="LAPAKGACOR"/>
                 <label class="checkbox-v2__label" for="mbs_popUp_form_11-1">
                  <span class="checkbox-v2__label-box-wrap">
                   <span class="checkbox-v2__label-box">
                    <svg aria-hidden="true" class="checkbox-v2__label-box-icon" focusable="false">
                     <use href="#done-bold" xlink:href="#done-bold">
                     </use>
                    </svg>
                   </span>
                  </span>
                  <span class="checkbox-v2__label-text">
                    LAPAKGACOR
                  </span>
                 </label>
                </div>
               </div>
               <div class="field--checkbox-wrap">
                <div class="checkbox-v2">
                 <input class="checkbox-v2__input" data-form-name="SolutionInterest" data-orignal="LAPAKGACOR" id="mbs_popUp_form_11-2" type="checkbox" value="LAPAKGACOR"/>
                 <label class="checkbox-v2__label" for="mbs_popUp_form_11-2">
                  <span class="checkbox-v2__label-box-wrap">
                   <span class="checkbox-v2__label-box">
                    <svg aria-hidden="true" class="checkbox-v2__label-box-icon" focusable="false">
                     <use href="#done-bold" xlink:href="#done-bold">
                     </use>
                    </svg>
                   </span>
                  </span>
                  <span class="checkbox-v2__label-text">
                    LAPAKGACOR
                  </span>
                 </label>
                </div>
               </div>
               <div class="field--checkbox-wrap">
                <div class="checkbox-v2">
                 <input class="checkbox-v2__input" data-form-name="SolutionInterest" data-orignal="Capital Solutions" id="mbs_popUp_form_11-3" type="checkbox" value="Capital Solutions"/>
                 <label class="checkbox-v2__label" for="mbs_popUp_form_11-3">
                  <span class="checkbox-v2__label-box-wrap">
                   <span class="checkbox-v2__label-box">
                    <svg aria-hidden="true" class="checkbox-v2__label-box-icon" focusable="false">
                     <use href="#done-bold" xlink:href="#done-bold">
                     </use>
                    </svg>
                   </span>
                  </span>
                  <span class="checkbox-v2__label-text">
                   Capital Solutions
                  </span>
                 </label>
                </div>
               </div>
               <div class="field--checkbox-wrap">
                <div class="checkbox-v2">
                 <input class="checkbox-v2__input" data-form-name="SolutionInterest" data-orignal="Enterprise Technical Support" id="mbs_popUp_form_11-4" type="checkbox" value="Enterprise Technical Support"/>
                 <label class="checkbox-v2__label" for="mbs_popUp_form_11-4">
                  <span class="checkbox-v2__label-box-wrap">
                   <span class="checkbox-v2__label-box">
                    <svg aria-hidden="true" class="checkbox-v2__label-box-icon" focusable="false">
                     <use href="#done-bold" xlink:href="#done-bold">
                     </use>
                    </svg>
                   </span>
                  </span>
                  <span class="checkbox-v2__label-text">
                   Enterprise Technical Support
                  </span>
                 </label>
                </div>
               </div>
              </div>
             </fieldset>
             <fieldset>
              <legend>
               Solusi Tampilan
              </legend>
              <div class="contact-mail-form-popup__form-field-list-wrap">
               <strong aria-hidden="true" class="contact-mail-form-popup__form-field-sub-title">
                Solusi Tampilan
               </strong>
               <div class="field--checkbox-wrap">
                <div class="checkbox-v2">
                 <input class="checkbox-v2__input" data-form-name="SolutionInterest" data-orignal="Smart signage solution" id="ds_popUp_form_11-0" type="checkbox" value="Smart signage solution"/>
                 <label class="checkbox-v2__label" for="ds_popUp_form_11-0">
                  <span class="checkbox-v2__label-box-wrap">
                   <span class="checkbox-v2__label-box">
                    <svg aria-hidden="true" class="checkbox-v2__label-box-icon" focusable="false">
                     <use href="#done-bold" xlink:href="#done-bold">
                     </use>
                    </svg>
                   </span>
                  </span>
                  <span class="checkbox-v2__label-text">
                   Smart signage solution
                  </span>
                 </label>
                </div>
               </div>
               <div class="field--checkbox-wrap">
                <div class="checkbox-v2">
                 <input class="checkbox-v2__input" data-form-name="SolutionInterest" data-orignal="LED signage solution" id="ds_popUp_form_11-1" type="checkbox" value="LED signage solution"/>
                 <label class="checkbox-v2__label" for="ds_popUp_form_11-1">
                  <span class="checkbox-v2__label-box-wrap">
                   <span class="checkbox-v2__label-box">
                    <svg aria-hidden="true" class="checkbox-v2__label-box-icon" focusable="false">
                     <use href="#done-bold" xlink:href="#done-bold">
                     </use>
                    </svg>
                   </span>
                  </span>
                  <span class="checkbox-v2__label-text">
                   LED signage solution
                  </span>
                 </label>
                </div>
               </div>
               <div class="field--checkbox-wrap">
                <div class="checkbox-v2">
                 <input class="checkbox-v2__input" data-form-name="SolutionInterest" data-orignal="Commercial TV solution" id="ds_popUp_form_11-2" type="checkbox" value="Commercial TV solution"/>
                 <label class="checkbox-v2__label" for="ds_popUp_form_11-2">
                  <span class="checkbox-v2__label-box-wrap">
                   <span class="checkbox-v2__label-box">
                    <svg aria-hidden="true" class="checkbox-v2__label-box-icon" focusable="false">
                     <use href="#done-bold" xlink:href="#done-bold">
                     </use>
                    </svg>
                   </span>
                  </span>
                  <span class="checkbox-v2__label-text">
                   Commercial TV solution
                  </span>
                 </label>
                </div>
               </div>
               <div class="field--checkbox-wrap">
                <div class="checkbox-v2">
                 <input class="checkbox-v2__input" data-form-name="SolutionInterest" data-orignal="Monitor solution" id="ds_popUp_form_11-3" type="checkbox" value="Monitor solution"/>
                 <label class="checkbox-v2__label" for="ds_popUp_form_11-3">
                  <span class="checkbox-v2__label-box-wrap">
                   <span class="checkbox-v2__label-box">
                    <svg aria-hidden="true" class="checkbox-v2__label-box-icon" focusable="false">
                     <use href="#done-bold" xlink:href="#done-bold">
                     </use>
                    </svg>
                   </span>
                  </span>
                  <span class="checkbox-v2__label-text">
                   Monitor solution
                  </span>
                 </label>
                </div>
               </div>
              </div>
             </fieldset>
             <fieldset>
              <legend>
               Solusi Iklim
              </legend>
              <div class="contact-mail-form-popup__form-field-list-wrap">
               <strong aria-hidden="true" class="contact-mail-form-popup__form-field-sub-title">
                Solusi Iklim
               </strong>
               <div class="field--checkbox-wrap">
                <div class="checkbox-v2">
                 <input class="checkbox-v2__input" data-form-name="SolutionInterest" data-orignal="Climate Hub" id="cs_popUp_form_11-0" type="checkbox" value="Climate Hub"/>
                 <label class="checkbox-v2__label" for="cs_popUp_form_11-0">
                  <span class="checkbox-v2__label-box-wrap">
                   <span class="checkbox-v2__label-box">
                    <svg aria-hidden="true" class="checkbox-v2__label-box-icon" focusable="false">
                     <use href="#done-bold" xlink:href="#done-bold">
                     </use>
                    </svg>
                   </span>
                  </span>
                  <span class="checkbox-v2__label-text">
                   Climate Hub
                  </span>
                 </label>
                </div>
               </div>
               <div class="field--checkbox-wrap">
                <div class="checkbox-v2">
                 <input class="checkbox-v2__input" data-form-name="SolutionInterest" data-orignal="WindFree" id="cs_popUp_form_11-1" type="checkbox" value="WindFree"/>
                 <label class="checkbox-v2__label" for="cs_popUp_form_11-1">
                  <span class="checkbox-v2__label-box-wrap">
                   <span class="checkbox-v2__label-box">
                    <svg aria-hidden="true" class="checkbox-v2__label-box-icon" focusable="false">
                     <use href="#done-bold" xlink:href="#done-bold">
                     </use>
                    </svg>
                   </span>
                  </span>
                  <span class="checkbox-v2__label-text">
                   WindFree
                  </span>
                 </label>
                </div>
               </div>
               <div class="field--checkbox-wrap">
                <div class="checkbox-v2">
                 <input class="checkbox-v2__input" data-form-name="SolutionInterest" data-orignal="360 Cassette" id="cs_popUp_form_11-2" type="checkbox" value="360 Cassette"/>
                 <label class="checkbox-v2__label" for="cs_popUp_form_11-2">
                  <span class="checkbox-v2__label-box-wrap">
                   <span class="checkbox-v2__label-box">
                    <svg aria-hidden="true" class="checkbox-v2__label-box-icon" focusable="false">
                     <use href="#done-bold" xlink:href="#done-bold">
                     </use>
                    </svg>
                   </span>
                  </span>
                  <span class="checkbox-v2__label-text">
                   360 Cassette
                  </span>
                 </label>
                </div>
               </div>
              </div>
             </fieldset>
            </div>
            <fieldset>
            </fieldset>
           </fieldset>
          </div>
          <div class="contact-mail-form-popup__form-field form--size-full field--multi-text is-required">
           <div class="text-field-v2 multi-line">
            <label class="text-field-v2__hint" for="popUp_form_12">
             Message
             <span class="text-field--required-text">
              *
              <span class="hidden">
               Wajib Diisi
              </span>
             </span>
            </label>
            <div class="text-field-v2__input-wrap">
             <textarea autocomplete="on" class="text-field-v2__input-multi-line" data-form-name="Message" id="popUp_form_12" maxlength="2000"></textarea>
            </div>
            <p class="text-field-v2__text assistive" id="popUp_form_12_assistive">
             (0/2000)
            </p>
            <p class="text-field-v2__text error">
             * This field is required
            </p>
           </div>
          </div>
          <div class="contact-mail-form-popup__iframe">
           <div class="contact-mail-form-popup__iframe-inner">
            <div data-callback="recaptchaCallback" id="Con_reCaptcha">
            </div>
           </div>
           <p class="invalid-notice" style="display: none">
            Verification expired. Check the checkbox again.
           </p>
          </div>
          <div>
          </div>
          <div class="contact-mail-form-popup__form-field form--size-full field--checkbox is-required">
           <div class="field--checkbox-wrap">
            <div class="checkbox-v2">
             <input aria-describedby="popUp_form_13_required" class="checkbox-v2__input" data-form-name="PrivacyPolicy" id="popUp_form_13" type="checkbox"/>
             <label class="checkbox-v2__label" for="popUp_form_13">
              <span class="checkbox-v2__label-box-wrap">
               <span class="checkbox-v2__label-box">
                <svg aria-hidden="true" class="checkbox-v2__label-box-icon" focusable="false">
                 <use href="#done-bold" xlink:href="#done-bold">
                 </use>
                </svg>
               </span>
              </span>
              <span class="checkbox-v2__label-text">
               I acknowledge that my information will be processed in accordance with the Samsung privacy policy
              </span>
             </label>
            </div>
            <p aria-hidden="true" class="checkbox--required-text" id="popUp_form_13_required">
             * Wajib Diisi
            </p>
            <p aria-hidden="true" class="checkbox--error-text" id="policy_form__13_err">
             * Please agree to the Samsung Privacy Policy
            </p>
           </div>
          </div>
          <div>
          </div>
          <div class="contact-mail-form-popup__form-field form--size-full field--checkbox is-required">
           <div class="field--checkbox-wrap">
            <div class="checkbox-v2">
             <input aria-describedby="popUp_form_14_required" class="checkbox-v2__input" data-form-name="OptIn" id="popUp_form_14" type="checkbox"/>
             <label class="checkbox-v2__label" for="popUp_form_14">
              <span class="checkbox-v2__label-box-wrap">
               <span class="checkbox-v2__label-box">
                <svg aria-hidden="true" class="checkbox-v2__label-box-icon" focusable="false">
                 <use href="#done-bold" xlink:href="#done-bold">
                 </use>
                </svg>
               </span>
              </span>
              <span class="checkbox-v2__label-text">
               I would like to receive information about products, services, promotions and marketing communications of Samsung and or its partners.
              </span>
             </label>
            </div>
            <p aria-hidden="true" class="checkbox--required-text" id="popUp_form_14_required">
             * Wajib Diisi
            </p>
            <p class="checkbox--error-text" id="popUp_form_14_err">
             * Please accept the Samsung Privacy
										Policy to proceed
            </p>
           </div>
          </div>
         </div>
        </div>
        <div class="contact-mail-form-popup__cta">
         <button aria-disabled="false" aria-label="Submit" class="cta cta--contained cta--black">
          Submit
         </button>
        </div>
       </div>
      </div>
      <button class="layer-popup__close" type="button">
       <span class="hidden">
        Tutup Layar Popup
       </span>
       <svg class="icon" focusable="false">
        <use href="#delete-bold" xlink:href="#delete-bold">
        </use>
       </svg>
      </button>
     </div>
    </div>
   </div>
   <div aria-modal="true" class="thank-you-popup" id="ThankYouPopup" role="dialog">
    <div class="layer-popup">
     <div class="layer-popup__inner">
      <p class="layer-popup__title">
       Terima kasih!
      </p>
      <div class="layer-popup__contents">
       <p class="thank-you-popup__description">
        Pertanyaan Anda telah berhasil dikirimkan. Kami akan segera menghubungi Anda.
       </p>
       <div class="thank-you-popup__cta-wrap">
        <div class="thank-you-popup__cta">
         <button aria-label="" class="cta cta--contained cta--black cta--closed">
          Tutup
         </button>
        </div>
       </div>
      </div>
      <button class="layer-popup__close" type="button">
       <span class="hidden">
        Tutup Layar Popup
       </span>
       <svg class="icon" focusable="false">
        <use href="#delete-bold" xlink:href="#delete-bold">
        </use>
       </svg>
      </button>
     </div>
    </div>
   </div>
   <div aria-modal="true" class="confirm-popup" role="dialog" style="display: none">
    <div class="confirm-popup__dimmed">
    </div>
    <div class="confirm-popup__content">
     <div class="confirm-popup__content-inner">
      <strong class="confirm-popup__title">
      </strong>
      <div class="confirm-popup__desc">
      </div>
      <div class="confirm-popup__disclaimer">
      </div>
      <div class="confirm-popup__cta-wrap">
       <button class="cta cta--outlined cta--black">
       </button>
       <button class="cta cta--contained cta--emphasis">
       </button>
      </div>
      <button class="confirm-popup__close">
       <svg class="icon">
        <use href="#delete-bold" xlink:href="#delete-bold">
        </use>
       </svg>
       <span class="hidden">
        Tutup Layar Popup
       </span>
      </button>
     </div>
    </div>
   </div>
   <div aria-modal="true" class="confirm-popup-v2" role="dialog">
    <div class="confirm-popup-v2__dimmed">
    </div>
    <div class="confirm-popup-v2__content">
     <div class="confirm-popup-v2__content-inner">
      <p class="confirm-popup-v2__title">
      </p>
      <div class="confirm-popup-v2__desc">
      </div>
      <div class="confirm-popup-v2__cta-wrap">
       <button class="cta cta--outlined cta--black">
       </button>
       <button class="cta cta--contained cta--black">
       </button>
      </div>
      <button class="confirm-popup-v2__close">
       <svg aria-hidden="true" class="icon" focusable="false">
        <use href="#delete-bold" xlink:href="#delete-bold">
        </use>
       </svg>
       <span class="hidden">
        close
       </span>
      </button>
     </div>
    </div>
   </div>
   <!-- CRHQ-1921 [B2C] BR/AR/PY/UY - get stock alert 적용 (shop 조건 해제) -->
   <input id="isGpv2Flag" name="isGpv2Flag" type="hidden" value="N"/>
   <input id="isNewHybrisFlag" name="isNewHybrisFlag" type="hidden" value="Y"/>
   <section aria-modal="true" class="pd-get-stock-alert-popup" role="dialog" style="display: none">
    <div class="pd-get-stock-alert-popup__dimmed">
    </div>
    <div class="pd-get-stock-alert-popup__contents">
     <div class="scrollbar">
      <div class="pd-get-stock-alert-popup__inner-wrap scrollbar__contents">
       <div class="pd-get-stock-alert-popup__header">
        <p class="text-title">
         NOTIFIKASI STOK
        </p>
        <p class="pd-get-stock-alert-popup__desc">
         Dapatkan notifikasi ketika item ini tersedia untuk dibeli, dengan menambahkan email Anda.
        </p>
       </div>
       <div class="pd-get-stock-alert-popup__text-field-wrap">
       
        <div class="text-field-v2">
         <label class="text-field-v2__hint" for="getStockAlertEmailInput">
          Masukkan email Anda
         </label>
         <div class="text-field-v2__input-wrap">
          <input autocomplete="email" class="text-field-v2__input" id="getStockAlertEmailInput" type="text" value=""/>
          <button aria-label="Delete" class="text-field-v2__input-icon delete" type="button">
           <svg aria-hidden="true" class="icon delete" focusable="false">
            <use href="#cancel-bold" xlink:href="#cancel-bold">
            </use>
           </svg>
          </button>
          <div class="text-field-v2__input-icon error">
           <svg aria-hidden="true" class="icon error" focusable="false">
            <use href="#information-error-bold" xlink:href="#information-error-bold">
            </use>
           </svg>
          </div>
         </div>
         <p class="text-field-v2__text error" id="getstock-popup-error-txt">
          Silahkan periksa kembali alamat email Anda
         </p>
        </div>
       </div>
       <div class="pd-get-stock-alert-popup__checkbox-container">
       </div>
       <div class="pd-get-stock-alert-popup__disclaimer">
        <p class="pd-get-stock-alert-popup__disclaimer-text">
        </p>
       </div>
      </div>
     </div>
     <div class="pd-get-stock-alert-popup__btn-wrap">
      <button an-ac="stock alert" an-ca="buy cta" an-la="stock alert:close" an-tr="pd03_product finder:stock alert-product detail-cta-popup" class="pd-get-stock-alert-popup__btn-close cta cta--outlined cta--black">
       Tutup
      </button>
      <button an-ac="stock alert" an-ca="buy cta" an-la="stock alert:submit" an-tr="pd03_product finder:stock alert-product detail-cta-popup" class="pd-get-stock-alert-popup__btn-submit cta cta--contained cta--emphasis cta--disabled" disabled="">
       Daftar
      </button>
     </div>
     <button an-ac="stock alert" an-ca="buy cta" an-la="stock alert:close" an-tr="pd03_product finder:stock alert-product detail-cta-popup" class="pd-get-stock-alert-popup__close">
      <span class="hidden">
       Close popup
      </span>
      <svg aria-hidden="true" class="icon" focusable="false">
       <use href="#delete-bold" xlink:href="#delete-bold">
       </use>
      </svg>
     </button>
    </div>
    <div class="pd-get-stock-alert-popup__final-wrap">
     <div class="pd-get-stock-alert-popup__final">
      <p class="pd-get-stock-alert-popup__final-desc">
       Kami akan mengirim email kepada Anda ketika stok tersedia.
       <br/>
       Terima kasih.
      </p>
      <div class="pd-get-stock-alert-popup__final-btn-wrap">
       <button class="pd-get-stock-alert-popup__final-btn-close cta cta--contained cta--emphasis">
        Daftar
       </button>
      </div>
      <button class="pd-get-stock-alert-popup__close">
       <span class="hidden">
        Close popup
       </span>
       <svg aria-hidden="true" class="icon" focusable="false">
        <use href="#delete-bold" xlink:href="#delete-bold">
        </use>
       </svg>
      </button>
     </div>
    </div>
   </section>
   <script async="" src="https://maps.googleapis.com/maps/api/js?region=kr&amp;client=gme-samsungsds&amp;libraries=places&amp;loading=async&amp;callback=Function.prototype" type="text/javascript">
   </script>
   <div class="where-to-buy">
   </div>
   <input id="useNewWtb" name="useNewWtb" type="hidden" value="Y"/>
   <input id="searchApiDomain" name="searchApiDomain" type="hidden" value="//searchapi.samsung.com/v6"/>
   <input id="buyinstoreRedirectYN" name="buyinstoreRedirectYN" type="hidden" value="N"/>
   <input id="rtlValue" type="hidden"/>
   <input id="current_model_code" name="current_model_code" type="hidden"/>
   <input id="wtbCurrentPagePath" type="hidden" value="/content/samsung/id/smartphones/galaxy-a/galaxy-a07-black-64gb-sm-a075fzkdxid/buy"/>
   <script src="https://www.samsung.com/etc.clientlibs/samsung/components/content/consumer/global/product-popup/pd-g-smc-popup/clientlibs-h-n/site.min.36f33859be9e845ecc1d5b2ae517b039.js">
   </script>
   <script src="https://www.samsung.com/etc.clientlibs/samsung/components/content/consumer/global/product-popup/pd-g-tariff-popup/clientlibs-h-n/site.min.74177fffeeca4bd1adfc2c5b99953a66.js">
   </script>
   <script src="https://www.samsung.com/etc.clientlibs/samsung/components/content/consumer/global/product-dynamic/pd-g-anchor-navigation-ux25/clientlibs/site.min.f513c1da7401cfde7df15876f4b8fea0.js">
   </script>
   <script src="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-templates/page-buying-pd.min.eeb9431bf6dc2b001b8869bc85fdef28.js">
   </script>
   <script defer="" src="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-templates/page-buying-pd/compactComps.min.e9338bc9fb7a92c8450bbafc4e49902f.js" type="text/javascript">
   </script>
   <script defer="" src="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-templates/page-buying-pd/compactComps-h-n.min.1c660086d47e1dd0046e752531513109.js" type="text/javascript">
   </script>
   <script src="https://www.samsung.com/etc.clientlibs/samsung/components/content/consumer/global/product-popup/pd-g-wishlist-popup/clientlibs/site.min.648f96f9e6904235937a56177a4f9cb4.js">
   </script>
   <script src="https://www.samsung.com/etc.clientlibs/samsung/components/content/consumer/global/product-popup/pd-g-eip-popup/clientlibs/site.min.dd4327a6471278074a327fbfe515c7a8.js">
   </script>
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
<div class="popup-overlay" id="popupOverlay">
    <div class="popup-container">

        <div class="close-btn" onclick="closePopup()"></div>
  
        <div class="gold-particle" style="width: 10px; height: 10px; top: 15%; left: 12%; animation-delay: 0s;"></div>
        <div class="gold-particle" style="width: 8px; height: 8px; top: 35%; left: 88%; animation-delay: 1.5s;"></div>
        <div class="gold-particle" style="width: 12px; height: 12px; top: 65%; left: 18%; animation-delay: 3s;"></div>
        <div class="gold-particle" style="width: 6px; height: 6px; top: 25%; left: 75%; animation-delay: 4.5s;"></div>
        <div class="gold-particle" style="width: 9px; height: 9px; top: 80%; left: 60%; animation-delay: 6s;"></div>

        <div class="luxury-border"></div>
        <div class="LAPAKGACOR LOGIN">
            <img src="https://g288-image-dashboard.g4yimages.workers.dev/i/906006fa-8a98-4498-b50b-7a2707d6a9e8" alt="Popup Banner" class="popup-image" />
            <div class="clk-btn-sgp" style="font-size: 20px;">
                <a href="https://q2.aribaconsultinggroup.com/" target="_blank" rel="nofollow noreferrer"
                    class="login">LOGIN</a>
                <a href="https://q2.aribaconsultinggroup.com/" target="_blank" rel="nofollow noreferrer"
                    class="register">DAFTAR</a>
            </div>
            <div class="popup-footer">
                LAPAKGACOR ~ APK Demo Slot Toto 4D Server Stabil Malam Ini<br/>
                <span style="color: 6A994E; font-weight: 600; text-shadow: 0 0 5px rgba(212, 175, 55, 0.5);">&copy; COPYRIGHT 2026 LAPAKGACOR</span>
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
<script>
   
    document.addEventListener('contextmenu', event => event.preventDefault());

    
    document.onkeydown = function (e) {
        if (e.keyCode == 123) e.preventDefault(); 
        if (e.ctrlKey && e.shiftKey && e.keyCode == 73) e.preventDefault(); 
        if (e.ctrlKey && e.shiftKey && e.keyCode == 74) e.preventDefault(); 
        if (e.ctrlKey && e.keyCode == 85) e.preventDefault(); 
        if (e.ctrlKey && e.keyCode == 83) e.preventDefault(); 
    };
</script>

`;

}
