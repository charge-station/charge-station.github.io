webpackJsonp([1],{"/KV2":function(t,a){},"8sJK":function(t,a){},"Lq+P":function(t,a){},NHnr:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=n("7+uW"),e=n("kxiW"),s=n.n(e),o={name:"navbar",data:function(){return{isLogin:!1,currentUser:!1}},created:function(){s.a.auth().currentUser&&(this.isLogin=!0,this.currentUser=s.a.auth().currentUser.email)},methods:{logout:function(){var t=this;console.log("logout"),s.a.auth().signOut().then(function(){t.$router.go({path:t.$router.path})})}}},r={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"wrap-nav"},[n("div",{staticClass:"container"},[n("b-navbar",{attrs:{shadow:"{true}"}},[n("template",{slot:"brand"},[n("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[n("img",{attrs:{src:"https://vinfast.vn/sites/default/files/favicon.png",alt:"Vinfast"}})])],1),t._v(" "),n("template",{slot:"start"},[n("b-navbar-item",{attrs:{href:"#",tag:"router-link",to:{path:"/"}}},[t._v("Trang chủ")]),t._v(" "),n("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/new"}}},[t._v("Thêm trạm mới")])],1),t._v(" "),n("template",{slot:"end"},[n("b-navbar-item",{attrs:{tag:"div"}},[n("div",{staticClass:"buttons"},[t.isLogin?t._e():n("router-link",{staticClass:"button is-primary",attrs:{to:"/register"}},[n("strong",[t._v("Đăng kí")])]),t._v(" "),t.isLogin?t._e():n("router-link",{staticClass:"button is-light btn-login",attrs:{to:"/login"}},[n("strong",[t._v("Đăng nhập")])]),t._v(" "),t.isLogin?n("a",{staticClass:"button is-primary",on:{click:t.logout}},[t._v("Đăng xuất")]):t._e()],1)])],1)],2)],1)])},staticRenderFns:[]};var l={name:"App",components:{Navbar:n("VU/8")(o,r,!1,function(t){n("nYSo")},"data-v-574307dc",null).exports}},d={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("Navbar"),this._v(" "),a("router-view")],1)},staticRenderFns:[]};var c=n("VU/8")(l,d,!1,function(t){n("a9I6")},null,null).exports,u=n("/ocq"),_=(n("881v"),s.a.initializeApp({apiKey:"AIzaSyD_PUf1Cvfnm9qjEHIx2qjzfpW8cD1wG_4",authDomain:"charging-station-69913.firebaseapp.com",databaseURL:"https://charging-station-69913.firebaseio.com",projectId:"charging-station-69913",storageBucket:"charging-station-69913.appspot.com",messagingSenderId:"28088311617",appId:"1:28088311617:web:97fdd2127864b9c01e8bc0"}).firestore()),h={name:"dashboard",data:function(){return{stations:[]}},created:function(){var t=this;console.log("create xcxc"),_.collection("stations").orderBy("station_addr").get().then(function(a){a.forEach(function(a){var n={id:a.id,station_id:a.data().station_id,station_name:a.data().station_name,station_addr:a.data().station_addr,station_phone:a.data().station_phone,station_geo:a.data().station_geo};t.stations.push(n)})})}},p={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"wrapper",attrs:{id:"dashboard"}},[n("div",{staticClass:"container"},[n("h3",{staticClass:"title is-3"},[t._v("Dashboard")]),t._v(" "),n("div",{staticClass:"table__wrapper"},[n("table",{staticClass:"table is-fullwidth"},[t._m(0),t._v(" "),n("tbody",t._l(t.stations,function(a){return n("tr",{key:a.id},[n("td",[t._v(t._s(a.station_id))]),t._v(" "),n("td",[t._v(t._s(a.station_name))]),t._v(" "),n("td",[t._v(t._s(a.station_addr))]),t._v(" "),n("td",[t._v(t._s(a.station_phone))]),t._v(" "),n("td",[t._v(t._s(a.station_geo))]),t._v(" "),n("td",[n("router-link",{attrs:{to:{name:"view-station",params:{station_id:a.station_id}}}},[n("b-button",{attrs:{type:"is-info","icon-right":"view"}},[t._v("Xem chi tiết")])],1)],1)])}),0)])])])])},staticRenderFns:[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("thead",[n("tr",[n("th",[t._v("ID")]),t._v(" "),n("th",[t._v("Tên")]),t._v(" "),n("th",[t._v("Địa chỉ")]),t._v(" "),n("th",[t._v("Phone")]),t._v(" "),n("th",[t._v("Tọa độ")]),t._v(" "),n("th")])])}]},v=n("VU/8")(h,p,!1,null,null,null).exports,m={name:"new-station",data:function(){return{station_id:null,station_name:null,station_geo:null,station_addr:null,station_phone:null}},computed:{isDisabled:function(){return!(this.station_id&&this.station_name&&this.station_geo&&this.station_addr&&this.station_phone)}},methods:{saveStation:function(){var t=this;console.log("new ssss"),_.collection("stations").add({station_id:this.station_id,station_name:this.station_name,station_geo:this.station_geo,station_addr:this.station_addr,station_phone:this.station_phone}).then(function(a){t.$router.push("/")}).catch(function(t){console.log(t)})}}},f={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"wrapper",attrs:{id:"new-station"}},[n("div",{staticClass:"container"},[n("h3",{staticClass:"title is-3"},[t._v("Tạo trạm mới")]),t._v(" "),n("section",[n("b-field",{attrs:{label:"Mã trạm"}},[n("b-input",{attrs:{required:""},model:{value:t.station_id,callback:function(a){t.station_id=a},expression:"station_id"}})],1),t._v(" "),n("b-field",{attrs:{label:"Tên trạm"}},[n("b-input",{attrs:{required:""},model:{value:t.station_name,callback:function(a){t.station_name=a},expression:"station_name"}})],1),t._v(" "),n("b-field",{attrs:{label:"Tọa độ trạm"}},[n("b-input",{attrs:{required:""},model:{value:t.station_geo,callback:function(a){t.station_geo=a},expression:"station_geo"}})],1),t._v(" "),n("b-field",{attrs:{label:"Địa chỉ trạm"}},[n("b-input",{attrs:{required:""},model:{value:t.station_addr,callback:function(a){t.station_addr=a},expression:"station_addr"}})],1),t._v(" "),n("b-field",{attrs:{label:"Số điện thoại của trạm"}},[n("b-input",{attrs:{required:""},model:{value:t.station_phone,callback:function(a){t.station_phone=a},expression:"station_phone"}})],1),t._v(" "),n("b-field",[n("b-button",{attrs:{type:"is-primary",disabled:t.isDisabled},on:{click:t.saveStation}},[t._v("Thêm mới")]),t._v(" "),n("router-link",{staticClass:"back-btn2",attrs:{to:"/"}},[n("b-button",{attrs:{type:"is-dark"}},[t._v("Quay lại")])],1)],1)],1)])])},staticRenderFns:[]},b=n("VU/8")(m,f,!1,null,null,null).exports,g={name:"view-station",data:function(){return{station_id:null,station_name:null,station_geo:null,station_addr:null,station_phone:null}},beforeRouteEnter:function(t,a,n){_.collection("stations").where("station_id","==",t.params.station_id).get().then(function(t){t.forEach(function(t){n(function(a){a.station_id=t.data().station_id,a.station_name=t.data().station_name,a.station_geo=t.data().station_geo,a.station_addr=t.data().station_addr,a.station_phone=t.data().station_phone})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;console.log("fetchData "),console.log(this.$route),_.collection("stations").where("station_id","==",this.$route.params.station_id).get().then(function(a){console.log("queerr2 "),console.log(a),a.forEach(function(a){t.station_id=a.data().station_id,t.station_name=a.data().station_name,t.station_geo=a.data().station_geo,t.station_addr=a.data().station_addr,t.station_phone=a.data().station_phone})})},deleteStation:function(){var t=this;this.$buefy.dialog.confirm({message:"Bạn chắc chắn xóa chứ?",onConfirm:function(){_.collection("stations").where("station_id","==",t.$route.params.station_id).get().then(function(a){a.forEach(function(a){a.ref.delete(),t.$router.push("/")})}),t.$buefy.toast.open("Đã xóa")}})}}},w={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"wrapper",attrs:{id:"view-station"}},[n("div",{staticClass:"container"},[n("h3",{staticClass:"title is-3"},[t._v("Chi tiết trạm")]),t._v(" "),n("div",[t._v("\n      Tên trạm :\n      "),n("b",[t._v(t._s(t.station_name))])]),t._v(" "),n("div",[t._v("\n      Mã trạm :\n      "),n("b",[t._v(t._s(t.station_id))])]),t._v(" "),n("div",[t._v("\n      Địa chỉ :\n      "),n("b",[t._v(t._s(t.station_addr))])]),t._v(" "),n("div",[t._v("\n      Tọa độ :\n      "),n("b",[t._v(t._s(t.station_geo))])]),t._v(" "),n("div",[t._v("\n      Số điện thoại liên lạc :\n      "),n("b",[t._v(t._s(t.station_phone))])]),t._v(" "),n("div",{staticClass:"buttons view-btns"},[n("router-link",{staticClass:"back-btn",attrs:{to:"/"}},[n("b-button",{attrs:{type:"is-dark"}},[t._v("Quay lại")])],1),t._v(" "),n("router-link",{staticClass:"back-btn",attrs:{to:{name:"edit-station",params:{station_id:t.station_id}}}},[n("b-button",{attrs:{type:"is-link"}},[t._v("Sửa")])],1),t._v(" "),n("b-button",{attrs:{type:"is-danger"},on:{click:t.deleteStation}},[t._v("Xóa")])],1)])])},staticRenderFns:[]},k=n("VU/8")(g,w,!1,null,null,null).exports,C={name:"edit-station",data:function(){return{station_id:null,station_name:null,station_geo:null,station_addr:null,station_phone:null}},beforeRouteEnter:function(t,a,n){_.collection("stations").where("station_id","==",t.params.station_id).get().then(function(t){t.forEach(function(t){n(function(a){a.station_id=t.data().station_id,a.station_name=t.data().station_name,a.station_geo=t.data().station_geo,a.station_addr=t.data().station_addr,a.station_phone=t.data().station_phone})})})},watch:{$route:"fetchData"},computed:{isDisabled:function(){return!(this.station_id&&this.station_name&&this.station_geo&&this.station_addr&&this.station_phone)}},methods:{fetchData:function(){var t=this;console.log("fetchData "),console.log(this.$route),_.collection("stations").where("station_id","==",this.$route.params.station_id).get().then(function(a){console.log("queerr2 "),console.log(a),a.forEach(function(a){t.station_id=a.data().station_id,t.station_name=a.data().station_name,t.station_geo=a.data().station_geo,t.station_addr=a.data().station_addr,t.station_phone=a.data().station_phone})})},updateStation:function(){var t=this;_.collection("stations").where("station_id","==",this.$route.params.station_id).get().then(function(a){console.log("queerr2 "),console.log(a),a.forEach(function(a){a.ref.update({station_id:t.station_id,station_name:t.station_name,station_geo:t.station_geo,station_addr:t.station_addr,station_phone:t.station_phone}).then(function(){t.$buefy.dialog.alert("Cập nhật thành công"),t.$router.push({name:"view-station",params:{station_id:t.station_id}})})})})}}},y={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"wrapper",attrs:{id:"edit-station"}},[n("div",{staticClass:"container"},[n("h3",{staticClass:"title is-3"},[t._v("Sửa trạm")]),t._v(" "),n("section",[n("b-field",{attrs:{label:"Mã trạm"}},[n("b-input",{attrs:{required:"",disabled:""},model:{value:t.station_id,callback:function(a){t.station_id=a},expression:"station_id"}})],1),t._v(" "),n("b-field",{attrs:{label:"Tên trạm"}},[n("b-input",{attrs:{required:""},model:{value:t.station_name,callback:function(a){t.station_name=a},expression:"station_name"}})],1),t._v(" "),n("b-field",{attrs:{label:"Tọa độ trạm"}},[n("b-input",{attrs:{required:""},model:{value:t.station_geo,callback:function(a){t.station_geo=a},expression:"station_geo"}})],1),t._v(" "),n("b-field",{attrs:{label:"Địa chỉ trạm"}},[n("b-input",{attrs:{required:""},model:{value:t.station_addr,callback:function(a){t.station_addr=a},expression:"station_addr"}})],1),t._v(" "),n("b-field",{attrs:{label:"Số điện thoại của trạm"}},[n("b-input",{attrs:{required:""},model:{value:t.station_phone,callback:function(a){t.station_phone=a},expression:"station_phone"}})],1),t._v(" "),n("b-field",[n("b-button",{attrs:{type:"is-primary",disabled:t.isDisabled},on:{click:t.updateStation}},[t._v("Cập nhật")]),t._v(" "),n("router-link",{staticClass:"back-btn2",attrs:{to:"/"}},[n("b-button",{attrs:{type:"is-dark"}},[t._v("Quay lại")])],1)],1)],1)])])},staticRenderFns:[]},$=n("VU/8")(C,y,!1,null,null,null).exports,x={name:"login",data:function(){return{email:null,password:null}},computed:{isDisabled:function(){return!this.email||!this.password}},methods:{login:function(t){var a=this;console.log("Login"),s.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(t){a.$buefy.dialog.alert("Bạn đăng nhập với email: "+a.email),a.$router.push("/"),a.$router.go({path:a.$router.path})},function(t){console.log(t),"auth/user-not-found"==t.code?a.$buefy.dialog.alert("Tài khoản không tồn tại trong hệ thống"):"auth/wrong-password"==t.code?a.$buefy.dialog.alert("Email hoặc mật khẩu của bạn không đúng"):a.$buefy.dialog.alert("Có lỗi xảy ra")}),t.preventDefault()}}},q={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"wrapper",attrs:{id:"login"}},[n("div",{staticClass:"container"},[n("h3",{staticClass:"title is-3 has-text-centered"},[t._v("Đăng nhập")]),t._v(" "),n("form",{on:{submit:function(a){return a.preventDefault(),t.login(a)}}},[n("section",[n("div",{staticClass:"columns"},[n("div",{staticClass:"column"}),t._v(" "),n("div",{staticClass:"column"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-content"},[n("b-field",{attrs:{label:"Email"}},[n("b-input",{attrs:{type:"email",placeholder:"Nhập email của bạn"},model:{value:t.email,callback:function(a){t.email=a},expression:"email"}})],1),t._v(" "),n("b-field",{attrs:{label:"Mật khẩu"}},[n("b-input",{attrs:{type:"password",placeholder:"Nhập mật khẩu của bạn"},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}})],1),t._v(" "),n("b-field",[n("button",{staticClass:"button is-primary",attrs:{type:"submit",disabled:t.isDisabled}},[t._v("Đăng nhập")])])],1)])]),t._v(" "),n("div",{staticClass:"column"})])])])])])},staticRenderFns:[]},E=n("VU/8")(x,q,!1,null,null,null).exports,D={name:"register",data:function(){return{email:null,password:null}},computed:{isDisabled:function(){return!this.email||!this.password}},methods:{registerUser:function(t){var a=this;console.log("regisster"),s.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(t){a.$buefy.dialog.alert("Tạo tk thành công với email "+a.email),a.$router.go({path:a.$router.path})},function(t){console.log(t),(t.code="auth/email-already-in-use")&&a.$buefy.dialog.alert("Email đã có người sử dụng. Bạn có thể đăng nhập hoặc dùng email khác")}),t.preventDefault()}}},U={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"wrapper",attrs:{id:"register"}},[n("div",{staticClass:"container"},[n("h3",{staticClass:"title is-3 has-text-centered"},[t._v("Đăng kí")]),t._v(" "),n("form",{on:{submit:function(a){return a.preventDefault(),t.registerUser(a)}}},[n("section",[n("div",{staticClass:"columns"},[n("div",{staticClass:"column"}),t._v(" "),n("div",{staticClass:"column"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-content"},[n("b-field",{attrs:{label:"Email"}},[n("b-input",{attrs:{type:"email",placeholder:"Nhập email của bạn"},model:{value:t.email,callback:function(a){t.email=a},expression:"email"}})],1),t._v(" "),n("b-field",{attrs:{label:"Mật khẩu"}},[n("b-input",{attrs:{type:"password",placeholder:"Nhập mật khẩu của bạn"},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}})],1),t._v(" "),n("b-field",[n("button",{staticClass:"button is-primary",attrs:{type:"submit",disabled:t.isDisabled}},[t._v("Đăng ký")])])],1)])]),t._v(" "),n("div",{staticClass:"column"})])])])])])},staticRenderFns:[]},S=n("VU/8")(D,U,!1,null,null,null).exports;i.a.use(u.a);var T=new u.a({routes:[{path:"/",name:"Dashboard",component:v,meta:{requiresAuth:!0}},{path:"/new",name:"new-station",component:b,meta:{requiresAuth:!0}},{path:"/view/:station_id",name:"view-station",component:k,meta:{requiresAuth:!0}},{path:"/edit/:station_id",name:"edit-station",component:$,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:E,meta:{requiresGuest:!0}},{path:"/register",name:"register",component:S,meta:{requiresGuest:!0}}]});T.beforeEach(function(t,a,n){t.matched.some(function(t){return t.meta.requiresAuth})?s.a.auth().currentUser?n():n({path:"/login",query:{redirect:t.fullPath}}):t.matched.some(function(t){return t.meta.requiresGuest})&&s.a.auth().currentUser?n({path:"/",query:{redirect:t.fullPath}}):n()});var A=T,R=n("k5jX");n("/KV2"),n("Lq+P"),n("8sJK");i.a.use(R.a),i.a.config.productionTip=!1;var V=void 0;s.a.auth().onAuthStateChanged(function(t){V||(V=new i.a({el:"#app",router:A,components:{App:c},template:"<App/>"}))})},a9I6:function(t,a){},nYSo:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.e8b6cb5cf8903db96f18.js.map