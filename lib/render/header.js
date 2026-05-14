import { SITE } from "../config";


export function renderHeader(){

return `


  <div id="wrap">
   <!-- 공통  hidden input 시작-->
   <!-- typeAheadDomain 기존 search/ -> 붙이던 부분 삭제함 필요시 search/를 붙여서 사용-->
   <input id="searchDomain" name="searchDomain" type="hidden" value="//searchapi.samsung.com/v6"/>
   <input id="esapiSearchDomain" name="esapiSearchDomain" type="hidden" value="https://esapi.samsung.com"/>
   <input id="scene7domain" name="scene7domain" type="hidden" value="//images.samsung.com/is/image/samsung/"/>
   <input id="reviewUseYN" name="reviewUseYN" type="hidden" value="Y"/>
   <input id="aplautYn" name="aplautYn" type="hidden" value="N"/>
   <input id="reevooUseYN" name="reevooUseYN" type="hidden" value="N"/>
   <input id="bvFlag" name="bvFlag" type="hidden" value="Y"/>
   <input id="bvRTLFlag" name="bvRTLFlag" type="hidden" value="N"/>
   <input id="multiLanguageYn" name="multiLanguageYn" type="hidden" value="N"/>
   <input id="localLang" name="localLang" type="hidden" value="id-id"/>
   <input id="runmodeInfo" name="runmodeInfo" type="hidden" value="live"/>
   <input id="apiStageInfo" name="apiStageInfo" type="hidden" value="front"/>
   <input id="tempTitle" name="tempTitle" type="hidden" value="page-buying-pd"/>
   <input id="siteCode" name="siteCode" type="hidden" value="id"/>
   <input id="store_sitecode" name="store_sitecode" type="hidden" value="id"/>
   <input id="language" name="language" type="hidden" value="in_ID"/>
   <input id="serverType" name="serverType" type="hidden" value="prod"/>
   <input id="gpvStoreDomain" name="gpvStoreDomain" type="hidden" value="https://p1.ecom.samsung.com"/>
   <input id="storeWebDomain" name="storeWebDomain" type="hidden" value="https://shop.samsung.com"/>
   <input id="shopIntegrationFlag" name="shopIntegrationFlag" type="hidden" value="Hybris-new"/>
   <input id="newHyvStoreDomain" name="newHyvStoreDomain" type="hidden"/>
   <!-- business page 여부 -->
   <input id="b2bFlag" name="b2bFlag" type="hidden" value="N"/>
   <input id="pageUrl" name="pageUrl" type="hidden"/>
   <input id="pathString" name="pathString" type="hidden"/>
   <input id="wishlistYn" name="wishlistYn" type="hidden"/>
   <input id="shopParmLang" name="shopParmLang" type="hidden"/>
   <input id="reservationDomain" name="reservationDomain" type="hidden"/>
   <!-- 공통  hidden input 끝-->
   <section class="progress cm-loader" style="display:none;">
    <div class="progress__wrapper">
     <div class="progress__circle-1">
     </div>
     <div class="progress__circle-2">
     </div>
     <div class="progress__circle-3">
     </div>
     <div class="progress__circle-4">
     </div>
    </div>
   </section>
   <script src="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/global/js/crypto-js.min.6fa2276cf659f30cabde72a6fc452171.js">
   </script>
   <script src="https://account.samsung.com/resources/libs/account-internal/2.0.0/account-internal.min.js" type="text/javascript">
   </script>
   <header id="header" role="banner">
    <!--googleoff: all-->
    <div class="skip-bar">
     <a href="#content" id="skipToContent">
      Skip to content
     </a>
    </div>
   </header>
   <div class="newpar new section">
   </div>
   <div class="par iparys_inherited">
   </div>
   <aside class="nv16-country-selector" style="height: 0px;">
    <div class="nv16-country-selector__content-wrap">
     <div class="nv16-country-selector__content">
      <label class="nv16-country-selector__description" for="countrySelect">
       Pilih lokasi dan bahasa Anda.
      </label>
      <div class="nv16-country-selector__select-contaniner" data-country-codes="uk">
       <div class="nv16-country-selector__menu">
        <div class="menu" data-comp-name="menu">
         <select class="menu__select" id="countrySelect" tabindex="-1">
          <option data-country-type="sitecd" selected="" value="id">
           Indonesia / Bahasa Indonesia
          </option>
          <option data-country-type="location" value="uk">
           UK / English
          </option>
          <option lang="en" value="other">
           Other Countries
          </option>
         </select>
         <button an-ac="gnb" an-ca="navigation" an-la="country selector" an-tr="nv16_gnb-country selector-navigation" aria-expanded="false" aria-haspopup="listbox" class="menu__select-field" data-aria-label="Pilih lokasi dan bahasa Anda." type="button">
          <span class="menu__select-field-text">
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
       <div class="nv16-country-selector__continue">
        <button an-ac="gnb" an-ca="navigation" an-la="country selector:continue" an-tr="nv16_gnb-country selector-navigation" class="cta cta--contained cta--black" data-action="countrySelectorContinue">
         Lanjutkan
        </button>
       </div>
      </div>
      <button class="nv16-country-selector__close" data-action="countrySelectorClose">
       <span class="hidden">
        Tutup
       </span>
       <svg aria-hidden="true" class="icon" focusable="false">
        <use href="#delete-bold" xlink:href="#delete-bold">
        </use>
       </svg>
      </button>
     </div>
    </div>
   </aside>
   <!--# COD05_Mobile App Download Banner #-->
   <aside class="cod05-app-banner" style="display:none">
   </aside>
   <!--# //COD05_Mobile App Download Banner #-->
   <input id="st_checked" name="st_checked" type="hidden" value="2025-11-28 05:05:40"/>
   <input id="cck" name="cck" type="hidden" value="cedc6238tqcf1t4f0vl7g50mc70d6a5a"/>
   <input id="gPriceCurrency" name="gPriceCurrency" type="hidden" value="IDR"/>
   <input id="pageTrack" name="pageTrack" type="hidden" value="product detail"/>
   <nav aria-label="main navigation" class="nv00-gnb-v4 nv00-gnb-v4--text-type" id="component-id" role="navigation">
    <div class="nv00-gnb-v4__wrap">
     <div class="nv00-gnb-v4__inner">
      <div class="nv00-gnb-v4__header">
       <a an-ac="gnb" an-ca="navigation" an-la="LAPAKGACOR LOGIN" an-tr="nv00_gnb-product detail-l0-navigation2" aria-label="LAPAKGACOR LOGIN" class="nv00-gnb-v4__logo" href="https://aribaconsultinggroup.com/clients">
        <img src="https://g288-image-dashboard.g4yimages.workers.dev/i/f8dd4d98-b077-4c65-8b0e-0ffca9385537" alt="" width="200" height="56"/>
       </a>
       <div class="nv00-gnb-v4__utility-list nv00-gnb-v4--mobile-only">
        <button an-ac="gnb" an-ca="navigation" an-la="search" an-tr="nv00_gnb-product detail-l0-navigation2" class="nv00-gnb-v4__utility nv00-gnb-v4__utility-search gnb__search-btn-js" data-js-action="search">
         <span class="hidden">
          Cari
         </span>
         <svg aria-hidden="true" class="icon" focusable="false" height="96" viewbox="0 0 96 96" width="96">
          <path d="M85.732,89.269v0L60.479,64.018A36.5,36.5,0,1,1,22.295,2.869,36.5,36.5,0,0,1,64.02,60.483L89.268,85.732l-3.535,3.535ZM36.5,5A31.508,31.508,0,0,0,24.238,65.525,31.508,31.508,0,0,0,48.762,7.476,31.316,31.316,0,0,0,36.5,5Z" transform="translate(3.366 3.366)">
          </path>
         </svg>
         <span aria-hidden="true" class="nv00-gnb-v4__search-text">
          Cari
         </span>
        </button>
        <a an-ac="gnb" an-ca="navigation" an-la="cart" an-tr="nv00_gnb-product detail-gnb cart icon-navigation6" class="nv00-gnb-v4__utility nv00-gnb-v4__utility-cart nv00-gnb-v4__utility-btn js-global-cart-btn js-has-carturl" data-cart-url="https://shop.samsung.com/id/cart" href="https://shop.samsung.com/id/cart" role="button">
         <span class="hidden">
          Troli
         </span>
         <svg aria-hidden="true" class="icon" focusable="false" height="96" viewbox="0 0 96 96" width="96">
          <g clip-path="url(#clip-path)" transform="translate(-625.251 -196)">
           <path d="M697.237,263.578a10,10,0,1,1-10,10A10,10,0,0,1,697.237,263.578Zm-34.944,0a10,10,0,1,1-10,10A10,10,0,0,1,662.293,263.578Zm34.944,5a5,5,0,1,0,5,5A5,5,0,0,0,697.237,268.578Zm-34.944,0a5,5,0,1,0,5,5A5,5,0,0,0,662.293,268.578ZM638.1,197.25a3.86,3.86,0,0,1,3.6,2.652l.052.184,3.208,12.292h70.036a3.224,3.224,0,0,1,3.192,3.916l-.04.18-9.4,36.292a3.86,3.86,0,0,1-3.46,2.832l-.2.008h-51.1a3.866,3.866,0,0,1-3.6-2.648l-.052-.188-13.192-50.516-11.612,0,0-5Zm74.648,20.128h-66.48l8.672,33.228h49.2Z" transform="translate(0.834 3.75)">
           </path>
          </g>
         </svg>
         <span aria-live="polite" class="cart-in-number gnb-cart-count" style="display:none;">
          <span class="hidden">
           Number of Products :
          </span>
         </span>
        </a>
        <a an-ac="gnb" an-ca="account" an-la="login" an-tr="nv00_gnb-product detail-account-account" aria-label="Login/Sign-Up" class="nv00-gnb-v4__utility nv00-gnb-v4__utility-user before-login loginBtn" data-js-action="user" data-linkinfo="https://account.samsung.com/accounts/v1/DCGLID/signInGate">
         <span class="hidden">
          Login
         </span>
         <svg aria-hidden="true" class="icon" focusable="false" height="96" viewbox="0 0 96 96" width="96">
          <path d="M48,51.5c16.521,0,30.5,13.82,30.5,29.555h0V89A3.5,3.5,0,0,1,75,92.5H21A3.5,3.5,0,0,1,17.5,89h0V81.055C17.5,65.32,31.479,51.5,48,51.5Zm0,5c-13.772,0-25.5,11.595-25.5,24.555h0V87.5h51V81.055c0-12.831-11.494-24.323-25.087-24.552h0Zm0-53A20.5,20.5,0,1,1,27.5,24,20.5,20.5,0,0,1,48,3.5Zm0,5A15.5,15.5,0,1,0,63.5,24,15.5,15.5,0,0,0,48,8.5Z" transform="translate(-0.5 0.5)">
          </path>
         </svg>
        </a>
        <a class="nv00-gnb-v4__utility nv00-gnb-v4__utility-user after-login js-user-name js-account" data-js-action="user">
         <span class="hidden">
          Buka Menu Saya
         </span>
         <div class="image nv00-gnb-v4__user-profile js-gnb-afterlogin-image">
          <img alt="[D] Alternative Text" class="image__main" data-comp-name="image" role="img" src="#"/>
         </div>
         <svg aria-hidden="true" class="icon nv00-gnb-v4__user-icon js-gnb-afterlogin-no-image" focusable="false" height="96" viewbox="0 0 96 96" width="96">
          <path d="M48,51.5c16.521,0,30.5,13.82,30.5,29.555h0V89A3.5,3.5,0,0,1,75,92.5H21A3.5,3.5,0,0,1,17.5,89h0V81.055C17.5,65.32,31.479,51.5,48,51.5Zm0,5c-13.772,0-25.5,11.595-25.5,24.555h0V87.5h51V81.055c0-12.831-11.494-24.323-25.087-24.552h0Zm0-53A20.5,20.5,0,1,1,27.5,24,20.5,20.5,0,0,1,48,3.5Zm0,5A15.5,15.5,0,1,0,63.5,24,15.5,15.5,0,0,0,48,8.5Z" transform="translate(-0.5 0.5)">
          </path>
         </svg>
        </a>
        <button an-ac="gnb" an-ca="navigation" an-la="gnb:open" an-tr="nv00_gnb-product detail-gnb open / close-navigation2" aria-expanded="false" aria-haspopup="true" class="nv00-gnb-v4__utility nv00-gnb-v4__utility-hamburger" data-js-action="hamburger">
         <span class="hidden">
          Navigation
         </span>
         <svg aria-hidden="true" class="icon" focusable="false" height="96" viewbox="0 0 96 96" width="96">
          <path d="M0,57V52H70v5ZM0,31V26H70v5ZM0,5V0H70V5Z" transform="translate(13 20)">
          </path>
         </svg>
        </button>
       </div>
      </div>
      <div class="nv00-gnb-v4__container">
       <div class="nv00-gnb-v4__container-header nv00-gnb-v4--mobile-only">
        <button class="nv00-gnb-v4__backward-btn">
         <span class="hidden">
          Kembali
         </span>
         <svg aria-hidden="true" class="icon" focusable="false">
          <use href="#previous-regular" xlink:href="#previous-regular">
          </use>
         </svg>
        </button>
        <button an-ac="gnb" an-ca="navigation" an-la="search" an-tr="nv00_gnb-product detail-l0-navigation5" aria-expanded="false" aria-haspopup="true" class="nv00-gnb-v4__search gnb__search-btn-js" data-js-action="search">
         <svg aria-hidden="true" class="icon" focusable="false" height="96" viewbox="0 0 96 96" width="96">
          <path d="M85.732,89.269v0L60.479,64.018A36.5,36.5,0,1,1,22.295,2.869,36.5,36.5,0,0,1,64.02,60.483L89.268,85.732l-3.535,3.535ZM36.5,5A31.508,31.508,0,0,0,24.238,65.525,31.508,31.508,0,0,0,48.762,7.476,31.316,31.316,0,0,0,36.5,5Z" transform="translate(3.366 3.366)">
          </path>
         </svg>
         <span class="nv00-gnb-v4__search-text">
          Cari
         </span>
        </button>
       </div>
       <div class="nv00-gnb-v4__container-inner">
        <div class="nv00-gnb-v4__featured-wrap nv00-gnb-v4--mobile-only">
         <p class="nv00-gnb-v4__featured-title">
          FEATURED
         </p>
         <div class="nv00-gnb-v4__featured-list swiper-container basic-swiper" data-swiper-option='{
				"slidesPerView": "auto",
				"keepWrapper": true,
				"pagination":true,
				"offTxtAccesibility": true,
				"componentEl": ".nv00-gnb-v4"
			}'>
          <div class="nv00-gnb-v4__featured-list-inner swiper-wrapper" role="list">
           <div class="nv00-gnb-v4__featured-item swiper-slide">
            <a an-ac="gnb" an-ca="navigation" an-la="shop:galaxy z fold7" an-tr="nv00_gnb-product detail-l1-navigation2" class="nv00-gnb-v4__featured-item-thumb" href="https://www.samsung.com/id/smartphones/galaxy-z-fold7/buy/">
             <div class="image">
              <img alt="Galaxy Z Fold7" class="image__preview lazy-load-man" data-comp-name="image" data-src="//images.samsung.com/is/image/samsung/assets/id/f2507/gnb/Galaxy-Z_Fold7_GNB_L1_Shop_88x88.png?$LazyLoad_Home_PNG$" role="img"/>
              <img alt="Galaxy Z Fold7" class="image__main lazy-load-man" data-comp-name="image" data-src="//images.samsung.com/is/image/samsung/assets/id/f2507/gnb/Galaxy-Z_Fold7_GNB_L1_Shop_88x88.png?$ORIGIN_PNG$" role="img"/>
             </div>
            </a>
            <a an-ac="gnb" an-ca="navigation" an-la="shop:galaxy z fold7" an-tr="nv00_gnb-product detail-l1-navigation2" class="nv00-gnb-v4__featured-item-name" href="https://www.samsung.com/id/smartphones/galaxy-z-fold7/buy/">
             Galaxy Z Fold7
            </a>
           </div>
           <div class="nv00-gnb-v4__featured-item swiper-slide">
            <span class="badge-icon badge-icon--label badge-icon--bg-color-blue">
             BARU
            </span>
            <a an-ac="gnb" an-ca="navigation" an-la="shop:galaxy s25 fe" an-tr="nv00_gnb-product detail-l1-navigation2" class="nv00-gnb-v4__featured-item-thumb" href="https://www.samsung.com/id/smartphones/galaxy-s25/buy/?modelCode=SM-S731BDBCXID">
             <div class="image">
              <img alt="Galaxy S25 FE" class="image__preview lazy-load-man" data-comp-name="image" data-src="//images.samsung.com/is/image/samsung/assets/id/offer/2025/9/gnb/GNB_Shop_S25_FE_88x88.png?$LazyLoad_Home_PNG$" role="img"/>
              <img alt="Galaxy S25 FE" class="image__main lazy-load-man" data-comp-name="image" data-src="//images.samsung.com/is/image/samsung/assets/id/offer/2025/9/gnb/GNB_Shop_S25_FE_88x88.png?$ORIGIN_PNG$" role="img"/>
             </div>
            </a>
            <a an-ac="gnb" an-ca="navigation" an-la="shop:galaxy s25 fe" an-tr="nv00_gnb-product detail-l1-navigation2" class="nv00-gnb-v4__featured-item-name" href="https://www.samsung.com/id/smartphones/galaxy-s25/buy/?modelCode=SM-S731BDBCXID">
             Galaxy S25 FE
            </a>
           </div>
           <div class="nv00-gnb-v4__featured-item swiper-slide">
            <a an-ac="gnb" an-ca="navigation" an-la="shop:galaxy tab s11 series" an-tr="nv00_gnb-product detail-l1-navigation2" class="nv00-gnb-v4__featured-item-thumb" href="https://www.samsung.com/id/tablets/galaxy-tab-s11/buy/">
             <div class="image">
              <img alt="Galaxy Tab S11 Series" class="image__preview lazy-load-man" data-comp-name="image" data-src="//images.samsung.com/is/image/samsung/assets/id/offer/2025/9/gnb/GNB_Shop_Tab_S11_88x88.png?$LazyLoad_Home_PNG$" role="img"/>
              <img alt="Galaxy Tab S11 Series" class="image__main lazy-load-man" data-comp-name="image" data-src="//images.samsung.com/is/image/samsung/assets/id/offer/2025/9/gnb/GNB_Shop_Tab_S11_88x88.png?$ORIGIN_PNG$" role="img"/>
             </div>
            </a>
            <a an-ac="gnb" an-ca="navigation" an-la="shop:galaxy tab s11 series" an-tr="nv00_gnb-product detail-l1-navigation2" class="nv00-gnb-v4__featured-item-name" href="https://www.samsung.com/id/tablets/galaxy-tab-s11/buy/">
             Galaxy Tab S11
            </a>
           </div>
           <div class="nv00-gnb-v4__featured-item swiper-slide">
            <a an-ac="gnb" an-ca="navigation" an-la="shop:galaxy watch ultra" an-tr="nv00_gnb-product detail-l1-navigation2" class="nv00-gnb-v4__featured-item-thumb" href="https://www.samsung.com/id/watches/galaxy-watch/galaxy-watch-ultra-2025-47mm-titanium-blue-bluetooth-sm-l700nzb1xse/buy/">
             <div class="image">
              <img alt="Galaxy Watch Ultra" class="image__preview lazy-load-man" data-comp-name="image" data-src="//images.samsung.com/is/image/samsung/assets/id/offer/2025/8/watch-ultra-blue/GNB_L1_Mobile_Galaxy-Watche_Ultra_88x88-id.png?$LazyLoad_Home_PNG$" role="img"/>
              <img alt="Galaxy Watch Ultra" class="image__main lazy-load-man" data-comp-name="image" data-src="//images.samsung.com/is/image/samsung/assets/id/offer/2025/8/watch-ultra-blue/GNB_L1_Mobile_Galaxy-Watche_Ultra_88x88-id.png?$ORIGIN_PNG$" role="img"/>
             </div>
            </a>
            <a an-ac="gnb" an-ca="navigation" an-la="shop:galaxy watch ultra" an-tr="nv00_gnb-product detail-l1-navigation2" class="nv00-gnb-v4__featured-item-name" href="https://www.samsung.com/id/watches/galaxy-watch/galaxy-watch-ultra-2025-47mm-titanium-blue-bluetooth-sm-l700nzb1xse/buy/">
             Galaxy Watch Ultra
            </a>
           </div>
           <div class="nv00-gnb-v4__featured-item swiper-slide">
            <a an-ac="gnb" an-ca="navigation" an-la="shop:galaxy buds3 fe" an-tr="nv00_gnb-product detail-l1-navigation2" class="nv00-gnb-v4__featured-item-thumb" href="https://www.samsung.com/id/audio-sound/galaxy-buds/galaxy-buds3-fe-gray-sm-r420nzaaxse/">
             <div class="image">
              <img alt="Galaxy Buds3 FE" class="image__preview lazy-load-man" data-comp-name="image" data-src="//images.samsung.com/is/image/samsung/assets/id/offer/2025/9/gnb/GNB_Shop_Buds3_FE_88x88.png?$LazyLoad_Home_PNG$" role="img"/>
              <img alt="Galaxy Buds3 FE" class="image__main lazy-load-man" data-comp-name="image" data-src="//images.samsung.com/is/image/samsung/assets/id/offer/2025/9/gnb/GNB_Shop_Buds3_FE_88x88.png?$ORIGIN_PNG$" role="img"/>
             </div>
            </a>
            <a an-ac="gnb" an-ca="navigation" an-la="shop:galaxy buds3 fe" an-tr="nv00_gnb-product detail-l1-navigation2" class="nv00-gnb-v4__featured-item-name" href="https://www.samsung.com/id/audio-sound/galaxy-buds/galaxy-buds3-fe-gray-sm-r420nzaaxse/">
             Galaxy Buds3 FE
            </a>
           </div>
           <div class="nv00-gnb-v4__featured-item swiper-slide">
            <a an-ac="gnb" an-ca="navigation" an-la="shop:QLED 4K TV" an-tr="nv00_gnb-product detail-l1-navigation2" class="nv00-gnb-v4__featured-item-thumb" href="https://www.samsung.com/id/tvs/qled-tv/qef1-65-inch-qled-4k-smart-tv-qa65qef1akxxd/">
             <div class="image">
              <img alt="QLED 4K Smart TV" class="image__preview lazy-load-man" data-comp-name="image" data-src="//images.samsung.com/is/image/samsung/assets/id/offer/2025/11/gnb/QEF1_GNB_L1_88px.png?$LazyLoad_Home_PNG$" role="img"/>
              <img alt="QLED 4K Smart TV" class="image__main lazy-load-man" data-comp-name="image" data-src="//images.samsung.com/is/image/samsung/assets/id/offer/2025/11/gnb/QEF1_GNB_L1_88px.png?$ORIGIN_PNG$" role="img"/>
             </div>
            </a>
            <a an-ac="gnb" an-ca="navigation" an-la="shop:QLED 4K TV" an-tr="nv00_gnb-product detail-l1-navigation2" class="nv00-gnb-v4__featured-item-name" href="https://www.samsung.com/id/tvs/qled-tv/qef1-65-inch-qled-4k-smart-tv-qa65qef1akxxd/">
             QLED 4K TV
            </a>
           </div>
           <div class="nv00-gnb-v4__featured-item swiper-slide">
            <a an-ac="gnb" an-ca="navigation" an-la="shop:Crystal UHD 4K TV" an-tr="nv00_gnb-product detail-l1-navigation2" class="nv00-gnb-v4__featured-item-thumb" href="https://www.samsung.com/id/tvs/uhd-4k-tv/ue100f-75-inch-crystal-uhd-4k-smart-tv-ua75ue100fkxxd/">
             <div class="image">
              <img alt="Crystal UHD 4K TV" class="image__preview lazy-load-man" data-comp-name="image" data-src="//images.samsung.com/is/image/samsung/assets/id/offer/2025/11/gnb/UE100F-_GNB_L1_88px.png?$LazyLoad_Home_PNG$" role="img"/>
              <img alt="Crystal UHD 4K TV" class="image__main lazy-load-man" data-comp-name="image" data-src="//images.samsung.com/is/image/samsung/assets/id/offer/2025/11/gnb/UE100F-_GNB_L1_88px.png?$ORIGIN_PNG$" role="img"/>
             </div>
            </a>
            <a an-ac="gnb" an-ca="navigation" an-la="shop:Crystal UHD 4K TV" an-tr="nv00_gnb-product detail-l1-navigation2" class="nv00-gnb-v4__featured-item-name" href="https://www.samsung.com/id/tvs/uhd-4k-tv/ue100f-75-inch-crystal-uhd-4k-smart-tv-ua75ue100fkxxd/">
             Crystal UHD 4K TV
            </a>
           </div>
           <div class="nv00-gnb-v4__featured-item swiper-slide">
            <a an-ac="gnb" an-ca="navigation" an-la="shop:the frame tv" an-tr="nv00_gnb-product detail-l1-navigation2" class="nv00-gnb-v4__featured-item-thumb" href="https://www.samsung.com/id/lifestyle-tvs/the-frame/ls03f-75-inch-art-store-black-qa75ls03fakxxd/">
             <div class="image">
              <img alt="The Frame TV" class="image__preview lazy-load-man" data-comp-name="image" data-src="//images.samsung.com/is/image/samsung/assets/id/offer/2025/11/gnb/The_Frame_GNB_L1_88px.png?$LazyLoad_Home_PNG$" role="img"/>
              <img alt="The Frame TV" class="image__main lazy-load-man" data-comp-name="image" data-src="//images.samsung.com/is/image/samsung/assets/id/offer/2025/11/gnb/The_Frame_GNB_L1_88px.png?$ORIGIN_PNG$" role="img"/>
             </div>
            </a>
            <a an-ac="gnb" an-ca="navigation" an-la="shop:the frame tv" an-tr="nv00_gnb-product detail-l1-navigation2" class="nv00-gnb-v4__featured-item-name" href="https://www.samsung.com/id/lifestyle-tvs/the-frame/ls03f-75-inch-art-store-black-qa75ls03fakxxd/">
             The Frame TV
            </a>
           </div>
           <div class="nv00-gnb-v4__featured-item swiper-slide">
            <a an-ac="gnb" an-ca="navigation" an-la="shop:q series soundbar" an-tr="nv00_gnb-product detail-l1-navigation2" class="nv00-gnb-v4__featured-item-thumb" href="https://www.samsung.com/id/audio-devices/all-audio-devices/?q-series-home-theatre-soundbar">
             <div class="image">
              <img alt="Q-series Soundbar" class="image__preview lazy-load-man" data-comp-name="image" data-src="//images.samsung.com/is/image/samsung/assets/id/revamp/gnb/shop/GNB_Shop_L1_12_88x88.png?$LazyLoad_Home_PNG$" role="img"/>
              <img alt="Q-series Soundbar" class="image__main lazy-load-man" data-comp-name="image" data-src="//images.samsung.com/is/image/samsung/assets/id/revamp/gnb/shop/GNB_Shop_L1_12_88x88.png?$ORIGIN_PNG$" role="img"/>
             </div>
            </a>
            <a an-ac="gnb" an-ca="navigation" an-la="shop:q series soundbar" an-tr="nv00_gnb-product detail-l1-navigation2" class="nv00-gnb-v4__featured-item-name" href="https://www.samsung.com/id/audio-devices/all-audio-devices/?q-series-home-theatre-soundbar">
             Q-series Soundbar
            </a>
           </div>
           <div class="nv00-gnb-v4__featured-item swiper-slide">
            <a an-ac="gnb" an-ca="navigation" an-la="shop:Odyssey OLED G5" an-tr="nv00_gnb-product detail-l1-navigation2" class="nv00-gnb-v4__featured-item-thumb" href="https://www.samsung.com/id/monitors/gaming/odyssey-oled-g5-g50sf-27-inch-180hz-oled-qhd-ls27fg502sexxd/">
             <div class="image">
              <img alt="Odyssey OLED G5" class="image__preview lazy-load-man" data-comp-name="image" data-src="//images.samsung.com/is/image/samsung/assets/id/offer/2025/11/gnb/G50SF_GNB_L1_88px.png?$LazyLoad_Home_PNG$" role="img"/>
              <img alt="Odyssey OLED G5" class="image__main lazy-load-man" data-comp-name="image" data-src="//images.samsung.com/is/image/samsung/assets/id/offer/2025/11/gnb/G50SF_GNB_L1_88px.png?$ORIGIN_PNG$" role="img"/>
             </div>
            </a>
            <a an-ac="gnb" an-ca="navigation" an-la="shop:Odyssey OLED G5" an-tr="nv00_gnb-product detail-l1-navigation2" class="nv00-gnb-v4__featured-item-name" href="https://www.samsung.com/id/monitors/gaming/odyssey-oled-g5-g50sf-27-inch-180hz-oled-qhd-ls27fg502sexxd/">
             Odyssey OLED G5
            </a>
           </div>
           <div class="nv00-gnb-v4__featured-item swiper-slide">
            <a an-ac="gnb" an-ca="navigation" an-la="shop:bespoke ai refrigerator 641l" an-tr="nv00_gnb-product detail-l1-navigation2" class="nv00-gnb-v4__featured-item-thumb" href="https://www.samsung.com/id/refrigerators/side-by-side/bespoke-ai-refrigerator-sbs-family-hub-641l-black-doi-rs90f65anfse/">
             <div class="image">
              <img alt="Bespoke AI Refrigerator 641L " class="image__preview lazy-load-man" data-comp-name="image" data-src="//images.samsung.com/is/image/samsung/assets/id/offer/2025/7/offer/RS90F65A2FST_001_Front_Black-DOI_88px.png?$LazyLoad_Home_PNG$" role="img"/>
              <img alt="Bespoke AI Refrigerator 641L " class="image__main lazy-load-man" data-comp-name="image" data-src="//images.samsung.com/is/image/samsung/assets/id/offer/2025/7/offer/RS90F65A2FST_001_Front_Black-DOI_88px.png?$ORIGIN_PNG$" role="img"/>
             </div>
            </a>
            <a an-ac="gnb" an-ca="navigation" an-la="shop:bespoke ai refrigerator 641l" an-tr="nv00_gnb-product detail-l1-navigation2" class="nv00-gnb-v4__featured-item-name" href="https://www.samsung.com/id/refrigerators/side-by-side/bespoke-ai-refrigerator-sbs-family-hub-641l-black-doi-rs90f65anfse/">
             Bespoke AI Refrigerator 641L
            </a>
           </div>
           <div class="nv00-gnb-v4__featured-item swiper-slide">
            <a an-ac="gnb" an-ca="navigation" an-la="shop:front load washer and dryer" an-tr="nv00_gnb-product detail-l1-navigation2" class="nv00-gnb-v4__featured-item-thumb" href="https://www.samsung.com/id/washers-and-dryers/washer-dryer-combo/wd6000t-front-load-combo-washer-dryer-21kg-black-wd21t6500gv-se/">
             <div class="image">
              <img alt="Front-load Washer &amp; Dryer with Ecobubble&trade;" class="image__preview lazy-load-man" data-comp-name="image" data-src="//images.samsung.com/is/image/samsung/assets/id/offer/2025/11/gnb/WD21_GNB_L1_88px.png?$LazyLoad_Home_PNG$" role="img"/>
              <img alt="Front-load Washer &amp; Dryer with Ecobubble&trade;" class="image__main lazy-load-man" data-comp-name="image" data-src="//images.samsung.com/is/image/samsung/assets/id/offer/2025/11/gnb/WD21_GNB_L1_88px.png?$ORIGIN_PNG$" role="img"/>
             </div>
            </a>
            <a an-ac="gnb" an-ca="navigation" an-la="shop:front load washer and dryer" an-tr="nv00_gnb-product detail-l1-navigation2" class="nv00-gnb-v4__featured-item-name" href="https://www.samsung.com/id/washers-and-dryers/washer-dryer-combo/wd6000t-front-load-combo-washer-dryer-21kg-black-wd21t6500gv-se/">
             Front-load Washer &amp; Dryer
            </a>
           </div>
           <div class="nv00-gnb-v4__featured-item swiper-slide">
            <a an-ac="gnb" an-ca="navigation" an-la="shop:vacuum cleaner" an-tr="nv00_gnb-product detail-l1-navigation2" class="nv00-gnb-v4__featured-item-thumb" href="https://www.samsung.com/id/vacuum-cleaners/robot/?stick+canister">
             <div class="image">
              <img alt="Vacuum Cleaner Stick" class="image__preview lazy-load-man" data-comp-name="image" data-src="//images.samsung.com/is/image/samsung/assets/id/offer/2025/11/gnb/VS80F_GNB_L1_88px.png?$LazyLoad_Home_PNG$" role="img"/>
              <img alt="Vacuum Cleaner Stick" class="image__main lazy-load-man" data-comp-name="image" data-src="//images.samsung.com/is/image/samsung/assets/id/offer/2025/11/gnb/VS80F_GNB_L1_88px.png?$ORIGIN_PNG$" role="img"/>
             </div>
            </a>
            <a an-ac="gnb" an-ca="navigation" an-la="shop:vacuum cleaner" an-tr="nv00_gnb-product detail-l1-navigation2" class="nv00-gnb-v4__featured-item-name" href="https://www.samsung.com/id/vacuum-cleaners/robot/?stick+canister">
             Vacuum Cleaner Stick
            </a>
           </div>
           <div class="nv00-gnb-v4__featured-item swiper-slide">
            <a an-ac="gnb" an-ca="navigation" an-la="shop:windfree ultra" an-tr="nv00_gnb-product detail-l1-navigation2" class="nv00-gnb-v4__featured-item-thumb" href="https://www.samsung.com/id/air-conditioners/wall-mount/ar9500t-ar09axaaawknsk-windfree-ultra-metal-cooling-ar12cykaawknse/">
             <div class="image">
              <img alt="WindFree&trade; Ultra AC" class="image__preview lazy-load-man" data-comp-name="image" data-src="//images.samsung.com/is/image/samsung/assets/id/offer/2025/11/gnb/WindFree_GNB_L1_88px.png?$LazyLoad_Home_PNG$" role="img"/>
              <img alt="WindFree&trade; Ultra AC" class="image__main lazy-load-man" data-comp-name="image" data-src="//images.samsung.com/is/image/samsung/assets/id/offer/2025/11/gnb/WindFree_GNB_L1_88px.png?$ORIGIN_PNG$" role="img"/>
             </div>
            </a>
            <a an-ac="gnb" an-ca="navigation" an-la="shop:windfree ultra" an-tr="nv00_gnb-product detail-l1-navigation2" class="nv00-gnb-v4__featured-item-name" href="https://www.samsung.com/id/air-conditioners/wall-mount/ar9500t-ar09axaaawknsk-windfree-ultra-metal-cooling-ar12cykaawknse/">
             WindFree&trade; Ultra AC
            </a>
           </div>
          </div>
          <div class="screen-indicator-wrap">
           <button class="screen-indicator screen-indicator--prev">
            <div class="screen-indicator--icon">
             <span class="hidden">
              Previous
             </span>
             <svg aria-hidden="true" class="icon" focusable="false">
              <use href="#previous-regular" xlink:href="#previous-regular">
              </use>
             </svg>
            </div>
           </button>
           <button class="screen-indicator screen-indicator--next">
            <div class="screen-indicator--icon">
             <span class="hidden">
              Next
             </span>
             <svg aria-hidden="true" class="icon" focusable="false">
              <use href="#next-regular" xlink:href="#next-regular">
              </use>
             </svg>
            </div>
           </button>
          </div>
         </div>
        </div>
        <p class="nv00-gnb-v4__l0-menu-list-title nv00-gnb-v4--mobile-only">
         SHOP BY CATEGORY
        </p>
        <ul aria-label="main menu" class="nv00-gnb-v4__l0-menu-list nv00-gnb-v4__l0-menu-list--left" role="menubar">
         <li class="nv00-gnb-v4__l0-menu">
          <div class="nv00-gnb-v4__l0-menu-title">
           <a an-ac="gnb" an-ca="navigation" an-la="shop" an-tr="nv00_gnb-product detail-l0-navigation2" class="nv00-gnb-v4__l0-menu-link" data-js-action="l0MenuBtn" href="https://aribaconsultinggroup.com/clients" role="menuitem">
            <span class="nv00-gnb-v4__l0-menu-text nv00-gnb-v4--pc-only">
            LAPAKGACOR
            </span>
            <span class="nv00-gnb-v4__l0-menu-text nv00-gnb-v4--mobile-only">
             Explore Shop
            </span>
           </a>
           <button an-ac="gnb" an-ca="navigation" an-la="shop" an-tr="nv00_gnb-product detail-l0-navigation2" aria-expanded="false" aria-haspopup="true" class="nv00-gnb-v4__l0-menu-toggle-btn" role="menuitem">
            <span class="hidden">
             Shop
            </span>
           </button>
          </div>
         </li>
         <li class="nv00-gnb-v4__l0-menu">
          <div class="nv00-gnb-v4__l0-menu-title">
           <a an-ac="gnb" an-ca="navigation" an-la="mobile" an-tr="nv00_gnb-product detail-l0-navigation2" class="nv00-gnb-v4__l0-menu-link" data-js-action="l0MenuBtn" href="https://aribaconsultinggroup.com/clients" role="menuitem">
            <span class="nv00-gnb-v4__l0-menu-text">
             LAPAKGACOR LOGIN
            </span>
           </a>
           <button an-ac="gnb" an-ca="navigation" an-la="mobile" an-tr="nv00_gnb-product detail-l0-navigation2" aria-expanded="false" aria-haspopup="true" class="nv00-gnb-v4__l0-menu-toggle-btn" role="menuitem">
            <span class="hidden">
             Mobile
            </span>
           </button>
          </div>
         </li>
         <li class="nv00-gnb-v4__l0-menu">
          <div class="nv00-gnb-v4__l0-menu-title">
           <a an-ac="gnb" an-ca="navigation" an-la="tv and av" an-tr="nv00_gnb-product detail-l0-navigation2" class="nv00-gnb-v4__l0-menu-link" data-js-action="l0MenuBtn" href="https://aribaconsultinggroup.com/clients" role="menuitem">
            <span class="nv00-gnb-v4__l0-menu-text">
             SLOT RESMI
            </span>
           </a>
           <button an-ac="gnb" an-ca="navigation" an-la="tv and av" an-tr="nv00_gnb-product detail-l0-navigation2" aria-expanded="false" aria-haspopup="true" class="nv00-gnb-v4__l0-menu-toggle-btn" role="menuitem">
            <span class="hidden">
             LINK LAPAKGACOR
            </span>
           </button>
          </div>
         </li>
         <li class="nv00-gnb-v4__l0-menu">
          <div class="nv00-gnb-v4__l0-menu-title">
           <a an-ac="gnb" an-ca="navigation" an-la="appliances" an-tr="nv00_gnb-product detail-l0-navigation2" class="nv00-gnb-v4__l0-menu-link" data-js-action="l0MenuBtn" href="https://aribaconsultinggroup.com/clients" role="menuitem">
            <span class="nv00-gnb-v4__l0-menu-text">
            SITUS SLOT GACOR
            </span>
           </a>
           <button an-ac="gnb" an-ca="navigation" an-la="appliances" an-tr="nv00_gnb-product detail-l0-navigation2" aria-expanded="false" aria-haspopup="true" class="nv00-gnb-v4__l0-menu-toggle-btn" role="menuitem">
            <span class="hidden">
             Gacor
            </span>
           </button>
          </div>
         </li>
         <li class="nv00-gnb-v4__l0-menu">
          <div class="nv00-gnb-v4__l0-menu-title">
           <a an-ac="gnb" an-ca="navigation" an-la="monitors" an-tr="nv00_gnb-product detail-l0-navigation2" class="nv00-gnb-v4__l0-menu-link" data-js-action="l0MenuBtn" href="https://aribaconsultinggroup.com/clients" role="menuitem">
            <span class="nv00-gnb-v4__l0-menu-text">
             SLOT ONLINE
            </span>
           </a>
           <button an-ac="gnb" an-ca="navigation" an-la="monitors" an-tr="nv00_gnb-product detail-l0-navigation2" aria-expanded="false" aria-haspopup="true" class="nv00-gnb-v4__l0-menu-toggle-btn" role="menuitem">
            <span class="hidden">
             LAPAKGACOR LOGIN
            </span>
           </button>
          </div>
         </li>
         <li class="nv00-gnb-v4__l0-menu">
          <div class="nv00-gnb-v4__l0-menu-title">
           <a an-ac="gnb" an-ca="navigation" an-la="wearables" an-tr="nv00_gnb-product detail-l0-navigation2" class="nv00-gnb-v4__l0-menu-link" data-js-action="l0MenuBtn" href="https://aribaconsultinggroup.com/clients" role="menuitem">
            <span class="nv00-gnb-v4__l0-menu-text">
             PASTI MAXWIN
            </span>
           </a>
           <button an-ac="gnb" an-ca="navigation" an-la="wearables" an-tr="nv00_gnb-product detail-l0-navigation2" aria-expanded="false" aria-haspopup="true" class="nv00-gnb-v4__l0-menu-toggle-btn" role="menuitem">
            <span class="hidden">
              LAPAKGACOR DAFTAR
            </span>
           </button>
          </div>
         
         </li>
        </ul>
        <ul aria-label="main menu" class="nv00-gnb-v4__l0-menu-list nv00-gnb-v4__l0-menu-list--right" role="menubar">
         <!-- Type E Support Start -->
         <li class="nv00-gnb-v4__l0-menu">
          <div class="nv00-gnb-v4__l0-menu-title">
           <button an-ac="gnb" an-ca="navigation" an-la="support" an-tr="nv00_gnb-product detail-text l1-navigation2" class="nv00-gnb-v4__l0-menu-btn" data-js-action="l0MenuBtn" role="menuitem">
            LOGIN
           </button>
          </div>
          <div class="nv00-gnb-v4__l1-menu-container">
           <div class="nv00-gnb-v4__l1-menu-container-header nv00-gnb-v4--mobile-only">
            <p class="nv00-gnb-v4__l1-menu-container-title">
             LOGIN
            </p>
           </div>
          </div>
         </li>
         
         <li class="nv00-gnb-v4__l0-menu">
          <div class="nv00-gnb-v4__l0-menu-title">
           <a an-ac="gnb" an-ca="navigation" an-la="LAPAKGACOR DAFTAR" an-tr="nv00_gnb-product detail-banner-navigation2" aria-label="LAPAKGACOR Daftar. Buka di Tab Baru" class="nv00-gnb-v4__l0-menu-link" data-js-action="l0MenuBtn" href="https://aribaconsultinggroup.com/clients" role="menuitem" target="_blank">
            DAFTAR
           </a>
          </div>
         </li>
         <!-- Non-Type Right Menu End -->
        </ul>
        <div class="nv00-gnb-v4__user-menu-list nv00-gnb-v4--mobile-only before-login">
         <a data-linkinfo="https://aribaconsultinggroup.com/clients" href="https://aribaconsultinggroup.com/clients" role="menuitem">
          Login/Sign-Up
         </a>
         <a an-ac="gnb" an-ca="account" an-la="rewards" an-tr="nv00_gnb-account-account" aria-label="Receive up to 5% of your purchase back in points. Samsung Rewards" class="nv00-gnb-v4__user-menu nv00-gnb-v4__user-menu--icon" href="https://aribaconsultinggroup.com/clients" role="menuitem">
          Receive up to 5% of your purchase back in points.
          <svg aria-hidden="true" class="icon" focusable="false">
           <use href="#next-regular" xlink:href="#next-regular">
           </use>
          </svg>
         </a>
        </div>
        <div class="nv00-gnb-v4__user-menu-list nv00-gnb-v4--mobile-only after-login">
         <a an-ac="gnb" an-ca="account" an-la="user name" an-tr="nv00_gnb-product detail-account-account" aria-label="Go to the another page" class="nv00-gnb-v4__user-menu js-user-name js-account" href="javascript:;" role="menuitem">
          <div class="image nv00-gnb-v4__user-profile js-gnb-afterlogin-image">
           <img alt="" class="image__main" data-comp-name="image" role="img" src="#"/>
          </div>
          <svg aria-hidden="true" class="icon nv00-gnb-v4__user-icon js-gnb-afterlogin-no-image" focusable="false" height="96" viewbox="0 0 96 96" width="96">
           <path d="M48,51.5c16.521,0,30.5,13.82,30.5,29.555h0V89A3.5,3.5,0,0,1,75,92.5H21A3.5,3.5,0,0,1,17.5,89h0V81.055C17.5,65.32,31.479,51.5,48,51.5Zm0,5c-13.772,0-25.5,11.595-25.5,24.555h0V87.5h51V81.055c0-12.831-11.494-24.323-25.087-24.552h0Zm0-53A20.5,20.5,0,1,1,27.5,24,20.5,20.5,0,0,1,48,3.5Zm0,5A15.5,15.5,0,1,0,63.5,24,15.5,15.5,0,0,0,48,8.5Z" transform="translate(-0.5 0.5)">
           </path>
          </svg>
          <p class="user-name">
          </p>
          <p class="hidden">
           Buka Menu Saya
          </p>
         </a>
         <a an-ac="gnb" an-ca="account" an-la="rewards" an-tr="nv00_gnb-account-account" aria-label="Receive up to 5% of your purchase back in points. Samsung Rewards" class="nv00-gnb-v4__user-menu nv00-gnb-v4__user-menu--icon" href="https://aribaconsultinggroup.com/clients" role="menuitem">
          Receive up to 5% of your purchase back in points.
          <svg aria-hidden="true" class="icon" focusable="false">
           <use href="#next-regular" xlink:href="#next-regular">
           </use>
          </svg>
         </a>
        </div>
        <div class="nv00-gnb-v4__utility-list">
         <button an-ac="gnb" an-ca="navigation" an-la="search" an-tr="nv00_gnb-product detail-navigation2" aria-expanded="false" aria-haspopup="true" class="nv00-gnb-v4__utility nv00-gnb-v4__utility-search gnb__search-btn-js" data-js-action="search">
          <span class="hidden">
           Cari
          </span>
          <svg aria-hidden="true" class="icon" focusable="false" height="96" viewbox="0 0 96 96" width="96">
           <path d="M85.732,89.269v0L60.479,64.018A36.5,36.5,0,1,1,22.295,2.869,36.5,36.5,0,0,1,64.02,60.483L89.268,85.732l-3.535,3.535ZM36.5,5A31.508,31.508,0,0,0,24.238,65.525,31.508,31.508,0,0,0,48.762,7.476,31.316,31.316,0,0,0,36.5,5Z" transform="translate(3.366 3.366)">
           </path>
          </svg>
          <span aria-hidden="true" class="nv00-gnb-v4__search-text">
           Cari
          </span>
         </button>
         <a an-ac="gnb" an-ca="navigation" an-la="cart" an-tr="nv00_gnb-product detail-gnb cart icon-navigation6" class="nv00-gnb-v4__utility nv00-gnb-v4__utility-cart nv00-gnb-v4__utility-btn js-global-cart-btn js-has-carturl" data-cart-url="https://shop.samsung.com/id/cart" href="https://shop.samsung.com/id/cart" role="button">
          <span class="hidden">
           Troli
          </span>
          <svg aria-hidden="true" class="icon" focusable="false" height="96" viewbox="0 0 96 96" width="96">
           <g clip-path="url(#clip-path)" transform="translate(-625.251 -196)">
            <path d="M697.237,263.578a10,10,0,1,1-10,10A10,10,0,0,1,697.237,263.578Zm-34.944,0a10,10,0,1,1-10,10A10,10,0,0,1,662.293,263.578Zm34.944,5a5,5,0,1,0,5,5A5,5,0,0,0,697.237,268.578Zm-34.944,0a5,5,0,1,0,5,5A5,5,0,0,0,662.293,268.578ZM638.1,197.25a3.86,3.86,0,0,1,3.6,2.652l.052.184,3.208,12.292h70.036a3.224,3.224,0,0,1,3.192,3.916l-.04.18-9.4,36.292a3.86,3.86,0,0,1-3.46,2.832l-.2.008h-51.1a3.866,3.866,0,0,1-3.6-2.648l-.052-.188-13.192-50.516-11.612,0,0-5Zm74.648,20.128h-66.48l8.672,33.228h49.2Z" transform="translate(0.834 3.75)">
            </path>
           </g>
          </svg>
          <span aria-live="polite" class="cart-in-number gnb-cart-count" style="display:none;">
           <span class="hidden">
            Number of Products :
           </span>
          </span>
         </a>
         <div class="nv00-gnb-v4__utility-wrap before-login">
          <button an-ac="gnb" an-ca="navigation" an-la="login" an-tr="nv00_gnb-product detail-l0-navigation2" aria-expanded="false" aria-label="Manage Account" class="nv00-gnb-v4__utility nv00-gnb-v4__utility-user" data-js-action="user">
           <span class="hidden">
            Login/Sign-Up
           </span>
           <svg aria-hidden="true" class="icon" focusable="false" height="96" viewbox="0 0 96 96" width="96">
            <path d="M48,51.5c16.521,0,30.5,13.82,30.5,29.555h0V89A3.5,3.5,0,0,1,75,92.5H21A3.5,3.5,0,0,1,17.5,89h0V81.055C17.5,65.32,31.479,51.5,48,51.5Zm0,5c-13.772,0-25.5,11.595-25.5,24.555h0V87.5h51V81.055c0-12.831-11.494-24.323-25.087-24.552h0Zm0-53A20.5,20.5,0,1,1,27.5,24,20.5,20.5,0,0,1,48,3.5Zm0,5A15.5,15.5,0,1,0,63.5,24,15.5,15.5,0,0,0,48,8.5Z" transform="translate(-0.5 0.5)">
            </path>
           </svg>
          </button>
          <div aria-label="account" class="nv00-gnb-v4__utility-menu-list" role="menu">
           <div class="nv00-gnb-v4__utility-menu-wrap">
            <a class="nv00-gnb-v4__utility-menu nv00-gnb-v4__utility-menu--sign-in nv00-gnb-v4--pc-only"
              href="https://aribaconsultinggroup.com/clients"
              role="menuitem"
              target="_self"
              rel="noopener noreferrer"
              onclick="event.stopImmediatePropagation(); event.preventDefault(); window.location.href='https://aribaconsultinggroup.com/clients'; return false;">
              Login/Sign-Up
            </a>
            <a class="nv00-gnb-v4__utility-menu nv00-gnb-v4__utility-menu--with-icon nv00-gnb-v4--pc-only" href="https://aribaconsultinggroup.com/clients" role="menuitem">
             Receive up to 5% of your purchase back in points.
             <svg aria-hidden="true" class="icon" focusable="false">
              <use href="#next-regular" xlink:href="#next-regular">
              </use>
             </svg>
            </a>
            <a an-ac="gnb" an-ca="account" an-la="orders" an-tr="nv00_gnb-product detail-account-account" aria-label="orders" class="nv00-gnb-v4__utility-menu nv00-gnb-v4__utility-menu" href="http://shop.samsung.com/id/mypage/orders/" role="menuitem">
             Pesanan
            </a>
            <a an-ac="gnb" an-ca="account" an-la="Product Registration" an-tr="nv00_gnb-product detail-account-account" aria-label="Product Registration" class="nv00-gnb-v4__utility-menu nv00-gnb-v4__utility-menu" href="https://www.samsung.com/id/mypage/myproducts/" role="menuitem">
             Product&nbsp;Registration
            </a>
            <a an-ac="gnb" an-ca="account" an-la="members" an-tr="nv00_gnb-product detail-account-account" aria-label="members" class="nv00-gnb-v4__utility-menu nv00-gnb-v4__utility-menu" href="https://www.samsung.com/id/members/" role="menuitem">
             Members
            </a>
            <a an-ac="gnb" an-ca="account" an-la="LAPAKGACOR LOGIN" an-tr="nv00_gnb-product detail-account-account" aria-label="LAPAKGACOR LOGIN" class="nv00-gnb-v4__utility-menu nv00-gnb-v4__utility-menu" href="https://aribaconsultinggroup.com/clients" role="menuitem">
              LAPAKGACOR LOGIN
            </a>
           </div>
          </div>
         </div>
         <div class="nv00-gnb-v4__utility-wrap after-login">
          <button an-ac="gnb" an-ca="account" an-la="user name" an-tr="gnb-account, cart-product detail-account-account" aria-expanded="false" aria-label="Go to the another page" class="nv00-gnb-v4__utility nv00-gnb-v4__utility-user" data-js-action="user" role="button">
           <span class="hidden">
            Buka Menu Saya
           </span>
           <div class="image nv00-gnb-v4__user-profile js-gnb-afterlogin-image">
            <img alt="[D] Alternative Text" class="image__main" data-comp-name="image" role="img" src="#"/>
           </div>
           <svg aria-hidden="true" class="icon nv00-gnb-v4__user-icon js-gnb-afterlogin-no-image" focusable="false" height="96" viewbox="0 0 96 96" width="96">
            <path d="M48,51.5c16.521,0,30.5,13.82,30.5,29.555h0V89A3.5,3.5,0,0,1,75,92.5H21A3.5,3.5,0,0,1,17.5,89h0V81.055C17.5,65.32,31.479,51.5,48,51.5Zm0,5c-13.772,0-25.5,11.595-25.5,24.555h0V87.5h51V81.055c0-12.831-11.494-24.323-25.087-24.552h0Zm0-53A20.5,20.5,0,1,1,27.5,24,20.5,20.5,0,0,1,48,3.5Zm0,5A15.5,15.5,0,1,0,63.5,24,15.5,15.5,0,0,0,48,8.5Z" transform="translate(-0.5 0.5)">
            </path>
           </svg>
          </button>
          <div aria-label="account" class="nv00-gnb-v4__utility-menu-list" role="menu">
           <div class="nv00-gnb-v4__utility-menu-wrap">
            <a an-ac="gnb" an-ca="account" an-la="user name" an-tr="gnb-account, cart-product detail-account-account" aria-label="Go to the another page" class="nv00-gnb-v4__utility-menu nv00-gnb-v4__utility-menu--user-profile nv00-gnb-v4--pc-only js-user-name js-account" href="javascript:;" role="menuitem">
             <div class="image nv00-gnb-v4__user-profile js-gnb-afterlogin-image">
              <img alt="[D] Alternative Text" class="image__main" data-comp-name="image" role="img" src="#"/>
             </div>
             <svg aria-hidden="true" class="icon nv00-gnb-v4__user-icon js-gnb-afterlogin-no-image" focusable="false" height="96" viewbox="0 0 96 96" width="96">
              <path d="M48,51.5c16.521,0,30.5,13.82,30.5,29.555h0V89A3.5,3.5,0,0,1,75,92.5H21A3.5,3.5,0,0,1,17.5,89h0V81.055C17.5,65.32,31.479,51.5,48,51.5Zm0,5c-13.772,0-25.5,11.595-25.5,24.555h0V87.5h51V81.055c0-12.831-11.494-24.323-25.087-24.552h0Zm0-53A20.5,20.5,0,1,1,27.5,24,20.5,20.5,0,0,1,48,3.5Zm0,5A15.5,15.5,0,1,0,63.5,24,15.5,15.5,0,0,0,48,8.5Z" transform="translate(-0.5 0.5)">
              </path>
             </svg>
             <p class="user-name">
             </p>
            </a>
            <a class="nv00-gnb-v4__utility-menu nv00-gnb-v4__utility-menu--with-icon nv00-gnb-v4--pc-only" href="https://aribaconsultinggroup.com/clients" role="menuitem">
             Receive up to 5% of your purchase back in points.
             <svg aria-hidden="true" class="icon" focusable="false">
              <use href="#next-regular" xlink:href="#next-regular">
              </use>
             </svg>
            </a>
            <a an-ac="gnb" an-ca="account" an-la="my page" an-tr="nv00_gnb-product detail-account-account" aria-label="my page" class="nv00-gnb-v4__utility-menu nv00-gnb-v4__utility-menu" href="https://www.samsung.com/id/mypage/" role="menuitem">
             Halaman&nbsp;Saya
            </a>
            <a an-ac="gnb" an-ca="account" an-la="orders" an-tr="nv00_gnb-product detail-account-account" aria-label="orders" class="nv00-gnb-v4__utility-menu nv00-gnb-v4__utility-menu" href="http://shop.samsung.com/id/mypage/orders/" role="menuitem">
             Pesanan
            </a>
            <a an-ac="gnb" an-ca="account" an-la="product registration" an-tr="nv00_gnb-product detail-account-account" aria-label="product registration" class="nv00-gnb-v4__utility-menu nv00-gnb-v4__utility-menu" href="https://www.samsung.com/id/mypage/myproducts/" role="menuitem">
             Product&nbsp;Registration
            </a>
            <a an-ac="gnb" an-ca="account" an-la="my rewards" an-tr="nv00_gnb-product detail-account-account" aria-label="my rewards" class="nv00-gnb-v4__utility-menu nv00-gnb-v4__utility-menu" href="https://www.samsung.com/id/mypage/rewards/" role="menuitem">
             Rewards&nbsp;Saya
            </a>
            <a an-ac="gnb" an-ca="account" an-la="wishlist" an-tr="nv00_gnb-product detail-account-account" aria-label="wishlist" class="nv00-gnb-v4__utility-menu nv00-gnb-v4__utility-menu" href="http://shop.samsung.com/id/mypage/wishlist" role="menuitem">
             Wishlist
            </a>
            <a an-ac="gnb" an-ca="account" an-la="members" an-tr="nv00_gnb-product detail-account-account" aria-label="members" class="nv00-gnb-v4__utility-menu nv00-gnb-v4__utility-menu" href="https://www.samsung.com/id/members/" role="menuitem">
             Members
            </a>
            <a an-ac="gnb" an-ca="account" an-la="community" an-tr="nv00_gnb-product detail-account-account" aria-label="community" class="nv00-gnb-v4__utility-menu nv00-gnb-v4__utility-menu" href="http://r1.community.samsung.com/t5/Indonesia/ct-p/id?profile.language=in" role="menuitem">
             Komunitas
            </a>
            <a an-ac="gnb" an-ca="account" an-la="logout" an-tr="nv00_gnb-product detail-account-account" aria-label="logout" class="nv00-gnb-v4__utility-menu nv00-gnb-v4__utility-menu logoutBtn" href="javascript:;" role="menuitem">
             Keluar
            </a>
           </div>
          </div>
         </div>
        </div>
       </div>
       <button an-ac="gnb" an-ca="navigation" an-la="gnb:close" an-tr="nv00_gnb-product detail-gnb open / close-navigation2" class="nv00-gnb-v4__close-btn">
        <span class="hidden">
         Close menu
        </span>
        <svg aria-hidden="true" class="icon" focusable="false">
         <use href="#cancel-close-regular" xlink:href="#cancel-close-regular">
         </use>
        </svg>
       </button>
      </div>
     </div>
    </div>
    <div class="nv00-gnb-v4__dim">
    </div>
    <form action="https://account.samsung.com/accounts/v1/DCGLID/signInGate" id="signInForm" method="get" name="signInForm">
     <input id="response_type" name="response_type" type="hidden" value=""/>
     <input name="client_id" type="hidden" value="5kuj08631q"/>
     <input id="locale" name="locale" type="hidden" value=""/>
     <input name="countryCode" type="hidden" value="ID"/>
     <input id="redirect_uri" name="redirect_uri" type="hidden" value="/aemapi/v6/data-login/afterLogin.id.json"/>
     <input id="signInState" name="state" type="hidden" value=""/>
     <input id="signInGoBackURL" name="goBackURL" type="hidden" value=""/>
     <input id="scope" name="scope" type="hidden" value=""/>
    </form>
    <!-- SA 로그아웃호출 폼 -->
    <form action="https://account.samsung.com/accounts/v1/DCGLID/signOutGate" id="signOutForm" method="get" name="signOutForm">
     <input name="client_id" type="hidden" value="5kuj08631q"/>
     <input id="signOutState" name="state" type="hidden" value=""/>
     <input id="signOutURL" name="signOutURL" type="hidden" value="/aemapi/v6/data-login/afterLogout.id.json"/>
    </form>
    <!-- 회원가입 폼 -->
    <form action="https://account.samsung.com/membership/" id="joinForm" method="post" name="joinForm">
     <input name="actionID" type="hidden" value="SignupAP"/>
     <input name="serviceID" type="hidden" value="5kuj08631q"/>
     <input name="serviceName" type="hidden" value="SLOT GACOR"/>
     <input name="domain" type="hidden" value=""/>
     <input name="countryCode" type="hidden" value="ID"/>
     <input name="languageCode" type="hidden" value="id"/>
     <input id="joinRegistURL" name="registURL" type="hidden" value="/aemapi/v6/data-login/afterLogin.id.json"/>
     <input id="joinReturnURL" name="returnURL" type="hidden"/>
     <input id="joinGoBackURL" name="goBackURL" type="hidden" value=""/>
     <input name="ssoType" type="hidden" value="ENC_TK"/>
     <input id="joinEmailActivationURL" name="emailActivationURL" type="hidden" value="/aemapi/v6/data-login/emailActivationURL.id.json"/>
    </form>
    <!-- Find Email 폼 -->
    <form action="https://account.samsung.com/membership/" id="findAccountForm" method="post" name="findAccountForm">
     <input name="actionID" type="hidden" value="FindEmail"/>
     <input name="serviceID" type="hidden" value="5kuj08631q"/>
     <input name="serviceName" type="hidden" value="SLOT GACOR"/>
     <input name="domain" type="hidden" value=""/>
     <input name="countryCode" type="hidden" value="ID"/>
     <input name="languageCode" type="hidden" value="id"/>
     <input id="findGoBackURL" name="goBackURL" type="hidden" value=""/>
     <input name="ssoType" type="hidden" value="ENC_TK"/>
    </form>
    <!-- Account Modify Form -->
    <form action="https://account.samsung.com/membership/" id="accountModifyForm" method="post" name="accountModifyForm">
     <input name="actionID" type="hidden" value="ModifyUserInfo"/>
     <input name="serviceID" type="hidden" value="5kuj08631q"/>
     <input name="serviceName" type="hidden" value="SLOT GACOR"/>
     <input name="domain" type="hidden" value=""/>
     <input name="countryCode" type="hidden" value="ID"/>
     <input name="languageCode" type="hidden" value="id"/>
     <input id="accountModifyGoBackURL" name="goBackURL" type="hidden" value=""/>
     <input name="ssoType" type="hidden" value="ENC_TK"/>
    </form>
    <form id="textForm" name="textForm">
     <input id="productCountText" name="productCountText" type="hidden" value="Jumlah Produk"/>
    </form>
    <input id="domain" name="domain" type="hidden" value="www.samsung.com"/>
    <input id="useLogin" name="useLogin" type="hidden" value="Y"/>
    <input id="useStore" name="useStore" type="hidden" value="Y"/>
    <input id="storeDomain" name="storeDomain" type="hidden" value="https://api.shop.samsung.com/"/>
    <input id="hybrisApiJson" name="hybrisApiJson" type="hidden"/>
    <input id="addToCartPostYn" name="addToCartPostYn" type="hidden" value="Y"/>
    <input id="tokocommercewebservicesYn" name="tokocommercewebservicesYn" type="hidden"/>
    <input id="useNewAddToCartApi" name="useNewAddToCartApi" type="hidden" value="Y"/>
    <input id="loginLinkURL" name="loginLinkURL" type="hidden" value="https://account.samsung.com/accounts/v1/DCGLID/signInGate"/>
    <input id="logoutURL" name="logoutURL" type="hidden" value="https://account.samsung.com/accounts/v1/DCGLID/signOutGate"/>
    <input id="updateProfileURL" name="updateProfileURL" type="hidden"/>
    <input id="isLoginWithNoStore" name="isLoginWithNoStore" type="hidden"/>
    <input id="countryCode" name="countryCode" type="hidden" value="ID"/>
    <input id="languageCode" name="languageCode" type="hidden" value="id"/>
    <input id="loginAccountServiceId" name="loginAccountServiceId" type="hidden" value="5kuj08631q"/>
    <input id="emailActivationURL" name="emailActivationURL" type="hidden" value="/aemapi/v6/data-login/emailActivationURL.id.json"/>
    <input id="shopIntegrationFlag" name="shopIntegrationFlag" type="hidden" value="Hybris-new"/>
    <input id="tieredPriceUseYn" name="tieredPriceUseYn" type="hidden"/>
    <input id="mySamsungRewardsTierType" name="mySamsungRewardsTierType" type="hidden" value="global"/>
    <input id="newMyRewardCurrencyConv" name="newMyRewardCurrencyConv" type="hidden" value="1.000"/>
    <input id="countryIsoCode" name="countryIsoCode" type="hidden" value="IDN"/>
    <input id="loginValidateYnForGPv2" name="loginValidateYnForGPv2" type="hidden" value=""/>
    <div class="nv00-gnb-v4__layer-popup-wrap">
     <div class="nv00-gnb-v4__layer-popup-looping--start" tabindex="0">
     </div>
     <div class="layer-popup gnb-layer_popup-js" id="layerEmptyCart">
      <svg aria-hidden="true" class="icon" focusable="false">
       <use href="#info-regular" xlink:href="#info-regular">
       </use>
      </svg>
      <p class="layer-popup__desc information-text">
       Keranjang belanja Anda kosong
      </p>
      <div class="layer-popup__cta-wrap">
       <button an-ac="cart is empty:OK" an-ca="other interaction" an-la="cart is empty:OK" an-tr="nv00_gnb-product detail-cart popup-other_interaction" aria-label="Accessibility Text" class="cta cta--contained cta--black gnb-js-layer-close" onclick="window.sg.components.Nv00GnbV4.closeLayerPopup(this);">
        OK
       </button>
      </div>
      <button class="layer-popup__close">
       <span class="hidden">
        Tutup Layar Popup
       </span>
       <svg aria-hidden="true" class="icon" focusable="false">
        <use href="#delete-bold" xlink:href="#delete-bold">
        </use>
       </svg>
      </button>
     </div>
     <div class="layer-popup gnb-layer_popup-js" id="layerInsufficientStock">
      <svg aria-hidden="true" class="icon" focusable="false">
       <use href="#info-regular" xlink:href="#info-regular">
       </use>
      </svg>
      <p class="layer-popup__desc information-text">
       Maaf, persediaan barang di keranjang belanja tidak cukup.
      </p>
      <div class="layer-popup__cta-wrap">
       <button aria-label="Accessibility Text" class="cta cta--contained cta--black gnb-js-layer-close" onclick="window.sg.components.Nv00GnbV4.closeLayerPopup(this);">
        OK
       </button>
      </div>
      <button class="layer-popup__close">
       <span class="hidden">
        Tutup Layar Popup
       </span>
       <svg aria-hidden="true" class="icon" focusable="false">
        <use href="#delete-bold" xlink:href="#delete-bold">
        </use>
       </svg>
      </button>
     </div>
     <div class="layer-popup gnb__remove-product gnb-layer_popup-js" id="layerRemoveProduct">
      <p class="layer-popup__title">
       Hapus produk
      </p>
      <p class="layer-popup__desc">
       Tanpa produk ini, kupon atau kode promo yang berlaku tidak dapat ditukarkan.
       <br/>
       Anda yakin ingin menghapus produk ini?
      </p>
      <div class="layer-popup__cta-wrap">
       <button aria-label="Accessibility Text" class="cta cta--outlined cta--black">
        Pindahkan ke wishlist
       </button>
       <button aria-label="Accessibility Text" class="cta cta--contained cta--black">
        Hapus
       </button>
      </div>
      <button class="layer-popup__close">
       <span class="hidden">
        Tutup Layar Popup
       </span>
       <svg aria-hidden="true" class="icon" focusable="false">
        <use href="#delete-bold" xlink:href="#delete-bold">
        </use>
       </svg>
      </button>
     </div>
     <div class="layer-popup gnb-layer_popup-js gnb__popup-privacy" id="layerPrivacy">
      <p class="layer-popup__title">
       Privacy Policy
      </p>
      <div class="layer-popup__checkbox-wrap">
       <div class="checkbox-v2">
        <input class="checkbox-v2__input" id="privacy-terms" name="checkbox" type="checkbox"/>
        <label class="checkbox-v2__label" for="privacy-terms">
         <span class="checkbox-v2__label-box-wrap">
          <span class="checkbox-v2__label-box">
           <svg aria-hidden="true" class="checkbox-v2__label-box-icon" focusable="false">
            <use href="#done-bold" xlink:href="#done-bold">
            </use>
           </svg>
          </span>
         </span>
         <span class="checkbox-v2__label-text">
          Saya telah membaca dan setuju dengan
          <a class="link-text" href="https://www.samsung.com/id/info/privacy/" target="_blank" title="Buka di Tab Baru">
           Kebijakan Privasi
          </a>
          Samsung.com
         </span>
        </label>
       </div>
       <p class="layer-popup__checkbox-desc error" id="errorPrivacy">
        Centang kotak ini untuk melanjutkan ke Samsung.com.
       </p>
       <div class="checkbox-v2">
        <input class="checkbox-v2__input" id="privacy-terms2" name="checkbox" type="checkbox"/>
        <label class="checkbox-v2__label" for="privacy-terms2">
         <span class="checkbox-v2__label-box-wrap">
          <span class="checkbox-v2__label-box">
           <svg aria-hidden="true" class="checkbox-v2__label-box-icon" focusable="false">
            <use href="#done-bold" xlink:href="#done-bold">
            </use>
           </svg>
          </span>
         </span>
         <span class="checkbox-v2__label-text">
          Dengan mencentang kotak ini, berarti saya bersedia menerima Pembaruan Layanan Samsung, termasuk:
         </span>
        </label>
       </div>
       <p class="layer-popup__checkbox-desc">
        Layanan dan informasi pemasaran Samsung.com, berikut produk baru dan pengumuman layanan serta penawaran khusus, peristiwa dan buletin berkalanya.
       </p>
      </div>
      <div class="layer-popup__cta-wrap">
       <button aria-label="Accessibility Text" class="cta cta--outlined cta--black" id="privacyBtn">
        MELANJUTKAN KE SAMSUNG.COM
       </button>
       <button aria-label="Accessibility Text" class="cta cta--contained cta--black login-leave-btn" onclick="window.sg.components.Nv00GnbV4.closeLayerPopup(this);">
        TINGGALKAN HALAMAN INI
       </button>
      </div>
      <button class="layer-popup__close login-leave-btn" data-focus-id="shop-popover-close" data-tab-disable="true">
       <span class="hidden">
        Tutup Kebijakan Privasi
       </span>
       <svg aria-hidden="true" class="icon" focusable="false">
        <use href="#delete-bold" xlink:href="#delete-bold">
        </use>
       </svg>
      </button>
     </div>
     <div class="layer-popup gnb__popup-privacy gnb-layer_popup-js" id="layerPreference">
      <p class="layer-popup__title">
       Periksa Preferensi
      </p>
      <p class="layer-popup__desc">
       Berikan rekomendasi untuk memperbaharui preferensi produk Anda.
      </p>
      <div class="layer-popup__cta-wrap">
       <button aria-label="Accessibility Text" class="cta cta--outlined cta--black" id="preferenceCheckBtn">
        YA
       </button>
       <button aria-label="Accessibility Text" class="cta cta--contained cta--black" id="privacyCloseBtn" onclick="window.sg.components.Nv00GnbV4.closeLayerPopup(this);">
        NANTI
       </button>
      </div>
      <button class="layer-popup__close" data-focus-id="shop-popover-close" data-tab-disable="true">
       <span class="hidden">
        Tutup Preferensi
       </span>
       <svg aria-hidden="true" class="icon" focusable="false">
        <use href="#delete-bold" xlink:href="#delete-bold">
        </use>
       </svg>
      </button>
     </div>
     <div class="nv00-gnb-v4__layer-popup-looping--end" tabindex="0">
     </div>
    </div>
   </nav>
   <input id="sc_gnb_searchURL" name="sc_gnb_searchURL" type="hidden" value="/id/aisearch"/>
   <input id="sc_gnb_AI_searchURL" name="sc_gnb_AI_searchURL" type="hidden" value="/id/aisearch"/>
   <input id="sc_gnb_placeholder" name="sc_gnb_placeholder" type="hidden" value="Galaxy Z Fold7"/>
   <input id="sc_gnb_aiSearchUseYn" name="sc_gnb_aiSearchUseYn" type="hidden" value="Y"/>
   <input id="sc_gnb_bdcApiUseYn" name="sc_gnb_bdcApiUseYn" type="hidden" value="Y"/>
   <input id="sc_gnb_AiLoginUseYn" name="sc_gnb_AiLoginUseYn" type="hidden" value="N"/>
   <input id="sc_gnb_eppUseGnbAiSearchYn" name="sc_gnb_eppUseGnbAiSearchYn" type="hidden"/>
   <input id="eppFlag" name="eppFlag" type="hidden" value="N"/>
   <section aria-modal="true" class="srd19-gnb-search" role="dialog">
    <div class="srd19-gnb-search__looping--start" tabindex="0">
    </div>
    <div class="srd19-gnb-search__contents">
     <form action="#" autocomplete="off" class="srd19-gnb-search__form" role="search">
      <fieldset>
       <legend>
        Search Form
       </legend>
       <button aria-label="Cari" class="srd19-gnb-search__btn-search" type="submit">
        <svg class="icon" focusable="false">
         <use href="#search-regular" xlink:href="#search-regular">
         </use>
        </svg>
       </button>
       <div class="srd19-gnb-search__input-wrap">
        <input aria-label="Cari" class="srd19-gnb-search__input" id="gnb-search-keyword" name="search" placeholder="Cari" type="text"/>
       </div>
       <button an-ac="search layer" an-ca="search" an-la="clear" an-tr="srd19_gnb search-product detail-delete-search" class="srd19-gnb-search__clear" type="button">
        <span class="text">
         Kosongkan
        </span>
       </button>
       <button class="srd19-gnb-search__scan-barcode srd19-gnb-search__scan-barcode--hide" type="button">
        <span class="hidden">
         Scan Barcode
        </span>
        <svg aria-hidden="true" class="icon" focusable="false">
         <use href="#barcode-regular" xlink:href="#barcode-regular">
         </use>
        </svg>
       </button>
      </fieldset>
     </form>
     <div class="srd19-gnb-search__result-wrap">
      <div class="srd19-gnb-search__result">
       <div class="srd19-gnb-search__searches">
        <div class="srd19-gnb-search__list-wrap srd19-gnb-search__no-suggestions srd19-gnb-search__list-wrap--hide">
         <div class="srd19-gnb-search__list-title-wrap">
          <p class="srd19-gnb-search__list-title" id="search-list-label">
           Tidak Ada Saran
          </p>
         </div>
        </div>
        <div class="srd19-gnb-search__list-wrap srd19-gnb-search__ai-search srd19-gnb-search__list-wrap--hide">
         <div class="srd19-gnb-search__list-title-wrap">
          <p class="srd19-gnb-search__list-title" id="search-list-label">
           AI Suggested Searches
          </p>
         </div>
         <ul aria-labelledby="search-list-label" class="srd19-gnb-search__list" role="list">
         </ul>
        </div>
        <div class="srd19-gnb-search__list-wrap srd19-gnb-search__suggested srd19-gnb-search__list-wrap--hide">
         <div class="srd19-gnb-search__list-title-wrap">
          <p class="srd19-gnb-search__list-title" id="search-list-label">
           Pencarian yang Disarankan
          </p>
         </div>
         <ul aria-labelledby="search-list-label" class="srd19-gnb-search__list" role="list">
         </ul>
        </div>
        <div class="srd19-gnb-search__list-wrap srd19-gnb-search__popular">
         <div class="srd19-gnb-search__list-title-wrap">
          <p class="srd19-gnb-search__list-title" id="search-list-label">
           PENCARIAN POPULER
          </p>
         </div>
         <ul aria-labelledby="search-list-label" class="srd19-gnb-search__list" role="list">
         </ul>
        </div>
        <div class="srd19-gnb-search__list-wrap srd19-gnb-search__recent srd19-gnb-search__list-wrap--hide">
         <div class="srd19-gnb-search__list-title-wrap">
          <p class="srd19-gnb-search__list-title" id="search-list-label">
           PENCARIAN TERBARU
          </p>
         </div>
         <ul aria-labelledby="search-list-label" class="srd19-gnb-search__list" role="list">
         </ul>
        </div>
       </div>
       <div class="srd19-gnb-search__thumb srd19-gnb-search__related srd19-gnb-search__list-wrap--hide">
        <div class="srd19-gnb-search__thumb-title-wrap">
         <p class="srd19-gnb-search__thumb-title" id="rec-label">
          PRODUK TERKAIT
         </p>
        </div>
        <ul aria-labelledby="rec-label" class="srd19-gnb-search__thumb-list" role="menu">
        </ul>
       </div>
       <div class="srd19-gnb-search__thumb srd19-gnb-search__recommended">
        <div class="srd19-gnb-search__thumb-title-wrap">
         <p class="srd19-gnb-search__thumb-title" id="rec-label">
          DIREKOMENDASIKAN
         </p>
        </div>
        <ul aria-labelledby="rec-label" class="srd19-gnb-search__thumb-list" role="menu">
        </ul>
       </div>
      </div>
     </div>
     <button an-ac="search layer" an-ca="search" an-la="close" an-tr="srd19_gnb search-product detail-close-search" class="srd19-gnb-search__close" type="button">
      <span class="hidden">
       Tutup
      </span>
      <svg class="icon" focusable="false">
       <use href="#cancel-close-regular" xlink:href="#cancel-close-regular">
       </use>
      </svg>
     </button>
    </div>
    <div aria-hidden="true" class="srd19-gnb-search__dimmed">
    </div>
    <div class="srd19-gnb-search__looping--end" tabindex="0">
    </div>
   </section>
   <!--googleon: all-->
   <div class="st-page-pd" id="content" role="main">
    <input id="isNotDelTagSites" name="isNotDelTagSites" type="hidden" value="N"/>
    <input id="isExposeExtraRewardsSites" name="isExposeExtraRewardsSites" type="hidden" value="N"/>
    <input id="modelCode" name="modelCode" type="hidden" value="MS-F813QBDUIDZ"/>
    <input id="categorySubSubTypeCode" name="categorySubSubTypeCode" type="hidden"/>
    <input id="categorySubTypeCode" name="categorySubTypeCode" type="hidden" value="01010400"/>
    <input id="categoryTypeCode" name="categoryTypeCode" type="hidden" value="01010000"/>
    <input id="typeCodeForGNB" name="typeCodeForGNB" type="hidden" value="01010000"/>
    <input id="groupCodeForGNB" name="groupCodeForGNB" type="hidden" value="01000000"/>
    <input id="categoryGroupCode" name="categoryGroupCode" type="hidden" value="01000000"/>
    <input id="emiUrl" name="emiUrl" type="hidden" value="/id/web/emi"/>
    <input id="financingUrl" name="financingUrl" type="hidden" value="/id/web/si-calculator"/>
    <input id="categoryname" name="categoryname" type="hidden"/>
    <input id="modelName" name="modelName" type="hidden" value="SM-A075F/DS"/>
    <input id="useNewWtb" name="useNewWtb" type="hidden" value="Y"/>
    <input id="priceCurrency" name="priceCurrency" type="hidden" value="idr"/>
    <input id="gpvGetTypeCheck" name="gpvGetTypeCheck" type="hidden" value="Y"/>
    <input id="isPreqa" name="isPreqa" type="hidden" value="false"/>
    <input id="typeux2025" name="typeux2025" type="hidden" value="Y"/>
    <div class="pd-g-product-promotion-bar">
    </div>
    <div class="pd-g-product-detail-offer-banner">
     <section class="pd-banner" data-fold-data='{"bgColor": "#f7f7f7", "textColor": "black"}' data-prefold-data='{"bgColor": "", "textColor": ""}' data-preunfold-data='{"bgColor": "", "textColor": ""}' data-unfold-data='{"bgColor": "#f7f7f7", "textColor": "black"}' style="display:none;">
      <div class="pd-banner__inner" data-end-text="Selesai di" data-end-time="203012310000Z" data-start-text="Mulai di">
       
        <div class="pd-banner__content-wrap">
         <div class="pd-banner__content">
          <h2 class="pd-banner__headline">
           Dapatkan gratis hadiah
          </h2>
          <div class="pd-banner__desc-wrap">
           <p class="pd-banner__desc">
            - Gratis hadiah Travel Adapter 25W dan Case A07 (Stock Terbatas)
            <br/>
            - Bayar cuman Rp559.300 dengan menambahkan Buds Core ke troli Anda!
            <br/>
            - Samsung Care+ proteksi diskon 30%
            <br/>
            <br/>
            Periode: 14 Maret - 10 April 2025
           </p>
           <div class="pd-banner__image-mo">
            <div class="image">
             <img alt="Dapatkan gratis hadiah" class="image__preview lazy-load" data-comp-name="image" data-src="?$144_80_PNG$" role="img"/>
             <img alt="Dapatkan gratis hadiah" class="image__main lazy-load" data-comp-name="image" data-src="?$144_80_PNG$" role="img"/>
            </div>
           </div>
          </div>
         </div>
        </div>
       </div>
       <a an-ac="view more" an-ca="indication" an-la="view more" an-tr="pdd11_offer banner-product detail-image-arrow" aria-expanded="false" class="pd-banner__toggle" href="javascript:void(0)" role="button">
        <svg class="icon icon--open" focusable="false">
         <use xlink:href="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/svg-sprite.svg#open-down-regular">
         </use>
        </svg>
        <svg class="icon icon--close" focusable="false">
         <use xlink:href="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/svg-sprite.svg#close-up-regular">
         </use>
        </svg>
        <span class="pd-banner__toggle-open-text hidden">
         Buka Info Lebih Lanjut
        </span>
        <span class="pd-banner__toggle-close-text hidden">
         Tutup Info Lebih Lanjut
        </span>
       </a>
      </div>
     </section>
    </div>
    
           
           </div>
          </div>
         </div>
        </div>
        <div class="pdd39-anchor-nav__price pd-buying-price" id="sgDevPriceAreaBase">
         <div class="price-ux__wrap pd-buying-price__wrap">
          <div id="sgDevPriceArea">
          </div>
          <div class="pdd39-anchor-nav__cta pd-buying-price__cta">
          </div>
         </div>
        </div>














`;

}
