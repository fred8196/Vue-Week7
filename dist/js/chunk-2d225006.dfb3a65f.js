(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d225006"],{e313:function(e,t,c){"use strict";c.r(t);var a=c("7a23"),o={class:"container"},n={class:"navbar navbar-expand-lg navbar-dark bg-dark"},r={class:"collapse navbar-collapse",id:"navbarText"},i={class:"navbar-nav mr-auto"},s={class:"nav-item active"},u=Object(a["createTextVNode"])("產品管理列表"),l={class:"nav-item active"},d=Object(a["createTextVNode"])("訂單管理列表"),b={class:"nav-item active"},v=Object(a["createTextVNode"])("優惠券列表"),j={class:"nav-item active"},O=Object(a["createTextVNode"])("返回前台");function h(e,t,c,h,p,m){var k=Object(a["resolveComponent"])("router-link"),f=Object(a["resolveComponent"])("router-view");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])("div",o,[Object(a["createVNode"])("nav",n,[Object(a["createVNode"])("div",r,[Object(a["createVNode"])("ul",i,[Object(a["createVNode"])("li",s,[Object(a["createVNode"])(k,{to:"/admin/products",class:"nav-link"},{default:Object(a["withCtx"])((function(){return[u]})),_:1})]),Object(a["createVNode"])("li",l,[Object(a["createVNode"])(k,{to:"/admin/orders",class:"nav-link"},{default:Object(a["withCtx"])((function(){return[d]})),_:1})]),Object(a["createVNode"])("li",b,[Object(a["createVNode"])(k,{to:"/admin/coupons",class:"nav-link"},{default:Object(a["withCtx"])((function(){return[v]})),_:1})]),Object(a["createVNode"])("li",j,[Object(a["createVNode"])(k,{to:"/products",class:"nav-link"},{default:Object(a["withCtx"])((function(){return[O]})),_:1})])])])])]),p.loginStatus?(Object(a["openBlock"])(),Object(a["createBlock"])(f,{key:0})):Object(a["createCommentVNode"])("",!0)],64)}c("ac1f"),c("5319");var p=c("1940"),m=c.n(p),k={data:function(){return{loginStatus:!1}},methods:{checkLogin:function(){var e=this,t=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=t;var c="".concat("https://vue3-course-api.hexschool.io","/api/user/check");this.$http.post(c).then((function(t){t.data.success?(e.loginStatus=!0,e.$router.push("/admin/products")):(e.loginStatus=!1,m()({title:t.data.message,icon:"error",button:!1,timer:1e3}),setTimeout((function(){e.$router.push("../Login")}),1e3))})).catch((function(e){console.log(e)}))}},created:function(){this.checkLogin()}};k.render=h;t["default"]=k}}]);
//# sourceMappingURL=chunk-2d225006.dfb3a65f.js.map