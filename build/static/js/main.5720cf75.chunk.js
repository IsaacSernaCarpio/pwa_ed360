(this["webpackJsonped-360"]=this["webpackJsonped-360"]||[]).push([[0],{141:function(e,t,s){},143:function(e,t,s){},215:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s.n(a),r=s(38),c=s.n(r),o=(s(127),s(214),s(128),s(141),s(7)),i=s(11),l=s(9),d=s(8),u=(s(142),s(143),s(120)),m=s(12),h=s(59),j=s.n(h),b=s(90),p=s(36),f=s(91),v=s.n(f),O=s(117),x=s.n(O),g=(s(163),s(122)),N=s(81),y=(s(164),s(92)),w=s(0),k=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(o.a)(this,s),N.a.configure(),(a=t.call(this,e)).formatError=function(e){return console.log("error movil",e.response.data),Array.isArray(e.response.data.errors)?e.response.data.errors[0].msg+" "+e.response.data.errors[0].param.toLowerCase():e.response.data.message.toString()},a.showAlert=function(){N.a.success("\ud83e\udda0 Formulario llenado con \xe9xito!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0})},a.setSymptomsSelected=function(e){console.log("sintomas",e.target.value);var t=a.state.symptomsSelected,s=[];if(t.find((function(t){return t===e.target.value})))return s=t.filter((function(t){return t!==e.target.value})),void a.setState({symptomsSelected:s});t.push(e.target.value),a.setState({symptomsSelected:t})},a.state={students:[],studentSelected:null,users:[{id:1,name:"Ruben Alavarado"},{id:2,name:"Antonio Lopez"},{id:3,name:"Ricardo Morales"},{id:4,name:"Roberto Carlos"},{id:5,name:"Jorge Allende"}],questions:[{id:1,answer:!0,numberTemperature:""},{id:2,answer:!1,symptomsComments:""},{id:3,answer:!1,exposedComments:""},{id:4,answer:!1,contactComments:""},{id:5,answer:!1,returnTravelDate:""}],dateCovid:new Date,errors:[],symptoms:[{name:"Tos",value:"tos"},{name:"Dolor de cabeza",value:"dolor de cabeza"},{name:"Ojos rojos",value:"ojos rojos"},{name:"Otros",value:"otros"}],symptomsSelected:[]},a.radioButtonSelected=a.radioButtonSelected.bind(Object(p.a)(a)),a.save=a.save.bind(Object(p.a)(a)),a.setStartDate=a.setStartDate.bind(Object(p.a)(a)),a.studentSelected=a.studentSelected.bind(Object(p.a)(a)),a.inputAnswer=a.inputAnswer.bind(Object(p.a)(a)),a}return Object(i.a)(s,[{key:"componentDidMount",value:function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://ed360-api.herokuapp.com/api/student");case 2:t=e.sent,this.setState({students:t.data.students});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"radioButtonSelected",value:function(e,t){var s=this,a=this.state.questions.map((function(e,a){return a===t?(e.answer=!s.state.questions[t].answer,e):e}));this.setState({questions:a})}},{key:"save",value:function(){var e=Object(b.a)(j.a.mark((function e(){var t,s,a=this;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={byUser:"60f73c18d5cbc40015055ef8",fromStudent:this.state.studentSelected,temperature:this.state.questions[0].answer,numberTemperature:this.state.questions[0].numberTemperature,symptoms:this.state.questions[1].answer,symptomsComments:this.state.questions[1].symptomsComments,exposed:this.state.questions[2].answer,exposedComments:this.state.questions[2].exposedComments,contactCovid:this.state.questions[3].answer,contactComments:this.state.questions[3].contactComments,travel:this.state.questions[4].answer,returnTravelDate:null===this.state.dateCovid?null:this.state.dateCovid.toLocaleDateString()},this.setState({errors:[]}),e.next=4,v.a.post("https://ed360-api.herokuapp.com/api/todayCOVID",t).catch((function(e){if(y.isMobile)return console.log("es movil"),void N.a.error("\u274c  "+a.formatError(e),{position:"top-right",autoClose:!1,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0});var t=[];Array.isArray(e.response.data.errors)?t=e.response.data.errors:t.push(e.response.data),a.setState({errors:t}),console.log("array errors para props:",t),a.props.showErrors(t)}));case 4:if("undefined"!==typeof(s=e.sent)){e.next=7;break}return e.abrupt("return");case 7:200===s.status&&this.showAlert();case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setStartDate",value:function(e){this.setState({dateCovid:e})}},{key:"studentSelected",value:function(e){this.setState({studentSelected:e.target.value})}},{key:"inputAnswer",value:function(e,t,s){var a=this.state.questions.map((function(a,n){return n===t?(a[s]=e.target.value,a):a}));this.setState({questions:a})}},{key:"render",value:function(){var e=this,t="1rem";return y.isMobile&&(t="1rem"),Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{className:"form-group",style:{textAlign:"left"},children:[Object(w.jsx)("label",{htmlFor:"exampleSelect1",className:"form-label mt-4",children:"Selecciona un Alumno"}),Object(w.jsxs)("select",{onChange:this.studentSelected,className:"form-select",id:"exampleSelect1",children:[Object(w.jsx)("option",{value:null,children:"Selecciona un estudiante"}),this.state.students.map((function(e){return Object(w.jsx)("option",{value:e._id,children:e.nameStudent+" "+e.lastNameStudent+" "+e.motherLastNameStudent},e._id)}))]})]}),Object(w.jsxs)("fieldset",{className:"form-group",style:{textAlign:"left"},children:[Object(w.jsx)("legend",{style:{fontSize:t},className:"mt-4",children:"1.- \xbf Temperatura menor a 37\xb0 ? "}),Object(w.jsxs)("div",{className:"row",children:[Object(w.jsxs)("div",{className:"col-7 align-self-center",children:[Object(w.jsx)("div",{className:"form-check",children:Object(w.jsxs)("label",{className:"form-check-label",children:[Object(w.jsx)("input",{type:"radio",checked:!0===this.state.questions[0].answer,onChange:function(t){return e.radioButtonSelected(t,0)},className:"form-check-input",name:"optionsRadios",id:"optionsRadios1",value:!0}),"SI"]})}),Object(w.jsx)("div",{className:"form-check",children:Object(w.jsxs)("label",{className:"form-check-label",children:[Object(w.jsx)("input",{type:"radio",checked:!1===this.state.questions[0].answer,onChange:function(t){return e.radioButtonSelected(t,0)},className:"form-check-input",name:"optionsRadios",id:"optionsRadios2",value:!1}),"NO"]})})]}),Object(w.jsx)("div",{className:"col-md-12 col-lg-3",style:!0===this.state.questions[0].answer||null===this.state.questions[0].answer?{visibility:"hidden"}:{},children:Object(w.jsx)("div",{className:"form-group",children:Object(w.jsx)("input",{type:"number",className:"form-control",placeholder:"Indique su temperatura",id:"numberTemperature",onChange:function(t){return e.inputAnswer(t,0,"numberTemperature")}})})})]})]}),Object(w.jsxs)("fieldset",{className:"form-group",style:{textAlign:"left"},children:[Object(w.jsx)("legend",{style:{fontSize:t},className:"mt-4",children:"2.- \xbf Identificas alg\xfan s\xedntoma ? "}),Object(w.jsxs)("div",{className:"row justify-content-start ",children:[Object(w.jsxs)("div",{className:"col-5 align-self-center",children:[Object(w.jsx)("div",{className:"form-check",children:Object(w.jsxs)("label",{className:"form-check-label",children:[Object(w.jsx)("input",{type:"radio",className:"form-check-input",checked:!0===this.state.questions[1].answer,onChange:function(t){return e.radioButtonSelected(t,1)},name:"optionsRadios2",id:"optionsRadios1",value:!0}),"SI"]})}),Object(w.jsx)("div",{className:"form-check",children:Object(w.jsxs)("label",{className:"form-check-label",children:[Object(w.jsx)("input",{type:"radio",className:"form-check-input",checked:!1===this.state.questions[1].answer,onChange:function(t){return e.radioButtonSelected(t,1)},name:"optionsRadios2",id:"optionsRadios2",value:!1}),"NO"]})})]}),Object(w.jsx)("div",{className:"col-md-12 col-lg-7",style:!1===this.state.questions[1].answer?{visibility:"hidden"}:{},children:Object(w.jsx)("div",{className:"row",children:Object(w.jsx)("fieldset",{className:"form-group",children:Object(w.jsx)("div",{className:"form-check",children:Object(w.jsx)("input",{type:"text",className:"form-control",placeholder:"Indica los s\xedntomas",id:"exposedComments",onChange:function(t){return e.inputAnswer(t,1,"symptomsComments")}})})})})})]})]}),Object(w.jsxs)("fieldset",{className:"form-group",style:{textAlign:"left"},children:[Object(w.jsx)("legend",{style:{fontSize:t},className:"mt-4",children:"3.- \xbf Has asistido a algun lugar sin medidas de control sanitario ? "}),Object(w.jsxs)("div",{className:"row justify-content-start ",children:[Object(w.jsxs)("div",{className:"col-7 align-self-center",children:[Object(w.jsx)("div",{className:"form-check",children:Object(w.jsxs)("label",{className:"form-check-label",children:[Object(w.jsx)("input",{type:"radio",className:"form-check-input",checked:!0===this.state.questions[2].answer,onChange:function(t){return e.radioButtonSelected(t,2)},name:"optionsRadios3",id:"optionsRadios1",value:!0}),"SI"]})}),Object(w.jsx)("div",{className:"form-check",children:Object(w.jsxs)("label",{className:"form-check-label",children:[Object(w.jsx)("input",{type:"radio",className:"form-check-input",checked:!1===this.state.questions[2].answer,onChange:function(t){return e.radioButtonSelected(t,2)},name:"optionsRadios3",id:"optionsRadios2",value:!1}),"NO"]})})]}),Object(w.jsx)("div",{className:"col-md-12 col-lg-3",style:!1===this.state.questions[2].answer?{visibility:"hidden"}:{},children:Object(w.jsx)("div",{className:"form-group",children:Object(w.jsx)("input",{type:"text",className:"form-control",placeholder:"Indica los lugares",id:"exposedComments",onChange:function(t){return e.inputAnswer(t,2,"exposedComments")}})})})]})]}),Object(w.jsxs)("fieldset",{className:"form-group",style:{textAlign:"left"},children:[Object(w.jsx)("legend",{style:{fontSize:t},className:"mt-4",children:"4.- \xbf Alguien en casa tiene Covid o tuviste contacto con alguien con este virus ?  "}),Object(w.jsxs)("div",{className:"row justify-content-start ",children:[Object(w.jsxs)("div",{className:"col-7 align-self-center",children:[Object(w.jsx)("div",{className:"form-check",children:Object(w.jsxs)("label",{className:"form-check-label",children:[Object(w.jsx)("input",{type:"radio",className:"form-check-input",checked:!0===this.state.questions[3].answer,onChange:function(t){return e.radioButtonSelected(t,3)},name:"optionsRadios4",id:"optionsRadios1",value:!0}),"SI"]})}),Object(w.jsx)("div",{className:"form-check",children:Object(w.jsxs)("label",{className:"form-check-label",children:[Object(w.jsx)("input",{type:"radio",className:"form-check-input",checked:!1===this.state.questions[3].answer,onChange:function(t){return e.radioButtonSelected(t,3)},name:"optionsRadios4",id:"optionsRadios2",value:!1}),"NO"]})})]}),Object(w.jsx)("div",{className:"col-md-12 col-lg-3",style:!1===this.state.questions[3].answer?{visibility:"hidden"}:{},children:Object(w.jsx)("div",{className:"form-group",children:Object(w.jsx)("input",{type:"text",className:"form-control",placeholder:"Comentario",id:"contactComments",onChange:function(t){return e.inputAnswer(t,3,"contactComments")}})})})]})]}),Object(w.jsxs)("fieldset",{className:"form-group",style:{textAlign:"left"},children:[Object(w.jsx)("legend",{style:{fontSize:t},className:"mt-4",children:"5.- \xbf Hiciste un viaje cuyo regreso fue dentro de los 14 dias anteriores ?  "}),Object(w.jsxs)("div",{className:"row justify-content-start ",children:[Object(w.jsxs)("div",{className:"col-7 align-self-center",children:[Object(w.jsx)("div",{className:"form-check",children:Object(w.jsxs)("label",{className:"form-check-label",children:[Object(w.jsx)("input",{type:"radio",className:"form-check-input",checked:!0===this.state.questions[4].answer,onChange:function(t){return e.radioButtonSelected(t,4)},name:"optionsRadios5",id:"optionsRadios1",value:!0}),"SI"]})}),Object(w.jsx)("div",{className:"form-check",children:Object(w.jsxs)("label",{className:"form-check-label",children:[Object(w.jsx)("input",{type:"radio",className:"form-check-input",checked:!1===this.state.questions[4].answer,onChange:function(t){return e.radioButtonSelected(t,4)},name:"optionsRadios5",id:"optionsRadios2",value:!1}),"NO"]})})]}),Object(w.jsx)("div",{className:"col-md-3 col-sm-12",style:!1===this.state.questions[4].answer?{visibility:"hidden"}:{},children:Object(w.jsx)("div",{className:"form-group",style:{display:"display: flex; justify-content: center;"},children:Object(w.jsx)(x.a,{dateFormat:"dd/MM/yyyy",selected:this.state.dateCovid,onChange:function(t){return e.setStartDate(t)},withPortal:!0,locale:g.a})})})]})]}),Object(w.jsx)("div",{className:"mb-4",style:{display:"display: flex; justify-content: center;"},children:Object(w.jsx)("button",{onClick:this.save,type:"button",className:"btn btn-outline-primary mt-4",children:"Guardar"})})]})}}]),s}(n.a.Component),S=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(o.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).componentDidUpdate=function(){e.props.errors.map((function(t){return console.log("errorsitos"),t.hasOwnProperty("msg")?(console.log("tiene msg"),t.message="El campo "+e.inputRequerid(t.param)+" "+t.msg.toLowerCase(),t):(console.log("no tiene msg"),t)}))},e.inputRequerid=function(e){switch(e){case"fromStudent":default:return"estudiante"}},e.state={errorMessage:""},e}return Object(i.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.props.errors.map((function(t){return console.log("errorsitos"),t.hasOwnProperty("msg")?(console.log("tiene msg"),t.message="El campo "+e.inputRequerid(t.param)+" "+t.msg.toLowerCase(),t):(console.log("no tiene msg"),t)})),this.setState({errorMessage:this.props.errors[0].message})}},{key:"render",value:function(){return Object(w.jsx)("div",{children:Object(w.jsxs)("div",{className:"alert alert-dismissible alert-danger",children:[Object(w.jsx)("button",{onClick:this.props.hideErrors,type:"button",className:"btn-close","data-bs-dismiss":"alert"}),Object(w.jsx)("h4",{className:"alert-heading",children:this.props.title}),Object(w.jsx)("p",{className:"mb-0",children:this.props.errors[0].message})]})})}}]),s}(n.a.Component),C=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(o.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).render=function(){return Object(w.jsxs)("div",{className:"mt-3",children:[Object(w.jsxs)("div",{className:"row",children:[Object(w.jsx)("div",{className:"col-sm-12 col-md-12 col-lg-6",children:Object(w.jsxs)("div",{className:"card mb-3",children:[Object(w.jsx)("h3",{className:"card-header",children:"Encuesta Covid-19"}),Object(w.jsx)("div",{className:"card-body",children:Object(w.jsx)("a",{href:"/quiz-covid",style:{textDecoration:"none"},children:Object(w.jsx)("h1",{className:"card-title",children:"\ud83e\udda0"})})})]})}),Object(w.jsx)("div",{className:"col-sm-12 col-md-12 col-lg-6",children:Object(w.jsxs)("div",{className:"card mb-3",children:[Object(w.jsx)("h3",{className:"card-header",children:"Reporte Encuesta Covid-19"}),Object(w.jsx)("div",{className:"card-body",children:Object(w.jsx)("a",{href:"/quiz-covid",style:{textDecoration:"none"},children:Object(w.jsx)("h1",{className:"card-title",children:"\ud83e\uddd1\u200d\ud83d\udd2c \ud83e\udd14"})})})]})})]}),Object(w.jsxs)("div",{className:"row",children:[Object(w.jsx)("div",{className:"col-sm-12 col-md-12 col-lg-6",children:Object(w.jsxs)("div",{className:"card mb-3",children:[Object(w.jsx)("h3",{className:"card-header",children:"Registro Familia"}),Object(w.jsx)("div",{className:"card-body",children:Object(w.jsx)("a",{href:"/families",style:{textDecoration:"none"},children:Object(w.jsx)("h1",{className:"card-title",children:"\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1 \ud83d\udcdd"})})})]})}),Object(w.jsx)("div",{className:"col-sm-12 col-md-12 col-lg-6",children:Object(w.jsxs)("div",{className:"card mb-3",children:[Object(w.jsx)("h3",{className:"card-header",children:"Registro Estudiante"}),Object(w.jsx)("div",{className:"card-body",children:Object(w.jsx)("a",{href:"/quiz-covid",style:{textDecoration:"none"},children:Object(w.jsx)("h1",{className:"card-title",children:"\ud83d\ude37 \ud83d\udcdd"})})})]})})]})]})},e}return s}(n.a.Component),q=(n.a.Component,function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(o.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={errors:[]},e.showErrors=function(t){e.setState({errors:t})},e.hideErrors=function(){e.setState({errors:[]})},e}return Object(i.a)(s,[{key:"render",value:function(){return console.log("errores",this.state.errors.length>0),Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary",children:Object(w.jsxs)("div",{className:"container-fluid",children:[Object(w.jsx)("a",{className:"navbar-brand",href:"/#",children:"ED-360"}),Object(w.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(w.jsx)("span",{className:"navbar-toggler-icon"})}),Object(w.jsx)("div",{className:"collapse navbar-collapse",id:"navbarColor01",children:Object(w.jsx)("ul",{className:"navbar-nav me-auto",children:Object(w.jsx)("li",{className:"nav-item",children:Object(w.jsxs)("a",{className:"nav-link active",href:"/#",children:["Inicio",Object(w.jsx)("span",{className:"visually-hidden",children:"(current)"})]})})})})]})}),Object(w.jsxs)(u.a,{children:[this.state.errors.length>0&&Object(w.jsx)(S,{hideErrors:this.hideErrors,errors:this.state.errors,title:"Error"}),Object(w.jsx)("div",{className:"container",children:Object(w.jsxs)(m.c,{children:[Object(w.jsx)(m.a,{path:"/quiz-covid",exact:!0,children:Object(w.jsx)(k,{showErrors:this.showErrors})}),Object(w.jsx)(m.a,{path:"/",exact:!0,children:Object(w.jsx)(C,{})}),Object(w.jsx)(m.a,{path:"/families",exact:!0,children:"          "})]})})]})]})}}]),s}(n.a.Component)),A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var s=e.installing;null!=s&&(s.onstatechange=function(){"installed"===s.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var E=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,222)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;s(e),a(e),n(e),r(e),c(e)}))};c.a.render(Object(w.jsx)(n.a.StrictMode,{children:Object(w.jsx)(q,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");A?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(s){var a=s.headers.get("content-type");404===s.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):R(t,e)}))}}(),E()}},[[215,1,2]]]);
//# sourceMappingURL=main.5720cf75.chunk.js.map