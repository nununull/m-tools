(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10378c5c"],{"43c5":function(e,t,l){},"6c88":function(e,t,l){"use strict";l.r(t);var n=l("7a23"),c={class:"main"},o=Object(n["q"])("播放"),r={class:"player"};function u(e,t,l,u,a,i){var b=Object(n["R"])("el-page-header"),O=Object(n["R"])("el-input"),d=Object(n["R"])("el-form-item"),s=Object(n["R"])("el-button"),m=Object(n["R"])("el-form"),p=Object(n["R"])("ufun-plyr"),f=Object(n["R"])("el-card");return Object(n["I"])(),Object(n["n"])("div",c,[Object(n["r"])(b,{title:"返回",onBack:i.goBack},null,8,["onBack"]),Object(n["r"])(f,{class:"body"},{default:Object(n["gb"])((function(){return[Object(n["r"])(m,{model:a.movieVO,inline:""},{default:Object(n["gb"])((function(){return[Object(n["r"])(d,{label:"地址"},{default:Object(n["gb"])((function(){return[Object(n["r"])(O,{modelValue:a.movieVO.url,"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.movieVO.url=e}),clearable:""},null,8,["modelValue"])]})),_:1}),Object(n["r"])(d,null,{default:Object(n["gb"])((function(){return[Object(n["r"])(s,{type:"primary",onClick:i.goPlay},{default:Object(n["gb"])((function(){return[o]})),_:1},8,["onClick"])]})),_:1})]})),_:1},8,["model"]),Object(n["o"])("div",r,[Object(n["r"])(p,{"play-url":a.movieVO.playUrl},null,8,["play-url"])])]})),_:1})])}var a=l("8fd8"),i={name:"MoviePlay",components:{"ufun-plyr":a["a"]},data:function(){return{movieVO:{url:"",playUrl:"http://womlive.cloud.wo.cn/tvlive/100002/otpzod_otpzod,100002_hls_pull_2000K_live.m3u8"}}},methods:{goBack:function(){this.$router.back()},goPlay:function(){var e=/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/;this.movieVO.url&&e.test(this.movieVO.url)?this.movieVO.playUrl=this.movieVO.url:this.$message.warning("链接地址有误！")}}},b=(l("773d"),l("6b0d")),O=l.n(b);const d=O()(i,[["render",u],["__scopeId","data-v-4d8a606e"]]);t["default"]=d},"773d":function(e,t,l){"use strict";l("43c5")}}]);