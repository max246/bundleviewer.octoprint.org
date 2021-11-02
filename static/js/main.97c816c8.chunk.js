(this["webpackJsonpbundleviewer.octoprint.org"]=this["webpackJsonpbundleviewer.octoprint.org"]||[]).push([[0],{213:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(37),c=t.n(o),i=t(11),l=t(3),s=t(271),d=t(276),u=t(281),j=t(150),p=t(277),b=t(304),h=t(278),f=t(290),g=t(291),x=t(292),O=t(287),m=t(285),v=t(148),w=t.n(v),y=t(284),k=t(303),C=t(289),N=t(288),S=t(95),R=t(279),E=t(127),I=t.n(E),z=t(126),P=t.n(z),L=t(1);function A(e){var n=Object(r.useState)(e.darkMode),t=Object(i.a)(n,2),a=t[0],o=t[1];return Object(L.jsx)(R.a,{title:"Toggle dark mode",children:Object(L.jsx)(O.a,{onClick:function(){e.onChange(!a),o(!a)},color:"inherit",size:"large",children:a?Object(L.jsx)(P.a,{}):Object(L.jsx)(I.a,{})})})}var B=t(266),U=t(26),T=t(129),_=t.n(T),D=t(88),G=t.n(D),F=Object(u.a)((function(e){var n,t;return{grow:{flexGrow:1},url:(n={position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(B.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(B.a)(e.palette.common.white,.25)}},Object(l.a)(n,e.breakpoints.up("md"),{marginRight:e.spacing(2),marginLeft:e.spacing(2)}),Object(l.a)(n,"flexGrow",1),n),urlIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:(t={padding:e.spacing(1,1,1,1)},Object(l.a)(t,e.breakpoints.up("md"),{paddingLeft:"calc(1em + ".concat(e.spacing(4),")")}),Object(l.a)(t,"transition",e.transitions.create("width")),Object(l.a)(t,"width","100%"),t)}}));function W(e){var n=F(),t=Object(r.useState)(e.url),a=Object(i.a)(t,2),o=a[0],c=a[1],l=Object(r.useState)(e.filename?"upload":"url"),s=Object(i.a)(l,1)[0];return Object(L.jsxs)("div",{className:n.url,children:[Object(L.jsx)(m.a,{lgDown:!0,children:Object(L.jsx)("div",{className:n.urlIcon,children:e.filename?Object(L.jsx)(G.a,{}):Object(L.jsx)(_.a,{})})}),Object(L.jsx)(U.c,{placeholder:"URL...",classes:{root:n.inputRoot,input:n.inputInput},onChange:function(e){"url"===s&&c(e.target.value)},onKeyDown:function(n){"url"===s&&"Enter"===n.key&&e.handleUrlChange(o)},defaultValue:"upload"===s?e.filename:e.url,inputProps:{readOnly:"upload"===s}})]})}var M=t(298),V=t(280),H=t(294),q=t(297),Q=t(296),J=t(274),Z=t(130),$=t.n(Z);function K(e){var n=Object(S.b)().enqueueSnackbar,t=Object(r.useState)(!1),a=Object(i.a)(t,2),o=a[0],c=a[1],l=window.location.origin+window.location.pathname+"?url="+encodeURIComponent(e.url),s=function(){c(!1)};return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(R.a,{title:"Get shareable link",children:Object(L.jsx)(O.a,{onClick:function(){c(!0)},color:"inherit",size:"large",children:Object(L.jsx)($.a,{})})}),Object(L.jsxs)(H.a,{open:o,onClose:s,fullWidth:!0,children:[Object(L.jsx)(J.a,{children:"Shareable link"}),Object(L.jsx)(Q.a,{children:Object(L.jsx)(V.a,{value:l,InputProps:{readOnly:!0},onFocus:function(e){e.target.select()},fullWidth:!0})}),Object(L.jsxs)(q.a,{children:[navigator.share?Object(L.jsx)(M.a,{onClick:function(){navigator.share&&(navigator.share({title:document.title,url:l}),s())},children:"Share"}):null,navigator.clipboard?Object(L.jsx)(M.a,{onClick:function(){navigator.clipboard&&(navigator.clipboard.writeText(l),n("URL copied to clipboard!"),s())},children:"Copy"}):null,Object(L.jsx)(M.a,{onClick:s,children:"Close"})]})]})]})}var Y=t(91),X=t.n(Y);function ee(e){var n=Object(r.useState)(!1),t=Object(i.a)(n,2),a=t[0],o=t[1],c=function(){o(!1)};return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(R.a,{title:"About Bundle Viewer",children:Object(L.jsx)(O.a,{onClick:function(){o(!0)},color:"inherit",size:"large",children:Object(L.jsx)(X.a,{})})}),Object(L.jsxs)(H.a,{open:a,onClose:c,fullWidth:!0,children:[Object(L.jsx)(J.a,{children:"About Bundle Viewer"}),Object(L.jsxs)(Q.a,{children:[Object(L.jsxs)("p",{children:["Bundle Viewer is a viewer for ",Object(L.jsx)(N.a,{href:"https://octoprint.org",target:"_blank",rel:"noreferrer noopener",color:"inherit",underline:"always",children:"OctoPrint"})," system info bundles and log files."]}),Object(L.jsxs)("p",{children:["Its source code can be found on ",Object(L.jsx)(N.a,{href:"https://github.com/OctoPrint/bundleviewer.octoprint.org",target:"_blank",rel:"noreferrer noopener",color:"inherit",underline:"always",children:"github.com/OctoPrint/bundleviewer.octoprint.org"}),"."]}),Object(L.jsx)("hr",{}),Object(L.jsx)("p",{children:'There\'s an accompanying web extension for Firefox and Chrome to add an "Open in Bundle Viewer" context menu to links in the browser on associated websites:'}),Object(L.jsxs)("p",{style:{textAlign:"center"},children:[Object(L.jsx)(N.a,{href:"https://addons.mozilla.org/en-GB/firefox/addon/open-in-bundle-viewer/",target:"_blank",rel:"noopener noreferrer",color:"inherit",underline:"always",children:Object(L.jsx)("img",{src:"https://img.shields.io/amo/v/open-in-bundle-viewer?label=Firefox%20add-on&logo=firefox",alt:"Firefox add-on"})})," ",Object(L.jsx)(N.a,{href:"https://chrome.google.com/webstore/detail/open-in-bundle-viewer/pjjocccheogfceldegkfnbfmobmblhpp",target:"_blank",rel:"noopener noreferrer",color:"inherit",underline:"always",children:Object(L.jsx)("img",{src:"https://img.shields.io/chrome-web-store/v/pjjocccheogfceldegkfnbfmobmblhpp?label=Chrome%20extension&logo=google%20chrome",alt:"Chrome extension"})})]}),Object(L.jsxs)("p",{children:["Its source code can be found on ",Object(L.jsx)(N.a,{href:"https://github.com/OctoPrint/Open-in-Bundle-Viewer",target:"_blank",rel:"noreferrer noopener",color:"inherit",underline:"always",children:"github.com/OctoPrint/Open-in-Bundle-Viewer"}),"."]}),Object(L.jsxs)("p",{children:["There's also an accompanying ",Object(L.jsx)(N.a,{href:"https://community.octoprint.org/t/open-in-bundle-viewer-browser-extension/30275",target:"_blank",rel:"noreferrer noopener",color:"inherit",underline:"always",children:"forum thread"}),"."]})]}),Object(L.jsx)(q.a,{children:Object(L.jsx)(M.a,{onClick:c,children:"Close"})})]})]})}var ne=t(131),te=t.n(ne);function re(e){var n=Object(r.useState)(!1),t=Object(i.a)(n,2),a=t[0],o=t[1],c=function(){o(!1)};return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(R.a,{title:"Debug Bundle Viewer",children:Object(L.jsx)(O.a,{onClick:function(){o(!0)},color:"inherit",size:"large",children:Object(L.jsx)(te.a,{})})}),Object(L.jsxs)(H.a,{open:a,onClose:c,fullWidth:!0,children:[Object(L.jsx)(J.a,{children:"Debug info"}),Object(L.jsx)(Q.a,{children:Object(L.jsxs)("dl",{children:[Object(L.jsx)("dt",{children:"shared.text"}),Object(L.jsx)("dd",{children:e.shared.text}),Object(L.jsx)("dt",{children:"shared.url"}),Object(L.jsx)("dd",{children:e.shared.url}),Object(L.jsx)("dt",{children:"shared.title"}),Object(L.jsx)("dd",{children:e.shared.title}),Object(L.jsx)("dt",{children:"url"}),Object(L.jsx)("dd",{children:e.url})]})}),Object(L.jsx)(q.a,{children:Object(L.jsx)(M.a,{onClick:c,children:"Close"})})]})]})}var ae=t(52),oe=t(300),ce=t(301),ie=t(302),le=t(60),se=t.n(le),de=t(222),ue=t(132),je=t.n(ue),pe=t(133),be=t.n(pe),he=t(134),fe=t.n(he),ge=t(299),xe=Object(u.a)((function(e){var n;return{grow:{flexGrow:1},query:(n={position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(B.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(B.a)(e.palette.common.white,.25)}},Object(l.a)(n,e.breakpoints.up("md"),{marginRight:e.spacing(2),marginLeft:e.spacing(2)}),Object(l.a)(n,"flexGrow",1),Object(l.a)(n,"marginTop",e.spacing(2)),Object(l.a)(n,"marginBottom",e.spacing(2)),n),inputRoot:{color:"inherit",width:"100%"},inputInput:{padding:e.spacing(1),transition:e.transitions.create("width"),width:"100%"},result:{color:e.palette.secondary,fontSize:e.typography.pxToRem(12)}}}));function Oe(e){var n=e.pos,t=e.count,o=xe(),c=Object(r.useState)(e.query),l=Object(i.a)(c,2),s=l[0],d=l[1],u=a.a.createRef(),j=function(){e.handlePerformQuery&&e.handlePerformQuery(s)},p=function(){d(""),u.current.value="",e.onCancel&&e.onCancel()},b=function(){return Object(L.jsx)(ge.a,{position:"start",children:Object(L.jsx)(O.a,{onClick:j,disabled:""===s,size:"small",children:Object(L.jsx)(je.a,{})})})},h=function(){return Object(L.jsxs)(ge.a,{position:"end",children:[t?Object(L.jsxs)("span",{className:o.result,children:[n," / ",t]}):null,Object(L.jsx)(O.a,{onClick:e.onPrev,disabled:0===t||n<=1,size:"small",children:Object(L.jsx)(be.a,{})}),Object(L.jsx)(O.a,{onClick:e.onNext,disabled:0===t||n>=t,size:"small",children:Object(L.jsx)(se.a,{})}),Object(L.jsx)(O.a,{onClick:p,disabled:""===s,size:"small",children:Object(L.jsx)(fe.a,{})})]})};return Object(L.jsx)("div",{className:o.query,children:Object(L.jsx)(U.c,{placeholder:"Search...",classes:{root:o.inputRoot,input:o.inputInput},onChange:function(n){d(n.target.value),e.handleQueryChange&&e.handleQueryChange(s)},onKeyDown:function(e){"Enter"===e.key&&j()},defaultValue:e.query,startAdornment:Object(L.jsx)(b,{}),endAdornment:Object(L.jsx)(h,{}),inputRef:u})})}var me=t(151);function ve(e){var n=e.lines,t=n.length,o=e.query,c=o.toLowerCase(),i=e.scrollTo,s=a.a.createRef();Object(r.useEffect)((function(){var e;i>-1&&(null===(e=s.current)||void 0===e||e.scrollToItem(i,"center"))}),[s,i]);var d,j=Object(u.a)((function(e){return{log:{flexGrow:1},pre:Object(l.a)({margin:0,"font-family":"'JetBrains Mono', 'Droid Sans Mono', monospace"},e.breakpoints.down("lg"),{fontSize:e.typography.pxToRem(12)}),linewrap:{'&[data-matched="true"]':{"background-color":"rgba(255, 255, 0, .2)"}},line:{paddingLeft:e.spacing(1),"&::before":{content:"attr(data-linenumber)",display:"inline-block",width:"".concat(t.toString().length,"ch"),"text-align":"right","margin-right":"1em",color:e.palette.text.disabled},'&[data-loglevel="DEBUG"]':{color:e.palette.text.secondary},'&[data-loglevel="WARNING"]':{color:e.palette.warning.main},'&[data-loglevel="ERROR"]':{color:e.palette.error.main},'&[data-stream="stdin"]':{color:e.palette.info.main},'&[data-stream="stderr"]':{color:e.palette.error.main},'&[data-updateresult="FAILED"]':{color:e.palette.error.main}}}}))(),p=function(e){switch(e.charAt(24)){case" ":return"stdin";case">":return"stdout";case"!":return"stderr";default:return"plain"}},b=function(e){return o&&e&&e.toLowerCase().includes(c)};switch(e.language){case"log":d=function(e){var t,r=e.index,a=e.style;return Object(L.jsx)("span",{"data-matched":b(n[r]),style:a,className:j.linewrap,children:Object(L.jsx)("span",{"data-linenumber":r+1,"data-loglevel":(t=n[r],t.split(" ")[5]),className:j.line,children:n[r]})})};break;case"cli":d=function(e){var t=e.index,r=e.style;return Object(L.jsx)("span",{"data-matched":b(n[t]),style:r,className:j.linewrap,children:Object(L.jsx)("span",{"data-linenumber":t+1,"data-stream":p(n[t]),className:j.line,children:n[t]})})};break;case"updatelog":d=function(e){var t,r=e.index,a=e.style;return Object(L.jsx)("span",{"data-matched":b(n[r]),style:a,className:j.linewrap,children:Object(L.jsx)("span",{"data-linenumber":r+1,"data-updateresult":(t=n[r],t.includes("- FAILED -")?"FAILED":t.includes("- SUCCESS -")?"SUCCESS":"PLAIN"),className:j.line,children:n[r]})})};break;default:d=function(e){var t=e.index,r=e.style;return Object(L.jsx)("span",{"data-matched":b(n[t]),style:r,className:j.linewrap,children:Object(L.jsx)("span",{"data-linenumber":t+1,className:j.line,children:n[t]})})}}return Object(L.jsx)("code",{className:j.log,children:Object(L.jsx)("pre",{className:j.pre,children:Object(L.jsx)(me.a,{height:500,itemCount:t,itemSize:20,style:{overflow:"scroll"},ref:s,children:d})})})}var we=t(135),ye=t.n(we),ke=t(92),Ce=t.n(ke),Ne=t(116),Se=t.n(Ne),Re=[{language:"cli",patterns:[/^.*_console.*\.log$/]},{language:"updatelog",patterns:[/^.*_update\.log$/]},{language:"log",patterns:[/^.*\.log$/]}],Ee=function(e){var n,t=Object(ae.a)(Re);try{for(t.s();!(n=t.n()).done;){var r,a=n.value,o=a.language,c=a.patterns,i=Object(ae.a)(c);try{for(i.s();!(r=i.n()).done;){var l=r.value;if(e.match(l))return console.log("Match! ".concat(l," vs ").concat(e)),o}}catch(s){i.e(s)}finally{i.f()}}}catch(s){t.e(s)}finally{t.f()}return"plain"};function Ie(e){var n=e.log,t=e.content,a=t.trim().split("\n").map((function(e){return e.trimEnd()+"\n"})),o=a.length,c=Object(r.useState)(""),s=Object(i.a)(c,2),d=s[0],j=s[1],p=Object(r.useState)(0),b=Object(i.a)(p,2),h=b[0],f=b[1],g=Object(r.useState)(0),x=Object(i.a)(g,2),O=x[0],m=x[1],v=Object(r.useState)([]),w=Object(i.a)(v,2),y=w[0],k=w[1],C=Object(u.a)((function(e){return{background:{},accordionbar:Object(l.a)({display:"flex",flexGrow:1,alignItems:"center"},e.breakpoints.down("lg"),{flexWrap:"wrap"}),accordiondetails:{display:"flex",flexGrow:1,flexDirection:"column"},grow:{flexGrow:1},icon:{padding:e.spacing(0,1),fontSize:"1.5rem"},secondaryHeading:Object(l.a)({fontSize:e.typography.pxToRem(12),color:e.palette.text.secondary,padding:e.spacing(0,1),textAlign:"right"},e.breakpoints.down("lg"),{textAlign:"left",padding:e.spacing(0,0)}),title:Object(l.a)({flexGrow:1,alignItems:"center"},e.breakpoints.down("lg"),{flexBasis:"100%"}),info:Object(l.a)({},e.breakpoints.down("lg"),{flexBasis:"100%"})}}))(),N=function(){if(y.length){var e=O<y.length-1?O+1:0;f(y[e]),m(e)}},S="serial.log"===n&&1===o&&a[0].includes("serial.log is currently not enabled"),R=t.includes("!!! UNDERVOLTAGE REPORTED !!!")||t.includes("!!! FREQUENCY CAPPING DUE TO OVERHEATING REPORTED !!!");return Object(L.jsxs)(oe.a,{defaultExpanded:e.expanded,children:[Object(L.jsx)(ce.a,{expandIcon:Object(L.jsx)(se.a,{}),"aria-controls":"panel-log-"+e.index+"-content",id:"panel-log-"+e.index+"-header",children:Object(L.jsxs)("div",{className:C.accordionbar,children:[Object(L.jsx)("div",{className:C.title,children:Object(L.jsxs)(de.a,{className:C.heading,style:{display:"flex",alignItems:"center"},children:[n,R?Object(L.jsx)(Ce.a,{className:C.icon,size:"1.5em"}):null,S?Object(L.jsx)(ye.a,{className:C.icon,size:"1.5em"}):null]})}),Object(L.jsxs)("div",{className:C.info,children:[Object(L.jsx)(de.a,{className:C.secondaryHeading,children:Se()(t.length)+" "+(1===t.length?"char":"chars")}),Object(L.jsx)(de.a,{className:C.secondaryHeading,children:Se()(o)+" "+(1===o?"line":"lines")})]})]})}),Object(L.jsxs)(ie.a,{className:C.accordiondetails,children:[Object(L.jsx)(Oe,{className:C.grow,pos:O+1,count:y.length,onNext:N,onPrev:function(){if(y.length){var e=O>0?O-1:y.length-1;f(y[e]),m(e)}},onCancel:function(){k([]),m(0),j("")},handlePerformQuery:function(e){if(e)if(console.log("Starting query:",e),e!==d){console.log("... calculate matches");var n=e.toLowerCase(),t=a.reduce((function(e,t,r){return t.toLowerCase().includes(n)&&e.push(r),e}),[]);t.length&&f(t[0]),k(t),m(0),j(e),console.log("Indices:",t,", cursor:",0)}else N()}}),Object(L.jsx)(ve,{lines:a,query:d,scrollTo:h,language:e.language||Ee(n)})]})]},n)}var ze=t(93),Pe=t(136),Le=t.n(Pe),Ae=t(137),Be=t.n(Ae),Ue=Object(u.a)((function(e){return{accordionbar:Object(l.a)({display:"flex",flexGrow:1,alignItems:"center"},e.breakpoints.down("lg"),{flexWrap:"wrap"}),grow:{flexGrow:1},icon:{padding:e.spacing(0,1),fontSize:"1.5rem"},secondaryHeading:Object(l.a)({fontSize:e.typography.pxToRem(12),color:e.palette.text.secondary,padding:e.spacing(0,1),textAlign:"right"},e.breakpoints.down("lg"),{textAlign:"left",padding:e.spacing(0,0)}),title:Object(l.a)({flexGrow:1,alignItems:"center"},e.breakpoints.down("lg"),{flexBasis:"100%"}),info:Object(l.a)({},e.breakpoints.down("lg"),{flexBasis:"100%"})}}));function Te(e){var n,t=e.info.split("\n").filter((function(e){return""!==e.trim()})).map((function(e){var n=e.split(":"),t=Object(ze.a)(n);return{key:t[0],value:t.slice(1).join(":")}})),r={},a=Object(ae.a)(t);try{for(a.s();!(n=a.n()).done;){var o=n.value;r[o.key]=o.value}}catch(j){a.e(j)}finally{a.f()}var c=Ue(),i=function(e,n){var t=r[n];return t?Object(L.jsx)(de.a,{className:c.secondaryHeading,children:e+" "+t}):null},l=function(e,n){return r[e]&&n(r[e])},s=l("octoprint.safe_mode",(function(e){return"true"===e})),d=l("env.plugins.pi_support.throttle_state",(function(e){return"0x0"!==e.trim()})),u=l("printer.firmware",(function(e){return e.includes("Marlin bugfix-")}));return Object(L.jsxs)(oe.a,{defaultExpanded:!0,children:[Object(L.jsx)(ce.a,{expandIcon:Object(L.jsx)(se.a,{}),"aria-controls":"panel-sysinfo-content",id:"panel-sysinfo-header",children:Object(L.jsxs)("div",{className:c.accordionbar,children:[Object(L.jsx)("div",{className:c.title,children:Object(L.jsxs)(de.a,{className:c.heading,style:{display:"flex",alignItems:"center"},children:["System Information",s?Object(L.jsx)(Be.a,{className:c.icon,size:"1.5em"}):null,d?Object(L.jsx)(Ce.a,{className:c.icon,size:"1.5em"}):null,u?Object(L.jsx)(Le.a,{className:c.icon,size:"1.5em"}):null]})}),Object(L.jsxs)("div",{className:c.info,children:[i("OctoPrint","octoprint.version"),i("Python","env.python.version"),i("OctoPi","env.plugins.pi_support.octopi_version"),i("Firmware","printer.firmware")]})]})}),Object(L.jsx)(ie.a,{children:Object(L.jsx)("div",{className:c.list,children:t.map((function(e,n){return Object(L.jsxs)("div",{children:[Object(L.jsx)("strong",{children:e.key}),": ",e.value]},e.key)}))})})]})}function _e(e){return Object(L.jsxs)(L.Fragment,{children:[e.bundle.systeminfo?Object(L.jsx)(Te,{info:e.bundle.systeminfo}):null,e.bundle.logs.map((function(n,t){return Object(L.jsx)(Ie,{expanded:!e.bundle.systeminfo&&0===t,log:n.log,content:n.content,index:t},"log-"+t)}))]})}var De=t(149);function Ge(e){console.log("Rendering NothingChanged...");return Object(L.jsx)("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column"},children:Object(L.jsx)(De.a,{style:{"flex-basis":"100%"},dropzoneText:"Enter an URL above and press Enter, or drag and drop a file here or click to upload one",onChange:function(n){console.log("Entered NothingLoaded.handleChange..."),n.length>0&&(console.log("File:",n[0]),e.onUpload(n[0])),console.log("Exiting NothingLoaded.handleChange...")},filesLimit:1,acceptedFiles:[".zip",".log",".txt"],maxFileSize:3e7,showPreviewsInDropzone:!1,showAlerts:!1})})}var Fe=t(22),We=t.n(Fe),Me=t(40),Ve=t(145),He=t.n(Ve);function qe(){return(qe=Object(Me.a)(We.a.mark((function e(n){var t,r,a,o,c;return We.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n,{mode:"cors"});case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Could not load file from ".concat(n,": ").concat(t.status));case 5:return e.next=7,t.blob();case 7:return r=e.sent,o=t.headers.get("content-disposition"),a=o?(null===(c=He.a.parse(o).parameters)||void 0===c?void 0:c.filename)||"unknown":n.substring(n.lastIndexOf("/")+1),r.name=a,e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Qe={loadRemote:function(e){return qe.apply(this,arguments)}},Je=Qe,Ze=t(146),$e=t.n(Ze);function Ke(){return(Ke=Object(Me.a)(We.a.mark((function e(n){var t,r;return We.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Je.loadRemote(n);case 2:return t=e.sent,r=t.blob,e.next=6,Ye(r);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ye(e){return Xe.apply(this,arguments)}function Xe(){return(Xe=Object(Me.a)(We.a.mark((function e(n){return We.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$e.a.loadAsync(n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function en(){return(en=Object(Me.a)(We.a.mark((function e(n,t){return We.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.file(t);case 2:return e.t0=e.sent,e.abrupt("return",null!==e.t0);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function nn(){return(nn=Object(Me.a)(We.a.mark((function e(n,t,r){return We.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=r||"blob",e.next=3,n.file(t).async(r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var tn={loadZip:Ye,loadRemoteZip:function(e){return Ke.apply(this,arguments)},containsFile:function(e,n){return en.apply(this,arguments)},getFileContents:function(e,n,t){return nn.apply(this,arguments)}},rn=tn;function an(){return(an=Object(Me.a)(We.a.mark((function e(n){var t,r,a,o,c,i,l,s,d,u,j,p,b;return We.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=["octoprint.log","serial.log","terminal.txt","plugin_softwareupdate_console.log","plugin_pluginmanager_console.log"],r=!1,e.prev=2,e.next=5,rn.getFileContents(n,"systeminfo.txt","string");case 5:r=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log("Could not read systeminfo.txt from zip, probably not a bundle...");case 11:a={},o=Object(ae.a)(n.file(/\.(log|txt|gcode|gco|g)$/i)),e.prev=13,o.s();case 15:if((c=o.n()).done){e.next=30;break}if(!(i=c.value).name.startsWith(".")&&!i.name.startsWith("__")&&"systeminfo.txt"!==i.name){e.next=19;break}return e.abrupt("continue",28);case 19:return e.prev=19,e.next=22,i.async("string");case 22:a[i.name]=e.sent,e.next=28;break;case 25:e.prev=25,e.t1=e.catch(19),console.log("Could not read {f.name} from zip...");case 28:e.next=15;break;case 30:e.next=35;break;case 32:e.prev=32,e.t2=e.catch(13),o.e(e.t2);case 35:return e.prev=35,o.f(),e.finish(35);case 38:for(l=[],s=0,d=t;s<d.length;s++)u=d[s],a[u]&&l.push({log:u,content:a[u]});j=Object(ae.a)(Object.keys(a).sort());try{for(j.s();!(p=j.n()).done;)b=p.value,t.includes(b)||l.push({log:b,content:a[b]})}catch(h){j.e(h)}finally{j.f()}return e.abrupt("return",{hasContent:!0,systeminfo:r,logs:l});case 43:case"end":return e.stop()}}),e,null,[[2,8],[13,32,35,38],[19,25]])})))).apply(this,arguments)}function on(){return(on=Object(Me.a)(We.a.mark((function e(n){return We.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=n.name||"unknown",e.next=3,n.text();case 3:return e.t1=e.sent,e.t2={log:e.t0,content:e.t1},e.t3=[e.t2],e.abrupt("return",{hasContent:!0,logs:e.t3});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var cn={loadBundle:function(e){return an.apply(this,arguments)},loadLog:function(e){return on.apply(this,arguments)},defaultBundle:{hasContent:!1,systeminfo:"",logs:[]}},ln=cn,sn=t(147),dn=t.n(sn),un=Object(u.a)((function(e){var n;return{root:{display:"flex",overflow:"auto"},grow:{flexGrow:1},appBar:{},toolbar:Object(l.a)({},e.breakpoints.down("lg"),{"justify-content":"flex-end","flex-wrap":"wrap"}),urlbar:Object(l.a)({flexGrow:1},e.breakpoints.down("lg"),{"flex-basis":"100%",order:99,paddingBottom:e.spacing(2)}),title:{"justify-item":"left"},offset:e.mixins.toolbar,content:Object(l.a)({flexGrow:1,overflow:"auto","padding-top":e.mixins.toolbar.minHeight},e.breakpoints.down("lg"),{"padding-top":2*e.mixins.toolbar.minHeight}),container:(n={minHeight:"100%",display:"flex",flexDirection:"column",paddingTop:e.spacing(4)},Object(l.a)(n,e.breakpoints.down("lg"),{paddingTop:0}),Object(l.a)(n,"paddingBottom",e.spacing(4)),n),footer:{textAlign:"center",padding:"1em"}}}));function jn(e){var n=function(e,n){var t=Object(r.useState)((function(){try{var t=window.localStorage.getItem(e);return t?JSON.parse(t):n}catch(N){return console.log(N),n}})),a=Object(i.a)(t,2),o=a[0],c=a[1];return[o,function(n){try{var t=n instanceof Function?n(o):n;c(t),window.localStorage.setItem(e,JSON.stringify(t))}catch(N){console.log(N)}}]}("enableDarkMode",Object(s.a)("(prefers-color-scheme: dark)",{noSsr:!0})),t=Object(i.a)(n,2),a=t[0],o=t[1],c=Object(r.useState)(e.url),l=Object(i.a)(c,2),u=l[0],h=l[1],f=Object(r.useState)(""),g=Object(i.a)(f,2),x=g[0],O=g[1],m=Object(r.useState)(ln.defaultBundle),v=Object(i.a)(m,2),w=v[0],y=v[1],k=Object(r.useState)(!1),C=Object(i.a)(k,2),N=C[0],R=C[1],E=Object(r.useState)(!1),I=Object(i.a)(E,2),z=I[0],P=I[1],A=a?"dark":"light",B=Object(j.a)(Object(d.a)({palette:{mode:A}}));Object(r.useEffect)((function(){U(e.url)}),[]);var U=function(e){if(e){R(!1),P(!0),h(e),F(e),O("");var n=function(e){return e.match(/^https:\/\/github\.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+\/files\//)?e.replace("https://github.com","https://bundleviewer.octoprint.org/bundles"):e.match(/^https:\/\/community\.octoprint\.org\/uploads\/short-url\//)?e.replace("https://community.octoprint.org/uploads/short-url","https://bundleviewer.octoprint.org/bundles/forum"):e}(e);Je.loadRemote(n).then(T).catch(D)}else G()},T=function(e){rn.loadZip(e).then(_).catch((function(n){var t;try{t=dn.a.parse(e.type).type}catch(r){t=""}""===t||t.startsWith("text/")?ln.loadLog(e).then((function(e){y(e),P(!1)})).catch(D):D(n)}))},_=function(e){ln.loadBundle(e).then((function(e){y(e),P(!1),console.log("Loading complete")})).catch(D)},D=function(e){console.log(e),R(!0)},G=function(){h(""),O(""),R(!1),P(!1),y(ln.defaultBundle),F()},F=function(e){var n=new URL(window.location);e?n.searchParams.set("url",e):n.searchParams.delete("url"),window.history.replaceState({},"",n)};return Object(L.jsx)(p.a,{injectFirst:!0,children:Object(L.jsx)(b.a,{theme:B,children:Object(L.jsx)(S.a,{children:Object(L.jsx)(pn,{bundle:w,url:u,filename:x,error:N,loading:z,shared:e.shared,handleUpload:function(e){R(!1),P(!0),O(e.name),h(""),T(e)},handleReset:G,handleUrlChange:U,darkMode:a,handleDarkModeToggle:function(){o(!a)}})})})})}function pn(e){var n=e.bundle,t=e.url,r=e.filename,a=e.error,o=e.loading,c=e.shared,i=e.handleUpload,l=e.handleReset,s=e.handleUrlChange,d=e.darkMode,u=e.handleDarkModeToggle,j=un(),p=function(){return a?(console.log("Rendering error screen"),Object(L.jsxs)(y.a,{severity:"error",children:[Object(L.jsx)(k.a,{children:"Error"}),"Could not load file. Make sure you are trying to load either an OctoPrint systeminfo bundle, a zip containing logs, or a plain text log file. Other files are not supported."]})):o?(console.log("Rendering loading screen"),Object(L.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(L.jsx)(C.a,{})})):n.hasContent?(console.log("Rendering bundle"),Object(L.jsx)(_e,{bundle:n})):(console.log("Rendering empty"),Object(L.jsx)(Ge,{onUpload:i}))},b=function(){return Object(L.jsx)(f.a,{className:j.appBar,children:Object(L.jsxs)(g.a,{className:j.toolbar,children:[Object(L.jsx)(O.a,{onClick:l,color:"inherit",size:"large",children:Object(L.jsx)(w.a,{})}),Object(L.jsx)(m.a,{mdUp:!0,children:Object(L.jsx)("div",{className:j.grow})}),Object(L.jsx)("div",{className:j.urlbar,children:Object(L.jsx)(W,{url:t,filename:r,handleUrlChange:s})}),t?Object(L.jsx)(K,{url:t}):null,Object(L.jsx)(ee,{}),Object(L.jsx)(re,{url:t,shared:c}),Object(L.jsx)(A,{darkMode:d,onChange:u})]})})};return Object(L.jsxs)("div",{className:j.root,style:{display:"flex",minHeight:"100vh",flexDirection:"column"},children:[Object(L.jsx)(h.a,{}),Object(L.jsx)(b,{}),Object(L.jsx)("main",{className:j.content,children:Object(L.jsx)(x.a,{maxWidth:"lg",className:j.container,children:Object(L.jsx)(p,{})})}),Object(L.jsxs)("footer",{className:j.footer,children:["\xa9 2021 ",Object(L.jsx)(N.a,{href:"https://octoprint.org",target:"_blank",rel:"noreferrer noopener",color:"inherit",underline:"always",children:"OctoPrint"})," \xb7 ",Object(L.jsx)(N.a,{href:"https://octoprint.org/imprint/",target:"_blank",rel:"noreferrer noopener",color:"inherit",underline:"always",children:"Imprint"})," \xb7 ",Object(L.jsx)(N.a,{href:"https://octoprint.org/privacy/",target:"_blank",rel:"noreferrer noopener",color:"inherit",underline:"always",children:"Privacy Policy"})]})]})}var bn=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function hn(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var fn=window.location.search,gn=new URLSearchParams(fn),xn={url:gn.get("url",""),text:gn.get("text",""),title:gn.get("title","")},On="";if(xn.url)On=xn.url;else if(xn.text){var mn=xn.text.match(/https?:\/\/[^\s]+/gi);mn&&(On=mn[0])}console.log("URL",On),c.a.render(Object(L.jsx)(jn,{url:On,shared:xn}),document.querySelector("#root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");bn?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):hn(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):hn(n,e)}))}}()}},[[213,1,2]]]);
//# sourceMappingURL=main.97c816c8.chunk.js.map