(()=>{var e,t,r,n,o,a,i={56444:(e,t,r)=>{Promise.all([r.e(461),r.e(308),r.e(401)]).then(r.bind(r,48401))},62571:e=>{"use strict";e.exports=nav},37284:e=>{"use strict";e.exports=new Promise(((e,t)=>{fetch("http://localhost:3000/api/graphql",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:'query {\n    groups {\n      name\n      applications(id: "home") {\n        name\n        versions {\n          version\n        }\n        metadata {\n          name\n          value\n        }\n        overrides {\n          name\n          version\n          application {\n            metadata {\n              name\n              value\n            }\n          }\n        }\n      }\n    }\n  }'})}).then((function(e){return e.json().then((function(e){return e.data}))})).then((function(t){var r;function n(e,t,n,o){var a=r.find((function(e){return"baseUrl"===e.name})),i=n.replace("federation-dynamic-remote-","");const s=new Promise((r=>{var s,d=e.getElementsByTagName(t)[0];if(e.getElementById(n)){if(o){var u=i.split("-");return r(window[u[0]+"_"+u[1]]||window.pendingRemote[u[0]+"_"+u[1]])}return window[i]?r(window[i]):r(window.pendingRemote[i])}(s=e.createElement(t)).id=n,s.onload=function(){r()};const l=o&&o.version?a.value+"/"+o.version+".remoteEntry.js":a.value+"/remoteEntry.js";s.src=l,s.setAttribute("data-webpack",i.replace("-","_")),d.parentNode.insertBefore(s,d)}));if(window.pendingRemote||(window.pendingRemote={}),o&&o.version){var d=i.split("-");window.pendingRemote[d[0]+"_"+d[1]]=s}else window.pendingRemote[i]=s;return s}if(t&&t.groups&&t.groups[0]&&t.groups[0].applications&&t.groups[0].applications[0]){var o=t.groups[0].applications[0];if(!t.groups[0].applications[0].overrides.length)return r=t.groups[0].applications[0].metadata,void n(document,"script","federation-dynamic-remote-dsl",t.groups[0].applications[0].metadata).then((function(){e(window.dsl),r=null}));o.overrides.map((t=>{var o=t&&t.version?t.version.split(".").join("_"):"";return r=t.application.metadata,n(document,"script","federation-dynamic-remote-dsl-"+o,t).then((function(){e(window["dsl_"+o])}))}))}}))})).then((e=>e)).catch(console.error)},82371:e=>{"use strict";e.exports=new Promise(((e,t)=>{e(window.search)}))},4358:e=>{"use strict";e.exports=utils}},s={};function d(e){var t=s[e];if(void 0!==t)return t.exports;var r=s[e]={id:e,loaded:!1,exports:{}};return i[e].call(r.exports,r,r.exports,d),r.loaded=!0,r.exports}d.m=i,d.c=s,d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"==typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"==typeof r.then)return r}var o=Object.create(null);d.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var i=2&n&&r;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((e=>a[e]=()=>r[e]));return a.default=()=>r,d.d(o,a),o},d.d=(e,t)=>{for(var r in t)d.o(t,r)&&!d.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((t,r)=>(d.f[r](e,t),t)),[])),d.u=e=>e+"."+{308:"1f79ee10695ce86c6ce3",316:"20194b1e9f0b3bb99d69",401:"e22c13b08f8cd09109f9",402:"57a81b1577ed171f9c5e",440:"21e11efe673c898c3981",461:"ddeb93f017ad06634afc",490:"5f04e6d0f54637681a85",616:"eb494a586286539fb28f",701:"9cfc8d7fca78bd75d0bf",709:"6bc680dacce3d0a27717",723:"9db33ca1bf2e6cc1e39d",725:"51ee4da2005283df09c0",784:"738733008758cb546b78",881:"16ff008265ebde55f93e"}[e]+".js",d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},n="@dashboard/home:",d.l=(e,t,o,a)=>{if(r[e])r[e].push(t);else{var i,s;if(void 0!==o)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var c=u[l];if(c.getAttribute("src")==e||c.getAttribute("data-webpack")==n+o){i=c;break}}i||(s=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.setAttribute("data-webpack",n+o),i.src=e),r[e]=[t];var f=(t,n)=>{i.onerror=i.onload=null,clearTimeout(p);var o=r[e];if(delete r[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),s&&document.head.appendChild(i)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),o={402:[47402],440:[50440],490:[29490],701:[10701],725:[43725],881:[91881]},a={10701:["default","./SearchList",82371],29490:["default","./Carousel",37284],43725:["default","./Footer",62571],47402:["default","./Button",37284],50440:["default","./analytics",4358],91881:["default","./Header",62571]},d.f.remotes=(e,t)=>{d.o(o,e)&&o[e].forEach((e=>{var r=d.R;r||(r=[]);var n=a[e];if(!(r.indexOf(n)>=0)){if(r.push(n),n.p)return t.push(n.p);var o=t=>{t||(t=new Error("Container missing")),"string"==typeof t.message&&(t.message+='\nwhile loading "'+n[1]+'" from '+n[2]),i[e]=()=>{throw t},n.p=0},s=(e,r,a,i,s,d)=>{try{var u=e(r,a);if(!u||!u.then)return s(u,i,d);var l=u.then((e=>s(e,i)),o);if(!d)return l;t.push(n.p=l)}catch(e){o(e)}},u=(e,t,o)=>s(t.get,n[1],r,0,l,o),l=t=>{n.p=1,i[e]=e=>{e.exports=t()}};s(d,n[2],0,0,((e,t,r)=>e?s(d.I,n[0],0,e,u,r):o()),1)}}))},(()=>{d.S={};var e={},t={};d.I=(r,n)=>{n||(n=[]);var o=t[r];if(o||(o=t[r]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[r])return e[r];d.o(d.S,r)||(d.S[r]={});var a=d.S[r],i="@dashboard/home",s=(e,t,r,n)=>{var o=a[e]=a[e]||{},s=o[t];(!s||!s.loaded&&(!n!=!s.eager?n:i>s.from))&&(o[t]={get:r,from:i,eager:!!n})},u=e=>{var t=e=>{return t="Initialization of sharing external failed: "+e,"undefined"!=typeof console&&console.warn&&console.warn(t);var t};try{var o=d(e);if(!o)return;var a=e=>e&&e.init&&e.init(d.S[r],n);if(o.then)return l.push(o.then(a,t));var i=a(o);if(i&&i.then)return l.push(i.catch(t))}catch(e){t(e)}},l=[];switch(r){case"default":s("antd","4.8.5",(()=>Promise.all([d.e(723),d.e(461),d.e(308),d.e(616)]).then((()=>()=>d(79659))))),s("react-dom","16.14.0",(()=>Promise.all([d.e(316),d.e(461)]).then((()=>()=>d(28316))))),s("react","16.14.0",(()=>d.e(784).then((()=>()=>d(2784))))),u(62571),u(82371),u(4358),u(37284)}return l.length?e[r]=Promise.all(l).then((()=>e[r]=1)):e[r]=1}}})(),(()=>{var e;d.g.importScripts&&(e=d.g.location+"");var t=d.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),d.p=e})(),(()=>{var e=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=r[1]?t(r[1]):[];return r[2]&&(n.length++,n.push.apply(n,t(r[2]))),r[3]&&(n.push([]),n.push.apply(n,t(r[3]))),n},t=(r,n)=>{if(0 in r){n=e(n);var o=r[0],a=o<0;a&&(o=-o-1);for(var i=0,s=1,d=!0;;s++,i++){var u,l,c=s<r.length?(typeof r[s])[0]:"";if(i>=n.length||"o"==(l=(typeof(u=n[i]))[0]))return!d||("u"==c?s>o&&!a:""==c!=a);if("u"==l){if(!d||"u"!=c)return!1}else if(d)if(c==l)if(s<=o){if(u!=r[s])return!1}else{if(a?u>r[s]:u<r[s])return!1;u!=r[s]&&(d=!1)}else if("s"!=c&&"n"!=c){if(a||s<=o)return!1;d=!1,s--}else{if(s<=o||l<c!=a)return!1;d=!1}else"s"!=c&&"n"!=c&&(d=!1,s--)}}var f=[],p=f.pop.bind(f);for(i=1;i<r.length;i++){var h=r[i];f.push(1==h?p()|p():2==h?p()&p():h?t(h,n):!p())}return!!p()},r=(r,n,o)=>{var a=r[n];return(n=Object.keys(a).reduce(((r,n)=>!t(o,n)||r&&!((t,r)=>{t=e(t),r=e(r);for(var n=0;;){if(n>=t.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=t[n],a=(typeof o)[0];if(n>=r.length)return"u"==a;var i=r[n],s=(typeof i)[0];if(a!=s)return"o"==a&&"n"==s||"s"==s||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}})(r,n)?r:n),0))&&a[n]},n=(e=>function(t,r,n,o){var a=d.I(t);return a&&a.then?a.then(e.bind(e,t,d.S[t],r,n,o)):e(t,d.S[t],r,n,o)})(((e,t,n,o,a)=>{var i=t&&d.o(t,n)&&r(t,n,o);return i?(e=>(e.loaded=1,e.get()))(i):a()})),o={},a={56461:()=>n("default","react",[1,16,13,0],(()=>d.e(784).then((()=>()=>d(2784))))),22308:()=>n("default","react-dom",[1,16,13,0],(()=>d.e(316).then((()=>()=>d(28316))))),2939:()=>n("default","antd",[1,4,2,5],(()=>Promise.all([d.e(723),d.e(308),d.e(709)]).then((()=>()=>d(79659)))))},i={308:[22308],401:[2939],461:[56461]};d.f.consumes=(e,t)=>{d.o(i,e)&&i[e].forEach((e=>{if(d.o(o,e))return t.push(o[e]);var r=t=>{o[e]=0,d.m[e]=r=>{delete d.c[e],r.exports=t()}},n=t=>{delete o[e],d.m[e]=r=>{throw delete d.c[e],t}};try{var i=a[e]();i.then?t.push(o[e]=i.then(r).catch(n)):r(i)}catch(e){n(e)}}))}})(),(()=>{var e={179:0};d.f.j=(t,r)=>{var n=d.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else if(/^(7(09|23|84)|[36]16|179|401)$/.test(t)){var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var a=d.p+d.u(t),i=new Error;d.l(a,(r=>{if(d.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+t,t)}else e[t]=0};var t=(t,r)=>{var n,o,[a,i,s]=r,u=0;for(n in i)d.o(i,n)&&(d.m[n]=i[n]);for(s&&s(d),t&&t(r);u<a.length;u++)o=a[u],d.o(e,o)&&e[o]&&e[o][0](),e[a[u]]=0},r=self.webpackChunk_dashboard_home=self.webpackChunk_dashboard_home||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),d(56444)})();