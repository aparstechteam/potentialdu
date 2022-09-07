import{r as f,_ as b}from"./acs.7d6a45c8.js";import{j as y,u as g,r as k,o as _,a as i,b as t,d,w as h,t as s,n as x,F as w,f as j,g as n}from"./index.71db404d.js";const B={class:"container mx-auto pb-10"},N={class:"py-3"},$=t("div",{class:"text-center my-2"},[t("img",{src:b,alt:"",class:"mx-auto h-16"})],-1),C=t("h1",{class:"text-2xl"},"Potential du'ian hunt",-1),D=t("h3",null,"22 Batch",-1),F={class:"md:w-1/2 flex justify-between mx-auto py-2 items-center"},V=t("h1",{class:"text-2xl"},"\u09AB\u09B2\u09BE\u09AB\u09B2",-1),R=t("span",{class:"material-icons"}," leaderboard ",-1),S=n(" \u09B2\u09BF\u09A1\u09BE\u09B0\u09AC\u09CB\u09B0\u09CD\u09A1 "),q={class:"mt-2"},z={class:"md:w-1/2 mx-auto space-y-3"},E={class:"space-y-2 my-3"},I={class:"overflow-x-auto"},L={class:"table w-full"},P=t("thead",null,[t("tr",null,[t("th",null,"\u09B0\u09CB\u09B2"),t("th",null,"\u09AB\u09B2\u09BE\u09AB\u09B2"),t("th",null,"\u09AE\u09C7\u09A7\u09BE\u0995\u09CD\u09B0\u09AE")])],-1),T=t("h2",{class:"text-center text-xl py-3 text-orange-400"}," \u09AC\u09BF\u09B8\u09CD\u09A4\u09BE\u09B0\u09BF\u09A4 \u09AB\u09B2\u09BE\u09AB\u09B2 ",-1),A={class:"overflow-x-auto"},G={class:"table w-full bordered"},H=t("thead",null,[t("tr",null,[t("th",null,"\u09AC\u09BF\u09B7\u09DF \u09B8\u09AE\u09C2\u09B9"),t("th",null,[t("div",{class:"flex items-end justify-center"},[t("span",{class:"pr-2"},"(\u09B8\u09A0\u09BF\u0995)"),t("h1",{class:"text-2xl"},"\u098F\u09AE.\u09B8\u09BF.\u0995\u09BF\u0989"),t("span",{class:"pl-2"},"(\u09AD\u09C1\u09B2)")])])])],-1),J={class:"border"},K={class:"flex items-end justify-center"},M={class:"pr-2 flex items-center text-lg"},O=t("span",{class:"material-icons text-lg text-green-500"}," done ",-1),Q={class:"text-4xl text-center"},U={class:"pl-2 flex items-center text-lg"},W=t("span",{class:"material-icons text-red-500 mr-2 text-lg"},"close",-1),X={class:""},Y=t("th",{class:"bg-gray-100 text-gray-700 text-xl"},"\u09AE\u09CB\u099F",-1),Z={class:"bg-gray-100 text-gray-700"},tt={class:"text-center"},at={__name:"DetailsResult",setup(et){const e=y(null),v={phy:"\u09AA\u09A6\u09BE\u09B0\u09CD\u09A5\u09AC\u09BF\u099C\u09CD\u099E\u09BE\u09A8",che:"\u09B0\u09B8\u09BE\u09DF\u09A8",math:"\u0989\u099A\u09CD\u099A\u09A4\u09B0 \u0997\u09A3\u09BF\u09A4",bio:"\u099C\u09C0\u09AC\u09AC\u09BF\u099C\u09CD\u099E\u09BE\u09A8"},c=g();e.value=f.find(l=>l.roll===c.params.roll),e.value.rank=c.query.rank,e.value.total_c=e.value.phy_c+e.value.che_c+e.value.math_c+e.value.bio_c,e.value.total_i=e.value.phy_i+e.value.che_i+e.value.math_i+e.value.bio_i,e.value.result=e.value.rank<=1096?"\u0989\u09A4\u09CD\u09A4\u09C0\u09B0\u09CD\u09A3":"\u0985\u09A8\u09C1\u09A4\u09CD\u09A4\u09C0\u09B0\u09CD\u09A3";const a=l=>Intl.NumberFormat("bn-BD").format(l),m=(l,r)=>a(l-r*.5);return(l,r)=>{const u=k("router-link");return _(),i("div",B,[t("div",N,[$,d(u,{to:"/",as:"div",class:"text-center uppercase"},{default:h(()=>[C,D]),_:1})]),t("div",F,[V,d(u,{to:"/",class:"btn flex items-center gap-1"},{default:h(()=>[R,S]),_:1})]),t("div",q,[t("div",z,[t("div",E,[t("p",null,"\u09A8\u09BE\u09AE\u0983 "+s(e.value.name),1),t("p",null,"\u09B6\u09BF\u0995\u09CD\u09B7\u09BE \u09AA\u09CD\u09B0\u09A4\u09BF\u09B7\u09CD\u09A0\u09BE\u09A8\u0983 "+s(e.value.college),1)]),t("div",null,[t("div",I,[t("table",L,[P,t("tbody",null,[t("tr",null,[t("th",null,s(e.value.roll),1),t("td",null,[t("span",{class:x(["text-2xl",{"text-green-500":e.value.rank<=1096,"text-red-500":e.value.rank>1096}])},s(e.value.result),3)]),t("td",null,s(a(e.value.rank)),1)])])])])]),T,t("div",A,[t("table",G,[H,t("tbody",null,[(_(),i(w,null,j(v,(p,o)=>t("tr",{key:o},[t("th",null,s(p),1),t("td",J,[t("div",K,[t("sub",M,[O,n(" "+s(a(e.value[`${o}_c`])),1)]),t("h1",Q,s(m(e.value[`${o}_c`],e.value[`${o}_i`])),1),t("sub",U,[W,n(" "+s(a(e.value[`${o}_i`])),1)])])])])),64)),t("tr",X,[Y,t("td",Z,[t("div",tt,[t("h1",{class:x(["text-4xl",{"text-green-500":e.value.rank<=1096,"text-red-500":e.value.rank>1096}])},s(a(e.value.score)),3)])])])])])])])])])}}};export{at as default};
