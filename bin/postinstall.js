"use strict";var j_=Object.create;var R_=Object.defineProperty;var K_=Object.getOwnPropertyDescriptor;var X_=Object.getOwnPropertyNames;var Y_=Object.getPrototypeOf,J_=Object.prototype.hasOwnProperty;var f_=(l,L)=>()=>(L||l((L={exports:{}}).exports,L),L.exports);var Z_=(l,L,A,E)=>{if(L&&typeof L=="object"||typeof L=="function")for(let o of X_(L))!J_.call(l,o)&&o!==A&&R_(l,o,{get:()=>L[o],enumerable:!(E=K_(L,o))||E.enumerable});return l};var w=(l,L,A)=>(A=l!=null?j_(Y_(l)):{},Z_(L||!l||!l.__esModule?R_(A,"default",{value:l,enumerable:!0}):A,l));var h_=f_((se,V)=>{"use strict";var q_=(()=>{let o={},R={font:"Standard",fontPath:"./fonts"};function O(T,r){let _={},e,t,n,u,i=[[16384,"vLayout",2],[8192,"vLayout",1],[4096,"vRule5",!0],[2048,"vRule4",!0],[1024,"vRule3",!0],[512,"vRule2",!0],[256,"vRule1",!0],[128,"hLayout",2],[64,"hLayout",1],[32,"hRule6",!0],[16,"hRule5",!0],[8,"hRule4",!0],[4,"hRule3",!0],[2,"hRule2",!0],[1,"hRule1",!0]];for(e=r!==null?r:T,t=0,n=i.length;t<n;)u=i[t],e>=u[0]?(e=e-u[0],_[u[1]]=typeof _[u[1]]>"u"?u[2]:_[u[1]]):u[1]!=="vLayout"&&u[1]!=="hLayout"&&(_[u[1]]=!1),t++;return typeof _.hLayout>"u"?T===0?_.hLayout=1:T===-1?_.hLayout=0:_.hRule1||_.hRule2||_.hRule3||_.hRule4||_.hRule5||_.hRule6?_.hLayout=3:_.hLayout=2:_.hLayout===2&&(_.hRule1||_.hRule2||_.hRule3||_.hRule4||_.hRule5||_.hRule6)&&(_.hLayout=3),typeof _.vLayout>"u"?_.vRule1||_.vRule2||_.vRule3||_.vRule4||_.vRule5?_.vLayout=3:_.vLayout=0:_.vLayout===2&&(_.vRule1||_.vRule2||_.vRule3||_.vRule4||_.vRule5)&&(_.vLayout=3),_}function F(T,r,_){return T===r&&T!==_?T:!1}function T_(T,r){let _="|/\\[]{}()<>";if(T==="_"){if(_.indexOf(r)!==-1)return r}else if(r==="_"&&_.indexOf(T)!==-1)return T;return!1}function t_(T,r){let _="| /\\ [] {} () <>",e=_.indexOf(T),t=_.indexOf(r);if(e!==-1&&t!==-1&&e!==t&&Math.abs(e-t)!==1){let n=Math.max(e,t),u=n+1;return _.substring(n,u)}return!1}function r_(T,r){let _="[] {} ()",e=_.indexOf(T),t=_.indexOf(r);return e!==-1&&t!==-1&&Math.abs(e-t)<=1?"|":!1}function L_(T,r){let _="/\\ \\/ ><",e={0:"|",3:"Y",6:"X"},t=_.indexOf(T),n=_.indexOf(r);return t!==-1&&n!==-1&&n-t===1?e[t]:!1}function n_(T,r,_){return T===_&&r===_?_:!1}function l_(T,r){return T===r?T:!1}function i_(T,r){let _="|/\\[]{}()<>";if(T==="_"){if(_.indexOf(r)!==-1)return r}else if(r==="_"&&_.indexOf(T)!==-1)return T;return!1}function I_(T,r){let _="| /\\ [] {} () <>",e=_.indexOf(T),t=_.indexOf(r);if(e!==-1&&t!==-1&&e!==t&&Math.abs(e-t)!==1){let n=Math.max(e,t),u=n+1;return _.substring(n,u)}return!1}function A_(T,r){return T==="-"&&r==="_"||T==="_"&&r==="-"?"=":!1}function E_(T,r){return T==="|"&&r==="|"?"|":!1}function v(T,r,_){return r===" "||r===""||r===_&&T!==" "?T:r}function D_(T,r,_){if(_.fittingRules.vLayout===0)return"invalid";let e,t=Math.min(T.length,r.length),n,u,i=!1,I;if(t===0)return"invalid";for(e=0;e<t;e++)if(n=T.substring(e,e+1),u=r.substring(e,e+1),n!==" "&&u!==" "){if(_.fittingRules.vLayout===1)return"invalid";if(_.fittingRules.vLayout===2)return"end";if(E_(n,u)){i=i||!1;continue}if(I=!1,I=_.fittingRules.vRule1?l_(n,u):I,I=!I&&_.fittingRules.vRule2?i_(n,u):I,I=!I&&_.fittingRules.vRule3?I_(n,u):I,I=!I&&_.fittingRules.vRule4?A_(n,u):I,i=!0,!I)return"invalid"}return i?"end":"valid"}function F_(T,r,_){let e=T.length,t=T.length,n=r.length,u,i,I,s=1,N,c,a;for(;s<=e;){for(u=T.slice(Math.max(0,t-s),t),i=r.slice(0,Math.min(e,s)),I=i.length,a="",N=0;N<I;N++)if(c=D_(u[N],i[N],_),c==="end")a=c;else if(c==="invalid"){a=c;break}else a===""&&(a="valid");if(a==="invalid"){s--;break}if(a==="end")break;a==="valid"&&s++}return Math.min(e,s)}function p_(T,r,_){let e,t=Math.min(T.length,r.length),n,u,i="",I;for(e=0;e<t;e++)n=T.substring(e,e+1),u=r.substring(e,e+1),n!==" "&&u!==" "?_.fittingRules.vLayout===1||_.fittingRules.vLayout===2?i+=v(n,u):(I=!1,I=_.fittingRules.vRule5?E_(n,u):I,I=!I&&_.fittingRules.vRule1?l_(n,u):I,I=!I&&_.fittingRules.vRule2?i_(n,u):I,I=!I&&_.fittingRules.vRule3?I_(n,u):I,I=!I&&_.fittingRules.vRule4?A_(n,u):I,i+=I):i+=v(n,u);return i}function y_(T,r,_,e){let t=T.length,n=r.length,u=T.slice(0,Math.max(0,t-_)),i=T.slice(Math.max(0,t-_),t),I=r.slice(0,Math.min(_,n)),s,N,c,a=[],f,H=[];for(N=i.length,s=0;s<N;s++)s>=n?c=i[s]:c=p_(i[s],I[s],e),a.push(c);return f=r.slice(Math.min(_,n),n),H.concat(u,a,f)}function u_(T,r){let _,e=T.length,t="";for(_=0;_<r;_++)t+=" ";for(_=0;_<e;_++)T[_]+=t}function B_(T,r,_){let e=T[0].length,t=r[0].length,n;return e>t?u_(r,e-t):t>e&&u_(T,t-e),n=F_(T,r,_),y_(T,r,n,_)}function G_(T,r,_){if(_.fittingRules.hLayout===0)return 0;let e,t=T.length,n=r.length,u=t,i=1,I=!1,s=!1,N,c,a,f;if(t===0)return 0;_:for(;i<=u;){let H=t-i;for(N=T.substring(H,H+i),c=r.substring(0,Math.min(i,n)),e=0;e<Math.min(i,n);e++)if(a=N.substring(e,e+1),f=c.substring(e,e+1),a!==" "&&f!==" "){if(_.fittingRules.hLayout===1){i=i-1;break _}else if(_.fittingRules.hLayout===2){(a===_.hardBlank||f===_.hardBlank)&&(i=i-1);break _}else if(I=!0,s=!1,s=_.fittingRules.hRule1?F(a,f,_.hardBlank):s,s=!s&&_.fittingRules.hRule2?T_(a,f,_.hardBlank):s,s=!s&&_.fittingRules.hRule3?t_(a,f,_.hardBlank):s,s=!s&&_.fittingRules.hRule4?r_(a,f,_.hardBlank):s,s=!s&&_.fittingRules.hRule5?L_(a,f,_.hardBlank):s,s=!s&&_.fittingRules.hRule6?n_(a,f,_.hardBlank):s,!s){i=i-1;break _}}if(I)break;i++}return Math.min(u,i)}function J(T,r,_,e){let t,n,u=[],i,I,s,N,c,a,f,H;for(t=0;t<e.height;t++){f=T[t],H=r[t],c=f.length,a=H.length,i=c-_,I=f.substr(0,Math.max(0,i)),s="";let a_=Math.max(0,c-_);var P=f.substring(a_,a_+_),$=H.substring(0,Math.min(_,a));for(n=0;n<_;n++){var g=n<c?P.substring(n,n+1):" ",d=n<a?$.substring(n,n+1):" ";if(g!==" "&&d!==" ")if(e.fittingRules.hLayout===1)s+=v(g,d,e.hardBlank);else if(e.fittingRules.hLayout===2)s+=v(g,d,e.hardBlank);else{var h="";h=!h&&e.fittingRules.hRule1?F(g,d,e.hardBlank):h,h=!h&&e.fittingRules.hRule2?T_(g,d,e.hardBlank):h,h=!h&&e.fittingRules.hRule3?t_(g,d,e.hardBlank):h,h=!h&&e.fittingRules.hRule4?r_(g,d,e.hardBlank):h,h=!h&&e.fittingRules.hRule5?L_(g,d,e.hardBlank):h,h=!h&&e.fittingRules.hRule6?n_(g,d,e.hardBlank):h,h=h||v(g,d,e.hardBlank),s+=h}else s+=v(g,d,e.hardBlank)}_>=a?N="":N=H.substring(_,_+Math.max(0,a-_)),u[t]=I+s+N}return u}function p(T){let r=[],_;for(_=0;_<T;_++)r[_]="";return r}let y=function(T){return Math.max.apply(Math,T.map(function(r,_){return r.length}))};function b(T,r,_){return T.reduce(function(e,t){return J(e,t.fig,t.overlap,_)},p(r))}function $_(T,r,_){let e={};for(let t=T.length;--t;){let n=b(T.slice(0,t),r,_);if(y(n)<=_.width){e.outputFigText=n,t<T.length?e.chars=T.slice(t):e.chars=[];break}}return e}function w_(T,r,_){let e,t,n=0,u,i,I,s=_.height,N=[],c,a,f=[],H,P,$,g,d;for(i=p(s),_.width>0&&_.whitespaceBreak&&(a={chars:[],overlap:n}),_.printDirection===1&&(T=T.split("").reverse().join("")),I=T.length,e=0;e<I;e++)if(H=T.substring(e,e+1),P=H.match(/\s/),t=r[H.charCodeAt(0)],g=null,t){if(_.fittingRules.hLayout!==0){for(n=1e4,u=0;u<_.height;u++)n=Math.min(n,G_(i[u],t[u],_));n=n===1e4?0:n}if(_.width>0&&(_.whitespaceBreak?($=b(a.chars.concat([{fig:t,overlap:n}]),s,_),g=b(f.concat([{fig:$,overlap:a.overlap}]),s,_),c=y(g)):(g=J(i,t,n,_),c=y(g)),c>=_.width&&e>0&&(_.whitespaceBreak?(i=b(f.slice(0,-1),s,_),f.length>1&&(N.push(i),i=p(s)),f=[]):(N.push(i),i=p(s)))),_.width>0&&_.whitespaceBreak&&((!P||e===I-1)&&a.chars.push({fig:t,overlap:n}),P||e===I-1)){for(d=null;g=b(a.chars,s,_),c=y(g),c>=_.width;)d=$_(a.chars,s,_),a={chars:d.chars},N.push(d.outputFigText);c>0&&(d?f.push({fig:g,overlap:1}):f.push({fig:g,overlap:a.overlap})),P&&(f.push({fig:t,overlap:n}),i=p(s)),e===I-1&&(i=b(f,s,_)),a={chars:[],overlap:n};continue}i=J(i,t,n,_)}return y(i)>0&&N.push(i),_.showHardBlanks!==!0&&N.forEach(function(h){for(I=h.length,u=0;u<I;u++)h[u]=h[u].replace(new RegExp("\\"+_.hardBlank,"g")," ")}),N}let V_=function(T,r){let _=["hLayout","hRule1","hRule2","hRule3","hRule4","hRule5","hRule6"],e={},t;if(T==="default")for(t=0;t<_.length;t++)e[_[t]]=r.fittingRules[_[t]];else if(T==="full")e={hLayout:0,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(T==="fitted")e={hLayout:1,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(T==="controlled smushing")e={hLayout:3,hRule1:!0,hRule2:!0,hRule3:!0,hRule4:!0,hRule5:!0,hRule6:!0};else if(T==="universal smushing")e={hLayout:2,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else return;return e},k_=function(T,r){let _=["vLayout","vRule1","vRule2","vRule3","vRule4","vRule5"],e={},t;if(T==="default")for(t=0;t<_.length;t++)e[_[t]]=r.fittingRules[_[t]];else if(T==="full")e={vLayout:0,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(T==="fitted")e={vLayout:1,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(T==="controlled smushing")e={vLayout:3,vRule1:!0,vRule2:!0,vRule3:!0,vRule4:!0,vRule5:!0};else if(T==="universal smushing")e={vLayout:2,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else return;return e},o_=function(T,r,_){_=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`);let e=_.split(`
`),t=[],n,u,i;for(u=e.length,n=0;n<u;n++)t=t.concat(w_(e[n],o[T],r));for(u=t.length,i=t[0],n=1;n<u;n++)i=B_(i,t[n],r);return i?i.join(`
`):""};function s_(T,r){let _=JSON.parse(JSON.stringify(T)),e,t;if(typeof r.horizontalLayout<"u"){e=V_(r.horizontalLayout,T);for(t in e)e.hasOwnProperty(t)&&(_.fittingRules[t]=e[t])}if(typeof r.verticalLayout<"u"){e=k_(r.verticalLayout,T);for(t in e)e.hasOwnProperty(t)&&(_.fittingRules[t]=e[t])}return _.printDirection=typeof r.printDirection<"u"?r.printDirection:T.printDirection,_.showHardBlanks=r.showHardBlanks||!1,_.width=r.width||-1,_.whitespaceBreak=r.whitespaceBreak||!1,_}let M=function(T,r,_){M.text(T,r,_)};return M.text=function(T,r,_){let e="";T=T+"",typeof arguments[1]=="function"&&(_=r,r={},r.font=R.font),typeof r=="string"?(e=r,r={}):(r=r||{},e=r.font||R.font),M.loadFont(e,function(t,n){if(t)return _(t);_(null,o_(e,s_(n,r),T))})},M.textSync=function(T,r){let _="";T=T+"",typeof r=="string"?(_=r,r={}):(r=r||{},_=r.font||R.font);var e=s_(M.loadFontSync(_),r);return o_(_,e,T)},M.metadata=function(T,r){T=T+"",M.loadFont(T,function(_,e){if(_){r(_);return}r(null,e,o[T].comment)})},M.defaults=function(T){if(typeof T=="object"&&T!==null)for(var r in T)T.hasOwnProperty(r)&&(R[r]=T[r]);return JSON.parse(JSON.stringify(R))},M.parseFont=function(T,r){r=r.replace(/\r\n/g,`
`).replace(/\r/g,`
`),o[T]={};var _=r.split(`
`),e=_.splice(0,1)[0].split(" "),t=o[T],n={};if(n.hardBlank=e[0].substr(5,1),n.height=parseInt(e[1],10),n.baseline=parseInt(e[2],10),n.maxLength=parseInt(e[3],10),n.oldLayout=parseInt(e[4],10),n.numCommentLines=parseInt(e[5],10),n.printDirection=e.length>=6?parseInt(e[6],10):0,n.fullLayout=e.length>=7?parseInt(e[7],10):null,n.codeTagCount=e.length>=8?parseInt(e[8],10):null,n.fittingRules=O(n.oldLayout,n.fullLayout),t.options=n,n.hardBlank.length!==1||isNaN(n.height)||isNaN(n.baseline)||isNaN(n.maxLength)||isNaN(n.oldLayout)||isNaN(n.numCommentLines))throw new Error("FIGlet header contains invalid values.");let u=[],i;for(i=32;i<=126;i++)u.push(i);if(u=u.concat(196,214,220,228,246,252,223),_.length<n.numCommentLines+n.height*u.length)throw new Error("FIGlet file is missing data.");let I,s,N=!1;for(t.comment=_.splice(0,n.numCommentLines).join(`
`),t.numChars=0;_.length>0&&t.numChars<u.length;){for(I=u[t.numChars],t[I]=_.splice(0,n.height),i=0;i<n.height;i++)typeof t[I][i]>"u"?t[I][i]="":(s=new RegExp("\\"+t[I][i].substr(t[I][i].length-1,1)+"+$"),t[I][i]=t[I][i].replace(s,""));t.numChars++}for(;_.length>0;){if(I=_.splice(0,1)[0].split(" ")[0],/^0[xX][0-9a-fA-F]+$/.test(I))I=parseInt(I,16);else if(/^0[0-7]+$/.test(I))I=parseInt(I,8);else if(/^[0-9]+$/.test(I))I=parseInt(I,10);else if(/^-0[xX][0-9a-fA-F]+$/.test(I))I=parseInt(I,16);else{if(I==="")break;console.log("Invalid data:"+I),N=!0;break}for(t[I]=_.splice(0,n.height),i=0;i<n.height;i++)typeof t[I][i]>"u"?t[I][i]="":(s=new RegExp("\\"+t[I][i].substr(t[I][i].length-1,1)+"+$"),t[I][i]=t[I][i].replace(s,""));t.numChars++}if(N===!0)throw new Error("Error parsing data.");return n},M.loadFont=function(T,r){if(o[T]){r(null,o[T].options);return}if(typeof fetch!="function")throw console.error("figlet.js requires the fetch API or a fetch polyfill such as https://cdnjs.com/libraries/fetch"),new Error("fetch is required for figlet.js to work.");fetch(R.fontPath+"/"+T+".flf").then(function(_){if(_.ok)return _.text();throw console.log("Unexpected response",_),new Error("Network response was not ok.")}).then(function(_){r(null,M.parseFont(T,_))}).catch(r)},M.loadFontSync=function(T){if(o[T])return o[T].options;throw new Error("synchronous font loading is not implemented for the browser")},M.preloadFonts=function(T,r){let _=[];T.reduce(function(e,t){return e.then(function(){return fetch(R.fontPath+"/"+t+".flf").then(n=>n.text()).then(function(n){_.push(n)})})},Promise.resolve()).then(function(e){for(var t in T)T.hasOwnProperty(t)&&M.parseFont(T[t],_[t]);r&&r()})},M.figFonts=o,M})();typeof V<"u"&&typeof V.exports<"u"&&(V.exports=q_)});var C_=f_((ae,c_)=>{var x=h_(),k=require("fs"),Z=require("path"),j=Z.join(__dirname,"/../fonts/");x.loadFont=function(l,L){if(x.figFonts[l]){L(null,x.figFonts[l].options);return}k.readFile(Z.join(j,l+".flf"),{encoding:"utf-8"},function(A,E){if(A)return L(A);E=E+"";try{L(null,x.parseFont(l,E))}catch(o){L(o)}})};x.loadFontSync=function(l){if(x.figFonts[l])return x.figFonts[l].options;var L=k.readFileSync(Z.join(j,l+".flf"),{encoding:"utf-8"});return L=L+"",x.parseFont(l,L)};x.fonts=function(l){var L=[];k.readdir(j,function(A,E){if(A)return l(A);E.forEach(function(o){/\.flf$/.test(o)&&L.push(o.replace(/\.flf$/,""))}),l(null,L)})};x.fontsSync=function(){var l=[];return k.readdirSync(j).forEach(function(L){/\.flf$/.test(L)&&l.push(L.replace(/\.flf$/,""))}),l};c_.exports=x});var N_=`flf2a$ 6 5 16 15 13 0 24463 229
Standard by Glenn Chappell & Ian Chai 3/93 -- based on Frank's .sig
Includes ISO Latin-1
figlet release 2.1 -- 12 Aug 1994
Modified for figlet 2.2 by John Cowan <cowan@ccil.org>
  to add Latin-{2,3,4,5} support (Unicode U+0100-017F).
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Modified by Paul Burton <solution@earthlink.net> 12/96 to include new parameter
supported by FIGlet and FIGWin.  May also be slightly modified for better use
of new full-width/kern/smush alternatives, but default output is NOT changed.

Font modified May 20, 2012 by patorjk to add the 0xCA0 character
 $@
 $@
 $@
 $@
 $@
 $@@
  _ @
 | |@
 | |@
 |_|@
 (_)@
    @@
  _ _ @
 ( | )@
  V V @
   $  @
   $  @
      @@
    _  _   @
  _| || |_ @
 |_  ..  _|@
 |_      _|@
   |_||_|  @
           @@
   _  @
  | | @
 / __)@
 \\__ \\@
 (   /@
  |_| @@
  _  __@
 (_)/ /@
   / / @
  / /_ @
 /_/(_)@
       @@
   ___   @
  ( _ )  @
  / _ \\/\\@
 | (_>  <@
  \\___/\\/@
         @@
  _ @
 ( )@
 |/ @
  $ @
  $ @
    @@
   __@
  / /@
 | | @
 | | @
 | | @
  \\_\\@@
 __  @
 \\ \\ @
  | |@
  | |@
  | |@
 /_/ @@
       @
 __/\\__@
 \\    /@
 /_  _\\@
   \\/  @
       @@
        @
    _   @
  _| |_ @
 |_   _|@
   |_|  @
        @@
    @
    @
    @
  _ @
 ( )@
 |/ @@
        @
        @
  _____ @
 |_____|@
    $   @
        @@
    @
    @
    @
  _ @
 (_)@
    @@
     __@
    / /@
   / / @
  / /  @
 /_/   @
       @@
   ___  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
  _ @
 / |@
 | |@
 | |@
 |_|@
    @@
  ____  @
 |___ \\ @
   __) |@
  / __/ @
 |_____|@
        @@
  _____ @
 |___ / @
   |_ \\ @
  ___) |@
 |____/ @
        @@
  _  _   @
 | || |  @
 | || |_ @
 |__   _|@
    |_|  @
         @@
  ____  @
 | ___| @
 |___ \\ @
  ___) |@
 |____/ @
        @@
   __   @
  / /_  @
 | '_ \\ @
 | (_) |@
  \\___/ @
        @@
  _____ @
 |___  |@
    / / @
   / /  @
  /_/   @
        @@
   ___  @
  ( _ ) @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
   ___  @
  / _ \\ @
 | (_) |@
  \\__, |@
    /_/ @
        @@
    @
  _ @
 (_)@
  _ @
 (_)@
    @@
    @
  _ @
 (_)@
  _ @
 ( )@
 |/ @@
   __@
  / /@
 / / @
 \\ \\ @
  \\_\\@
     @@
        @
  _____ @
 |_____|@
 |_____|@
    $   @
        @@
 __  @
 \\ \\ @
  \\ \\@
  / /@
 /_/ @
     @@
  ___ @
 |__ \\@
   / /@
  |_| @
  (_) @
      @@
    ____  @
   / __ \\ @
  / / _\` |@
 | | (_| |@
  \\ \\__,_|@
   \\____/ @@
     _    @
    / \\   @
   / _ \\  @
  / ___ \\ @
 /_/   \\_\\@
          @@
  ____  @
 | __ ) @
 |  _ \\ @
 | |_) |@
 |____/ @
        @@
   ____ @
  / ___|@
 | |    @
 | |___ @
  \\____|@
        @@
  ____  @
 |  _ \\ @
 | | | |@
 | |_| |@
 |____/ @
        @@
  _____ @
 | ____|@
 |  _|  @
 | |___ @
 |_____|@
        @@
  _____ @
 |  ___|@
 | |_   @
 |  _|  @
 |_|    @
        @@
   ____ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
  _   _ @
 | | | |@
 | |_| |@
 |  _  |@
 |_| |_|@
        @@
  ___ @
 |_ _|@
  | | @
  | | @
 |___|@
      @@
      _ @
     | |@
  _  | |@
 | |_| |@
  \\___/ @
        @@
  _  __@
 | |/ /@
 | ' / @
 | . \\ @
 |_|\\_\\@
       @@
  _     @
 | |    @
 | |    @
 | |___ @
 |_____|@
        @@
  __  __ @
 |  \\/  |@
 | |\\/| |@
 | |  | |@
 |_|  |_|@
         @@
  _   _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
        @@
   ___  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
  ____  @
 |  _ \\ @
 | |_) |@
 |  __/ @
 |_|    @
        @@
   ___  @
  / _ \\ @
 | | | |@
 | |_| |@
  \\__\\_\\@
        @@
  ____  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
        @@
  ____  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
  _____ @
 |_   _|@
   | |  @
   | |  @
   |_|  @
        @@
  _   _ @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
        @@
 __     __@
 \\ \\   / /@
  \\ \\ / / @
   \\ V /  @
    \\_/   @
          @@
 __        __@
 \\ \\      / /@
  \\ \\ /\\ / / @
   \\ V  V /  @
    \\_/\\_/   @
             @@
 __  __@
 \\ \\/ /@
  \\  / @
  /  \\ @
 /_/\\_\\@
       @@
 __   __@
 \\ \\ / /@
  \\ V / @
   | |  @
   |_|  @
        @@
  _____@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
  __ @
 | _|@
 | | @
 | | @
 | | @
 |__|@@
 __    @
 \\ \\   @
  \\ \\  @
   \\ \\ @
    \\_\\@
       @@
  __ @
 |_ |@
  | |@
  | |@
  | |@
 |__|@@
  /\\ @
 |/\\|@
   $ @
   $ @
   $ @
     @@
        @
        @
        @
        @
  _____ @
 |_____|@@
  _ @
 ( )@
  \\|@
  $ @
  $ @
    @@
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
  _     @
 | |__  @
 | '_ \\ @
 | |_) |@
 |_.__/ @
        @@
       @
   ___ @
  / __|@
 | (__ @
  \\___|@
       @@
      _ @
   __| |@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
       @
   ___ @
  / _ \\@
 |  __/@
  \\___|@
       @@
   __ @
  / _|@
 | |_ @
 |  _|@
 |_|  @
      @@
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
  _     @
 | |__  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
  _ @
 (_)@
 | |@
 | |@
 |_|@
    @@
    _ @
   (_)@
   | |@
   | |@
  _/ |@
 |__/ @@
  _    @
 | | __@
 | |/ /@
 |   < @
 |_|\\_\\@
       @@
  _ @
 | |@
 | |@
 | |@
 |_|@
    @@
            @
  _ __ ___  @
 | '_ \` _ \\ @
 | | | | | |@
 |_| |_| |_|@
            @@
        @
  _ __  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
        @
   ___  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
        @
  _ __  @
 | '_ \\ @
 | |_) |@
 | .__/ @
 |_|    @@
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
     |_|@@
       @
  _ __ @
 | '__|@
 | |   @
 |_|   @
       @@
      @
  ___ @
 / __|@
 \\__ \\@
 |___/@
      @@
  _   @
 | |_ @
 | __|@
 | |_ @
  \\__|@
      @@
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
        @
 __   __@
 \\ \\ / /@
  \\ V / @
   \\_/  @
        @@
           @
 __      __@
 \\ \\ /\\ / /@
  \\ V  V / @
   \\_/\\_/  @
           @@
       @
 __  __@
 \\ \\/ /@
  >  < @
 /_/\\_\\@
       @@
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
      @
  ____@
 |_  /@
  / / @
 /___|@
      @@
    __@
   / /@
  | | @
 < <  @
  | | @
   \\_\\@@
  _ @
 | |@
 | |@
 | |@
 | |@
 |_|@@
 __   @
 \\ \\  @
  | | @
   > >@
  | | @
 /_/  @@
  /\\/|@
 |/\\/ @
   $  @
   $  @
   $  @
      @@
  _   _ @
 (_)_(_)@
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
  _   _ @
 (_)_(_)@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\___/ @
        @@
  _   _ @
 (_)_(_)@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
  _   _ @
 (_)_(_)@
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
   ___ @
  / _ \\@
 | |/ /@
 | |\\ \\@
 | ||_/@
 |_|   @@
160  NO-BREAK SPACE
 $@
 $@
 $@
 $@
 $@
 $@@
161  INVERTED EXCLAMATION MARK
  _ @
 (_)@
 | |@
 | |@
 |_|@
    @@
162  CENT SIGN
    _  @
   | | @
  / __)@
 | (__ @
  \\   )@
   |_| @@
163  POUND SIGN
    ___  @
   / ,_\\ @
 _| |_   @
  | |___ @
 (_,____|@
         @@
164  CURRENCY SIGN
 /\\___/\\@
 \\  _  /@
 | (_) |@
 / ___ \\@
 \\/   \\/@
        @@
165  YEN SIGN
  __ __ @
  \\ V / @
 |__ __|@
 |__ __|@
   |_|  @
        @@
166  BROKEN BAR
  _ @
 | |@
 |_|@
  _ @
 | |@
 |_|@@
167  SECTION SIGN
    __ @
  _/ _)@
 / \\ \\ @
 \\ \\\\ \\@
  \\ \\_/@
 (__/  @@
168  DIAERESIS
  _   _ @
 (_) (_)@
  $   $ @
  $   $ @
  $   $ @
        @@
169  COPYRIGHT SIGN
    _____   @
   / ___ \\  @
  / / __| \\ @
 | | (__   |@
  \\ \\___| / @
   \\_____/  @@
170  FEMININE ORDINAL INDICATOR
  __ _ @
 / _\` |@
 \\__,_|@
 |____|@
    $  @
       @@
171  LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
   ____@
  / / /@
 / / / @
 \\ \\ \\ @
  \\_\\_\\@
       @@
172  NOT SIGN
        @
  _____ @
 |___  |@
     |_|@
    $   @
        @@
173  SOFT HYPHEN
       @
       @
  ____ @
 |____|@
    $  @
       @@
174  REGISTERED SIGN
    _____   @
   / ___ \\  @
  / | _ \\ \\ @
 |  |   /  |@
  \\ |_|_\\ / @
   \\_____/  @@
175  MACRON
  _____ @
 |_____|@
    $   @
    $   @
    $   @
        @@
176  DEGREE SIGN
   __  @
  /  \\ @
 | () |@
  \\__/ @
    $  @
       @@
177  PLUS-MINUS SIGN
    _   @
  _| |_ @
 |_   _|@
  _|_|_ @
 |_____|@
        @@
178  SUPERSCRIPT TWO
  ___ @
 |_  )@
  / / @
 /___|@
   $  @
      @@
179  SUPERSCRIPT THREE
  ____@
 |__ /@
  |_ \\@
 |___/@
   $  @
      @@
180  ACUTE ACCENT
  __@
 /_/@
  $ @
  $ @
  $ @
    @@
181  MICRO SIGN
        @
  _   _ @
 | | | |@
 | |_| |@
 | ._,_|@
 |_|    @@
182  PILCROW SIGN
   _____ @
  /     |@
 | (| | |@
  \\__ | |@
    |_|_|@
         @@
183  MIDDLE DOT
    @
  _ @
 (_)@
  $ @
  $ @
    @@
184  CEDILLA
    @
    @
    @
    @
  _ @
 )_)@@
185  SUPERSCRIPT ONE
  _ @
 / |@
 | |@
 |_|@
  $ @
    @@
186  MASCULINE ORDINAL INDICATOR
  ___ @
 / _ \\@
 \\___/@
 |___|@
   $  @
      @@
187  RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
 ____  @
 \\ \\ \\ @
  \\ \\ \\@
  / / /@
 /_/_/ @
       @@
188  VULGAR FRACTION ONE QUARTER
  _   __    @
 / | / / _  @
 | |/ / | | @
 |_/ /|_  _|@
  /_/   |_| @
            @@
189  VULGAR FRACTION ONE HALF
  _   __   @
 / | / /__ @
 | |/ /_  )@
 |_/ / / / @
  /_/ /___|@
           @@
190  VULGAR FRACTION THREE QUARTERS
  ____  __    @
 |__ / / / _  @
  |_ \\/ / | | @
 |___/ /|_  _|@
    /_/   |_| @
              @@
191  INVERTED QUESTION MARK
   _  @
  (_) @
  | | @
 / /_ @
 \\___|@
      @@
192  LATIN CAPITAL LETTER A WITH GRAVE
   __   @
   \\_\\  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
193  LATIN CAPITAL LETTER A WITH ACUTE
    __  @
   /_/  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
194  LATIN CAPITAL LETTER A WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
195  LATIN CAPITAL LETTER A WITH TILDE
   /\\/| @
  |/\\/  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
  _   _ @
 (_)_(_)@
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
197  LATIN CAPITAL LETTER A WITH RING ABOVE
    _   @
   (o)  @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
198  LATIN CAPITAL LETTER AE
     ______ @
    /  ____|@
   / _  _|  @
  / __ |___ @
 /_/ |_____|@
            @@
199  LATIN CAPITAL LETTER C WITH CEDILLA
   ____ @
  / ___|@
 | |    @
 | |___ @
  \\____|@
    )_) @@
200  LATIN CAPITAL LETTER E WITH GRAVE
   __   @
  _\\_\\_ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
201  LATIN CAPITAL LETTER E WITH ACUTE
    __  @
  _/_/_ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
202  LATIN CAPITAL LETTER E WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
 | ____|@
 |  _|_ @
 |_____|@
        @@
203  LATIN CAPITAL LETTER E WITH DIAERESIS
  _   _ @
 (_)_(_)@
 | ____|@
 |  _|_ @
 |_____|@
        @@
204  LATIN CAPITAL LETTER I WITH GRAVE
  __  @
  \\_\\ @
 |_ _|@
  | | @
 |___|@
      @@
205  LATIN CAPITAL LETTER I WITH ACUTE
   __ @
  /_/ @
 |_ _|@
  | | @
 |___|@
      @@
206  LATIN CAPITAL LETTER I WITH CIRCUMFLEX
  //\\ @
 |/_\\|@
 |_ _|@
  | | @
 |___|@
      @@
207  LATIN CAPITAL LETTER I WITH DIAERESIS
  _   _ @
 (_)_(_)@
  |_ _| @
   | |  @
  |___| @
        @@
208  LATIN CAPITAL LETTER ETH
    ____  @
   |  _ \\ @
  _| |_| |@
 |__ __| |@
   |____/ @
          @@
209  LATIN CAPITAL LETTER N WITH TILDE
   /\\/|@
  |/\\/ @
 | \\| |@
 | .\` |@
 |_|\\_|@
       @@
210  LATIN CAPITAL LETTER O WITH GRAVE
   __   @
   \\_\\  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
211  LATIN CAPITAL LETTER O WITH ACUTE
    __  @
   /_/  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
212  LATIN CAPITAL LETTER O WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
213  LATIN CAPITAL LETTER O WITH TILDE
   /\\/| @
  |/\\/  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
215  MULTIPLICATION SIGN
     @
     @
 /\\/\\@
 >  <@
 \\/\\/@
     @@
216  LATIN CAPITAL LETTER O WITH STROKE
   ____ @
  / _// @
 | |// |@
 | //| |@
  //__/ @
        @@
217  LATIN CAPITAL LETTER U WITH GRAVE
   __   @
  _\\_\\_ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
218  LATIN CAPITAL LETTER U WITH ACUTE
    __  @
  _/_/_ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
219  LATIN CAPITAL LETTER U WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
 | | | |@
 | |_| |@
  \\___/ @
        @@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\___/ @
        @@
221  LATIN CAPITAL LETTER Y WITH ACUTE
    __  @
 __/_/__@
 \\ \\ / /@
  \\ V / @
   |_|  @
        @@
222  LATIN CAPITAL LETTER THORN
  _     @
 | |___ @
 |  __ \\@
 |  ___/@
 |_|    @
        @@
223  LATIN SMALL LETTER SHARP S
   ___ @
  / _ \\@
 | |/ /@
 | |\\ \\@
 | ||_/@
 |_|   @@
224  LATIN SMALL LETTER A WITH GRAVE
   __   @
   \\_\\_ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
225  LATIN SMALL LETTER A WITH ACUTE
    __  @
   /_/_ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
226  LATIN SMALL LETTER A WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
227  LATIN SMALL LETTER A WITH TILDE
   /\\/| @
  |/\\/_ @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
228  LATIN SMALL LETTER A WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
229  LATIN SMALL LETTER A WITH RING ABOVE
    __  @
   (()) @
  / _ '|@
 | (_| |@
  \\__,_|@
        @@
230  LATIN SMALL LETTER AE
           @
   __ ____ @
  / _\`  _ \\@
 | (_|  __/@
  \\__,____|@
           @@
231  LATIN SMALL LETTER C WITH CEDILLA
       @
   ___ @
  / __|@
 | (__ @
  \\___|@
   )_) @@
232  LATIN SMALL LETTER E WITH GRAVE
   __  @
   \\_\\ @
  / _ \\@
 |  __/@
  \\___|@
       @@
233  LATIN SMALL LETTER E WITH ACUTE
    __ @
   /_/ @
  / _ \\@
 |  __/@
  \\___|@
       @@
234  LATIN SMALL LETTER E WITH CIRCUMFLEX
   //\\ @
  |/_\\|@
  / _ \\@
 |  __/@
  \\___|@
       @@
235  LATIN SMALL LETTER E WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
 |  __/ @
  \\___| @
        @@
236  LATIN SMALL LETTER I WITH GRAVE
 __ @
 \\_\\@
 | |@
 | |@
 |_|@
    @@
237  LATIN SMALL LETTER I WITH ACUTE
  __@
 /_/@
 | |@
 | |@
 |_|@
    @@
238  LATIN SMALL LETTER I WITH CIRCUMFLEX
  //\\ @
 |/_\\|@
  | | @
  | | @
  |_| @
      @@
239  LATIN SMALL LETTER I WITH DIAERESIS
  _   _ @
 (_)_(_)@
   | |  @
   | |  @
   |_|  @
        @@
240  LATIN SMALL LETTER ETH
   /\\/\\ @
   >  < @
  _\\/\\ |@
 / __\` |@
 \\____/ @
        @@
241  LATIN SMALL LETTER N WITH TILDE
   /\\/| @
  |/\\/  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
242  LATIN SMALL LETTER O WITH GRAVE
   __   @
   \\_\\  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
243  LATIN SMALL LETTER O WITH ACUTE
    __  @
   /_/  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
244  LATIN SMALL LETTER O WITH CIRCUMFLEX
   //\\  @
  |/_\\| @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
245  LATIN SMALL LETTER O WITH TILDE
   /\\/| @
  |/\\/  @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
246  LATIN SMALL LETTER O WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
247  DIVISION SIGN
        @
    _   @
  _(_)_ @
 |_____|@
   (_)  @
        @@
248  LATIN SMALL LETTER O WITH STROKE
         @
   ____  @
  / _//\\ @
 | (//) |@
  \\//__/ @
         @@
249  LATIN SMALL LETTER U WITH GRAVE
   __   @
  _\\_\\_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
250  LATIN SMALL LETTER U WITH ACUTE
    __  @
  _/_/_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
251  LATIN SMALL LETTER U WITH CIRCUMFLEX
   //\\  @
  |/ \\| @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
252  LATIN SMALL LETTER U WITH DIAERESIS
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
253  LATIN SMALL LETTER Y WITH ACUTE
    __  @
  _/_/_ @
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
254  LATIN SMALL LETTER THORN
  _     @
 | |__  @
 | '_ \\ @
 | |_) |@
 | .__/ @
 |_|    @@
255  LATIN SMALL LETTER Y WITH DIAERESIS
  _   _ @
 (_) (_)@
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
0x0100  LATIN CAPITAL LETTER A WITH MACRON
   ____ @
  /___/ @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
0x0101  LATIN SMALL LETTER A WITH MACRON
    ___ @
   /_ _/@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0102  LATIN CAPITAL LETTER A WITH BREVE
  _   _ @
  \\\\_// @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
        @@
0x0103  LATIN SMALL LETTER A WITH BREVE
   \\_/  @
   ___  @
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0104  LATIN CAPITAL LETTER A WITH OGONEK
        @
    _   @
   /_\\  @
  / _ \\ @
 /_/ \\_\\@
     (_(@@
0x0105  LATIN SMALL LETTER A WITH OGONEK
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__,_|@
     (_(@@
0x0106  LATIN CAPITAL LETTER C WITH ACUTE
     __ @
   _/_/ @
  / ___|@
 | |___ @
  \\____|@
        @@
0x0107  LATIN SMALL LETTER C WITH ACUTE
    __ @
   /__/@
  / __|@
 | (__ @
  \\___|@
       @@
0x0108  LATIN CAPITAL LETTER C WITH CIRCUMFLEX
     /\\ @
   _//\\\\@
  / ___|@
 | |___ @
  \\____|@
        @@
0x0109  LATIN SMALL LETTER C WITH CIRCUMFLEX
    /\\ @
   /_\\ @
  / __|@
 | (__ @
  \\___|@
       @@
0x010A  LATIN CAPITAL LETTER C WITH DOT ABOVE
    []  @
   ____ @
  / ___|@
 | |___ @
  \\____|@
        @@
0x010B  LATIN SMALL LETTER C WITH DOT ABOVE
   []  @
   ___ @
  / __|@
 | (__ @
  \\___|@
       @@
0x010C  LATIN CAPITAL LETTER C WITH CARON
   \\\\// @
   _\\/_ @
  / ___|@
 | |___ @
  \\____|@
        @@
0x010D  LATIN SMALL LETTER C WITH CARON
   \\\\//@
   _\\/ @
  / __|@
 | (__ @
  \\___|@
       @@
0x010E  LATIN CAPITAL LETTER D WITH CARON
   \\\\// @
  __\\/  @
 |  _ \\ @
 | |_| |@
 |____/ @
        @@
0x010F  LATIN SMALL LETTER D WITH CARON
  \\/  _ @
   __| |@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0110  LATIN CAPITAL LETTER D WITH STROKE
   ____   @
  |_ __ \\ @
 /| |/ | |@
 /|_|/_| |@
  |_____/ @
          @@
0x0111  LATIN SMALL LETTER D WITH STROKE
    ---|@
   __| |@
  / _\` |@
 | (_| |@
  \\__,_|@
        @@
0x0112  LATIN CAPITAL LETTER E WITH MACRON
   ____ @
  /___/ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x0113  LATIN SMALL LETTER E WITH MACRON
    ____@
   /_ _/@
  / _ \\ @
 |  __/ @
  \\___| @
        @@
0x0114  LATIN CAPITAL LETTER E WITH BREVE
  _   _ @
  \\\\_// @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x0115  LATIN SMALL LETTER E WITH BREVE
  \\\\  //@
    --  @
  / _ \\ @
 |  __/ @
  \\___| @
        @@
0x0116  LATIN CAPITAL LETTER E WITH DOT ABOVE
    []  @
  _____ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x0117  LATIN SMALL LETTER E WITH DOT ABOVE
    [] @
    __ @
  / _ \\@
 |  __/@
  \\___|@
       @@
0x0118  LATIN CAPITAL LETTER E WITH OGONEK
        @
  _____ @
 | ____|@
 |  _|_ @
 |_____|@
    (__(@@
0x0119  LATIN SMALL LETTER E WITH OGONEK
       @
   ___ @
  / _ \\@
 |  __/@
  \\___|@
    (_(@@
0x011A  LATIN CAPITAL LETTER E WITH CARON
   \\\\// @
  __\\/_ @
 | ____|@
 |  _|_ @
 |_____|@
        @@
0x011B  LATIN SMALL LETTER E WITH CARON
   \\\\//@
    \\/ @
  / _ \\@
 |  __/@
  \\___|@
       @@
0x011C  LATIN CAPITAL LETTER G WITH CIRCUMFLEX
   _/\\_ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
0x011D  LATIN SMALL LETTER G WITH CIRCUMFLEX
     /\\ @
   _/_ \\@
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
0x011E  LATIN CAPITAL LETTER G WITH BREVE
   _\\/_ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
0x011F  LATIN SMALL LETTER G WITH BREVE
  \\___/ @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
0x0120  LATIN CAPITAL LETTER G WITH DOT ABOVE
   _[]_ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
        @@
0x0121  LATIN SMALL LETTER G WITH DOT ABOVE
   []   @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |___/ @@
0x0122  LATIN CAPITAL LETTER G WITH CEDILLA
   ____ @
  / ___|@
 | |  _ @
 | |_| |@
  \\____|@
   )__) @@
0x0123  LATIN SMALL LETTER G WITH CEDILLA
        @
   __ _ @
  / _\` |@
 | (_| |@
  \\__, |@
  |_))))@@
0x0124  LATIN CAPITAL LETTER H WITH CIRCUMFLEX
  _/ \\_ @
 | / \\ |@
 | |_| |@
 |  _  |@
 |_| |_|@
        @@
0x0125  LATIN SMALL LETTER H WITH CIRCUMFLEX
  _  /\\ @
 | |//\\ @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0126  LATIN CAPITAL LETTER H WITH STROKE
  _   _ @
 | |=| |@
 | |_| |@
 |  _  |@
 |_| |_|@
        @@
0x0127  LATIN SMALL LETTER H WITH STROKE
  _     @
 |=|__  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0128  LATIN CAPITAL LETTER I WITH TILDE
  /\\//@
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x0129  LATIN SMALL LETTER I WITH TILDE
    @
 /\\/@
 | |@
 | |@
 |_|@
    @@
0x012A  LATIN CAPITAL LETTER I WITH MACRON
 /___/@
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x012B  LATIN SMALL LETTER I WITH MACRON
  ____@
 /___/@
  | | @
  | | @
  |_| @
      @@
0x012C  LATIN CAPITAL LETTER I WITH BREVE
  \\__/@
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x012D  LATIN SMALL LETTER I WITH BREVE
    @
 \\_/@
 | |@
 | |@
 |_|@
    @@
0x012E  LATIN CAPITAL LETTER I WITH OGONEK
  ___ @
 |_ _|@
  | | @
  | | @
 |___|@
  (__(@@
0x012F  LATIN SMALL LETTER I WITH OGONEK
  _  @
 (_) @
 | | @
 | | @
 |_|_@
  (_(@@
0x0130  LATIN CAPITAL LETTER I WITH DOT ABOVE
  _[] @
 |_ _|@
  | | @
  | | @
 |___|@
      @@
0x0131  LATIN SMALL LETTER DOTLESS I
    @
  _ @
 | |@
 | |@
 |_|@
    @@
0x0132  LATIN CAPITAL LIGATURE IJ
  ___  _ @
 |_ _|| |@
  | | | |@
  | |_| |@
 |__|__/ @
         @@
0x0133  LATIN SMALL LIGATURE IJ
  _   _ @
 (_) (_)@
 | | | |@
 | | | |@
 |_|_/ |@
   |__/ @@
0x0134  LATIN CAPITAL LETTER J WITH CIRCUMFLEX
      /\\ @
     /_\\|@
  _  | | @
 | |_| | @
  \\___/  @
         @@
0x0135  LATIN SMALL LETTER J WITH CIRCUMFLEX
    /\\@
   /_\\@
   | |@
   | |@
  _/ |@
 |__/ @@
0x0136  LATIN CAPITAL LETTER K WITH CEDILLA
  _  _  @
 | |/ / @
 | ' /  @
 | . \\  @
 |_|\\_\\ @
    )__)@@
0x0137  LATIN SMALL LETTER K WITH CEDILLA
  _    @
 | | __@
 | |/ /@
 |   < @
 |_|\\_\\@
    )_)@@
0x0138  LATIN SMALL LETTER KRA
       @
  _ __ @
 | |/ \\@
 |   < @
 |_|\\_\\@
       @@
0x0139  LATIN CAPITAL LETTER L WITH ACUTE
  _   //@
 | | // @
 | |    @
 | |___ @
 |_____|@
        @@
0x013A  LATIN SMALL LETTER L WITH ACUTE
  //@
 | |@
 | |@
 | |@
 |_|@
    @@
0x013B  LATIN CAPITAL LETTER L WITH CEDILLA
  _     @
 | |    @
 | |    @
 | |___ @
 |_____|@
    )__)@@
0x013C  LATIN SMALL LETTER L WITH CEDILLA
  _   @
 | |  @
 | |  @
 | |  @
 |_|  @
   )_)@@
0x013D  LATIN CAPITAL LETTER L WITH CARON
  _ \\\\//@
 | | \\/ @
 | |    @
 | |___ @
 |_____|@
        @@
0x013E  LATIN SMALL LETTER L WITH CARON
  _ \\\\//@
 | | \\/ @
 | |    @
 | |    @
 |_|    @
        @@
0x013F  LATIN CAPITAL LETTER L WITH MIDDLE DOT
  _     @
 | |    @
 | | [] @
 | |___ @
 |_____|@
        @@
0x0140  LATIN SMALL LETTER L WITH MIDDLE DOT
  _    @
 | |   @
 | | []@
 | |   @
 |_|   @
       @@
0x0141  LATIN CAPITAL LETTER L WITH STROKE
  __    @
 | //   @
 |//|   @
 // |__ @
 |_____|@
        @@
0x0142  LATIN SMALL LETTER L WITH STROKE
  _ @
 | |@
 |//@
 //|@
 |_|@
    @@
0x0143  LATIN CAPITAL LETTER N WITH ACUTE
  _/ /_ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
        @@
0x0144  LATIN SMALL LETTER N WITH ACUTE
     _  @
  _ /_/ @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0145  LATIN CAPITAL LETTER N WITH CEDILLA
  _   _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
 )_)    @@
0x0146  LATIN SMALL LETTER N WITH CEDILLA
        @
  _ __  @
 | '_ \\ @
 | | | |@
 |_| |_|@
 )_)    @@
0x0147  LATIN CAPITAL LETTER N WITH CARON
  _\\/ _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\_|@
        @@
0x0148  LATIN SMALL LETTER N WITH CARON
  \\\\//  @
  _\\/_  @
 | '_ \\ @
 | | | |@
 |_| |_|@
        @@
0x0149  LATIN SMALL LETTER N PRECEDED BY APOSTROPHE
          @
  _  __   @
 ( )| '_\\ @
 |/| | | |@
   |_| |_|@
          @@
0x014A  LATIN CAPITAL LETTER ENG
  _   _ @
 | \\ | |@
 |  \\| |@
 | |\\  |@
 |_| \\ |@
     )_)@@
0x014B  LATIN SMALL LETTER ENG
  _ __  @
 | '_ \\ @
 | | | |@
 |_| | |@
     | |@
    |__ @@
0x014C  LATIN CAPITAL LETTER O WITH MACRON
   ____ @
  /_ _/ @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
0x014D  LATIN SMALL LETTER O WITH MACRON
   ____ @
  /_ _/ @
  / _ \\ @
 | (_) |@
  \\___/ @
        @@
0x014E  LATIN CAPITAL LETTER O WITH BREVE
  \\   / @
   _-_  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x014F  LATIN SMALL LETTER O WITH BREVE
  \\   / @
   _-_  @
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x0150  LATIN CAPITAL LETTER O WITH DOUBLE ACUTE
    ___ @
   /_/_/@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x0151  LATIN SMALL LETTER O WITH DOUBLE ACUTE
    ___ @
   /_/_/@
  / _ \\ @
 | |_| |@
  \\___/ @
        @@
0x0152  LATIN CAPITAL LIGATURE OE
   ___  ___ @
  / _ \\| __|@
 | | | |  | @
 | |_| | |__@
  \\___/|____@
            @@
0x0153  LATIN SMALL LIGATURE OE
             @
   ___   ___ @
  / _ \\ / _ \\@
 | (_) |  __/@
  \\___/ \\___|@
             @@
0x0154  LATIN CAPITAL LETTER R WITH ACUTE
  _/_/  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
        @@
0x0155  LATIN SMALL LETTER R WITH ACUTE
     __@
  _ /_/@
 | '__|@
 | |   @
 |_|   @
       @@
0x0156  LATIN CAPITAL LETTER R WITH CEDILLA
  ____  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
 )_)    @@
0x0157  LATIN SMALL LETTER R WITH CEDILLA
       @
  _ __ @
 | '__|@
 | |   @
 |_|   @
   )_) @@
0x0158  LATIN CAPITAL LETTER R WITH CARON
  _\\_/  @
 |  _ \\ @
 | |_) |@
 |  _ < @
 |_| \\_\\@
        @@
0x0159  LATIN SMALL LETTER R WITH CARON
  \\\\// @
  _\\/_ @
 | '__|@
 | |   @
 |_|   @
       @@
0x015A  LATIN CAPITAL LETTER S WITH ACUTE
  _/_/  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
0x015B  LATIN SMALL LETTER S WITH ACUTE
    __@
  _/_/@
 / __|@
 \\__ \\@
 |___/@
      @@
0x015C  LATIN CAPITAL LETTER S WITH CIRCUMFLEX
  _/\\_  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
0x015D  LATIN SMALL LETTER S WITH CIRCUMFLEX
      @
  /_\\_@
 / __|@
 \\__ \\@
 |___/@
      @@
0x015E  LATIN CAPITAL LETTER S WITH CEDILLA
  ____  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
    )__)@@
0x015F  LATIN SMALL LETTER S WITH CEDILLA
      @
  ___ @
 / __|@
 \\__ \\@
 |___/@
   )_)@@
0x0160  LATIN CAPITAL LETTER S WITH CARON
  _\\_/  @
 / ___| @
 \\___ \\ @
  ___) |@
 |____/ @
        @@
0x0161  LATIN SMALL LETTER S WITH CARON
  \\\\//@
  _\\/ @
 / __|@
 \\__ \\@
 |___/@
      @@
0x0162  LATIN CAPITAL LETTER T WITH CEDILLA
  _____ @
 |_   _|@
   | |  @
   | |  @
   |_|  @
    )__)@@
0x0163  LATIN SMALL LETTER T WITH CEDILLA
  _   @
 | |_ @
 | __|@
 | |_ @
  \\__|@
   )_)@@
0x0164  LATIN CAPITAL LETTER T WITH CARON
  _____ @
 |_   _|@
   | |  @
   | |  @
   |_|  @
        @@
0x0165  LATIN SMALL LETTER T WITH CARON
  \\/  @
 | |_ @
 | __|@
 | |_ @
  \\__|@
      @@
0x0166  LATIN CAPITAL LETTER T WITH STROKE
  _____ @
 |_   _|@
   | |  @
  -|-|- @
   |_|  @
        @@
0x0167  LATIN SMALL LETTER T WITH STROKE
  _   @
 | |_ @
 | __|@
 |-|_ @
  \\__|@
      @@
0x0168  LATIN CAPITAL LETTER U WITH TILDE
        @
  _/\\/_ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x0169  LATIN SMALL LETTER U WITH TILDE
        @
  _/\\/_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x016A  LATIN CAPITAL LETTER U WITH MACRON
   ____ @
  /__ _/@
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x016B  LATIN SMALL LETTER U WITH MACRON
   ____ @
  / _  /@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x016C  LATIN CAPITAL LETTER U WITH BREVE
        @
   \\_/_ @
 | | | |@
 | |_| |@
  \\____|@
        @@
0x016D  LATIN SMALL LETTER U WITH BREVE
        @
   \\_/_ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x016E  LATIN CAPITAL LETTER U WITH RING ABOVE
    O   @
  __  _ @
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x016F  LATIN SMALL LETTER U WITH RING ABOVE
    O   @
  __ __ @
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x0170  LATIN CAPITAL LETTER U WITH DOUBLE ACUTE
   -- --@
  /_//_/@
 | | | |@
 | |_| |@
  \\___/ @
        @@
0x0171  LATIN SMALL LETTER U WITH DOUBLE ACUTE
    ____@
  _/_/_/@
 | | | |@
 | |_| |@
  \\__,_|@
        @@
0x0172  LATIN CAPITAL LETTER U WITH OGONEK
  _   _ @
 | | | |@
 | | | |@
 | |_| |@
  \\___/ @
    (__(@@
0x0173  LATIN SMALL LETTER U WITH OGONEK
        @
  _   _ @
 | | | |@
 | |_| |@
  \\__,_|@
     (_(@@
0x0174  LATIN CAPITAL LETTER W WITH CIRCUMFLEX
 __    /\\  __@
 \\ \\  //\\\\/ /@
  \\ \\ /\\ / / @
   \\ V  V /  @
    \\_/\\_/   @
             @@
0x0175  LATIN SMALL LETTER W WITH CIRCUMFLEX
      /\\   @
 __  //\\\\__@
 \\ \\ /\\ / /@
  \\ V  V / @
   \\_/\\_/  @
           @@
0x0176  LATIN CAPITAL LETTER Y WITH CIRCUMFLEX
    /\\  @
 __//\\\\ @
 \\ \\ / /@
  \\ V / @
   |_|  @
        @@
0x0177  LATIN SMALL LETTER Y WITH CIRCUMFLEX
    /\\  @
   //\\\\ @
 | | | |@
 | |_| |@
  \\__, |@
  |___/ @@
0x0178  LATIN CAPITAL LETTER Y WITH DIAERESIS
  []  []@
 __    _@
 \\ \\ / /@
  \\ V / @
   |_|  @
        @@
0x0179  LATIN CAPITAL LETTER Z WITH ACUTE
  __/_/@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
0x017A  LATIN SMALL LETTER Z WITH ACUTE
    _ @
  _/_/@
 |_  /@
  / / @
 /___|@
      @@
0x017B  LATIN CAPITAL LETTER Z WITH DOT ABOVE
  __[]_@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
0x017C  LATIN SMALL LETTER Z WITH DOT ABOVE
   [] @
  ____@
 |_  /@
  / / @
 /___|@
      @@
0x017D  LATIN CAPITAL LETTER Z WITH CARON
  _\\_/_@
 |__  /@
   / / @
  / /_ @
 /____|@
       @@
0x017E  LATIN SMALL LETTER Z WITH CARON
  \\\\//@
  _\\/_@
 |_  /@
  / / @
 /___|@
      @@
0x017F  LATIN SMALL LETTER LONG S
     __ @
    / _|@
 |-| |  @
 |-| |  @
   |_|  @
        @@
0x02C7  CARON
 \\\\//@
  \\/ @
    $@
    $@
    $@
    $@@
0x02D8  BREVE
 \\\\_//@
  \\_/ @
     $@
     $@
     $@
     $@@
0x02D9  DOT ABOVE
 []@
  $@
  $@
  $@
  $@
  $@@
0x02DB  OGONEK
    $@
    $@
    $@
    $@
    $@
 )_) @@
0x02DD  DOUBLE ACUTE ACCENT
  _ _ @
 /_/_/@
     $@
     $@
     $@
     $@@
0xCA0  KANNADA LETTER TTHA
   _____)@
  /_ ___/@
  / _ \\  @
 | (_) | @
 $\\___/$ @
         @@
         `;var e_=w(C_());var S_=(l=0)=>L=>`\x1B[${L+l}m`,g_=(l=0)=>L=>`\x1B[${38+l};5;${L}m`,O_=(l=0)=>(L,A,E)=>`\x1B[${38+l};2;${L};${A};${E}m`,C={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],overline:[53,55],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],blackBright:[90,39],gray:[90,39],grey:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgGray:[100,49],bgGrey:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}},Re=Object.keys(C.modifier),z_=Object.keys(C.color),Q_=Object.keys(C.bgColor),fe=[...z_,...Q_];function _e(){let l=new Map;for(let[L,A]of Object.entries(C)){for(let[E,o]of Object.entries(A))C[E]={open:`\x1B[${o[0]}m`,close:`\x1B[${o[1]}m`},A[E]=C[E],l.set(o[0],o[1]);Object.defineProperty(C,L,{value:A,enumerable:!1})}return Object.defineProperty(C,"codes",{value:l,enumerable:!1}),C.color.close="\x1B[39m",C.bgColor.close="\x1B[49m",C.color.ansi=S_(),C.color.ansi256=g_(),C.color.ansi16m=O_(),C.bgColor.ansi=S_(10),C.bgColor.ansi256=g_(10),C.bgColor.ansi16m=O_(10),Object.defineProperties(C,{rgbToAnsi256:{value(L,A,E){return L===A&&A===E?L<8?16:L>248?231:Math.round((L-8)/247*24)+232:16+36*Math.round(L/255*5)+6*Math.round(A/255*5)+Math.round(E/255*5)},enumerable:!1},hexToRgb:{value(L){let A=/[a-f\d]{6}|[a-f\d]{3}/i.exec(L.toString(16));if(!A)return[0,0,0];let[E]=A;E.length===3&&(E=[...E].map(R=>R+R).join(""));let o=Number.parseInt(E,16);return[o>>16&255,o>>8&255,o&255]},enumerable:!1},hexToAnsi256:{value:L=>C.rgbToAnsi256(...C.hexToRgb(L)),enumerable:!1},ansi256ToAnsi:{value(L){if(L<8)return 30+L;if(L<16)return 90+(L-8);let A,E,o;if(L>=232)A=((L-232)*10+8)/255,E=A,o=A;else{L-=16;let F=L%36;A=Math.floor(L/36)/5,E=Math.floor(F/6)/5,o=F%6/5}let R=Math.max(A,E,o)*2;if(R===0)return 30;let O=30+(Math.round(o)<<2|Math.round(E)<<1|Math.round(A));return R===2&&(O+=60),O},enumerable:!1},rgbToAnsi:{value:(L,A,E)=>C.ansi256ToAnsi(C.rgbToAnsi256(L,A,E)),enumerable:!1},hexToAnsi:{value:L=>C.ansi256ToAnsi(C.hexToAnsi256(L)),enumerable:!1}}),C}var ee=_e(),m=ee;var X=w(require("node:process"),1),M_=w(require("node:os"),1),q=w(require("node:tty"),1);function W(l,L=globalThis.Deno?globalThis.Deno.args:X.default.argv){let A=l.startsWith("-")?"":l.length===1?"-":"--",E=L.indexOf(A+l),o=L.indexOf("--");return E!==-1&&(o===-1||E<o)}var{env:S}=X.default,K;W("no-color")||W("no-colors")||W("color=false")||W("color=never")?K=0:(W("color")||W("colors")||W("color=true")||W("color=always"))&&(K=1);function Te(){if("FORCE_COLOR"in S)return S.FORCE_COLOR==="true"?1:S.FORCE_COLOR==="false"?0:S.FORCE_COLOR.length===0?1:Math.min(Number.parseInt(S.FORCE_COLOR,10),3)}function te(l){return l===0?!1:{level:l,hasBasic:!0,has256:l>=2,has16m:l>=3}}function re(l,{streamIsTTY:L,sniffFlags:A=!0}={}){let E=Te();E!==void 0&&(K=E);let o=A?K:E;if(o===0)return 0;if(A){if(W("color=16m")||W("color=full")||W("color=truecolor"))return 3;if(W("color=256"))return 2}if("TF_BUILD"in S&&"AGENT_NAME"in S)return 1;if(l&&!L&&o===void 0)return 0;let R=o||0;if(S.TERM==="dumb")return R;if(X.default.platform==="win32"){let O=M_.default.release().split(".");return Number(O[0])>=10&&Number(O[2])>=10586?Number(O[2])>=14931?3:2:1}if("CI"in S)return"GITHUB_ACTIONS"in S||"GITEA_ACTIONS"in S?3:["TRAVIS","CIRCLECI","APPVEYOR","GITLAB_CI","BUILDKITE","DRONE"].some(O=>O in S)||S.CI_NAME==="codeship"?1:R;if("TEAMCITY_VERSION"in S)return/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(S.TEAMCITY_VERSION)?1:0;if(S.COLORTERM==="truecolor"||S.TERM==="xterm-kitty")return 3;if("TERM_PROGRAM"in S){let O=Number.parseInt((S.TERM_PROGRAM_VERSION||"").split(".")[0],10);switch(S.TERM_PROGRAM){case"iTerm.app":return O>=3?3:2;case"Apple_Terminal":return 2}}return/-256(color)?$/i.test(S.TERM)?2:/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(S.TERM)||"COLORTERM"in S?1:R}function d_(l,L={}){let A=re(l,{streamIsTTY:l&&l.isTTY,...L});return te(A)}var Le={stdout:d_({isTTY:q.default.isatty(1)}),stderr:d_({isTTY:q.default.isatty(2)})},H_=Le;function W_(l,L,A){let E=l.indexOf(L);if(E===-1)return l;let o=L.length,R=0,O="";do O+=l.slice(R,E)+L+A,R=E+o,E=l.indexOf(L,R);while(E!==-1);return O+=l.slice(R),O}function x_(l,L,A,E){let o=0,R="";do{let O=l[E-1]==="\r";R+=l.slice(o,O?E-1:E)+L+(O?`\r
`:`
`)+A,o=E+1,E=l.indexOf(`
`,o)}while(E!==-1);return R+=l.slice(o),R}var{stdout:m_,stderr:v_}=H_,z=Symbol("GENERATOR"),U=Symbol("STYLER"),B=Symbol("IS_EMPTY"),b_=["ansi","ansi","ansi256","ansi16m"],D=Object.create(null),ne=(l,L={})=>{if(L.level&&!(Number.isInteger(L.level)&&L.level>=0&&L.level<=3))throw new Error("The `level` option should be an integer from 0 to 3");let A=m_?m_.level:0;l.level=L.level===void 0?A:L.level};var le=l=>{let L=(...A)=>A.join(" ");return ne(L,l),Object.setPrototypeOf(L,G.prototype),L};function G(l){return le(l)}Object.setPrototypeOf(G.prototype,Function.prototype);for(let[l,L]of Object.entries(m))D[l]={get(){let A=Y(this,__(L.open,L.close,this[U]),this[B]);return Object.defineProperty(this,l,{value:A}),A}};D.visible={get(){let l=Y(this,this[U],!0);return Object.defineProperty(this,"visible",{value:l}),l}};var Q=(l,L,A,...E)=>l==="rgb"?L==="ansi16m"?m[A].ansi16m(...E):L==="ansi256"?m[A].ansi256(m.rgbToAnsi256(...E)):m[A].ansi(m.rgbToAnsi(...E)):l==="hex"?Q("rgb",L,A,...m.hexToRgb(...E)):m[A][l](...E),ie=["rgb","hex","ansi256"];for(let l of ie){D[l]={get(){let{level:A}=this;return function(...E){let o=__(Q(l,b_[A],"color",...E),m.color.close,this[U]);return Y(this,o,this[B])}}};let L="bg"+l[0].toUpperCase()+l.slice(1);D[L]={get(){let{level:A}=this;return function(...E){let o=__(Q(l,b_[A],"bgColor",...E),m.bgColor.close,this[U]);return Y(this,o,this[B])}}}}var Ie=Object.defineProperties(()=>{},{...D,level:{enumerable:!0,get(){return this[z].level},set(l){this[z].level=l}}}),__=(l,L,A)=>{let E,o;return A===void 0?(E=l,o=L):(E=A.openAll+l,o=L+A.closeAll),{open:l,close:L,openAll:E,closeAll:o,parent:A}},Y=(l,L,A)=>{let E=(...o)=>Ae(E,o.length===1?""+o[0]:o.join(" "));return Object.setPrototypeOf(E,Ie),E[z]=l,E[U]=L,E[B]=A,E},Ae=(l,L)=>{if(l.level<=0||!L)return l[B]?"":L;let A=l[U];if(A===void 0)return L;let{openAll:E,closeAll:o}=A;if(L.includes("\x1B"))for(;A!==void 0;)L=W_(L,A.close,A.open),A=A.parent;let R=L.indexOf(`
`);return R!==-1&&(L=x_(L,o,E,R)),E+L+o};Object.defineProperties(G.prototype,D);var Ee=G(),Oe=G({level:v_?v_.level:0});var P_=Ee;function U_(){e_.default.parseFont("Standard",N_),(0,e_.default)("FSD CLI",(l,L)=>l?console.error(l):console.log(P_.blue(L)))}U_();
