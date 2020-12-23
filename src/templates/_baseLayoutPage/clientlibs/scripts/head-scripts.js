/*! For license information please see head-scripts.js.LICENSE.txt */
!function(){var e={4575:function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},3913:function(e){function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}e.exports=function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}},7090:function(e){!function(t,n){var i=function(e,t,n){"use strict";var i,r;if(function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in r=e.lazySizesConfig||e.lazysizesConfig||{},n)t in r||(r[t]=n[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:r,noSupport:!0};var s,a,c,o,l,u,d,f,m,p,h,A,g,v,y,b,z,w,C,E,S,x,M,L,_,T,R,P,B,D,W,N,k,$,I,U,F,O,H,Q,G,j,q,V,K=t.documentElement,J=e.HTMLPictureElement,X="addEventListener",Y=e.addEventListener.bind(e),Z=e.setTimeout,ee=e.requestAnimationFrame||Z,te=e.requestIdleCallback,ne=/^picture$/i,ie=["load","error","lazyincluded","_lazyloaded"],re={},se=Array.prototype.forEach,ae=function(e,t){return re[t]||(re[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),re[t].test(e.getAttribute("class")||"")&&re[t]},ce=function(e,t){ae(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)},oe=function(e,t){var n;(n=ae(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(n," "))},le=function(e,t,n){var i=n?X:"removeEventListener";n&&le(e,t),ie.forEach((function(n){e[i](n,t)}))},ue=function(e,n,r,s,a){var c=t.createEvent("Event");return r||(r={}),r.instance=i,c.initEvent(n,!s,!a),c.detail=r,e.dispatchEvent(c),c},de=function(t,n){var i;!J&&(i=e.picturefill||r.pf)?(n&&n.src&&!t.getAttribute("srcset")&&t.setAttribute("srcset",n.src),i({reevaluate:!0,elements:[t]})):n&&n.src&&(t.src=n.src)},fe=function(e,t){return(getComputedStyle(e,null)||{})[t]},me=function(e,t,n){for(n=n||e.offsetWidth;n<r.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},pe=(G=[],j=Q=[],(V=function(e,n){O&&!n?e.apply(this,arguments):(j.push(e),H||(H=!0,(t.hidden?Z:ee)(q)))})._lsFlush=q=function(){var e=j;for(j=Q.length?G:Q,O=!0,H=!1;e.length;)e.shift()();O=!1},V),he=function(e,t){return t?function(){pe(e)}:function(){var t=this,n=arguments;pe((function(){e.apply(t,n)}))}},Ae=function(e){var t,i,r=function(){t=null,e()},s=function(){var e=n.now()-i;e<99?Z(s,99-e):(te||r)(r)};return function(){i=n.now(),t||(t=Z(s,99))}},ge=(z=/^img$/i,w=/^iframe$/i,C="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),0,E=0,S=0,x=-1,M=function(e){S--,(!e||S<0||!e.target)&&(S=0)},L=function(e){return null==b&&(b="hidden"==fe(t.body,"visibility")),b||!("hidden"==fe(e.parentNode,"visibility")&&"hidden"==fe(e,"visibility"))},_=function(e,n){var i,r=e,s=L(e);for(A-=n,y+=n,g-=n,v+=n;s&&(r=r.offsetParent)&&r!=t.body&&r!=K;)(s=(fe(r,"opacity")||1)>0)&&"visible"!=fe(r,"overflow")&&(i=r.getBoundingClientRect(),s=v>i.left&&g<i.right&&y>i.top-1&&A<i.bottom+1);return s},R=function(e){var t,i=0,s=r.throttleDelay,a=r.ricTimeout,c=function(){t=!1,i=n.now(),e()},o=te&&a>49?function(){te(c,{timeout:a}),a!==r.ricTimeout&&(a=r.ricTimeout)}:he((function(){Z(c)}),!0);return function(e){var r;(e=!0===e)&&(a=33),t||(t=!0,(r=s-(n.now()-i))<0&&(r=0),e||r<9?o():Z(o,r))}}(T=function(){var e,n,s,a,c,o,d,m,z,w,M,T,R=i.elements;if((f=r.loadMode)&&S<8&&(e=R.length)){for(n=0,x++;n<e;n++)if(R[n]&&!R[n]._lazyRace)if(!C||i.prematureUnveil&&i.prematureUnveil(R[n]))$(R[n]);else if((m=R[n].getAttribute("data-expand"))&&(o=1*m)||(o=E),w||(w=!r.expand||r.expand<1?K.clientHeight>500&&K.clientWidth>500?500:370:r.expand,i._defEx=w,M=w*r.expFactor,T=r.hFac,b=null,E<M&&S<1&&x>2&&f>2&&!t.hidden?(E=M,x=0):E=f>1&&x>1&&S<6?w:0),z!==o&&(p=innerWidth+o*T,h=innerHeight+o,d=-1*o,z=o),s=R[n].getBoundingClientRect(),(y=s.bottom)>=d&&(A=s.top)<=h&&(v=s.right)>=d*T&&(g=s.left)<=p&&(y||v||g||A)&&(r.loadHidden||L(R[n]))&&(u&&S<3&&!m&&(f<3||x<4)||_(R[n],o))){if($(R[n]),c=!0,S>9)break}else!c&&u&&!a&&S<4&&x<4&&f>2&&(l[0]||r.preloadAfterLoad)&&(l[0]||!m&&(y||v||g||A||"auto"!=R[n].getAttribute(r.sizesAttr)))&&(a=l[0]||R[n]);a&&!c&&$(a)}}),B=he(P=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(M(e),ce(t,r.loadedClass),oe(t,r.loadingClass),le(t,D),ue(t,"lazyloaded"))}),D=function(e){B({target:e.target})},W=function(e,t){var n=e.getAttribute("data-load-mode")||r.iframeLoadMode;0==n?e.contentWindow.location.replace(t):1==n&&(e.src=t)},N=function(e){var t,n=e.getAttribute(r.srcsetAttr);(t=r.customMedia[e.getAttribute("data-media")||e.getAttribute("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},k=he((function(e,t,n,i,s){var a,c,o,l,u,f;(u=ue(e,"lazybeforeunveil",t)).defaultPrevented||(i&&(n?ce(e,r.autosizesClass):e.setAttribute("sizes",i)),c=e.getAttribute(r.srcsetAttr),a=e.getAttribute(r.srcAttr),s&&(l=(o=e.parentNode)&&ne.test(o.nodeName||"")),f=t.firesLoad||"src"in e&&(c||a||l),u={target:e},ce(e,r.loadingClass),f&&(clearTimeout(d),d=Z(M,2500),le(e,D,!0)),l&&se.call(o.getElementsByTagName("source"),N),c?e.setAttribute("srcset",c):a&&!l&&(w.test(e.nodeName)?W(e,a):e.src=a),s&&(c||l)&&de(e,{src:a})),e._lazyRace&&delete e._lazyRace,oe(e,r.lazyClass),pe((function(){var t=e.complete&&e.naturalWidth>1;f&&!t||(t&&ce(e,r.fastLoadedClass),P(u),e._lazyCache=!0,Z((function(){"_lazyCache"in e&&delete e._lazyCache}),9)),"lazy"==e.loading&&S--}),!0)})),$=function(e){if(!e._lazyRace){var t,n=z.test(e.nodeName),i=n&&(e.getAttribute(r.sizesAttr)||e.getAttribute("sizes")),s="auto"==i;(!s&&u||!n||!e.getAttribute("src")&&!e.srcset||e.complete||ae(e,r.errorClass)||!ae(e,r.lazyClass))&&(t=ue(e,"lazyunveilread").detail,s&&ve.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,S++,k(e,t,s,i,n))}},I=Ae((function(){r.loadMode=3,R()})),F=function(){u||(n.now()-m<999?Z(F,999):(u=!0,r.loadMode=3,R(),Y("scroll",U,!0)))},{_:function(){m=n.now(),i.elements=t.getElementsByClassName(r.lazyClass),l=t.getElementsByClassName(r.lazyClass+" "+r.preloadClass),Y("scroll",R,!0),Y("resize",R,!0),Y("pageshow",(function(e){if(e.persisted){var n=t.querySelectorAll("."+r.loadingClass);n.length&&n.forEach&&ee((function(){n.forEach((function(e){e.complete&&$(e)}))}))}})),e.MutationObserver?new MutationObserver(R).observe(K,{childList:!0,subtree:!0,attributes:!0}):(K.addEventListener("DOMNodeInserted",R,!0),K.addEventListener("DOMAttrModified",R,!0),setInterval(R,999)),Y("hashchange",R,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach((function(e){t.addEventListener(e,R,!0)})),/d$|^c/.test(t.readyState)?F():(Y("load",F),t.addEventListener("DOMContentLoaded",R),Z(F,2e4)),i.elements.length?(T(),pe._lsFlush()):R()},checkElems:R,unveil:$,_aLSL:U=function(){3==r.loadMode&&(r.loadMode=2),I()}}),ve=(a=he((function(e,t,n,i){var r,s,a;if(e._lazysizesWidth=i,i+="px",e.setAttribute("sizes",i),ne.test(t.nodeName||""))for(s=0,a=(r=t.getElementsByTagName("source")).length;s<a;s++)r[s].setAttribute("sizes",i);n.detail.dataAttr||de(e,n.detail)})),c=function(e,t,n){var i,r=e.parentNode;r&&(n=me(e,r,n),(i=ue(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=i.detail.width)&&n!==e._lazysizesWidth&&a(e,r,i,n))},{_:function(){s=t.getElementsByClassName(r.autosizesClass),Y("resize",o)},checkElems:o=Ae((function(){var e,t=s.length;if(t)for(e=0;e<t;e++)c(s[e])})),updateElem:c}),ye=function(){!ye.i&&t.getElementsByClassName&&(ye.i=!0,ve._(),ge._())};return Z((function(){r.init&&ye()})),i={cfg:r,autoSizer:ve,loader:ge,init:ye,uP:de,aC:ce,rC:oe,hC:ae,fire:ue,gW:me,rAF:pe}}(t,t.document,Date);t.lazySizes=i,e.exports&&(e.exports=i)}("undefined"!=typeof window?window:{})},7229:function(e,t,n){var i;!function(e){var t,n,i,r,s,a,c,o=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(o)&&o.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",(n=document.createElement("source"),i=function(e){var t,i,r=e.parentNode;"PICTURE"===r.nodeName.toUpperCase()?(t=n.cloneNode(),r.insertBefore(t,r.firstElementChild),setTimeout((function(){r.removeChild(t)}))):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,i=e.sizes,e.sizes+=",100vw",setTimeout((function(){e.sizes=i})))},r=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)i(t[e])},s=function(){clearTimeout(t),t=setTimeout(r,99)},a=e.matchMedia&&matchMedia("(orientation: landscape)"),c=function(){s(),a&&a.addListener&&a.addListener(s)},n.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?c():document.addEventListener("DOMContentLoaded",c),s))}(window),function(r,s,a){"use strict";var c,o,l;s.createElement("picture");var u={},d=!1,f=function(){},m=s.createElement("img"),p=m.getAttribute,h=m.setAttribute,A=m.removeAttribute,g=s.documentElement,v={},y={algorithm:""},b="data-pfsrc",z=b+"set",w=navigator.userAgent,C=/rident/.test(w)||/ecko/.test(w)&&w.match(/rv\:(\d+)/)&&RegExp.$1>35,E="currentSrc",S=/\s+\+?\d+(e\d+)?w/,x=/(\([^)]+\))?\s*(.+)/,M=r.picturefillCFG,L="font-size:100%!important;",_=!0,T={},R={},P=r.devicePixelRatio,B={px:1,in:96},D=s.createElement("a"),W=!1,N=/^[ \t\n\r\u000c]+/,k=/^[, \t\n\r\u000c]+/,$=/^[^ \t\n\r\u000c]+/,I=/[,]+$/,U=/^\d+$/,F=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,O=function(e,t,n,i){e.addEventListener?e.addEventListener(t,n,i||!1):e.attachEvent&&e.attachEvent("on"+t,n)},H=function(e){var t={};return function(n){return n in t||(t[n]=e(n)),t[n]}};function Q(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}var G,j,q,V,K,J,X,Y,Z,ee,te,ne,ie,re,se,ae=(G=/^([\d\.]+)(em|vw|px)$/,j=H((function(e){return"return "+function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"})),function(e,t){var n;if(!(e in T))if(T[e]=!1,t&&(n=e.match(G)))T[e]=n[1]*B[n[2]];else try{T[e]=new Function("e",j(e))(B)}catch(e){}return T[e]}),ce=function(e,t){return e.w?(e.cWidth=u.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},oe=function(e){if(d){var t,n,i,r=e||{};if(r.elements&&1===r.elements.nodeType&&("IMG"===r.elements.nodeName.toUpperCase()?r.elements=[r.elements]:(r.context=r.elements,r.elements=null)),i=(t=r.elements||u.qsa(r.context||s,r.reevaluate||r.reselect?u.sel:u.selShort)).length){for(u.setupRun(r),W=!0,n=0;n<i;n++)u.fillImg(t[n],r);u.teardownRun(r)}}};function le(e,t){return e.res-t.res}function ue(e,t){var n,i,r;if(e&&t)for(r=u.parseSet(t),e=u.makeUrl(e),n=0;n<r.length;n++)if(e===u.makeUrl(r[n].url)){i=r[n];break}return i}r.console&&console.warn,E in m||(E="src"),v["image/jpeg"]=!0,v["image/gif"]=!0,v["image/png"]=!0,v["image/svg+xml"]=s.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),u.ns=("pf"+(new Date).getTime()).substr(0,9),u.supSrcset="srcset"in m,u.supSizes="sizes"in m,u.supPicture=!!r.HTMLPictureElement,u.supSrcset&&u.supPicture&&!u.supSizes&&(q=s.createElement("img"),m.srcset="data:,a",q.src="data:,a",u.supSrcset=m.complete===q.complete,u.supPicture=u.supSrcset&&u.supPicture),u.supSrcset&&!u.supSizes?(V="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",J=function(){2===K.width&&(u.supSizes=!0),o=u.supSrcset&&!u.supSizes,d=!0,setTimeout(oe)},(K=s.createElement("img")).onload=J,K.onerror=J,K.setAttribute("sizes","9px"),K.srcset=V+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",K.src=V):d=!0,u.selShort="picture>img,img[srcset]",u.sel=u.selShort,u.cfg=y,u.DPR=P||1,u.u=B,u.types=v,u.setSize=f,u.makeUrl=H((function(e){return D.href=e,D.href})),u.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},u.matchesMedia=function(){return r.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?u.matchesMedia=function(e){return!e||matchMedia(e).matches}:u.matchesMedia=u.mMQ,u.matchesMedia.apply(this,arguments)},u.mMQ=function(e){return!e||ae(e)},u.calcLength=function(e){var t=ae(e,!0)||!1;return t<0&&(t=!1),t},u.supportsType=function(e){return!e||v[e]},u.parseSize=H((function(e){var t=(e||"").match(x);return{media:t&&t[1],length:t&&t[2]}})),u.parseSet=function(e){return e.cands||(e.cands=function(e,t){function n(t){var n,i=t.exec(e.substring(l));if(i)return n=i[0],l+=n.length,n}var i,r,s,a,c,o=e.length,l=0,u=[];function d(){var e,n,s,a,c,o,l,d,f,m=!1,p={};for(a=0;a<r.length;a++)o=(c=r[a])[c.length-1],l=c.substring(0,c.length-1),d=parseInt(l,10),f=parseFloat(l),U.test(l)&&"w"===o?((e||n)&&(m=!0),0===d?m=!0:e=d):F.test(l)&&"x"===o?((e||n||s)&&(m=!0),f<0?m=!0:n=f):U.test(l)&&"h"===o?((s||n)&&(m=!0),0===d?m=!0:s=d):m=!0;m||(p.url=i,e&&(p.w=e),n&&(p.d=n),s&&(p.h=s),s||n||e||(p.d=1),1===p.d&&(t.has1x=!0),p.set=t,u.push(p))}function f(){for(n(N),s="",a="in descriptor";;){if(c=e.charAt(l),"in descriptor"===a)if(Q(c))s&&(r.push(s),s="",a="after descriptor");else{if(","===c)return l+=1,s&&r.push(s),void d();if("("===c)s+=c,a="in parens";else{if(""===c)return s&&r.push(s),void d();s+=c}}else if("in parens"===a)if(")"===c)s+=c,a="in descriptor";else{if(""===c)return r.push(s),void d();s+=c}else if("after descriptor"===a)if(Q(c));else{if(""===c)return void d();a="in descriptor",l-=1}l+=1}}for(;;){if(n(k),l>=o)return u;i=n($),r=[],","===i.slice(-1)?(i=i.replace(I,""),d()):f()}}(e.srcset,e)),e.cands},u.getEmValue=function(){var e;if(!c&&(e=s.body)){var t=s.createElement("div"),n=g.style.cssText,i=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",g.style.cssText=L,e.style.cssText=L,e.appendChild(t),c=t.offsetWidth,e.removeChild(t),c=parseFloat(c,10),g.style.cssText=n,e.style.cssText=i}return c||16},u.calcListLength=function(e){if(!(e in R)||y.uT){var t=u.calcLength(function(e){var t,n,i,r,s,a,c,o=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(i=(n=function(e){var t,n="",i=[],r=[],s=0,a=0,c=!1;function o(){n&&(i.push(n),n="")}function l(){i[0]&&(r.push(i),i=[])}for(;;){if(""===(t=e.charAt(a)))return o(),l(),r;if(c){if("*"===t&&"/"===e[a+1]){c=!1,a+=2,o();continue}a+=1}else{if(Q(t)){if(e.charAt(a-1)&&Q(e.charAt(a-1))||!n){a+=1;continue}if(0===s){o(),a+=1;continue}t=" "}else if("("===t)s+=1;else if(")"===t)s-=1;else{if(","===t){o(),l(),a+=1;continue}if("/"===t&&"*"===e.charAt(a+1)){c=!0,a+=2;continue}}n+=t,a+=1}}}(e)).length,t=0;t<i;t++)if(c=s=(r=n[t])[r.length-1],o.test(c)&&parseFloat(c)>=0||l.test(c)||"0"===c||"-0"===c||"+0"===c){if(a=s,r.pop(),0===r.length)return a;if(r=r.join(" "),u.matchesMedia(r))return a}return"100vw"}(e));R[e]=t||B.width}return R[e]},u.setRes=function(e){var t;if(e)for(var n=0,i=(t=u.parseSet(e)).length;n<i;n++)ce(t[n],e.sizes);return t},u.setRes.res=ce,u.applySetCandidate=function(e,t){if(e.length){var n,i,r,s,a,c,o,l,d,f,m,p,h,A,g,v,b=t[u.ns],z=u.DPR;if(c=b.curSrc||t[E],(o=b.curCan||function(e,t,n){var i;return!n&&t&&(n=(n=e[u.ns].sets)&&n[n.length-1]),(i=ue(t,n))&&(t=u.makeUrl(t),e[u.ns].curSrc=t,e[u.ns].curCan=i,i.res||ce(i,i.set.sizes)),i}(t,c,e[0].set))&&o.set===e[0].set&&((d=C&&!t.complete&&o.res-.1>z)||(o.cached=!0,o.res>=z&&(a=o))),!a)for(e.sort(le),a=e[(s=e.length)-1],i=0;i<s;i++)if((n=e[i]).res>=z){a=e[r=i-1]&&(d||c!==u.makeUrl(n.url))&&(f=e[r].res,m=n.res,p=z,h=e[r].cached,A=void 0,g=void 0,v=void 0,"saveData"===y.algorithm?f>2.7?v=p+1:(g=(m-p)*(A=Math.pow(f-.6,1.5)),h&&(g+=.1*A),v=f+g):v=p>1?Math.sqrt(f*m):f,v>p)?e[r]:n;break}a&&(l=u.makeUrl(a.url),b.curSrc=l,b.curCan=a,l!==c&&u.setSrc(t,a),u.setSize(t))}},u.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},u.getSet=function(e){var t,n,i,r=!1,s=e[u.ns].sets;for(t=0;t<s.length&&!r;t++)if((n=s[t]).srcset&&u.matchesMedia(n.media)&&(i=u.supportsType(n.type))){"pending"===i&&(n=i),r=n;break}return r},u.parseSets=function(e,t,n){var i,r,s,c,l=t&&"PICTURE"===t.nodeName.toUpperCase(),d=e[u.ns];(d.src===a||n.src)&&(d.src=p.call(e,"src"),d.src?h.call(e,b,d.src):A.call(e,b)),(d.srcset===a||n.srcset||!u.supSrcset||e.srcset)&&(i=p.call(e,"srcset"),d.srcset=i,c=!0),d.sets=[],l&&(d.pic=!0,function(e,t){var n,i,r,s,a=e.getElementsByTagName("source");for(n=0,i=a.length;n<i;n++)(r=a[n])[u.ns]=!0,(s=r.getAttribute("srcset"))&&t.push({srcset:s,media:r.getAttribute("media"),type:r.getAttribute("type"),sizes:r.getAttribute("sizes")})}(t,d.sets)),d.srcset?(r={srcset:d.srcset,sizes:p.call(e,"sizes")},d.sets.push(r),(s=(o||d.src)&&S.test(d.srcset||""))||!d.src||ue(d.src,r)||r.has1x||(r.srcset+=", "+d.src,r.cands.push({url:d.src,d:1,set:r}))):d.src&&d.sets.push({srcset:d.src,sizes:null}),d.curCan=null,d.curSrc=a,d.supported=!(l||r&&!u.supSrcset||s&&!u.supSizes),c&&u.supSrcset&&!d.supported&&(i?(h.call(e,z,i),e.srcset=""):A.call(e,z)),d.supported&&!d.srcset&&(!d.src&&e.src||e.src!==u.makeUrl(d.src))&&(null===d.src?e.removeAttribute("src"):e.src=d.src),d.parsed=!0},u.fillImg=function(e,t){var n,i=t.reselect||t.reevaluate;e[u.ns]||(e[u.ns]={}),n=e[u.ns],(i||n.evaled!==l)&&(n.parsed&&!t.reevaluate||u.parseSets(e,e.parentNode,t),n.supported?n.evaled=l:function(e){var t,n=u.getSet(e),i=!1;"pending"!==n&&(i=l,n&&(t=u.setRes(n),u.applySetCandidate(t,e))),e[u.ns].evaled=i}(e))},u.setupRun=function(){W&&!_&&P===r.devicePixelRatio||(_=!1,P=r.devicePixelRatio,T={},R={},u.DPR=P||1,B.width=Math.max(r.innerWidth||0,g.clientWidth),B.height=Math.max(r.innerHeight||0,g.clientHeight),B.vw=B.width/100,B.vh=B.height/100,l=[B.height,B.width,P].join("-"),B.em=u.getEmValue(),B.rem=B.em)},u.supPicture?(oe=f,u.fillImg=f):(ne=r.attachEvent?/d$|^c/:/d$|^c|^i/,ie=function(){var e=s.readyState||"";re=setTimeout(ie,"loading"===e?200:999),s.body&&(u.fillImgs(),(X=X||ne.test(e))&&clearTimeout(re))},re=setTimeout(ie,s.body?9:99),se=g.clientHeight,O(r,"resize",(Y=function(){_=Math.max(r.innerWidth||0,g.clientWidth)!==B.width||g.clientHeight!==se,se=g.clientHeight,_&&u.fillImgs()},99,te=function(){var e=new Date-ee;e<99?Z=setTimeout(te,99-e):(Z=null,Y())},function(){ee=new Date,Z||(Z=setTimeout(te,99))})),O(s,"readystatechange",ie)),u.picturefill=oe,u.fillImgs=oe,u.teardownRun=f,oe._=u,r.picturefillCFG={pf:u,push:function(e){var t=e.shift();"function"==typeof u[t]?u[t].apply(u,e):(y[t]=e[0],W&&u.fillImgs({reselect:!0}))}};for(;M&&M.length;)r.picturefillCFG.push(M.shift());r.picturefill=oe,"object"==typeof e.exports?e.exports=oe:(i=function(){return oe}.call(t,n,t,e))===a||(e.exports=i),u.supPicture||(v["image/webp"]=function(e,t){var n=new r.Image;return n.onerror=function(){v[e]=!1,oe()},n.onload=function(){v[e]=1===n.width,oe()},n.src="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==","pending"}("image/webp"))}(window,document)}},t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={exports:{}};return e[i](r,r.exports,n),r.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=n(4575),t=n.n(e),i=n(3913),r=n.n(i),s=(n(7090),n(7229)),a=n.n(s);function c(){var e="C:\\MAMP\\htdocs\\aem-compatible\\src\\templates\\_baseLayoutPage\\clientlibs\\scripts\\head-scripts.es.js",t=new Function("return this")(),n="__coverage__",i=t[n]||(t[n]={});i[e]&&"577d2772a2885885dba4fc5c3cc31a672d7b6df7"===i[e].hash||(i[e]={path:"C:\\MAMP\\htdocs\\aem-compatible\\src\\templates\\_baseLayoutPage\\clientlibs\\scripts\\head-scripts.es.js",statementMap:{0:{start:{line:8,column:4},end:{line:10,column:5}},1:{start:{line:9,column:6},end:{line:9,column:20}},2:{start:{line:14,column:17},end:{line:14,column:34}},3:{start:{line:15,column:0},end:{line:15,column:18}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:5,column:2},end:{line:5,column:3}},loc:{start:{line:5,column:16},end:{line:5,column:18}},line:5},1:{name:"(anonymous_1)",decl:{start:{line:7,column:2},end:{line:7,column:3}},loc:{start:{line:7,column:11},end:{line:11,column:3}},line:7}},branchMap:{0:{loc:{start:{line:8,column:4},end:{line:10,column:5}},type:"if",locations:[{start:{line:8,column:4},end:{line:10,column:5}},{start:{line:8,column:4},end:{line:10,column:5}}],line:8}},s:{0:0,1:0,2:0,3:0},f:{0:0,1:0},b:{0:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"577d2772a2885885dba4fc5c3cc31a672d7b6df7"});var r=i[e];return c=function(){return r},r}c();var o=function(){function e(){t()(this,e),c().f[0]++}return r()(e,[{key:"__init",value:function(){c().f[1]++,c().s[0]++,"function"==typeof a()?(c().b[0][0]++,c().s[1]++,a()()):c().b[0][1]++}}]),e}(),l=(c().s[2]++,new o);c().s[3]++,l.__init()}()}();
//# sourceMappingURL=head-scripts.js.map