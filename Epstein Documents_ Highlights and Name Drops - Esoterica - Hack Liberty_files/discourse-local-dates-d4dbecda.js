define("discourse/plugins/discourse-local-dates/discourse/components/modal/local-dates-create",["exports","@ember/component","@ember/helper","@ember/modifier","@ember/object","@ember/object/computed","@ember/runloop","@ember-decorators/object","discourse/components/calendar-date-time-input","discourse/components/d-button","discourse/components/d-modal","discourse/components/text-field","discourse/helpers/d-icon","discourse/helpers/html-safe","discourse/lib/computed","discourse/lib/decorators","discourse/lib/environment","discourse/lib/local-dates","discourse/lib/text","discourse-i18n","select-kit/components/combo-box","select-kit/components/multi-select","select-kit/components/timezone-input","discourse/plugins/discourse-local-dates/lib/local-date-markup-generator","@ember/template-factory"],function(t,e,a,o,i,n,s,r,l,d,m,c,u,f,p,h,_,g,z,T,y,b,v,w,D){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
class L extends e.default{timeFormat="HH:mm:ss"
dateFormat="YYYY-MM-DD"
dateTimeFormat="YYYY-MM-DD HH:mm:ss"
date=null
toDate=null
time=null
toTime=null
format=null
formats=null
recurring=null
advancedMode=!1
timezone=null
fromSelected=null
toSelected=null
static#t=(()=>dt7948.g(this.prototype,"fromFilled",[(0,n.notEmpty)("date")]))()
#e=(()=>{dt7948.i(this,"fromFilled")})()
static#a=(()=>dt7948.g(this.prototype,"toFilled",[(0,n.notEmpty)("toDate")]))()
#o=(()=>{dt7948.i(this,"toFilled")})()
static#i=(()=>dt7948.g(this.prototype,"timezoneIsDifferentFromUserTimezone",[(0,p.propertyNotEqual)("currentUserTimezone","options.timezone")]))()
#n=(()=>{dt7948.i(this,"timezoneIsDifferentFromUserTimezone")})()
init(){super.init(...arguments),this._picker=null,this.setProperties({timezones:[],formats:(this.siteSettings.discourse_local_dates_default_formats||"").split("|").filter(t=>t),timezone:this.currentUserTimezone,date:moment().format(this.dateFormat)})}didInsertElement(){super.didInsertElement(...arguments),this.send("focusFrom")}configChanged(){this._renderPreview()}static#s=(()=>dt7948.n(this.prototype,"configChanged",[(0,r.observes)("computedConfig.{from,to,options}","options","isValid","isRange")]))()
async _renderPreview(){if(this.markup){const t=await(0,z.cook)(this.markup)
this.set("currentPreview",t),(0,s.schedule)("afterRender",()=>{(0,g.applyLocalDates)(document.querySelectorAll(".preview .discourse-local-date"),this.siteSettings)})}}static#r=(()=>dt7948.n(this.prototype,"_renderPreview",[(0,h.debounce)(_.INPUT_DELAY)]))()
isRange(t,e,a){return t&&(e||a)}static#l=(()=>dt7948.n(this.prototype,"isRange",[(0,h.default)("date","toDate","toTime")]))()
isValid(t,e){const a=t.from
if(!t.from.dateTime||!t.from.dateTime.isValid())return!1
if(e){const e=t.to
if(!e.dateTime||!e.dateTime.isValid()||e.dateTime.diff(a.dateTime)<0)return!1}return!0}static#d=(()=>dt7948.n(this.prototype,"isValid",[(0,h.default)("computedConfig","isRange")]))()
fromConfig(t,e,a){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
const n=!e
let s
s=n?moment.tz(t,o.timezone):moment.tz(`${t} ${e}`,o.timezone),n||(e=s.format(this.timeFormat))
let r=o.format
return n&&this.formats.includes(r)&&(r="LL"),i.default.create({date:s.format(this.dateFormat),time:e,dateTime:s,format:r,range:!!a&&"start"})}static#m=(()=>dt7948.n(this.prototype,"fromConfig",[(0,h.default)("date","time","isRange","options.{format,timezone}")]))()
toConfig(t,e,a){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
const n=!e
let s
e&&!t&&(t=moment().format(this.dateFormat)),s=n?moment.tz(t,o.timezone).endOf("day"):moment.tz(`${t} ${e}`,o.timezone),n||(e=s.format(this.timeFormat))
let r=o.format
return n&&this.formats.includes(r)&&(r="LL"),i.default.create({date:s.format(this.dateFormat),time:e,dateTime:s,format:r,range:!!a&&"end"})}static#c=(()=>dt7948.n(this.prototype,"toConfig",[(0,h.default)("toDate","toTime","isRange","options.{timezone,format}")]))()
options(t,e,a,o){return i.default.create({recurring:t,timezones:e,timezone:a,format:o})}static#u=(()=>dt7948.n(this.prototype,"options",[(0,h.default)("recurring","timezones","timezone","format")]))()
computedConfig(t,e,a){return i.default.create({from:t,to:e,options:a})}static#f=(()=>dt7948.n(this.prototype,"computedConfig",[(0,h.default)("fromConfig.{date}","toConfig.{date}","options.{recurring,timezones,timezone,format}")]))()
currentUserTimezone(){return this.currentUser.user_option.timezone||moment.tz.guess()}static#p=(()=>dt7948.n(this.prototype,"currentUserTimezone",[h.default]))()
allTimezones(){return moment.tz.names()}static#h=(()=>dt7948.n(this.prototype,"allTimezones",[h.default]))()
formattedCurrentUserTimezone(t){return t.replace("_"," ").replace("Etc/","").replace("/",", ")}static#_=(()=>dt7948.n(this.prototype,"formattedCurrentUserTimezone",[(0,h.default)("currentUserTimezone")]))()
previewedFormats(t){return t.map(t=>({format:t,preview:moment().format(t)}))}static#g=(()=>dt7948.n(this.prototype,"previewedFormats",[(0,h.default)("formats")]))()
recurringOptions(){const t="discourse_local_dates.create.form.recurring"
return[{name:(0,T.i18n)(`${t}.every_day`),id:"1.days"},{name:(0,T.i18n)(`${t}.every_week`),id:"1.weeks"},{name:(0,T.i18n)(`${t}.every_two_weeks`),id:"2.weeks"},{name:(0,T.i18n)(`${t}.every_month`),id:"1.months"},{name:(0,T.i18n)(`${t}.every_two_months`),id:"2.months"},{name:(0,T.i18n)(`${t}.every_three_months`),id:"3.months"},{name:(0,T.i18n)(`${t}.every_six_months`),id:"6.months"},{name:(0,T.i18n)(`${t}.every_year`),id:"1.years"}]}static#z=(()=>dt7948.n(this.prototype,"recurringOptions",[h.default]))()
_generateDateMarkup(t,e,a,o){return(0,w.default)(t,e,a,o)}toggleModeBtnLabel(t){return t?"discourse_local_dates.create.form.simple_mode":"discourse_local_dates.create.form.advanced_mode"}static#T=(()=>dt7948.n(this.prototype,"toggleModeBtnLabel",[(0,h.default)("advancedMode")]))()
markup(t,e,a,o){let i
return a&&t.from&&(i=t.to&&t.to.range?this._generateDateMarkup(t.from,e,o,t.to):this._generateDateMarkup(t.from,e,o)),i}static#y=(()=>dt7948.n(this.prototype,"markup",[(0,h.default)("computedConfig.{from,to,options}","options","isValid","isRange")]))()
formattedFrom(t){return t.format("LLLL")}static#b=(()=>dt7948.n(this.prototype,"formattedFrom",[(0,h.default)("fromConfig.dateTime")]))()
formattedTo(t){return t.isValid()?t.format("LLLL"):(0,T.i18n)("discourse_local_dates.create.form.until")}static#v=(()=>dt7948.n(this.prototype,"formattedTo",[(0,h.default)("toConfig.dateTime")]))()
updateFormat(t,e){e?.preventDefault(),this.set("format",t)}static#w=(()=>dt7948.n(this.prototype,"updateFormat",[i.action]))()
selectedDate(t){return t?this.date:this.toDate}static#D=(()=>dt7948.n(this.prototype,"selectedDate",[(0,h.default)("fromSelected","toSelected")]))()
selectedTime(t){return t?this.time:this.toTime}static#L=(()=>dt7948.n(this.prototype,"selectedTime",[(0,h.default)("fromSelected","toSelected")]))()
changeSelectedDate(t){this.fromSelected?this.set("date",t):this.set("toDate",t)}static#$=(()=>dt7948.n(this.prototype,"changeSelectedDate",[i.action]))()
changeSelectedTime(t){this.fromSelected?this.set("time",t):this.set("toTime",t)}static#F=(()=>dt7948.n(this.prototype,"changeSelectedTime",[i.action]))()
eraseToDateTime(){this.setProperties({toDate:null,toTime:null}),this.focusFrom()}static#S=(()=>dt7948.n(this.prototype,"eraseToDateTime",[i.action]))()
focusFrom(){this.setProperties({fromSelected:!0,toSelected:!1,minDate:null})}static#k=(()=>dt7948.n(this.prototype,"focusFrom",[i.action]))()
focusTo(){this.setProperties({toSelected:!0,fromSelected:!1,minDate:this.get("fromConfig.date")})}static#C=(()=>dt7948.n(this.prototype,"focusTo",[i.action]))()
toggleAdvancedMode(){this.toggleProperty("advancedMode")}static#M=(()=>dt7948.n(this.prototype,"toggleAdvancedMode",[i.action]))()
save(){const t=this.markup
t&&(this.closeModal(),this.model.insertDate(t))}static#x=(()=>dt7948.n(this.prototype,"save",[i.action]))()
cancel(){this.closeModal()}static#P=(()=>dt7948.n(this.prototype,"cancel",[i.action]))()
static#E=(()=>(0,e.setComponentTemplate)((0,D.createTemplateFactory)({id:"v0TxdWoG",block:'[[[1,"\\n    "],[8,[32,0],[[24,0,"discourse-local-dates-create-modal -large"]],[["@title","@closeModal"],[[28,[32,1],["discourse_local_dates.title"],null],[30,1]]],[["body","footer"],[[[[1,"\\n        "],[10,0],[14,0,"form"],[12],[1,"\\n"],[41,[30,0,["isValid"]],[[[41,[30,0,["timezoneIsDifferentFromUserTimezone"]],[[[1,"              "],[10,0],[14,0,"preview alert alert-info"],[12],[1,"\\n                "],[1,[28,[32,1],["discourse_local_dates.create.form.current_timezone"],null]],[1,"\\n                "],[10,"b"],[12],[1,[30,0,["formattedCurrentUserTimezone"]]],[13],[1,[30,0,["currentPreview"]]],[1,"\\n              "],[13],[1,"\\n"]],[]],null]],[]],[[[1,"            "],[10,0],[14,0,"validation-error alert alert-error"],[12],[1,"\\n              "],[1,[28,[32,1],["discourse_local_dates.create.form.invalid_date"],null]],[1,"\\n            "],[13],[1,"\\n"]],[]]],[1,"\\n          "],[1,[30,0,["computeDate"]]],[1,"\\n\\n          "],[10,0],[14,0,"date-time-configuration"],[12],[1,"\\n            "],[10,0],[14,0,"inputs-panel"],[12],[1,"\\n              "],[10,0],[15,0,[29,["date-time-control from\\n                  ",[52,[30,0,["fromSelected"]],"is-selected"],"\\n                  ",[52,[30,0,["fromFilled"]],"is-filled"]]]],[12],[1,"\\n                "],[1,[28,[32,2],["calendar-days"],null]],[1,"\\n                "],[8,[32,3],[[24,1,"from-date-time"],[24,0,"date-time"],[24,"autofocus",""]],[["@action","@translatedLabel"],[[30,0,["focusFrom"]],[30,0,["formattedFrom"]]]],null],[1,"\\n              "],[13],[1,"\\n\\n              "],[10,0],[15,0,[29,["date-time-control to\\n                  ",[52,[30,0,["toSelected"]],"is-selected"],"\\n                  ",[52,[30,0,["toFilled"]],"is-filled"]]]],[12],[1,"\\n                "],[1,[28,[32,2],["calendar-days"],null]],[1,"\\n                "],[8,[32,3],[[24,0,"date-time"]],[["@action","@translatedLabel"],[[30,0,["focusTo"]],[30,0,["formattedTo"]]]],null],[1,"\\n"],[41,[30,0,["toFilled"]],[[[1,"                  "],[8,[32,3],[[24,0,"delete-to-date"]],[["@action","@icon"],[[30,0,["eraseToDateTime"]],"xmark"]],null],[1,"\\n"]],[]],null],[1,"              "],[13],[1,"\\n\\n"],[41,[30,0,["site","desktopView"]],[[[1,"                "],[8,[32,4],null,[["@options","@value","@onChange"],[[28,[32,5],null,[["icon"],["globe"]]],[30,0,["timezone"]],[28,[32,6],[[28,[31,1],[[30,0,["timezone"]]],null]],null]]],null],[1,"\\n"]],[]],null],[1,"            "],[13],[1,"\\n\\n            "],[10,0],[14,0,"picker-panel"],[12],[1,"\\n              "],[8,[32,7],null,[["@datePickerId","@date","@time","@minDate","@timeFormat","@dateFormat","@onChangeDate","@onChangeTime"],["local-date-create-form",[30,0,["selectedDate"]],[30,0,["selectedTime"]],[30,0,["minDate"]],[30,0,["timeFormat"]],[30,0,["dateFormat"]],[30,0,["changeSelectedDate"]],[30,0,["changeSelectedTime"]]]],null],[1,"\\n            "],[13],[1,"\\n\\n"],[41,[30,0,["site","mobileView"]],[[[1,"              "],[8,[32,4],null,[["@value","@options","@onChange"],[[30,0,["timezone"]],[28,[32,5],null,[["icon"],["globe"]]],[28,[32,6],[[28,[31,1],[[30,0,["timezone"]]],null]],null]]],null],[1,"\\n"]],[]],null],[1,"          "],[13],[1,"\\n\\n"],[41,[30,0,["advancedMode"]],[[[1,"            "],[10,0],[14,0,"advanced-options"],[12],[1,"\\n"],[41,[51,[30,0,["isRange"]]],[[[1,"                "],[10,0],[14,0,"control-group recurrence"],[12],[1,"\\n                  "],[10,"label"],[14,0,"control-label"],[12],[1,"\\n                    "],[1,[28,[32,1],["discourse_local_dates.create.form.recurring_title"],null]],[1,"\\n                  "],[13],[1,"\\n                  "],[10,2],[12],[1,[28,[32,8],[[28,[32,1],["discourse_local_dates.create.form.recurring_description"],null]],null]],[13],[1,"\\n                  "],[10,0],[14,0,"controls"],[12],[1,"\\n                    "],[8,[32,9],[[24,0,"recurrence-input"]],[["@content","@value","@onChange","@options"],[[30,0,["recurringOptions"]],[30,0,["recurring"]],[28,[32,6],[[28,[31,1],[[30,0,["recurring"]]],null]],null],[28,[32,5],null,[["none"],["discourse_local_dates.create.form.recurring_none"]]]]],null],[1,"\\n                  "],[13],[1,"\\n                "],[13],[1,"\\n"]],[]],null],[1,"\\n              "],[10,0],[14,0,"control-group timezones"],[12],[1,"\\n                "],[10,"label"],[12],[1,[28,[32,1],["discourse_local_dates.create.form.timezones_title"],null]],[13],[1,"\\n                "],[10,2],[12],[1,[28,[32,1],["discourse_local_dates.create.form.timezones_description"],null]],[13],[1,"\\n                "],[10,0],[14,0,"controls"],[12],[1,"\\n                  "],[8,[32,10],[[24,0,"timezones-input"]],[["@valueProperty","@nameProperty","@content","@value","@options"],[null,null,[30,0,["allTimezones"]],[30,0,["timezones"]],[28,[32,5],null,[["allowAny","maximum"],[false,5]]]]],null],[1,"\\n                "],[13],[1,"\\n              "],[13],[1,"\\n\\n              "],[10,0],[14,0,"control-group format"],[12],[1,"\\n                "],[10,"label"],[12],[1,[28,[32,1],["discourse_local_dates.create.form.format_title"],null]],[13],[1,"\\n                "],[10,2],[12],[1,"\\n                  "],[1,[28,[32,1],["discourse_local_dates.create.form.format_description"],null]],[1,"\\n                  "],[10,3],[14,"target","_blank"],[14,6,"https://momentjs.com/docs/#/parsing/string-format/"],[14,"rel","noopener noreferrer"],[12],[1,"\\n                    "],[1,[28,[32,2],["circle-question"],null]],[1,"\\n                  "],[13],[1,"\\n                "],[13],[1,"\\n                "],[10,0],[14,0,"controls"],[12],[1,"\\n                  "],[8,[32,11],[[24,0,"format-input"]],[["@value"],[[30,0,["format"]]]],null],[1,"\\n                "],[13],[1,"\\n              "],[13],[1,"\\n              "],[10,0],[14,0,"control-group"],[12],[1,"\\n                "],[10,"ul"],[14,0,"formats"],[12],[1,"\\n"],[42,[28,[31,4],[[28,[31,4],[[30,0,["previewedFormats"]]],null]],null],null,[[[1,"                    "],[10,"li"],[14,0,"format"],[12],[1,"\\n                      "],[11,3],[24,0,"moment-format"],[24,6,""],[4,[32,12],["click",[28,[32,6],[[30,0,["updateFormat"]],[30,2,["format"]]],null]],null],[12],[1,"\\n                        "],[1,[30,2,["format"]]],[1,"\\n                      "],[13],[1,"\\n                      "],[10,1],[14,0,"previewed-format"],[12],[1,"\\n                        "],[1,[30,2,["preview"]]],[1,"\\n                      "],[13],[1,"\\n                    "],[13],[1,"\\n"]],[2]],null],[1,"                "],[13],[1,"\\n              "],[13],[1,"\\n            "],[13],[1,"\\n"]],[]],null],[1,"        "],[13],[1,"\\n      "]],[]],[[[1,"\\n\\n"],[41,[30,0,["isValid"]],[[[1,"          "],[8,[32,3],[[24,0,"btn-primary"]],[["@action","@label"],[[30,0,["save"]],"discourse_local_dates.create.form.insert"]],null],[1,"\\n"]],[]],null],[1,"\\n        "],[8,[32,3],[[24,0,"btn-flat"]],[["@action","@translatedLabel"],[[30,0,["cancel"]],[28,[32,1],["cancel"],null]]],null],[1,"\\n\\n        "],[8,[32,3],[[24,0,"btn-default advanced-mode-btn"]],[["@action","@icon","@label"],[[30,0,["toggleAdvancedMode"]],"gear",[30,0,["toggleModeBtnLabel"]]]],null],[1,"\\n      "]],[]]]]],[1,"\\n  "]],["@closeModal","previewedFormat"],false,["if","mut","unless","each","-track-array"]]',moduleName:"/var/www/discourse/app/assets/javascripts/discourse/discourse/plugins/discourse-local-dates/discourse/components/modal/local-dates-create.js",scope:()=>[m.default,T.i18n,u.default,d.default,v.default,a.hash,a.fn,l.default,f.default,y.default,b.default,c.default,o.on],isStrictMode:!0}),this))()}t.default=L}),define("discourse/plugins/discourse-local-dates/initializers/discourse-local-dates",["exports","@ember/owner","@ember/service","@ember/template","discourse/lib/decorators","discourse/lib/download-calendar","discourse/lib/icon-library","discourse/lib/plugin-api","discourse/lib/to-markdown","discourse-i18n","discourse/plugins/discourse-local-dates/lib/local-date-markup-generator","discourse/plugins/discourse-local-dates/discourse/components/modal/local-dates-create","discourse/plugins/discourse-local-dates/lib/local-date-builder","discourse/plugins/discourse-local-dates/lib/rich-editor-extension"],function(t,e,a,o,i,n,s,r,l,d,m,c,u,f){"use strict"
function p(t,e){if(!e.discourse_local_dates_enabled)return
const a=moment.tz.guess()
t.forEach((t,o,i)=>{const n=_(t,e)
if("to"===t.attributes["data-range"]?.value&&0!==o&&"from"===i[o-1].attributes["data-range"]?.value){(function(t,e){if(!t.attributes["data-time"]||!e.attributes["data-time"])return!1
const a=t.attributes["data-timezone"].value,o=moment(h(t)).tz(a),i=moment(h(e)).tz(a)
return o.isSame(i,"day")})(i[o-1],t)&&(n.sameLocalDayAsFrom=!0)}const r=new u.default(n,a).build()
t.innerText="",t.insertAdjacentHTML("beforeend",`${(0,s.iconHTML)("earth-americas")}\n        <span class="relative-time">${r.formatted}</span>`),t.setAttribute("aria-label",r.textPreview)
const l=["cooked-date"]
r.pastEvent&&l.push("past"),t.classList.add(...l)})}function h(t){return`${t.attributes["data-date"].value}T${t.attributes["data-time"].value}`}function _(t,e){const a={},o=t.dataset
return 2===z(t).length&&(a.duration=function(t){const[e,a]=z(t).map(t=>t.dataset),o=moment(`${e.date} ${e.time||""}`.trim()),i=moment(`${a.date} ${a.time||""}`.trim()).diff(o,"minutes")
return t.dataset===e?i:-i}(t)),a.time=o.time,a.date=o.date,a.recurring=o.recurring,a.timezones=(o.timezones||e.discourse_local_dates_default_timezones||"Etc/UTC").split("|").filter(Boolean),a.timezone=o.timezone,a.calendar="on"===(o.calendar||"on"),a.displayedTimezone=o.displayedTimezone,a.format=o.format||(a.time?"LLL":"LL"),a.countdown=o.countdown,a}function g(t){const e={}
return e.time=t.attributes["data-time"],e.date=t.attributes["data-date"],e.recurring=t.attributes["data-recurring"],e.timezones=t.attributes["data-timezones"],e.timezone=t.attributes["data-timezone"],e.calendar="on"===(t.attributes["data-calendar"]||"on"),e.displayedTimezone=t.attributes["data-displayed-timezone"],e.format=t.attributes["data-format"],e.countdown=t.attributes["data-countdown"],e.range=t.attributes["data-range"],e}function z(t){return t.parentElement?t.dataset.range?function(t){const e=[],a=Array.from(t.parentElement.children).filter(t=>t.dataset.range)
for(;a.length>0;)e.push(a.splice(0,2))
return e}(t).find(e=>e.includes(t)):[t]:[]}function T(t){t.registerRichEditorExtension(f.default)
const e=t.container.lookup("service:modal"),a=t.container.lookup("service:site-settings"),o=(0,d.i18n)("discourse_local_dates.default_title",{site_name:a.title})
t.decorateCookedElement((t,e)=>{const i=t.querySelectorAll(".discourse-local-date")
p(i,a)
const n=e?.getModel()?.topic?.title
i.forEach(t=>{t.dataset.title=t.dataset.title||n||o})}),t.addComposerToolbarPopupMenuOption({name:"local-dates",label:"discourse_local_dates.title",icon:"far-clock",action:t=>e.show(c.default,{model:{insertDate:e=>t.addText(e)}}),shortcut:"Shift+.",alwaysShowShortcut:!0,shortcutAction:e=>{const a=t.getCurrentUser().user_option.timezone,o=moment().format("HH:mm:ss"),i=moment().format("YYYY-MM-DD")
e.addText(`[date=${i} time=${o} timezone="${a}"]`)}}),(0,l.addTextDecorateCallback)(function(t,e,a,o){if(o.discourseLocalDateStartRangeOpts&&e?.attributes.class?.includes("discourse-local-date")&&"→"===t)return""}),(0,l.addTagDecorateCallback)(function(){if(this.element.attributes.class?.includes("discourse-local-date")){if(this.metadata.discourseLocalDateStartRangeOpts){const t=this.metadata.discourseLocalDateStartRangeOpts,e=g(this.element),a=(0,m.default)({date:t.date,time:t.time,format:t.format},e,!0,{date:e.date,time:e.time,format:e.format})
return this.prefix=a,this.metadata.discourseLocalDateStartRangeOpts=null,""}if("true"===this.element.attributes["data-range"]||"from"===this.element.attributes["data-range"]||"to"===this.element.attributes["data-range"])return this.metadata.discourseLocalDateStartRangeOpts=g(this.element),""
const t=g(this.element),e=(0,m.default)({date:t.date,time:t.time,format:t.format},t,!1)
return this.prefix=e,""}})}function y(t,e){const a=_(t,e),o=new u.default(a,moment.tz.guess()).build().previews.map(t=>{const e=document.createElement("div")
e.classList.add("preview"),t.current&&e.classList.add("current")
const a=document.createElement("span")
a.classList.add("timezone"),a.innerText=t.timezone,e.appendChild(a)
const o=document.createElement("span")
return o.classList.add("date-time"),o.innerHTML=t.formatted,e.appendChild(o),e}),i=document.createElement("div")
i.classList.add("locale-dates-previews"),o.forEach(t=>i.appendChild(t))
const n=function(t){const[e,a]=z(t).map(t=>t.dataset),[o,i]=function(t,e){let a,o
a=moment.tz(`${t.date} ${t.time||""}`.trim(),t.timezone),e&&(o=moment.tz(`${e.date} ${e.time||""}`.trim(),e.timezone))
return[a,o]}(e,a)
if(o<moment().tz(e.timezone))return!1
const n=document.createElement("div")
n.classList.add("download-calendar"),n.innerHTML=`${(0,s.renderIcon)("string","file")} ${(0,d.i18n)("download_calendar.add_to_calendar")}`,n.setAttribute("data-starts-at",o.toISOString()),a&&n.setAttribute("data-ends-at",i.toISOString())
e.time||a||n.setAttribute("data-ends-at",o.add(24,"hours").toISOString())
return n.setAttribute("data-title",e.title),n}(t)
return n&&i.appendChild(n),i.outerHTML}Object.defineProperty(t,"__esModule",{value:!0}),t.applyLocalDates=p,t.default=void 0
class b{static#t=(()=>dt7948.g(this.prototype,"siteSettings",[a.service]))()
#A=(()=>{dt7948.i(this,"siteSettings")})()
static#a=(()=>dt7948.g(this.prototype,"tooltip",[a.service]))()
#O=(()=>{dt7948.i(this,"tooltip")})()
constructor(t){(0,e.setOwner)(this,t),window.addEventListener("click",this.showDatePopover,{passive:!0}),this.siteSettings.discourse_local_dates_enabled&&(0,r.withPluginApi)("0.8.8",T)}showDatePopover(t){if(t?.target?.classList?.contains("download-calendar")){const e=t.target.dataset
return(0,n.downloadCalendar)(e.title,[{startsAt:e.startsAt,endsAt:e.endsAt}]),this.tooltip.close("local-date")}if(t?.target?.classList?.contains("discourse-local-date"))return this.tooltip.show(t.target,{identifier:"local-date",content:(0,o.htmlSafe)(y(t.target,this.siteSettings))})}static#i=(()=>dt7948.n(this.prototype,"showDatePopover",[i.bind]))()
teardown(){window.removeEventListener("click",this.showDatePopover)}}t.default={initialize(t){this.instance=new b(t)},teardown(){this.instance.teardown(),this.instance=null}}}),define("discourse/plugins/discourse-local-dates/lib/date-with-zone-helper",["exports","@ember/object"],function(t,e){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
class a{static fromDatetime(t,e,o){return new a({year:t.year(),month:t.month(),day:t.date(),hour:t.hour(),minute:t.minute(),second:t.second(),timezone:e,localTimezone:o})}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
this.timezone=t.timezone||"UTC",this.localTimezone=t.localTimezone||moment.tz.guess(),this.datetime=moment.tz((0,e.getProperties)(t,["year","month","day","hour","minute","second"]),this.timezone)}isDST(){return this.datetime.tz(this.localTimezone).isDST()}unitRepetitionsBetweenDates(t,e){const[a,o]=t.split("."),i=Math.abs(this.datetime.diff(e,o,!0)),n=i/a%1
return Math.trunc(i/a)*parseInt(a,10)+(n>0?parseInt(a,10):0)}add(t,e){return this._fromDatetime(this.datetime.clone().add(t,e),this.timezone,this.localTimezone)}subtract(t,e){return this._fromDatetime(this.datetime.clone().subtract(t,e),this.timezone,this.localTimezone)}datetimeWithZone(t){return this.datetime.clone().tz(t)}format(t){return t?this.datetime.tz(this.localTimezone).format(t):this.datetime.tz(this.localTimezone).toISOString(!0)}_fromDatetime(t,e,o){return a.fromDatetime(t,e,o)}}t.default=a}),define("discourse/plugins/discourse-local-dates/lib/discourse-markdown/discourse-local-dates",["exports"],function(t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.setup=function(t){t.allowList(["span.discourse-local-date","span[aria-label]","span[data-calendar]","span[data-countdown]","span[data-date]","span[data-displayed-timezone]","span[data-email-preview]","span[data-format]","span[data-recurring]","span[data-time]","span[data-timezone]","span[data-timezones]"]),t.registerOptions((t,e)=>{t.datesEmailFormat=e.discourse_local_dates_email_format,t.datesEmailTimezone=e.discourse_local_dates_email_timezone,t.features["discourse-local-dates"]=!!e.discourse_local_dates_enabled}),t.registerPlugin(t=>{t.core.textPostProcess.ruler.push("date",{matcher:/\[date=.+?\]/,onMatch:o}),t.core.textPostProcess.ruler.push("date-range",{matcher:/\[date-range .+?\]/,onMatch:i})})},moment.tz.link(["Asia/Kolkata|IST","Asia/Seoul|KST","Asia/Tokyo|JST"])
const e=moment.tz.names()
function a(t,a,o,i){t.timezone&&(e.includes(t.timezone)||delete t.timezone),t.displayedTimezone&&(e.includes(t.displayedTimezone)||delete t.displayedTimezone),t.timezones&&(t.timezones=t.timezones.split("|").filter(t=>e.includes(t)).join("|"))
const n=moment.tz([t._default||t.date,t.time].filter(Boolean).join("T"),t.timezone||"Etc/UTC"),s=a.md.options.discourse.datesEmailFormat||moment.defaultFormat,r=a.md.options.discourse.datesEmailTimezone||"Etc/UTC"
t.emailPreview=`${n.utc().tz(r).format(s)}`
let l=new a.Token("span_open","span",1)
l.attrs=[["class","discourse-local-date"]],i(l,t,"date"),o.push(l),l=new a.Token("text","",0),l.content=n.utc().format(t.format),o.push(l),l=new a.Token("span_close","span",-1),o.push(l)}function o(t,e,o,i){let{parseBBCodeTag:n,applyDataAttributes:s}=i
const r=n(e[0],0,e[0].length)
if("date"===r?.tag)a(r.attrs,o,t,s)
else{let a=new o.Token("text","",0)
a.content=e[0],t.push(a)}}function i(t,e,o,i){let n,{parseBBCodeTag:s,applyDataAttributes:r}=i
const l=s(e[0],0,e[0].length)
if("date-range"===l?.tag){if(l.attrs.from){const{from:e,...i}={...l.attrs,range:"from"}
delete i.to,[i.date,i.time]=e.split("T"),a(i,o,t,r)}if(l.attrs.from&&l.attrs.to&&(n=new o.Token("text","",0),n.content="→",t.push(n)),l.attrs.to){const{to:e,...i}={...l.attrs,range:"to"}
delete i.from,[i.date,i.time]=e.split("T"),a(i,o,t,r)}}else n=new o.Token("text","",0),n.content=e[0],t.push(n)}}),define("discourse/plugins/discourse-local-dates/lib/local-date-builder",["exports","discourse/lib/icon-library","discourse-i18n","discourse/plugins/discourse-local-dates/lib/date-with-zone-helper"],function(t,e,a,o){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
const i="h:mm A"
t.default=class{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0
this.time=t.time,this.date=t.date,this.recurring=t.recurring,this.sameLocalDayAsFrom=t.sameLocalDayAsFrom,this.timezones=Array.from(new Set((t.timezones||[]).filter(Boolean))),this.timezone=t.timezone||"UTC",this.calendar=void 0===t.calendar||t.calendar,this.displayedTimezone=t.displayedTimezone,this.format=t.format||(this.time?"LLL":"LL"),this.countdown=t.countdown,this.duration=t.duration,this.localTimezone=e}build(){const[t,e,a]=this.date.split("-").map(t=>parseInt(t,10)),[i,n,s]=(this.time||"").split(":").map(t=>t?parseInt(t,10):void 0)
let r
r=this.time?this.displayedTimezone||this.localTimezone:this.displayedTimezone||this.timezone||this.localTimezone
let l=new o.default({year:t,month:e?e-1:null,day:a,hour:i,minute:n,second:s,timezone:this.timezone,localTimezone:this.localTimezone})
if(this.recurring&&moment().isAfter(l.datetime)){const t=this.recurring.split(".")[1],e=l.unitRepetitionsBetweenDates(this.recurring,moment.tz(this.localTimezone))
l=l.add(e,t)}const d=this._generatePreviews(l,r),m=void 0!==i
return{pastEvent:!this.recurring&&moment.tz(this.localTimezone).isAfter(l.datetime),formatted:this._applyFormatting(l,r,m),previews:d,textPreview:this._generateTextPreviews(d)}}_generateTextPreviews(t){return t.map(t=>`${this._zoneWithoutPrefix(t.timezone)} ${t.formatted}`).join(", ")}_generatePreviews(t,e){const a=[],i=this.timezones.filter(t=>!this._isEqualZones(t,this.localTimezone))
return a.push({timezone:this._zoneWithoutPrefix(this.localTimezone),current:!0,formatted:this._createDateTimeRange(o.default.fromDatetime(t.datetime,t.timezone,this.localTimezone),this.time,this.duration)}),!this.timezone||e!==this.localTimezone||this.timezone===e||this._isEqualZones(e,this.timezone)||this.timezones.any(t=>this._isEqualZones(t,this.timezone))||i.unshift(this.timezone),i.forEach(i=>{this._isEqualZones(i,e)||(this._isEqualZones(i,this.localTimezone)&&(i=this.localTimezone),a.push({timezone:this._zoneWithoutPrefix(i),formatted:this._createDateTimeRange(o.default.fromDatetime(t.datetime,t.timezone,i),this.time,this.duration)}))}),a.uniqBy("timezone")}_isEqualZones(t,e){return!!(!t&&!e||t&&e)&&(!(!t.includes(e)&&!e.includes(t))||moment.tz(t).utcOffset()===moment.tz(e).utcOffset())}_createDateTimeRange(t,e,a){const[o,n]=this._calculateDatesForRange(t,e,a)
let s=[o.format("dddd, LL"),this._optionalTimeIcon(o,n),o.format(i)]
return n&&(s=s.concat(["→",n.format(this._endDateFormat(o,n))])),s.filter(Boolean).join(" ")}_shortFormat(t,e){return e.datetime.diff(t.datetime,"days")<1}_optionalTimeIcon(t,a){if(!a||this._shortFormat(t,a))return`<br />${(0,e.renderIcon)("string","clock")}`}_endDateFormat(t,e){return this._shortFormat(t,e)?i:"LLLL"}_calculateDatesForRange(t,e,a){if(e&&!a)return[t]
const o=[t,a?t.add(a,"minutes"):t.add(24,"hours")]
return a<0?o.reverse():o}_applyFormatting(t,e,o){if(this.countdown){const e=moment.tz(this.localTimezone).diff(t.datetime)
return e<0?moment.duration(e).humanize():(0,a.i18n)("discourse_local_dates.relative_dates.countdown.passed")}const i=this._isEqualZones(e,this.localTimezone)
if(this.calendar){const a=moment.tz(this.localTimezone).isBetween(t.subtract(2,"day").datetime,t.add(1,"day").datetime.endOf("day"))
if(this.sameLocalDayAsFrom)return this._timeOnlyFormat(t,e)
if(a&&i){const e=t.datetimeWithZone(this.localTimezone)
return o&&0===e.hours()&&0===e.minutes()?e.format("dddd"):e.calendar(moment.tz(t.timezone),this._calendarFormats(this.time?this.time:null))}}return i?t.format(this.format):this._formatWithZone(t,e,this.format)}_calendarFormats(t){return{sameDay:this._translateCalendarKey(t,"today"),nextDay:this._translateCalendarKey(t,"tomorrow"),lastDay:this._translateCalendarKey(t,"yesterday"),sameElse:"L"}}_translateCalendarKey(t,e){const o=(0,a.i18n)(`discourse_local_dates.relative_dates.${e}`,{time:"LT"})
return t?o.split("LT").map(t=>`[${t}]`).join("LT"):`[${o.replace(" LT","")}]`}_formatTimezone(t){return t.replace("_"," ").replace("Etc/","").split("/")}_zoneWithoutPrefix(t){const[e,a]=this._formatTimezone(t)
return a||e}_formatWithZone(t,e,a){return`${t.datetimeWithZone(e).format(a)} (${this._zoneWithoutPrefix(e)})`}_timeOnlyFormat(t,e){return this._formatWithZone(t,e,"LT")}}}),define("discourse/plugins/discourse-local-dates/lib/local-date-markup-generator",["exports","@ember/utils"],function(t,e){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(t,a,o,i){let n=""
if(o){n+=`[date-range from=${[t.date,t.time].filter(t=>!(0,e.isEmpty)(t)).join("T")} to=${[i.date,i.time].filter(t=>!(0,e.isEmpty)(t)).join("T")}`}else n+=`[date=${t.date}`
t.time&&!o&&(n+=` time=${t.time}`)
t.format&&t.format.length&&(n+=` format="${t.format}"`)
a.timezone&&(n+=` timezone="${a.timezone}"`)
a.countdown&&(n+=` countdown="${a.countdown}"`)
a.displayedTimezone&&(n+=` displayedTimezone="${a.displayedTimezone}"`)
a.timezones&&a.timezones.length&&(Array.isArray(a.timezones)?n+=` timezones="${a.timezones.join("|")}"`:n+=` timezones="${a.timezones}"`)
a.recurring&&!o&&(n+=` recurring="${a.recurring}"`)
return n+="]",n}}),define("discourse/plugins/discourse-local-dates/lib/rich-editor-extension",["exports"],function(t){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
const e={nodeSpec:{local_date:{attrs:{date:{},time:{},timezone:{default:null}},group:"inline",inline:!0,parseDOM:[{tag:"span.discourse-local-date[data-date]",getAttrs:t=>({date:t.getAttribute("data-date"),time:t.getAttribute("data-time"),timezone:t.getAttribute("data-timezone")})}],toDOM:t=>{const e=t.attrs.time?` ${t.attrs.time}`:""
return["span",{class:"discourse-local-date cooked-date","data-date":t.attrs.date,"data-time":t.attrs.time,"data-timezone":t.attrs.timezone},`${t.attrs.date}${e}`]}},local_date_range:{attrs:{fromDate:{},toDate:{default:null},fromTime:{},toTime:{},timezone:{default:null}},group:"inline",inline:!0,parseDOM:[{tag:"span.discourse-local-date-range",getAttrs:t=>({fromDate:t.dataset.fromDate,toDate:t.dataset.toDate,fromTime:t.dataset.fromTime,toTime:t.dataset.toTime,timezone:t.dataset.timezone})}],toDOM:t=>{const e=t.attrs.fromTime?` ${t.attrs.fromTime}`:"",a=t.attrs.toTime?` ${t.attrs.toTime}`:""
return["span",{class:"discourse-local-date-range"},["span",{class:"discourse-local-date cooked-date","data-range":"from","data-date":t.attrs.fromDate,"data-time":t.attrs.fromTime,"data-timezone":t.attrs.timezone},`${t.attrs.fromDate}${e}`]," → ",["span",{class:"discourse-local-date cooked-date","data-range":"to","data-date":t.attrs.toDate,"data-time":t.attrs.toTime,"data-timezone":t.attrs.timezone},`${t.attrs.toDate}${a}`]]}}},parse:{span_open(t,e,a,o){if("discourse-local-date"===e.attrGet("class"))return"from"===e.attrGet("data-range")?(t.openNode(t.schema.nodes.local_date_range,{fromDate:e.attrGet("data-date"),fromTime:e.attrGet("data-time"),timezone:e.attrGet("data-timezone")}),t.__localDateRange=!0,a.splice(o+1,1),a.splice(o+2,1),a.splice(o+3,1),!0):"to"===e.attrGet("data-range")?(t.top().attrs.toDate=e.attrGet("data-date"),t.top().attrs.toTime=e.attrGet("data-time"),delete t.__localDateRange,!0):(t.openNode(t.schema.nodes.local_date,{date:e.attrGet("data-date"),time:e.attrGet("data-time"),timezone:e.attrGet("data-timezone")}),a.splice(o+1,1),!0)},span_close(t){if(["local_date","local_date_range"].includes(t.top().type.name))return t.__localDateRange||t.closeNode(),!0}},serializeNode(t){let{utils:{isBoundary:e}}=t
return{local_date(t,a,o,i){t.flushClose(),e(t.out,t.out.length-1)||t.write(" ")
const n=a.attrs.time?` time=${a.attrs.time}`:"",s=a.attrs.timezone?` timezone="${a.attrs.timezone}"`:""
t.write(`[date=${a.attrs.date}${n}${s}]`)
const r=o.childCount>i+1?o.child(i+1):null
r?.isText&&!e(r.text,0)&&t.write(" ")},local_date_range(t,a,o,i){t.flushClose(),e(t.out,t.out.length-1)||t.write(" ")
const n=a.attrs.timezone?` timezone="${a.attrs.timezone}"`:"",s=a.attrs.fromDate+(a.attrs.fromTime?`T${a.attrs.fromTime}`:""),r=a.attrs.toDate+(a.attrs.toTime?`T${a.attrs.toTime}`:"")
t.write(`[date-range from=${s} to=${r}${n}]`)
const l=o.childCount>i+1?o.child(i+1):null
l?.isText&&!e(l.text,0)&&t.write(" ")}}}}
t.default=e})

//# sourceMappingURL=discourse-local-dates-c1bf5cbd.map