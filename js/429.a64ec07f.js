"use strict";(self["webpackChunknew_web"]=self["webpackChunknew_web"]||[]).push([[429],{1429:function(e,i,t){t.r(i),t.d(i,{default:function(){return g}});var o=t(6768);function s(e,i,t,s,a,n){const d=(0,o.g2)("van-swipe-item"),r=(0,o.g2)("van-swipe");return(0,o.uX)(),(0,o.Wv)(r,{class:"video-swiper",onChange:n.videoChange,vertical:"","lazy-render":"","show-indicators":!1,duration:300},{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.videos,(e=>((0,o.uX)(),(0,o.Wv)(d,{key:e.id,id:"swipe-"+e.id},null,8,["id"])))),128))])),_:1},8,["onChange"])}t(4114);var a=t(3397),n=t(782),d=t(8728),r={name:"Look",components:{},data(){return{videos:[],players:[],pageNum:1,pageSize:6}},watch:{},computed:{},methods:{...(0,n.i0)({toggleLoading:"common/toggleLoading"}),videoChange(e){this.players.forEach((e=>{e.pause()})),e==this.players.length-3&&(this.pageNum=this.pageNum+1,this.getVideos(!1))},async getVideos(e){e&&this.toggleLoading(!0);try{let{rows:e,code:i}=await a.fY({pageNum:this.pageNum,pageSize:this.pageSize});200==i&&e.length&&(this.videos=this.videos.concat(e),e.forEach((e=>{this.initPlayer(e)})))}catch(i){}finally{this.toggleLoading(!1)}},initPlayer(e){setTimeout((()=>{document.getElementById("swipe-"+e.id).innerHTML=`<video id="video-js-${e.id}" class="video-js"></video>`,setTimeout((()=>{this.players.push((0,d.A)(document.getElementById("video-js-"+e.id),{controls:!0,muted:!0,fluid:!0,reload:"auto",poster:e.videoCover,sources:[{src:e.video,type:"application/x-mpegURL"}]},(function(){})))}),0)}),0)}},mounted(){this.getVideos(!0)},beforeUnmount(){this.players.length&&this.players.forEach((e=>{e.dispose()}))}},u=t(1241);const l=(0,u.A)(r,[["render",s],["__scopeId","data-v-6c140fef"]]);var g=l}}]);
//# sourceMappingURL=429.a64ec07f.js.map