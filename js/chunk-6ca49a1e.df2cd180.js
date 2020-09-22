(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ca49a1e"],{"571a":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[a("NavTabs"),t.isLoading?a("Spinner"):[a("h1",{staticClass:"mt-5"},[t._v("人氣餐廳")]),a("hr"),t._l(t.restaurants,(function(e){return a("div",{key:e.id,staticClass:"card mb-3",staticStyle:{"max-width":"540px",margin:"auto"}},[a("div",{staticClass:"row no-gutters"},[a("div",{staticClass:"col-md-4"},[a("router-link",{attrs:{to:{name:"restaurant",params:{id:e.id}}}},[a("img",{staticClass:"card-img",attrs:{src:e.image}})])],1),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(e.name))]),a("span",{staticClass:"badge badge-secondary"},[t._v("收藏數："+t._s(e.FavoriteCount))]),a("p",{staticClass:"card-text"},[t._v(t._s(e.description))]),a("router-link",{staticClass:"btn btn-primary mr-2",attrs:{to:{name:"restaurant",params:{id:e.id}}}},[t._v("Show")]),e.isFavorited?a("button",{staticClass:"btn btn-danger mr-2",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.deleteFavorite(e.id)}}},[t._v("移除最愛")]):a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.addFavorite(e.id)}}},[t._v("加到最愛")])],1)])])])}))]],2)},n=[],s=(a("d81d"),a("96cf"),a("1da1")),i=a("8bb1"),c=a("2375"),o=a("c4c3"),u=a("4cce"),d=a("2fa3"),p={components:{NavTabs:i["a"],Spinner:c["a"]},created:function(){this.fetchTopRestaurants()},data:function(){return{restaurants:[],isLoading:!0}},methods:{fetchTopRestaurants:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.isLoading=!0,e.next=4,o["a"].getTopRestaurants();case 4:if(a=e.sent,t.isLoading=!1,"OK"===a.statusText){e.next=8;break}throw new Error("無法取得熱門餐廳，請稍後再試");case 8:t.restaurants=a.data.restaurants,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),d["a"].fire({icon:"error",title:e.t0});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()},addFavorite:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,u["a"].addFavorite(t);case 3:if(r=a.sent,"success"===r.data.status){a.next=6;break}throw new Error("無法將餐廳加入最愛，請稍後再試");case 6:e.restaurants.map((function(e){e.id===t&&(e.isFavorited=!0,e.FavoriteCount++)})),a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](0),d["a"].fire({icon:"error",title:a.t0});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})))()},deleteFavorite:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,u["a"].deleteFavorite(t);case 3:if(r=a.sent,"success"===r.data.status){a.next=6;break}throw new Error("無法將餐廳加入最愛，請稍後再試");case 6:e.restaurants.map((function(e){e.id===t&&(e.isFavorited=!1,e.FavoriteCount--)})),a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](0),d["a"].fire({icon:"error",title:a.t0});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})))()}}},l=p,v=a("2877"),m=Object(v["a"])(l,r,n,!1,null,null,null);e["default"]=m.exports},d81d:function(t,e,a){"use strict";var r=a("23e7"),n=a("b727").map,s=a("1dde"),i=a("ae40"),c=s("map"),o=i("map");r({target:"Array",proto:!0,forced:!c||!o},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-6ca49a1e.df2cd180.js.map