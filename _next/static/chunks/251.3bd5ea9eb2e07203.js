"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[251],{63251:function(n,e,t){t.r(e),t.d(e,{GraphCanvas:function(){return np}});var i=t(85893),r=t(67294),o=t(7297),l=t(26126),a=t(78188),s=t(46407),c=t.n(s),d=t(1440),u=t(19521);function h(){let n=(0,o.Z)(["\n  text-decoration: underline;\n  pointer-events: all;\n"]);return h=function(){return n},n}function g(){let n=(0,o.Z)(["\n  text-align: ",";\n  font-size: 12px;\n  overflow: hidden;\n  color: ",";\n  pointer-events: none;\n  padding: ",";\n  font-family: ",";\n\n  &.searched {\n    border: 2px solid ",";\n    border-radius: 2px;\n    box-sizing: border-box;\n  }\n\n  .highlight {\n    background: rgba(255, 214, 0, 0.3);\n  }\n\n  .renderVisible {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 12px;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    cursor: pointer;\n  }\n"]);return g=function(){return n},n}function p(){let n=(0,o.Z)(["\n  display: inline;\n  flex: 1;\n  font-weight: 500;\n  color: ",";\n  font-size: ",";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: ","px;\n"]);return p=function(){return n},n}function f(){let n=(0,o.Z)(["\n  display: block;\n  height: 18px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding: 0 auto;\n"]);return f=function(){return n},n}function x(){let n=(0,o.Z)(["\n  color: ",";\n  padding: 10px;\n  margin-left: -15px;\n"]);return x=function(){return n},n}let m=(0,u.ZP)(d.Ld).withConfig({componentId:"sc-a27f859-0"})(h()),w=u.ZP.foreignObject.withConfig({componentId:"sc-a27f859-1"})(g(),n=>{let{isObject:e}=n;return!e&&"center"},n=>{let{theme:e}=n;return e.NODE_COLORS.TEXT},n=>{let{isObject:e}=n;return e&&"10px"},c().style.fontFamily,n=>{let{theme:e}=n;return e.TEXT_POSITIVE}),C=u.ZP.span.withConfig({componentId:"sc-a27f859-2"})(p(),n=>{let{theme:e,objectKey:t=!1,parent:i=!1}=n;return i?"array"===i?e.NODE_COLORS.PARENT_ARR:e.NODE_COLORS.PARENT_OBJ:t?e.NODE_COLORS.NODE_KEY:e.NODE_COLORS.TEXT},n=>{let{parent:e}=n;return e&&"14px"},n=>{let{objectKey:e}=n;return!e&&10}),b=u.ZP.span.attrs(n=>{var e,t;return{style:{color:(e=n["data-key"],t=n.theme,Number.isNaN(+e)?"true"===e?t.NODE_COLORS.BOOL.TRUE:"false"===e?t.NODE_COLORS.BOOL.FALSE:"null"===e?t.NODE_COLORS.NULL:t.NODE_COLORS.NODE_VALUE:t.NODE_COLORS.INTEGER)}}}).withConfig({componentId:"sc-a27f859-3"})(f()),O=u.ZP.span.withConfig({componentId:"sc-a27f859-4"})(x(),n=>{let{theme:e}=n;return e.NODE_COLORS.CHILD_COUNT}),j=n=>{let{node:e,x:t,y:o}=n,{text:l,width:a,height:s,data:c}=e,d=r.useRef(null);return c.isEmpty?null:(0,i.jsx)(w,{width:a,height:s,x:0,y:0,ref:d,isObject:!0,children:l.map((n,e)=>(0,i.jsxs)(b,{"data-key":JSON.stringify(n),"data-x":t,"data-y":o+17.8*e,children:[(0,i.jsxs)(C,{objectKey:!0,children:[JSON.stringify(n[0]).replaceAll('"',""),":"," "]}),(0,i.jsx)(m,{children:JSON.stringify(n[1])})]},e))})};var y=r.memo(j,function(n,e){return String(n.node.text)===String(e.node.text)&&n.node.width===e.node.width}),N=t(5434),v=t(79120),E=t(59854);function Z(){let n=(0,o.Z)(["\n  pointer-events: all;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: ",";\n  background: rgba(0, 0, 0, 0.1);\n  height: 100%;\n  width: 40px;\n  border-left: 1px solid ",";\n\n  &:hover {\n    background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);\n  }\n"]);return Z=function(){return n},n}function k(){let n=(0,o.Z)(["\n  display: flex;\n  justify-content: ",";\n  align-items: center;\n  height: 100%;\n  width: 100%;\n"]);return k=function(){return n},n}function S(){let n=(0,o.Z)(["\n  padding: 5px;\n"]);return S=function(){return n},n}function _(){let n=(0,o.Z)(["\n  border-radius: 2px;\n  object-fit: contain;\n  background: ",";\n"]);return _=function(){return n},n}let R=u.ZP.button.withConfig({componentId:"sc-b46e7aa7-0"})(Z(),n=>{let{theme:e}=n;return e.TEXT_NORMAL},n=>{let{theme:e}=n;return e.BACKGROUND_MODIFIER_ACCENT}),A=u.ZP.span.withConfig({componentId:"sc-b46e7aa7-1"})(k(),n=>{let{hasCollapse:e}=n;return e?"space-between":"center"}),L=u.ZP.div.withConfig({componentId:"sc-b46e7aa7-2"})(S()),P=u.ZP.img.withConfig({componentId:"sc-b46e7aa7-3"})(_(),n=>{let{theme:e}=n;return e.BACKGROUND_MODIFIER_ACCENT}),T=n=>{let{node:e,x:t,y:o,hasCollapse:l=!1}=n,{id:a,text:s,width:c,height:d,data:u}=e,h=r.useRef(null),g=(0,E.Z)(n=>n.hideCollapse),p=(0,E.Z)(n=>n.childrenCount),f=(0,E.Z)(n=>n.imagePreview),x=(0,v.Z)(n=>n.expandNodes),b=(0,v.Z)(n=>n.collapseNodes),j=(0,v.Z)(n=>n.collapsedParents.includes(a)),y=!Array.isArray(s)&&/(https?:\/\/.*\.(?:png|jpg|gif))/i.test(s)&&f,Z=n=>{n.stopPropagation(),j?x(a):b(a)};return(0,i.jsx)(w,{width:c,height:d,x:0,y:0,hasCollapse:u.parent&&l,ref:h,children:y?(0,i.jsx)(L,{children:(0,i.jsx)(P,{src:s,width:"70",height:"70"})}):(0,i.jsxs)(A,{hasCollapse:u.parent&&g,"data-x":t,"data-y":o,"data-key":JSON.stringify(s),children:[(0,i.jsx)(C,{parent:u.parent,children:(0,i.jsx)(m,{children:JSON.stringify(s).replaceAll('"',"")})}),u.parent&&u.childrenCount>0&&p&&(0,i.jsxs)(O,{children:["(",u.childrenCount,")"]}),u.parent&&l&&g&&(0,i.jsx)(R,{onClick:Z,children:j?(0,i.jsx)(N.Qw4,{size:18}):(0,i.jsx)(N.$l_,{size:18})})]})})};var D=r.memo(T,function(n,e){return n.node.text===e.node.text&&n.node.width===e.node.width});let I={width:40,height:40,rx:50,ry:50},z=n=>{let{text:e,data:t}=n.properties;return(0,i.jsx)(a.Node,{...n,...t.isEmpty&&I,label:(0,i.jsx)(r.Fragment,{}),children:n=>{let{node:r,x:o,y:l}=n;return Array.isArray(e)?(0,i.jsx)(y,{node:r,x:o,y:l}):(0,i.jsx)(D,{node:r,hasCollapse:t.childrenCount>0,x:o,y:l})}})};var U=t(8754),J=t(35632);function G(){let n=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n\n  img {\n    filter: drop-shadow(2px 4px 6px black);\n  }\n"]);return G=function(){return n},n}function B(){let n=(0,o.Z)(["\n  color: ",";\n"]);return B=function(){return n},n}function M(){let n=(0,o.Z)(["\n  width: 60%;\n  text-align: center;\n  color: ",";\n"]);return M=function(){return n},n}let q=u.ZP.div.withConfig({componentId:"sc-fef9e889-0"})(G()),F=u.ZP.h2.withConfig({componentId:"sc-fef9e889-1"})(B(),n=>{let{theme:e}=n;return e.TEXT_DANGER}),K=u.ZP.p.withConfig({componentId:"sc-fef9e889-2"})(M(),n=>{let{theme:e}=n;return e.TEXT_NORMAL}),X=()=>(0,i.jsxs)(q,{children:[(0,i.jsx)("img",{src:"/assets/undraw_qa_engineers_dg-5-p.svg",width:"200",height:"200",alt:"oops"}),(0,i.jsx)(F,{children:"JSON Crack is unable to handle this file!"}),(0,i.jsx)(K,{children:"We apologize for the problem you encountered. We are doing our best as an Open Source community to improve our service. Unfortunately, JSON Crack is currently unable to handle such a large file."})]});var Y=t(51639);function V(){let n=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n\n  img {\n    filter: drop-shadow(2px 4px 6px black);\n  }\n"]);return V=function(){return n},n}function W(){let n=(0,o.Z)(["\n  font-size: 48px;\n  margin-bottom: 0;\n  background: linear-gradient(to right, #cf0642 0%, #9344cf 100%);\n  -webkit-text-fill-color: transparent;\n  -webkit-text-stroke: 3px black;\n  -webkit-background-clip: text;\n"]);return W=function(){return n},n}function $(){let n=(0,o.Z)(["\n  width: 60%;\n  font-weight: 600;\n  font-size: 20px;\n  text-align: center;\n  color: ",";\n"]);return $=function(){return n},n}let H=u.ZP.div.withConfig({componentId:"sc-e7c9a000-0"})(V()),Q=u.ZP.h2.withConfig({componentId:"sc-e7c9a000-1"})(W()),nn=u.ZP.p.withConfig({componentId:"sc-e7c9a000-2"})($(),n=>{let{theme:e}=n;return e.TEXT_NORMAL}),ne=()=>(0,i.jsxs)(H,{children:[(0,i.jsx)(Q,{children:"PLAY BIG!"}),(0,i.jsx)(nn,{children:"Upgrade JSON Crack to premium and explore & unlock full potantial of your data!"}),(0,i.jsx)(Y.z,{status:"TERTIARY",href:"https://www.patreon.com/jsoncrack",link:!0,target:"_blank",children:"DO IT!"}),(0,i.jsx)("img",{src:"/assets/undraw_to_the_stars_re_wq2x.svg",width:"300",height:"300",alt:"oops"})]});function nt(){let n=(0,o.Z)(["\n  position: absolute;\n  width: 100%;\n  height: ",";\n  background: ",";\n  background-image: ",";\n  background-size: 15px 15px;\n\n  :active {\n    cursor: move;\n  }\n\n  .dragging,\n  .dragging button {\n    pointer-events: none;\n  }\n\n  rect {\n    fill: ",";\n  }\n\n  @media only screen and (max-width: 320px) {\n    height: 100vh;\n  }\n"]);return nt=function(){return n},n}let ni=u.ZP.div.withConfig({componentId:"sc-536f8e65-0"})(nt(),n=>{let{widget:e}=n;return e?"calc(100vh - 36px)":"calc(100vh - 65px)"},n=>{let{theme:e}=n;return e.BACKGROUND_SECONDARY},n=>{let{theme:e}=n;return"radial-gradient(#505050 0.5px, ".concat(e.BACKGROUND_SECONDARY," 0.5px)")},n=>{let{theme:e}=n;return e.BACKGROUND_NODE}),nr=n=>{let{isWidget:e=!1,openModal:t,setSelectedNode:o}=n,s=(0,U.Z)(n=>n.isPremium),c=(0,v.Z)(n=>n.setLoading),d=(0,v.Z)(n=>n.setZoomPanPinch),u=(0,v.Z)(n=>n.centerView),h=(0,v.Z)(n=>n.loading),g=(0,v.Z)(n=>n.direction),p=(0,v.Z)(n=>n.nodes),f=(0,v.Z)(n=>n.edges),[x,m]=r.useState({width:1,height:1}),w=r.useCallback((n,e)=>{o&&o(e.text),t&&t()},[t,o]),C=r.useCallback(n=>{d(n)},[d]),b=r.useCallback(n=>{if(n.width&&n.height){let t=n.width*n.height,i=Math.abs(100*t/(x.width*x.height)-100);m({width:n.width+400,height:n.height+400}),requestAnimationFrame(()=>{setTimeout(()=>{c(!1),setTimeout(()=>{(i>70||e)&&u()})})})}},[u,e,c,x.height,x.width]),O=r.useCallback(()=>{let n=document.querySelector("input:focus");n&&n.blur()},[]);return p.length>8e3?(0,i.jsx)(X,{}):!(p.length>1e3)||e||s()?(0,i.jsxs)(ni,{onContextMenu:n=>n.preventDefault(),widget:e,children:[(0,i.jsx)(J.g,{message:"Painting graph...",loading:h}),(0,i.jsx)(l.d$,{maxScale:2,minScale:.05,initialScale:.4,wheel:{step:.08},zoomAnimation:{animationType:"linear"},doubleClick:{disabled:!0},onInit:C,onPanning:n=>{var e;return null===(e=n.instance.wrapperComponent)||void 0===e?void 0:e.classList.add("dragging")},onPanningStop:n=>{var e;return null===(e=n.instance.wrapperComponent)||void 0===e?void 0:e.classList.remove("dragging")},children:(0,i.jsx)(l.Uv,{wrapperStyle:{width:"100%",height:"100%",overflow:"hidden",display:h?"none":"block"},children:(0,i.jsx)(a.Canvas,{className:"jsoncrack-canvas",nodes:p,edges:f,maxWidth:x.width,maxHeight:x.height,direction:g,onLayoutChange:b,onCanvasClick:O,zoomable:!1,animated:!1,readonly:!0,dragEdge:null,dragNode:null,fit:!0,node:n=>(0,i.jsx)(z,{...n,onClick:w}),edge:n=>(0,i.jsx)(a.Edge,{...n,containerClassName:"edge-".concat(n.id)})},g)})})]}):(0,i.jsx)(ne,{})},no=r.memo(nr);var nl=t(5152),na=t.n(nl),ns=t(86501),nc=t(86893),nd=t(84283),nu=t(33887);let nh=na()(()=>t.e(720).then(t.bind(t,99720)).then(n=>n),{loadableGenerated:{webpack:()=>[99720]},ssr:!1}),ng=n=>{let{selectedNode:e,visible:t,closeModal:r}=n,o=(0,E.Z)(n=>n.lightmode),l=Array.isArray(e)?Object.fromEntries(e):e,a=()=>{var n;ns.ZP.success("Content copied to clipboard!"),null===(n=navigator.clipboard)||void 0===n||n.writeText(JSON.stringify(l)),r()};return(0,i.jsxs)(nu.u,{visible:t,setVisible:r,size:"lg",children:[(0,i.jsx)(nu.u.Header,{children:"Node Content"}),(0,i.jsx)(nu.u.Content,{children:(0,i.jsx)(nh,{style:o?nd.vs:nd.YC,customStyle:{borderRadius:"4px",fontSize:"14px",margin:"0"},language:"json",showLineNumbers:!0,children:JSON.stringify(l,(n,e)=>"string"==typeof e?e.replaceAll('"',""):e,2)})}),(0,i.jsx)(nu.u.Controls,{setVisible:r,children:(0,i.jsxs)(Y.z,{status:"SECONDARY",onClick:a,children:[(0,i.jsx)(nc.C3L,{size:18})," Clipboard"]})})]})},np=n=>{let{isWidget:e=!1}=n,[t,o]=r.useState(!1),[l,a]=r.useState([]),s=(0,v.Z)(n=>n.collapsedNodes),c=(0,v.Z)(n=>n.collapsedEdges),d=r.useCallback(()=>o(!0),[]);return r.useEffect(()=>{let n=s.map(n=>'[id$="node-'.concat(n,'"]')),e=c.map(n=>'[class$="edge-'.concat(n,'"]')),t=document.querySelectorAll(".hide");if(t.forEach(n=>n.classList.remove("hide")),n.length){let e=document.querySelectorAll(n.join(","));e.forEach(n=>n.classList.add("hide"))}if(e.length){let n=document.querySelectorAll(e.join(","));n.forEach(n=>n.classList.add("hide"))}},[s,c]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(no,{openModal:d,setSelectedNode:a,isWidget:e}),(0,i.jsx)(ng,{selectedNode:l,visible:t,closeModal:()=>o(!1)})]})}}}]);