(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{1415:function(module,exports,__webpack_require__){var content=__webpack_require__(1473);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__(59).default)("61099605",content,!0,{sourceMap:!1})},1472:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(1415)},1473:function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__(58)((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,".form-iframe[data-v-ed8b2f6a]{width:100%;height:1200px;border:none}",""]),___CSS_LOADER_EXPORT___.locals={},module.exports=___CSS_LOADER_EXPORT___},1720:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"FeedbackPage",(function(){return FeedbackPage}));var defineProperty=__webpack_require__(8),VLink=__webpack_require__(65),FeedbackPage={name:"feedback-page",components:{VLink:VLink.default},data:function data(){return{activeTab:0,tabs:["improve","report"],forms:{report:"".concat("https://docs.google.com/forms/d/e/1FAIpQLSenCn-3HoZlCz4vlL2621wjezfu1sPZDaWGe_FtQ1R5-5qR4Q/viewform","?embedded=true"),improve:"".concat("https://docs.google.com/forms/d/e/1FAIpQLSfGC7JWbNjGs-_pUNe3B2nzBW-YrIrmRd92t-7u0y7s8jMjzQ/viewform","?embedded=true")}}},head:function head(){return{title:"".concat(this.$t("feedback.title")," | Openverse")}},methods:{tabClass:function tabClass(tabIdx,_tabClass){var _ref;return _ref={},Object(defineProperty.a)(_ref,_tabClass,!0),Object(defineProperty.a)(_ref,"is-active",tabIdx===this.activeTab),_ref},setActiveTab:function setActiveTab(tabIdx){this.activeTab=tabIdx}}},pages_feedbackvue_type_script_lang_js_=FeedbackPage,componentNormalizer=(__webpack_require__(1472),__webpack_require__(7)),component=Object(componentNormalizer.a)(pages_feedbackvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"section",attrs:{dir:"ltr"}},[_c("div",{staticClass:"container"},[_c("div",{staticClass:"pb-6"},[_c("h1",{staticClass:"text-5xl mb-10",attrs:{id:"feedback"}},[_vm._v("\n        "+_vm._s(_vm.$t("feedback.title"))+"\n      ")]),_vm._v(" "),_c("i18n",{staticClass:"mb-6",attrs:{path:"feedback.intro",tag:"p"},scopedSlots:_vm._u([{key:"openverse",fn:function(){return[_vm._v("Openverse")]},proxy:!0},{key:"slack",fn:function(){return[_c("VLink",{attrs:{href:"https://wordpress.slack.com/messages/openverse/"}},[_vm._v("#openverse")])]},proxy:!0},{key:"making-wordpress",fn:function(){return[_c("VLink",{attrs:{href:"https://make.wordpress.org/chat/"}},[_vm._v("Making WordPress")])]},proxy:!0}])}),_vm._v(" "),_c("section",{staticClass:"tabs mt-6"},[_c("div",{attrs:{role:"tablist","aria-label":_vm.$t("feedback.title")}},_vm._l(_vm.tabs,(function(name,index){return _c("button",{key:index,class:_vm.tabClass(index,"tab"),attrs:{id:name,role:"tab","aria-selected":_vm.activeTab===index,"aria-controls":"tab-"+name},on:{click:function($event){return $event.preventDefault(),_vm.setActiveTab(index)},keyup:function($event){return!$event.type.indexOf("key")&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")?null:($event.preventDefault(),_vm.setActiveTab(index))}}},[_vm._v("\n            "+_vm._s(_vm.$t("feedback."+name))+"\n          ")])})),0),_vm._v(" "),_vm._l(_vm.tabs,(function(name,index){return _c("div",{key:index,class:_vm.tabClass(index,"tabs-panel"),attrs:{id:"tab-"+name,"aria-labelledby":name,role:"tabpanel",tabindex:"0"}},[_c("iframe",{staticClass:"form-iframe",attrs:{"aria-label":_vm.$t("feedback.aria."+name),src:_vm.forms[name],title:name+" form"}},[_vm._v("\n            "+_vm._s(_vm.$t("feedback.loading"))+"\n          ")])])}))],2)],1)])])}),[],!1,null,"ed8b2f6a",null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VLink:__webpack_require__(65).default}),__vuedocgen_export_0.__docgenInfo={displayName:"feedback-page",exportName:"default",description:"",tags:{}}}}]);