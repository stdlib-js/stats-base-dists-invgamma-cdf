// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,u=e-r.length;return u<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(u):t(u)+r,i&&(r="-"+r)),r}var u=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function o(r){var e,t,o;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,o=parseInt(t,10),!isFinite(o)){if(!n(t))throw new Error("invalid integer. Value: "+t);o=0}return o<0&&("u"===r.specifier||10!==e)&&(o=4294967295+o+1),o<0?(t=(-o).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=o.toString(e),o||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===a.call(r.specifier)?a.call(t):u.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,v=/e-(\d)$/,y=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,g=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=l.call(t,w,"$1e"),t=l.call(t,g,"e"),t=l.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=l.call(t,p,"e+0$1"),t=l.call(t,v,"e-0$1"),r.alternate&&(t=l.call(t,y,"$1."),t=l.call(t,d,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):c.call(t)}function m(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var N=String.fromCharCode,A=isNaN,x=Array.isArray;function k(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function _(r){var e,n,t,u,a,f,c,s,l,p,v,y,d;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if("string"==typeof(t=r[s]))f+=t;else{if(e=void 0!==t.precision,!(t=k(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),n=t.flags,l=0;l<n.length;l++)switch(u=n.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+u)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,A(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,A(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=o(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!A(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=A(a)?String(t.arg):N(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=b(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,v=t.width,y=t.padRight,d=void 0,(d=v-p.length)<0?p:p=y?p+m(d):m(d)+p)),f+=t.arg||"",c+=1}return f}var E=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,n,t,i;for(n=[],i=0,t=E.exec(r);t;)(e=r.slice(i,E.lastIndex-t[0].length)).length&&n.push(e),n.push(U(t)),i=E.lastIndex,t=E.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function S(r){var e,n;if("string"!=typeof r)throw new TypeError(S("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[I(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return _.apply(null,e)}var F=Object.prototype,j=F.toString,T=F.__defineGetter__,V=F.__defineSetter__,O=F.__lookupGetter__,$=F.__lookupSetter__,G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,u,a;if("object"!=typeof r||null===r||"[object Array]"===j.call(r))throw new TypeError(S("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===j.call(n))throw new TypeError(S("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(O.call(r,e)||$.call(r,e)?(t=r.__proto__,r.__proto__=F,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),u="get"in n,a="set"in n,i&&(u||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&T&&T.call(r,e,n.get),a&&V&&V.call(r,e,n.set),r};function H(r,e,n){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function L(r){return r!=r}var W=Number.POSITIVE_INFINITY,C=Number.NEGATIVE_INFINITY;function P(r){return r===W||r===C}function R(r){return Math.abs(r)}var M,Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),X=Object.prototype.toString,Y=Object.prototype.hasOwnProperty,q="function"==typeof Symbol?Symbol:void 0,z="function"==typeof q?q.toStringTag:"",B=Z&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,u;if(null==r)return X.call(r);n=r[z],u=z,e=null!=(i=r)&&Y.call(i,u);try{r[z]=void 0}catch(e){return X.call(r)}return t=X.call(r),e?r[z]=n:delete r[z],t}:function(r){return X.call(r)},D="function"==typeof Uint32Array,J="function"==typeof Uint32Array?Uint32Array:null,K="function"==typeof Uint32Array?Uint32Array:void 0;M=function(){var r,e,n;if("function"!=typeof J)return!1;try{e=new J(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(D&&n instanceof Uint32Array||"[object Uint32Array]"===B(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?K:function(){throw new Error("not implemented")};var Q,rr=M,er="function"==typeof Float64Array,nr="function"==typeof Float64Array?Float64Array:null,tr="function"==typeof Float64Array?Float64Array:void 0;Q=function(){var r,e,n;if("function"!=typeof nr)return!1;try{e=new nr([1,3.14,-3.14,NaN]),n=e,r=(er&&n instanceof Float64Array||"[object Float64Array]"===B(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?tr:function(){throw new Error("not implemented")};var ir,ur=Q,ar="function"==typeof Uint8Array,or="function"==typeof Uint8Array?Uint8Array:null,fr="function"==typeof Uint8Array?Uint8Array:void 0;ir=function(){var r,e,n;if("function"!=typeof or)return!1;try{e=new or(e=[1,3.14,-3.14,256,257]),n=e,r=(ar&&n instanceof Uint8Array||"[object Uint8Array]"===B(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var cr,sr=ir,lr="function"==typeof Uint16Array,pr="function"==typeof Uint16Array?Uint16Array:null,vr="function"==typeof Uint16Array?Uint16Array:void 0;cr=function(){var r,e,n;if("function"!=typeof pr)return!1;try{e=new pr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(lr&&n instanceof Uint16Array||"[object Uint16Array]"===B(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var yr,dr={uint16:cr,uint8:sr};(yr=new dr.uint16(1))[0]=4660;var hr=52===new dr.uint8(yr.buffer)[0],gr=!0===hr?1:0,wr=new ur(1),br=new rr(wr.buffer);function mr(r){return wr[0]=r,br[gr]}var Nr=!0===hr?1:0,Ar=new ur(1),xr=new rr(Ar.buffer);function kr(r,e){return Ar[0]=r,xr[Nr]=e>>>0,Ar[0]}var _r=1023,Er=.6931471803691238,Ur=1.9082149292705877e-10,Ir=0x40000000000000,Sr=.3333333333333333,Fr=1048575,jr=2146435072,Tr=1048576,Vr=1072693248;function Or(r){var e,n,t,i,u,a,o,f,c,s,l,p;return 0===r?C:L(r)||r<0?NaN:(u=0,(n=mr(r))<Tr&&(u-=54,n=mr(r*=Ir)),n>=jr?r+r:(u+=(n>>20)-_r|0,u+=(f=614244+(n&=Fr)&1048576|0)>>20|0,o=(r=kr(r,n|f^Vr))-1,(Fr&2+n)<3?0===o?0===u?0:u*Er+u*Ur:(a=o*o*(.5-Sr*o),0===u?o-a:u*Er-(a-u*Ur-o)):(f=n-398458|0,c=440401-n|0,i=(l=(p=(s=o/(2+o))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),a=t+i,(f|=c)>0?(e=.5*o*o,0===u?o-(e-s*(e+a)):u*Er-(e-(s*(e+a)+u*Ur)-o)):0===u?o-s*(o-a):u*Er-(s*(o-a)-u*Ur-o))))}var $r=Math.floor,Gr=Math.ceil;function Hr(r){return r<0?Gr(r):$r(r)}function Lr(r,e){var n,t,i,u;return i=(u=r*r)*u,t=u*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(u),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(u),(i=1-(n=.5*u))+(1-i-n+(u*t-r*e))}var Wr=-.16666666666666632,Cr=.00833333333332249,Pr=-.0001984126982985795,Rr=27557313707070068e-22,Mr=-2.5050760253406863e-8,Zr=1.58969099521155e-10;function Xr(r,e){var n,t,i;return n=Cr+(i=r*r)*(Pr+i*Rr)+i*(i*i)*(Mr+i*Zr),t=i*r,0===e?r+t*(Wr+i*n):r-(i*(.5*e-t*n)-e-t*Wr)}var Yr,qr,zr=2147483647,Br=2146435072,Dr=1048575,Jr=!0===hr?0:1,Kr=new ur(1),Qr=new rr(Kr.buffer);!0===hr?(Yr=1,qr=0):(Yr=0,qr=1);var re={HIGH:Yr,LOW:qr},ee=new ur(1),ne=new rr(ee.buffer),te=re.HIGH,ie=re.LOW;function ue(r,e){return ne[te]=r,ne[ie]=e,ee[0]}var ae,oe,fe=1023,ce=-1023,se=-1074,le=2147483648;!0===hr?(ae=1,oe=0):(ae=0,oe=1);var pe={HIGH:ae,LOW:oe},ve=new ur(1),ye=new rr(ve.buffer),de=pe.HIGH,he=pe.LOW;function ge(r,e,n,t){return ve[0]=r,e[t]=ye[de],e[t+n]=ye[he],e}function we(r){return ge(r,[0,0],1,0)}H(we,"assign",ge);var be=[0,0];function me(r,e){var n,t;return we.assign(r,be,1,0),n=be[0],n&=zr,t=mr(e),ue(n|=t&=le,be[1])}var Ne=22250738585072014e-324,Ae=4503599627370496;function xe(r,e,n,t){return L(r)||P(r)?(e[t]=r,e[t+n]=0,e):0!==r&&R(r)<Ne?(e[t]=r*Ae,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}H((function(r){return xe(r,[0,0],1,0)}),"assign",xe);var ke=2220446049250313e-31,_e=2148532223,Ee=[0,0],Ue=[0,0];function Ie(r,e){var n,t;return 0===e||0===r||L(r)||P(r)?r:(xe(r,Ee,1,0),r=Ee[0],e+=Ee[1],e+=function(r){var e=mr(r);return(e=(e&Br)>>>20)-_r|0}(r),e<se?me(0,r):e>fe?r<0?C:W:(e<=ce?(e+=52,t=ke):t=1,we.assign(r,Ue,1,0),n=Ue[0],n&=_e,t*ue(n|=e+_r<<20,Ue[1])))}function Se(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var Fe=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],je=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Te=16777216,Ve=5.960464477539063e-8,Oe=Se(20),$e=Se(20),Ge=Se(20),He=Se(20);function Le(r,e,n,t,i,u,a,o,f){var c,s,l,p,v,y,d,h,g;for(p=u,g=t[n],h=n,v=0;h>0;v++)s=Ve*g|0,He[v]=g-Te*s|0,g=t[h-1]+s,h-=1;if(g=Ie(g,i),g-=8*$r(.125*g),g-=d=0|g,l=0,i>0?(d+=v=He[n-1]>>24-i,He[n-1]-=v<<24-i,l=He[n-1]>>23-i):0===i?l=He[n-1]>>23:g>=.5&&(l=2),l>0){for(d+=1,c=0,v=0;v<n;v++)h=He[v],0===c?0!==h&&(c=1,He[v]=16777216-h):He[v]=16777215-h;if(i>0)switch(i){case 1:He[n-1]&=8388607;break;case 2:He[n-1]&=4194303}2===l&&(g=1-g,0!==c&&(g-=Ie(1,i)))}if(0===g){for(h=0,v=n-1;v>=u;v--)h|=He[v];if(0===h){for(y=1;0===He[u-y];y++);for(v=n+1;v<=n+y;v++){for(f[o+v]=Fe[a+v],s=0,h=0;h<=o;h++)s+=r[h]*f[o+(v-h)];t[v]=s}return Le(r,e,n+=y,t,i,u,a,o,f)}}if(0===g)for(n-=1,i-=24;0===He[n];)n-=1,i-=24;else(g=Ie(g,-i))>=Te?(s=Ve*g|0,He[n]=g-Te*s|0,i+=24,He[n+=1]=s):He[n]=0|g;for(s=Ie(1,i),v=n;v>=0;v--)t[v]=s*He[v],s*=Ve;for(v=n;v>=0;v--){for(s=0,y=0;y<=p&&y<=n-v;y++)s+=je[y]*t[v+y];Ge[n-v]=s}for(s=0,v=n;v>=0;v--)s+=Ge[v];for(e[0]=0===l?s:-s,s=Ge[0]-s,v=1;v<=n;v++)s+=Ge[v];return e[1]=0===l?s:-s,7&d}function We(r,e,n,t){var i,u,a,o,f,c,s;for((u=(n-3)/24|0)<0&&(u=0),o=n-24*(u+1),c=u-(a=t-1),s=a+4,f=0;f<=s;f++)Oe[f]=c<0?0:Fe[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=a;c++)i+=r[c]*Oe[a+(f-c)];$e[f]=i}return Le(r,e,4,$e,o,4,u,a,Oe)}var Ce=Math.round,Pe=.6366197723675814,Re=1.5707963267341256,Me=6077100506506192e-26,Ze=6077100506303966e-26,Xe=20222662487959506e-37,Ye=20222662487111665e-37,qe=84784276603689e-45,ze=2047;function Be(r,e,n){var t,i,u,a,o;return u=r-(t=Ce(r*Pe))*Re,a=t*Me,o=e>>20|0,n[0]=u-a,o-(mr(n[0])>>20&ze)>16&&(a=t*Xe-((i=u)-(u=i-(a=t*Ze))-a),n[0]=u-a,o-(mr(n[0])>>20&ze)>49&&(a=t*qe-((i=u)-(u=i-(a=t*Ye))-a),n[0]=u-a)),n[1]=u-n[0]-a,t}var De=0,Je=16777216,Ke=1.5707963267341256,Qe=6077100506506192e-26,rn=2*Qe,en=3*Qe,nn=4*Qe,tn=598523,un=1072243195,an=1073928572,on=1074752122,fn=1074977148,cn=1075183036,sn=1075388923,ln=1075594811,pn=1094263291,vn=[0,0,0],yn=[0,0];function dn(r,e){var n,t,i,u,a,o,f;if((i=mr(r)&zr|0)<=un)return e[0]=r,e[1]=0,0;if(i<=on)return(i&Dr)===tn?Be(r,i,e):i<=an?r>0?(f=r-Ke,e[0]=f-Qe,e[1]=f-e[0]-Qe,1):(f=r+Ke,e[0]=f+Qe,e[1]=f-e[0]+Qe,-1):r>0?(f=r-2*Ke,e[0]=f-rn,e[1]=f-e[0]-rn,2):(f=r+2*Ke,e[0]=f+rn,e[1]=f-e[0]+rn,-2);if(i<=ln)return i<=cn?i===fn?Be(r,i,e):r>0?(f=r-3*Ke,e[0]=f-en,e[1]=f-e[0]-en,3):(f=r+3*Ke,e[0]=f+en,e[1]=f-e[0]+en,-3):i===sn?Be(r,i,e):r>0?(f=r-4*Ke,e[0]=f-nn,e[1]=f-e[0]-nn,4):(f=r+4*Ke,e[0]=f+nn,e[1]=f-e[0]+nn,-4);if(i<pn)return Be(r,i,e);if(i>=Br)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return Kr[0]=r,Qr[Jr]}(r),f=ue(i-((t=(i>>20)-1046)<<20|0),n),a=0;a<2;a++)vn[a]=0|f,f=(f-vn[a])*Je;for(vn[2]=f,u=3;vn[u-1]===De;)u-=1;return o=We(vn,yn,t,u),r<0?(e[0]=-yn[0],e[1]=-yn[1],-o):(e[0]=yn[0],e[1]=yn[1],o)}var hn=[0,0],gn=2147483647,wn=1072243195,bn=1044381696,mn=2146435072;function Nn(r){var e;if(e=mr(r),(e&=gn)<=wn)return e<bn?1:Lr(r,0);if(e>=mn)return NaN;switch(3&dn(r,hn)){case 0:return Lr(hn[0],hn[1]);case 1:return-Xr(hn[0],hn[1]);case 2:return-Lr(hn[0],hn[1]);default:return Xr(hn[0],hn[1])}}var An=1072243195,xn=1045430272,kn=[0,0];function _n(r){var e;if(e=mr(r),(e&=zr)<=An)return e<xn?r:Xr(r,0);if(e>=Br)return NaN;switch(3&dn(r,kn)){case 0:return Xr(kn[0],kn[1]);case 1:return Lr(kn[0],kn[1]);case 2:return-Xr(kn[0],kn[1]);default:return-Lr(kn[0],kn[1])}}var En=3.141592653589793,Un=.07721566490153287,In=.3224670334241136,Sn=1,Fn=-.07721566490153287,jn=.48383612272381005,Tn=-.1475877229945939,Vn=.06462494023913339,On=-.07721566490153287,$n=1,Gn=.4189385332046727,Hn=1.4616321449683622,Ln=4503599627370496,Wn=0x400000000000000,Cn=8470329472543003e-37,Pn=1.4616321449683622,Rn=-.12148629053584961,Mn=-3638676997039505e-33;function Zn(r){var e,n,t,i,u,a,o,f,c,s,l,p,v;if(L(r)||P(r))return r;if(0===r)return W;if(r<0?(e=!0,r=-r):e=!1,r<Cn)return-Or(r);if(e){if(r>=Ln)return W;if(c=function(r){var e,n;return L(r)||P(r)?NaN:0===(e=R(n=r%2))||1===e?me(0,n):e<.25?_n(En*n):e<.75?me(Nn(En*(e=.5-e)),n):e<1.25?(n=me(1,n)-n,_n(En*n)):e<1.75?-me(Nn(En*(e-=1.5)),n):(n-=me(2,n),_n(En*n))}(r),0===c)return W;n=Or(En/R(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(v=-Or(r),r>=Hn-1+.27?(l=1-r,t=0):r>=Hn-1-.27?(l=r-(Pn-1),t=1):(l=r,t=2)):(v=0,r>=Hn+.27?(l=2-r,t=0):r>=Hn-.27?(l=r-Pn,t=1):(l=r-1,t=2)),t){case 0:a=Un+(p=l*l)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(p),u=p*(In+p*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(p)),v+=(o=l*a+u)-.5*l;break;case 1:a=jn+(s=(p=l*l)*l)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(s),u=Tn+s*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(s),i=Vn+s*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(s),v+=Rn+(o=p*a-(Mn-s*(u+l*i)));break;case 2:a=l*(On+l*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(l)),u=$n+l*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(l),v+=-.5*l+a/u}else if(r<8)switch(o=(l=r-(t=Hr(r)))*(Fn+l*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(l)),f=Sn+l*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(l),v=.5*l+o/f,p=1,t){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:v+=Or(p*=l+2)}else r<Wn?(c=Or(r),s=Gn+(p=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(l=p*p),v=(r-.5)*(c-1)+s):v=r*(Or(r)-1);return e&&(v=n-v),v}function Xn(r){return $r(r)===r}function Yn(r){return 0===r&&1/r===C}var qn=2.5066282746310007;function zn(r){return Xn(r/2)}function Bn(r){return zn(r>0?r-1:r+1)}var Dn=Math.sqrt,Jn=!0===hr?0:1,Kn=new ur(1),Qn=new rr(Kn.buffer);function rt(r,e){return Kn[0]=r,Qn[Jn]=e>>>0,Kn[0]}function et(r){return 0|r}var nt=1072693247,tt=1e300,it=1e-300,ut=1048575,at=1048576,ot=1072693248,ft=536870912,ct=524288,st=20,lt=9007199254740992,pt=.9617966939259756,vt=.9617967009544373,yt=-7.028461650952758e-9,dt=[1,1.5],ht=[0,.5849624872207642],gt=[0,1.350039202129749e-8],wt=1.4426950408889634,bt=1.4426950216293335,mt=1.9259629911266175e-8,Nt=.6931471805599453,At=1048576,xt=1071644672,kt=20,_t=.6931471824645996,Et=-1.904654299957768e-9,Ut=1072693247,It=1105199104,St=1139802112,Ft=1083179008,jt=1072693248,Tt=1083231232,Vt=3230714880,Ot=31,$t=1e300,Gt=1e-300,Ht=8008566259537294e-32,Lt=[0,0],Wt=[0,0];function Ct(r,e){var n,t,i,u,a,o,f,c,s,l,p,v,y,d;if(L(r)||L(e))return NaN;if(we.assign(e,Lt,1,0),a=Lt[0],0===Lt[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return Dn(r);if(-.5===e)return 1/Dn(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(P(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:R(r)<1==(e===W)?0:W}(r,e)}if(we.assign(r,Lt,1,0),u=Lt[0],0===Lt[1]){if(0===u)return function(r,e){return e===C?W:e===W?0:e>0?Bn(e)?r:0:Bn(e)?me(W,r):W}(r,e);if(1===r)return 1;if(-1===r&&Bn(e))return-1;if(P(r))return r===C?Ct(-0,-e):e<0?0:W}if(r<0&&!1===Xn(e))return(r-r)/(r-r);if(i=R(r),n=u&zr|0,t=a&zr|0,f=a>>>Ot|0,o=(o=u>>>Ot|0)&&Bn(e)?-1:1,t>It){if(t>St)return function(r,e){return(mr(r)&zr)<=nt?e<0?tt*tt:it*it:e>0?tt*tt:it*it}(r,e);if(n<Ut)return 1===f?o*$t*$t:o*Gt*Gt;if(n>jt)return 0===f?o*$t*$t:o*Gt*Gt;p=function(r,e){var n,t,i,u,a,o,f;return u=(i=e-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),n=(o=i*mt-u*wt)-((t=rt(t=(a=bt*i)+o,0))-a),r[0]=t,r[1]=n,r}(Wt,i)}else p=function(r,e,n){var t,i,u,a,o,f,c,s,l,p,v,y,d,h,g,w,b,m,N,A,x;return m=0,n<at&&(m-=53,n=mr(e*=lt)),m+=(n>>st)-_r|0,n=(N=n&ut|0)|ot|0,N<=235662?A=0:N<767610?A=1:(A=0,m+=1,n-=at),a=rt(i=(w=(e=kr(e,n))-(c=dt[A]))*(b=1/(e+c)),0),t=(n>>1|ft)+ct,f=kr(0,t+=A<<18),g=(u=i*i)*u*(0===(x=u)?.5999999999999946:.5999999999999946+x*(.4285714285785502+x*(.33333332981837743+x*(.272728123808534+x*(.23066074577556175+.20697501780033842*x))))),f=rt(f=3+(u=a*a)+(g+=(o=b*(w-a*f-a*(e-(f-c))))*(a+i)),0),l=rt(l=(w=a*f)+(b=o*f+(g-(f-3-u))*i),0),p=vt*l,d=(v=yt*l+(b-(l-w))*pt+gt[A])-((y=rt(y=p+v+(s=ht[A])+(h=m),0))-h-s-p),r[0]=y,r[1]=d,r}(Wt,i,n);if(v=(l=(e-(c=rt(e,0)))*p[0]+e*p[1])+(s=c*p[0]),we.assign(v,Lt,1,0),y=et(Lt[0]),d=et(Lt[1]),y>=Ft){if(0!=(y-Ft|d))return o*$t*$t;if(l+Ht>v-s)return o*$t*$t}else if((y&zr)>=Tt){if(0!=(y-Vt|d))return o*Gt*Gt;if(l<=v-s)return o*Gt*Gt}return v=function(r,e,n){var t,i,u,a,o,f,c,s,l,p;return l=((s=r&zr|0)>>kt)-_r|0,c=0,s>xt&&(i=kr(0,((c=r+(At>>l+1)>>>0)&~(Dr>>(l=((c&zr)>>kt)-_r|0)))>>>0),c=(c&Dr|At)>>kt-l>>>0,r<0&&(c=-c),e-=i),r=et(r=mr(f=1-((f=(u=(i=rt(i=n+e,0))*_t)+(a=(n-(i-e))*Nt+i*Et))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((o=a-(f-u))+f*o)-f))),(r+=c<<kt>>>0)>>kt<=0?Ie(f,c):kr(f,r)}(y,s,l),o*v}var Pt=.6931471803691238,Rt=1.9082149292705877e-10,Mt=1.4426950408889634,Zt=709.782712893384,Xt=-745.1332191019411,Yt=1/(1<<28),qt=-Yt;function zt(r){var e;return L(r)||r===W?r:r===C?0:r>Zt?W:r<Xt?0:r>qt&&r<Yt?1+r:function(r,e,n){var t,i,u,a;return Ie(1-(e-(t=r-e)*(u=t-(i=t*t)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),n)}(r-(e=Hr(r<0?Mt*r-.5:Mt*r+.5))*Pt,e*Rt,e)}var Bt=143.01608;function Dt(r){var e,n,t;return e=1+(e=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(e),n=zt(r),n=r>Bt?(t=Ct(r,.5*r-.25))*(t/n):Ct(r,r-.5)/n,qn*n*e}var Jt=.5772156649015329;function Kt(r,e){return e/((1+Jt*r)*r)}function Qt(r){var e,n,t,i;if(Xn(r)&&r<0||r===C||L(r))return NaN;if(0===r)return Yn(r)?C:W;if(r>171.61447887182297)return W;if(r<-170.5674972726612)return 0;if((n=R(r))>33)return r>=0?Dt(r):(e=0==(1&(t=$r(n)))?-1:1,(i=n-t)>.5&&(i=n-(t+=1)),i=n*_n(En*i),e*En/(R(i)*Dt(n)));for(i=1;r>=3;)i*=r-=1;for(;r<0;){if(r>-1e-9)return Kt(r,i);i/=r,r+=1}for(;r<2;){if(r<1e-9)return Kt(r,i);i/=r,r+=1}return 2===r?i:i*function(r){var e,n;return 0===r?1:((r<0?-r:r)<=1?(e=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),n=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(e=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),n=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),e/n)}(r-=2)}var ri=1.4901161193847656e-8,ei=17976931348623157e292,ni=709.782712893384,ti=1e-300,ii=13877787807814457e-33,ui=.8450629115104675,ai=.12837916709551256,oi=1,fi=-.0023621185607526594,ci=1,si=-.009864944034847148,li=1,pi=-.0098649429247001,vi=1;function yi(r){var e,n,t,i,u,a,o,f;if(L(r))return NaN;if(r===W)return 0;if(r===C)return 2;if(0===r)return 1;if(r<0?(e=!0,n=-r):(e=!1,n=r),n<.84375)return n<ii?1-r:(i=ai+(t=r*r)*function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015}(t),u=oi+t*function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))}(t),a=i/u,r<.25?1-(r+r*a):(i=r*a,.5-(i+=r-.5)));if(n<1.25)return o=fi+(u=n-1)*function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)}(u),f=ci+u*function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))}(u),e?1+ui+o/f:1-ui-o/f;if(n<28){if(u=1/(n*n),n<2.857142857142857)i=si+u*function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(u),u=li+u*function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))}(u);else{if(r<-6)return 2-ti;i=pi+u*function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(u),u=vi+u*function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))}(u)}return i=zt(-(t=rt(n,0))*t-.5625)*zt((t-n)*(t+n)+i/u),e?2-i/n:i/n}return e?2-ti:ti*ti}var di=-708.3964185322641;function hi(r,e){var n;return n=r*Or(e),e>=1?n<ni&&-e>di?Ct(e,r)*zt(-e):r>=1?Ct(e/zt(e/r),r):zt(n-e):n>di?Ct(e,r)*zt(-e):e/r<ni?Ct(e/zt(e/r),r):zt(n-e)}function gi(r,e){var n,t;if((t=r.length)<2||0===e)return 0===t?0:r[0];for(n=r[t-=1]*e+r[t-1],t-=2;t>=0;)n=n*e+r[t],t-=1;return n}var wi=Function;H(gi,"factory",(function(r){var e,n,t,i;if(r.length>500)return function(e){return gi(r,e)};if(e="return function evalpoly(x){",0===(n=r.length))e+="return 0.0;";else if(1===n)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],t=n-1,i=1;i<n;i++)e+="+x*",i<t&&(e+="("),e+=r[i];for(i=0;i<t-1;i++)e+=")";e+=";"}return e+="}",new wi(e+="//# sourceURL=evalpoly.factory.js")()}));var bi,mi=2220446049250313e-31,Ni=eval;function Ai(){var r;try{Ni('"use strict"; (function* () {})'),r=!0}catch(e){r=!1}return r}bi=Ai()?function(r,e){var n,t,i,u,a;if(a={},arguments.length>1&&(a=e),n=a.tolerance||mi,i=a.maxTerms||1e6,u=a.initialValue||0,1==("function"==typeof r.next)){for(t of r)if(R(n*(u+=t))>=R(t)||0==--i)break}else do{u+=t=r()}while(R(n*u)<R(t)&&--i);return u}:function(r,e){var n,t,i,u,a;a={},arguments.length>1&&(a=e),n=a.tolerance||mi,i=a.maxTerms||1e6,u=a.initialValue||0;do{u+=t=r()}while(R(n*u)<R(t)&&--i);return u};var xi=bi,ki=6.283185307179586,_i=[0,0,0,0,0,0,0,0,0,0];function Ei(r,e){var n,t,i,u;return t=-function(r){var e,n;return r<=-1?NaN:(n=R(r))>.95?Or(1+r)-r:n<mi?-r*r/2:(e={initialValue:-r},xi(function(r){var e=-r,n=-1,t=0;return function(){return(n*=e)/(t+=1)}}(r),e))}((e-r)/r),i=r*t,u=Dn(2*t),e<r&&(u=-u),_i[0]=function(r){return 0===r?-.3333333333333333:r*(.08333333333333333+r*(r*(.0011574074074074073+r*(.0003527336860670194+r*(r*(3919263178522438e-20+r*(r*(r*(8.296711340953087e-7+r*(r*(6.707853543401498e-9+r*(1.0261809784240309e-8+r*(9.14769958223679e-10*r-4.382036018453353e-9)))-1.7665952736826078e-7))-185406221071516e-20)-21854485106799924e-22))-.0001787551440329218)))-.014814814814814815))-.3333333333333333}(u),_i[1]=function(r){return 0===r?-.001851851851851852:r*(r*(.0026455026455026454+r*(r*(.00020576131687242798+r*(r*(r*(764916091608111e-20+r*(r*(4.647127802807434e-9+r*(1.378633446915721e-7+r*(1.1951628599778148e-8*r-5.752545603517705e-8)))-16120900894563446e-22))-18098550334489977e-21)-4.018775720164609e-7))-.0009902263374485596))-.003472222222222222)-.001851851851851852}(u),_i[2]=function(r){return 0===r?.004133597883597883:.004133597883597883+r*(r*(.0007716049382716049+r*(20093878600823047e-22+r*(r*(52923448829120125e-21+r*(r*(3.423578734096138e-8+r*(13721957309062932e-22+r*(1.4280614206064242e-7*r-6.298992138380055e-7)))-12760635188618728e-21))-.00010736653226365161)))-.0026813271604938273)}(u),_i[3]=function(r){return 0===r?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(r*(.00026772063206283885+r*(r*(r*(11082654115347302e-21+r*(14230900732435883e-22*r-56749528269915965e-22))-2.396505113867297e-7)-7561801671883977e-20))-.0004691894943952557))}(u),_i[4]=function(r){return 0===r?-.0008618882909167117:r*(.0007840392217200666+r*(r*(r*(6641498215465122e-20+r*(11375726970678419e-21*r-3968365047179435e-20))-14638452578843418e-22)-.0002990724803031902))-.0008618882909167117}(u),_i[5]=function(r){return 0===r?-.00033679855336635813:r*(r*(.0002772753244959392+r*(r*(6797780477937208e-20+r*(1.419062920643967e-7+r*(r*(8018470256334202e-21+-2291481176508095e-21*r)-13594048189768693e-21)))-.00019932570516188847))-6972813758365858e-20)-.00033679855336635813}(u),_i[6]=function(r){return 0===r?.0005313079364639922:.0005313079364639922+r*(r*(.0002708782096718045+r*(7.902353232660328e-7+r*(r*(561168275310625e-19+-18329116582843375e-21*r)-8153969367561969e-20)))-.0005921664373536939)}(u),_i[7]=function(r){return 0===r?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(r*(.0002812695154763237+-.00010976582244684731*r)-.00033493161081142234))}(u),_i[8]=function(r){return 0===r?-.0006526239185953094:r*(.0008394987206720873+-.000438297098541721*r)-.0006526239185953094}(u),_i[9]=-.0005967612901927463,n=gi(_i,1/r),n*=zt(-i)/Dn(ki*r),e<r&&(n=-n),n+=yi(Dn(i))/2}function Ui(r,e,n){var t;return n=n||0,t=function(r,e){var n=1,t=r,i=e;return function(){var r=n;return n*=i/(t+=1),r}}(r,e),xi(t,{initialValue:n})}var Ii=.6931471803691238,Si=1.9082149292705877e-10,Fi=.41421356237309503,ji=-.2928932188134525,Ti=1.862645149230957e-9,Vi=5551115123125783e-32,Oi=9007199254740992,$i=.6666666666666666;function Gi(r){var e,n,t,i,u,a,o,f,c,s;if(r<-1||L(r))return NaN;if(-1===r)return C;if(r===W)return r;if(0===r)return r;if(s=1,(t=r<0?-r:r)<Fi){if(t<Ti)return t<Vi?r:r-r*r*.5;r>ji&&(s=0,i=r,n=1)}return 0!==s&&(t<Oi?(u=(s=((n=mr(c=1+r))>>20)-_r)>0?1-(c-r):r-(c-1),u/=c):(s=((n=mr(c=r))>>20)-_r,u=0),(n&=1048575)<434334?c=kr(c,1072693248|n):(s+=1,c=kr(c,1071644672|n),n=1048576-n>>2),i=c-1),e=.5*i*i,0===n?0===i?s*Ii+(u+=s*Si):s*Ii-((f=e*(1-$i*i))-(s*Si+u)-i):(f=(o=(a=i/(2+i))*a)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(o),0===s?i-(e-a*(e+f)):s*Ii-(e-(a*(e+f)+(s*Si+u))-i))}function Hi(r,e){return L(r)||L(e)?NaN:r===W||e===W?W:r===e&&0===r?function(r){return 0===r&&1/r===W}(r)?r:e:r>e?r:e}function Li(r,e){return L(r)||L(e)?NaN:r===C||e===C?C:r===e&&0===r?Yn(r)?r:e:r<e?r:e}var Wi=10.900511,Ci=2.718281828459045;function Pi(r,e){var n,t,i,u,a,o,f,c,s,l;return f=(e-r-Wi+.5)/(i=r+Wi-.5),r<1?e<=di?zt(r*Or(e)-e-Zn(r)):Ct(e,r)*zt(-e)/Qt(r):(R(f*f*r)<=100&&r>150?n=zt(n=r*(Gi(f)-f)+e*(.5-Wi)/i):Li(u=r*Or(e/i),a=r-e)<=di||Hi(u,a)>=ni?(t=a/r,Li(u,a)/2>di&&Hi(u,a)/2<ni?n=(o=Ct(e/i,r/2)*zt(a/2))*o:Li(u,a)/4>di&&Hi(u,a)/4<ni&&e>r?(n=(o=Ct(e/i,r/4)*zt(a/4))*o,n*=n):n=t>di&&t<ni?Ct(e*zt(t)/i,r):zt(u+a)):n=Ct(e/i,r)*zt(a),n*=Dn(i/Ci)/(0===(c=r)?1/0:((c<0?-c:c)<=1?(s=709811.662581658+c*(679979.8474157227+c*(293136.7857211597+c*(74887.54032914672+c*(12555.290582413863+c*(1443.4299244417066+c*(115.24194596137347+c*(6.309239205732627+c*(.22668404630224365+c*(.004826466289237662+4624429436045379e-20*c))))))))),l=0+c*(362880+c*(1026576+c*(1172700+c*(723680+c*(269325+c*(63273+c*(9450+c*(870+c*(45+1*c)))))))))):(s=4624429436045379e-20+(c=1/c)*(.004826466289237662+c*(.22668404630224365+c*(6.309239205732627+c*(115.24194596137347+c*(1443.4299244417066+c*(12555.290582413863+c*(74887.54032914672+c*(293136.7857211597+c*(679979.8474157227+709811.662581658*c))))))))),l=1+c*(45+c*(870+c*(9450+c*(63273+c*(269325+c*(723680+c*(1172700+c*(1026576+c*(362880+0*c)))))))))),s/l)))}var Ri=.34657359027997264,Mi=709.782712893384,Zi=.6931471803691238,Xi=1.9082149292705877e-10,Yi=1.4426950408889634,qi=38.816242111356935,zi=1.0397207708399179;function Bi(r){var e,n,t,i,u,a,o,f,c,s,l,p,v;if(r===W||L(r))return r;if(r===C)return-1;if(0===r)return r;if(r<0?(t=!0,f=-r):(t=!1,f=r),f>=qi){if(t)return-1;if(f>=Mi)return W}if(a=0|mr(f),f>Ri)f<zi?t?(i=r+Zi,u=-Xi,v=-1):(i=r-Zi,u=Xi,v=1):(v=t?Yi*r-.5:Yi*r+.5,i=r-(l=v|=0)*Zi,u=l*Xi),s=i-(r=i-u)-u;else{if(a<1016070144)return r;v=0}return o=1+(c=r*(e=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(c),p=c*((o-(l=3-o*e))/(6-r*l)),0===v?r-(r*p-c):(n=ue(_r+v<<20,0),p=r*(p-s)-s,p-=c,-1===v?.5*(r-p)-.5:1===v?r<-.25?-2*(p-(r+.5)):1+2*(r-p):v<=-2||v>56?(f=1-(p-r),1024===v?f=kr(f,i=mr(f)+(v<<20)|0):f*=n,f-1):(l=1,v<20?f=(l=kr(l,i=1072693248-(2097152>>v)|0))-(p-r):(f=r-(p+(l=kr(l,i=_r-v<<20|0))),f+=1),f*=n))}var Di=.15896368026733398,Ji=.5281534194946289,Ki=.45201730728149414;function Qi(r,e,n){var t,i,u,a,o,f,c;if(r<mi)return-Or(r);if(0===e||0===n)return 0;if(i=0,r>2){if(r>=3){do{n-=1,i+=Or(r-=1)}while(r>=3);n=r-2}return a=0===(o=n)?-.01803556856784494:((o<0?-o:o)<=1?(f=o*(.02512664961998968+o*(.049410315156753225+o*(.0172491608709614+o*(o*(o*(0*o-3245886498259485e-20)-.0005410098692152044)-.0002594535632054381))))-.01803556856784494,c=1+o*(1.962029871977952+o*(1.4801966942423133+o*(.5413914320717209+o*(.09885042511280101+o*(.008213096746488934+o*(.00022493629192211576+-2.2335276320861708e-7*o))))))):(f=0+(o=1/o)*(o*(o*(o*(.0172491608709614+o*(.049410315156753225+o*(.02512664961998968+-.01803556856784494*o)))-.0002594535632054381)-.0005410098692152044)-3245886498259485e-20),c=o*(.00022493629192211576+o*(.008213096746488934+o*(.09885042511280101+o*(.5413914320717209+o*(1.4801966942423133+o*(1.962029871977952+1*o))))))-2.2335276320861708e-7),f/c),i+=(u=n*(r+1))*Di+u*a}return r<1&&(i+=-Or(r),n=e,e=r,r+=1),r<=1.5?(u=function(r){var e,n;return 0===r?.04906224540690395:((r<0?-r:r)<=1?(e=.04906224540690395+r*(r*(r*(r*(r*(-.0010034668769627955*r-.024014982064857155)-.1584135863906922)-.4065671242119384)-.4149833583594954)-.09691175301595212),n=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+.001957681026011072*r)))))):(e=(r=1/r)*(r*(r*(r*(r*(.04906224540690395*r-.09691175301595212)-.4149833583594954)-.4065671242119384)-.1584135863906922)-.024014982064857155)-.0010034668769627955,n=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+1*r)))))),e/n)}(e),i+=(t=e*n)*Ji+t*u):(u=n*e,a=function(r){var e,n;return 0===r?-.029232972183027003:((r<0?-r:r)<=1?(e=r*(.14421626775719232+r*(r*(.05428096940550536+r*(r*(.0004311713426792973+0*r)-.008505359768683364))-.14244039073863127))-.029232972183027003,n=1+r*(r*(.846973248876495+r*(r*(.02558279715597587+r*(-8.271935218912905e-7*r-.0010066679553914337))-.22009515181499575))-1.5016935605448505)):(e=0+(r=1/r)*(.0004311713426792973+r*(r*(.05428096940550536+r*(r*(.14421626775719232+-.029232972183027003*r)-.14244039073863127))-.008505359768683364)),n=r*(r*(.02558279715597587+r*(r*(.846973248876495+r*(1*r-1.5016935605448505))-.22009515181499575))-.0010066679553914337)-8.271935218912905e-7),e/n)}(-n),i+=u*Ki+u*a)}function ru(r,e,n){var t,i,u,a;return t=function(r){return L(r)?NaN:r<0?r<-.5?Qt(1+r)-1:Bi(-Gi(r)+Qi(r+2,r+1,r)):r<2?Bi(Qi(r+1,r,r-1)):Qt(1+r)-1}(r),i=(t+1)/r,u=function(r,e){var n;if(L(r)||L(e))return NaN;if(0===e)return 0;if(0===r)return-1;if(r<0&&e%2==0&&(r=-r),r>0){if((R(e*(r-1))<.5||R(e)<.2)&&(n=Or(r)*e)<.5)return Bi(n)}else if(Hr(e)!==e)return NaN;return Ct(r,e)-1}(e,r),t-=u,t/=r,a=function(r,e){var n,t,i,u;return n=-e,e=-e,t=r+1,i=1,function(){return u=n/t,n*=e,n/=i+=1,t+=1,u}}(r,e),t=-(u+=1)*xi(a,{initialValue:((n?i:0)-t)/u}),n&&(t=-t),[t,i]}var eu,nu=11754943508222875e-54;eu=Ai()?function(r,e){var n,t,i;return t={},arguments.length>1&&(t=e),n=t.maxIter||1e6,i=t.tolerance||mi,t.keep?function(r,e,n){var t,i,u,a,o,f;if(0===(u=(f=(t="function"==typeof r.next)?r.next().value:r())[1])&&(u=nu),a=u,o=0,!0===t)do{(f=r.next().value)&&(0===(o=f[1]+f[0]*o)&&(o=nu),0===(a=f[1]+f[0]/a)&&(a=nu),u*=i=a*(o=1/o))}while(f&&R(i-1)>e&&--n);else do{(f=r())&&(0===(o=f[1]+f[0]*o)&&(o=nu),0===(a=f[1]+f[0]/a)&&(a=nu),u*=i=a*(o=1/o))}while(f&&R(i-1)>e&&--n);return u}(r,i,n):function(r,e,n){var t,i,u,a,o,f,c;if(a=(c=(t="function"==typeof r.next)?r.next().value:r())[1],u=c[0],0===a&&(a=nu),o=a,f=0,!0===t)do{(c=r.next().value)&&(0===(f=c[1]+c[0]*f)&&(f=nu),0===(o=c[1]+c[0]/o)&&(o=nu),a*=i=o*(f=1/f))}while(R(i-1)>e&&--n);else do{(c=r())&&(0===(f=c[1]+c[0]*f)&&(f=nu),0===(o=c[1]+c[0]/o)&&(o=nu),a*=i=o*(f=1/f))}while(c&&R(i-1)>e&&--n);return u/a}(r,i,n)}:function(r,e){var n,t,i;return t={},arguments.length>1&&(t=e),i=t.tolerance||mi,n=t.maxIter||1e6,t.keep?function(r,e,n){var t,i,u,a,o;0===(a=(o=r())[1])&&(a=nu),i=a,u=0;do{(o=r())&&(0===(u=o[1]+o[0]*u)&&(u=nu),0===(i=o[1]+o[0]/i)&&(i=nu),a*=t=i*(u=1/u))}while(o&&R(t-1)>e&&--n);return a}(r,i,n):function(r,e,n){var t,i,u,a,o,f;o=(f=r())[1],i=f[0],0===o&&(o=nu),u=o,a=0;do{(f=r())&&(0===(a=f[1]+f[0]*a)&&(a=nu),0===(u=f[1]+f[0]/u)&&(u=nu),o*=t=u*(a=1/a))}while(f&&R(t-1)>e&&--n);return i/o}(r,i,n)};var tu=eu;function iu(r,e){var n=function(r,e){var n=e-r+1,t=r,i=0;return function(){return[(i+=1)*(t-i),n+=2]}}(r,e);return 1/(e-r+1+tu(n))}var uu=170;function au(r,e,n,t){var i,u,a,o,f,c,s,l,p,v,y,d,h;if(r<0||e<=0)return NaN;if(u=void 0===n||n,s=t,l=0,e>=uu&&!u)return s&&4*e<r?(l=e*Or(r)-r,l+=Or(iu(e,r))):!s&&e>4*r?(l=e*Or(r)-r,l+=Or(Ui(e,r,o=0)/e)):0===(l=au(e,r,!0,s))?s?(l=Or(l=1+1/(12*e)+1/(288*e*e))-e+(e-.5)*Or(e),l+=Or(qn)):(l=e*Or(r)-r,l+=Or(Ui(e,r,o=0)/e)):l=Or(l)+Zn(e),l>ni?W:zt(l);switch(e<30&&e<=r+1&&r<ni?f=!(p=(d=$r(e))===e)&&.5===R(d-e):p=f=!1,p&&r>.6?(s=!s,a=0):f&&r>.2?(s=!s,a=1):r<ri&&e>1?a=6:r<.5?a=-.4/Or(r)<e?2:3:r<1.1?a=.75*r<e?2:3:(c=!1,u&&e>20&&(v=R((r-e)/e),e>200?20/e>v*v&&(c=!0):v<.4&&(c=!0)),c?a=5:r-1/(3*r)<e?a=2:(a=4,s=!s)),a){case 0:l=function(r,e){var n,t,i;if(0!==(t=zt(-e)))for(n=t,i=1;i<r;++i)n/=i,t+=n*=e;return t}(e,r),!1===u&&(l*=Qt(e));break;case 1:l=function(r,e){var n,t,i,u;if(0!==(i=yi(Dn(e)))&&r>1){for(n=zt(-e)/Dn(En*e),n*=e,t=n/=.5,u=2;u<r;++u)n/=u-.5,t+=n*=e;i+=t}return i}(e,r),!1===u&&(l*=Qt(e));break;case 2:0!==(l=u?Pi(e,r):hi(e,r))&&(o=0,i=!1,s&&(o=u?1:Qt(e),u||l>=1||ei*l>o?(o/=l,u||e<1||ei/e>o?(o*=-e,i=!0):o=0):o=0)),l*=Ui(e,r,o)/e,i&&(s=!1,l=-l);break;case 3:l=(y=ru(e,r,s=!s))[0],h=y[1],s=!1,u&&(l/=h);break;case 4:0!==(l=u?Pi(e,r):hi(e,r))&&(l*=iu(e,r));break;case 5:l=Ei(e,r),r>=e&&(s=!s);break;case 6:l=u?Ct(r,e)/Qt(e+1):Ct(r,e)/e,l*=1-e*r/(e+1)}return u&&l>1&&(l=1),s&&(l=(u?1:Qt(e))-l),l}function ou(r,e,n){return L(r)||L(e)||L(n)||e<=0||n<=0?NaN:r<=0?0:au(n/r,e,!0,!0)}return H(ou,"factory",(function(r,e){return L(r)||L(e)||r<=0||e<=0?(n=NaN,function(){return n}):function(n){return L(n)?NaN:n<=0?0:au(e/n,r,!0,!0)};var n})),ou},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).cdf=e();
//# sourceMappingURL=index.js.map
