"require"in window&&require("discourse/lib/theme-settings-store").registerSettings(4,{minimum_trust_level_to_create_TOC:0,composer_toc_text:"This topic will contain a table of contents",auto_TOC_categories:"",auto_TOC_tags:"",enable_TOC_for_replies:!1,TOC_min_heading:3,theme_uploads:{"icons-sprite":"/uploads/default/original/1X/292be3c6fe014e7eb9620ab5cfe253f811c12214.svg"}}),"define"in window&&define("discourse/theme-4/discourse/components/toc-contents",["exports","@glimmer/component","@glimmer/tracking","@ember/object","@ember/render-modifiers/modifiers/did-insert","@ember/render-modifiers/modifiers/did-update","@ember/service","discourse/lib/decorators","discourse/lib/offset-calculator","../components/toc-heading","../components/toc-large-buttons","../components/toc-mini-buttons","@ember/component","@ember/template-factory"],(function(e,t,o,s,i,r,n,c,l,a,d,u,p,m){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
require("discourse/lib/theme-settings-store").getObjectForTheme(4)
class h extends t.default{static#e=(()=>dt7948.g(this.prototype,"tocProcessor",[n.service]))()
#t=(()=>{dt7948.i(this,"tocProcessor")})()
static#o=(()=>dt7948.g(this.prototype,"appEvents",[n.service]))()
#s=(()=>{dt7948.i(this,"appEvents")})()
static#i=(()=>dt7948.g(this.prototype,"activeHeadingId",[o.tracked],(function(){return null})))()
#r=(()=>{dt7948.i(this,"activeHeadingId")})()
static#n=(()=>dt7948.g(this.prototype,"headingPositions",[o.tracked],(function(){return[]})))()
#c=(()=>{dt7948.i(this,"headingPositions")})()
static#l=(()=>dt7948.g(this.prototype,"activeAncestorIds",[o.tracked],(function(){return[]})))()
#a=(()=>{dt7948.i(this,"activeAncestorIds")})()
willDestroy(){super.willDestroy(...arguments),window.removeEventListener("scroll",this.updateActiveHeadingOnScroll),window.removeEventListener("resize",this.calculateHeadingPositions),this.appEvents.off("topic:current-post-changed",this.calculateHeadingPositions)}get mappedToc(){return this.mappedTocStructure(this.args.tocStructure)}setup(){this.listenForScroll(),this.listenForPostChange(),this.listenForResize(),this.updateHeadingPositions(),this.updateActiveHeadingOnScroll()}static#d=(()=>dt7948.n(this.prototype,"setup",[s.action]))()
listenForScroll(){window.addEventListener("scroll",this.updateActiveHeadingOnScroll)}static#u=(()=>dt7948.n(this.prototype,"listenForScroll",[s.action]))()
listenForResize(){window.addEventListener("resize",this.calculateHeadingPositions)}static#p=(()=>dt7948.n(this.prototype,"listenForResize",[s.action]))()
listenForPostChange(){this.appEvents.on("topic:current-post-changed",this.calculateHeadingPositions)}static#m=(()=>dt7948.n(this.prototype,"listenForPostChange",[s.action]))()
calculateHeadingPositions(){this.updateHeadingPositions()}static#h=(()=>dt7948.n(this.prototype,"calculateHeadingPositions",[(0,c.debounce)(200)]))()
updateHeadingPositions(){const e=document.querySelector(`[data-post-id="${this.args.postID}"]`)
if(!e)return
const t=e.querySelectorAll("h1, h2, h3, h4, h5")
if(!t.length)return
const o=new Map,s=this.mappedToc
this.headingPositions=Array.from(t).map((e=>{const t=this.tocProcessor.getIdFromHeading(this.args.postID,e,o)
return s[t]?{id:t,position:e.getBoundingClientRect().top+window.scrollY-(0,l.headerOffset)()-150}:null})).compact()}static#g=(()=>dt7948.n(this.prototype,"updateHeadingPositions",[s.action]))()
updateActiveHeadingOnScroll(){const e=window.pageYOffset-(0,l.headerOffset)()
let t=0,o=0,s=this.headingPositions.length-1
for(;o<=s;){let i=Math.floor((o+s)/2)
e>=this.headingPositions[i].position?(o=i+1,t=i):s=i-1}const i=this.mappedToc[this.headingPositions[t]?.id]
this.activeHeadingId=i?.id,this.activeAncestorIds=[]
let r=i
for(;r&&r.parent;)this.activeAncestorIds.push(r.parent.id),r=r.parent}static#f=(()=>dt7948.n(this.prototype,"updateActiveHeadingOnScroll",[(0,c.debounce)(50)]))()
mappedTocStructure(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
t??={}
for(const o of e)t[o.id]=o,o.subItems&&this.mappedTocStructure(o.subItems,t)
return t}static#b=(()=>(0,p.setComponentTemplate)((0,m.createTemplateFactory)({id:null,block:'[[[1,"\\n"],[41,[51,[30,1]],[[[1,"      "],[8,[32,0],null,[["@renderTimeline","@postID"],[[30,1],[30,2]]],null],[1,"\\n"]],[]],null],[1,"    "],[11,0],[24,1,"d-toc"],[4,[32,1],[[30,0,["setup"]]],null],[4,[32,2],[[30,0,["updateHeadingPositions"]],[30,2]],null],[12],[1,"\\n\\n"],[42,[28,[31,2],[[28,[31,2],[[30,3]],null]],null],null,[[[1,"        "],[10,"ul"],[14,0,"d-toc-heading"],[12],[1,"\\n          "],[8,[32,3],null,[["@item","@activeHeadingId","@activeAncestorIds","@renderTimeline"],[[30,4],[30,0,["activeHeadingId"]],[30,0,["activeAncestorIds"]],[30,1]]],null],[1,"\\n        "],[13],[1,"\\n"]],[4]],null],[1,"\\n"],[41,[30,1],[[[1,"        "],[8,[32,4],null,[["@postID","@renderTimeline"],[[30,2],[30,1]]],null],[1,"\\n"]],[]],null],[1,"    "],[13],[1,"\\n  "]],["@renderTimeline","@postID","@tocStructure","heading"],false,["unless","each","-track-array","if"]]',moduleName:"/discourse/theme-4/discourse/components/toc-contents",scope:()=>[u.default,i.default,r.default,a.default,d.default],isStrictMode:!0}),this))()}e.default=h})),"define"in window&&define("discourse/theme-4/discourse/components/toc-heading",["exports","@glimmer/component","@ember/helper","@ember/modifier","@ember/object","@ember/service","discourse/lib/offset-calculator","discourse/lib/utilities","@ember/component","@ember/template-factory"],(function(e,t,o,s,i,r,n,c,l,a){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
require("discourse/lib/theme-settings-store").getObjectForTheme(4)
class d extends t.default{static#e=(()=>dt7948.g(this.prototype,"tocProcessor",[r.service]))()
#t=(()=>{dt7948.i(this,"tocProcessor")})()
get isActive(){return this.args.activeHeadingId===this.args.item.id}get isAncestorActive(){return this.args.activeAncestorIds?.includes(this.args.item.id)}get classNames(){const e=this.args.item.tagName?` d-toc-${this.args.item.tagName}`:""
let t=""
return this.isActive?t=" direct-active active":this.isAncestorActive&&(t=" active"),`d-toc-item${e}${t}`}handleTocLinkClick(e){e.preventDefault()
const t=e.target.href?.split("#").pop()
if(!t)return
const o=document.querySelector(`a[name="${t}"]`)||document.getElementById(t)
if(o){const e=(0,n.headerOffset)(),t=o.getBoundingClientRect().top+window.pageYOffset-e-25
window.scrollTo({top:t,behavior:"smooth"}),this.tocProcessor.setOverlayVisible(!1)}}static#o=(()=>dt7948.n(this.prototype,"handleTocLinkClick",[i.action]))()
static#i=(()=>(0,l.setComponentTemplate)((0,a.createTemplateFactory)({id:null,block:'[[[1,"\\n    "],[10,"li"],[15,0,[30,0,["classNames"]]],[12],[1,"\\n      "],[11,3],[16,6,[29,["#",[30,1,["id"]]]]],[16,"data-d-toc",[28,[32,0],["toc-",[30,1,["tagName"]],"-",[28,[32,1],[[30,1,["text"]]],null]],null]],[4,[32,2],["click",[30,0,["handleTocLinkClick"]]],null],[12],[1,"\\n        "],[1,[30,1,["text"]]],[1,"\\n      "],[13],[1,"\\n"],[41,[30,1,["subItems"]],[[[1,"        "],[10,"ul"],[14,0,"d-toc-sublevel"],[12],[1,"\\n"],[42,[28,[31,2],[[28,[31,2],[[30,1,["subItems"]]],null]],null],null,[[[1,"            "],[8,[32,3],null,[["@item","@activeHeadingId","@activeAncestorIds"],[[30,2],[30,3],[30,4]]],null],[1,"\\n"]],[2]],null],[1,"        "],[13],[1,"\\n"]],[]],null],[1,"    "],[13],[1,"\\n  "]],["@item","subItem","@activeHeadingId","@activeAncestorIds"],false,["if","each","-track-array"]]',moduleName:"/discourse/theme-4/discourse/components/toc-heading",scope:()=>[o.concat,c.slugify,s.on,d],isStrictMode:!0}),this))()}e.default=d})),"define"in window&&define("discourse/theme-4/discourse/components/toc-large-buttons",["exports","@glimmer/component","@ember/object","@ember/service","discourse/components/d-button","discourse-i18n","@ember/component","@ember/template-factory"],(function(e,t,o,s,i,r,n,c){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
require("discourse/lib/theme-settings-store").getObjectForTheme(4)
const l=e=>`theme_translations.4.${e}`
class a extends t.default{static#e=(()=>dt7948.g(this.prototype,"tocProcessor",[s.service]))()
#t=(()=>{dt7948.i(this,"tocProcessor")})()
callJumpToEnd(){this.tocProcessor.jumpToEnd(this.args.renderTimeline,this.args.postID)}static#o=(()=>dt7948.n(this.prototype,"callJumpToEnd",[o.action]))()
static#i=(()=>(0,n.setComponentTemplate)((0,c.createTemplateFactory)({id:null,block:'[[[1,"\\n    "],[10,0],[14,0,"d-toc-footer-icons"],[12],[1,"\\n      "],[8,[32,0],[[24,0,"btn btn-transparent scroll-to-bottom"]],[["@action","@icon","@translatedLabel"],[[30,0,["callJumpToEnd"]],"downward",[28,[32,1],[[28,[32,2],["jump_bottom"],null]],null]]],null],[1,"\\n    "],[13],[1,"\\n  "]],[],false,[]]',moduleName:"/discourse/theme-4/discourse/components/toc-large-buttons",scope:()=>[i.default,r.i18n,l],isStrictMode:!0}),this))()}e.default=a})),"define"in window&&define("discourse/theme-4/discourse/components/toc-mini-buttons",["exports","@glimmer/component","@ember/object","@ember/service","discourse/components/d-button","@ember/component","@ember/template-factory"],(function(e,t,o,s,i,r,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
require("discourse/lib/theme-settings-store").getObjectForTheme(4)
class c extends t.default{static#e=(()=>dt7948.g(this.prototype,"tocProcessor",[s.service]))()
#t=(()=>{dt7948.i(this,"tocProcessor")})()
callCloseOverlay(){this.tocProcessor.setOverlayVisible(!1)}static#o=(()=>dt7948.n(this.prototype,"callCloseOverlay",[o.action]))()
callJumpToEnd(){this.tocProcessor.jumpToEnd(this.args.renderTimeline,this.args.postID)}static#i=(()=>dt7948.n(this.prototype,"callJumpToEnd",[o.action]))()
static#n=(()=>(0,r.setComponentTemplate)((0,n.createTemplateFactory)({id:null,block:'[[[1,"\\n    "],[10,0],[14,0,"d-toc-icons"],[12],[1,"\\n      "],[8,[32,0],[[24,0,"btn btn-transparent scroll-to-bottom"]],[["@action","@icon"],[[30,0,["callJumpToEnd"]],"downward"]],null],[1,"\\n      "],[8,[32,0],[[24,0,"btn btn-transparent d-toc-close"]],[["@action","@icon"],[[30,0,["closeOverlay"]],"xmark"]],null],[1,"\\n    "],[13],[1,"\\n  "]],[],false,[]]',moduleName:"/discourse/theme-4/discourse/components/toc-mini-buttons",scope:()=>[i.default],isStrictMode:!0}),this))()}e.default=c})),"define"in window&&define("discourse/theme-4/discourse/components/toc-mini",["exports","@glimmer/component","@ember/object","@ember/service","discourse/components/d-button","@ember/component","@ember/template-factory"],(function(e,t,o,s,i,r,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
require("discourse/lib/theme-settings-store").getObjectForTheme(4)
class c extends t.default{static#e=(()=>dt7948.g(this.prototype,"tocProcessor",[s.service]))()
#t=(()=>{dt7948.i(this,"tocProcessor")})()
willDestroy(){super.willDestroy(...arguments),this.removeClickOutsideListener()}clickOutside(){this.tocProcessor.setOverlayVisible(!1),this.removeClickOutsideListener()}static#o=(()=>dt7948.n(this.prototype,"clickOutside",[o.action]))()
addClickOutsideListener(){document.addEventListener("click",this.clickOutside)}static#i=(()=>dt7948.n(this.prototype,"addClickOutsideListener",[o.action]))()
toggleTOCOverlay(){this.tocProcessor.toggleOverlay(),this.tocProcessor.isOverlayVisible?this.addClickOutsideListener():this.removeClickOutsideListener()}static#n=(()=>dt7948.n(this.prototype,"toggleTOCOverlay",[o.action]))()
removeClickOutsideListener(){document.removeEventListener("click",this.clickOutside)}static#l=(()=>dt7948.n(this.prototype,"removeClickOutsideListener",[o.action]))()
static#d=(()=>(0,r.setComponentTemplate)((0,n.createTemplateFactory)({id:null,block:'[[[1,"\\n"],[41,[30,0,["tocProcessor","hasTOC"]],[[[1,"      "],[10,1],[14,0,"d-toc-mini"],[12],[1,"\\n        "],[8,[32,0],[[24,0,"btn-primary"]],[["@icon","@action"],["bars-staggered",[30,0,["toggleTOCOverlay"]]]],null],[1,"\\n      "],[13],[1,"\\n"]],[]],null],[1,"  "]],[],false,["if"]]',moduleName:"/discourse/theme-4/discourse/components/toc-mini",scope:()=>[i.default],isStrictMode:!0}),this))()}e.default=c})),"define"in window&&define("discourse/theme-4/discourse/components/toc-timeline",["exports","@glimmer/component","@glimmer/tracking","@ember/object","@ember/render-modifiers/modifiers/did-insert","@ember/render-modifiers/modifiers/did-update","@ember/service","discourse/helpers/body-class","../components/toc-contents","../components/toc-toggle","@ember/component","@ember/template-factory"],(function(e,t,o,s,i,r,n,c,l,a,d,u){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
require("discourse/lib/theme-settings-store").getObjectForTheme(4)
class p extends t.default{static#e=(()=>dt7948.g(this.prototype,"tocProcessor",[n.service]))()
#t=(()=>{dt7948.i(this,"tocProcessor")})()
static#o=(()=>dt7948.g(this.prototype,"isTocVisible",[o.tracked],(function(){return"true"===localStorage.getItem("tocVisibility")||!0})))()
#v=(()=>{dt7948.i(this,"isTocVisible")})()
get shouldRenderToc(){return!!this.tocProcessor.hasTOC&&(!!this.tocProcessor.isDocs||(this.args.renderTimeline?1===this.args.topic?.posts_count||this.tocProcessor.isTocVisible:this.tocProcessor.isOverlayVisible))}get isTopicProgress(){return!this.args.renderTimeline||this.args.renderTimeline&&this.args.topicProgressExpanded}callCheckPostforTOC(){this.tocProcessor.checkPostforTOC(this.args.topic)}static#i=(()=>dt7948.n(this.prototype,"callCheckPostforTOC",[s.action]))()
handleTimelineUpdate(){this.args.renderTimeline&&this.tocProcessor.setOverlayVisible(!1)}static#n=(()=>dt7948.n(this.prototype,"handleTimelineUpdate",[s.action]))()
static#l=(()=>(0,d.setComponentTemplate)((0,u.createTemplateFactory)({id:null,block:'[[[1,"\\n    "],[11,0],[24,0,"d-toc-main"],[4,[32,0],[[30,0,["callCheckPostforTOC"]]],null],[4,[32,1],[[30,0,["callCheckPostforTOC"]],[30,1,["currentPost"]]],null],[4,[32,1],[[30,0,["handleTimelineUpdate"]],[30,2]],null],[12],[1,"\\n      "],[1,[28,[32,2],["d-toc-installed"],null]],[1,"\\n"],[41,[30,0,["shouldRenderToc"]],[[[41,[51,[30,0,["isTopicProgress"]]],[[[1,"          "],[1,[28,[32,2],["d-toc-active"],null]],[1,"\\n"]],[]],null],[1,"        "],[8,[32,3],null,[["@postContent","@postID","@tocStructure","@renderTimeline"],[[30,0,["tocProcessor","postContent"]],[30,0,["tocProcessor","postID"]],[30,0,["tocProcessor","tocStructure"]],[30,2]]],null],[1,"\\n"],[41,[30,2],[[[1,"          "],[8,[32,4],null,[["@topic"],[[30,1]]],null],[1,"\\n"]],[]],null]],[]],null],[1,"    "],[13],[1,"\\n  "]],["@topic","@renderTimeline"],false,["if","unless"]]',moduleName:"/discourse/theme-4/discourse/components/toc-timeline",scope:()=>[i.default,r.default,c.default,l.default,a.default],isStrictMode:!0}),this))()}e.default=p})),"define"in window&&define("discourse/theme-4/discourse/components/toc-toggle",["exports","@glimmer/component","@ember/service","discourse/components/d-button","discourse-i18n","@ember/component","@ember/template-factory"],(function(e,t,o,s,i,r,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
require("discourse/lib/theme-settings-store").getObjectForTheme(4)
const c=e=>`theme_translations.4.${e}`
class l extends t.default{static#e=(()=>dt7948.g(this.prototype,"tocProcessor",[o.service]))()
#t=(()=>{dt7948.i(this,"tocProcessor")})()
get shouldShow(){return!this.tocProcessor.isDocs&&1!==this.args.topic?.posts_count&&this.tocProcessor.hasTOC}get toggleLabel(){return this.tocProcessor.isTocVisible?"toggle_toc.show_timeline":"toggle_toc.show_toc"}get toggleIcon(){return this.tocProcessor.isTocVisible?"timeline":"bars-staggered"}static#o=(()=>(0,r.setComponentTemplate)((0,n.createTemplateFactory)({id:null,block:'[[[1,"\\n"],[41,[30,0,["shouldShow"]],[[[1,"      "],[8,[32,0],[[24,0,"btn btn-default timeline-toggle"]],[["@action","@icon","@translatedLabel"],[[30,0,["tocProcessor","toggleTocVisibility"]],[30,0,["toggleIcon"]],[28,[32,1],[[28,[32,2],[[30,0,["toggleLabel"]]],null]],null]]],null],[1,"\\n"]],[]],null],[1,"  "]],[],false,["if"]]',moduleName:"/discourse/theme-4/discourse/components/toc-toggle",scope:()=>[s.default,i.i18n,c],isStrictMode:!0}),this))()}e.default=l})),"define"in window&&define("discourse/theme-4/discourse/connectors/below-docs-topic/d-toc-wrapper",["exports","@ember/component","@ember-decorators/component","../../components/toc-timeline","@ember/template-factory"],(function(e,t,o,s,i){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
require("discourse/lib/theme-settings-store").getObjectForTheme(4)
const r=dt7948.c(class extends t.default{static#e=(()=>(0,t.setComponentTemplate)((0,i.createTemplateFactory)({id:null,block:'[[[1,"\\n    "],[8,[32,0],null,[["@topic","@renderTimeline"],[[30,1,["topic"]],true]],null],[1,"\\n  "]],["@outletArgs"],false,[]]',moduleName:"/discourse/theme-4/discourse/connectors/below-docs-topic/d-toc-wrapper",scope:()=>[s.default],isStrictMode:!0}),this))()},[(0,o.classNames)("below-docs-topic-outlet","d-toc-wrapper"),(0,o.tagName)("div")])
e.default=r})),"define"in window&&define("discourse/theme-4/discourse/connectors/topic-navigation/d-toc-wrapper",["exports","@ember/component","@ember-decorators/component","../../components/toc-timeline","@ember/template-factory"],(function(e,t,o,s,i){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
require("discourse/lib/theme-settings-store").getObjectForTheme(4)
const r=dt7948.c(class extends t.default{static#e=(()=>(0,t.setComponentTemplate)((0,i.createTemplateFactory)({id:null,block:'[[[1,"\\n    "],[8,[32,0],null,[["@topic","@renderTimeline","@topicProgressExpanded"],[[30,1,["topic"]],[30,1,["renderTimeline"]],[30,1,["topicProgressExpanded"]]]],null],[1,"\\n  "]],["@outletArgs"],false,[]]',moduleName:"/discourse/theme-4/discourse/connectors/topic-navigation/d-toc-wrapper",scope:()=>[s.default],isStrictMode:!0}),this))()},[(0,o.classNames)("topic-navigation-outlet","d-toc-wrapper"),(0,o.tagName)("div")])
e.default=r})),"define"in window&&define("discourse/theme-4/discourse/initializers/disco-toc-composer",["exports","discourse/lib/plugin-api","discourse-i18n"],(function(e,t,o){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const s=require("discourse/lib/theme-settings-store").getObjectForTheme(4)
e.default={name:"disco-toc-composer",initialize(){(0,t.withPluginApi)("1.0.0",(e=>{const t=e.getCurrentUser()
if(!t)return
const i=s.minimum_trust_level_to_create_TOC
var r;(t.trust_level>=i||t.staff)&&(o.default.translations[o.default.currentLocale()].js.composer||(o.default.translations[o.default.currentLocale()].js.composer={}),o.default.translations[o.default.currentLocale()].js.composer.contains_dtoc=" ",e.addComposerToolbarPopupMenuOption({action:e=>{e.applySurround('<div data-theme-toc="true">',"</div>","contains_dtoc")},icon:"align-left",label:(r="insert_table_of_contents",`theme_translations.4.${r}`),condition:e=>s.enable_TOC_for_replies||e.model.topicFirstPost}),s.enable_TOC_for_replies&&document.body.classList.add("toc-for-replies-enabled"))}))}}})),"define"in window&&define("discourse/theme-4/discourse/initializers/init-toc-mini",["exports","discourse/lib/api","../components/toc-mini"],(function(e,t,o){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
require("discourse/lib/theme-settings-store").getObjectForTheme(4)
e.default=(0,t.apiInitializer)("1.14.0",(e=>{e.renderInOutlet("before-topic-progress",o.default)}))})),"define"in window&&define("discourse/theme-4/discourse/initializers/init-toc-toggle",["exports","discourse/lib/api","../components/toc-toggle"],(function(e,t,o){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
require("discourse/lib/theme-settings-store").getObjectForTheme(4)
e.default=(0,t.apiInitializer)("1.14.0",(e=>{e.renderInOutlet("timeline-footer-controls-after",o.default)}))})),"define"in window&&define("discourse/theme-4/discourse/services/toc-processor",["exports","@glimmer/tracking","@ember/object","@ember/service","discourse/lib/utilities"],(function(e,t,o,s,i){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const r=require("discourse/lib/theme-settings-store").getObjectForTheme(4)
class n extends s.default{static#e=(()=>dt7948.g(this.prototype,"router",[s.service]))()
#_=(()=>{dt7948.i(this,"router")})()
static#o=(()=>dt7948.g(this.prototype,"hasTOC",[t.tracked],(function(){return!1})))()
#T=(()=>{dt7948.i(this,"hasTOC")})()
static#i=(()=>dt7948.g(this.prototype,"postContent",[t.tracked],(function(){return null})))()
#y=(()=>{dt7948.i(this,"postContent")})()
static#n=(()=>dt7948.g(this.prototype,"postID",[t.tracked],(function(){return null})))()
#O=(()=>{dt7948.i(this,"postID")})()
static#l=(()=>dt7948.g(this.prototype,"tocStructure",[t.tracked],(function(){return null})))()
#P=(()=>{dt7948.i(this,"tocStructure")})()
static#d=(()=>dt7948.g(this.prototype,"isTocVisible",[t.tracked],(function(){return"false"!==localStorage.getItem("tocVisibility")})))()
#v=(()=>{dt7948.i(this,"isTocVisible")})()
static#u=(()=>dt7948.g(this.prototype,"isOverlayVisible",[t.tracked],(function(){return!1})))()
#C=(()=>{dt7948.i(this,"isOverlayVisible")})()
static#p=(()=>dt7948.g(this.prototype,"isDocs",[t.tracked],(function(){return!1})))()
#w=(()=>{dt7948.i(this,"isDocs")})()
toggleTocVisibility(){this.isTocVisible=!this.isTocVisible,localStorage.setItem("tocVisibility",this.isTocVisible)}static#m=(()=>dt7948.n(this.prototype,"toggleTocVisibility",[o.action]))()
setOverlayVisible(e){this.isOverlayVisible=e
const t=document.querySelector(".d-toc-wrapper")
t&&t.classList.toggle("overlay",e)}toggleOverlay(){this.setOverlayVisible(!this.isOverlayVisible)}checkPostforTOC(e){if(this.hasTOC=!1,this.isValidTopic(e)&&this.shouldDisplayToc(this.getCurrentPost(e))){const t=this.getCurrentPost(e).cooked;(this.containsTocMarkup(t)||this.autoTOC(e))&&this.processPostContent(t,this.getCurrentPost(e).id)}this.setOverlayVisible(!1)}isValidTopic(e){return!!e}getCurrentPost(e){const t=this.router?.currentRouteName?.includes("docs")
return t?(this.isDocs=!0,e.post_stream.posts[0]):(this.isDocs=!1,e.postStream?.posts?.find((t=>t.post_number===e.currentPost)))}shouldDisplayToc(e){return r.enable_TOC_for_replies||1===e.post_number}containsTocMarkup(e){return e.includes('<div data-theme-toc="true">')}processPostContent(e,t){if(this.containsHeadings(e)){const o=(new DOMParser).parseFromString(e,"text/html").querySelectorAll("body > h1,body > h2,body > h3,body > h4,body > h5")
if(o.length<r.TOC_min_heading)return void this.setOverlayVisible(!1)
this.populateTocData(t,e,o)}else this.setOverlayVisible(!1)}containsHeadings(e){return["<h1","<h2","<h3","<h4","<h5"].some((t=>e.includes(t)))}populateTocData(e,t,o){this.hasTOC=!0,this.postID=e,this.postContent=t,this.tocStructure=this.generateTocStructure(o)}autoTOC(e){const t=r.auto_TOC_categories?r.auto_TOC_categories.split("|").map((e=>parseInt(e,10))):[],o=r.auto_TOC_tags?r.auto_TOC_tags.split("|"):[]
if(!t.length&&!o.length||!e)return!1
const s=e.category_id,i=e.tags||[],n=o.some((e=>i.includes(e))),c=t.includes(s)
return(n||c)&&(1===e.currentPost||void 0===e.currentPost)}getIdFromHeading(e,t,o){const s=t.querySelector("a.anchor")
if(s)return s.name
const r=t.tagName.toLowerCase(),n=t.textContent.trim()
let c=`${(0,i.slugify)(n)}`
o.has(c)?(o.set(c,o.get(c)+1),c=`${c}-${o.get(c)}`):o.set(c,1)
const l=`p-${e}-toc-${r}-${c}`
return t.id=l,l}generateTocStructure(e){let t={subItems:[],level:0},o=[t]
const s=new Map
return e.forEach((e=>{const t=parseInt(e.tagName[1],10),i=e.textContent.trim(),r=e.tagName.toLowerCase(),n=this.getIdFromHeading(this.postID,e,s)
for(;o[o.length-1].level>=t;)o.pop()
let c={id:n,tagName:r,text:i,subItems:[],level:t,parent:o.length>1?o[o.length-1]:null}
o[o.length-1].subItems.push(c),o.push(c)})),t.subItems}jumpToEnd(e,t){let o=150
const s=document.querySelector(`[data-post-id="${t}"]`)
if(e||this.setOverlayVisible(!1),s){const e=s.querySelector(".topic-map")?.offsetHeight||0
s.parentElement?.nextElementSibling?.querySelector("div[data-theme-toc]")&&(o=30-e)
const t=s.getBoundingClientRect().bottom+window.scrollY-o-e
window.scrollTo({top:t,behavior:"smooth"})}}}e.default=n}))

//# sourceMappingURL=7bad823e6857725a6a8a481bc56547a5faec9328.map?__ws=forum.hackliberty.org
