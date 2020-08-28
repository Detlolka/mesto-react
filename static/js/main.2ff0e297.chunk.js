(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){e.exports=a.p+"static/media/logo_header.855a8c98.svg"},14:function(e,t,a){e.exports=a(19)},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(11),o=a.n(s),c=(a(10),a(1)),i=a(13),l=a(5),u=a(2),p=a(3),d=a(8),m=a(7),h=a(12),f=a.n(h);var _=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("img",{className:"header__logo",src:f.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"}))},v=r.a.createContext();var E=function(e){var t=e.clickCard,a=(e.deleteCard,e.card),n=e.onCardDelete,s=e.onCardLike,o=r.a.useContext(v),c=a.owner._id===o.userId,i="element__del ".concat(c?"element__del_active":""),l=a.likes.some((function(e){return e._id===o.userId})),u="element__like ".concat(l?"element__like_active":"");return r.a.createElement("div",{className:"element"},r.a.createElement("img",{className:"element__image",alt:a.name,src:a.link,onClick:function(){return t(a)}}),r.a.createElement("div",{className:"element__about"},r.a.createElement("p",{className:"element__title"},a.name),r.a.createElement("div",{className:"element__like-container"},r.a.createElement("button",{type:"button",className:u,"aria-label":"\u041b\u0430\u0439\u043a",onClick:function(){s(a)}}),r.a.createElement("span",{className:"element__like-counter"},a.likes.length))),r.a.createElement("button",{type:"button",className:i,"aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",onClick:function(){n(a._id)}}))},b=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("main",{className:"content"},r.a.createElement("section",{className:"profile"},r.a.createElement("div",{className:"profile__avatar",onClick:this.props.onEditAvatar},r.a.createElement("img",{className:"profile__image",src:this.context.userAvatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440\u043a\u0430"})),r.a.createElement("div",{className:"profile__info"},r.a.createElement("div",{className:"profile__container"},r.a.createElement("h1",{className:"profile__title"},this.context.userName),r.a.createElement("button",{type:"button",className:"profile__editButton",onClick:this.props.onEditProfile})),r.a.createElement("h2",{className:"profile__subtitle"},this.context.userAbout)),r.a.createElement("button",{type:"button",className:"profile__addButton",onClick:this.props.onEditPlace})),r.a.createElement("section",{className:"elements"},this.props.cards.map((function(t,a){return r.a.createElement(E,{onCardLike:e.props.onCardLike,clickCard:e.props.onEditImage,deleteCard:e.props.onDeletePlace,onCardDelete:e.props.onCardDelete,card:t,key:a})}))))}}]),a}(r.a.Component);b.contextType=v;var C=b;var N=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__author"},"\xa9 2020 Mesto Russia"))};var P=function(e){var t=e.card,a=e.onClose;return r.a.createElement("div",{className:"popup popup_image "+(t&&"popup_opened")},t&&r.a.createElement("div",{className:"popup__image-container"},r.a.createElement("img",{className:"popup__picture",alt:t.name,src:t.link}),r.a.createElement("p",{className:"popup__description"},t.name),r.a.createElement("button",{type:"button",className:"popup__close","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:a})))};var k=function(e){var t=e.name,a=e.title,n=e.buttonName,s=e.isOpen,o=e.onClose,c=e.children,i=e.onSubmit;return r.a.createElement("div",{className:"popup popup_".concat(t," ")+(s&&"popup_opened")},r.a.createElement("div",{className:"popup__container"},r.a.createElement("form",{onSubmit:i,className:"popup__form",name:t,method:"GET",action:"#",noValidate:!0},r.a.createElement("p",{className:"popup__title"},a),c,r.a.createElement("button",{type:"submit",className:"popup__save"},n),r.a.createElement("button",{type:"button",className:"popup__close","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:o}))))};var O=function(e){var t=e.onClose,a=e.isOpen,s=e.onUpdateUser,o=r.a.useContext(v),i=Object(n.useState)(""),l=Object(c.a)(i,2),u=l[0],p=l[1],d=Object(n.useState)(""),m=Object(c.a)(d,2),h=m[0],f=m[1];return Object(n.useEffect)((function(){p(o.userName),f(o.userAbout)}),[o]),r.a.createElement(k,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonName:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:a,onClose:t,onSubmit:function(e){e.preventDefault(),s(u,h),t()},children:r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"text",name:"profileName",value:u,className:"popup__input popup__input_name",id:"input-name",placeholder:"\u0418\u043c\u044f",required:!0,minLength:"2",maxLength:"40",pattern:"[\u0410-\u042f\u0401\u0430-\u044f\u0451A-Za-z-\\s]*",onChange:function(e){p(e.target.value)}}),r.a.createElement("span",{className:"error",id:"input-name-error"}),r.a.createElement("input",{type:"text",name:"profileAbout",value:h,className:"popup__input popup__input_about",id:"input-about",placeholder:"\u041e \u0441\u0435\u0431\u0435",required:!0,minLength:"2",maxLength:"200",onChange:function(e){f(e.target.value)}}),r.a.createElement("span",{className:"error",id:"input-about-error"}))})};var g=function(e){var t=e.onClose,a=e.isOpen,n=e.onUpdateAvatar,s=r.a.useRef();return r.a.useEffect((function(){a&&(s.current.value="")})),r.a.createElement(k,{onSubmit:function(e){e.preventDefault(),n({avatar:s.current.value}),t()},name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonName:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:a,onClose:t,children:r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"url",name:"avatarPhoto",className:"popup__input popup__input_avatar",id:"input-avatar",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 URL",ref:s,value:s.value,required:!0}),r.a.createElement("span",{className:"error",id:"input-avatar-error"}))})};var A=function(e){var t=e.isOpen,a=e.onClose,s=e.onAddPlace,o=Object(n.useState)(""),i=Object(c.a)(o,2),l=i[0],u=i[1],p=Object(n.useState)(""),d=Object(c.a)(p,2),m=d[0],h=d[1];return r.a.useEffect((function(){t&&(u(""),h(""))})),r.a.createElement(k,{name:"card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonName:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),s(l,m),a()},children:r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"text",name:"placeName",className:"popup__input popup__input_place",id:"input-place",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"1",maxLength:"30",value:l,onChange:function(e){u(e.target.value)},pattern:"[\u0410-\u042f\u0401\u0430-\u044f\u0451A-Za-z-\\s]*"}),r.a.createElement("span",{className:"error",id:"input-place-error"}),r.a.createElement("input",{type:"url",name:"placePhoto",className:"popup__input popup__input_image",id:"input-url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",onChange:function(e){h(e.target.value)},value:m,required:!0}),r.a.createElement("span",{className:"error",id:"input-url-error"}))})},U=new(function(){function e(t){Object(u.a)(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(p.a)(e,[{key:"_response",value:function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e \u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._response)}},{key:"createCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._response)}},{key:"removeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._response)}},{key:"likeCardStatus",value:function(e,t){return t?fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._response):fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._response)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._response)}},{key:"changeUserInfo",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._response)}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._response)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-13",headers:{authorization:"3d90ed66-5470-4061-9f08-ef73936051ae","Content-Type":"application/json"}}),y=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleEditProfileClick=function(){n.setState({isEditProfilePopupOpen:!0})},n.handleEditPlaceClick=function(){n.setState({isAddPlacePopupOpen:!0})},n.handleEditAvatarClick=function(){n.setState({isEditAvatarPopupOpen:!0})},n.handleEditDeleteClick=function(){n.setState({isDeletePlacePopupOpen:!0})},n.handleEditImageClick=function(e){n.setState({selectedCard:e})},n.closeAllPopups=function(){n.setState({isEditProfilePopupOpen:!1,isAddPlacePopupOpen:!1,isEditAvatarPopupOpen:!1,selectedCard:null,isDeletePlacePopupOpen:!1})},n.handleUpdateUser=function(e,t){U.changeUserInfo(e,t).then((function(e){return n.setState({currentUser:Object(l.a)(Object(l.a)({},n.state.currentUser),{},{userName:e.name,userAbout:e.about})})})).catch((function(e){return console.error(e)}))},n.handleUpdateAvatar=function(e){U.changeAvatar(e).then((function(e){return n.setState({currentUser:Object(l.a)(Object(l.a)({},n.state.currentUser),{},{userAvatar:e.avatar})})})).catch((function(e){return console.error(e)}))},n.handleCardDelete=function(e){U.removeCard(e).then((function(t){var a=n.state.cardItems.filter((function(t){return t._id!==e}));n.setState({cardItems:a})})).catch((function(e){return console.error(e)}))},n.changeCardLike=function(e){var t=e.likes.some((function(e){return e._id===n.state.currentUser.userId}));U.likeCardStatus(e._id,!t).then((function(t){var a=n.state.cardItems.map((function(a){return a._id===e._id?t:a}));n.setState({cardItems:a})})).catch((function(e){return console.error(e)}))},n.handleAddPlace=function(e,t){U.createCard(e,t).then((function(e){n.setState({cardItems:[e].concat(Object(i.a)(n.state.cardItems))})})).catch((function(e){return console.error(e)}))},n.state={isEditProfilePopupOpen:!1,isAddPlacePopupOpen:!1,isEditAvatarPopupOpen:!1,selectedCard:null,isDeletePlacePopupOpen:!1,currentUser:{userName:"",userAbout:"",userAvatar:"",userId:""},cardItems:[],isLoadingUpdate:{editProfile:!1,editAvatar:!1,createPlace:!1}},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;Promise.all([U.getInitialCards(),U.getUserInfo()]).then((function(t){var a=Object(c.a)(t,2),n=a[0],r=a[1];e.setState({currentUser:{userName:r.name,userAbout:r.about,userAvatar:r.avatar,userId:r._id},cardItems:n})})).catch((function(e){return console.error(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement(v.Provider,{value:this.state.currentUser},r.a.createElement("div",{className:"page"},r.a.createElement(_,null),r.a.createElement(C,{onEditProfile:this.handleEditProfileClick,onEditPlace:this.handleEditPlaceClick,onEditImage:this.handleEditImageClick,onDeletePlace:this.handleEditDeleteClick,onEditAvatar:this.handleEditAvatarClick,cards:this.state.cardItems,onCardLike:this.changeCardLike,onCardDelete:this.handleCardDelete}),r.a.createElement(N,null),r.a.createElement(k,{name:"delete-place",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonName:"\u0414\u0430",isOpen:this.state.isDeletePlacePopupOpen,onClose:this.closeAllPopups}),r.a.createElement(O,{isOpen:this.state.isEditProfilePopupOpen,onClose:this.closeAllPopups,onUpdateUser:function(t,a){return e.handleUpdateUser(t,a)}}),r.a.createElement(g,{isOpen:this.state.isEditAvatarPopupOpen,onClose:this.closeAllPopups,onUpdateAvatar:function(t){var a=t.avatar;return e.handleUpdateAvatar(a)}}),r.a.createElement(A,{isOpen:this.state.isAddPlacePopupOpen,onClose:this.closeAllPopups,onAddPlace:this.handleAddPlace}),r.a.createElement(P,{card:this.state.selectedCard,onClose:this.closeAllPopups})))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.2ff0e297.chunk.js.map