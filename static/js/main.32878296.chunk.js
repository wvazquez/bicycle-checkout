(window["webpackJsonpbicycle-checkout"]=window["webpackJsonpbicycle-checkout"]||[]).push([[0],{33:function(e){e.exports=JSON.parse('{"a":[{"id":1,"name":"Adult Male Bike","price":20.5,"image":"http://via.placeholder.com/250x250?text=Adult%20Male%20Bike","product_type":"bike"},{"id":2,"name":"Adult Female Bike","price":20.5,"image":"http://via.placeholder.com/250x250?text=Adult%20Female%20Bike","product_type":"bike"},{"id":3,"name":"Kids Unisex Bike","price":12.75,"image":"http://via.placeholder.com/250x250?text=Kids%20Unisex%20Bike","product_type":"bike"},{"id":4,"name":"Adult Unisex Helmet","price":4,"image":"http://via.placeholder.com/250x250?text=Adult%20Unisex%20Helmet","product_type":"accessory"},{"id":5,"name":"Kids Unisex Helmet","price":3.5,"image":"http://via.placeholder.com/250x250?text=Kids%20Unisex%20Helmet","product_type":"accessory"},{"id":6,"name":"Insurance","price":9.99,"image":"http://via.placeholder.com/250x250?text=Insurance","product_type":"addon"}]}')},67:function(e,t,a){e.exports=a(90)},72:function(e,t,a){},73:function(e,t,a){},77:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),o=(a(72),a(19)),m=a(12),i=a(9),s=a(13),u=a(14),d=a(15),p=a(23),E=a(32),b=a(133),h=a(134),y=a(136),f=a(43),g=a(137),N=a(132),v=a(142),x=a(60),k=a.n(x),C=a(59),S=a.n(C),O=a(135),w=a(139),_=a(131),M=a(130),q=a(91),j=a(129),F=a(127),A=a(128),B=(a(73),function(e){return r.a.createElement(q.a,{key:e.id,alignItems:"flex-start"},r.a.createElement(F.a,null,r.a.createElement(A.a,{alt:e.name,src:e.image})),r.a.createElement(j.a,{primary:e.name,secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{component:"span",className:"sidecartitem-title",variant:"body2",color:"textPrimary"},"$",e.price," / each"),r.a.createElement(f.a,{component:"span",variant:"body2",color:"textPrimary"},"Quantity: ",e.quantity))}))}),T=(a(77),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={mobileMenuElement:null,isShoppingCartOpen:!1,isMobileMenuOpen:!1},a.toggleSideCart=function(e){return function(t){(!t||"keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&a.setState({isShoppingCartOpen:e})}},a.renderSideCartItems=function(){return a.props.cart.length>0?a.props.cart.map((function(e){return r.a.createElement(B,Object.assign({key:e.id.toString()},e))})):r.a.createElement("p",null,"Your shopping cart is currently empty")},a.renderSideCart=function(){return r.a.createElement(w.a,{anchor:"right",open:a.state.isShoppingCartOpen,onClose:a.toggleSideCart(!1),onOpen:a.toggleSideCart(!0)},r.a.createElement("div",{className:"sidecart-list",role:"presentation"},r.a.createElement("h2",null,"Shopping Cart"),r.a.createElement(M.a,null),r.a.createElement(_.a,null,a.renderSideCartItems())))},a.renderMobileMenu=function(){return r.a.createElement(v.a,{anchorEl:a.state.mobileMenuElement,anchorOrigin:{vertical:"top",horizontal:"right"},id:"mobile-menu",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:a.state.isMobileMenuOpen,onClose:a.handleMenuClose},r.a.createElement(p.b,{to:"/"},r.a.createElement(N.a,null,"Home")),r.a.createElement(p.b,{to:"/bicycles"},r.a.createElement(N.a,null,"Store")))},a.handleMobileMenuOpen=function(e){a.setState({mobileMenuElement:e.currentTarget,isMobileMenuOpen:!a.state.isMobileMenuOpen})},a.handleMenuClose=function(){a.setState({mobileMenuElement:null,isMobileMenuOpen:!1})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.totalQuantity;return r.a.createElement("div",{className:"grow"},r.a.createElement(b.a,{position:"static",className:"appbar"},r.a.createElement(h.a,null,r.a.createElement(p.b,{to:"/"},r.a.createElement(f.a,{className:"appbar-title",variant:"h6",noWrap:!0},"Bicycle Rental")),r.a.createElement("div",{className:"grow"}),r.a.createElement("div",{className:"sectionDesktop"},r.a.createElement(p.b,{to:"/"}," ",r.a.createElement(O.a,{className:"button"},"Home")),r.a.createElement(p.b,{to:"/checkout"}," ",r.a.createElement(O.a,{className:"button"},"Checkout"))),r.a.createElement(y.a,{"aria-label":"show 4 new items in shopping cart",color:"inherit",edge:"end","aria-controls":"shopping-cart","aria-haspopup":"true",onClick:this.toggleSideCart(!0)},r.a.createElement(g.a,{badgeContent:e,color:"secondary"},r.a.createElement(S.a,{color:"primary"}))),r.a.createElement("div",{className:"sectionMobile"},r.a.createElement(y.a,{"aria-label":"show more","aria-controls":"mobile-menu","aria-haspopup":"true",onClick:this.handleMobileMenuOpen,color:"inherit"},r.a.createElement(k.a,{color:"primary"}))))),this.renderMobileMenu(),this.renderSideCart())}}]),t}(n.Component)),L=a(61),P=a.n(L),I=(a(81),function(e){return e.toLocaleString("en-US",{style:"currency",currency:"USD"})});function D(e){return r.a.createElement(p.b,{to:"/bicycles/".concat(e.id),className:"col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item sweets"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:e.image,className:"card-img-top store-img",alt:e.name}),r.a.createElement("span",{className:"store-item-icon"},r.a.createElement(P.a,null))),r.a.createElement("div",{className:"card-body card-body-product"},r.a.createElement("div",{className:"card-text text-center text-capitalize"},r.a.createElement("h5",{id:"store-item-name"},e.name),r.a.createElement("h5",{className:"store-item-value"},r.a.createElement("strong",{id:"store-item-price",className:"font-weight-bold"},I(e.price)))))))}a(82);var Q=function(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid jumbotron-bicycle"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-capitalize"},"Reserve. Pick-up.",r.a.createElement("strong",{className:"jumbotron-title "},"Explore!")),r.a.createElement("a",{href:"#store",className:"btn jumbotron-link text-uppercase my-2"},"View rentals")))},U=a(33),z=(a(83),function(){return r.a.createElement("div",{id:"store",className:"store py-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto col-sm-6 text-center"},r.a.createElement("h1",{className:"text-capitalize"},"Bicycle ",r.a.createElement("strong",{className:"banner-title "},"Rentals")))),r.a.createElement("div",{className:"store-items row",id:"store-items"},U.a.map((function(e,t){console.log();var a=e.id,n=e.name,c=e.image,l=e.product_type,o=e.price;if("bike"===l)return r.a.createElement(D,{price:o,name:n,key:a,id:a,image:c})})))))}),R=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,null),r.a.createElement(z,null))},H=function(e){return r.a.createElement("div",{className:"mb-5"},r.a.createElement("div",{className:"input-group mb-3",style:{maxWidth:"200px"}},r.a.createElement("div",{className:"input-group-prepend",name:"decrease",onClick:function(t){return e.handleQuantity(t)}},r.a.createElement("button",{className:"btn btn-outline-primary js-btn-minus",type:"button"},"\u2212")),r.a.createElement("input",{readOnly:!0,type:"text",className:"form-control text-center border mr-0",value:e.quantity,placeholder:"","aria-label":"Example text with button addon","aria-describedby":"button-addon1"}),r.a.createElement("div",{className:"input-group-append",name:"increase",onClick:function(t){return e.handleQuantity(t)}},r.a.createElement("button",{className:"btn btn-outline-primary js-btn-plus",type:"button"},"+"))))},Y=function(){return r.a.createElement("div",{className:"site-section"},r.a.createElement("div",{className:"container"},r.a.createElement("h3",{className:"sub-title text-center"},"Reviews"),r.a.createElement("blockquote",{className:"testimony"},r.a.createElement("img",{src:"img/people/person_1.jpg",alt:"Image"}),r.a.createElement("span",null,"\u201cLorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sapiente beatae, nemo quasi quo neque consequatur rem porro reprehenderit, a dignissimos unde ut enim fugiat deleniti quae placeat in cumque?\u201d")),r.a.createElement("blockquote",{className:"testimony"},r.a.createElement("img",{src:"img/people/person_2.jpg",alt:"Image"}),r.a.createElement("span",null,"\u201cLorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sapiente beatae, nemo quasi quo neque consequatur rem porro reprehenderit, a dignissimos unde ut enim fugiat deleniti quae placeat in cumque?\u201d")),r.a.createElement("blockquote",{className:"testimony"},r.a.createElement("img",{src:"img/people/person_3.jpg",alt:"Image"}),r.a.createElement("span",null,"\u201cLorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sapiente beatae, nemo quasi quo neque consequatur rem porro reprehenderit, a dignissimos unde ut enim fugiat deleniti quae placeat in cumque?\u201d")),r.a.createElement("blockquote",{className:"testimony"},r.a.createElement("img",{src:"img/people/person_4.jpg",alt:"Image"}),r.a.createElement("span",null,"\u201cLorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sapiente beatae, nemo quasi quo neque consequatur rem porro reprehenderit, a dignissimos unde ut enim fugiat deleniti quae placeat in cumque?\u201d"))))},K=(a(84),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={id:1,name:"",price:"",image:"",quantity:1},a.handleQuantity=function(e){"decrease"!==e.currentTarget.getAttribute("name")?a.setState({quantity:a.state.quantity+1}):a.checkQuantity()&&a.setState({quantity:a.state.quantity-1})},a.checkQuantity=function(){if(a.state.quantity>0)return!0},a.handleAddToCart=function(){a.props.addToCart(a.state,a.state.quantity),a.setState({quantity:1})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=parseInt(this.props.match.params.id),t=U.a.find((function(t){if(t.id===e)return t})),a=t.name,n=t.price,r=t.image;this.setState({id:e,name:a,price:n,image:r})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"site-section mt-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("img",{className:"d-block w-100",src:this.state.image,alt:this.state.name})),r.a.createElement("div",{className:"col-lg-5 ml-auto"},r.a.createElement("h2",{className:"text-primary"},this.state.name," - ",this.state.price),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non eos inventore aspernatur voluptatibus ratione odit molestias molestiae, illum et impedit veniam modi sunt quas nam mollitia earum perferendis, dolorem. Magni."),r.a.createElement(H,{handleQuantity:this.handleQuantity,quantity:this.state.quantity}),r.a.createElement("p",null,r.a.createElement("span",{className:"buy-now btn btn-sm height-auto px-4 py-3 btn-primary",onClick:function(){return e.handleAddToCart()}},"Add To Cart")))))),r.a.createElement(Y,null))}}]),t}(n.Component)),V=a(143),W=a(138),J=a(140),$=function(){return r.a.createElement("div",{className:"col-md-6 mb-5 mb-md-0"},r.a.createElement("h2",{className:"h3 mb-3 text-black font-heading-serif"},"Billing Details"),r.a.createElement("div",{className:"p-3 p-lg-5 border"},r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("label",{htmlFor:"c_fname",className:"text-black"},"First Name ",r.a.createElement("span",{className:"text-danger"},"*")),r.a.createElement("input",{type:"text",className:"form-control",id:"c_fname",name:"c_fname"})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("label",{htmlFor:"c_lname",className:"text-black"},"Last Name ",r.a.createElement("span",{className:"text-danger"},"*")),r.a.createElement("input",{type:"text",className:"form-control",id:"c_lname",name:"c_lname"}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("label",{htmlFor:"c_companyname",className:"text-black"},"Company Name "),r.a.createElement("input",{type:"text",className:"form-control",id:"c_companyname",name:"c_companyname"}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("label",{htmlFor:"c_address",className:"text-black"},"Address ",r.a.createElement("span",{className:"text-danger"},"*")),r.a.createElement("input",{type:"text",className:"form-control",id:"c_address",name:"c_address",placeholder:"Street address"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Apartment, suite, unit etc. (optional)"})),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("label",{htmlFor:"c_state_country",className:"text-black"},"State / Country ",r.a.createElement("span",{className:"text-danger"},"*")),r.a.createElement("input",{type:"text",className:"form-control",id:"c_state_country",name:"c_state_country"})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("label",{htmlFor:"c_postal_zip",className:"text-black"},"Posta / Zip ",r.a.createElement("span",{className:"text-danger"},"*")),r.a.createElement("input",{type:"text",className:"form-control",id:"c_postal_zip",name:"c_postal_zip"}))),r.a.createElement("div",{className:"form-group row mb-5"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("label",{htmlFor:"c_email_address",className:"text-black"},"Email Address ",r.a.createElement("span",{className:"text-danger"},"*")),r.a.createElement("input",{type:"text",className:"form-control",id:"c_email_address",name:"c_email_address"})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("label",{htmlFor:"c_phone",className:"text-black"},"Phone ",r.a.createElement("span",{className:"text-danger"},"*")),r.a.createElement("input",{type:"text",className:"form-control",id:"c_phone",name:"c_phone",placeholder:"Phone Number"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"c_create_account",className:"text-black","data-toggle":"collapse",href:"#create_an_account",role:"button","aria-expanded":"false","aria-controls":"create_an_account"},r.a.createElement("input",{type:"checkbox",value:"1",id:"c_create_account"})," Create an account?"),r.a.createElement("div",{className:"collapse",id:"create_an_account"},r.a.createElement("div",{className:"py-2"},r.a.createElement("p",{className:"mb-3"},"Create an account by entering the information below. If you are a returning customer please login at the top of the page."),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"c_account_password",className:"text-black"},"Account Password"),r.a.createElement("input",{type:"email",className:"form-control",id:"c_account_password",name:"c_account_password",placeholder:""})))))))},Z=(a(85),function(e){console.log(e);var t=0;return r.a.createElement("div",{className:"mb-5 orderform-container"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h2",{className:"h3 mb-3 text-black font-heading-serif"},"Your Order"),r.a.createElement("div",{className:"p-3 p-lg-5 border"},r.a.createElement("table",{className:"table site-block-order-table mb-5"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Product"),r.a.createElement("td",null,"Total"))),r.a.createElement("tbody",null,e.cart.map((function(a){return t+=a.price*a.quantity,r.a.createElement("tr",{key:a.id},r.a.createElement("td",null,a.name," ",r.a.createElement("strong",{className:"mx-2"},"x")," ",a.quantity),r.a.createElement("td",null,e.formatMoney(a.price)))})),r.a.createElement("tr",{className:"seperator"},r.a.createElement("td",{className:""}),r.a.createElement("td",{className:""})),r.a.createElement("tr",null,r.a.createElement("td",{className:"text-black"},"Cart Subtotal"),r.a.createElement("td",{className:"text-black"},e.formatMoney(t))),r.a.createElement("tr",null,r.a.createElement("td",{className:"text-black"},"Taxes and Fees"),r.a.createElement("td",{className:"text-black"},e.formatMoney(.08875*t))),r.a.createElement("tr",null,r.a.createElement("td",{className:"text-black font-weight-bold"},r.a.createElement("strong",null,"Order Total")),r.a.createElement("td",{className:"text-black font-weight-bold"},r.a.createElement("strong",null,e.formatMoney(function(e){return.08875*e+e}(t))))))),r.a.createElement("div",{className:"text-center"},r.a.createElement(O.a,{disabled:0===e.activeStep,onClick:e.handleBack,className:"button"},e.activeStep===e.stepLength-1?"Edit Order":"Back"),r.a.createElement(O.a,{variant:"contained",color:"primary",onClick:e.handleNext,className:"button ml-3"},e.activeStep===e.stepLength-1?"Complete Purchase":"Next")))))}),G=(a(86),n.Component,function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"h3 mb-3 text-black font-heading-serif"},"Coupon Code"),r.a.createElement("div",{className:"p-3 border"},r.a.createElement("label",{htmlFor:"couponcode",className:"text-black mb-3"},"Enter your coupon code if you have one"),r.a.createElement("div",{className:"input-group w-75"},r.a.createElement("input",{type:"text",className:"form-control",id:"couponcode",placeholder:"Coupon Code","aria-label":"Coupon Code","aria-describedby":"couponcode-apply"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-primary btn-sm rounded px-4",type:"button",id:"couponcode-apply"},"Apply")))))}),X=(a(87),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={toggleCreditForm:!0},a.toggleCreditFormState=function(){a.setState((function(e){return{toggleCreditForm:!e.toggleCreditForm}}))},a.renderCreditForm=function(){return r.a.createElement("div",{className:"p-3"},r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("label",{htmlFor:"cc-number",className:"text-black"},"Card Number ",r.a.createElement("span",{className:"text-danger"},"*")),r.a.createElement("input",{type:"text",className:"form-control",id:"cc-number",name:"cc-number"}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-md-5"},r.a.createElement("label",{htmlFor:"cc-name",className:"text-black"},"Name:",r.a.createElement("span",{className:"text-danger"},"*")),r.a.createElement("input",{type:"text",className:"form-control",id:"cc-name",name:"cc-name"})),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("label",{htmlFor:"cc-date",className:"text-black"},"Exp. Date:",r.a.createElement("span",{className:"text-danger"},"*")),r.a.createElement("input",{type:"text",className:"form-control",id:"cc-date",name:"cc-date"})),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("label",{htmlFor:"cc-ccv",className:"text-black"},"CCV "),r.a.createElement("input",{type:"text",className:"form-control",id:"cc-ccv",name:"cc-ccv"}))))},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-6 mb-5 mb-md-0"},r.a.createElement("h2",{className:"h3 mb-3 text-black font-heading-serif"},"Payment Method"),r.a.createElement("div",{className:"form-group delivery-options-container"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"custom-control custom-radio"},r.a.createElement("input",{type:"radio",checked:this.state.toggleCreditForm,id:"creditcard",name:"paymentmethod",className:"custom-control-input",onClick:this.toggleCreditFormState}),r.a.createElement("label",{className:"custom-control-label",htmlFor:"creditcard"},"Credit Card"),r.a.createElement("p",{className:"delivery-option-subheading"},"Safe payment using your bank account or credit card."),r.a.createElement("p",{className:"delivery-option-subheading"},"Visa. Mastercard. Discover. American Express")),this.state.toggleCreditForm?this.renderCreditForm():null)),r.a.createElement("div",{className:"card mt-3"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"custom-control custom-radio"},r.a.createElement("input",{type:"radio",id:"paypal",name:"paymentmethod",className:"custom-control-input",onClick:this.toggleCreditFormState}),r.a.createElement("label",{className:"custom-control-label",htmlFor:"paypal"},"PayPal"),r.a.createElement("p",{className:"delivery-option-subheading"},"You will be redirected to PayPals website to complete your purchase"))))),r.a.createElement(G,null))}}]),t}(n.Component)),ee=(a(88),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={addOns:[]},a.toggleAddOn=function(){a.setState((function(e){return{showForm:!e.showForm}}))},a.handleAddOn=function(e){console.log(e),a.setState((function(t){var n=t.addOns.find((function(t){return t.id===e.id})),r=t.addOns.filter((function(t){return t.id!==e.id}));return n.isAdded?(a.props.removeFromCart(e.id),n.isAdded=!1,{addOn:[].concat(Object(o.a)(r),[n])}):(e.quantity=1,a.props.addToCart(e,1),n.isAdded=!0,{addOn:[].concat(Object(o.a)(r),[n])})}))},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=U.a.filter((function(e){if("accessory"===e.product_type)return e.isAdded=!1,e}));console.log(e),this.setState({addOns:Object(o.a)(e)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-md-6 mb-5 mb-md-0"},r.a.createElement("h2",{className:"h3 mb-3 text-black font-heading-serif"},"Manage Add-on's"),r.a.createElement("div",{className:"p-3 p-lg-5 border"},this.state.addOns.map((function(t){return r.a.createElement("div",{className:"form-group mt-3",key:t.id},r.a.createElement("label",{htmlFor:t.id,className:"text-black mr-1","data-toggle":"collapse",href:"#".concat(t.id),role:"button","aria-expanded":"false","aria-controls":t.id},r.a.createElement("input",{onClick:function(){return e.handleAddOn(t)},className:"mr-1",type:"checkbox",value:"1",id:t.id}),t.name," - ",r.a.createElement("strong",null,e.props.formatMoney(t.price))),r.a.createElement("img",{className:"input-image",src:t.image}))}))))}}]),t}(n.Component)),te=(a(89),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={activeStep:0,steps:[{title:"Order Details",active:!0,isCompleted:!1},{title:"Customer Details",active:!1,isCompleted:!1},{title:"Payment Details",active:!1,isCompleted:!1}]},a.getStepContent=function(e){switch(e){case 0:return r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(ee,{formatMoney:a.props.formatMoney,addToCart:a.props.addToCart,removeFromCart:a.props.removeFromCart}),r.a.createElement(Z,{formatMoney:a.props.formatMoney,cart:a.props.cart,activeStep:a.state.activeStep,handleBack:a.handleBack,handleNext:a.handleNext,stepLength:a.state.steps.length}));case 1:return r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement($,{formatMoney:a.props.formatMoney}),r.a.createElement(Z,{formatMoney:a.props.formatMoney,cart:a.props.cart,activeStep:a.state.activeStep,handleBack:a.handleBack,handleNext:a.handleNext,stepLength:a.state.steps.length}));case 2:return r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(X,{formatMoney:a.props.formatMoney}),r.a.createElement(Z,{formatMoney:a.props.formatMoney,cart:a.props.cart,activeStep:a.state.activeStep,handleBack:a.handleBack,handleNext:a.handleNext,stepLength:a.state.steps.length}));default:return"There was an error with your order"}},a.handleBack=function(){a.setState((function(e){return{activeStep:e.activeStep-1}}))},a.handleNext=function(){a.setState((function(e){return{activeStep:e.activeStep+1}}))},a.handleReset=function(){a.setState({activeStep:0})},a.renderSteps=function(){return a.state.steps.map((function(e,t){return r.a.createElement(W.a,{key:t,completed:e.isCompleted},r.a.createElement(J.a,null,e.title))}))},a.renderReset=function(){return r.a.createElement("div",{className:"text-center"},r.a.createElement(f.a,{className:"instructions"},"Youre Order was been Completed!"),r.a.createElement(p.b,{to:"/"},r.a.createElement(O.a,{variant:"contained",color:"primary",className:"button ml-3"},"View More items")))},a.renderStepContent=function(){return r.a.createElement("div",{className:"site-section"},r.a.createElement("div",{className:"container"},a.getStepContent(a.state.activeStep)))},a.renderStepper=function(){var e;return e=a.state.activeStep===a.state.steps.length?a.renderReset():a.renderStepContent(),r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,{activeStep:a.state.activeStep},a.renderSteps()),e)},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.props.cart.length>0?this.renderStepper():r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"jumbotron text-center"},r.a.createElement("h2",null,"Your Cart is currently empty."),r.a.createElement("h4",null,"Check out these rentals you might be intrested in!")),r.a.createElement(z,null)))}}]),t}(n.Component)),ae=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={cart:[],quantity:0},a.formatMoney=function(e){return e.toLocaleString("en-US",{style:"currency",currency:"USD"})},a.addToCart=function(e,t){console.log(e),console.log(t),a.setState((function(a){var n=a.cart.find((function(t){return t.id===e.id}));if(n){var r=a.cart.filter((function(t){return t.id!==e.id})),c=n.quantity+=t;return n.quantity=c,{cart:[].concat(Object(o.a)(r),[n]),quantity:a.quantity+t}}return{cart:[].concat(Object(o.a)(a.cart),[e]),quantity:a.quantity+t}}))},a.removeFromCart=function(e){a.setState((function(t){var a=t.cart.find((function(t){return t.id===e}));if(a){var n=t.cart.filter((function(t){return t.id!==e}));return{cart:Object(o.a)(n),quantity:t.quantity-a.quantity}}}))},a.reduceFromCart=function(){},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(p.a,null,r.a.createElement(T,{cart:this.state.cart,totalQuantity:this.state.quantity}),r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/",component:R}),r.a.createElement(E.a,{exact:!0,path:"/bicycles/:id",render:function(t){return r.a.createElement(K,Object.assign({},t,{formatMoney:e.formatMoney,addToCart:e.addToCart}))}}),r.a.createElement(E.a,{exact:!0,path:"/checkout",render:function(){return r.a.createElement(te,{cart:e.state.cart,formatMoney:e.formatMoney,addToCart:e.addToCart,removeFromCart:e.removeFromCart})}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[67,1,2]]]);
//# sourceMappingURL=main.32878296.chunk.js.map