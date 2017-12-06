function initMobileNav(){$(".menu-mobile-toggle").click(function(t){t.preventDefault(),$(".menu, .menu-mobile-toggle").toggleClass("is-active")})}function initNavHide(){var t=0,e=$(window),i=$(".menu, .subnav");e.on("scroll",function(){var n=e.scrollTop();n>t&&$(document).scrollTop()>=300?(i.addClass("hidden"),t=n):(i.removeClass("hidden"),t=n)})}function homeHeroNav(){"/"!=window.location.pathname&&"/index.html"!=window.location.pathname&&"/braveux/"!=window.location.pathname&&"/braveux/index.html"!=window.location.pathname||$(".menu-home-trigger").waypoint(function(t){"down"===t?$(".menu-home").removeClass("active"):$(".menu-home").addClass("active")})}function subnavIndicators(){var t=document.querySelector(".subnav-container"),e=t.scrollWidth-t.clientWidth,i=$(".subnav-scroll-indicator--left"),n=$(".subnav-scroll-indicator--right"),o=$(".subnav-container").scrollLeft();t.scrollWidth==t.clientWidth?(i.addClass("is-hidden"),n.addClass("is-hidden")):o<=0?(i.addClass("is-hidden"),n.removeClass("is-hidden")):o>=e?(n.addClass("is-hidden"),i.removeClass("is-hidden"),$(".subnav__scroll-indicator").removeClass("scrolled")):(i.removeClass("is-hidden"),n.removeClass("is-hidden"))}function initEgg(){var t=$(".footer-stars");t.click(function(e){e.preventDefault(),$(".footer").toggleClass("footer-egg"),$("html, body").animate({scrollTop:t.offset().top},900)})}function toggleSection(t){var e=$(t+"-btn"),i=$(t+"-box");e.click(function(t){t.stopPropagation(),t.preventDefault(),$(this).toggleClass("is-active"),$(this).hasClass("is-active")?$(i).css("max-height",$(i).get(0).scrollHeight):$(i).css("max-height",0)})}function sectionJump(){$("a.btn").click(function(t){var e=$("html").find(this).attr("href");"#"==e[0]&&(t.preventDefault(),t.stopPropagation(),$("html, body").animate({scrollTop:$(e).offset().top},900))})}function caseTeaseNext(){var t=$(".cta-button-right");t.waypoint({handler:function(e){"down"===e?t.addClass("is-expanded"):t.removeClass("is-expanded")},offset:"bottom-in-view"})}function scrollReveal(){window.sr=ScrollReveal();var t={duration:700,distance:"30%",easing:"ease-in-out",origin:"top",scale:1,viewFactor:.5},e={duration:700,distance:"30%",easing:"ease-in-out",origin:"right",scale:1,viewFactor:.5},i={duration:700,distance:"30%",easing:"ease-in-out",origin:"bottom",scale:1,viewFactor:.5},n={duration:700,distance:"30%",easing:"ease-in-out",origin:"left",scale:1,viewFactor:.5},o={duration:700,distance:"40px",easing:"ease-in-out",origin:"bottom",scale:1,viewFactor:.9},r={duration:700,distance:"0",easing:"ease-in-out",scale:1,viewFactor:.5},s={duration:700,distance:"30px",easing:"ease-in-out",rotate:{z:10},scale:1.1,viewFactor:.6},a={duration:1e3,distance:"30%",easing:"ease-in-out",origin:"bottom",scale:1,viewFactor:.1};sr.reveal(".case-referral-quote-icon",{duration:1e3,distance:"40px",easing:"ease-out",origin:"top",scale:1,viewFactor:.9}),sr.reveal(".pin",{duration:700,distance:"40px",easing:"ease-out",origin:"top",scale:1,viewFactor:.9},300),sr.reveal(".work-card",{duration:600,distance:"60px",easing:"ease-out",origin:"bottom",scale:1,viewFactor:.5,beforeReveal:function(t){t.classList.add("is-visible")}},150),sr.reveal(".inner-block-content",o),sr.reveal(".case-exec-summary-text",r),sr.reveal(".sr-delay",{delay:300}),sr.reveal(".sr-delay-double",{delay:600}),sr.reveal(".sr-delay-tripple",{delay:900}),sr.reveal(".sr-half-view",{viewFactor:.5}),sr.reveal(".sr-reveal",r),sr.reveal(".sr-rotate",s),sr.reveal(".sr-top",t),sr.reveal(".sr-right",e),sr.reveal(".sr-bottom",i),sr.reveal(".sr-left",n),sr.reveal(".sr-tall",a),sr.reveal(".case-breakdown-box",o,200),sr.reveal(".sr-stagger-rotate",s,200),sr.reveal(".sr-stagger-reveal",r,200),sr.reveal(".sr-stagger-top",t,200),sr.reveal(".sr-stagger-right",e,200),sr.reveal(".sr-stagger-bottom",i,150),sr.reveal(".sr-stagger-left",n,200),sr.reveal(".unbox-forklift .inner-block-image:nth-of-type(1)",{distance:"50px",origin:"bottom"}),sr.reveal(".unbox-forklift .inner-block-image:nth-of-type(2)",{distance:"100px",origin:"left",delay:"500"}),sr.reveal(".unbox-forklift .inner-block-image:nth-of-type(3)",{distance:"50px",origin:"right",delay:"1000"}),sr.reveal(".unbox-forklift .inner-block-image:nth-of-type(4)",{distance:"20px",origin:"top",delay:"1500"})}function contactCardFlip(){if($("body").find(".contact-letter").length){var t=$(".contact-letter");t.on("click",function(){t.toggleClass("is-flipped")}),new Waypoint({element:t,handler:function(e){"down"==e?t.addClass("is-flipped"):t.removeClass("is-flipped")},offset:"25%"})}}function videoPlay(){$("video").each(function(t,e){$(this).hasClass("marquee__video")||new Waypoint.Inview({element:$(this),enter:function(){e.play()},exited:function(){e.pause()}})})}function imageRatio(){$(".lazy-ratio").each(function(){var t=$(this),e=100*parseFloat(t.css("width"))/(parseFloat(t.parent().css("width"))-(parseFloat(t.parent().css("padding-left"))+parseFloat(t.parent().css("padding-right")))),i=(this.dataset.height/this.dataset.width*e).toFixed(2);console.log(this.dataset.height+" / "+this.dataset.width+" * "+e+" = "+i+"%"),i>=0&&t.css("padding-bottom",i+"%").removeAttr("data-height data-width")})}function navCurrent(){var t=window.location.href.split("/"),e=t[t.length-1],i=$('.subnav-item[href*="'+e+'"]');$("body").find(".subnav").length&&i.addClass("is-active")}function introAnimate(){var t=$(".case-header-logo, .case-header-client-name, .case-header-tagline, .case-header-type");new TimelineMax({delay:.5}).staggerFromTo(t,2,{autoAlpha:0},{autoAlpha:1},.25,0).staggerFrom(t,.8,{y:"100px",ease:Power1.easeOut},.15,0)}!function(){"use strict";function t(n){if(!n)throw new Error("No options passed to Waypoint constructor");if(!n.element)throw new Error("No element option passed to Waypoint constructor");if(!n.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,n),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=n.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var n in i)e.push(i[n]);for(var o=0,r=e.length;r>o;o++)e[o][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.Context.refreshAll();for(var e in i)i[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=o.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,n[t.waypointContextKey]=this,i+=1,o.windowContext||(o.windowContext=!0,o.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,n={},o=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;t&&e&&!i&&(this.adapter.off(".waypoints"),delete n[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,o.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||o.isTouch)&&(e.didScroll=!0,o.requestAnimationFrame(t))})},e.prototype.handleResize=function(){o.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var n=e[i],o=n.newScroll>n.oldScroll,r=o?n.forward:n.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s];if(null!==a.triggerPoint){var l=n.oldScroll<a.triggerPoint,c=n.newScroll>=a.triggerPoint,d=l&&c,u=!l&&!c;(d||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}}for(var h in t)t[h].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?o.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?o.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var n=0,o=t.length;o>n;n++)t[n].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),n={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,c,d,u,h,f=this.waypoints[r][a],p=f.options.offset,g=f.triggerPoint,v=0,w=null==g;f.element!==f.element.window&&(v=f.adapter.offset()[s.offsetProp]),"function"==typeof p?p=p.apply(f):"string"==typeof p&&(p=parseFloat(p),f.options.offset.indexOf("%")>-1&&(p=Math.ceil(s.contextDimension*p/100))),l=s.contextScroll-s.contextOffset,f.triggerPoint=Math.floor(v+l-p),c=g<s.oldScroll,d=f.triggerPoint>=s.oldScroll,u=c&&d,h=!c&&!d,!w&&u?(f.queueTrigger(s.backward),n[f.group.id]=f.group):!w&&h?(f.queueTrigger(s.forward),n[f.group.id]=f.group):w&&s.oldScroll>=f.triggerPoint&&(f.queueTrigger(s.forward),n[f.group.id]=f.group)}}return o.requestAnimationFrame(function(){for(var t in n)n[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in n)n[t].refresh()},e.findByElement=function(t){return n[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},o.requestAnimationFrame=function(e){(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t).call(window,e)},o.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),n[this.axis][this.name]=this}var n={vertical:{},horizontal:{}},o=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var n=this.triggerQueues[i],o="up"===i||"left"===i;n.sort(o?e:t);for(var r=0,s=n.length;s>r;r+=1){var a=n[r];(a.options.continuous||r===n.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=o.Adapter.inArray(e,this.waypoints);return i===this.waypoints.length-1?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=o.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=o.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return n[t.axis][t.name]||new i(t)},o.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,n){t[n]=e[n]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],n=arguments[0];return t.isFunction(arguments[0])&&(n=t.extend({},arguments[1]),n.handler=arguments[0]),this.each(function(){var o=t.extend({},n,{element:this});"string"==typeof o.context&&(o.context=t(this).closest(o.context)[0]),i.push(new e(o))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}(),function(){"use strict";function t(){}function e(t){this.options=i.Adapter.extend({},e.defaults,t),this.axis=this.options.horizontal?"horizontal":"vertical",this.waypoints=[],this.element=this.options.element,this.createWaypoints()}var i=window.Waypoint;e.prototype.createWaypoints=function(){for(var t={vertical:[{down:"enter",up:"exited",offset:"100%"},{down:"entered",up:"exit",offset:"bottom-in-view"},{down:"exit",up:"entered",offset:0},{down:"exited",up:"enter",offset:function(){return-this.adapter.outerHeight()}}],horizontal:[{right:"enter",left:"exited",offset:"100%"},{right:"entered",left:"exit",offset:"right-in-view"},{right:"exit",left:"entered",offset:0},{right:"exited",left:"enter",offset:function(){return-this.adapter.outerWidth()}}]},e=0,i=t[this.axis].length;i>e;e++){var n=t[this.axis][e];this.createWaypoint(n)}},e.prototype.createWaypoint=function(t){var e=this;this.waypoints.push(new i({context:this.options.context,element:this.options.element,enabled:this.options.enabled,handler:function(t){return function(i){e.options[t[i]].call(e,i)}}(t),offset:t.offset,horizontal:this.options.horizontal}))},e.prototype.destroy=function(){for(var t=0,e=this.waypoints.length;e>t;t++)this.waypoints[t].destroy();this.waypoints=[]},e.prototype.disable=function(){for(var t=0,e=this.waypoints.length;e>t;t++)this.waypoints[t].disable()},e.prototype.enable=function(){for(var t=0,e=this.waypoints.length;e>t;t++)this.waypoints[t].enable()},e.defaults={context:window,enabled:!0,enter:t,entered:t,exit:t,exited:t},i.Inview=e}(),function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Layzr=e()}(this,function(){"use strict";var t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},e=function(){function e(t,e){return s[t]=s[t]||[],s[t].push(e),this}function i(t,i){return i._once=!0,e(t,i),this}function n(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e?s[t].splice(s[t].indexOf(e),1):delete s[t],this}function o(t){for(var e=this,i=arguments.length,o=Array(i>1?i-1:0),r=1;r<i;r++)o[r-1]=arguments[r];var a=s[t]&&s[t].slice();return a&&a.forEach(function(i){i._once&&n(t,i),i.apply(e,o)}),this}var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.create(null);return t({},r,{on:e,once:i,off:n,emit:o})};return function(){function t(){return window.scrollY||window.pageYOffset}function i(){u=t(),n()}function n(){h||(window.requestAnimationFrame(function(){return l()}),h=!0)}function o(t){return t.getBoundingClientRect().top+u}function r(t){var e=u,i=e+p,n=o(t),r=n+t.offsetHeight,s=g.threshold/100*p;return r>=e-s&&n<=i+s}function s(t){if(y.emit("src:before",t),v&&t.hasAttribute(g.srcset))t.setAttribute("srcset",t.getAttribute(g.srcset));else{var e=w>1&&t.getAttribute(g.retina);t.setAttribute("src",e||t.getAttribute(g.normal))}y.emit("src:after",t),[g.normal,g.retina,g.srcset].forEach(function(e){return t.removeAttribute(e)}),c()}function a(t){var e=t?"addEventListener":"removeEventListener";return["scroll","resize"].forEach(function(t){return window[e](t,i)}),this}function l(){return p=window.innerHeight,f.forEach(function(t){return r(t)&&s(t)}),h=!1,this}function c(){return f=Array.prototype.slice.call(document.querySelectorAll("["+g.normal+"]")),this}var d=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=t(),h=void 0,f=void 0,p=void 0,g={normal:d.normal||"data-normal",retina:d.retina||"data-retina",srcset:d.srcset||"data-srcset",threshold:d.threshold||0},v=document.body.classList.contains("srcset")||"srcset"in document.createElement("img"),w=window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI,y=e({handlers:a,check:l,update:c});return y}}),$(document).ready(function(){initMobileNav(),homeHeroNav(),initNavHide(),initEgg(),caseTeaseNext(),imageRatio(),toggleSection(".career"),sectionJump(),contactCardFlip(),videoPlay(),navCurrent(),introAnimate(),console.log("Looking for this? https://github.com/BraveUX/braveux")}),$("video").length&&$(window).on("scroll",_.throttle(function(){Waypoint.refreshAll()},1e3)),$(".subnav-scroll-indicator--left").on("click",function(t){t.preventDefault(),$(".subnav-container").animate({scrollLeft:"-=150px"},"normal")}),$(".subnav-scroll-indicator--right").on("click",function(t){t.preventDefault(),$(".subnav-container").animate({scrollLeft:"+=150px"},"normal")}),$(".subnav-container").scroll(function(){$("body").find(".subnav").length&&subnavIndicators()}),$(window).on("resize",function(){$("body").find(".subnav").length&&subnavIndicators()}),$(document).ready(function(){$("body").find(".subnav").length&&subnavIndicators()});var instance=Layzr({threshold:100});instance.on("src:after",function(t){t.classList.contains("bg-image")&&(t.style.backgroundImage='url("'+t.getAttribute("src")+'")',t.removeAttribute("src"))}),document.addEventListener("DOMContentLoaded",function(t){instance.update().check().handlers(!0),scrollReveal()});