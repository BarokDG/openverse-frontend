(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1339:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(57),__webpack_require__(5);var utils_console=__webpack_require__(67),SketchFabViewervue_type_script_lang_js_={props:{uid:{type:String,required:!0}},data:function data(){var _this=this;return{client:null,clientConfig:{success:function success(api){api.addEventListener("viewerready",(function(){_this.loading=!1,Object(utils_console.a)("LOADED!")}))},error:function error(){Object(utils_console.a)("Viewer error")}},loading:!0}},mounted:function mounted(){var _this2=this;this.initSketchfab().then(this.initViewer).catch((function(error){console.error(error),_this2.$emit("failure")}))},methods:{initSketchfab:function initSketchfab(){var _this3=this;return function loadScript(){var url=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return new Promise((function(resolve,reject){"undefined"==typeof document&&reject();var el=document.createElement("script");el.src=url,el.defer=!0,el.addEventListener("load",resolve),el.addEventListener("error",reject),document.head.appendChild(el)}))}("https://static.sketchfab.com/api/sketchfab-viewer-1.10.1.js").then((function(){_this3.client=new window.Sketchfab(_this3.$refs.sketchfabIframe)}))},initViewer:function initViewer(){this.client&&this.client.init(this.uid,this.clientConfig)}}},components_SketchFabViewervue_type_script_lang_js_=SketchFabViewervue_type_script_lang_js_,componentNormalizer=(__webpack_require__(1408),__webpack_require__(7));const __vuedocgen_export_0=Object(componentNormalizer.a)(components_SketchFabViewervue_type_script_lang_js_,(function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("div",{staticClass:"sketchfab-viewer image is-16by9"},[_c("iframe",{ref:"sketchfabIframe",staticClass:"has-ratio",attrs:{id:"sketchfab-iframe",src:"",sandbox:"allow-scripts allow-same-origin allow-popups allow-forms",title:"Sketchfab iframe",allow:"autoplay; fullscreen; vr",autoplay:!0}})])}),[],!1,null,"5e38cdfa",null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"SketchFabViewer",description:"",tags:{},props:[{name:"uid",type:{name:"string"},required:!0}],events:[{name:"failure"}]}},1391:function(module,exports,__webpack_require__){var content=__webpack_require__(1409);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__(59).default)("02b4c4a8",content,!0,{sourceMap:!1})},1408:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(1391)},1409:function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__(58)((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,".image[data-v-5e38cdfa]{display:block}.is-16by9[data-v-5e38cdfa]{padding-top:56.25%;max-width:1000px}.has-ratio[data-v-5e38cdfa]{position:absolute;left:0;top:0;right:0;bottom:0;height:100%;width:100%}",""]),___CSS_LOADER_EXPORT___.locals={},module.exports=___CSS_LOADER_EXPORT___}}]);