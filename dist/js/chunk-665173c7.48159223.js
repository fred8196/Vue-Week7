(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-665173c7"],{"168c":function(e,t,c){"use strict";c.r(t);c("b0c0");var a=c("7a23"),r={class:"container"},o={class:"text-end mt-3"},l={class:"table align-middle mt-4"},n=Object(a["createVNode"])("thead",null,[Object(a["createVNode"])("tr",null,[Object(a["createVNode"])("th",null,"購買日期"),Object(a["createVNode"])("th",null,"購買人"),Object(a["createVNode"])("th",null,"Email"),Object(a["createVNode"])("th",null,"電話"),Object(a["createVNode"])("th",null,"應付金額"),Object(a["createVNode"])("th",null,"付款狀態"),Object(a["createVNode"])("th",null,"訂單操作")])],-1),d={class:"form-check form-switch"},i={key:0},s={key:1},b={class:"btn-group"},u={key:1},O=Object(a["createVNode"])("td",{colspan:"8",class:"text-center"},"目前無任何訂單",-1);function p(e,t,c,p,j,h){var m=Object(a["resolveComponent"])("Loading"),V=Object(a["resolveComponent"])("OrderModal"),N=Object(a["resolveComponent"])("DelModal"),g=Object(a["resolveComponent"])("Pagination");return Object(a["openBlock"])(),Object(a["createBlock"])("div",r,[Object(a["createVNode"])(m,{active:j.isLoading},null,8,["active"]),Object(a["createVNode"])("div",o,[Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-danger",onClick:t[1]||(t[1]=function(){return h.delOrders&&h.delOrders.apply(h,arguments)})}," 刪除全部訂單 ")]),Object(a["createVNode"])("table",l,[n,Object(a["createVNode"])("tbody",null,[j.orders.length?(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],{key:0},Object(a["renderList"])(j.orders,(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])("tr",{key:t.id},[Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(e.$filters.date(t.create_at)),1),Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(t.user.name),1),Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(t.user.email),1),Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(t.user.tel),1),Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(e.$filters.currency(t.total)),1),Object(a["createVNode"])("td",null,[Object(a["createVNode"])("div",d,[Object(a["withDirectives"])(Object(a["createVNode"])("input",{class:"form-check-input text-center",type:"checkbox",id:"paidSwitch".concat(t.id),"onUpdate:modelValue":function(e){return t.is_paid=e},onChange:function(e){return h.updateOrderPaid(t)}},null,40,["id","onUpdate:modelValue","onChange"]),[[a["vModelCheckbox"],t.is_paid]]),Object(a["createVNode"])("label",{class:"form-check-label",for:"paidSwitch".concat(t.id)},[t.is_paid?(Object(a["openBlock"])(),Object(a["createBlock"])("span",i,"已付款")):(Object(a["openBlock"])(),Object(a["createBlock"])("span",s,"未付款"))],8,["for"])])]),Object(a["createVNode"])("td",null,[Object(a["createVNode"])("div",b,[Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:function(e){return h.openModal(t)}}," 檢視 ",8,["onClick"]),Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:function(e){return h.openDelModal(t)}}," 刪除 ",8,["onClick"])])])])})),128)):(Object(a["openBlock"])(),Object(a["createBlock"])("tr",u,[O]))])]),Object(a["createVNode"])(V,{order:j.tempOrder,ref:"orderModal",onUpdateOrderPaid:h.updateOrderPaid},null,8,["order","onUpdateOrderPaid"]),Object(a["createVNode"])(N,{order:j.tempOrder,ref:"delModal",onDelItem:h.delOrder},null,8,["order","onDelItem"]),Object(a["createVNode"])(g,{pages:j.pagination,onUpdatePage:h.getOrders},null,8,["pages","onUpdatePage"])])}var j=c("5530"),h=(c("99af"),c("6ff1")),m={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},V={class:"modal-dialog modal-xl",role:"document"},N={class:"modal-content border-0"},g=Object(a["createVNode"])("div",{class:"modal-header bg-dark text-white"},[Object(a["createVNode"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(a["createVNode"])("span",null,"訂單細節")]),Object(a["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),f={class:"modal-body"},k={class:"row"},y={class:"col-md-4"},v=Object(a["createVNode"])("h3",null,"客戶資料",-1),B={class:"table"},x={key:0},M=Object(a["createVNode"])("th",{style:{width:"100px"}},"姓名",-1),D=Object(a["createVNode"])("th",null,"Email",-1),_=Object(a["createVNode"])("th",null,"電話",-1),w=Object(a["createVNode"])("th",null,"地址",-1),C={class:"col-md-8"},S=Object(a["createVNode"])("h3",null,"訂單細節",-1),P={class:"table"},$=Object(a["createVNode"])("th",{style:{width:"100px"}},"訂單編號",-1),L=Object(a["createVNode"])("th",null,"下單時間",-1),U=Object(a["createVNode"])("th",null,"付款時間",-1),F={key:0,class:"text-success"},E={key:1,class:"text-danger"},I=Object(a["createVNode"])("th",null,"付款狀態",-1),J={key:0,class:"text-success"},q={key:1,class:"text-danger"},z=Object(a["createVNode"])("th",null,"總金額",-1),A=Object(a["createVNode"])("h3",null,"選購商品",-1),G={class:"table"},H=Object(a["createVNode"])("thead",null,[Object(a["createVNode"])("tr")],-1),K={class:"text-end"},Q={class:"d-flex justify-content-end"},R={class:"form-check"},T={class:"form-check-label",for:"flexCheckDefault"},W={key:0,class:"text-success"},X={key:1,class:"text-danger"},Y={class:"modal-footer"},Z=Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function ee(e,t,c,r,o,l){return Object(a["openBlock"])(),Object(a["createBlock"])("div",m,[Object(a["createVNode"])("div",V,[Object(a["createVNode"])("div",N,[g,Object(a["createVNode"])("div",f,[Object(a["createVNode"])("div",k,[Object(a["createVNode"])("div",y,[v,Object(a["createVNode"])("table",B,[o.tempOrder.user?(Object(a["openBlock"])(),Object(a["createBlock"])("tbody",x,[Object(a["createVNode"])("tr",null,[M,Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(o.tempOrder.user.name),1)]),Object(a["createVNode"])("tr",null,[D,Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(o.tempOrder.user.email),1)]),Object(a["createVNode"])("tr",null,[_,Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(o.tempOrder.user.tel),1)]),Object(a["createVNode"])("tr",null,[w,Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(o.tempOrder.user.address),1)])])):Object(a["createCommentVNode"])("",!0)])]),Object(a["createVNode"])("div",C,[S,Object(a["createVNode"])("table",P,[Object(a["createVNode"])("tbody",null,[Object(a["createVNode"])("tr",null,[$,Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(o.tempOrder.id),1)]),Object(a["createVNode"])("tr",null,[L,Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(e.$filters.date(o.tempOrder.create_at)),1)]),Object(a["createVNode"])("tr",null,[U,Object(a["createVNode"])("td",null,[o.tempOrder.paid_date?(Object(a["openBlock"])(),Object(a["createBlock"])("span",F,Object(a["toDisplayString"])(e.$filters.date(o.tempOrder.paid_date)),1)):(Object(a["openBlock"])(),Object(a["createBlock"])("span",E,"尚未付款"))])]),Object(a["createVNode"])("tr",null,[I,Object(a["createVNode"])("td",null,[o.tempOrder.is_paid?(Object(a["openBlock"])(),Object(a["createBlock"])("strong",J,"已付款")):(Object(a["openBlock"])(),Object(a["createBlock"])("span",q,"尚未付款"))])]),Object(a["createVNode"])("tr",null,[z,Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(e.$filters.currency(o.tempOrder.total)),1)])])]),A,Object(a["createVNode"])("table",G,[H,Object(a["createVNode"])("tbody",null,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(o.tempOrder.products,(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])("tr",{key:t.id},[Object(a["createVNode"])("th",null,Object(a["toDisplayString"])(t.product.title),1),Object(a["createVNode"])("td",null,Object(a["toDisplayString"])(t.qty)+" / "+Object(a["toDisplayString"])(t.product.unit),1),Object(a["createVNode"])("td",K,Object(a["toDisplayString"])(e.$filters.currency(t.final_total)),1)])})),128))])]),Object(a["createVNode"])("div",Q,[Object(a["createVNode"])("div",R,[Object(a["withDirectives"])(Object(a["createVNode"])("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.tempOrder.is_paid=e})},null,512),[[a["vModelCheckbox"],o.tempOrder.is_paid]]),Object(a["createVNode"])("label",T,[o.tempOrder.is_paid?(Object(a["openBlock"])(),Object(a["createBlock"])("span",W,"已付款")):(Object(a["openBlock"])(),Object(a["createBlock"])("span",X,"未付款"))])])])])])]),Object(a["createVNode"])("div",Y,[Z,Object(a["createVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[2]||(t[2]=function(t){return e.$emit("update-order-paid",o.tempOrder)})}," 修改付款狀態 ")])])])],512)}var te=c("7c2b"),ce=c.n(te),ae={props:{order:{type:Object,default:function(){return{}}}},data:function(){return{status:{},modal:"",tempOrder:{}}},watch:{order:function(){this.tempOrder=this.order}},methods:{openModal:function(){this.modal.show()},closeModal:function(){this.modal.hide()}},mounted:function(){this.modal=new ce.a(this.$refs.modal)}};ae.render=ee;var re=ae,oe=c("1799"),le=c("1940"),ne=c.n(le),de={data:function(){return{orders:[],tempOrder:{},pagination:{},currentPage:1,isLoading:!1}},components:{Pagination:oe["a"],DelModal:h["a"],OrderModal:re},methods:{getOrders:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0,this.currentPage=t;var c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("fred8196","/admin/orders?page=").concat(t);this.$http(c).then((function(t){t.data.success?(e.pagination=t.data.pagination,e.orders=t.data.orders,e.isLoading=!1):console.log(t)})).catch((function(e){console.log(e)}))},updateOrderPaid:function(e){var t=this,c={is_paid:e.is_paid,paid_date:null};c.is_paid&&(c.paid_date=Math.floor(Date.now()/1e3));var a=this.$refs.orderModal,r="".concat("https://vue3-course-api.hexschool.io","/api/").concat("fred8196","/admin/order/").concat(e.id);this.$http.put(r,{data:c}).then((function(e){e.data.success?(ne()({title:e.data.message,icon:"success",button:!1,timer:1e3}),a.closeModal(),t.getOrders(t.currentPage)):console.log(e.data.message)}))},openModal:function(e){this.tempOrder=Object(j["a"])({},e);var t=this.$refs.orderModal;t.openModal()},openDelModal:function(e){this.tempOrder=Object(j["a"])({},e);var t=this.$refs.delModal;t.openModal()},delOrder:function(){var e=this,t=this.$refs.delModal,c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("fred8196","/admin/order/").concat(this.tempOrder.id);this.$http.delete(c).then((function(c){c.data.success&&(ne()({title:c.data.message,icon:"success",button:!1,timer:1e3}),t.closeModal(),e.getOrders(e.currentPage))}))},delOrders:function(){var e=this,t=this.$refs.delModal,c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("fred8196","/admin/orders/all");this.$http.delete(c).then((function(c){c.data.success&&(ne()({title:c.data.message,icon:"success",button:!1,timer:1e3}),t.closeModal(),e.getOrders())}))}},mounted:function(){this.getOrders()}};de.render=p;t["default"]=de},1799:function(e,t,c){"use strict";var a=c("7a23"),r={"aria-label":"Page navigation example"},o={class:"pagination"},l=Object(a["createVNode"])("span",{"aria-hidden":"true"},"«",-1),n=Object(a["createVNode"])("span",{"aria-hidden":"true"},"»",-1);function d(e,t,c,d,i,s){return Object(a["openBlock"])(),Object(a["createBlock"])("nav",r,[Object(a["createVNode"])("ul",o,[Object(a["createVNode"])("li",{class:["page-item",{disabled:!c.pages.has_pre}]},[Object(a["createVNode"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[1]||(t[1]=Object(a["withModifiers"])((function(e){return s.updatePage(c.pages.current_page-1)}),["prevent"]))},[l])],2),(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(c.pages.total_pages,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])("li",{class:["page-item",{active:e===c.pages.current_page}],key:e},[Object(a["createVNode"])("a",{class:"page-link",href:"#",onClick:Object(a["withModifiers"])((function(t){return s.updatePage(e)}),["prevent"])},Object(a["toDisplayString"])(e),9,["onClick"])],2)})),128)),Object(a["createVNode"])("li",{class:["page-item",{disabled:!c.pages.has_next}]},[Object(a["createVNode"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[2]||(t[2]=Object(a["withModifiers"])((function(e){return s.updatePage(c.pages.current_page+1)}),["prevent"]))},[n])],2)])])}var i={props:{pages:{type:Object,default:function(){return{}}}},methods:{updatePage:function(e){this.$emit("update-page",e)}}};i.render=d;t["a"]=i},b0c0:function(e,t,c){var a=c("83ab"),r=c("9bf2").f,o=Function.prototype,l=o.toString,n=/^\s*function ([^ (]*)/,d="name";a&&!(d in o)&&r(o,d,{configurable:!0,get:function(){try{return l.call(this).match(n)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-665173c7.48159223.js.map