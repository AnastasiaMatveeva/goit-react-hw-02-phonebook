(this["webpackJsonpreact-18"]=this["webpackJsonpreact-18"]||[]).push([[0],{1:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__28Q5p",contactForm__label:"ContactForm_contactForm__label__FFF5s",contactForm__input:"ContactForm_contactForm__input__Lp2jJ"}},11:function(t,e,n){t.exports=n(18)},17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(9),o=n.n(r),l=n(10),u=n(2),i=n(3),m=n(4),s=n(6),b=n(5),p=n(1),d=n.n(p),f=function(t){Object(s.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.changeInput=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(u.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(m.a)(n,[{key:"render",value:function(){return c.a.createElement("form",{onSubmit:this.handleSubmit,className:d.a.contactForm},c.a.createElement("label",{htmlFor:"name",className:d.a.contactForm__label},"Name",c.a.createElement("br",null),c.a.createElement("input",{type:"text",className:d.a.contactForm__input,name:"name",value:this.state.name,onChange:this.changeInput,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})),c.a.createElement("br",null),c.a.createElement("label",{htmlFor:"number",className:d.a.contactForm__label},"Number",c.a.createElement("br",null),c.a.createElement("input",{type:"tel",className:d.a.contactForm__input,name:"number",value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",onChange:this.changeInput,title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})),c.a.createElement("br",null),c.a.createElement("button",{type:"submit"},"AddContact"))}}]),n}(a.Component),h=n(7),_=n.n(h),E=function(t){var e=t.contacts,n=t.onDeleteContact;return c.a.createElement("ul",{className:_.a.contactList},e.map((function(t){return c.a.createElement("li",{key:t.id,className:_.a.contactList__item},t.name,": ",t.number,c.a.createElement("button",{type:"button",onClick:function(){return n(t.id)}},"Delete"))})))},C=function(t){var e=t.value,n=t.onChangeInput;return c.a.createElement("label",{htmlFor:"filter"},c.a.createElement("h2",null,"Filter contact by name"),c.a.createElement("input",{name:"filter",onChange:n,value:e}))},v=n(20),F=function(t){Object(s.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.changeInput=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(u.a)({},a,c))},t.createContact=function(e){var n=e.name,a=e.number;if(t.state.contacts.find((function(t){return t.name===n})))alert("".concat(n," is already exist in contacts"));else{var c=Object(v.a)(),r={name:n,number:a,id:c};t.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[r])}}))}},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(m.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter.toLowerCase(),a=e.filter((function(t){return t.name.toLowerCase().includes(n)}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Phonebook"),c.a.createElement(f,{onSubmit:this.createContact}),c.a.createElement("div",null,c.a.createElement("h1",null,"Contacts"),c.a.createElement(C,{value:this.filter,onChangeInput:this.changeInput}),c.a.createElement(E,{contacts:a,onDeleteContact:this.deleteContact})))}}]),n}(a.Component);n(16),n(17);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(F,null)),document.getElementById("root"))},7:function(t,e,n){t.exports={contactList__item:"ContactList_contactList__item__1p8cR"}}},[[11,1,2]]]);
//# sourceMappingURL=main.6b61a13c.chunk.js.map