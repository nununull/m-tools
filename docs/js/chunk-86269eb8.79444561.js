(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-86269eb8"],{"4d43":function(e,t,n){"use strict";n("e231")},e231:function(e,t,n){},e41c:function(e,t,n){"use strict";n.r(t);var a=n("7a23"),o=Object(a["fb"])("data-v-47b18df9");Object(a["H"])("data-v-47b18df9");var r={class:"main"},i=Object(a["m"])("查询"),c=Object(a["m"])("查看 "),l=Object(a["m"])("播放 "),u={style:{"margin-top":"30px"}},d={key:0},s=Object(a["m"])("复制下载地址"),v={key:1,style:{"margin-top":"10px"}},b=Object(a["m"])("复制m3u8地址"),O=Object(a["m"])("导出为PotPlayer格式");Object(a["F"])();var p=o((function(e,t,n,p,m,f){var h=Object(a["N"])("el-input"),j=Object(a["N"])("el-form-item"),y=Object(a["N"])("el-button"),g=Object(a["N"])("el-form"),_=Object(a["N"])("el-row"),w=Object(a["N"])("el-table-column"),k=Object(a["N"])("el-table"),V=Object(a["N"])("el-pagination"),C=Object(a["N"])("el-image"),P=Object(a["N"])("el-col"),R=Object(a["N"])("el-card"),x=Object(a["N"])("el-dialog");return Object(a["E"])(),Object(a["j"])("div",r,[Object(a["n"])(_,null,{default:o((function(){return[Object(a["n"])(g,{inline:"",onSubmit:t[4]||(t[4]=Object(a["eb"])((function(){}),["prevent"]))},{default:o((function(){return[Object(a["n"])(j,{label:"剧名",modelValue:m.searchParams,"onUpdate:modelValue":t[2]||(t[2]=function(e){return m.searchParams=e})},{default:o((function(){return[Object(a["n"])(h,{modelValue:m.searchParams.keywords,"onUpdate:modelValue":t[1]||(t[1]=function(e){return m.searchParams.keywords=e})},null,8,["modelValue"])]})),_:1},8,["modelValue"]),Object(a["n"])(y,{type:"primary",onClick:t[3]||(t[3]=function(e){return f.onSearch(1)})},{default:o((function(){return[i]})),_:1})]})),_:1})]})),_:1}),Object(a["n"])("div",null,[Object(a["n"])(k,{data:m.okResc.tableData.list,height:"70vh"},{default:o((function(){return[Object(a["n"])(w,{type:"index",width:"50"}),Object(a["n"])(w,{prop:"type_name",label:"类型",width:"180"}),Object(a["n"])(w,{prop:"vod_name",label:"剧名",width:"280"}),Object(a["n"])(w,{prop:"vod_remarks",label:"备注",width:"180"}),Object(a["n"])(w,{prop:"vod_time",label:"更新日期",width:"180"}),Object(a["n"])(w,{label:"操作",width:"180"},{default:o((function(e){return[Object(a["n"])(y,{size:"mini",type:"primary",onClick:function(t){return f.onDetail(e.$index,e.row)}},{default:o((function(){return[c]})),_:2},1032,["onClick"]),Object(a["n"])(y,{size:"mini",type:"danger",onClick:function(t){return f.onPlay(e.$index,e.row)}},{default:o((function(){return[l]})),_:2},1032,["onClick"])]})),_:1})]})),_:1},8,["data"]),Object(a["n"])(V,{style:{padding:"10px"},"hide-on-single-page":"",background:"",layout:"total,prev, pager, next","page-size":m.okResc.tableData.limit,total:m.okResc.tableData.total,onCurrentChange:f.onPageChange},null,8,["page-size","total","onCurrentChange"])]),Object(a["n"])(x,{modelValue:m.isShowDeatailDialog,"onUpdate:modelValue":t[5]||(t[5]=function(e){return m.isShowDeatailDialog=e})},{default:o((function(){return[Object(a["n"])(R,null,{default:o((function(){return[Object(a["n"])(_,{gutter:10},{default:o((function(){return[Object(a["n"])(P,{span:12},{default:o((function(){return[Object(a["n"])(C,{src:m.movieVO.vodPic},null,8,["src"])]})),_:1}),Object(a["n"])(P,{span:12},{default:o((function(){return[Object(a["n"])("div",null,[Object(a["n"])("b",{textContent:Object(a["R"])(m.movieVO.vodName)},null,8,["textContent"]),Object(a["n"])("div",null,[Object(a["n"])("div",null,"别名："+Object(a["R"])(m.movieVO.vodSub),1),Object(a["n"])("div",null,"导演："+Object(a["R"])(m.movieVO.vodDirector),1),Object(a["n"])("div",null,"类型："+Object(a["R"])(m.movieVO.typeName),1),Object(a["n"])("div",null,"年份："+Object(a["R"])(m.movieVO.vodYear),1),Object(a["n"])("div",null,"地区："+Object(a["R"])(m.movieVO.vodArea),1),Object(a["n"])("div",null,"语言："+Object(a["R"])(m.movieVO.vodLang),1),Object(a["n"])("div",null,"演员："+Object(a["R"])(m.movieVO.vodActor),1)]),Object(a["n"])("div",u,[m.movieVO.downloadUrlList?(Object(a["E"])(),Object(a["j"])("div",d,[Object(a["n"])(y,{type:"primary",onClick:f.onCopyDownloadUrl},{default:o((function(){return[s]})),_:1},8,["onClick"])])):Object(a["k"])("",!0),m.movieVO.playVOList?(Object(a["E"])(),Object(a["j"])("div",v,[Object(a["n"])(y,{type:"primary",onClick:f.onCopyM3u8},{default:o((function(){return[b]})),_:1},8,["onClick"]),Object(a["n"])(y,{type:"danger",onClick:f.onExportPotPlayerM3u8},{default:o((function(){return[O]})),_:1},8,["onClick"])])):Object(a["k"])("",!0)])])]})),_:1})]})),_:1})]})),_:1})]})),_:1},8,["modelValue"])])})),m=(n("ac1f"),n("1276"),n("b85c")),f=(n("96cf"),n("1da1")),h=n("21a6"),j=(n("99af"),{array2M3u8String:function(e,t){for(var n="",a=1;a<=t.length;a++){var o=t[a-1];n=a===t.length?n.concat(e,o.title,",",o.url):n.concat(e,o.title,",",o.url,"\n")}return n},array2PotPlayerM3u8String:function(e,t){for(var n="#EXTM3U\n",a=1;a<=t.length;a++){var o=t[a-1];n=n.concat("#EXTINF:-1 ,",e+"-"+o.title,"\n",o.url,"\n")}return n}}),y=j,g={name:"MovieSearch",data:function(){return{searchParams:{keywords:""},isShowDeatailDialog:!1,movieVO:"",okResc:{tableData:"",searchPageParams:{ac:"list",wd:this.keywords,t:null,pg:1}}}},methods:{onSearch:function(e){this.onSearchOk(e)},onSearchOk:function(e){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.okResc.searchPageParams.wd=t.searchParams.keywords,t.okResc.searchPageParams.pg=e,n.next=4,t.$httpUtil.http(t.$httpApi.SERVICE.OK.page,t.okResc.searchPageParams);case 4:a=n.sent,a&&(t.okResc.tableData=a);case 6:case"end":return n.stop()}}),n)})))()},onPageChange:function(e){this.onSearch(e)},onDetail:function(e,t){var n=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){var a,o,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.$httpUtil.http(n.$httpApi.SERVICE.OK.detail,{ac:"detail",ids:t.vod_id});case 2:if(a=e.sent,1!==a.code&&n.$message.warning("请求失败！"),o=a.list[0],a.list&&!(0>=a.list.length)&&o.vod_play_url){e.next=8;break}return n.$message.warning("当前视频播放地址已被删除，无法播放！"),e.abrupt("return");case 8:r=n.dealMovieVO(o),n.movieVO=r,n.isShowDeatailDialog=!0;case 11:case"end":return e.stop()}}),e)})))()},onPlay:function(e,t){var n=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){var a,o,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.$httpUtil.http(n.$httpApi.SERVICE.OK.detail,{ac:"detail",ids:t.vod_id});case 2:if(a=e.sent,1!==a.code&&n.$message.warning("请求失败！"),o=a.list[0],a.list&&!(0>=a.list.length)&&o.vod_play_url){e.next=8;break}return n.$message.warning("当前视频播放地址已被删除，无法播放！"),e.abrupt("return");case 8:return r=n.dealMovieVO(o),n.movieVO=r,localStorage.setItem("movieVO",JSON.stringify(r)),n.$store.commit("updatePlayVO",r.playVOList[0]),e.next=14,n.$router.push("pot-player-movie-play");case 14:case"end":return e.stop()}}),e)})))()},dealMovieVO:function(e){for(var t=e.vod_play_from.split(e.vod_play_note),n=0,a=0;a<t.length;a++)(-1<t[a].indexOf("m3u8")||-1<t[a].indexOf("M3U8"))&&(n=a);var o,r=e.vod_play_url.split(e.vod_play_note)[n],i=[],c=Object(m["a"])(r.split("#"));try{for(c.s();!(o=c.n()).done;){var l=o.value,u=l.split("$"),d={};d.title=u[0],d.url=u[1],i.push(d)}}catch(y){c.e(y)}finally{c.f()}var s=[],v=e.vod_down_url;if(v){var b,O=Object(m["a"])(v.split("#"));try{for(O.s();!(b=O.n()).done;){var p=b.value,f=p.split("$"),h={};h.title=f[0],h.url=f[1],s.push(h)}}catch(y){O.e(y)}finally{O.f()}}var j={};return j.vodId=e.vod_id,j.vodName=e.vod_name,j.vodSub=e.vod_sub,j.vodDirector=e.vod_director,j.vodClass=e.vod_class,j.vodPic=e.vod_pic,j.vodActor=e.vod_actor,j.vodBlurb=e.vod_blurb,j.vodRemarks=e.vod_remarks,j.vodArea=e.vod_area,j.vodLang=e.vod_lang,j.vodYear=e.vod_year,j.vodTime=e.vod_time,j.vodContent=e.vod_content,j.vodPlayFrom=e.vod_play_from,j.vodPlayServer=e.vod_play_server,j.typeName=e.type_name,j.isCollected=!1,j.downloadUrlList=s,j.playVOList=i,j},onCopyDownloadUrl:function(){var e=y.array2M3u8String(this.movieVO.vodName,this.movieVO.downloadUrlList);this.onCopy(e),this.$message.success("下载地址复制成功！")},onCopyM3u8:function(){var e=y.array2M3u8String(this.movieVO.vodName,this.movieVO.playVOList);this.onCopy(e),this.$message.success("下载地址复制成功！")},onExportPotPlayerM3u8:function(){var e=y.array2PotPlayerM3u8String(this.movieVO.vodName,this.movieVO.playVOList);this.onCopy(e);var t=Date.now(),n=new Blob([e],{type:"text/plain;charset=utf-8"});Object(h["saveAs"])(n,this.movieVO.vodName+t+".m3u")},onCopy:function(e){var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("Copy"),document.body.removeChild(t)},keyupEnter:function(){var e=this;document.onkeydown=function(){var t=window.event.keyCode;13===t&&e.onSearch(1)}}},created:function(){this.keyupEnter()}};n("4d43");g.render=p,g.__scopeId="data-v-47b18df9";t["default"]=g}}]);