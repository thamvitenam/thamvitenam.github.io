var v=Object.defineProperty,_=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var r=(e,t,o)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,d=(e,t)=>{for(var o in t||(t={}))y.call(t,o)&&r(e,o,t[o]);if(n)for(var o of n(t))w.call(t,o)&&r(e,o,t[o]);return e},p=(e,t)=>_(e,f(t));import{b as x}from"./index.90779013.js";import{_ as L,a as C,r as c,o as s,g as l,w as E,c as k,d as B,F as N}from"./index.3f821aa2.js";import{v as j}from"./video.es.ad527ff0.js";import"./_commonjsHelpers.0592d25c.js";const z={name:"Look",components:{},data(){return{videos:[],players:[],pageNum:1,pageSize:6}},watch:{},computed:{},methods:p(d({},C({toggleLoading:"common/toggleLoading"})),{videoChange(e){this.players.forEach(t=>{t.pause()}),e==this.players.length-3&&(this.pageNum=this.pageNum+1,this.getVideos(!1))},async getVideos(e){e&&this.toggleLoading(!0);try{let{rows:t,code:o}=await x({pageNum:this.pageNum,pageSize:this.pageSize});o==200&&t.length&&(this.videos=this.videos.concat(t),t.forEach(i=>{this.initPlayer(i)}))}catch{}finally{this.toggleLoading(!1)}},initPlayer(e){setTimeout(()=>{document.getElementById("swipe-"+e.id).innerHTML=`<video id="video-js-${e.id}" class="video-js"></video>`,setTimeout(()=>{this.players.push(j(document.getElementById("video-js-"+e.id),{controls:!0,muted:!0,fluid:!0,reload:"auto",poster:e.videoCover,sources:[{src:e.video,type:"application/x-mpegURL"}]},function(){}))},0)},0)}}),mounted(){this.getVideos(!0)},beforeUnmount(){this.players.length&&this.players.forEach(e=>{e.dispose()})}};function V(e,t,o,i,u,g){const h=c("van-swipe-item"),m=c("van-swipe");return s(),l(m,{class:"video-swiper",onChange:g.videoChange,vertical:"","lazy-render":"","show-indicators":!1,duration:300},{default:E(()=>[(s(!0),k(N,null,B(u.videos,a=>(s(),l(h,{key:a.id,id:"swipe-"+a.id},null,8,["id"]))),128))]),_:1},8,["onChange"])}var b=L(z,[["render",V],["__scopeId","data-v-447a9090"]]);export{b as default};
