(this["webpackJsonprecord-store"]=this["webpackJsonprecord-store"]||[]).push([[0],{100:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),i=c(21),r=c.n(i),a=(c(63),c(64),c(8)),o=c(16),l=c(1),j=Object(n.createContext)(),d=function(e){var t=e.reducer,c=e.initialState,s=e.children;return Object(l.jsx)(j.Provider,{value:Object(n.useReducer)(t,c),children:s})},u=function(){return Object(n.useContext)(j)},h=c(54),b=c.n(h),p=c(120),O=c(117),g=c(119),m=c(118),x=c(55),f=c.n(x);c(66);var _=function(){var e=u(),t=Object(a.a)(e,2),c=t[0].basket;return t[1],Object(l.jsx)(p.a,{position:"sticky",color:"inherit",children:Object(l.jsxs)(O.a,{children:[Object(l.jsx)(o.b,{to:"/",children:Object(l.jsx)(b.a,{className:"header__logo",fontSize:"large"})}),Object(l.jsxs)("div",{className:"header__nav",children:[Object(l.jsx)(o.b,{to:"/login",children:Object(l.jsx)("div",{className:"header__option",children:Object(l.jsx)("span",{className:"header__optionLineOne",children:"SIGN IN"})})}),Object(l.jsx)(o.b,{to:"/checkout",children:Object(l.jsx)(g.a,{"aria-label":"Show cart items",color:"inherit",children:Object(l.jsx)(m.a,{badgeContent:null===c||void 0===c?void 0:c.length,fontSize:"small",color:"secondary",children:Object(l.jsx)(f.a,{fontSize:"small"})})})})]})]})})};c(73),c(74);var v=function(e){var t=e.id,c=e.title,n=e.image,s=e.price,i=e.rating,r=u(),o=Object(a.a)(r,2),j=o[0].basket,d=o[1];return console.log("this is the basket >>>",j),Object(l.jsxs)("div",{className:"product",children:[Object(l.jsx)("img",{src:n,alt:"mardeluz-single"}),Object(l.jsxs)("div",{className:"product__info",children:[Object(l.jsx)("p",{children:c}),Object(l.jsxs)("p",{className:"product__price",children:[Object(l.jsx)("small",{children:"$"}),Object(l.jsx)("strong",{children:s})]}),Object(l.jsx)("button",{onClick:function(){d({type:"ADD_TO_BASKET",item:{id:t,title:c,image:n,price:s,rating:i}})},children:"Add to cart"})]})]})},N={heroImage:"https://images.unsplash.com/photo-1541667558913-5510fb3c7bd9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",products:[{id:"2563784",title:"The Soundwork-Shoppers \u2013 Discomusic (LP, RE + CD)",price:19.99,image:"https://furtherrecords.com/wp-content/uploads/2021/03/R-10043100-1490626390-1896.jpeg.jpg",rating:5},{id:"2563784",title:"Various \u2013 Shouts Vol. 2 (12\u2033)",price:19.99,image:"https://furtherrecords.com/wp-content/uploads/2021/03/R-15049220-1586290876-5199.jpeg.jpg",rating:5},{id:"2563784",title:"Tenorio Jr. \u2013 Embalo (LP, Shape, RE)",price:19.99,image:"https://furtherrecords.com/wp-content/uploads/2021/03/R-10026233-1536320093-4883.jpeg.jpg",rating:5},{id:"2563784",title:"B\xe9liz \u2013 M\xe9moires (LP, Album)",price:19.99,image:"https://furtherrecords.com/wp-content/uploads/2021/03/R-15693500-1596034993-7924.jpeg.jpg",rating:5},{id:"2563784",title:"Tommy Guerrero \u2013 Soul Food Taqueria (2xLP, Dlx, Ltd, RE, RM, 180)",price:19.99,image:"https://furtherrecords.com/wp-content/uploads/2021/03/R-11215525-1563382895-2058.jpeg.jpg",rating:5},{id:"2563784",title:"Mar de Luz - All On U (12)",price:19.99,image:"https://i1.sndcdn.com/artworks-98c8BLUm7CIz7vxF-DSWXgQ-t500x500.jpg",rating:5},{id:"2563784",title:"Mar de Luz - All On U (12)",price:19.99,image:"https://i1.sndcdn.com/artworks-98c8BLUm7CIz7vxF-DSWXgQ-t500x500.jpg",rating:5},{id:"2563784",title:"Mar de Luz - All On U (12)",price:19.99,image:"https://i1.sndcdn.com/artworks-98c8BLUm7CIz7vxF-DSWXgQ-t500x500.jpg",rating:5}],checkoutImage:"https://res.cloudinary.com/dzrk9qfvp/image/upload/v1616077591/MOCK_AD_pbhjv1.png"};var k=function(){return Object(l.jsx)("div",{className:"home",children:Object(l.jsxs)("div",{className:"home__container",children:[Object(l.jsx)("div",{className:"home__image",children:Object(l.jsx)("img",{className:"home__image",src:N.heroImage,alt:"record-shop"})}),Object(l.jsxs)("div",{className:"home__productscontainer",children:[Object(l.jsxs)("div",{className:"home__sectionheading",children:[Object(l.jsx)("h3",{children:"Shop"}),Object(l.jsx)("p",{children:"Collect our newest releases"})]}),Object(l.jsx)("div",{className:"home__product",children:N.products.map((function(e){return Object(l.jsx)(v,{id:e.id,title:e.title,price:e.price,image:e.image,rating:e.rating})}))})]})]})})},S=(c(75),c(76),c(37)),w=c(29),C=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},y=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(w.a)(Object(w.a)({},e),{},{basket:[].concat(Object(S.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.id===t.id})),n=Object(S.a)(e.basket);return c>=0?n.splice(c,1):console.warn("Cannot remove product (id: ".concat(t.id," )from ")),Object(w.a)(Object(w.a)({},e),{},{basket:n});default:return e}};var P=function(e){var t=e.id,c=e.image,n=e.title,s=e.price,i=(e.rating,u()),r=Object(a.a)(i,2),o=(r[0].basket,r[1]);return Object(l.jsxs)("div",{className:"checkoutProduct",children:[Object(l.jsx)("img",{className:"checkoutProduct__image",src:c}),Object(l.jsxs)("div",{className:"checkoutProduct__info",children:[Object(l.jsx)("p",{className:"checkoutProduct__title",children:n}),Object(l.jsxs)("p",{className:"checkoutProduct__price",children:[Object(l.jsx)("small",{children:"$"}),Object(l.jsx)("strong",{children:s})]}),Object(l.jsx)("button",{onClick:function(){o({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from Basket"})]})]})},B=(c(77),c(56)),T=c.n(B);var D=function(){var e=u(),t=Object(a.a)(e,2),c=t[0].basket;return t[1],Object(l.jsxs)("div",{className:"subtotal",children:[Object(l.jsx)(T.a,{renderText:function(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("p",{children:["Subtotal (",c.length," items): ",Object(l.jsx)("strong",{children:e})]}),Object(l.jsxs)("small",{className:"subtotal__gift",children:[Object(l.jsx)("input",{type:"checkbox"})," This order contains a gift"]})]})},decimalScale:2,value:C(c),displayType:"text",thousandSeperator:!0,prefix:"$"}),Object(l.jsx)("button",{children:"PROCEED TO CHECKOUT"})]})};var E=function(){var e=u(),t=Object(a.a)(e,2),c=t[0].basket;return t[1],Object(l.jsxs)("div",{className:"checkout",children:[Object(l.jsx)("img",{className:"checkout__ad",src:N.checkoutImage,alt:"record-store-ad"}),Object(l.jsx)("h2",{className:"checkout__title",children:"Your selection"}),Object(l.jsxs)("div",{className:"checkout__left",children:[Object(l.jsx)("div",{children:c.map((function(e){return Object(l.jsx)(P,{id:e.id,title:e.title,image:e.image,price:e.price})}))}),Object(l.jsx)(D,{})]}),Object(l.jsx)("div",{className:"checkout__right"})]})},M=(c(79),c(28)),I=c.n(M);var R=function(){var e=Object(n.useState)(""),t=Object(a.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(""),r=Object(a.a)(i,2),j=r[0],d=r[1],u=Object(n.useState)(null),h=Object(a.a)(u,2),b=h[0],p=h[1];return Object(l.jsxs)("div",{className:"login",children:[Object(l.jsx)(o.b,{to:"/",children:Object(l.jsx)("img",{className:"login__logo",src:"https://www.pngitem.com/pimgs/m/12-124076_vinyl-records-png-product-coalition-logo-transparent-png.png"})}),Object(l.jsxs)("div",{className:"login__container",children:[Object(l.jsx)("h1",{children:"Sign in "}),Object(l.jsxs)("form",{children:[Object(l.jsx)("input",{type:"text",onChange:function(e){return s(e.target.value)},placeholder:"Email"}),Object(l.jsx)("input",{type:"password",onChange:function(e){return d(e.target.value)},placeholder:"Password"}),Object(l.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),I()({method:"POST",data:{username:c,password:j},withCredentials:!0,url:"http://localhost:5000/login"}).then((function(e){return console.log(e)}))},className:"login__signInButton",children:"Sign in"}),Object(l.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),I()({method:"GET",withCredentials:!0,url:"http://localhost:5000/user"}).then((function(e){p(e.data),console.log(e.data)}))},className:"login__signInButton",children:"get user"}),b?Object(l.jsxs)("h1",{children:["Welcome back ",b.username]}):null]}),Object(l.jsx)("p",{children:"By signing-in you agree to discM8's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads"}),Object(l.jsx)(o.b,{to:"/signup",className:"login__signUpButton",children:"Create your discM8 account"})]})]})};c(98);var A=function(){var e=Object(n.useState)(""),t=Object(a.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(""),r=Object(a.a)(i,2),j=r[0],d=r[1];return Object(l.jsxs)("div",{className:"signup",children:[Object(l.jsx)(o.b,{to:"/",children:Object(l.jsx)("img",{className:"signup__logo",src:"https://www.pngitem.com/pimgs/m/12-124076_vinyl-records-png-product-coalition-logo-transparent-png.png"})}),Object(l.jsxs)("div",{className:"signup__container",children:[Object(l.jsx)("h1",{children:"Create account "}),Object(l.jsxs)("form",{children:[Object(l.jsx)("input",{type:"text",onChange:function(e){return s(e.target.value)},placeholder:"Email"}),Object(l.jsx)("input",{type:"password",onChange:function(e){return d(e.target.value)},placeholder:"Password"}),Object(l.jsx)("button",{onClick:function(e){e.preventDefault(),I()({method:"POST",data:{username:c,password:j},withCredentials:!0,url:"http://localhost:5000/signup"}).then((function(e){return console.log(e)}))},className:"signup__signUpButton",children:"Create your discM8 account"})]}),Object(l.jsx)("p",{children:"By creating an account you agree to discM8's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads"})]})]})},L=c(4);c(99);var z=function(e){return Object(l.jsxs)("div",{className:"productPage",children:[Object(l.jsx)("div",{classname:"productPage__left"}),Object(l.jsx)("div",{className:"productPage__right"})]})};var F=function(){return Object(l.jsx)(o.a,{children:Object(l.jsx)("div",{className:"app",children:Object(l.jsxs)(L.c,{children:[Object(l.jsx)(L.a,{path:"/signup",children:Object(l.jsx)(A,{})}),Object(l.jsx)(L.a,{path:"/login",children:Object(l.jsx)(R,{})}),Object(l.jsxs)(L.a,{path:"/checkout",children:[Object(l.jsx)(_,{}),Object(l.jsx)(E,{})]}),Object(l.jsxs)(L.a,{path:"/product",children:[Object(l.jsx)(_,{}),Object(l.jsx)(z,{})]}),Object(l.jsxs)(L.a,{path:"/",children:[Object(l.jsx)(_,{}),Object(l.jsx)(k,{})]})]})})})},U=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,121)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),i(e),r(e)}))};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(d,{initialState:{basket:[]},reducer:y,children:Object(l.jsx)(F,{})})}),document.getElementById("root")),U()},63:function(e,t,c){},64:function(e,t,c){},66:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},79:function(e,t,c){},98:function(e,t,c){},99:function(e,t,c){}},[[100,1,2]]]);
//# sourceMappingURL=main.eb6ebc78.chunk.js.map