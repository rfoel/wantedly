webpackJsonp([1],{"0nuf":function(t,s){},Ao1l:function(t,s){},Kbwb:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("7+uW"),a=e("mtWM"),n=e.n(a),r=e("Rf8U"),o=e.n(r),l=e("MMSg"),u=e.n(l),c=e("ESwS"),d=e.n(c),m=e("+cKO"),p={data:function(){return{isActive:!1,isLoading:!1,status:"",user:{email:"",password:""}}},computed:{user_profile:function(){return this.$store.state.current_user},token:function(){return!!this.$store.state.token}},methods:{navbarToggle:function(){this.isActive=!this.isActive},submit:function(){var t=this;this.$v.user.$touch(),this.$v.user.$invalid||(this.isLoading=!0,this.$store.dispatch("signIn",this.user).then(function(s){t.isLoading=!1,s.error?(t.$toast.open({duration:3e3,message:"Invalid email or password (or both)",position:"is-top",type:"is-danger"}),t.status=!1,setTimeout(function(){t.status=""},3e3)):(t.$toast.open({duration:3e3,message:"Logged in successfully",position:"is-top",type:"is-success"}),t.$router.push({name:"home"}))}).catch(function(t){}))},signOut:function(){var t=this;this.$store.dispatch("signOut").then(function(s){s.error||(t.$toast.open({duration:3e3,message:"Logged out successfully",position:"is-top",type:"is-success"}),t.$router.push({name:"home"}))}).catch(function(t){})}},validations:{user:{email:{required:m.required,email:m.email},password:{required:m.required,minLength:Object(m.minLength)(6)}}}},v={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("nav",{staticClass:"navbar is-fixed-top is-transparent"},[e("div",{staticClass:"container"},[e("div",{staticClass:"navbar-brand"},[e("router-link",{staticClass:"navbar-item",attrs:{to:{name:"home"}}},[e("img",{attrs:{src:"/static/images/wantedly_logo.svg",width:"112",height:"48"}})]),t._v(" "),e("div",{staticClass:"navbar-burger burger",class:{"is-active":t.isActive},on:{click:t.navbarToggle}},[e("span"),t._v(" "),e("span"),t._v(" "),e("span")])],1),t._v(" "),e("div",{staticClass:"navbar-menu",class:{"is-active":t.isActive}},[e("div",{staticClass:"navbar-end"},[e("router-link",{staticClass:"navbar-item",attrs:{to:{name:"home"}}},[t._v("\n          Home\n        ")]),t._v(" "),e("router-link",{staticClass:"navbar-item",attrs:{to:{name:"search"}}},[t._v("\n          Search\n        ")]),t._v(" "),e("hr",{staticClass:"dropdown-divider"}),t._v(" "),t.token?t._e():e("router-link",{staticClass:"navbar-item",attrs:{to:{name:"sign_up"}}},[t._v("\n          Sign up\n        ")]),t._v(" "),t.token?e("b-dropdown",{attrs:{position:"is-bottom-left"}},[e("a",{staticClass:"navbar-item",attrs:{slot:"trigger"},slot:"trigger"},[e("figure",{staticClass:"image is-48x48"},[e("img",{attrs:{src:t.user_profile.avatar}})])]),t._v(" "),e("b-dropdown-item",{attrs:{custom:"",paddingless:""}},[e("a",{staticClass:"dropdown-item"},[e("h1",{staticClass:"title is-6"},[t._v(t._s(t.user_profile.name))]),t._v(" "),e("h2",{staticClass:"subtitle is-6"},[t._v(" "+t._s(t.user_profile.email))])]),t._v(" "),e("hr",{staticClass:"dropdown-divider"}),t._v(" "),e("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"profile"}}},[t._v("\n              Profile\n            ")]),t._v(" "),e("hr",{staticClass:"dropdown-divider"}),t._v(" "),e("a",{staticClass:"dropdown-item",on:{click:t.signOut}},[t._v("\n              Log out\n            ")])],1)],1):t._e(),t._v(" "),t.token?t._e():e("b-dropdown",{attrs:{position:"is-bottom-left"}},[e("a",{staticClass:"navbar-item",attrs:{slot:"trigger"},slot:"trigger"},[e("span",[t._v("Log in")]),t._v(" "),e("b-icon",{staticClass:"fa fa-angle-down"})],1),t._v(" "),e("b-dropdown-item",{attrs:{custom:"",paddingless:""}},[e("form",{on:{submit:function(s){s.preventDefault(),t.submit(s)}}},[e("div",{staticClass:"modal-card",staticStyle:{width:"300px"}},[e("section",{staticClass:"modal-card-body"},[e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Email")]),t._v(" "),e("div",{staticClass:"control has-icons-right"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.user.email,expression:"user.email",modifiers:{trim:!0}}],staticClass:"input",class:{"is-danger":t.$v.user.email.$error},attrs:{name:"email",type:"text",placeholder:"Your email"},domProps:{value:t.user.email},on:{blur:[function(s){t.$v.user.email.$touch()},function(s){t.$forceUpdate()}],input:[function(s){s.target.composing||t.$set(t.user,"email",s.target.value.trim())},function(s){t.$v.user.email.$reset()}]}})]),t._v(" "),t.$v.user.email.$error?e("p",{staticClass:"help is-danger"},[t.$v.user.email.required?t.$v.user.email.email?t._e():e("span",[t._v("Email is invalid")]):e("span",[t._v("Email is required")])]):t._e()]),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Password")]),t._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"input",class:{"is-danger":t.$v.user.password.$error},attrs:{name:"password",type:"password",placeholder:"•••• ••••••••"},domProps:{value:t.user.password},on:{blur:function(s){t.$v.user.password.$touch()},input:[function(s){s.target.composing||t.$set(t.user,"password",s.target.value)},function(s){t.$v.user.password.$reset()}]}})]),t._v(" "),t.$v.user.password.$error?e("p",{staticClass:"help is-danger"},[t.$v.user.password.required?t.$v.user.password.minLength?t._e():e("span",[t._v("Password must have at least "+t._s(t.$v.user.password.$params.minLength.min)+" characters")]):e("span",[t._v("Password is required")])]):t._e()]),t._v(" "),e("button",{staticClass:"button is-primary",class:{"is-loading":t.isLoading,"is-success":t.status,"is-danger":!1===t.status}},[t.isLoading||""!==t.status?t.status?e("span",[e("i",{staticClass:"fa fa-check"})]):!1===t.status?e("span",[e("i",{staticClass:"fa fa-close"})]):t._e():e("span",[t._v("Log in")])]),t._v(" "),e("router-link",{staticClass:"button is-primary is-outlined is-pulled-right",attrs:{to:{name:"sign_up"}}},[t._v("Sign up")])],1)])])])],1)],1)])])])},staticRenderFns:[]},h={render:function(){var t=this.$createElement,s=this._self._c||t;return s("main",[s("router-view")],1)},staticRenderFns:[]},f={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("footer",{staticClass:"footer"},[s("div",{staticClass:"container"},[s("div",{staticClass:"content has-text-centered"},[s("p",[s("strong",[this._v("Wantedly")]),this._v(" challenge by\n        "),s("a",{attrs:{href:"https://github.com/rfoel/wantedly",target:"_blank"}},[this._v("Rafael Franco")]),this._v(".\n      ")])])])])}]},g={name:"app",components:{PageNavigation:e("VU/8")(p,v,!1,function(t){e("Ao1l")},"data-v-5719844a",null).exports,PageContent:e("VU/8")(null,h,!1,null,null,null).exports,PageFooter:e("VU/8")(null,f,!1,null,null,null).exports}},_={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("page-navigation"),this._v(" "),s("page-content",{staticClass:"flex-grow"}),this._v(" "),s("page-footer")],1)},staticRenderFns:[]},C=e("VU/8")(g,_,!1,function(t){e("e38h")},null,null).exports,k=e("/ocq"),$=e("2aIq"),b=e.n($),w=e("mvHQ"),S=e.n(w),y=e("NYxO");n.a.defaults.baseURL="https://wantedly-api.herokuapp.com",i.a.use(y.a);var x=new y.a.Store({state:{token:!!localStorage.token&&localStorage.token,current_user:!!localStorage.current_user&&JSON.parse(localStorage.current_user)},mutations:{signIn:function(t,s){localStorage.token=s,t.token=s},setUser:function(t,s){localStorage.current_user=S()(s),t.current_user=s},signOut:function(t){localStorage.removeItem("token"),localStorage.removeItem("current_user"),t.token=!1,t.current_user=!1}},actions:{getSkills:function(t){t.commit;return n.a.get("/skills").then(function(t){return t.data}).catch(function(t){})},checkUniqueness:function(t,s){return b()(t),n.a.post("/checkUniqueness",s).then(function(t){return t.data}).catch(function(t){return{error:t}})},signUp:function(t,s){var e=t.commit;return n.a.post("/users",s).then(function(t){return e("signIn",t.data.token),e("setUser",t.data),t}).catch(function(t){return{error:t}})},signIn:function(t,s){var e=t.commit;return n.a.post("/user/sign_in",s).then(function(t){return e("signIn",t.data.token),e("setUser",t.data),t}).catch(function(t){return{error:t}})},signOut:function(t){var s=t.commit;return n.a.delete("/user/sign_out",{headers:{Authorization:"Token token="+localStorage.token}}).then(function(t){return s("signOut"),t}).catch(function(t){return{error:t}})},getProfile:function(t){t.commit;return n.a.get("/user",{headers:{Authorization:"Token token="+localStorage.token}}).then(function(t){return t.data}).catch(function(t){return{error:t}})},getCurrentUserSkills:function(t){t.commit;return n.a.get("/user/skills",{headers:{Authorization:"Token token="+localStorage.token}}).then(function(t){return t.data}).catch(function(t){return{error:t}})},updateSkills:function(t,s){return b()(t),n.a.post("/user/update_skills",s,{headers:{Authorization:"Token token="+localStorage.token}}).then(function(t){return t.data}).catch(function(t){return{error:t}})},getUser:function(t,s){t.commit;return n.a.get("/users/"+s.id).then(function(t){return t.data}).catch(function(t){})},getUserSkills:function(t,s){t.commit;return n.a.get("/users/"+s.id+"/skills").then(function(t){return t.data}).catch(function(t){})},recommend:function(t,s){t.commit;return n.a.post("/users/"+s.user_id+"/skills",{skill:s.recommend},{headers:{Authorization:"Token token="+localStorage.token}}).then(function(t){return t.data}).catch(function(t){})},endorse:function(t,s){t.commit;return n.a.get("/users/"+s.user_id+"/skills/"+s.skill_id+"/endorse",{headers:{Authorization:"Token token="+localStorage.token}}).then(function(t){return t.data}).catch(function(t){})}}}),L={render:function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"hero is-large"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container has-text-centered"},[s("h1",{staticClass:"title"},[this._v("\n        Make Work More Exciting\n      ")]),this._v(" "),s("h2",{staticClass:"subtitle"},[this._v("\n        Grow your professional network on Wantedly\n      ")]),this._v(" "),this.token?this._e():s("p",[s("router-link",{staticClass:"button is-primary is-outlined",attrs:{to:{name:"sign_up"}}},[this._v("Sign up with you email")])],1)])])])},staticRenderFns:[]},U=e("VU/8")({computed:{token:function(){return!!this.$store.state.token}}},L,!1,function(t){e("rFD9")},"data-v-fe6ff0ce",null).exports,E={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"hero is-large"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container has-text-centered"},[s("h1",{staticClass:"title"},[this._v("\n        Find and connect with people\n      ")]),this._v(" "),s("h2",{staticClass:"subtitle"},[this._v("\n        Grow your professional network on Wantedly\n      ")]),this._v(" "),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"}),this._v(" "),s("div",{staticClass:"column is-full-tablet is-three-fifths-desktop"},[s("div",{staticClass:"control has-icons-left"},[s("input",{staticClass:"input is-medium",attrs:{type:"text",placeholder:"Find people"}}),this._v(" "),s("span",{staticClass:"icon is-left"},[s("i",{staticClass:"fa fa-search"})])])]),this._v(" "),s("div",{staticClass:"column"})])])])])}]},q=e("VU/8")({data:function(){return{search:""}}},E,!1,function(t){e("Kbwb")},"data-v-8b7215a6",null).exports,P=e("//Fk"),F=e.n(P),A={data:function(){return{isLoading:!1,status:"",skills:[],filteredSkills:this.skills,user:{name:"",email:"",occupation:"",location:"",bio:"",password:""},user_skills:[]}},created:function(){var t=this;this.$store.dispatch("getSkills").then(function(s){t.skills=s})},methods:{getFilteredSkills:function(t){this.filteredSkills=this.skills.filter(function(s){return s.name.toString().toLowerCase().indexOf(t.toLowerCase())>=0}),this.filteredSkills.length||(this.filteredSkills=[{name:t}])},add:function(){this.user_skills=this.user_skills.filter(function(t,s,e){return s===e.findIndex(function(s){return s.name===t.name})})},submit:function(){var t=this;this.$v.user.$touch(),this.$v.user.$invalid||(this.isLoading=!0,this.$store.dispatch("signUp",{user:this.user,skills:this.user_skills}).then(function(s){t.isLoading=!1,s.error?(t.$toast.open({duration:3e3,message:"Something went terribly wrong",position:"is-top",type:"is-danger"}),t.status=!1,setTimeout(function(){t.status=""},3e3)):(t.$toast.open({duration:3e3,message:"Signed up successfully",position:"is-top",type:"is-success"}),t.status=!0,t.status="",t.$router.push({name:"home"}))}).catch(function(t){}))}},validations:{user:{name:{required:m.required},occupation:{},location:{},bio:{},email:{required:m.required,email:m.email,isUnique:function(t){var s=this;return""===t||new F.a(function(t,e){s.$store.dispatch("checkUniqueness",{email:s.user.email}).then(function(s){s.error?t(!1):t(!0)}).catch(function(t){e(t)})})}},password:{required:m.required,minLength:Object(m.minLength)(6)}},user_skills:{}}},O={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"container section"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column"}),t._v(" "),e("div",{staticClass:"column is-full-tablet is-one-quarter-desktop"},[e("h1",{staticClass:"title is-3 has-text-centered"},[t._v("Sign up")]),t._v(" "),e("form",{on:{submit:function(s){s.preventDefault(),t.submit(s)}}},[e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Name")]),t._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.user.name,expression:"user.name",modifiers:{trim:!0}}],staticClass:"input",class:{"is-danger":t.$v.user.name.$error},attrs:{name:"name",type:"text",placeholder:"Your name"},domProps:{value:t.user.name},on:{input:[function(s){s.target.composing||t.$set(t.user,"name",s.target.value.trim())},function(s){t.$v.user.name.$touch()}],blur:function(s){t.$forceUpdate()}}})]),t._v(" "),t.$v.user.name.$error?e("p",{staticClass:"help is-danger"},[t.$v.user.name.required?t._e():e("span",[t._v("Name is required")])]):t._e()]),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Email")]),t._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.user.email,expression:"user.email",modifiers:{trim:!0}}],staticClass:"input",class:{"is-danger":t.$v.user.email.$error},attrs:{name:"email",type:"text",placeholder:"Your email"},domProps:{value:t.user.email},on:{blur:[function(s){t.$v.user.email.$touch()},function(s){t.$forceUpdate()}],input:[function(s){s.target.composing||t.$set(t.user,"email",s.target.value.trim())},function(s){t.$v.user.email.$reset()}]}})]),t._v(" "),t.$v.user.email.$error?e("p",{staticClass:"help is-danger"},[t.$v.user.email.required?t.$v.user.email.email?t.$v.user.email.isUnique?t._e():e("span",[t._v("Email already in use")]):e("span",[t._v("Email is invalid")]):e("span",[t._v("Email is required")])]):t._e()]),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Password")]),t._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"input",class:{"is-danger":t.$v.user.password.$error},attrs:{name:"password",type:"password",placeholder:"•••• ••••••••"},domProps:{value:t.user.password},on:{input:[function(s){s.target.composing||t.$set(t.user,"password",s.target.value)},function(s){t.$v.user.password.$touch()}]}})]),t._v(" "),t.$v.user.password.$error?e("p",{staticClass:"help is-danger"},[t.$v.user.password.required?t.$v.user.password.minLength?t._e():e("span",[t._v("Password must have at least "+t._s(t.$v.user.password.$params.minLength.min)+" characters")]):e("span",[t._v("Password is required")])]):t._e()]),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Occupation")]),t._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.user.occupation,expression:"user.occupation",modifiers:{trim:!0}}],staticClass:"input",attrs:{name:"occupation",type:"text",placeholder:"Your occupation"},domProps:{value:t.user.occupation},on:{input:function(s){s.target.composing||t.$set(t.user,"occupation",s.target.value.trim())},blur:function(s){t.$forceUpdate()}}})])]),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Location")]),t._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.user.location,expression:"user.location",modifiers:{trim:!0}}],staticClass:"input",attrs:{name:"location",type:"text",placeholder:"Your location"},domProps:{value:t.user.location},on:{input:function(s){s.target.composing||t.$set(t.user,"location",s.target.value.trim())},blur:function(s){t.$forceUpdate()}}})])]),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Bio")]),t._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.user.bio,expression:"user.bio",modifiers:{trim:!0}}],staticClass:"input",attrs:{name:"bio",type:"text",placeholder:"Say something about yourself"},domProps:{value:t.user.bio},on:{input:function(s){s.target.composing||t.$set(t.user,"bio",s.target.value.trim())},blur:function(s){t.$forceUpdate()}}})])]),t._v(" "),e("b-field",{attrs:{label:"What are your skills?"}},[e("b-taginput",{attrs:{data:t.filteredSkills,icon:"plus",field:"name",placeholder:"Add a skill",autocomplete:""},on:{add:t.add,typing:t.getFilteredSkills},model:{value:t.user_skills,callback:function(s){t.user_skills=s},expression:"user_skills"}})],1),t._v(" "),e("div",{staticClass:"has-text-centered"},[e("button",{staticClass:"button is-primary is-outlined has-margin-top-30",class:{"is-loading":t.isLoading,"is-success":t.status,"is-danger":!1===t.status}},[t.isLoading||""!==t.status?t.status?e("span",[e("i",{staticClass:"fa fa-check"})]):!1===t.status?e("span",[e("i",{staticClass:"fa fa-close"})]):t._e():e("span",[t._v("Register")])])])],1)]),t._v(" "),e("div",{staticClass:"column"})])])},staticRenderFns:[]},R=e("VU/8")(A,O,!1,function(t){e("tUk2")},"data-v-09de1bcc",null).exports,N={data:function(){return{isLoading:!1,status:"",user:{email:"",password:""}}},methods:{submit:function(){var t=this;this.$v.user.$touch(),this.$v.user.$invalid||(this.isLoading=!0,this.$store.dispatch("signIn",this.user).then(function(s){t.isLoading=!1,s.error?(t.$toast.open({duration:3e3,message:"Invalid email or password (or both)",position:"is-top",type:"is-danger"}),t.status=!1,setTimeout(function(){t.status=""},3e3)):(t.$toast.open({duration:3e3,message:"Logged in successfully",position:"is-top",type:"is-success"}),t.$router.push({name:"home"}))}).catch(function(t){}))}},validations:{user:{email:{required:m.required,email:m.email},password:{required:m.required,minLength:Object(m.minLength)(6)}}}},I={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"container section"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column"}),t._v(" "),e("div",{staticClass:"column is-full-tablet is-one-quarter-desktop"},[e("h1",{staticClass:"title is-3 has-text-centered"},[t._v("Sign in")]),t._v(" "),e("form",{on:{submit:function(s){s.preventDefault(),t.submit(s)}}},[e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Email")]),t._v(" "),e("div",{staticClass:"control has-icons-right"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.user.email,expression:"user.email",modifiers:{trim:!0}}],staticClass:"input",class:{"is-danger":t.$v.user.email.$error},attrs:{name:"email",type:"text",placeholder:"Your email"},domProps:{value:t.user.email},on:{blur:[function(s){t.$v.user.email.$touch()},function(s){t.$forceUpdate()}],input:[function(s){s.target.composing||t.$set(t.user,"email",s.target.value.trim())},function(s){t.$v.user.email.$reset()}]}})]),t._v(" "),t.$v.user.email.$error?e("p",{staticClass:"help is-danger"},[t.$v.user.email.required?t.$v.user.email.email?t._e():e("span",[t._v("Email is invalid")]):e("span",[t._v("Email is required")])]):t._e()]),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Password")]),t._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"input",class:{"is-danger":t.$v.user.password.$error},attrs:{name:"password",type:"password",placeholder:"•••• ••••••••"},domProps:{value:t.user.password},on:{blur:function(s){t.$v.user.password.$touch()},input:[function(s){s.target.composing||t.$set(t.user,"password",s.target.value)},function(s){t.$v.user.password.$reset()}]}})]),t._v(" "),t.$v.user.password.$error?e("p",{staticClass:"help is-danger"},[t.$v.user.password.required?t.$v.user.password.minLength?t._e():e("span",[t._v("Password must have at least "+t._s(t.$v.user.password.$params.minLength.min)+" characters")]):e("span",[t._v("Password is required")])]):t._e()]),t._v(" "),e("button",{staticClass:"button is-primary",class:{"is-loading":t.isLoading,"is-success":t.status,"is-danger":!1===t.status}},[t.isLoading||""!==t.status?t.status?e("span",[e("i",{staticClass:"fa fa-check"})]):!1===t.status?e("span",[e("i",{staticClass:"fa fa-close"})]):t._e():e("span",[t._v("Log in")])]),t._v(" "),e("router-link",{staticClass:"button is-primary is-outlined is-pulled-right",attrs:{to:{name:"sign_up"}}},[t._v("Sign up")])],1)]),t._v(" "),e("div",{staticClass:"column"})])])},staticRenderFns:[]},T=e("VU/8")(N,I,!1,function(t){e("0nuf")},"data-v-44e50641",null).exports,V=e("woOf"),M=e.n(V),j={props:["user_id"],data:function(){return{canEdit:!1,editMode:!1,isLoading:!1,status:"",skills:[],user_skills:[],filteredSkills:this.skills,updated_skills:[],recommend_skill:""}},computed:{current_user:function(){return this.$store.state.current_user},filteredDataObj:function(){var t=this;return this.skills.filter(function(s){return s.name.toString().toLowerCase().indexOf(t.recommend_skill.toLowerCase())>=0})}},created:function(){this.getUserSkills()},watch:{$route:function(t,s){this.getUserSkills()}},methods:{toggleEdit:function(){this.editMode=!this.editMode,this.updated_skills=M()([],this.user_skills)},add:function(){this.updated_skills=this.updated_skills.filter(function(t,s,e){return s===e.findIndex(function(s){return s.name===t.name})})},getFilteredSkills:function(t){this.filteredSkills=this.skills.filter(function(s){return s.name.toString().toLowerCase().indexOf(t.toLowerCase())>=0}),this.filteredSkills.length||(this.filteredSkills=[{name:t}])},getUserSkills:function(){var t=this;this.$store.dispatch("getSkills").then(function(s){t.skills=s}),this.$route.params.id?(this.canEdit=this.$route.params.id==this.current_user.id,this.$store.dispatch("getUserSkills",{id:this.$route.params.id}).then(function(s){t.user_skills=s.sort(function(t,s){return t.name.toLowerCase()<s.name.toLowerCase()&&t.endorsements.length>=s.endorsements.length?-1:1})})):(this.canEdit=!0,this.$store.dispatch("getCurrentUserSkills").then(function(s){t.user_skills=s.sort(function(t,s){return t.name.toLowerCase()<s.name.toLowerCase()&&t.endorsements.length>=s.endorsements.length?-1:1})}))},recommend:function(){var t=this;this.$store.dispatch("recommend",{user_id:this.$route.params.id,recommend:this.recommend_skill}).then(function(s){s.error?t.$toast.open({duration:3e3,message:"Something went terribly wrong",position:"is-top",type:"is-danger"}):(t.$toast.open({duration:3e3,message:"Skill recommended successfully",position:"is-top",type:"is-success"}),t.getUserSkills(),t.recommend_skill="")}).catch(function(t){})},endorse:function(t){var s=this;this.canEdit||this.$store.dispatch("endorse",{user_id:this.$route.params.id,skill_id:t.id}).then(function(t){t.error?s.$toast.open({duration:3e3,message:"Something went terribly wrong",position:"is-top",type:"is-danger"}):(s.$toast.open({duration:3e3,message:"User skill endorsed successfully",position:"is-top",type:"is-success"}),s.getUserSkills())}).catch(function(t){})},update:function(){var t=this;this.isLoading=!0,this.$store.dispatch("updateSkills",{skills:this.updated_skills}).then(function(s){t.isLoading=!1,s.error?(t.$toast.open({duration:3e3,message:"Something went terribly wrong",position:"is-top",type:"is-danger"}),t.status=!1,setTimeout(function(){t.status=""},3e3)):(t.$toast.open({duration:3e3,message:"Skills updated successfully",position:"is-top",type:"is-success"}),t.status=!0,t.status="",t.toggleEdit(),t.getUserSkills())}).catch(function(t){})}}},D={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("p",{staticClass:"title is-3"},[t._v("\n    What I'm good at\n    "),t.canEdit?e("span",[t.editMode?e("span",{staticClass:"is-pulled-right"},[e("a",{staticClass:"button",on:{click:t.toggleEdit}},[e("span",[t._v("Cancel")])]),t._v(" "),e("a",{staticClass:"button is-primary is-outlined has-margin-top-30",class:{"is-loading":t.isLoading,"is-success":t.status,"is-danger":!1===t.status},on:{click:t.update}},[t.isLoading||""!==t.status?t.status?e("span",[e("i",{staticClass:"fa fa-check"})]):!1===t.status?e("span",[e("i",{staticClass:"fa fa-close"})]):t._e():e("span",[t._v("Update")])])]):e("span",[e("a",{staticClass:"button is-pulled-right",on:{click:t.toggleEdit}},[e("span",[t._v("Edit")])])])]):e("span",[e("b-dropdown",{staticClass:"is-pulled-right",attrs:{position:"is-bottom-left"}},[e("a",{staticClass:"button is-primary is-outlined",attrs:{slot:"trigger"},slot:"trigger"},[e("span",[t._v("Recommend skill")])]),t._v(" "),e("b-dropdown-item",{attrs:{custom:"",paddingless:""}},[e("form",{on:{submit:function(s){s.preventDefault(),t.recommend(s)}}},[e("div",{staticClass:"modal-card",staticStyle:{width:"300px",overflow:"visible"}},[e("section",{staticClass:"modal-card-body",staticStyle:{overflow:"visible"}},[e("b-field",[e("b-autocomplete",{attrs:{data:t.filteredDataObj,field:"name",placeholder:"Add a skill"},model:{value:t.recommend_skill,callback:function(s){t.recommend_skill=s},expression:"recommend_skill"}})],1),t._v(" "),e("button",{staticClass:"button is-primary",class:{"is-loading":t.isLoading,"is-success":t.status,"is-danger":!1===t.status}},[t.isLoading||""!==t.status?t.status?e("span",[e("i",{staticClass:"fa fa-check"})]):!1===t.status?e("span",[e("i",{staticClass:"fa fa-close"})]):t._e():e("span",[t._v("Recommend")])])],1)])])])],1)],1)]),t._v(" "),e("div",{staticClass:"content"},[t.editMode?e("div",[e("b-field",[e("b-taginput",{attrs:{data:t.filteredSkills,icon:"plus",field:"name",placeholder:"Add a skill",autocomplete:""},on:{add:t.add,typing:t.getFilteredSkills},model:{value:t.updated_skills,callback:function(s){t.updated_skills=s},expression:"updated_skills"}})],1)],1):e("div",t._l(t.user_skills,function(s){return e("div",{key:s.id,staticClass:"field"},[e("b-tag",{class:{"can-endorse":!t.canEdit},attrs:{rounded:"","keep-first":!0,size:"skill is-medium"},nativeOn:{click:function(e){t.endorse(s)}}},[e("span",[t._v(t._s(s.endorsements.length))])]),t._v(" "+t._s(s.name)+"\n        "),t._l(s.endorsements,function(t){return e("div",{key:t.id,staticClass:"endorsment is-pulled-right"},[e("router-link",{attrs:{to:{name:"user",params:{id:t.endorser_id}}}},[e("img",{staticClass:"image is-32x32",attrs:{src:t.endorser.avatar}})])],1)})],2)}))])])},staticRenderFns:[]},W=e("VU/8")(j,D,!1,function(t){e("kjV0")},"data-v-63383d6c",null).exports,Y={components:{Skills:W},data:function(){return{isLoading:!1,status:""}},computed:{profile_link:function(){var t=document.createElement("a");return t.href=this.$router.resolve({name:"user",params:{id:this.user.id}}).href,t.protocol+"//"+t.host+t.pathname},user:function(){return this.$store.state.current_user}}},z={render:function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"section"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column"}),this._v(" "),s("div",{staticClass:"column is-full-mobile is-four-fifths-tablet"},[s("div",{staticClass:"tile is-ancestor"},[s("div",{staticClass:"tile is-vertical is-8"},[s("div",{staticClass:"tile"},[s("div",{staticClass:"tile is-parent"},[s("article",{staticClass:"media"},[s("figure",{staticClass:"media-left is-hidden-touch"},[s("img",{attrs:{src:this.user.avatar}})]),this._v(" "),s("div",{staticClass:"media-content has-text-centered-touch"},[s("figure",{staticClass:"image is-centered block is-128x128 is-hidden-desktop"},[s("img",{attrs:{src:this.user.avatar}})]),this._v(" "),s("div",{staticClass:"content"},[s("strong",{staticClass:"title is-4"},[this._v(this._s(this.user.name))]),this._v(" "),s("br"),this._v(" "),s("small",{staticClass:"subtitle is-5"},[this._v(this._s(this.user.email))]),this._v(" "),s("br"),this._v(" "),s("p",[s("span",{staticClass:"subtitle is-6"},[s("i",{staticClass:"fa fa-briefcase"}),this._v(" "+this._s(this.user.occupation)+" |\n                        "),s("i",{staticClass:"fa fa-map-marker"}),this._v(" "+this._s(this.user.location)+"\n                      ")])]),this._v("\n                    "+this._s(this.user.bio)+"\n                  ")])])])])])]),this._v(" "),s("div",{staticClass:"tile is-parent"},[s("article",{staticClass:"tile is-child notification is-light"},[s("div",{staticClass:"content"},[s("p",{staticClass:"title is-6"},[this._v("Your profile link\n                "),s("router-link",{attrs:{to:{name:"user",params:{id:this.user.id}}}},[s("i",{staticClass:"fa fa-external-link"})])],1),this._v(" "),s("div",{staticClass:"content"},[this._v("\n                "+this._s(this.profile_link)+"\n              ")])])])])]),this._v(" "),s("div",{staticClass:"tile is-ancestor"},[s("div",{staticClass:"tile"},[s("div",{staticClass:"tile is-parent"},[s("article",{staticClass:"tile is-child notification is-white"},[s("skills",{attrs:{user_id:this.user.id}})],1)])])])]),this._v(" "),s("div",{staticClass:"column"})])])},staticRenderFns:[]},H=e("VU/8")(Y,z,!1,function(t){e("pTRA")},"data-v-20162806",null).exports,K={components:{Skills:W},data:function(){return{isLoading:!1,status:"",user:{skills:[]}}},created:function(){this.getUser()},watch:{$route:function(t,s){this.getUser()}},methods:{getUser:function(){var t=this;this.$store.dispatch("getUser",{id:this.$route.params.id}).then(function(s){t.user=s})}}},G={render:function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"section"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column"}),this._v(" "),s("div",{staticClass:"column is-full-mobile is-four-fifths-tablet"},[s("div",{staticClass:"tile is-ancestor"},[s("div",{staticClass:"tile is-vertical is-8"},[s("div",{staticClass:"tile"},[s("div",{staticClass:"tile is-parent"},[s("article",{staticClass:"media"},[s("figure",{staticClass:"media-left is-hidden-touch"},[s("img",{attrs:{src:this.user.avatar}})]),this._v(" "),s("div",{staticClass:"media-content has-text-centered-touch"},[s("figure",{staticClass:"image is-centered block is-128x128 is-hidden-desktop"},[s("img",{attrs:{src:this.user.avatar}})]),this._v(" "),s("div",{staticClass:"content"},[s("strong",{staticClass:"title is-4"},[this._v(this._s(this.user.name))]),this._v(" "),s("br"),this._v(" "),s("small",{staticClass:"subtitle is-5"},[this._v(this._s(this.user.email))]),this._v(" "),s("br"),this._v(" "),s("p",[s("span",{staticClass:"subtitle is-6"},[s("i",{staticClass:"fa fa-briefcase"}),this._v(" "+this._s(this.user.occupation)+" |\n                        "),s("i",{staticClass:"fa fa-map-marker"}),this._v(" "+this._s(this.user.location)+"\n                      ")])]),this._v("\n                    "+this._s(this.user.bio)+"\n                  ")])])])])])])]),this._v(" "),s("div",{staticClass:"tile is-ancestor"},[s("div",{staticClass:"tile"},[s("div",{staticClass:"tile is-parent"},[s("article",{staticClass:"tile is-child notification is-white"},[s("skills")],1)])])])]),this._v(" "),s("div",{staticClass:"column"})])])},staticRenderFns:[]},J=e("VU/8")(K,G,!1,function(t){e("SgVj")},"data-v-179cad90",null).exports;i.a.use(k.a);var B=new k.a({mode:"history",linkActiveClass:"active",routes:[{path:"/",name:"home",component:U,meta:{auth:!1}},{path:"/search",name:"search",component:q,meta:{auth:!1}},{path:"/user/sign_in",name:"sign_in",component:T,meta:{auth:!1}},{path:"/user/sign_up",name:"sign_up",component:R,meta:{auth:!1}},{path:"/user/profile",name:"profile",component:H,meta:{auth:!0}},{path:"/users/:id",name:"user",component:J,meta:{auth:!1}}]});B.beforeEach(function(t,s,e){var i=t.matched.some(function(t){return t.meta.auth}),a=!!x.state.token;i&&!a?e("/user/sign_in"):!i&&a&&("sign_in"==t.name||"sign_up"==t.name)?e("/"):e()});var Q=B;i.a.use(o.a,n.a),i.a.use(u.a,{defaultIconPack:"fa"}),i.a.use(d.a),i.a.config.productionTip=!0,new i.a({el:"#app",router:Q,store:x,template:"<App/>",components:{App:C}})},SgVj:function(t,s){},e38h:function(t,s){},kjV0:function(t,s){},pTRA:function(t,s){},rFD9:function(t,s){},tUk2:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.0a9fd9b646ba91c3dfb6.js.map