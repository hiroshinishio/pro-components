(self.webpackChunkpro_components=self.webpackChunkpro_components||[]).push([[1626],{37423:function(S,l,e){"use strict";e.r(l);var b=e(54306),i=e.n(b),C=e(1515),h=e(23599),s=e(59649),v=e(50959),_=e(11527),u=[{name:"\u5B9E\u9A8C\u540D\u79F01",desc:"\u7CFB\u7EDF\u6027\u7684\u6C89\u6DC0B\u7AEF\u77E5\u8BC6\u4F53\u7CFB",content:[{label:"\u6A21\u578B\u6570",value:2903},{label:"\u6307\u6807\u6570",value:3720},{label:"\u5B9E\u9A8C\u72B6\u6001",value:"\u6210\u529F",status:"success"}]},{name:"\u5B9E\u9A8C\u540D\u79F02",desc:"\u7CFB\u7EDF\u6027\u7684\u6C89\u6DC0B\u7AEF\u77E5\u8BC6\u4F53\u7CFB",content:[{label:"\u6A21\u578B\u6570",value:2904},{label:"\u6307\u6807\u6570",value:3721},{label:"\u5B9E\u9A8C\u72B6\u6001",value:"\u6210\u529F",status:"success"}]},{name:"\u5B9E\u9A8C\u540D\u79F03",desc:"\u7CFB\u7EDF\u6027\u7684\u6C89\u6DC0B\u7AEF\u77E5\u8BC6\u4F53\u7CFB",content:[{label:"\u6A21\u578B\u6570",value:2905},{label:"\u6307\u6807\u6570",value:3722},{label:"\u5B9E\u9A8C\u72B6\u6001",value:"\u6210\u529F",status:"success"}]}],r=function(d){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return(0,_.jsx)(h.Z,{count:d,style:{marginBlockStart:-2,marginInlineStart:4,color:t?"#1890FF":"#999",backgroundColor:t?"#E6F7FF":"#eee"}})};l.default=function(){var m=(0,v.useState)("tab1"),d=i()(m,2),t=d[0],a=d[1],c=(0,v.useRef)();return(0,_.jsx)(C.Rs,{rowKey:"name",actionRef:c,dataSource:u,editable:{},metas:{title:{dataIndex:"name",valueType:"select",fieldProps:{showSearch:!0,placement:"bottomRight",options:[{label:"\u5B9E\u9A8C\u540D\u79F01",value:"\u5B9E\u9A8C\u540D\u79F01"}]}},description:{dataIndex:"desc"},content:{dataIndex:"content",render:function(E){return(0,_.jsx)("div",{style:{display:"flex",justifyContent:"space-around"},children:E.map(function(D){return(0,_.jsxs)("div",{children:[(0,_.jsx)("div",{style:{color:"#00000073"},children:D.label}),(0,_.jsxs)("div",{style:{color:"#000000D9"},children:[D.status==="success"&&(0,_.jsx)("span",{style:{display:"inline-block",width:8,height:8,borderRadius:"50%",backgroundColor:"#52c41a",marginInlineEnd:8}}),D.value]})]},D.label)})},"label")}},actions:{render:function(E,D){return[(0,_.jsx)("a",{href:D.html_url,target:"_blank",rel:"noopener noreferrer",onClick:function(){var f;(f=c.current)===null||f===void 0||f.startEditable(D.name)},children:"\u7F16\u8F91"},"link"),(0,_.jsx)("a",{target:"_blank",rel:"noopener noreferrer",children:"\u590D\u5236"},"warning"),(0,_.jsx)("a",{target:"_blank",rel:"noopener noreferrer",children:"\u5220\u9664"},"view")]}}},toolbar:{menu:{activeKey:t,items:[{key:"tab1",label:(0,_.jsxs)("span",{children:["\u5168\u90E8\u5B9E\u9A8C\u5BA4",r(99,t==="tab1")]})},{key:"tab2",label:(0,_.jsxs)("span",{children:["\u6211\u521B\u5EFA\u7684\u5B9E\u9A8C\u5BA4",r(32,t==="tab2")]})}],onChange:function(E){a(E)}},search:{onSearch:function(E){alert(E)}},actions:[(0,_.jsx)(s.ZP,{type:"primary",children:"\u65B0\u5EFA\u5B9E\u9A8C"},"primary")]}})}},69531:function(S,l,e){"use strict";e.r(l);var b=e(1515),i=e(59649),C=e(14301),h=e(53930),s=e(11527),v=[{name:"\u8BED\u96C0\u7684\u5929\u7A7A",image:"https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",desc:"\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0"},{name:"Ant Design",image:"https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",desc:"\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0"},{name:"\u8682\u8681\u91D1\u670D\u4F53\u9A8C\u79D1\u6280",image:"https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",desc:"\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0"},{name:"TechUI",image:"https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",desc:"\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0"}];l.default=function(){return(0,s.jsx)(b.Rs,{toolBarRender:function(){return[(0,s.jsx)(i.ZP,{type:"primary",children:"\u65B0\u5EFA"},"add")]},onRow:function(u){return{onMouseEnter:function(){console.log(u)},onClick:function(){console.log(u)}}},rowKey:"name",headerTitle:"\u57FA\u7840\u5217\u8868",tooltip:"\u57FA\u7840\u5217\u8868\u7684\u914D\u7F6E",dataSource:v,showActions:"hover",showExtra:"hover",metas:{title:{dataIndex:"name"},avatar:{dataIndex:"image"},description:{dataIndex:"desc"},subTitle:{render:function(){return(0,s.jsxs)(C.Z,{size:0,children:[(0,s.jsx)(h.Z,{color:"blue",children:"Ant Design"}),(0,s.jsx)(h.Z,{color:"#5BD8A6",children:"TechUI"})]})}},actions:{render:function(u,r){return[(0,s.jsx)("a",{href:r.html_url,target:"_blank",rel:"noopener noreferrer",children:"\u94FE\u8DEF"},"link"),(0,s.jsx)("a",{href:r.html_url,target:"_blank",rel:"noopener noreferrer",children:"\u62A5\u8B66"},"warning"),(0,s.jsx)("a",{href:r.html_url,target:"_blank",rel:"noopener noreferrer",children:"\u67E5\u770B"},"view")]}}}})}},44807:function(S,l,e){"use strict";e.r(l);var b=e(54306),i=e.n(b),C=e(42530),h=e(82547),s=e(1515),v=e(53930),_=e(71138),u=e(50959),r=e(11527),m=["\u8BED\u96C0\u7684\u5929\u7A7A","Ant Design","\u8682\u8681\u91D1\u670D\u4F53\u9A8C\u79D1\u6280","TechUI","TechUI 2.0","Bigfish","Umi","Ant Design Pro"].map(function(d){return{title:d,subTitle:(0,r.jsx)(v.Z,{color:"#5BD8A6",children:"\u8BED\u96C0\u4E13\u680F"}),actions:[(0,r.jsx)("a",{children:"\u9080\u8BF7"},"run"),(0,r.jsx)("a",{children:"\u5220\u9664"},"delete")],avatar:"https://gw.alipayobjects.com/zos/antfincdn/UCSiy1j6jx/xingzhuang.svg",content:(0,r.jsx)("div",{style:{flex:1},children:(0,r.jsxs)("div",{style:{width:200},children:[(0,r.jsx)("div",{children:"\u53D1\u5E03\u4E2D"}),(0,r.jsx)(_.Z,{percent:80})]})})}});l.default=function(){var d=(0,u.useState)("extra"),t=i()(d,2),a=t[0],c=t[1],o=(0,u.useState)(!1),E=i()(o,2),D=E[0],F=E[1];return(0,r.jsxs)("div",{style:{backgroundColor:"#eee",margin:-24,padding:24},children:[(0,r.jsx)(C.Z.Group,{label:"actions \u653E\u7F6E\u7684\u5730\u65B9",options:[{label:"\u8BBE\u7F6E\u4E3A action",value:"actions"},{label:"\u8BBE\u7F6E\u4E3A extra",value:"extra"}],fieldProps:{value:a,onChange:function(P){return c(P.target.value)}}}),(0,r.jsx)(h.Z,{label:"\u5E7D\u7075\u6A21\u5F0F",fieldProps:{checked:D,onChange:function(P){return F(P)}}}),(0,r.jsx)(s.Rs,{ghost:D,itemCardProps:{ghost:D},pagination:{defaultPageSize:8,showSizeChanger:!1},showActions:"hover",rowSelection:{},grid:{gutter:16,column:2},onItem:function(P){return{onMouseEnter:function(){console.log(P)},onClick:function(){console.log(P)}}},metas:{title:{},subTitle:{},type:{},avatar:{},content:{},actions:{cardActionProps:a}},headerTitle:"\u5361\u7247\u5217\u8868\u5C55\u793A",dataSource:m})]})}},59840:function(S,l,e){"use strict";e.r(l);var b=e(25359),i=e.n(b),C=e(49811),h=e.n(C),s=e(54306),v=e.n(s),_=e(1515),u=e(14301),r=e(53930),m=e(50959),d=e(11527),t=[{id:"1",name:"\u8BED\u96C0\u7684\u5929\u7A7A",image:"https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",desc:"\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0"},{id:"2",name:"Ant Design",image:"https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",desc:"\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0"},{id:"3",name:"\u8682\u8681\u91D1\u670D\u4F53\u9A8C\u79D1\u6280",image:"https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",desc:"\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0"},{id:"4",name:"TechUI",image:"https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",desc:"\u6211\u662F\u4E00\u6761\u6D4B\u8BD5\u7684\u63CF\u8FF0"}];l.default=function(){var a=(0,m.useState)(t),c=v()(a,2),o=c[0],E=c[1];return(0,d.jsx)(_.Rs,{rowKey:"id",headerTitle:"\u57FA\u7840\u5217\u8868",dataSource:o,showActions:"hover",editable:{onSave:function(){var D=h()(i()().mark(function f(P,x,A){return i()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return console.log(P,x,A),W.abrupt("return",!0);case 2:case"end":return W.stop()}},f)}));function F(f,P,x){return D.apply(this,arguments)}return F}()},onDataSourceChange:E,metas:{title:{dataIndex:"name"},avatar:{dataIndex:"image",editable:!1},description:{dataIndex:"desc"},subTitle:{render:function(){return(0,d.jsxs)(u.Z,{size:0,children:[(0,d.jsx)(r.Z,{color:"blue",children:"Ant Design"}),(0,d.jsx)(r.Z,{color:"#5BD8A6",children:"TechUI"})]})}},actions:{render:function(F,f,P,x){return[(0,d.jsx)("a",{onClick:function(){x==null||x.startEditable(f.id)},children:"\u7F16\u8F91"},"link")]}}}})}},9864:function(S,l,e){"use strict";e.r(l);var b=e(54306),i=e.n(b),C=e(1515),h=e(59649),s=e(14301),v=e(53930),_=e(71138),u=e(50959),r=e(11527),m=[{title:"\u8BED\u96C0\u7684\u5929\u7A7A",avatar:"https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg"},{title:"Ant Design",avatar:"https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg"},{title:"\u8682\u8681\u91D1\u670D\u4F53\u9A8C\u79D1\u6280",avatar:"https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg"},{title:"TechUI",avatar:"https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg"}];l.default=function(){var d=(0,u.useState)([]),t=i()(d,2),a=t[0],c=t[1];return(0,r.jsx)(C.Rs,{rowKey:"title",headerTitle:"\u652F\u6301\u5C55\u5F00\u7684\u5217\u8868",toolBarRender:function(){return[(0,r.jsx)(h.ZP,{type:"primary",children:"\u65B0\u5EFA"},"3")]},expandable:{expandedRowKeys:a,onExpandedRowsChange:c},dataSource:m,metas:{title:{},subTitle:{render:function(){return(0,r.jsxs)(s.Z,{size:0,children:[(0,r.jsx)(v.Z,{color:"blue",children:"Ant Design"}),(0,r.jsx)(v.Z,{color:"#5BD8A6",children:"TechUI"})]})}},description:{render:function(){return"Ant Design, a design language for background applications, is refined by Ant UED Team"}},avatar:{},content:{render:function(){return(0,r.jsx)("div",{style:{minWidth:200,flex:1,display:"flex",justifyContent:"flex-end"},children:(0,r.jsxs)("div",{style:{width:"200px"},children:[(0,r.jsx)("div",{children:"\u53D1\u5E03\u4E2D"}),(0,r.jsx)(_.Z,{percent:80})]})})}},actions:{render:function(){return(0,r.jsx)("a",{children:"\u9080\u8BF7"},"invite")}}}})}},87022:function(S,l,e){"use strict";e.r(l);var b=e(25359),i=e.n(b),C=e(49811),h=e.n(C),s=e(1515),v=e(59649),_=e(14301),u=e(53930),r=e(50659),m=e(11527);l.default=function(){return(0,m.jsx)(s.Rs,{toolBarRender:function(){return[(0,m.jsx)(v.ZP,{type:"primary",children:"\u65B0\u5EFA"},"3")]},search:{filterType:"light"},rowKey:"name",headerTitle:"\u57FA\u7840\u5217\u8868",request:h()(i()().mark(function d(){var t,a=arguments;return i()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return t=a.length>0&&a[0]!==void 0?a[0]:{},o.abrupt("return",(0,r.ZP)("https://proapi.azurewebsites.net/github/issues",{params:t}));case 2:case"end":return o.stop()}},d)})),pagination:{pageSize:5},showActions:"hover",metas:{title:{dataIndex:"user",title:"\u7528\u6237"},avatar:{dataIndex:"avatar",search:!1},description:{dataIndex:"title",search:!1},subTitle:{dataIndex:"labels",render:function(t,a){var c;return(0,m.jsx)(_.Z,{size:0,children:(c=a.labels)===null||c===void 0?void 0:c.map(function(o){return(0,m.jsx)(u.Z,{color:"blue",children:o.name},o.name)})})},search:!1},actions:{render:function(t,a){return[(0,m.jsx)("a",{href:a.url,target:"_blank",rel:"noopener noreferrer",children:"\u94FE\u8DEF"},"link"),(0,m.jsx)("a",{href:a.url,target:"_blank",rel:"noopener noreferrer",children:"\u62A5\u8B66"},"warning"),(0,m.jsx)("a",{href:a.url,target:"_blank",rel:"noopener noreferrer",children:"\u67E5\u770B"},"view")]},search:!1},status:{title:"\u72B6\u6001",valueType:"select",valueEnum:{all:{text:"\u5168\u90E8",status:"Default"},open:{text:"\u672A\u89E3\u51B3",status:"Error"},closed:{text:"\u5DF2\u89E3\u51B3",status:"Success"},processing:{text:"\u89E3\u51B3\u4E2D",status:"Processing"}}}}})}},68941:function(S,l,e){"use strict";e.r(l),e.d(l,{default:function(){return f}});var b=e(24456),i=e(50959),C={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"}}]},name:"star",theme:"outlined"},h=C,s=e(53942),v=function(x,A){return i.createElement(s.Z,(0,b.Z)({},x,{ref:A,icon:h}))},_=i.forwardRef(v),u=e(64784),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"}}]},name:"message",theme:"outlined"},m=r,d=function(x,A){return i.createElement(s.Z,(0,b.Z)({},x,{ref:A,icon:m}))},t=i.forwardRef(d),a=e(1515),c=e(59649),o=e(53930),E=e(11527),D=function(x){var A=x.icon,L=x.text;return(0,E.jsxs)("span",{children:[i.createElement(A,{style:{marginInlineEnd:8}}),L]})},F=[{title:"\u8BED\u96C0\u7684\u5929\u7A7A"},{title:"Ant Design"},{title:"\u8682\u8681\u91D1\u670D\u4F53\u9A8C\u79D1\u6280"},{title:"TechUI"}],f=function(){return(0,E.jsx)(a.Rs,{toolBarRender:function(){return[(0,E.jsx)(c.ZP,{type:"primary",children:"\u65B0\u5EFA"},"3")]},itemLayout:"vertical",rowKey:"id",headerTitle:"\u7AD6\u6392\u6837\u5F0F",dataSource:F,metas:{title:{},description:{render:function(){return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(o.Z,{children:"\u8BED\u96C0\u4E13\u680F"}),(0,E.jsx)(o.Z,{children:"\u8BBE\u8BA1\u8BED\u8A00"}),(0,E.jsx)(o.Z,{children:"\u8682\u8681\u91D1\u670D"})]})}},actions:{render:function(){return[(0,E.jsx)(D,{icon:_,text:"156"},"list-vertical-star-o"),(0,E.jsx)(D,{icon:u.Z,text:"156"},"list-vertical-like-o"),(0,E.jsx)(D,{icon:t,text:"2"},"list-vertical-message")]}},extra:{render:function(){return(0,E.jsx)("img",{width:272,alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"})}},content:{render:function(){return(0,E.jsx)("div",{children:"\u6BB5\u843D\u793A\u610F\uFF1A\u8682\u8681\u91D1\u670D\u8BBE\u8BA1\u5E73\u53F0 design.alipay.com\uFF0C\u7528\u6700\u5C0F\u7684\u5DE5\u4F5C\u91CF\uFF0C\u65E0\u7F1D\u63A5\u5165\u8682\u8681\u91D1\u670D\u751F\u6001\uFF0C\u63D0\u4F9B\u8DE8\u8D8A\u8BBE\u8BA1\u4E0E\u5F00\u53D1\u7684\u4F53\u9A8C\u89E3\u51B3\u65B9\u6848\u3002\u8682\u8681\u91D1\u670D\u8BBE\u8BA1\u5E73\u53F0 design.alipay.com\uFF0C\u7528\u6700\u5C0F\u7684\u5DE5\u4F5C\u91CF\uFF0C\u65E0\u7F1D\u63A5\u5165\u8682\u8681\u91D1\u670D\u751F\u6001\u63D0\u4F9B\u8DE8\u8D8A\u8BBE\u8BA1\u4E0E\u5F00\u53D1\u7684\u4F53\u9A8C\u89E3\u51B3\u65B9\u6848\u3002"})}}}})}},19076:function(S,l,e){"use strict";e.r(l);var b=e(67843),i=e(1515),C=e(53930),h=e(71138),s=e(11527),v=["\u8BED\u96C0\u7684\u5929\u7A7A","Ant Design","\u8682\u8681\u91D1\u670D\u4F53\u9A8C\u79D1\u6280","TechUI","TechUI 2.0","Bigfish","Umi"].map(function(_){return{title:_,subTitle:(0,s.jsx)(C.Z,{color:"#5BD8A6",children:"\u8BED\u96C0\u4E13\u680F"}),actions:[(0,s.jsx)("a",{children:"\u9080\u8BF7"},"invite"),(0,s.jsx)("a",{children:"\u64CD\u4F5C"},"operate"),(0,s.jsx)("a",{children:(0,s.jsx)(b.Z,{})},"rest")],avatar:"https://gw.alipayobjects.com/zos/antfincdn/UCSiy1j6jx/xingzhuang.svg",content:(0,s.jsx)("div",{style:{flex:1,display:"flex",justifyContent:"flex-end"},children:(0,s.jsxs)("div",{style:{width:200},children:[(0,s.jsx)("div",{children:"\u53D1\u5E03\u4E2D"}),(0,s.jsx)(h.Z,{percent:80})]})})}});l.default=function(){return(0,s.jsx)(i.Rs,{pagination:{defaultPageSize:5,showSizeChanger:!0},metas:{title:{},subTitle:{},type:{},avatar:{},content:{},actions:{}},headerTitle:"\u7FFB\u9875",dataSource:v})}},20266:function(S,l,e){"use strict";e.r(l);var b=e(25359),i=e.n(b),C=e(49811),h=e.n(C),s=e(1515),v=e(59649),_=e(14301),u=e(53930),r=e(50659),m=e(11527);l.default=function(){return(0,m.jsx)(s.Rs,{toolBarRender:function(){return[(0,m.jsx)(v.ZP,{type:"primary",children:"\u65B0\u5EFA"},"3")]},search:{},rowKey:"name",headerTitle:"\u57FA\u7840\u5217\u8868",request:h()(i()().mark(function d(){var t,a=arguments;return i()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return t=a.length>0&&a[0]!==void 0?a[0]:{},o.abrupt("return",(0,r.ZP)("https://proapi.azurewebsites.net/github/issues",{params:t}));case 2:case"end":return o.stop()}},d)})),pagination:{pageSize:5},showActions:"hover",metas:{title:{dataIndex:"user",title:"\u7528\u6237"},avatar:{dataIndex:"avatar",search:!1},description:{dataIndex:"title",search:!1},subTitle:{dataIndex:"labels",render:function(t,a){var c;return(0,m.jsx)(_.Z,{size:0,children:(c=a.labels)===null||c===void 0?void 0:c.map(function(o){return(0,m.jsx)(u.Z,{color:"blue",children:o.name},o.name)})})},search:!1},actions:{render:function(t,a){return[(0,m.jsx)("a",{href:a.url,target:"_blank",rel:"noopener noreferrer",children:"\u94FE\u8DEF"},"link"),(0,m.jsx)("a",{href:a.url,target:"_blank",rel:"noopener noreferrer",children:"\u62A5\u8B66"},"warning"),(0,m.jsx)("a",{href:a.url,target:"_blank",rel:"noopener noreferrer",children:"\u67E5\u770B"},"view")]},search:!1},status:{title:"\u72B6\u6001",valueType:"select",valueEnum:{all:{text:"\u5168\u90E8",status:"Default"},open:{text:"\u672A\u89E3\u51B3",status:"Error"},closed:{text:"\u5DF2\u89E3\u51B3",status:"Success"},processing:{text:"\u89E3\u51B3\u4E2D",status:"Processing"}}}}})}},98767:function(S,l,e){"use strict";e.r(l);var b=e(54306),i=e.n(b),C=e(1515),h=e(59649),s=e(71138),v=e(50959),_=e(11527),u=[{title:"\u8BED\u96C0\u7684\u5929\u7A7A",avatar:"https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg"},{title:"Ant Design",avatar:"https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg"},{title:"\u8682\u8681\u91D1\u670D\u4F53\u9A8C\u79D1\u6280",avatar:"https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg"},{title:"TechUI",avatar:"https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg"}];l.default=function(){var r=(0,v.useState)([]),m=i()(r,2),d=m[0],t=m[1],a={selectedRowKeys:d,onChange:function(o){return t(o)}};return(0,_.jsx)(C.Rs,{toolBarRender:function(){return[(0,_.jsx)(h.ZP,{type:"primary",children:"\u65B0\u5EFA"},"3")]},metas:{title:{},description:{render:function(){return"Ant Design, a design language for background applications, is refined by Ant UED Team"}},avatar:{},extra:{render:function(){return(0,_.jsx)("div",{style:{minWidth:200,flex:1,display:"flex",justifyContent:"flex-end"},children:(0,_.jsxs)("div",{style:{width:"200px"},children:[(0,_.jsx)("div",{children:"\u53D1\u5E03\u4E2D"}),(0,_.jsx)(s.Z,{percent:80})]})})}},actions:{render:function(){return[(0,_.jsx)("a",{children:"\u9080\u8BF7"},"init"),"\u53D1\u5E03"]}}},rowKey:"title",headerTitle:"\u652F\u6301\u9009\u4E2D\u7684\u5217\u8868",rowSelection:a,dataSource:u})}},4411:function(S,l,e){"use strict";e.r(l);var b=e(54306),i=e.n(b),C=e(1515),h=e(16347),s=e(59649),v=e(71138),_=e(50959),u=e(11527),r=[{title:"\u8BED\u96C0\u7684\u5929\u7A7A",avatar:"https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg"},{title:"Ant Design",avatar:"https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg"},{title:"\u8682\u8681\u91D1\u670D\u4F53\u9A8C\u79D1\u6280",avatar:"https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg"},{title:"TechUI",avatar:"https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg"}];l.default=function(){var m=(0,_.useState)([]),d=i()(m,2),t=d[0],a=d[1],c=(0,_.useState)([]),o=i()(c,2),E=o[0],D=o[1],F=(0,_.useState)("default"),f=i()(F,2),P=f[0],x=f[1],A=(0,_.useState)(1),L=i()(A,2),W=L[0],R=L[1],w={selectedRowKeys:t,onChange:function(g){return a(g)}};return(0,u.jsxs)(u.Fragment,{children:["\u5927\u5C0F\uFF1A",(0,u.jsx)(h.Z,{value:P,onChange:function(g){return x(g)},options:["small","default","large"].map(function(K){return{value:K,label:K}})})," ","\u5206\u5272\u7EBF\uFF1A",(0,u.jsx)(h.Z,{value:W,onChange:function(g){return R(g)},options:[{value:1,label:"\u6709"},{value:0,label:"\u65E0"}]})," ",(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),(0,u.jsx)(C.Rs,{size:P,split:W===1,toolBarRender:function(){return[(0,u.jsx)(s.ZP,{type:"primary",children:"\u65B0\u5EFA"},"3")]},metas:{title:{},description:{render:function(){return"Ant Design, a design language for background applications, is refined by Ant UED Team"}},avatar:{},content:{render:function(){return(0,u.jsx)("div",{style:{minWidth:200,flex:1,display:"flex",justifyContent:"flex-end"},children:(0,u.jsxs)("div",{style:{width:"200px"},children:[(0,u.jsx)("div",{children:"\u53D1\u5E03\u4E2D"}),(0,u.jsx)(v.Z,{percent:80})]})})}},actions:{render:function(){return[(0,u.jsx)("a",{children:"\u9080\u8BF7"},"init")]}}},expandable:{expandedRowKeys:E,defaultExpandAllRows:!1,onExpandedRowsChange:D},rowKey:"title",headerTitle:"\u5927\u5C0F\u548C\u5206\u5272\u7EBF",rowSelection:w,dataSource:r})]})}},37083:function(S,l,e){"use strict";e.r(l);var b=e(57213),i=e.n(b),C=e(93525),h=e.n(C),s=e(54306),v=e.n(s),_=e(67843),u=e(1515),r=e(53930),m=e(71138),d=e(59649),t=e(50959),a=e(11527),c=["top","inline","new"],o=["\u8BED\u96C0\u7684\u5929\u7A7A\uFF08top\uFF09","Ant Design\uFF08inline\uFF09","\u8682\u8681\u91D1\u670D\u4F53\u9A8C\u79D1\u6280\uFF08new\uFF09","TechUI"].map(function(E,D){return{title:E,subTitle:(0,a.jsx)(r.Z,{color:"#5BD8A6",children:"\u8BED\u96C0\u4E13\u680F"}),actions:[(0,a.jsx)("a",{children:"\u9080\u8BF7"},"invite"),(0,a.jsx)("a",{children:"\u64CD\u4F5C"},"operate"),(0,a.jsx)("a",{children:(0,a.jsx)(_.Z,{})},"rest")],description:(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{children:"top \u4F1A\u6709\u5C0F\u89D2\u6807"}),(0,a.jsx)("div",{children:"inline \u6807\u9898\u5B57\u4F53\u662F normal"}),(0,a.jsx)("div",{children:"new \u4F1A\u6709\u4E00\u4E2A\u5165\u573A\u52A8\u753B"})]}),type:c[D],avatar:"https://gw.alipayobjects.com/zos/antfincdn/UCSiy1j6jx/xingzhuang.svg",content:(0,a.jsx)("div",{style:{flex:1,display:"flex",justifyContent:"flex-end"},children:(0,a.jsxs)("div",{style:{width:200},children:[(0,a.jsx)("div",{children:"\u53D1\u5E03\u4E2D"}),(0,a.jsx)(m.Z,{percent:80})]})})}});l.default=function(){var E=(0,t.useState)([]),D=v()(E,2),F=D[0],f=D[1],P=(0,t.useState)([]),x=v()(P,2),A=x[0],L=x[1],W={selectedRowKeys:A,onChange:function(Z){return L(Z)}},R=(0,t.useState)(h()(o)),w=v()(R,2),K=w[0],g=w[1];return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(u.Rs,{metas:{title:{},subTitle:{},type:{},description:{},avatar:{},content:{},actions:{}},toolBarRender:function(){return[(0,a.jsx)(d.ZP,{type:"primary",onClick:function(){g(h()(o.map(function(z){return i()({},z)}))),setTimeout(function(){var z=h()(o.map(function(k){return i()({},k)}));z[1].type="new",g(z)},0)},children:"\u5237\u65B0"},"3")]},rowKey:"id",headerTitle:"\u9884\u8BBE\u7684\u5217\u72B6\u6001",rowSelection:W,dataSource:K,expandable:{expandedRowKeys:F,onExpandedRowsChange:f}})})}},29537:function(S,l,e){"use strict";var b=e(12342),i=e.n(b),C=e(57213),h=e.n(C),s=e(15440),v=e(67843),_=e(87669),u=e(91281),r=e(67511),m=e(59649),d=e(84875),t=e.n(d),a=e(50959),c=e(11527),o=["key","name"],E=function(f){var P=f.children,x=f.menus,A=f.onSelect,L=f.className,W=f.style,R=(0,a.useContext)(u.ZP.ConfigContext),w=R.getPrefixCls,K=w("pro-table-dropdown"),g=(0,_.Q)({onClick:function(Z){return A&&A(Z.key)},items:x==null?void 0:x.map(function(V){return{label:V.name,key:V.key}})});return(0,c.jsx)(r.Z,h()(h()({},g),{},{className:t()(K,L),children:(0,c.jsxs)(m.ZP,{style:W,children:[P," ",(0,c.jsx)(s.Z,{})]})}))},D=function(f){var P=f.className,x=f.style,A=f.onSelect,L=f.menus,W=L===void 0?[]:L,R=f.children,w=(0,a.useContext)(u.ZP.ConfigContext),K=w.getPrefixCls,g=K("pro-table-dropdown"),V=(0,_.Q)({onClick:function(z){A==null||A(z.key)},items:W.map(function(Z){var z=Z.key,k=Z.name,ee=i()(Z,o);return h()(h()({key:z},ee),{},{title:ee.title,label:k})})});return(0,c.jsx)(r.Z,h()(h()({},V),{},{className:t()(g,P),children:(0,c.jsx)("a",{style:x,children:R||(0,c.jsx)(v.Z,{})})}))};D.Button=E,l.Z=D},50509:function(S,l,e){"use strict";var b=e(52510),i=e.n(b),C=e(54306),h=e.n(C),s=e(12342),v=e.n(s),_=e(25359),u=e.n(_),r=e(49811),m=e.n(r),d=e(57213),t=e.n(d),a=e(84626),c=e(3640),o=e(63071),E=e(24213),D=e(28802),F=e(17772),f=e(8305),P=e(59649),x=e(16146),A=e(66613),L=e(63594),W=e(35077),R=e(50959),w=e(37616),K=e(99822),g=e(11527),V=["onTableChange","maxLength","formItemProps","recordCreatorProps","rowKey","controlled","defaultValue","onChange","editableFormRef"],Z=["record","position","creatorButtonText","newRecordType","parentKey","style"],z=R.createContext(void 0);function k(n){var $=n.children,q=n.record,ne=n.position,te=n.newRecordType,G=n.parentKey,ae=(0,R.useContext)(z);return R.cloneElement($,t()(t()({},$.props),{},{onClick:function(){var _e=m()(u()().mark(function ie(de){var ue,le,J,Q;return u()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,(ue=(le=$.props).onClick)===null||ue===void 0?void 0:ue.call(le,de);case 2:if(Q=U.sent,Q!==!1){U.next=5;break}return U.abrupt("return");case 5:ae==null||(J=ae.current)===null||J===void 0||J.addEditRecord(q,{position:ne,newRecordType:te,parentKey:G});case 6:case"end":return U.stop()}},ie)}));function H(ie){return _e.apply(this,arguments)}return H}()}))}function ee(n){var $,q,ne=(0,E.YB)(),te=n.onTableChange,G=n.maxLength,ae=n.formItemProps,_e=n.recordCreatorProps,H=n.rowKey,ie=n.controlled,de=n.defaultValue,ue=n.onChange,le=n.editableFormRef,J=v()(n,V),Q=(0,R.useRef)(void 0),re=(0,R.useRef)(),U=(0,R.useRef)();(0,R.useImperativeHandle)(J.actionRef,function(){return re.current},[re.current]);var fe=(0,A.default)(function(){return n.value||de||[]},{value:n.value,onChange:n.onChange}),Ee=h()(fe,2),B=Ee[0],pe=Ee[1],X=R.useMemo(function(){return typeof H=="function"?H:function(y,p){return y[H]||p}},[H]),ve=function(p){if(typeof p=="number"&&!n.name){if(p>=B.length)return p;var O=B&&B[p];return X==null?void 0:X(O,p)}if((typeof p=="string"||p>=B.length)&&n.name){var M=B.findIndex(function(j,T){var I;return(X==null||(I=X(j,T))===null||I===void 0?void 0:I.toString())===(p==null?void 0:p.toString())});if(M!==-1)return M}return p};(0,R.useImperativeHandle)(le,function(){var y=function(M){var j,T;if(M==null)throw new Error("rowIndex is required");var I=ve(M),N=[n.name,(j=I==null?void 0:I.toString())!==null&&j!==void 0?j:""].flat(1).filter(Boolean);return(T=U.current)===null||T===void 0?void 0:T.getFieldValue(N)},p=function(){var M,j=[n.name].flat(1).filter(Boolean);if(Array.isArray(j)&&j.length===0){var T,I=(T=U.current)===null||T===void 0?void 0:T.getFieldsValue();return Array.isArray(I)?I:Object.keys(I).map(function(N){return I[N]})}return(M=U.current)===null||M===void 0?void 0:M.getFieldValue(j)};return t()(t()({},U.current),{},{getRowData:y,getRowsData:p,setRowData:function(M,j){var T,I;if(M==null)throw new Error("rowIndex is required");var N=ve(M),se=[n.name,(T=N==null?void 0:N.toString())!==null&&T!==void 0?T:""].flat(1).filter(Boolean),Be=Object.assign({},t()(t()({},y(M)),j||{})),Ae=(0,W.default)({},se,Be);return(I=U.current)===null||I===void 0||I.setFieldsValue(Ae),!0}})},[n.name,U.current]),(0,R.useEffect)(function(){n.controlled&&B.forEach(function(y,p){var O;(O=U.current)===null||O===void 0||O.setFieldsValue(i()({},X(y,p),y))},{})},[(0,w.P)(B),n.controlled]),(0,R.useEffect)(function(){if(n.name){var y;U.current=n==null||(y=n.editable)===null||y===void 0?void 0:y.form}},[($=n.editable)===null||$===void 0?void 0:$.form,n.name]);var Y=_e||{},ge=Y.record,ce=Y.position,Pe=Y.creatorButtonText,Oe=Y.newRecordType,Me=Y.parentKey,be=Y.style,xe=v()(Y,Z),De=ce==="top",oe=(0,R.useMemo)(function(){return typeof G=="number"&&G<=(B==null?void 0:B.length)?!1:_e!==!1&&(0,g.jsx)(k,{record:(0,D.h)(ge,B==null?void 0:B.length,B)||{},position:ce,parentKey:(0,D.h)(Me,B==null?void 0:B.length,B),newRecordType:Oe,children:(0,g.jsx)(P.ZP,t()(t()({type:"dashed",style:t()({display:"block",margin:"10px 0",width:"100%"},be),icon:(0,g.jsx)(a.Z,{})},xe),{},{children:Pe||ne.getMessage("editableTable.action.add","\u6DFB\u52A0\u4E00\u884C\u6570\u636E")}))})},[_e,G,B==null?void 0:B.length]),Ce=(0,R.useMemo)(function(){return oe?De?{components:{header:{wrapper:function(p){var O,M=p.className,j=p.children;return(0,g.jsxs)("thead",{className:M,children:[j,(0,g.jsxs)("tr",{style:{position:"relative"},children:[(0,g.jsx)("td",{colSpan:0,style:{visibility:"hidden"},children:oe}),(0,g.jsx)("td",{style:{position:"absolute",left:0,width:"100%"},colSpan:(O=J.columns)===null||O===void 0?void 0:O.length,children:oe})]})]})}}}}:{tableViewRender:function(p,O){var M,j;return(0,g.jsxs)(g.Fragment,{children:[(M=(j=n.tableViewRender)===null||j===void 0?void 0:j.call(n,p,O))!==null&&M!==void 0?M:O,oe]})}}:{}},[De,oe]),me=t()({},n.editable),je=(0,F.J)(function(y,p){var O,M,j;if((O=n.editable)===null||O===void 0||(M=O.onValuesChange)===null||M===void 0||M.call(O,y,p),(j=n.onValuesChange)===null||j===void 0||j.call(n,p,y),n.controlled){var T;n==null||(T=n.onChange)===null||T===void 0||T.call(n,p)}});return(n!=null&&n.onValuesChange||(q=n.editable)!==null&&q!==void 0&&q.onValuesChange||n.controlled&&n!==null&&n!==void 0&&n.onChange)&&(me.onValuesChange=je),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(z.Provider,{value:re,children:(0,g.jsx)(K.Z,t()(t()(t()({search:!1,options:!1,pagination:!1,rowKey:H,revalidateOnFocus:!1},J),Ce),{},{tableLayout:"fixed",actionRef:re,onChange:te,editable:t()(t()({},me),{},{formProps:t()({formRef:U},me.formProps)}),dataSource:B,onDataSourceChange:function(p){if(pe(p),n.name&&ce==="top"){var O,M=(0,W.default)({},[n.name].flat(1).filter(Boolean),p);(O=U.current)===null||O===void 0||O.setFieldsValue(M)}}}))}),n.name?(0,g.jsx)(c.Z,{name:[n.name],children:function(p){var O,M;if(!Q.current)return Q.current=B,null;var j=(0,L.default)(p,[n.name].flat(1)),T=j==null?void 0:j.find(function(I,N){var se;return!(0,f.A)(I,(se=Q.current)===null||se===void 0?void 0:se[N])});return Q.current=B,T&&(n==null||(O=n.editable)===null||O===void 0||(M=O.onValuesChange)===null||M===void 0||M.call(O,T,j)),null}}):null]})}function he(n){var $=o.ZP.useFormInstance();return n.name?(0,g.jsx)(x.Z.Item,t()(t()({style:{maxWidth:"100%"}},n==null?void 0:n.formItemProps),{},{name:n.name,shouldUpdate:function(ne,te){var G=[n.name].flat(1);try{return JSON.stringify((0,L.default)(ne,G))!==JSON.stringify((0,L.default)(te,G))}catch(ae){return!0}},children:(0,g.jsx)(ee,t()(t()({},n),{},{editable:t()(t()({},n.editable),{},{form:$})}))})):(0,g.jsx)(ee,t()({},n))}he.RecordCreator=k,l.Z=he},57002:function(){}}]);
