(function(t){function e(e){for(var o,i,r=e[0],l=e[1],c=e[2],u=0,h=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&h.push(a[i][0]),a[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);d&&d(e);while(h.length)h.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],o=!0,i=1;i<s.length;i++){var l=s[i];0!==a[l]&&(o=!1)}o&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var o={},a={app:0},n=[];function i(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"f47cded3"}[t]+".js"}function r(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.e=function(t){var e=[],s=a[t];if(0!==s)if(s)e.push(s[2]);else{var o=new Promise((function(e,o){s=a[t]=[e,o]}));e.push(s[2]=o);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=i(t);var c=new Error;n=function(e){l.onerror=l.onload=null,clearTimeout(u);var s=a[t];if(0!==s){if(s){var o=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",c.name="ChunkLoadError",c.type=o,c.request=n,s[1](c)}a[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:l})}),12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(e)},r.m=t,r.c=o,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(s,o,function(e){return t[e]}.bind(null,o));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/bot-onboarding/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"56d7":function(t,e,s){"use strict";s.r(e);var o=s("2b0e"),a=function(){var t=this,e=t._self._c;return e("v-app",["AppRedirect"!==t.$route.name?e("Navbar"):t._e(),e("v-main",[e("transition",{attrs:{name:"router-anim"}},[e("router-view")],1)],1),e("globalLoader"),e("snackbar")],1)},n=[],i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"global-loader"},[e("v-dialog",{attrs:{"overlay-color":"black","content-class":"rounded-xl","overlay-opacity":.6,persistent:"",width:"300"},model:{value:t.loader.show,callback:function(e){t.$set(t.loader,"show",e)},expression:"loader.show"}},[e("v-card",{staticStyle:{"border-radius":"15px"},attrs:{color:t.loader.color,dark:""}},[e("v-card-text",[e("div",{staticClass:"d-flex"},[e("p",{staticClass:"pt-2 mb-0"},[t._v(t._s(t.loader.message))]),e("v-spacer")],1),e("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1)],1)},r=[],l=s("2f62"),c={computed:{...Object(l["c"])({loader:"ui/loader"})},methods:{...Object(l["b"])({showLoader:"ui/showGlobalLoader"})}},u=c,d=s("2877"),h=Object(d["a"])(u,i,r,!1,null,null,null),m=h.exports,p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"navbar"},[e("v-app-bar",{staticClass:"py-0 ma-0",attrs:{dark:"",color:"transparent",app:"",elevation:"1",height:"90"}},[e("div",{staticClass:"py-0",staticStyle:{position:"relative",display:"flex","align-items":"center",width:"100%",height:"90px"}},[e("div",{staticClass:"py-10",staticStyle:{position:"absolute",left:"0","background-color":"rgba(255, 255, 255, 0.5)",top:"0",height:"100%",width:"100%","backdrop-filter":"blur(5px)"}}),t.$vuetify.breakpoint.smAndDown?e("v-container",{staticStyle:{height:"100%"}},[e("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"center",width:"100%",position:"relative","margin-top":"15px"}},[t.user?e("v-avatar",{attrs:{size:"50",color:"primary"}},[e("img",{attrs:{src:`${t.baseUrl}/api/v1/profile/u/image/${t.user.username}`,alt:t.user.username}})]):t._e(),e("div",{staticStyle:{width:"100%","justify-content":"center"}},[e("v-img",{staticClass:"mx-auto pl-2",attrs:{src:s("9b19"),width:"50",contain:""},on:{click:function(e){return t.$router.push({name:"Home"})}},scopedSlots:t._u([{key:"placeholder",fn:function(){return[e("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[e("v-progress-circular",{attrs:{indeterminate:"",color:"primary lighten-2"}})],1)]},proxy:!0}])})],1)],1)]):e("v-container",{staticStyle:{height:"100%"}},[e("v-row",{staticClass:"py-4",staticStyle:{height:"90px"},attrs:{align:"center"}},[e("v-toolbar-title",{staticClass:"d-flex align-center"},[e("v-img",{staticClass:"ml-2 pl-2",attrs:{src:s("9b19"),width:"50",contain:""},on:{click:function(e){return t.$router.push({name:"Home"})}},scopedSlots:t._u([{key:"placeholder",fn:function(){return[e("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[e("v-progress-circular",{attrs:{indeterminate:"",color:"primary lighten-2"}})],1)]},proxy:!0}],null,!1,1411643841)}),e("v-btn",{staticClass:"mb-0 text-h6 font-weight-light",attrs:{text:"",to:{name:"Home"},color:"primary"}},[t._v(" Lugah Bot Onboarding ")])],1),e("v-spacer"),t.isLoggedIn?e("div",{staticClass:"d-flex align-center"},[t.user?e("div",{staticClass:"mr-4",staticStyle:{"z-index":"999"}},[e("div",{staticClass:"d-flex align-center"},[e("v-chip",{staticClass:"mx-2",attrs:{color:"error","x-small":"",outlined:""},on:{click:()=>{t.logout().then(()=>{t.$router.push({name:"Home"})})}}},[e("v-icon",{attrs:{left:"",size:"12"}},[t._v("mdi-logout-variant")]),t._v(" Logout ")],1),e("p",{staticClass:"mb-0 primary--text text-right font-weight-bold"},[t._v(" @"+t._s(t.user.username)+" ")])],1),e("p",{staticClass:"mb-0 grey--text"},[t._v(t._s(t.user.email))])]):t._e(),t.user?e("v-avatar",{attrs:{size:"50",color:"primary"}},[e("img",{attrs:{src:`${t.baseUrl}/api/v1/profile/u/image/${t.user.username}`,alt:t.user.username}})]):t._e()],1):e("div",[e("v-btn",{staticClass:"font-weight-light mx-1 text-h6 text-capitalize",attrs:{large:"",rounded:"",outlined:"",to:{name:"Home"},color:"primary"}},[t._v("Login "),e("v-icon",{attrs:{right:""}},[t._v("mdi-account-circle-outline")])],1)],1)],1)],1)],1)])],1)},v=[];const g={baseUrl:"https://onboard.phynaci.net"};var w={data(){return{baseUrl:g.baseUrl}},computed:{...Object(l["c"])({user:"users/user",isLoggedIn:"users/isLoggedIn"})},methods:{...Object(l["b"])({logout:"users/logout"})}},b=w,f=Object(d["a"])(b,p,v,!1,null,null,null),y=f.exports,_=function(){var t=this,e=t._self._c;return e("v-snackbar",{attrs:{rounded:"lg",value:t.toast.show,bottom:!0,left:t.$vuetify.breakpoint.mdAndUp,timeout:t.toast.timeout},scopedSlots:t._u([{key:"action",fn:function({attrs:s}){return[e("v-btn",t._b({staticClass:"text-capitalize",attrs:{dark:"",text:"",color:t.toast.sclass},on:{click:function(e){return t.showToast({show:!1})}}},"v-btn",s,!1),[e("v-icon",{attrs:{left:""}},[t._v(t._s(t.toast.icon))]),t._v(" Close ")],1)]}}])},[e("span",{class:t.toast.sclass+"--text text-capitalize font-weight-bold"},[t._v(t._s(t.toast.sclass)+":  ")]),e("span",{domProps:{innerHTML:t._s(t.toast.message)}})])},x=[],k={data(){return{}},computed:{...Object(l["c"])({toast:"ui/toast"})},methods:{...Object(l["b"])({showToast:"ui/showToast"})},updated(){const{timeout:t,show:e}=this.toast;e&&setTimeout(()=>{this.showToast({show:!1})},t)}},C=k,L=Object(d["a"])(C,_,x,!1,null,null,null),T=L.exports,A={name:"App",components:{Snackbar:T,GlobalLoader:m,Navbar:y},data:()=>({}),mounted(){console.log({route:this.$route})}},q=A,j=(s("88fa"),Object(d["a"])(q,a,n,!1,null,null,null)),O=j.exports,I=s("8c4f"),S=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("HomePageContent"),e("loginModal",{ref:"loginModal",on:{loginSuccess:t.loginSuccess}}),e("invalidTokenModal",{ref:"invalidTokenModal",on:{retryToken:t.retryToken,attemptLogin:t.attemptLogin}})],1)},Q=[],$=function(){var t=this,e=t._self._c;return e("div",{staticClass:"login-modal"},[e("v-dialog",{attrs:{persistent:"","max-width":"400"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e("v-card",[e("v-card-title",{staticClass:"headline primary white--text d-flex align-center"},[e("v-icon",{staticClass:"mr-2",attrs:{color:"white"}},[t._v("mdi-login-variant")]),e("p",{staticClass:"mb-0"},[t._v("Login")])],1),e("v-divider"),e("v-card-text",{staticClass:"py-4 px-6"},[e("p",[t._v(" Login to your Lugah Entertainment account to begin your influencer digital assistant application. ")]),e("v-text-field",{attrs:{label:"Email",type:"text",readonly:t.loading},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login.apply(null,arguments)}},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),e("v-text-field",{attrs:{label:"Password",type:"password",readonly:t.loading},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login.apply(null,arguments)}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),e("v-divider"),e("v-card-actions",[e("v-spacer"),e("v-btn",{staticClass:"pl-6 pr-4",attrs:{loading:t.loading,disabled:t.loading,color:"primary"},on:{click:t.login}},[t._v(" Login "),e("v-icon",[t._v("mdi-chevron-double-right")])],1)],1),e("v-overlay",{attrs:{value:t.loading,absolute:""}},[e("v-progress-circular",{attrs:{color:"primary",indeterminate:"",size:"64"}})],1)],1)],1)],1)},M=[],E={data(){return{dialog:!1,email:"",password:"",loading:!1}},methods:{...Object(l["b"])({showToast:"ui/showToast",loginWithEmail:"users/loginWithEmail",showGlobalLoader:"ui/showGlobalLoader"}),async login(){this.loading=!0;const{email:t,password:e}=this.$data;if(!t||!e)return this.showToast({show:!0,message:"Invalid Email or Password",sclass:"error",timeout:3e3}),void(this.loading=!1);const s=await this.loginWithEmail({email:t,password:e});s.success&&this.$emit("loginSuccess"),this.loading=!1},show(t){this.dialog=t}}},P=E,z=Object(d["a"])(P,$,M,!1,null,null,null),G=z.exports,R=s("bc3a"),U=s.n(R);const H=g.baseUrl+"/api/v1/auth";var F={login:(t,e)=>U.a.post(H+"/login",{email:t,password:e}),validateToken:t=>U.a.get(H+"/me",{headers:{Authorization:"Bearer "+t}}),logout:()=>U.a.get(H+"/logout")};const W=g.baseUrl+"/api/v1/chat";var B={getQuestions:()=>U.a.get(W+"/chatbot/onboarding/questions"),sendAnswer:(t,e)=>U.a.post(`${W}/chatbot/onboarding/question/${t}`,{answer:e})},D={Auth:F,Questions:B},N=function(){var t=this,e=t._self._c;return e("div",{staticClass:"invalid-token-modal"},[e("v-dialog",{attrs:{persistent:"","max-width":"350"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e("v-card",[e("v-card-title",{staticClass:"headline error white--text d-flex align-center"},[e("v-icon",{staticClass:"mr-2",attrs:{color:"warning"}},[t._v("mdi-alert")]),e("p",{staticClass:"mb-0"},[t._v("Invalid Token")])],1),e("v-card-text",{staticClass:"py-4 px-6"},[t._v(" The token or link you have entered is either "),e("strong",[t._v("invalid")]),t._v(" or "),e("strong",[t._v("expired")]),t._v(". Please try again or login to your account. ")]),e("v-divider"),e("v-card-actions",[e("v-spacer"),e("v-btn",{staticClass:"text-capitalize",attrs:{color:"primary",text:""},on:{click:function(e){return t.$emit("retryToken")}}},[e("v-icon",[t._v("mdi-restart")]),t._v(" Retry ")],1),e("v-btn",{staticClass:"text-capitalize px-4",attrs:{color:"primary"},on:{click:function(e){return t.$emit("attemptLogin")}}},[e("v-icon",{attrs:{left:""}},[t._v("mdi-login-variant")]),t._v(" Login ")],1)],1)],1)],1)],1)},Y=[],K={data(){return{dialog:!1}},methods:{show(t){this.dialog=t}}},J=K,V=Object(d["a"])(J,N,Y,!1,null,null,null),X=V.exports,Z=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home-page-content"},[e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"12",md:"8","offset-md":"2"}},[e("v-scroll-y-transition",[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.isLoggedIn,expression:"!isLoggedIn"}]},[e("v-card",{staticClass:"my-16 py-4",attrs:{elevation:"0"}},[e("p",{staticClass:"display-1 mb-2"},[t._v(" You need to be logged in to continue ")]),e("v-divider",{staticClass:"mb-4"}),e("v-alert",{attrs:{prominent:"",type:"info",text:""}},[e("p",{staticClass:"mb-0"},[t._v(" To continue, please login or use a valid link from the "),e("strong",[t._v("Lugah Entertainment")]),t._v(" app. ")])])],1)],1)]),e("v-scroll-y-transition",[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isLoggedIn,expression:"isLoggedIn"}]},[e("v-card",{staticClass:"my-16 py-4",attrs:{elevation:"0"}},[e("p",{staticClass:"mb-2 font-weight-bold",class:t.$vuetify.breakpoint.mdAndUp?"display-2":"display-1"},[t._v(" Influencer Questions ")]),e("v-divider",{staticClass:"mb-12"}),e("p",{staticClass:"display-1 mb-2"},[e("strong",[t._v("Hi "+t._s(t.user?t.user.firstname:"")+",")])]),e("p",{staticClass:"text-h5"},[t._v(" Your account ("),e("span",{staticClass:"primary--text"},[t._v("@"+t._s(t.user?t.user.username:""))]),t._v(") is about to be upgraded to an influencer. In order to proceed, we will need to ask you some questions. These questions will be used to build your online persona as a Lugah influencer. ")]),e("v-card-actions",[e("v-btn",{staticClass:"text-capitalize primary px-4",attrs:{rounded:"",large:""},on:{click:t.beginQuestions}},[t._v("Proceed to answer questions "),e("v-icon",[t._v("mdi-arrow-right")])],1)],1)],1)],1)])],1)],1)],1)],1)},tt=[],et={computed:{...Object(l["c"])({user:"users/user",isLoggedIn:"users/isLoggedIn"})},methods:{...Object(l["b"])({getQuestions:"questions/getQuestions"}),async beginQuestions(){console.log("Get Questions");const t=await this.getQuestions();t.success&&this.$router.push({name:"Questions"}).catch(t=>{console.log({e:t})})}}},st=et,ot=Object(d["a"])(st,Z,tt,!1,null,null,null),at=ot.exports,nt={name:"Home",components:{LoginModal:G,InvalidTokenModal:X,HomePageContent:at},computed:{...Object(l["c"])({isLoggedIn:"users/isLoggedIn"})},methods:{...Object(l["b"])({showGlobalLoader:"ui/showGlobalLoader",showToast:"ui/showToast",setAuthData:"users/setAuthData"}),showModal(t,e){this.$refs[t].show(e)},loginSuccess(){console.log("Login Successful"),this.showModal("loginModal",!1)},async authenticateWithToken(){this.showGlobalLoader({show:!0,message:"Loading..."});const{token:t}=this.$route.query;try{const{data:e}=await D.Auth.validateToken(t);e.success&&(await this.setAuthData({user:e.data,token:t}),this.showToast({show:!0,message:"Authentication Successful",sclass:"success",timeout:3e3}))}catch(e){console.log({error:e}),this.showToast({show:!0,message:"Invalid Token",sclass:"error",timeout:3500}),this.showModal("invalidTokenModal",!0)}finally{this.showGlobalLoader({show:!1,message:""})}},attemptLogin(){this.showModal("invalidTokenModal",!1),this.showModal("loginModal",!0)},async retryToken(){this.showModal("invalidTokenModal",!1),await this.authenticateWithToken()}},async mounted(){const{token:t}=this.$route.query;t?await this.authenticateWithToken():this.isLoggedIn||this.showModal("loginModal",!0)}},it=nt,rt=Object(d["a"])(it,S,Q,!1,null,null,null),lt=rt.exports,ct=function(){var t=this,e=t._self._c;return e("div",{staticClass:"questions-page",class:t.$vuetify.breakpoint.mdAndUp?" mt-16":"mt-4"},[e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"11",md:"8","offset-md":"2"}},[e("p",{staticClass:"mb-0 ml-10"},[t._v(" Please answer "),e("strong",[t._v("at least 5")]),t._v(" questions ")])])],1)],1),e("v-window",{model:{value:t.activeQuestion,callback:function(e){t.activeQuestion=e},expression:"activeQuestion"}},t._l(t.questions,(function(s,o){return e("v-window-item",{key:o,attrs:{value:o}},[e("QuestionItem",{attrs:{question:s,index:o,total:t.questions.length,active:t.activeQuestion===o,givenAnswer:t.userAnswer(s.questionId)},on:{back:function(e){t.activeQuestion--},questionAnswered:t.questionAnswered,answerError:t.answerError}})],1)})),1)],1)],1)],1)],1)},ut=[],dt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"question-item"},[e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"11",md:"8","offset-md":"2"}},[e("v-card",{staticClass:"d-flex align-start",attrs:{elevation:"0"}},[e("div",{staticClass:"primary--text mt-11 mr-2"},[e("div",{staticClass:"d-flex align-center"},[e("p",{staticClass:"mb-0"},[t._v(t._s(t.index+1))]),e("v-icon",{attrs:{color:"primary"}},[t._v("mdi-arrow-right")])],1),e("div",[e("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:o}){return[t.index>0?e("v-btn",t._g(t._b({staticClass:"mt-8",attrs:{color:"secondary",elevation:"1",icon:""},on:{click:function(e){return t.$emit("back")}}},"v-btn",o,!1),s),[e("v-icon",[t._v("mdi-arrow-left")])],1):t._e()]}}])},[e("span",[t._v("Previous Question")])])],1)]),e("div",{staticStyle:{"min-width":"95%"}},[e("p",{staticClass:"caption grey--text"},[t._v(" Question "+t._s(t.index+1)+" of "+t._s(t.total)+" ")]),e("p",{staticClass:"display-1"},[t._v(t._s(t.question.question))]),e("v-textarea",{staticStyle:{"font-size":"1.25rem"},attrs:{rows:"1",placeholder:"Type your answer here",label:"Your answer","auto-grow":"",disabled:t.loading,autofocus:""},model:{value:t.answer,callback:function(e){t.answer=e},expression:"answer"}}),e("v-scroll-x-transition",{attrs:{"leave-absolute":""}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.recording,expression:"!recording"}]},[e("div",{staticClass:"d-flex align-center"},[e("v-btn",{attrs:{icon:"",outlined:"",loading:t.loading,disabled:t.loading,elevation:"2",color:"primary"},on:{click:t.startRecording}},[e("v-icon",{attrs:{color:"secondary"}},[t._v("mdi-microphone")])],1),e("p",{staticClass:"mb-0 ml-4"},[t._v(" "+t._s(t.loading?"Saving...":"Tap to record your answer")+" ")])],1)])]),e("v-scroll-x-transition",{attrs:{"hide-on-leave":""}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.recording,expression:"recording"}]},[e("div",{staticClass:"d-flex align-center"},[e("v-progress-circular",{attrs:{indeterminate:"",color:"purple",size:"40",width:"3"}},[e("v-btn",{attrs:{icon:"",small:"",outlined:"",elevation:"2",disabled:t.loading,color:"primary"},on:{click:t.stopRecording}},[e("v-icon",{attrs:{color:"secondary"}},[t._v("mdi-stop")])],1)],1),e("p",{staticClass:"mb-0 ml-4"},[t._v("Recording... Tap to stop")])],1)])]),e("div",{staticClass:"d-flex align-center my-6"},[e("v-btn",{staticClass:"primary white--text py-2 text-capitalize mr-4",attrs:{disabled:t.loading||t.recording,rounded:"",loading:t.loading},on:{click:t.submitAnswer}},[t._v("Okay "),e("v-icon",{attrs:{right:""}},[t._v("mdi-check")])],1),e("p",{staticClass:"mb-0"},[t._v("or press "),e("strong",[t._v("Enter")])]),e("v-icon",{attrs:{size:"28"}},[t._v("mdi-keyboard-return")])],1)],1)])],1)],1)],1)],1)},ht=[],mt={props:{question:{default:{questionId:"1234",question:"What is the question you want to answer?"}},givenAnswer:{default:""},index:{default:0},total:{default:17},active:{default:!1}},data(){return{answer:"",recognition:null,recording:!1,loading:!1}},computed:{...Object(l["c"])({isLoggedIn:"users/isLoggedIn"})},methods:{...Object(l["b"])({showToast:"ui/showToast",sendAnswer:"questions/answerQuestion"}),startRecording(){this.recognition.start(),this.recording=!0,console.log("Recording Started")},stopRecording(){this.recognition.stop(),this.recording=!1,console.log("Recording Stopped")},async submitAnswer(){if(this.loading||this.recording)return;this.loading=!0;const t=await this.sendAnswer({questionId:this.question.questionId,answer:this.answer});t.success?this.$emit("questionAnswered",t.message):this.$emit("answerError",t.message),this.loading=!1}},mounted(){const t=window.SpeechRecognition||window.webkitSpeechRecognition;this.recognition=new t,this.recognition.interimResults=!0,this.recognition.continuous=!0,this.recognition.addEventListener("result",t=>{const e=Array.from(t.results).map(t=>t[0]).map(t=>t.transcript);this.answer=e.join(" ")}),document.addEventListener("keypress",async t=>{"Enter"!==t.key||!this.active||this.recording||!this.isLoggedIn||t.altKey||t.shiftKey||t.ctrlKey||this.submitAnswer()}),this.answer=this.givenAnswer}},pt=mt,vt=Object(d["a"])(pt,dt,ht,!1,null,null,null),gt=vt.exports,wt={components:{QuestionItem:gt},data(){return{activeQuestion:0}},computed:{...Object(l["c"])({questions:"questions/questions",userAnswer:"questions/userAnswerToQuestion",isLoggedIn:"users/isLoggedIn"})},methods:{...Object(l["b"])({showToast:"ui/showToast"}),answerError(t){console.log({e:t}),this.showToast({show:!0,message:t,timeout:3e3,sclass:"error"})},questionAnswered(t){console.log({e:t}),this.showToast({message:"Answer Saved",show:!0,timeout:1500,sclass:"success"}),this.activeQuestion!==this.questions.length-1?this.activeQuestion++:this.$router.push({name:"Complete"})}},mounted(){this.isLoggedIn||this.$router.push({name:"Home"})}},bt=wt,ft=Object(d["a"])(bt,ct,ut,!1,null,null,null),yt=ft.exports,_t=function(){var t=this,e=t._self._c;return e("div",{staticClass:"submission-complete"},[e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"12",md:"6","offset-md":"3"}},[e("v-scroll-x-transition",[e("v-card",{staticClass:"my-16 py-4",attrs:{elevation:"0"}},[e("p",{staticClass:"mb-2 font-weight-bold success--text",class:t.$vuetify.breakpoint.mdAndUp?"display-2":"display-1"},[t._v(" Submission Successful ")]),e("v-divider",{staticClass:"mb-12"}),e("p",{staticClass:"text-h5"},[t._v(" Thank you for your submission. Our team will forward next steps to your registered email and your plan will be upgraded shortly. "),e("br"),e("br"),t._v(" Thanks. "),e("br"),e("br"),t._v(" You will be automatically redirected back to the app. "),e("br"),t._v(" If that doesn't happen "),e("span",{staticClass:"primary--text",on:{click:function(e){return t.$router.push({name:"AppRedirect"})}}},[t._v("Click here.")])]),e("p",[t._v("You will be signed out in "+t._s(t.timer)+"...")]),e("v-card-actions")],1)],1)],1)],1)],1)],1)},xt=[],kt={data(){return{timer:20,interval:null}},computed:{...Object(l["c"])({user:"users/user",isLoggedIn:"users/isLoggedIn"})},methods:{...Object(l["b"])({logout:"users/logout"}),async signout(){this.interval&&clearInterval(this.interval),this.$router.push({name:"AppRedirect"}).catch(t=>{console.log({e:t})})},async countdown(){this.timer--,this.timer<1&&await this.signout()}},mounted(){this.interval=setInterval(()=>{this.countdown()},1e3)},beforeDestroy(){clearInterval(this.interval)}},Ct=kt,Lt=Object(d["a"])(Ct,_t,xt,!1,null,null,null),Tt=Lt.exports,At=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-redirect"},[e("div",{staticStyle:{height:"100vh",width:"100vw",display:"flex","align-items":"center","justify-content":"center"}},[e("v-progress-circular",{attrs:{indeterminate:"",color:"primary",size:"70"}})],1)])},qt=[],jt={},Ot=jt,It=Object(d["a"])(Ot,At,qt,!1,null,null,null),St=It.exports;o["default"].use(I["a"]);const Qt=[{path:"/",name:"Home",component:lt},{path:"/questions",name:"Questions",component:yt},{path:"/complete",name:"Complete",component:Tt},{path:"/app-redirect",name:"AppRedirect",component:St},{path:"/about",name:"About",component:()=>s.e("about").then(s.bind(null,"f820"))}],$t=new I["a"]({routes:Qt});var Mt=$t,Et={showToast(t,{show:e,sclass:s="",message:o="",timeout:a=1e3}){return new Promise(n=>{t.commit("showToast",{show:e,sclass:s,message:o,timeout:a}),n(a)})},showGlobalLoader(t,{show:e,color:s="primary",message:o="Loading"}){return new Promise(a=>{t.commit("showGlobalLoader",{show:e,color:s,message:o}),a()})},showLoginModal(t,{show:e}){return new Promise(s=>{t.commit("showLoginModal",{show:e}),s()})}},Pt={showToast(t,e){for(const s in e)t.toast[s]=e[s];t.toast.icon=e.sclass?t.toast.icons[e.sclass]:""},showGlobalLoader(t,e){for(const s in e)t.loader[s]=e[s]},showLoginModal(t,{show:e}){t.showLoginModal=e}},zt={loader(t){return t.loader},toast(t){return t.toast},loginModal(t){return t.showLoginModal}},Gt=()=>({toast:{sclass:"",message:"",show:!1,timeout:-1,icons:{success:"mdi-check",warning:"mdi-alert",error:"mdi-window-close",info:"mdi-information"},icon:""},loader:{show:!1,color:"primary",message:"Loading - Please stand by"},showLoginModal:!0}),Rt={namespaced:!0,state:Gt,actions:Et,mutations:Pt,getters:zt},Ut={async loginWithEmail({commit:t,dispatch:e},{email:s,password:o}){try{const{data:a}=await D.Auth.login(s,o);if(a.success){const{user:s,accessToken:o}=a.data;t("setAuthToken",o),t("setUser",s),e("ui/showToast",{show:!0,message:"Logged In Successfully",sclass:"success",timeout:3500},{root:!0})}return a}catch(a){return e("ui/showToast",{show:!0,message:a.response.data.message,sclass:"error",timeout:3500},{root:!0}),t("resetAuthentication"),a.response.data}},async logout({commit:t,dispatch:e,state:s}){e("ui/showGlobalLoader",{show:!0,message:"Logging Out"},{root:!0});try{if(s.authToken||s.user){const{data:t}=await D.Auth.logout();e("ui/showToast",{show:!0,message:t.message,sclass:"info",timeout:3500},{root:!0})}t("resetAuthentication")}catch(o){e("ui/showToast",{show:!0,message:o.response.data.message,sclass:"error",timeout:3500},{root:!0}),t("resetAuthentication")}finally{e("ui/showGlobalLoader",{show:!1,message:""},{root:!0})}},async setAuthData({commit:t},{user:e,token:s}){t("setAuthToken",s),t("setUser",e)}},Ht={setAuthToken:(t,e)=>{U.a.defaults.headers.common["Authorization"]="Bearer "+e,t.token=e},resetAuthentication:t=>{t.token=null,t.user=null,delete U.a.defaults.headers.common["Authorization"]},setUser:(t,e)=>{t.user=e}},Ft={user(t){return t.user},token(t){return t.authToken},isLoggedIn(t){return Boolean(t.user)}},Wt=()=>({authToken:null,user:null}),Bt={namespaced:!0,state:Wt,actions:Ut,mutations:Ht,getters:Ft},Dt={async getQuestions({commit:t,dispatch:e}){e("ui/showGlobalLoader",{show:!0,message:"Loading..."},{root:!0});try{const{data:s}=await D.Questions.getQuestions();return t("setQuestions",s.data),s}catch(s){return console.log({error:s}),t("setQuestions",[]),s.response.data}finally{e("ui/showGlobalLoader",{show:!1,message:""},{root:!0})}},async answerQuestion({commit:t},{questionId:e,answer:s}){try{const{data:o}=await D.Questions.sendAnswer(e,s);return t("updateQuestionAnswer",o.data),o}catch(o){return console.log({error:o}),o.response.data}}},Nt={setQuestions:(t,e)=>{t.questions=e},updateQuestionAnswer:(t,e)=>{t.questions.forEach(t=>{t.questionId===e.questionId&&(t.answers||(t.answers=[]),t.answers.length&&t.answers.splice(0,t.answers.length),t.answers.push(e))})}},Yt={questions(t){return t.questions},userAnswerToQuestion:t=>e=>{const s=t.questions.find(t=>t.questionId===e);return s.answers&&s.answers.length?s.answers[0]["answer"]:""}},Kt=()=>({questions:[]}),Jt={namespaced:!0,state:Kt,actions:Dt,mutations:Nt,getters:Yt},Vt={ui:Rt,users:Bt,questions:Jt};o["default"].use(l["a"]);var Xt=new l["a"].Store({state:{},mutations:{},actions:{},modules:{...Vt}}),Zt=s("ce5b"),te=s.n(Zt);s("bf40");o["default"].use(te.a);var ee=new te.a({theme:{themes:{light:{primary:"#FB8500",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}});s("d5e8"),s("5363");o["default"].config.productionTip=!1,new o["default"]({router:Mt,store:Xt,vuetify:ee,render:t=>t(O)}).$mount("#app")},5727:function(t,e,s){},"88fa":function(t,e,s){"use strict";s("5727")},"9b19":function(t,e,s){t.exports=s.p+"img/logo.5b26d5b4.svg"}});
//# sourceMappingURL=app.7fb69e0d.js.map