"use strict";(self["webpackChunkjamongtube"]=self["webpackChunkjamongtube"]||[]).push([[102],{6986:function(a,e,t){t.d(e,{M9:function(){return r},R8:function(){return u},US:function(){return i},ce:function(){return s},ep:function(){return n},wR:function(){return o}});var l=t(9060);const s=a=>(0,l.Z)({url:"/videos/public",method:"get",params:a}),n=a=>(0,l.Z)({url:"/videos/china2",method:"get",params:a}),u=a=>(0,l.Z)({url:"/videos/china3",method:"get",params:a}),i=a=>(0,l.Z)({url:"/korea",method:"get",params:a}),o=a=>(0,l.Z)({url:"/search/av",method:"get",params:a}),r=a=>(0,l.Z)({url:"/search/t100",method:"get",params:a})},7735:function(a,e,t){t.d(e,{M:function(){return s}});var l=t(9060);const s=a=>(0,l.Z)({url:"/videos/getOssVideo",method:"post",data:a})},6460:function(a,e,t){t.d(e,{Z:function(){return c}});var l=t(3396),s=t(4870),n=t(3147),u=t(9518),i=t(5210),o={__name:"MainTop",setup(a){let e=(0,s.iH)(null);const t=async()=>{const a=await(0,n.b)({typee:41});a.data.length<14?e.value=a.data.slice(0,a.data.length):e.value=a.data.slice(1,13)};t();const o=a=>{window.open(a)};return(a,t)=>{const n=(0,l.up)("el-image");return(0,l.wg)(),(0,l.j4)((0,s.SU)(u.Z),{cols:"4","x-gap":8,"y-gap":8,"item-responsive":"",responsive:"screen"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,s.SU)(e),((a,e)=>((0,l.wg)(),(0,l.j4)((0,s.SU)(i.ZP),{key:e},{default:(0,l.w5)((()=>[(0,l.Wm)(n,{onClick:e=>o(a.href),style:{height:"100px"},src:a.pic_url},null,8,["onClick","src"])])),_:2},1024)))),128))])),_:1})}}};const r=o;var c=r},1782:function(a,e,t){t.d(e,{Z:function(){return I}});var l=t(3396),s=t(4870),n=t(7139),u=t(9518),i=t(5210),o=t(5535),r=t(2483);const c=a=>((0,l.dD)("data-v-9dee8e56"),a=a(),(0,l.Cn)(),a),v=["onClick"],d={class:"car"},p=c((()=>(0,l._)("span",{class:"hd-video"},"HD",-1))),g={class:"rating-bar"},f=c((()=>(0,l._)("i",{class:"iconfont icon-dianzan"},null,-1))),y={name:"VideoList",props:{videoDatas:Array,classifyName:String}};var m=Object.assign(y,{setup(a){const e=(0,r.tv)(),t=(a,t)=>{console.log(a,t),"Korea"===t?e.push({path:"/videoPlayKorea",query:{videoId:a,classifyName:t}}):e.push({path:"/videoPlay",query:{videoId:a,classifyName:t}})};return(e,r)=>{const c=(0,l.up)("el-image"),y=(0,l.up)("el-progress");return(0,l.wg)(),(0,l.j4)((0,s.SU)(u.Z),{"x-gap":18,"y-gap":18,cols:4},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.videoDatas,((e,u)=>((0,l.wg)(),(0,l.j4)((0,s.SU)(i.ZP),{key:u},{default:(0,l.w5)((()=>[(0,l._)("div",{onClick:l=>t(e._id||e.ID,a.classifyName)},[(0,l._)("div",d,[(0,l.Wm)(c,{fit:"cover",style:{height:"100%",width:"100%"},src:e.thumbnailUrl||e.videoCover},null,8,["src"]),p]),(0,l._)("div",g,[f,(0,l.Wm)(y,{percentage:100,"stroke-width":6,color:"#ff3565",style:{width:"70%"}})]),(0,l.Wm)((0,s.SU)(o.Z),{"line-clamp":1,style:{"max-width":"250px"}},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.title),1)])),_:2},1024)],8,v)])),_:2},1024)))),128))])),_:1})}}}),h=t(89);const w=(0,h.Z)(m,[["__scopeId","data-v-9dee8e56"]]);var I=w},102:function(a,e,t){t.r(e),t.d(e,{default:function(){return f}});var l=t(3396),s=t(4870),n=t(1782),u=t(6460),i=t(6986),o=t(2483),r=t(7735);const c={key:0,class:"no-data"},v={style:{display:"flex","justify-content":"center","margin-top":"2%"}};var d={__name:"index",setup(a){const e=(0,o.yj)(),t=((0,o.tv)(),(0,s.iH)(null)),d=(0,s.iH)(null),p=(0,s.iH)(),g=(0,s.iH)(null),f=(0,s.iH)(0);let y=(0,s.iH)(100),m=(0,s.iH)(null);const h=(0,s.iH)(null);t.value=e.query.classifyName,h.value=e.query.newVideo,d.value=e.query.classifyId,g.value=e.query.searchWord,p.value=e.query.specialId;const w=async()=>{if(m.value=null,h.value){const a=await(0,r.M)({page:f.value+1,pageSize:20,classifyId:parseInt(d.value),specialId:parseInt(p.value)});m.value=a.data,y.value=parseInt(a.total/20)||1}else if("Japan1"===t.value){const a=await(0,i.ce)({page:20*f.value,classify:d.value||0});m.value=a.data,y.value=parseInt(a.totalPage/40)}else if("Japan2"===t.value){const a=await(0,i.ep)({page:20*f.value,classify:d.value||0});m.value=a.data,y.value=parseInt(a.totalPage/40)}else if("Korea"===t.value){const a=await(0,i.US)({page:20*f.value,classify:d.value||0});m.value=a.data,y.value=parseInt(a.totalPage/40)}else if("Japan3"===t.value){const a=await(0,i.R8)({page:20*f.value,classify:d.value||0});m.value=a.data,y.value=parseInt(a.totalPage/40)}else if("search"===t.value){const a=await(0,i.wR)({page:20*f.value,searchWord:g.value||""});m.value=a.data,y.value=parseInt(a.totalPage/40)}else if("t100"===t.value){const a=await(0,i.M9)({page:20*f.value});m.value=a.data,y.value=parseInt(a.totalPage/40)}else{const a=await(0,i.ce)({page:20*f.value,classify:d.value||0});m.value=a.data,y.value=parseInt(a.totalPage/40)}};w();return(0,l.YP)(f,((a,e)=>{w()})),(0,o.ao)((a=>{t.value=a.query.classifyName,p.value=a.query.specialId,d.value=a.query.classifyId,g.value=a.query.searchWord,f.value=0,w()})),(a,e)=>{const i=(0,l.up)("n-pagination");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(u.Z),(0,l.Wm)(n.Z,{videoDatas:(0,s.SU)(m),classifyName:t.value},null,8,["videoDatas","classifyName"]),(0,s.SU)(m)?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",c," no video yet ")),(0,l._)("div",v,[(0,l.Wm)(i,{page:f.value,"onUpdate:page":e[0]||(e[0]=a=>f.value=a),"page-count":(0,s.SU)(y)},null,8,["page","page-count"])])],64)}}},p=t(89);const g=(0,p.Z)(d,[["__scopeId","data-v-2100c784"]]);var f=g}}]);