(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{105:function(e,t,c){},106:function(e,t,c){},107:function(e,t,c){},108:function(e,t,c){},109:function(e,t,c){},110:function(e,t,c){},111:function(e,t,c){},113:function(e,t,c){},114:function(e,t,c){},115:function(e,t,c){},116:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c(22),s=c.n(n),a=(c(76),c(77),c(12)),o=c(4),i=c(63),l=c.n(i),d=c(134),u=c(135),j=c(137),p=c(136),h=c(44),b=c.n(h),O=(c(82),c(13)),m=c.n(O),g=c(20),f=c(23),x=c.n(f),v="USER_LOGIN_REQUEST",_="USER_LOGIN_SUCCESS",y="USER_LOGIN_FAIL",S="USER_LOGOUT",N="USER_REGISTER_REQUEST",w="USER_REGISTER_SUCCESS",I="USER_REGISTER_FAIL",C=c(1);var E=function(){var e=Object(o.c)((function(e){return e.cart})),t=Object(o.b)(),c=e.cartItems;console.log(c);var r=Object(o.c)((function(e){return e.userLogin})).userInfo;return Object(C.jsx)(d.a,{elevation:0,position:"sticky",color:"inherit",children:Object(C.jsxs)(u.a,{children:[Object(C.jsx)(a.b,{to:"/",children:Object(C.jsx)(l.a,{className:"header__logo",fontSize:"large"})}),r?Object(C.jsxs)("div",{className:"header__nav",children:[Object(C.jsx)(a.b,{to:"/logout",children:Object(C.jsx)("div",{className:"header__option",children:Object(C.jsx)("span",{onClick:function(){t((function(e){localStorage.removeItem("userInfo"),e({type:S})}))},className:"header__optionLineOne",children:"LOG OUT"})})}),Object(C.jsx)(a.b,{to:"/checkout",children:Object(C.jsx)(j.a,{"aria-label":"Show cart items",color:"inherit",children:Object(C.jsx)(p.a,{badgeContent:null===c||void 0===c?void 0:c.length,fontSize:"small",color:"secondary",children:Object(C.jsx)(b.a,{fontSize:"small"})})})})]}):Object(C.jsxs)("div",{className:"header__nav",children:[Object(C.jsx)(a.b,{to:"/login",children:Object(C.jsx)("div",{className:"header__option",children:Object(C.jsx)("span",{className:"header__optionLineOne",children:"SIGN IN"})})}),Object(C.jsx)(a.b,{to:"/checkout",children:Object(C.jsx)(j.a,{"aria-label":"Show cart items",color:"inherit",children:Object(C.jsx)(p.a,{badgeContent:null===c||void 0===c?void 0:c.length,fontSize:"small",color:"secondary",children:Object(C.jsx)(b.a,{fontSize:"small"})})})})]})]})})},k=(c(105),c(106),"CART_ADD_ITEM"),T="CART_REMOVE_ITEM",R=function(e){return function(){var t=Object(g.a)(m.a.mark((function t(c,r){var n,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("/api/products/".concat(e));case 2:n=t.sent,s=n.data,c({type:k,payload:{_id:s._id,name:s.title,image:s.image,price:s.price,countInStock:s.countInStock}}),localStorage.setItem("cartItems",JSON.stringify(r().cart.cartItems));case 6:case"end":return t.stop()}}),t)})));return function(e,c){return t.apply(this,arguments)}}()};var U=function(e){var t=e._id,c=e.image,r=e.title,n=e.price,s=t,i=Object(o.b)();return Object(C.jsxs)("div",{className:"product",children:[Object(C.jsx)(a.b,{to:"/product/".concat(t),children:Object(C.jsx)("img",{src:c,alt:"mardeluz-single"})}),Object(C.jsxs)("div",{className:"product__info",children:[Object(C.jsx)(a.b,{href:"/product/".concat(t),children:Object(C.jsx)("p",{children:r})}),Object(C.jsxs)("p",{className:"product__price",children:[Object(C.jsx)("small",{children:"$"}),Object(C.jsx)("strong",{children:n})]}),Object(C.jsx)("button",{onClick:function(){i(R(s))},children:"Add to cart"})]})]})};c(107);var P=function(){return Object(C.jsxs)("div",{className:"newsletter",children:[Object(C.jsx)("h2",{children:"Join our Newsletter"}),Object(C.jsx)("p",{children:"New releases, exclusives, features, films and more."}),Object(C.jsxs)("form",{className:"newsletter__form",action:"",children:[Object(C.jsx)("input",{type:"email",placeholder:"Enter your email"}),Object(C.jsx)("button",{children:"SIGN UP"})]})]})};c(108);var L=function(){return Object(C.jsx)("div",{className:"footer",children:Object(C.jsxs)("div",{className:"footer__wrapper",children:[Object(C.jsx)("div",{className:"footer__about",children:Object(C.jsxs)("ul",{className:"footer__social",children:[Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://www.linkedin.com/in/andresroldan23/",target:"_blank",class:"color-2",rel:"noreferrer",children:Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Object(C.jsx)("path",{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",fill:"currentColor"})})})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://twitter.com/?lang=en",rel:"noreferrer",target:"_blank",class:"color-2",children:Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(C.jsx)("path",{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",fill:"currentColor"})})})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{href:"https://github.com/dresroldan",rel:"noreferrer",target:"_blank",class:"color-2",children:Object(C.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",children:Object(C.jsx)("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",fill:"currentColor"})})})})]})}),Object(C.jsx)("div",{className:"footer__copyright",children:Object(C.jsxs)("div",{className:"footer_copywrightwrapper",children:[Object(C.jsx)("div",{className:"text-left",children:"\xa9 2021 Andres Roldan"}),Object(C.jsx)("div",{className:"text-right",children:"Terms & Conditions   |   Privacy Policy"})]})})]})})},z="PRODUCT_LIST_REQUEST",D="PRODUCT_LIST_SUCCESS",A="PRODUCT_LIST_FAIL",M="PRODUCT_DETAILS_REQUEST",B="PRODUCT_DETAILS_SUCCESS",F="PRODUCT_DETAILS_FAIL";var G=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.productList})).products;return Object(r.useEffect)((function(){e(function(){var e=Object(g.a)(m.a.mark((function e(t){var c,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:z}),e.next=4,x.a.get("/api/products");case 4:c=e.sent,r=c.data,t({type:D,payload:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:A,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(C.jsx)("div",{className:"home",children:Object(C.jsxs)("div",{className:"home__container",children:[Object(C.jsx)("div",{className:"home__image",children:Object(C.jsx)("div",{className:"blur",children:Object(C.jsxs)("div",{className:"home__imagetext",children:[Object(C.jsx)("span",{children:"Features"}),Object(C.jsx)("h1",{children:"Our favorite new releases this week "})]})})}),Object(C.jsxs)("div",{className:"home__productscontainer",children:[Object(C.jsxs)("div",{className:"home__sectionheading",children:[Object(C.jsx)("h3",{children:"Shop"}),Object(C.jsx)("p",{children:"Collect our newest releases"})]}),Object(C.jsx)("div",{className:"home__product",children:t.map((function(e){return Object(C.jsx)(U,{_id:e._id,title:e.title,price:e.price,image:e.image})}))})]}),Object(C.jsx)(P,{}),Object(C.jsx)(L,{})]})})};c(109),c(110);var J=function(e){var t=e._id,c=e.image,r=e.title,n=e.price,s=Object(o.b)();return Object(C.jsxs)("div",{className:"checkoutProduct",children:[Object(C.jsx)("img",{className:"checkoutProduct__image",src:c,alt:""}),Object(C.jsxs)("div",{className:"checkoutProduct__info",children:[Object(C.jsx)("p",{className:"checkoutProduct__title",children:r}),Object(C.jsxs)("p",{className:"checkoutProduct__price",children:[Object(C.jsx)("small",{children:"$"}),Object(C.jsx)("strong",{children:n})]}),Object(C.jsx)("button",{onClick:function(){var e;s((e=t,function(){var t=Object(g.a)(m.a.mark((function t(c,r){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c({type:T,payload:e}),localStorage.setItem("cartItems",JSON.stringify(r().cart.cartItems));case 2:case"end":return t.stop()}}),t)})));return function(e,c){return t.apply(this,arguments)}}()))},children:"Remove from Basket"})]})]})},V=(c(111),c(64)),H=c.n(V);var Q=function(){var e=Object(o.c)((function(e){return e.cart})).cartItems;return Object(C.jsxs)("div",{className:"subtotal",children:[Object(C.jsx)(H.a,{renderText:function(t){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("p",{children:["Subtotal (",e.length," items): ",Object(C.jsx)("strong",{children:t})]}),Object(C.jsxs)("small",{className:"subtotal__gift",children:[Object(C.jsx)("input",{type:"checkbox"})," This order contains a gift"]})]})},decimalScale:2,value:function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)}(e),displayType:"text",thousandSeperator:!0,prefix:"$"}),Object(C.jsx)("button",{children:"PROCEED TO CHECKOUT"})]})};var q=function(){var e=Object(o.c)((function(e){return e.cart})).cartItems;return Object(C.jsxs)("div",{className:"checkout",children:[Object(C.jsx)("h2",{className:"checkout__title",children:"Your selection"}),Object(C.jsxs)("div",{className:"checkout__left",children:[Object(C.jsx)("div",{children:e.map((function(e){return Object(C.jsx)(J,{_id:e._id,title:e.title,price:e.price,image:e.image})}))}),Object(C.jsx)(Q,{})]}),Object(C.jsx)("div",{className:"checkout__right"}),Object(C.jsx)("img",{className:"checkout__ad",src:"https://res.cloudinary.com/dzrk9qfvp/image/upload/v1616077591/MOCK_AD_pbhjv1.png",alt:"record-store-ad"}),Object(C.jsx)(L,{})]})},$=c(21),K=(c(113),c(138));var W=function(e){var t=e.location,c=e.history,n=Object(r.useState)(""),s=Object($.a)(n,2),i=s[0],l=s[1],d=Object(r.useState)(""),u=Object($.a)(d,2),j=u[0],p=u[1],h=Object(r.useState)(null),b=Object($.a)(h,2),O=b[0],f=b[1],S=Object(o.b)(),N=Object(o.c)((function(e){return e.userLogin})),w=N.userInfo,I=(N.error,t.search?t.search.split("=")[1]:"/");return console.log(I),Object(r.useEffect)((function(){w&&c.push(I)}),[c,w,I]),Object(C.jsxs)("div",{className:"login",children:[Object(C.jsx)(a.b,{to:"/",children:Object(C.jsx)("img",{className:"login__logo",src:"https://www.pngitem.com/pimgs/m/12-124076_vinyl-records-png-product-coalition-logo-transparent-png.png",alt:"vinylrecord-logo"})}),Object(C.jsxs)("div",{className:"login__container",children:[Object(C.jsx)("h1",{children:"Sign in "}),O&&Object(C.jsx)(K.a,{severity:"error",children:O}),Object(C.jsxs)("form",{children:[Object(C.jsx)("input",{type:"email",value:i,onChange:function(e){return l(e.target.value)},placeholder:"Enter Email"}),Object(C.jsx)("input",{type:"password",value:j,onChange:function(e){return p(e.target.value)},placeholder:"Enter Password"}),Object(C.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),i&&j&&"string"===typeof i&&"string"===typeof j?S(function(e,t){return function(){var c=Object(g.a)(m.a.mark((function c(r){var n,s,a;return m.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,r({type:v}),n={headers:{"Content-Type":"application/json"}},c.next=5,x.a.post("/login",{username:e,password:t},n);case 5:s=c.sent,a=s.data,r({type:_,payload:a}),localStorage.setItem("userInfo",JSON.stringify(a)),c.next=14;break;case 11:c.prev=11,c.t0=c.catch(0),r({type:y,payload:c.t0.response&&c.t0.response.data.message?c.t0.response.data.message:c.t0.message});case 14:case"end":return c.stop()}}),c,null,[[0,11]])})));return function(e){return c.apply(this,arguments)}}()}(i,j)):f("Error: Email and Password are required.")},className:"login__signInButton",children:"Sign in"})]}),Object(C.jsx)("p",{children:"By signing-in you agree to discM8's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads"}),Object(C.jsx)(a.b,{to:"/signup",className:"login__signUpButton",children:"Create your discM8 account"})]})]})};c(114);var Y=function(e){var t=e.location,c=e.history,n=Object(r.useState)(""),s=Object($.a)(n,2),i=s[0],l=s[1],d=Object(r.useState)(""),u=Object($.a)(d,2),j=u[0],p=u[1],h=Object(r.useState)(""),b=Object($.a)(h,2),O=b[0],f=b[1],v=Object(r.useState)(null),y=Object($.a)(v,2),S=y[0],E=y[1],k=Object(o.b)(),T=Object(o.c)((function(e){return e.userRegister})),R=(T.loading,T.error),U=T.userInfo,P=t.search?t.search.split("=")[1]:"/";return Object(r.useEffect)((function(){U&&c.push(P)}),[c,U,P]),Object(C.jsxs)("div",{className:"signup",children:[Object(C.jsx)(a.b,{to:"/",children:Object(C.jsx)("img",{className:"signup__logo",src:"https://www.pngitem.com/pimgs/m/12-124076_vinyl-records-png-product-coalition-logo-transparent-png.png",alt:"vinylrecord-logo"})}),Object(C.jsxs)("div",{className:"signup__container",children:[Object(C.jsx)("h1",{children:"Create account "}),S&&Object(C.jsx)(K.a,{severity:"error",children:S}),R&&Object(C.jsx)(K.a,{severity:"error",children:R}),Object(C.jsxs)("form",{children:[Object(C.jsx)("input",{type:"email",onChange:function(e){return l(e.target.value)},placeholder:"Email"}),Object(C.jsx)("input",{type:"password",onChange:function(e){return p(e.target.value)},placeholder:"Password"}),Object(C.jsx)("input",{type:"password",value:O,onChange:function(e){return f(e.target.value)},placeholder:"Confirm Password"}),Object(C.jsx)("button",{onClick:function(e){e.preventDefault(),j!==O?E("Passwords do not match!"):i&&j&&"string"===typeof i&&"string"===typeof j?k(function(e,t){return function(){var c=Object(g.a)(m.a.mark((function c(r){var n,s,a;return m.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,r({type:N}),n={headers:{"Content-Type":"application/json"}},c.next=5,x.a.post("/signup",{username:e,password:t},n);case 5:s=c.sent,a=s.data,r({type:w,payload:a}),r({type:_,payload:a}),localStorage.setItem("userInfo",JSON.stringify(a)),c.next=15;break;case 12:c.prev=12,c.t0=c.catch(0),r({type:I,payload:c.t0.response&&c.t0.response.data.message?c.t0.response.data.message:c.t0.message});case 15:case"end":return c.stop()}}),c,null,[[0,12]])})));return function(e){return c.apply(this,arguments)}}()}(i,j)):E("Error: Email and Password are required.")},className:"signup__signUpButton",children:"Create your discM8 account"})]}),Object(C.jsx)("p",{children:"By creating an account you agree to discM8's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads"})]})]})},X=c(7),Z=(c(115),function(e){var t=e.match,c=Object(o.b)(),n=Object(o.c)((function(e){return e.productDetails})).product;Object(r.useEffect)((function(){var e;c((e=t.params.id,function(){var t=Object(g.a)(m.a.mark((function t(c){var r,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c({type:M}),t.next=4,x.a.get("/api/products/".concat(e));case 4:r=t.sent,n=r.data,c({type:B,payload:n}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),c({type:F,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()))}),[c,t]);return Object(C.jsx)("div",{className:"productpage",children:Object(C.jsxs)("div",{className:"productpage__container",children:[Object(C.jsxs)("div",{className:"productpage__productinfo",children:[Object(C.jsx)("img",{className:"productpage__image",src:n.image,alt:""}),Object(C.jsxs)("div",{className:"productpage__productdetails",children:[Object(C.jsx)("h2",{className:"productpage__heading",children:n.title}),Object(C.jsx)("p",{children:n.description}),Object(C.jsx)("p",{className:"productpage__price",children:n.price}),Object(C.jsx)("p",{className:"productpage__stock",children:n.countInStock>0?"In Stock":"Out Of Stock"})]})]}),Object(C.jsx)("div",{className:"productpage__options",children:Object(C.jsx)("button",{onClick:function(){c(R(n._id))},children:"Add to cart"})})]})})});var ee=function(){return Object(C.jsx)(a.a,{children:Object(C.jsxs)("div",{className:"app",children:[Object(C.jsx)(E,{}),Object(C.jsxs)(X.c,{children:[Object(C.jsx)(X.a,{path:"/signup",component:Y}),Object(C.jsx)(X.a,{path:"/login",component:W}),Object(C.jsx)(X.a,{path:"/checkout",component:q}),Object(C.jsx)(X.a,{path:"/product/:id",component:Z}),Object(C.jsx)(X.a,{path:"/",component:G})]})]})})},te=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,139)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),r(e),n(e),s(e),a(e)}))},ce=c(27),re=c(65),ne=c(66),se=c(29),ae=c(67),oe=Object(ce.combineReducers)({productList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return{products:[]};case D:return{products:t.payload};case A:return{error:t.payload};default:return e}},productDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return Object(se.a)({},e);case B:return{product:t.payload};case F:return{error:t.payload};default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:var c=t.payload;return Object(se.a)(Object(se.a)({},e),{},{cartItems:[].concat(Object(ae.a)(e.cartItems),[c])});case T:return Object(se.a)(Object(se.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e._id!==t.payload}))});default:return e}},userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return{loading:!0};case _:return{loading:!1,userInfo:t.payload};case y:return{loading:!1,error:t.payload};case S:return{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return{loading:!0};case w:return{loading:!1,userInfo:t.payload};case I:return{loading:!1,error:t.payload};default:return e}}}),ie={cart:{cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[]},userLogin:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null}},le=[re.a],de=Object(ce.createStore)(oe,ie,Object(ne.composeWithDevTools)(ce.applyMiddleware.apply(void 0,le)));s.a.render(Object(C.jsx)(o.a,{store:de,children:Object(C.jsx)(ee,{})}),document.getElementById("root")),te()},76:function(e,t,c){},77:function(e,t,c){},82:function(e,t,c){}},[[116,1,2]]]);
//# sourceMappingURL=main.1e81b7ed.chunk.js.map