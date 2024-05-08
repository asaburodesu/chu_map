(this["webpackJsonpgeolonia-pwa"]=this["webpackJsonpgeolonia-pwa"]||[]).push([[0],{109:function(e,t,n){},112:function(e,t,n){},113:function(e,t,n){},136:function(e,t,n){},137:function(e,t,n){},138:function(e,t,n){},139:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(31),s=n.n(r),i=n(11),o=n(29),l=n(7),d=n(38),j=n(30),u=n.n(j),h=n(6),b=(n(79),n(61)),p=n.n(b),f=function(e){var t={type:"FeatureCollection",features:[]};for(var n in e){var a=e[n];if(!a["\u7d4c\u5ea6"]||!a["\u7def\u5ea6"]||!a["\u30b9\u30dd\u30c3\u30c8\u540d"])return;for(var c={type:"Feature",geometry:{type:"Point",coordinates:[Number(a["\u7d4c\u5ea6"]),Number(a["\u7def\u5ea6"])]},properties:{_id:n}},r=0;r<Object.keys(a).length;r++){var s=Object.keys(a)[r];c.properties[s]=a[s]}t.features.push(c)}return t},x=function(e){e.addLayer({id:"clusters",type:"circle",source:"shops",filter:["has","point_count"],paint:{"circle-radius":20,"circle-color":"#FF0000","circle-opacity":1}}),e.addLayer({id:"cluster-count",type:"symbol",source:"shops",filter:["has","point_count"],paint:{"text-color":"#FFFFFF"},layout:{"text-field":"{point_count_abbreviated} \u4ef6","text-size":12,"text-font":["Noto Sans Regular"]}}),e.on("click","clusters",(function(t){var n=e.queryRenderedFeatures(t.point,{layers:["clusters"]}),a=n[0].properties.cluster_id;e.getSource("shops").getClusterExpansionZoom(a,(function(t,a){t||e.easeTo({center:n[0].geometry.coordinates,zoom:a})}))})),e.on("mouseenter","clusters",(function(){e.getCanvas().style.cursor="pointer"})),e.on("mouseleave","clusters",(function(){e.getCanvas().style.cursor=""}))},O=n(18),m=(n(86),n(2)),g=function(e){e.stopPropagation()},v=function(e){return Object(m.jsxs)("div",{className:"links",children:[e.data.Instagram?Object(m.jsx)("div",{className:"link",children:Object(m.jsx)("a",{href:"https://instagram.com/".concat(e.data.Instagram),children:Object(m.jsx)(O.d,{onClick:g,size:"20px"})})}):"",e.data.Twitter?Object(m.jsx)("div",{className:"link",children:Object(m.jsx)("a",{href:e.data.Twitter,children:Object(m.jsx)(O.h,{onClick:g,size:"20px"})})}):"",e.data.Facebook?Object(m.jsx)("div",{className:"link",children:Object(m.jsx)("a",{href:"https://www.facebook.com/".concat(e.data.Facebook),children:Object(m.jsx)(O.b,{onClick:g,size:"20px"})})}):"",e.data["\u516c\u5f0f\u30b5\u30a4\u30c8"]?Object(m.jsx)("div",{className:"link",children:Object(m.jsx)("a",{href:e.data["\u516c\u5f0f\u30b5\u30a4\u30c8"],children:Object(m.jsx)(O.c,{onClick:g,size:"20px"})})}):""]})},N=(n(88),n(39)),w=function(e){var t="";return"number"!==typeof e||Number.isNaN(e)||(t=e>1e3?Math.round(e/1e3)+" km":Math.round(e)+" m"),t},y=function(e){var t=c.a.useRef(null),n=c.a.useState(null),a=Object(l.a)(n,2),r=a[0],s=a[1],o=e.shop,d=function(){e.close(),t.current&&(t.current.remove(),r.remove())};c.a.useEffect((function(){if(t.current){var e=new window.geolonia.Map({container:t.current,interactive:!1,zoom:14,style:"geolonia/gsi"});s(e)}}),[o,t]);var j,u=w(o.distance),h=o["\u30ab\u30c6\u30b4\u30ea"],b=o["\u7d39\u4ecb\u6587"];return Object(m.jsxs)("div",{className:"shop-single",children:[Object(m.jsx)("div",{className:"head",children:Object(m.jsxs)("button",{onClick:d,children:[Object(m.jsx)(N.b,{size:"16px",color:"#FFFFFF"})," \u9589\u3058\u308b"]})}),Object(m.jsx)("div",{className:"container",children:o?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h2",{children:o["\u30b9\u30dd\u30c3\u30c8\u540d"]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{className:"nowrap",children:Object(m.jsx)(i.b,{to:"/list?category=".concat(h),children:Object(m.jsx)("span",{onClick:d,className:"category",children:h})})}),Object(m.jsx)("span",{className:"nowrap",children:u&&Object(m.jsxs)("span",{className:"distance",children:["\u73fe\u5728\u4f4d\u7f6e\u304b\u3089 ",u]})})]}),Object(m.jsx)("div",{style:{margin:"24px 0"},children:Object(m.jsx)(v,{data:o})}),o["\u753b\u50cf"]&&Object(m.jsx)("img",{src:o["\u753b\u50cf"],alt:o["\u30b9\u30dd\u30c3\u30c8\u540d"],style:{width:"100%"}}),Object(m.jsx)("p",{style:{margin:"24px 0",wordBreak:"break-all"},children:(j=b,j.split(/(\r\n)|(\n)|(\r)/g).map((function(e,t){var n="";return"\r\n"===e||"\n"===e||"\r"===e?n=Object(m.jsx)("br",{},t):void 0!==e&&(n=e),n})))}),Object(m.jsx)("div",{ref:t,style:{width:"100%",height:"200px",marginTop:"24px"},"data-lat":o["\u7def\u5ea6"],"data-lng":o["\u7d4c\u5ea6"],"data-navigation-control":"off"}),Object(m.jsx)("p",{children:Object(m.jsx)("a",{className:"small",href:"http://maps.apple.com/?q=".concat(o["\u7def\u5ea6"],",").concat(o["\u7d4c\u5ea6"]),children:"\u30b9\u30dd\u30c3\u30c8\u307e\u3067\u306e\u9053\u9806"})})]}):Object(m.jsx)(m.Fragment,{})})]})},k={width:"100%",height:"100%",position:"relative"},F=function(e){for(var t=["poi","poi-primary","poi-r0-r9","poi-r10-r24","poi-r25","poi-bus","poi-entrance"],n=0;n<t.length;n++){var a=t[n];e.setLayoutProperty(a,"visibility","none")}},C=function(e){var t=(e||window.location).hash.substring(2);return new URLSearchParams(t)},S=function(e){var t=c.a.useRef(null),n=c.a.useState(),a=Object(l.a)(n,2),r=a[0],s=a[1],i=c.a.useState(void 0),o=Object(l.a)(i,2),d=o[0],j=o[1],u=c.a.useState(""),h=Object(l.a)(u,2),b=h[0],O=h[1];c.a.useEffect((function(){!function(e,t){e&&t&&e.on("render",(function(){if(!e.getSource("shops")){F(e);var n=f(t);e.addSource("shops",{type:"geojson",data:n,cluster:!0,clusterMaxZoom:14,clusterRadius:25}),e.addLayer({id:"shop-points",type:"circle",source:"shops",filter:["all",["==","$type","Point"]],paint:{"circle-radius":13,"circle-color":"#FF0000","circle-opacity":.4,"circle-stroke-width":2,"circle-stroke-color":"#FFFFFF","circle-stroke-opacity":1}}),e.addLayer({id:"shop-symbol",type:"symbol",source:"shops",filter:["all",["==","$type","Point"]],paint:{"text-color":"#000000","text-halo-color":"#FFFFFF","text-halo-width":2},layout:{"text-field":"{\u30b9\u30dd\u30c3\u30c8\u540d}","text-font":["Noto Sans Regular"],"text-variable-anchor":["top","bottom","left","right"],"text-radial-offset":.5,"text-justify":"auto","text-size":12,"text-anchor":"top","text-max-width":12,"text-allow-overlap":!1}}),e.on("mouseenter","shop-points",(function(){e.getCanvas().style.cursor="pointer"})),e.on("mouseleave","shop-points",(function(){e.getCanvas().style.cursor=""})),e.on("mouseenter","shop-symbol",(function(){e.getCanvas().style.cursor="pointer"})),e.on("mouseleave","shop-symbol",(function(){e.getCanvas().style.cursor=""})),e.on("click","shop-points",(function(e){e.features[0].properties.cluster||j(e.features[0].properties)})),e.on("click","shop-symbol",(function(e){e.features[0].properties.cluster||j(e.features[0].properties)})),x(e)}}))}(r,e.data)}),[r,e.data]),c.a.useEffect((function(){var e,t=C();b&&t.set("map",b),(e=t).toString()&&(window.location.hash="#/?".concat(e.toString().replace(/%2F/g,"/")))}),[b]),c.a.useEffect((function(){if(t.current&&!r){var n=window.geolonia,a=f(e.data),c=p()(a),i=new n.Map({container:t.current,style:"geolonia/gsi",bounds:c,fitBoundsOptions:{padding:50}}),o=C();if(o&&o.get("map")){var l=(o.get("map")||"").split("/"),d=l[0],j=l[1],u=l[2];i.flyTo({center:[u,j],zoom:d})}else c&&i.fitBounds(c,{padding:50});var h=function(){F(i),s(i),i.on("moveend",(function(){var e=i.getCenter(),t=i.getZoom(),n=Math.round(100*t)/100,a=Math.ceil((n*Math.LN2+Math.log(512/360/.5))/Math.LN10),c=Math.pow(10,a),r=Math.round(e.lng*c)/c,s=Math.round(e.lat*c)/c,o=Math.ceil(n);O("".concat(o,"/").concat(s,"/").concat(r))}))},b=function(){i.resize()};return i.on("load",h),window.addEventListener("orientationchange",b),function(){window.removeEventListener("orientationchange",b),i.off("load",h)}}}),[t,r,e.data]);return Object(m.jsxs)("div",{style:k,children:[Object(m.jsx)("div",{ref:t,style:k,"data-geolocate-control":"on","data-marker":"off","data-gesture-handling":"off"}),d?Object(m.jsx)(y,{shop:d,close:function(){j(void 0)}}):Object(m.jsx)(m.Fragment,{})]})},_=function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(S,{data:e.data})})},M=n(16),z=n(63),E=(n(89),function(e){var t=function(){e.popupHandler(e.data)},n=w(e.data.distance),a=e.data["\u30ab\u30c6\u30b4\u30ea"],c=e.data["\u753b\u50cf"],r=!!e.queryCategory;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"shop-link",children:[Object(m.jsx)("h2",{className:"shop-title",style:{wordBreak:"break-all"},onClick:t,children:e.data["\u30b9\u30dd\u30c3\u30c8\u540d"]}),Object(m.jsxs)("div",{className:"tag-box",children:[!r&&Object(m.jsx)("span",{className:"nowrap",children:Object(m.jsx)(i.b,{to:"/list?category=".concat(a),children:Object(m.jsx)("span",{className:"category",children:a})})}),Object(m.jsx)("span",{className:"nowrap",children:n&&Object(m.jsxs)("span",{className:"distance",children:["\u73fe\u5728\u4f4d\u7f6e\u304b\u3089 ",n]})})]}),Object(m.jsx)("div",{style:{margin:"10px 10px 10px 0"},children:c&&Object(m.jsx)("img",{src:c,alt:e.data["\u30b9\u30dd\u30c3\u30c8\u540d"],onClick:t})}),Object(m.jsx)("div",{className:"right",onClick:t,children:Object(m.jsx)(z.a,{size:"40px",color:"#CCCCCC"})})]})})}),L=(n(90),n(64)),P=n(44),T=function(){var e=Object(d.a)(u.a.mark((function e(t){var n,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,t){window.navigator.geolocation&&window.navigator.geolocation.getCurrentPosition||e(null),window.navigator.geolocation.getCurrentPosition((function(t){var n=t.coords.latitude,a=t.coords.longitude;e([a,n])}),(function(t){e(null)}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})}));case 2:if(!(n=e.sent)){e.next=10;break}return a=P.point(n),(c=t.map((function(e){var t=parseFloat(e["\u7d4c\u5ea6"]),n=parseFloat(e["\u7def\u5ea6"]);if(Number.isNaN(t)||Number.isNaN(n))return e;var c=P.point([t,n]),r=P.distance(a,c,{units:"meters"});return Object(o.a)(Object(o.a)({},e),{},{distance:r})}))).sort((function(e,t){return"number"!==typeof e.distance||Number.isNaN(e.distance)?1:"number"!==typeof t.distance||Number.isNaN(t.distance)?-1:e.distance-t.distance})),e.abrupt("return",c);case 10:return e.abrupt("return",t);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(e){var t=c.a.useState(),n=Object(l.a)(t,2),a=n[0],r=n[1],s=c.a.useState(e.data),o=Object(l.a)(s,2),d=o[0],j=o[1],u=c.a.useState([]),h=Object(l.a)(u,2),b=h[0],p=h[1],f=c.a.useState(10),x=Object(l.a)(f,2),O=x[0],g=x[1],v=c.a.useState(!0),N=Object(l.a)(v,2),w=N[0],k=N[1],F=Object(i.c)(),C=Object(l.a)(F,1)[0].get("category");c.a.useEffect((function(){var t=e.data;C&&(t=e.data.filter((function(e){return e["\u30ab\u30c6\u30b4\u30ea"]===C})));var n=!0;if(n){T(t).then((function(e){n&&(p(e.slice(0,O)),j(e))}))}return function(){n=!1}}),[e.data,C,O]);var S=function(e){e&&r(e)},_=Object(m.jsx)("div",{className:"loader",style:{width:"100%",height:"200px",textAlign:"center",position:"relative",top:"100px"},children:"\u5834\u6240\u4e00\u89a7\u3092\u8aad\u307f\u8fbc\u307f\u4e2d\u3067\u3059..."},0);return Object(m.jsxs)("div",{id:"shop-list",className:"shop-list",children:[C&&Object(m.jsx)("div",{className:"shop-list-category",children:"\u30ab\u30c6\u30b4\u30ea\uff1a\u300c".concat(C,"\u300d")}),Object(m.jsx)(L.a,{dataLength:b.length,next:function(){b.length>=d.length?k(!1):(p([].concat(Object(M.a)(b),Object(M.a)(d.slice(O,O+10)))),g(O+10))},hasMore:w,loader:_,scrollableTarget:"shop-list",children:b.map((function(e,t){return Object(m.jsx)("div",{className:"shop",children:Object(m.jsx)(E,{data:e,popupHandler:S,queryCategory:C})},t)}))}),a?Object(m.jsx)(y,{shop:a,close:function(){r(void 0)}}):Object(m.jsx)(m.Fragment,{})]})},R=(n(92),n(19)),W=n(65),A=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){c(W.last_update)}),[]);return Object(m.jsx)("div",{className:"about-us",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("div",{className:"branding",children:Object(m.jsx)("div",{className:"logo",children:"CHUNITHM\u8a2d\u7f6e\u5e97\u8217\u30de\u30c3\u30d7"})}),Object(m.jsx)("h2",{children:"\u3053\u306e\u30de\u30c3\u30d7\u306b\u3064\u3044\u3066"}),Object(m.jsxs)("p",{children:["\u4f5c\u6210\u8005:",Object(m.jsx)("a",{href:"https://twitter.com/asaburodesu",target:"_blank",rel:"noreferrer",children:"asaburodesu"})]}),Object(m.jsxs)("p",{children:["\u6700\u7d42\u66f4\u65b0: ",n]}),Object(m.jsx)("p",{children:"\u5f53\u30b5\u30a4\u30c8\u3067\u306f\u53ef\u80fd\u306a\u9650\u308a\u60c5\u5831\u306e\u6b63\u78ba\u6027\u3092\u5fc3\u304c\u3051\u3066\u3044\u307e\u3059\u304c\u3001\u5b89\u5168\u6027\u3084\u78ba\u5b9f\u306a\u60c5\u5831\u63d0\u4f9b\u3092\u4fdd\u8a3c\u3059\u308b\u3082\u306e\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u63b2\u8f09\u5185\u5bb9\u3067\u751f\u3058\u305f\u640d\u5bb3\uff08\u9593\u63a5\u7684\u3092\u542b\u3080\uff09\u306b\u5bfe\u3059\u308b\u4e00\u5207\u306e\u8cac\u4efb\u3092\u8ca0\u3044\u307e\u305b\u3093\u3002"}),Object(m.jsx)("h2",{children:"\u4ed6\u6a5f\u7a2e\u30de\u30c3\u30d7"}),Object(m.jsx)("p",{children:Object(m.jsx)("a",{href:"https://asaburodesu.github.io/geki_map/",target:"_blank",rel:"noreferrer",children:"\u30aa\u30f3\u30b2\u30ad\u8a2d\u7f6e\u5e97\u8217\u30de\u30c3\u30d7"})}),Object(m.jsx)("p",{children:Object(m.jsx)("a",{href:"https://asaburodesu.github.io/mai_map/",target:"_blank",rel:"noreferrer",children:"maimai\u8a2d\u7f6e\u5e97\u8217\u30de\u30c3\u30d7"})}),R.form_url?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h2",{children:"\u30c7\u30fc\u30bf\u306e\u66f4\u65b0\u306b\u3064\u3044\u3066"}),Object(m.jsx)("p",{children:"\u3053\u306e\u30a2\u30d7\u30ea\u306e\u30c7\u30fc\u30bf\u3092\u66f4\u65b0\u3059\u308b\u306b\u306f\u4e0b\u306e\u300c + \u300d\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u30d5\u30a9\u30fc\u30e0\u306b\u5fc5\u8981\u306a\u60c5\u5831\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),Object(m.jsx)("div",{className:"goto-form",children:Object(m.jsx)("button",{children:Object(m.jsx)(O.f,{color:"#FFFFFF",onClick:function(){R.form_url&&(window.location.href=R.form_url)}})})})]}):Object(m.jsx)(m.Fragment,{})]})})},U=n(70),$=(n(93),function(e){var t=Object(h.f)(),n=c.a.useState([]),a=Object(l.a)(n,2),r=a[0],s=a[1];return c.a.useEffect((function(){for(var t=[],n=0;n<e.data.length;n++){var a=e.data[n];-1===t.indexOf(a["\u30ab\u30c6\u30b4\u30ea"])&&t.push(a["\u30ab\u30c6\u30b4\u30ea"])}s(t)}),[e.data]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"head"}),Object(m.jsx)("div",{className:"category",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"category-item",children:[Object(m.jsx)("label",{htmlFor:"category-select",children:"\u90fd\u9053\u5e9c\u770c\u304b\u3089\u9078\u3076"}),Object(m.jsx)(U.a,{onChange:function(e){e&&t("/list?category=".concat(e.value))},options:r.map((function(e){return{value:e,label:e}}))})]})})})]})}),B=n(156),I=n(158),q=(n(109),function(e){var t=e.data,n=Object(a.useState)([]),c=Object(l.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(),o=Object(l.a)(i,2),d=o[0],j=o[1];return Object(a.useEffect)((function(){for(var e=[],n=function(n){var a=t[n];a["\u753b\u50cf"]&&e.push(Object(m.jsx)(B.a,{className:"mui-image-list-item",children:Object(m.jsx)("img",{src:a["\u753b\u50cf"],alt:a["\u30b9\u30dd\u30c3\u30c8\u540d"],loading:"lazy",onClick:function(){return function(e){e&&j(e)}(a)},onError:function(e){e.target.parentNode.remove()}})},n))},a=0;a<t.length;a++)n(a);s(e)}),[t]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"head"}),Object(m.jsx)("div",{className:"images",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(I.a,{id:"mui-image-list",sx:{width:"100%",height:"100%"},cols:2,rowHeight:164,children:r}),d?Object(m.jsx)(y,{shop:d,close:function(){j(void 0)}}):Object(m.jsx)(m.Fragment,{})]})})]})}),J=(n(112),function(){return Object(m.jsx)("div",{className:"tabbar",children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsxs)(i.b,{to:"/",children:[Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)(O.c,{})}),Object(m.jsx)("div",{className:"text",children:"\u30db\u30fc\u30e0"})]})}),Object(m.jsx)("li",{children:Object(m.jsxs)(i.b,{to:"/list",children:[Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)(O.e,{})}),Object(m.jsx)("div",{className:"text",children:"\u4e00\u89a7"})]})}),Object(m.jsx)("li",{children:Object(m.jsxs)(i.b,{to:"/category",children:[Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)(O.g,{})}),Object(m.jsx)("div",{className:"text",children:"\u90fd\u9053\u5e9c\u770c"})]})}),Object(m.jsx)("li",{children:Object(m.jsxs)(i.b,{to:"/images",children:[Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)(O.a,{})}),Object(m.jsx)("div",{className:"text",children:"\u5199\u771f\u304b\u3089\u63a2\u3059"})]})}),Object(m.jsx)("li",{children:Object(m.jsxs)(i.b,{to:"/about",children:[Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)(N.a,{})}),Object(m.jsx)("div",{className:"text",children:"\u30de\u30c3\u30d7\u306b\u3064\u3044\u3066"})]})})]})})}),D=function(e){return e.replace(/[\uff01-\uff5e]/g,(function(e){return String.fromCharCode(e.charCodeAt(0)-65248)})).replace(/\u3000/g," ")},Z=function(e){var t=e[0];return e.slice(1).map((function(e){return t.reduce((function(n,a){var c=e[t.indexOf(a)];return n[a]=D(c||""),n}),{})}))},G=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.sort((function(e,t){return Date.parse(t["\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7"])-Date.parse(e["\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7"])})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=c.a.useState([]),t=Object(l.a)(e,2),n=t[0],a=t[1];return c.a.useEffect((function(){fetch("".concat(".","/data.json?timestamp=").concat((new Date).getTime())).then((function(e){return e.ok?e.text():Promise.reject(e.status)})).then((function(e){var t=JSON.parse(e);if("values"in t===!1)return console.log("No Data Found at Spreadsheet"),void a([]);for(var n=Z(t.values),c=[],r=0;r<n.length;r++){var s=n[r];if(s["\u7def\u5ea6"]&&s["\u7d4c\u5ea6"]&&s["\u30b9\u30dd\u30c3\u30c8\u540d"]&&(s["\u7def\u5ea6"].match(/^-?[0-9]+(\.[0-9]+)?$/)&&s["\u7d4c\u5ea6"].match(/^-?[0-9]+(\.[0-9]+)?$/))){var i=Object(o.a)(Object(o.a)({},s),{},{index:r});c.push(i)}}G(c).then((function(e){a(e)}))}))}),[]),Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)("div",{className:"app-body",children:Object(m.jsxs)(h.c,{children:[Object(m.jsx)(h.a,{path:"/",element:Object(m.jsx)(_,{data:n})}),Object(m.jsx)(h.a,{path:"/list",element:Object(m.jsx)(H,{data:n})}),Object(m.jsx)(h.a,{path:"/category",element:Object(m.jsx)($,{data:n})}),Object(m.jsx)(h.a,{path:"/images",element:Object(m.jsx)(q,{data:n})}),Object(m.jsx)(h.a,{path:"/about",element:Object(m.jsx)(A,{})})]})}),Object(m.jsx)("div",{className:"app-footer",children:Object(m.jsx)(J,{})})]})},Q=(n(113),n(68));var V=function(e){var t=e.url,n=Object(Q.a)().Canvas;return Object(m.jsx)(n,{text:t,options:{type:"image/png",margin:0,width:128}})},X=n(150),Y=n(152),ee=n(154),te=n(151),ne=n(153),ae=n(155),ce=(n(136),function(){var e=window.location.href.replace(/\?.+$/,"").replace(/#.+$/,"");return Object(m.jsx)("div",{className:"share",children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/",children:Object(m.jsx)(X.a,{url:e,hashtags:["".concat(R.title)],title:"".concat(R.title),children:Object(m.jsx)(te.a,{size:32,round:!0})})})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/",children:Object(m.jsx)(Y.a,{url:e,hashtag:"#".concat(R.title),children:Object(m.jsx)(ne.a,{size:32,round:!0})})})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/",children:Object(m.jsx)(ee.a,{url:e,title:"".concat(R.title),children:Object(m.jsx)(ae.a,{size:32,round:!0})})})})]})})}),re=function(){var e=R.logo_image_url||"".concat(".","/logo.svg");return Object(m.jsxs)("div",{className:"about",children:[Object(m.jsx)("div",{className:"branding",children:Object(m.jsx)("img",{className:"image",src:e,alt:""})}),Object(m.jsx)("div",{className:"description",children:R.description}),Object(m.jsx)("div",{className:"qrcode",children:Object(m.jsx)(V,{url:window.location.href})}),Object(m.jsx)(ce,{})]})};n(137);var se=function(){return Object(m.jsx)("div",{className:"outer-container",children:Object(m.jsxs)("div",{className:"inner-container",children:[Object(m.jsx)(re,{}),Object(m.jsx)(K,{})]})})},ie=(n(138),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function oe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(i.a,{children:Object(m.jsx)(se,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");ie?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):oe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):oe(t,e)}))}}()},19:function(e){e.exports=JSON.parse('{"title":"CHUNITHM\u8a2d\u7f6e\u5e97\u8217\u30de\u30c3\u30d7","description":"CHUNITHM\u8a2d\u7f6e\u5e97\u8217\u30de\u30c3\u30d7\u3067\u3059","form_url":"","logo_image_url":"https://geoloniamaps.github.io/pwamap/icon-pwamap.svg","background_image_url":"https://geoloniamaps.github.io/pwamap/geolonia_bgimage_1920_1080.png","primary_color":"#d2691e","orderby":"distance"}')},65:function(e){e.exports=JSON.parse('{"last_update":"2024/05/08 21:01:09"}')},79:function(e,t,n){},86:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){}},[[139,1,2]]]);
//# sourceMappingURL=main.76cceae9.chunk.js.map