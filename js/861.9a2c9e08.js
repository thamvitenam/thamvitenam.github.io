"use strict";(self["webpackChunknew_web"]=self["webpackChunknew_web"]||[]).push([[861],{4861:function(e,a,n){n.r(a),n.d(a,{default:function(){return d}});var c=n(6768),r=n(4232);const o={class:"search-container"};function h(e,a,n,h,s,t){const l=(0,c.g2)("van-search");return(0,c.uX)(),(0,c.CE)("div",o,[(0,c.bF)(l,{modelValue:s.search,"onUpdate:modelValue":a[1]||(a[1]=e=>s.search=e),"show-action":"",placeholder:s.placeholderMap[e.language],onSearch:t.onSearch},{action:(0,c.k6)((()=>[(0,c.Lk)("div",{onClick:a[0]||(a[0]=(...e)=>t.onSearch&&t.onSearch(...e))},(0,r.v_)(s.searchMap[e.language]),1)])),_:1},8,["modelValue","placeholder","onSearch"])])}n(4114);var s=n(782),t={name:"index",components:{},data(){return{search:"",placeholderMap:{"ko-KR":"검색어를 입력해주세요","en-US":"Please enter search terms","zh-CN":"请输入搜索词"},searchMap:{"ko-KR":"검색","en-US":"Search","zh-CN":"搜索"}}},watch:{},computed:{...(0,s.aH)({language:e=>e.common.language})},methods:{onSearch(){this.$router.push({name:"category",query:{search:this.search}})}},mounted(){}},l=n(1241);const u=(0,l.A)(t,[["render",h],["__scopeId","data-v-909cb628"]]);var d=u}}]);
//# sourceMappingURL=861.9a2c9e08.js.map