(function(t){function e(e){for(var o,i,a=e[0],l=e[1],c=e[2],d=0,f=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(o=!1)}o&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},s=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0687":function(t,e,n){"use strict";var o=n("c2fa"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"l-block"},[n("NotesList")],1),n("div",{staticClass:"l-block"},[n("NoteAddForm")],1)])},s=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"notes-list"},[n("p",{staticClass:"notes-list__title"},[t._v("Notes")]),n("ul",{staticClass:"notes-list__content"},t._l(t.notes,(function(e){return n("li",{key:e.title,staticClass:"notes-list__item"},[n("strong",{staticClass:"notes-list__item-title"},[t._v(t._s(e.title))]),n("span",{staticClass:"notes-list__item-date"},[t._v(t._s(e.createdAt.toDate().toLocaleString("en-GB",{timeZone:"UTC"})))]),n("span",{staticClass:"notes-list__item-text"},[t._v(t._s(e.text))])])})),0)])},a=[],l=n("59ca"),c=n.n(l),u=(n("e71f"),c.a.initializeApp({projectId:"beontop-chrome-extention"}).firestore()),d=c.a.firestore.Timestamp,f={name:"NotesList",data:function(){return{notes:[]}},firestore:{notes:u.collection("todos")}},p=f,m=(n("8bac"),n("2877")),_=Object(m["a"])(p,i,a,!1,null,"0be01820",null),v=_.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"note-add-form"},[n("p",{staticClass:"note-add-form__title"},[t._v("Add note")]),n("form",{staticClass:"notes-list__content",on:{submit:t.addNote}},[n("div",{staticClass:"note-add-form__item"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),n("div",{staticClass:"note-add-form__item"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{placeholder:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),t._m(0),n("div",{staticClass:"note-add-form__errors"},[n("ul",t._l(t.errors,(function(e){return n("li",{key:e},[t._v(t._s(e))])})),0)])])])},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"note-add-form__item"},[n("button",{attrs:{type:"submit"}},[t._v("Submit")])])}],x=(n("0d03"),{name:"NoteAddForm",data:function(){return{title:"",text:"",createdAt:"",errors:[]}},firestore:{notes:u.collection("todos")},methods:{addNote:function(t){return t.preventDefault(),this.errors=[],0==this.title.length&&this.errors.push("field 'title' can't been empty"),0==this.text.length&&this.errors.push("field 'text' can't been empty"),0==this.errors.length&&(u.collection("todos").add({title:this.title,text:this.text,createdAt:d.fromDate(new Date)}),this.title="",this.text=""),!1}}}),y=x,g=(n("0687"),Object(m["a"])(y,b,h,!1,null,"8db61c30",null)),C=g.exports,w={name:"app",data:function(){return{}},firestore:{notes:u.collection("todos")},components:{NotesList:v,NoteAddForm:C},created:function(){}},O=w,j=(n("5c0b"),Object(m["a"])(O,r,s,!1,null,null,null)),N=j.exports,P=n("0ff2");o["a"].use(P["a"]),new o["a"]({render:function(t){return t(N)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("9c0c"),r=n.n(o);r.a},"8bac":function(t,e,n){"use strict";var o=n("db4d"),r=n.n(o);r.a},"9c0c":function(t,e,n){},c2fa:function(t,e,n){},db4d:function(t,e,n){}});
//# sourceMappingURL=app.7a8c166c.js.map