(function(e){function t(t){for(var o,r,i=t[0],c=t[1],d=t[2],l=0,p=[];l<i.length;l++)r=i[l],a[r]&&p.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,d||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},s=[];function r(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"04d8714c"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,o){n=a[e]=[t,o]});t.push(n[2]=o);var s,c=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=r(e),s=function(t){d.onerror=d.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,r=new Error("Loading chunk "+e+" failed.\n("+o+": "+s+")");r.type=o,r.request=s,n[1](r)}a[e]=void 0}};var l=setTimeout(function(){s({type:"timeout",target:d})},12e4);d.onerror=d.onload=s,c.appendChild(d)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="./",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=d;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"18a4":function(e,t,n){},"21bb":function(e,t,n){"use strict";var o=n("c188"),a=n.n(o);a.a},"3bd6":function(e,t,n){},"40fd":function(e){e.exports={name:"facebook-login-vuejs",version:"2.1.3",description:"A fully customizable button component for integrating Facebook login fast",author:"iliran11",private:!0,main:"dist",scripts:{test:'echo "Error: no test specified" && exit 1',build:"node_modules/.bin/webpack --config webpack.config.js",start:"node_modules/.bin/webpack --config webpack.config.js --watch",link:"cd ./docs && npm link facebook-login-vuejs",unlink:"npm unlink","unlink-docs":"cd ./docs && npm unlink --no-save facebook-login-vuejs",predocs:"npm link && npm run link",docs:"npm run serve --prefix ./docs",deploy:"cd ./docs && npm run deploy","prerelease-patch":"npm run build && npm version patch","prerelease-minor":"npm run build && npm version minor","prerelease-major":"npm run build && npm version major","postrelease-patch":"git push --follow-tags","postrelease-minor":"git push --follow-tags","postrelease-major":"git push --follow-tags","release-patch":"npm publish","release-minor":"npm publish","release-major":"npm publish"},repository:{type:"git",url:"https://github.com/iliran11/facebook-login-vue"},bugs:{url:"https://github.com/iliran11/facebook-login-vue/issues"},peerDependencies:{vue:"^2.x"},devDependencies:{"@babel/core":"^7.0.0-beta.51","@babel/helper-module-imports":"^7.0.0-beta.54","@babel/plugin-syntax-jsx":"^7.0.0-beta.54","@babel/preset-env":"^7.0.0-beta.54","babel-helper-vue-jsx-merge-props":"^2.0.3","babel-loader":"^8.0.0-beta.4","babel-plugin-syntax-jsx":"^6.18.0","babel-plugin-transform-vue-jsx":"^4.0.1","css-loader":"^1.0.0",eslint:"^4.19.1","eslint-config-standard":"^11.0.0","eslint-plugin-import":"^2.12.0","eslint-plugin-node":"^6.0.1","eslint-plugin-promise":"^3.8.0","eslint-plugin-standard":"^3.1.0","node-sass":"^4.9.2","sass-loader":"^7.0.3","url-loader":"^1.0.1","vue-loader":"^15.2.4","vue-style-loader":"^4.1.0","vue-template-compiler":"^2.5.16",webpack:"^4.12.0","webpack-bundle-analyzer":"^2.13.1","webpack-cli":"^3.0.8"},dependencies:{}}},"490c":function(e,t,n){"use strict";var o=n("6ab6"),a=n.n(o);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],r=(n("5c0b"),n("490c"),n("2877")),i={},c=Object(r["a"])(i,a,s,!1,null,null,null),d=c.exports,l=n("8c4f"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"docs"},[n("div",{staticClass:"docs-container docs-container--has-jumbotron docs-100vh js-vh-fix"},[n("div",{staticClass:"docs-jumbotron container",class:e.breakpoint.noMatch&&["pl-3","pr-3"]||"p-0"},[n("a",{staticClass:"docs-github",attrs:{href:e.pkg.repository.url,target:"_blank"}},[n("img",{attrs:{src:"octocat.png",alt:"Go to GitHub"}})]),n("div",{staticClass:"docs-clearfix text-center"},[n("img",{staticClass:"docs-vue-logo mb-10",attrs:{src:"vue-fb.svg"}}),n("h1",[e._v("Facebook Login")]),n("p",{staticClass:"docs-tagline text-center mb-20"},[e._v("\n          Integrate Facebook Login and "),e.breakpoint.noMatch?n("br"):e._e(),e._v(" access the benefits quickly and easily.\n        ")])]),n("v-facebook-login",{staticClass:"docs-facebook-button mx-auto mb-35",attrs:{"app-id":"326022817735322"},on:{"sdk-load":e.handleSdkLoad,connect:e.handleConnect,logout:e.handleLogout,click:e.handleClick},model:{value:e.facebook.model,callback:function(t){e.$set(e.facebook,"model",t)},expression:"facebook.model"}}),n("div",{staticClass:"docs-user mx-auto mb-35"},[n("div",{staticClass:"docs-user-picture",class:{"docs-user-picture--is-visible":e.computed.picture},style:{backgroundImage:"url("+(e.connected&&e.computed.picture||"")}}),e.connected&&e.computed.nopicture?[e._v(e._s(e.computed.name))]:e._e(),n("div",{staticClass:"docs-user-state-placeholder"},[e._v("Disconnected")]),n("div",{staticClass:"docs-user-state-indicator",class:{"docs-user-state-indicator--green":e.connected}})],2),e._m(0),n("div",{staticClass:"docs-version"},[e._v(e._s(e.pkg.version))])],1)]),n("div",{staticClass:"docs-container docs-min-100vh"},[n("div",{staticClass:"container docs-clearfix",class:e.breakpoint.noMatch&&["pl-3","pr-3"]||"p-0"},[n("div",{staticClass:"docs-markdown",domProps:{innerHTML:e._s(e.markdowns.readme)}})])]),n("footer",{staticClass:"docs-footer"},[n("div",{staticClass:"container",class:e.breakpoint.noMatch&&["pl-3","pr-3"]||"p-0"},[e._m(1)])]),n("v-breakpoint",{model:{value:e.breakpoint,callback:function(t){e.breakpoint=t},expression:"breakpoint"}})],1)},p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex justify-content-center"},[n("a",{staticClass:"github-button",attrs:{href:"https://github.com/iliran11/facebook-login-vue","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star iliran11/facebook-login-vue on GitHub"}},[e._v("Star")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"docs-credit"},[n("span",{staticClass:"docs-credit-made-by"},[e._v("Made by")]),n("div",{staticClass:"docs-credit-authors"},[n("a",{staticClass:"docs-anchor--author",attrs:{href:"https://github.com/iliran11",target:"_blank"}},[e._v("🐙  Liran Cohen")]),n("a",{staticClass:"docs-anchor--author",attrs:{href:"https://github.com/adi518",target:"_blank"}},[e._v("🦊 Adi Sahar")])])])}],h=(n("7f7f"),n("c197")),b=n.n(h),f=n("3637"),m=n.n(f),g=n("6043"),v=n.n(g),k=n("dc27"),w=n.n(k),y=n("40fd"),j=n("eceb"),x=n.n(j),C=n("c665"),_=n("aa9a"),F=function(){function e(t){var n=this;Object(C["a"])(this,e),this.selectors=t;var o=navigator.userAgent.toLowerCase(),a=/chrome/.test(o)&&/android/.test(o),s=/crios/.test(o);(a||s)&&(this.getElements(this.selectors),this.fixAll(),this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.onResize=function(){n.windowWidth=window.innerWidth,n.windowHeight=window.innerHeight,n.fixAll()},window.addEventListener("resize",this.onResize,!1))}return Object(_["a"])(e,[{key:"getElements",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.elements=[],e=[].concat(e);for(var t=0;t<e.length;t++)for(var n=e[t].selector,o=document.querySelectorAll(n),a=0;a<o.length;a++){var s=e[t].offset||0;this.elements.push({domElement:o[a],vh:e[t].vh,offset:s})}}},{key:"fixAll",value:function(){for(var e=0;e<this.elements.length;e++){var t=this.elements[e],n=t.offset;t.domElement.style.height=window.innerHeight*(t.vh/100)-n+"px"}}},{key:"destroy",value:function(){window.removeEventListener("resize",this.onResize)}}]),e}(),L={name:"Docs",components:{VBreakpoint:w.a,VFacebookLogin:v.a},data:function(){return{pkg:y,markdowns:{readme:x.a},facebook:{FB:{},model:{}},user:{},instances:{},breakpoint:new k["Model"]}},created:function(){this.instances.ChromeFix=void 0},mounted:function(){window.setTimeout(b.a.highlightAll),this.instances.vhChromeFix=new F([{selector:".js-vh-fix",vh:100}])},destroyed:function(){this.instances.vhChromeFix.destroy()},computed:{computed:function(){var e=this.user.name,t=m()(this.user,"picture.data.url").safeString,n=!t;return{name:e,picture:t,nopicture:n}},connected:function(){return this.facebook.model.connected}},methods:{getUserData:function(){var e=this,t=this.facebook.FB.api;t("/me",{fields:"id, name"},function(n){e.user=n,t("".concat(e.user.id,"/picture?width=9999&redirect=false"),function(t){e.$set(e.user,"picture",t)})})},handleConnect:function(){this.getUserData()},handleSdkLoad:function(e){var t=e.FB;this.facebook.FB=t},handleLogout:function(){console.info("[V-Facebook-Login info]: Logged `logout` event.")},handleClick:function(){console.info("[V-Facebook-Login info]: Logged `click` event.")}}},O=L,S=(n("21bb"),n("92da"),Object(r["a"])(O,u,p,!1,null,null,null)),E=S.exports;o["a"].use(l["a"]);var P=new l["a"]({routes:[{path:"/",name:"home",component:E},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]});o["a"].config.productionTip=!1,new o["a"]({router:P,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("18a4"),a=n.n(o);a.a},"6ab6":function(e,t,n){},"92da":function(e,t,n){"use strict";var o=n("3bd6"),a=n.n(o);a.a},c188:function(e,t,n){},eceb:function(e,t){e.exports='<h2 id="install">Install</h2>\n<pre><code class="language-bash">npm install --save facebook-login-vuejs</code></pre>\n<h2 id="usage">Usage</h2>\n<p>To use the component in your template, simply import and register with your component.</p>\n<h3 id="script">Script</h3>\n<pre><code class="language-js">import VFBLogin from &#39;facebook-login-vuejs&#39;\n\n// OR, use cherry-pick export (better consistency)\nimport { VFBLogin } from &#39;facebook-login-vuejs&#39;\n\nexport default {\n  components: {\n    VFBLogin\n  }\n}</code></pre>\n<h3 id="template">Template</h3>\n<pre><code class="language-html">&lt;v-facebook-login app-id=&quot;326022817735322&quot; @sdk-load=&quot;handleSdk&quot;&gt;&lt;/v-facebook-login&gt;\n\n&lt;!-- OR use the shorthand variation --&gt;\n&lt;v-facebook-login app-id=&quot;326022817735322&quot; @sdk-load=&quot;handleSdk&quot; /&gt;</code></pre>\n<h2 id="props">Props</h2>\n<div id="props-table-wrap" class="docs-table-wrap">\n\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Note</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>app-id</td>\n<td>String</td>\n<td>None</td>\n<td><strong>Required</strong></td>\n</tr>\n<tr>\n<td>version</td>\n<td>String</td>\n<td><code>&#39;v3.1&#39;</code></td>\n<td>Refer to <a href="https://developers.facebook.com/docs/apps/changelog/">Facebook Docs</a> for all available values.</td>\n</tr>\n<tr>\n<td>login-options</td>\n<td>Object</td>\n<td><code>{ scope: &#39;email&#39; }</code></td>\n<td>Refer to <a href="https://developers.facebook.com/docs/reference/javascript/FB.login/v2.9">Facebook Docs</a> for all available values. <br><br> Pass with camel-case, like so: <br> <code>{ returnScopes: false }</code></td>\n</tr>\n</tbody></table>\n</div>\n\n<h2 id="slots">Slots</h2>\n<div id="slots-table-wrap" class="docs-table-wrap">\n\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>login</td>\n<td>Log in to Facebook</td>\n</tr>\n<tr>\n<td>logout</td>\n<td>Log out from Facebook</td>\n</tr>\n</tbody></table>\n</div>\n\n<h2 id="events">Events</h2>\n<div id="events-table-wrap" class="docs-table-wrap">\n\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Payload</th>\n<th>Description</th>\n<th>Note</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>sdk-load</td>\n<td>Object</td>\n<td>Returns an object with <br> a Facebook API instance.</td>\n<td>@Returns <br> <code>FB[Object]</code></td>\n</tr>\n<tr>\n<td>connect</td>\n<td>Boolean</td>\n<td>User is connected.</td>\n<td></td>\n</tr>\n<tr>\n<td>login</td>\n<td>Object</td>\n<td>User attempted login.</td>\n<td>@Returns <br> <code>response[Object]</code></td>\n</tr>\n<tr>\n<td>logout</td>\n<td>Object</td>\n<td>User attempted logout.</td>\n<td>@Returns <br> <code>response[Object]</code></td>\n</tr>\n<tr>\n<td>click</td>\n<td>None</td>\n<td></td>\n<td></td>\n</tr>\n</tbody></table>\n</div>\n\n<h2 id="development">Development</h2>\n<p>Fork, clone and use the following scripts.</p>\n<p>For component:</p>\n<pre><code class="language-bash">npm start</code></pre>\n<p>For documentation:</p>\n<pre><code class="language-bash">npm run docs</code></pre>\n<p>For deploying documentation to github pages:</p>\n<pre><code class="language-bash">npm run deploy</code></pre>\n<h2 id="support">Support</h2>\n<p>Please open an <a href="https://github.com/iliran11/facebook-login-vue/issues">issue</a> for support.</p>\n<h2 id="license">License</h2>\n<p>Copyright (c) 2018 by <a href="https://opensource.org/licenses/MIT">MIT</a></p>\n'}});
//# sourceMappingURL=app.62a5c748.js.map