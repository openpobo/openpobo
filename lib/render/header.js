import { SITE } from "../config";

import {
  renderHeaderNav
} from "./nav-header";

export function renderHeader(){

return `


        <div class="option-result-dev result-option-assured-buy-back sdf-component-template" data-sdf-template="assuredBuyBackResult @ drawObj" data-sdf-unwrap="true">
         <input class="hidden result-price" data-sdf-attr.data-price="{{assuredBuyBackResult.dataPrice}}" data-sdf-attr.data-sale-price="{{assuredBuyBackResult.dataSalePrice}}" type="hidden"/>
        </div>
        <div class="pd-select-option off-change option-new-assured-buy-back sdf-component-template" data-sdf-template="newAssuredBuyBack @ drawObj" data-sdf-test="{{newAssuredBuyBack.hasComponent}}" data-sdf-unwrap="true">
         <div class="pd-select-option__headline-wrap">
          <h3 class="pd-select-option__headline" data-sdf-test="{{newAssuredBuyBack.title}}">
           {{newAssuredBuyBack.title}}
          </h3>
          <span class="pd-select-option__cta-wrap" data-sdf-test="{{newAssuredBuyBack.learnMoreCta.text}}">
           <a an-ac="pd buying tool" an-ca="option click" an-la="galaxy assured:learn more" an-tr="header(pim)_option selector-product detail-select-service option" aria-haspopup="dialog" class="cta cta--underline cta--black add-special-tagging" data-sdf-attr.data-target-popup="{{newAssuredBuyBack.learnMoreCta.layerTarget}}" data-sdf-attr.href="{{newAssuredBuyBack.learnMoreCta.href}}" data-sdf-attr.target="{{newAssuredBuyBack.learnMoreCta.target}}" data-sdf-attr.title="{{newAssuredBuyBack.learnMoreCta.title}}">
            {{newAssuredBuyBack.learnMoreCta.text}}
           </a>
          </span>
         </div>
         <p class="pd-select-option__desc" data-sdf-test="{{newAssuredBuyBack.description}}">
          {{newAssuredBuyBack.description}}
         </p>
         <p class="pd-select-option__notice">
          <svg aria-hidden="true" class="icon" focusable="false">
           <use href="#information-error-bold" xlink:href="#information-error-bold">
           </use>
          </svg>
          Please select LAPAKGACOR Assured Buyback or no coverage
         </p>
         <div class="pd-select-option__wrap">
          <ul class="pd-select-option__list pd-select-option__list--wide" role="list">
           <li class="pd-select-option__item" data-sdf-repeat.item="{{newAssuredBuyBack.itemSet}}" role="listitem">
            <div class="pd-option-selector">
             <input an-ac="pd buying tool" an-ca="option click" an-la="galaxy assured:yes" an-tr="header(pim)_option selector-product detail-select-service option" class="hidden option-input open-popup add-special-tagging" id="pd-galaxy-new-assured-{{item.index}}" name="pd-galaxy-new-assured" type="radio"/>
             <label class="pd-option-selector__label" for="pd-galaxy-new-assured-{{item.index}}">
              <span class="pd-option-selector__text-wrap">
               <span class="pd-option-selector__text">
                <strong class="pd-option-selector__main-text" data-sdf-test="{{item.title}}">
                 {{item.title}}
                </strong>
                <span class="pd-option-selector__sub-text" data-sdf-test="{{item.priceDisplay}}">
                 {{item.priceDisplay}}
                </span>
               </span>
              </span>
             </label>
            </div>
           </li>
           <li class="pd-select-option__item" role="listitem">
            <div class="pd-option-selector">
             <input an-ac="pd buying tool" an-ca="option click" an-la="galaxy assured:no" an-tr="header(pim)_option selector-product detail-select-service option" class="hidden option-input add-special-tagging" data-event-type="{{newAssuredBuyBack.noAttr.eventType}}" id="pd-galaxy-new-assured-0" name="pd-galaxy-new-assured" type="radio"/>
             <label class="pd-option-selector__label" for="pd-galaxy-new-assured-0">
              <span class="pd-option-selector__text-wrap">
               <span class="pd-option-selector__text">
                <strong class="pd-option-selector__main-text">
                 {{newAssuredBuyBack.noAttr.text}}
                </strong>
               </span>
              </span>
             </label>
            </div>
           </li>
          </ul>
         </div>
        </div>
        <div class="option-result-dev result-option-new-assured-buy-back sdf-component-template" data-sdf-template="newAssuredBuyBackResult @ drawObj" data-sdf-unwrap="true">
         <input class="hidden result-price" data-sdf-attr.data-display-name="{{newAssuredBuyBackResult.dataDisplayName}}" data-sdf-attr.data-display-price="{{newAssuredBuyBackResult.dataDisplayPrice}}" data-sdf-attr.data-price="{{newAssuredBuyBackResult.dataPrice}}" data-sdf-attr.data-sale-price="{{newAssuredBuyBackResult.dataPrice}}" data-sdf-attr.model-code="{{newAssuredBuyBackResult.dataModelCode}}" data-sdf-attr.model-name="{{newAssuredBuyBackResult.dataModelName}}" type="hidden"/>
        </div>
        <!-- CRHQ-3143 [B2C] ES - SC+ 개선 -->
        <div class="pd-select-option option-care sdf-component-template" data-sdf-template=" care @ drawObj" data-sdf-test="{{care.hasComponent}}" data-sdf-unwrap="true">
         <div class="pd-select-option__headline-wrap">
          <h3 class="pd-select-option__headline" data-sdf-test="{{care.title}}">
           Benefits of LAPAKGACOR LOGIN
          </h3>
          <button an-ac="pd buying tool" an-ca="option click" an-la="samsung care:learn more" an-tr="hdd02_product info.-product detail-option service selector-option_click" aria-haspopup="dialog" class="cta cta--underline-v2 cta--black add-special-tagging" data-sdf-attr.data-target-popup="{{care.learnMoreCta.layerTarget}}" data-sdf-attr.target="{{care.learnMoreCta.target}}" data-sdf-attr.title="{{care.learnMoreCta.title}}" data-sdf-test="{{care.learnMoreCta.isNotOutLink}}">
           {{care.learnMoreCta.text}}
          </button>
          <a an-ac="pd buying tool" an-ca="option click" an-la="samsung care:learn more" an-tr="hdd02_product info.-product detail-option service selector-option_click" aria-haspopup="dialog" class="cta cta--underline-v2 cta--black cta--icon" data-sdf-attr.data-target-popup="{{care.learnMoreCta.layerTarget}}" data-sdf-attr.href="{{care.learnMoreCta.href}}" data-sdf-attr.target="{{care.learnMoreCta.target}}" data-sdf-attr.title="{{care.learnMoreCta.title}}" data-sdf-test="{{care.learnMoreCta.isOutLink}}" rel="nofollow">
           {{care.learnMoreCta.text}}
           <svg aria-hidden="true" class="icon" focusable="false">
            <use href="#outlink-bold" xlink:href="#outlink-bold">
            </use>
           </svg>
          </a>
         </div>
         <p class="pd-select-option__desc" data-sdf-test="{{care.description}}">
          LAPAKGACOR ~ APK Demo Slot Toto 4D Server Stabil Malam Ini
         </p>
         <p class="pd-select-option__notice pd-select-option__notice--normal checkingSamsungCare">
          <svg aria-hidden="true" class="icon" focusable="false">
           <use href="#information-error-bold" xlink:href="#information-error-bold">
           </use>
          </svg>
          Tambah Samsung Care+ atau lanjutkan tanpa perlindungan extra
         </p>
         <div class="pd-select-option__wrap">
          <ul class="pd-select-option__list pd-select-option__list--wide pd-select-option__list--samsung-care" role="list">
           <li class="pd-select-option__item" role="listitem">
            <div class="pd-option-selector">
             <input an-ac="pd buying tool" an-ca="option click" an-la="samsung care:no" an-tr="hdd02_product info.-product detail-option service selector-option_click" class="hidden option-input add-special-tagging" data-event-type="{{care.noAttr.eventType}}" id="pd-samsung-care-0" name="pd-samsung-care" type="radio"/>
             <label class="pd-option-selector__label" for="pd-samsung-care-0">
              <span class="pd-option-selector__text-wrap">
               <span class="pd-option-selector__text">
                <strong class="pd-option-selector__main-text">
                 Akses Cepat & Stabil
                </strong>
                <!-- CRHQ-3143 [B2C] ES - SC+ 개선 -->
                <!-- CRHQ-3143 [B2C] ES - SC+ 개선 -->
               </span>
              </span>
             </label>
            </div>
           </li>
           <li class="pd-select-option__item" role="listitem">
            <div class="pd-option-selector">
             <input an-ac="pd buying tool" an-ca="option click" an-la="samsung care:no" an-tr="hdd02_product info.-product detail-option service selector-option_click" class="hidden option-input add-special-tagging" data-event-type="{{care.noAttr.eventType}}" id="pd-samsung-care-0" name="pd-samsung-care" type="radio"/>
             <label class="pd-option-selector__label" for="pd-samsung-care-0">
              <span class="pd-option-selector__text-wrap">
               <span class="pd-option-selector__text">
                <strong class="pd-option-selector__main-text">
                 Banyak Provider & Game Populer
                </strong>
                <!-- CRHQ-3143 [B2C] ES - SC+ 개선 -->
                <!-- CRHQ-3143 [B2C] ES - SC+ 개선 -->
               </span>
              </span>
             </label>
            </div>
           </li>
           <li class="pd-select-option__item" role="listitem">
            <div class="pd-option-selector">
             <input an-ac="pd buying tool" an-ca="option click" an-la="samsung care:no" an-tr="hdd02_product info.-product detail-option service selector-option_click" class="hidden option-input add-special-tagging" data-event-type="{{care.noAttr.eventType}}" id="pd-samsung-care-0" name="pd-samsung-care" type="radio"/>
             <label class="pd-option-selector__label" for="pd-samsung-care-1">
              <span class="pd-option-selector__text-wrap">
               <span class="pd-option-selector__text">
                <strong class="pd-option-selector__main-text">
                 Sistem Keamanan Berlapis
                </strong>
                <!-- CRHQ-3143 [B2C] ES - SC+ 개선 -->
                <!-- CRHQ-3143 [B2C] ES - SC+ 개선 -->
               </span>
              </span>
             </label>
            </div>
           </li>
           <li class="pd-select-option__item" role="listitem">
            <div class="pd-option-selector">
             <input an-ac="pd buying tool" an-ca="option click" an-la="samsung care:no" an-tr="hdd02_product info.-product detail-option service selector-option_click" class="hidden option-input add-special-tagging" data-event-type="{{care.noAttr.eventType}}" id="pd-samsung-care-0" name="pd-samsung-care" type="radio"/>
             <label class="pd-option-selector__label" for="pd-samsung-care-1">
              <span class="pd-option-selector__text-wrap">
               <span class="pd-option-selector__text">
                <strong class="pd-option-selector__main-text">
                 Support 24/7 Ramah & Responsif
                </strong>
                <!-- CRHQ-3143 [B2C] ES - SC+ 개선 -->
                <!-- CRHQ-3143 [B2C] ES - SC+ 개선 -->
               </span>
              </span>
             </label>
            </div>
           </li>
           <li class="pd-select-option__item" role="listitem">
            <div class="pd-option-selector">
             <input an-ac="pd buying tool" an-ca="option click" an-la="samsung care:no" an-tr="hdd02_product info.-product detail-option service selector-option_click" class="hidden option-input add-special-tagging" data-event-type="{{care.noAttr.eventType}}" id="pd-samsung-care-0" name="pd-samsung-care" type="radio"/>
             <label class="pd-option-selector__label" for="pd-samsung-care-1">
              <span class="pd-option-selector__text-wrap">
               <span class="pd-option-selector__text">
                <strong class="pd-option-selector__main-text">
                 Tampilan Bersih & Mudah Dipahami
                </strong>
                <!-- CRHQ-3143 [B2C] ES - SC+ 개선 -->
                <!-- CRHQ-3143 [B2C] ES - SC+ 개선 -->
               </span>
              </span>
             </label>
            </div>
           </li>
          </ul>
         </div>
        </div>
        <div class="option-result-dev hidden result-care sdf-component-template" data-sdf-template=" careResult @ drawObj " data-sdf-unwrap="true">
         <input class="hidden result-price" data-sdf-attr.data-id="{{careResult.dataId}}" data-sdf-attr.data-model-code="{{careResult.dataModelCode}}" data-sdf-attr.data-model-name="{{careResult.dataModelName}}" data-sdf-attr.data-price="{{careResult.dataPrice}}" data-sdf-attr.data-sale-price="{{careResult.dataSalePrice}}" type="hidden"/>
        </div>
        <div class="pd-select-option option-warranty sdf-component-template" data-sdf-template="warranty @ drawObj" data-sdf-test="{{warranty.hasComponent}}" data-sdf-unwrap="true">
         <div class="pd-select-option__headline-wrap">
          <h3 class="pd-select-option__headline" data-sdf-test="{{warranty.title}}">
           {{warranty.title}}
          </h3>
          <span class="pd-select-option__cta-wrap" data-sdf-test="{{warranty.learnMoreCta.text}}">
           <button an-ac="pd buying tool" an-ca="option click" an-la="extended warranty:learn more" an-tr="hdd02_product info.-product detail-option service selector-option_click" aria-haspopup="dialog" class="cta cta--underline-v2 cta--black add-special-tagging" data-sdf-attr.data-target-popup="{{warranty.learnMoreCta.layerTarget}}" data-sdf-attr.target="{{warranty.learnMoreCta.target}}" data-sdf-attr.title="{{warranty.learnMoreCta.title}}" data-sdf-test="{{ warranty.learnMoreCta.isNotOutLink}}" href="#" rel="nofollow">
            {{warranty.learnMoreCta.text}}
           </button>
           <a an-ac="pd buying tool" an-ca="option click" an-la="extended warranty:learn more" an-tr="hdd02_product info.-product detail-option service selector-option_click" aria-haspopup="dialog" class="cta cta--underline-v2 cta--black cta--icon" data-sdf-attr.data-target-popup="{{warranty.learnMoreCta.layerTarget}}" data-sdf-attr.target="{{warranty.learnMoreCta.target}}" data-sdf-attr.title="{{warranty.learnMoreCta.title}}" data-sdf-test="{{warranty.learnMoreCta.isOutLink}}">
            {{warranty.learnMoreCta.text}}
            <svg aria-hidden="true" class="icon" focusable="false">
             <use href="#outlink-bold" xlink:href="#outlink-bold">
             </use>
            </svg>
           </a>
          </span>
         </div>
         <p class="pd-select-option__desc" data-sdf-test="{{warranty.description}}">
          {{warranty.description}}
         </p>
         <div class="pd-select-option__wrap">
          <ul class="pd-select-option__list" role="list">
           <li class="pd-select-option__item" role="listitem">
            <div class="pd-option-selector">
             <input an-ac="pd buying tool" an-ca="option click" an-la="extended warranty:yes" an-tr="hdd02_product info.-product detail-option service selector-option_click" class="hidden option-input add-special-tagging {{warranty.yesAttr.class}}" data-target-popup="{{warranty.yesAttr.layerTarget}}" id="pd-samsung-warranty-0" name="pd-samsung-warranty" type="radio"/>
             <label class="pd-option-selector__label" for="pd-samsung-warranty-0">
              <span class="pd-option-selector__text-wrap">
               <span class="pd-option-selector__text">
                <strong class="pd-option-selector__main-text">
                 {{warranty.yesAttr.text}}
                </strong>
                <span class="pd-option-selector__sub-text">
                 {{warranty.yesAttr.subText}}
                </span>
               </span>
              </span>
             </label>
            </div>
           </li>
           <li class="pd-select-option__item" role="listitem">
            <div class="pd-option-selector">
             <input an-ac="pd buying tool" an-ca="option click" an-la="extended warranty:no" an-tr="hdd02_product info.-product detail-option service selector-option_click" class="hidden option-input add-special-tagging {{warranty.noAttr.class}}" data-event-type="{{warranty.noAttr.eventType}}" data-target-popup="{{warranty.noAttr.layerTarget}}" id="pd-samsung-warranty-1" name="pd-samsung-warranty" type="radio"/>
             <label class="pd-option-selector__label" for="pd-samsung-warranty-1">
              <span class="pd-option-selector__text-wrap">
               <span class="pd-option-selector__text">
                <strong class="pd-option-selector__main-text">
                 {{warranty.noAttr.text}}
                </strong>
               </span>
              </span>
             </label>
            </div>
           </li>
          </ul>
         </div>
        </div>
        <div class="option-result result-warranty sdf-component-template" data-sdf-template=" warrantyResult @ drawObj " data-sdf-unwrap="true">
         <div class="option-result__text-wrap result-price" data-sdf-attr.data-id="{{warrantyResult.dataId}}" data-sdf-attr.data-model-code="{{warrantyResult.dataModelCode}}" data-sdf-attr.data-model-name="{{warrantyResult.dataModelName}}" data-sdf-attr.data-price="{{warrantyResult.dataPrice}}" data-sdf-attr.data-sale-price="{{warrantyResult.dataSalePrice}}">
          <p class="option-result__text-title" data-sdf-test="{{warrantyResult.displayModelName}}">
           {{warrantyResult.displayModelName}}
          </p>
          <p class="option-result__text" data-sdf-test="{{warrantyResult.discountText1}}">
           {{warrantyResult.discountText1}}
          </p>
         </div>
         <div class="option-result__desc-wrap" data-sdf-test="{{warrantyResult.description1}}">
          <p class="option-result__desc">
           {{warrantyResult.description1}}
          </p>
         </div>
         <a class="option-result__close remove-warranty-result" href="javascript:void(0)">
          <span class="hidden">
           Tutup
          </span>
          <svg class="icon" focusable="false" viewbox="0 0 96 96">
           <path d="M79.17 11.17L48 42.34 16.83 11.17l-5.66 5.66L42.34 48 11.17 79.17l5.66 5.66L48 53.66l31.17 31.17 5.66-5.66L53.66 48l31.17-31.17z">
           </path>
          </svg>
         </a>
        </div>
        <div class="pd-select-option option-warranty-vd sdf-component-template" data-sdf-template="warrantyVd @ drawObj" data-sdf-test="{{warrantyVd.hasComponent}}" data-sdf-unwrap="true">
         <div class="pd-select-option__headline-wrap">
          <h3 class="pd-select-option__headline">
           {{warrantyVd.title}}
          </h3>
          <span class="pd-select-option__cta-wrap">
           <a an-ac="pd buying tool" an-ca="option click" an-la="extended warranty:learn more" an-tr="hdd02_product info.-product detail-option service selector-option_click" aria-haspopup="dialog" class="cta cta--underline-v2 cta--black cta--icon" data-sdf-attr.data-target-popup="{{warrantyVd.learnMoreCta.learnMoreTargetPopup}}" data-sdf-attr.href="{{warrantyVd.learnMoreCta.learnMoreHref}}" data-sdf-attr.target="{{warrantyVd.learnMoreCta.learnMoreTarget}}">
            {{warrantyVd.learnMoreCta.learnMoreText}}
            <svg aria-hidden="true" class="icon" focusable="false">
             <use href="#outlink-bold" xlink:href="#outlink-bold">
             </use>
            </svg>
           </a>
          </span>
         </div>
         <p class="pd-select-option__desc">
          {{warrantyVd.description}}
         </p>
         <div class="pd-select-option__wrap">
          <ul class="pd-select-option__list pd-select-option__list--wide" role="list">
           <li class="pd-select-option__item" role="listitem">
            <div class="pd-option-selector">
             <input an-ac="pd buying tool" an-ca="option click" an-la="extended warranty:yes" an-tr="hdd02_product info.-product detail-option service selector-option_click" aria-haspopup="dialog" checked="" class="hidden" data-target-popup="{{warrantyVd.yesAttr.layerTarget}}" id="pd-extended-warranty-option-0" name="pd-extended-warranty-option" type="radio"/>
             <label class="pd-option-selector__label" for="pd-extended-warranty-option-0">
              <span class="pd-option-selector__text-wrap">
               <span class="pd-option-selector__text">
                <strong class="pd-option-selector__main-text">
                 {{warrantyVd.yesAttr.text}}
                </strong>
               </span>
              </span>
             </label>
            </div>
           </li>
           <li class="pd-select-option__item" role="listitem">
            <div class="pd-option-selector">
             <input an-ac="pd buying tool" an-ca="option click" an-la="extended warranty:no" an-tr="hdd02_product info.-product detail-option service selector-option_click" class="hidden option-result-focus" id="pd-extended-warranty-option-1" name="pd-extended-warranty-option" type="radio"/>
             <label class="pd-option-selector__label" for="pd-extended-warranty-option-1">
              <span class="pd-option-selector__text-wrap">
               <span class="pd-option-selector__text">
                <strong class="pd-option-selector__main-text">
                 {{warrantyVd.noAttr.text}}
                </strong>
               </span>
              </span>
             </label>
            </div>
           </li>
          </ul>
         </div>
        </div>
        <div class="option-result option-result--extended-warranty-option sdf-component-template" data-sdf-template="warrantyVdResult @ drawObj" data-sdf-unwrap="true">
         <div class="option-result__text-wrap" data-sdf-attr.data-model-code="{{warrantyVdResult.smcCode}}" data-sdf-attr.data-price="{{warrantyVdResult.price}}">
          <p class="option-result__text-title">
           {{warrantyVdResult.title}}
          </p>
          <p class="option-result__text">
           {{warrantyVdResult.priceDisplay}}
          </p>
         </div>
         <a an-ac="pd buying tool" an-ca="option click" an-la="extended warranty:delete" an-tr="hdd02_product info.-product detail-option service selector-option_click" class="option-result__close" href="javascript:void(0)">
          <span class="hidden">
           Close
          </span>
          <svg aria-hidden="true" class="icon" focusable="false" viewbox="0 0 96 96">
           <path d="M79.17 11.17L48 42.34 16.83 11.17l-5.66 5.66L42.34 48 11.17 79.17l5.66 5.66L48 53.66l31.17 31.17 5.66-5.66L53.66 48l31.17-31.17z">
           </path>
          </svg>
         </a>
        </div>
        <!-- (2021.02.08 추가) Tooltip 기능 추가 -->
        <div class="pd-select-option pd-select-option--delivery-detail sdf-component-template" data-sdf-template="delivery @ drawObj" data-sdf-test="{{delivery.hasComponent}}" data-sdf-unwrap="true">
         <div class="pd-select-option__headline-wrap">
          <h3 class="pd-select-option__headline">
           {{delivery.headline}}
          </h3>
         </div>
         <div class="pd-select-option__input-wrap">
          <div class="text-field-v2 no-title {{delivery.labelClass}}">
           <label class="text-field-v2__hint" for="delivery-zipcode">
            {{delivery.label}}
           </label>
           <div class="text-field-v2__input-wrap">
            <input autocomplete="off" class="text-field-v2__input" data-sdf-attr.disabled="{{delivery.inputAttr.disabled}}" data-sdf-attr.maxlength="{{delivery.inputAttr.maxlength}}" data-sdf-attr.value="{{delivery.inputAttr.value}}" id="delivery-zipcode" type="text"/>
            <button an-ac="pd buying tool" an-ca="option click" an-la="zip code:delete" an-tr="header(pim)_option selector-product detail-image-submit" class="text-field-v2__input-icon delete add-special-tagging" title="Delete">
             <svg class="icon delete" focusable="false">
              <use href="#cancel-bold" xlink:href="#cancel-bold">
              </use>
             </svg>
            </button>
           </div>
           <p class="text-field-v2__text error">
            {{delivery.errorMessage}}
           </p>
          </div>
          <a an-ac="pd buying tool" an-ca="option click" an-la="delivery details:Apply" an-tr="hdd02_product info.-product detail-apply cta-option_click1" class="cta cta--contained cta--black check-zipcode {{delivery.ctaClass}}" href="javascript:void(0)" title="Apply">
           Terapkan
          </a>
         </div>
        </div>
        <div class="option-result result-delivery sdf-component-template" data-sdf-template="deliveryResult @ drawObj" data-sdf-unwrap="true">
         <div class="option-result__text-wrap">
          <p class="option-result__text delivery-priority" data-sdf-test="{{deliveryResult.priorityText}}">
           {{deliveryResult.priorityText}}
          </p>
          <p class="option-result__text delivery-standard" data-sdf-test="{{deliveryResult.mainText}}">
           {{deliveryResult.mainText}}
          </p>
          <p class="option-result__sub-text" data-sdf-test="{{deliveryResult.subText}}">
           {{deliveryResult.subText}}
           <br/>
           Standard installation charges may apply.
           <a aria-label="Link Title" class="option-result__text-link" href="https://images.samsung.com/is/content/samsung/assets/in/info/installation/Delivery-Service-TnC.pdf" target="_blank">
            Click here
           </a>
           for more details.
          </p>
         </div>
         <div class="option-result__desc-wrap">
          <p class="option-result__desc-title" data-sdf-test="{{deliveryResult.decText}}">
           {{deliveryResult.decText}}
          </p>
          <p class="option-result__desc" data-sdf-repeat.item="{{deliveryResult.disclaimerList}}">
           {{item.disclaimer}}
          </p>
         </div>
         <a an-ac="pd buying tool" an-ca="option click" an-la="delivery details:delete" an-tr="hdd02_product info.-product detail-option selector-option_click1" class="option-result__close remove-delivery" href="javascript:void(0)">
          <span class="hidden">
           Tutup
          </span>
          <svg aria-hidden="true" class="icon" focusable="false">
           <use href="#delete-bold" xlink:href="#delete-bold">
           </use>
          </svg>
         </a>
        </div>
        <div class="pd-select-option option-tariff sdf-component-template" data-sdf-template="tariffOption @ drawObj" data-sdf-test="{{tariffOption.hasComponent}}" data-sdf-unwrap="true">
         <div class="pd-select-option__headline-wrap">
          <h3 class="pd-select-option__headline">
           {{tariffOption.headline}}
          </h3>
          <span class="pd-select-option__cta-wrap" data-sdf-test="{{tariffOption.href}}">
           <a an-ac="pd buying tool" an-ca="option click" an-la="tariff:learn more" an-tr="hdd02_product info.-product detail-option service selector-option_click" aria-haspopup="dialog" class="cta cta--underline-v2 cta--black cta--icon add-special-tagging" data-sdf-attr.href="{{tariffOption.href}}" rel="nofollow" role="button" target="_blank" title="Lebih detail">
            Lebih detail
            <svg aria-hidden="true" class="icon" focusable="false">
             <use href="#outlink-bold" xlink:href="#outlink-bold">
             </use>
            </svg>
           </a>
          </span>
         </div>
         <p class="pd-select-option__desc">
          {{tariffOption.description}}
         </p>
         <p class="pd-select-option__carrier" data-sdf-list.logoitem="{{tariffOption.logoList}}">
          <img class="carrier-logo" data-sdf-attr.alt="{{logoitem.alt}}" data-sdf-attr.src="{{logoitem.src}}"/>
         </p>
         <div class="pd-select-option__wrap">
          <ul class="pd-select-option__list" role="list">
           <li class="pd-select-option__item" role="listitem">
            <div class="pd-option-selector">
             <input an-ac="pd buying tool" an-ca="option click" an-la="tariff:yes" an-tr="hdd02_product info.-product detail-option service selector-option_click" aria-haspopup="dialog" checked="" class="hidden option-input add-special-tagging" data-target-popup="tariffPopup" id="pd-tariff-option-0" name="pd-tariff-option" type="radio"/>
             <label class="pd-option-selector__label" for="pd-tariff-option-0">
              <span class="pd-option-selector__text-wrap">
               <span class="pd-option-selector__text">
                <span class="pd-option-selector__main-text">
                 {{tariffOption.yesAttr.text}}
                </span>
               </span>
              </span>
             </label>
            </div>
           </li>
           <li class="pd-select-option__item" role="listitem">
            <div class="pd-option-selector">
             <input an-ac="pd buying tool" an-ca="option click" an-la="tariff:no" an-tr="hdd02_product info.-product detail-option service selector-option_click" class="hidden option-input add-special-tagging" id="pd-tariff-option-1" name="pd-tariff-option" type="radio"/>
             <label class="pd-option-selector__label" for="pd-tariff-option-1">
              <span class="pd-option-selector__text-wrap">
               <span class="pd-option-selector__text">
                <span class="pd-option-selector__main-text">
                 {{tariffOption.noAttr.text}}
                </span>
               </span>
              </span>
             </label>
            </div>
           </li>
          </ul>
         </div>
        </div>
        <div class="option-result result-tariff-option sdf-component-template" data-sdf-template="tariffOptionResult @ drawObj" data-sdf-test="{{tariffOptionResult.hasComponent}}" data-sdf-unwrap="true">
         <div class="option-result__text-wrap result-price" data-sdf-attr.data-id="{{tariffOptionResult.dataId}}" data-sdf-attr.data-model-code="{{tariffOptionResult.dataModelCode}}" data-sdf-attr.data-price="{{tariffOptionResult.dataPrice}}" data-sdf-attr.data-simsku-code="{{tariffOptionResult.dataSimskuCode}}">
          <p class="option-result__text-title" data-sdf-test="{{tariffOptionResult.displayModelName}}">
           {{tariffOptionResult.displayModelName}}
          </p>
          <p class="option-result__text" data-sdf-test="{{tariffOptionResult.discountText1}}">
           {{tariffOptionResult.discountText1}}
          </p>
         </div>
         <div class="option-result__desc-wrap" data-sdf-test="{{tariffOptionResult.description1}}">
          <p class="option-result__desc">
           {{tariffOptionResult.description1}}
          </p>
          <p class="option-result__desc">
           {{tariffOptionResult.description2}}
          </p>
         </div>
         <a class="option-result__close remove-tariff-option-result" href="javascript:void(0)">
          <span class="hidden">
           Tutup
          </span>
          <svg class="icon" focusable="false" viewbox="0 0 96 96">
           <path d="M79.17 11.17L48 42.34 16.83 11.17l-5.66 5.66L42.34 48 11.17 79.17l5.66 5.66L48 53.66l31.17 31.17 5.66-5.66L53.66 48l31.17-31.17z">
           </path>
          </svg>
         </a>
         <p class="option-result__desc">
          {{tariffOptionResult.description}}
         </p>
         <p class="option-result__price" data-sdf-attr.data-id="{{tariffOptionResult.dataId}}" data-sdf-attr.data-model-code="{{tariffOptionResult.dataModelCode}}" data-sdf-attr.data-price="{{tariffOptionResult.dataPrice}}" data-sdf-attr.data-simsku-code="{{tariffOptionResult.dataSimskuCode}}">
          {{tariffOptionResult.price}}
         </p>
         <p class="option-result__disclaimer">
          {{tariffOptionResult.disclaimer}}
         </p>
        </div>
        <div class="pd-select-option option-embed-addon sdf-component-template" data-sdf-template="embedAddon @ drawObj" data-sdf-test="{{embedAddon.hasComponent}}" data-sdf-unwrap="true">
         <h3 class="pd-select-option__headline">
          {{embedAddon.title}}
         </h3>
         <p class="pd-select-option__desc">
          {{embedAddon.description}}
         </p>
         <ul class="add-on-product-list-wrap" data-sdf-test="{{embedAddon.isNotVDSTEPBUYING}}" data-total-price="0" data-total-sale-price="0">
          <li class="add-on-product{{item.oosClass}}" data-sdf-repeat.item="{{embedAddon.itemSet}}">
           <div class="checkbox-v2">
            <input an-ac="pd buying tool" an-ca="option click" an-la="add on product purchase only:{{item.nameToLowerCase}}" class="checkbox-v3__input" data-modelcode="{{item.modelCode}}" data-modelname="{{item.groupCode}}" id="add-on-product-{{item.index}}" name="checkbox" type="checkbox"/>
            <label class="checkbox-v3__label" for="add-on-product-{{item.index}}">
             <span class="checkbox-v3__label-box-wrap">
              <span class="checkbox-v3__label-box">
               <svg aria-hidden="true" class="checkbox-v3__label-box-icon" focusable="false">
                <use href="#done-bold" xlink:href="#done-bold">
                </use>
               </svg>
              </span>
             </span>
             <span class="checkbox-v3__label-text">
              {{item.name}}
             </span>
            </label>
           </div>
           <div class="add-on-product__image">
            <div class="image">
             <img alt="{{item.imgAlt}}" class="image__preview lazy-load" data-src="{{item.imgSrc}}" role="img"/>
             <img alt="{{item.imgAlt}}" class="image__main lazy-load" data-src="{{item.imgSrc}}" role="img"/>
            </div>
           </div>
           <div class="add-on-product__detail-wrap">
            <div class="add-on-product__text-wrap">
             <span class="badge-icon badge-icon--label-v2 {{item.iconClass}}" data-sdf-test="{{item.iconClass}}">
              {{item.iconTitle}}
             </span>
             <p class="add-on-product__title" data-model-name="{{item.name}}">
              {{item.name}}
             </p>
             <p class="add-on-product__serial-number" data-model-code="{{item.modelCode}}" data-sdf-test="{{item.modelCode}}">
              {{item.modelCode}}
             </p>
             <p class="add-on-product__desc" data-sdf-test="{{item.description}}">
              {{item.description}}
             </p>
            </div>
            <div class="add-on-product__price-wrap">
             <p class="add-on-product__final-price" data-price="{{item.finalPriceValue}}">
              {{item.finalPrice}}
             </p>
             <del class="add-on-product__original-price" data-original-price="{{item.originalPriceValue}}" data-sdf-test="{{item.originalPrice}}">
              {{item.originalPrice}}
             </del>
             <span class="add-on-product__saving-price" data-save-price="{{item.savePriceValue}}" data-sdf-test="{{item.savePrice}}">
              {{item.savePrice}}
             </span>
             <span class="add-on-product__out-of-stock" data-sdf-test="{{item.isOOS}}">
              Habis
             </span>
            </div>
            <button aria-label="Learn More" class="cta cta--underline-v2 cta--black cta-learn-more" data-model-idx="{{item.index}}" data-sdf-test="{{item.isLearnMorePopup}}">
             Lebih detail
            </button>
           </div>
          </li>
         </ul>
         <ul class="add-on-product-list-wrap add-on-product-list-wrap--vd" data-sdf-test="{{embedAddon.isVDSTEPBUYING}}" data-total-price="0" data-total-sale-price="0">
          <li class="add-on-product{{item.oosClass}}{{item.hideClass}}" data-sdf-repeat.item="{{embedAddon.itemSet}}" data-view-more-item="true">
           <div class="add-on-product__image">
            <div class="image">
             <img alt="{{item.imgAlt}}" class="image__preview lazy-load responsive-img" data-comp-name="image" data-desktop-src="" data-mobile-src="" data-src="" role="img"/>
             <img alt="{{item.imgAlt}}" class="image__main lazy-load responsive-img lazy-load" data-comp-name="image" data-desktop-src="{{item.imgSrc}}?$72_72_PNG$" data-mobile-src="{{item.imgSrc}}?$128_128_PNG$" data-src="{{item.imgSrc}}" role="img"/>
            </div>
           </div>
           <div class="add-on-product__detail-wrap">
            <div class="add-on-product__text-wrap">
             <span class="badge-icon badge-icon--label-v2 {{item.iconClass}}" data-sdf-test="{{item.iconClass}}">
              {{item.iconTitle}}
             </span>
             <p class="add-on-product__title" data-model-name="{{item.name}}">
              {{item.name}}
             </p>
             <p class="add-on-product__desc" data-sdf-test="{{item.description}}">
              {{item.description}}
             </p>
             <ul class="add-on-product__dot-list" data-sdf-test="{{item.dotList1}}">
              <li data-sdf-test="{{item.dotList1}}">
               {{item.dotList1}}
              </li>
              <li data-sdf-test="{{item.dotList2}}">
               {{item.dotList2}}
              </li>
              <li data-sdf-test="{{item.dotList3}}">
               {{item.dotList3}}
              </li>
             </ul>
            </div>
            <div class="add-on-product__price-wrap">
             <p class="add-on-product__final-price" data-price="{{item.finalPriceValue}}">
              {{item.finalPrice}}
             </p>
             <del class="add-on-product__original-price" data-original-price="{{item.originalPriceValue}}" data-sdf-test="{{item.originalPrice}}">
              {{item.originalPrice}}
             </del>
             <span class="add-on-product__saving-price" data-save-price="{{item.savePriceValue}}" data-sdf-test="{{item.savePrice}}">
              {{item.savePrice}}
             </span>
             <span class="add-on-product__out-of-stock" data-sdf-test="{{item.isOOS}}">
              Habis
             </span>
            </div>
            <button an-ac="pd buying tool" an-ca="option click" an-la="add-on:add item" an-tr="hdd02_pdp header-product detail-add item-option_click" aria-label="Add" class="cta cta--outlined cta--black embed-addon-add" data-id="add-on-product-{{item.index}}" data-mode-code="{{item.modelCode}}" data-sdf-test="{{item.isStock}}">
             Tambah
            </button>
            <button an-ac="pd buying tool" an-ca="option click" an-la="add-on:add item" an-tr="hdd02_pdp header-product detail-add item-option_click" aria-label="Add" class="cta cta--outlined cta--black cta--disabled embed-addon-add" data-sdf-test="{{item.isOOS}}" disabled="">
             Tambah
            </button>
           </div>
          </li>
         </ul>
         <div class="pd-select-option__view-more" data-sdf-test="{{embedAddon.useMobileCTA}}">
          <button aria-expanded="false" class="cta cta--icon" data-js-action="offerListViewMore" data-text-close="Lihat sedikit" data-text-open="Lihat selengkapnya" type="button">
           <span class="pd-select-option__view-more-text">
            Lihat selengkapnya
           </span>
           <svg aria-hidden="true" class="icon" focusable="false">
            <use href="#open-down-regular" xlink:href="#open-down-regular">
            </use>
           </svg>
          </button>
         </div>
        </div>
        <div data-sdf-template="offerContent_promotionMessage @ message" data-sdf-unwrap="true">
         <div class="dot-list__text-wrap {{message.item.contentWrapperClass}}">
          <span class="dot-list__text" data-sdf-test="{{message.item.offerTitle}}">
           {{message.item.offerTitle}}
          </span>
          <span class="dot-list__tooltip" data-sdf-test="{{message.item.offerTooltip}}">
           <button aria-describedby="descTip" class="dot-list__tooltip-cta">
            <span class="hidden">
             ?
            </span>
           </button>
           <span class="dot-list__tooltip-message" id="descTip" role="tooltip">
            <span class="dot-list__tooltip-message-text">
             {{message.item.offerTooltip}}
            </span>
            <button class="dot-list__tooltip-close">
             <span class="hidden">
              Close
             </span>
             <svg aria-hidden="true" class="icon icon-delete" focusable="false">
              <use href="#cancel-close-regular" xlink:href="#cancel-close-regular">
              </use>
             </svg>
            </button>
           </span>
          </span>
          <a an-ac="pd buying tool" an-ca="option click" an-la="offers:{{message.item.title}}:{{message.item.linkText}}" an-tr="hdd02_product info.-product detail-offers-option_click1" class="cta cta--underline-v2 cta--black" data-sdf-attr.href="{{message.item.linkUrl}}" data-sdf-attr.title="{{message.item.linkText}}" data-sdf-test="{{message.item.linkEnabled}}">
           {{message.item.linkText}}
          </a>
         </div>
         <p class="dot-list__desc" data-sdf-test="{{message.item.hasTCCTA}}">
          {{message.item.tcCTAText}}
         </p>
         <p class="dot-list__desc" data-sdf-test="{{message.item.hasPeriod}}">
          {{message.item.periodText}}
         </p>
        </div>
       </div>
       <!--googleon: all-->
      </div>
    <div class="pd-g-feature-benefit-ux2 pd-g-feature-benefit">
     <!-- isNotBuyingPd-->
     <!-- FaqSeo -->
    </div>
    <div class="pd-g-reasons-to-buy-ux2">
     <input id="rtbListSize" name="rtbListSize" type="hidden" value="4"/>
     <section class="pdd28-reasons-to-buy pdd28-reasons-to-buy--theme-white-card" style="display:none;">

    <style>
      :root{
          --lx-bg: 355070;
          --lx-card: 355070;
          --lx-text: #0f172a;
          --lx-muted:#6b7280;
          --lx-border:48CAE4;
          --lx-accent:6A994E;    /* gold */
          --lx-accent-2:355070;  /* deep slate */
          --lx-radius:16px;
          --lx-shadow:0 6px 24px rgba(2,6,23,.06);
      }

      .lx-wrap{
          background: var(--lx-bg);
          color: var(--lx-text);
          font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Arial, sans-serif;
      }
      .lx-container{
          max-width:1425px;
          margin:0 auto;
          padding: 0px 16px 0px;
      }

      /* Section shell */
      .lx-section{
          background: var(--lx-card);
          border:1px solid var(--lx-border);
          border-radius:var(--lx-radius);
          box-shadow:var(--lx-shadow);
          padding:24px;
          margin-bottom:18px;
      }
      .lx-head{
          display:flex; align-items:center; gap:12px; margin:0 0 12px 0;
          font-size:22px; line-height:1.25; letter-spacing:.2px;
      }
      .lx-head svg{ width:22px; height:22px; flex:0 0 auto; }
      .lx-body{ color: var(--lx-muted); font-size:15.5px; line-height:1.7; }
      .lx-body a{ color: #ff0000; text-underline-offset:3px; }

      /* Pills */
      .lx-stats{
          display:flex; flex-wrap:wrap; gap:10px; margin-top:14px;
      }
      .lx-pill{
          display:inline-flex; align-items:center; gap:8px;
          border:1px dashed var(--lx-border);
          padding:8px 12px; border-radius:999px; font-size:13.5px;
          color: var(--lx-text);
          background: linear-gradient(180deg, rgba(212,175,55,.08), rgba(212,175,55,0));
      }
      .lx-pill svg{ width:16px; height:16px; }

      /* Features grid */
      .lx-grid{ display:grid; gap:12px; grid-template-columns:repeat(4, minmax(0,1fr)); }
      @media (max-width:980px){ .lx-grid{ grid-template-columns:repeat(2, minmax(0,1fr)); } }
      @media (max-width:520px){ .lx-grid{ grid-template-columns:1fr; } }

      .lx-feature{
          padding:18px; border:1px solid var(--lx-border);
          border-radius:14px; background: var(--lx-card);
      }
      .lx-feature h3{
          margin:0 0 6px 0; font-size:16.5px; display:flex; align-items:center; gap:8px;
          color: var(--lx-text);
      }
      .lx-feature p{ margin:0; color: var(--lx-muted); font-size:14.5px; line-height:1.65; }
      .lx-icon{ width:18px; height:18px; color: var(--lx-accent-2); }

      /* Guide steps */
      .lx-steps{
          counter-reset: step;
          display:flex; flex-direction:column; gap:12px;
          margin:10px 0 0 0; padding:0; list-style:none;
      }
      .lx-step{
          display:flex; gap:12px; align-items:flex-start;
          border:1px solid var(--lx-border); border-radius:12px; padding:14px 16px;
          background: var(--lx-card);
      }
      .lx-step::before{
          counter-increment: step;
          content: counter(step);
          flex:0 0 32px; height:32px; display:inline-flex; align-items:center; justify-content:center;
          border-radius:8px; font-weight:700;
          color:#111; background: linear-gradient(180deg, 355070, rgba(212,175,55,.75));
          border:1px solid rgba(17,24,39,.12);
      }

      /* CTA */
      .lx-cta{ display:flex; flex-wrap:wrap; gap:10px; margin-top:14px; }
      .lx-btn{
          display:inline-block; padding:10px 16px; border-radius:10px; text-decoration:none; font-weight:600; line-height:1;
          border:1px solid var(--lx-border);
      }
      .lx-btn--primary{ background: var(--lx-accent-2); color:48CAE4; border-color: var(--lx-accent-2); }
      .lx-btn--outline{ background: transparent; color: var(--lx-text); }

      .lx-section + .lx-section{ margin-top:14px; }
    </style>
        
    <article class="lx-container" aria-label="Artikel LAPAKGACOR LOGIN">
      <!-- Introduction -->
      <style>
        h1 {
            font-size: 32px;
            font-weight: 800;
            text-align: center;
            color: #1e1e1e;
            margin-bottom: 10px;
            line-height: 1.4;
        }
        
        h1 span {
            color: 48CAE4;
        }
        
        h2 {
            font-size: 26px;
            font-weight: 700;
            color: #1e1e1e;
            margin: 30px 0 20px 0;
            position: relative;
            padding-left: 15px;
        }
        
        h2::before {
            content: '';
            position: absolute;
            left: 0;
            top: 5px;
            bottom: 5px;
            width: 4px;
            background: 6A994E;
            border-radius: 4px;
        }
        
        h3 {
            font-size: 20px;
            font-weight: 600;
            color: 48CAE4;
            margin: 20px 0 10px 0;
        }
        
        /* Paragraphs */
        p {
            color: #2e2e2e;
            margin-bottom: 15px;
            font-size: 16px;
            text-align: justify;
        }
        
        /* Links */
        a {
            color: 48CAE4;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.2s ease;
        }
        
        /* Article highlight */
        .highlight-box {
            background: #fefcf5;
            border: 1px solid 6A994E;
            border-radius: 16px;
            padding: 25px;
            margin: 30px 0;
            box-shadow: 0 5px 15px rgba(212, 175, 55, 0.05);
        }
        
        /* Info Cards */
        .info-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 15px;
            margin: 25px 0;
        }
        
        .info-card {
            background: #fcfcfc;
            border: 1px solid 48CAE4;
            border-radius: 16px;
            padding: 20px 10px;
            text-align: center;
        }
        
        .info-card .label {
            font-size: 14px;
            color: 48CAE4;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .info-card .value {
            font-size: 18px;
            font-weight: 700;
            color: #1e1e1e;
            margin-top: 8px;
        }
        
        /* FAQ Accordion */
        .faq-container {
            margin: 30px 0;
        }
        
        .faq-item {
            margin-bottom: 12px;
            border: 1px solid 48CAE4;
            border-radius: 16px;
            overflow: hidden;
            background: 355070;
        }
        
        .faq-question {
            width: 100%;
            text-align: left;
            padding: 18px 20px;
            background: #fefcf5;
            border: none;
            cursor: pointer;
            font-weight: 600;
            font-size: 16px;
            color: #1e1e1e;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: all 0.2s ease;
        }
        
        .faq-question:hover {
            background: 6A994E;
        }
        
        .faq-question .icon {
            color: 6A994E;
            font-size: 22px;
            font-weight: 400;
        }
        
        .faq-answer {
            padding: 0 20px;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            background: 355070;
        }
        
        .faq-answer p {
            margin: 15px 0;
            color: 6A994E;
        }
        
        .faq-answer.open {
            max-height: 200px;
            padding: 0 20px;
        }
        
        /* Reviews Slider */
        .reviews-section {
            margin: 40px 0;
        }
        
        .reviews-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-top: 25px;
        }
        
        .review-card {
            background: #fefcf5;
            border: 1px solid 6A994E;
            border-radius: 20px;
            padding: 20px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.02);
        }
        
        .review-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 12px;
        }
        
        .review-name {
            font-weight: 700;
            color: #1e1e1e;
        }
        
        .review-stars {
            color: 6A994E;
            letter-spacing: 2px;
        }
        
        .review-text {
            color: 6A994E;
            font-size: 14px;
            line-height: 1.7;
            margin: 10px 0;
            font-style: italic;
        }
        
        .review-date {
            color: #999;
            font-size: 12px;
            display: block;
            margin-top: 10px;
        }
        
        /* CTA Buttons */
        .cta-section {
            text-align: center;
            margin: 40px 0 20px;
        }
        
        .cta-buttons {
            display: flex;
            gap: 15px;
            justify-content: center;
            flex-wrap: wrap;
        }
        
        .btn {
            display: inline-block;
            padding: 14px 40px;
            border-radius: 50px;
            font-weight: 700;
            font-size: 16px;
            letter-spacing: 1px;
            text-decoration: none;
            transition: all 0.2s ease;
            border: 1px solid;
            min-width: 150px;
        }
        
        .btn-login {
            background: transparent;
            color: #1e1e1e;
            border-color: 6A994E;
        }
        
        .btn-login:hover {
            background: 6A994E;
            border-color: 48CAE4;
        }
        
        .btn-register {
            background: 6A994E;
            color: #1e1e1e;
            border-color: 6A994E;
        }
        
        .btn-register:hover {
            background: 6A994E;
        }
        
        /* Responsive */
        @media (max-width: 768px) {
            .container {
                padding: 25px;
            }
            
            .info-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .reviews-grid {
                grid-template-columns: 1fr;
            }
            
            h1 {
                font-size: 24px;
            }
        }
      </style>




      

<header class="header">

<div class="header-wrap">

<a href="/" class="logo">
⚡ ${SITE.name}
</a>

<nav class="nav">

${renderHeaderNav()}

</nav>

</div>

</header>

`;

}
