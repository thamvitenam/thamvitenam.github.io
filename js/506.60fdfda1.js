"use strict";(self["webpackChunkjamongtube"]=self["webpackChunkjamongtube"]||[]).push([[506],{6986:function(e,a,t){t.d(a,{M9:function(){return c},R8:function(){return l},US:function(){return d},ce:function(){return n},ep:function(){return s},wR:function(){return r}});var i=t(9060);const n=e=>(0,i.Z)({url:"/videos/public",method:"get",params:e}),s=e=>(0,i.Z)({url:"/videos/china2",method:"get",params:e}),l=e=>(0,i.Z)({url:"/videos/china3",method:"get",params:e}),d=e=>(0,i.Z)({url:"/korea",method:"get",params:e}),r=e=>(0,i.Z)({url:"/search/av",method:"get",params:e}),c=e=>(0,i.Z)({url:"/search/t100",method:"get",params:e})},7735:function(e,a,t){t.d(a,{M:function(){return n}});var i=t(9060);const n=e=>(0,i.Z)({url:"/videos/getOssVideo",method:"post",data:e})},6460:function(e,a,t){t.d(a,{Z:function(){return o}});var i=t(3396),n=t(4870),s=t(3147),l=t(9518),d=t(5210),r={__name:"MainTop",setup(e){let a=(0,n.iH)(null);const t=async()=>{const e=await(0,s.b)({typee:41});e.data.length<14?a.value=e.data.slice(0,e.data.length):a.value=e.data.slice(1,13)};t();const r=e=>{window.open(e)};return(e,t)=>{const s=(0,i.up)("el-image");return(0,i.wg)(),(0,i.j4)((0,n.SU)(l.Z),{cols:"4","x-gap":8,"y-gap":8,"item-responsive":"",responsive:"screen"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,n.SU)(a),((e,a)=>((0,i.wg)(),(0,i.j4)((0,n.SU)(d.ZP),{key:a},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{onClick:a=>r(e.href),style:{height:"100px"},src:e.pic_url},null,8,["onClick","src"])])),_:2},1024)))),128))])),_:1})}}};const c=r;var o=c},1782:function(e,a,t){t.d(a,{Z:function(){return _}});var i=t(3396),n=t(4870),s=t(7139),l=t(9518),d=t(5210),r=t(5535),c=t(2483);const o=e=>((0,i.dD)("data-v-9dee8e56"),e=e(),(0,i.Cn)(),e),u=["onClick"],p={class:"car"},m=o((()=>(0,i._)("span",{class:"hd-video"},"HD",-1))),g={class:"rating-bar"},y=o((()=>(0,i._)("i",{class:"iconfont icon-dianzan"},null,-1))),v={name:"VideoList",props:{videoDatas:Array,classifyName:String}};var f=Object.assign(v,{setup(e){const a=(0,c.tv)(),t=(e,t)=>{console.log(e,t),"Korea"===t?a.push({path:"/videoPlayKorea",query:{videoId:e,classifyName:t}}):a.push({path:"/videoPlay",query:{videoId:e,classifyName:t}})};return(a,c)=>{const o=(0,i.up)("el-image"),v=(0,i.up)("el-progress");return(0,i.wg)(),(0,i.j4)((0,n.SU)(l.Z),{"x-gap":18,"y-gap":18,cols:4},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.videoDatas,((a,l)=>((0,i.wg)(),(0,i.j4)((0,n.SU)(d.ZP),{key:l},{default:(0,i.w5)((()=>[(0,i._)("div",{onClick:i=>t(a._id||a.ID,e.classifyName)},[(0,i._)("div",p,[(0,i.Wm)(o,{fit:"cover",style:{height:"100%",width:"100%"},src:a.thumbnailUrl||a.videoCover},null,8,["src"]),m]),(0,i._)("div",g,[y,(0,i.Wm)(v,{percentage:100,"stroke-width":6,color:"#ff3565",style:{width:"70%"}})]),(0,i.Wm)((0,n.SU)(r.Z),{"line-clamp":1,style:{"max-width":"250px"}},{default:(0,i.w5)((()=>[(0,i.Uk)((0,s.zw)(a.title),1)])),_:2},1024)],8,u)])),_:2},1024)))),128))])),_:1})}}}),w=t(89);const h=(0,w.Z)(f,[["__scopeId","data-v-9dee8e56"]]);var _=h},5506:function(e,a,t){t.r(a),t.d(a,{default:function(){return A}});var i=t(3396),n=t(4870),s=t(9242),l=t(6460),d=t(3147),r=t(9518),c=t(5210),o={__name:"MainLeft",setup(e){let a=(0,n.iH)(null);const t=async()=>{const e=await(0,d.b)({typee:41});let t=e.data.length;a.value=e.data.slice(t-2,t)};t();const s=e=>{window.open(e)};return(e,t)=>{const l=(0,i.up)("el-image");return(0,i.wg)(),(0,i.j4)((0,n.SU)(r.Z),{cols:"1","x-gap":8,"y-gap":8,"item-responsive":"",responsive:"screen"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,n.SU)(a),((e,a)=>((0,i.wg)(),(0,i.j4)((0,n.SU)(c.ZP),{key:a},{default:(0,i.w5)((()=>[(0,i.Wm)(l,{onClick:a=>s(e.href),style:{height:"100px"},src:e.pic_url},null,8,["onClick","src"])])),_:2},1024)))),128))])),_:1})}}};const u=o;var p=u,m={__name:"MainLeftTop",setup(e){let a=(0,n.iH)(null);const t=async()=>{const e=await(0,d.b)({typee:4});let t=e.data.length;a.value=e.data.slice(t-3,t)};t();const s=e=>{window.open(e)};return(e,t)=>{const l=(0,i.up)("el-image");return(0,i.wg)(),(0,i.j4)((0,n.SU)(r.Z),{cols:"1","x-gap":8,"y-gap":8,"item-responsive":"",responsive:"screen"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,n.SU)(a),((e,a)=>((0,i.wg)(),(0,i.j4)((0,n.SU)(c.ZP),{key:a},{default:(0,i.w5)((()=>[(0,i.Wm)(l,{onClick:a=>s(e.href),style:{height:"100px"},src:e.pic_url},null,8,["onClick","src"])])),_:2},1024)))),128))])),_:1})}}};const g=m;var y=g,v=t(1782),f=t(2483);const w=e=>((0,i.dD)("data-v-03d98449"),e=e(),(0,i.Cn)(),e),h=["onClick"],_={class:"car"},x=w((()=>(0,i._)("span",{class:"hd-video"},"HD",-1))),I={class:"rating-bar"},k=w((()=>(0,i._)("i",{class:"iconfont icon-dianzan"},null,-1))),S={name:"VideoList",props:{videoDatas:Array,classifyName:String}};var Z=Object.assign(S,{setup(e){const a=(0,f.tv)(),t=(e,t)=>{"Korea"===t?a.push({path:"/videoPlayKorea",query:{videoId:e,classifyName:t}}):a.push({path:"/videoPlay",query:{videoId:e,classifyName:t}})};return(a,s)=>{const l=(0,i.up)("el-image"),d=(0,i.up)("el-progress");return(0,i.wg)(),(0,i.j4)((0,n.SU)(r.Z),{"x-gap":8,"y-gap":8,cols:2},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.videoDatas,((a,s)=>((0,i.wg)(),(0,i.j4)((0,n.SU)(c.ZP),{key:s},{default:(0,i.w5)((()=>[(0,i._)("div",{onClick:i=>t(a._id||a.ID,e.classifyName)},[(0,i._)("div",_,[(0,i.Wm)(l,{fit:"cover",style:{height:"100%",width:"100%"},src:a.thumbnailUrl||a.videoCover},null,8,["src"]),x]),(0,i._)("div",I,[k,(0,i.Wm)(d,{percentage:100,"stroke-width":6,color:"#ff3565",style:{width:"70%"}})])],8,h)])),_:2},1024)))),128))])),_:1})}}}),U=t(89);const D=(0,U.Z)(Z,[["__scopeId","data-v-03d98449"]]);var b=D,q=t(7139),N=t(568),W=t(9841),j=t(212);const C={class:"li"},z={style:{"margin-right":"15%","font-size":"20px"}},H=(0,i.Uk)(">>"),K={name:"Bar",props:{name:String,right:{type:String,default:""},specialId:{type:Number,default:0},query:{type:Object,default:{}}}};var M=Object.assign(K,{setup(e){const a=(0,f.tv)(),t=e=>{a.push({path:"/videoList",query:e})};return(a,s)=>{const l=(0,i.up)("el-link"),d=(0,i.up)("el-button");return(0,i.wg)(),(0,i.j4)((0,n.SU)(N.ZP),null,{default:(0,i.w5)((()=>[(0,i._)("div",C,[(0,i.Wm)((0,n.SU)(W.zb),{prefix:"bar",type:"error"},{default:(0,i.w5)((()=>[(0,i.Wm)((0,n.SU)(j.Z),{type:"error"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,q.zw)(e.name),1)])),_:1})])),_:1}),(0,i.Wm)(d,{link:"",onClick:s[0]||(s[0]=a=>t(e.query))},{default:(0,i.w5)((()=>[(0,i._)("span",z,(0,q.zw)(e.right),1),(0,i.Wm)(l,{type:"danger",style:{"font-size":"20px"}},{default:(0,i.w5)((()=>[H])),_:1})])),_:1})])])),_:1})}}});const P=(0,U.Z)(M,[["__scopeId","data-v-66602159"]]);var V=P,Y=(t(6986),t(7735));const B={class:"left"},L={class:"right"};var O={__name:"index",setup(e){let a=(0,n.iH)([]);const t=async()=>{const e=await(0,Y.M)({page:0,pageSize:20,specialId:11});let t={name:"한국"};t["data"]=e.data,t["title"]="한국",t["index"]="index1",t["query"]={classifyName:"한국",title:"한국",newVideo:1,specialId:11,index:"index1"},a.value.push(t);const i=await(0,Y.M)({page:0,pageSize:20,specialId:12});let n={name:"BJ",title:"BJ"};n["data"]=i.data,t["index"]="index2",n["query"]={classifyName:"BJ",title:"BJ",newVideo:1,specialId:12,index:"index2"},a.value.push(n);const s=await(0,Y.M)({page:0,pageSize:20,classifyId:1,specialId:13});let l={name:"일본",title:"일본"};l["data"]=s.data,t["index"]="index3",l["query"]={classifyName:"일본",title:"일본",newVideo:1,classifyId:1,specialId:13,index:"index3"},a.value.push(l);const d=await(0,Y.M)({page:0,pageSize:20,classifyId:5,specialId:14});let r={name:"중국",title:"중국"};r["data"]=d.data,t["index"]="index4",r["query"]={classifyName:"중국",title:"중국",newVideo:1,classifyId:5,specialId:14,index:"index4"},a.value.push(r);const c=await(0,Y.M)({page:0,pageSize:20,classifyId:6,specialId:15});let o={name:"서양",title:"서양"};o["data"]=c.data,t["index"]="index5",o["query"]={classifyName:"서양",title:"서양",newVideo:1,classifyId:6,specialId:15,index:"index5"},a.value.push(o);const u=await(0,Y.M)({page:0,pageSize:20,classifyId:7,specialId:16});let p={name:"애니",title:"애니"};p["data"]=u.data,t["index"]="index6",p["query"]={classifyName:"애니",title:"애니",newVideo:1,classifyId:7,specialId:16,index:"index6"},a.value.push(p)};return t(),(e,t)=>{const d=(0,i.up)("el-container");return(0,i.wg)(),(0,i.j4)(d,null,{default:(0,i.w5)((()=>[(0,i._)("div",B,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,n.SU)(a),(e=>((0,i.wg)(),(0,i.iD)("div",{key:e.name},[(0,i.wy)((0,i._)("div",null,[(0,i.Wm)(l.Z),(0,i.Wm)(V,{name:e.name,right:"더보기",query:e.query},null,8,["name","query"]),(0,i.Wm)(v.Z,{videoDatas:e.data.slice(0,12),classifyName:e.name},null,8,["videoDatas","classifyName"])],512),[[s.F8,e.data.length>0]])])))),128))]),(0,i._)("div",L,[(0,i.Wm)(y),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,n.SU)(a),(e=>((0,i.wg)(),(0,i.iD)("div",{key:e.name},[(0,i.wy)((0,i._)("div",null,[(0,i.Wm)(p),(0,i.Wm)(V,{name:e.name,query:e.query},null,8,["name","query"]),(0,i.Wm)(b,{videoDatas:e.data.length>12?e.data.slice(13,19):e.data.slice(0,6),classifyName:e.name},null,8,["videoDatas","classifyName"])],512),[[s.F8,e.data.length>0]])])))),128))])])),_:1})}}};const J=(0,U.Z)(O,[["__scopeId","data-v-0f225990"]]);var A=J}}]);