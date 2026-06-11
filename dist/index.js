"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=c(function(R,f){
var v=require('@stdlib/math-base-special-gammainc/dist'),n=require('@stdlib/math-base-assert-is-nan/dist');function N(e,r,t){return n(e)||n(r)||n(t)||r<=0||t<=0?NaN:e<=0?0:v(t/e,r,!0,!0)}f.exports=N
});var o=c(function(j,a){
var m=require('@stdlib/utils-constant-function/dist'),y=require('@stdlib/math-base-special-gammainc/dist'),i=require('@stdlib/math-base-assert-is-nan/dist');function d(e,r){if(i(e)||i(r)||e<=0||r<=0)return m(NaN);return t;function t(u){return i(u)?NaN:u<=0?0:y(r/u,e,!0,!0)}}a.exports=d
});var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=s(),F=o();g(q,"factory",F);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
