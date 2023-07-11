#!/usr/bin/env node
"use strict";var js=Object.create;var ut=Object.defineProperty;var Ps=Object.getOwnPropertyDescriptor;var Ws=Object.getOwnPropertyNames;var $s=Object.getPrototypeOf,ks=Object.prototype.hasOwnProperty;var Hs=(D,u)=>()=>(D&&(u=D(D=0)),u);var Y=(D,u)=>()=>(u||D((u={exports:{}}).exports,u),u.exports),Us=(D,u)=>{for(var t in u)ut(D,t,{get:u[t],enumerable:!0})},an=(D,u,t,e)=>{if(u&&typeof u=="object"||typeof u=="function")for(let n of Ws(u))!ks.call(D,n)&&n!==t&&ut(D,n,{get:()=>u[n],enumerable:!(e=Ps(u,n))||e.enumerable});return D};var au=(D,u,t)=>(t=D!=null?js($s(D)):{},an(u||!D||!D.__esModule?ut(t,"default",{value:D,enumerable:!0}):t,D)),Mu=D=>an(ut({},"__esModule",{value:!0}),D);var xu={};Us(xu,{__addDisposableResource:()=>vn,__assign:()=>et,__asyncDelegator:()=>Tn,__asyncGenerator:()=>An,__asyncValues:()=>Bn,__await:()=>Ee,__awaiter:()=>Cn,__classPrivateFieldGet:()=>yn,__classPrivateFieldIn:()=>Rn,__classPrivateFieldSet:()=>In,__createBinding:()=>Dt,__decorate:()=>_n,__disposeResources:()=>On,__esDecorate:()=>Gs,__exportStar:()=>dn,__extends:()=>cn,__generator:()=>En,__importDefault:()=>xn,__importStar:()=>Ln,__makeTemplateObject:()=>bn,__metadata:()=>Fn,__param:()=>hn,__propKey:()=>Vs,__read:()=>Gt,__rest:()=>fn,__runInitializers:()=>qs,__setFunctionName:()=>zs,__spread:()=>gn,__spreadArray:()=>mn,__spreadArrays:()=>pn,__values:()=>tt,default:()=>Xs});function cn(D,u){if(typeof u!="function"&&u!==null)throw new TypeError("Class extends value "+String(u)+" is not a constructor or null");Ut(D,u);function t(){this.constructor=D}D.prototype=u===null?Object.create(u):(t.prototype=u.prototype,new t)}function fn(D,u){var t={};for(var e in D)Object.prototype.hasOwnProperty.call(D,e)&&u.indexOf(e)<0&&(t[e]=D[e]);if(D!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(D);n<e.length;n++)u.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(D,e[n])&&(t[e[n]]=D[e[n]]);return t}function _n(D,u,t,e){var n=arguments.length,r=n<3?u:e===null?e=Object.getOwnPropertyDescriptor(u,t):e,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(D,u,t,e);else for(var s=D.length-1;s>=0;s--)(i=D[s])&&(r=(n<3?i(r):n>3?i(u,t,r):i(u,t))||r);return n>3&&r&&Object.defineProperty(u,t,r),r}function hn(D,u){return function(t,e){u(t,e,D)}}function Gs(D,u,t,e,n,r){function i(k){if(k!==void 0&&typeof k!="function")throw new TypeError("Function expected");return k}for(var s=e.kind,f=s==="getter"?"get":s==="setter"?"set":"value",a=!u&&D?e.static?D:D.prototype:null,_=u||(a?Object.getOwnPropertyDescriptor(a,e.name):{}),A,b=!1,W=t.length-1;W>=0;W--){var L={};for(var m in e)L[m]=m==="access"?{}:e[m];for(var m in e.access)L.access[m]=e.access[m];L.addInitializer=function(k){if(b)throw new TypeError("Cannot add initializers after decoration has completed");r.push(i(k||null))};var F=(0,t[W])(s==="accessor"?{get:_.get,set:_.set}:_[f],L);if(s==="accessor"){if(F===void 0)continue;if(F===null||typeof F!="object")throw new TypeError("Object expected");(A=i(F.get))&&(_.get=A),(A=i(F.set))&&(_.set=A),(A=i(F.init))&&n.unshift(A)}else(A=i(F))&&(s==="field"?n.unshift(A):_[f]=A)}a&&Object.defineProperty(a,e.name,_),b=!0}function qs(D,u,t){for(var e=arguments.length>2,n=0;n<u.length;n++)t=e?u[n].call(D,t):u[n].call(D);return e?t:void 0}function Vs(D){return typeof D=="symbol"?D:"".concat(D)}function zs(D,u,t){return typeof u=="symbol"&&(u=u.description?"[".concat(u.description,"]"):""),Object.defineProperty(D,"name",{configurable:!0,value:t?"".concat(t," ",u):u})}function Fn(D,u){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(D,u)}function Cn(D,u,t,e){function n(r){return r instanceof t?r:new t(function(i){i(r)})}return new(t||(t=Promise))(function(r,i){function s(_){try{a(e.next(_))}catch(A){i(A)}}function f(_){try{a(e.throw(_))}catch(A){i(A)}}function a(_){_.done?r(_.value):n(_.value).then(s,f)}a((e=e.apply(D,u||[])).next())})}function En(D,u){var t={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},e,n,r,i;return i={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function s(a){return function(_){return f([a,_])}}function f(a){if(e)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(t=0)),t;)try{if(e=1,n&&(r=a[0]&2?n.return:a[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,a[1])).done)return r;switch(n=0,r&&(a=[a[0]&2,r.value]),a[0]){case 0:case 1:r=a;break;case 4:return t.label++,{value:a[1],done:!1};case 5:t.label++,n=a[1],a=[0];continue;case 7:a=t.ops.pop(),t.trys.pop();continue;default:if(r=t.trys,!(r=r.length>0&&r[r.length-1])&&(a[0]===6||a[0]===2)){t=0;continue}if(a[0]===3&&(!r||a[1]>r[0]&&a[1]<r[3])){t.label=a[1];break}if(a[0]===6&&t.label<r[1]){t.label=r[1],r=a;break}if(r&&t.label<r[2]){t.label=r[2],t.ops.push(a);break}r[2]&&t.ops.pop(),t.trys.pop();continue}a=u.call(D,t)}catch(_){a=[6,_],n=0}finally{e=r=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}}function dn(D,u){for(var t in D)t!=="default"&&!Object.prototype.hasOwnProperty.call(u,t)&&Dt(u,D,t)}function tt(D){var u=typeof Symbol=="function"&&Symbol.iterator,t=u&&D[u],e=0;if(t)return t.call(D);if(D&&typeof D.length=="number")return{next:function(){return D&&e>=D.length&&(D=void 0),{value:D&&D[e++],done:!D}}};throw new TypeError(u?"Object is not iterable.":"Symbol.iterator is not defined.")}function Gt(D,u){var t=typeof Symbol=="function"&&D[Symbol.iterator];if(!t)return D;var e=t.call(D),n,r=[],i;try{for(;(u===void 0||u-- >0)&&!(n=e.next()).done;)r.push(n.value)}catch(s){i={error:s}}finally{try{n&&!n.done&&(t=e.return)&&t.call(e)}finally{if(i)throw i.error}}return r}function gn(){for(var D=[],u=0;u<arguments.length;u++)D=D.concat(Gt(arguments[u]));return D}function pn(){for(var D=0,u=0,t=arguments.length;u<t;u++)D+=arguments[u].length;for(var e=Array(D),n=0,u=0;u<t;u++)for(var r=arguments[u],i=0,s=r.length;i<s;i++,n++)e[n]=r[i];return e}function mn(D,u,t){if(t||arguments.length===2)for(var e=0,n=u.length,r;e<n;e++)(r||!(e in u))&&(r||(r=Array.prototype.slice.call(u,0,e)),r[e]=u[e]);return D.concat(r||Array.prototype.slice.call(u))}function Ee(D){return this instanceof Ee?(this.v=D,this):new Ee(D)}function An(D,u,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t.apply(D,u||[]),n,r=[];return n={},i("next"),i("throw"),i("return"),n[Symbol.asyncIterator]=function(){return this},n;function i(b){e[b]&&(n[b]=function(W){return new Promise(function(L,m){r.push([b,W,L,m])>1||s(b,W)})})}function s(b,W){try{f(e[b](W))}catch(L){A(r[0][3],L)}}function f(b){b.value instanceof Ee?Promise.resolve(b.value.v).then(a,_):A(r[0][2],b)}function a(b){s("next",b)}function _(b){s("throw",b)}function A(b,W){b(W),r.shift(),r.length&&s(r[0][0],r[0][1])}}function Tn(D){var u,t;return u={},e("next"),e("throw",function(n){throw n}),e("return"),u[Symbol.iterator]=function(){return this},u;function e(n,r){u[n]=D[n]?function(i){return(t=!t)?{value:Ee(D[n](i)),done:!1}:r?r(i):i}:r}}function Bn(D){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var u=D[Symbol.asyncIterator],t;return u?u.call(D):(D=typeof tt=="function"?tt(D):D[Symbol.iterator](),t={},e("next"),e("throw"),e("return"),t[Symbol.asyncIterator]=function(){return this},t);function e(r){t[r]=D[r]&&function(i){return new Promise(function(s,f){i=D[r](i),n(s,f,i.done,i.value)})}}function n(r,i,s,f){Promise.resolve(f).then(function(a){r({value:a,done:s})},i)}}function bn(D,u){return Object.defineProperty?Object.defineProperty(D,"raw",{value:u}):D.raw=u,D}function Ln(D){if(D&&D.__esModule)return D;var u={};if(D!=null)for(var t in D)t!=="default"&&Object.prototype.hasOwnProperty.call(D,t)&&Dt(u,D,t);return Ks(u,D),u}function xn(D){return D&&D.__esModule?D:{default:D}}function yn(D,u,t,e){if(t==="a"&&!e)throw new TypeError("Private accessor was defined without a getter");if(typeof u=="function"?D!==u||!e:!u.has(D))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?e:t==="a"?e.call(D):e?e.value:u.get(D)}function In(D,u,t,e,n){if(e==="m")throw new TypeError("Private method is not writable");if(e==="a"&&!n)throw new TypeError("Private accessor was defined without a setter");if(typeof u=="function"?D!==u||!n:!u.has(D))throw new TypeError("Cannot write private member to an object whose class did not declare it");return e==="a"?n.call(D,t):n?n.value=t:u.set(D,t),t}function Rn(D,u){if(u===null||typeof u!="object"&&typeof u!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof D=="function"?u===D:D.has(u)}function vn(D,u,t){if(u!=null){if(typeof u!="object")throw new TypeError("Object expected.");var e;if(t){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");e=u[Symbol.asyncDispose]}if(e===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");e=u[Symbol.dispose]}if(typeof e!="function")throw new TypeError("Object not disposable.");D.stack.push({value:u,dispose:e,async:t})}else t&&D.stack.push({async:!0});return u}function On(D){function u(e){D.error=D.hasError?new Ys(e,D.error,"An error was suppressed during disposal."):e,D.hasError=!0}function t(){for(;D.stack.length;){var e=D.stack.pop();try{var n=e.dispose&&e.dispose.call(e.value);if(e.async)return Promise.resolve(n).then(t,function(r){return u(r),t()})}catch(r){u(r)}}if(D.hasError)throw D.error}return t()}var Ut,et,Dt,Ks,Ys,Xs,yu=Hs(()=>{Ut=function(D,u){return Ut=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},Ut(D,u)};et=function(){return et=Object.assign||function(u){for(var t,e=1,n=arguments.length;e<n;e++){t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(u[r]=t[r])}return u},et.apply(this,arguments)};Dt=Object.create?function(D,u,t,e){e===void 0&&(e=t);var n=Object.getOwnPropertyDescriptor(u,t);(!n||("get"in n?!u.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return u[t]}}),Object.defineProperty(D,e,n)}:function(D,u,t,e){e===void 0&&(e=t),D[e]=u[t]};Ks=Object.create?function(D,u){Object.defineProperty(D,"default",{enumerable:!0,value:u})}:function(D,u){D.default=u};Ys=typeof SuppressedError=="function"?SuppressedError:function(D,u,t){var e=new Error(t);return e.name="SuppressedError",e.error=D,e.suppressed=u,e};Xs={__extends:cn,__assign:et,__rest:fn,__decorate:_n,__param:hn,__metadata:Fn,__awaiter:Cn,__generator:En,__createBinding:Dt,__exportStar:dn,__values:tt,__read:Gt,__spread:gn,__spreadArrays:pn,__spreadArray:mn,__await:Ee,__asyncGenerator:An,__asyncDelegator:Tn,__asyncValues:Bn,__makeTemplateObject:bn,__importStar:Ln,__importDefault:xn,__classPrivateFieldGet:yn,__classPrivateFieldSet:In,__classPrivateFieldIn:Rn,__addDisposableResource:vn,__disposeResources:On}});var Sn=Y(de=>{"use strict";Object.defineProperty(de,"__esModule",{value:!0});de.lowerCase=de.localeLowerCase=void 0;var Zs={tr:{regexp:/\u0130|\u0049|\u0049\u0307/g,map:{\u0130:"i",I:"\u0131",I\u0307:"i"}},az:{regexp:/\u0130/g,map:{\u0130:"i",I:"\u0131",I\u0307:"i"}},lt:{regexp:/\u0049|\u004A|\u012E|\u00CC|\u00CD|\u0128/g,map:{I:"i\u0307",J:"j\u0307",\u012E:"\u012F\u0307",\u00CC:"i\u0307\u0300",\u00CD:"i\u0307\u0301",\u0128:"i\u0307\u0303"}}};function Js(D,u){var t=Zs[u.toLowerCase()];return qt(t?D.replace(t.regexp,function(e){return t.map[e]}):D)}de.localeLowerCase=Js;function qt(D){return D.toLowerCase()}de.lowerCase=qt});var te=Y(nt=>{"use strict";Object.defineProperty(nt,"__esModule",{value:!0});nt.noCase=void 0;var Qs=Sn(),uo=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],eo=/[^A-Z0-9]+/gi;function to(D,u){u===void 0&&(u={});for(var t=u.splitRegexp,e=t===void 0?uo:t,n=u.stripRegexp,r=n===void 0?eo:n,i=u.transform,s=i===void 0?Qs.lowerCase:i,f=u.delimiter,a=f===void 0?" ":f,_=wn(wn(D,e,"$1\0$2"),r,"\0"),A=0,b=_.length;_.charAt(A)==="\0";)A++;for(;_.charAt(b-1)==="\0";)b--;return _.slice(A,b).split("\0").map(s).join(a)}nt.noCase=to;function wn(D,u,t){return u instanceof RegExp?D.replace(u,t):u.reduce(function(e,n){return e.replace(n,t)},D)}});var Vt=Y(Yu=>{"use strict";Object.defineProperty(Yu,"__esModule",{value:!0});Yu.pascalCase=Yu.pascalCaseTransformMerge=Yu.pascalCaseTransform=void 0;var Do=(yu(),Mu(xu)),no=te();function Nn(D,u){var t=D.charAt(0),e=D.substr(1).toLowerCase();return u>0&&t>="0"&&t<="9"?"_"+t+e:""+t.toUpperCase()+e}Yu.pascalCaseTransform=Nn;function ro(D){return D.charAt(0).toUpperCase()+D.slice(1).toLowerCase()}Yu.pascalCaseTransformMerge=ro;function io(D,u){return u===void 0&&(u={}),no.noCase(D,Do.__assign({delimiter:"",transform:Nn},u))}Yu.pascalCase=io});var jn=Y(Xu=>{"use strict";Object.defineProperty(Xu,"__esModule",{value:!0});Xu.camelCase=Xu.camelCaseTransformMerge=Xu.camelCaseTransform=void 0;var so=(yu(),Mu(xu)),zt=Vt();function Mn(D,u){return u===0?D.toLowerCase():zt.pascalCaseTransform(D,u)}Xu.camelCaseTransform=Mn;function oo(D,u){return u===0?D.toLowerCase():zt.pascalCaseTransformMerge(D)}Xu.camelCaseTransformMerge=oo;function ao(D,u){return u===void 0&&(u={}),zt.pascalCase(D,so.__assign({transform:Mn},u))}Xu.camelCase=ao});var Kt=Y(rt=>{"use strict";Object.defineProperty(rt,"__esModule",{value:!0});rt.upperCaseFirst=void 0;function lo(D){return D.charAt(0).toUpperCase()+D.substr(1)}rt.upperCaseFirst=lo});var Yt=Y(ge=>{"use strict";Object.defineProperty(ge,"__esModule",{value:!0});ge.capitalCase=ge.capitalCaseTransform=void 0;var co=(yu(),Mu(xu)),fo=te(),_o=Kt();function Pn(D){return _o.upperCaseFirst(D.toLowerCase())}ge.capitalCaseTransform=Pn;function ho(D,u){return u===void 0&&(u={}),fo.noCase(D,co.__assign({delimiter:" ",transform:Pn},u))}ge.capitalCase=ho});var Wn=Y(pe=>{"use strict";Object.defineProperty(pe,"__esModule",{value:!0});pe.upperCase=pe.localeUpperCase=void 0;var Fo={tr:{regexp:/[\u0069]/g,map:{i:"\u0130"}},az:{regexp:/[\u0069]/g,map:{i:"\u0130"}},lt:{regexp:/[\u0069\u006A\u012F]\u0307|\u0069\u0307[\u0300\u0301\u0303]/g,map:{i\u0307:"I",j\u0307:"J",\u012F\u0307:"\u012E",i\u0307\u0300:"\xCC",i\u0307\u0301:"\xCD",i\u0307\u0303:"\u0128"}}};function Co(D,u){var t=Fo[u.toLowerCase()];return Xt(t?D.replace(t.regexp,function(e){return t.map[e]}):D)}pe.localeUpperCase=Co;function Xt(D){return D.toUpperCase()}pe.upperCase=Xt});var $n=Y(it=>{"use strict";Object.defineProperty(it,"__esModule",{value:!0});it.constantCase=void 0;var Eo=(yu(),Mu(xu)),go=te(),po=Wn();function mo(D,u){return u===void 0&&(u={}),go.noCase(D,Eo.__assign({delimiter:"_",transform:po.upperCase},u))}it.constantCase=mo});var Ne=Y(st=>{"use strict";Object.defineProperty(st,"__esModule",{value:!0});st.dotCase=void 0;var Ao=(yu(),Mu(xu)),To=te();function Bo(D,u){return u===void 0&&(u={}),To.noCase(D,Ao.__assign({delimiter:"."},u))}st.dotCase=Bo});var kn=Y(ot=>{"use strict";Object.defineProperty(ot,"__esModule",{value:!0});ot.headerCase=void 0;var bo=(yu(),Mu(xu)),Lo=Yt();function xo(D,u){return u===void 0&&(u={}),Lo.capitalCase(D,bo.__assign({delimiter:"-"},u))}ot.headerCase=xo});var Hn=Y(at=>{"use strict";Object.defineProperty(at,"__esModule",{value:!0});at.paramCase=void 0;var yo=(yu(),Mu(xu)),Io=Ne();function Ro(D,u){return u===void 0&&(u={}),Io.dotCase(D,yo.__assign({delimiter:"-"},u))}at.paramCase=Ro});var Un=Y(lt=>{"use strict";Object.defineProperty(lt,"__esModule",{value:!0});lt.pathCase=void 0;var vo=(yu(),Mu(xu)),Oo=Ne();function So(D,u){return u===void 0&&(u={}),Oo.dotCase(D,vo.__assign({delimiter:"/"},u))}lt.pathCase=So});var qn=Y(me=>{"use strict";Object.defineProperty(me,"__esModule",{value:!0});me.sentenceCase=me.sentenceCaseTransform=void 0;var wo=(yu(),Mu(xu)),No=te(),Mo=Kt();function Gn(D,u){var t=D.toLowerCase();return u===0?Mo.upperCaseFirst(t):t}me.sentenceCaseTransform=Gn;function jo(D,u){return u===void 0&&(u={}),No.noCase(D,wo.__assign({delimiter:" ",transform:Gn},u))}me.sentenceCase=jo});var Vn=Y(ct=>{"use strict";Object.defineProperty(ct,"__esModule",{value:!0});ct.snakeCase=void 0;var Po=(yu(),Mu(xu)),Wo=Ne();function $o(D,u){return u===void 0&&(u={}),Wo.dotCase(D,Po.__assign({delimiter:"_"},u))}ct.snakeCase=$o});var De=Y(mu=>{"use strict";Object.defineProperty(mu,"__esModule",{value:!0});var ju=(yu(),Mu(xu));ju.__exportStar(jn(),mu);ju.__exportStar(Yt(),mu);ju.__exportStar($n(),mu);ju.__exportStar(Ne(),mu);ju.__exportStar(kn(),mu);ju.__exportStar(te(),mu);ju.__exportStar(Hn(),mu);ju.__exportStar(Vt(),mu);ju.__exportStar(Un(),mu);ju.__exportStar(qn(),mu);ju.__exportStar(Vn(),mu)});var Qt=Y((I0,Jt)=>{var Zu={};typeof Jt>"u"?window.eastasianwidth=Zu:Jt.exports=Zu;Zu.eastAsianWidth=function(D){var u=D.charCodeAt(0),t=D.length==2?D.charCodeAt(1):0,e=u;return 55296<=u&&u<=56319&&56320<=t&&t<=57343&&(u&=1023,t&=1023,e=u<<10|t,e+=65536),e==12288||65281<=e&&e<=65376||65504<=e&&e<=65510?"F":e==8361||65377<=e&&e<=65470||65474<=e&&e<=65479||65482<=e&&e<=65487||65490<=e&&e<=65495||65498<=e&&e<=65500||65512<=e&&e<=65518?"H":4352<=e&&e<=4447||4515<=e&&e<=4519||4602<=e&&e<=4607||9001<=e&&e<=9002||11904<=e&&e<=11929||11931<=e&&e<=12019||12032<=e&&e<=12245||12272<=e&&e<=12283||12289<=e&&e<=12350||12353<=e&&e<=12438||12441<=e&&e<=12543||12549<=e&&e<=12589||12593<=e&&e<=12686||12688<=e&&e<=12730||12736<=e&&e<=12771||12784<=e&&e<=12830||12832<=e&&e<=12871||12880<=e&&e<=13054||13056<=e&&e<=19903||19968<=e&&e<=42124||42128<=e&&e<=42182||43360<=e&&e<=43388||44032<=e&&e<=55203||55216<=e&&e<=55238||55243<=e&&e<=55291||63744<=e&&e<=64255||65040<=e&&e<=65049||65072<=e&&e<=65106||65108<=e&&e<=65126||65128<=e&&e<=65131||110592<=e&&e<=110593||127488<=e&&e<=127490||127504<=e&&e<=127546||127552<=e&&e<=127560||127568<=e&&e<=127569||131072<=e&&e<=194367||177984<=e&&e<=196605||196608<=e&&e<=262141?"W":32<=e&&e<=126||162<=e&&e<=163||165<=e&&e<=166||e==172||e==175||10214<=e&&e<=10221||10629<=e&&e<=10630?"Na":e==161||e==164||167<=e&&e<=168||e==170||173<=e&&e<=174||176<=e&&e<=180||182<=e&&e<=186||188<=e&&e<=191||e==198||e==208||215<=e&&e<=216||222<=e&&e<=225||e==230||232<=e&&e<=234||236<=e&&e<=237||e==240||242<=e&&e<=243||247<=e&&e<=250||e==252||e==254||e==257||e==273||e==275||e==283||294<=e&&e<=295||e==299||305<=e&&e<=307||e==312||319<=e&&e<=322||e==324||328<=e&&e<=331||e==333||338<=e&&e<=339||358<=e&&e<=359||e==363||e==462||e==464||e==466||e==468||e==470||e==472||e==474||e==476||e==593||e==609||e==708||e==711||713<=e&&e<=715||e==717||e==720||728<=e&&e<=731||e==733||e==735||768<=e&&e<=879||913<=e&&e<=929||931<=e&&e<=937||945<=e&&e<=961||963<=e&&e<=969||e==1025||1040<=e&&e<=1103||e==1105||e==8208||8211<=e&&e<=8214||8216<=e&&e<=8217||8220<=e&&e<=8221||8224<=e&&e<=8226||8228<=e&&e<=8231||e==8240||8242<=e&&e<=8243||e==8245||e==8251||e==8254||e==8308||e==8319||8321<=e&&e<=8324||e==8364||e==8451||e==8453||e==8457||e==8467||e==8470||8481<=e&&e<=8482||e==8486||e==8491||8531<=e&&e<=8532||8539<=e&&e<=8542||8544<=e&&e<=8555||8560<=e&&e<=8569||e==8585||8592<=e&&e<=8601||8632<=e&&e<=8633||e==8658||e==8660||e==8679||e==8704||8706<=e&&e<=8707||8711<=e&&e<=8712||e==8715||e==8719||e==8721||e==8725||e==8730||8733<=e&&e<=8736||e==8739||e==8741||8743<=e&&e<=8748||e==8750||8756<=e&&e<=8759||8764<=e&&e<=8765||e==8776||e==8780||e==8786||8800<=e&&e<=8801||8804<=e&&e<=8807||8810<=e&&e<=8811||8814<=e&&e<=8815||8834<=e&&e<=8835||8838<=e&&e<=8839||e==8853||e==8857||e==8869||e==8895||e==8978||9312<=e&&e<=9449||9451<=e&&e<=9547||9552<=e&&e<=9587||9600<=e&&e<=9615||9618<=e&&e<=9621||9632<=e&&e<=9633||9635<=e&&e<=9641||9650<=e&&e<=9651||9654<=e&&e<=9655||9660<=e&&e<=9661||9664<=e&&e<=9665||9670<=e&&e<=9672||e==9675||9678<=e&&e<=9681||9698<=e&&e<=9701||e==9711||9733<=e&&e<=9734||e==9737||9742<=e&&e<=9743||9748<=e&&e<=9749||e==9756||e==9758||e==9792||e==9794||9824<=e&&e<=9825||9827<=e&&e<=9829||9831<=e&&e<=9834||9836<=e&&e<=9837||e==9839||9886<=e&&e<=9887||9918<=e&&e<=9919||9924<=e&&e<=9933||9935<=e&&e<=9953||e==9955||9960<=e&&e<=9983||e==10045||e==10071||10102<=e&&e<=10111||11093<=e&&e<=11097||12872<=e&&e<=12879||57344<=e&&e<=63743||65024<=e&&e<=65039||e==65533||127232<=e&&e<=127242||127248<=e&&e<=127277||127280<=e&&e<=127337||127344<=e&&e<=127386||917760<=e&&e<=917999||983040<=e&&e<=1048573||1048576<=e&&e<=1114109?"A":"N"};Zu.characterLength=function(D){var u=this.eastAsianWidth(D);return u=="F"||u=="W"||u=="A"?2:1};function ur(D){return D.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g)||[]}Zu.length=function(D){for(var u=ur(D),t=0,e=0;e<u.length;e++)t=t+this.characterLength(u[e]);return t};Zu.slice=function(D,u,t){textLen=Zu.length(D),u=u||0,t=t||1,u<0&&(u=textLen+u),t<0&&(t=textLen+t);for(var e="",n=0,r=ur(D),i=0;i<r.length;i++){var s=r[i],f=Zu.length(s);if(n>=u-(f==2?1:0))if(n+f<=t)e+=s;else break;n+=f}return e}});var tr=Y((R0,er)=>{"use strict";er.exports=function(){return/\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g}});var Er=Y((V0,Cr)=>{"use strict";Cr.exports=function(){return/\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g}});var pr=Y((Z0,Da)=>{Da.exports={single:{topLeft:"\u250C",top:"\u2500",topRight:"\u2510",right:"\u2502",bottomRight:"\u2518",bottom:"\u2500",bottomLeft:"\u2514",left:"\u2502"},double:{topLeft:"\u2554",top:"\u2550",topRight:"\u2557",right:"\u2551",bottomRight:"\u255D",bottom:"\u2550",bottomLeft:"\u255A",left:"\u2551"},round:{topLeft:"\u256D",top:"\u2500",topRight:"\u256E",right:"\u2502",bottomRight:"\u256F",bottom:"\u2500",bottomLeft:"\u2570",left:"\u2502"},bold:{topLeft:"\u250F",top:"\u2501",topRight:"\u2513",right:"\u2503",bottomRight:"\u251B",bottom:"\u2501",bottomLeft:"\u2517",left:"\u2503"},singleDouble:{topLeft:"\u2553",top:"\u2500",topRight:"\u2556",right:"\u2551",bottomRight:"\u255C",bottom:"\u2500",bottomLeft:"\u2559",left:"\u2551"},doubleSingle:{topLeft:"\u2552",top:"\u2550",topRight:"\u2555",right:"\u2502",bottomRight:"\u255B",bottom:"\u2550",bottomLeft:"\u2558",left:"\u2502"},classic:{topLeft:"+",top:"-",topRight:"+",right:"|",bottomRight:"+",bottom:"-",bottomLeft:"+",left:"|"},arrow:{topLeft:"\u2198",top:"\u2193",topRight:"\u2199",right:"\u2190",bottomRight:"\u2196",bottom:"\u2191",bottomLeft:"\u2197",left:"\u2192"}}});var oD=Y((J0,sD)=>{"use strict";var mr=pr();sD.exports=mr;sD.exports.default=mr});var xr=Y((uc,Lr)=>{"use strict";Lr.exports=({onlyFirst:D=!1}={})=>{let u=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");return new RegExp(u,D?void 0:"g")}});var Et=Y((ec,yr)=>{"use strict";var la=xr();yr.exports=D=>typeof D=="string"?D.replace(la(),""):D});var Rr=Y((tc,cD)=>{"use strict";var Ir=D=>Number.isNaN(D)?!1:D>=4352&&(D<=4447||D===9001||D===9002||11904<=D&&D<=12871&&D!==12351||12880<=D&&D<=19903||19968<=D&&D<=42182||43360<=D&&D<=43388||44032<=D&&D<=55203||63744<=D&&D<=64255||65040<=D&&D<=65049||65072<=D&&D<=65131||65281<=D&&D<=65376||65504<=D&&D<=65510||110592<=D&&D<=110593||127488<=D&&D<=127569||131072<=D&&D<=262141);cD.exports=Ir;cD.exports.default=Ir});var Or=Y((Dc,vr)=>{"use strict";vr.exports=function(){return/\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g}});var $e=Y((nc,fD)=>{"use strict";var ca=Et(),fa=Rr(),_a=Or(),Sr=D=>{if(typeof D!="string"||D.length===0||(D=ca(D),D.length===0))return 0;D=D.replace(_a(),"  ");let u=0;for(let t=0;t<D.length;t++){let e=D.codePointAt(t);e<=31||e>=127&&e<=159||e>=768&&e<=879||(e>65535&&t++,u+=fa(e)?2:1)}return u};fD.exports=Sr;fD.exports.default=Sr});var Nr=Y((rc,wr)=>{"use strict";var ha=$e();function ne(D,u){if(!D)return D;u=u||{};let t=u.align||"center";if(t==="left")return D;let e=u.split||`
`,n=u.pad||" ",r=t!=="right"?Fa:Ca,i=!1;Array.isArray(D)||(i=!0,D=String(D).split(e));let s,f=0;return D=D.map(function(a){return a=String(a),s=ha(a),f=Math.max(s,f),{str:a,width:s}}).map(function(a){return new Array(r(f,a.width)+1).join(n)+a.str}),i?D.join(e):D}ne.left=function(u){return ne(u,{align:"left"})};ne.center=function(u){return ne(u,{align:"center"})};ne.right=function(u){return ne(u,{align:"right"})};wr.exports=ne;function Fa(D,u){return Math.floor((D-u)/2)}function Ca(D,u){return D-u}});var ni=Y((Pc,Di)=>{"use strict";var gD=require("fs"),Ha=require("util"),Ua=require("path"),Wu,pD=class{constructor(u){u=u||{},this.directory=u.directory||"./locales",this.updateFiles=typeof u.updateFiles=="boolean"?u.updateFiles:!0,this.locale=u.locale||"en",this.fallbackToLanguage=typeof u.fallbackToLanguage=="boolean"?u.fallbackToLanguage:!0,this.cache=Object.create(null),this.writeQueue=[]}__(...u){if(typeof arguments[0]!="string")return this._taggedLiteral(arguments[0],...arguments);let t=u.shift(),e=function(){};return typeof u[u.length-1]=="function"&&(e=u.pop()),e=e||function(){},this.cache[this.locale]||this._readLocaleFile(),!this.cache[this.locale][t]&&this.updateFiles?(this.cache[this.locale][t]=t,this._enqueueWrite({directory:this.directory,locale:this.locale,cb:e})):e(),Wu.format.apply(Wu.format,[this.cache[this.locale][t]||t].concat(u))}__n(){let u=Array.prototype.slice.call(arguments),t=u.shift(),e=u.shift(),n=u.shift(),r=function(){};typeof u[u.length-1]=="function"&&(r=u.pop()),this.cache[this.locale]||this._readLocaleFile();let i=n===1?t:e;this.cache[this.locale][t]&&(i=this.cache[this.locale][t][n===1?"one":"other"]),!this.cache[this.locale][t]&&this.updateFiles?(this.cache[this.locale][t]={one:t,other:e},this._enqueueWrite({directory:this.directory,locale:this.locale,cb:r})):r();let s=[i];return~i.indexOf("%d")&&s.push(n),Wu.format.apply(Wu.format,s.concat(u))}setLocale(u){this.locale=u}getLocale(){return this.locale}updateLocale(u){this.cache[this.locale]||this._readLocaleFile();for(let t in u)Object.prototype.hasOwnProperty.call(u,t)&&(this.cache[this.locale][t]=u[t])}_taggedLiteral(u,...t){let e="";return u.forEach(function(n,r){let i=t[r+1];e+=n,typeof i<"u"&&(e+="%s")}),this.__.apply(this,[e].concat([].slice.call(t,1)))}_enqueueWrite(u){this.writeQueue.push(u),this.writeQueue.length===1&&this._processWriteQueue()}_processWriteQueue(){let u=this,t=this.writeQueue[0],e=t.directory,n=t.locale,r=t.cb,i=this._resolveLocaleFile(e,n),s=JSON.stringify(this.cache[n],null,2);Wu.fs.writeFile(i,s,"utf-8",function(f){u.writeQueue.shift(),u.writeQueue.length>0&&u._processWriteQueue(),r(f)})}_readLocaleFile(){let u={},t=this._resolveLocaleFile(this.directory,this.locale);try{Wu.fs.readFileSync&&(u=JSON.parse(Wu.fs.readFileSync(t,"utf-8")))}catch(e){if(e instanceof SyntaxError&&(e.message="syntax error in "+t),e.code==="ENOENT")u={};else throw e}this.cache[this.locale]=u}_resolveLocaleFile(u,t){let e=Wu.resolve(u,"./",t+".json");if(this.fallbackToLanguage&&!this._fileExistsSync(e)&&~t.lastIndexOf("_")){let n=Wu.resolve(u,"./",t.split("_")[0]+".json");this._fileExistsSync(n)&&(e=n)}return e}_fileExistsSync(u){return Wu.exists(u)}};function Ga(D,u){Wu=u;let t=new pD(D);return{__:t.__.bind(t),__n:t.__n.bind(t),setLocale:t.setLocale.bind(t),getLocale:t.getLocale.bind(t),updateLocale:t.updateLocale.bind(t),locale:t.locale}}var qa={fs:{readFileSync:gD.readFileSync,writeFile:gD.writeFile},format:Ha.format,resolve:Ua.resolve,exists:D=>{try{return gD.statSync(D).isFile()}catch{return!1}}},Va=D=>Ga(D,qa);Di.exports=Va});var LD=Y((Wc,fi)=>{"use strict";var za=require("util"),ri=require("path"),Ka=require("fs");function Ge(D){if(D!==D.toLowerCase()&&D!==D.toUpperCase()||(D=D.toLowerCase()),D.indexOf("-")===-1&&D.indexOf("_")===-1)return D;{let t="",e=!1,n=D.match(/^-+/);for(let r=n?n[0].length:0;r<D.length;r++){let i=D.charAt(r);e&&(e=!1,i=i.toUpperCase()),r!==0&&(i==="-"||i==="_")?e=!0:i!=="-"&&i!=="_"&&(t+=i)}return t}}function ai(D,u){let t=D.toLowerCase();u=u||"-";let e="";for(let n=0;n<D.length;n++){let r=t.charAt(n),i=D.charAt(n);r!==i&&n>0?e+=`${u}${t.charAt(n)}`:e+=i}return e}function li(D){return D==null?!1:typeof D=="number"||/^0x[0-9a-f]+$/i.test(D)?!0:/^0[^.]/.test(D)?!1:/^[-]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(D)}function Ya(D){if(Array.isArray(D))return D.map(i=>typeof i!="string"?i+"":i);D=D.trim();let u=0,t=null,e=null,n=null,r=[];for(let i=0;i<D.length;i++){if(t=e,e=D.charAt(i),e===" "&&!n){t!==" "&&u++;continue}e===n?n=null:(e==="'"||e==='"')&&!n&&(n=e),r[u]||(r[u]=""),r[u]+=e}return r}var $u;(function(D){D.BOOLEAN="boolean",D.STRING="string",D.NUMBER="number",D.ARRAY="array"})($u||($u={}));var Vu,bD=class{constructor(u){Vu=u}parse(u,t){let e=Object.assign({alias:void 0,array:void 0,boolean:void 0,config:void 0,configObjects:void 0,configuration:void 0,coerce:void 0,count:void 0,default:void 0,envPrefix:void 0,narg:void 0,normalize:void 0,string:void 0,number:void 0,__:void 0,key:void 0},t),n=Ya(u),r=typeof u=="string",i=Xa(Object.assign(Object.create(null),e.alias)),s=Object.assign({"boolean-negation":!0,"camel-case-expansion":!0,"combine-arrays":!1,"dot-notation":!0,"duplicate-arguments-array":!0,"flatten-duplicate-arrays":!0,"greedy-arrays":!0,"halt-at-non-option":!1,"nargs-eats-options":!1,"negation-prefix":"no-","parse-numbers":!0,"parse-positional-numbers":!0,"populate--":!1,"set-placeholder-key":!1,"short-option-groups":!0,"strip-aliased":!1,"strip-dashed":!1,"unknown-options-as-args":!1},e.configuration),f=Object.assign(Object.create(null),e.default),a=e.configObjects||[],_=e.envPrefix,A=s["populate--"],b=A?"--":"_",W=Object.create(null),L=Object.create(null),m=e.__||Vu.format,F={aliases:Object.create(null),arrays:Object.create(null),bools:Object.create(null),strings:Object.create(null),numbers:Object.create(null),counts:Object.create(null),normalize:Object.create(null),configs:Object.create(null),nargs:Object.create(null),coercions:Object.create(null),keys:[]},k=/^-([0-9]+(\.[0-9]+)?|\.[0-9]+)$/,q=new RegExp("^--"+s["negation-prefix"]+"(.+)");[].concat(e.array||[]).filter(Boolean).forEach(function(h){let g=typeof h=="object"?h.key:h,I=Object.keys(h).map(function(T){return{boolean:"bools",string:"strings",number:"numbers"}[T]}).filter(Boolean).pop();I&&(F[I][g]=!0),F.arrays[g]=!0,F.keys.push(g)}),[].concat(e.boolean||[]).filter(Boolean).forEach(function(h){F.bools[h]=!0,F.keys.push(h)}),[].concat(e.string||[]).filter(Boolean).forEach(function(h){F.strings[h]=!0,F.keys.push(h)}),[].concat(e.number||[]).filter(Boolean).forEach(function(h){F.numbers[h]=!0,F.keys.push(h)}),[].concat(e.count||[]).filter(Boolean).forEach(function(h){F.counts[h]=!0,F.keys.push(h)}),[].concat(e.normalize||[]).filter(Boolean).forEach(function(h){F.normalize[h]=!0,F.keys.push(h)}),typeof e.narg=="object"&&Object.entries(e.narg).forEach(([h,g])=>{typeof g=="number"&&(F.nargs[h]=g,F.keys.push(h))}),typeof e.coerce=="object"&&Object.entries(e.coerce).forEach(([h,g])=>{typeof g=="function"&&(F.coercions[h]=g,F.keys.push(h))}),typeof e.config<"u"&&(Array.isArray(e.config)||typeof e.config=="string"?[].concat(e.config).filter(Boolean).forEach(function(h){F.configs[h]=!0}):typeof e.config=="object"&&Object.entries(e.config).forEach(([h,g])=>{(typeof g=="boolean"||typeof g=="function")&&(F.configs[h]=g)})),l(e.key,i,e.default,F.arrays),Object.keys(f).forEach(function(h){(F.aliases[h]||[]).forEach(function(g){f[g]=f[h]})});let G=null;eu();let J=[],X=Object.assign(Object.create(null),{_:[]}),Lu={};for(let h=0;h<n.length;h++){let g=n[h],I=g.replace(/^-{3,}/,"---"),T,E,R,S,U,Fu;if(g!=="--"&&/^-/.test(g)&&x(g))nu(g);else if(I.match(/^---+(=|$)/)){nu(g);continue}else if(g.match(/^--.+=/)||!s["short-option-groups"]&&g.match(/^-.+=/))S=g.match(/^--?([^=]+)=([\s\S]*)$/),S!==null&&Array.isArray(S)&&S.length>=3&&(c(S[1],F.arrays)?h=$(h,S[1],n,S[2]):c(S[1],F.nargs)!==!1?h=y(h,S[1],n,S[2]):j(S[1],S[2],!0));else if(g.match(q)&&s["boolean-negation"])S=g.match(q),S!==null&&Array.isArray(S)&&S.length>=2&&(E=S[1],j(E,c(E,F.arrays)?[!1]:!1));else if(g.match(/^--.+/)||!s["short-option-groups"]&&g.match(/^-[^-]+/))S=g.match(/^--?(.+)/),S!==null&&Array.isArray(S)&&S.length>=2&&(E=S[1],c(E,F.arrays)?h=$(h,E,n):c(E,F.nargs)!==!1?h=y(h,E,n):(U=n[h+1],U!==void 0&&(!U.match(/^-/)||U.match(k))&&!c(E,F.bools)&&!c(E,F.counts)||/^(true|false)$/.test(U)?(j(E,U),h++):j(E,w(E))));else if(g.match(/^-.\..+=/))S=g.match(/^-([^=]+)=([\s\S]*)$/),S!==null&&Array.isArray(S)&&S.length>=3&&j(S[1],S[2]);else if(g.match(/^-.\..+/)&&!g.match(k))U=n[h+1],S=g.match(/^-(.\..+)/),S!==null&&Array.isArray(S)&&S.length>=2&&(E=S[1],U!==void 0&&!U.match(/^-/)&&!c(E,F.bools)&&!c(E,F.counts)?(j(E,U),h++):j(E,w(E)));else if(g.match(/^-[^-]+/)&&!g.match(k)){R=g.slice(1,-1).split(""),T=!1;for(let gu=0;gu<R.length;gu++){if(U=g.slice(gu+2),R[gu+1]&&R[gu+1]==="="){Fu=g.slice(gu+3),E=R[gu],c(E,F.arrays)?h=$(h,E,n,Fu):c(E,F.nargs)!==!1?h=y(h,E,n,Fu):j(E,Fu),T=!0;break}if(U==="-"){j(R[gu],U);continue}if(/[A-Za-z]/.test(R[gu])&&/^-?\d+(\.\d*)?(e-?\d+)?$/.test(U)&&c(U,F.bools)===!1){j(R[gu],U),T=!0;break}if(R[gu+1]&&R[gu+1].match(/\W/)){j(R[gu],U),T=!0;break}else j(R[gu],w(R[gu]))}E=g.slice(-1)[0],!T&&E!=="-"&&(c(E,F.arrays)?h=$(h,E,n):c(E,F.nargs)!==!1?h=y(h,E,n):(U=n[h+1],U!==void 0&&(!/^(-|--)[^-]/.test(U)||U.match(k))&&!c(E,F.bools)&&!c(E,F.counts)||/^(true|false)$/.test(U)?(j(E,U),h++):j(E,w(E))))}else if(g.match(/^-[0-9]$/)&&g.match(k)&&c(g.slice(1),F.bools))E=g.slice(1),j(E,w(E));else if(g==="--"){J=n.slice(h+1);break}else if(s["halt-at-non-option"]){J=n.slice(h);break}else nu(g)}zu(X,!0),zu(X,!1),hu(X),ru(),ou(X,F.aliases,f,!0),Ku(X),s["set-placeholder-key"]&&Uu(X),Object.keys(F.counts).forEach(function(h){C(X,h.split("."))||j(h,0)}),A&&J.length&&(X[b]=[]),J.forEach(function(h){X[b].push(h)}),s["camel-case-expansion"]&&s["strip-dashed"]&&Object.keys(X).filter(h=>h!=="--"&&h.includes("-")).forEach(h=>{delete X[h]}),s["strip-aliased"]&&[].concat(...Object.keys(i).map(h=>i[h])).forEach(h=>{s["camel-case-expansion"]&&h.includes("-")&&delete X[h.split(".").map(g=>Ge(g)).join(".")],delete X[h]});function nu(h){let g=Z("_",h);(typeof g=="string"||typeof g=="number")&&X._.push(g)}function y(h,g,I,T){let E,R=c(g,F.nargs);if(R=typeof R!="number"||isNaN(R)?1:R,R===0)return z(T)||(G=Error(m("Argument unexpected for: %s",g))),j(g,w(g)),h;let S=z(T)?0:1;if(s["nargs-eats-options"])I.length-(h+1)+S<R&&(G=Error(m("Not enough arguments following: %s",g))),S=R;else{for(E=h+1;E<I.length&&(!I[E].match(/^-[^0-9]/)||I[E].match(k)||x(I[E]));E++)S++;S<R&&(G=Error(m("Not enough arguments following: %s",g)))}let U=Math.min(S,R);for(!z(T)&&U>0&&(j(g,T),U--),E=h+1;E<U+h+1;E++)j(g,I[E]);return h+U}function $(h,g,I,T){let E=[],R=T||I[h+1],S=c(g,F.nargs);if(c(g,F.bools)&&!/^(true|false)$/.test(R))E.push(!0);else if(z(R)||z(T)&&/^-/.test(R)&&!k.test(R)&&!x(R)){if(f[g]!==void 0){let U=f[g];E=Array.isArray(U)?U:[U]}}else{z(T)||E.push(uu(g,T,!0));for(let U=h+1;U<I.length&&!(!s["greedy-arrays"]&&E.length>0||S&&typeof S=="number"&&E.length>=S||(R=I[U],/^-/.test(R)&&!k.test(R)&&!x(R)));U++)h=U,E.push(uu(g,R,r))}return typeof S=="number"&&(S&&E.length<S||isNaN(S)&&E.length===0)&&(G=Error(m("Not enough arguments following: %s",g))),j(g,E),h}function j(h,g,I=r){if(/-/.test(h)&&s["camel-case-expansion"]){let R=h.split(".").map(function(S){return Ge(S)}).join(".");Q(h,R)}let T=uu(h,g,I),E=h.split(".");d(X,E,T),F.aliases[h]&&F.aliases[h].forEach(function(R){let S=R.split(".");d(X,S,T)}),E.length>1&&s["dot-notation"]&&(F.aliases[E[0]]||[]).forEach(function(R){let S=R.split("."),U=[].concat(E);U.shift(),S=S.concat(U),(F.aliases[h]||[]).includes(S.join("."))||d(X,S,T)}),c(h,F.normalize)&&!c(h,F.arrays)&&[h].concat(F.aliases[h]||[]).forEach(function(S){Object.defineProperty(Lu,S,{enumerable:!0,get(){return g},set(U){g=typeof U=="string"?Vu.normalize(U):U}})})}function Q(h,g){F.aliases[h]&&F.aliases[h].length||(F.aliases[h]=[g],W[g]=!0),F.aliases[g]&&F.aliases[g].length||Q(g,h)}function uu(h,g,I){I&&(g=Za(g)),(c(h,F.bools)||c(h,F.counts))&&typeof g=="string"&&(g=g==="true");let T=Array.isArray(g)?g.map(function(E){return Z(h,E)}):Z(h,g);return c(h,F.counts)&&(z(T)||typeof T=="boolean")&&(T=mD()),c(h,F.normalize)&&c(h,F.arrays)&&(Array.isArray(g)?T=g.map(E=>Vu.normalize(E)):T=Vu.normalize(g)),T}function Z(h,g){return!s["parse-positional-numbers"]&&h==="_"||!c(h,F.strings)&&!c(h,F.bools)&&!Array.isArray(g)&&(li(g)&&s["parse-numbers"]&&Number.isSafeInteger(Math.floor(parseFloat(`${g}`)))||!z(g)&&c(h,F.numbers))&&(g=Number(g)),g}function hu(h){let g=Object.create(null);ou(g,F.aliases,f),Object.keys(F.configs).forEach(function(I){let T=h[I]||g[I];if(T)try{let E=null,R=Vu.resolve(Vu.cwd(),T),S=F.configs[I];if(typeof S=="function"){try{E=S(R)}catch(U){E=U}if(E instanceof Error){G=E;return}}else E=Vu.require(R);Nu(E)}catch(E){E.name==="PermissionDenied"?G=E:h[I]&&(G=Error(m("Invalid JSON config file: %s",T)))}})}function Nu(h,g){Object.keys(h).forEach(function(I){let T=h[I],E=g?g+"."+I:I;typeof T=="object"&&T!==null&&!Array.isArray(T)&&s["dot-notation"]?Nu(T,E):(!C(X,E.split("."))||c(E,F.arrays)&&s["combine-arrays"])&&j(E,T)})}function ru(){typeof a<"u"&&a.forEach(function(h){Nu(h)})}function zu(h,g){if(typeof _>"u")return;let I=typeof _=="string"?_:"",T=Vu.env();Object.keys(T).forEach(function(E){if(I===""||E.lastIndexOf(I,0)===0){let R=E.split("__").map(function(S,U){return U===0&&(S=S.substring(I.length)),Ge(S)});(g&&F.configs[R.join(".")]||!g)&&!C(h,R)&&j(R.join("."),T[E])}})}function Ku(h){let g,I=new Set;Object.keys(h).forEach(function(T){if(!I.has(T)&&(g=c(T,F.coercions),typeof g=="function"))try{let E=Z(T,g(h[T]));[].concat(F.aliases[T]||[],T).forEach(R=>{I.add(R),h[R]=E})}catch(E){G=E}})}function Uu(h){return F.keys.forEach(g=>{~g.indexOf(".")||typeof h[g]>"u"&&(h[g]=void 0)}),h}function ou(h,g,I,T=!1){Object.keys(I).forEach(function(E){C(h,E.split("."))||(d(h,E.split("."),I[E]),T&&(L[E]=!0),(g[E]||[]).forEach(function(R){C(h,R.split("."))||d(h,R.split("."),I[E])}))})}function C(h,g){let I=h;s["dot-notation"]||(g=[g.join(".")]),g.slice(0,-1).forEach(function(E){I=I[E]||{}});let T=g[g.length-1];return typeof I!="object"?!1:T in I}function d(h,g,I){let T=h;s["dot-notation"]||(g=[g.join(".")]),g.slice(0,-1).forEach(function(Fu){Fu=ii(Fu),typeof T=="object"&&T[Fu]===void 0&&(T[Fu]={}),typeof T[Fu]!="object"||Array.isArray(T[Fu])?(Array.isArray(T[Fu])?T[Fu].push({}):T[Fu]=[T[Fu],{}],T=T[Fu][T[Fu].length-1]):T=T[Fu]});let E=ii(g[g.length-1]),R=c(g.join("."),F.arrays),S=Array.isArray(I),U=s["duplicate-arguments-array"];!U&&c(E,F.nargs)&&(U=!0,(!z(T[E])&&F.nargs[E]===1||Array.isArray(T[E])&&T[E].length===F.nargs[E])&&(T[E]=void 0)),I===mD()?T[E]=mD(T[E]):Array.isArray(T[E])?U&&R&&S?T[E]=s["flatten-duplicate-arrays"]?T[E].concat(I):(Array.isArray(T[E][0])?T[E]:[T[E]]).concat([I]):!U&&!!R==!!S?T[E]=I:T[E]=T[E].concat([I]):T[E]===void 0&&R?T[E]=S?I:[I]:U&&!(T[E]===void 0||c(E,F.counts)||c(E,F.bools))?T[E]=[T[E],I]:T[E]=I}function l(...h){h.forEach(function(g){Object.keys(g||{}).forEach(function(I){F.aliases[I]||(F.aliases[I]=[].concat(i[I]||[]),F.aliases[I].concat(I).forEach(function(T){if(/-/.test(T)&&s["camel-case-expansion"]){let E=Ge(T);E!==I&&F.aliases[I].indexOf(E)===-1&&(F.aliases[I].push(E),W[E]=!0)}}),F.aliases[I].concat(I).forEach(function(T){if(T.length>1&&/[A-Z]/.test(T)&&s["camel-case-expansion"]){let E=ai(T,"-");E!==I&&F.aliases[I].indexOf(E)===-1&&(F.aliases[I].push(E),W[E]=!0)}}),F.aliases[I].forEach(function(T){F.aliases[T]=[I].concat(F.aliases[I].filter(function(E){return T!==E}))}))})})}function c(h,g){let I=[].concat(F.aliases[h]||[],h),T=Object.keys(g),E=I.find(R=>T.includes(R));return E?g[E]:!1}function p(h){let g=Object.keys(F);return[].concat(g.map(T=>F[T])).some(function(T){return Array.isArray(T)?T.includes(h):T[h]})}function B(h,...g){return[].concat(...g).some(function(T){let E=h.match(T);return E&&p(E[1])})}function O(h){if(h.match(k)||!h.match(/^-[^-]+/))return!1;let g=!0,I,T=h.slice(1).split("");for(let E=0;E<T.length;E++){if(I=h.slice(E+2),!p(T[E])){g=!1;break}if(T[E+1]&&T[E+1]==="="||I==="-"||/[A-Za-z]/.test(T[E])&&/^-?\d+(\.\d*)?(e-?\d+)?$/.test(I)||T[E+1]&&T[E+1].match(/\W/))break}return g}function x(h){return s["unknown-options-as-args"]&&v(h)}function v(h){return h=h.replace(/^-{3,}/,"--"),h.match(k)||O(h)?!1:!B(h,/^-+([^=]+?)=[\s\S]*$/,q,/^-+([^=]+?)$/,/^-+([^=]+?)-$/,/^-+([^=]+?\d+)$/,/^-+([^=]+?)\W+.*$/)}function w(h){return!c(h,F.bools)&&!c(h,F.counts)&&`${h}`in f?f[h]:tu(Du(h))}function tu(h){return{[$u.BOOLEAN]:!0,[$u.STRING]:"",[$u.NUMBER]:void 0,[$u.ARRAY]:[]}[h]}function Du(h){let g=$u.BOOLEAN;return c(h,F.strings)?g=$u.STRING:c(h,F.numbers)?g=$u.NUMBER:c(h,F.bools)?g=$u.BOOLEAN:c(h,F.arrays)&&(g=$u.ARRAY),g}function z(h){return h===void 0}function eu(){Object.keys(F.counts).find(h=>c(h,F.arrays)?(G=Error(m("Invalid configuration: %s, opts.count excludes opts.array.",h)),!0):c(h,F.nargs)?(G=Error(m("Invalid configuration: %s, opts.count excludes opts.narg.",h)),!0):!1)}return{aliases:Object.assign({},F.aliases),argv:Object.assign(Lu,X),configuration:s,defaulted:Object.assign({},L),error:G,newAliases:Object.assign({},W)}}};function Xa(D){let u=[],t=Object.create(null),e=!0;for(Object.keys(D).forEach(function(n){u.push([].concat(D[n],n))});e;){e=!1;for(let n=0;n<u.length;n++)for(let r=n+1;r<u.length;r++)if(u[n].filter(function(s){return u[r].indexOf(s)!==-1}).length){u[n]=u[n].concat(u[r]),u.splice(r,1),e=!0;break}}return u.forEach(function(n){n=n.filter(function(i,s,f){return f.indexOf(i)===s});let r=n.pop();r!==void 0&&typeof r=="string"&&(t[r]=n)}),t}function mD(D){return D!==void 0?D+1:1}function ii(D){return D==="__proto__"?"___proto___":D}function Za(D){return typeof D=="string"&&(D[0]==="'"||D[0]==='"')&&D[D.length-1]===D[0]?D.substring(1,D.length-1):D}var AD,TD,BD,si=process&&process.env&&process.env.YARGS_MIN_NODE_VERSION?Number(process.env.YARGS_MIN_NODE_VERSION):12,oi=(TD=(AD=process==null?void 0:process.versions)===null||AD===void 0?void 0:AD.node)!==null&&TD!==void 0?TD:(BD=process==null?void 0:process.version)===null||BD===void 0?void 0:BD.slice(1);if(oi&&Number(oi.match(/^([^.]+)/)[1])<si)throw Error(`yargs parser supports a minimum Node.js version of ${si}. Read our version support policy: https://github.com/yargs/yargs-parser#supported-nodejs-versions`);var Ja=process?process.env:{},ci=new bD({cwd:process.cwd,env:()=>Ja,format:za.format,normalize:ri.normalize,resolve:ri.resolve,require:D=>{if(typeof require<"u")return require(D);if(D.match(/\.json$/))return JSON.parse(Ka.readFileSync(D,"utf8"));throw Error("only .json config files are supported in ESM")}}),qe=function(u,t){return ci.parse(u.slice(),t).argv};qe.detailed=function(D,u){return ci.parse(D.slice(),u)};qe.camelCase=Ge;qe.decamelize=ai;qe.looksLikeNumber=li;fi.exports=qe});var hi=Y(($c,_i)=>{"use strict";_i.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}});var xD=Y((kc,Ci)=>{var Ve=hi(),Fi={};for(let D of Object.keys(Ve))Fi[Ve[D]]=D;var P={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};Ci.exports=P;for(let D of Object.keys(P)){if(!("channels"in P[D]))throw new Error("missing channels property: "+D);if(!("labels"in P[D]))throw new Error("missing channel labels property: "+D);if(P[D].labels.length!==P[D].channels)throw new Error("channel and label counts mismatch: "+D);let{channels:u,labels:t}=P[D];delete P[D].channels,delete P[D].labels,Object.defineProperty(P[D],"channels",{value:u}),Object.defineProperty(P[D],"labels",{value:t})}P.rgb.hsl=function(D){let u=D[0]/255,t=D[1]/255,e=D[2]/255,n=Math.min(u,t,e),r=Math.max(u,t,e),i=r-n,s,f;r===n?s=0:u===r?s=(t-e)/i:t===r?s=2+(e-u)/i:e===r&&(s=4+(u-t)/i),s=Math.min(s*60,360),s<0&&(s+=360);let a=(n+r)/2;return r===n?f=0:a<=.5?f=i/(r+n):f=i/(2-r-n),[s,f*100,a*100]};P.rgb.hsv=function(D){let u,t,e,n,r,i=D[0]/255,s=D[1]/255,f=D[2]/255,a=Math.max(i,s,f),_=a-Math.min(i,s,f),A=function(b){return(a-b)/6/_+1/2};return _===0?(n=0,r=0):(r=_/a,u=A(i),t=A(s),e=A(f),i===a?n=e-t:s===a?n=1/3+u-e:f===a&&(n=2/3+t-u),n<0?n+=1:n>1&&(n-=1)),[n*360,r*100,a*100]};P.rgb.hwb=function(D){let u=D[0],t=D[1],e=D[2],n=P.rgb.hsl(D)[0],r=1/255*Math.min(u,Math.min(t,e));return e=1-1/255*Math.max(u,Math.max(t,e)),[n,r*100,e*100]};P.rgb.cmyk=function(D){let u=D[0]/255,t=D[1]/255,e=D[2]/255,n=Math.min(1-u,1-t,1-e),r=(1-u-n)/(1-n)||0,i=(1-t-n)/(1-n)||0,s=(1-e-n)/(1-n)||0;return[r*100,i*100,s*100,n*100]};function Qa(D,u){return(D[0]-u[0])**2+(D[1]-u[1])**2+(D[2]-u[2])**2}P.rgb.keyword=function(D){let u=Fi[D];if(u)return u;let t=1/0,e;for(let n of Object.keys(Ve)){let r=Ve[n],i=Qa(D,r);i<t&&(t=i,e=n)}return e};P.keyword.rgb=function(D){return Ve[D]};P.rgb.xyz=function(D){let u=D[0]/255,t=D[1]/255,e=D[2]/255;u=u>.04045?((u+.055)/1.055)**2.4:u/12.92,t=t>.04045?((t+.055)/1.055)**2.4:t/12.92,e=e>.04045?((e+.055)/1.055)**2.4:e/12.92;let n=u*.4124+t*.3576+e*.1805,r=u*.2126+t*.7152+e*.0722,i=u*.0193+t*.1192+e*.9505;return[n*100,r*100,i*100]};P.rgb.lab=function(D){let u=P.rgb.xyz(D),t=u[0],e=u[1],n=u[2];t/=95.047,e/=100,n/=108.883,t=t>.008856?t**(1/3):7.787*t+16/116,e=e>.008856?e**(1/3):7.787*e+16/116,n=n>.008856?n**(1/3):7.787*n+16/116;let r=116*e-16,i=500*(t-e),s=200*(e-n);return[r,i,s]};P.hsl.rgb=function(D){let u=D[0]/360,t=D[1]/100,e=D[2]/100,n,r,i;if(t===0)return i=e*255,[i,i,i];e<.5?n=e*(1+t):n=e+t-e*t;let s=2*e-n,f=[0,0,0];for(let a=0;a<3;a++)r=u+1/3*-(a-1),r<0&&r++,r>1&&r--,6*r<1?i=s+(n-s)*6*r:2*r<1?i=n:3*r<2?i=s+(n-s)*(2/3-r)*6:i=s,f[a]=i*255;return f};P.hsl.hsv=function(D){let u=D[0],t=D[1]/100,e=D[2]/100,n=t,r=Math.max(e,.01);e*=2,t*=e<=1?e:2-e,n*=r<=1?r:2-r;let i=(e+t)/2,s=e===0?2*n/(r+n):2*t/(e+t);return[u,s*100,i*100]};P.hsv.rgb=function(D){let u=D[0]/60,t=D[1]/100,e=D[2]/100,n=Math.floor(u)%6,r=u-Math.floor(u),i=255*e*(1-t),s=255*e*(1-t*r),f=255*e*(1-t*(1-r));switch(e*=255,n){case 0:return[e,f,i];case 1:return[s,e,i];case 2:return[i,e,f];case 3:return[i,s,e];case 4:return[f,i,e];case 5:return[e,i,s]}};P.hsv.hsl=function(D){let u=D[0],t=D[1]/100,e=D[2]/100,n=Math.max(e,.01),r,i;i=(2-t)*e;let s=(2-t)*n;return r=t*n,r/=s<=1?s:2-s,r=r||0,i/=2,[u,r*100,i*100]};P.hwb.rgb=function(D){let u=D[0]/360,t=D[1]/100,e=D[2]/100,n=t+e,r;n>1&&(t/=n,e/=n);let i=Math.floor(6*u),s=1-e;r=6*u-i,i&1&&(r=1-r);let f=t+r*(s-t),a,_,A;switch(i){default:case 6:case 0:a=s,_=f,A=t;break;case 1:a=f,_=s,A=t;break;case 2:a=t,_=s,A=f;break;case 3:a=t,_=f,A=s;break;case 4:a=f,_=t,A=s;break;case 5:a=s,_=t,A=f;break}return[a*255,_*255,A*255]};P.cmyk.rgb=function(D){let u=D[0]/100,t=D[1]/100,e=D[2]/100,n=D[3]/100,r=1-Math.min(1,u*(1-n)+n),i=1-Math.min(1,t*(1-n)+n),s=1-Math.min(1,e*(1-n)+n);return[r*255,i*255,s*255]};P.xyz.rgb=function(D){let u=D[0]/100,t=D[1]/100,e=D[2]/100,n,r,i;return n=u*3.2406+t*-1.5372+e*-.4986,r=u*-.9689+t*1.8758+e*.0415,i=u*.0557+t*-.204+e*1.057,n=n>.0031308?1.055*n**(1/2.4)-.055:n*12.92,r=r>.0031308?1.055*r**(1/2.4)-.055:r*12.92,i=i>.0031308?1.055*i**(1/2.4)-.055:i*12.92,n=Math.min(Math.max(0,n),1),r=Math.min(Math.max(0,r),1),i=Math.min(Math.max(0,i),1),[n*255,r*255,i*255]};P.xyz.lab=function(D){let u=D[0],t=D[1],e=D[2];u/=95.047,t/=100,e/=108.883,u=u>.008856?u**(1/3):7.787*u+16/116,t=t>.008856?t**(1/3):7.787*t+16/116,e=e>.008856?e**(1/3):7.787*e+16/116;let n=116*t-16,r=500*(u-t),i=200*(t-e);return[n,r,i]};P.lab.xyz=function(D){let u=D[0],t=D[1],e=D[2],n,r,i;r=(u+16)/116,n=t/500+r,i=r-e/200;let s=r**3,f=n**3,a=i**3;return r=s>.008856?s:(r-16/116)/7.787,n=f>.008856?f:(n-16/116)/7.787,i=a>.008856?a:(i-16/116)/7.787,n*=95.047,r*=100,i*=108.883,[n,r,i]};P.lab.lch=function(D){let u=D[0],t=D[1],e=D[2],n;n=Math.atan2(e,t)*360/2/Math.PI,n<0&&(n+=360);let i=Math.sqrt(t*t+e*e);return[u,i,n]};P.lch.lab=function(D){let u=D[0],t=D[1],n=D[2]/360*2*Math.PI,r=t*Math.cos(n),i=t*Math.sin(n);return[u,r,i]};P.rgb.ansi16=function(D,u=null){let[t,e,n]=D,r=u===null?P.rgb.hsv(D)[2]:u;if(r=Math.round(r/50),r===0)return 30;let i=30+(Math.round(n/255)<<2|Math.round(e/255)<<1|Math.round(t/255));return r===2&&(i+=60),i};P.hsv.ansi16=function(D){return P.rgb.ansi16(P.hsv.rgb(D),D[2])};P.rgb.ansi256=function(D){let u=D[0],t=D[1],e=D[2];return u===t&&t===e?u<8?16:u>248?231:Math.round((u-8)/247*24)+232:16+36*Math.round(u/255*5)+6*Math.round(t/255*5)+Math.round(e/255*5)};P.ansi16.rgb=function(D){let u=D%10;if(u===0||u===7)return D>50&&(u+=3.5),u=u/10.5*255,[u,u,u];let t=(~~(D>50)+1)*.5,e=(u&1)*t*255,n=(u>>1&1)*t*255,r=(u>>2&1)*t*255;return[e,n,r]};P.ansi256.rgb=function(D){if(D>=232){let r=(D-232)*10+8;return[r,r,r]}D-=16;let u,t=Math.floor(D/36)/5*255,e=Math.floor((u=D%36)/6)/5*255,n=u%6/5*255;return[t,e,n]};P.rgb.hex=function(D){let t=(((Math.round(D[0])&255)<<16)+((Math.round(D[1])&255)<<8)+(Math.round(D[2])&255)).toString(16).toUpperCase();return"000000".substring(t.length)+t};P.hex.rgb=function(D){let u=D.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!u)return[0,0,0];let t=u[0];u[0].length===3&&(t=t.split("").map(s=>s+s).join(""));let e=parseInt(t,16),n=e>>16&255,r=e>>8&255,i=e&255;return[n,r,i]};P.rgb.hcg=function(D){let u=D[0]/255,t=D[1]/255,e=D[2]/255,n=Math.max(Math.max(u,t),e),r=Math.min(Math.min(u,t),e),i=n-r,s,f;return i<1?s=r/(1-i):s=0,i<=0?f=0:n===u?f=(t-e)/i%6:n===t?f=2+(e-u)/i:f=4+(u-t)/i,f/=6,f%=1,[f*360,i*100,s*100]};P.hsl.hcg=function(D){let u=D[1]/100,t=D[2]/100,e=t<.5?2*u*t:2*u*(1-t),n=0;return e<1&&(n=(t-.5*e)/(1-e)),[D[0],e*100,n*100]};P.hsv.hcg=function(D){let u=D[1]/100,t=D[2]/100,e=u*t,n=0;return e<1&&(n=(t-e)/(1-e)),[D[0],e*100,n*100]};P.hcg.rgb=function(D){let u=D[0]/360,t=D[1]/100,e=D[2]/100;if(t===0)return[e*255,e*255,e*255];let n=[0,0,0],r=u%1*6,i=r%1,s=1-i,f=0;switch(Math.floor(r)){case 0:n[0]=1,n[1]=i,n[2]=0;break;case 1:n[0]=s,n[1]=1,n[2]=0;break;case 2:n[0]=0,n[1]=1,n[2]=i;break;case 3:n[0]=0,n[1]=s,n[2]=1;break;case 4:n[0]=i,n[1]=0,n[2]=1;break;default:n[0]=1,n[1]=0,n[2]=s}return f=(1-t)*e,[(t*n[0]+f)*255,(t*n[1]+f)*255,(t*n[2]+f)*255]};P.hcg.hsv=function(D){let u=D[1]/100,t=D[2]/100,e=u+t*(1-u),n=0;return e>0&&(n=u/e),[D[0],n*100,e*100]};P.hcg.hsl=function(D){let u=D[1]/100,e=D[2]/100*(1-u)+.5*u,n=0;return e>0&&e<.5?n=u/(2*e):e>=.5&&e<1&&(n=u/(2*(1-e))),[D[0],n*100,e*100]};P.hcg.hwb=function(D){let u=D[1]/100,t=D[2]/100,e=u+t*(1-u);return[D[0],(e-u)*100,(1-e)*100]};P.hwb.hcg=function(D){let u=D[1]/100,e=1-D[2]/100,n=e-u,r=0;return n<1&&(r=(e-n)/(1-n)),[D[0],n*100,r*100]};P.apple.rgb=function(D){return[D[0]/65535*255,D[1]/65535*255,D[2]/65535*255]};P.rgb.apple=function(D){return[D[0]/255*65535,D[1]/255*65535,D[2]/255*65535]};P.gray.rgb=function(D){return[D[0]/100*255,D[0]/100*255,D[0]/100*255]};P.gray.hsl=function(D){return[0,0,D[0]]};P.gray.hsv=P.gray.hsl;P.gray.hwb=function(D){return[0,100,D[0]]};P.gray.cmyk=function(D){return[0,0,0,D[0]]};P.gray.lab=function(D){return[D[0],0,0]};P.gray.hex=function(D){let u=Math.round(D[0]/100*255)&255,e=((u<<16)+(u<<8)+u).toString(16).toUpperCase();return"000000".substring(e.length)+e};P.rgb.gray=function(D){return[(D[0]+D[1]+D[2])/3/255*100]}});var di=Y((Hc,Ei)=>{var mt=xD();function ul(){let D={},u=Object.keys(mt);for(let t=u.length,e=0;e<t;e++)D[u[e]]={distance:-1,parent:null};return D}function el(D){let u=ul(),t=[D];for(u[D].distance=0;t.length;){let e=t.pop(),n=Object.keys(mt[e]);for(let r=n.length,i=0;i<r;i++){let s=n[i],f=u[s];f.distance===-1&&(f.distance=u[e].distance+1,f.parent=e,t.unshift(s))}}return u}function tl(D,u){return function(t){return u(D(t))}}function Dl(D,u){let t=[u[D].parent,D],e=mt[u[D].parent][D],n=u[D].parent;for(;u[n].parent;)t.unshift(u[n].parent),e=tl(mt[u[n].parent][n],e),n=u[n].parent;return e.conversion=t,e}Ei.exports=function(D){let u=el(D),t={},e=Object.keys(u);for(let n=e.length,r=0;r<n;r++){let i=e[r];u[i].parent!==null&&(t[i]=Dl(i,u))}return t}});var pi=Y((Uc,gi)=>{var yD=xD(),nl=di(),Be={},rl=Object.keys(yD);function il(D){let u=function(...t){let e=t[0];return e==null?e:(e.length>1&&(t=e),D(t))};return"conversion"in D&&(u.conversion=D.conversion),u}function sl(D){let u=function(...t){let e=t[0];if(e==null)return e;e.length>1&&(t=e);let n=D(t);if(typeof n=="object")for(let r=n.length,i=0;i<r;i++)n[i]=Math.round(n[i]);return n};return"conversion"in D&&(u.conversion=D.conversion),u}rl.forEach(D=>{Be[D]={},Object.defineProperty(Be[D],"channels",{value:yD[D].channels}),Object.defineProperty(Be[D],"labels",{value:yD[D].labels});let u=nl(D);Object.keys(u).forEach(e=>{let n=u[e];Be[D][e]=sl(n),Be[D][e].raw=il(n)})});gi.exports=Be});var Li=Y((Gc,bi)=>{"use strict";var mi=(D,u)=>(...t)=>`\x1B[${D(...t)+u}m`,Ai=(D,u)=>(...t)=>{let e=D(...t);return`\x1B[${38+u};5;${e}m`},Ti=(D,u)=>(...t)=>{let e=D(...t);return`\x1B[${38+u};2;${e[0]};${e[1]};${e[2]}m`},At=D=>D,Bi=(D,u,t)=>[D,u,t],be=(D,u,t)=>{Object.defineProperty(D,u,{get:()=>{let e=t();return Object.defineProperty(D,u,{value:e,enumerable:!0,configurable:!0}),e},enumerable:!0,configurable:!0})},ID,Le=(D,u,t,e)=>{ID===void 0&&(ID=pi());let n=e?10:0,r={};for(let[i,s]of Object.entries(ID)){let f=i==="ansi16"?"ansi":i;i===u?r[f]=D(t,n):typeof s=="object"&&(r[f]=D(s[u],n))}return r};function ol(){let D=new Map,u={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],blackBright:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};u.color.gray=u.color.blackBright,u.bgColor.bgGray=u.bgColor.bgBlackBright,u.color.grey=u.color.blackBright,u.bgColor.bgGrey=u.bgColor.bgBlackBright;for(let[t,e]of Object.entries(u)){for(let[n,r]of Object.entries(e))u[n]={open:`\x1B[${r[0]}m`,close:`\x1B[${r[1]}m`},e[n]=u[n],D.set(r[0],r[1]);Object.defineProperty(u,t,{value:e,enumerable:!1})}return Object.defineProperty(u,"codes",{value:D,enumerable:!1}),u.color.close="\x1B[39m",u.bgColor.close="\x1B[49m",be(u.color,"ansi",()=>Le(mi,"ansi16",At,!1)),be(u.color,"ansi256",()=>Le(Ai,"ansi256",At,!1)),be(u.color,"ansi16m",()=>Le(Ti,"rgb",Bi,!1)),be(u.bgColor,"ansi",()=>Le(mi,"ansi16",At,!0)),be(u.bgColor,"ansi256",()=>Le(Ai,"ansi256",At,!0)),be(u.bgColor,"ansi16m",()=>Le(Ti,"rgb",Bi,!0)),u}Object.defineProperty(bi,"exports",{enumerable:!0,get:ol})});var Oi=Y((qc,vi)=>{"use strict";var ze=$e(),al=Et(),ll=Li(),Tt=new Set(["\x1B","\x9B"]),cl=39,vD="\x07",Ii="[",fl="]",Ri="m",OD=`${fl}8;;`,xi=D=>`${Tt.values().next().value}${Ii}${D}${Ri}`,yi=D=>`${Tt.values().next().value}${OD}${D}${vD}`,_l=D=>D.split(" ").map(u=>ze(u)),RD=(D,u,t)=>{let e=[...u],n=!1,r=!1,i=ze(al(D[D.length-1]));for(let[s,f]of e.entries()){let a=ze(f);if(i+a<=t?D[D.length-1]+=f:(D.push(f),i=0),Tt.has(f)&&(n=!0,r=e.slice(s+1).join("").startsWith(OD)),n){r?f===vD&&(n=!1,r=!1):f===Ri&&(n=!1);continue}i+=a,i===t&&s<e.length-1&&(D.push(""),i=0)}!i&&D[D.length-1].length>0&&D.length>1&&(D[D.length-2]+=D.pop())},hl=D=>{let u=D.split(" "),t=u.length;for(;t>0&&!(ze(u[t-1])>0);)t--;return t===u.length?D:u.slice(0,t).join(" ")+u.slice(t).join("")},Fl=(D,u,t={})=>{if(t.trim!==!1&&D.trim()==="")return"";let e="",n,r,i=_l(D),s=[""];for(let[a,_]of D.split(" ").entries()){t.trim!==!1&&(s[s.length-1]=s[s.length-1].trimStart());let A=ze(s[s.length-1]);if(a!==0&&(A>=u&&(t.wordWrap===!1||t.trim===!1)&&(s.push(""),A=0),(A>0||t.trim===!1)&&(s[s.length-1]+=" ",A++)),t.hard&&i[a]>u){let b=u-A,W=1+Math.floor((i[a]-b-1)/u);Math.floor((i[a]-1)/u)<W&&s.push(""),RD(s,_,u);continue}if(A+i[a]>u&&A>0&&i[a]>0){if(t.wordWrap===!1&&A<u){RD(s,_,u);continue}s.push("")}if(A+i[a]>u&&t.wordWrap===!1){RD(s,_,u);continue}s[s.length-1]+=_}t.trim!==!1&&(s=s.map(hl));let f=[...s.join(`
`)];for(let[a,_]of f.entries()){if(e+=_,Tt.has(_)){let{groups:b}=new RegExp(`(?:\\${Ii}(?<code>\\d+)m|\\${OD}(?<uri>.*)${vD})`).exec(f.slice(a).join(""))||{groups:{}};if(b.code!==void 0){let W=Number.parseFloat(b.code);n=W===cl?void 0:W}else b.uri!==void 0&&(r=b.uri.length===0?void 0:b.uri)}let A=ll.codes.get(Number(n));f[a+1]===`
`?(r&&(e+=yi("")),n&&A&&(e+=xi(A))):_===`
`&&(n&&A&&(e+=xi(n)),r&&(e+=yi(r)))}return e};vi.exports=(D,u,t)=>String(D).normalize().replace(/\r\n/g,`
`).split(`
`).map(e=>Fl(e,u,t)).join(`
`)});var Ni=Y((Vc,wi)=>{"use strict";var Cl={right:ml,center:Al},El=0,Bt=1,dl=2,bt=3,SD=class{constructor(u){var t;this.width=u.width,this.wrap=(t=u.wrap)!==null&&t!==void 0?t:!0,this.rows=[]}span(...u){let t=this.div(...u);t.span=!0}resetOutput(){this.rows=[]}div(...u){if(u.length===0&&this.div(""),this.wrap&&this.shouldApplyLayoutDSL(...u)&&typeof u[0]=="string")return this.applyLayoutDSL(u[0]);let t=u.map(e=>typeof e=="string"?this.colFromString(e):e);return this.rows.push(t),t}shouldApplyLayoutDSL(...u){return u.length===1&&typeof u[0]=="string"&&/[\t\n]/.test(u[0])}applyLayoutDSL(u){let t=u.split(`
`).map(n=>n.split("	")),e=0;return t.forEach(n=>{n.length>1&&Au.stringWidth(n[0])>e&&(e=Math.min(Math.floor(this.width*.5),Au.stringWidth(n[0])))}),t.forEach(n=>{this.div(...n.map((r,i)=>({text:r.trim(),padding:this.measurePadding(r),width:i===0&&n.length>1?e:void 0})))}),this.rows[this.rows.length-1]}colFromString(u){return{text:u,padding:this.measurePadding(u)}}measurePadding(u){let t=Au.stripAnsi(u);return[0,t.match(/\s*$/)[0].length,0,t.match(/^\s*/)[0].length]}toString(){let u=[];return this.rows.forEach(t=>{this.rowToString(t,u)}),u.filter(t=>!t.hidden).map(t=>t.text).join(`
`)}rowToString(u,t){return this.rasterize(u).forEach((e,n)=>{let r="";e.forEach((i,s)=>{let{width:f}=u[s],a=this.negatePadding(u[s]),_=i;if(a>Au.stringWidth(i)&&(_+=" ".repeat(a-Au.stringWidth(i))),u[s].align&&u[s].align!=="left"&&this.wrap){let b=Cl[u[s].align];_=b(_,a),Au.stringWidth(_)<a&&(_+=" ".repeat((f||0)-Au.stringWidth(_)-1))}let A=u[s].padding||[0,0,0,0];A[bt]&&(r+=" ".repeat(A[bt])),r+=Si(u[s],_,"| "),r+=_,r+=Si(u[s],_," |"),A[Bt]&&(r+=" ".repeat(A[Bt])),n===0&&t.length>0&&(r=this.renderInline(r,t[t.length-1]))}),t.push({text:r.replace(/ +$/,""),span:u.span})}),t}renderInline(u,t){let e=u.match(/^ */),n=e?e[0].length:0,r=t.text,i=Au.stringWidth(r.trimRight());return t.span?this.wrap?n<i?u:(t.hidden=!0,r.trimRight()+" ".repeat(n-i)+u.trimLeft()):(t.hidden=!0,r+u):u}rasterize(u){let t=[],e=this.columnWidths(u),n;return u.forEach((r,i)=>{r.width=e[i],this.wrap?n=Au.wrap(r.text,this.negatePadding(r),{hard:!0}).split(`
`):n=r.text.split(`
`),r.border&&(n.unshift("."+"-".repeat(this.negatePadding(r)+2)+"."),n.push("'"+"-".repeat(this.negatePadding(r)+2)+"'")),r.padding&&(n.unshift(...new Array(r.padding[El]||0).fill("")),n.push(...new Array(r.padding[dl]||0).fill(""))),n.forEach((s,f)=>{t[f]||t.push([]);let a=t[f];for(let _=0;_<i;_++)a[_]===void 0&&a.push("");a.push(s)})}),t}negatePadding(u){let t=u.width||0;return u.padding&&(t-=(u.padding[bt]||0)+(u.padding[Bt]||0)),u.border&&(t-=4),t}columnWidths(u){if(!this.wrap)return u.map(i=>i.width||Au.stringWidth(i.text));let t=u.length,e=this.width,n=u.map(i=>{if(i.width)return t--,e-=i.width,i.width}),r=t?Math.floor(e/t):0;return n.map((i,s)=>i===void 0?Math.max(r,gl(u[s])):i)}};function Si(D,u,t){return D.border?/[.']-+[.']/.test(u)?"":u.trim().length!==0?t:"  ":""}function gl(D){let u=D.padding||[],t=1+(u[bt]||0)+(u[Bt]||0);return D.border?t+4:t}function pl(){return typeof process=="object"&&process.stdout&&process.stdout.columns?process.stdout.columns:80}function ml(D,u){D=D.trim();let t=Au.stringWidth(D);return t<u?" ".repeat(u-t)+D:D}function Al(D,u){D=D.trim();let t=Au.stringWidth(D);return t>=u?D:" ".repeat(u-t>>1)+D}var Au;function Tl(D,u){return Au=u,new SD({width:D?.width||pl(),wrap:D?.wrap})}var Bl=$e(),bl=Et(),Ll=Oi();function xl(D){return Tl(D,{stringWidth:Bl,stripAnsi:bl,wrap:Ll})}wi.exports=xl});var Wi=Y((zc,Pi)=>{var{dirname:Mi,resolve:ji}=require("path"),{readdirSync:yl,statSync:Il}=require("fs");Pi.exports=function(D,u){let t=ji(".",D),e;for(Il(t).isDirectory()||(t=Mi(t));;){if(e=u(t,yl(t)),e)return ji(t,e);if(t=Mi(e=t),e===t)break}}});var ki=Y((Kc,$i)=>{"use strict";$i.exports=function(u){if(u===void 0&&(u=2),u>=Error.stackTraceLimit)throw new TypeError("getCallerFile(position) requires position be less then Error.stackTraceLimit but position was: `"+u+"` and Error.stackTraceLimit was: `"+Error.stackTraceLimit+"`");var t=Error.prepareStackTrace;Error.prepareStackTrace=function(n,r){return r};var e=new Error().stack;if(Error.prepareStackTrace=t,e!==null&&typeof e=="object")return e[u]?e[u].getFileName():void 0}});var qi=Y((Yc,ND)=>{"use strict";var Hi=require("fs"),Rl=require("path").join,vl=require("path").resolve,Ui=require("path").dirname,wD={extensions:["js","json","coffee"],recurse:!0,rename:function(D){return D},visit:function(D){return D}};function Ol(D,u,t){return new RegExp("\\.("+t.extensions.join("|")+")$","i").test(u)&&!(t.include&&t.include instanceof RegExp&&!t.include.test(D))&&!(t.include&&typeof t.include=="function"&&!t.include(D,u))&&!(t.exclude&&t.exclude instanceof RegExp&&t.exclude.test(D))&&!(t.exclude&&typeof t.exclude=="function"&&t.exclude(D,u))}function Gi(D,u,t){var e={};u&&!t&&typeof u!="string"&&(t=u,u=null),t=t||{};for(var n in wD)typeof t[n]>"u"&&(t[n]=wD[n]);return u=u?vl(Ui(D.filename),u):Ui(D.filename),Hi.readdirSync(u).forEach(function(r){var i=Rl(u,r),s,f,a;Hi.statSync(i).isDirectory()&&t.recurse?(s=Gi(D,i,t),Object.keys(s).length&&(e[t.rename(r,i,r)]=s)):i!==D.filename&&Ol(i,r,t)&&(f=r.substring(0,r.lastIndexOf(".")),a=D.require(i),e[t.rename(f,i,r)]=t.visit(a,i,r)||a)}),e}ND.exports=Gi;ND.exports.defaults=wD});var Dn=Y((Xc,Ts)=>{"use strict";var Vi=require("assert"),Eu=class D extends Error{constructor(u){super(u||"yargs error"),this.name="YError",Error.captureStackTrace&&Error.captureStackTrace(this,D)}},Ke,MD=[];function jt(D,u,t,e){Ke=e;let n={};if(Object.prototype.hasOwnProperty.call(D,"extends")){if(typeof D.extends!="string")return n;let r=/\.json|\..*rc$/.test(D.extends),i=null;if(r)i=function(s,f){return Ke.path.resolve(s,f)}(u,D.extends);else try{i=require.resolve(D.extends)}catch{return D}(function(s){if(MD.indexOf(s)>-1)throw new Eu(`Circular extended configurations: '${s}'.`)})(i),MD.push(i),n=r?JSON.parse(Ke.readFileSync(i,"utf8")):require(D.extends),delete D.extends,n=jt(n,Ke.path.dirname(i),t,Ke)}return MD=[],t?ps(n,D):Object.assign({},n,D)}function ps(D,u){let t={};function e(n){return n&&typeof n=="object"&&!Array.isArray(n)}Object.assign(t,D);for(let n of Object.keys(u))e(u[n])&&e(t[n])?t[n]=ps(D[n],u[n]):t[n]=u[n];return t}function Oe(D){let u=D.replace(/\s{2,}/g," ").split(/\s+(?![^[]*]|[^<]*>)/),t=/\.*[\][<>]/g,e=u.shift();if(!e)throw new Error(`No command found in: ${D}`);let n={cmd:e.replace(t,""),demanded:[],optional:[]};return u.forEach((r,i)=>{let s=!1;r=r.replace(/\s/g,""),/\.+[\]>]/.test(r)&&i===u.length-1&&(s=!0),/^\[/.test(r)?n.optional.push({cmd:r.replace(t,"").split("|"),variadic:s}):n.demanded.push({cmd:r.replace(t,"").split("|"),variadic:s})}),n}var Sl=["first","second","third","fourth","fifth","sixth"];function M(D,u,t){try{let e=0,[n,r,i]=typeof D=="object"?[{demanded:[],optional:[]},D,u]:[Oe(`cmd ${D}`),u,t],s=[].slice.call(r);for(;s.length&&s[s.length-1]===void 0;)s.pop();let f=i||s.length;if(f<n.demanded.length)throw new Eu(`Not enough arguments provided. Expected ${n.demanded.length} but received ${s.length}.`);let a=n.demanded.length+n.optional.length;if(f>a)throw new Eu(`Too many arguments provided. Expected max ${a} but received ${f}.`);n.demanded.forEach(_=>{let A=zi(s.shift());_.cmd.filter(b=>b===A||b==="*").length===0&&Ki(A,_.cmd,e),e+=1}),n.optional.forEach(_=>{if(s.length===0)return;let A=zi(s.shift());_.cmd.filter(b=>b===A||b==="*").length===0&&Ki(A,_.cmd,e),e+=1})}catch(e){console.warn(e.stack)}}function zi(D){return Array.isArray(D)?"array":D===null?"null":typeof D}function Ki(D,u,t){throw new Eu(`Invalid ${Sl[t]||"manyith"} argument. Expected ${u.join(" or ")} but received ${D}.`)}function _u(D){return!!D&&!!D.then&&typeof D.then=="function"}function ku(D,u,t,e){t.assert.notStrictEqual(D,u,e)}function Yi(D,u){u.assert.strictEqual(typeof D,"string")}function Mt(D){return Object.keys(D)}function ve(D={},u=()=>!0){let t={};return Mt(D).forEach(e=>{u(e,D[e])&&(t[e]=D[e])}),t}function ms(){return process.versions.electron&&!process.defaultApp?0:1}function As(){return process.argv[ms()]}var wl=Object.freeze({__proto__:null,hideBin:function(D){return D.slice(ms()+1)},getProcessArgvBin:As});function o(D,u,t,e){if(t==="a"&&!e)throw new TypeError("Private accessor was defined without a getter");if(typeof u=="function"?D!==u||!e:!u.has(D))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?e:t==="a"?e.call(D):e?e.value:u.get(D)}function N(D,u,t,e,n){if(e==="m")throw new TypeError("Private method is not writable");if(e==="a"&&!n)throw new TypeError("Private accessor was defined without a setter");if(typeof u=="function"?D!==u||!n:!u.has(D))throw new TypeError("Cannot write private member to an object whose class did not declare it");return e==="a"?n.call(D,t):n?n.value=t:u.set(D,t),t}var ZD=class{constructor(u){this.globalMiddleware=[],this.frozens=[],this.yargs=u}addMiddleware(u,t,e=!0,n=!1){if(M("<array|function> [boolean] [boolean] [boolean]",[u,t,e],arguments.length),Array.isArray(u)){for(let r=0;r<u.length;r++){if(typeof u[r]!="function")throw Error("middleware must be a function");let i=u[r];i.applyBeforeValidation=t,i.global=e}Array.prototype.push.apply(this.globalMiddleware,u)}else if(typeof u=="function"){let r=u;r.applyBeforeValidation=t,r.global=e,r.mutates=n,this.globalMiddleware.push(u)}return this.yargs}addCoerceMiddleware(u,t){let e=this.yargs.getAliases();return this.globalMiddleware=this.globalMiddleware.filter(n=>{let r=[...e[t]||[],t];return!n.option||!r.includes(n.option)}),u.option=t,this.addMiddleware(u,!0,!0,!0)}getMiddleware(){return this.globalMiddleware}freeze(){this.frozens.push([...this.globalMiddleware])}unfreeze(){let u=this.frozens.pop();u!==void 0&&(this.globalMiddleware=u)}reset(){this.globalMiddleware=this.globalMiddleware.filter(u=>u.global)}};function Je(D,u,t,e){return t.reduce((n,r)=>{if(r.applyBeforeValidation!==e)return n;if(r.mutates){if(r.applied)return n;r.applied=!0}if(_u(n))return n.then(i=>Promise.all([i,r(i,u)])).then(([i,s])=>Object.assign(i,s));{let i=r(n,u);return _u(i)?i.then(s=>Object.assign(n,s)):Object.assign(n,i)}},D)}function Qe(D,u,t=e=>{throw e}){try{let e=typeof D=="function"?D():D;return _u(e)?e.then(n=>u(n)):u(e)}catch(e){return t(e)}}var xe=/(^\*)|(^\$0)/,JD=class{constructor(u,t,e,n){this.requireCache=new Set,this.handlers={},this.aliasMap={},this.frozens=[],this.shim=n,this.usage=u,this.globalMiddleware=e,this.validation=t}addDirectory(u,t,e,n){typeof(n=n||{}).recurse!="boolean"&&(n.recurse=!1),Array.isArray(n.extensions)||(n.extensions=["js"]);let r=typeof n.visit=="function"?n.visit:i=>i;n.visit=(i,s,f)=>{let a=r(i,s,f);if(a){if(this.requireCache.has(s))return a;this.requireCache.add(s),this.addHandler(a)}return a},this.shim.requireDirectory({require:t,filename:e},u,n)}addHandler(u,t,e,n,r,i){let s=[],f=function(a){return a?a.map(_=>(_.applyBeforeValidation=!1,_)):[]}(r);if(n=n||(()=>{}),Array.isArray(u))if(function(a){return a.every(_=>typeof _=="string")}(u))[u,...s]=u;else for(let a of u)this.addHandler(a);else{if(function(a){return typeof a=="object"&&!Array.isArray(a)}(u)){let a=Array.isArray(u.command)||typeof u.command=="string"?u.command:this.moduleName(u);return u.aliases&&(a=[].concat(a).concat(u.aliases)),void this.addHandler(a,this.extractDesc(u),u.builder,u.handler,u.middlewares,u.deprecated)}if(Xi(e))return void this.addHandler([u].concat(s),t,e.builder,e.handler,e.middlewares,e.deprecated)}if(typeof u=="string"){let a=Oe(u);s=s.map(b=>Oe(b).cmd);let _=!1,A=[a.cmd].concat(s).filter(b=>!xe.test(b)||(_=!0,!1));A.length===0&&_&&A.push("$0"),_&&(a.cmd=A[0],s=A.slice(1),u=u.replace(xe,a.cmd)),s.forEach(b=>{this.aliasMap[b]=a.cmd}),t!==!1&&this.usage.command(u,t,_,s,i),this.handlers[a.cmd]={original:u,description:t,handler:n,builder:e||{},middlewares:f,deprecated:i,demanded:a.demanded,optional:a.optional},_&&(this.defaultCommand=this.handlers[a.cmd])}}getCommandHandlers(){return this.handlers}getCommands(){return Object.keys(this.handlers).concat(Object.keys(this.aliasMap))}hasDefaultCommand(){return!!this.defaultCommand}runCommand(u,t,e,n,r,i){let s=this.handlers[u]||this.handlers[this.aliasMap[u]]||this.defaultCommand,f=t.getInternalMethods().getContext(),a=f.commands.slice(),_=!u;u&&(f.commands.push(u),f.fullCommands.push(s.original));let A=this.applyBuilderUpdateUsageAndParse(_,s,t,e.aliases,a,n,r,i);return _u(A)?A.then(b=>this.applyMiddlewareAndGetResult(_,s,b.innerArgv,f,r,b.aliases,t)):this.applyMiddlewareAndGetResult(_,s,A.innerArgv,f,r,A.aliases,t)}applyBuilderUpdateUsageAndParse(u,t,e,n,r,i,s,f){let a=t.builder,_=e;if(QD(a)){e.getInternalMethods().getUsageInstance().freeze();let A=a(e.getInternalMethods().reset(n),f);if(_u(A))return A.then(b=>{var W;return _=(W=b)&&typeof W.getInternalMethods=="function"?b:e,this.parseAndUpdateUsage(u,t,_,r,i,s)})}else(function(A){return typeof A=="object"})(a)&&(e.getInternalMethods().getUsageInstance().freeze(),_=e.getInternalMethods().reset(n),Object.keys(t.builder).forEach(A=>{_.option(A,a[A])}));return this.parseAndUpdateUsage(u,t,_,r,i,s)}parseAndUpdateUsage(u,t,e,n,r,i){u&&e.getInternalMethods().getUsageInstance().unfreeze(!0),this.shouldUpdateUsage(e)&&e.getInternalMethods().getUsageInstance().usage(this.usageFromParentCommandsCommandHandler(n,t),t.description);let s=e.getInternalMethods().runYargsParserAndExecuteCommands(null,void 0,!0,r,i);return _u(s)?s.then(f=>({aliases:e.parsed.aliases,innerArgv:f})):{aliases:e.parsed.aliases,innerArgv:s}}shouldUpdateUsage(u){return!u.getInternalMethods().getUsageInstance().getUsageDisabled()&&u.getInternalMethods().getUsageInstance().getUsage().length===0}usageFromParentCommandsCommandHandler(u,t){let e=xe.test(t.original)?t.original.replace(xe,"").trim():t.original,n=u.filter(r=>!xe.test(r));return n.push(e),`$0 ${n.join(" ")}`}handleValidationAndGetResult(u,t,e,n,r,i,s,f){if(!i.getInternalMethods().getHasOutput()){let a=i.getInternalMethods().runValidation(r,f,i.parsed.error,u);e=Qe(e,_=>(a(_),_))}if(t.handler&&!i.getInternalMethods().getHasOutput()){i.getInternalMethods().setHasOutput();let a=!!i.getOptions().configuration["populate--"];i.getInternalMethods().postProcess(e,a,!1,!1),e=Qe(e=Je(e,i,s,!1),_=>{let A=t.handler(_);return _u(A)?A.then(()=>_):_}),u||i.getInternalMethods().getUsageInstance().cacheHelpMessage(),_u(e)&&!i.getInternalMethods().hasParseCallback()&&e.catch(_=>{try{i.getInternalMethods().getUsageInstance().fail(null,_)}catch{}})}return u||(n.commands.pop(),n.fullCommands.pop()),e}applyMiddlewareAndGetResult(u,t,e,n,r,i,s){let f={};if(r)return e;s.getInternalMethods().getHasOutput()||(f=this.populatePositionals(t,e,n,s));let a=this.globalMiddleware.getMiddleware().slice(0).concat(t.middlewares),_=Je(e,s,a,!0);return _u(_)?_.then(A=>this.handleValidationAndGetResult(u,t,A,n,i,s,a,f)):this.handleValidationAndGetResult(u,t,_,n,i,s,a,f)}populatePositionals(u,t,e,n){t._=t._.slice(e.commands.length);let r=u.demanded.slice(0),i=u.optional.slice(0),s={};for(this.validation.positionalCount(r.length,t._.length);r.length;){let f=r.shift();this.populatePositional(f,t,s)}for(;i.length;){let f=i.shift();this.populatePositional(f,t,s)}return t._=e.commands.concat(t._.map(f=>""+f)),this.postProcessPositionals(t,s,this.cmdToParseOptions(u.original),n),s}populatePositional(u,t,e){let n=u.cmd[0];u.variadic?e[n]=t._.splice(0).map(String):t._.length&&(e[n]=[String(t._.shift())])}cmdToParseOptions(u){let t={array:[],default:{},alias:{},demand:{}},e=Oe(u);return e.demanded.forEach(n=>{let[r,...i]=n.cmd;n.variadic&&(t.array.push(r),t.default[r]=[]),t.alias[r]=i,t.demand[r]=!0}),e.optional.forEach(n=>{let[r,...i]=n.cmd;n.variadic&&(t.array.push(r),t.default[r]=[]),t.alias[r]=i}),t}postProcessPositionals(u,t,e,n){let r=Object.assign({},n.getOptions());r.default=Object.assign(e.default,r.default);for(let a of Object.keys(e.alias))r.alias[a]=(r.alias[a]||[]).concat(e.alias[a]);r.array=r.array.concat(e.array),r.config={};let i=[];if(Object.keys(t).forEach(a=>{t[a].map(_=>{r.configuration["unknown-options-as-args"]&&(r.key[a]=!0),i.push(`--${a}`),i.push(_)})}),!i.length)return;let s=Object.assign({},r.configuration,{"populate--":!1}),f=this.shim.Parser.detailed(i,Object.assign({},r,{configuration:s}));if(f.error)n.getInternalMethods().getUsageInstance().fail(f.error.message,f.error);else{let a=Object.keys(t);Object.keys(t).forEach(_=>{a.push(...f.aliases[_])}),Object.keys(f.argv).forEach(_=>{a.includes(_)&&(t[_]||(t[_]=f.argv[_]),!this.isInConfigs(n,_)&&!this.isDefaulted(n,_)&&Object.prototype.hasOwnProperty.call(u,_)&&Object.prototype.hasOwnProperty.call(f.argv,_)&&(Array.isArray(u[_])||Array.isArray(f.argv[_]))?u[_]=[].concat(u[_],f.argv[_]):u[_]=f.argv[_])})}}isDefaulted(u,t){let{default:e}=u.getOptions();return Object.prototype.hasOwnProperty.call(e,t)||Object.prototype.hasOwnProperty.call(e,this.shim.Parser.camelCase(t))}isInConfigs(u,t){let{configObjects:e}=u.getOptions();return e.some(n=>Object.prototype.hasOwnProperty.call(n,t))||e.some(n=>Object.prototype.hasOwnProperty.call(n,this.shim.Parser.camelCase(t)))}runDefaultBuilderOn(u){if(!this.defaultCommand)return;if(this.shouldUpdateUsage(u)){let e=xe.test(this.defaultCommand.original)?this.defaultCommand.original:this.defaultCommand.original.replace(/^[^[\]<>]*/,"$0 ");u.getInternalMethods().getUsageInstance().usage(e,this.defaultCommand.description)}let t=this.defaultCommand.builder;if(QD(t))return t(u,!0);Xi(t)||Object.keys(t).forEach(e=>{u.option(e,t[e])})}moduleName(u){let t=function(e){if(typeof require>"u")return null;for(let n,r=0,i=Object.keys(require.cache);r<i.length;r++)if(n=require.cache[i[r]],n.exports===e)return n;return null}(u);if(!t)throw new Error(`No command name given for module: ${this.shim.inspect(u)}`);return this.commandFromFilename(t.filename)}commandFromFilename(u){return this.shim.path.basename(u,this.shim.path.extname(u))}extractDesc({describe:u,description:t,desc:e}){for(let n of[u,t,e]){if(typeof n=="string"||n===!1)return n;ku(n,!0,this.shim)}return!1}freeze(){this.frozens.push({handlers:this.handlers,aliasMap:this.aliasMap,defaultCommand:this.defaultCommand})}unfreeze(){let u=this.frozens.pop();ku(u,void 0,this.shim),{handlers:this.handlers,aliasMap:this.aliasMap,defaultCommand:this.defaultCommand}=u}reset(){return this.handlers={},this.aliasMap={},this.defaultCommand=void 0,this.requireCache=new Set,this}};function Xi(D){return typeof D=="object"&&!!D.builder&&typeof D.handler=="function"}function QD(D){return typeof D=="function"}function Ze(D){typeof process<"u"&&[process.stdout,process.stderr].forEach(u=>{let t=u;t._handle&&t.isTTY&&typeof t._handle.setBlocking=="function"&&t._handle.setBlocking(D)})}function Nl(D){return typeof D=="boolean"}function Ml(D,u){let t=u.y18n.__,e={},n=[];e.failFn=function(y){n.push(y)};let r=null,i=null,s=!0;e.showHelpOnFail=function(y=!0,$){let[j,Q]=typeof y=="string"?[!0,y]:[y,$];return D.getInternalMethods().isGlobalContext()&&(i=Q),r=Q,s=j,e};let f=!1;e.fail=function(y,$){let j=D.getInternalMethods().getLoggerInstance();if(!n.length){if(D.getExitProcess()&&Ze(!0),!f){f=!0,s&&(D.showHelp("error"),j.error()),(y||$)&&j.error(y||$);let Q=r||i;Q&&((y||$)&&j.error(""),j.error(Q))}if($=$||new Eu(y),D.getExitProcess())return D.exit(1);if(D.getInternalMethods().hasParseCallback())return D.exit(1,$);throw $}for(let Q=n.length-1;Q>=0;--Q){let uu=n[Q];if(Nl(uu)){if($)throw $;if(y)throw Error(y)}else uu(y,$,e)}};let a=[],_=!1;e.usage=(y,$)=>y===null?(_=!0,a=[],e):(_=!1,a.push([y,$||""]),e),e.getUsage=()=>a,e.getUsageDisabled=()=>_,e.getPositionalGroupName=()=>t("Positionals:");let A=[];e.example=(y,$)=>{A.push([y,$||""])};let b=[];e.command=function(y,$,j,Q,uu=!1){j&&(b=b.map(Z=>(Z[2]=!1,Z))),b.push([y,$||"",j,Q,uu])},e.getCommands=()=>b;let W={};e.describe=function(y,$){Array.isArray(y)?y.forEach(j=>{e.describe(j,$)}):typeof y=="object"?Object.keys(y).forEach(j=>{e.describe(j,y[j])}):W[y]=$},e.getDescriptions=()=>W;let L=[];e.epilog=y=>{L.push(y)};let m,F=!1;e.wrap=y=>{F=!0,m=y},e.getWrap=()=>u.getEnv("YARGS_DISABLE_WRAP")?null:(F||(m=function(){return u.process.stdColumns?Math.min(80,u.process.stdColumns):80}(),F=!0),m);let k="__yargsString__:";function q(y,$,j){let Q=0;return Array.isArray(y)||(y=Object.values(y).map(uu=>[uu])),y.forEach(uu=>{Q=Math.max(u.stringWidth(j?`${j} ${Lt(uu[0])}`:Lt(uu[0]))+Zi(uu[0]),Q)}),$&&(Q=Math.min(Q,parseInt((.5*$).toString(),10))),Q}let G;function J(y){return D.getOptions().hiddenOptions.indexOf(y)<0||D.parsed.argv[D.getOptions().showHiddenOpt]}function X(y,$){let j=`[${t("default:")} `;if(y===void 0&&!$)return null;if($)j+=$;else switch(typeof y){case"string":j+=`"${y}"`;break;case"object":j+=JSON.stringify(y);break;default:j+=y}return`${j}]`}e.deferY18nLookup=y=>k+y,e.help=function(){if(G)return G;(function(){let C=D.getDemandedOptions(),d=D.getOptions();(Object.keys(d.alias)||[]).forEach(l=>{d.alias[l].forEach(c=>{W[c]&&e.describe(l,W[c]),c in C&&D.demandOption(l,C[c]),d.boolean.includes(c)&&D.boolean(l),d.count.includes(c)&&D.count(l),d.string.includes(c)&&D.string(l),d.normalize.includes(c)&&D.normalize(l),d.array.includes(c)&&D.array(l),d.number.includes(c)&&D.number(l)})})})();let y=D.customScriptName?D.$0:u.path.basename(D.$0),$=D.getDemandedOptions(),j=D.getDemandedCommands(),Q=D.getDeprecatedOptions(),uu=D.getGroups(),Z=D.getOptions(),hu=[];hu=hu.concat(Object.keys(W)),hu=hu.concat(Object.keys($)),hu=hu.concat(Object.keys(j)),hu=hu.concat(Object.keys(Z.default)),hu=hu.filter(J),hu=Object.keys(hu.reduce((C,d)=>(d!=="_"&&(C[d]=!0),C),{}));let Nu=e.getWrap(),ru=u.cliui({width:Nu,wrap:!!Nu});if(!_){if(a.length)a.forEach(C=>{ru.div({text:`${C[0].replace(/\$0/g,y)}`}),C[1]&&ru.div({text:`${C[1]}`,padding:[1,0,0,0]})}),ru.div();else if(b.length){let C=null;C=j._?`${y} <${t("command")}>
`:`${y} [${t("command")}]
`,ru.div(`${C}`)}}if(b.length>1||b.length===1&&!b[0][2]){ru.div(t("Commands:"));let C=D.getInternalMethods().getContext(),d=C.commands.length?`${C.commands.join(" ")} `:"";D.getInternalMethods().getParserConfiguration()["sort-commands"]===!0&&(b=b.sort((c,p)=>c[0].localeCompare(p[0])));let l=y?`${y} `:"";b.forEach(c=>{let p=`${l}${d}${c[0].replace(/^\$0 ?/,"")}`;ru.span({text:p,padding:[0,2,0,2],width:q(b,Nu,`${y}${d}`)+4},{text:c[1]});let B=[];c[2]&&B.push(`[${t("default")}]`),c[3]&&c[3].length&&B.push(`[${t("aliases:")} ${c[3].join(", ")}]`),c[4]&&(typeof c[4]=="string"?B.push(`[${t("deprecated: %s",c[4])}]`):B.push(`[${t("deprecated")}]`)),B.length?ru.div({text:B.join(" "),padding:[0,0,0,2],align:"right"}):ru.div()}),ru.div()}let zu=(Object.keys(Z.alias)||[]).concat(Object.keys(D.parsed.newAliases)||[]);hu=hu.filter(C=>!D.parsed.newAliases[C]&&zu.every(d=>(Z.alias[d]||[]).indexOf(C)===-1));let Ku=t("Options:");uu[Ku]||(uu[Ku]=[]),function(C,d,l,c){let p=[],B=null;Object.keys(l).forEach(O=>{p=p.concat(l[O])}),C.forEach(O=>{B=[O].concat(d[O]),B.some(x=>p.indexOf(x)!==-1)||l[c].push(O)})}(hu,Z.alias,uu,Ku);let Uu=C=>/^--/.test(Lt(C)),ou=Object.keys(uu).filter(C=>uu[C].length>0).map(C=>({groupName:C,normalizedKeys:uu[C].filter(J).map(d=>{if(zu.includes(d))return d;for(let l,c=0;(l=zu[c])!==void 0;c++)if((Z.alias[l]||[]).includes(d))return l;return d})})).filter(({normalizedKeys:C})=>C.length>0).map(({groupName:C,normalizedKeys:d})=>{let l=d.reduce((c,p)=>(c[p]=[p].concat(Z.alias[p]||[]).map(B=>C===e.getPositionalGroupName()?B:(/^[0-9]$/.test(B)?Z.boolean.includes(p)?"-":"--":B.length>1?"--":"-")+B).sort((B,O)=>Uu(B)===Uu(O)?0:Uu(B)?1:-1).join(", "),c),{});return{groupName:C,normalizedKeys:d,switches:l}});if(ou.filter(({groupName:C})=>C!==e.getPositionalGroupName()).some(({normalizedKeys:C,switches:d})=>!C.every(l=>Uu(d[l])))&&ou.filter(({groupName:C})=>C!==e.getPositionalGroupName()).forEach(({normalizedKeys:C,switches:d})=>{C.forEach(l=>{var c,p;Uu(d[l])&&(d[l]=(c=d[l],p=4,tn(c)?{text:c.text,indentation:c.indentation+p}:{text:c,indentation:p}))})}),ou.forEach(({groupName:C,normalizedKeys:d,switches:l})=>{ru.div(C),d.forEach(c=>{let p=l[c],B=W[c]||"",O=null;B.includes(k)&&(B=t(B.substring(16))),Z.boolean.includes(c)&&(O=`[${t("boolean")}]`),Z.count.includes(c)&&(O=`[${t("count")}]`),Z.string.includes(c)&&(O=`[${t("string")}]`),Z.normalize.includes(c)&&(O=`[${t("string")}]`),Z.array.includes(c)&&(O=`[${t("array")}]`),Z.number.includes(c)&&(O=`[${t("number")}]`);let x=[c in Q?(v=Q[c],typeof v=="string"?`[${t("deprecated: %s",v)}]`:`[${t("deprecated")}]`):null,O,c in $?`[${t("required")}]`:null,Z.choices&&Z.choices[c]?`[${t("choices:")} ${e.stringifiedValues(Z.choices[c])}]`:null,X(Z.default[c],Z.defaultDescription[c])].filter(Boolean).join(" ");var v;ru.span({text:Lt(p),padding:[0,2,0,2+Zi(p)],width:q(l,Nu)+4},B);let w=D.getInternalMethods().getUsageConfiguration()["hide-types"]===!0;x&&!w?ru.div({text:x,padding:[0,0,0,2],align:"right"}):ru.div()}),ru.div()}),A.length&&(ru.div(t("Examples:")),A.forEach(C=>{C[0]=C[0].replace(/\$0/g,y)}),A.forEach(C=>{C[1]===""?ru.div({text:C[0],padding:[0,2,0,2]}):ru.div({text:C[0],padding:[0,2,0,2],width:q(A,Nu)+4},{text:C[1]})}),ru.div()),L.length>0){let C=L.map(d=>d.replace(/\$0/g,y)).join(`
`);ru.div(`${C}
`)}return ru.toString().replace(/\s*$/,"")},e.cacheHelpMessage=function(){G=this.help()},e.clearCachedHelpMessage=function(){G=void 0},e.hasCachedHelpMessage=function(){return!!G},e.showHelp=y=>{let $=D.getInternalMethods().getLoggerInstance();y||(y="error"),(typeof y=="function"?y:$[y])(e.help())},e.functionDescription=y=>["(",y.name?u.Parser.decamelize(y.name,"-"):t("generated-value"),")"].join(""),e.stringifiedValues=function(y,$){let j="",Q=$||", ",uu=[].concat(y);return y&&uu.length&&uu.forEach(Z=>{j.length&&(j+=Q),j+=JSON.stringify(Z)}),j};let Lu=null;e.version=y=>{Lu=y},e.showVersion=y=>{let $=D.getInternalMethods().getLoggerInstance();y||(y="error"),(typeof y=="function"?y:$[y])(Lu)},e.reset=function(y){return r=null,f=!1,a=[],_=!1,L=[],A=[],b=[],W=ve(W,$=>!y[$]),e};let nu=[];return e.freeze=function(){nu.push({failMessage:r,failureOutput:f,usages:a,usageDisabled:_,epilogs:L,examples:A,commands:b,descriptions:W})},e.unfreeze=function(y=!1){let $=nu.pop();$&&(y?(W={...$.descriptions,...W},b=[...$.commands,...b],a=[...$.usages,...a],A=[...$.examples,...A],L=[...$.epilogs,...L]):{failMessage:r,failureOutput:f,usages:a,usageDisabled:_,epilogs:L,examples:A,commands:b,descriptions:W}=$)},e}function tn(D){return typeof D=="object"}function Zi(D){return tn(D)?D.indentation:0}function Lt(D){return tn(D)?D.text:D}var un=class{constructor(u,t,e,n){var r,i,s;this.yargs=u,this.usage=t,this.command=e,this.shim=n,this.completionKey="get-yargs-completions",this.aliases=null,this.customCompletionFunction=null,this.indexAfterLastReset=0,this.zshShell=(s=((r=this.shim.getEnv("SHELL"))===null||r===void 0?void 0:r.includes("zsh"))||((i=this.shim.getEnv("ZSH_NAME"))===null||i===void 0?void 0:i.includes("zsh")))!==null&&s!==void 0&&s}defaultCompletion(u,t,e,n){let r=this.command.getCommandHandlers();for(let s=0,f=u.length;s<f;++s)if(r[u[s]]&&r[u[s]].builder){let a=r[u[s]].builder;if(QD(a)){this.indexAfterLastReset=s+1;let _=this.yargs.getInternalMethods().reset();return a(_,!0),_.argv}}let i=[];this.commandCompletions(i,u,e),this.optionCompletions(i,u,t,e),this.choicesFromOptionsCompletions(i,u,t,e),this.choicesFromPositionalsCompletions(i,u,t,e),n(null,i)}commandCompletions(u,t,e){let n=this.yargs.getInternalMethods().getContext().commands;e.match(/^-/)||n[n.length-1]===e||this.previousArgHasChoices(t)||this.usage.getCommands().forEach(r=>{let i=Oe(r[0]).cmd;if(t.indexOf(i)===-1)if(this.zshShell){let s=r[1]||"";u.push(i.replace(/:/g,"\\:")+":"+s)}else u.push(i)})}optionCompletions(u,t,e,n){if((n.match(/^-/)||n===""&&u.length===0)&&!this.previousArgHasChoices(t)){let r=this.yargs.getOptions(),i=this.yargs.getGroups()[this.usage.getPositionalGroupName()]||[];Object.keys(r.key).forEach(s=>{let f=!!r.configuration["boolean-negation"]&&r.boolean.includes(s);i.includes(s)||r.hiddenOptions.includes(s)||this.argsContainKey(t,s,f)||this.completeOptionKey(s,u,n,f&&!!r.default[s])})}}choicesFromOptionsCompletions(u,t,e,n){if(this.previousArgHasChoices(t)){let r=this.getPreviousArgChoices(t);r&&r.length>0&&u.push(...r.map(i=>i.replace(/:/g,"\\:")))}}choicesFromPositionalsCompletions(u,t,e,n){if(n===""&&u.length>0&&this.previousArgHasChoices(t))return;let r=this.yargs.getGroups()[this.usage.getPositionalGroupName()]||[],i=Math.max(this.indexAfterLastReset,this.yargs.getInternalMethods().getContext().commands.length+1),s=r[e._.length-i-1];if(!s)return;let f=this.yargs.getOptions().choices[s]||[];for(let a of f)a.startsWith(n)&&u.push(a.replace(/:/g,"\\:"))}getPreviousArgChoices(u){if(u.length<1)return;let t=u[u.length-1],e="";if(!t.startsWith("-")&&u.length>1&&(e=t,t=u[u.length-2]),!t.startsWith("-"))return;let n=t.replace(/^-+/,""),r=this.yargs.getOptions(),i=[n,...this.yargs.getAliases()[n]||[]],s;for(let f of i)if(Object.prototype.hasOwnProperty.call(r.key,f)&&Array.isArray(r.choices[f])){s=r.choices[f];break}return s?s.filter(f=>!e||f.startsWith(e)):void 0}previousArgHasChoices(u){let t=this.getPreviousArgChoices(u);return t!==void 0&&t.length>0}argsContainKey(u,t,e){let n=r=>u.indexOf((/^[^0-9]$/.test(r)?"-":"--")+r)!==-1;if(n(t)||e&&n(`no-${t}`))return!0;if(this.aliases){for(let r of this.aliases[t])if(n(r))return!0}return!1}completeOptionKey(u,t,e,n){var r,i,s,f;let a=u;if(this.zshShell){let A=this.usage.getDescriptions(),b=(i=(r=this==null?void 0:this.aliases)===null||r===void 0?void 0:r[u])===null||i===void 0?void 0:i.find(m=>{let F=A[m];return typeof F=="string"&&F.length>0}),W=b?A[b]:void 0,L=(f=(s=A[u])!==null&&s!==void 0?s:W)!==null&&f!==void 0?f:"";a=`${u.replace(/:/g,"\\:")}:${L.replace("__yargsString__:","").replace(/(\r\n|\n|\r)/gm," ")}`}let _=!/^--/.test(e)&&(A=>/^[^0-9]$/.test(A))(u)?"-":"--";t.push(_+a),n&&t.push(_+"no-"+a)}customCompletion(u,t,e,n){if(ku(this.customCompletionFunction,null,this.shim),this.customCompletionFunction.length<3){let r=this.customCompletionFunction(e,t);return _u(r)?r.then(i=>{this.shim.process.nextTick(()=>{n(null,i)})}).catch(i=>{this.shim.process.nextTick(()=>{n(i,void 0)})}):n(null,r)}return function(r){return r.length>3}(this.customCompletionFunction)?this.customCompletionFunction(e,t,(r=n)=>this.defaultCompletion(u,t,e,r),r=>{n(null,r)}):this.customCompletionFunction(e,t,r=>{n(null,r)})}getCompletion(u,t){let e=u.length?u[u.length-1]:"",n=this.yargs.parse(u,!0),r=this.customCompletionFunction?i=>this.customCompletion(u,i,e,t):i=>this.defaultCompletion(u,i,e,t);return _u(n)?n.then(r):r(n)}generateCompletionScript(u,t){let e=this.zshShell?`#compdef {{app_name}}
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
`,n=this.shim.path.basename(u);return u.match(/\.js$/)&&(u=`./${u}`),e=e.replace(/{{app_name}}/g,n),e=e.replace(/{{completion_command}}/g,t),e.replace(/{{app_path}}/g,u)}registerFunction(u){this.customCompletionFunction=u}setParsed(u){this.aliases=u.aliases}};function jl(D,u){if(D.length===0)return u.length;if(u.length===0)return D.length;let t=[],e,n;for(e=0;e<=u.length;e++)t[e]=[e];for(n=0;n<=D.length;n++)t[0][n]=n;for(e=1;e<=u.length;e++)for(n=1;n<=D.length;n++)u.charAt(e-1)===D.charAt(n-1)?t[e][n]=t[e-1][n-1]:e>1&&n>1&&u.charAt(e-2)===D.charAt(n-1)&&u.charAt(e-1)===D.charAt(n-2)?t[e][n]=t[e-2][n-2]+1:t[e][n]=Math.min(t[e-1][n-1]+1,Math.min(t[e][n-1]+1,t[e-1][n]+1));return t[u.length][D.length]}var Ji=["$0","--","_"],fu,se,Ye,vu,Tu,xt,Qu,oe,yt,Ou,It,Su,Gu,Bu,wu,Rt,ye,Cu,H,vt,Ot,bu,ae,Ie,le,ue,St,V,ce,fe,_e,K,wt,qu,cu,Qi=Symbol("copyDoubleDash"),us=Symbol("copyDoubleDash"),jD=Symbol("deleteFromParserHintObject"),es=Symbol("emitWarning"),ts=Symbol("freeze"),Ds=Symbol("getDollarZero"),he=Symbol("getParserConfiguration"),ns=Symbol("getUsageConfiguration"),PD=Symbol("guessLocale"),rs=Symbol("guessVersion"),is=Symbol("parsePositionalNumbers"),WD=Symbol("pkgUp"),ee=Symbol("populateParserHintArray"),Re=Symbol("populateParserHintSingleValueDictionary"),$D=Symbol("populateParserHintArrayDictionary"),kD=Symbol("populateParserHintDictionary"),HD=Symbol("sanitizeKey"),UD=Symbol("setKey"),GD=Symbol("unfreeze"),ss=Symbol("validateAsync"),os=Symbol("getCommandInstance"),as=Symbol("getContext"),ls=Symbol("getHasOutput"),cs=Symbol("getLoggerInstance"),fs=Symbol("getParseContext"),_s=Symbol("getUsageInstance"),hs=Symbol("getValidationInstance"),Nt=Symbol("hasParseCallback"),Fs=Symbol("isGlobalContext"),Fe=Symbol("postProcess"),Cs=Symbol("rebase"),qD=Symbol("reset"),Xe=Symbol("runYargsParserAndExecuteCommands"),VD=Symbol("runValidation"),Es=Symbol("setHasOutput"),Ce=Symbol("kTrackManuallySetKeys"),en=class{constructor(u=[],t,e,n){this.customScriptName=!1,this.parsed=!1,fu.set(this,void 0),se.set(this,void 0),Ye.set(this,{commands:[],fullCommands:[]}),vu.set(this,null),Tu.set(this,null),xt.set(this,"show-hidden"),Qu.set(this,null),oe.set(this,!0),yt.set(this,{}),Ou.set(this,!0),It.set(this,[]),Su.set(this,void 0),Gu.set(this,{}),Bu.set(this,!1),wu.set(this,null),Rt.set(this,!0),ye.set(this,void 0),Cu.set(this,""),H.set(this,void 0),vt.set(this,void 0),Ot.set(this,{}),bu.set(this,null),ae.set(this,null),Ie.set(this,{}),le.set(this,{}),ue.set(this,void 0),St.set(this,!1),V.set(this,void 0),ce.set(this,!1),fe.set(this,!1),_e.set(this,!1),K.set(this,void 0),wt.set(this,{}),qu.set(this,null),cu.set(this,void 0),N(this,V,n,"f"),N(this,ue,u,"f"),N(this,se,t,"f"),N(this,vt,e,"f"),N(this,Su,new ZD(this),"f"),this.$0=this[Ds](),this[qD](),N(this,fu,o(this,fu,"f"),"f"),N(this,K,o(this,K,"f"),"f"),N(this,cu,o(this,cu,"f"),"f"),N(this,H,o(this,H,"f"),"f"),o(this,H,"f").showHiddenOpt=o(this,xt,"f"),N(this,ye,this[us](),"f")}addHelpOpt(u,t){return M("[string|boolean] [string]",[u,t],arguments.length),o(this,wu,"f")&&(this[jD](o(this,wu,"f")),N(this,wu,null,"f")),u===!1&&t===void 0||(N(this,wu,typeof u=="string"?u:"help","f"),this.boolean(o(this,wu,"f")),this.describe(o(this,wu,"f"),t||o(this,K,"f").deferY18nLookup("Show help"))),this}help(u,t){return this.addHelpOpt(u,t)}addShowHiddenOpt(u,t){if(M("[string|boolean] [string]",[u,t],arguments.length),u===!1&&t===void 0)return this;let e=typeof u=="string"?u:o(this,xt,"f");return this.boolean(e),this.describe(e,t||o(this,K,"f").deferY18nLookup("Show hidden options")),o(this,H,"f").showHiddenOpt=e,this}showHidden(u,t){return this.addShowHiddenOpt(u,t)}alias(u,t){return M("<object|string|array> [string|array]",[u,t],arguments.length),this[$D](this.alias.bind(this),"alias",u,t),this}array(u){return M("<array|string>",[u],arguments.length),this[ee]("array",u),this[Ce](u),this}boolean(u){return M("<array|string>",[u],arguments.length),this[ee]("boolean",u),this[Ce](u),this}check(u,t){return M("<function> [boolean]",[u,t],arguments.length),this.middleware((e,n)=>Qe(()=>u(e,n.getOptions()),r=>(r?(typeof r=="string"||r instanceof Error)&&o(this,K,"f").fail(r.toString(),r):o(this,K,"f").fail(o(this,V,"f").y18n.__("Argument check failed: %s",u.toString())),e),r=>(o(this,K,"f").fail(r.message?r.message:r.toString(),r),e)),!1,t),this}choices(u,t){return M("<object|string|array> [string|array]",[u,t],arguments.length),this[$D](this.choices.bind(this),"choices",u,t),this}coerce(u,t){if(M("<object|string|array> [function]",[u,t],arguments.length),Array.isArray(u)){if(!t)throw new Eu("coerce callback must be provided");for(let e of u)this.coerce(e,t);return this}if(typeof u=="object"){for(let e of Object.keys(u))this.coerce(e,u[e]);return this}if(!t)throw new Eu("coerce callback must be provided");return o(this,H,"f").key[u]=!0,o(this,Su,"f").addCoerceMiddleware((e,n)=>{let r;return Object.prototype.hasOwnProperty.call(e,u)?Qe(()=>(r=n.getAliases(),t(e[u])),i=>{e[u]=i;let s=n.getInternalMethods().getParserConfiguration()["strip-aliased"];if(r[u]&&s!==!0)for(let f of r[u])e[f]=i;return e},i=>{throw new Eu(i.message)}):e},u),this}conflicts(u,t){return M("<string|object> [string|array]",[u,t],arguments.length),o(this,cu,"f").conflicts(u,t),this}config(u="config",t,e){return M("[object|string] [string|function] [function]",[u,t,e],arguments.length),typeof u!="object"||Array.isArray(u)?(typeof t=="function"&&(e=t,t=void 0),this.describe(u,t||o(this,K,"f").deferY18nLookup("Path to JSON config file")),(Array.isArray(u)?u:[u]).forEach(n=>{o(this,H,"f").config[n]=e||!0}),this):(u=jt(u,o(this,se,"f"),this[he]()["deep-merge-config"]||!1,o(this,V,"f")),o(this,H,"f").configObjects=(o(this,H,"f").configObjects||[]).concat(u),this)}completion(u,t,e){return M("[string] [string|boolean|function] [function]",[u,t,e],arguments.length),typeof t=="function"&&(e=t,t=void 0),N(this,Tu,u||o(this,Tu,"f")||"completion","f"),t||t===!1||(t="generate completion script"),this.command(o(this,Tu,"f"),t),e&&o(this,vu,"f").registerFunction(e),this}command(u,t,e,n,r,i){return M("<string|array|object> [string|boolean] [function|object] [function] [array] [boolean|string]",[u,t,e,n,r,i],arguments.length),o(this,fu,"f").addHandler(u,t,e,n,r,i),this}commands(u,t,e,n,r,i){return this.command(u,t,e,n,r,i)}commandDir(u,t){M("<string> [object]",[u,t],arguments.length);let e=o(this,vt,"f")||o(this,V,"f").require;return o(this,fu,"f").addDirectory(u,e,o(this,V,"f").getCallerFile(),t),this}count(u){return M("<array|string>",[u],arguments.length),this[ee]("count",u),this[Ce](u),this}default(u,t,e){return M("<object|string|array> [*] [string]",[u,t,e],arguments.length),e&&(Yi(u,o(this,V,"f")),o(this,H,"f").defaultDescription[u]=e),typeof t=="function"&&(Yi(u,o(this,V,"f")),o(this,H,"f").defaultDescription[u]||(o(this,H,"f").defaultDescription[u]=o(this,K,"f").functionDescription(t)),t=t.call()),this[Re](this.default.bind(this),"default",u,t),this}defaults(u,t,e){return this.default(u,t,e)}demandCommand(u=1,t,e,n){return M("[number] [number|string] [string|null|undefined] [string|null|undefined]",[u,t,e,n],arguments.length),typeof t!="number"&&(e=t,t=1/0),this.global("_",!1),o(this,H,"f").demandedCommands._={min:u,max:t,minMsg:e,maxMsg:n},this}demand(u,t,e){return Array.isArray(t)?(t.forEach(n=>{ku(e,!0,o(this,V,"f")),this.demandOption(n,e)}),t=1/0):typeof t!="number"&&(e=t,t=1/0),typeof u=="number"?(ku(e,!0,o(this,V,"f")),this.demandCommand(u,t,e,e)):Array.isArray(u)?u.forEach(n=>{ku(e,!0,o(this,V,"f")),this.demandOption(n,e)}):typeof e=="string"?this.demandOption(u,e):e!==!0&&e!==void 0||this.demandOption(u),this}demandOption(u,t){return M("<object|string|array> [string]",[u,t],arguments.length),this[Re](this.demandOption.bind(this),"demandedOptions",u,t),this}deprecateOption(u,t){return M("<string> [string|boolean]",[u,t],arguments.length),o(this,H,"f").deprecatedOptions[u]=t,this}describe(u,t){return M("<object|string|array> [string]",[u,t],arguments.length),this[UD](u,!0),o(this,K,"f").describe(u,t),this}detectLocale(u){return M("<boolean>",[u],arguments.length),N(this,oe,u,"f"),this}env(u){return M("[string|boolean]",[u],arguments.length),u===!1?delete o(this,H,"f").envPrefix:o(this,H,"f").envPrefix=u||"",this}epilogue(u){return M("<string>",[u],arguments.length),o(this,K,"f").epilog(u),this}epilog(u){return this.epilogue(u)}example(u,t){return M("<string|array> [string]",[u,t],arguments.length),Array.isArray(u)?u.forEach(e=>this.example(...e)):o(this,K,"f").example(u,t),this}exit(u,t){N(this,Bu,!0,"f"),N(this,Qu,t,"f"),o(this,Ou,"f")&&o(this,V,"f").process.exit(u)}exitProcess(u=!0){return M("[boolean]",[u],arguments.length),N(this,Ou,u,"f"),this}fail(u){if(M("<function|boolean>",[u],arguments.length),typeof u=="boolean"&&u!==!1)throw new Eu("Invalid first argument. Expected function or boolean 'false'");return o(this,K,"f").failFn(u),this}getAliases(){return this.parsed?this.parsed.aliases:{}}async getCompletion(u,t){return M("<array> [function]",[u,t],arguments.length),t?o(this,vu,"f").getCompletion(u,t):new Promise((e,n)=>{o(this,vu,"f").getCompletion(u,(r,i)=>{r?n(r):e(i)})})}getDemandedOptions(){return M([],0),o(this,H,"f").demandedOptions}getDemandedCommands(){return M([],0),o(this,H,"f").demandedCommands}getDeprecatedOptions(){return M([],0),o(this,H,"f").deprecatedOptions}getDetectLocale(){return o(this,oe,"f")}getExitProcess(){return o(this,Ou,"f")}getGroups(){return Object.assign({},o(this,Gu,"f"),o(this,le,"f"))}getHelp(){if(N(this,Bu,!0,"f"),!o(this,K,"f").hasCachedHelpMessage()){if(!this.parsed){let t=this[Xe](o(this,ue,"f"),void 0,void 0,0,!0);if(_u(t))return t.then(()=>o(this,K,"f").help())}let u=o(this,fu,"f").runDefaultBuilderOn(this);if(_u(u))return u.then(()=>o(this,K,"f").help())}return Promise.resolve(o(this,K,"f").help())}getOptions(){return o(this,H,"f")}getStrict(){return o(this,ce,"f")}getStrictCommands(){return o(this,fe,"f")}getStrictOptions(){return o(this,_e,"f")}global(u,t){return M("<string|array> [boolean]",[u,t],arguments.length),u=[].concat(u),t!==!1?o(this,H,"f").local=o(this,H,"f").local.filter(e=>u.indexOf(e)===-1):u.forEach(e=>{o(this,H,"f").local.includes(e)||o(this,H,"f").local.push(e)}),this}group(u,t){M("<string|array> <string>",[u,t],arguments.length);let e=o(this,le,"f")[t]||o(this,Gu,"f")[t];o(this,le,"f")[t]&&delete o(this,le,"f")[t];let n={};return o(this,Gu,"f")[t]=(e||[]).concat(u).filter(r=>!n[r]&&(n[r]=!0)),this}hide(u){return M("<string>",[u],arguments.length),o(this,H,"f").hiddenOptions.push(u),this}implies(u,t){return M("<string|object> [number|string|array]",[u,t],arguments.length),o(this,cu,"f").implies(u,t),this}locale(u){return M("[string]",[u],arguments.length),u===void 0?(this[PD](),o(this,V,"f").y18n.getLocale()):(N(this,oe,!1,"f"),o(this,V,"f").y18n.setLocale(u),this)}middleware(u,t,e){return o(this,Su,"f").addMiddleware(u,!!t,e)}nargs(u,t){return M("<string|object|array> [number]",[u,t],arguments.length),this[Re](this.nargs.bind(this),"narg",u,t),this}normalize(u){return M("<array|string>",[u],arguments.length),this[ee]("normalize",u),this}number(u){return M("<array|string>",[u],arguments.length),this[ee]("number",u),this[Ce](u),this}option(u,t){if(M("<string|object> [object]",[u,t],arguments.length),typeof u=="object")Object.keys(u).forEach(e=>{this.options(e,u[e])});else{typeof t!="object"&&(t={}),this[Ce](u),!o(this,qu,"f")||u!=="version"&&t?.alias!=="version"||this[es](['"version" is a reserved word.',"Please do one of the following:",'- Disable version with `yargs.version(false)` if using "version" as an option',"- Use the built-in `yargs.version` method instead (if applicable)","- Use a different option key","https://yargs.js.org/docs/#api-reference-version"].join(`
`),void 0,"versionWarning"),o(this,H,"f").key[u]=!0,t.alias&&this.alias(u,t.alias);let e=t.deprecate||t.deprecated;e&&this.deprecateOption(u,e);let n=t.demand||t.required||t.require;n&&this.demand(u,n),t.demandOption&&this.demandOption(u,typeof t.demandOption=="string"?t.demandOption:void 0),t.conflicts&&this.conflicts(u,t.conflicts),"default"in t&&this.default(u,t.default),t.implies!==void 0&&this.implies(u,t.implies),t.nargs!==void 0&&this.nargs(u,t.nargs),t.config&&this.config(u,t.configParser),t.normalize&&this.normalize(u),t.choices&&this.choices(u,t.choices),t.coerce&&this.coerce(u,t.coerce),t.group&&this.group(u,t.group),(t.boolean||t.type==="boolean")&&(this.boolean(u),t.alias&&this.boolean(t.alias)),(t.array||t.type==="array")&&(this.array(u),t.alias&&this.array(t.alias)),(t.number||t.type==="number")&&(this.number(u),t.alias&&this.number(t.alias)),(t.string||t.type==="string")&&(this.string(u),t.alias&&this.string(t.alias)),(t.count||t.type==="count")&&this.count(u),typeof t.global=="boolean"&&this.global(u,t.global),t.defaultDescription&&(o(this,H,"f").defaultDescription[u]=t.defaultDescription),t.skipValidation&&this.skipValidation(u);let r=t.describe||t.description||t.desc,i=o(this,K,"f").getDescriptions();Object.prototype.hasOwnProperty.call(i,u)&&typeof r!="string"||this.describe(u,r),t.hidden&&this.hide(u),t.requiresArg&&this.requiresArg(u)}return this}options(u,t){return this.option(u,t)}parse(u,t,e){M("[string|array] [function|boolean|object] [function]",[u,t,e],arguments.length),this[ts](),u===void 0&&(u=o(this,ue,"f")),typeof t=="object"&&(N(this,ae,t,"f"),t=e),typeof t=="function"&&(N(this,bu,t,"f"),t=!1),t||N(this,ue,u,"f"),o(this,bu,"f")&&N(this,Ou,!1,"f");let n=this[Xe](u,!!t),r=this.parsed;return o(this,vu,"f").setParsed(this.parsed),_u(n)?n.then(i=>(o(this,bu,"f")&&o(this,bu,"f").call(this,o(this,Qu,"f"),i,o(this,Cu,"f")),i)).catch(i=>{throw o(this,bu,"f")&&o(this,bu,"f")(i,this.parsed.argv,o(this,Cu,"f")),i}).finally(()=>{this[GD](),this.parsed=r}):(o(this,bu,"f")&&o(this,bu,"f").call(this,o(this,Qu,"f"),n,o(this,Cu,"f")),this[GD](),this.parsed=r,n)}parseAsync(u,t,e){let n=this.parse(u,t,e);return _u(n)?n:Promise.resolve(n)}parseSync(u,t,e){let n=this.parse(u,t,e);if(_u(n))throw new Eu(".parseSync() must not be used with asynchronous builders, handlers, or middleware");return n}parserConfiguration(u){return M("<object>",[u],arguments.length),N(this,Ot,u,"f"),this}pkgConf(u,t){M("<string> [string]",[u,t],arguments.length);let e=null,n=this[WD](t||o(this,se,"f"));return n[u]&&typeof n[u]=="object"&&(e=jt(n[u],t||o(this,se,"f"),this[he]()["deep-merge-config"]||!1,o(this,V,"f")),o(this,H,"f").configObjects=(o(this,H,"f").configObjects||[]).concat(e)),this}positional(u,t){M("<string> <object>",[u,t],arguments.length);let e=["default","defaultDescription","implies","normalize","choices","conflicts","coerce","type","describe","desc","description","alias"];t=ve(t,(i,s)=>!(i==="type"&&!["string","number","boolean"].includes(s))&&e.includes(i));let n=o(this,Ye,"f").fullCommands[o(this,Ye,"f").fullCommands.length-1],r=n?o(this,fu,"f").cmdToParseOptions(n):{array:[],alias:{},default:{},demand:{}};return Mt(r).forEach(i=>{let s=r[i];Array.isArray(s)?s.indexOf(u)!==-1&&(t[i]=!0):s[u]&&!(i in t)&&(t[i]=s[u])}),this.group(u,o(this,K,"f").getPositionalGroupName()),this.option(u,t)}recommendCommands(u=!0){return M("[boolean]",[u],arguments.length),N(this,St,u,"f"),this}required(u,t,e){return this.demand(u,t,e)}require(u,t,e){return this.demand(u,t,e)}requiresArg(u){return M("<array|string|object> [number]",[u],arguments.length),typeof u=="string"&&o(this,H,"f").narg[u]||this[Re](this.requiresArg.bind(this),"narg",u,NaN),this}showCompletionScript(u,t){return M("[string] [string]",[u,t],arguments.length),u=u||this.$0,o(this,ye,"f").log(o(this,vu,"f").generateCompletionScript(u,t||o(this,Tu,"f")||"completion")),this}showHelp(u){if(M("[string|function]",[u],arguments.length),N(this,Bu,!0,"f"),!o(this,K,"f").hasCachedHelpMessage()){if(!this.parsed){let e=this[Xe](o(this,ue,"f"),void 0,void 0,0,!0);if(_u(e))return e.then(()=>{o(this,K,"f").showHelp(u)}),this}let t=o(this,fu,"f").runDefaultBuilderOn(this);if(_u(t))return t.then(()=>{o(this,K,"f").showHelp(u)}),this}return o(this,K,"f").showHelp(u),this}scriptName(u){return this.customScriptName=!0,this.$0=u,this}showHelpOnFail(u,t){return M("[boolean|string] [string]",[u,t],arguments.length),o(this,K,"f").showHelpOnFail(u,t),this}showVersion(u){return M("[string|function]",[u],arguments.length),o(this,K,"f").showVersion(u),this}skipValidation(u){return M("<array|string>",[u],arguments.length),this[ee]("skipValidation",u),this}strict(u){return M("[boolean]",[u],arguments.length),N(this,ce,u!==!1,"f"),this}strictCommands(u){return M("[boolean]",[u],arguments.length),N(this,fe,u!==!1,"f"),this}strictOptions(u){return M("[boolean]",[u],arguments.length),N(this,_e,u!==!1,"f"),this}string(u){return M("<array|string>",[u],arguments.length),this[ee]("string",u),this[Ce](u),this}terminalWidth(){return M([],0),o(this,V,"f").process.stdColumns}updateLocale(u){return this.updateStrings(u)}updateStrings(u){return M("<object>",[u],arguments.length),N(this,oe,!1,"f"),o(this,V,"f").y18n.updateLocale(u),this}usage(u,t,e,n){if(M("<string|null|undefined> [string|boolean] [function|object] [function]",[u,t,e,n],arguments.length),t!==void 0){if(ku(u,null,o(this,V,"f")),(u||"").match(/^\$0( |$)/))return this.command(u,t,e,n);throw new Eu(".usage() description must start with $0 if being used as alias for .command()")}return o(this,K,"f").usage(u),this}usageConfiguration(u){return M("<object>",[u],arguments.length),N(this,wt,u,"f"),this}version(u,t,e){let n="version";if(M("[boolean|string] [string] [string]",[u,t,e],arguments.length),o(this,qu,"f")&&(this[jD](o(this,qu,"f")),o(this,K,"f").version(void 0),N(this,qu,null,"f")),arguments.length===0)e=this[rs](),u=n;else if(arguments.length===1){if(u===!1)return this;e=u,u=n}else arguments.length===2&&(e=t,t=void 0);return N(this,qu,typeof u=="string"?u:n,"f"),t=t||o(this,K,"f").deferY18nLookup("Show version number"),o(this,K,"f").version(e||void 0),this.boolean(o(this,qu,"f")),this.describe(o(this,qu,"f"),t),this}wrap(u){return M("<number|null|undefined>",[u],arguments.length),o(this,K,"f").wrap(u),this}[(fu=new WeakMap,se=new WeakMap,Ye=new WeakMap,vu=new WeakMap,Tu=new WeakMap,xt=new WeakMap,Qu=new WeakMap,oe=new WeakMap,yt=new WeakMap,Ou=new WeakMap,It=new WeakMap,Su=new WeakMap,Gu=new WeakMap,Bu=new WeakMap,wu=new WeakMap,Rt=new WeakMap,ye=new WeakMap,Cu=new WeakMap,H=new WeakMap,vt=new WeakMap,Ot=new WeakMap,bu=new WeakMap,ae=new WeakMap,Ie=new WeakMap,le=new WeakMap,ue=new WeakMap,St=new WeakMap,V=new WeakMap,ce=new WeakMap,fe=new WeakMap,_e=new WeakMap,K=new WeakMap,wt=new WeakMap,qu=new WeakMap,cu=new WeakMap,Qi)](u){if(!u._||!u["--"])return u;u._.push.apply(u._,u["--"]);try{delete u["--"]}catch{}return u}[us](){return{log:(...u)=>{this[Nt]()||console.log(...u),N(this,Bu,!0,"f"),o(this,Cu,"f").length&&N(this,Cu,o(this,Cu,"f")+`
`,"f"),N(this,Cu,o(this,Cu,"f")+u.join(" "),"f")},error:(...u)=>{this[Nt]()||console.error(...u),N(this,Bu,!0,"f"),o(this,Cu,"f").length&&N(this,Cu,o(this,Cu,"f")+`
`,"f"),N(this,Cu,o(this,Cu,"f")+u.join(" "),"f")}}}[jD](u){Mt(o(this,H,"f")).forEach(t=>{if(t==="configObjects")return;let e=o(this,H,"f")[t];Array.isArray(e)?e.includes(u)&&e.splice(e.indexOf(u),1):typeof e=="object"&&delete e[u]}),delete o(this,K,"f").getDescriptions()[u]}[es](u,t,e){o(this,yt,"f")[e]||(o(this,V,"f").process.emitWarning(u,t),o(this,yt,"f")[e]=!0)}[ts](){o(this,It,"f").push({options:o(this,H,"f"),configObjects:o(this,H,"f").configObjects.slice(0),exitProcess:o(this,Ou,"f"),groups:o(this,Gu,"f"),strict:o(this,ce,"f"),strictCommands:o(this,fe,"f"),strictOptions:o(this,_e,"f"),completionCommand:o(this,Tu,"f"),output:o(this,Cu,"f"),exitError:o(this,Qu,"f"),hasOutput:o(this,Bu,"f"),parsed:this.parsed,parseFn:o(this,bu,"f"),parseContext:o(this,ae,"f")}),o(this,K,"f").freeze(),o(this,cu,"f").freeze(),o(this,fu,"f").freeze(),o(this,Su,"f").freeze()}[Ds](){let u,t="";return u=/\b(node|iojs|electron)(\.exe)?$/.test(o(this,V,"f").process.argv()[0])?o(this,V,"f").process.argv().slice(1,2):o(this,V,"f").process.argv().slice(0,1),t=u.map(e=>{let n=this[Cs](o(this,se,"f"),e);return e.match(/^(\/|([a-zA-Z]:)?\\)/)&&n.length<e.length?n:e}).join(" ").trim(),o(this,V,"f").getEnv("_")&&o(this,V,"f").getProcessArgvBin()===o(this,V,"f").getEnv("_")&&(t=o(this,V,"f").getEnv("_").replace(`${o(this,V,"f").path.dirname(o(this,V,"f").process.execPath())}/`,"")),t}[he](){return o(this,Ot,"f")}[ns](){return o(this,wt,"f")}[PD](){if(!o(this,oe,"f"))return;let u=o(this,V,"f").getEnv("LC_ALL")||o(this,V,"f").getEnv("LC_MESSAGES")||o(this,V,"f").getEnv("LANG")||o(this,V,"f").getEnv("LANGUAGE")||"en_US";this.locale(u.replace(/[.:].*/,""))}[rs](){return this[WD]().version||"unknown"}[is](u){let t=u["--"]?u["--"]:u._;for(let e,n=0;(e=t[n])!==void 0;n++)o(this,V,"f").Parser.looksLikeNumber(e)&&Number.isSafeInteger(Math.floor(parseFloat(`${e}`)))&&(t[n]=Number(e));return u}[WD](u){let t=u||"*";if(o(this,Ie,"f")[t])return o(this,Ie,"f")[t];let e={};try{let n=u||o(this,V,"f").mainFilename;!u&&o(this,V,"f").path.extname(n)&&(n=o(this,V,"f").path.dirname(n));let r=o(this,V,"f").findUp(n,(i,s)=>s.includes("package.json")?"package.json":void 0);ku(r,void 0,o(this,V,"f")),e=JSON.parse(o(this,V,"f").readFileSync(r,"utf8"))}catch{}return o(this,Ie,"f")[t]=e||{},o(this,Ie,"f")[t]}[ee](u,t){(t=[].concat(t)).forEach(e=>{e=this[HD](e),o(this,H,"f")[u].push(e)})}[Re](u,t,e,n){this[kD](u,t,e,n,(r,i,s)=>{o(this,H,"f")[r][i]=s})}[$D](u,t,e,n){this[kD](u,t,e,n,(r,i,s)=>{o(this,H,"f")[r][i]=(o(this,H,"f")[r][i]||[]).concat(s)})}[kD](u,t,e,n,r){if(Array.isArray(e))e.forEach(i=>{u(i,n)});else if((i=>typeof i=="object")(e))for(let i of Mt(e))u(i,e[i]);else r(t,this[HD](e),n)}[HD](u){return u==="__proto__"?"___proto___":u}[UD](u,t){return this[Re](this[UD].bind(this),"key",u,t),this}[GD](){var u,t,e,n,r,i,s,f,a,_,A,b;let W=o(this,It,"f").pop(),L;ku(W,void 0,o(this,V,"f")),u=this,t=this,e=this,n=this,r=this,i=this,s=this,f=this,a=this,_=this,A=this,b=this,{options:{set value(m){N(u,H,m,"f")}}.value,configObjects:L,exitProcess:{set value(m){N(t,Ou,m,"f")}}.value,groups:{set value(m){N(e,Gu,m,"f")}}.value,output:{set value(m){N(n,Cu,m,"f")}}.value,exitError:{set value(m){N(r,Qu,m,"f")}}.value,hasOutput:{set value(m){N(i,Bu,m,"f")}}.value,parsed:this.parsed,strict:{set value(m){N(s,ce,m,"f")}}.value,strictCommands:{set value(m){N(f,fe,m,"f")}}.value,strictOptions:{set value(m){N(a,_e,m,"f")}}.value,completionCommand:{set value(m){N(_,Tu,m,"f")}}.value,parseFn:{set value(m){N(A,bu,m,"f")}}.value,parseContext:{set value(m){N(b,ae,m,"f")}}.value}=W,o(this,H,"f").configObjects=L,o(this,K,"f").unfreeze(),o(this,cu,"f").unfreeze(),o(this,fu,"f").unfreeze(),o(this,Su,"f").unfreeze()}[ss](u,t){return Qe(t,e=>(u(e),e))}getInternalMethods(){return{getCommandInstance:this[os].bind(this),getContext:this[as].bind(this),getHasOutput:this[ls].bind(this),getLoggerInstance:this[cs].bind(this),getParseContext:this[fs].bind(this),getParserConfiguration:this[he].bind(this),getUsageConfiguration:this[ns].bind(this),getUsageInstance:this[_s].bind(this),getValidationInstance:this[hs].bind(this),hasParseCallback:this[Nt].bind(this),isGlobalContext:this[Fs].bind(this),postProcess:this[Fe].bind(this),reset:this[qD].bind(this),runValidation:this[VD].bind(this),runYargsParserAndExecuteCommands:this[Xe].bind(this),setHasOutput:this[Es].bind(this)}}[os](){return o(this,fu,"f")}[as](){return o(this,Ye,"f")}[ls](){return o(this,Bu,"f")}[cs](){return o(this,ye,"f")}[fs](){return o(this,ae,"f")||{}}[_s](){return o(this,K,"f")}[hs](){return o(this,cu,"f")}[Nt](){return!!o(this,bu,"f")}[Fs](){return o(this,Rt,"f")}[Fe](u,t,e,n){return e||_u(u)?u:(t||(u=this[Qi](u)),(this[he]()["parse-positional-numbers"]||this[he]()["parse-positional-numbers"]===void 0)&&(u=this[is](u)),n&&(u=Je(u,this,o(this,Su,"f").getMiddleware(),!1)),u)}[qD](u={}){N(this,H,o(this,H,"f")||{},"f");let t={};t.local=o(this,H,"f").local||[],t.configObjects=o(this,H,"f").configObjects||[];let e={};return t.local.forEach(n=>{e[n]=!0,(u[n]||[]).forEach(r=>{e[r]=!0})}),Object.assign(o(this,le,"f"),Object.keys(o(this,Gu,"f")).reduce((n,r)=>{let i=o(this,Gu,"f")[r].filter(s=>!(s in e));return i.length>0&&(n[r]=i),n},{})),N(this,Gu,{},"f"),["array","boolean","string","skipValidation","count","normalize","number","hiddenOptions"].forEach(n=>{t[n]=(o(this,H,"f")[n]||[]).filter(r=>!e[r])}),["narg","key","alias","default","defaultDescription","config","choices","demandedOptions","demandedCommands","deprecatedOptions"].forEach(n=>{t[n]=ve(o(this,H,"f")[n],r=>!e[r])}),t.envPrefix=o(this,H,"f").envPrefix,N(this,H,t,"f"),N(this,K,o(this,K,"f")?o(this,K,"f").reset(e):Ml(this,o(this,V,"f")),"f"),N(this,cu,o(this,cu,"f")?o(this,cu,"f").reset(e):function(n,r,i){let s=i.y18n.__,f=i.y18n.__n,a={nonOptionCount:function(L){let m=n.getDemandedCommands(),F=L._.length+(L["--"]?L["--"].length:0)-n.getInternalMethods().getContext().commands.length;m._&&(F<m._.min||F>m._.max)&&(F<m._.min?m._.minMsg!==void 0?r.fail(m._.minMsg?m._.minMsg.replace(/\$0/g,F.toString()).replace(/\$1/,m._.min.toString()):null):r.fail(f("Not enough non-option arguments: got %s, need at least %s","Not enough non-option arguments: got %s, need at least %s",F,F.toString(),m._.min.toString())):F>m._.max&&(m._.maxMsg!==void 0?r.fail(m._.maxMsg?m._.maxMsg.replace(/\$0/g,F.toString()).replace(/\$1/,m._.max.toString()):null):r.fail(f("Too many non-option arguments: got %s, maximum of %s","Too many non-option arguments: got %s, maximum of %s",F,F.toString(),m._.max.toString()))))},positionalCount:function(L,m){m<L&&r.fail(f("Not enough non-option arguments: got %s, need at least %s","Not enough non-option arguments: got %s, need at least %s",m,m+"",L+""))},requiredArguments:function(L,m){let F=null;for(let k of Object.keys(m))Object.prototype.hasOwnProperty.call(L,k)&&L[k]!==void 0||(F=F||{},F[k]=m[k]);if(F){let k=[];for(let G of Object.keys(F)){let J=F[G];J&&k.indexOf(J)<0&&k.push(J)}let q=k.length?`
${k.join(`
`)}`:"";r.fail(f("Missing required argument: %s","Missing required arguments: %s",Object.keys(F).length,Object.keys(F).join(", ")+q))}},unknownArguments:function(L,m,F,k,q=!0){var G;let J=n.getInternalMethods().getCommandInstance().getCommands(),X=[],Lu=n.getInternalMethods().getContext();if(Object.keys(L).forEach(nu=>{Ji.includes(nu)||Object.prototype.hasOwnProperty.call(F,nu)||Object.prototype.hasOwnProperty.call(n.getInternalMethods().getParseContext(),nu)||a.isValidAndSomeAliasIsNotNew(nu,m)||X.push(nu)}),q&&(Lu.commands.length>0||J.length>0||k)&&L._.slice(Lu.commands.length).forEach(nu=>{J.includes(""+nu)||X.push(""+nu)}),q){let nu=((G=n.getDemandedCommands()._)===null||G===void 0?void 0:G.max)||0,y=Lu.commands.length+nu;y<L._.length&&L._.slice(y).forEach($=>{$=String($),Lu.commands.includes($)||X.includes($)||X.push($)})}X.length&&r.fail(f("Unknown argument: %s","Unknown arguments: %s",X.length,X.map(nu=>nu.trim()?nu:`"${nu}"`).join(", ")))},unknownCommands:function(L){let m=n.getInternalMethods().getCommandInstance().getCommands(),F=[],k=n.getInternalMethods().getContext();return(k.commands.length>0||m.length>0)&&L._.slice(k.commands.length).forEach(q=>{m.includes(""+q)||F.push(""+q)}),F.length>0&&(r.fail(f("Unknown command: %s","Unknown commands: %s",F.length,F.join(", "))),!0)},isValidAndSomeAliasIsNotNew:function(L,m){if(!Object.prototype.hasOwnProperty.call(m,L))return!1;let F=n.parsed.newAliases;return[L,...m[L]].some(k=>!Object.prototype.hasOwnProperty.call(F,k)||!F[L])},limitedChoices:function(L){let m=n.getOptions(),F={};if(!Object.keys(m.choices).length)return;Object.keys(L).forEach(G=>{Ji.indexOf(G)===-1&&Object.prototype.hasOwnProperty.call(m.choices,G)&&[].concat(L[G]).forEach(J=>{m.choices[G].indexOf(J)===-1&&J!==void 0&&(F[G]=(F[G]||[]).concat(J))})});let k=Object.keys(F);if(!k.length)return;let q=s("Invalid values:");k.forEach(G=>{q+=`
  ${s("Argument: %s, Given: %s, Choices: %s",G,r.stringifiedValues(F[G]),r.stringifiedValues(m.choices[G]))}`}),r.fail(q)}},_={};function A(L,m){let F=Number(m);return typeof(m=isNaN(F)?m:F)=="number"?m=L._.length>=m:m.match(/^--no-.+/)?(m=m.match(/^--no-(.+)/)[1],m=!Object.prototype.hasOwnProperty.call(L,m)):m=Object.prototype.hasOwnProperty.call(L,m),m}a.implies=function(L,m){M("<string|object> [array|number|string]",[L,m],arguments.length),typeof L=="object"?Object.keys(L).forEach(F=>{a.implies(F,L[F])}):(n.global(L),_[L]||(_[L]=[]),Array.isArray(m)?m.forEach(F=>a.implies(L,F)):(ku(m,void 0,i),_[L].push(m)))},a.getImplied=function(){return _},a.implications=function(L){let m=[];if(Object.keys(_).forEach(F=>{let k=F;(_[F]||[]).forEach(q=>{let G=k,J=q;G=A(L,G),q=A(L,q),G&&!q&&m.push(` ${k} -> ${J}`)})}),m.length){let F=`${s("Implications failed:")}
`;m.forEach(k=>{F+=k}),r.fail(F)}};let b={};a.conflicts=function(L,m){M("<string|object> [array|string]",[L,m],arguments.length),typeof L=="object"?Object.keys(L).forEach(F=>{a.conflicts(F,L[F])}):(n.global(L),b[L]||(b[L]=[]),Array.isArray(m)?m.forEach(F=>a.conflicts(L,F)):b[L].push(m))},a.getConflicting=()=>b,a.conflicting=function(L){Object.keys(L).forEach(m=>{b[m]&&b[m].forEach(F=>{F&&L[m]!==void 0&&L[F]!==void 0&&r.fail(s("Arguments %s and %s are mutually exclusive",m,F))})}),n.getInternalMethods().getParserConfiguration()["strip-dashed"]&&Object.keys(b).forEach(m=>{b[m].forEach(F=>{F&&L[i.Parser.camelCase(m)]!==void 0&&L[i.Parser.camelCase(F)]!==void 0&&r.fail(s("Arguments %s and %s are mutually exclusive",m,F))})})},a.recommendCommands=function(L,m){m=m.sort((q,G)=>G.length-q.length);let F=null,k=1/0;for(let q,G=0;(q=m[G])!==void 0;G++){let J=jl(L,q);J<=3&&J<k&&(k=J,F=q)}F&&r.fail(s("Did you mean %s?",F))},a.reset=function(L){return _=ve(_,m=>!L[m]),b=ve(b,m=>!L[m]),a};let W=[];return a.freeze=function(){W.push({implied:_,conflicting:b})},a.unfreeze=function(){let L=W.pop();ku(L,void 0,i),{implied:_,conflicting:b}=L},a}(this,o(this,K,"f"),o(this,V,"f")),"f"),N(this,fu,o(this,fu,"f")?o(this,fu,"f").reset():function(n,r,i,s){return new JD(n,r,i,s)}(o(this,K,"f"),o(this,cu,"f"),o(this,Su,"f"),o(this,V,"f")),"f"),o(this,vu,"f")||N(this,vu,function(n,r,i,s){return new un(n,r,i,s)}(this,o(this,K,"f"),o(this,fu,"f"),o(this,V,"f")),"f"),o(this,Su,"f").reset(),N(this,Tu,null,"f"),N(this,Cu,"","f"),N(this,Qu,null,"f"),N(this,Bu,!1,"f"),this.parsed=!1,this}[Cs](u,t){return o(this,V,"f").path.relative(u,t)}[Xe](u,t,e,n=0,r=!1){let i=!!e||r;u=u||o(this,ue,"f"),o(this,H,"f").__=o(this,V,"f").y18n.__,o(this,H,"f").configuration=this[he]();let s=!!o(this,H,"f").configuration["populate--"],f=Object.assign({},o(this,H,"f").configuration,{"populate--":!0}),a=o(this,V,"f").Parser.detailed(u,Object.assign({},o(this,H,"f"),{configuration:{"parse-positional-numbers":!1,...f}})),_=Object.assign(a.argv,o(this,ae,"f")),A,b=a.aliases,W=!1,L=!1;Object.keys(_).forEach(m=>{m===o(this,wu,"f")&&_[m]?W=!0:m===o(this,qu,"f")&&_[m]&&(L=!0)}),_.$0=this.$0,this.parsed=a,n===0&&o(this,K,"f").clearCachedHelpMessage();try{if(this[PD](),t)return this[Fe](_,s,!!e,!1);o(this,wu,"f")&&[o(this,wu,"f")].concat(b[o(this,wu,"f")]||[]).filter(q=>q.length>1).includes(""+_._[_._.length-1])&&(_._.pop(),W=!0),N(this,Rt,!1,"f");let m=o(this,fu,"f").getCommands(),F=o(this,vu,"f").completionKey in _,k=W||F||r;if(_._.length){if(m.length){let q;for(let G,J=n||0;_._[J]!==void 0;J++){if(G=String(_._[J]),m.includes(G)&&G!==o(this,Tu,"f")){let X=o(this,fu,"f").runCommand(G,this,a,J+1,r,W||L||r);return this[Fe](X,s,!!e,!1)}if(!q&&G!==o(this,Tu,"f")){q=G;break}}!o(this,fu,"f").hasDefaultCommand()&&o(this,St,"f")&&q&&!k&&o(this,cu,"f").recommendCommands(q,m)}o(this,Tu,"f")&&_._.includes(o(this,Tu,"f"))&&!F&&(o(this,Ou,"f")&&Ze(!0),this.showCompletionScript(),this.exit(0))}if(o(this,fu,"f").hasDefaultCommand()&&!k){let q=o(this,fu,"f").runCommand(null,this,a,0,r,W||L||r);return this[Fe](q,s,!!e,!1)}if(F){o(this,Ou,"f")&&Ze(!0);let q=(u=[].concat(u)).slice(u.indexOf(`--${o(this,vu,"f").completionKey}`)+1);return o(this,vu,"f").getCompletion(q,(G,J)=>{if(G)throw new Eu(G.message);(J||[]).forEach(X=>{o(this,ye,"f").log(X)}),this.exit(0)}),this[Fe](_,!s,!!e,!1)}if(o(this,Bu,"f")||(W?(o(this,Ou,"f")&&Ze(!0),i=!0,this.showHelp("log"),this.exit(0)):L&&(o(this,Ou,"f")&&Ze(!0),i=!0,o(this,K,"f").showVersion("log"),this.exit(0))),!i&&o(this,H,"f").skipValidation.length>0&&(i=Object.keys(_).some(q=>o(this,H,"f").skipValidation.indexOf(q)>=0&&_[q]===!0)),!i){if(a.error)throw new Eu(a.error.message);if(!F){let q=this[VD](b,{},a.error);e||(A=Je(_,this,o(this,Su,"f").getMiddleware(),!0)),A=this[ss](q,A??_),_u(A)&&!e&&(A=A.then(()=>Je(_,this,o(this,Su,"f").getMiddleware(),!1)))}}}catch(m){if(!(m instanceof Eu))throw m;o(this,K,"f").fail(m.message,m)}return this[Fe](A??_,s,!!e,!0)}[VD](u,t,e,n){let r={...this.getDemandedOptions()};return i=>{if(e)throw new Eu(e.message);o(this,cu,"f").nonOptionCount(i),o(this,cu,"f").requiredArguments(i,r);let s=!1;o(this,fe,"f")&&(s=o(this,cu,"f").unknownCommands(i)),o(this,ce,"f")&&!s?o(this,cu,"f").unknownArguments(i,u,t,!!n):o(this,_e,"f")&&o(this,cu,"f").unknownArguments(i,u,{},!1,!1),o(this,cu,"f").limitedChoices(i),o(this,cu,"f").implications(i),o(this,cu,"f").conflicting(i)}}[Es](){N(this,Bu,!0,"f")}[Ce](u){if(typeof u=="string")o(this,H,"f").key[u]=!0;else for(let t of u)o(this,H,"f").key[t]=!0}},zD,KD,{readFileSync:Pl}=require("fs"),{inspect:Wl}=require("util"),{resolve:$l}=require("path"),kl=ni(),Hl=LD(),YD,ds={assert:{notStrictEqual:Vi.notStrictEqual,strictEqual:Vi.strictEqual},cliui:Ni(),findUp:Wi(),getEnv:D=>process.env[D],getCallerFile:ki(),getProcessArgvBin:As,inspect:Wl,mainFilename:(KD=(zD=require==null?void 0:require.main)===null||zD===void 0?void 0:zD.filename)!==null&&KD!==void 0?KD:process.cwd(),Parser:Hl,path:require("path"),process:{argv:()=>process.argv,cwd:process.cwd,emitWarning:(D,u)=>process.emitWarning(D,u),execPath:()=>process.execPath,exit:D=>{process.exit(D)},nextTick:process.nextTick,stdColumns:process.stdout.columns!==void 0?process.stdout.columns:null},readFileSync:Pl,require,requireDirectory:qi(),stringWidth:$e(),y18n:kl({directory:$l(__dirname,"../locales"),updateFiles:!1})},gs=!((YD=process==null?void 0:process.env)===null||YD===void 0)&&YD.YARGS_MIN_NODE_VERSION?Number(process.env.YARGS_MIN_NODE_VERSION):12;if(process&&process.version&&Number(process.version.match(/v([^.]+)/)[1])<gs)throw Error(`yargs supports a minimum Node.js version of ${gs}. Read our version support policy: https://github.com/yargs/yargs#supported-nodejs-versions`);var Ul=LD(),XD,Gl={applyExtends:jt,cjsPlatformShim:ds,Yargs:(XD=ds,(D=[],u=XD.process.cwd(),t)=>{let e=new en(D,u,t,XD);return Object.defineProperty(e,"argv",{get:()=>e.parse(),enumerable:!0}),e.help(),e.version(),e}),argsert:M,isPromise:_u,objFilter:ve,parseCommand:Oe,Parser:Ul,processArgv:wl,YError:Eu};Ts.exports=Gl});var bs=Y((Zc,Bs)=>{"use strict";var{Yargs:ql,processArgv:Vl}=Dn();Se(Vl.hideBin(process.argv));Bs.exports=Se;function Se(D,u){let t=ql(D,u,require);return Kl(t),t}function nn(D,u,t){Object.defineProperty(D,u,{configurable:!0,enumerable:!0,get:t})}function zl(D,u){let t=Object.getOwnPropertyDescriptor(D,u);if(typeof t<"u")return t.get}function Kl(D){[...Object.keys(D),...Object.getOwnPropertyNames(D.constructor.prototype)].forEach(u=>{u==="argv"?nn(Se,u,zl(D,u)):typeof D[u]=="function"?Se[u]=D[u].bind(D):(nn(Se,"$0",()=>D.$0),nn(Se,"parsed",()=>D.parsed))})}});var xs=Y((Jc,Ls)=>{var{applyExtends:Yl,cjsPlatformShim:Xl,Parser:Zl,processArgv:Jl}=Dn();Ls.exports={applyExtends:(D,u,t)=>Yl(D,u,t,Xl),hideBin:Jl.hideBin,Parser:Zl}});var Is=Y((uf,Pt)=>{"use strict";var Ql=(()=>{let n={},r={font:"Standard",fontPath:"./fonts"};function i(C,d){let l={},c,p,B,O,x=[[16384,"vLayout",2],[8192,"vLayout",1],[4096,"vRule5",!0],[2048,"vRule4",!0],[1024,"vRule3",!0],[512,"vRule2",!0],[256,"vRule1",!0],[128,"hLayout",2],[64,"hLayout",1],[32,"hRule6",!0],[16,"hRule5",!0],[8,"hRule4",!0],[4,"hRule3",!0],[2,"hRule2",!0],[1,"hRule1",!0]];for(c=d!==null?d:C,p=0,B=x.length;p<B;)O=x[p],c>=O[0]?(c=c-O[0],l[O[1]]=typeof l[O[1]]>"u"?O[2]:l[O[1]]):O[1]!=="vLayout"&&O[1]!=="hLayout"&&(l[O[1]]=!1),p++;return typeof l.hLayout>"u"?C===0?l.hLayout=1:C===-1?l.hLayout=0:l.hRule1||l.hRule2||l.hRule3||l.hRule4||l.hRule5||l.hRule6?l.hLayout=3:l.hLayout=2:l.hLayout===2&&(l.hRule1||l.hRule2||l.hRule3||l.hRule4||l.hRule5||l.hRule6)&&(l.hLayout=3),typeof l.vLayout>"u"?l.vRule1||l.vRule2||l.vRule3||l.vRule4||l.vRule5?l.vLayout=3:l.vLayout=0:l.vLayout===2&&(l.vRule1||l.vRule2||l.vRule3||l.vRule4||l.vRule5)&&(l.vLayout=3),l}function s(C,d,l){return C===d&&C!==l?C:!1}function f(C,d){let l="|/\\[]{}()<>";if(C==="_"){if(l.indexOf(d)!==-1)return d}else if(d==="_"&&l.indexOf(C)!==-1)return C;return!1}function a(C,d){let l="| /\\ [] {} () <>",c=l.indexOf(C),p=l.indexOf(d);if(c!==-1&&p!==-1&&c!==p&&Math.abs(c-p)!==1){let B=Math.max(c,p),O=B+1;return l.substring(B,O)}return!1}function _(C,d){let l="[] {} ()",c=l.indexOf(C),p=l.indexOf(d);return c!==-1&&p!==-1&&Math.abs(c-p)<=1?"|":!1}function A(C,d){let l="/\\ \\/ ><",c={0:"|",3:"Y",6:"X"},p=l.indexOf(C),B=l.indexOf(d);return p!==-1&&B!==-1&&B-p===1?c[p]:!1}function b(C,d,l){return C===l&&d===l?l:!1}function W(C,d){return C===d?C:!1}function L(C,d){let l="|/\\[]{}()<>";if(C==="_"){if(l.indexOf(d)!==-1)return d}else if(d==="_"&&l.indexOf(C)!==-1)return C;return!1}function m(C,d){let l="| /\\ [] {} () <>",c=l.indexOf(C),p=l.indexOf(d);if(c!==-1&&p!==-1&&c!==p&&Math.abs(c-p)!==1){let B=Math.max(c,p),O=B+1;return l.substring(B,O)}return!1}function F(C,d){return C==="-"&&d==="_"||C==="_"&&d==="-"?"=":!1}function k(C,d){return C==="|"&&d==="|"?"|":!1}function q(C,d,l){return d===" "||d===""||d===l&&C!==" "?C:d}function G(C,d,l){if(l.fittingRules.vLayout===0)return"invalid";let c,p=Math.min(C.length,d.length),B,O,x=!1,v;if(p===0)return"invalid";for(c=0;c<p;c++)if(B=C.substring(c,c+1),O=d.substring(c,c+1),B!==" "&&O!==" "){if(l.fittingRules.vLayout===1)return"invalid";if(l.fittingRules.vLayout===2)return"end";if(k(B,O)){x=x||!1;continue}if(v=!1,v=l.fittingRules.vRule1?W(B,O):v,v=!v&&l.fittingRules.vRule2?L(B,O):v,v=!v&&l.fittingRules.vRule3?m(B,O):v,v=!v&&l.fittingRules.vRule4?F(B,O):v,x=!0,!v)return"invalid"}return x?"end":"valid"}function J(C,d,l){let c=C.length,p=C.length,B=d.length,O,x,v,w=1,tu,Du,z;for(;w<=c;){for(O=C.slice(Math.max(0,p-w),p),x=d.slice(0,Math.min(c,w)),v=x.length,z="",tu=0;tu<v;tu++)if(Du=G(O[tu],x[tu],l),Du==="end")z=Du;else if(Du==="invalid"){z=Du;break}else z===""&&(z="valid");if(z==="invalid"){w--;break}if(z==="end")break;z==="valid"&&w++}return Math.min(c,w)}function X(C,d,l){let c,p=Math.min(C.length,d.length),B,O,x="",v;for(c=0;c<p;c++)B=C.substring(c,c+1),O=d.substring(c,c+1),B!==" "&&O!==" "?l.fittingRules.vLayout===1||l.fittingRules.vLayout===2?x+=q(B,O):(v=!1,v=l.fittingRules.vRule5?k(B,O):v,v=!v&&l.fittingRules.vRule1?W(B,O):v,v=!v&&l.fittingRules.vRule2?L(B,O):v,v=!v&&l.fittingRules.vRule3?m(B,O):v,v=!v&&l.fittingRules.vRule4?F(B,O):v,x+=v):x+=q(B,O);return x}function Lu(C,d,l,c){let p=C.length,B=d.length,O=C.slice(0,Math.max(0,p-l)),x=C.slice(Math.max(0,p-l),p),v=d.slice(0,Math.min(l,B)),w,tu,Du,z=[],eu,h=[];for(tu=x.length,w=0;w<tu;w++)w>=B?Du=x[w]:Du=X(x[w],v[w],c),z.push(Du);return eu=d.slice(Math.min(l,B),B),h.concat(O,z,eu)}function nu(C,d){let l,c=C.length,p="";for(l=0;l<d;l++)p+=" ";for(l=0;l<c;l++)C[l]+=p}function y(C,d,l){let c=C[0].length,p=d[0].length,B;return c>p?nu(d,c-p):p>c&&nu(C,p-c),B=J(C,d,l),Lu(C,d,B,l)}function $(C,d,l){if(l.fittingRules.hLayout===0)return 0;let c,p=C.length,B=d.length,O=p,x=1,v=!1,w=!1,tu,Du,z,eu;if(p===0)return 0;u:for(;x<=O;){let h=p-x;for(tu=C.substring(h,h+x),Du=d.substring(0,Math.min(x,B)),c=0;c<Math.min(x,B);c++)if(z=tu.substring(c,c+1),eu=Du.substring(c,c+1),z!==" "&&eu!==" "){if(l.fittingRules.hLayout===1){x=x-1;break u}else if(l.fittingRules.hLayout===2){(z===l.hardBlank||eu===l.hardBlank)&&(x=x-1);break u}else if(v=!0,w=!1,w=l.fittingRules.hRule1?s(z,eu,l.hardBlank):w,w=!w&&l.fittingRules.hRule2?f(z,eu,l.hardBlank):w,w=!w&&l.fittingRules.hRule3?a(z,eu,l.hardBlank):w,w=!w&&l.fittingRules.hRule4?_(z,eu,l.hardBlank):w,w=!w&&l.fittingRules.hRule5?A(z,eu,l.hardBlank):w,w=!w&&l.fittingRules.hRule6?b(z,eu,l.hardBlank):w,!w){x=x-1;break u}}if(v)break;x++}return Math.min(O,x)}function j(C,d,l,c){let p,B,O=[],x,v,w,tu,Du,z,eu,h;for(p=0;p<c.height;p++){eu=C[p],h=d[p],Du=eu.length,z=h.length,x=Du-l,v=eu.substr(0,Math.max(0,x)),w="";let S=Math.max(0,Du-l);var g=eu.substring(S,S+l),I=h.substring(0,Math.min(l,z));for(B=0;B<l;B++){var T=B<Du?g.substring(B,B+1):" ",E=B<z?I.substring(B,B+1):" ";if(T!==" "&&E!==" ")if(c.fittingRules.hLayout===1)w+=q(T,E,c.hardBlank);else if(c.fittingRules.hLayout===2)w+=q(T,E,c.hardBlank);else{var R="";R=!R&&c.fittingRules.hRule1?s(T,E,c.hardBlank):R,R=!R&&c.fittingRules.hRule2?f(T,E,c.hardBlank):R,R=!R&&c.fittingRules.hRule3?a(T,E,c.hardBlank):R,R=!R&&c.fittingRules.hRule4?_(T,E,c.hardBlank):R,R=!R&&c.fittingRules.hRule5?A(T,E,c.hardBlank):R,R=!R&&c.fittingRules.hRule6?b(T,E,c.hardBlank):R,R=R||q(T,E,c.hardBlank),w+=R}else w+=q(T,E,c.hardBlank)}l>=z?tu="":tu=h.substring(l,l+Math.max(0,z-l)),O[p]=v+w+tu}return O}function Q(C){let d=[],l;for(l=0;l<C;l++)d[l]="";return d}let uu=function(C){return Math.max.apply(Math,C.map(function(d,l){return d.length}))};function Z(C,d,l){return C.reduce(function(c,p){return j(c,p.fig,p.overlap,l)},Q(d))}function hu(C,d,l){let c={};for(let p=C.length;--p;){let B=Z(C.slice(0,p),d,l);if(uu(B)<=l.width){c.outputFigText=B,p<C.length?c.chars=C.slice(p):c.chars=[];break}}return c}function Nu(C,d,l){let c,p,B=0,O,x,v,w=l.height,tu=[],Du,z,eu=[],h,g,I,T,E;for(x=Q(w),l.width>0&&l.whitespaceBreak&&(z={chars:[],overlap:B}),l.printDirection===1&&(C=C.split("").reverse().join("")),v=C.length,c=0;c<v;c++)if(h=C.substring(c,c+1),g=h.match(/\s/),p=d[h.charCodeAt(0)],T=null,p){if(l.fittingRules.hLayout!==0){for(B=1e4,O=0;O<l.height;O++)B=Math.min(B,$(x[O],p[O],l));B=B===1e4?0:B}if(l.width>0&&(l.whitespaceBreak?(I=Z(z.chars.concat([{fig:p,overlap:B}]),w,l),T=Z(eu.concat([{fig:I,overlap:z.overlap}]),w,l),Du=uu(T)):(T=j(x,p,B,l),Du=uu(T)),Du>=l.width&&c>0&&(l.whitespaceBreak?(x=Z(eu.slice(0,-1),w,l),eu.length>1&&(tu.push(x),x=Q(w)),eu=[]):(tu.push(x),x=Q(w)))),l.width>0&&l.whitespaceBreak&&((!g||c===v-1)&&z.chars.push({fig:p,overlap:B}),g||c===v-1)){for(E=null;T=Z(z.chars,w,l),Du=uu(T),Du>=l.width;)E=hu(z.chars,w,l),z={chars:E.chars},tu.push(E.outputFigText);Du>0&&(E?eu.push({fig:T,overlap:1}):eu.push({fig:T,overlap:z.overlap})),g&&(eu.push({fig:p,overlap:B}),x=Q(w)),c===v-1&&(x=Z(eu,w,l)),z={chars:[],overlap:B};continue}x=j(x,p,B,l)}return uu(x)>0&&tu.push(x),l.showHardBlanks!==!0&&tu.forEach(function(R){for(v=R.length,O=0;O<v;O++)R[O]=R[O].replace(new RegExp("\\"+l.hardBlank,"g")," ")}),tu}let ru=function(C,d){let l=["hLayout","hRule1","hRule2","hRule3","hRule4","hRule5","hRule6"],c={},p;if(C==="default")for(p=0;p<l.length;p++)c[l[p]]=d.fittingRules[l[p]];else if(C==="full")c={hLayout:0,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(C==="fitted")c={hLayout:1,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(C==="controlled smushing")c={hLayout:3,hRule1:!0,hRule2:!0,hRule3:!0,hRule4:!0,hRule5:!0,hRule6:!0};else if(C==="universal smushing")c={hLayout:2,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else return;return c},zu=function(C,d){let l=["vLayout","vRule1","vRule2","vRule3","vRule4","vRule5"],c={},p;if(C==="default")for(p=0;p<l.length;p++)c[l[p]]=d.fittingRules[l[p]];else if(C==="full")c={vLayout:0,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(C==="fitted")c={vLayout:1,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(C==="controlled smushing")c={vLayout:3,vRule1:!0,vRule2:!0,vRule3:!0,vRule4:!0,vRule5:!0};else if(C==="universal smushing")c={vLayout:2,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else return;return c},Ku=function(C,d,l){l=l.replace(/\r\n/g,`
`).replace(/\r/g,`
`);let c=l.split(`
`),p=[],B,O,x;for(O=c.length,B=0;B<O;B++)p=p.concat(Nu(c[B],n[C],d));for(O=p.length,x=p[0],B=1;B<O;B++)x=y(x,p[B],d);return x?x.join(`
`):""};function Uu(C,d){let l=JSON.parse(JSON.stringify(C)),c,p;if(typeof d.horizontalLayout<"u"){c=ru(d.horizontalLayout,C);for(p in c)c.hasOwnProperty(p)&&(l.fittingRules[p]=c[p])}if(typeof d.verticalLayout<"u"){c=zu(d.verticalLayout,C);for(p in c)c.hasOwnProperty(p)&&(l.fittingRules[p]=c[p])}return l.printDirection=typeof d.printDirection<"u"?d.printDirection:C.printDirection,l.showHardBlanks=d.showHardBlanks||!1,l.width=d.width||-1,l.whitespaceBreak=d.whitespaceBreak||!1,l}let ou=function(C,d,l){ou.text(C,d,l)};return ou.text=function(C,d,l){let c="";C=C+"",typeof arguments[1]=="function"&&(l=d,d={},d.font=r.font),typeof d=="string"?(c=d,d={}):(d=d||{},c=d.font||r.font),ou.loadFont(c,function(p,B){if(p)return l(p);l(null,Ku(c,Uu(B,d),C))})},ou.textSync=function(C,d){let l="";C=C+"",typeof d=="string"?(l=d,d={}):(d=d||{},l=d.font||r.font);var c=Uu(ou.loadFontSync(l),d);return Ku(l,c,C)},ou.metadata=function(C,d){C=C+"",ou.loadFont(C,function(l,c){if(l){d(l);return}d(null,c,n[C].comment)})},ou.defaults=function(C){if(typeof C=="object"&&C!==null)for(var d in C)C.hasOwnProperty(d)&&(r[d]=C[d]);return JSON.parse(JSON.stringify(r))},ou.parseFont=function(C,d){d=d.replace(/\r\n/g,`
`).replace(/\r/g,`
`),n[C]={};var l=d.split(`
`),c=l.splice(0,1)[0].split(" "),p=n[C],B={};if(B.hardBlank=c[0].substr(5,1),B.height=parseInt(c[1],10),B.baseline=parseInt(c[2],10),B.maxLength=parseInt(c[3],10),B.oldLayout=parseInt(c[4],10),B.numCommentLines=parseInt(c[5],10),B.printDirection=c.length>=6?parseInt(c[6],10):0,B.fullLayout=c.length>=7?parseInt(c[7],10):null,B.codeTagCount=c.length>=8?parseInt(c[8],10):null,B.fittingRules=i(B.oldLayout,B.fullLayout),p.options=B,B.hardBlank.length!==1||isNaN(B.height)||isNaN(B.baseline)||isNaN(B.maxLength)||isNaN(B.oldLayout)||isNaN(B.numCommentLines))throw new Error("FIGlet header contains invalid values.");let O=[],x;for(x=32;x<=126;x++)O.push(x);if(O=O.concat(196,214,220,228,246,252,223),l.length<B.numCommentLines+B.height*O.length)throw new Error("FIGlet file is missing data.");let v,w,tu=!1;for(p.comment=l.splice(0,B.numCommentLines).join(`
`),p.numChars=0;l.length>0&&p.numChars<O.length;){for(v=O[p.numChars],p[v]=l.splice(0,B.height),x=0;x<B.height;x++)typeof p[v][x]>"u"?p[v][x]="":(w=new RegExp("\\"+p[v][x].substr(p[v][x].length-1,1)+"+$"),p[v][x]=p[v][x].replace(w,""));p.numChars++}for(;l.length>0;){if(v=l.splice(0,1)[0].split(" ")[0],/^0[xX][0-9a-fA-F]+$/.test(v))v=parseInt(v,16);else if(/^0[0-7]+$/.test(v))v=parseInt(v,8);else if(/^[0-9]+$/.test(v))v=parseInt(v,10);else if(/^-0[xX][0-9a-fA-F]+$/.test(v))v=parseInt(v,16);else{if(v==="")break;console.log("Invalid data:"+v),tu=!0;break}for(p[v]=l.splice(0,B.height),x=0;x<B.height;x++)typeof p[v][x]>"u"?p[v][x]="":(w=new RegExp("\\"+p[v][x].substr(p[v][x].length-1,1)+"+$"),p[v][x]=p[v][x].replace(w,""));p.numChars++}if(tu===!0)throw new Error("Error parsing data.");return B},ou.loadFont=function(C,d){if(n[C]){d(null,n[C].options);return}if(typeof fetch!="function")throw console.error("figlet.js requires the fetch API or a fetch polyfill such as https://cdnjs.com/libraries/fetch"),new Error("fetch is required for figlet.js to work.");fetch(r.fontPath+"/"+C+".flf").then(function(l){if(l.ok)return l.text();throw console.log("Unexpected response",l),new Error("Network response was not ok.")}).then(function(l){d(null,ou.parseFont(C,l))}).catch(d)},ou.loadFontSync=function(C){if(n[C])return n[C].options;throw new Error("synchronous font loading is not implemented for the browser")},ou.preloadFonts=function(C,d){let l=[];C.reduce(function(c,p){return c.then(function(){return fetch(r.fontPath+"/"+p+".flf").then(B=>B.text()).then(function(B){l.push(B)})})},Promise.resolve()).then(function(c){for(var p in C)C.hasOwnProperty(p)&&ou.parseFont(C[p],l[p]);d&&d()})},ou.figFonts=n,ou})();typeof Pt<"u"&&typeof Pt.exports<"u"&&(Pt.exports=Ql)});var vs=Y((ef,Rs)=>{var Hu=Is(),Wt=require("fs"),rn=require("path"),$t=rn.join(__dirname,"/../fonts/");Hu.loadFont=function(D,u){if(Hu.figFonts[D]){u(null,Hu.figFonts[D].options);return}Wt.readFile(rn.join($t,D+".flf"),{encoding:"utf-8"},function(t,e){if(t)return u(t);e=e+"";try{u(null,Hu.parseFont(D,e))}catch(n){u(n)}})};Hu.loadFontSync=function(D){if(Hu.figFonts[D])return Hu.figFonts[D].options;var u=Wt.readFileSync(rn.join($t,D+".flf"),{encoding:"utf-8"});return u=u+"",Hu.parseFont(D,u)};Hu.fonts=function(D){var u=[];Wt.readdir($t,function(t,e){if(t)return D(t);e.forEach(function(n){/\.flf$/.test(n)&&u.push(n.replace(/\.flf$/,""))}),D(null,u)})};Hu.fontsSync=function(){var D=[];return Wt.readdirSync($t).forEach(function(u){/\.flf$/.test(u)&&D.push(u.replace(/\.flf$/,""))}),D};Rs.exports=Hu});var Ht=au(require("path")),ln=au(require("fs")),we=class{constructor(u=[]){this.sourceDirs=u}findSourceDir(u,t){let e=this.sourceDirs.find(n=>ln.default.existsSync(Ht.default.resolve(u,`./${n}`)));return e?`${u}${t}${e}`:""}findSourcePathInside(u,t){return this.findSourceDir(u,t)}findSourcePathUp(u,t){let e=u.split(t).slice(0,-1).join(t);if(!e)return"";let n=this.findSourceDir(e,t);return n||this.findSourcePathUp(e,t)}findSourcePathAnywhere(u,t){return this.findSourcePathInside(u,t)||this.findSourcePathUp(u,t)}findSourcePath(){let u=process.cwd();return this.findSourcePathAnywhere(u,Ht.default.sep)}};var ie=au(require("fs"));var zn=au(De()),Kn=(D,u)=>{let t=(0,zn.pascalCase)(D);return{filename:"index.ts",content:`
import ${t} from './${t}.vue';

export default ${t};
    `.trim()}};var Me=au(De()),Yn=(D,u)=>{let t=(0,Me.pascalCase)(D),e=`use${t}`;return{filename:`${t}.vue`,content:`
<script lang="ts" setup>

import { IProps, IEmits } from './${(0,Me.paramCase)(D)}.types';
import ${e} from './${e}';

const props = defineProps<IProps>();
const emit = defineEmits<IEmits>();

const {
} = ${e}(props, emit);

</script>

<template>
  <div class="${(0,Me.paramCase)(D)}--${u}">
    ${t}.vue
  </div>
</template>

<style scoped lang="scss"></style>
    `.trim()}};var Xn=au(De()),Zn=D=>({filename:`${(0,Xn.paramCase)(D)}.types.ts`,content:`
export interface IProps {}

export interface IEmits {}
  `.trim()});var ft=au(De()),Jn=(D,u)=>{let e=`use${(0,ft.pascalCase)(D)}`;return{filename:`${e}.ts`,content:`
import { IProps, IEmits } from './${(0,ft.paramCase)(D)}.types';

export default function ${e}(
  props: IProps,
  emit: IEmits
) {
  return {};
}
    `.trim()}};var Qn=[Zn,Yn,Kn,Jn];var pt=au(De());var ke=au(require("node:process"),1);function Zt({onlyFirst:D=!1}={}){let u=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");return new RegExp(u,D?void 0:"g")}var ko=Zt();function je(D){if(typeof D!="string")throw new TypeError(`Expected a \`string\`, got \`${typeof D}\``);return D.replace(ko,"")}var Dr=au(Qt(),1),nr=au(tr(),1);function du(D,u={}){if(typeof D!="string"||D.length===0||(u={ambiguousIsNarrow:!0,...u},D=je(D),D.length===0))return 0;D=D.replace((0,nr.default)(),"  ");let t=u.ambiguousIsNarrow?1:2,e=0;for(let n of D){let r=n.codePointAt(0);if(r<=31||r>=127&&r<=159||r>=768&&r<=879)continue;switch(Dr.default.eastAsianWidth(n)){case"F":case"W":e+=2;break;case"A":e+=t;break;default:e+=1}}return e}var rr=(D=0)=>u=>`\x1B[${u+D}m`,ir=(D=0)=>u=>`\x1B[${38+D};5;${u}m`,sr=(D=0)=>(u,t,e)=>`\x1B[${38+D};2;${u};${t};${e}m`,iu={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],overline:[53,55],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],blackBright:[90,39],gray:[90,39],grey:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgGray:[100,49],bgGrey:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}},S0=Object.keys(iu.modifier),Ho=Object.keys(iu.color),Uo=Object.keys(iu.bgColor),w0=[...Ho,...Uo];function Go(){let D=new Map;for(let[u,t]of Object.entries(iu)){for(let[e,n]of Object.entries(t))iu[e]={open:`\x1B[${n[0]}m`,close:`\x1B[${n[1]}m`},t[e]=iu[e],D.set(n[0],n[1]);Object.defineProperty(iu,u,{value:t,enumerable:!1})}return Object.defineProperty(iu,"codes",{value:D,enumerable:!1}),iu.color.close="\x1B[39m",iu.bgColor.close="\x1B[49m",iu.color.ansi=rr(),iu.color.ansi256=ir(),iu.color.ansi16m=sr(),iu.bgColor.ansi=rr(10),iu.bgColor.ansi256=ir(10),iu.bgColor.ansi16m=sr(10),Object.defineProperties(iu,{rgbToAnsi256:{value(u,t,e){return u===t&&t===e?u<8?16:u>248?231:Math.round((u-8)/247*24)+232:16+36*Math.round(u/255*5)+6*Math.round(t/255*5)+Math.round(e/255*5)},enumerable:!1},hexToRgb:{value(u){let t=/[a-f\d]{6}|[a-f\d]{3}/i.exec(u.toString(16));if(!t)return[0,0,0];let[e]=t;e.length===3&&(e=[...e].map(r=>r+r).join(""));let n=Number.parseInt(e,16);return[n>>16&255,n>>8&255,n&255]},enumerable:!1},hexToAnsi256:{value:u=>iu.rgbToAnsi256(...iu.hexToRgb(u)),enumerable:!1},ansi256ToAnsi:{value(u){if(u<8)return 30+u;if(u<16)return 90+(u-8);let t,e,n;if(u>=232)t=((u-232)*10+8)/255,e=t,n=t;else{u-=16;let s=u%36;t=Math.floor(u/36)/5,e=Math.floor(s/6)/5,n=s%6/5}let r=Math.max(t,e,n)*2;if(r===0)return 30;let i=30+(Math.round(n)<<2|Math.round(e)<<1|Math.round(t));return r===2&&(i+=60),i},enumerable:!1},rgbToAnsi:{value:(u,t,e)=>iu.ansi256ToAnsi(iu.rgbToAnsi256(u,t,e)),enumerable:!1},hexToAnsi:{value:u=>iu.ansi256ToAnsi(iu.hexToAnsi256(u)),enumerable:!1}}),iu}var qo=Go(),Pu=qo;var ht=au(require("node:process"),1),ar=au(require("node:os"),1),uD=au(require("node:tty"),1);function Iu(D,u=globalThis.Deno?globalThis.Deno.args:ht.default.argv){let t=D.startsWith("-")?"":D.length===1?"-":"--",e=u.indexOf(t+D),n=u.indexOf("--");return e!==-1&&(n===-1||e<n)}var{env:lu}=ht.default,_t;Iu("no-color")||Iu("no-colors")||Iu("color=false")||Iu("color=never")?_t=0:(Iu("color")||Iu("colors")||Iu("color=true")||Iu("color=always"))&&(_t=1);function Vo(){if("FORCE_COLOR"in lu)return lu.FORCE_COLOR==="true"?1:lu.FORCE_COLOR==="false"?0:lu.FORCE_COLOR.length===0?1:Math.min(Number.parseInt(lu.FORCE_COLOR,10),3)}function zo(D){return D===0?!1:{level:D,hasBasic:!0,has256:D>=2,has16m:D>=3}}function Ko(D,{streamIsTTY:u,sniffFlags:t=!0}={}){let e=Vo();e!==void 0&&(_t=e);let n=t?_t:e;if(n===0)return 0;if(t){if(Iu("color=16m")||Iu("color=full")||Iu("color=truecolor"))return 3;if(Iu("color=256"))return 2}if("TF_BUILD"in lu&&"AGENT_NAME"in lu)return 1;if(D&&!u&&n===void 0)return 0;let r=n||0;if(lu.TERM==="dumb")return r;if(ht.default.platform==="win32"){let i=ar.default.release().split(".");return Number(i[0])>=10&&Number(i[2])>=10586?Number(i[2])>=14931?3:2:1}if("CI"in lu)return"GITHUB_ACTIONS"in lu||"GITEA_ACTIONS"in lu?3:["TRAVIS","CIRCLECI","APPVEYOR","GITLAB_CI","BUILDKITE","DRONE"].some(i=>i in lu)||lu.CI_NAME==="codeship"?1:r;if("TEAMCITY_VERSION"in lu)return/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(lu.TEAMCITY_VERSION)?1:0;if(lu.COLORTERM==="truecolor"||lu.TERM==="xterm-kitty")return 3;if("TERM_PROGRAM"in lu){let i=Number.parseInt((lu.TERM_PROGRAM_VERSION||"").split(".")[0],10);switch(lu.TERM_PROGRAM){case"iTerm.app":return i>=3?3:2;case"Apple_Terminal":return 2}}return/-256(color)?$/i.test(lu.TERM)?2:/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(lu.TERM)||"COLORTERM"in lu?1:r}function or(D,u={}){let t=Ko(D,{streamIsTTY:D&&D.isTTY,...u});return zo(t)}var Yo={stdout:or({isTTY:uD.default.isatty(1)}),stderr:or({isTTY:uD.default.isatty(2)})},lr=Yo;function cr(D,u,t){let e=D.indexOf(u);if(e===-1)return D;let n=u.length,r=0,i="";do i+=D.slice(r,e)+u+t,r=e+n,e=D.indexOf(u,r);while(e!==-1);return i+=D.slice(r),i}function fr(D,u,t,e){let n=0,r="";do{let i=D[e-1]==="\r";r+=D.slice(n,i?e-1:e)+u+(i?`\r
`:`
`)+t,n=e+1,e=D.indexOf(`
`,n)}while(e!==-1);return r+=D.slice(n),r}var{stdout:_r,stderr:hr}=lr,eD=Symbol("GENERATOR"),Ae=Symbol("STYLER"),Pe=Symbol("IS_EMPTY"),Fr=["ansi","ansi","ansi256","ansi16m"],Te=Object.create(null),Xo=(D,u={})=>{if(u.level&&!(Number.isInteger(u.level)&&u.level>=0&&u.level<=3))throw new Error("The `level` option should be an integer from 0 to 3");let t=_r?_r.level:0;D.level=u.level===void 0?t:u.level};var Zo=D=>{let u=(...t)=>t.join(" ");return Xo(u,D),Object.setPrototypeOf(u,We.prototype),u};function We(D){return Zo(D)}Object.setPrototypeOf(We.prototype,Function.prototype);for(let[D,u]of Object.entries(Pu))Te[D]={get(){let t=Ft(this,DD(u.open,u.close,this[Ae]),this[Pe]);return Object.defineProperty(this,D,{value:t}),t}};Te.visible={get(){let D=Ft(this,this[Ae],!0);return Object.defineProperty(this,"visible",{value:D}),D}};var tD=(D,u,t,...e)=>D==="rgb"?u==="ansi16m"?Pu[t].ansi16m(...e):u==="ansi256"?Pu[t].ansi256(Pu.rgbToAnsi256(...e)):Pu[t].ansi(Pu.rgbToAnsi(...e)):D==="hex"?tD("rgb",u,t,...Pu.hexToRgb(...e)):Pu[t][D](...e),Jo=["rgb","hex","ansi256"];for(let D of Jo){Te[D]={get(){let{level:t}=this;return function(...e){let n=DD(tD(D,Fr[t],"color",...e),Pu.color.close,this[Ae]);return Ft(this,n,this[Pe])}}};let u="bg"+D[0].toUpperCase()+D.slice(1);Te[u]={get(){let{level:t}=this;return function(...e){let n=DD(tD(D,Fr[t],"bgColor",...e),Pu.bgColor.close,this[Ae]);return Ft(this,n,this[Pe])}}}}var Qo=Object.defineProperties(()=>{},{...Te,level:{enumerable:!0,get(){return this[eD].level},set(D){this[eD].level=D}}}),DD=(D,u,t)=>{let e,n;return t===void 0?(e=D,n=u):(e=t.openAll+D,n=u+t.closeAll),{open:D,close:u,openAll:e,closeAll:n,parent:t}},Ft=(D,u,t)=>{let e=(...n)=>ua(e,n.length===1?""+n[0]:n.join(" "));return Object.setPrototypeOf(e,Qo),e[eD]=D,e[Ae]=u,e[Pe]=t,e},ua=(D,u)=>{if(D.level<=0||!u)return D[Pe]?"":u;let t=D[Ae];if(t===void 0)return u;let{openAll:e,closeAll:n}=t;if(u.includes("\x1B"))for(;t!==void 0;)u=cr(u,t.close,t.open),t=t.parent;let r=u.indexOf(`
`);return r!==-1&&(u=fr(u,n,e,r)),e+u+n};Object.defineProperties(We.prototype,Te);var ea=We(),k0=We({level:hr?hr.level:0});var Ru=ea;function nD({onlyFirst:D=!1}={}){let u=["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");return new RegExp(u,D?void 0:"g")}var ta=nD();function rD(D){if(typeof D!="string")throw new TypeError(`Expected a \`string\`, got \`${typeof D}\``);return D.replace(ta,"")}var dr=au(Qt(),1),gr=au(Er(),1);function iD(D,u={}){if(typeof D!="string"||D.length===0||(u={ambiguousIsNarrow:!0,...u},D=rD(D),D.length===0))return 0;D=D.replace((0,gr.default)(),"  ");let t=u.ambiguousIsNarrow?1:2,e=0;for(let n of D){let r=n.codePointAt(0);if(r<=31||r>=127&&r<=159||r>=768&&r<=879)continue;switch(dr.default.eastAsianWidth(n)){case"F":case"W":e+=2;break;case"A":e+=t;break;default:e+=1}}return e}function Ct(D){let u=0;for(let t of D.split(`
`))u=Math.max(u,iD(t));return u}var zr=au(oD(),1);var na=/[\p{Lu}]/u,ra=/[\p{Ll}]/u,Ar=/^[\p{Lu}](?![\p{Lu}])/gu,br=/([\p{Alpha}\p{N}_]|$)/u,aD=/[_.\- ]+/,ia=new RegExp("^"+aD.source),Tr=new RegExp(aD.source+br.source,"gu"),Br=new RegExp("\\d+"+br.source,"gu"),sa=(D,u,t,e)=>{let n=!1,r=!1,i=!1,s=!1;for(let f=0;f<D.length;f++){let a=D[f];s=f>2?D[f-3]==="-":!0,n&&na.test(a)?(D=D.slice(0,f)+"-"+D.slice(f),n=!1,i=r,r=!0,f++):r&&i&&ra.test(a)&&(!s||e)?(D=D.slice(0,f-1)+"-"+D.slice(f-1),i=r,r=!1,n=!0):(n=u(a)===a&&t(a)!==a,i=r,r=t(a)===a&&u(a)!==a)}return D},oa=(D,u)=>(Ar.lastIndex=0,D.replace(Ar,t=>u(t))),aa=(D,u)=>(Tr.lastIndex=0,Br.lastIndex=0,D.replace(Tr,(t,e)=>u(e)).replace(Br,t=>u(t)));function lD(D,u){if(!(typeof D=="string"||Array.isArray(D)))throw new TypeError("Expected the input to be `string | string[]`");if(u={pascalCase:!1,preserveConsecutiveUppercase:!1,...u},Array.isArray(D)?D=D.map(r=>r.trim()).filter(r=>r.length).join("-"):D=D.trim(),D.length===0)return"";let t=u.locale===!1?r=>r.toLowerCase():r=>r.toLocaleLowerCase(u.locale),e=u.locale===!1?r=>r.toUpperCase():r=>r.toLocaleUpperCase(u.locale);return D.length===1?aD.test(D)?"":u.pascalCase?e(D):t(D):(D!==t(D)&&(D=sa(D,t,e,u.preserveConsecutiveUppercase)),D=D.replace(ia,""),D=u.preserveConsecutiveUppercase?oa(D,t):t(D),u.pascalCase&&(D=e(D.charAt(0))+D.slice(1)),aa(D,e))}var CD=au(Nr(),1);var Mr=(D=0)=>u=>`\x1B[${u+D}m`,jr=(D=0)=>u=>`\x1B[${38+D};5;${u}m`,Pr=(D=0)=>(u,t,e)=>`\x1B[${38+D};2;${u};${t};${e}m`,su={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],overline:[53,55],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],blackBright:[90,39],gray:[90,39],grey:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgGray:[100,49],bgGrey:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}},ic=Object.keys(su.modifier),Ea=Object.keys(su.color),da=Object.keys(su.bgColor),sc=[...Ea,...da];function ga(){let D=new Map;for(let[u,t]of Object.entries(su)){for(let[e,n]of Object.entries(t))su[e]={open:`\x1B[${n[0]}m`,close:`\x1B[${n[1]}m`},t[e]=su[e],D.set(n[0],n[1]);Object.defineProperty(su,u,{value:t,enumerable:!1})}return Object.defineProperty(su,"codes",{value:D,enumerable:!1}),su.color.close="\x1B[39m",su.bgColor.close="\x1B[49m",su.color.ansi=Mr(),su.color.ansi256=jr(),su.color.ansi16m=Pr(),su.bgColor.ansi=Mr(10),su.bgColor.ansi256=jr(10),su.bgColor.ansi16m=Pr(10),Object.defineProperties(su,{rgbToAnsi256:{value:(u,t,e)=>u===t&&t===e?u<8?16:u>248?231:Math.round((u-8)/247*24)+232:16+36*Math.round(u/255*5)+6*Math.round(t/255*5)+Math.round(e/255*5),enumerable:!1},hexToRgb:{value:u=>{let t=/[a-f\d]{6}|[a-f\d]{3}/i.exec(u.toString(16));if(!t)return[0,0,0];let[e]=t;e.length===3&&(e=[...e].map(r=>r+r).join(""));let n=Number.parseInt(e,16);return[n>>16&255,n>>8&255,n&255]},enumerable:!1},hexToAnsi256:{value:u=>su.rgbToAnsi256(...su.hexToRgb(u)),enumerable:!1},ansi256ToAnsi:{value:u=>{if(u<8)return 30+u;if(u<16)return 90+(u-8);let t,e,n;if(u>=232)t=((u-232)*10+8)/255,e=t,n=t;else{u-=16;let s=u%36;t=Math.floor(u/36)/5,e=Math.floor(s/6)/5,n=s%6/5}let r=Math.max(t,e,n)*2;if(r===0)return 30;let i=30+(Math.round(n)<<2|Math.round(e)<<1|Math.round(t));return r===2&&(i+=60),i},enumerable:!1},rgbToAnsi:{value:(u,t,e)=>su.ansi256ToAnsi(su.rgbToAnsi256(u,t,e)),enumerable:!1},hexToAnsi:{value:u=>su.ansi256ToAnsi(su.hexToAnsi256(u)),enumerable:!1}}),su}var pa=ga(),Wr=pa;var dt=new Set(["\x1B","\x9B"]),ma=39,hD="\x07",Hr="[",Aa="]",Ur="m",FD=`${Aa}8;;`,$r=D=>`${dt.values().next().value}${Hr}${D}${Ur}`,kr=D=>`${dt.values().next().value}${FD}${D}${hD}`,Ta=D=>D.split(" ").map(u=>du(u)),_D=(D,u,t)=>{let e=[...u],n=!1,r=!1,i=du(je(D[D.length-1]));for(let[s,f]of e.entries()){let a=du(f);if(i+a<=t?D[D.length-1]+=f:(D.push(f),i=0),dt.has(f)&&(n=!0,r=e.slice(s+1).join("").startsWith(FD)),n){r?f===hD&&(n=!1,r=!1):f===Ur&&(n=!1);continue}i+=a,i===t&&s<e.length-1&&(D.push(""),i=0)}!i&&D[D.length-1].length>0&&D.length>1&&(D[D.length-2]+=D.pop())},Ba=D=>{let u=D.split(" "),t=u.length;for(;t>0&&!(du(u[t-1])>0);)t--;return t===u.length?D:u.slice(0,t).join(" ")+u.slice(t).join("")},ba=(D,u,t={})=>{if(t.trim!==!1&&D.trim()==="")return"";let e="",n,r,i=Ta(D),s=[""];for(let[a,_]of D.split(" ").entries()){t.trim!==!1&&(s[s.length-1]=s[s.length-1].trimStart());let A=du(s[s.length-1]);if(a!==0&&(A>=u&&(t.wordWrap===!1||t.trim===!1)&&(s.push(""),A=0),(A>0||t.trim===!1)&&(s[s.length-1]+=" ",A++)),t.hard&&i[a]>u){let b=u-A,W=1+Math.floor((i[a]-b-1)/u);Math.floor((i[a]-1)/u)<W&&s.push(""),_D(s,_,u);continue}if(A+i[a]>u&&A>0&&i[a]>0){if(t.wordWrap===!1&&A<u){_D(s,_,u);continue}s.push("")}if(A+i[a]>u&&t.wordWrap===!1){_D(s,_,u);continue}s[s.length-1]+=_}t.trim!==!1&&(s=s.map(a=>Ba(a)));let f=[...s.join(`
`)];for(let[a,_]of f.entries()){if(e+=_,dt.has(_)){let{groups:b}=new RegExp(`(?:\\${Hr}(?<code>\\d+)m|\\${FD}(?<uri>.*)${hD})`).exec(f.slice(a).join(""))||{groups:{}};if(b.code!==void 0){let W=Number.parseFloat(b.code);n=W===ma?void 0:W}else b.uri!==void 0&&(r=b.uri.length===0?void 0:b.uri)}let A=Wr.codes.get(Number(n));f[a+1]===`
`?(r&&(e+=kr("")),n&&A&&(e+=$r(A))):_===`
`&&(n&&A&&(e+=$r(n)),r&&(e+=kr(r)))}return e};function gt(D,u,t){return String(D).normalize().replace(/\r\n/g,`
`).split(`
`).map(e=>ba(e,u,t)).join(`
`)}var wa=au(oD(),1),Ju=`
`,pu=" ",He="none",Kr=()=>{let{env:D,stdout:u,stderr:t}=ke.default;return u?.columns?u.columns:t?.columns?t.columns:D.COLUMNS?Number.parseInt(D.COLUMNS,10):80},Gr=D=>typeof D=="number"?{top:D,right:D*3,bottom:D,left:D*3}:{top:0,right:0,bottom:0,left:0,...D},Ue=D=>D===He?0:2,La=D=>{let u=["topLeft","topRight","bottomRight","bottomLeft","left","right","top","bottom"],t;if(D===He){D={};for(let e of u)D[e]=""}if(typeof D=="string"){if(t=zr.default[D],!t)throw new TypeError(`Invalid border style: ${D}`)}else{typeof D?.vertical=="string"&&(D.left=D.vertical,D.right=D.vertical),typeof D?.horizontal=="string"&&(D.top=D.horizontal,D.bottom=D.horizontal);for(let e of u)if(D[e]===null||typeof D[e]!="string")throw new TypeError(`Invalid border style: ${e}`);t=D}return t},xa=(D,u,t)=>{let e="",n=du(D);switch(t){case"left":{e=D+u.slice(n);break}case"right":{e=u.slice(n)+D;break}default:{u=u.slice(n),u.length%2===1?(u=u.slice(Math.floor(u.length/2)),e=u.slice(1)+D+u):(u=u.slice(u.length/2),e=u+D+u);break}}return e},ya=(D,{padding:u,width:t,textAlignment:e,height:n})=>{D=(0,CD.default)(D,{align:e});let r=D.split(Ju),i=Ct(D),s=t-u.left-u.right;if(i>s){let _=[];for(let A of r){let b=gt(A,s,{hard:!0}),L=(0,CD.default)(b,{align:e}).split(`
`),m=Math.max(...L.map(F=>du(F)));for(let F of L){let k;switch(e){case"center":{k=pu.repeat((s-m)/2)+F;break}case"right":{k=pu.repeat(s-m)+F;break}default:{k=F;break}}_.push(k)}}r=_}e==="center"&&i<s?r=r.map(_=>pu.repeat((s-i)/2)+_):e==="right"&&i<s&&(r=r.map(_=>pu.repeat(s-i)+_));let f=pu.repeat(u.left),a=pu.repeat(u.right);return r=r.map(_=>f+_+a),r=r.map(_=>{if(t-du(_)>0)switch(e){case"center":return _+pu.repeat(t-du(_));case"right":return _+pu.repeat(t-du(_));default:return _+pu.repeat(t-du(_))}return _}),u.top>0&&(r=[...Array.from({length:u.top}).fill(pu.repeat(t)),...r]),u.bottom>0&&(r=[...r,...Array.from({length:u.bottom}).fill(pu.repeat(t))]),n&&r.length>n?r=r.slice(0,n):n&&r.length<n&&(r=[...r,...Array.from({length:n-r.length}).fill(pu.repeat(t))]),r.join(Ju)},Ia=(D,u,t)=>{let e=_=>{let A=t.borderColor?Oa(t.borderColor)(_):_;return t.dimBorder?Ru.dim(A):A},n=_=>t.backgroundColor?Sa(t.backgroundColor)(_):_,r=La(t.borderStyle),i=Kr(),s=pu.repeat(t.margin.left);if(t.float==="center"){let _=Math.max((i-u-Ue(t.borderStyle))/2,0);s=pu.repeat(_)}else if(t.float==="right"){let _=Math.max(i-u-t.margin.right-Ue(t.borderStyle),0);s=pu.repeat(_)}let f="";t.margin.top&&(f+=Ju.repeat(t.margin.top)),(t.borderStyle!==He||t.title)&&(f+=e(s+r.topLeft+(t.title?xa(t.title,r.top.repeat(u),t.titleAlignment):r.top.repeat(u))+r.topRight)+Ju);let a=D.split(Ju);return f+=a.map(_=>s+e(r.left)+n(_)+e(r.right)).join(Ju),t.borderStyle!==He&&(f+=Ju+e(s+r.bottomLeft+r.bottom.repeat(u)+r.bottomRight)),t.margin.bottom&&(f+=Ju.repeat(t.margin.bottom)),f},Ra=D=>{if(D.fullscreen&&ke.default?.stdout){let u=[ke.default.stdout.columns,ke.default.stdout.rows];typeof D.fullscreen=="function"&&(u=D.fullscreen(...u)),D.width||(D.width=u[0]),D.height||(D.height=u[1])}return D.width&&(D.width=Math.max(1,D.width-Ue(D.borderStyle))),D.height&&(D.height=Math.max(1,D.height-Ue(D.borderStyle))),D},qr=(D,u)=>u===He?D:` ${D} `,va=(D,u)=>{u=Ra(u);let t=u.width!==void 0,e=Kr(),n=Ue(u.borderStyle),r=e-u.margin.left-u.margin.right-n,i=Ct(gt(D,e-n,{hard:!0,trim:!1}))+u.padding.left+u.padding.right;if(u.title&&t?(u.title=u.title.slice(0,Math.max(0,u.width-2)),u.title&&(u.title=qr(u.title,u.borderStyle))):u.title&&(u.title=u.title.slice(0,Math.max(0,r-2)),u.title&&(u.title=qr(u.title,u.borderStyle),du(u.title)>i&&(u.width=du(u.title)))),u.width=u.width?u.width:i,!t){if(u.margin.left&&u.margin.right&&u.width>r){let f=(e-u.width-n)/(u.margin.left+u.margin.right);u.margin.left=Math.max(0,Math.floor(u.margin.left*f)),u.margin.right=Math.max(0,Math.floor(u.margin.right*f))}u.width=Math.min(u.width,e-n-u.margin.left-u.margin.right)}return u.width-(u.padding.left+u.padding.right)<=0&&(u.padding.left=0,u.padding.right=0),u.height&&u.height-(u.padding.top+u.padding.bottom)<=0&&(u.padding.top=0,u.padding.bottom=0),u},ED=D=>D.match(/^#(?:[0-f]{3}){1,2}$/i),Vr=D=>typeof D=="string"&&(Ru[D]??ED(D)),Oa=D=>ED(D)?Ru.hex(D):Ru[D],Sa=D=>ED(D)?Ru.bgHex(D):Ru[lD(["bg",D])];function dD(D,u){if(u={padding:0,borderStyle:"single",dimBorder:!1,textAlignment:"left",float:"left",titleAlignment:"left",...u},u.align&&(u.textAlignment=u.align),u.borderColor&&!Vr(u.borderColor))throw new Error(`${u.borderColor} is not a valid borderColor`);if(u.backgroundColor&&!Vr(u.backgroundColor))throw new Error(`${u.backgroundColor} is not a valid backgroundColor`);return u.padding=Gr(u.padding),u.margin=Gr(u.margin),u=va(D,u),D=ya(D,u),Ia(D,u.width,u)}var Xr=D=>({value:D,log:()=>console.log(D)}),re=D=>{let u=D.status||"blue",t=Ru[u](D.title);return D.text&&(t+=` ${D.text}`),D.bold&&(t=Ru.bold(t)),t=t.trim(),Xr(t)},Zr=(D,u)=>{let t=dD(u,{title:D,titleAlignment:"center",borderColor:"blue"});return Xr(t)};var ui=au(De());var Jr={page:(D,u)=>((0,ui.pascalCase)(D).slice(-4)!=="Page"&&(D+="Page"),{sliceName:D,sliceType:u})},ei=(D,u)=>Jr[u]&&Jr[u](D,u)||{sliceName:D,sliceType:u};var Na=["src","lib"],Ma={widget:"widgets",page:"pages",feature:"features",entity:"entities",module:"modules",component:"components"},ja=D=>Ma[D]||D,Pa=(D,u)=>{let t=ja(u),e=`${D}/${t}`;return ie.default.existsSync(e)||ie.default.mkdirSync(e),e},Wa=(D,u,t)=>{let e=`${D}/`+(0,pt.paramCase)(t);return ie.default.existsSync(e)||ie.default.mkdirSync(e),e},$a=(D,u)=>{let t=`${D}/${u.filename}`;ie.default.existsSync(t)?re({title:"EXIST",text:u.filename,status:"blackBright"}).log():ie.default.writeFile(t,u.content,{encoding:"utf-8"},e=>{e?re({title:"FAILED CREATE",text:u.filename,status:"red"}).log():re({title:"CREATED",text:u.filename,status:"green"}).log()})},ka=(D,u,t)=>{re({title:`${(0,pt.pascalCase)(D)} generation`,bold:!0}).log(),Qn.forEach(e=>$a(t,e(u,D)))},ti=(D,u)=>{let{sliceName:t,sliceType:e}=ei(D,u),n=new we(Na).findSourcePath();if(!n)throw new Error("Source path not found");let r=Pa(n,e),i=Wa(r,e,t);ka(e,t,i)};var Ns=au(bs()),Ms=au(xs());var ys=`flf2a$ 6 5 16 15 13 0 24463 229
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
         `;var sn=au(vs());var Os=()=>{sn.default.parseFont("Standard",ys),(0,sn.default)("FSD CLI",(D,u)=>D?console.error(D):console.log(Ru.blue(u)))},Ss=D=>{let u=[];for(let t in D){let e=D[t];u.push(re({title:e.description,text:`"${e.example}"`,status:"blackBright"}).value)}Zr("Command examples",u.join(`
`)).log()};var ws=(D,u,t,e)=>{let n=D[e];return!!(typeof t[e]=="string"&&(u.includes(`--${e}`)||n.alias&&u.includes(`-${n.alias}`)))};var kt={widget:{alias:"w",description:"Generate widget",example:"fsd g -w cart"},page:{alias:"p",description:"Generate page",example:"fsd g -p registration"},feature:{alias:"f",description:"Generate feature",example:"fsd g -f cartItem"},entity:{alias:"e",description:"Generate entity",example:"fsd g -e cart-item-details"},module:{alias:"m",description:"Generate module",example:"fsd g -m userProfile"},component:{alias:"c",description:"Generate component",example:"fsd g -c table"}},on=(0,Ms.hideBin)(process.argv);on.length||(Os(),Ss(kt));(0,Ns.default)(on).command({command:"generate",describe:"Generate slice",aliases:["g"],builder:kt,handler:D=>{for(let u in kt){let t=u;ws(kt,on,D,t)&&ti(D[u],t)}}}).alias({h:"help",v:"version"}).demandCommand().parse();
