#!/usr/bin/env node
"use strict";var Ki=Object.create;var qe=Object.defineProperty;var Yi=Object.getOwnPropertyDescriptor;var Xi=Object.getOwnPropertyNames;var Zi=Object.getPrototypeOf,Ji=Object.prototype.hasOwnProperty;var Qi=(D,u)=>()=>(D&&(u=D(D=0)),u);var Y=(D,u)=>()=>(u||D((u={exports:{}}).exports,u),u.exports),us=(D,u)=>{for(var t in u)qe(D,t,{get:u[t],enumerable:!0})},$D=(D,u,t,e)=>{if(u&&typeof u=="object"||typeof u=="function")for(let r of Xi(u))!Ji.call(D,r)&&r!==t&&qe(D,r,{get:()=>u[r],enumerable:!(e=Yi(u,r))||e.enumerable});return D};var au=(D,u,t)=>(t=D!=null?Ki(Zi(D)):{},$D(u||!D||!D.__esModule?qe(t,"default",{value:D,enumerable:!0}):t,D)),wu=D=>$D(qe({},"__esModule",{value:!0}),D);var bu={};us(bu,{__addDisposableResource:()=>or,__assign:()=>Ve,__asyncDelegator:()=>ur,__asyncGenerator:()=>QD,__asyncValues:()=>er,__await:()=>ce,__awaiter:()=>zD,__classPrivateFieldGet:()=>nr,__classPrivateFieldIn:()=>sr,__classPrivateFieldSet:()=>ir,__createBinding:()=>Ke,__decorate:()=>GD,__disposeResources:()=>ar,__esDecorate:()=>es,__exportStar:()=>YD,__extends:()=>HD,__generator:()=>KD,__importDefault:()=>rr,__importStar:()=>Dr,__makeTemplateObject:()=>tr,__metadata:()=>VD,__param:()=>qD,__propKey:()=>Ds,__read:()=>Ot,__rest:()=>UD,__runInitializers:()=>ts,__setFunctionName:()=>rs,__spread:()=>XD,__spreadArray:()=>JD,__spreadArrays:()=>ZD,__values:()=>ze,default:()=>ss});function HD(D,u){if(typeof u!="function"&&u!==null)throw new TypeError("Class extends value "+String(u)+" is not a constructor or null");vt(D,u);function t(){this.constructor=D}D.prototype=u===null?Object.create(u):(t.prototype=u.prototype,new t)}function UD(D,u){var t={};for(var e in D)Object.prototype.hasOwnProperty.call(D,e)&&u.indexOf(e)<0&&(t[e]=D[e]);if(D!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(D);r<e.length;r++)u.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(D,e[r])&&(t[e[r]]=D[e[r]]);return t}function GD(D,u,t,e){var r=arguments.length,n=r<3?u:e===null?e=Object.getOwnPropertyDescriptor(u,t):e,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(D,u,t,e);else for(var s=D.length-1;s>=0;s--)(i=D[s])&&(n=(r<3?i(n):r>3?i(u,t,n):i(u,t))||n);return r>3&&n&&Object.defineProperty(u,t,n),n}function qD(D,u){return function(t,e){u(t,e,D)}}function es(D,u,t,e,r,n){function i(G){if(G!==void 0&&typeof G!="function")throw new TypeError("Function expected");return G}for(var s=e.kind,F=s==="getter"?"get":s==="setter"?"set":"value",c=!u&&D?e.static?D:D.prototype:null,E=u||(c?Object.getOwnPropertyDescriptor(c,e.name):{}),B,L=!1,U=t.length-1;U>=0;U--){var b={};for(var m in e)b[m]=m==="access"?{}:e[m];for(var m in e.access)b.access[m]=e.access[m];b.addInitializer=function(G){if(L)throw new TypeError("Cannot add initializers after decoration has completed");n.push(i(G||null))};var h=(0,t[U])(s==="accessor"?{get:E.get,set:E.set}:E[F],b);if(s==="accessor"){if(h===void 0)continue;if(h===null||typeof h!="object")throw new TypeError("Object expected");(B=i(h.get))&&(E.get=B),(B=i(h.set))&&(E.set=B),(B=i(h.init))&&r.unshift(B)}else(B=i(h))&&(s==="field"?r.unshift(B):E[F]=B)}c&&Object.defineProperty(c,e.name,E),L=!0}function ts(D,u,t){for(var e=arguments.length>2,r=0;r<u.length;r++)t=e?u[r].call(D,t):u[r].call(D);return e?t:void 0}function Ds(D){return typeof D=="symbol"?D:"".concat(D)}function rs(D,u,t){return typeof u=="symbol"&&(u=u.description?"[".concat(u.description,"]"):""),Object.defineProperty(D,"name",{configurable:!0,value:t?"".concat(t," ",u):u})}function VD(D,u){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(D,u)}function zD(D,u,t,e){function r(n){return n instanceof t?n:new t(function(i){i(n)})}return new(t||(t=Promise))(function(n,i){function s(E){try{c(e.next(E))}catch(B){i(B)}}function F(E){try{c(e.throw(E))}catch(B){i(B)}}function c(E){E.done?n(E.value):r(E.value).then(s,F)}c((e=e.apply(D,u||[])).next())})}function KD(D,u){var t={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},e,r,n,i;return i={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function s(c){return function(E){return F([c,E])}}function F(c){if(e)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(t=0)),t;)try{if(e=1,r&&(n=c[0]&2?r.return:c[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,c[1])).done)return n;switch(r=0,n&&(c=[c[0]&2,n.value]),c[0]){case 0:case 1:n=c;break;case 4:return t.label++,{value:c[1],done:!1};case 5:t.label++,r=c[1],c=[0];continue;case 7:c=t.ops.pop(),t.trys.pop();continue;default:if(n=t.trys,!(n=n.length>0&&n[n.length-1])&&(c[0]===6||c[0]===2)){t=0;continue}if(c[0]===3&&(!n||c[1]>n[0]&&c[1]<n[3])){t.label=c[1];break}if(c[0]===6&&t.label<n[1]){t.label=n[1],n=c;break}if(n&&t.label<n[2]){t.label=n[2],t.ops.push(c);break}n[2]&&t.ops.pop(),t.trys.pop();continue}c=u.call(D,t)}catch(E){c=[6,E],r=0}finally{e=n=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function YD(D,u){for(var t in D)t!=="default"&&!Object.prototype.hasOwnProperty.call(u,t)&&Ke(u,D,t)}function ze(D){var u=typeof Symbol=="function"&&Symbol.iterator,t=u&&D[u],e=0;if(t)return t.call(D);if(D&&typeof D.length=="number")return{next:function(){return D&&e>=D.length&&(D=void 0),{value:D&&D[e++],done:!D}}};throw new TypeError(u?"Object is not iterable.":"Symbol.iterator is not defined.")}function Ot(D,u){var t=typeof Symbol=="function"&&D[Symbol.iterator];if(!t)return D;var e=t.call(D),r,n=[],i;try{for(;(u===void 0||u-- >0)&&!(r=e.next()).done;)n.push(r.value)}catch(s){i={error:s}}finally{try{r&&!r.done&&(t=e.return)&&t.call(e)}finally{if(i)throw i.error}}return n}function XD(){for(var D=[],u=0;u<arguments.length;u++)D=D.concat(Ot(arguments[u]));return D}function ZD(){for(var D=0,u=0,t=arguments.length;u<t;u++)D+=arguments[u].length;for(var e=Array(D),r=0,u=0;u<t;u++)for(var n=arguments[u],i=0,s=n.length;i<s;i++,r++)e[r]=n[i];return e}function JD(D,u,t){if(t||arguments.length===2)for(var e=0,r=u.length,n;e<r;e++)(n||!(e in u))&&(n||(n=Array.prototype.slice.call(u,0,e)),n[e]=u[e]);return D.concat(n||Array.prototype.slice.call(u))}function ce(D){return this instanceof ce?(this.v=D,this):new ce(D)}function QD(D,u,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t.apply(D,u||[]),r,n=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(L){e[L]&&(r[L]=function(U){return new Promise(function(b,m){n.push([L,U,b,m])>1||s(L,U)})})}function s(L,U){try{F(e[L](U))}catch(b){B(n[0][3],b)}}function F(L){L.value instanceof ce?Promise.resolve(L.value.v).then(c,E):B(n[0][2],L)}function c(L){s("next",L)}function E(L){s("throw",L)}function B(L,U){L(U),n.shift(),n.length&&s(n[0][0],n[0][1])}}function ur(D){var u,t;return u={},e("next"),e("throw",function(r){throw r}),e("return"),u[Symbol.iterator]=function(){return this},u;function e(r,n){u[r]=D[r]?function(i){return(t=!t)?{value:ce(D[r](i)),done:!1}:n?n(i):i}:n}}function er(D){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var u=D[Symbol.asyncIterator],t;return u?u.call(D):(D=typeof ze=="function"?ze(D):D[Symbol.iterator](),t={},e("next"),e("throw"),e("return"),t[Symbol.asyncIterator]=function(){return this},t);function e(n){t[n]=D[n]&&function(i){return new Promise(function(s,F){i=D[n](i),r(s,F,i.done,i.value)})}}function r(n,i,s,F){Promise.resolve(F).then(function(c){n({value:c,done:s})},i)}}function tr(D,u){return Object.defineProperty?Object.defineProperty(D,"raw",{value:u}):D.raw=u,D}function Dr(D){if(D&&D.__esModule)return D;var u={};if(D!=null)for(var t in D)t!=="default"&&Object.prototype.hasOwnProperty.call(D,t)&&Ke(u,D,t);return ns(u,D),u}function rr(D){return D&&D.__esModule?D:{default:D}}function nr(D,u,t,e){if(t==="a"&&!e)throw new TypeError("Private accessor was defined without a getter");if(typeof u=="function"?D!==u||!e:!u.has(D))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?e:t==="a"?e.call(D):e?e.value:u.get(D)}function ir(D,u,t,e,r){if(e==="m")throw new TypeError("Private method is not writable");if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof u=="function"?D!==u||!r:!u.has(D))throw new TypeError("Cannot write private member to an object whose class did not declare it");return e==="a"?r.call(D,t):r?r.value=t:u.set(D,t),t}function sr(D,u){if(u===null||typeof u!="object"&&typeof u!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof D=="function"?u===D:D.has(u)}function or(D,u,t){if(u!=null){if(typeof u!="object")throw new TypeError("Object expected.");var e;if(t){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");e=u[Symbol.asyncDispose]}if(e===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");e=u[Symbol.dispose]}if(typeof e!="function")throw new TypeError("Object not disposable.");D.stack.push({value:u,dispose:e,async:t})}else t&&D.stack.push({async:!0});return u}function ar(D){function u(e){D.error=D.hasError?new is(e,D.error,"An error was suppressed during disposal."):e,D.hasError=!0}function t(){for(;D.stack.length;){var e=D.stack.pop();try{var r=e.dispose&&e.dispose.call(e.value);if(e.async)return Promise.resolve(r).then(t,function(n){return u(n),t()})}catch(n){u(n)}}if(D.hasError)throw D.error}return t()}var vt,Ve,Ke,ns,is,ss,Lu=Qi(()=>{vt=function(D,u){return vt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},vt(D,u)};Ve=function(){return Ve=Object.assign||function(u){for(var t,e=1,r=arguments.length;e<r;e++){t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(u[n]=t[n])}return u},Ve.apply(this,arguments)};Ke=Object.create?function(D,u,t,e){e===void 0&&(e=t);var r=Object.getOwnPropertyDescriptor(u,t);(!r||("get"in r?!u.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return u[t]}}),Object.defineProperty(D,e,r)}:function(D,u,t,e){e===void 0&&(e=t),D[e]=u[t]};ns=Object.create?function(D,u){Object.defineProperty(D,"default",{enumerable:!0,value:u})}:function(D,u){D.default=u};is=typeof SuppressedError=="function"?SuppressedError:function(D,u,t){var e=new Error(t);return e.name="SuppressedError",e.error=D,e.suppressed=u,e};ss={__extends:HD,__assign:Ve,__rest:UD,__decorate:GD,__param:qD,__metadata:VD,__awaiter:zD,__generator:KD,__createBinding:Ke,__exportStar:YD,__values:ze,__read:Ot,__spread:XD,__spreadArrays:ZD,__spreadArray:JD,__await:ce,__asyncGenerator:QD,__asyncDelegator:ur,__asyncValues:er,__makeTemplateObject:tr,__importStar:Dr,__importDefault:rr,__classPrivateFieldGet:nr,__classPrivateFieldSet:ir,__classPrivateFieldIn:sr,__addDisposableResource:or,__disposeResources:ar}});var lr=Y(fe=>{"use strict";Object.defineProperty(fe,"__esModule",{value:!0});fe.lowerCase=fe.localeLowerCase=void 0;var os={tr:{regexp:/\u0130|\u0049|\u0049\u0307/g,map:{\u0130:"i",I:"\u0131",I\u0307:"i"}},az:{regexp:/\u0130/g,map:{\u0130:"i",I:"\u0131",I\u0307:"i"}},lt:{regexp:/\u0049|\u004A|\u012E|\u00CC|\u00CD|\u0128/g,map:{I:"i\u0307",J:"j\u0307",\u012E:"\u012F\u0307",\u00CC:"i\u0307\u0300",\u00CD:"i\u0307\u0301",\u0128:"i\u0307\u0303"}}};function as(D,u){var t=os[u.toLowerCase()];return wt(t?D.replace(t.regexp,function(e){return t.map[e]}):D)}fe.localeLowerCase=as;function wt(D){return D.toLowerCase()}fe.lowerCase=wt});var Ju=Y(Ye=>{"use strict";Object.defineProperty(Ye,"__esModule",{value:!0});Ye.noCase=void 0;var ls=lr(),cs=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],fs=/[^A-Z0-9]+/gi;function _s(D,u){u===void 0&&(u={});for(var t=u.splitRegexp,e=t===void 0?cs:t,r=u.stripRegexp,n=r===void 0?fs:r,i=u.transform,s=i===void 0?ls.lowerCase:i,F=u.delimiter,c=F===void 0?" ":F,E=cr(cr(D,e,"$1\0$2"),n,"\0"),B=0,L=E.length;E.charAt(B)==="\0";)B++;for(;E.charAt(L-1)==="\0";)L--;return E.slice(B,L).split("\0").map(s).join(c)}Ye.noCase=_s;function cr(D,u,t){return u instanceof RegExp?D.replace(u,t):u.reduce(function(e,r){return e.replace(r,t)},D)}});var St=Y(Vu=>{"use strict";Object.defineProperty(Vu,"__esModule",{value:!0});Vu.pascalCase=Vu.pascalCaseTransformMerge=Vu.pascalCaseTransform=void 0;var hs=(Lu(),wu(bu)),Fs=Ju();function fr(D,u){var t=D.charAt(0),e=D.substr(1).toLowerCase();return u>0&&t>="0"&&t<="9"?"_"+t+e:""+t.toUpperCase()+e}Vu.pascalCaseTransform=fr;function Cs(D){return D.charAt(0).toUpperCase()+D.slice(1).toLowerCase()}Vu.pascalCaseTransformMerge=Cs;function Es(D,u){return u===void 0&&(u={}),Fs.noCase(D,hs.__assign({delimiter:"",transform:fr},u))}Vu.pascalCase=Es});var hr=Y(zu=>{"use strict";Object.defineProperty(zu,"__esModule",{value:!0});zu.camelCase=zu.camelCaseTransformMerge=zu.camelCaseTransform=void 0;var ds=(Lu(),wu(bu)),Nt=St();function _r(D,u){return u===0?D.toLowerCase():Nt.pascalCaseTransform(D,u)}zu.camelCaseTransform=_r;function gs(D,u){return u===0?D.toLowerCase():Nt.pascalCaseTransformMerge(D)}zu.camelCaseTransformMerge=gs;function ps(D,u){return u===void 0&&(u={}),Nt.pascalCase(D,ds.__assign({transform:_r},u))}zu.camelCase=ps});var Mt=Y(Xe=>{"use strict";Object.defineProperty(Xe,"__esModule",{value:!0});Xe.upperCaseFirst=void 0;function ms(D){return D.charAt(0).toUpperCase()+D.substr(1)}Xe.upperCaseFirst=ms});var jt=Y(_e=>{"use strict";Object.defineProperty(_e,"__esModule",{value:!0});_e.capitalCase=_e.capitalCaseTransform=void 0;var As=(Lu(),wu(bu)),Ts=Ju(),Bs=Mt();function Fr(D){return Bs.upperCaseFirst(D.toLowerCase())}_e.capitalCaseTransform=Fr;function bs(D,u){return u===void 0&&(u={}),Ts.noCase(D,As.__assign({delimiter:" ",transform:Fr},u))}_e.capitalCase=bs});var Cr=Y(he=>{"use strict";Object.defineProperty(he,"__esModule",{value:!0});he.upperCase=he.localeUpperCase=void 0;var Ls={tr:{regexp:/[\u0069]/g,map:{i:"\u0130"}},az:{regexp:/[\u0069]/g,map:{i:"\u0130"}},lt:{regexp:/[\u0069\u006A\u012F]\u0307|\u0069\u0307[\u0300\u0301\u0303]/g,map:{i\u0307:"I",j\u0307:"J",\u012F\u0307:"\u012E",i\u0307\u0300:"\xCC",i\u0307\u0301:"\xCD",i\u0307\u0303:"\u0128"}}};function xs(D,u){var t=Ls[u.toLowerCase()];return Pt(t?D.replace(t.regexp,function(e){return t.map[e]}):D)}he.localeUpperCase=xs;function Pt(D){return D.toUpperCase()}he.upperCase=Pt});var Er=Y(Ze=>{"use strict";Object.defineProperty(Ze,"__esModule",{value:!0});Ze.constantCase=void 0;var ys=(Lu(),wu(bu)),Is=Ju(),Rs=Cr();function vs(D,u){return u===void 0&&(u={}),Is.noCase(D,ys.__assign({delimiter:"_",transform:Rs.upperCase},u))}Ze.constantCase=vs});var Re=Y(Je=>{"use strict";Object.defineProperty(Je,"__esModule",{value:!0});Je.dotCase=void 0;var Os=(Lu(),wu(bu)),ws=Ju();function Ss(D,u){return u===void 0&&(u={}),ws.noCase(D,Os.__assign({delimiter:"."},u))}Je.dotCase=Ss});var dr=Y(Qe=>{"use strict";Object.defineProperty(Qe,"__esModule",{value:!0});Qe.headerCase=void 0;var Ns=(Lu(),wu(bu)),Ms=jt();function js(D,u){return u===void 0&&(u={}),Ms.capitalCase(D,Ns.__assign({delimiter:"-"},u))}Qe.headerCase=js});var gr=Y(ut=>{"use strict";Object.defineProperty(ut,"__esModule",{value:!0});ut.paramCase=void 0;var Ps=(Lu(),wu(bu)),Ws=Re();function $s(D,u){return u===void 0&&(u={}),Ws.dotCase(D,Ps.__assign({delimiter:"-"},u))}ut.paramCase=$s});var pr=Y(et=>{"use strict";Object.defineProperty(et,"__esModule",{value:!0});et.pathCase=void 0;var ks=(Lu(),wu(bu)),Hs=Re();function Us(D,u){return u===void 0&&(u={}),Hs.dotCase(D,ks.__assign({delimiter:"/"},u))}et.pathCase=Us});var Ar=Y(Fe=>{"use strict";Object.defineProperty(Fe,"__esModule",{value:!0});Fe.sentenceCase=Fe.sentenceCaseTransform=void 0;var Gs=(Lu(),wu(bu)),qs=Ju(),Vs=Mt();function mr(D,u){var t=D.toLowerCase();return u===0?Vs.upperCaseFirst(t):t}Fe.sentenceCaseTransform=mr;function zs(D,u){return u===void 0&&(u={}),qs.noCase(D,Gs.__assign({delimiter:" ",transform:mr},u))}Fe.sentenceCase=zs});var Tr=Y(tt=>{"use strict";Object.defineProperty(tt,"__esModule",{value:!0});tt.snakeCase=void 0;var Ks=(Lu(),wu(bu)),Ys=Re();function Xs(D,u){return u===void 0&&(u={}),Ys.dotCase(D,Ks.__assign({delimiter:"_"},u))}tt.snakeCase=Xs});var Ce=Y(gu=>{"use strict";Object.defineProperty(gu,"__esModule",{value:!0});var Su=(Lu(),wu(bu));Su.__exportStar(hr(),gu);Su.__exportStar(jt(),gu);Su.__exportStar(Er(),gu);Su.__exportStar(Re(),gu);Su.__exportStar(dr(),gu);Su.__exportStar(Ju(),gu);Su.__exportStar(gr(),gu);Su.__exportStar(St(),gu);Su.__exportStar(pr(),gu);Su.__exportStar(Ar(),gu);Su.__exportStar(Tr(),gu)});var kt=Y((xl,$t)=>{var Ku={};typeof $t>"u"?window.eastasianwidth=Ku:$t.exports=Ku;Ku.eastAsianWidth=function(D){var u=D.charCodeAt(0),t=D.length==2?D.charCodeAt(1):0,e=u;return 55296<=u&&u<=56319&&56320<=t&&t<=57343&&(u&=1023,t&=1023,e=u<<10|t,e+=65536),e==12288||65281<=e&&e<=65376||65504<=e&&e<=65510?"F":e==8361||65377<=e&&e<=65470||65474<=e&&e<=65479||65482<=e&&e<=65487||65490<=e&&e<=65495||65498<=e&&e<=65500||65512<=e&&e<=65518?"H":4352<=e&&e<=4447||4515<=e&&e<=4519||4602<=e&&e<=4607||9001<=e&&e<=9002||11904<=e&&e<=11929||11931<=e&&e<=12019||12032<=e&&e<=12245||12272<=e&&e<=12283||12289<=e&&e<=12350||12353<=e&&e<=12438||12441<=e&&e<=12543||12549<=e&&e<=12589||12593<=e&&e<=12686||12688<=e&&e<=12730||12736<=e&&e<=12771||12784<=e&&e<=12830||12832<=e&&e<=12871||12880<=e&&e<=13054||13056<=e&&e<=19903||19968<=e&&e<=42124||42128<=e&&e<=42182||43360<=e&&e<=43388||44032<=e&&e<=55203||55216<=e&&e<=55238||55243<=e&&e<=55291||63744<=e&&e<=64255||65040<=e&&e<=65049||65072<=e&&e<=65106||65108<=e&&e<=65126||65128<=e&&e<=65131||110592<=e&&e<=110593||127488<=e&&e<=127490||127504<=e&&e<=127546||127552<=e&&e<=127560||127568<=e&&e<=127569||131072<=e&&e<=194367||177984<=e&&e<=196605||196608<=e&&e<=262141?"W":32<=e&&e<=126||162<=e&&e<=163||165<=e&&e<=166||e==172||e==175||10214<=e&&e<=10221||10629<=e&&e<=10630?"Na":e==161||e==164||167<=e&&e<=168||e==170||173<=e&&e<=174||176<=e&&e<=180||182<=e&&e<=186||188<=e&&e<=191||e==198||e==208||215<=e&&e<=216||222<=e&&e<=225||e==230||232<=e&&e<=234||236<=e&&e<=237||e==240||242<=e&&e<=243||247<=e&&e<=250||e==252||e==254||e==257||e==273||e==275||e==283||294<=e&&e<=295||e==299||305<=e&&e<=307||e==312||319<=e&&e<=322||e==324||328<=e&&e<=331||e==333||338<=e&&e<=339||358<=e&&e<=359||e==363||e==462||e==464||e==466||e==468||e==470||e==472||e==474||e==476||e==593||e==609||e==708||e==711||713<=e&&e<=715||e==717||e==720||728<=e&&e<=731||e==733||e==735||768<=e&&e<=879||913<=e&&e<=929||931<=e&&e<=937||945<=e&&e<=961||963<=e&&e<=969||e==1025||1040<=e&&e<=1103||e==1105||e==8208||8211<=e&&e<=8214||8216<=e&&e<=8217||8220<=e&&e<=8221||8224<=e&&e<=8226||8228<=e&&e<=8231||e==8240||8242<=e&&e<=8243||e==8245||e==8251||e==8254||e==8308||e==8319||8321<=e&&e<=8324||e==8364||e==8451||e==8453||e==8457||e==8467||e==8470||8481<=e&&e<=8482||e==8486||e==8491||8531<=e&&e<=8532||8539<=e&&e<=8542||8544<=e&&e<=8555||8560<=e&&e<=8569||e==8585||8592<=e&&e<=8601||8632<=e&&e<=8633||e==8658||e==8660||e==8679||e==8704||8706<=e&&e<=8707||8711<=e&&e<=8712||e==8715||e==8719||e==8721||e==8725||e==8730||8733<=e&&e<=8736||e==8739||e==8741||8743<=e&&e<=8748||e==8750||8756<=e&&e<=8759||8764<=e&&e<=8765||e==8776||e==8780||e==8786||8800<=e&&e<=8801||8804<=e&&e<=8807||8810<=e&&e<=8811||8814<=e&&e<=8815||8834<=e&&e<=8835||8838<=e&&e<=8839||e==8853||e==8857||e==8869||e==8895||e==8978||9312<=e&&e<=9449||9451<=e&&e<=9547||9552<=e&&e<=9587||9600<=e&&e<=9615||9618<=e&&e<=9621||9632<=e&&e<=9633||9635<=e&&e<=9641||9650<=e&&e<=9651||9654<=e&&e<=9655||9660<=e&&e<=9661||9664<=e&&e<=9665||9670<=e&&e<=9672||e==9675||9678<=e&&e<=9681||9698<=e&&e<=9701||e==9711||9733<=e&&e<=9734||e==9737||9742<=e&&e<=9743||9748<=e&&e<=9749||e==9756||e==9758||e==9792||e==9794||9824<=e&&e<=9825||9827<=e&&e<=9829||9831<=e&&e<=9834||9836<=e&&e<=9837||e==9839||9886<=e&&e<=9887||9918<=e&&e<=9919||9924<=e&&e<=9933||9935<=e&&e<=9953||e==9955||9960<=e&&e<=9983||e==10045||e==10071||10102<=e&&e<=10111||11093<=e&&e<=11097||12872<=e&&e<=12879||57344<=e&&e<=63743||65024<=e&&e<=65039||e==65533||127232<=e&&e<=127242||127248<=e&&e<=127277||127280<=e&&e<=127337||127344<=e&&e<=127386||917760<=e&&e<=917999||983040<=e&&e<=1048573||1048576<=e&&e<=1114109?"A":"N"};Ku.characterLength=function(D){var u=this.eastAsianWidth(D);return u=="F"||u=="W"||u=="A"?2:1};function vr(D){return D.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g)||[]}Ku.length=function(D){for(var u=vr(D),t=0,e=0;e<u.length;e++)t=t+this.characterLength(u[e]);return t};Ku.slice=function(D,u,t){textLen=Ku.length(D),u=u||0,t=t||1,u<0&&(u=textLen+u),t<0&&(t=textLen+t);for(var e="",r=0,n=vr(D),i=0;i<n.length;i++){var s=n[i],F=Ku.length(s);if(r>=u-(F==2?1:0))if(r+F<=t)e+=s;else break;r+=F}return e}});var wr=Y((yl,Or)=>{"use strict";Or.exports=function(){return/\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g}});var Vr=Y((ql,qr)=>{"use strict";qr.exports=function(){return/\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g}});var zr=Y((Jl,Co)=>{Co.exports={single:{topLeft:"\u250C",top:"\u2500",topRight:"\u2510",right:"\u2502",bottomRight:"\u2518",bottom:"\u2500",bottomLeft:"\u2514",left:"\u2502"},double:{topLeft:"\u2554",top:"\u2550",topRight:"\u2557",right:"\u2551",bottomRight:"\u255D",bottom:"\u2550",bottomLeft:"\u255A",left:"\u2551"},round:{topLeft:"\u256D",top:"\u2500",topRight:"\u256E",right:"\u2502",bottomRight:"\u256F",bottom:"\u2500",bottomLeft:"\u2570",left:"\u2502"},bold:{topLeft:"\u250F",top:"\u2501",topRight:"\u2513",right:"\u2503",bottomRight:"\u251B",bottom:"\u2501",bottomLeft:"\u2517",left:"\u2503"},singleDouble:{topLeft:"\u2553",top:"\u2500",topRight:"\u2556",right:"\u2551",bottomRight:"\u255C",bottom:"\u2500",bottomLeft:"\u2559",left:"\u2551"},doubleSingle:{topLeft:"\u2552",top:"\u2550",topRight:"\u2555",right:"\u2502",bottomRight:"\u255B",bottom:"\u2550",bottomLeft:"\u2558",left:"\u2502"},classic:{topLeft:"+",top:"-",topRight:"+",right:"|",bottomRight:"+",bottom:"-",bottomLeft:"+",left:"|"},arrow:{topLeft:"\u2198",top:"\u2193",topRight:"\u2199",right:"\u2190",bottomRight:"\u2196",bottom:"\u2191",bottomLeft:"\u2197",left:"\u2192"}}});var Kt=Y((Ql,zt)=>{"use strict";var Kr=zr();zt.exports=Kr;zt.exports.default=Kr});var Jr=Y((r0,Zr)=>{"use strict";Zr.exports=({onlyFirst:D=!1}={})=>{let u=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");return new RegExp(u,D?void 0:"g")}});var ot=Y((n0,Qr)=>{"use strict";var Eo=Jr();Qr.exports=D=>typeof D=="string"?D.replace(Eo(),""):D});var en=Y((i0,Yt)=>{"use strict";var un=D=>Number.isNaN(D)?!1:D>=4352&&(D<=4447||D===9001||D===9002||11904<=D&&D<=12871&&D!==12351||12880<=D&&D<=19903||19968<=D&&D<=42182||43360<=D&&D<=43388||44032<=D&&D<=55203||63744<=D&&D<=64255||65040<=D&&D<=65049||65072<=D&&D<=65131||65281<=D&&D<=65376||65504<=D&&D<=65510||110592<=D&&D<=110593||127488<=D&&D<=127569||131072<=D&&D<=262141);Yt.exports=un;Yt.exports.default=un});var Dn=Y((s0,tn)=>{"use strict";tn.exports=function(){return/\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g}});var Se=Y((o0,Xt)=>{"use strict";var go=ot(),po=en(),mo=Dn(),rn=D=>{if(typeof D!="string"||D.length===0||(D=go(D),D.length===0))return 0;D=D.replace(mo(),"  ");let u=0;for(let t=0;t<D.length;t++){let e=D.codePointAt(t);e<=31||e>=127&&e<=159||e>=768&&e<=879||(e>65535&&t++,u+=po(e)?2:1)}return u};Xt.exports=rn;Xt.exports.default=rn});var sn=Y((a0,nn)=>{"use strict";var Ao=Se();function Qu(D,u){if(!D)return D;u=u||{};let t=u.align||"center";if(t==="left")return D;let e=u.split||`
`,r=u.pad||" ",n=t!=="right"?To:Bo,i=!1;Array.isArray(D)||(i=!0,D=String(D).split(e));let s,F=0;return D=D.map(function(c){return c=String(c),s=Ao(c),F=Math.max(s,F),{str:c,width:s}}).map(function(c){return new Array(n(F,c.width)+1).join(r)+c.str}),i?D.join(e):D}Qu.left=function(u){return Qu(u,{align:"left"})};Qu.center=function(u){return Qu(u,{align:"center"})};Qu.right=function(u){return Qu(u,{align:"right"})};nn.exports=Qu;function To(D,u){return Math.floor((D-u)/2)}function Bo(D,u){return D-u}});var hn=Y((W0,_n)=>{"use strict";var Zt=require("fs"),Wo=require("util"),$o=require("path"),Mu,Jt=class{constructor(u){u=u||{},this.directory=u.directory||"./locales",this.updateFiles=typeof u.updateFiles=="boolean"?u.updateFiles:!0,this.locale=u.locale||"en",this.fallbackToLanguage=typeof u.fallbackToLanguage=="boolean"?u.fallbackToLanguage:!0,this.cache=Object.create(null),this.writeQueue=[]}__(...u){if(typeof arguments[0]!="string")return this._taggedLiteral(arguments[0],...arguments);let t=u.shift(),e=function(){};return typeof u[u.length-1]=="function"&&(e=u.pop()),e=e||function(){},this.cache[this.locale]||this._readLocaleFile(),!this.cache[this.locale][t]&&this.updateFiles?(this.cache[this.locale][t]=t,this._enqueueWrite({directory:this.directory,locale:this.locale,cb:e})):e(),Mu.format.apply(Mu.format,[this.cache[this.locale][t]||t].concat(u))}__n(){let u=Array.prototype.slice.call(arguments),t=u.shift(),e=u.shift(),r=u.shift(),n=function(){};typeof u[u.length-1]=="function"&&(n=u.pop()),this.cache[this.locale]||this._readLocaleFile();let i=r===1?t:e;this.cache[this.locale][t]&&(i=this.cache[this.locale][t][r===1?"one":"other"]),!this.cache[this.locale][t]&&this.updateFiles?(this.cache[this.locale][t]={one:t,other:e},this._enqueueWrite({directory:this.directory,locale:this.locale,cb:n})):n();let s=[i];return~i.indexOf("%d")&&s.push(r),Mu.format.apply(Mu.format,s.concat(u))}setLocale(u){this.locale=u}getLocale(){return this.locale}updateLocale(u){this.cache[this.locale]||this._readLocaleFile();for(let t in u)Object.prototype.hasOwnProperty.call(u,t)&&(this.cache[this.locale][t]=u[t])}_taggedLiteral(u,...t){let e="";return u.forEach(function(r,n){let i=t[n+1];e+=r,typeof i<"u"&&(e+="%s")}),this.__.apply(this,[e].concat([].slice.call(t,1)))}_enqueueWrite(u){this.writeQueue.push(u),this.writeQueue.length===1&&this._processWriteQueue()}_processWriteQueue(){let u=this,t=this.writeQueue[0],e=t.directory,r=t.locale,n=t.cb,i=this._resolveLocaleFile(e,r),s=JSON.stringify(this.cache[r],null,2);Mu.fs.writeFile(i,s,"utf-8",function(F){u.writeQueue.shift(),u.writeQueue.length>0&&u._processWriteQueue(),n(F)})}_readLocaleFile(){let u={},t=this._resolveLocaleFile(this.directory,this.locale);try{Mu.fs.readFileSync&&(u=JSON.parse(Mu.fs.readFileSync(t,"utf-8")))}catch(e){if(e instanceof SyntaxError&&(e.message="syntax error in "+t),e.code==="ENOENT")u={};else throw e}this.cache[this.locale]=u}_resolveLocaleFile(u,t){let e=Mu.resolve(u,"./",t+".json");if(this.fallbackToLanguage&&!this._fileExistsSync(e)&&~t.lastIndexOf("_")){let r=Mu.resolve(u,"./",t.split("_")[0]+".json");this._fileExistsSync(r)&&(e=r)}return e}_fileExistsSync(u){return Mu.exists(u)}};function ko(D,u){Mu=u;let t=new Jt(D);return{__:t.__.bind(t),__n:t.__n.bind(t),setLocale:t.setLocale.bind(t),getLocale:t.getLocale.bind(t),updateLocale:t.updateLocale.bind(t),locale:t.locale}}var Ho={fs:{readFileSync:Zt.readFileSync,writeFile:Zt.writeFile},format:Wo.format,resolve:$o.resolve,exists:D=>{try{return Zt.statSync(D).isFile()}catch{return!1}}},Uo=D=>ko(D,Ho);_n.exports=Uo});var rD=Y(($0,An)=>{"use strict";var Go=require("util"),Fn=require("path"),qo=require("fs");function Ne(D){if(D!==D.toLowerCase()&&D!==D.toUpperCase()||(D=D.toLowerCase()),D.indexOf("-")===-1&&D.indexOf("_")===-1)return D;{let t="",e=!1,r=D.match(/^-+/);for(let n=r?r[0].length:0;n<D.length;n++){let i=D.charAt(n);e&&(e=!1,i=i.toUpperCase()),n!==0&&(i==="-"||i==="_")?e=!0:i!=="-"&&i!=="_"&&(t+=i)}return t}}function gn(D,u){let t=D.toLowerCase();u=u||"-";let e="";for(let r=0;r<D.length;r++){let n=t.charAt(r),i=D.charAt(r);n!==i&&r>0?e+=`${u}${t.charAt(r)}`:e+=i}return e}function pn(D){return D==null?!1:typeof D=="number"||/^0x[0-9a-f]+$/i.test(D)?!0:/^0[^.]/.test(D)?!1:/^[-]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(D)}function Vo(D){if(Array.isArray(D))return D.map(i=>typeof i!="string"?i+"":i);D=D.trim();let u=0,t=null,e=null,r=null,n=[];for(let i=0;i<D.length;i++){if(t=e,e=D.charAt(i),e===" "&&!r){t!==" "&&u++;continue}e===r?r=null:(e==="'"||e==='"')&&!r&&(r=e),n[u]||(n[u]=""),n[u]+=e}return n}var ju;(function(D){D.BOOLEAN="boolean",D.STRING="string",D.NUMBER="number",D.ARRAY="array"})(ju||(ju={}));var Uu,DD=class{constructor(u){Uu=u}parse(u,t){let e=Object.assign({alias:void 0,array:void 0,boolean:void 0,config:void 0,configObjects:void 0,configuration:void 0,coerce:void 0,count:void 0,default:void 0,envPrefix:void 0,narg:void 0,normalize:void 0,string:void 0,number:void 0,__:void 0,key:void 0},t),r=Vo(u),n=typeof u=="string",i=zo(Object.assign(Object.create(null),e.alias)),s=Object.assign({"boolean-negation":!0,"camel-case-expansion":!0,"combine-arrays":!1,"dot-notation":!0,"duplicate-arguments-array":!0,"flatten-duplicate-arrays":!0,"greedy-arrays":!0,"halt-at-non-option":!1,"nargs-eats-options":!1,"negation-prefix":"no-","parse-numbers":!0,"parse-positional-numbers":!0,"populate--":!1,"set-placeholder-key":!1,"short-option-groups":!0,"strip-aliased":!1,"strip-dashed":!1,"unknown-options-as-args":!1},e.configuration),F=Object.assign(Object.create(null),e.default),c=e.configObjects||[],E=e.envPrefix,B=s["populate--"],L=B?"--":"_",U=Object.create(null),b=Object.create(null),m=e.__||Uu.format,h={aliases:Object.create(null),arrays:Object.create(null),bools:Object.create(null),strings:Object.create(null),numbers:Object.create(null),counts:Object.create(null),normalize:Object.create(null),configs:Object.create(null),nargs:Object.create(null),coercions:Object.create(null),keys:[]},G=/^-([0-9]+(\.[0-9]+)?|\.[0-9]+)$/,q=new RegExp("^--"+s["negation-prefix"]+"(.+)");[].concat(e.array||[]).filter(Boolean).forEach(function(f){let g=typeof f=="object"?f.key:f,I=Object.keys(f).map(function(A){return{boolean:"bools",string:"strings",number:"numbers"}[A]}).filter(Boolean).pop();I&&(h[I][g]=!0),h.arrays[g]=!0,h.keys.push(g)}),[].concat(e.boolean||[]).filter(Boolean).forEach(function(f){h.bools[f]=!0,h.keys.push(f)}),[].concat(e.string||[]).filter(Boolean).forEach(function(f){h.strings[f]=!0,h.keys.push(f)}),[].concat(e.number||[]).filter(Boolean).forEach(function(f){h.numbers[f]=!0,h.keys.push(f)}),[].concat(e.count||[]).filter(Boolean).forEach(function(f){h.counts[f]=!0,h.keys.push(f)}),[].concat(e.normalize||[]).filter(Boolean).forEach(function(f){h.normalize[f]=!0,h.keys.push(f)}),typeof e.narg=="object"&&Object.entries(e.narg).forEach(([f,g])=>{typeof g=="number"&&(h.nargs[f]=g,h.keys.push(f))}),typeof e.coerce=="object"&&Object.entries(e.coerce).forEach(([f,g])=>{typeof g=="function"&&(h.coercions[f]=g,h.keys.push(f))}),typeof e.config<"u"&&(Array.isArray(e.config)||typeof e.config=="string"?[].concat(e.config).filter(Boolean).forEach(function(f){h.configs[f]=!0}):typeof e.config=="object"&&Object.entries(e.config).forEach(([f,g])=>{(typeof g=="boolean"||typeof g=="function")&&(h.configs[f]=g)})),a(e.key,i,e.default,h.arrays),Object.keys(F).forEach(function(f){(h.aliases[f]||[]).forEach(function(g){F[g]=F[f]})});let H=null;eu();let J=[],X=Object.assign(Object.create(null),{_:[]}),Bu={};for(let f=0;f<r.length;f++){let g=r[f],I=g.replace(/^-{3,}/,"---"),A,C,R,w,k,Fu;if(g!=="--"&&/^-/.test(g)&&x(g))ru(g);else if(I.match(/^---+(=|$)/)){ru(g);continue}else if(g.match(/^--.+=/)||!s["short-option-groups"]&&g.match(/^-.+=/))w=g.match(/^--?([^=]+)=([\s\S]*)$/),w!==null&&Array.isArray(w)&&w.length>=3&&(l(w[1],h.arrays)?f=W(f,w[1],r,w[2]):l(w[1],h.nargs)!==!1?f=y(f,w[1],r,w[2]):j(w[1],w[2],!0));else if(g.match(q)&&s["boolean-negation"])w=g.match(q),w!==null&&Array.isArray(w)&&w.length>=2&&(C=w[1],j(C,l(C,h.arrays)?[!1]:!1));else if(g.match(/^--.+/)||!s["short-option-groups"]&&g.match(/^-[^-]+/))w=g.match(/^--?(.+)/),w!==null&&Array.isArray(w)&&w.length>=2&&(C=w[1],l(C,h.arrays)?f=W(f,C,r):l(C,h.nargs)!==!1?f=y(f,C,r):(k=r[f+1],k!==void 0&&(!k.match(/^-/)||k.match(G))&&!l(C,h.bools)&&!l(C,h.counts)||/^(true|false)$/.test(k)?(j(C,k),f++):j(C,S(C))));else if(g.match(/^-.\..+=/))w=g.match(/^-([^=]+)=([\s\S]*)$/),w!==null&&Array.isArray(w)&&w.length>=3&&j(w[1],w[2]);else if(g.match(/^-.\..+/)&&!g.match(G))k=r[f+1],w=g.match(/^-(.\..+)/),w!==null&&Array.isArray(w)&&w.length>=2&&(C=w[1],k!==void 0&&!k.match(/^-/)&&!l(C,h.bools)&&!l(C,h.counts)?(j(C,k),f++):j(C,S(C)));else if(g.match(/^-[^-]+/)&&!g.match(G)){R=g.slice(1,-1).split(""),A=!1;for(let du=0;du<R.length;du++){if(k=g.slice(du+2),R[du+1]&&R[du+1]==="="){Fu=g.slice(du+3),C=R[du],l(C,h.arrays)?f=W(f,C,r,Fu):l(C,h.nargs)!==!1?f=y(f,C,r,Fu):j(C,Fu),A=!0;break}if(k==="-"){j(R[du],k);continue}if(/[A-Za-z]/.test(R[du])&&/^-?\d+(\.\d*)?(e-?\d+)?$/.test(k)&&l(k,h.bools)===!1){j(R[du],k),A=!0;break}if(R[du+1]&&R[du+1].match(/\W/)){j(R[du],k),A=!0;break}else j(R[du],S(R[du]))}C=g.slice(-1)[0],!A&&C!=="-"&&(l(C,h.arrays)?f=W(f,C,r):l(C,h.nargs)!==!1?f=y(f,C,r):(k=r[f+1],k!==void 0&&(!/^(-|--)[^-]/.test(k)||k.match(G))&&!l(C,h.bools)&&!l(C,h.counts)||/^(true|false)$/.test(k)?(j(C,k),f++):j(C,S(C))))}else if(g.match(/^-[0-9]$/)&&g.match(G)&&l(g.slice(1),h.bools))C=g.slice(1),j(C,S(C));else if(g==="--"){J=r.slice(f+1);break}else if(s["halt-at-non-option"]){J=r.slice(f);break}else ru(g)}Gu(X,!0),Gu(X,!1),hu(X),nu(),ou(X,h.aliases,F,!0),qu(X),s["set-placeholder-key"]&&$u(X),Object.keys(h.counts).forEach(function(f){_(X,f.split("."))||j(f,0)}),B&&J.length&&(X[L]=[]),J.forEach(function(f){X[L].push(f)}),s["camel-case-expansion"]&&s["strip-dashed"]&&Object.keys(X).filter(f=>f!=="--"&&f.includes("-")).forEach(f=>{delete X[f]}),s["strip-aliased"]&&[].concat(...Object.keys(i).map(f=>i[f])).forEach(f=>{s["camel-case-expansion"]&&f.includes("-")&&delete X[f.split(".").map(g=>Ne(g)).join(".")],delete X[f]});function ru(f){let g=Z("_",f);(typeof g=="string"||typeof g=="number")&&X._.push(g)}function y(f,g,I,A){let C,R=l(g,h.nargs);if(R=typeof R!="number"||isNaN(R)?1:R,R===0)return z(A)||(H=Error(m("Argument unexpected for: %s",g))),j(g,S(g)),f;let w=z(A)?0:1;if(s["nargs-eats-options"])I.length-(f+1)+w<R&&(H=Error(m("Not enough arguments following: %s",g))),w=R;else{for(C=f+1;C<I.length&&(!I[C].match(/^-[^0-9]/)||I[C].match(G)||x(I[C]));C++)w++;w<R&&(H=Error(m("Not enough arguments following: %s",g)))}let k=Math.min(w,R);for(!z(A)&&k>0&&(j(g,A),k--),C=f+1;C<k+f+1;C++)j(g,I[C]);return f+k}function W(f,g,I,A){let C=[],R=A||I[f+1],w=l(g,h.nargs);if(l(g,h.bools)&&!/^(true|false)$/.test(R))C.push(!0);else if(z(R)||z(A)&&/^-/.test(R)&&!G.test(R)&&!x(R)){if(F[g]!==void 0){let k=F[g];C=Array.isArray(k)?k:[k]}}else{z(A)||C.push(uu(g,A,!0));for(let k=f+1;k<I.length&&!(!s["greedy-arrays"]&&C.length>0||w&&typeof w=="number"&&C.length>=w||(R=I[k],/^-/.test(R)&&!G.test(R)&&!x(R)));k++)f=k,C.push(uu(g,R,n))}return typeof w=="number"&&(w&&C.length<w||isNaN(w)&&C.length===0)&&(H=Error(m("Not enough arguments following: %s",g))),j(g,C),f}function j(f,g,I=n){if(/-/.test(f)&&s["camel-case-expansion"]){let R=f.split(".").map(function(w){return Ne(w)}).join(".");Q(f,R)}let A=uu(f,g,I),C=f.split(".");d(X,C,A),h.aliases[f]&&h.aliases[f].forEach(function(R){let w=R.split(".");d(X,w,A)}),C.length>1&&s["dot-notation"]&&(h.aliases[C[0]]||[]).forEach(function(R){let w=R.split("."),k=[].concat(C);k.shift(),w=w.concat(k),(h.aliases[f]||[]).includes(w.join("."))||d(X,w,A)}),l(f,h.normalize)&&!l(f,h.arrays)&&[f].concat(h.aliases[f]||[]).forEach(function(w){Object.defineProperty(Bu,w,{enumerable:!0,get(){return g},set(k){g=typeof k=="string"?Uu.normalize(k):k}})})}function Q(f,g){h.aliases[f]&&h.aliases[f].length||(h.aliases[f]=[g],U[g]=!0),h.aliases[g]&&h.aliases[g].length||Q(g,f)}function uu(f,g,I){I&&(g=Ko(g)),(l(f,h.bools)||l(f,h.counts))&&typeof g=="string"&&(g=g==="true");let A=Array.isArray(g)?g.map(function(C){return Z(f,C)}):Z(f,g);return l(f,h.counts)&&(z(A)||typeof A=="boolean")&&(A=Qt()),l(f,h.normalize)&&l(f,h.arrays)&&(Array.isArray(g)?A=g.map(C=>Uu.normalize(C)):A=Uu.normalize(g)),A}function Z(f,g){return!s["parse-positional-numbers"]&&f==="_"||!l(f,h.strings)&&!l(f,h.bools)&&!Array.isArray(g)&&(pn(g)&&s["parse-numbers"]&&Number.isSafeInteger(Math.floor(parseFloat(`${g}`)))||!z(g)&&l(f,h.numbers))&&(g=Number(g)),g}function hu(f){let g=Object.create(null);ou(g,h.aliases,F),Object.keys(h.configs).forEach(function(I){let A=f[I]||g[I];if(A)try{let C=null,R=Uu.resolve(Uu.cwd(),A),w=h.configs[I];if(typeof w=="function"){try{C=w(R)}catch(k){C=k}if(C instanceof Error){H=C;return}}else C=Uu.require(R);Ou(C)}catch(C){C.name==="PermissionDenied"?H=C:f[I]&&(H=Error(m("Invalid JSON config file: %s",A)))}})}function Ou(f,g){Object.keys(f).forEach(function(I){let A=f[I],C=g?g+"."+I:I;typeof A=="object"&&A!==null&&!Array.isArray(A)&&s["dot-notation"]?Ou(A,C):(!_(X,C.split("."))||l(C,h.arrays)&&s["combine-arrays"])&&j(C,A)})}function nu(){typeof c<"u"&&c.forEach(function(f){Ou(f)})}function Gu(f,g){if(typeof E>"u")return;let I=typeof E=="string"?E:"",A=Uu.env();Object.keys(A).forEach(function(C){if(I===""||C.lastIndexOf(I,0)===0){let R=C.split("__").map(function(w,k){return k===0&&(w=w.substring(I.length)),Ne(w)});(g&&h.configs[R.join(".")]||!g)&&!_(f,R)&&j(R.join("."),A[C])}})}function qu(f){let g,I=new Set;Object.keys(f).forEach(function(A){if(!I.has(A)&&(g=l(A,h.coercions),typeof g=="function"))try{let C=Z(A,g(f[A]));[].concat(h.aliases[A]||[],A).forEach(R=>{I.add(R),f[R]=C})}catch(C){H=C}})}function $u(f){return h.keys.forEach(g=>{~g.indexOf(".")||typeof f[g]>"u"&&(f[g]=void 0)}),f}function ou(f,g,I,A=!1){Object.keys(I).forEach(function(C){_(f,C.split("."))||(d(f,C.split("."),I[C]),A&&(b[C]=!0),(g[C]||[]).forEach(function(R){_(f,R.split("."))||d(f,R.split("."),I[C])}))})}function _(f,g){let I=f;s["dot-notation"]||(g=[g.join(".")]),g.slice(0,-1).forEach(function(C){I=I[C]||{}});let A=g[g.length-1];return typeof I!="object"?!1:A in I}function d(f,g,I){let A=f;s["dot-notation"]||(g=[g.join(".")]),g.slice(0,-1).forEach(function(Fu){Fu=Cn(Fu),typeof A=="object"&&A[Fu]===void 0&&(A[Fu]={}),typeof A[Fu]!="object"||Array.isArray(A[Fu])?(Array.isArray(A[Fu])?A[Fu].push({}):A[Fu]=[A[Fu],{}],A=A[Fu][A[Fu].length-1]):A=A[Fu]});let C=Cn(g[g.length-1]),R=l(g.join("."),h.arrays),w=Array.isArray(I),k=s["duplicate-arguments-array"];!k&&l(C,h.nargs)&&(k=!0,(!z(A[C])&&h.nargs[C]===1||Array.isArray(A[C])&&A[C].length===h.nargs[C])&&(A[C]=void 0)),I===Qt()?A[C]=Qt(A[C]):Array.isArray(A[C])?k&&R&&w?A[C]=s["flatten-duplicate-arrays"]?A[C].concat(I):(Array.isArray(A[C][0])?A[C]:[A[C]]).concat([I]):!k&&!!R==!!w?A[C]=I:A[C]=A[C].concat([I]):A[C]===void 0&&R?A[C]=w?I:[I]:k&&!(A[C]===void 0||l(C,h.counts)||l(C,h.bools))?A[C]=[A[C],I]:A[C]=I}function a(...f){f.forEach(function(g){Object.keys(g||{}).forEach(function(I){h.aliases[I]||(h.aliases[I]=[].concat(i[I]||[]),h.aliases[I].concat(I).forEach(function(A){if(/-/.test(A)&&s["camel-case-expansion"]){let C=Ne(A);C!==I&&h.aliases[I].indexOf(C)===-1&&(h.aliases[I].push(C),U[C]=!0)}}),h.aliases[I].concat(I).forEach(function(A){if(A.length>1&&/[A-Z]/.test(A)&&s["camel-case-expansion"]){let C=gn(A,"-");C!==I&&h.aliases[I].indexOf(C)===-1&&(h.aliases[I].push(C),U[C]=!0)}}),h.aliases[I].forEach(function(A){h.aliases[A]=[I].concat(h.aliases[I].filter(function(C){return A!==C}))}))})})}function l(f,g){let I=[].concat(h.aliases[f]||[],f),A=Object.keys(g),C=I.find(R=>A.includes(R));return C?g[C]:!1}function p(f){let g=Object.keys(h);return[].concat(g.map(A=>h[A])).some(function(A){return Array.isArray(A)?A.includes(f):A[f]})}function T(f,...g){return[].concat(...g).some(function(A){let C=f.match(A);return C&&p(C[1])})}function O(f){if(f.match(G)||!f.match(/^-[^-]+/))return!1;let g=!0,I,A=f.slice(1).split("");for(let C=0;C<A.length;C++){if(I=f.slice(C+2),!p(A[C])){g=!1;break}if(A[C+1]&&A[C+1]==="="||I==="-"||/[A-Za-z]/.test(A[C])&&/^-?\d+(\.\d*)?(e-?\d+)?$/.test(I)||A[C+1]&&A[C+1].match(/\W/))break}return g}function x(f){return s["unknown-options-as-args"]&&v(f)}function v(f){return f=f.replace(/^-{3,}/,"--"),f.match(G)||O(f)?!1:!T(f,/^-+([^=]+?)=[\s\S]*$/,q,/^-+([^=]+?)$/,/^-+([^=]+?)-$/,/^-+([^=]+?\d+)$/,/^-+([^=]+?)\W+.*$/)}function S(f){return!l(f,h.bools)&&!l(f,h.counts)&&`${f}`in F?F[f]:tu(Du(f))}function tu(f){return{[ju.BOOLEAN]:!0,[ju.STRING]:"",[ju.NUMBER]:void 0,[ju.ARRAY]:[]}[f]}function Du(f){let g=ju.BOOLEAN;return l(f,h.strings)?g=ju.STRING:l(f,h.numbers)?g=ju.NUMBER:l(f,h.bools)?g=ju.BOOLEAN:l(f,h.arrays)&&(g=ju.ARRAY),g}function z(f){return f===void 0}function eu(){Object.keys(h.counts).find(f=>l(f,h.arrays)?(H=Error(m("Invalid configuration: %s, opts.count excludes opts.array.",f)),!0):l(f,h.nargs)?(H=Error(m("Invalid configuration: %s, opts.count excludes opts.narg.",f)),!0):!1)}return{aliases:Object.assign({},h.aliases),argv:Object.assign(Bu,X),configuration:s,defaulted:Object.assign({},b),error:H,newAliases:Object.assign({},U)}}};function zo(D){let u=[],t=Object.create(null),e=!0;for(Object.keys(D).forEach(function(r){u.push([].concat(D[r],r))});e;){e=!1;for(let r=0;r<u.length;r++)for(let n=r+1;n<u.length;n++)if(u[r].filter(function(s){return u[n].indexOf(s)!==-1}).length){u[r]=u[r].concat(u[n]),u.splice(n,1),e=!0;break}}return u.forEach(function(r){r=r.filter(function(i,s,F){return F.indexOf(i)===s});let n=r.pop();n!==void 0&&typeof n=="string"&&(t[n]=r)}),t}function Qt(D){return D!==void 0?D+1:1}function Cn(D){return D==="__proto__"?"___proto___":D}function Ko(D){return typeof D=="string"&&(D[0]==="'"||D[0]==='"')&&D[D.length-1]===D[0]?D.substring(1,D.length-1):D}var uD,eD,tD,En=process&&process.env&&process.env.YARGS_MIN_NODE_VERSION?Number(process.env.YARGS_MIN_NODE_VERSION):12,dn=(eD=(uD=process==null?void 0:process.versions)===null||uD===void 0?void 0:uD.node)!==null&&eD!==void 0?eD:(tD=process==null?void 0:process.version)===null||tD===void 0?void 0:tD.slice(1);if(dn&&Number(dn.match(/^([^.]+)/)[1])<En)throw Error(`yargs parser supports a minimum Node.js version of ${En}. Read our version support policy: https://github.com/yargs/yargs-parser#supported-nodejs-versions`);var Yo=process?process.env:{},mn=new DD({cwd:process.cwd,env:()=>Yo,format:Go.format,normalize:Fn.normalize,resolve:Fn.resolve,require:D=>{if(typeof require<"u")return require(D);if(D.match(/\.json$/))return JSON.parse(qo.readFileSync(D,"utf8"));throw Error("only .json config files are supported in ESM")}}),Me=function(u,t){return mn.parse(u.slice(),t).argv};Me.detailed=function(D,u){return mn.parse(D.slice(),u)};Me.camelCase=Ne;Me.decamelize=gn;Me.looksLikeNumber=pn;An.exports=Me});var Bn=Y((k0,Tn)=>{"use strict";Tn.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}});var nD=Y((H0,Ln)=>{var je=Bn(),bn={};for(let D of Object.keys(je))bn[je[D]]=D;var P={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};Ln.exports=P;for(let D of Object.keys(P)){if(!("channels"in P[D]))throw new Error("missing channels property: "+D);if(!("labels"in P[D]))throw new Error("missing channel labels property: "+D);if(P[D].labels.length!==P[D].channels)throw new Error("channel and label counts mismatch: "+D);let{channels:u,labels:t}=P[D];delete P[D].channels,delete P[D].labels,Object.defineProperty(P[D],"channels",{value:u}),Object.defineProperty(P[D],"labels",{value:t})}P.rgb.hsl=function(D){let u=D[0]/255,t=D[1]/255,e=D[2]/255,r=Math.min(u,t,e),n=Math.max(u,t,e),i=n-r,s,F;n===r?s=0:u===n?s=(t-e)/i:t===n?s=2+(e-u)/i:e===n&&(s=4+(u-t)/i),s=Math.min(s*60,360),s<0&&(s+=360);let c=(r+n)/2;return n===r?F=0:c<=.5?F=i/(n+r):F=i/(2-n-r),[s,F*100,c*100]};P.rgb.hsv=function(D){let u,t,e,r,n,i=D[0]/255,s=D[1]/255,F=D[2]/255,c=Math.max(i,s,F),E=c-Math.min(i,s,F),B=function(L){return(c-L)/6/E+1/2};return E===0?(r=0,n=0):(n=E/c,u=B(i),t=B(s),e=B(F),i===c?r=e-t:s===c?r=1/3+u-e:F===c&&(r=2/3+t-u),r<0?r+=1:r>1&&(r-=1)),[r*360,n*100,c*100]};P.rgb.hwb=function(D){let u=D[0],t=D[1],e=D[2],r=P.rgb.hsl(D)[0],n=1/255*Math.min(u,Math.min(t,e));return e=1-1/255*Math.max(u,Math.max(t,e)),[r,n*100,e*100]};P.rgb.cmyk=function(D){let u=D[0]/255,t=D[1]/255,e=D[2]/255,r=Math.min(1-u,1-t,1-e),n=(1-u-r)/(1-r)||0,i=(1-t-r)/(1-r)||0,s=(1-e-r)/(1-r)||0;return[n*100,i*100,s*100,r*100]};function Xo(D,u){return(D[0]-u[0])**2+(D[1]-u[1])**2+(D[2]-u[2])**2}P.rgb.keyword=function(D){let u=bn[D];if(u)return u;let t=1/0,e;for(let r of Object.keys(je)){let n=je[r],i=Xo(D,n);i<t&&(t=i,e=r)}return e};P.keyword.rgb=function(D){return je[D]};P.rgb.xyz=function(D){let u=D[0]/255,t=D[1]/255,e=D[2]/255;u=u>.04045?((u+.055)/1.055)**2.4:u/12.92,t=t>.04045?((t+.055)/1.055)**2.4:t/12.92,e=e>.04045?((e+.055)/1.055)**2.4:e/12.92;let r=u*.4124+t*.3576+e*.1805,n=u*.2126+t*.7152+e*.0722,i=u*.0193+t*.1192+e*.9505;return[r*100,n*100,i*100]};P.rgb.lab=function(D){let u=P.rgb.xyz(D),t=u[0],e=u[1],r=u[2];t/=95.047,e/=100,r/=108.883,t=t>.008856?t**(1/3):7.787*t+16/116,e=e>.008856?e**(1/3):7.787*e+16/116,r=r>.008856?r**(1/3):7.787*r+16/116;let n=116*e-16,i=500*(t-e),s=200*(e-r);return[n,i,s]};P.hsl.rgb=function(D){let u=D[0]/360,t=D[1]/100,e=D[2]/100,r,n,i;if(t===0)return i=e*255,[i,i,i];e<.5?r=e*(1+t):r=e+t-e*t;let s=2*e-r,F=[0,0,0];for(let c=0;c<3;c++)n=u+1/3*-(c-1),n<0&&n++,n>1&&n--,6*n<1?i=s+(r-s)*6*n:2*n<1?i=r:3*n<2?i=s+(r-s)*(2/3-n)*6:i=s,F[c]=i*255;return F};P.hsl.hsv=function(D){let u=D[0],t=D[1]/100,e=D[2]/100,r=t,n=Math.max(e,.01);e*=2,t*=e<=1?e:2-e,r*=n<=1?n:2-n;let i=(e+t)/2,s=e===0?2*r/(n+r):2*t/(e+t);return[u,s*100,i*100]};P.hsv.rgb=function(D){let u=D[0]/60,t=D[1]/100,e=D[2]/100,r=Math.floor(u)%6,n=u-Math.floor(u),i=255*e*(1-t),s=255*e*(1-t*n),F=255*e*(1-t*(1-n));switch(e*=255,r){case 0:return[e,F,i];case 1:return[s,e,i];case 2:return[i,e,F];case 3:return[i,s,e];case 4:return[F,i,e];case 5:return[e,i,s]}};P.hsv.hsl=function(D){let u=D[0],t=D[1]/100,e=D[2]/100,r=Math.max(e,.01),n,i;i=(2-t)*e;let s=(2-t)*r;return n=t*r,n/=s<=1?s:2-s,n=n||0,i/=2,[u,n*100,i*100]};P.hwb.rgb=function(D){let u=D[0]/360,t=D[1]/100,e=D[2]/100,r=t+e,n;r>1&&(t/=r,e/=r);let i=Math.floor(6*u),s=1-e;n=6*u-i,i&1&&(n=1-n);let F=t+n*(s-t),c,E,B;switch(i){default:case 6:case 0:c=s,E=F,B=t;break;case 1:c=F,E=s,B=t;break;case 2:c=t,E=s,B=F;break;case 3:c=t,E=F,B=s;break;case 4:c=F,E=t,B=s;break;case 5:c=s,E=t,B=F;break}return[c*255,E*255,B*255]};P.cmyk.rgb=function(D){let u=D[0]/100,t=D[1]/100,e=D[2]/100,r=D[3]/100,n=1-Math.min(1,u*(1-r)+r),i=1-Math.min(1,t*(1-r)+r),s=1-Math.min(1,e*(1-r)+r);return[n*255,i*255,s*255]};P.xyz.rgb=function(D){let u=D[0]/100,t=D[1]/100,e=D[2]/100,r,n,i;return r=u*3.2406+t*-1.5372+e*-.4986,n=u*-.9689+t*1.8758+e*.0415,i=u*.0557+t*-.204+e*1.057,r=r>.0031308?1.055*r**(1/2.4)-.055:r*12.92,n=n>.0031308?1.055*n**(1/2.4)-.055:n*12.92,i=i>.0031308?1.055*i**(1/2.4)-.055:i*12.92,r=Math.min(Math.max(0,r),1),n=Math.min(Math.max(0,n),1),i=Math.min(Math.max(0,i),1),[r*255,n*255,i*255]};P.xyz.lab=function(D){let u=D[0],t=D[1],e=D[2];u/=95.047,t/=100,e/=108.883,u=u>.008856?u**(1/3):7.787*u+16/116,t=t>.008856?t**(1/3):7.787*t+16/116,e=e>.008856?e**(1/3):7.787*e+16/116;let r=116*t-16,n=500*(u-t),i=200*(t-e);return[r,n,i]};P.lab.xyz=function(D){let u=D[0],t=D[1],e=D[2],r,n,i;n=(u+16)/116,r=t/500+n,i=n-e/200;let s=n**3,F=r**3,c=i**3;return n=s>.008856?s:(n-16/116)/7.787,r=F>.008856?F:(r-16/116)/7.787,i=c>.008856?c:(i-16/116)/7.787,r*=95.047,n*=100,i*=108.883,[r,n,i]};P.lab.lch=function(D){let u=D[0],t=D[1],e=D[2],r;r=Math.atan2(e,t)*360/2/Math.PI,r<0&&(r+=360);let i=Math.sqrt(t*t+e*e);return[u,i,r]};P.lch.lab=function(D){let u=D[0],t=D[1],r=D[2]/360*2*Math.PI,n=t*Math.cos(r),i=t*Math.sin(r);return[u,n,i]};P.rgb.ansi16=function(D,u=null){let[t,e,r]=D,n=u===null?P.rgb.hsv(D)[2]:u;if(n=Math.round(n/50),n===0)return 30;let i=30+(Math.round(r/255)<<2|Math.round(e/255)<<1|Math.round(t/255));return n===2&&(i+=60),i};P.hsv.ansi16=function(D){return P.rgb.ansi16(P.hsv.rgb(D),D[2])};P.rgb.ansi256=function(D){let u=D[0],t=D[1],e=D[2];return u===t&&t===e?u<8?16:u>248?231:Math.round((u-8)/247*24)+232:16+36*Math.round(u/255*5)+6*Math.round(t/255*5)+Math.round(e/255*5)};P.ansi16.rgb=function(D){let u=D%10;if(u===0||u===7)return D>50&&(u+=3.5),u=u/10.5*255,[u,u,u];let t=(~~(D>50)+1)*.5,e=(u&1)*t*255,r=(u>>1&1)*t*255,n=(u>>2&1)*t*255;return[e,r,n]};P.ansi256.rgb=function(D){if(D>=232){let n=(D-232)*10+8;return[n,n,n]}D-=16;let u,t=Math.floor(D/36)/5*255,e=Math.floor((u=D%36)/6)/5*255,r=u%6/5*255;return[t,e,r]};P.rgb.hex=function(D){let t=(((Math.round(D[0])&255)<<16)+((Math.round(D[1])&255)<<8)+(Math.round(D[2])&255)).toString(16).toUpperCase();return"000000".substring(t.length)+t};P.hex.rgb=function(D){let u=D.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!u)return[0,0,0];let t=u[0];u[0].length===3&&(t=t.split("").map(s=>s+s).join(""));let e=parseInt(t,16),r=e>>16&255,n=e>>8&255,i=e&255;return[r,n,i]};P.rgb.hcg=function(D){let u=D[0]/255,t=D[1]/255,e=D[2]/255,r=Math.max(Math.max(u,t),e),n=Math.min(Math.min(u,t),e),i=r-n,s,F;return i<1?s=n/(1-i):s=0,i<=0?F=0:r===u?F=(t-e)/i%6:r===t?F=2+(e-u)/i:F=4+(u-t)/i,F/=6,F%=1,[F*360,i*100,s*100]};P.hsl.hcg=function(D){let u=D[1]/100,t=D[2]/100,e=t<.5?2*u*t:2*u*(1-t),r=0;return e<1&&(r=(t-.5*e)/(1-e)),[D[0],e*100,r*100]};P.hsv.hcg=function(D){let u=D[1]/100,t=D[2]/100,e=u*t,r=0;return e<1&&(r=(t-e)/(1-e)),[D[0],e*100,r*100]};P.hcg.rgb=function(D){let u=D[0]/360,t=D[1]/100,e=D[2]/100;if(t===0)return[e*255,e*255,e*255];let r=[0,0,0],n=u%1*6,i=n%1,s=1-i,F=0;switch(Math.floor(n)){case 0:r[0]=1,r[1]=i,r[2]=0;break;case 1:r[0]=s,r[1]=1,r[2]=0;break;case 2:r[0]=0,r[1]=1,r[2]=i;break;case 3:r[0]=0,r[1]=s,r[2]=1;break;case 4:r[0]=i,r[1]=0,r[2]=1;break;default:r[0]=1,r[1]=0,r[2]=s}return F=(1-t)*e,[(t*r[0]+F)*255,(t*r[1]+F)*255,(t*r[2]+F)*255]};P.hcg.hsv=function(D){let u=D[1]/100,t=D[2]/100,e=u+t*(1-u),r=0;return e>0&&(r=u/e),[D[0],r*100,e*100]};P.hcg.hsl=function(D){let u=D[1]/100,e=D[2]/100*(1-u)+.5*u,r=0;return e>0&&e<.5?r=u/(2*e):e>=.5&&e<1&&(r=u/(2*(1-e))),[D[0],r*100,e*100]};P.hcg.hwb=function(D){let u=D[1]/100,t=D[2]/100,e=u+t*(1-u);return[D[0],(e-u)*100,(1-e)*100]};P.hwb.hcg=function(D){let u=D[1]/100,e=1-D[2]/100,r=e-u,n=0;return r<1&&(n=(e-r)/(1-r)),[D[0],r*100,n*100]};P.apple.rgb=function(D){return[D[0]/65535*255,D[1]/65535*255,D[2]/65535*255]};P.rgb.apple=function(D){return[D[0]/255*65535,D[1]/255*65535,D[2]/255*65535]};P.gray.rgb=function(D){return[D[0]/100*255,D[0]/100*255,D[0]/100*255]};P.gray.hsl=function(D){return[0,0,D[0]]};P.gray.hsv=P.gray.hsl;P.gray.hwb=function(D){return[0,100,D[0]]};P.gray.cmyk=function(D){return[0,0,0,D[0]]};P.gray.lab=function(D){return[D[0],0,0]};P.gray.hex=function(D){let u=Math.round(D[0]/100*255)&255,e=((u<<16)+(u<<8)+u).toString(16).toUpperCase();return"000000".substring(e.length)+e};P.rgb.gray=function(D){return[(D[0]+D[1]+D[2])/3/255*100]}});var yn=Y((U0,xn)=>{var lt=nD();function Zo(){let D={},u=Object.keys(lt);for(let t=u.length,e=0;e<t;e++)D[u[e]]={distance:-1,parent:null};return D}function Jo(D){let u=Zo(),t=[D];for(u[D].distance=0;t.length;){let e=t.pop(),r=Object.keys(lt[e]);for(let n=r.length,i=0;i<n;i++){let s=r[i],F=u[s];F.distance===-1&&(F.distance=u[e].distance+1,F.parent=e,t.unshift(s))}}return u}function Qo(D,u){return function(t){return u(D(t))}}function ua(D,u){let t=[u[D].parent,D],e=lt[u[D].parent][D],r=u[D].parent;for(;u[r].parent;)t.unshift(u[r].parent),e=Qo(lt[u[r].parent][r],e),r=u[r].parent;return e.conversion=t,e}xn.exports=function(D){let u=Jo(D),t={},e=Object.keys(u);for(let r=e.length,n=0;n<r;n++){let i=e[n];u[i].parent!==null&&(t[i]=ua(i,u))}return t}});var Rn=Y((G0,In)=>{var iD=nD(),ea=yn(),ge={},ta=Object.keys(iD);function Da(D){let u=function(...t){let e=t[0];return e==null?e:(e.length>1&&(t=e),D(t))};return"conversion"in D&&(u.conversion=D.conversion),u}function ra(D){let u=function(...t){let e=t[0];if(e==null)return e;e.length>1&&(t=e);let r=D(t);if(typeof r=="object")for(let n=r.length,i=0;i<n;i++)r[i]=Math.round(r[i]);return r};return"conversion"in D&&(u.conversion=D.conversion),u}ta.forEach(D=>{ge[D]={},Object.defineProperty(ge[D],"channels",{value:iD[D].channels}),Object.defineProperty(ge[D],"labels",{value:iD[D].labels});let u=ea(D);Object.keys(u).forEach(e=>{let r=u[e];ge[D][e]=ra(r),ge[D][e].raw=Da(r)})});In.exports=ge});var Mn=Y((q0,Nn)=>{"use strict";var vn=(D,u)=>(...t)=>`\x1B[${D(...t)+u}m`,On=(D,u)=>(...t)=>{let e=D(...t);return`\x1B[${38+u};5;${e}m`},wn=(D,u)=>(...t)=>{let e=D(...t);return`\x1B[${38+u};2;${e[0]};${e[1]};${e[2]}m`},ct=D=>D,Sn=(D,u,t)=>[D,u,t],pe=(D,u,t)=>{Object.defineProperty(D,u,{get:()=>{let e=t();return Object.defineProperty(D,u,{value:e,enumerable:!0,configurable:!0}),e},enumerable:!0,configurable:!0})},sD,me=(D,u,t,e)=>{sD===void 0&&(sD=Rn());let r=e?10:0,n={};for(let[i,s]of Object.entries(sD)){let F=i==="ansi16"?"ansi":i;i===u?n[F]=D(t,r):typeof s=="object"&&(n[F]=D(s[u],r))}return n};function na(){let D=new Map,u={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],blackBright:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};u.color.gray=u.color.blackBright,u.bgColor.bgGray=u.bgColor.bgBlackBright,u.color.grey=u.color.blackBright,u.bgColor.bgGrey=u.bgColor.bgBlackBright;for(let[t,e]of Object.entries(u)){for(let[r,n]of Object.entries(e))u[r]={open:`\x1B[${n[0]}m`,close:`\x1B[${n[1]}m`},e[r]=u[r],D.set(n[0],n[1]);Object.defineProperty(u,t,{value:e,enumerable:!1})}return Object.defineProperty(u,"codes",{value:D,enumerable:!1}),u.color.close="\x1B[39m",u.bgColor.close="\x1B[49m",pe(u.color,"ansi",()=>me(vn,"ansi16",ct,!1)),pe(u.color,"ansi256",()=>me(On,"ansi256",ct,!1)),pe(u.color,"ansi16m",()=>me(wn,"rgb",Sn,!1)),pe(u.bgColor,"ansi",()=>me(vn,"ansi16",ct,!0)),pe(u.bgColor,"ansi256",()=>me(On,"ansi256",ct,!0)),pe(u.bgColor,"ansi16m",()=>me(wn,"rgb",Sn,!0)),u}Object.defineProperty(Nn,"exports",{enumerable:!0,get:na})});var Hn=Y((V0,kn)=>{"use strict";var Pe=Se(),ia=ot(),sa=Mn(),ft=new Set(["\x1B","\x9B"]),oa=39,aD="\x07",Wn="[",aa="]",$n="m",lD=`${aa}8;;`,jn=D=>`${ft.values().next().value}${Wn}${D}${$n}`,Pn=D=>`${ft.values().next().value}${lD}${D}${aD}`,la=D=>D.split(" ").map(u=>Pe(u)),oD=(D,u,t)=>{let e=[...u],r=!1,n=!1,i=Pe(ia(D[D.length-1]));for(let[s,F]of e.entries()){let c=Pe(F);if(i+c<=t?D[D.length-1]+=F:(D.push(F),i=0),ft.has(F)&&(r=!0,n=e.slice(s+1).join("").startsWith(lD)),r){n?F===aD&&(r=!1,n=!1):F===$n&&(r=!1);continue}i+=c,i===t&&s<e.length-1&&(D.push(""),i=0)}!i&&D[D.length-1].length>0&&D.length>1&&(D[D.length-2]+=D.pop())},ca=D=>{let u=D.split(" "),t=u.length;for(;t>0&&!(Pe(u[t-1])>0);)t--;return t===u.length?D:u.slice(0,t).join(" ")+u.slice(t).join("")},fa=(D,u,t={})=>{if(t.trim!==!1&&D.trim()==="")return"";let e="",r,n,i=la(D),s=[""];for(let[c,E]of D.split(" ").entries()){t.trim!==!1&&(s[s.length-1]=s[s.length-1].trimStart());let B=Pe(s[s.length-1]);if(c!==0&&(B>=u&&(t.wordWrap===!1||t.trim===!1)&&(s.push(""),B=0),(B>0||t.trim===!1)&&(s[s.length-1]+=" ",B++)),t.hard&&i[c]>u){let L=u-B,U=1+Math.floor((i[c]-L-1)/u);Math.floor((i[c]-1)/u)<U&&s.push(""),oD(s,E,u);continue}if(B+i[c]>u&&B>0&&i[c]>0){if(t.wordWrap===!1&&B<u){oD(s,E,u);continue}s.push("")}if(B+i[c]>u&&t.wordWrap===!1){oD(s,E,u);continue}s[s.length-1]+=E}t.trim!==!1&&(s=s.map(ca));let F=[...s.join(`
`)];for(let[c,E]of F.entries()){if(e+=E,ft.has(E)){let{groups:L}=new RegExp(`(?:\\${Wn}(?<code>\\d+)m|\\${lD}(?<uri>.*)${aD})`).exec(F.slice(c).join(""))||{groups:{}};if(L.code!==void 0){let U=Number.parseFloat(L.code);r=U===oa?void 0:U}else L.uri!==void 0&&(n=L.uri.length===0?void 0:L.uri)}let B=sa.codes.get(Number(r));F[c+1]===`
`?(n&&(e+=Pn("")),r&&B&&(e+=jn(B))):E===`
`&&(r&&B&&(e+=jn(r)),n&&(e+=Pn(n)))}return e};kn.exports=(D,u,t)=>String(D).normalize().replace(/\r\n/g,`
`).split(`
`).map(e=>fa(e,u,t)).join(`
`)});var qn=Y((z0,Gn)=>{"use strict";var _a={right:da,center:ga},ha=0,_t=1,Fa=2,ht=3,cD=class{constructor(u){var t;this.width=u.width,this.wrap=(t=u.wrap)!==null&&t!==void 0?t:!0,this.rows=[]}span(...u){let t=this.div(...u);t.span=!0}resetOutput(){this.rows=[]}div(...u){if(u.length===0&&this.div(""),this.wrap&&this.shouldApplyLayoutDSL(...u)&&typeof u[0]=="string")return this.applyLayoutDSL(u[0]);let t=u.map(e=>typeof e=="string"?this.colFromString(e):e);return this.rows.push(t),t}shouldApplyLayoutDSL(...u){return u.length===1&&typeof u[0]=="string"&&/[\t\n]/.test(u[0])}applyLayoutDSL(u){let t=u.split(`
`).map(r=>r.split("	")),e=0;return t.forEach(r=>{r.length>1&&pu.stringWidth(r[0])>e&&(e=Math.min(Math.floor(this.width*.5),pu.stringWidth(r[0])))}),t.forEach(r=>{this.div(...r.map((n,i)=>({text:n.trim(),padding:this.measurePadding(n),width:i===0&&r.length>1?e:void 0})))}),this.rows[this.rows.length-1]}colFromString(u){return{text:u,padding:this.measurePadding(u)}}measurePadding(u){let t=pu.stripAnsi(u);return[0,t.match(/\s*$/)[0].length,0,t.match(/^\s*/)[0].length]}toString(){let u=[];return this.rows.forEach(t=>{this.rowToString(t,u)}),u.filter(t=>!t.hidden).map(t=>t.text).join(`
`)}rowToString(u,t){return this.rasterize(u).forEach((e,r)=>{let n="";e.forEach((i,s)=>{let{width:F}=u[s],c=this.negatePadding(u[s]),E=i;if(c>pu.stringWidth(i)&&(E+=" ".repeat(c-pu.stringWidth(i))),u[s].align&&u[s].align!=="left"&&this.wrap){let L=_a[u[s].align];E=L(E,c),pu.stringWidth(E)<c&&(E+=" ".repeat((F||0)-pu.stringWidth(E)-1))}let B=u[s].padding||[0,0,0,0];B[ht]&&(n+=" ".repeat(B[ht])),n+=Un(u[s],E,"| "),n+=E,n+=Un(u[s],E," |"),B[_t]&&(n+=" ".repeat(B[_t])),r===0&&t.length>0&&(n=this.renderInline(n,t[t.length-1]))}),t.push({text:n.replace(/ +$/,""),span:u.span})}),t}renderInline(u,t){let e=u.match(/^ */),r=e?e[0].length:0,n=t.text,i=pu.stringWidth(n.trimRight());return t.span?this.wrap?r<i?u:(t.hidden=!0,n.trimRight()+" ".repeat(r-i)+u.trimLeft()):(t.hidden=!0,n+u):u}rasterize(u){let t=[],e=this.columnWidths(u),r;return u.forEach((n,i)=>{n.width=e[i],this.wrap?r=pu.wrap(n.text,this.negatePadding(n),{hard:!0}).split(`
`):r=n.text.split(`
`),n.border&&(r.unshift("."+"-".repeat(this.negatePadding(n)+2)+"."),r.push("'"+"-".repeat(this.negatePadding(n)+2)+"'")),n.padding&&(r.unshift(...new Array(n.padding[ha]||0).fill("")),r.push(...new Array(n.padding[Fa]||0).fill(""))),r.forEach((s,F)=>{t[F]||t.push([]);let c=t[F];for(let E=0;E<i;E++)c[E]===void 0&&c.push("");c.push(s)})}),t}negatePadding(u){let t=u.width||0;return u.padding&&(t-=(u.padding[ht]||0)+(u.padding[_t]||0)),u.border&&(t-=4),t}columnWidths(u){if(!this.wrap)return u.map(i=>i.width||pu.stringWidth(i.text));let t=u.length,e=this.width,r=u.map(i=>{if(i.width)return t--,e-=i.width,i.width}),n=t?Math.floor(e/t):0;return r.map((i,s)=>i===void 0?Math.max(n,Ca(u[s])):i)}};function Un(D,u,t){return D.border?/[.']-+[.']/.test(u)?"":u.trim().length!==0?t:"  ":""}function Ca(D){let u=D.padding||[],t=1+(u[ht]||0)+(u[_t]||0);return D.border?t+4:t}function Ea(){return typeof process=="object"&&process.stdout&&process.stdout.columns?process.stdout.columns:80}function da(D,u){D=D.trim();let t=pu.stringWidth(D);return t<u?" ".repeat(u-t)+D:D}function ga(D,u){D=D.trim();let t=pu.stringWidth(D);return t>=u?D:" ".repeat(u-t>>1)+D}var pu;function pa(D,u){return pu=u,new cD({width:D?.width||Ea(),wrap:D?.wrap})}var ma=Se(),Aa=ot(),Ta=Hn();function Ba(D){return pa(D,{stringWidth:ma,stripAnsi:Aa,wrap:Ta})}Gn.exports=Ba});var Yn=Y((K0,Kn)=>{var{dirname:Vn,resolve:zn}=require("path"),{readdirSync:ba,statSync:La}=require("fs");Kn.exports=function(D,u){let t=zn(".",D),e;for(La(t).isDirectory()||(t=Vn(t));;){if(e=u(t,ba(t)),e)return zn(t,e);if(t=Vn(e=t),e===t)break}}});var Zn=Y((Y0,Xn)=>{"use strict";Xn.exports=function(u){if(u===void 0&&(u=2),u>=Error.stackTraceLimit)throw new TypeError("getCallerFile(position) requires position be less then Error.stackTraceLimit but position was: `"+u+"` and Error.stackTraceLimit was: `"+Error.stackTraceLimit+"`");var t=Error.prepareStackTrace;Error.prepareStackTrace=function(r,n){return n};var e=new Error().stack;if(Error.prepareStackTrace=t,e!==null&&typeof e=="object")return e[u]?e[u].getFileName():void 0}});var ei=Y((X0,_D)=>{"use strict";var Jn=require("fs"),xa=require("path").join,ya=require("path").resolve,Qn=require("path").dirname,fD={extensions:["js","json","coffee"],recurse:!0,rename:function(D){return D},visit:function(D){return D}};function Ia(D,u,t){return new RegExp("\\.("+t.extensions.join("|")+")$","i").test(u)&&!(t.include&&t.include instanceof RegExp&&!t.include.test(D))&&!(t.include&&typeof t.include=="function"&&!t.include(D,u))&&!(t.exclude&&t.exclude instanceof RegExp&&t.exclude.test(D))&&!(t.exclude&&typeof t.exclude=="function"&&t.exclude(D,u))}function ui(D,u,t){var e={};u&&!t&&typeof u!="string"&&(t=u,u=null),t=t||{};for(var r in fD)typeof t[r]>"u"&&(t[r]=fD[r]);return u=u?ya(Qn(D.filename),u):Qn(D.filename),Jn.readdirSync(u).forEach(function(n){var i=xa(u,n),s,F,c;Jn.statSync(i).isDirectory()&&t.recurse?(s=ui(D,i,t),Object.keys(s).length&&(e[t.rename(n,i,n)]=s)):i!==D.filename&&Ia(i,n,t)&&(F=n.substring(0,n.lastIndexOf(".")),c=D.require(i),e[t.rename(F,i,n)]=t.visit(c,i,n)||c)}),e}_D.exports=ui;_D.exports.defaults=fD});var ND=Y((Z0,wi)=>{"use strict";var ti=require("assert"),Eu=class D extends Error{constructor(u){super(u||"yargs error"),this.name="YError",Error.captureStackTrace&&Error.captureStackTrace(this,D)}},We,hD=[];function Lt(D,u,t,e){We=e;let r={};if(Object.prototype.hasOwnProperty.call(D,"extends")){if(typeof D.extends!="string")return r;let n=/\.json|\..*rc$/.test(D.extends),i=null;if(n)i=function(s,F){return We.path.resolve(s,F)}(u,D.extends);else try{i=require.resolve(D.extends)}catch{return D}(function(s){if(hD.indexOf(s)>-1)throw new Eu(`Circular extended configurations: '${s}'.`)})(i),hD.push(i),r=n?JSON.parse(We.readFileSync(i,"utf8")):require(D.extends),delete D.extends,r=Lt(r,We.path.dirname(i),t,We)}return hD=[],t?Ri(r,D):Object.assign({},r,D)}function Ri(D,u){let t={};function e(r){return r&&typeof r=="object"&&!Array.isArray(r)}Object.assign(t,D);for(let r of Object.keys(u))e(u[r])&&e(t[r])?t[r]=Ri(D[r],u[r]):t[r]=u[r];return t}function xe(D){let u=D.replace(/\s{2,}/g," ").split(/\s+(?![^[]*]|[^<]*>)/),t=/\.*[\][<>]/g,e=u.shift();if(!e)throw new Error(`No command found in: ${D}`);let r={cmd:e.replace(t,""),demanded:[],optional:[]};return u.forEach((n,i)=>{let s=!1;n=n.replace(/\s/g,""),/\.+[\]>]/.test(n)&&i===u.length-1&&(s=!0),/^\[/.test(n)?r.optional.push({cmd:n.replace(t,"").split("|"),variadic:s}):r.demanded.push({cmd:n.replace(t,"").split("|"),variadic:s})}),r}var Ra=["first","second","third","fourth","fifth","sixth"];function M(D,u,t){try{let e=0,[r,n,i]=typeof D=="object"?[{demanded:[],optional:[]},D,u]:[xe(`cmd ${D}`),u,t],s=[].slice.call(n);for(;s.length&&s[s.length-1]===void 0;)s.pop();let F=i||s.length;if(F<r.demanded.length)throw new Eu(`Not enough arguments provided. Expected ${r.demanded.length} but received ${s.length}.`);let c=r.demanded.length+r.optional.length;if(F>c)throw new Eu(`Too many arguments provided. Expected max ${c} but received ${F}.`);r.demanded.forEach(E=>{let B=Di(s.shift());E.cmd.filter(L=>L===B||L==="*").length===0&&ri(B,E.cmd,e),e+=1}),r.optional.forEach(E=>{if(s.length===0)return;let B=Di(s.shift());E.cmd.filter(L=>L===B||L==="*").length===0&&ri(B,E.cmd,e),e+=1})}catch(e){console.warn(e.stack)}}function Di(D){return Array.isArray(D)?"array":D===null?"null":typeof D}function ri(D,u,t){throw new Eu(`Invalid ${Ra[t]||"manyith"} argument. Expected ${u.join(" or ")} but received ${D}.`)}function _u(D){return!!D&&!!D.then&&typeof D.then=="function"}function Pu(D,u,t,e){t.assert.notStrictEqual(D,u,e)}function ni(D,u){u.assert.strictEqual(typeof D,"string")}function bt(D){return Object.keys(D)}function Le(D={},u=()=>!0){let t={};return bt(D).forEach(e=>{u(e,D[e])&&(t[e]=D[e])}),t}function vi(){return process.versions.electron&&!process.defaultApp?0:1}function Oi(){return process.argv[vi()]}var va=Object.freeze({__proto__:null,hideBin:function(D){return D.slice(vi()+1)},getProcessArgvBin:Oi});function o(D,u,t,e){if(t==="a"&&!e)throw new TypeError("Private accessor was defined without a getter");if(typeof u=="function"?D!==u||!e:!u.has(D))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?e:t==="a"?e.call(D):e?e.value:u.get(D)}function N(D,u,t,e,r){if(e==="m")throw new TypeError("Private method is not writable");if(e==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof u=="function"?D!==u||!r:!u.has(D))throw new TypeError("Cannot write private member to an object whose class did not declare it");return e==="a"?r.call(D,t):r?r.value=t:u.set(D,t),t}var ID=class{constructor(u){this.globalMiddleware=[],this.frozens=[],this.yargs=u}addMiddleware(u,t,e=!0,r=!1){if(M("<array|function> [boolean] [boolean] [boolean]",[u,t,e],arguments.length),Array.isArray(u)){for(let n=0;n<u.length;n++){if(typeof u[n]!="function")throw Error("middleware must be a function");let i=u[n];i.applyBeforeValidation=t,i.global=e}Array.prototype.push.apply(this.globalMiddleware,u)}else if(typeof u=="function"){let n=u;n.applyBeforeValidation=t,n.global=e,n.mutates=r,this.globalMiddleware.push(u)}return this.yargs}addCoerceMiddleware(u,t){let e=this.yargs.getAliases();return this.globalMiddleware=this.globalMiddleware.filter(r=>{let n=[...e[t]||[],t];return!r.option||!n.includes(r.option)}),u.option=t,this.addMiddleware(u,!0,!0,!0)}getMiddleware(){return this.globalMiddleware}freeze(){this.frozens.push([...this.globalMiddleware])}unfreeze(){let u=this.frozens.pop();u!==void 0&&(this.globalMiddleware=u)}reset(){this.globalMiddleware=this.globalMiddleware.filter(u=>u.global)}};function Ue(D,u,t,e){return t.reduce((r,n)=>{if(n.applyBeforeValidation!==e)return r;if(n.mutates){if(n.applied)return r;n.applied=!0}if(_u(r))return r.then(i=>Promise.all([i,n(i,u)])).then(([i,s])=>Object.assign(i,s));{let i=n(r,u);return _u(i)?i.then(s=>Object.assign(r,s)):Object.assign(r,i)}},D)}function Ge(D,u,t=e=>{throw e}){try{let e=typeof D=="function"?D():D;return _u(e)?e.then(r=>u(r)):u(e)}catch(e){return t(e)}}var Ae=/(^\*)|(^\$0)/,RD=class{constructor(u,t,e,r){this.requireCache=new Set,this.handlers={},this.aliasMap={},this.frozens=[],this.shim=r,this.usage=u,this.globalMiddleware=e,this.validation=t}addDirectory(u,t,e,r){typeof(r=r||{}).recurse!="boolean"&&(r.recurse=!1),Array.isArray(r.extensions)||(r.extensions=["js"]);let n=typeof r.visit=="function"?r.visit:i=>i;r.visit=(i,s,F)=>{let c=n(i,s,F);if(c){if(this.requireCache.has(s))return c;this.requireCache.add(s),this.addHandler(c)}return c},this.shim.requireDirectory({require:t,filename:e},u,r)}addHandler(u,t,e,r,n,i){let s=[],F=function(c){return c?c.map(E=>(E.applyBeforeValidation=!1,E)):[]}(n);if(r=r||(()=>{}),Array.isArray(u))if(function(c){return c.every(E=>typeof E=="string")}(u))[u,...s]=u;else for(let c of u)this.addHandler(c);else{if(function(c){return typeof c=="object"&&!Array.isArray(c)}(u)){let c=Array.isArray(u.command)||typeof u.command=="string"?u.command:this.moduleName(u);return u.aliases&&(c=[].concat(c).concat(u.aliases)),void this.addHandler(c,this.extractDesc(u),u.builder,u.handler,u.middlewares,u.deprecated)}if(ii(e))return void this.addHandler([u].concat(s),t,e.builder,e.handler,e.middlewares,e.deprecated)}if(typeof u=="string"){let c=xe(u);s=s.map(L=>xe(L).cmd);let E=!1,B=[c.cmd].concat(s).filter(L=>!Ae.test(L)||(E=!0,!1));B.length===0&&E&&B.push("$0"),E&&(c.cmd=B[0],s=B.slice(1),u=u.replace(Ae,c.cmd)),s.forEach(L=>{this.aliasMap[L]=c.cmd}),t!==!1&&this.usage.command(u,t,E,s,i),this.handlers[c.cmd]={original:u,description:t,handler:r,builder:e||{},middlewares:F,deprecated:i,demanded:c.demanded,optional:c.optional},E&&(this.defaultCommand=this.handlers[c.cmd])}}getCommandHandlers(){return this.handlers}getCommands(){return Object.keys(this.handlers).concat(Object.keys(this.aliasMap))}hasDefaultCommand(){return!!this.defaultCommand}runCommand(u,t,e,r,n,i){let s=this.handlers[u]||this.handlers[this.aliasMap[u]]||this.defaultCommand,F=t.getInternalMethods().getContext(),c=F.commands.slice(),E=!u;u&&(F.commands.push(u),F.fullCommands.push(s.original));let B=this.applyBuilderUpdateUsageAndParse(E,s,t,e.aliases,c,r,n,i);return _u(B)?B.then(L=>this.applyMiddlewareAndGetResult(E,s,L.innerArgv,F,n,L.aliases,t)):this.applyMiddlewareAndGetResult(E,s,B.innerArgv,F,n,B.aliases,t)}applyBuilderUpdateUsageAndParse(u,t,e,r,n,i,s,F){let c=t.builder,E=e;if(vD(c)){e.getInternalMethods().getUsageInstance().freeze();let B=c(e.getInternalMethods().reset(r),F);if(_u(B))return B.then(L=>{var U;return E=(U=L)&&typeof U.getInternalMethods=="function"?L:e,this.parseAndUpdateUsage(u,t,E,n,i,s)})}else(function(B){return typeof B=="object"})(c)&&(e.getInternalMethods().getUsageInstance().freeze(),E=e.getInternalMethods().reset(r),Object.keys(t.builder).forEach(B=>{E.option(B,c[B])}));return this.parseAndUpdateUsage(u,t,E,n,i,s)}parseAndUpdateUsage(u,t,e,r,n,i){u&&e.getInternalMethods().getUsageInstance().unfreeze(!0),this.shouldUpdateUsage(e)&&e.getInternalMethods().getUsageInstance().usage(this.usageFromParentCommandsCommandHandler(r,t),t.description);let s=e.getInternalMethods().runYargsParserAndExecuteCommands(null,void 0,!0,n,i);return _u(s)?s.then(F=>({aliases:e.parsed.aliases,innerArgv:F})):{aliases:e.parsed.aliases,innerArgv:s}}shouldUpdateUsage(u){return!u.getInternalMethods().getUsageInstance().getUsageDisabled()&&u.getInternalMethods().getUsageInstance().getUsage().length===0}usageFromParentCommandsCommandHandler(u,t){let e=Ae.test(t.original)?t.original.replace(Ae,"").trim():t.original,r=u.filter(n=>!Ae.test(n));return r.push(e),`$0 ${r.join(" ")}`}handleValidationAndGetResult(u,t,e,r,n,i,s,F){if(!i.getInternalMethods().getHasOutput()){let c=i.getInternalMethods().runValidation(n,F,i.parsed.error,u);e=Ge(e,E=>(c(E),E))}if(t.handler&&!i.getInternalMethods().getHasOutput()){i.getInternalMethods().setHasOutput();let c=!!i.getOptions().configuration["populate--"];i.getInternalMethods().postProcess(e,c,!1,!1),e=Ge(e=Ue(e,i,s,!1),E=>{let B=t.handler(E);return _u(B)?B.then(()=>E):E}),u||i.getInternalMethods().getUsageInstance().cacheHelpMessage(),_u(e)&&!i.getInternalMethods().hasParseCallback()&&e.catch(E=>{try{i.getInternalMethods().getUsageInstance().fail(null,E)}catch{}})}return u||(r.commands.pop(),r.fullCommands.pop()),e}applyMiddlewareAndGetResult(u,t,e,r,n,i,s){let F={};if(n)return e;s.getInternalMethods().getHasOutput()||(F=this.populatePositionals(t,e,r,s));let c=this.globalMiddleware.getMiddleware().slice(0).concat(t.middlewares),E=Ue(e,s,c,!0);return _u(E)?E.then(B=>this.handleValidationAndGetResult(u,t,B,r,i,s,c,F)):this.handleValidationAndGetResult(u,t,E,r,i,s,c,F)}populatePositionals(u,t,e,r){t._=t._.slice(e.commands.length);let n=u.demanded.slice(0),i=u.optional.slice(0),s={};for(this.validation.positionalCount(n.length,t._.length);n.length;){let F=n.shift();this.populatePositional(F,t,s)}for(;i.length;){let F=i.shift();this.populatePositional(F,t,s)}return t._=e.commands.concat(t._.map(F=>""+F)),this.postProcessPositionals(t,s,this.cmdToParseOptions(u.original),r),s}populatePositional(u,t,e){let r=u.cmd[0];u.variadic?e[r]=t._.splice(0).map(String):t._.length&&(e[r]=[String(t._.shift())])}cmdToParseOptions(u){let t={array:[],default:{},alias:{},demand:{}},e=xe(u);return e.demanded.forEach(r=>{let[n,...i]=r.cmd;r.variadic&&(t.array.push(n),t.default[n]=[]),t.alias[n]=i,t.demand[n]=!0}),e.optional.forEach(r=>{let[n,...i]=r.cmd;r.variadic&&(t.array.push(n),t.default[n]=[]),t.alias[n]=i}),t}postProcessPositionals(u,t,e,r){let n=Object.assign({},r.getOptions());n.default=Object.assign(e.default,n.default);for(let c of Object.keys(e.alias))n.alias[c]=(n.alias[c]||[]).concat(e.alias[c]);n.array=n.array.concat(e.array),n.config={};let i=[];if(Object.keys(t).forEach(c=>{t[c].map(E=>{n.configuration["unknown-options-as-args"]&&(n.key[c]=!0),i.push(`--${c}`),i.push(E)})}),!i.length)return;let s=Object.assign({},n.configuration,{"populate--":!1}),F=this.shim.Parser.detailed(i,Object.assign({},n,{configuration:s}));if(F.error)r.getInternalMethods().getUsageInstance().fail(F.error.message,F.error);else{let c=Object.keys(t);Object.keys(t).forEach(E=>{c.push(...F.aliases[E])}),Object.keys(F.argv).forEach(E=>{c.includes(E)&&(t[E]||(t[E]=F.argv[E]),!this.isInConfigs(r,E)&&!this.isDefaulted(r,E)&&Object.prototype.hasOwnProperty.call(u,E)&&Object.prototype.hasOwnProperty.call(F.argv,E)&&(Array.isArray(u[E])||Array.isArray(F.argv[E]))?u[E]=[].concat(u[E],F.argv[E]):u[E]=F.argv[E])})}}isDefaulted(u,t){let{default:e}=u.getOptions();return Object.prototype.hasOwnProperty.call(e,t)||Object.prototype.hasOwnProperty.call(e,this.shim.Parser.camelCase(t))}isInConfigs(u,t){let{configObjects:e}=u.getOptions();return e.some(r=>Object.prototype.hasOwnProperty.call(r,t))||e.some(r=>Object.prototype.hasOwnProperty.call(r,this.shim.Parser.camelCase(t)))}runDefaultBuilderOn(u){if(!this.defaultCommand)return;if(this.shouldUpdateUsage(u)){let e=Ae.test(this.defaultCommand.original)?this.defaultCommand.original:this.defaultCommand.original.replace(/^[^[\]<>]*/,"$0 ");u.getInternalMethods().getUsageInstance().usage(e,this.defaultCommand.description)}let t=this.defaultCommand.builder;if(vD(t))return t(u,!0);ii(t)||Object.keys(t).forEach(e=>{u.option(e,t[e])})}moduleName(u){let t=function(e){if(typeof require>"u")return null;for(let r,n=0,i=Object.keys(require.cache);n<i.length;n++)if(r=require.cache[i[n]],r.exports===e)return r;return null}(u);if(!t)throw new Error(`No command name given for module: ${this.shim.inspect(u)}`);return this.commandFromFilename(t.filename)}commandFromFilename(u){return this.shim.path.basename(u,this.shim.path.extname(u))}extractDesc({describe:u,description:t,desc:e}){for(let r of[u,t,e]){if(typeof r=="string"||r===!1)return r;Pu(r,!0,this.shim)}return!1}freeze(){this.frozens.push({handlers:this.handlers,aliasMap:this.aliasMap,defaultCommand:this.defaultCommand})}unfreeze(){let u=this.frozens.pop();Pu(u,void 0,this.shim),{handlers:this.handlers,aliasMap:this.aliasMap,defaultCommand:this.defaultCommand}=u}reset(){return this.handlers={},this.aliasMap={},this.defaultCommand=void 0,this.requireCache=new Set,this}};function ii(D){return typeof D=="object"&&!!D.builder&&typeof D.handler=="function"}function vD(D){return typeof D=="function"}function He(D){typeof process<"u"&&[process.stdout,process.stderr].forEach(u=>{let t=u;t._handle&&t.isTTY&&typeof t._handle.setBlocking=="function"&&t._handle.setBlocking(D)})}function Oa(D){return typeof D=="boolean"}function wa(D,u){let t=u.y18n.__,e={},r=[];e.failFn=function(y){r.push(y)};let n=null,i=null,s=!0;e.showHelpOnFail=function(y=!0,W){let[j,Q]=typeof y=="string"?[!0,y]:[y,W];return D.getInternalMethods().isGlobalContext()&&(i=Q),n=Q,s=j,e};let F=!1;e.fail=function(y,W){let j=D.getInternalMethods().getLoggerInstance();if(!r.length){if(D.getExitProcess()&&He(!0),!F){F=!0,s&&(D.showHelp("error"),j.error()),(y||W)&&j.error(y||W);let Q=n||i;Q&&((y||W)&&j.error(""),j.error(Q))}if(W=W||new Eu(y),D.getExitProcess())return D.exit(1);if(D.getInternalMethods().hasParseCallback())return D.exit(1,W);throw W}for(let Q=r.length-1;Q>=0;--Q){let uu=r[Q];if(Oa(uu)){if(W)throw W;if(y)throw Error(y)}else uu(y,W,e)}};let c=[],E=!1;e.usage=(y,W)=>y===null?(E=!0,c=[],e):(E=!1,c.push([y,W||""]),e),e.getUsage=()=>c,e.getUsageDisabled=()=>E,e.getPositionalGroupName=()=>t("Positionals:");let B=[];e.example=(y,W)=>{B.push([y,W||""])};let L=[];e.command=function(y,W,j,Q,uu=!1){j&&(L=L.map(Z=>(Z[2]=!1,Z))),L.push([y,W||"",j,Q,uu])},e.getCommands=()=>L;let U={};e.describe=function(y,W){Array.isArray(y)?y.forEach(j=>{e.describe(j,W)}):typeof y=="object"?Object.keys(y).forEach(j=>{e.describe(j,y[j])}):U[y]=W},e.getDescriptions=()=>U;let b=[];e.epilog=y=>{b.push(y)};let m,h=!1;e.wrap=y=>{h=!0,m=y},e.getWrap=()=>u.getEnv("YARGS_DISABLE_WRAP")?null:(h||(m=function(){return u.process.stdColumns?Math.min(80,u.process.stdColumns):80}(),h=!0),m);let G="__yargsString__:";function q(y,W,j){let Q=0;return Array.isArray(y)||(y=Object.values(y).map(uu=>[uu])),y.forEach(uu=>{Q=Math.max(u.stringWidth(j?`${j} ${Ft(uu[0])}`:Ft(uu[0]))+si(uu[0]),Q)}),W&&(Q=Math.min(Q,parseInt((.5*W).toString(),10))),Q}let H;function J(y){return D.getOptions().hiddenOptions.indexOf(y)<0||D.parsed.argv[D.getOptions().showHiddenOpt]}function X(y,W){let j=`[${t("default:")} `;if(y===void 0&&!W)return null;if(W)j+=W;else switch(typeof y){case"string":j+=`"${y}"`;break;case"object":j+=JSON.stringify(y);break;default:j+=y}return`${j}]`}e.deferY18nLookup=y=>G+y,e.help=function(){if(H)return H;(function(){let _=D.getDemandedOptions(),d=D.getOptions();(Object.keys(d.alias)||[]).forEach(a=>{d.alias[a].forEach(l=>{U[l]&&e.describe(a,U[l]),l in _&&D.demandOption(a,_[l]),d.boolean.includes(l)&&D.boolean(a),d.count.includes(l)&&D.count(a),d.string.includes(l)&&D.string(a),d.normalize.includes(l)&&D.normalize(a),d.array.includes(l)&&D.array(a),d.number.includes(l)&&D.number(a)})})})();let y=D.customScriptName?D.$0:u.path.basename(D.$0),W=D.getDemandedOptions(),j=D.getDemandedCommands(),Q=D.getDeprecatedOptions(),uu=D.getGroups(),Z=D.getOptions(),hu=[];hu=hu.concat(Object.keys(U)),hu=hu.concat(Object.keys(W)),hu=hu.concat(Object.keys(j)),hu=hu.concat(Object.keys(Z.default)),hu=hu.filter(J),hu=Object.keys(hu.reduce((_,d)=>(d!=="_"&&(_[d]=!0),_),{}));let Ou=e.getWrap(),nu=u.cliui({width:Ou,wrap:!!Ou});if(!E){if(c.length)c.forEach(_=>{nu.div({text:`${_[0].replace(/\$0/g,y)}`}),_[1]&&nu.div({text:`${_[1]}`,padding:[1,0,0,0]})}),nu.div();else if(L.length){let _=null;_=j._?`${y} <${t("command")}>
`:`${y} [${t("command")}]
`,nu.div(`${_}`)}}if(L.length>1||L.length===1&&!L[0][2]){nu.div(t("Commands:"));let _=D.getInternalMethods().getContext(),d=_.commands.length?`${_.commands.join(" ")} `:"";D.getInternalMethods().getParserConfiguration()["sort-commands"]===!0&&(L=L.sort((l,p)=>l[0].localeCompare(p[0])));let a=y?`${y} `:"";L.forEach(l=>{let p=`${a}${d}${l[0].replace(/^\$0 ?/,"")}`;nu.span({text:p,padding:[0,2,0,2],width:q(L,Ou,`${y}${d}`)+4},{text:l[1]});let T=[];l[2]&&T.push(`[${t("default")}]`),l[3]&&l[3].length&&T.push(`[${t("aliases:")} ${l[3].join(", ")}]`),l[4]&&(typeof l[4]=="string"?T.push(`[${t("deprecated: %s",l[4])}]`):T.push(`[${t("deprecated")}]`)),T.length?nu.div({text:T.join(" "),padding:[0,0,0,2],align:"right"}):nu.div()}),nu.div()}let Gu=(Object.keys(Z.alias)||[]).concat(Object.keys(D.parsed.newAliases)||[]);hu=hu.filter(_=>!D.parsed.newAliases[_]&&Gu.every(d=>(Z.alias[d]||[]).indexOf(_)===-1));let qu=t("Options:");uu[qu]||(uu[qu]=[]),function(_,d,a,l){let p=[],T=null;Object.keys(a).forEach(O=>{p=p.concat(a[O])}),_.forEach(O=>{T=[O].concat(d[O]),T.some(x=>p.indexOf(x)!==-1)||a[l].push(O)})}(hu,Z.alias,uu,qu);let $u=_=>/^--/.test(Ft(_)),ou=Object.keys(uu).filter(_=>uu[_].length>0).map(_=>({groupName:_,normalizedKeys:uu[_].filter(J).map(d=>{if(Gu.includes(d))return d;for(let a,l=0;(a=Gu[l])!==void 0;l++)if((Z.alias[a]||[]).includes(d))return a;return d})})).filter(({normalizedKeys:_})=>_.length>0).map(({groupName:_,normalizedKeys:d})=>{let a=d.reduce((l,p)=>(l[p]=[p].concat(Z.alias[p]||[]).map(T=>_===e.getPositionalGroupName()?T:(/^[0-9]$/.test(T)?Z.boolean.includes(p)?"-":"--":T.length>1?"--":"-")+T).sort((T,O)=>$u(T)===$u(O)?0:$u(T)?1:-1).join(", "),l),{});return{groupName:_,normalizedKeys:d,switches:a}});if(ou.filter(({groupName:_})=>_!==e.getPositionalGroupName()).some(({normalizedKeys:_,switches:d})=>!_.every(a=>$u(d[a])))&&ou.filter(({groupName:_})=>_!==e.getPositionalGroupName()).forEach(({normalizedKeys:_,switches:d})=>{_.forEach(a=>{var l,p;$u(d[a])&&(d[a]=(l=d[a],p=4,SD(l)?{text:l.text,indentation:l.indentation+p}:{text:l,indentation:p}))})}),ou.forEach(({groupName:_,normalizedKeys:d,switches:a})=>{nu.div(_),d.forEach(l=>{let p=a[l],T=U[l]||"",O=null;T.includes(G)&&(T=t(T.substring(16))),Z.boolean.includes(l)&&(O=`[${t("boolean")}]`),Z.count.includes(l)&&(O=`[${t("count")}]`),Z.string.includes(l)&&(O=`[${t("string")}]`),Z.normalize.includes(l)&&(O=`[${t("string")}]`),Z.array.includes(l)&&(O=`[${t("array")}]`),Z.number.includes(l)&&(O=`[${t("number")}]`);let x=[l in Q?(v=Q[l],typeof v=="string"?`[${t("deprecated: %s",v)}]`:`[${t("deprecated")}]`):null,O,l in W?`[${t("required")}]`:null,Z.choices&&Z.choices[l]?`[${t("choices:")} ${e.stringifiedValues(Z.choices[l])}]`:null,X(Z.default[l],Z.defaultDescription[l])].filter(Boolean).join(" ");var v;nu.span({text:Ft(p),padding:[0,2,0,2+si(p)],width:q(a,Ou)+4},T);let S=D.getInternalMethods().getUsageConfiguration()["hide-types"]===!0;x&&!S?nu.div({text:x,padding:[0,0,0,2],align:"right"}):nu.div()}),nu.div()}),B.length&&(nu.div(t("Examples:")),B.forEach(_=>{_[0]=_[0].replace(/\$0/g,y)}),B.forEach(_=>{_[1]===""?nu.div({text:_[0],padding:[0,2,0,2]}):nu.div({text:_[0],padding:[0,2,0,2],width:q(B,Ou)+4},{text:_[1]})}),nu.div()),b.length>0){let _=b.map(d=>d.replace(/\$0/g,y)).join(`
`);nu.div(`${_}
`)}return nu.toString().replace(/\s*$/,"")},e.cacheHelpMessage=function(){H=this.help()},e.clearCachedHelpMessage=function(){H=void 0},e.hasCachedHelpMessage=function(){return!!H},e.showHelp=y=>{let W=D.getInternalMethods().getLoggerInstance();y||(y="error"),(typeof y=="function"?y:W[y])(e.help())},e.functionDescription=y=>["(",y.name?u.Parser.decamelize(y.name,"-"):t("generated-value"),")"].join(""),e.stringifiedValues=function(y,W){let j="",Q=W||", ",uu=[].concat(y);return y&&uu.length&&uu.forEach(Z=>{j.length&&(j+=Q),j+=JSON.stringify(Z)}),j};let Bu=null;e.version=y=>{Bu=y},e.showVersion=y=>{let W=D.getInternalMethods().getLoggerInstance();y||(y="error"),(typeof y=="function"?y:W[y])(Bu)},e.reset=function(y){return n=null,F=!1,c=[],E=!1,b=[],B=[],L=[],U=Le(U,W=>!y[W]),e};let ru=[];return e.freeze=function(){ru.push({failMessage:n,failureOutput:F,usages:c,usageDisabled:E,epilogs:b,examples:B,commands:L,descriptions:U})},e.unfreeze=function(y=!1){let W=ru.pop();W&&(y?(U={...W.descriptions,...U},L=[...W.commands,...L],c=[...W.usages,...c],B=[...W.examples,...B],b=[...W.epilogs,...b]):{failMessage:n,failureOutput:F,usages:c,usageDisabled:E,epilogs:b,examples:B,commands:L,descriptions:U}=W)},e}function SD(D){return typeof D=="object"}function si(D){return SD(D)?D.indentation:0}function Ft(D){return SD(D)?D.text:D}var OD=class{constructor(u,t,e,r){var n,i,s;this.yargs=u,this.usage=t,this.command=e,this.shim=r,this.completionKey="get-yargs-completions",this.aliases=null,this.customCompletionFunction=null,this.indexAfterLastReset=0,this.zshShell=(s=((n=this.shim.getEnv("SHELL"))===null||n===void 0?void 0:n.includes("zsh"))||((i=this.shim.getEnv("ZSH_NAME"))===null||i===void 0?void 0:i.includes("zsh")))!==null&&s!==void 0&&s}defaultCompletion(u,t,e,r){let n=this.command.getCommandHandlers();for(let s=0,F=u.length;s<F;++s)if(n[u[s]]&&n[u[s]].builder){let c=n[u[s]].builder;if(vD(c)){this.indexAfterLastReset=s+1;let E=this.yargs.getInternalMethods().reset();return c(E,!0),E.argv}}let i=[];this.commandCompletions(i,u,e),this.optionCompletions(i,u,t,e),this.choicesFromOptionsCompletions(i,u,t,e),this.choicesFromPositionalsCompletions(i,u,t,e),r(null,i)}commandCompletions(u,t,e){let r=this.yargs.getInternalMethods().getContext().commands;e.match(/^-/)||r[r.length-1]===e||this.previousArgHasChoices(t)||this.usage.getCommands().forEach(n=>{let i=xe(n[0]).cmd;if(t.indexOf(i)===-1)if(this.zshShell){let s=n[1]||"";u.push(i.replace(/:/g,"\\:")+":"+s)}else u.push(i)})}optionCompletions(u,t,e,r){if((r.match(/^-/)||r===""&&u.length===0)&&!this.previousArgHasChoices(t)){let n=this.yargs.getOptions(),i=this.yargs.getGroups()[this.usage.getPositionalGroupName()]||[];Object.keys(n.key).forEach(s=>{let F=!!n.configuration["boolean-negation"]&&n.boolean.includes(s);i.includes(s)||n.hiddenOptions.includes(s)||this.argsContainKey(t,s,F)||this.completeOptionKey(s,u,r,F&&!!n.default[s])})}}choicesFromOptionsCompletions(u,t,e,r){if(this.previousArgHasChoices(t)){let n=this.getPreviousArgChoices(t);n&&n.length>0&&u.push(...n.map(i=>i.replace(/:/g,"\\:")))}}choicesFromPositionalsCompletions(u,t,e,r){if(r===""&&u.length>0&&this.previousArgHasChoices(t))return;let n=this.yargs.getGroups()[this.usage.getPositionalGroupName()]||[],i=Math.max(this.indexAfterLastReset,this.yargs.getInternalMethods().getContext().commands.length+1),s=n[e._.length-i-1];if(!s)return;let F=this.yargs.getOptions().choices[s]||[];for(let c of F)c.startsWith(r)&&u.push(c.replace(/:/g,"\\:"))}getPreviousArgChoices(u){if(u.length<1)return;let t=u[u.length-1],e="";if(!t.startsWith("-")&&u.length>1&&(e=t,t=u[u.length-2]),!t.startsWith("-"))return;let r=t.replace(/^-+/,""),n=this.yargs.getOptions(),i=[r,...this.yargs.getAliases()[r]||[]],s;for(let F of i)if(Object.prototype.hasOwnProperty.call(n.key,F)&&Array.isArray(n.choices[F])){s=n.choices[F];break}return s?s.filter(F=>!e||F.startsWith(e)):void 0}previousArgHasChoices(u){let t=this.getPreviousArgChoices(u);return t!==void 0&&t.length>0}argsContainKey(u,t,e){let r=n=>u.indexOf((/^[^0-9]$/.test(n)?"-":"--")+n)!==-1;if(r(t)||e&&r(`no-${t}`))return!0;if(this.aliases){for(let n of this.aliases[t])if(r(n))return!0}return!1}completeOptionKey(u,t,e,r){var n,i,s,F;let c=u;if(this.zshShell){let B=this.usage.getDescriptions(),L=(i=(n=this==null?void 0:this.aliases)===null||n===void 0?void 0:n[u])===null||i===void 0?void 0:i.find(m=>{let h=B[m];return typeof h=="string"&&h.length>0}),U=L?B[L]:void 0,b=(F=(s=B[u])!==null&&s!==void 0?s:U)!==null&&F!==void 0?F:"";c=`${u.replace(/:/g,"\\:")}:${b.replace("__yargsString__:","").replace(/(\r\n|\n|\r)/gm," ")}`}let E=!/^--/.test(e)&&(B=>/^[^0-9]$/.test(B))(u)?"-":"--";t.push(E+c),r&&t.push(E+"no-"+c)}customCompletion(u,t,e,r){if(Pu(this.customCompletionFunction,null,this.shim),this.customCompletionFunction.length<3){let n=this.customCompletionFunction(e,t);return _u(n)?n.then(i=>{this.shim.process.nextTick(()=>{r(null,i)})}).catch(i=>{this.shim.process.nextTick(()=>{r(i,void 0)})}):r(null,n)}return function(n){return n.length>3}(this.customCompletionFunction)?this.customCompletionFunction(e,t,(n=r)=>this.defaultCompletion(u,t,e,n),n=>{r(null,n)}):this.customCompletionFunction(e,t,n=>{r(null,n)})}getCompletion(u,t){let e=u.length?u[u.length-1]:"",r=this.yargs.parse(u,!0),n=this.customCompletionFunction?i=>this.customCompletion(u,i,e,t):i=>this.defaultCompletion(u,i,e,t);return _u(r)?r.then(n):n(r)}generateCompletionScript(u,t){let e=this.zshShell?`#compdef {{app_name}}
###-begin-{{app_name}}-completions-###
#
# yargs command completion script
#
# Installation: {{app_path}} {{completion_command}} >> ~/.zshrc
#    or {{app_path}} {{completion_command}} >> ~/.zprofile on OSX.
#
_{{app_name}}_yargs_completions()
{
  local reply
  local si=$IFS
  IFS=$'
' reply=($(COMP_CWORD="$((CURRENT-1))" COMP_LINE="$BUFFER" COMP_POINT="$CURSOR" {{app_path}} --get-yargs-completions "\${words[@]}"))
  IFS=$si
  _describe 'values' reply
}
compdef _{{app_name}}_yargs_completions {{app_name}}
###-end-{{app_name}}-completions-###
`:`###-begin-{{app_name}}-completions-###
#
# yargs command completion script
#
# Installation: {{app_path}} {{completion_command}} >> ~/.bashrc
#    or {{app_path}} {{completion_command}} >> ~/.bash_profile on OSX.
#
_{{app_name}}_yargs_completions()
{
    local cur_word args type_list

    cur_word="\${COMP_WORDS[COMP_CWORD]}"
    args=("\${COMP_WORDS[@]}")

    # ask yargs to generate completions.
    type_list=$({{app_path}} --get-yargs-completions "\${args[@]}")

    COMPREPLY=( $(compgen -W "\${type_list}" -- \${cur_word}) )

    # if no match was found, fall back to filename completion
    if [ \${#COMPREPLY[@]} -eq 0 ]; then
      COMPREPLY=()
    fi

    return 0
}
complete -o bashdefault -o default -F _{{app_name}}_yargs_completions {{app_name}}
###-end-{{app_name}}-completions-###
`,r=this.shim.path.basename(u);return u.match(/\.js$/)&&(u=`./${u}`),e=e.replace(/{{app_name}}/g,r),e=e.replace(/{{completion_command}}/g,t),e.replace(/{{app_path}}/g,u)}registerFunction(u){this.customCompletionFunction=u}setParsed(u){this.aliases=u.aliases}};function Sa(D,u){if(D.length===0)return u.length;if(u.length===0)return D.length;let t=[],e,r;for(e=0;e<=u.length;e++)t[e]=[e];for(r=0;r<=D.length;r++)t[0][r]=r;for(e=1;e<=u.length;e++)for(r=1;r<=D.length;r++)u.charAt(e-1)===D.charAt(r-1)?t[e][r]=t[e-1][r-1]:e>1&&r>1&&u.charAt(e-2)===D.charAt(r-1)&&u.charAt(e-1)===D.charAt(r-2)?t[e][r]=t[e-2][r-2]+1:t[e][r]=Math.min(t[e-1][r-1]+1,Math.min(t[e][r-1]+1,t[e-1][r]+1));return t[u.length][D.length]}var oi=["$0","--","_"],fu,ee,$e,yu,mu,Ct,Yu,te,Et,Iu,dt,Ru,ku,Au,vu,gt,Te,Cu,$,pt,mt,Tu,De,Be,re,Xu,At,V,ne,ie,se,K,Tt,Hu,cu,ai=Symbol("copyDoubleDash"),li=Symbol("copyDoubleDash"),FD=Symbol("deleteFromParserHintObject"),ci=Symbol("emitWarning"),fi=Symbol("freeze"),_i=Symbol("getDollarZero"),oe=Symbol("getParserConfiguration"),hi=Symbol("getUsageConfiguration"),CD=Symbol("guessLocale"),Fi=Symbol("guessVersion"),Ci=Symbol("parsePositionalNumbers"),ED=Symbol("pkgUp"),Zu=Symbol("populateParserHintArray"),be=Symbol("populateParserHintSingleValueDictionary"),dD=Symbol("populateParserHintArrayDictionary"),gD=Symbol("populateParserHintDictionary"),pD=Symbol("sanitizeKey"),mD=Symbol("setKey"),AD=Symbol("unfreeze"),Ei=Symbol("validateAsync"),di=Symbol("getCommandInstance"),gi=Symbol("getContext"),pi=Symbol("getHasOutput"),mi=Symbol("getLoggerInstance"),Ai=Symbol("getParseContext"),Ti=Symbol("getUsageInstance"),Bi=Symbol("getValidationInstance"),Bt=Symbol("hasParseCallback"),bi=Symbol("isGlobalContext"),ae=Symbol("postProcess"),Li=Symbol("rebase"),TD=Symbol("reset"),ke=Symbol("runYargsParserAndExecuteCommands"),BD=Symbol("runValidation"),xi=Symbol("setHasOutput"),le=Symbol("kTrackManuallySetKeys"),wD=class{constructor(u=[],t,e,r){this.customScriptName=!1,this.parsed=!1,fu.set(this,void 0),ee.set(this,void 0),$e.set(this,{commands:[],fullCommands:[]}),yu.set(this,null),mu.set(this,null),Ct.set(this,"show-hidden"),Yu.set(this,null),te.set(this,!0),Et.set(this,{}),Iu.set(this,!0),dt.set(this,[]),Ru.set(this,void 0),ku.set(this,{}),Au.set(this,!1),vu.set(this,null),gt.set(this,!0),Te.set(this,void 0),Cu.set(this,""),$.set(this,void 0),pt.set(this,void 0),mt.set(this,{}),Tu.set(this,null),De.set(this,null),Be.set(this,{}),re.set(this,{}),Xu.set(this,void 0),At.set(this,!1),V.set(this,void 0),ne.set(this,!1),ie.set(this,!1),se.set(this,!1),K.set(this,void 0),Tt.set(this,{}),Hu.set(this,null),cu.set(this,void 0),N(this,V,r,"f"),N(this,Xu,u,"f"),N(this,ee,t,"f"),N(this,pt,e,"f"),N(this,Ru,new ID(this),"f"),this.$0=this[_i](),this[TD](),N(this,fu,o(this,fu,"f"),"f"),N(this,K,o(this,K,"f"),"f"),N(this,cu,o(this,cu,"f"),"f"),N(this,$,o(this,$,"f"),"f"),o(this,$,"f").showHiddenOpt=o(this,Ct,"f"),N(this,Te,this[li](),"f")}addHelpOpt(u,t){return M("[string|boolean] [string]",[u,t],arguments.length),o(this,vu,"f")&&(this[FD](o(this,vu,"f")),N(this,vu,null,"f")),u===!1&&t===void 0||(N(this,vu,typeof u=="string"?u:"help","f"),this.boolean(o(this,vu,"f")),this.describe(o(this,vu,"f"),t||o(this,K,"f").deferY18nLookup("Show help"))),this}help(u,t){return this.addHelpOpt(u,t)}addShowHiddenOpt(u,t){if(M("[string|boolean] [string]",[u,t],arguments.length),u===!1&&t===void 0)return this;let e=typeof u=="string"?u:o(this,Ct,"f");return this.boolean(e),this.describe(e,t||o(this,K,"f").deferY18nLookup("Show hidden options")),o(this,$,"f").showHiddenOpt=e,this}showHidden(u,t){return this.addShowHiddenOpt(u,t)}alias(u,t){return M("<object|string|array> [string|array]",[u,t],arguments.length),this[dD](this.alias.bind(this),"alias",u,t),this}array(u){return M("<array|string>",[u],arguments.length),this[Zu]("array",u),this[le](u),this}boolean(u){return M("<array|string>",[u],arguments.length),this[Zu]("boolean",u),this[le](u),this}check(u,t){return M("<function> [boolean]",[u,t],arguments.length),this.middleware((e,r)=>Ge(()=>u(e,r.getOptions()),n=>(n?(typeof n=="string"||n instanceof Error)&&o(this,K,"f").fail(n.toString(),n):o(this,K,"f").fail(o(this,V,"f").y18n.__("Argument check failed: %s",u.toString())),e),n=>(o(this,K,"f").fail(n.message?n.message:n.toString(),n),e)),!1,t),this}choices(u,t){return M("<object|string|array> [string|array]",[u,t],arguments.length),this[dD](this.choices.bind(this),"choices",u,t),this}coerce(u,t){if(M("<object|string|array> [function]",[u,t],arguments.length),Array.isArray(u)){if(!t)throw new Eu("coerce callback must be provided");for(let e of u)this.coerce(e,t);return this}if(typeof u=="object"){for(let e of Object.keys(u))this.coerce(e,u[e]);return this}if(!t)throw new Eu("coerce callback must be provided");return o(this,$,"f").key[u]=!0,o(this,Ru,"f").addCoerceMiddleware((e,r)=>{let n;return Object.prototype.hasOwnProperty.call(e,u)?Ge(()=>(n=r.getAliases(),t(e[u])),i=>{e[u]=i;let s=r.getInternalMethods().getParserConfiguration()["strip-aliased"];if(n[u]&&s!==!0)for(let F of n[u])e[F]=i;return e},i=>{throw new Eu(i.message)}):e},u),this}conflicts(u,t){return M("<string|object> [string|array]",[u,t],arguments.length),o(this,cu,"f").conflicts(u,t),this}config(u="config",t,e){return M("[object|string] [string|function] [function]",[u,t,e],arguments.length),typeof u!="object"||Array.isArray(u)?(typeof t=="function"&&(e=t,t=void 0),this.describe(u,t||o(this,K,"f").deferY18nLookup("Path to JSON config file")),(Array.isArray(u)?u:[u]).forEach(r=>{o(this,$,"f").config[r]=e||!0}),this):(u=Lt(u,o(this,ee,"f"),this[oe]()["deep-merge-config"]||!1,o(this,V,"f")),o(this,$,"f").configObjects=(o(this,$,"f").configObjects||[]).concat(u),this)}completion(u,t,e){return M("[string] [string|boolean|function] [function]",[u,t,e],arguments.length),typeof t=="function"&&(e=t,t=void 0),N(this,mu,u||o(this,mu,"f")||"completion","f"),t||t===!1||(t="generate completion script"),this.command(o(this,mu,"f"),t),e&&o(this,yu,"f").registerFunction(e),this}command(u,t,e,r,n,i){return M("<string|array|object> [string|boolean] [function|object] [function] [array] [boolean|string]",[u,t,e,r,n,i],arguments.length),o(this,fu,"f").addHandler(u,t,e,r,n,i),this}commands(u,t,e,r,n,i){return this.command(u,t,e,r,n,i)}commandDir(u,t){M("<string> [object]",[u,t],arguments.length);let e=o(this,pt,"f")||o(this,V,"f").require;return o(this,fu,"f").addDirectory(u,e,o(this,V,"f").getCallerFile(),t),this}count(u){return M("<array|string>",[u],arguments.length),this[Zu]("count",u),this[le](u),this}default(u,t,e){return M("<object|string|array> [*] [string]",[u,t,e],arguments.length),e&&(ni(u,o(this,V,"f")),o(this,$,"f").defaultDescription[u]=e),typeof t=="function"&&(ni(u,o(this,V,"f")),o(this,$,"f").defaultDescription[u]||(o(this,$,"f").defaultDescription[u]=o(this,K,"f").functionDescription(t)),t=t.call()),this[be](this.default.bind(this),"default",u,t),this}defaults(u,t,e){return this.default(u,t,e)}demandCommand(u=1,t,e,r){return M("[number] [number|string] [string|null|undefined] [string|null|undefined]",[u,t,e,r],arguments.length),typeof t!="number"&&(e=t,t=1/0),this.global("_",!1),o(this,$,"f").demandedCommands._={min:u,max:t,minMsg:e,maxMsg:r},this}demand(u,t,e){return Array.isArray(t)?(t.forEach(r=>{Pu(e,!0,o(this,V,"f")),this.demandOption(r,e)}),t=1/0):typeof t!="number"&&(e=t,t=1/0),typeof u=="number"?(Pu(e,!0,o(this,V,"f")),this.demandCommand(u,t,e,e)):Array.isArray(u)?u.forEach(r=>{Pu(e,!0,o(this,V,"f")),this.demandOption(r,e)}):typeof e=="string"?this.demandOption(u,e):e!==!0&&e!==void 0||this.demandOption(u),this}demandOption(u,t){return M("<object|string|array> [string]",[u,t],arguments.length),this[be](this.demandOption.bind(this),"demandedOptions",u,t),this}deprecateOption(u,t){return M("<string> [string|boolean]",[u,t],arguments.length),o(this,$,"f").deprecatedOptions[u]=t,this}describe(u,t){return M("<object|string|array> [string]",[u,t],arguments.length),this[mD](u,!0),o(this,K,"f").describe(u,t),this}detectLocale(u){return M("<boolean>",[u],arguments.length),N(this,te,u,"f"),this}env(u){return M("[string|boolean]",[u],arguments.length),u===!1?delete o(this,$,"f").envPrefix:o(this,$,"f").envPrefix=u||"",this}epilogue(u){return M("<string>",[u],arguments.length),o(this,K,"f").epilog(u),this}epilog(u){return this.epilogue(u)}example(u,t){return M("<string|array> [string]",[u,t],arguments.length),Array.isArray(u)?u.forEach(e=>this.example(...e)):o(this,K,"f").example(u,t),this}exit(u,t){N(this,Au,!0,"f"),N(this,Yu,t,"f"),o(this,Iu,"f")&&o(this,V,"f").process.exit(u)}exitProcess(u=!0){return M("[boolean]",[u],arguments.length),N(this,Iu,u,"f"),this}fail(u){if(M("<function|boolean>",[u],arguments.length),typeof u=="boolean"&&u!==!1)throw new Eu("Invalid first argument. Expected function or boolean 'false'");return o(this,K,"f").failFn(u),this}getAliases(){return this.parsed?this.parsed.aliases:{}}async getCompletion(u,t){return M("<array> [function]",[u,t],arguments.length),t?o(this,yu,"f").getCompletion(u,t):new Promise((e,r)=>{o(this,yu,"f").getCompletion(u,(n,i)=>{n?r(n):e(i)})})}getDemandedOptions(){return M([],0),o(this,$,"f").demandedOptions}getDemandedCommands(){return M([],0),o(this,$,"f").demandedCommands}getDeprecatedOptions(){return M([],0),o(this,$,"f").deprecatedOptions}getDetectLocale(){return o(this,te,"f")}getExitProcess(){return o(this,Iu,"f")}getGroups(){return Object.assign({},o(this,ku,"f"),o(this,re,"f"))}getHelp(){if(N(this,Au,!0,"f"),!o(this,K,"f").hasCachedHelpMessage()){if(!this.parsed){let t=this[ke](o(this,Xu,"f"),void 0,void 0,0,!0);if(_u(t))return t.then(()=>o(this,K,"f").help())}let u=o(this,fu,"f").runDefaultBuilderOn(this);if(_u(u))return u.then(()=>o(this,K,"f").help())}return Promise.resolve(o(this,K,"f").help())}getOptions(){return o(this,$,"f")}getStrict(){return o(this,ne,"f")}getStrictCommands(){return o(this,ie,"f")}getStrictOptions(){return o(this,se,"f")}global(u,t){return M("<string|array> [boolean]",[u,t],arguments.length),u=[].concat(u),t!==!1?o(this,$,"f").local=o(this,$,"f").local.filter(e=>u.indexOf(e)===-1):u.forEach(e=>{o(this,$,"f").local.includes(e)||o(this,$,"f").local.push(e)}),this}group(u,t){M("<string|array> <string>",[u,t],arguments.length);let e=o(this,re,"f")[t]||o(this,ku,"f")[t];o(this,re,"f")[t]&&delete o(this,re,"f")[t];let r={};return o(this,ku,"f")[t]=(e||[]).concat(u).filter(n=>!r[n]&&(r[n]=!0)),this}hide(u){return M("<string>",[u],arguments.length),o(this,$,"f").hiddenOptions.push(u),this}implies(u,t){return M("<string|object> [number|string|array]",[u,t],arguments.length),o(this,cu,"f").implies(u,t),this}locale(u){return M("[string]",[u],arguments.length),u===void 0?(this[CD](),o(this,V,"f").y18n.getLocale()):(N(this,te,!1,"f"),o(this,V,"f").y18n.setLocale(u),this)}middleware(u,t,e){return o(this,Ru,"f").addMiddleware(u,!!t,e)}nargs(u,t){return M("<string|object|array> [number]",[u,t],arguments.length),this[be](this.nargs.bind(this),"narg",u,t),this}normalize(u){return M("<array|string>",[u],arguments.length),this[Zu]("normalize",u),this}number(u){return M("<array|string>",[u],arguments.length),this[Zu]("number",u),this[le](u),this}option(u,t){if(M("<string|object> [object]",[u,t],arguments.length),typeof u=="object")Object.keys(u).forEach(e=>{this.options(e,u[e])});else{typeof t!="object"&&(t={}),this[le](u),!o(this,Hu,"f")||u!=="version"&&t?.alias!=="version"||this[ci](['"version" is a reserved word.',"Please do one of the following:",'- Disable version with `yargs.version(false)` if using "version" as an option',"- Use the built-in `yargs.version` method instead (if applicable)","- Use a different option key","https://yargs.js.org/docs/#api-reference-version"].join(`
`),void 0,"versionWarning"),o(this,$,"f").key[u]=!0,t.alias&&this.alias(u,t.alias);let e=t.deprecate||t.deprecated;e&&this.deprecateOption(u,e);let r=t.demand||t.required||t.require;r&&this.demand(u,r),t.demandOption&&this.demandOption(u,typeof t.demandOption=="string"?t.demandOption:void 0),t.conflicts&&this.conflicts(u,t.conflicts),"default"in t&&this.default(u,t.default),t.implies!==void 0&&this.implies(u,t.implies),t.nargs!==void 0&&this.nargs(u,t.nargs),t.config&&this.config(u,t.configParser),t.normalize&&this.normalize(u),t.choices&&this.choices(u,t.choices),t.coerce&&this.coerce(u,t.coerce),t.group&&this.group(u,t.group),(t.boolean||t.type==="boolean")&&(this.boolean(u),t.alias&&this.boolean(t.alias)),(t.array||t.type==="array")&&(this.array(u),t.alias&&this.array(t.alias)),(t.number||t.type==="number")&&(this.number(u),t.alias&&this.number(t.alias)),(t.string||t.type==="string")&&(this.string(u),t.alias&&this.string(t.alias)),(t.count||t.type==="count")&&this.count(u),typeof t.global=="boolean"&&this.global(u,t.global),t.defaultDescription&&(o(this,$,"f").defaultDescription[u]=t.defaultDescription),t.skipValidation&&this.skipValidation(u);let n=t.describe||t.description||t.desc,i=o(this,K,"f").getDescriptions();Object.prototype.hasOwnProperty.call(i,u)&&typeof n!="string"||this.describe(u,n),t.hidden&&this.hide(u),t.requiresArg&&this.requiresArg(u)}return this}options(u,t){return this.option(u,t)}parse(u,t,e){M("[string|array] [function|boolean|object] [function]",[u,t,e],arguments.length),this[fi](),u===void 0&&(u=o(this,Xu,"f")),typeof t=="object"&&(N(this,De,t,"f"),t=e),typeof t=="function"&&(N(this,Tu,t,"f"),t=!1),t||N(this,Xu,u,"f"),o(this,Tu,"f")&&N(this,Iu,!1,"f");let r=this[ke](u,!!t),n=this.parsed;return o(this,yu,"f").setParsed(this.parsed),_u(r)?r.then(i=>(o(this,Tu,"f")&&o(this,Tu,"f").call(this,o(this,Yu,"f"),i,o(this,Cu,"f")),i)).catch(i=>{throw o(this,Tu,"f")&&o(this,Tu,"f")(i,this.parsed.argv,o(this,Cu,"f")),i}).finally(()=>{this[AD](),this.parsed=n}):(o(this,Tu,"f")&&o(this,Tu,"f").call(this,o(this,Yu,"f"),r,o(this,Cu,"f")),this[AD](),this.parsed=n,r)}parseAsync(u,t,e){let r=this.parse(u,t,e);return _u(r)?r:Promise.resolve(r)}parseSync(u,t,e){let r=this.parse(u,t,e);if(_u(r))throw new Eu(".parseSync() must not be used with asynchronous builders, handlers, or middleware");return r}parserConfiguration(u){return M("<object>",[u],arguments.length),N(this,mt,u,"f"),this}pkgConf(u,t){M("<string> [string]",[u,t],arguments.length);let e=null,r=this[ED](t||o(this,ee,"f"));return r[u]&&typeof r[u]=="object"&&(e=Lt(r[u],t||o(this,ee,"f"),this[oe]()["deep-merge-config"]||!1,o(this,V,"f")),o(this,$,"f").configObjects=(o(this,$,"f").configObjects||[]).concat(e)),this}positional(u,t){M("<string> <object>",[u,t],arguments.length);let e=["default","defaultDescription","implies","normalize","choices","conflicts","coerce","type","describe","desc","description","alias"];t=Le(t,(i,s)=>!(i==="type"&&!["string","number","boolean"].includes(s))&&e.includes(i));let r=o(this,$e,"f").fullCommands[o(this,$e,"f").fullCommands.length-1],n=r?o(this,fu,"f").cmdToParseOptions(r):{array:[],alias:{},default:{},demand:{}};return bt(n).forEach(i=>{let s=n[i];Array.isArray(s)?s.indexOf(u)!==-1&&(t[i]=!0):s[u]&&!(i in t)&&(t[i]=s[u])}),this.group(u,o(this,K,"f").getPositionalGroupName()),this.option(u,t)}recommendCommands(u=!0){return M("[boolean]",[u],arguments.length),N(this,At,u,"f"),this}required(u,t,e){return this.demand(u,t,e)}require(u,t,e){return this.demand(u,t,e)}requiresArg(u){return M("<array|string|object> [number]",[u],arguments.length),typeof u=="string"&&o(this,$,"f").narg[u]||this[be](this.requiresArg.bind(this),"narg",u,NaN),this}showCompletionScript(u,t){return M("[string] [string]",[u,t],arguments.length),u=u||this.$0,o(this,Te,"f").log(o(this,yu,"f").generateCompletionScript(u,t||o(this,mu,"f")||"completion")),this}showHelp(u){if(M("[string|function]",[u],arguments.length),N(this,Au,!0,"f"),!o(this,K,"f").hasCachedHelpMessage()){if(!this.parsed){let e=this[ke](o(this,Xu,"f"),void 0,void 0,0,!0);if(_u(e))return e.then(()=>{o(this,K,"f").showHelp(u)}),this}let t=o(this,fu,"f").runDefaultBuilderOn(this);if(_u(t))return t.then(()=>{o(this,K,"f").showHelp(u)}),this}return o(this,K,"f").showHelp(u),this}scriptName(u){return this.customScriptName=!0,this.$0=u,this}showHelpOnFail(u,t){return M("[boolean|string] [string]",[u,t],arguments.length),o(this,K,"f").showHelpOnFail(u,t),this}showVersion(u){return M("[string|function]",[u],arguments.length),o(this,K,"f").showVersion(u),this}skipValidation(u){return M("<array|string>",[u],arguments.length),this[Zu]("skipValidation",u),this}strict(u){return M("[boolean]",[u],arguments.length),N(this,ne,u!==!1,"f"),this}strictCommands(u){return M("[boolean]",[u],arguments.length),N(this,ie,u!==!1,"f"),this}strictOptions(u){return M("[boolean]",[u],arguments.length),N(this,se,u!==!1,"f"),this}string(u){return M("<array|string>",[u],arguments.length),this[Zu]("string",u),this[le](u),this}terminalWidth(){return M([],0),o(this,V,"f").process.stdColumns}updateLocale(u){return this.updateStrings(u)}updateStrings(u){return M("<object>",[u],arguments.length),N(this,te,!1,"f"),o(this,V,"f").y18n.updateLocale(u),this}usage(u,t,e,r){if(M("<string|null|undefined> [string|boolean] [function|object] [function]",[u,t,e,r],arguments.length),t!==void 0){if(Pu(u,null,o(this,V,"f")),(u||"").match(/^\$0( |$)/))return this.command(u,t,e,r);throw new Eu(".usage() description must start with $0 if being used as alias for .command()")}return o(this,K,"f").usage(u),this}usageConfiguration(u){return M("<object>",[u],arguments.length),N(this,Tt,u,"f"),this}version(u,t,e){let r="version";if(M("[boolean|string] [string] [string]",[u,t,e],arguments.length),o(this,Hu,"f")&&(this[FD](o(this,Hu,"f")),o(this,K,"f").version(void 0),N(this,Hu,null,"f")),arguments.length===0)e=this[Fi](),u=r;else if(arguments.length===1){if(u===!1)return this;e=u,u=r}else arguments.length===2&&(e=t,t=void 0);return N(this,Hu,typeof u=="string"?u:r,"f"),t=t||o(this,K,"f").deferY18nLookup("Show version number"),o(this,K,"f").version(e||void 0),this.boolean(o(this,Hu,"f")),this.describe(o(this,Hu,"f"),t),this}wrap(u){return M("<number|null|undefined>",[u],arguments.length),o(this,K,"f").wrap(u),this}[(fu=new WeakMap,ee=new WeakMap,$e=new WeakMap,yu=new WeakMap,mu=new WeakMap,Ct=new WeakMap,Yu=new WeakMap,te=new WeakMap,Et=new WeakMap,Iu=new WeakMap,dt=new WeakMap,Ru=new WeakMap,ku=new WeakMap,Au=new WeakMap,vu=new WeakMap,gt=new WeakMap,Te=new WeakMap,Cu=new WeakMap,$=new WeakMap,pt=new WeakMap,mt=new WeakMap,Tu=new WeakMap,De=new WeakMap,Be=new WeakMap,re=new WeakMap,Xu=new WeakMap,At=new WeakMap,V=new WeakMap,ne=new WeakMap,ie=new WeakMap,se=new WeakMap,K=new WeakMap,Tt=new WeakMap,Hu=new WeakMap,cu=new WeakMap,ai)](u){if(!u._||!u["--"])return u;u._.push.apply(u._,u["--"]);try{delete u["--"]}catch{}return u}[li](){return{log:(...u)=>{this[Bt]()||console.log(...u),N(this,Au,!0,"f"),o(this,Cu,"f").length&&N(this,Cu,o(this,Cu,"f")+`
`,"f"),N(this,Cu,o(this,Cu,"f")+u.join(" "),"f")},error:(...u)=>{this[Bt]()||console.error(...u),N(this,Au,!0,"f"),o(this,Cu,"f").length&&N(this,Cu,o(this,Cu,"f")+`
`,"f"),N(this,Cu,o(this,Cu,"f")+u.join(" "),"f")}}}[FD](u){bt(o(this,$,"f")).forEach(t=>{if(t==="configObjects")return;let e=o(this,$,"f")[t];Array.isArray(e)?e.includes(u)&&e.splice(e.indexOf(u),1):typeof e=="object"&&delete e[u]}),delete o(this,K,"f").getDescriptions()[u]}[ci](u,t,e){o(this,Et,"f")[e]||(o(this,V,"f").process.emitWarning(u,t),o(this,Et,"f")[e]=!0)}[fi](){o(this,dt,"f").push({options:o(this,$,"f"),configObjects:o(this,$,"f").configObjects.slice(0),exitProcess:o(this,Iu,"f"),groups:o(this,ku,"f"),strict:o(this,ne,"f"),strictCommands:o(this,ie,"f"),strictOptions:o(this,se,"f"),completionCommand:o(this,mu,"f"),output:o(this,Cu,"f"),exitError:o(this,Yu,"f"),hasOutput:o(this,Au,"f"),parsed:this.parsed,parseFn:o(this,Tu,"f"),parseContext:o(this,De,"f")}),o(this,K,"f").freeze(),o(this,cu,"f").freeze(),o(this,fu,"f").freeze(),o(this,Ru,"f").freeze()}[_i](){let u,t="";return u=/\b(node|iojs|electron)(\.exe)?$/.test(o(this,V,"f").process.argv()[0])?o(this,V,"f").process.argv().slice(1,2):o(this,V,"f").process.argv().slice(0,1),t=u.map(e=>{let r=this[Li](o(this,ee,"f"),e);return e.match(/^(\/|([a-zA-Z]:)?\\)/)&&r.length<e.length?r:e}).join(" ").trim(),o(this,V,"f").getEnv("_")&&o(this,V,"f").getProcessArgvBin()===o(this,V,"f").getEnv("_")&&(t=o(this,V,"f").getEnv("_").replace(`${o(this,V,"f").path.dirname(o(this,V,"f").process.execPath())}/`,"")),t}[oe](){return o(this,mt,"f")}[hi](){return o(this,Tt,"f")}[CD](){if(!o(this,te,"f"))return;let u=o(this,V,"f").getEnv("LC_ALL")||o(this,V,"f").getEnv("LC_MESSAGES")||o(this,V,"f").getEnv("LANG")||o(this,V,"f").getEnv("LANGUAGE")||"en_US";this.locale(u.replace(/[.:].*/,""))}[Fi](){return this[ED]().version||"unknown"}[Ci](u){let t=u["--"]?u["--"]:u._;for(let e,r=0;(e=t[r])!==void 0;r++)o(this,V,"f").Parser.looksLikeNumber(e)&&Number.isSafeInteger(Math.floor(parseFloat(`${e}`)))&&(t[r]=Number(e));return u}[ED](u){let t=u||"*";if(o(this,Be,"f")[t])return o(this,Be,"f")[t];let e={};try{let r=u||o(this,V,"f").mainFilename;!u&&o(this,V,"f").path.extname(r)&&(r=o(this,V,"f").path.dirname(r));let n=o(this,V,"f").findUp(r,(i,s)=>s.includes("package.json")?"package.json":void 0);Pu(n,void 0,o(this,V,"f")),e=JSON.parse(o(this,V,"f").readFileSync(n,"utf8"))}catch{}return o(this,Be,"f")[t]=e||{},o(this,Be,"f")[t]}[Zu](u,t){(t=[].concat(t)).forEach(e=>{e=this[pD](e),o(this,$,"f")[u].push(e)})}[be](u,t,e,r){this[gD](u,t,e,r,(n,i,s)=>{o(this,$,"f")[n][i]=s})}[dD](u,t,e,r){this[gD](u,t,e,r,(n,i,s)=>{o(this,$,"f")[n][i]=(o(this,$,"f")[n][i]||[]).concat(s)})}[gD](u,t,e,r,n){if(Array.isArray(e))e.forEach(i=>{u(i,r)});else if((i=>typeof i=="object")(e))for(let i of bt(e))u(i,e[i]);else n(t,this[pD](e),r)}[pD](u){return u==="__proto__"?"___proto___":u}[mD](u,t){return this[be](this[mD].bind(this),"key",u,t),this}[AD](){var u,t,e,r,n,i,s,F,c,E,B,L;let U=o(this,dt,"f").pop(),b;Pu(U,void 0,o(this,V,"f")),u=this,t=this,e=this,r=this,n=this,i=this,s=this,F=this,c=this,E=this,B=this,L=this,{options:{set value(m){N(u,$,m,"f")}}.value,configObjects:b,exitProcess:{set value(m){N(t,Iu,m,"f")}}.value,groups:{set value(m){N(e,ku,m,"f")}}.value,output:{set value(m){N(r,Cu,m,"f")}}.value,exitError:{set value(m){N(n,Yu,m,"f")}}.value,hasOutput:{set value(m){N(i,Au,m,"f")}}.value,parsed:this.parsed,strict:{set value(m){N(s,ne,m,"f")}}.value,strictCommands:{set value(m){N(F,ie,m,"f")}}.value,strictOptions:{set value(m){N(c,se,m,"f")}}.value,completionCommand:{set value(m){N(E,mu,m,"f")}}.value,parseFn:{set value(m){N(B,Tu,m,"f")}}.value,parseContext:{set value(m){N(L,De,m,"f")}}.value}=U,o(this,$,"f").configObjects=b,o(this,K,"f").unfreeze(),o(this,cu,"f").unfreeze(),o(this,fu,"f").unfreeze(),o(this,Ru,"f").unfreeze()}[Ei](u,t){return Ge(t,e=>(u(e),e))}getInternalMethods(){return{getCommandInstance:this[di].bind(this),getContext:this[gi].bind(this),getHasOutput:this[pi].bind(this),getLoggerInstance:this[mi].bind(this),getParseContext:this[Ai].bind(this),getParserConfiguration:this[oe].bind(this),getUsageConfiguration:this[hi].bind(this),getUsageInstance:this[Ti].bind(this),getValidationInstance:this[Bi].bind(this),hasParseCallback:this[Bt].bind(this),isGlobalContext:this[bi].bind(this),postProcess:this[ae].bind(this),reset:this[TD].bind(this),runValidation:this[BD].bind(this),runYargsParserAndExecuteCommands:this[ke].bind(this),setHasOutput:this[xi].bind(this)}}[di](){return o(this,fu,"f")}[gi](){return o(this,$e,"f")}[pi](){return o(this,Au,"f")}[mi](){return o(this,Te,"f")}[Ai](){return o(this,De,"f")||{}}[Ti](){return o(this,K,"f")}[Bi](){return o(this,cu,"f")}[Bt](){return!!o(this,Tu,"f")}[bi](){return o(this,gt,"f")}[ae](u,t,e,r){return e||_u(u)?u:(t||(u=this[ai](u)),(this[oe]()["parse-positional-numbers"]||this[oe]()["parse-positional-numbers"]===void 0)&&(u=this[Ci](u)),r&&(u=Ue(u,this,o(this,Ru,"f").getMiddleware(),!1)),u)}[TD](u={}){N(this,$,o(this,$,"f")||{},"f");let t={};t.local=o(this,$,"f").local||[],t.configObjects=o(this,$,"f").configObjects||[];let e={};return t.local.forEach(r=>{e[r]=!0,(u[r]||[]).forEach(n=>{e[n]=!0})}),Object.assign(o(this,re,"f"),Object.keys(o(this,ku,"f")).reduce((r,n)=>{let i=o(this,ku,"f")[n].filter(s=>!(s in e));return i.length>0&&(r[n]=i),r},{})),N(this,ku,{},"f"),["array","boolean","string","skipValidation","count","normalize","number","hiddenOptions"].forEach(r=>{t[r]=(o(this,$,"f")[r]||[]).filter(n=>!e[n])}),["narg","key","alias","default","defaultDescription","config","choices","demandedOptions","demandedCommands","deprecatedOptions"].forEach(r=>{t[r]=Le(o(this,$,"f")[r],n=>!e[n])}),t.envPrefix=o(this,$,"f").envPrefix,N(this,$,t,"f"),N(this,K,o(this,K,"f")?o(this,K,"f").reset(e):wa(this,o(this,V,"f")),"f"),N(this,cu,o(this,cu,"f")?o(this,cu,"f").reset(e):function(r,n,i){let s=i.y18n.__,F=i.y18n.__n,c={nonOptionCount:function(b){let m=r.getDemandedCommands(),h=b._.length+(b["--"]?b["--"].length:0)-r.getInternalMethods().getContext().commands.length;m._&&(h<m._.min||h>m._.max)&&(h<m._.min?m._.minMsg!==void 0?n.fail(m._.minMsg?m._.minMsg.replace(/\$0/g,h.toString()).replace(/\$1/,m._.min.toString()):null):n.fail(F("Not enough non-option arguments: got %s, need at least %s","Not enough non-option arguments: got %s, need at least %s",h,h.toString(),m._.min.toString())):h>m._.max&&(m._.maxMsg!==void 0?n.fail(m._.maxMsg?m._.maxMsg.replace(/\$0/g,h.toString()).replace(/\$1/,m._.max.toString()):null):n.fail(F("Too many non-option arguments: got %s, maximum of %s","Too many non-option arguments: got %s, maximum of %s",h,h.toString(),m._.max.toString()))))},positionalCount:function(b,m){m<b&&n.fail(F("Not enough non-option arguments: got %s, need at least %s","Not enough non-option arguments: got %s, need at least %s",m,m+"",b+""))},requiredArguments:function(b,m){let h=null;for(let G of Object.keys(m))Object.prototype.hasOwnProperty.call(b,G)&&b[G]!==void 0||(h=h||{},h[G]=m[G]);if(h){let G=[];for(let H of Object.keys(h)){let J=h[H];J&&G.indexOf(J)<0&&G.push(J)}let q=G.length?`
${G.join(`
`)}`:"";n.fail(F("Missing required argument: %s","Missing required arguments: %s",Object.keys(h).length,Object.keys(h).join(", ")+q))}},unknownArguments:function(b,m,h,G,q=!0){var H;let J=r.getInternalMethods().getCommandInstance().getCommands(),X=[],Bu=r.getInternalMethods().getContext();if(Object.keys(b).forEach(ru=>{oi.includes(ru)||Object.prototype.hasOwnProperty.call(h,ru)||Object.prototype.hasOwnProperty.call(r.getInternalMethods().getParseContext(),ru)||c.isValidAndSomeAliasIsNotNew(ru,m)||X.push(ru)}),q&&(Bu.commands.length>0||J.length>0||G)&&b._.slice(Bu.commands.length).forEach(ru=>{J.includes(""+ru)||X.push(""+ru)}),q){let ru=((H=r.getDemandedCommands()._)===null||H===void 0?void 0:H.max)||0,y=Bu.commands.length+ru;y<b._.length&&b._.slice(y).forEach(W=>{W=String(W),Bu.commands.includes(W)||X.includes(W)||X.push(W)})}X.length&&n.fail(F("Unknown argument: %s","Unknown arguments: %s",X.length,X.map(ru=>ru.trim()?ru:`"${ru}"`).join(", ")))},unknownCommands:function(b){let m=r.getInternalMethods().getCommandInstance().getCommands(),h=[],G=r.getInternalMethods().getContext();return(G.commands.length>0||m.length>0)&&b._.slice(G.commands.length).forEach(q=>{m.includes(""+q)||h.push(""+q)}),h.length>0&&(n.fail(F("Unknown command: %s","Unknown commands: %s",h.length,h.join(", "))),!0)},isValidAndSomeAliasIsNotNew:function(b,m){if(!Object.prototype.hasOwnProperty.call(m,b))return!1;let h=r.parsed.newAliases;return[b,...m[b]].some(G=>!Object.prototype.hasOwnProperty.call(h,G)||!h[b])},limitedChoices:function(b){let m=r.getOptions(),h={};if(!Object.keys(m.choices).length)return;Object.keys(b).forEach(H=>{oi.indexOf(H)===-1&&Object.prototype.hasOwnProperty.call(m.choices,H)&&[].concat(b[H]).forEach(J=>{m.choices[H].indexOf(J)===-1&&J!==void 0&&(h[H]=(h[H]||[]).concat(J))})});let G=Object.keys(h);if(!G.length)return;let q=s("Invalid values:");G.forEach(H=>{q+=`
  ${s("Argument: %s, Given: %s, Choices: %s",H,n.stringifiedValues(h[H]),n.stringifiedValues(m.choices[H]))}`}),n.fail(q)}},E={};function B(b,m){let h=Number(m);return typeof(m=isNaN(h)?m:h)=="number"?m=b._.length>=m:m.match(/^--no-.+/)?(m=m.match(/^--no-(.+)/)[1],m=!Object.prototype.hasOwnProperty.call(b,m)):m=Object.prototype.hasOwnProperty.call(b,m),m}c.implies=function(b,m){M("<string|object> [array|number|string]",[b,m],arguments.length),typeof b=="object"?Object.keys(b).forEach(h=>{c.implies(h,b[h])}):(r.global(b),E[b]||(E[b]=[]),Array.isArray(m)?m.forEach(h=>c.implies(b,h)):(Pu(m,void 0,i),E[b].push(m)))},c.getImplied=function(){return E},c.implications=function(b){let m=[];if(Object.keys(E).forEach(h=>{let G=h;(E[h]||[]).forEach(q=>{let H=G,J=q;H=B(b,H),q=B(b,q),H&&!q&&m.push(` ${G} -> ${J}`)})}),m.length){let h=`${s("Implications failed:")}
`;m.forEach(G=>{h+=G}),n.fail(h)}};let L={};c.conflicts=function(b,m){M("<string|object> [array|string]",[b,m],arguments.length),typeof b=="object"?Object.keys(b).forEach(h=>{c.conflicts(h,b[h])}):(r.global(b),L[b]||(L[b]=[]),Array.isArray(m)?m.forEach(h=>c.conflicts(b,h)):L[b].push(m))},c.getConflicting=()=>L,c.conflicting=function(b){Object.keys(b).forEach(m=>{L[m]&&L[m].forEach(h=>{h&&b[m]!==void 0&&b[h]!==void 0&&n.fail(s("Arguments %s and %s are mutually exclusive",m,h))})}),r.getInternalMethods().getParserConfiguration()["strip-dashed"]&&Object.keys(L).forEach(m=>{L[m].forEach(h=>{h&&b[i.Parser.camelCase(m)]!==void 0&&b[i.Parser.camelCase(h)]!==void 0&&n.fail(s("Arguments %s and %s are mutually exclusive",m,h))})})},c.recommendCommands=function(b,m){m=m.sort((q,H)=>H.length-q.length);let h=null,G=1/0;for(let q,H=0;(q=m[H])!==void 0;H++){let J=Sa(b,q);J<=3&&J<G&&(G=J,h=q)}h&&n.fail(s("Did you mean %s?",h))},c.reset=function(b){return E=Le(E,m=>!b[m]),L=Le(L,m=>!b[m]),c};let U=[];return c.freeze=function(){U.push({implied:E,conflicting:L})},c.unfreeze=function(){let b=U.pop();Pu(b,void 0,i),{implied:E,conflicting:L}=b},c}(this,o(this,K,"f"),o(this,V,"f")),"f"),N(this,fu,o(this,fu,"f")?o(this,fu,"f").reset():function(r,n,i,s){return new RD(r,n,i,s)}(o(this,K,"f"),o(this,cu,"f"),o(this,Ru,"f"),o(this,V,"f")),"f"),o(this,yu,"f")||N(this,yu,function(r,n,i,s){return new OD(r,n,i,s)}(this,o(this,K,"f"),o(this,fu,"f"),o(this,V,"f")),"f"),o(this,Ru,"f").reset(),N(this,mu,null,"f"),N(this,Cu,"","f"),N(this,Yu,null,"f"),N(this,Au,!1,"f"),this.parsed=!1,this}[Li](u,t){return o(this,V,"f").path.relative(u,t)}[ke](u,t,e,r=0,n=!1){let i=!!e||n;u=u||o(this,Xu,"f"),o(this,$,"f").__=o(this,V,"f").y18n.__,o(this,$,"f").configuration=this[oe]();let s=!!o(this,$,"f").configuration["populate--"],F=Object.assign({},o(this,$,"f").configuration,{"populate--":!0}),c=o(this,V,"f").Parser.detailed(u,Object.assign({},o(this,$,"f"),{configuration:{"parse-positional-numbers":!1,...F}})),E=Object.assign(c.argv,o(this,De,"f")),B,L=c.aliases,U=!1,b=!1;Object.keys(E).forEach(m=>{m===o(this,vu,"f")&&E[m]?U=!0:m===o(this,Hu,"f")&&E[m]&&(b=!0)}),E.$0=this.$0,this.parsed=c,r===0&&o(this,K,"f").clearCachedHelpMessage();try{if(this[CD](),t)return this[ae](E,s,!!e,!1);o(this,vu,"f")&&[o(this,vu,"f")].concat(L[o(this,vu,"f")]||[]).filter(q=>q.length>1).includes(""+E._[E._.length-1])&&(E._.pop(),U=!0),N(this,gt,!1,"f");let m=o(this,fu,"f").getCommands(),h=o(this,yu,"f").completionKey in E,G=U||h||n;if(E._.length){if(m.length){let q;for(let H,J=r||0;E._[J]!==void 0;J++){if(H=String(E._[J]),m.includes(H)&&H!==o(this,mu,"f")){let X=o(this,fu,"f").runCommand(H,this,c,J+1,n,U||b||n);return this[ae](X,s,!!e,!1)}if(!q&&H!==o(this,mu,"f")){q=H;break}}!o(this,fu,"f").hasDefaultCommand()&&o(this,At,"f")&&q&&!G&&o(this,cu,"f").recommendCommands(q,m)}o(this,mu,"f")&&E._.includes(o(this,mu,"f"))&&!h&&(o(this,Iu,"f")&&He(!0),this.showCompletionScript(),this.exit(0))}if(o(this,fu,"f").hasDefaultCommand()&&!G){let q=o(this,fu,"f").runCommand(null,this,c,0,n,U||b||n);return this[ae](q,s,!!e,!1)}if(h){o(this,Iu,"f")&&He(!0);let q=(u=[].concat(u)).slice(u.indexOf(`--${o(this,yu,"f").completionKey}`)+1);return o(this,yu,"f").getCompletion(q,(H,J)=>{if(H)throw new Eu(H.message);(J||[]).forEach(X=>{o(this,Te,"f").log(X)}),this.exit(0)}),this[ae](E,!s,!!e,!1)}if(o(this,Au,"f")||(U?(o(this,Iu,"f")&&He(!0),i=!0,this.showHelp("log"),this.exit(0)):b&&(o(this,Iu,"f")&&He(!0),i=!0,o(this,K,"f").showVersion("log"),this.exit(0))),!i&&o(this,$,"f").skipValidation.length>0&&(i=Object.keys(E).some(q=>o(this,$,"f").skipValidation.indexOf(q)>=0&&E[q]===!0)),!i){if(c.error)throw new Eu(c.error.message);if(!h){let q=this[BD](L,{},c.error);e||(B=Ue(E,this,o(this,Ru,"f").getMiddleware(),!0)),B=this[Ei](q,B??E),_u(B)&&!e&&(B=B.then(()=>Ue(E,this,o(this,Ru,"f").getMiddleware(),!1)))}}}catch(m){if(!(m instanceof Eu))throw m;o(this,K,"f").fail(m.message,m)}return this[ae](B??E,s,!!e,!0)}[BD](u,t,e,r){let n={...this.getDemandedOptions()};return i=>{if(e)throw new Eu(e.message);o(this,cu,"f").nonOptionCount(i),o(this,cu,"f").requiredArguments(i,n);let s=!1;o(this,ie,"f")&&(s=o(this,cu,"f").unknownCommands(i)),o(this,ne,"f")&&!s?o(this,cu,"f").unknownArguments(i,u,t,!!r):o(this,se,"f")&&o(this,cu,"f").unknownArguments(i,u,{},!1,!1),o(this,cu,"f").limitedChoices(i),o(this,cu,"f").implications(i),o(this,cu,"f").conflicting(i)}}[xi](){N(this,Au,!0,"f")}[le](u){if(typeof u=="string")o(this,$,"f").key[u]=!0;else for(let t of u)o(this,$,"f").key[t]=!0}},bD,LD,{readFileSync:Na}=require("fs"),{inspect:Ma}=require("util"),{resolve:ja}=require("path"),Pa=hn(),Wa=rD(),xD,yi={assert:{notStrictEqual:ti.notStrictEqual,strictEqual:ti.strictEqual},cliui:qn(),findUp:Yn(),getEnv:D=>process.env[D],getCallerFile:Zn(),getProcessArgvBin:Oi,inspect:Ma,mainFilename:(LD=(bD=require==null?void 0:require.main)===null||bD===void 0?void 0:bD.filename)!==null&&LD!==void 0?LD:process.cwd(),Parser:Wa,path:require("path"),process:{argv:()=>process.argv,cwd:process.cwd,emitWarning:(D,u)=>process.emitWarning(D,u),execPath:()=>process.execPath,exit:D=>{process.exit(D)},nextTick:process.nextTick,stdColumns:process.stdout.columns!==void 0?process.stdout.columns:null},readFileSync:Na,require,requireDirectory:ei(),stringWidth:Se(),y18n:Pa({directory:ja(__dirname,"../locales"),updateFiles:!1})},Ii=!((xD=process==null?void 0:process.env)===null||xD===void 0)&&xD.YARGS_MIN_NODE_VERSION?Number(process.env.YARGS_MIN_NODE_VERSION):12;if(process&&process.version&&Number(process.version.match(/v([^.]+)/)[1])<Ii)throw Error(`yargs supports a minimum Node.js version of ${Ii}. Read our version support policy: https://github.com/yargs/yargs#supported-nodejs-versions`);var $a=rD(),yD,ka={applyExtends:Lt,cjsPlatformShim:yi,Yargs:(yD=yi,(D=[],u=yD.process.cwd(),t)=>{let e=new wD(D,u,t,yD);return Object.defineProperty(e,"argv",{get:()=>e.parse(),enumerable:!0}),e.help(),e.version(),e}),argsert:M,isPromise:_u,objFilter:Le,parseCommand:xe,Parser:$a,processArgv:va,YError:Eu};wi.exports=ka});var Ni=Y((J0,Si)=>{"use strict";var{Yargs:Ha,processArgv:Ua}=ND();ye(Ua.hideBin(process.argv));Si.exports=ye;function ye(D,u){let t=Ha(D,u,require);return qa(t),t}function MD(D,u,t){Object.defineProperty(D,u,{configurable:!0,enumerable:!0,get:t})}function Ga(D,u){let t=Object.getOwnPropertyDescriptor(D,u);if(typeof t<"u")return t.get}function qa(D){[...Object.keys(D),...Object.getOwnPropertyNames(D.constructor.prototype)].forEach(u=>{u==="argv"?MD(ye,u,Ga(D,u)):typeof D[u]=="function"?ye[u]=D[u].bind(D):(MD(ye,"$0",()=>D.$0),MD(ye,"parsed",()=>D.parsed))})}});var ji=Y((Q0,Mi)=>{var{applyExtends:Va,cjsPlatformShim:za,Parser:Ka,processArgv:Ya}=ND();Mi.exports={applyExtends:(D,u,t)=>Va(D,u,t,za),hideBin:Ya.hideBin,Parser:Ka}});var Wi=Y((ec,xt)=>{"use strict";var Xa=(()=>{let r={},n={font:"Standard",fontPath:"./fonts"};function i(_,d){let a={},l,p,T,O,x=[[16384,"vLayout",2],[8192,"vLayout",1],[4096,"vRule5",!0],[2048,"vRule4",!0],[1024,"vRule3",!0],[512,"vRule2",!0],[256,"vRule1",!0],[128,"hLayout",2],[64,"hLayout",1],[32,"hRule6",!0],[16,"hRule5",!0],[8,"hRule4",!0],[4,"hRule3",!0],[2,"hRule2",!0],[1,"hRule1",!0]];for(l=d!==null?d:_,p=0,T=x.length;p<T;)O=x[p],l>=O[0]?(l=l-O[0],a[O[1]]=typeof a[O[1]]>"u"?O[2]:a[O[1]]):O[1]!=="vLayout"&&O[1]!=="hLayout"&&(a[O[1]]=!1),p++;return typeof a.hLayout>"u"?_===0?a.hLayout=1:_===-1?a.hLayout=0:a.hRule1||a.hRule2||a.hRule3||a.hRule4||a.hRule5||a.hRule6?a.hLayout=3:a.hLayout=2:a.hLayout===2&&(a.hRule1||a.hRule2||a.hRule3||a.hRule4||a.hRule5||a.hRule6)&&(a.hLayout=3),typeof a.vLayout>"u"?a.vRule1||a.vRule2||a.vRule3||a.vRule4||a.vRule5?a.vLayout=3:a.vLayout=0:a.vLayout===2&&(a.vRule1||a.vRule2||a.vRule3||a.vRule4||a.vRule5)&&(a.vLayout=3),a}function s(_,d,a){return _===d&&_!==a?_:!1}function F(_,d){let a="|/\\[]{}()<>";if(_==="_"){if(a.indexOf(d)!==-1)return d}else if(d==="_"&&a.indexOf(_)!==-1)return _;return!1}function c(_,d){let a="| /\\ [] {} () <>",l=a.indexOf(_),p=a.indexOf(d);if(l!==-1&&p!==-1&&l!==p&&Math.abs(l-p)!==1){let T=Math.max(l,p),O=T+1;return a.substring(T,O)}return!1}function E(_,d){let a="[] {} ()",l=a.indexOf(_),p=a.indexOf(d);return l!==-1&&p!==-1&&Math.abs(l-p)<=1?"|":!1}function B(_,d){let a="/\\ \\/ ><",l={0:"|",3:"Y",6:"X"},p=a.indexOf(_),T=a.indexOf(d);return p!==-1&&T!==-1&&T-p===1?l[p]:!1}function L(_,d,a){return _===a&&d===a?a:!1}function U(_,d){return _===d?_:!1}function b(_,d){let a="|/\\[]{}()<>";if(_==="_"){if(a.indexOf(d)!==-1)return d}else if(d==="_"&&a.indexOf(_)!==-1)return _;return!1}function m(_,d){let a="| /\\ [] {} () <>",l=a.indexOf(_),p=a.indexOf(d);if(l!==-1&&p!==-1&&l!==p&&Math.abs(l-p)!==1){let T=Math.max(l,p),O=T+1;return a.substring(T,O)}return!1}function h(_,d){return _==="-"&&d==="_"||_==="_"&&d==="-"?"=":!1}function G(_,d){return _==="|"&&d==="|"?"|":!1}function q(_,d,a){return d===" "||d===""||d===a&&_!==" "?_:d}function H(_,d,a){if(a.fittingRules.vLayout===0)return"invalid";let l,p=Math.min(_.length,d.length),T,O,x=!1,v;if(p===0)return"invalid";for(l=0;l<p;l++)if(T=_.substring(l,l+1),O=d.substring(l,l+1),T!==" "&&O!==" "){if(a.fittingRules.vLayout===1)return"invalid";if(a.fittingRules.vLayout===2)return"end";if(G(T,O)){x=x||!1;continue}if(v=!1,v=a.fittingRules.vRule1?U(T,O):v,v=!v&&a.fittingRules.vRule2?b(T,O):v,v=!v&&a.fittingRules.vRule3?m(T,O):v,v=!v&&a.fittingRules.vRule4?h(T,O):v,x=!0,!v)return"invalid"}return x?"end":"valid"}function J(_,d,a){let l=_.length,p=_.length,T=d.length,O,x,v,S=1,tu,Du,z;for(;S<=l;){for(O=_.slice(Math.max(0,p-S),p),x=d.slice(0,Math.min(l,S)),v=x.length,z="",tu=0;tu<v;tu++)if(Du=H(O[tu],x[tu],a),Du==="end")z=Du;else if(Du==="invalid"){z=Du;break}else z===""&&(z="valid");if(z==="invalid"){S--;break}if(z==="end")break;z==="valid"&&S++}return Math.min(l,S)}function X(_,d,a){let l,p=Math.min(_.length,d.length),T,O,x="",v;for(l=0;l<p;l++)T=_.substring(l,l+1),O=d.substring(l,l+1),T!==" "&&O!==" "?a.fittingRules.vLayout===1||a.fittingRules.vLayout===2?x+=q(T,O):(v=!1,v=a.fittingRules.vRule5?G(T,O):v,v=!v&&a.fittingRules.vRule1?U(T,O):v,v=!v&&a.fittingRules.vRule2?b(T,O):v,v=!v&&a.fittingRules.vRule3?m(T,O):v,v=!v&&a.fittingRules.vRule4?h(T,O):v,x+=v):x+=q(T,O);return x}function Bu(_,d,a,l){let p=_.length,T=d.length,O=_.slice(0,Math.max(0,p-a)),x=_.slice(Math.max(0,p-a),p),v=d.slice(0,Math.min(a,T)),S,tu,Du,z=[],eu,f=[];for(tu=x.length,S=0;S<tu;S++)S>=T?Du=x[S]:Du=X(x[S],v[S],l),z.push(Du);return eu=d.slice(Math.min(a,T),T),f.concat(O,z,eu)}function ru(_,d){let a,l=_.length,p="";for(a=0;a<d;a++)p+=" ";for(a=0;a<l;a++)_[a]+=p}function y(_,d,a){let l=_[0].length,p=d[0].length,T;return l>p?ru(d,l-p):p>l&&ru(_,p-l),T=J(_,d,a),Bu(_,d,T,a)}function W(_,d,a){if(a.fittingRules.hLayout===0)return 0;let l,p=_.length,T=d.length,O=p,x=1,v=!1,S=!1,tu,Du,z,eu;if(p===0)return 0;u:for(;x<=O;){let f=p-x;for(tu=_.substring(f,f+x),Du=d.substring(0,Math.min(x,T)),l=0;l<Math.min(x,T);l++)if(z=tu.substring(l,l+1),eu=Du.substring(l,l+1),z!==" "&&eu!==" "){if(a.fittingRules.hLayout===1){x=x-1;break u}else if(a.fittingRules.hLayout===2){(z===a.hardBlank||eu===a.hardBlank)&&(x=x-1);break u}else if(v=!0,S=!1,S=a.fittingRules.hRule1?s(z,eu,a.hardBlank):S,S=!S&&a.fittingRules.hRule2?F(z,eu,a.hardBlank):S,S=!S&&a.fittingRules.hRule3?c(z,eu,a.hardBlank):S,S=!S&&a.fittingRules.hRule4?E(z,eu,a.hardBlank):S,S=!S&&a.fittingRules.hRule5?B(z,eu,a.hardBlank):S,S=!S&&a.fittingRules.hRule6?L(z,eu,a.hardBlank):S,!S){x=x-1;break u}}if(v)break;x++}return Math.min(O,x)}function j(_,d,a,l){let p,T,O=[],x,v,S,tu,Du,z,eu,f;for(p=0;p<l.height;p++){eu=_[p],f=d[p],Du=eu.length,z=f.length,x=Du-a,v=eu.substr(0,Math.max(0,x)),S="";let w=Math.max(0,Du-a);var g=eu.substring(w,w+a),I=f.substring(0,Math.min(a,z));for(T=0;T<a;T++){var A=T<Du?g.substring(T,T+1):" ",C=T<z?I.substring(T,T+1):" ";if(A!==" "&&C!==" ")if(l.fittingRules.hLayout===1)S+=q(A,C,l.hardBlank);else if(l.fittingRules.hLayout===2)S+=q(A,C,l.hardBlank);else{var R="";R=!R&&l.fittingRules.hRule1?s(A,C,l.hardBlank):R,R=!R&&l.fittingRules.hRule2?F(A,C,l.hardBlank):R,R=!R&&l.fittingRules.hRule3?c(A,C,l.hardBlank):R,R=!R&&l.fittingRules.hRule4?E(A,C,l.hardBlank):R,R=!R&&l.fittingRules.hRule5?B(A,C,l.hardBlank):R,R=!R&&l.fittingRules.hRule6?L(A,C,l.hardBlank):R,R=R||q(A,C,l.hardBlank),S+=R}else S+=q(A,C,l.hardBlank)}a>=z?tu="":tu=f.substring(a,a+Math.max(0,z-a)),O[p]=v+S+tu}return O}function Q(_){let d=[],a;for(a=0;a<_;a++)d[a]="";return d}let uu=function(_){return Math.max.apply(Math,_.map(function(d,a){return d.length}))};function Z(_,d,a){return _.reduce(function(l,p){return j(l,p.fig,p.overlap,a)},Q(d))}function hu(_,d,a){let l={};for(let p=_.length;--p;){let T=Z(_.slice(0,p),d,a);if(uu(T)<=a.width){l.outputFigText=T,p<_.length?l.chars=_.slice(p):l.chars=[];break}}return l}function Ou(_,d,a){let l,p,T=0,O,x,v,S=a.height,tu=[],Du,z,eu=[],f,g,I,A,C;for(x=Q(S),a.width>0&&a.whitespaceBreak&&(z={chars:[],overlap:T}),a.printDirection===1&&(_=_.split("").reverse().join("")),v=_.length,l=0;l<v;l++)if(f=_.substring(l,l+1),g=f.match(/\s/),p=d[f.charCodeAt(0)],A=null,p){if(a.fittingRules.hLayout!==0){for(T=1e4,O=0;O<a.height;O++)T=Math.min(T,W(x[O],p[O],a));T=T===1e4?0:T}if(a.width>0&&(a.whitespaceBreak?(I=Z(z.chars.concat([{fig:p,overlap:T}]),S,a),A=Z(eu.concat([{fig:I,overlap:z.overlap}]),S,a),Du=uu(A)):(A=j(x,p,T,a),Du=uu(A)),Du>=a.width&&l>0&&(a.whitespaceBreak?(x=Z(eu.slice(0,-1),S,a),eu.length>1&&(tu.push(x),x=Q(S)),eu=[]):(tu.push(x),x=Q(S)))),a.width>0&&a.whitespaceBreak&&((!g||l===v-1)&&z.chars.push({fig:p,overlap:T}),g||l===v-1)){for(C=null;A=Z(z.chars,S,a),Du=uu(A),Du>=a.width;)C=hu(z.chars,S,a),z={chars:C.chars},tu.push(C.outputFigText);Du>0&&(C?eu.push({fig:A,overlap:1}):eu.push({fig:A,overlap:z.overlap})),g&&(eu.push({fig:p,overlap:T}),x=Q(S)),l===v-1&&(x=Z(eu,S,a)),z={chars:[],overlap:T};continue}x=j(x,p,T,a)}return uu(x)>0&&tu.push(x),a.showHardBlanks!==!0&&tu.forEach(function(R){for(v=R.length,O=0;O<v;O++)R[O]=R[O].replace(new RegExp("\\"+a.hardBlank,"g")," ")}),tu}let nu=function(_,d){let a=["hLayout","hRule1","hRule2","hRule3","hRule4","hRule5","hRule6"],l={},p;if(_==="default")for(p=0;p<a.length;p++)l[a[p]]=d.fittingRules[a[p]];else if(_==="full")l={hLayout:0,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(_==="fitted")l={hLayout:1,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(_==="controlled smushing")l={hLayout:3,hRule1:!0,hRule2:!0,hRule3:!0,hRule4:!0,hRule5:!0,hRule6:!0};else if(_==="universal smushing")l={hLayout:2,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else return;return l},Gu=function(_,d){let a=["vLayout","vRule1","vRule2","vRule3","vRule4","vRule5"],l={},p;if(_==="default")for(p=0;p<a.length;p++)l[a[p]]=d.fittingRules[a[p]];else if(_==="full")l={vLayout:0,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(_==="fitted")l={vLayout:1,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(_==="controlled smushing")l={vLayout:3,vRule1:!0,vRule2:!0,vRule3:!0,vRule4:!0,vRule5:!0};else if(_==="universal smushing")l={vLayout:2,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else return;return l},qu=function(_,d,a){a=a.replace(/\r\n/g,`
`).replace(/\r/g,`
`);let l=a.split(`
`),p=[],T,O,x;for(O=l.length,T=0;T<O;T++)p=p.concat(Ou(l[T],r[_],d));for(O=p.length,x=p[0],T=1;T<O;T++)x=y(x,p[T],d);return x?x.join(`
`):""};function $u(_,d){let a=JSON.parse(JSON.stringify(_)),l,p;if(typeof d.horizontalLayout<"u"){l=nu(d.horizontalLayout,_);for(p in l)l.hasOwnProperty(p)&&(a.fittingRules[p]=l[p])}if(typeof d.verticalLayout<"u"){l=Gu(d.verticalLayout,_);for(p in l)l.hasOwnProperty(p)&&(a.fittingRules[p]=l[p])}return a.printDirection=typeof d.printDirection<"u"?d.printDirection:_.printDirection,a.showHardBlanks=d.showHardBlanks||!1,a.width=d.width||-1,a.whitespaceBreak=d.whitespaceBreak||!1,a}let ou=function(_,d,a){ou.text(_,d,a)};return ou.text=function(_,d,a){let l="";_=_+"",typeof arguments[1]=="function"&&(a=d,d={},d.font=n.font),typeof d=="string"?(l=d,d={}):(d=d||{},l=d.font||n.font),ou.loadFont(l,function(p,T){if(p)return a(p);a(null,qu(l,$u(T,d),_))})},ou.textSync=function(_,d){let a="";_=_+"",typeof d=="string"?(a=d,d={}):(d=d||{},a=d.font||n.font);var l=$u(ou.loadFontSync(a),d);return qu(a,l,_)},ou.metadata=function(_,d){_=_+"",ou.loadFont(_,function(a,l){if(a){d(a);return}d(null,l,r[_].comment)})},ou.defaults=function(_){if(typeof _=="object"&&_!==null)for(var d in _)_.hasOwnProperty(d)&&(n[d]=_[d]);return JSON.parse(JSON.stringify(n))},ou.parseFont=function(_,d){d=d.replace(/\r\n/g,`
`).replace(/\r/g,`
`),r[_]={};var a=d.split(`
`),l=a.splice(0,1)[0].split(" "),p=r[_],T={};if(T.hardBlank=l[0].substr(5,1),T.height=parseInt(l[1],10),T.baseline=parseInt(l[2],10),T.maxLength=parseInt(l[3],10),T.oldLayout=parseInt(l[4],10),T.numCommentLines=parseInt(l[5],10),T.printDirection=l.length>=6?parseInt(l[6],10):0,T.fullLayout=l.length>=7?parseInt(l[7],10):null,T.codeTagCount=l.length>=8?parseInt(l[8],10):null,T.fittingRules=i(T.oldLayout,T.fullLayout),p.options=T,T.hardBlank.length!==1||isNaN(T.height)||isNaN(T.baseline)||isNaN(T.maxLength)||isNaN(T.oldLayout)||isNaN(T.numCommentLines))throw new Error("FIGlet header contains invalid values.");let O=[],x;for(x=32;x<=126;x++)O.push(x);if(O=O.concat(196,214,220,228,246,252,223),a.length<T.numCommentLines+T.height*O.length)throw new Error("FIGlet file is missing data.");let v,S,tu=!1;for(p.comment=a.splice(0,T.numCommentLines).join(`
`),p.numChars=0;a.length>0&&p.numChars<O.length;){for(v=O[p.numChars],p[v]=a.splice(0,T.height),x=0;x<T.height;x++)typeof p[v][x]>"u"?p[v][x]="":(S=new RegExp("\\"+p[v][x].substr(p[v][x].length-1,1)+"+$"),p[v][x]=p[v][x].replace(S,""));p.numChars++}for(;a.length>0;){if(v=a.splice(0,1)[0].split(" ")[0],/^0[xX][0-9a-fA-F]+$/.test(v))v=parseInt(v,16);else if(/^0[0-7]+$/.test(v))v=parseInt(v,8);else if(/^[0-9]+$/.test(v))v=parseInt(v,10);else if(/^-0[xX][0-9a-fA-F]+$/.test(v))v=parseInt(v,16);else{if(v==="")break;console.log("Invalid data:"+v),tu=!0;break}for(p[v]=a.splice(0,T.height),x=0;x<T.height;x++)typeof p[v][x]>"u"?p[v][x]="":(S=new RegExp("\\"+p[v][x].substr(p[v][x].length-1,1)+"+$"),p[v][x]=p[v][x].replace(S,""));p.numChars++}if(tu===!0)throw new Error("Error parsing data.");return T},ou.loadFont=function(_,d){if(r[_]){d(null,r[_].options);return}if(typeof fetch!="function")throw console.error("figlet.js requires the fetch API or a fetch polyfill such as https://cdnjs.com/libraries/fetch"),new Error("fetch is required for figlet.js to work.");fetch(n.fontPath+"/"+_+".flf").then(function(a){if(a.ok)return a.text();throw console.log("Unexpected response",a),new Error("Network response was not ok.")}).then(function(a){d(null,ou.parseFont(_,a))}).catch(d)},ou.loadFontSync=function(_){if(r[_])return r[_].options;throw new Error("synchronous font loading is not implemented for the browser")},ou.preloadFonts=function(_,d){let a=[];_.reduce(function(l,p){return l.then(function(){return fetch(n.fontPath+"/"+p+".flf").then(T=>T.text()).then(function(T){a.push(T)})})},Promise.resolve()).then(function(l){for(var p in _)_.hasOwnProperty(p)&&ou.parseFont(_[p],a[p]);d&&d()})},ou.figFonts=r,ou})();typeof xt<"u"&&typeof xt.exports<"u"&&(xt.exports=Xa)});var ki=Y((tc,$i)=>{var Wu=Wi(),yt=require("fs"),jD=require("path"),It=jD.join(__dirname,"/../fonts/");Wu.loadFont=function(D,u){if(Wu.figFonts[D]){u(null,Wu.figFonts[D].options);return}yt.readFile(jD.join(It,D+".flf"),{encoding:"utf-8"},function(t,e){if(t)return u(t);e=e+"";try{u(null,Wu.parseFont(D,e))}catch(r){u(r)}})};Wu.loadFontSync=function(D){if(Wu.figFonts[D])return Wu.figFonts[D].options;var u=yt.readFileSync(jD.join(It,D+".flf"),{encoding:"utf-8"});return u=u+"",Wu.parseFont(D,u)};Wu.fonts=function(D){var u=[];yt.readdir(It,function(t,e){if(t)return D(t);e.forEach(function(r){/\.flf$/.test(r)&&u.push(r.replace(/\.flf$/,""))}),D(null,u)})};Wu.fontsSync=function(){var D=[];return yt.readdirSync(It).forEach(function(u){/\.flf$/.test(u)&&D.push(u.replace(/\.flf$/,""))}),D};$i.exports=Wu});var Rt=au(require("path")),kD=au(require("fs")),Ie=class{constructor(u=[]){this.sourceDirs=u}findSourceDir(u,t){let e=this.sourceDirs.find(r=>kD.default.existsSync(Rt.default.resolve(u,`./${r}`)));return e?`${u}${t}${e}`:""}findSourcePathInside(u,t){return this.findSourceDir(u,t)}findSourcePathUp(u,t){let e=u.split(t).slice(0,-1).join(t);if(!e)return"";let r=this.findSourceDir(e,t);return r||this.findSourcePathUp(e,t)}findSourcePathAnywhere(u,t){return this.findSourcePathInside(u,t)||this.findSourcePathUp(u,t)}findSourcePath(){let u=process.cwd();return this.findSourcePathAnywhere(u,Rt.default.sep)}};var ue=au(require("fs"));var Br=au(Ce()),br=(D,u)=>{let t=(0,Br.pascalCase)(D);return{filename:"index.ts",content:`
import ${t} from './${t}.vue';

export default ${t};
    `.trim()}};var ve=au(Ce()),Lr=(D,u)=>{let t=(0,ve.pascalCase)(D),e=`use${t}`;return{filename:`${t}.vue`,content:`
<script lang="ts" setup>

import { IProps, IEmits } from './${(0,ve.paramCase)(D)}.types';
import ${e} from './${e}';

const props = defineProps<IProps>();
const emit = defineEmits<IEmits>();

const {
} = ${e}(props, emit);

</script>

<template>
  <div class="${(0,ve.paramCase)(D)}--${u}">
    ${t}.vue
  </div>
</template>

<style scoped lang="scss"></style>
    `.trim()}};var xr=au(Ce()),yr=D=>({filename:`${(0,xr.paramCase)(D)}.types.ts`,content:`
export interface IProps {}

export interface IEmits {}
  `.trim()});var Dt=au(Ce()),Ir=(D,u)=>{let e=`use${(0,Dt.pascalCase)(D)}`;return{filename:`${e}.ts`,content:`
import { IProps, IEmits } from './${(0,Dt.paramCase)(D)}.types';

export default function ${e}(
  props: IProps,
  emit: IEmits
) {
  return {};
}
    `.trim()}};var Rr=[yr,Lr,br,Ir];var cn=au(Ce());function Wt({onlyFirst:D=!1}={}){let u=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");return new RegExp(u,D?void 0:"g")}var bl=Wt();var Js=au(kt(),1),Qs=au(wr(),1);var Sr=(D=0)=>u=>`\x1B[${u+D}m`,Nr=(D=0)=>u=>`\x1B[${38+D};5;${u}m`,Mr=(D=0)=>(u,t,e)=>`\x1B[${38+D};2;${u};${t};${e}m`,iu={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],overline:[53,55],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],blackBright:[90,39],gray:[90,39],grey:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgGray:[100,49],bgGrey:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}},vl=Object.keys(iu.modifier),uo=Object.keys(iu.color),eo=Object.keys(iu.bgColor),Ol=[...uo,...eo];function to(){let D=new Map;for(let[u,t]of Object.entries(iu)){for(let[e,r]of Object.entries(t))iu[e]={open:`\x1B[${r[0]}m`,close:`\x1B[${r[1]}m`},t[e]=iu[e],D.set(r[0],r[1]);Object.defineProperty(iu,u,{value:t,enumerable:!1})}return Object.defineProperty(iu,"codes",{value:D,enumerable:!1}),iu.color.close="\x1B[39m",iu.bgColor.close="\x1B[49m",iu.color.ansi=Sr(),iu.color.ansi256=Nr(),iu.color.ansi16m=Mr(),iu.bgColor.ansi=Sr(10),iu.bgColor.ansi256=Nr(10),iu.bgColor.ansi16m=Mr(10),Object.defineProperties(iu,{rgbToAnsi256:{value(u,t,e){return u===t&&t===e?u<8?16:u>248?231:Math.round((u-8)/247*24)+232:16+36*Math.round(u/255*5)+6*Math.round(t/255*5)+Math.round(e/255*5)},enumerable:!1},hexToRgb:{value(u){let t=/[a-f\d]{6}|[a-f\d]{3}/i.exec(u.toString(16));if(!t)return[0,0,0];let[e]=t;e.length===3&&(e=[...e].map(n=>n+n).join(""));let r=Number.parseInt(e,16);return[r>>16&255,r>>8&255,r&255]},enumerable:!1},hexToAnsi256:{value:u=>iu.rgbToAnsi256(...iu.hexToRgb(u)),enumerable:!1},ansi256ToAnsi:{value(u){if(u<8)return 30+u;if(u<16)return 90+(u-8);let t,e,r;if(u>=232)t=((u-232)*10+8)/255,e=t,r=t;else{u-=16;let s=u%36;t=Math.floor(u/36)/5,e=Math.floor(s/6)/5,r=s%6/5}let n=Math.max(t,e,r)*2;if(n===0)return 30;let i=30+(Math.round(r)<<2|Math.round(e)<<1|Math.round(t));return n===2&&(i+=60),i},enumerable:!1},rgbToAnsi:{value:(u,t,e)=>iu.ansi256ToAnsi(iu.rgbToAnsi256(u,t,e)),enumerable:!1},hexToAnsi:{value:u=>iu.ansi256ToAnsi(iu.hexToAnsi256(u)),enumerable:!1}}),iu}var Do=to(),Nu=Do;var nt=au(require("node:process"),1),Pr=au(require("node:os"),1),Ht=au(require("node:tty"),1);function xu(D,u=globalThis.Deno?globalThis.Deno.args:nt.default.argv){let t=D.startsWith("-")?"":D.length===1?"-":"--",e=u.indexOf(t+D),r=u.indexOf("--");return e!==-1&&(r===-1||e<r)}var{env:lu}=nt.default,rt;xu("no-color")||xu("no-colors")||xu("color=false")||xu("color=never")?rt=0:(xu("color")||xu("colors")||xu("color=true")||xu("color=always"))&&(rt=1);function ro(){if("FORCE_COLOR"in lu)return lu.FORCE_COLOR==="true"?1:lu.FORCE_COLOR==="false"?0:lu.FORCE_COLOR.length===0?1:Math.min(Number.parseInt(lu.FORCE_COLOR,10),3)}function no(D){return D===0?!1:{level:D,hasBasic:!0,has256:D>=2,has16m:D>=3}}function io(D,{streamIsTTY:u,sniffFlags:t=!0}={}){let e=ro();e!==void 0&&(rt=e);let r=t?rt:e;if(r===0)return 0;if(t){if(xu("color=16m")||xu("color=full")||xu("color=truecolor"))return 3;if(xu("color=256"))return 2}if("TF_BUILD"in lu&&"AGENT_NAME"in lu)return 1;if(D&&!u&&r===void 0)return 0;let n=r||0;if(lu.TERM==="dumb")return n;if(nt.default.platform==="win32"){let i=Pr.default.release().split(".");return Number(i[0])>=10&&Number(i[2])>=10586?Number(i[2])>=14931?3:2:1}if("CI"in lu)return"GITHUB_ACTIONS"in lu||"GITEA_ACTIONS"in lu?3:["TRAVIS","CIRCLECI","APPVEYOR","GITLAB_CI","BUILDKITE","DRONE"].some(i=>i in lu)||lu.CI_NAME==="codeship"?1:n;if("TEAMCITY_VERSION"in lu)return/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(lu.TEAMCITY_VERSION)?1:0;if(lu.COLORTERM==="truecolor"||lu.TERM==="xterm-kitty")return 3;if("TERM_PROGRAM"in lu){let i=Number.parseInt((lu.TERM_PROGRAM_VERSION||"").split(".")[0],10);switch(lu.TERM_PROGRAM){case"iTerm.app":return i>=3?3:2;case"Apple_Terminal":return 2}}return/-256(color)?$/i.test(lu.TERM)?2:/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(lu.TERM)||"COLORTERM"in lu?1:n}function jr(D,u={}){let t=io(D,{streamIsTTY:D&&D.isTTY,...u});return no(t)}var so={stdout:jr({isTTY:Ht.default.isatty(1)}),stderr:jr({isTTY:Ht.default.isatty(2)})},Wr=so;function $r(D,u,t){let e=D.indexOf(u);if(e===-1)return D;let r=u.length,n=0,i="";do i+=D.slice(n,e)+u+t,n=e+r,e=D.indexOf(u,n);while(e!==-1);return i+=D.slice(n),i}function kr(D,u,t,e){let r=0,n="";do{let i=D[e-1]==="\r";n+=D.slice(r,i?e-1:e)+u+(i?`\r
`:`
`)+t,r=e+1,e=D.indexOf(`
`,r)}while(e!==-1);return n+=D.slice(r),n}var{stdout:Hr,stderr:Ur}=Wr,Ut=Symbol("GENERATOR"),Ee=Symbol("STYLER"),Oe=Symbol("IS_EMPTY"),Gr=["ansi","ansi","ansi256","ansi16m"],de=Object.create(null),oo=(D,u={})=>{if(u.level&&!(Number.isInteger(u.level)&&u.level>=0&&u.level<=3))throw new Error("The `level` option should be an integer from 0 to 3");let t=Hr?Hr.level:0;D.level=u.level===void 0?t:u.level};var ao=D=>{let u=(...t)=>t.join(" ");return oo(u,D),Object.setPrototypeOf(u,we.prototype),u};function we(D){return ao(D)}Object.setPrototypeOf(we.prototype,Function.prototype);for(let[D,u]of Object.entries(Nu))de[D]={get(){let t=it(this,qt(u.open,u.close,this[Ee]),this[Oe]);return Object.defineProperty(this,D,{value:t}),t}};de.visible={get(){let D=it(this,this[Ee],!0);return Object.defineProperty(this,"visible",{value:D}),D}};var Gt=(D,u,t,...e)=>D==="rgb"?u==="ansi16m"?Nu[t].ansi16m(...e):u==="ansi256"?Nu[t].ansi256(Nu.rgbToAnsi256(...e)):Nu[t].ansi(Nu.rgbToAnsi(...e)):D==="hex"?Gt("rgb",u,t,...Nu.hexToRgb(...e)):Nu[t][D](...e),lo=["rgb","hex","ansi256"];for(let D of lo){de[D]={get(){let{level:t}=this;return function(...e){let r=qt(Gt(D,Gr[t],"color",...e),Nu.color.close,this[Ee]);return it(this,r,this[Oe])}}};let u="bg"+D[0].toUpperCase()+D.slice(1);de[u]={get(){let{level:t}=this;return function(...e){let r=qt(Gt(D,Gr[t],"bgColor",...e),Nu.bgColor.close,this[Ee]);return it(this,r,this[Oe])}}}}var co=Object.defineProperties(()=>{},{...de,level:{enumerable:!0,get(){return this[Ut].level},set(D){this[Ut].level=D}}}),qt=(D,u,t)=>{let e,r;return t===void 0?(e=D,r=u):(e=t.openAll+D,r=u+t.closeAll),{open:D,close:u,openAll:e,closeAll:r,parent:t}},it=(D,u,t)=>{let e=(...r)=>fo(e,r.length===1?""+r[0]:r.join(" "));return Object.setPrototypeOf(e,co),e[Ut]=D,e[Ee]=u,e[Oe]=t,e},fo=(D,u)=>{if(D.level<=0||!u)return D[Oe]?"":u;let t=D[Ee];if(t===void 0)return u;let{openAll:e,closeAll:r}=t;if(u.includes("\x1B"))for(;t!==void 0;)u=$r(u,t.close,t.open),t=t.parent;let n=u.indexOf(`
`);return n!==-1&&(u=kr(u,r,e,n)),e+u+r};Object.defineProperties(we.prototype,de);var _o=we(),Wl=we({level:Ur?Ur.level:0});var st=_o;function Vt({onlyFirst:D=!1}={}){let u=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");return new RegExp(u,D?void 0:"g")}var Ul=Vt();var ho=au(kt(),1),Fo=au(Vr(),1);var Ro=au(Kt(),1);var Yr=/([\p{Alpha}\p{N}_]|$)/u,Xr=/[_.\- ]+/,u0=new RegExp("^"+Xr.source),e0=new RegExp(Xr.source+Yr.source,"gu"),t0=new RegExp("\\d+"+Yr.source,"gu");var vo=au(sn(),1);var on=(D=0)=>u=>`\x1B[${u+D}m`,an=(D=0)=>u=>`\x1B[${38+D};5;${u}m`,ln=(D=0)=>(u,t,e)=>`\x1B[${38+D};2;${u};${t};${e}m`,su={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],overline:[53,55],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],blackBright:[90,39],gray:[90,39],grey:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgGray:[100,49],bgGrey:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}},l0=Object.keys(su.modifier),bo=Object.keys(su.color),Lo=Object.keys(su.bgColor),c0=[...bo,...Lo];function xo(){let D=new Map;for(let[u,t]of Object.entries(su)){for(let[e,r]of Object.entries(t))su[e]={open:`\x1B[${r[0]}m`,close:`\x1B[${r[1]}m`},t[e]=su[e],D.set(r[0],r[1]);Object.defineProperty(su,u,{value:t,enumerable:!1})}return Object.defineProperty(su,"codes",{value:D,enumerable:!1}),su.color.close="\x1B[39m",su.bgColor.close="\x1B[49m",su.color.ansi=on(),su.color.ansi256=an(),su.color.ansi16m=ln(),su.bgColor.ansi=on(10),su.bgColor.ansi256=an(10),su.bgColor.ansi16m=ln(10),Object.defineProperties(su,{rgbToAnsi256:{value:(u,t,e)=>u===t&&t===e?u<8?16:u>248?231:Math.round((u-8)/247*24)+232:16+36*Math.round(u/255*5)+6*Math.round(t/255*5)+Math.round(e/255*5),enumerable:!1},hexToRgb:{value:u=>{let t=/[a-f\d]{6}|[a-f\d]{3}/i.exec(u.toString(16));if(!t)return[0,0,0];let[e]=t;e.length===3&&(e=[...e].map(n=>n+n).join(""));let r=Number.parseInt(e,16);return[r>>16&255,r>>8&255,r&255]},enumerable:!1},hexToAnsi256:{value:u=>su.rgbToAnsi256(...su.hexToRgb(u)),enumerable:!1},ansi256ToAnsi:{value:u=>{if(u<8)return 30+u;if(u<16)return 90+(u-8);let t,e,r;if(u>=232)t=((u-232)*10+8)/255,e=t,r=t;else{u-=16;let s=u%36;t=Math.floor(u/36)/5,e=Math.floor(s/6)/5,r=s%6/5}let n=Math.max(t,e,r)*2;if(n===0)return 30;let i=30+(Math.round(r)<<2|Math.round(e)<<1|Math.round(t));return n===2&&(i+=60),i},enumerable:!1},rgbToAnsi:{value:(u,t,e)=>su.ansi256ToAnsi(su.rgbToAnsi256(u,t,e)),enumerable:!1},hexToAnsi:{value:u=>su.ansi256ToAnsi(su.hexToAnsi256(u)),enumerable:!1}}),su}var f0=xo();var Io="]";var d0=`${Io}8;;`;var Oo=au(Kt(),1);var at=(D,u,t="blue")=>console.log(st[t](D)+` ${u}`);var So=["src","lib"],No=(D,u)=>{let t=`${D}/${u}`;return ue.default.existsSync(t)||ue.default.mkdirSync(t),t},Mo=(D,u,t)=>{let e=`${D}/${u}/${(0,cn.paramCase)(t)}`;return ue.default.existsSync(e)||ue.default.mkdirSync(e),e},jo=(D,u)=>{let t=`${D}/${u.filename}`;ue.default.existsSync(t)?at("EXIST",u.filename,"blackBright"):ue.default.writeFile(t,u.content,{encoding:"utf-8"},e=>{e?at("FAILED CREATE",u.filename,"red"):at("CREATED",u.filename,"green")})},Po=(D,u,t)=>{Rr.forEach(e=>jo(t,e(u,D)))},fn=(D,u)=>{let t=new Ie(So).findSourcePath();if(!t)throw new Error("Source path not found");No(t,u),Po(u,D,Mo(t,u,D))};var qi=au(Ni()),Vi=au(ji());var Pi=`flf2a$ 6 5 16 15 13 0 24463 229
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
         `;var PD=au(ki());function Hi(){PD.default.parseFont("Standard",Pi),(0,PD.default)("FSD CLI",(D,u)=>D?console.error(D):console.log(st.blue(u)))}var WD=au(require("fs")),zi=au(require("path")),Ui=zi.default.resolve(__dirname,"./.firstrun");WD.default.existsSync(Ui)||(Hi(),WD.default.writeFileSync(Ui,""));var Gi={widget:{alias:"w",description:"Generate widget",example:"fsd g -w placeholder"},page:{alias:"p",description:"Generate page",example:"fsd g -p user-creation"},feature:{alias:"f",description:"Generate feature",example:"fsd g -f cart"},entity:{alias:"e",description:"Generate entity",example:"fsd g -e cartItem"}};(0,qi.default)((0,Vi.hideBin)(process.argv)).command({command:"generate",describe:"Generate slice",aliases:["g"],builder:Gi,handler:D=>{for(let u in Gi)D[u]&&fn(D[u],u)}}).alias({h:"help",v:"version"}).demandCommand().parse();
