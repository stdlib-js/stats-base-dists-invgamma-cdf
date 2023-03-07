// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,e=Object.prototype,t=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,o=e.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,v,s;if("object"!=typeof r||null===r||"[object Array]"===t.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===t.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(f.call(r,n)||o.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),v="get"in a,s="set"in a,l&&(v||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&u&&u.call(r,n,a.get),s&&i&&i.call(r,n,a.set),r};function c(r,n,e){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function l(r){return r!=r}var v=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;function y(r){return r===v||r===s}function p(r){return Math.abs(r)}var b,w="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),h=Object.prototype.toString,N=Object.prototype.hasOwnProperty,d="function"==typeof Symbol?Symbol.toStringTag:"",m=w&&"symbol"==typeof Symbol.toStringTag?function(r){var n,e,t,u,i;if(null==r)return h.call(r);e=r[d],i=d,n=null!=(u=r)&&N.call(u,i);try{r[d]=void 0}catch(n){return h.call(r)}return t=h.call(r),n?r[d]=e:delete r[d],t}:function(r){return h.call(r)},g="function"==typeof Uint32Array,A="function"==typeof Uint32Array?Uint32Array:null,_="function"==typeof Uint32Array?Uint32Array:void 0;b=function(){var r,n,e;if("function"!=typeof A)return!1;try{n=new A(n=[1,3.14,-3.14,4294967296,4294967297]),e=n,r=(g&&e instanceof Uint32Array||"[object Uint32Array]"===m(e))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?_:function(){throw new Error("not implemented")};var U,x=b,j="function"==typeof Float64Array,I="function"==typeof Float64Array?Float64Array:null,k="function"==typeof Float64Array?Float64Array:void 0;U=function(){var r,n,e;if("function"!=typeof I)return!1;try{n=new I([1,3.14,-3.14,NaN]),e=n,r=(j&&e instanceof Float64Array||"[object Float64Array]"===m(e))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?k:function(){throw new Error("not implemented")};var O,S=U,T="function"==typeof Uint8Array,F="function"==typeof Uint8Array?Uint8Array:null,E="function"==typeof Uint8Array?Uint8Array:void 0;O=function(){var r,n,e;if("function"!=typeof F)return!1;try{n=new F(n=[1,3.14,-3.14,256,257]),e=n,r=(T&&e instanceof Uint8Array||"[object Uint8Array]"===m(e))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?E:function(){throw new Error("not implemented")};var H,V=O,G="function"==typeof Uint16Array,P="function"==typeof Uint16Array?Uint16Array:null,L="function"==typeof Uint16Array?Uint16Array:void 0;H=function(){var r,n,e;if("function"!=typeof P)return!1;try{n=new P(n=[1,3.14,-3.14,65536,65537]),e=n,r=(G&&e instanceof Uint16Array||"[object Uint16Array]"===m(e))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?L:function(){throw new Error("not implemented")};var M,W={uint16:H,uint8:V};(M=new W.uint16(1))[0]=4660;var Y=52===new W.uint8(M.buffer)[0],q=!0===Y?1:0,C=new S(1),R=new x(C.buffer);function z(r){return C[0]=r,R[q]}var B=!0===Y?1:0,D=new S(1),J=new x(D.buffer);function K(r,n){return D[0]=r,J[B]=n>>>0,D[0]}var Q=1023,X=.6931471803691238,Z=1.9082149292705877e-10,$=1048575;function rr(r){var n,e,t,u,i,f,o,a,c,v,y,p;return 0===r?s:l(r)||r<0?NaN:(i=0,(e=z(r))<1048576&&(i-=54,e=z(r*=0x40000000000000)),e>=2146435072?r+r:(i+=(e>>20)-Q|0,i+=(a=614244+(e&=$)&1048576|0)>>20|0,o=(r=K(r,e|1072693248^a))-1,($&2+e)<3?0===o?0===i?0:i*X+i*Z:(f=o*o*(.5-.3333333333333333*o),0===i?o-f:i*X-(f-i*Z-o)):(a=e-398458|0,c=440401-e|0,u=(y=(p=(v=o/(2+o))*v)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),f=t+u,(a|=c)>0?(n=.5*o*o,0===i?o-(n-v*(n+f)):i*X-(n-(v*(n+f)+i*Z)-o)):0===i?o-v*(o-f):i*X-(v*(o-f)-i*Z-o))))}var nr=Math.floor,er=Math.ceil;function tr(r){return r<0?er(r):nr(r)}function ur(r,n){var e,t,u,i;return u=(i=r*r)*i,t=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),t+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(u=1-(e=.5*i))+(1-u-e+(i*t-r*n))}var ir=-.16666666666666632;function fr(r,n){var e,t,u;return e=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),t=u*r,0===n?r+t*(ir+u*e):r-(u*(.5*n-t*e)-n-t*ir)}var or,ar,cr=!0===Y?0:1,lr=new S(1),vr=new x(lr.buffer);!0===Y?(or=1,ar=0):(or=0,ar=1);var sr={HIGH:or,LOW:ar},yr=new S(1),pr=new x(yr.buffer),br=sr.HIGH,wr=sr.LOW;function hr(r,n){return pr[br]=r,pr[wr]=n,yr[0]}var Nr,dr,mr=2147483647;!0===Y?(Nr=1,dr=0):(Nr=0,dr=1);var gr={HIGH:Nr,LOW:dr},Ar=new S(1),_r=new x(Ar.buffer),Ur=gr.HIGH,xr=gr.LOW;function jr(r,n,e,t){return Ar[0]=r,n[t]=_r[Ur],n[t+e]=_r[xr],n}function Ir(r){return jr(r,[0,0],1,0)}c(Ir,"assign",jr);var kr=[0,0];function Or(r,n){var e,t;return Ir.assign(r,kr,1,0),e=kr[0],e&=mr,t=z(n),hr(e|=t&=2147483648,kr[1])}function Sr(r,n,e,t){return l(r)||y(r)?(n[t]=r,n[t+e]=0,n):0!==r&&p(r)<22250738585072014e-324?(n[t]=4503599627370496*r,n[t+e]=-52,n):(n[t]=r,n[t+e]=0,n)}c((function(r){return Sr(r,[0,0],1,0)}),"assign",Sr);var Tr=[0,0],Fr=[0,0];function Er(r,n){var e,t;return 0===n||0===r||l(r)||y(r)?r:(Sr(r,Tr,1,0),n+=Tr[1],n+=function(r){var n=z(r);return(n=(2146435072&n)>>>20)-Q|0}(r=Tr[0]),n<-1074?Or(0,r):n>1023?r<0?s:v:(n<=-1023?(n+=52,t=2220446049250313e-31):t=1,Ir.assign(r,Fr,1,0),e=Fr[0],e&=2148532223,t*hr(e|=n+Q<<20,Fr[1])))}function Hr(r){return function(r,n){var e,t;for(e=[],t=0;t<n;t++)e.push(r);return e}(0,r)}var Vr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Gr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Pr=16777216,Lr=5.960464477539063e-8,Mr=Hr(20),Wr=Hr(20),Yr=Hr(20),qr=Hr(20);function Cr(r,n,e,t,u,i,f,o,a){var c,l,v,s,y,p,b,w,h;for(s=i,h=t[e],w=e,y=0;w>0;y++)l=Lr*h|0,qr[y]=h-Pr*l|0,h=t[w-1]+l,w-=1;if(h=Er(h,u),h-=8*nr(.125*h),h-=b=0|h,v=0,u>0?(b+=y=qr[e-1]>>24-u,qr[e-1]-=y<<24-u,v=qr[e-1]>>23-u):0===u?v=qr[e-1]>>23:h>=.5&&(v=2),v>0){for(b+=1,c=0,y=0;y<e;y++)w=qr[y],0===c?0!==w&&(c=1,qr[y]=16777216-w):qr[y]=16777215-w;if(u>0)switch(u){case 1:qr[e-1]&=8388607;break;case 2:qr[e-1]&=4194303}2===v&&(h=1-h,0!==c&&(h-=Er(1,u)))}if(0===h){for(w=0,y=e-1;y>=i;y--)w|=qr[y];if(0===w){for(p=1;0===qr[i-p];p++);for(y=e+1;y<=e+p;y++){for(a[o+y]=Vr[f+y],l=0,w=0;w<=o;w++)l+=r[w]*a[o+(y-w)];t[y]=l}return Cr(r,n,e+=p,t,u,i,f,o,a)}}if(0===h)for(e-=1,u-=24;0===qr[e];)e-=1,u-=24;else(h=Er(h,-u))>=Pr?(l=Lr*h|0,qr[e]=h-Pr*l|0,u+=24,qr[e+=1]=l):qr[e]=0|h;for(l=Er(1,u),y=e;y>=0;y--)t[y]=l*qr[y],l*=Lr;for(y=e;y>=0;y--){for(l=0,p=0;p<=s&&p<=e-y;p++)l+=Gr[p]*t[y+p];Yr[e-y]=l}for(l=0,y=e;y>=0;y--)l+=Yr[y];for(n[0]=0===v?l:-l,l=Yr[0]-l,y=1;y<=e;y++)l+=Yr[y];return n[1]=0===v?l:-l,7&b}function Rr(r,n,e,t){var u,i,f,o,a,c,l;for((i=(e-3)/24|0)<0&&(i=0),o=e-24*(i+1),c=i-(f=t-1),l=f+4,a=0;a<=l;a++)Mr[a]=c<0?0:Vr[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=f;c++)u+=r[c]*Mr[f+(a-c)];Wr[a]=u}return Cr(r,n,4,Wr,o,4,i,f,Mr)}var zr=Math.round;function Br(r,n,e){var t,u,i,f,o;return i=r-1.5707963267341256*(t=zr(.6366197723675814*r)),f=6077100506506192e-26*t,o=n>>20|0,e[0]=i-f,o-(z(e[0])>>20&2047)>16&&(f=20222662487959506e-37*t-((u=i)-(i=u-(f=6077100506303966e-26*t))-f),e[0]=i-f,o-(z(e[0])>>20&2047)>49&&(f=84784276603689e-45*t-((u=i)-(i=u-(f=20222662487111665e-37*t))-f),e[0]=i-f)),e[1]=i-e[0]-f,t}var Dr=1.5707963267341256,Jr=6077100506506192e-26,Kr=2*Jr,Qr=3*Jr,Xr=4*Jr,Zr=[0,0,0],$r=[0,0];function rn(r,n){var e,t,u,i,f,o,a;if((u=2147483647&z(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Br(r,u,n):u<=1073928572?r>0?(a=r-Dr,n[0]=a-Jr,n[1]=a-n[0]-Jr,1):(a=r+Dr,n[0]=a+Jr,n[1]=a-n[0]+Jr,-1):r>0?(a=r-2*Dr,n[0]=a-Kr,n[1]=a-n[0]-Kr,2):(a=r+2*Dr,n[0]=a+Kr,n[1]=a-n[0]+Kr,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Br(r,u,n):r>0?(a=r-3*Dr,n[0]=a-Qr,n[1]=a-n[0]-Qr,3):(a=r+3*Dr,n[0]=a+Qr,n[1]=a-n[0]+Qr,-3):1075388923===u?Br(r,u,n):r>0?(a=r-4*Dr,n[0]=a-Xr,n[1]=a-n[0]-Xr,4):(a=r+4*Dr,n[0]=a+Xr,n[1]=a-n[0]+Xr,-4);if(u<1094263291)return Br(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(e=function(r){return lr[0]=r,vr[cr]}(r),a=hr(u-((t=(u>>20)-1046)<<20|0),e),f=0;f<2;f++)Zr[f]=0|a,a=16777216*(a-Zr[f]);for(Zr[2]=a,i=3;0===Zr[i-1];)i-=1;return o=Rr(Zr,$r,t,i),r<0?(n[0]=-$r[0],n[1]=-$r[1],-o):(n[0]=$r[0],n[1]=$r[1],o)}var nn=[0,0];function en(r){var n;if(n=z(r),(n&=2147483647)<=1072243195)return n<1044381696?1:ur(r,0);if(n>=2146435072)return NaN;switch(3&rn(r,nn)){case 0:return ur(nn[0],nn[1]);case 1:return-fr(nn[0],nn[1]);case 2:return-ur(nn[0],nn[1]);default:return fr(nn[0],nn[1])}}var tn=[0,0];function un(r){var n;if(n=z(r),(n&=2147483647)<=1072243195)return n<1045430272?r:fr(r,0);if(n>=2146435072)return NaN;switch(3&rn(r,tn)){case 0:return fr(tn[0],tn[1]);case 1:return ur(tn[0],tn[1]);case 2:return-fr(tn[0],tn[1]);default:return-ur(tn[0],tn[1])}}var fn=3.141592653589793,on=1.4616321449683622,an=1.4616321449683622;function cn(r){var n,e,t,u,i,f,o,a,c,s,b,w,h;if(l(r)||y(r))return r;if(0===r)return v;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-rr(r);if(n){if(r>=4503599627370496)return v;if(c=function(r){var n,e;return l(r)||y(r)?NaN:0===(n=p(e=r%2))||1===n?Or(0,e):n<.25?un(fn*e):n<.75?Or(en(fn*(n=.5-n)),e):n<1.25?(e=Or(1,e)-e,un(fn*e)):n<1.75?-Or(en(fn*(n-=1.5)),e):(e-=Or(2,e),un(fn*e))}(r),0===c)return v;e=rr(fn/p(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(h=-rr(r),r>=on-1+.27?(b=1-r,t=0):r>=on-1-.27?(b=r-(an-1),t=1):(b=r,t=2)):(h=0,r>=on+.27?(b=2-r,t=0):r>=on-.27?(b=r-an,t=1):(b=r-1,t=2)),t){case 0:f=.07721566490153287+(w=b*b)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(w),i=w*(.3224670334241136+w*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(w)),h+=(o=b*f+i)-.5*b;break;case 1:f=.48383612272381005+(s=(w=b*b)*b)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(s),i=s*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(s)-.1475877229945939,u=.06462494023913339+s*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(s),h+=(o=w*f-(-3638676997039505e-33-s*(i+b*u)))-.12148629053584961;break;case 2:f=b*(b*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(b)-.07721566490153287),i=1+b*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(b),h+=-.5*b+f/i}else if(r<8)switch(o=(b=r-(t=tr(r)))*(b*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(b)-.07721566490153287),a=1+b*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(b),h=.5*b+o/a,w=1,t){case 7:w*=b+6;case 6:w*=b+5;case 5:w*=b+4;case 4:w*=b+3;case 3:h+=rr(w*=b+2)}else r<0x400000000000000?(c=rr(r),s=.4189385332046727+(w=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(b=w*w),h=(r-.5)*(c-1)+s):h=r*(rr(r)-1);return n&&(h=e-h),h}function ln(r){return nr(r)===r}function vn(r){return 0===r&&1/r===s}var sn=2.5066282746310007;function yn(r){return ln(r/2)}function pn(r){return yn(r>0?r-1:r+1)}var bn=Math.sqrt,wn=!0===Y?0:1,hn=new S(1),Nn=new x(hn.buffer);function dn(r,n){return hn[0]=r,Nn[wn]=n>>>0,hn[0]}function mn(r){return 0|r}var gn=1048576,An=[1,1.5],_n=[0,.5849624872207642],Un=[0,1.350039202129749e-8],xn=1048575,jn=1048576,In=1083179008,kn=1e300,On=1e-300,Sn=[0,0],Tn=[0,0];function Fn(r,n){var e,t,u,i,f,o,a,c,b,w,h,N,d,m;if(l(r)||l(n))return NaN;if(Ir.assign(n,Sn,1,0),f=Sn[0],0===Sn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return bn(r);if(-.5===n)return 1/bn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(y(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:p(r)<1==(n===v)?0:v}(r,n)}if(Ir.assign(r,Sn,1,0),i=Sn[0],0===Sn[1]){if(0===i)return function(r,n){return n===s?v:n===v?0:n>0?pn(n)?r:0:pn(n)?Or(v,r):v}(r,n);if(1===r)return 1;if(-1===r&&pn(n))return-1;if(y(r))return r===s?Fn(-0,-n):n<0?0:v}if(r<0&&!1===ln(n))return(r-r)/(r-r);if(u=p(r),e=i&mr|0,t=f&mr|0,a=f>>>31|0,o=(o=i>>>31|0)&&pn(n)?-1:1,t>1105199104){if(t>1139802112)return function(r,n){return(z(r)&mr)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(e<1072693247)return 1===a?o*kn*kn:o*On*On;if(e>1072693248)return 0===a?o*kn*kn:o*On*On;h=function(r,n){var e,t,u,i,f,o;return e=(f=1.9259629911266175e-8*(u=n-1)-u*u*(0===(o=u)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((t=dn(t=(i=1.4426950216293335*u)+f,0))-i),r[0]=t,r[1]=e,r}(Tn,u)}else h=function(r,n,e){var t,u,i,f,o,a,c,l,v,s,y,p,b,w,h,N,d,m,g,A,_;return m=0,e<gn&&(m-=53,e=z(n*=9007199254740992)),m+=(e>>20)-Q|0,e=1072693248|(g=1048575&e|0),g<=235662?A=0:g<767610?A=1:(A=0,m+=1,e-=gn),f=dn(u=(N=(n=K(n,e))-(c=An[A]))*(d=1/(n+c)),0),t=524288+(e>>1|536870912),a=K(0,t+=A<<18),h=(i=u*u)*i*(0===(_=i)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),a=dn(a=3+(i=f*f)+(h+=(o=d*(N-f*a-f*(n-(a-c))))*(f+u)),0),b=(y=-7.028461650952758e-9*(v=dn(v=(N=f*a)+(d=o*a+(h-(a-3-i))*u),0))+.9617966939259756*(d-(v-N))+Un[A])-((p=dn(p=(s=.9617967009544373*v)+y+(l=_n[A])+(w=m),0))-w-l-s),r[0]=p,r[1]=b,r}(Tn,u,e);if(N=(w=(n-(c=dn(n,0)))*h[0]+n*h[1])+(b=c*h[0]),Ir.assign(N,Sn,1,0),d=mn(Sn[0]),m=mn(Sn[1]),d>=In){if(0!=(d-In|m))return o*kn*kn;if(w+8008566259537294e-32>N-b)return o*kn*kn}else if((d&mr)>=1083231232){if(0!=(d-3230714880|m))return o*On*On;if(w<=N-b)return o*On*On}return N=function(r,n,e){var t,u,i,f,o,a,c,l,v,s;return v=((l=r&mr|0)>>20)-Q|0,c=0,l>1071644672&&(u=K(0,((c=r+(jn>>v+1)>>>0)&~(xn>>(v=((c&mr)>>20)-Q|0)))>>>0),c=(c&xn|jn)>>20-v>>>0,r<0&&(c=-c),n-=u),r=mn(r=z(a=1-((a=(i=.6931471824645996*(u=dn(u=e+n,0)))+(f=.6931471805599453*(e-(u-n))+-1.904654299957768e-9*u))*(t=a-(u=a*a)*(0===(s=u)?.16666666666666602:.16666666666666602+s*(s*(6613756321437934e-20+s*(4.1381367970572385e-8*s-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((o=f-(a-i))+a*o)-a))),(r+=c<<20>>>0)>>20<=0?Er(a,c):K(a,r)}(d,b,w),o*N}var En=1.4426950408889634,Hn=1/(1<<28);function Vn(r){var n;return l(r)||r===v?r:r===s?0:r>709.782712893384?v:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Hn?1+r:function(r,n,e){var t,u,i,f;return Er(1-(n-(t=r-n)*(i=t-(u=t*t)*(0===(f=u)?.16666666666666602:.16666666666666602+f*(f*(6613756321437934e-20+f*(4.1381367970572385e-8*f-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),e)}(r-.6931471803691238*(n=tr(r<0?En*r-.5:En*r+.5)),1.9082149292705877e-10*n,n)}function Gn(r){var n,e,t;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),e=Vn(r),e=r>143.01608?(t=Fn(r,.5*r-.25))*(t/e):Fn(r,r-.5)/e,sn*e*n}function Pn(r,n){return n/((1+.5772156649015329*r)*r)}function Ln(r){var n,e,t,u;if(ln(r)&&r<0||r===s||l(r))return NaN;if(0===r)return vn(r)?s:v;if(r>171.61447887182297)return v;if(r<-170.5674972726612)return 0;if((e=p(r))>33)return r>=0?Gn(r):(n=0==(1&(t=nr(e)))?-1:1,(u=e-t)>.5&&(u=e-(t+=1)),u=e*un(fn*u),n*fn/(p(u)*Gn(e)));for(u=1;r>=3;)u*=r-=1;for(;r<0;){if(r>-1e-9)return Pn(r,u);u/=r,r+=1}for(;r<2;){if(r<1e-9)return Pn(r,u);u/=r,r+=1}return 2===r?u:u*function(r){var n,e;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),e=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),e=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/e)}(r-=2)}var Mn=17976931348623157e292,Wn=709.782712893384,Yn=.8450629115104675;function qn(r){var n,e,t,u,i,f,o,a;if(l(r))return NaN;if(r===v)return 0;if(r===s)return 2;if(0===r)return 1;if(r<0?(n=!0,e=-r):(n=!1,e=r),e<.84375)return e<13877787807814457e-33?1-r:(u=.12837916709551256+(t=r*r)*function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015}(t),i=1+t*function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))}(t),f=u/i,r<.25?1-(r+r*f):(u=r*f,.5-(u+=r-.5)));if(e<1.25)return o=(i=e-1)*function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)}(i)-.0023621185607526594,a=1+i*function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))}(i),n?1+Yn+o/a:1-Yn-o/a;if(e<28){if(i=1/(e*e),e<2.857142857142857)u=i*function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(i)-.009864944034847148,i=1+i*function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))}(i);else{if(r<-6)return 2;u=i*function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(i)-.0098649429247001,i=1+i*function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))}(i)}return u=Vn(-(t=dn(e,0))*t-.5625)*Vn((t-e)*(t+e)+u/i),n?2-u/e:u/e}return n?2:0}var Cn=-708.3964185322641;function Rn(r,n){var e;return e=r*rr(n),n>=1?e<Wn&&-n>Cn?Fn(n,r)*Vn(-n):r>=1?Fn(n/Vn(n/r),r):Vn(e-n):e>Cn?Fn(n,r)*Vn(-n):n/r<Wn?Fn(n/Vn(n/r),r):Vn(e-n)}function zn(r,n){var e,t;if((t=r.length)<2||0===n)return 0===t?0:r[0];for(e=r[t-=1]*n+r[t-1],t-=2;t>=0;)e=e*n+r[t],t-=1;return e}c(zn,"factory",(function(r){var n,e,t,u;if(r.length>500)return function(n){return zn(r,n)};if(n="return function evalpoly(x){",0===(e=r.length))n+="return 0.0;";else if(1===e)n+="return "+r[0]+";";else{for(n+="if(x===0.0){return "+r[0]+";}",n+="return "+r[0],t=e-1,u=1;u<e;u++)n+="+x*",u<t&&(n+="("),n+=r[u];for(u=0;u<t-1;u++)n+=")";n+=";"}return n+="}",n+="//# sourceURL=evalpoly.factory.js",new Function(n)()}));var Bn=[0,0,0,0,0,0,0,0,0,0],Dn=eval;function Jn(){var r;try{Dn('"use strict"; (function* () {})'),r=!0}catch(n){r=!1}return r}var Kn,Qn=2220446049250313e-31,Xn=1e6,Zn=1e6;Kn=Jn()?function(r,n){var e,t,u,i,f;if(f={},arguments.length>1&&(f=n),e=f.tolerance||Qn,u=f.maxTerms||Xn,i=f.initialValue||0,1==("function"==typeof r.next)){for(t of r)if(p(e*(i+=t))>=p(t)||0==--u)break}else do{i+=t=r()}while(p(e*i)<p(t)&&--u);return i}:function(r,n){var e,t,u,i,f;f={},arguments.length>1&&(f=n),e=f.tolerance||Qn,u=f.maxTerms||Zn,i=f.initialValue||0;do{i+=t=r()}while(p(e*i)<p(t)&&--u);return i};var $n=Kn;function re(r,n,e){var t;return e=e||0,t=function(r,n){var e=1,t=r,u=n;return function(){var r=e;return e*=u/(t+=1),r}}(r,n),$n(t,{initialValue:e})}var ne=.6931471803691238,ee=1.9082149292705877e-10;function te(r){var n,e,t,u,i,f,o,a,c,y;if(r<-1||l(r))return NaN;if(-1===r)return s;if(r===v)return r;if(0===r)return r;if(y=1,(t=r<0?-r:r)<.41421356237309503){if(t<1.862645149230957e-9)return t<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(y=0,u=r,e=1)}return 0!==y&&(t<9007199254740992?(i=(y=((e=z(c=1+r))>>20)-Q)>0?1-(c-r):r-(c-1),i/=c):(y=((e=z(c=r))>>20)-Q,i=0),(e&=1048575)<434334?c=K(c,1072693248|e):(y+=1,c=K(c,1071644672|e),e=1048576-e>>2),u=c-1),n=.5*u*u,0===e?0===u?y*ne+(i+=y*ee):y*ne-((a=n*(1-.6666666666666666*u))-(y*ee+i)-u):(a=(o=(f=u/(2+u))*f)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(o),0===y?u-(n-f*(n+a)):y*ne-(n-(f*(n+a)+(y*ee+i))-u))}function ue(r){return 0===r&&1/r===v}function ie(r,n){var e,t,u,i;if(2===(e=arguments.length))return l(r)||l(n)?NaN:r===v||n===v?v:r===n&&0===r?ue(r)?r:n:r>n?r:n;for(t=s,i=0;i<e;i++){if(l(u=arguments[i])||u===v)return u;(u>t||u===t&&0===u&&ue(u))&&(t=u)}return t}function fe(r,n){var e,t,u,i;if(2===(e=arguments.length))return l(r)||l(n)?NaN:r===s||n===s?s:r===n&&0===r?vn(r)?r:n:r<n?r:n;for(t=v,i=0;i<e;i++){if(l(u=arguments[i])||u===s)return u;(u<t||u===t&&0===u&&vn(u))&&(t=u)}return t}var oe=10.900511;function ae(r,n){var e,t,u,i,f,o,a,c,l,v;return a=(n-r-oe+.5)/(u=r+oe-.5),r<1?n<=Cn?Vn(r*rr(n)-n-cn(r)):Fn(n,r)*Vn(-n)/Ln(r):(p(a*a*r)<=100&&r>150?e=Vn(e=r*(te(a)-a)+-10.400511*n/u):fe(i=r*rr(n/u),f=r-n)<=Cn||ie(i,f)>=Wn?(t=f/r,fe(i,f)/2>Cn&&ie(i,f)/2<Wn?e=(o=Fn(n/u,r/2)*Vn(f/2))*o:fe(i,f)/4>Cn&&ie(i,f)/4<Wn&&n>r?(e=(o=Fn(n/u,r/4)*Vn(f/4))*o,e*=e):e=t>Cn&&t<Wn?Fn(n*Vn(t)/u,r):Vn(i+f)):e=Fn(n/u,r)*Vn(f),e*=bn(u/2.718281828459045)/(0===(c=r)?1/0:((c<0?-c:c)<=1?(l=709811.662581658+c*(679979.8474157227+c*(293136.7857211597+c*(74887.54032914672+c*(12555.290582413863+c*(1443.4299244417066+c*(115.24194596137347+c*(6.309239205732627+c*(.22668404630224365+c*(.004826466289237662+4624429436045379e-20*c))))))))),v=0+c*(362880+c*(1026576+c*(1172700+c*(723680+c*(269325+c*(63273+c*(9450+c*(870+c*(45+1*c)))))))))):(l=4624429436045379e-20+(c=1/c)*(.004826466289237662+c*(.22668404630224365+c*(6.309239205732627+c*(115.24194596137347+c*(1443.4299244417066+c*(12555.290582413863+c*(74887.54032914672+c*(293136.7857211597+c*(679979.8474157227+709811.662581658*c))))))))),v=1+c*(45+c*(870+c*(9450+c*(63273+c*(269325+c*(723680+c*(1172700+c*(1026576+c*(362880+0*c)))))))))),l/v)))}var ce=.6931471803691238,le=1.9082149292705877e-10,ve=1.4426950408889634;function se(r){var n,e,t,u,i,f,o,a,c,y,p,b;if(r===v||l(r))return r;if(r===s)return-1;if(0===r)return r;if(r<0?(e=!0,o=-r):(e=!1,o=r),o>=38.816242111356935){if(e)return-1;if(o>=709.782712893384)return v}if(i=0|z(o),o>.34657359027997264)o<1.0397207708399179?e?(t=r+ce,u=-le,b=-1):(t=r-ce,u=le,b=1):(b=e?ve*r-.5:ve*r+.5,t=r-(y=b|=0)*ce,u=y*le),c=t-(r=t-u)-u;else{if(i<1016070144)return r;b=0}return f=1+(a=r*(n=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(a),p=a*((f-(y=3-f*n))/(6-r*y)),0===b?r-(r*p-a):(p=r*(p-c)-c,p-=a,-1===b?.5*(r-p)-.5:1===b?r<-.25?-2*(p-(r+.5)):1+2*(r-p):b<=-2||b>56?(o=K(o=1-(p-r),t=z(o)+(b<<20)|0))-1:(y=1,b<20?o=(y=K(y,t=1072693248-(2097152>>b)|0))-(p-r):(o=r-(p+(y=K(y,t=Q-b<<20|0))),o+=1),K(o,t=z(o)+(b<<20)|0)))}function ye(r,n,e){var t,u,i,f,o,a,c;if(r<Qn)return-rr(r);if(0===n||0===e)return 0;if(u=0,r>2){if(r>=3){do{e-=1,u+=rr(r-=1)}while(r>=3);e=r-2}return u+=.15896368026733398*(i=e*(r+1))+i*(f=0===(o=e)?-.01803556856784494:((o<0?-o:o)<=1?(a=o*(.02512664961998968+o*(.049410315156753225+o*(.0172491608709614+o*(o*(o*(0*o-3245886498259485e-20)-.0005410098692152044)-.0002594535632054381))))-.01803556856784494,c=1+o*(1.962029871977952+o*(1.4801966942423133+o*(.5413914320717209+o*(.09885042511280101+o*(.008213096746488934+o*(.00022493629192211576+-2.2335276320861708e-7*o))))))):(a=0+(o=1/o)*(o*(o*(o*(.0172491608709614+o*(.049410315156753225+o*(.02512664961998968+-.01803556856784494*o)))-.0002594535632054381)-.0005410098692152044)-3245886498259485e-20),c=o*(.00022493629192211576+o*(.008213096746488934+o*(.09885042511280101+o*(.5413914320717209+o*(1.4801966942423133+o*(1.962029871977952+1*o))))))-2.2335276320861708e-7),a/c))}return r<1&&(u+=-rr(r),e=n,n=r,r+=1),r<=1.5?(i=function(r){var n,e;return 0===r?.04906224540690395:((r<0?-r:r)<=1?(n=.04906224540690395+r*(r*(r*(r*(r*(-.0010034668769627955*r-.024014982064857155)-.1584135863906922)-.4065671242119384)-.4149833583594954)-.09691175301595212),e=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+.001957681026011072*r)))))):(n=(r=1/r)*(r*(r*(r*(r*(.04906224540690395*r-.09691175301595212)-.4149833583594954)-.4065671242119384)-.1584135863906922)-.024014982064857155)-.0010034668769627955,e=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+1*r)))))),n/e)}(n),u+=.5281534194946289*(t=n*e)+t*i):(i=e*n,f=function(r){var n,e;return 0===r?-.029232972183027003:((r<0?-r:r)<=1?(n=r*(.14421626775719232+r*(r*(.05428096940550536+r*(r*(.0004311713426792973+0*r)-.008505359768683364))-.14244039073863127))-.029232972183027003,e=1+r*(r*(.846973248876495+r*(r*(.02558279715597587+r*(-8.271935218912905e-7*r-.0010066679553914337))-.22009515181499575))-1.5016935605448505)):(n=0+(r=1/r)*(.0004311713426792973+r*(r*(.05428096940550536+r*(r*(.14421626775719232+-.029232972183027003*r)-.14244039073863127))-.008505359768683364)),e=r*(r*(.02558279715597587+r*(r*(.846973248876495+r*(1*r-1.5016935605448505))-.22009515181499575))-.0010066679553914337)-8.271935218912905e-7),n/e)}(-e),u+=.45201730728149414*i+i*f)}function pe(r,n,e){var t,u,i,f;return t=function(r){return l(r)?NaN:r<0?r<-.5?Ln(1+r)-1:se(-te(r)+ye(r+2,r+1,r)):r<2?se(ye(r+1,r,r-1)):Ln(1+r)-1}(r),u=(t+1)/r,i=function(r,n){var e;if(l(r)||l(n))return NaN;if(0===n)return 0;if(0===r)return-1;if(r<0&&n%2==0&&(r=-r),r>0){if((p(n*(r-1))<.5||p(n)<.2)&&(e=rr(r)*n)<.5)return se(e)}else if(tr(n)!==n)return NaN;return Fn(r,n)-1}(n,r),t-=i,t/=r,f=function(r,n){var e,t,u,i;return e=-n,n=-n,t=r+1,u=1,function(){return i=e/t,e*=n,e/=u+=1,t+=1,i}}(r,n),t=-(i+=1)*$n(f,{initialValue:((e?u:0)-t)/i}),e&&(t=-t),[t,u]}var be=11754943508222875e-54,we=1e6;function he(r,n,e){var t,u,i,f,o,a,c;if(f=(c=(t="function"==typeof r.next)?r.next().value:r())[1],i=c[0],0===f&&(f=be),o=f,a=0,!0===t)do{(c=r.next().value)&&(0===(a=c[1]+c[0]*a)&&(a=be),0===(o=c[1]+c[0]/o)&&(o=be),f*=u=o*(a=1/a))}while(p(u-1)>n&&--e);else do{(c=r())&&(0===(a=c[1]+c[0]*a)&&(a=be),0===(o=c[1]+c[0]/o)&&(o=be),f*=u=o*(a=1/a))}while(c&&p(u-1)>n&&--e);return i/f}function Ne(r,n,e){var t,u,i,f,o,a;if(0===(i=(a=(t="function"==typeof r.next)?r.next().value:r())[1])&&(i=be),f=i,o=0,!0===t)do{(a=r.next().value)&&(0===(o=a[1]+a[0]*o)&&(o=be),0===(f=a[1]+a[0]/f)&&(f=be),i*=u=f*(o=1/o))}while(a&&p(u-1)>n&&--e);else do{(a=r())&&(0===(o=a[1]+a[0]*o)&&(o=be),0===(f=a[1]+a[0]/f)&&(f=be),i*=u=f*(o=1/o))}while(a&&p(u-1)>n&&--e);return i}var de,me=1e6;function ge(r,n,e){var t,u,i,f,o,a;o=(a=r())[1],u=a[0],0===o&&(o=be),i=o,f=0;do{(a=r())&&(0===(f=a[1]+a[0]*f)&&(f=be),0===(i=a[1]+a[0]/i)&&(i=be),o*=t=i*(f=1/f))}while(a&&p(t-1)>n&&--e);return u/o}function Ae(r,n,e){var t,u,i,f,o;0===(f=(o=r())[1])&&(f=be),u=f,i=0;do{(o=r())&&(0===(i=o[1]+o[0]*i)&&(i=be),0===(u=o[1]+o[0]/u)&&(u=be),f*=t=u*(i=1/i))}while(o&&p(t-1)>n&&--e);return f}de=Jn()?function(r,n){var e,t,u;return t={},arguments.length>1&&(t=n),e=t.maxIter||we,u=t.tolerance||Qn,t.keep?Ne(r,u,e):he(r,u,e)}:function(r,n){var e,t,u;return t={},arguments.length>1&&(t=n),u=t.tolerance||Qn,e=t.maxIter||me,t.keep?Ae(r,u,e):ge(r,u,e)};var _e=de;function Ue(r,n){var e=function(r,n){var e=n-r+1,t=r,u=0;return function(){return[(u+=1)*(t-u),e+=2]}}(r,n);return 1/(n-r+1+_e(e))}function xe(r,n,e,t){var u,i,f,o,a,c,l,s,y,b,w,h,N;if(r<0||n<=0)return NaN;if(i=void 0===e||e,l=t,s=0,n>=170&&!i)return l&&4*n<r?(s=n*rr(r)-r,s+=rr(Ue(n,r))):!l&&n>4*r?(s=n*rr(r)-r,s+=rr(re(n,r,o=0)/n)):0===(s=xe(n,r,!0,l))?l?(s=rr(s=1+1/(12*n)+1/(288*n*n))-n+(n-.5)*rr(n),s+=rr(sn)):(s=n*rr(r)-r,s+=rr(re(n,r,o=0)/n)):s=rr(s)+cn(n),s>Wn?v:Vn(s);switch(n<30&&n<=r+1&&r<Wn?a=!(y=(h=nr(n))===n)&&.5===p(h-n):y=a=!1,y&&r>.6?(l=!l,f=0):a&&r>.2?(l=!l,f=1):r<1.4901161193847656e-8&&n>1?f=6:r<.5?f=-.4/rr(r)<n?2:3:r<1.1?f=.75*r<n?2:3:(c=!1,i&&n>20&&(b=p((r-n)/n),n>200?20/n>b*b&&(c=!0):b<.4&&(c=!0)),c?f=5:r-1/(3*r)<n?f=2:(f=4,l=!l)),f){case 0:s=function(r,n){var e,t,u;if(0!==(t=Vn(-n)))for(e=t,u=1;u<r;++u)e/=u,t+=e*=n;return t}(n,r),!1===i&&(s*=Ln(n));break;case 1:s=function(r,n){var e,t,u,i;if(0!==(u=qn(bn(n)))&&r>1){for(e=Vn(-n)/bn(fn*n),e*=n,t=e/=.5,i=2;i<r;++i)e/=i-.5,t+=e*=n;u+=t}return u}(n,r),!1===i&&(s*=Ln(n));break;case 2:0!==(s=i?ae(n,r):Rn(n,r))&&(o=0,u=!1,l&&(o=i?1:Ln(n),i||s>=1||Mn*s>o?(o/=s,i||n<1||Mn/n>o?(o*=-n,u=!0):o=0):o=0)),s*=re(n,r,o)/n,u&&(l=!1,s=-s);break;case 3:s=(w=pe(n,r,l=!l))[0],N=w[1],l=!1,i&&(s/=N);break;case 4:0!==(s=i?ae(n,r):Rn(n,r))&&(s*=Ue(n,r));break;case 5:s=function(r,n){var e,t,u,i,f;return i=r*(u=-rr(1+(t=(n-r)/r))+t),f=bn(2*u),n<r&&(f=-f),Bn[0]=function(r){return 0===r?-.3333333333333333:r*(.08333333333333333+r*(r*(.0011574074074074073+r*(.0003527336860670194+r*(r*(3919263178522438e-20+r*(r*(r*(8.296711340953087e-7+r*(r*(6.707853543401498e-9+r*(1.0261809784240309e-8+r*(9.14769958223679e-10*r-4.382036018453353e-9)))-1.7665952736826078e-7))-185406221071516e-20)-21854485106799924e-22))-.0001787551440329218)))-.014814814814814815))-.3333333333333333}(f),Bn[1]=function(r){return 0===r?-.001851851851851852:r*(r*(.0026455026455026454+r*(r*(.00020576131687242798+r*(r*(r*(764916091608111e-20+r*(r*(4.647127802807434e-9+r*(1.378633446915721e-7+r*(1.1951628599778148e-8*r-5.752545603517705e-8)))-16120900894563446e-22))-18098550334489977e-21)-4.018775720164609e-7))-.0009902263374485596))-.003472222222222222)-.001851851851851852}(f),Bn[2]=function(r){return 0===r?.004133597883597883:.004133597883597883+r*(r*(.0007716049382716049+r*(20093878600823047e-22+r*(r*(52923448829120125e-21+r*(r*(3.423578734096138e-8+r*(13721957309062932e-22+r*(1.4280614206064242e-7*r-6.298992138380055e-7)))-12760635188618728e-21))-.00010736653226365161)))-.0026813271604938273)}(f),Bn[3]=function(r){return 0===r?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(r*(.00026772063206283885+r*(r*(r*(11082654115347302e-21+r*(14230900732435883e-22*r-56749528269915965e-22))-2.396505113867297e-7)-7561801671883977e-20))-.0004691894943952557))}(f),Bn[4]=function(r){return 0===r?-.0008618882909167117:r*(.0007840392217200666+r*(r*(r*(6641498215465122e-20+r*(11375726970678419e-21*r-3968365047179435e-20))-14638452578843418e-22)-.0002990724803031902))-.0008618882909167117}(f),Bn[5]=function(r){return 0===r?-.00033679855336635813:r*(r*(.0002772753244959392+r*(r*(6797780477937208e-20+r*(1.419062920643967e-7+r*(r*(8018470256334202e-21+-2291481176508095e-21*r)-13594048189768693e-21)))-.00019932570516188847))-6972813758365858e-20)-.00033679855336635813}(f),Bn[6]=function(r){return 0===r?.0005313079364639922:.0005313079364639922+r*(r*(.0002708782096718045+r*(7.902353232660328e-7+r*(r*(561168275310625e-19+-18329116582843375e-21*r)-8153969367561969e-20)))-.0005921664373536939)}(f),Bn[7]=function(r){return 0===r?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(r*(.0002812695154763237+-.00010976582244684731*r)-.00033493161081142234))}(f),Bn[8]=function(r){return 0===r?-.0006526239185953094:r*(.0008394987206720873+-.000438297098541721*r)-.0006526239185953094}(f),Bn[9]=-.0005967612901927463,e=zn(Bn,1/r),e*=Vn(-i)/bn(6.283185307179586*r),n<r&&(e=-e),e+qn(bn(i))/2}(n,r),r>=n&&(l=!l);break;case 6:s=i?Fn(r,n)/Ln(n+1):Fn(r,n)/n,s*=1-n*r/(n+1)}return i&&s>1&&(s=1),l&&(s=(i?1:Ln(n))-s),s}function je(r,n,e){return l(r)||l(n)||l(e)||n<=0||e<=0?NaN:r<=0?0:xe(e/r,n,!0,!0)}return c(je,"factory",(function(r,n){return l(r)||l(n)||r<=0||n<=0?(e=NaN,function(){return e}):function(e){return l(e)?NaN:e<=0?0:xe(n/e,r,!0,!0)};var e})),je},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).cdf=n();
//# sourceMappingURL=browser.js.map
