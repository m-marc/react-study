(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],{100:function(e,t,a){e.exports=a(153)},105:function(e,t,a){},106:function(e,t,a){},11:function(e,t,a){e.exports={wrapper:"h5_wrapper__3_igH",text_center:"h5_text_center__2PP2v",header:"h5_header__X-7MK",header_active:"h5_header_active__1GEb8",btn:"h5_btn__3-fqW",active:"h5_active__14AL6"}},153:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(29),c=a.n(l),o=(a(105),a(86)),u=a.n(o),i=a(3),s=a(24),m=a(5),p=a(11),E=a.n(p);var _=function(){return r.a.createElement("div",{className:E.a.wrapper},r.a.createElement("h1",null,"404"),r.a.createElement("h3",null,"Page not found!"),r.a.createElement("p",null,"This may not mean anything.",r.a.createElement("br",null),"I'm probably working on something that has blown up."))},d=a(26),h=a.n(d);var g=function(e){return r.a.createElement("div",{className:h.a.messageApp},r.a.createElement("div",{className:h.a.messageWrapper},r.a.createElement("div",{className:h.a.message__avatar},r.a.createElement("img",{src:e.avatar,alt:"Your avatar"})),r.a.createElement("div",{className:h.a.messageBody},r.a.createElement("div",{className:h.a.message__username},e.name),r.a.createElement("div",null,e.message),r.a.createElement("div",{className:h.a.message__time},e.time))))},v="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",f="Some Name",b="some text",k="22:00";var C=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(g,{avatar:v,name:f,message:b,time:k}),r.a.createElement("hr",null),r.a.createElement("hr",null))};var O=function(e){return r.a.createElement("div",null,r.a.createElement("span",{className:"priority_".concat(e.affair.priority)},e.affair.name),r.a.createElement("button",{className:"deleteBtn",onClick:function(){return e.deleteAffairCallback(e.affair._id)}},"X"))};var N=function(e){var t=e.data.map((function(t){return r.a.createElement(O,{key:t._id,affair:t,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",{className:"affairList"},t,r.a.createElement("div",{className:"filterBtns"},r.a.createElement("button",{className:"priority priority-filter",onClick:function(){return e.setFilter("all")}},"All"),r.a.createElement("button",{className:"priority_high priority-filter",onClick:function(){return e.setFilter("high")}},"High"),r.a.createElement("button",{className:"priority_middle priority-filter",onClick:function(){return e.setFilter("middle")}},"Middle"),r.a.createElement("button",{className:"priority_low priority-filter",onClick:function(){return e.setFilter("low")}},"Low")))},y=(a(106),[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}]);var j=function(){var e=Object(n.useState)(y),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("all"),o=Object(i.a)(c,2),u=o[0],s=o[1],m=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(a,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(N,{data:m,setFilter:s,deleteAffairCallback:function(e){return l(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},x=a(49),w=a(27),S=a.n(w),T=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?S.a.error_input:S.a.input;return r.a.createElement("div",{className:S.a.wrapper},r.a.createElement("input",{value:t,onChange:a,className:o}),r.a.createElement("button",{className:S.a.btn_add,onClick:n},"Add new user"),r.a.createElement("span",{className:S.a.error_msg},l),r.a.createElement("span",{className:S.a.total_users},"Total users: ".concat(c)))},H=function(e){var t=e.users,a=e.addUserCallback,l=Object(n.useState)(""),c=Object(i.a)(l,2),o=c[0],u=c[1],s=Object(n.useState)(""),m=Object(i.a)(s,2),p=m[0],E=m[1],_=new RegExp(/^\S*[^\s]$/),d=t.length;return r.a.createElement(T,{name:o,setNameCallback:function(e){u(e.currentTarget.value)},addUser:function(){_.test(o)?(E(""),a(o),alert("Hello  ".concat(o,"!")),u("")):E("Please input a valid name. Name shouldn't start or end with a space!")},error:p,totalUsers:d})},W=a(164);var A=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(H,{users:a,addUserCallback:function(e){var t={_id:Object(W.a)(),name:e};l([t].concat(Object(x.a)(a)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},I=a(87),B=a.n(I),G=a(10),M=a(52),P=a.n(M),L=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,i=Object(G.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),s="".concat(P.a.error," ").concat(u||""),m="".concat(P.a.superInput," ").concat(o||""," ").concat(c?P.a.errorInput:"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:m},i)),c&&r.a.createElement("span",{className:s},c))},R=a(60),D=a.n(R),F=function(e){var t=e.red,a=e.className,n=Object(G.a)(e,["red","className"]),l="".concat(t?D.a.red:D.a.default," ").concat(a);return r.a.createElement("button",Object.assign({className:l},n))},J=a(39),U=a.n(J),X=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(G.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(U.a.checkbox," ").concat(n||"");return r.a.createElement("label",{className:U.a.container},r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a?a(e.currentTarget.checked):t&&t(e)},className:o},c)),r.a.createElement("span",{className:U.a.checkmark},"\xa0"),l&&r.a.createElement("span",{className:U.a.spanClassName},l))};var K=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],l=t[1],c=a?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},u=Object(n.useState)(!1),s=Object(i.a)(u,2),m=s[0],p=s[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:B.a.column},r.a.createElement(L,{value:a,onChangeText:l,onEnter:o,error:c}),r.a.createElement(F,{red:!0,onClick:o},"delete "),r.a.createElement(X,{checked:m,onChangeChecked:p},"some text "),r.a.createElement(X,{checked:m,onChange:function(e){return p(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},q=a(88),Y=a.n(q),z=function(e){e.autoFocus;var t=e.onBlur,a=e.onEnter,l=e.spanProps,c=Object(G.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(i.a)(o,2),s=u[0],m=u[1],p=l||{},E=p.children,_=p.onDoubleClick,d=p.className,h=Object(G.a)(p,["children","onDoubleClick","className"]),g="".concat(s?"":Y.a.isEditable," ").concat(d);return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(L,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),t&&t(e)},onEnter:function(){m(!1),a&&a()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),_&&_(e)},className:g},h),E||c.value))};function Z(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}function $(e,t){var a=localStorage.getItem(e);return null!==a&&(t=JSON.parse(a)),t}Z("test",{x:"A",y:1});$("test",{x:"",y:0});var Q=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(z,{value:a,onChangeText:l,spanProps:{children:a?void 0:"enter text..."}})),r.a.createElement(F,{onClick:function(){Z("editable-span-value",a)}},"save"),r.a.createElement(F,{onClick:function(){l($("editable-span-value",a))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var V=function(){return r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement(j,null),r.a.createElement(A,null),r.a.createElement(K,null),r.a.createElement(Q,null))},ee=function(e){var t=e.options,a=e.onChange,n=e.onChangeOption,l=Object(G.a)(e,["options","onChange","onChangeOption"]),c=t?t.map((function(e,t){return r.a.createElement("option",{key:"o_"+t},e)})):[];return r.a.createElement("select",Object.assign({onChange:function(e){a&&a(e),n&&n(e.currentTarget.value)}},l),c)},te=function(e){e.type;var t=e.name,a=e.options,n=e.value,l=e.onChange,c=e.onChangeOption,o=(Object(G.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){l&&l(e),c&&c(e.currentTarget.value)}),u=a?a.map((function(e,a){return r.a.createElement("label",{key:t+"-"+a},r.a.createElement("input",{type:"radio",name:t,value:e,onChange:o,checked:n===e}),e)})):[];return r.a.createElement(r.a.Fragment,null,u)},ae=["x","y","z"];var ne=function(){var e=Object(n.useState)(ae[1]),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(ee,{options:ae,value:a,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(te,{name:"radio",options:ae,value:a,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},re=function(e,t){switch(t.type){case"sort":var a=Object(x.a)(e);return"up"===t.payload&&a.sort((function(e,t){return e.name>t.name?1:-1})),"down"===t.payload&&a.sort((function(e,t){return e.name<t.name?1:-1})),a;case"check":return e.filter((function(e){return e.age>17}));default:return e}},le=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var ce=function(){var e=Object(n.useState)(le),t=Object(i.a)(e,2),a=t[0],l=t[1],c=a.map((function(e){return r.a.createElement("div",{key:e._id},e.name," - ",e.age)}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",c,r.a.createElement("div",null,r.a.createElement(F,{onClick:function(){return l(re(le,{type:"sort",payload:"up"}))}},"sort up")),r.a.createElement("div",null,r.a.createElement(F,{onClick:function(){return l(re(le,{type:"sort",payload:"down"}))}},"sort down")),r.a.createElement("div",null,r.a.createElement(F,{onClick:function(){return l(re(le,{type:"check",payload:18}))}},"check 18")),r.a.createElement("hr",null),r.a.createElement("hr",null))},oe=a(53),ue=a.n(oe);var ie=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(),o=Object(i.a)(c,2),u=o[0],s=o[1],m=Object(n.useState)(!1),p=Object(i.a)(m,2),E=p[0],_=p[1],d=function(){clearInterval(a)},h=u&&u.toLocaleTimeString(),g=u&&u.toLocaleDateString();return r.a.createElement("div",{style:{position:"relative"}},r.a.createElement("div",{className:ue.a.timer,onMouseEnter:function(){u&&_(!0)},onMouseLeave:function(){_(!1)}},h),E&&r.a.createElement("div",{className:ue.a.date},g),r.a.createElement("div",{className:ue.a.btn_container},r.a.createElement(F,{onClick:function(){d();var e=window.setInterval((function(){s(new Date)}),1e3);l(e)}},"start"),r.a.createElement(F,{onClick:d},"stop")))};var se=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 9",r.a.createElement(ie,null),r.a.createElement("hr",null),r.a.createElement("hr",null))},me=a(22),pe=function(e){return{type:"SHOW-LOADER",isLoading:e}},Ee=a(54),_e=a.n(Ee);var de=function(){var e=Object(me.c)((function(e){return e.loading})),t=Object(me.b)();return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 10",e?r.a.createElement("div",{className:_e.a.spinnerWrapper},r.a.createElement("div",{className:_e.a.spinnerInner},r.a.createElement("div",{className:_e.a.spinner},"\xa0"))):r.a.createElement("div",null,r.a.createElement(F,{onClick:function(){t(pe(!0)),setTimeout((function(){t(pe(!1))}),2e3),console.log("loading...")}},"set loading...")),r.a.createElement("hr",null),r.a.createElement("hr",null))},he=a(90),ge=a.n(he),ve=function(e){e.type;var t=e.onChange,a=e.onChangeRange,n=e.className,l=Object(G.a)(e,["type","onChange","onChangeRange","className"]),c="".concat(ge.a.range," ").concat(n||"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"range",onChange:function(e){t&&t(e),a&&a(+e.currentTarget.value)},className:c},l)))},fe=a(163),be=a(91),ke=a.n(be)()({root:{width:200,margin:"0 auto",display:"inline-block",padding:"0 10px"}}),Ce=function(e){var t=e.onChangeRange,a=e.value,n=ke();return r.a.createElement("div",{className:n.root},r.a.createElement(fe.a,{value:a,onChange:function(e,a){t&&t(a)},valueLabelDisplay:"auto","aria-labelledby":"range-slider"}))};var Oe=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(100),o=Object(i.a)(c,2),u=o[0],s=o[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 11",r.a.createElement("div",null,r.a.createElement("span",null,a),r.a.createElement(ve,{onChangeRange:function(e){l(e)},value:a})),r.a.createElement("div",null,r.a.createElement("span",null,a),r.a.createElement(Ce,{value:[a,u],onChangeRange:function(e){"number"===typeof e?l(e):(l(e[0]),s(e[1]))}}),r.a.createElement("span",null,u)),r.a.createElement("hr",null),r.a.createElement("hr",null))};var Ne,ye=function(){return r.a.createElement("div",{className:E.a.text_center},r.a.createElement(ne,null),r.a.createElement(ce,null),r.a.createElement(se,null),r.a.createElement(de,null),r.a.createElement(Oe,null))},je=a(64),xe=a.n(je),we=a(50);!function(e){e.CHANGE_THEME="HW12/CHANGE_THEME"}(Ne||(Ne={}));var Se={themeColor:"dark"},Te=["dark","red","lightBlue","lightGreen","light"];var He=function(){var e=Object(me.c)((function(e){return e.theme.themeColor})),t=Object(me.b)();return r.a.createElement("div",{className:xe.a[e]},r.a.createElement("hr",null),r.a.createElement("div",{className:xe.a[e+"-text"]},"homeworks 12"),r.a.createElement(ee,{options:Te,value:e,onChangeOption:function(e){return t((a=e,{type:Ne.CHANGE_THEME,payload:{themeColor:a}}));var a}}),r.a.createElement("hr",null))},We=a(95),Ae=a.n(We).a.create({baseURL:"https://neko-cafe-back.herokuapp.com/auth/test",body:{success:!0}}),Ie=function(e){return Ae.post("",{success:e})};var Be=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(),o=Object(i.a)(c,2),u=o[0],s=o[1];return r.a.createElement("div",null,r.a.createElement(X,{checked:a,onChange:function(e){l(e.target.checked)}}),r.a.createElement(F,{onClick:function(){Ie(a).then((function(e){console.log(e),s(e.data.errorText)})).catch((function(e){console.log(Object(we.a)({},e)),s(e.response.data.errorText)}))}},"Send request"),u&&r.a.createElement("p",null,"Server response: ",u))};var Ge=function(){return r.a.createElement(Be,null)};var Me=function(){return r.a.createElement("div",{className:E.a.text_center},r.a.createElement(He,null),r.a.createElement(Ge,null))},Pe="/pre-junior",Le="/junior",Re="/junior-plus";var De=function(){return r.a.createElement("div",null,r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",exact:!0,render:function(){return r.a.createElement(m.a,{to:Pe})}}),r.a.createElement(m.b,{path:Pe,render:function(){return r.a.createElement(V,null)}}),r.a.createElement(m.b,{path:Le,render:function(){return r.a.createElement(ye,null)}}),r.a.createElement(m.b,{path:Re,render:function(){return r.a.createElement(Me,null)}}),r.a.createElement(m.b,{render:function(){return r.a.createElement(_,null)}})))};var Fe=function(e){return r.a.createElement("div",{className:"".concat(E.a.header," ").concat(e.menuToggle?E.a.header_active:"")},r.a.createElement(s.b,{to:Pe,activeClassName:E.a.active},"PreJunior"),r.a.createElement(s.b,{to:Le,activeClassName:E.a.active},"Junior"),r.a.createElement(s.b,{to:Re,activeClassName:E.a.active},"Junior+"))},Je=a(96),Ue=a(97);var Xe=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement("button",{className:E.a.btn,onClick:function(){return l(!a)}},r.a.createElement(Je.a,{icon:Ue.a,size:"2x"})),r.a.createElement(Fe,{menuToggle:a}),r.a.createElement(De,null)))};var Ke=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement(Xe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var qe=a(37),Ye=Object(qe.b)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW-LOADER":return e=t.isLoading;default:return e}},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ne.CHANGE_THEME:return Object(we.a)({},e,{themeColor:t.payload.themeColor});default:return e}}}),ze=Object(qe.c)(Ye),Ze=ze;window.store=ze,c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(me.a,{store:Ze},r.a.createElement(Ke,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},26:function(e,t,a){e.exports={messageApp:"Message_messageApp__19CC_",messageWrapper:"Message_messageWrapper__1DRDM",message__avatar:"Message_message__avatar__hGMql",messageBody:"Message_messageBody__3_p6A",message__username:"Message_message__username__2mXCw",message__time:"Message_message__time__8kYnj"}},27:function(e,t,a){e.exports={error_input:"Greeting_error_input__k2Tfs",input:"Greeting_input__2kXLu",wrapper:"Greeting_wrapper__3Dbfg",btn_add:"Greeting_btn_add__1eqSD",error_msg:"Greeting_error_msg__2qco0",total_users:"Greeting_total_users__PuJhn"}},39:function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__Imn1x",spanClassName:"SuperCheckbox_spanClassName__1K9ch",checkmark:"SuperCheckbox_checkmark__2m7s1",container:"SuperCheckbox_container__PbH20"}},52:function(e,t,a){e.exports={superInput:"SuperInputText_superInput__3XH9u",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S"}},53:function(e,t,a){e.exports={timer:"clock_timer__t9Oxu",date:"clock_date__no8_Z",btn_container:"clock_btn_container__zPHdU"}},54:function(e,t,a){e.exports={spinnerWrapper:"hw10_spinnerWrapper__3da3U",spinnerInner:"hw10_spinnerInner__1jUIq",spinner:"hw10_spinner__3R6s_"}},60:function(e,t,a){e.exports={default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_"}},64:function(e,t,a){e.exports={dark:"HW12_dark__-yEnK","dark-text":"HW12_dark-text__3aY9r",red:"HW12_red__b8fxn","red-text":"HW12_red-text__Xlm6C",lightGreen:"HW12_lightGreen__t4xxp","lightGreen-text":"HW12_lightGreen-text__1lYfD",lightBlue:"HW12_lightBlue__tyKkX","lightBlue-text":"HW12_lightBlue-text__19BLy",default:"HW12_default__1e_hO"}},86:function(e,t,a){e.exports={App:"App_App__1Sc4o"}},87:function(e,t,a){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I"}},88:function(e,t,a){e.exports={isEditable:"h6_isEditable__TlTO8"}},90:function(e,t,a){e.exports={range:"SuperRange_range__2K0wQ"}}},[[100,1,2]]]);
//# sourceMappingURL=main.4e49f79f.chunk.js.map