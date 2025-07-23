"require"in window&&require("discourse/lib/theme-settings-store").registerSettings(2,{import_google_font:!1,default_light:!1}),"define"in window&&define("discourse/theme-2/discourse/initializers/theme-field-3-common-html-script-1",["exports","discourse/lib/plugin-api","discourse/lib/deprecated"],(function(e,t,i){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const r=require("discourse/lib/theme-settings-store").getObjectForTheme(2)
e.default={name:"theme-field-3-common-html-script-1",after:"inject-objects",initialize(){(0,i.default)("Adding JS code using <script type='text/discourse-plugin'> is deprecated. Move this code to a dedicated JavaScript file.",{id:"discourse.script-tag-discourse-plugin",url:"https://meta.discourse.org/t/366482"}),(0,t.withPluginApi)("0.8.42",(e=>{if(r.default_light){let e=document.querySelector(".light-scheme").getAttribute("media")
e&&"all"===e?(document.querySelector(".light-scheme").setAttribute("media","all"),document.querySelector(".dark-scheme").setAttribute("media","none")):(document.querySelector(".light-scheme").setAttribute("media","none"),document.querySelector(".dark-scheme").setAttribute("media","all"))}}))}}}))

//# sourceMappingURL=610d36ce7eb1bfcfde61eac8fc463d11c900d7ad.map?__ws=forum.hackliberty.org
