(window["webpackJsonpbicycle-checkout"]=window["webpackJsonpbicycle-checkout"]||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){e.exports=a.p+"static/media/background-bicycle.a01801ae.jpg"},104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),o=(a(80),a(24)),i=a(26),m=a(10),s=a(9),u=a(13),d=a(14),p=a(15),h=a(25),E=a(33),y=a(157),f=a(158),b=a(153),v=a(46),g=a(160),N=a(156),k=a(165),x=a(68),C=a.n(x),S=a(67),O=a.n(S),w=a(159),M=a(162),F=a(155),_=a(154),j=a(114),q=a(152),A=a(150),T=a(151),B=a(42),I=a.n(B),L=a(65),Q=a.n(L),D=a(64),P=a.n(D),U=a(63),H=a.n(U),z=a(51),R=function(e){return r.a.createElement("div",{className:"mb-5"},r.a.createElement("div",{className:"input-group mb-3",style:{maxWidth:"200px"}},r.a.createElement("div",{className:"input-group-prepend",name:"decrease",onClick:function(t){return e.handleQuantity(t)}},r.a.createElement("button",{className:"btn btn-outline-primary js-btn-minus",type:"button"},"\u2212")),r.a.createElement("input",{readOnly:!0,type:"text",className:"form-control text-center border mr-0",value:e.quantity,placeholder:"","aria-label":"Example text with button addon","aria-describedby":"button-addon1"}),r.a.createElement("div",{className:"input-group-append",name:"increase",onClick:function(t){return e.handleQuantity(t)}},r.a.createElement("button",{className:"btn btn-outline-primary js-btn-plus",type:"button"},"+"))))},W=(a(81),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={isEditing:!1,quantity:1},a.handleEdit=function(){a.setState((function(e){return{isEditing:!e.isEditing}}))},a.handleEditChange=function(e){if(console.log(e.target.value.trim()),parseInt(e.target.value))return a.setState({quantity:e.target.value});0===e.target.value.trim().length&&a.setState({quantity:""})},a.handleSave=function(e){0===a.state.quantity?a.props.removeFromCart(e):a.props.editCartItem(e,a.state.quantity),a.handleEdit()},a.handleCancel=function(){a.handleEdit(),a.setState((function(e){return{quantity:e.quantity}}))},a.handleQuantity=function(e){"decrease"!==e.currentTarget.getAttribute("name")?a.setState({quantity:a.state.quantity+1}):a.checkQuantity()&&a.setState({quantity:a.state.quantity-1})},a.checkQuantity=function(){if(a.state.quantity>0)return!0},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({quantity:this.props.quantity})}},{key:"render",value:function(){var e=this;return r.a.createElement(j.a,{key:this.props.id,alignItems:"flex-start"},r.a.createElement(A.a,null,r.a.createElement(T.a,{alt:this.props.name,src:this.props.image})),r.a.createElement(q.a,{primary:this.props.name,secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{component:"span",className:"sidecartitem-title",variant:"body2",color:"textPrimary"},"$",this.props.price," / each"),r.a.createElement(v.a,{component:"span",variant:"body2",color:"textPrimary"},"Quantity: ",this.props.quantity))}),r.a.createElement(z.Transition,{items:this.state.isEditing,from:{transform:"translate3d(40px,0px,0)",opacity:0},enter:{transform:"translate3d(0,0px,0)",opacity:1},leave:{transform:"translate3d(40px,0px,0)",opacity:0},config:{duration:100}},(function(t){return t&&function(t){return r.a.createElement(z.animated.div,{style:t},r.a.createElement("div",null,r.a.createElement("p",null,"Quantity: "),r.a.createElement(R,{quantity:e.state.quantity,handleQuantity:e.handleQuantity})))}})),this.state.isEditing?r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{"aria-label":"Save shopping cart item",color:"inherit",onClick:function(){e.handleSave(e.props.id)}},r.a.createElement(H.a,{color:"primary"})),r.a.createElement(b.a,{"aria-label":"cancel cart item",color:"inherit",edge:"end",onClick:function(){return e.handleCancel()}},r.a.createElement(P.a,{color:"primary"}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{"aria-label":"edit shopping cart item",color:"inherit",onClick:this.handleEdit},r.a.createElement(Q.a,{color:"primary"})),r.a.createElement(b.a,{"aria-label":"delete shopping cart item",color:"inherit",edge:"end",onClick:function(){return e.props.removeFromCart(e.props.id)}},r.a.createElement(I.a,{color:"primary"}))))}}]),t}(n.Component)),Y=(a(98),function(e,t){return e.length>0?e.map((function(e){return r.a.createElement(W,Object.assign({editCartItem:t.editCartItem,removeFromCart:t.removeFromCart,key:e.id.toString()},e))})):r.a.createElement("p",null,"Your shopping cart is currently empty")}),K=function(e){return r.a.createElement(M.a,{anchor:"right",open:e.isShoppingCartOpen,onClose:e.toggleSideCart(!1),onOpen:e.toggleSideCart(!0)},r.a.createElement("div",{className:"sidecart-container",role:"presentation"},r.a.createElement("h2",{className:"sidecart-title"},"Shopping Cart"),r.a.createElement(_.a,null),r.a.createElement(F.a,null,Y(e.cart,e))))},V=a(37),J=(a(101),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={mobileMenuElement:null,isShoppingCartOpen:!1,isMobileMenuOpen:!1},a.toggleSideCart=function(e){return function(t){(!t||"keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&a.setState({isShoppingCartOpen:e})}},a.renderMobileMenu=function(){return r.a.createElement(k.a,{anchorEl:a.state.mobileMenuElement,anchorOrigin:{vertical:"top",horizontal:"right"},id:"mobile-menu",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:a.state.isMobileMenuOpen,onClose:a.handleMenuClose},r.a.createElement(h.Link,{to:"/"},r.a.createElement(N.a,null,"Home")),r.a.createElement(V.HashLink,{to:"/#store"},r.a.createElement(N.a,null,"Rentals")),r.a.createElement(h.Link,{to:"/checkout"},r.a.createElement(N.a,null,"Checkout")))},a.handleMobileMenuOpen=function(e){a.setState({mobileMenuElement:e.currentTarget,isMobileMenuOpen:!a.state.isMobileMenuOpen})},a.handleMenuClose=function(){a.setState({mobileMenuElement:null,isMobileMenuOpen:!1})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.totalQuantity;return r.a.createElement("div",{className:"grow"},r.a.createElement(y.a,{position:"static",className:"appbar"},r.a.createElement(f.a,null,r.a.createElement(h.Link,{to:"/"},r.a.createElement(v.a,{className:"appbar-title",variant:"h6",noWrap:!0},"Bicycle Rental")),r.a.createElement("div",{className:"grow"}),r.a.createElement("div",{className:"sectionDesktop"},r.a.createElement(h.Link,{to:"/"}," ",r.a.createElement(w.a,{className:"button"},"Home")),r.a.createElement(h.Link,{to:"/checkout"}," ",r.a.createElement(w.a,{className:"button"},"Checkout"))),r.a.createElement(b.a,{"aria-label":"show 4 new items in shopping cart",color:"inherit",edge:"end","aria-controls":"shopping-cart","aria-haspopup":"true",onClick:this.toggleSideCart(!0)},r.a.createElement(g.a,{badgeContent:e,color:"secondary"},r.a.createElement(O.a,{color:"primary"}))),r.a.createElement("div",{className:"sectionMobile"},r.a.createElement(b.a,{"aria-label":"show more","aria-controls":"mobile-menu","aria-haspopup":"true",onClick:this.handleMobileMenuOpen,color:"inherit"},r.a.createElement(C.a,{color:"primary"}))))),this.renderMobileMenu(),r.a.createElement(K,{editCartItem:this.props.editCartItem,removeFromCart:this.props.removeFromCart,isShoppingCartOpen:this.state.isShoppingCartOpen,toggleSideCart:this.toggleSideCart,cart:this.props.cart}))}}]),t}(n.Component)),$=a(69),Z=a.n($),G=(a(102),function(e){return e.toLocaleString("en-US",{style:"currency",currency:"USD"})});function X(e){return r.a.createElement(h.Link,{to:"/bicycles/".concat(e.id),className:"col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item sweets"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:e.image,className:"card-img-top store-img",alt:e.name}),r.a.createElement("span",{className:"store-item-icon"},r.a.createElement(Z.a,null))),r.a.createElement("div",{className:"card-body card-body-product"},r.a.createElement("div",{className:"card-text text-center text-capitalize"},r.a.createElement("h5",{id:"store-item-name"},e.name),r.a.createElement("h5",{className:"store-item-value"},r.a.createElement("strong",{id:"store-item-price",className:"font-weight-bold"},G(e.price)))))))}a(103),a(104);var ee=function(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid jumbotron-bicycle"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-capitalize"},"Reserve. Pick-up.",r.a.createElement("strong",{className:"jumbotron-title "},"Explore!")),r.a.createElement(V.HashLink,{smooth:!0,to:"/#store",className:"btn jumbotron-link text-uppercase my-2"},"View rentals")))},te=a(35),ae=(a(105),function(){return r.a.createElement("div",{id:"store",className:"store py-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto col-sm-6 text-center"},r.a.createElement("h1",{className:"text-capitalize"},"Bicycle ",r.a.createElement("strong",{className:"banner-title "},"Rentals")))),r.a.createElement("div",{className:"store-items row",id:"store-items"},te.a.map((function(e,t){console.log();var a=e.id,n=e.name,c=e.image,l=e.product_type,o=e.price;if("bike"===l)return r.a.createElement(X,{price:o,name:n,key:a,id:a,image:c})})))))}),ne=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,null),r.a.createElement(ae,null))},re=(a(106),function(){return r.a.createElement("div",{className:"success-container show-flex"},r.a.createElement("div",{className:"success"},r.a.createElement("svg",{className:"checkmark",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52"},r.a.createElement("circle",{className:"checkmark-circle",cx:"26",cy:"26",r:"25",fill:"none"}),r.a.createElement("path",{className:"checkmark-check",fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"})),r.a.createElement("p",null,"Added to Cart")))}),ce=(a(107),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={id:1,name:"",price:"",image:"",quantity:1,animate:!1},a.handleQuantity=function(e){"decrease"!==e.currentTarget.getAttribute("name")?a.setState({quantity:a.state.quantity+1}):a.checkQuantity()&&a.setState({quantity:a.state.quantity-1})},a.checkQuantity=function(){if(a.state.quantity>0)return!0},a.handleAddToCart=function(){clearTimeout(a.timeoutID),a.setState({animate:!0}),a.props.addToCart(a.state,a.state.quantity),a.setState({quantity:1}),a.timeoutID=setTimeout((function(){a.setState({animate:!1})}),2500)},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState((function(e,t){var a=parseInt(t.match.params.id),n=te.a.find((function(e){if(e.id===a)return e})),r=n.name,c=n.price,l=n.image;return{id:a,name:r,price:c,image:l}}))}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutID)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"site-section mt-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("img",{className:"d-block w-100",src:this.state.image,alt:this.state.name})),r.a.createElement("div",{className:"col-lg-5 ml-auto"},r.a.createElement("h2",{className:"text-primary"},this.state.name," - ",this.props.formatMoney(this.state.price)),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non eos inventore aspernatur voluptatibus ratione odit molestias molestiae, illum et impedit veniam modi sunt quas nam mollitia earum perferendis, dolorem. Magni."),r.a.createElement(R,{handleQuantity:this.handleQuantity,quantity:this.state.quantity}),this.state.animate?r.a.createElement(re,null):r.a.createElement("p",null,r.a.createElement("span",{onAnimationEnd:function(){return e.setState({animate:!1})},className:"addToCart-button btn btn-sm height-auto px-4 py-3 btn-primary",onClick:function(){return e.handleAddToCart()}},"Add To Cart")))))))}}]),t}(n.Component)),le=a(166),oe=a(161),ie=a(163),me=function(){return r.a.createElement("div",{className:"col-md-6 mb-5 mb-md-0"},r.a.createElement("h2",{className:"h3 mb-3 text-black font-heading-serif"},"Billing Details"),r.a.createElement("div",{className:"p-3 p-lg-5 border"},r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("label",{htmlFor:"c_fname",className:"text-black"},"First Name ",r.a.createElement("span",{className:"text-danger"},"*")),r.a.createElement("input",{type:"text",className:"form-control",id:"c_fname",name:"c_fname"})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("label",{htmlFor:"c_lname",className:"text-black"},"Last Name ",r.a.createElement("span",{className:"text-danger"},"*")),r.a.createElement("input",{type:"text",className:"form-control",id:"c_lname",name:"c_lname"}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("label",{htmlFor:"c_companyname",className:"text-black"},"Company Name "),r.a.createElement("input",{type:"text",className:"form-control",id:"c_companyname",name:"c_companyname"}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("label",{htmlFor:"c_address",className:"text-black"},"Address ",r.a.createElement("span",{className:"text-danger"},"*")),r.a.createElement("input",{type:"text",className:"form-control",id:"c_address",name:"c_address",placeholder:"Street address"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Apartment, suite, unit etc. (optional)"})),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("label",{htmlFor:"c_state_country",className:"text-black"},"State / Country ",r.a.createElement("span",{className:"text-danger"},"*")),r.a.createElement("input",{type:"text",className:"form-control",id:"c_state_country",name:"c_state_country"})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("label",{htmlFor:"c_postal_zip",className:"text-black"},"Posta / Zip ",r.a.createElement("span",{className:"text-danger"},"*")),r.a.createElement("input",{type:"text",className:"form-control",id:"c_postal_zip",name:"c_postal_zip"}))),r.a.createElement("div",{className:"form-group row mb-5"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("label",{htmlFor:"c_email_address",className:"text-black"},"Email Address ",r.a.createElement("span",{className:"text-danger"},"*")),r.a.createElement("input",{type:"text",className:"form-control",id:"c_email_address",name:"c_email_address"})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("label",{htmlFor:"c_phone",className:"text-black"},"Phone ",r.a.createElement("span",{className:"text-danger"},"*")),r.a.createElement("input",{type:"text",className:"form-control",id:"c_phone",name:"c_phone",placeholder:"Phone Number"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"c_create_account",className:"text-black","data-toggle":"collapse",href:"#create_an_account",role:"button","aria-expanded":"false","aria-controls":"create_an_account"},r.a.createElement("input",{type:"checkbox",value:"1",id:"c_create_account"})," Create an account?"),r.a.createElement("div",{className:"collapse",id:"create_an_account"},r.a.createElement("div",{className:"py-2"},r.a.createElement("p",{className:"mb-3"},"Create an account by entering the information below. If you are a returning customer please login at the top of the page."),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"c_account_password",className:"text-black"},"Account Password"),r.a.createElement("input",{type:"email",className:"form-control",id:"c_account_password",name:"c_account_password",placeholder:""})))))))},se=(a(108),function(e){console.log(e);var t=0;return r.a.createElement("div",{className:"mb-5 orderform-container"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h2",{className:"h3 mb-3 text-black font-heading-serif"},"Your Order"),r.a.createElement("div",{className:"p-3 p-lg-5 border"},r.a.createElement("table",{className:"table site-block-order-table mb-5"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Product"),r.a.createElement("td",null,"Total"))),r.a.createElement("tbody",null,e.cart.map((function(a){return t+=a.price*a.quantity,r.a.createElement("tr",{key:a.id},r.a.createElement("td",null,r.a.createElement(b.a,{"aria-label":"delete shopping cart item",color:"inherit","aria-controls":"shopping-cart","aria-haspopup":"true",onClick:function(){return e.removeFromCart(a.id)}},r.a.createElement(I.a,{color:"primary"})),a.name," ",r.a.createElement("strong",{className:"mx-2"},"x")," ",a.quantity),r.a.createElement("td",null,e.formatMoney(a.price)))})),r.a.createElement("tr",{className:"seperator"},r.a.createElement("td",{className:""}),r.a.createElement("td",{className:""})),r.a.createElement("tr",null,r.a.createElement("td",{className:"text-black"},"Cart Subtotal"),r.a.createElement("td",{className:"text-black"},e.formatMoney(t))),r.a.createElement("tr",null,r.a.createElement("td",{className:"text-black"},"Taxes and Fees"),r.a.createElement("td",{className:"text-black"},e.formatMoney(.08875*t))),r.a.createElement("tr",null,r.a.createElement("td",{className:"text-black font-weight-bold"},r.a.createElement("strong",null,"Order Total")),r.a.createElement("td",{className:"text-black font-weight-bold"},r.a.createElement("strong",null,e.formatMoney(function(e){return.08875*e+e}(t))))))),r.a.createElement("div",{className:"text-center"},r.a.createElement(w.a,{disabled:0===e.activeStep,onClick:e.handleBack,className:"button"},e.activeStep===e.stepLength-1?"Edit Order":"Back"),r.a.createElement(w.a,{variant:"contained",color:"primary",onClick:e.handleNext,className:"button ml-3"},e.activeStep===e.stepLength-1?"Complete Purchase":"Next")))))}),ue=(a(109),n.Component,function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"h3 mb-3 text-black font-heading-serif"},"Coupon Code"),r.a.createElement("div",{className:"p-3 border"},r.a.createElement("label",{htmlFor:"couponcode",className:"text-black mb-3"},"Enter your coupon code if you have one"),r.a.createElement("div",{className:"input-group w-75"},r.a.createElement("input",{type:"text",className:"form-control",id:"couponcode",placeholder:"Coupon Code","aria-label":"Coupon Code","aria-describedby":"couponcode-apply"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-primary btn-sm rounded px-4",type:"button",id:"couponcode-apply"},"Apply")))))}),de=(a(110),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={toggleCreditForm:!0},a.toggleCreditFormState=function(){a.setState((function(e){return{toggleCreditForm:!e.toggleCreditForm}}))},a.renderCreditForm=function(){return r.a.createElement("div",{className:"p-3"},r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("label",{htmlFor:"cc-number",className:"text-black"},"Card Number ",r.a.createElement("span",{className:"text-danger"},"*")),r.a.createElement("input",{type:"text",className:"form-control",id:"cc-number",name:"cc-number"}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-md-5"},r.a.createElement("label",{htmlFor:"cc-name",className:"text-black"},"Name:",r.a.createElement("span",{className:"text-danger"},"*")),r.a.createElement("input",{type:"text",className:"form-control",id:"cc-name",name:"cc-name"})),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("label",{htmlFor:"cc-date",className:"text-black"},"Exp. Date:",r.a.createElement("span",{className:"text-danger"},"*")),r.a.createElement("input",{type:"text",className:"form-control",id:"cc-date",name:"cc-date"})),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("label",{htmlFor:"cc-ccv",className:"text-black"},"CCV "),r.a.createElement("input",{type:"text",className:"form-control",id:"cc-ccv",name:"cc-ccv"}))))},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-6 mb-5 mb-md-0"},r.a.createElement("h2",{className:"h3 mb-3 text-black font-heading-serif"},"Payment Method"),r.a.createElement("div",{className:"form-group delivery-options-container"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"custom-control custom-radio"},r.a.createElement("input",{type:"radio",checked:this.state.toggleCreditForm,id:"creditcard",name:"paymentmethod",className:"custom-control-input",onClick:this.toggleCreditFormState}),r.a.createElement("label",{className:"custom-control-label",htmlFor:"creditcard"},"Credit Card"),r.a.createElement("p",{className:"delivery-option-subheading"},"Safe payment using your bank account or credit card."),r.a.createElement("p",{className:"delivery-option-subheading"},"Visa. Mastercard. Discover. American Express")),this.state.toggleCreditForm?this.renderCreditForm():null)),r.a.createElement("div",{className:"card mt-3"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"custom-control custom-radio"},r.a.createElement("input",{type:"radio",id:"paypal",name:"paymentmethod",className:"custom-control-input",onClick:this.toggleCreditFormState}),r.a.createElement("label",{className:"custom-control-label",htmlFor:"paypal"},"PayPal"),r.a.createElement("p",{className:"delivery-option-subheading"},"You will be redirected to PayPals website to complete your purchase"))))),r.a.createElement(ue,null))}}]),t}(n.Component)),pe=(a(111),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={addOns:[]},a.handleAddOn=function(e){a.props.cart.find((function(t){return t.id===e.id}))?a.props.removeFromCart(e.id):(e.quantity=1,a.props.addToCart(e,1))},a.isChecked=function(e){return!!a.props.cart.find((function(t){return t.id===e}))},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-md-6 mb-5 mb-md-0"},r.a.createElement("h2",{className:"h3 mb-3 text-black font-heading-serif"},"Manage Add-on's"),r.a.createElement("div",{className:"p-3 p-lg-5 border"},te.a.map((function(t){if("accessory"===t.product_type)return r.a.createElement("div",{className:"form-group mt-3",key:t.id},r.a.createElement("label",{htmlFor:t.id,className:"text-black mr-1","data-toggle":"collapse",href:"#".concat(t.id),role:"button","aria-expanded":"false","aria-controls":t.id},e.isChecked(t.id)?r.a.createElement("input",{checked:!0,onChange:function(){return e.handleAddOn(t)},className:"mr-1",type:"checkbox",value:"1",id:t.id}):r.a.createElement("input",{checked:!1,onChange:function(){return e.handleAddOn(t)},className:"mr-1",type:"checkbox",value:"1",id:t.id}),t.name," - ",r.a.createElement("strong",null,e.props.formatMoney(t.price))),r.a.createElement("img",{className:"input-image",src:t.image}))}))))}}]),t}(n.Component)),he=(a(112),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={activeStep:0,steps:[{title:"Order Details",active:!0,isCompleted:!1},{title:"Customer Details",active:!1,isCompleted:!1},{title:"Payment Details",active:!1,isCompleted:!1}]},a.getStepContent=function(e){switch(e){case 0:return r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(pe,{cart:a.props.cart,formatMoney:a.props.formatMoney,addToCart:a.props.addToCart,removeFromCart:a.props.removeFromCart}),r.a.createElement(se,{removeFromCart:a.props.removeFromCart,formatMoney:a.props.formatMoney,cart:a.props.cart,activeStep:a.state.activeStep,handleBack:a.handleBack,handleNext:a.handleNext,stepLength:a.state.steps.length}));case 1:return r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(me,{formatMoney:a.props.formatMoney}),r.a.createElement(se,{formatMoney:a.props.formatMoney,cart:a.props.cart,activeStep:a.state.activeStep,handleBack:a.handleBack,handleNext:a.handleNext,stepLength:a.state.steps.length}));case 2:return r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(de,{formatMoney:a.props.formatMoney}),r.a.createElement(se,{formatMoney:a.props.formatMoney,cart:a.props.cart,activeStep:a.state.activeStep,handleBack:a.handleBack,handleNext:a.handleNext,stepLength:a.state.steps.length}));default:return"There was an error with your order"}},a.handleBack=function(){a.setState((function(e){return{activeStep:e.activeStep-1}}))},a.handleNext=function(){a.setState((function(e){return{activeStep:e.activeStep+1}}))},a.handleReset=function(){a.setState({activeStep:0})},a.renderSteps=function(){return a.state.steps.map((function(e,t){return r.a.createElement(oe.a,{key:t,completed:e.isCompleted},r.a.createElement(ie.a,null,e.title))}))},a.renderReset=function(){return r.a.createElement("div",{className:"text-center"},r.a.createElement(v.a,{className:"instructions"},"Youre Order was been Completed!"),r.a.createElement(V.HashLink,{to:"/#store"},r.a.createElement(w.a,{variant:"contained",color:"primary",className:"button ml-3"},"View More items")))},a.renderStepContent=function(){return r.a.createElement("div",{className:"site-section"},r.a.createElement("div",{className:"container"},a.getStepContent(a.state.activeStep)))},a.renderStepper=function(){var e;return e=a.state.activeStep===a.state.steps.length?a.renderReset():a.renderStepContent(),r.a.createElement(r.a.Fragment,null,r.a.createElement(le.a,{activeStep:a.state.activeStep},a.renderSteps()),e)},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.props.cart.length>0?this.renderStepper():r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"jumbotron text-center"},r.a.createElement("h2",null,"Your Cart is currently empty."),r.a.createElement("h4",null,"Check out these rentals you might be intrested in!")),r.a.createElement(ae,null)))}}]),t}(n.Component)),Ee=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={cart:[],quantity:0},a.formatMoney=function(e){return e.toLocaleString("en-US",{style:"currency",currency:"USD"})},a.addToCart=function(e,t){console.log(e),console.log(t),a.setState((function(a){var n=a.cart.find((function(t){return t.id===e.id}));if(n){var r=a.cart.filter((function(t){return t.id!==e.id})),c=n.quantity+=t;return n.quantity=c,{cart:[].concat(Object(i.a)(r),[n]),quantity:a.quantity+t}}return{cart:[].concat(Object(i.a)(a.cart),[e]),quantity:a.quantity+t}}))},a.removeFromCart=function(e){a.setState((function(t){var a=t.cart.find((function(t){return t.id===e}));if(a){var n=t.cart.filter((function(t){return t.id!==e}));return{cart:Object(i.a)(n),quantity:t.quantity-a.quantity}}}))},a.editCartItem=function(e,t){a.setState((function(a){var n=a.cart.find((function(t){return t.id===e})),r=a.cart.filter((function(t){return t.id!==e})),c=t-n.quantity;return n.quantity=t,{cart:[].concat(Object(i.a)(r),[n]),quantity:a.quantity+c}}))},a.getAddOns=function(){return a.state.cart.filter((function(e){return"accessories"===e.product_type}))},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h.HashRouter,null,r.a.createElement(J,{editCartItem:this.editCartItem,removeFromCart:this.removeFromCart,cart:this.state.cart,totalQuantity:this.state.quantity}),r.a.createElement(E.g,null,r.a.createElement(E.d,{exact:!0,path:"/",component:ne}),r.a.createElement(E.d,{exact:!0,path:"/bicycles/:id",render:function(t){return r.a.createElement(ce,Object.assign({},t,{formatMoney:e.formatMoney,addToCart:e.addToCart}))}}),r.a.createElement(E.d,{exact:!0,path:"/checkout",render:function(){return r.a.createElement(he,Object(o.a)({removeFromCart:e.removeFromCart,cart:e.state.cart,formatMoney:e.formatMoney,addToCart:e.addToCart},"removeFromCart",e.removeFromCart))}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},35:function(e){e.exports=JSON.parse('{"a":[{"id":1,"name":"Adult Male Bike","price":20.5,"image":"http://via.placeholder.com/250x250?text=Adult%20Male%20Bike","product_type":"bike"},{"id":2,"name":"Adult Female Bike","price":20.5,"image":"http://via.placeholder.com/250x250?text=Adult%20Female%20Bike","product_type":"bike"},{"id":3,"name":"Kids Unisex Bike","price":12.75,"image":"http://via.placeholder.com/250x250?text=Kids%20Unisex%20Bike","product_type":"bike"},{"id":4,"name":"Adult Unisex Helmet","price":4,"image":"http://via.placeholder.com/250x250?text=Adult%20Unisex%20Helmet","product_type":"accessory"},{"id":5,"name":"Kids Unisex Helmet","price":3.5,"image":"http://via.placeholder.com/250x250?text=Kids%20Unisex%20Helmet","product_type":"accessory"},{"id":6,"name":"Insurance","price":9.99,"image":"http://via.placeholder.com/250x250?text=Insurance","product_type":"addon"}]}')},75:function(e,t,a){e.exports=a(113)},80:function(e,t,a){},81:function(e,t,a){},98:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.39eb14b0.chunk.js.map