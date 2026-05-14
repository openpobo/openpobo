export function renderScripts(){

return `

<script>
      

					if(isWebView){
						window.addEventListener("flutterInAppWebViewPlatformReady", (event) => {
							// let responseT = new Date().valueOf();
							// console.log("★ responseTime:", responseT);
							// console.log("★ responseTime-startTime:", responseT - startT);
							// console.log("flutterInAppWebViewPlatformReady, web view:", isWebView);
							isPlatformReady = true;
							params.readyCallback();
						});
					}
				}
				callHandler = (methodName, ...params) => {
					if (isPlatformReady) {
					return window.flutter_inappwebview.callHandler(methodName, ...params)
					} else {
					return Promise.reject("Calling methodName: "+methodName+", but webview not identified")
					}
				}
				logger = (info, value) => {
					this.params.logger && console.log(" "+info+" "+value+" ")
				}
				isWebView = () => {
					this.logger('Returning isWebView: ', isWebView);
					return isWebView;
				}
				isPlatformReady = () => {
					this.logger('Returning isPlatformReady: ', isPlatformReady);
					return isPlatformReady;
				}
				getAppVersionCode = () => new Promise((resolve, reject) => {
					this.callHandler('getAppVersionCode')
					.then(result => {
						this.logger("App version", result)
						resolve(result)
					})
					.catch(err => {
						this.logger("Error in App version", err)
						reject(err)
					})
				})
				triggerAnalytics = (data) => new Promise((resolve, reject) => {
					this.callHandler('OnAnalyticsEvent', data)
					.then(result => {
						this.logger("OnAnalyticsEvent Success", result)
						resolve(JSON.stringify(result))
					})
					.catch(err => {
						this.logger("Error in OnAnalyticsEvent", err)
						reject(err)
					})
				})
				openExternalBrowser = (url) => new Promise((resolve, reject) => {
					if (typeof url === "string") {
						url = url.trim();
					}
					this.callHandler('openExternalBrowser', url)
					.then(result => {
						this.logger("openExternalBrowser Success", result)
						resolve(JSON.stringify(result))
					})
					.catch(err => {
						this.logger("Error in openExternalBrowser", err)
						reject(err)
					})
				})
				setupCloseForBack = (exit, confirm, hide, backCallback) => {
					this.callHandler('configureBackV2', exit, confirm, hide, backCallback)
					.then(function (result) {
						console.log(JSON.stringify(result));
					})
					.catch(function (err) {
						console.log("Error in configureBackV2", err)
					})
				}
				setupNormalBack = () => {
					this.callHandler('configureBackV2', false, false, false, '')
					.then(function (result) {
						console.log(JSON.stringify(result));
					})
					.catch(function (err) {
						console.log("Error in configureBackV2", err)
					})
				}
				getUserDetails = () => new Promise((resolve, reject) => {
					this.callHandler('getUserDetails', 'window.setUserDetails')
					.then(result => {
						this.logger("User Details", result)
						resolve(result)
					})
					.catch(err => {
						this.logger("Error in getUserDetails", err)
						reject(err)
					})
				})
				updateCartCount = (cartCount) => new Promise((resolve, reject) => {
					this.callHandler('updateCartCount', cartCount)
					.then(result => {
						this.logger("updated Cart Count", result)
						resolve(result)
					})
					.catch(err => {
						this.logger("Error in updateCartCount", err)
						reject(err)
					})
				})
				getToken = () => new Promise((resolve, reject) => {
					this.callHandler('getToken', false)
					.then(result => {
						this.logger("GetToken Success", result)
						resolve(result)
					})
					.catch(err => {
						this.logger("Error in getToken", err)
						reject(err)
					})
				})
				displayInAppReview = () => new Promise((resolve, reject) => {
					this.callHandler('displayInAppReview')
					.then(result => {
						this.logger("displayInAppReview success")
						resolve(result)
					})
					.catch(err => {
						this.logger("displayInAppReview failed")
						reject(err)
					})
				})
			}
			// [START log_event]
			function logEvent(name, params) {
				if (!name) {
					return;
				}

				if (window.AnalyticsWebInterface) {
					// Call Android interface
					window.AnalyticsWebInterface.logEvent(name, JSON.stringify(params));
				} else if (window.webkit
					&& window.webkit.messageHandlers
					&& window.webkit.messageHandlers.firebase) {
					// Call iOS interface
					var message = {
						command: 'logEvent',
						name: name,
						parameters: params
					};
					window.webkit.messageHandlers.firebase.postMessage(message);
				} else {
					// No Android or iOS interface found
					console.log("No native APIs found.");
				}
			}
			// [END log_event]

			// [START set_user_property]
			function setUserProperty(name, value) {
				if (!name || !value) {
					return;
				}

				if (window.AnalyticsWebInterface) {
					// Call Android interface
					window.AnalyticsWebInterface.setUserProperty(name, value);
				} else if (window.webkit
					&& window.webkit.messageHandlers
					&& window.webkit.messageHandlers.firebase) {
					// Call iOS interface
					var message = {
						command: 'setUserProperty',
						name: name,
						value: value
					};
					window.webkit.messageHandlers.firebase.postMessage(message);
				} else {
					// No Android or iOS interface found
					console.log("No native APIs found.");
				}
			}
			// [END set_user_property]

			/*
			document.getElementById("event1").addEventListener("click", function() {
			    console.log("event1");
			    logEvent("event1", { foo: "bar", baz: 123 });
			});

			document.getElementById("event2").addEventListener("click", function() {
			  console.log("event2");
			    logEvent("event2", { size: 123.456 });
			});

			document.getElementById("userprop").addEventListener("click", function() {
			    console.log("userprop");
			    setUserProperty("userprop", "custom_value");
			});
			*/
      </script>
      <script>
       const hideHeaderFooterByWindowFlutterInappwebview = () => {
				//$('.gnb').hide();
				if(document.querySelector(".gnb") != null && document.querySelector(".gnb").style != null) {
					document.querySelector(".gnb").style.display='none';
				}
				if(document.querySelector(".nv00-gnb") != null && document.querySelector(".nv00-gnb").style != null) {
					document.querySelector(".nv00-gnb").style.display='none';
				}
				if(document.querySelector(".nv00-gnb-v3") != null && document.querySelector(".nv00-gnb-v3").style != null) {
					document.querySelector(".nv00-gnb-v3").style.display='none';
				}
				if(document.querySelector(".nv00-gnb-v4") != null && document.querySelector(".nv00-gnb-v4").style != null) {
					document.querySelector(".nv00-gnb-v4").style.display='none';
				}
				if(document.querySelector(".nv07-explore-floating-navigation") != null) {
					let nv07 = document.querySelector(".nv07-explore-floating-navigation");
					nv07.parentElement.removeChild(nv07);
				}
				//CRHQ-9185 [B2C] shop app - DB 전환 건 - 쿠키 체크 및 미노출 처리      - 보완로직 
				if(document.querySelector(".cod05-app-banner") != null && document.querySelector(".cod05-app-banner").style != null) {
					document.querySelector(".cod05-app-banner").style.display='none';
				} 
				if(document.querySelector(".breadcrumb") != null && document.querySelector(".breadcrumb").style != null) {
					document.querySelector(".breadcrumb").style.display='none';
				}
				if(document.querySelector(".nvd02-breadcrumb") != null && document.querySelector(".nvd02-breadcrumb").style != null) {
					document.querySelector(".nvd02-breadcrumb").style.display='none';
				}
				if(document.querySelector(".nv17-breadcrumb") != null && document.querySelector(".nv17-breadcrumb").style != null) {
					document.querySelector(".nv17-breadcrumb").style.display='none';
				}
				if(document.querySelector(".epp-breadcrumb") != null && document.querySelector(".epp-breadcrumb").style != null) {
					document.querySelector(".epp-breadcrumb").style.display='none';
				}
				if(document.querySelector(".footer-column") != null && document.querySelector(".footer-column").style != null) {
					document.querySelector(".footer-column").style.display='none';
				}
				if(("es" === "id" || "de" === "id") && document.querySelector(".footer-bottom") != null && document.querySelector(".footer-bottom").style != null) {
					document.querySelector(".footer-bottom").style.display='none';
				}
				if(document.querySelector(".footer-language") != null && document.querySelector(".footer-language").style != null) {
					document.querySelector(".footer-language").style.display='none';
				}
				if(document.querySelector(".footer-language__anchor") != null && document.querySelector(".footer-language__anchor").style != null) {
					document.querySelector(".footer-language__anchor").style.display='none';
				}
				if(document.querySelector(".footer-language-wrap") != null && document.querySelector(".footer-language-wrap").style != null) {
					document.querySelector(".footer-language-wrap").style.display='none';
				}
				if(document.querySelector(".footer-sns") != null && document.querySelector(".footer-sns").style != null) {
					document.querySelector(".footer-sns").style.display='none';
				}
				if(document.querySelector(".footer-terms") != null && document.querySelector(".footer-terms").style != null) {
					document.querySelector(".footer-terms").style.display='none';
				}
				if(document.querySelector("#teconsent") != null && document.querySelector("#teconsent").style != null) {
					document.querySelector("#teconsent").style.display='none';
				}
				if(document.querySelector("#QSIFeedbackButton-btn") != null && document.querySelector("#QSIFeedbackButton-btn").style != null) {
					document.querySelector("#QSIFeedbackButton-btn").style.display='none';
				}
				if (window.location.href.indexOf("https://www.samsung.com/mypage/myproducts/") > -1 || window.location.href.indexOf("https://www.samsung.com/mypage/myrepair/") > -1 || window.location.href.indexOf("https://www.samsung.com/mypage/rewards/") > -1
						|| window.location.href.indexOf("https://www.samsung.com/mypage/myreferrals/") > -1 || window.location.href.indexOf("https://www.samsung.com/mypage/credits/") > -1) {
					if(document.querySelector(".explore-lnb-navigation") != null && document.querySelector(".explore-lnb-navigation").style != null) {
						document.querySelector(".explore-lnb-navigation").style.display='none';
					}
					if(document.querySelector(".nv-g-lnb") != null && document.querySelector(".nv-g-lnb").style != null) {
						document.querySelector(".nv-g-lnb").style.display='none';
					}
					if(document.querySelector(".pd-g-floating-nav") != null && document.querySelector(".pd-g-floating-nav").style != null) {
						document.querySelector(".pd-g-floating-nav").style.display='none';
					}
					document.querySelectorAll("#content a[target='_blank']").forEach(function(item){
						item.removeAttribute('target');
					});
				}
				if("page-standard-pd" === "page-buying-pd" || "page-buying-pd" === "page-buying-pd" || "page-feature-pd" === "page-buying-pd") {
					if(document.querySelector(".pd-header-navigation__menu-epromoter-cta") != null && document.querySelector(".pd-header-navigation__menu-epromoter-cta").style != null) {
						document.querySelector(".pd-header-navigation__menu-epromoter-cta").style.display='none';
					}
					if(document.querySelector(".product-detail-kv__cta-epromotor") != null && document.querySelector(".product-detail-kv__cta-epromotor").style != null) {
						document.querySelector(".product-detail-kv__cta-epromotor").style.display='none';
					}
				}else if("page-bc-pd" === "page-buying-pd"){
					document.querySelectorAll("#content .s-message-link").forEach(function(item){
						item.style.display = "none";
					});
				}
				if(document.querySelector(".cookie-bar__app-banner") != null && document.querySelector(".cookie-bar__app-banner").style != null) {
					document.querySelector(".cookie-bar__app-banner").style.display='none';
				}
				if(document.querySelector(".cookie-bar") != null && document.querySelector(".cookie-bar").style != null) {
					document.querySelector(".cookie-bar").style.display='none';
				}
				if(document.querySelector(".cod05-app-banner") != null && document.querySelector(".cod05-app-banner").style != null) {
					document.querySelector(".cod05-app-banner").style.display='none';
				}
				//[EPP] Partner Bar 미노출 처리
				if(document.querySelector(".partner-bar-wrap") != null && document.querySelector(".partner-bar-wrap").style != null) {
					document.querySelector(".partner-bar-wrap").style.display='none';
				}						
				if(window.sg && window.sg.common && window.sg.common.utils){
					window.sg.common.utils.visibleScroll();
				}
			}

			let timerId = setInterval(() => {
				if(isWebView){
					hideHeaderFooterByWindowFlutterInappwebview();
				}
				if(window.location.href.indexOf("samsung.com.cn") > -1){ //cn국가인 경우
					//추가된 userAgent 판단 로직
					var ua = navigator.userAgent;
					var ualower = ua.toLowerCase();
					if(/micromessenger/.test(ualower)){ //userAgent include 'micromessenger'
						if(/miniprogram/i.test(ualower)){ // 위챗 미니앱
							//return 'wxApp';
							hideHeaderFooterByWindowFlutterInappwebview();
						}
					}else if(/aliapp/i.test(ualower) && /miniprogram/i.test(ualower)){//userAgent include 'aliapp', 'miniprogram'
						//return 'aliApp';// 알리 미니앱
						hideHeaderFooterByWindowFlutterInappwebview();
					}
				}
			}, 10);
			setTimeout(() => {
				clearInterval(timerId);
			}, 20000);

			const setSessionStorage = () => {
				const isInAppWebViewSessionStorage = sessionStorage.getItem("isInAppWebViewSessionStorage");
				if(!isInAppWebViewSessionStorage){
					// readyCallback에서 세팅 (기존에 없는 경우만 세팅)
					sessionStorage.setItem("isInAppWebViewSessionStorage", "true");
				}
			}

			//new ShopAppUtil
			let shopAppUtilInstance = new ShopAppUtil({
				logger: true,
				readyCallback: setSessionStorage
			});

			document.addEventListener("DOMContentLoaded", function () {
				if(shopAppUtilInstance.isWebView() && typeof $ !== "undefined"){
					$(document).off("click", 'a[target*="_blank"]');
					$(document).on("click", 'a[target*="_blank"]', function (e) {
						let href = $(this).attr("href");
						if (!!href && href.indexOf("javascript") === -1 && href !== "#") {
							if (href.startsWith("/" + siteCode + "/")) {
								href = window.location.origin + href;
							}
							if (href.indexOf("index.html") === -1 && href.indexOf("index.html") === -1) {
								href = "https://" + href;
							}
							if(href.indexOf("www.samsung.com") === -1){
								e.preventDefault();
								shopAppUtilInstance.openExternalBrowser(href);
							}
						}
					});
				}
			});

			//EMI 팝업에서 호출 확인 용 
			function hideModalEmipopup() {
					console.log("[from finance-popup.js] call hideModalEmipopup()!! ");
					$('#wrap > div.finance-popup > div > div > div > button').click();
			}
			
			function hideModalEmipopupConsole() {
				console.log("dummy [from finance-popup.js] call hideModalEmipopup()!! ");
					
			}
		
			// App Login callback function
			function login_completed (login_result, identifier) {
				if("true" === login_result) {
					if("nv-g-mini-cart.checkout" === identifier) {
						location.href = window.sg.minicart.checkoutUrl;
					}
				}
			}
			
			function login_completed_reload(login_result, identifier) {
				if(login_result === "true") {
					location.reload();
				}
			}
      </script>
      <script>
       const searchParams = new URLSearchParams(location.search);
			let appViewParam = searchParams.get('appView');
			let sourceParam = searchParams.get('source');
			if(appViewParam == "SM" || appViewParam == "ST" || appViewParam == "SA"){
				window.sessionStorage.setItem("appView", appViewParam);
				window.sessionStorage.setItem("source", sourceParam);
			}

			const rttHideHeaderFooterAppView = () => {
				if(document.querySelector(".nv16-country-selector") != null && document.querySelector(".nv16-country-selector").style != null) {
					document.querySelector(".nv16-country-selector").remove();
				}
				//$('.gnb').hide();
				if(document.querySelector(".gnb") != null && document.querySelector(".gnb").style != null) {
					document.querySelector(".gnb").style.display='none';
				}
				if(document.querySelector(".nv00-gnb") != null && document.querySelector(".nv00-gnb").style != null) {
					document.querySelector(".nv00-gnb").style.display='none';
				}
				if(document.querySelector(".nv00-gnb-v3") != null && document.querySelector(".nv00-gnb-v3").style != null) {
					document.querySelector(".nv00-gnb-v3").style.display='none';
				}
				if(document.querySelector(".nv00-gnb-v4") != null && document.querySelector(".nv00-gnb-v4").style != null) {
					document.querySelector(".nv00-gnb-v4").style.display='none';
				}
				if(document.querySelector(".nv07-explore-floating-navigation") != null) {
					let nv07 = document.querySelector(".nv07-explore-floating-navigation");
					nv07.parentElement.removeChild(nv07);
				}
				if(document.querySelector(".cod05-app-banner") != null) {
					document.querySelector(".cod05-app-banner").remove();
				} 
				if(document.querySelector(".breadcrumb") != null && document.querySelector(".breadcrumb").style != null) {
					document.querySelector(".breadcrumb").style.display='none';
				}
				if(document.querySelector(".nvd02-breadcrumb") != null && document.querySelector(".nvd02-breadcrumb").style != null) {
					document.querySelector(".nvd02-breadcrumb").style.display='none';
				}
				if(document.querySelector(".nv17-breadcrumb") != null && document.querySelector(".nv17-breadcrumb").style != null) {
					document.querySelector(".nv17-breadcrumb").style.display='none';
				}
				if(document.querySelector(".epp-breadcrumb") != null && document.querySelector(".epp-breadcrumb").style != null) {
					document.querySelector(".epp-breadcrumb").style.display='none';
				}
				if(document.querySelector(".footer-column") != null && document.querySelector(".footer-column").style != null) {
					document.querySelector(".footer-column").style.display='none';
				}
				if(("es" === "id" || "de" === "id") && document.querySelector(".footer-bottom") != null && document.querySelector(".footer-bottom").style != null) {
					document.querySelector(".footer-bottom").style.display='none';
				}
				if(document.querySelector(".footer-language") != null && document.querySelector(".footer-language").style != null) {
					document.querySelector(".footer-language").style.display='none';
				}
				if(document.querySelector(".footer-language__anchor") != null && document.querySelector(".footer-language__anchor").style != null) {
					document.querySelector(".footer-language__anchor").style.display='none';
				}
				if(document.querySelector(".footer-language-wrap") != null && document.querySelector(".footer-language-wrap").style != null) {
					document.querySelector(".footer-language-wrap").style.display='none';
				}
				if(document.querySelector(".footer-sns") != null && document.querySelector(".footer-sns").style != null) {
					document.querySelector(".footer-sns").style.display='none';
				}
				if(document.querySelector(".footer-terms") != null && document.querySelector(".footer-terms").style != null) {
					document.querySelector(".footer-terms").style.display='none';
				}
				if(document.querySelector("#teconsent") != null && document.querySelector("#teconsent").style != null) {
					document.querySelector("#teconsent").style.display='none';
				}
				if(document.querySelector("#QSIFeedbackButton-btn") != null && document.querySelector("#QSIFeedbackButton-btn").style != null) {
					document.querySelector("#QSIFeedbackButton-btn").style.display='none';
				}
				// if (window.location.href.indexOf("/mypage/myproducts/") > -1 || window.location.href.indexOf("/mypage/myrepair/") > -1 || window.location.href.indexOf("/mypage/rewards/") > -1
				// 		|| window.location.href.indexOf("/mypage/myreferrals/") > -1) {
					if(document.querySelector(".explore-lnb-navigation") != null && document.querySelector(".explore-lnb-navigation").style != null) {
						document.querySelector(".explore-lnb-navigation").style.display='none';
					}
					if(document.querySelector(".nv-g-lnb") != null && document.querySelector(".nv-g-lnb").style != null) {
						document.querySelector(".nv-g-lnb").style.display='none';
					}
					if(document.querySelector(".pd-g-floating-nav") != null && document.querySelector(".pd-g-floating-nav").style != null) {
						document.querySelector(".pd-g-floating-nav").style.display='none';
					}
					document.querySelectorAll("#content a[target='_blank']").forEach(function(item){
						item.removeAttribute('target');
					});
				// }
				if(document.querySelector(".cookie-bar__app-banner") != null && document.querySelector(".cookie-bar__app-banner").style != null) {
					document.querySelector(".cookie-bar__app-banner").style.display='none';
				}
				if(document.querySelector(".cookie-bar") != null && document.querySelector(".cookie-bar").style != null) {
					document.querySelector(".cookie-bar").style.display='none';
				}
				//[EPP] Partner Bar 미노출 처리
				if(document.querySelector(".partner-bar-wrap") != null && document.querySelector(".partner-bar-wrap").style != null) {
					document.querySelector(".partner-bar-wrap").style.display='none';
				}						
				if(window.sg && window.sg.common && window.sg.common.utils){
					window.sg.common.utils.visibleScroll();
				}
			}

			if(window.sessionStorage.getItem("appView") == "SM" || window.sessionStorage.getItem("appView") == "ST" || window.sessionStorage.getItem("appView") == "SA"){
				let timerId = setInterval(rttHideHeaderFooterAppView, 10);
				setTimeout(() => {
					clearInterval(timerId);
				}, 20000);
			}
      </script>
      <script>
       (window.BOOMR_mq=window.BOOMR_mq||[]).push(["addVar",{"rua.upush":"false","rua.cpush":"false","rua.upre":"false","rua.cpre":"false","rua.uprl":"false","rua.cprl":"false","rua.cprf":"false","rua.trans":"SJ-9c997744-ecab-4f72-ace8-7a7d6a06a0ee","rua.cook":"true","rua.ims":"false","rua.ufprl":"false","rua.cfprl":"false","rua.isuxp":"false","rua.texp":"norulematch","rua.ceh":"false","rua.ueh":"false","rua.ieh.st":"0"}]);
      </script>
      <script>
       !function(){function o(n,i){if(n&&i)for(var r in i)i.hasOwnProperty(r)&&(void 0===n[r]?n[r]=i[r]:n[r].constructor===Object&&i[r].constructor===Object?o(n[r],i[r]):n[r]=i[r])}try{var n=decodeURIComponent("%7B%20%22request_client_hints%22%3A%20true%20%7D");if(n.length>0&&window.JSON&&"function"==typeof window.JSON.parse){var i=JSON.parse(n);void 0!==window.BOOMR_config?o(window.BOOMR_config,i):window.BOOMR_config=i}}catch(r){window.console&&"function"==typeof window.console.error&&console.error("mPulse: Could not parse configuration",r)}}();
      </script>
      <script>
       !function(a){var e="https://s.go-mpulse.net/boomerang/",t="addEventListener";if("False"=="True")a.BOOMR_config=a.BOOMR_config||{},a.BOOMR_config.PageParams=a.BOOMR_config.PageParams||{},a.BOOMR_config.PageParams.pci=!0,e="https://s2.go-mpulse.net/boomerang/";if(window.BOOMR_API_key="VRZKC-5BSTD-4EWS3-R2J59-B8GYB",function(){function n(e){a.BOOMR_onload=e&&e.timeStamp||(new Date).getTime()}if(!a.BOOMR||!a.BOOMR.version&&!a.BOOMR.snippetExecuted){a.BOOMR=a.BOOMR||{},a.BOOMR.snippetExecuted=!0;var i,_,o,r=document.createElement("iframe");if(a[t])a[t]("load",n,!1);else if(a.attachEvent)a.attachEvent("onload",n);r.src="javascript:void(0)",r.title="",r.role="presentation",(r.frameElement||r).style.cssText="width:0;height:0;border:0;display:none;",o=document.getElementsByTagName("script")[0],o.parentNode.insertBefore(r,o);try{_=r.contentWindow.document}catch(O){i=document.domain,r.src="javascript:var d=document.open();d.domain='"+i+"';void(0);",_=r.contentWindow.document}_.open()._l=function(){var a=this.createElement("script");if(i)this.domain=i;a.id="boomr-if-as",a.src=e+"VRZKC-5BSTD-4EWS3-R2J59-B8GYB",BOOMR_lstart=(new Date).getTime(),this.body.appendChild(a)},_.write("<bo"+'dy onload="document._l();">'),_.close()}}(),"".length>0)if(a&&"performance"in a&&a.performance&&"function"==typeof a.performance.setResourceTimingBufferSize)a.performance.setResourceTimingBufferSize();!function(){if(BOOMR=a.BOOMR||{},BOOMR.plugins=BOOMR.plugins||{},!BOOMR.plugins.AK){var e="false"=="true"?1:0,t="cookiepresent",n="m72rctvyd7qdq2jknxoa-f-baf5d2a7a-clientnsv4-s.akamaihd.net",i="false"=="true"?2:1,_={"ak.v":"39","ak.cp":"154627","ak.ai":parseInt("293013",10),"ak.ol":"0","ak.cr":72,"ak.ipv":4,"ak.proto":"http/1.1","ak.rid":"1b1ca612","ak.r":40950,"ak.a2":e,"ak.m":"x","ak.n":"essl","ak.bpcip":"103.245.17.0","ak.cport":64329,"ak.gh":"23.56.239.149","ak.quicv":"","ak.tlsv":"tls1.3","ak.0rtt":"","ak.0rtt.ed":"","ak.csrc":"-","ak.acc":"bbr","ak.t":"1764388316","ak.ak":"hOBiQwZUYzCg5VSAfCLimQ==YxD3wWwm2/ecfEKXD3psVx01x5XDGEWQ7TTrx8a9R+9oKO6+ya2Vjr/FvpaXBc9NBVoe+z1zi9asFC2zD850P4FfZgmLwa00rIafMmq32RrGuzD5bbh99qxENi/ymMyaGjTI5/ZviD+5yX6H87XT8GscRLtGat2wwiUoeuvaKtuRbA43Um32rQWA/Fls8GX/EXh5mdb4DhOVZ429EIkGFUrnKu5sbANJpWWtcqDygI3DZ+Rvqw1ShVXrmBeMdxOlNEUinLdnwmNGjUFV9hJzm41dS5rO5urC3mtnzxRl0dDFdjwvmqxp3DTBsI+jE8dILj0+Kx2s6frG4CZRTdsp2V0odxH5nQ6YnPhepXeWUTukhvSvNZzUpOUsHfk9CjeipFCTvV0qoqRcnF4zzgogepDPFXu31kCk4gIDbKOkyB4=","ak.pv":"4137","ak.dpoabenc":"","ak.tf":i};if(""!==t)_["ak.ruds"]=t;var o={i:!1,av:function(e){var t="http.initiator";if(e&&(!e[t]||"spa_hard"===e[t]))_["ak.feo"]=void 0!==a.aFeoApplied?1:0,BOOMR.addVar(_)},rv:function(){var a=["ak.bpcip","ak.cport","ak.cr","ak.csrc","ak.gh","ak.ipv","ak.html","ak.n","ak.ol","ak.proto","ak.quicv","ak.tlsv","ak.0rtt","ak.0rtt.ed","ak.r","ak.acc","ak-2.html","ak.tf"];BOOMR.removeVar(a)}};BOOMR.plugins.AK={akVars:_,akDNSPreFetchDomain:n,init:function(){if(!o.i){var a=BOOMR.subscribe;a("before_beacon",o.av,null,null),a("onbeacon",o.rv,null,null),o.i=!0}return this},is_complete:function(){return!0}}}}()}(window);
      </script>

`;

}
