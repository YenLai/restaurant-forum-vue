(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-452696c7"],{"12b2":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit(e)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[t._v("Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.name,expression:"restaurant.name"}],staticClass:"form-control",attrs:{id:"name",type:"text",name:"name",placeholder:"Enter name",required:""},domProps:{value:t.restaurant.name},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"name",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"categoryId"}},[t._v("Category")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.categoryId,expression:"restaurant.categoryId"}],staticClass:"form-control",attrs:{id:"CategoryId",name:"CategoryId",required:""},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.restaurant,"categoryId",e.target.multiple?r:r[0])}}},t._l(t.categories,(function(e){return r("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])})),0)]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"tel"}},[t._v("Tel")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.tel,expression:"restaurant.tel"}],staticClass:"form-control",attrs:{id:"tel",type:"text",name:"tel",placeholder:"Enter telephone number"},domProps:{value:t.restaurant.tel},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"tel",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"address"}},[t._v("Address")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.address,expression:"restaurant.address"}],staticClass:"form-control",attrs:{id:"address",type:"text",placeholder:"Enter address",name:"address"},domProps:{value:t.restaurant.address},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"address",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"opening-hours"}},[t._v("Opening Hours")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.openingHours,expression:"restaurant.openingHours"}],staticClass:"form-control",attrs:{id:"opening-hours",type:"time",name:"opening_hours"},domProps:{value:t.restaurant.openingHours},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"openingHours",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"description"}},[t._v("Description")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.description,expression:"restaurant.description"}],staticClass:"form-control",attrs:{id:"description",rows:"3",name:"description"},domProps:{value:t.restaurant.description},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"description",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"image"}},[t._v("Image")]),t.restaurant.image?r("img",{staticClass:"d-block img-thumbnail mb-3",attrs:{src:t.restaurant.image,width:"200",height:"200"}}):t._e(),r("input",{staticClass:"form-control-file",attrs:{id:"image",type:"file",name:"image",accept:"image/*"},on:{change:t.handleFileChange}})]),r("button",{staticClass:"btn btn-primary",attrs:{disabled:t.isProcessing,type:"submit"}},[t._v("送出")])])},n=[],s=(r("d3b7"),r("3ca3"),r("ddb0"),r("2b3d"),r("96cf"),r("1da1")),i=r("5530"),o=r("be6c"),u=r("2fa3"),c={props:{isProcessing:{type:Boolean,required:!0},initialRestaurant:{type:Object,default:function(){return{name:"",categoryId:"",tel:"",address:"",description:"",image:"",openingHours:""}}}},data:function(){return{restaurant:{name:"",categoryId:"",tel:"",address:"",description:"",image:"",openingHours:""},categories:[]}},created:function(){this.fetchCategories(),this.restaurant=Object(i["a"])(Object(i["a"])({},this.restaurant),this.initialRestaurant)},watch:{initialRestaurant:function(){this.restaurant=Object(i["a"])(Object(i["a"])({},this.restaurant),this.initialRestaurant)}},methods:{fetchCategories:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o["a"].getCategories();case 3:if(r=e.sent,"OK"===r.statusText){e.next=6;break}throw new Error("無法取得餐廳類別，請稍後再試");case 6:t.categories=r.data.categories,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),u["a"].fire({icon:"error",title:e.t0});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},handleFileChange:function(t){var e=t.target.files;if(0===e.length)this.restaurant.image="";else{var r=window.URL.createObjectURL(e[0]);this.restaurant.image=r}},handleSubmit:function(t){this.isProcessing=!0;var e=t.target,r=new FormData(e);this.$emit("after-submit",r)}}},l=c,d=r("2877"),m=Object(d["a"])(l,a,n,!1,null,null,null);e["a"]=m.exports},6945:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container py-5"},[r("AdminRestaurantForm",{attrs:{"initial-restaurant":t.restaurant,isProcessing:t.isProcessing},on:{"after-submit":t.handleAfterSubmit}})],1)},n=[],s=(r("a4d3"),r("e01a"),r("b0c0"),r("5530")),i=(r("96cf"),r("1da1")),o=r("12b2"),u=r("be6c"),c=r("2fa3"),l={components:{AdminRestaurantForm:o["a"]},created:function(){var t=this.$route.params.id;this.fetchRestaurant(t)},data:function(){return{restaurant:{id:-1,name:"",categoryId:"",tel:"",address:"",description:"",image:"",openingHours:""},isProcessing:!1}},methods:{fetchRestaurant:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n,i,o,l,d,m,p,g,f;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u["a"].getRestaurant(t);case 3:if(a=r.sent,"OK"===a.statusText){r.next=6;break}throw new Error("無法取得餐廳資料，請稍後再試");case 6:n=a.data.restaurant,i=n.id,o=n.name,l=n.tel,d=n.address,m=n.opening_hours,p=n.description,g=n.image,f=n.Category,e.restaurant=Object(s["a"])(Object(s["a"])({},e.restaurant),{},{id:i,name:o,categoryId:f.id,image:g,openingHours:m,tel:l,address:d,description:p}),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),c["a"].fire({icon:"error",title:r.t0});case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()},handleAfterSubmit:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u["a"].putRestaurant(e.restaurant.id,t);case 3:if(a=r.sent,"success"===a.data.status){r.next=6;break}throw new Error(a.data.message);case 6:e.$router.push("/admin/restaurants/".concat(e.restaurant.id)),r.next=13;break;case 9:r.prev=9,r.t0=r["catch"](0),e.isProcessing=!1,c["a"].fire({icon:"error",title:r.t0});case 13:case"end":return r.stop()}}),r,null,[[0,9]])})))()}}},d=l,m=r("2877"),p=Object(m["a"])(d,a,n,!1,null,null,null);e["default"]=p.exports},be6c:function(t,e,r){"use strict";var a=r("2fa3");e["a"]={getUsers:function(){return a["b"].get("/admin/users")},putUser:function(t){return a["b"].put("/admin/users/".concat(t),null)},getRestaurants:function(){return a["b"].get("/admin/restaurants")},getRestaurant:function(t){return a["b"].get("/admin/restaurants/".concat(t))},postRestaurant:function(t){return a["b"].post("/admin/restaurants",t)},putRestaurant:function(t,e){return a["b"].put("/admin/restaurants/".concat(t),e)},deleteRestaurant:function(t){return a["b"].delete("/admin/restaurants/".concat(t))},getCategories:function(){return a["b"].get("/admin/categories")},postCategory:function(t){return a["b"].post("/admin/categories",t)},putCategory:function(t,e){return a["b"].put("/admin/categories/".concat(t),e)},deleteCategory:function(t){return a["b"].delete("/admin/categories/".concat(t))}}},e01a:function(t,e,r){"use strict";var a=r("23e7"),n=r("83ab"),s=r("da84"),i=r("5135"),o=r("861d"),u=r("9bf2").f,c=r("e893"),l=s.Symbol;if(n&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var d={},m=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof m?new l(t):void 0===t?l():l(t);return""===t&&(d[e]=!0),e};c(m,l);var p=m.prototype=l.prototype;p.constructor=m;var g=p.toString,f="Symbol(test)"==String(l("test")),v=/^Symbol\((.*)\)[^)]+$/;u(p,"description",{configurable:!0,get:function(){var t=o(this)?this.valueOf():this,e=g.call(t);if(i(d,t))return"";var r=f?e.slice(7,-1):e.replace(v,"$1");return""===r?void 0:r}}),a({global:!0,forced:!0},{Symbol:m})}}}]);
//# sourceMappingURL=chunk-452696c7.af4a6e8b.js.map