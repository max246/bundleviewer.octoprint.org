(this["webpackJsonpbundleviewer.octoprint.org"]=this["webpackJsonpbundleviewer.octoprint.org"]||[]).push([[0],{158:function(e,t,n){"use strict";n.r(t);var r=n(5),a=n(0),o=n(12),c=n.n(o),i=n(16),l=n(29),s=n(207),u=n(204),d=n(108),j=n(218),b=n(219),p=n(216),h=n(217),f=n(220),g=n(160),x=n(224),O=n(107),m=n.n(O),v=n(106),w=n.n(v),y=n(222),k=n(214),C=n(215),S=n(76),N=n(226),R=n(94),I=n.n(R),L=n(93),U=n.n(L);function B(e){var t=Object(a.useState)(e.darkMode),n=Object(i.a)(t,2),o=n[0],c=n[1];return Object(r.jsx)(N.a,{title:"Toggle dark mode",children:Object(r.jsx)(g.a,{onClick:function(){e.onChange(!o),c(!o)},color:"inherit",children:o?Object(r.jsx)(U.a,{}):Object(r.jsx)(I.a,{})})})}var E=n(11),z=n(227),F=n(95),P=n.n(F),D=n(73),G=n.n(D),_=Object(u.a)((function(e){var t,n;return{grow:{flexGrow:1},url:(t={position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(E.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(E.c)(e.palette.common.white,.25)}},Object(l.a)(t,e.breakpoints.up("md"),{marginRight:e.spacing(2),marginLeft:e.spacing(2)}),Object(l.a)(t,"flexGrow",1),t),urlIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:(n={padding:e.spacing(1,1,1,1)},Object(l.a)(n,e.breakpoints.up("md"),{paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)")}),Object(l.a)(n,"transition",e.transitions.create("width")),Object(l.a)(n,"width","100%"),n)}}));function Z(e){var t=_(),n=Object(a.useState)(e.url),o=Object(i.a)(n,2),c=o[0],l=o[1],s=Object(a.useState)(e.filename?"upload":"url"),u=Object(i.a)(s,1)[0];return Object(r.jsxs)("div",{className:t.url,children:[Object(r.jsx)(x.a,{mdDown:!0,children:Object(r.jsx)("div",{className:t.urlIcon,children:e.filename?Object(r.jsx)(G.a,{}):Object(r.jsx)(P.a,{})})}),Object(r.jsx)(z.a,{placeholder:"URL...",classes:{root:t.inputRoot,input:t.inputInput},onChange:function(e){"url"===u&&l(e.target.value)},onKeyDown:function(t){"url"===u&&"Enter"===t.key&&e.handleUrlChange(c)},defaultValue:"upload"===u?e.filename:e.url,inputProps:{readOnly:"upload"===u}})]})}var J=n(211),M=n(221),T=n(225),A=n(210),W=n(209),q=n(208),H=n(96),K=n.n(H);function V(e){var t=Object(S.b)().enqueueSnackbar,n=Object(a.useState)(!1),o=Object(i.a)(n,2),c=o[0],l=o[1],s=window.location.origin+window.location.pathname+"?url="+encodeURIComponent(e.url),u=function(){l(!1)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(N.a,{title:"Get shareable link",children:Object(r.jsx)(g.a,{onClick:function(){l(!0)},color:"inherit",children:Object(r.jsx)(K.a,{})})}),Object(r.jsxs)(T.a,{open:c,onClose:u,fullWidth:!0,children:[Object(r.jsx)(q.a,{children:"Shareable link"}),Object(r.jsx)(W.a,{children:Object(r.jsx)(M.a,{value:s,InputProps:{readOnly:!0},onFocus:function(e){e.target.select()},fullWidth:!0})}),Object(r.jsxs)(A.a,{children:[navigator.share?Object(r.jsx)(J.a,{onClick:function(){navigator.share&&(navigator.share({title:document.title,url:s}),u())},children:"Share"}):null,navigator.clipboard?Object(r.jsx)(J.a,{onClick:function(){navigator.clipboard&&(navigator.clipboard.writeText(s),t("URL copied to clipboard!"),u())},children:"Copy"}):null,Object(r.jsx)(J.a,{onClick:u,children:"Close"})]})]})]})}var Q=n(113),X=n(228),Y=n(212),$=n(213),ee=n(82),te=n.n(ee),ne=n(110);function re(e){var t=e.content.split("\n"),n=t.length,a=Object(u.a)((function(e){return{log:{flexGrow:1,overflow:"auto",padding:0,"font-family":"'JetBrains Mono', 'Droid Sans Mono', monospace"},line:{"&::before":{content:"attr(data-linenumber)",display:"inline-block",width:"".concat(n.toString().length,"ch"),"text-align":"right","margin-right":"1em",color:e.palette.text.secondary}}}}))();return Object(r.jsx)("code",{className:a.log,children:Object(r.jsx)("pre",{children:Object(r.jsx)(ne.a,{height:500,itemCount:n,itemSize:20,children:function(e){var n=e.index,o=e.style;return Object(r.jsx)("span",{style:o,children:Object(r.jsx)("span",{"data-linenumber":n+1,className:a.line,children:t[n]})})}})})})}function ae(e){var t=e.info.split("\n").filter((function(e){return""!==e.trim()})).map((function(e){var t=e.split(":",2),n=Object(i.a)(t,2);return{key:n[0],value:n[1]}}));return console.log(t),Object(r.jsx)("div",{children:t.map((function(e,t){return Object(r.jsxs)("div",{children:[Object(r.jsx)("strong",{children:e.key}),": ",e.value,Object(r.jsx)("br",{})]},e.key)}))})}var oe=Object(u.a)((function(e){return{}}));function ce(e){var t=oe(),n=function(){return Object(r.jsxs)(X.a,{defaultExpanded:!0,children:[Object(r.jsx)(Y.a,{expandIcon:Object(r.jsx)(te.a,{}),"aria-controls":"panel-sysinfo-content",id:"panel-sysinfo-header",children:Object(r.jsx)(Q.a,{className:t.heading,children:"System Information"})}),Object(r.jsx)($.a,{children:Object(r.jsx)(ae,{info:e.bundle.systeminfo})})]})},a=function(){return Object(r.jsx)("div",{children:e.bundle.logs.map((function(e,n){return Object(r.jsxs)(X.a,{children:[Object(r.jsx)(Y.a,{expandIcon:Object(r.jsx)(te.a,{}),"aria-controls":"panel-log-"+n+"-content",id:"panel-log-"+n+"-header",children:Object(r.jsx)(Q.a,{className:t.heading,children:e.log})}),Object(r.jsx)($.a,{children:Object(r.jsx)(re,{log:e.log,content:e.content,language:"plain"})})]},e.log)}))})};return Object(r.jsxs)("div",{children:[Object(r.jsx)(n,{}),Object(r.jsx)(a,{})]})}var ie=n(109);function le(e){console.log("Rendering NothingChanged...");return Object(r.jsx)("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column"},children:Object(r.jsx)(ie.a,{style:{"flex-basis":"100%"},dropzoneText:"Enter an URL for a bundle above and press Enter, or drag and drop a file here or click to upload one",onChange:function(t){console.log("Entered NothingLoaded.handleChange..."),t.length>0&&e.onUpload(t[0]),console.log("Exiting NothingLoaded.handleChange...")},filesLimit:1,acceptedFiles:[".zip"],maxFileSize:3e7,showPreviewsInDropzone:!1,showAlerts:!1})})}var se=n(26),ue=n.n(se),de=n(41),je=n(105),be=n.n(je);function pe(e){return he.apply(this,arguments)}function he(){return(he=Object(de.a)(ue.a.mark((function e(t){var n;return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{mode:"cors"});case 2:if(n=e.sent,console.log(n),n.ok){e.next=6;break}throw new Error("Could not load file from ".concat(t,": ").concat(n.status));case 6:return e.next=8,n.blob();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function fe(){return(fe=Object(de.a)(ue.a.mark((function e(t){var n;return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe(t);case 2:return n=e.sent,e.next=5,ge(n);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ge(e){return xe.apply(this,arguments)}function xe(){return(xe=Object(de.a)(ue.a.mark((function e(t){return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,be.a.loadAsync(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Oe(){return(Oe=Object(de.a)(ue.a.mark((function e(t,n){return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.file(n);case 2:return e.t0=e.sent,e.abrupt("return",null!==e.t0);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function me(){return(me=Object(de.a)(ue.a.mark((function e(t,n,r){return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=r||"blob",e.next=3,t.file(n).async(r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ve={loadRemote:pe,loadZip:ge,loadRemoteZip:function(e){return fe.apply(this,arguments)},containsFile:function(e,t){return Oe.apply(this,arguments)},getFileContents:function(e,t,n){return me.apply(this,arguments)}};function we(){return(we=Object(de.a)(ue.a.mark((function e(t){var n,r,a,o,c,i,l,s,u,d;return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=["octoprint.log","serial.log","terminal.txt","plugin_softwareupdate_console.log","plugin_pluginmanager_console.log"],e.next=3,ve.getFileContents(t,"systeminfo.txt","string");case 3:if(r=e.sent){e.next=6;break}throw new Error("No systeminfo.txt found");case 6:a={},o=0,c=n;case 8:if(!(o<c.length)){e.next=22;break}return i=c[o],e.prev=10,e.next=13,ve.getFileContents(t,i,"string");case 13:a[i]=e.sent,e.next=19;break;case 16:e.prev=16,e.t0=e.catch(10),console.log("No ".concat(i," in zip..."));case 19:o++,e.next=8;break;case 22:for(l=[],s=0,u=n;s<u.length;s++)d=u[s],a[d]&&l.push({log:d,content:a[d]});return e.abrupt("return",{systeminfo:r,logs:l});case 25:case"end":return e.stop()}}),e,null,[[10,16]])})))).apply(this,arguments)}var ye={loadBundle:function(e){return we.apply(this,arguments)},defaultBundle:{systeminfo:"",logs:[]}},ke=Object(u.a)((function(e){var t;return{root:{display:"flex",overflow:"auto"},grow:{flexGrow:1},appBar:{},toolbar:Object(l.a)({},e.breakpoints.down("md"),{"justify-content":"flex-end","flex-wrap":"wrap"}),urlbar:Object(l.a)({flexGrow:1},e.breakpoints.down("md"),{"flex-basis":"100%",order:99,paddingBottom:e.spacing(2)}),title:{"justify-item":"left"},offset:e.mixins.toolbar,content:Object(l.a)({flexGrow:1,overflow:"auto","padding-top":e.mixins.toolbar.minHeight},e.breakpoints.down("md"),{"padding-top":2*e.mixins.toolbar.minHeight}),container:(t={paddingTop:e.spacing(4)},Object(l.a)(t,e.breakpoints.down("md"),{paddingTop:0}),Object(l.a)(t,"paddingBottom",e.spacing(4)),t)}}));function Ce(e){var t=function(e,t){var n=Object(a.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(G){return console.log(G),t}})),r=Object(i.a)(n,2),o=r[0],c=r[1];return[o,function(t){try{var n=t instanceof Function?t(o):t;c(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(G){console.log(G)}}]}("enableDarkMode",Object(s.a)("(prefers-color-scheme: dark)")),n=Object(i.a)(t,2),o=n[0],c=n[1],l=Object(a.useState)(e.url),u=Object(i.a)(l,2),O=u[0],v=u[1],N=Object(a.useState)(e.url),R=Object(i.a)(N,2),I=R[0],L=R[1],U=Object(a.useState)(ye.defaultBundle),E=Object(i.a)(U,2),z=E[0],F=E[1],P=Object(a.useState)(!1),D=Object(i.a)(P,2),G=D[0],_=D[1],J=Object(a.useState)(!1),M=Object(i.a)(J,2),T=M[0],A=M[1],W=o?"dark":"light",q=Object(d.a)({palette:{type:W}}),H=function(){c(!o)},K=function(e){if(e){_(!1),A(!0),v(e),ee(e),L("");var t=function(e){return e.match(/^https:\/\/github\.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+\/files\//)?e.replace("https://github.com","https://bundleviewer.octoprint.org/bundles"):e}(e);ve.loadRemoteZip(t).then(X).catch(Y)}else $()},Q=function(e){_(!1),A(!0),L(e.name),v(""),ve.loadZip(e).then(X).catch(Y)},X=function(e){ye.loadBundle(e).then((function(e){F(e),A(!1),console.log("Loading complete")})).catch(Y)},Y=function(e){console.log(e),_(!0)},$=function(){v(""),L(""),_(!1),A(!1),F(ye.defaultBundle),ee()},ee=function(e){var t=new URL(window.location);e?t.searchParams.set("url",e):t.searchParams.delete("url"),window.history.replaceState({},"",t)},te=ke(),ne=function(){return G?(console.log("Rendering error screen"),Object(r.jsxs)(y.a,{severity:"error",children:[Object(r.jsx)(k.a,{children:"Error"}),"Could not load bundle, is it accessible and an OctoPrint SystemInfo Bundle zipfile?"]})):T?(console.log("Rendering loading screen"),Object(r.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(r.jsx)(C.a,{})})):z.systeminfo?(console.log("Rendering bundle"),Object(r.jsx)(ce,{bundle:z})):(console.log("Rendering empty"),Object(r.jsx)(le,{onUpload:Q}))},re=function(){return Object(r.jsx)(p.a,{className:te.appBar,children:Object(r.jsxs)(h.a,{className:te.toolbar,children:[Object(r.jsx)(g.a,{onClick:$,children:Object(r.jsx)(w.a,{})}),Object(r.jsx)(x.a,{mdUp:!0,children:Object(r.jsx)("div",{className:te.grow})}),Object(r.jsx)("div",{className:te.urlbar,children:Object(r.jsx)(Z,{url:O,filename:I,handleUrlChange:K})}),O?Object(r.jsx)(V,{url:O}):null,Object(r.jsx)(B,{darkMode:o,onChange:H}),Object(r.jsx)(x.a,{xsDown:!0,children:Object(r.jsx)(g.a,{href:"https://github.com/OctoPrint/bundleviewer.octoprint.org",target:"_blank",children:Object(r.jsx)(m.a,{})})})]})})};return Object(r.jsx)(j.a,{theme:q,children:Object(r.jsx)(S.a,{children:Object(r.jsxs)("div",{className:te.root,style:{display:"flex"},children:[Object(r.jsx)(b.a,{}),Object(r.jsx)(re,{}),Object(r.jsx)("main",{className:te.content,children:Object(r.jsx)(f.a,{maxWidth:"lg",className:te.container,children:Object(r.jsx)(ne,{})})})]})})})}var Se=window.location.search,Ne=new URLSearchParams(Se).get("url","");console.log("URL",Ne),c.a.render(Object(r.jsx)(Ce,{url:null==Ne?"":Ne}),document.querySelector("#root"))}},[[158,1,2]]]);
//# sourceMappingURL=main.752d1a1a.chunk.js.map