class e{constructor(e={}){let{tagName:t="div",props:n={},state:i={}}=e;this.el=document.createElement(t),this.props=n,this.state=i,this.render()}render(){}}function t(e){location.hash||history.replaceState(null,"","/#/");let t=document.querySelector("router-view"),[n,i=""]=location.hash.split("?"),o=i.split("&").reduce((e,t)=>{let[n,i]=t.split("=");return e[n]=i,e},{});history.replaceState(o,"");let r=e.find(e=>RegExp(`${e.path}/?$`).test(n));t&&(t.innerHTML="",r&&t.append(new r.component().el)),window.scrollTo(0,0)}class n extends e{constructor(){super({tagName:"header",state:{menus:[{name:"git",href:"https://github.com/JoSeungHwan"},{name:"Notion",href:"https://www.notion.so/IOS-Developer-e65fa672d22e45d3885e09503206a495?pvs=4"},{name:"About",href:"#/about"}]}}),window.addEventListener("popstate",()=>{this.render()})}render(){this.el.innerHTML=`
      <a
        href="#/"
        class="logo">
        <span>JSH</span><span class="logo_span">.portfolio</span>
      </a>
      <nav>
        <ul>
          ${this.state.menus.map(e=>{let t=e.href.split("?")[0],n=location.hash.split("?")[0];return`
              <li>
                <a
                  class="${t===n?"active":""}"
                  href="${e.href}">
                  ${e.name}
                </a>
              </li>`}).join("")}
        </ul>
      </nav>
      <a href="#/about" class="user">
        <img src="https://avatars.githubusercontent.com/u/111415219?u=aff17905a0f1263d4f21cc37af3b3dece7e6c2ba&v=4" alt="User">
      </a>
    `}}var i,o,r=new class{constructor(e){for(let t in this.state={},this.observers={},e)Object.defineProperty(this.state,t,{get:()=>e[t],set:n=>{e[t]=n,Array.isArray(this.observers[t])&&this.observers[t].forEach(e=>e(n))}})}subscribe(e,t){Array.isArray(this.observers[e])?this.observers[e].push(t):this.observers[e]=[t]}}({photo:"	https://avatars.githubusercontent.com/u/111415219?u=aff17905a0f1263d4f21cc37af3b3dece7e6c2ba&v=4",name:"Jo / JoSeungHwan",email:"swcc321@naver.com",Notion:"https://www.notion.so/IOS-Developer-e65fa672d22e45d3885e09503206a495?pvs=4",github:"https://github.com/JoSeungHwan",repository:"https://github.com/JoSeungHwan/-vanillajs-movie-app"});class s extends e{constructor(){super({tagName:"footer"})}render(){let{github:e,repository:t}=r.state;this.el.innerHTML=`
      <div>
        <a href="https://github.com/JoSeungHwan/JoMovie-App">
          GitHub Repository.
        </a>
      </div>
      <div>
        <a href="https://github.com/JoSeungHwan">
          ${new Date().getFullYear()}
          JoSeungHwan GitHub
        </a>
      </div>
    `}}class a extends e{render(){this.el.classList.add("headline"),this.el.innerHTML=`
      <h1>
        <span>Front-End</span><br />
        \u{D504}\u{B860}\u{D2B8}\u{C5D4}\u{B4DC} \u{AC1C}\u{BC1C}\u{C790}<br/>
        \u{C870}\u{C2B9}\u{D658} \u{C785}\u{B2C8}\u{B2E4}.<br />
      </h1>
      <p>
        \u{C0AC}\u{C6A9}\u{C790}\u{C5D0}\u{AC8C} \u{CD5C}\u{ACE0}\u{C758} \u{ACBD}\u{D5D8}\u{ACFC} \u{D3B8}\u{C758}\u{C131}\u{C744} \u{C81C}\u{ACF5}\u{D560} \u{C218} \u{C788}\u{B294}<br/>
        \u{AC1C}\u{BC1C}\u{C790}\u{B85C} \u{C131}\u{C7A5}\u{D558}\u{ACA0}\u{C2B5}\u{B2C8}\u{B2E4}.
      </p>
      <img src="https://github.com/JoSeungHwan/notepad/blob/master/img/myimg/jo.png?raw=true" alt="user">
      <!-- <img src="" href=".../img/jo.png" alt="user">  -->
    `}}var u={};i=function(){var e=function(){o.log(2,"(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.")};e.version="2.0.8","undefined"!=typeof window&&window.addEventListener("mousewheel",void 0);var t="data-scrollmagic-pin-spacer";e.Controller=function(i){var r,s,a="ScrollMagic.Controller",u="REVERSE",l="PAUSED",c=n.defaults,d=this,p=o.extend({},c,i),C=[],g=!1,h=0,f=l,v=!0,m=0,w=!0,b=function(){p.refreshInterval>0&&(s=window.setTimeout(F,p.refreshInterval))},D=function(){return p.vertical?o.get.scrollTop(p.container):o.get.scrollLeft(p.container)},B=function(){return p.vertical?o.get.height(p.container):o.get.width(p.container)},A=this._setScrollPos=function(e){p.vertical?v?window.scrollTo(o.get.scrollLeft(),e):p.container.scrollTop=e:v?window.scrollTo(e,o.get.scrollTop()):p.container.scrollLeft=e},S=function(){if(w&&g){var e=o.type.Array(g)?g:C.slice(0);g=!1;var t=h,n=(h=d.scrollPos())-t;0!==n&&(f=n>0?"FORWARD":u),f===u&&e.reverse(),e.forEach(function(t,n){k(3,"updating Scene "+(n+1)+"/"+e.length+" ("+C.length+" total)"),t.update(!0)}),0===e.length&&p.loglevel>=3&&k(3,"updating 0 Scenes (nothing added to controller)")}},y=function(){r=o.rAF(S)},E=function(e){k(3,"event fired causing an update:",e.type),"resize"==e.type&&(m=B(),f=l),!0!==g&&(g=!0,y())},F=function(){if(!v&&m!=B()){var e;try{e=new Event("resize",{bubbles:!1,cancelable:!1})}catch(t){(e=document.createEvent("Event")).initEvent("resize",!1,!1)}p.container.dispatchEvent(e)}C.forEach(function(e,t){e.refresh()}),b()},k=this._log=function(e,t){p.loglevel>=e&&(Array.prototype.splice.call(arguments,1,0,"("+a+") ->"),o.log.apply(window,arguments))};this._options=p;var R=function(e){if(e.length<=1)return e;var t=e.slice(0);return t.sort(function(e,t){return e.scrollOffset()>t.scrollOffset()?1:-1}),t};return this.addScene=function(t){if(o.type.Array(t))t.forEach(function(e,t){d.addScene(e)});else if(t instanceof e.Scene){if(t.controller()!==d)t.addTo(d);else if(0>C.indexOf(t)){for(var n in C.push(t),C=R(C),t.on("shift.controller_sort",function(){C=R(C)}),p.globalSceneOptions)t[n]&&t[n].call(t,p.globalSceneOptions[n]);k(3,"adding Scene (now "+C.length+" total)")}}else k(1,"ERROR: invalid argument supplied for '.addScene()'");return d},this.removeScene=function(e){if(o.type.Array(e))e.forEach(function(e,t){d.removeScene(e)});else{var t=C.indexOf(e);t>-1&&(e.off("shift.controller_sort"),C.splice(t,1),k(3,"removing Scene (now "+C.length+" left)"),e.remove())}return d},this.updateScene=function(t,n){return o.type.Array(t)?t.forEach(function(e,t){d.updateScene(e,n)}):n?t.update(!0):!0!==g&&t instanceof e.Scene&&(-1==(g=g||[]).indexOf(t)&&g.push(t),g=R(g),y()),d},this.update=function(e){return E({type:"resize"}),e&&S(),d},this.scrollTo=function(n,i){if(o.type.Number(n))A.call(p.container,n,i);else if(n instanceof e.Scene)n.controller()===d?d.scrollTo(n.scrollOffset(),i):k(2,"scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.",n);else if(o.type.Function(n))A=n;else{var r=o.get.elements(n)[0];if(r){for(;r.parentNode.hasAttribute(t);)r=r.parentNode;var s=p.vertical?"top":"left",a=o.get.offset(p.container),u=o.get.offset(r);v||(a[s]-=d.scrollPos()),d.scrollTo(u[s]-a[s],i)}else k(2,"scrollTo(): The supplied argument is invalid. Scroll cancelled.",n)}return d},this.scrollPos=function(e){return arguments.length?(o.type.Function(e)?D=e:k(2,"Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'."),d):D.call(d)},this.info=function(e){var t={size:m,vertical:p.vertical,scrollPos:h,scrollDirection:f,container:p.container,isDocument:v};return arguments.length?void 0!==t[e]?t[e]:void k(1,'ERROR: option "'+e+'" is not available'):t},this.loglevel=function(e){return arguments.length?(p.loglevel!=e&&(p.loglevel=e),d):p.loglevel},this.enabled=function(e){return arguments.length?(w!=e&&(w=!!e,d.updateScene(C,!0)),d):w},this.destroy=function(e){window.clearTimeout(s);for(var t=C.length;t--;)C[t].destroy(e);return p.container.removeEventListener("resize",E),p.container.removeEventListener("scroll",E),o.cAF(r),k(3,"destroyed "+a+" (reset: "+(e?"true":"false")+")"),null},function(){for(var t in p)c.hasOwnProperty(t)||(k(2,'WARNING: Unknown option "'+t+'"'),delete p[t]);if(p.container=o.get.elements(p.container)[0],!p.container)throw k(1,"ERROR creating object "+a+": No valid scroll container supplied"),a+" init failed.";(v=p.container===window||p.container===document.body||!document.body.contains(p.container))&&(p.container=window),m=B(),p.container.addEventListener("resize",E),p.container.addEventListener("scroll",E);var n=parseInt(p.refreshInterval,10);p.refreshInterval=o.type.Number(n)?n:c.refreshInterval,b(),k(3,"added new "+a+" controller (v"+e.version+")")}(),d};var n={defaults:{container:window,vertical:!0,globalSceneOptions:{},loglevel:2,refreshInterval:100}};e.Controller.addOption=function(e,t){n.defaults[e]=t},e.Controller.extend=function(t){var n=this;e.Controller=function(){return n.apply(this,arguments),this.$super=o.extend({},this),t.apply(this,arguments)||this},o.extend(e.Controller,n),e.Controller.prototype=n.prototype,e.Controller.prototype.constructor=e.Controller},e.Scene=function(n){var r,s,a="ScrollMagic.Scene",u="BEFORE",l="DURING",c="AFTER",d=i.defaults,p=this,C=o.extend({},d,n),g=u,h=0,f={start:0,end:0},v=0,m=!0,w={};this.on=function(e,t){return o.type.Function(t)?(e=e.trim().split(" ")).forEach(function(e){var n=e.split("."),i=n[0],o=n[1];"*"!=i&&(w[i]||(w[i]=[]),w[i].push({namespace:o||"",callback:t}))}):b(1,"ERROR when calling '.on()': Supplied callback for '"+e+"' is not a valid function!"),p},this.off=function(e,t){return e?(e=e.trim().split(" ")).forEach(function(e,n){var i=e.split("."),o=i[0],r=i[1]||"";("*"===o?Object.keys(w):[o]).forEach(function(e){for(var n=w[e]||[],i=n.length;i--;){var o=n[i];o&&(r===o.namespace||"*"===r)&&(!t||t==o.callback)&&n.splice(i,1)}n.length||delete w[e]})}):b(1,"ERROR: Invalid event name supplied."),p},this.trigger=function(t,n){if(t){var i=t.trim().split("."),o=i[0],r=i[1],s=w[o];b(3,"event fired:",o,n?"->":"",n||""),s&&s.forEach(function(t,i){r&&r!==t.namespace||t.callback.call(p,new e.Event(o,t.namespace,p,n))})}else b(1,"ERROR: Invalid event name supplied.");return p},p.on("change.internal",function(e){"loglevel"!==e.what&&"tweenChanges"!==e.what&&("triggerElement"===e.what?A():"reverse"===e.what&&p.update())}).on("shift.internal",function(e){D(),p.update()});var b=this._log=function(e,t){C.loglevel>=e&&(Array.prototype.splice.call(arguments,1,0,"("+a+") ->"),o.log.apply(window,arguments))};this.addTo=function(t){return t instanceof e.Controller?s!=t&&(s&&s.removeScene(p),s=t,E(),B(!0),A(!0),D(),s.info("container").addEventListener("resize",S),t.addScene(p),p.trigger("add",{controller:s}),b(3,"added "+a+" to controller"),p.update()):b(1,"ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"),p},this.enabled=function(e){return arguments.length?(m!=e&&(m=!!e,p.update(!0)),p):m},this.remove=function(){if(s){s.info("container").removeEventListener("resize",S);var e=s;s=void 0,e.removeScene(p),p.trigger("remove"),b(3,"removed "+a+" from controller")}return p},this.destroy=function(e){return p.trigger("destroy",{reset:e}),p.remove(),p.off("*.*"),b(3,"destroyed "+a+" (reset: "+(e?"true":"false")+")"),null},this.update=function(e){if(s){if(e){if(s.enabled()&&m){var t,n=s.info("scrollPos");t=C.duration>0?(n-f.start)/(f.end-f.start):n>=f.start?1:0,p.trigger("update",{startPos:f.start,endPos:f.end,scrollPos:n}),p.progress(t)}else L&&g===l&&R(!0)}else s.updateScene(p,!1)}return p},this.refresh=function(){return B(),A(),p},this.progress=function(e){if(!arguments.length)return h;var t=!1,n=g,i=s?s.info("scrollDirection"):"PAUSED",o=C.reverse||e>=h;if(0===C.duration?(t=h!=e,g=0==(h=e<1&&o?0:1)?u:l):e<0&&g!==u&&o?(h=0,g=u,t=!0):e>=0&&e<1&&o?(h=e,g=l,t=!0):e>=1&&g!==c?(h=1,g=c,t=!0):g!==l||o||R(),t){var r={progress:h,state:g,scrollDirection:i},a=g!=n,d=function(e){p.trigger(e,r)};a&&n!==l&&(d("enter"),d(n===u?"start":"end")),d("progress"),a&&g!==l&&(d(g===u?"start":"end"),d("leave"))}return p};var D=function(){f={start:v+C.offset},s&&C.triggerElement&&(f.start-=s.info("size")*C.triggerHook),f.end=f.start+C.duration},B=function(e){if(r){var t="duration";F(t,r.call(p))&&!e&&(p.trigger("change",{what:t,newval:C[t]}),p.trigger("shift",{reason:t}))}},A=function(e){var n=0,i=C.triggerElement;if(s&&(i||v>0)){if(i){if(i.parentNode){for(var r=s.info(),a=o.get.offset(r.container),u=r.vertical?"top":"left";i.parentNode.hasAttribute(t);)i=i.parentNode;var l=o.get.offset(i);r.isDocument||(a[u]-=s.scrollPos()),n=l[u]-a[u]}else b(2,"WARNING: triggerElement was removed from DOM and will be reset to",void 0),p.triggerElement(void 0)}var c=n!=v;v=n,c&&!e&&p.trigger("shift",{reason:"triggerElementPosition"})}},S=function(e){C.triggerHook>0&&p.trigger("shift",{reason:"containerResize"})},y=o.extend(i.validate,{duration:function(e){if(o.type.String(e)&&e.match(/^(\.|\d)*\d+%$/)){var t=parseFloat(e)/100;e=function(){return s?s.info("size")*t:0}}if(o.type.Function(e)){r=e;try{e=parseFloat(r.call(p))}catch(t){e=-1}}if(e=parseFloat(e),!o.type.Number(e)||e<0){if(r)throw r=void 0,['Invalid return value of supplied function for option "duration":',e];throw['Invalid value for option "duration":',e]}return e}}),E=function(e){e=arguments.length?[e]:Object.keys(y),e.forEach(function(e,t){var n;if(y[e])try{n=y[e](C[e])}catch(t){n=d[e];var i=o.type.String(t)?[t]:t;o.type.Array(i)?(i[0]="ERROR: "+i[0],i.unshift(1),b.apply(this,i)):b(1,"ERROR: Problem executing validation callback for option '"+e+"':",t.message)}finally{C[e]=n}})},F=function(e,t){var n=!1,i=C[e];return C[e]!=t&&(C[e]=t,E(e),n=i!=C[e]),n},k=function(e){p[e]||(p[e]=function(t){return arguments.length?("duration"===e&&(r=void 0),F(e,t)&&(p.trigger("change",{what:e,newval:C[e]}),i.shifts.indexOf(e)>-1&&p.trigger("shift",{reason:e})),p):C[e]})};this.controller=function(){return s},this.state=function(){return g},this.scrollOffset=function(){return f.start},this.triggerPosition=function(){var e=C.offset;return s&&(C.triggerElement?e+=v:e+=s.info("size")*p.triggerHook()),e},p.on("shift.internal",function(e){var t="duration"===e.reason;(g===c&&t||g===l&&0===C.duration)&&R(),t&&P()}).on("progress.internal",function(e){R()}).on("add.internal",function(e){P()}).on("destroy.internal",function(e){p.removePin(e.reset)});var R=function(e){if(L&&s){var t=s.info(),n=_.spacer.firstChild;if(e||g!==l){var i={position:_.inFlow?"relative":"absolute",top:0,left:0},r=o.css(n,"position")!=i.position;_.pushFollowers?C.duration>0&&(g===c&&0===parseFloat(o.css(_.spacer,"padding-top"))?r=!0:g===u&&0===parseFloat(o.css(_.spacer,"padding-bottom"))&&(r=!0)):i[t.vertical?"top":"left"]=C.duration*h,o.css(n,i),r&&P()}else{"fixed"!=o.css(n,"position")&&(o.css(n,{position:"fixed"}),P());var a=o.get.offset(_.spacer,!0),d=C.reverse||0===C.duration?t.scrollPos-f.start:Math.round(h*C.duration*10)/10;a[t.vertical?"top":"left"]+=d,o.css(_.spacer.firstChild,{top:a.top,left:a.left})}}},P=function(){if(L&&s&&_.inFlow){var e=g===l,t=s.info("vertical"),n=_.spacer.firstChild,i=o.isMarginCollapseType(o.css(_.spacer,"display")),r={};_.relSize.width||_.relSize.autoFullWidth?e?o.css(L,{width:o.get.width(_.spacer)}):o.css(L,{width:"100%"}):(r["min-width"]=o.get.width(t?L:n,!0,!0),r.width=e?r["min-width"]:"auto"),_.relSize.height?e?o.css(L,{height:o.get.height(_.spacer)-(_.pushFollowers?C.duration:0)}):o.css(L,{height:"100%"}):(r["min-height"]=o.get.height(t?n:L,!0,!i),r.height=e?r["min-height"]:"auto"),_.pushFollowers&&(r["padding"+(t?"Top":"Left")]=C.duration*h,r["padding"+(t?"Bottom":"Right")]=C.duration*(1-h)),o.css(_.spacer,r)}},T=function(){s&&L&&g===l&&!s.info("isDocument")&&R()},H=function(){s&&L&&g===l&&((_.relSize.width||_.relSize.autoFullWidth)&&o.get.width(window)!=o.get.width(_.spacer.parentNode)||_.relSize.height&&o.get.height(window)!=o.get.height(_.spacer.parentNode))&&P()},x=function(e){s&&L&&g===l&&!s.info("isDocument")&&(e.preventDefault(),s._setScrollPos(s.info("scrollPos")-((e.wheelDelta||e[s.info("vertical")?"wheelDeltaY":"wheelDeltaX"])/3||-(30*e.detail))))};this.setPin=function(e,n){var i=n&&n.hasOwnProperty("pushFollowers");if(n=o.extend({},{pushFollowers:!0,spacerClass:"scrollmagic-pin-spacer"},n),!(e=o.get.elements(e)[0]))return b(1,"ERROR calling method 'setPin()': Invalid pin element supplied."),p;if("fixed"===o.css(e,"position"))return b(1,"ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."),p;if(L){if(L===e)return p;p.removePin()}var r=(L=e).parentNode.style.display,s=["top","left","bottom","right","margin","marginLeft","marginRight","marginTop","marginBottom"];L.parentNode.style.display="none";var a="absolute"!=o.css(L,"position"),u=o.css(L,s.concat(["display"])),l=o.css(L,["width","height"]);L.parentNode.style.display=r,!a&&n.pushFollowers&&(b(2,"WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."),n.pushFollowers=!1),window.setTimeout(function(){L&&0===C.duration&&i&&n.pushFollowers&&b(2,"WARNING: pushFollowers =",!0,"has no effect, when scene duration is 0.")},0);var c=L.parentNode.insertBefore(document.createElement("div"),L),d=o.extend(u,{position:a?"relative":"absolute",boxSizing:"content-box",mozBoxSizing:"content-box",webkitBoxSizing:"content-box"});if(a||o.extend(d,o.css(L,["width","height"])),o.css(c,d),c.setAttribute(t,""),o.addClass(c,n.spacerClass),_={spacer:c,relSize:{width:"%"===l.width.slice(-1),height:"%"===l.height.slice(-1),autoFullWidth:"auto"===l.width&&a&&o.isMarginCollapseType(u.display)},pushFollowers:n.pushFollowers,inFlow:a},!L.___origStyle){L.___origStyle={};var g=L.style;s.concat(["width","height","position","boxSizing","mozBoxSizing","webkitBoxSizing"]).forEach(function(e){L.___origStyle[e]=g[e]||""})}return _.relSize.width&&o.css(c,{width:l.width}),_.relSize.height&&o.css(c,{height:l.height}),c.appendChild(L),o.css(L,{position:a?"relative":"absolute",margin:"auto",top:"auto",left:"auto",bottom:"auto",right:"auto"}),(_.relSize.width||_.relSize.autoFullWidth)&&o.css(L,{boxSizing:"border-box",mozBoxSizing:"border-box",webkitBoxSizing:"border-box"}),window.addEventListener("scroll",T),window.addEventListener("resize",T),window.addEventListener("resize",H),L.addEventListener("mousewheel",x),L.addEventListener("DOMMouseScroll",x),b(3,"added pin"),R(),p},this.removePin=function(e){if(L){if(g===l&&R(!0),e||!s){var n=_.spacer.firstChild;if(n.hasAttribute(t)){var i=_.spacer.style,r={};["margin","marginLeft","marginRight","marginTop","marginBottom"].forEach(function(e){r[e]=i[e]||""}),o.css(n,r)}_.spacer.parentNode.insertBefore(n,_.spacer),_.spacer.parentNode.removeChild(_.spacer),L.parentNode.hasAttribute(t)||(o.css(L,L.___origStyle),delete L.___origStyle)}window.removeEventListener("scroll",T),window.removeEventListener("resize",T),window.removeEventListener("resize",H),L.removeEventListener("mousewheel",x),L.removeEventListener("DOMMouseScroll",x),L=void 0,b(3,"removed pin (reset: "+(e?"true":"false")+")")}return p};var L,_,O,M=[];return p.on("destroy.internal",function(e){p.removeClassToggle(e.reset)}),this.setClassToggle=function(e,t){var n=o.get.elements(e);return 0!==n.length&&o.type.String(t)?(M.length>0&&p.removeClassToggle(),O=t,M=n,p.on("enter.internal_class leave.internal_class",function(e){var t="enter"===e.type?o.addClass:o.removeClass;M.forEach(function(e,n){t(e,O)})})):b(1,"ERROR calling method 'setClassToggle()': Invalid "+(0===n.length?"element":"classes")+" supplied."),p},this.removeClassToggle=function(e){return e&&M.forEach(function(e,t){o.removeClass(e,O)}),p.off("start.internal_class end.internal_class"),O=void 0,M=[],p},function(){for(var e in C)d.hasOwnProperty(e)||(b(2,'WARNING: Unknown option "'+e+'"'),delete C[e]);for(var t in d)k(t);E()}(),p};var i={defaults:{duration:0,offset:0,triggerElement:void 0,triggerHook:.5,reverse:!0,loglevel:2},validate:{offset:function(e){if(e=parseFloat(e),!o.type.Number(e))throw['Invalid value for option "offset":',e];return e},triggerElement:function(e){if(e=e||void 0){var t=o.get.elements(e)[0];if(t&&t.parentNode)e=t;else throw['Element defined in option "triggerElement" was not found:',e]}return e},triggerHook:function(e){var t={onCenter:.5,onEnter:1,onLeave:0};if(o.type.Number(e))e=Math.max(0,Math.min(parseFloat(e),1));else if(e in t)e=t[e];else throw['Invalid value for option "triggerHook": ',e];return e},reverse:function(e){return!!e},loglevel:function(e){if(e=parseInt(e),!o.type.Number(e)||e<0||e>3)throw['Invalid value for option "loglevel":',e];return e}},shifts:["duration","offset","triggerHook"]};e.Scene.addOption=function(t,n,o,r){t in i.defaults?e._util.log(1,"[static] ScrollMagic.Scene -> Cannot add Scene option '"+t+"', because it already exists."):(i.defaults[t]=n,i.validate[t]=o,r&&i.shifts.push(t))},e.Scene.extend=function(t){var n=this;e.Scene=function(){return n.apply(this,arguments),this.$super=o.extend({},this),t.apply(this,arguments)||this},o.extend(e.Scene,n),e.Scene.prototype=n.prototype,e.Scene.prototype.constructor=e.Scene},e.Event=function(e,t,n,i){for(var o in i=i||{})this[o]=i[o];return this.type=e,this.target=this.currentTarget=n,this.namespace=t||"",this.timeStamp=this.timestamp=Date.now(),this};var o=e._util=function(e){var t,n={},i=function(e){return parseFloat(e)||0},o=function(t){return t.currentStyle?t.currentStyle:e.getComputedStyle(t)},r=function(t,n,r,s){if((n=n===document?e:n)===e)s=!1;else if(!g.DomElement(n))return 0;t=t.charAt(0).toUpperCase()+t.substr(1).toLowerCase();var a=(r?n["offset"+t]||n["outer"+t]:n["client"+t]||n["inner"+t])||0;if(r&&s){var u=o(n);a+="Height"===t?i(u.marginTop)+i(u.marginBottom):i(u.marginLeft)+i(u.marginRight)}return a},s=function(e){return e.replace(/^[^a-z]+([a-z])/g,"$1").replace(/-([a-z])/g,function(e){return e[1].toUpperCase()})};n.extend=function(e){for(t=1,e=e||{};t<arguments.length;t++)if(arguments[t])for(var n in arguments[t])arguments[t].hasOwnProperty(n)&&(e[n]=arguments[t][n]);return e},n.isMarginCollapseType=function(e){return["block","flex","list-item","table","-webkit-box"].indexOf(e)>-1};var a=0,u=["ms","moz","webkit","o"],l=e.requestAnimationFrame,c=e.cancelAnimationFrame;for(t=0;!l&&t<u.length;++t)l=e[u[t]+"RequestAnimationFrame"],c=e[u[t]+"CancelAnimationFrame"]||e[u[t]+"CancelRequestAnimationFrame"];l||(l=function(t){var n=new Date().getTime(),i=Math.max(0,16-(n-a)),o=e.setTimeout(function(){t(n+i)},i);return a=n+i,o}),c||(c=function(t){e.clearTimeout(t)}),n.rAF=l.bind(e),n.cAF=c.bind(e);var d=["error","warn","log"],p=e.console||{};for(t=0,p.log=p.log||function(){};t<d.length;t++){var C=d[t];p[C]||(p[C]=p.log)}n.log=function(e){(e>d.length||e<=0)&&(e=d.length);var t=new Date,n=("0"+t.getHours()).slice(-2)+":"+("0"+t.getMinutes()).slice(-2)+":"+("0"+t.getSeconds()).slice(-2)+":"+("00"+t.getMilliseconds()).slice(-3),i=d[e-1],o=Array.prototype.splice.call(arguments,1),r=Function.prototype.bind.call(p[i],p);o.unshift(n),r.apply(p,o)};var g=n.type=function(e){return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/,"$1").toLowerCase()};g.String=function(e){return"string"===g(e)},g.Function=function(e){return"function"===g(e)},g.Array=function(e){return Array.isArray(e)},g.Number=function(e){return!g.Array(e)&&e-parseFloat(e)+1>=0},g.DomElement=function(e){return"object"==typeof HTMLElement||"function"==typeof HTMLElement?e instanceof HTMLElement||e instanceof SVGElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName};var h=n.get={};return h.elements=function(t){var n=[];if(g.String(t))try{t=document.querySelectorAll(t)}catch(e){return n}if("nodelist"===g(t)||g.Array(t)||t instanceof NodeList)for(var i=0,o=n.length=t.length;i<o;i++){var r=t[i];n[i]=g.DomElement(r)?r:h.elements(r)}else(g.DomElement(t)||t===document||t===e)&&(n=[t]);return n},h.scrollTop=function(t){return t&&"number"==typeof t.scrollTop?t.scrollTop:e.pageYOffset||0},h.scrollLeft=function(t){return t&&"number"==typeof t.scrollLeft?t.scrollLeft:e.pageXOffset||0},h.width=function(e,t,n){return r("width",e,t,n)},h.height=function(e,t,n){return r("height",e,t,n)},h.offset=function(e,t){var n={top:0,left:0};if(e&&e.getBoundingClientRect){var i=e.getBoundingClientRect();n.top=i.top,n.left=i.left,t||(n.top+=h.scrollTop(),n.left+=h.scrollLeft())}return n},n.addClass=function(e,t){t&&(e.classList?e.classList.add(t):e.className+=" "+t)},n.removeClass=function(e,t){t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))},n.css=function(e,t){if(g.String(t))return o(e)[s(t)];if(g.Array(t)){var n={},i=o(e);return t.forEach(function(e,t){n[e]=i[s(e)]}),n}for(var r in t){var a=t[r];a==parseFloat(a)&&(a+="px"),e.style[s(r)]=a}},n}(window||{});return e.Scene.prototype.addIndicators=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),this},e.Scene.prototype.removeIndicators=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),this},e.Scene.prototype.setTween=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),this},e.Scene.prototype.removeTween=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),this},e.Scene.prototype.setVelocity=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),this},e.Scene.prototype.removeVelocity=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),this},e},"function"==typeof define&&define.amd?define(i):u=i();class l extends e{render(){this.el.classList.add("aboutme"),this.el.innerHTML=`
      <div class="h11">
        <h1>Work</h1>
      </div>
      <div class="work">
        <div class="work1 back-to-position to-right delay-0"> 
          <div class="work11">
            <h3>(\u{C8FC})\u{CC28}\u{D2B8}\u{C5F0}\u{AD6C}\u{C18C}(\u{C571}\u{AC1C}\u{BC1C})</h3>
            <span>2023.03 ~ 2023.10</span> 
            <div class="power">
              <img src="https://github.com/JoSeungHwan/notepad/blob/master/img/projecting/PowerGrphics.png?raw=true" alt="power"/>
            </div>
            <div>\u{AC1C}\u{BC1C}\u{D300} IOS\u{D300}</div>
            <div>(\u{C8FC})\u{CC28}\u{D2B8}\u{C5F0}\u{AD6C}\u{C18C} \u{C5D0}\u{C11C} \u{C9C4}\u{D589}\u{D55C} \u{D504}\u{B85C}\u{C81D}\u{D2B8}</div>
            <br/>
            <div>PowerGraphics \u{BAA8}\u{BC14}\u{C77C} \u{C99D}\u{AD8C}\u{CC28}\u{D2B8} \u{C194}\u{B8E8}\u{C158}</div>
            <div>\u{C81C}\u{AC00} \u{C774} \u{D504}\u{B85C}\u{C81D}\u{D2B8}\u{C5D0} \u{D3EC}\u{C9C0}\u{C158}\u{C740} IOS \u{C804}\u{CCB4}\u{C801}\u{C778} \u{AC83}\u{C744} \u{B2F4}\u{B2F9}\u{D588}\u{C73C}\u{BA70}<br/>
                \u{AE30}\u{C874} PowerGraphics \u{D504}\u{B85C}\u{ADF8}\u{B7A8}\u{C5D0}\u{C11C} \u{B0A9}\u{D488}\u{B41C} \u{ACF3}\u{C5D0} \u{C720}\u{C9C0}\u{BCF4}\u{C218}\u{B97C} \u{D558}\u{BA74}\u{C11C}<br/>
                \u{BC84}\u{C83C}\u{C744} \u{C5C5}\u{ADF8}\u{B808}\u{C774}\u{B4DC} \u{D558}\u{C5EC} PowerGraphics ver3 \u{C5D0}\u{C120} \u{B514}\u{C790}\u{C778}\u{ACFC}<br/>
                \u{C131}\u{B2A5} \u{AE30}\u{B2A5} \u{BAA8}\u{B4E0} \u{AC83}\u{C744} \u{C5C5}\u{ADF8}\u{B808}\u{C774}\u{B4DC} \u{D558}\u{C5EC} <br/>
                \u{C740}\u{D589}, \u{C99D}\u{AD8C}\u{C0AC} \u{B0A9}\u{D488} \u{C900}\u{BE44}\u{B97C} \u{D588}\u{C2B5}\u{B2C8}\u{B2E4}
            </div>
            <div class="skills1">
              <img class="xcode" src="https://github.com/JoSeungHwan/notepad/blob/master/img/skills/xocde.png?raw=true" alt="xcode">
              <img class="swift" src="https://github.com/JoSeungHwan/notepad/blob/master/img/skills/swift.png?raw=true" alt="swift">
            </div>
          </div>
        </div>

        <div class="work2 back-to-position to-left delay-1">
          <div class="work22">
            <h3>\u{C0C1}\u{ACF5}(\u{C571}\u{AC1C}\u{BC1C})</h3>
            <span>2022.10 ~ 2023.01</span> 
            <div class="sanggong">
              <img src="https://github.com/JoSeungHwan/notepad/blob/master/img/projecting/emomain.png?raw=true" alt="sanggong1"/>
              <img src="https://github.com/JoSeungHwan/notepad/blob/master/img/projecting/sanggong.png?raw=true" alt="sanggong2"/>
            </div>
            <div>\u{AC1C}\u{BC1C}\u{D300} \u{C571}\u{AC1C}\u{BC1C}\u{D300}</div>
            <div>\u{C0C1}\u{ACF5} \u{C5D0}\u{C11C} \u{C9C4}\u{D589}\u{D55C} \u{D504}\u{B85C}\u{C81D}\u{D2B8}</div>
            <br/>
            <div>\u{C774}\u{BAA8}\u{B9CC}\u{C138}, \u{D558}\u{C774}\u{BE0C}\u{B9AC}\u{B4DC}\u{C571}</div>
            <div>\u{C81C}\u{AC00} \u{C774} \u{D504}\u{B85C}\u{C81D}\u{D2B8}\u{C5D0} \u{D3EC}\u{C9C0}\u{C158}\u{C740} \u{C571}\u{AC1C}\u{BC1C} \u{C804}\u{CCB4}\u{C801}\u{C778} \u{AC83}\u{C744} \u{B2F4}\u{B2F9}\u{D588}\u{C73C}\u{BA70}<br/>
                \u{C774}\u{BAA8}\u{B9CC}\u{C138}\u{C5D0}\u{C11C} IOS\u{D504}\u{B860}\u{D2B8}\u{C5D4}\u{B4DC}\u{C640} \u{B370}\u{C774}\u{D130}\u{AD00}\u{B9AC}<br/>
                \u{D558}\u{C774}\u{BE0C}\u{B9AC}\u{B4DC}\u{C571}\u{C5D0}\u{C11C} Andriod, IOS \u{C571}\u{AC1C}\u{BC1C} \u{BAA8}\u{B4E0}\u{AC83}\u{C744} \u{B2F4}\u{B2F9}\u{D558}\u{C600}\u{C73C}\u{BA70}<br/>
                \u{ACE0}\u{AC1D}\u{C0AC} \u{D53C}\u{B4DC}\u{BC37}\u{C744} \u{BC1B}\u{C544} \u{C720}\u{C9C0}\u{BCF4}\u{C218}\u{D558}\u{BA70} \u{C571}\u{C744} \u{CD9C}\u{C2DC}\u{D588}\u{C2B5}\u{B2C8}\u{B2E4}
            </div>
            <div class="skills2">
              <img class="xcode" src="https://github.com/JoSeungHwan/notepad/blob/master/img/skills/xocde.png?raw=true" alt="xcode">
              <img class="swift" src="https://github.com/JoSeungHwan/notepad/blob/master/img/skills/swift.png?raw=true" alt="swift">
              <img class="android" src="https://github.com/JoSeungHwan/notepad/blob/master/img/skills/androidstudio.png?raw=true" alt="android">
              <img class="kotlin" src="https://github.com/JoSeungHwan/notepad/blob/master/img/skills/kotlin.png?raw=true" alt="kotlin">
            </div>
          </div>
        </div>
      </div>

      <div class="">
        <h1 class="skill_tools">Skill & Tools</h1>
      </div>

      <div class="skill">
        <div class="skillLogo">
          <div class="front_skill back-to-position to-right delay-0">
            <div class="front">Front-end</div>
            <div class="frontend">
              <div class="frontend_group">
                <img class="html" src="https://github.com/JoSeungHwan/notepad/blob/master/img/skills/html.png?raw=true" alt="html">
                <img class="css" src="https://github.com/JoSeungHwan/notepad/blob/master/img/skills/css.png?raw=true" alt="css">
                <img class="js" src="https://github.com/JoSeungHwan/notepad/blob/master/img/skills/js.png?raw=true" alt="js">
                <img class="ts" src="https://github.com/JoSeungHwan/notepad/blob/master/img/skills/ts.png?raw=true" alt="ts">
                <img class="react" src="https://github.com/JoSeungHwan/notepad/blob/master/img/skills/react.png?raw=true" alt="react">
              </div>
            </div>
          </div>
          <div class="app_skill back-to-position to-right delay-0">
            <div class="ap">App</div>
            <div class="app_skill1">
              <div class="app_group">
                <img class="xcode" src="https://github.com/JoSeungHwan/notepad/blob/master/img/skills/xocde.png?raw=true" alt="xcode">
                <img class="swift" src="https://github.com/JoSeungHwan/notepad/blob/master/img/skills/swift.png?raw=true" alt="swift">
                <img class="android" src="https://github.com/JoSeungHwan/notepad/blob/master/img/skills/androidstudio.png?raw=true" alt="android">
                <img class="kotlin" src="https://github.com/JoSeungHwan/notepad/blob/master/img/skills/kotlin.png?raw=true" alt="kotlin">
              </div>
            </div>
          </div>
          <div class="cooperation_skill back-to-position to-left delay-0">
            <div class="cooperation">Cooperation</div>
            <div class="cooperation_skill1">
              <div class="cooperation_group">
                <img class="github" src="https://github.com/JoSeungHwan/notepad/blob/master/img/skills/github.png?raw=true" alt="github">
                <img class="notion" src="https://github.com/JoSeungHwan/notepad/blob/master/img/skills/notion.png?raw=true" alt="notion">
              </div>
            </div>
          </div>
        </div>
      </div>
    `;let e=this.el.querySelector(".work"),t=this.el.querySelector(".skill");var n=new u.Controller,i=new u.Scene({triggerElement:e,triggerHook:.8});i.setClassToggle(e,"show"),i.addTo(n);var i=new u.Scene({triggerElement:t,triggerHook:.8});i.setClassToggle(t,"show"),i.addTo(n)}}class c extends e{render(){this.el.classList.add("project"),this.el.innerHTML=`
      <h1>Project</h1>
      <div class="projectbtn">
        <div class="projectbtn_in back-to-position to-top delay-0">
          <button class="all" id="modal">All</button>
          <button class="web">Web</button>
          <button class="app">App</button>
        </div>
      </div>
      <div class="project_project">
        <div class="wrapper back-to-position to-right delay-1">

          <div class="one">
            <h2>JSH_Portfolio</h2>
            <img src="https://github.com/JoSeungHwan/notepad/blob/master/img/projecting/JSH.png?raw=true" alt="Movie_app">
            <h3>\u{AC1C}\u{C778}\u{D504}\u{B85C}\u{C81D}\u{D2B8}(Web)</h3>
            <div class="detail">\u{C870}\u{C2B9}\u{D658} \u{D3EC}\u{D2B8}\u{D3F4}\u{B9AC}\u{C624} \u{D648}\u{D398}\u{C774}\u{C9C0} \u{C785}\u{B2C8}\u{B2E4}.</div>
            <div class="span">
              <span>\u{AC1C}\u{C778}</span><span>\u{BC18}\u{C751}\u{D615}</span><span>\u{D37C}\u{BE14}\u{B9AC}\u{C2F1}</span>
            </div>
          </div>

          <div class="two">
            <h2>Movie_App</h2> 
            <img src="https://github.com/JoSeungHwan/notepad/blob/master/img/project/Movie-app.png?raw=true" alt="Movie_app">
            <h3>\u{AC1C}\u{C778}\u{D504}\u{B85C}\u{C81D}\u{D2B8}(Web)</h3>            
            <div class="detail">OMDb API\u{B97C} \u{C774}\u{C6A9}\u{D574} \u{B9CC}\u{B4E0} \u{C601}\u{D654} \u{AC80}\u{C0C9} \u{D648}\u{D398}\u{C774}\u{C9C0} \u{C785}\u{B2C8}\u{B2E4}.</div>
            <div class="span">
              <span>\u{AC1C}\u{C778}</span><span>\u{BC18}\u{C751}\u{D615}</span><span>\u{D37C}\u{BE14}\u{B9AC}\u{C2F1}</span>
            </div>
          </div> 

          <div class="three">
            <h2>\u{C655}\u{AC00} \u{D0D5}\u{D6C4}\u{B8E8}</h2>
            <img src="https://github.com/JoSeungHwan/notepad/blob/master/img/projecting/nunastudy.png?raw=true" alt="Movie_app">
            <h3>\u{D300}\u{D504}\u{B85C}\u{C81D}\u{D2B8}(Web)</h3> 
            <div class="detail">\u{D300} \u{D504}\u{B85C}\u{C81D}\u{D2B8}\u{B85C} \u{C9C4}\u{D589}\u{D55C} \u{C655}\u{AC00}\u{D0D5}\u{D6C4}\u{B8E8} \u{D074}\u{B860}\u{CF54}\u{B529}\u{C785}\u{B2C8}\u{B2E4}.</div>
            <div class="span">
              <span>\u{D300}</span><span>\u{BC18}\u{C751}\u{D615}</span><span>\u{D074}\u{B860}\u{CF54}\u{B529}</span>
            </div>
          </div>

          <div class="four">
            <h2>Apple</h2>
            <img src="https://github.com/JoSeungHwan/notepad/blob/master/img/project/apple.png?raw=true" alt="Movie_app">
            <h3>\u{AC1C}\u{C778}\u{D504}\u{B85C}\u{C81D}\u{D2B8}(Web)</h3>
            <div class="detail">Apple \u{D648}\u{D398}\u{C774}\u{C9C0} \u{D074}\u{B860}\u{CF54}\u{B529}\u{C785}\u{B2C8}\u{B2E4}.</div>
            <div class="span">
              <span>\u{AC1C}\u{C778}</span><span>\u{BC18}\u{C751}\u{D615}</span><span>\u{D074}\u{B860}\u{CF54}\u{B529}</span>
            </div>
          </div>

          <div class="five">
            <h2>Starbucks</h2>
            <img src="https://github.com/JoSeungHwan/notepad/blob/master/img/project/starbucks.png?raw=true" alt="Movie_app">
            <h3>\u{AC1C}\u{C778}\u{D504}\u{B85C}\u{C81D}\u{D2B8}(Web)</h3> 
            <div class="detail">\u{C2A4}\u{D0C0}\u{BC85}\u{C2A4} \u{D648}\u{D398}\u{C774}\u{C9C0} \u{D074}\u{B860}\u{CF54}\u{B529}\u{C785}\u{B2C8}\u{B2E4}.</div>
            <div class="span">
              <span>\u{AC1C}\u{C778}</span><span>Web</span><span>\u{D074}\u{B860}\u{CF54}\u{B529}</span>
            </div>
          </div>

          <div class="six">
            <h2>PowerGraphics</h2>
            <img class="movie_img" src="https://github.com/JoSeungHwan/notepad/blob/master/img/projecting/PowerGrphics.png?raw=true" alt="Movie_app">
            <h3>\u{D68C}\u{C0AC}\u{D504}\u{B85C}\u{C81D}\u{D2B8}(App)</h3> 
            <div class="detail">(\u{C8FC})\u{CC28}\u{D2B8}\u{C5F0}\u{AD6C}\u{C18C}\u{C5D0}\u{C11C} \u{C9C4}\u{D589}\u{D55C} \u{C8FC}\u{C2DD}\u{D504}\u{B85C}\u{ADF8}\u{B7A8} APP\u{C785}\u{B2C8}\u{B2E4}.</div>
            <div class="span">
              <span>\u{D300}</span><span>APP</span><span>\u{C0C1}\u{C6A9} \u{D504}\u{B85C}\u{ADF8}\u{B7A8}</span>
            </div>
          </div>

          <div class="seven">
            <h2>\u{C774}\u{BAA8}\u{B9CC}\u{C138}</h2>
            <img src="https://github.com/JoSeungHwan/notepad/blob/master/img/projecting/emomain.png?raw=true" alt="Movie_app">
            <h3>\u{D68C}\u{C0AC}\u{D504}\u{B85C}\u{C81D}\u{D2B8}(App)</h3>
            <div class="detail">\u{C0C1}\u{ACF5}\u{C5D0}\u{C11C} \u{C9C4}\u{D589}\u{D55C} \u{C774}\u{BAA8}\u{B9CC}\u{C138} SNS APP \u{C785}\u{B2C8}\u{B2E4}.</div>
            <div class="span">
              <span>\u{D300}</span><span>APP</span><span>\u{C0C1}\u{C6A9} \u{D504}\u{B85C}\u{ADF8}\u{B7A8}</span>
            </div>
          </div>

          <div class="eight">
            <h2>\u{D558}\u{C774}\u{BE0C}\u{B9AC}\u{B4DC} \u{C571}</h2>
            <img src="https://github.com/JoSeungHwan/notepad/blob/master/img/projecting/sanggong.png?raw=true" alt="Movie_app">
            <h3>\u{D68C}\u{C0AC}\u{D504}\u{B85C}\u{C81D}\u{D2B8}(App)</h3> 
            <div class="detail">\u{C0C1}\u{ACF5}\u{C5D0}\u{C11C} \u{C9C4}\u{D589}\u{D55C} \u{C5EC}\u{B7EC}\u{AC00}\u{C9C0} \u{D558}\u{C774}\u{BE0C}\u{B9AC}\u{B4DC} APP \u{C785}\u{B2C8}\u{B2E4}.</div>
            <div class="span">
              <span>\u{D300}</span><span>APP</span><span>\u{C0C1}\u{C6A9} \u{D504}\u{B85C}\u{ADF8}\u{B7A8}</span> 
            </div>
          </div>

          <div class="nine">
            <h2>Moo</h2>
            <img src="https://github.com/JoSeungHwan/notepad/blob/master/img/projecting/Moo.png?raw=true" alt="Movie_app">
            <h3>\u{AC1C}\u{C778}\u{D504}\u{B85C}\u{C81D}\u{D2B8}(App)</h3>
            <div class="detail">\u{BA54}\u{BAA8}\u{C7A5}\u{AE30}\u{B2A5}\u{ACFC} ToDoList\u{AE30}\u{B2A5}\u{C744} \u{D569}\u{CE5C} \u{AC1C}\u{C778}\u{C77C}\u{C815}\u{AD00}\u{B9AC} APP \u{C785}\u{B2C8}\u{B2E4}.</div>
            <div class="span">
              <span>\u{AC1C}\u{C778}</span><span>APP</span><span>\u{C0AC}\u{C774}\u{B4DC}</span>
            </div>
          </div>

          <div class="ten">
            <h2>COVID19 \u{D604}\u{D669}\u{D310}</h2>
            <img src="https://github.com/JoSeungHwan/notepad/blob/master/img/projecting/COVID19.png?raw=true" alt="Movie_app">
            <h3>\u{AC1C}\u{C778}\u{D504}\u{B85C}\u{C81D}\u{D2B8}(App)</h3> 
            <div class="detail">Corona-19 API\u{B97C} \u{C774}\u{C6A9}\u{D574} \u{CF54}\u{B85C}\u{B098}\u{AC10}\u{C5FC} \u{D604}\u{D669}\u{D310} APP \u{C785}\u{B2C8}\u{B2E4}.</div>
            <div class="span">
              <span>\u{AC1C}\u{C778}</span><span>APP</span><span>\u{C0AC}\u{C774}\u{B4DC}</span>
            </div>
          </div>
        </div>
      </div>
    `,window.onload=function(){let e=document.getElementById("modal");e?.classList.add("active-button")};let e=this.el.querySelector(".all"),t=this.el.querySelector(".web"),n=this.el.querySelector(".app");t.addEventListener("click",()=>{e?.classList.remove("active-button")}),n.addEventListener("click",()=>{e?.classList.remove("active-button")});let i=this.el.querySelector(".projectbtn"),o=this.el.querySelector(".project_project");var r=new u.Controller,s=new u.Scene({triggerElement:i,triggerHook:.8});s.setClassToggle(i,"show"),s.addTo(r);var s=new u.Scene({triggerElement:o,triggerHook:.8});s.setClassToggle(o,"show"),s.addTo(r)}}var d=(o=[{path:"#/",component:class extends e{render(){let e=new a().el,t=new l().el,n=new c().el;this.el.classList.add("container"),this.el.append(e,t,n)}}},{path:"#/about",component:class extends e{render(){let{photo:e,name:t,email:n,github:i,Notion:o}=r.state;this.el.classList.add("container","about"),this.el.innerHTML=`
      <div
        style="background-image: url(${e})" 
        class="photo"></div>
      <p class="name">${t}</p>
      <p>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=${n}" target="_blank">
          ${n}
        </a>
      </p>
      <p><a href="${i}" target="_blank">GitHub</a></p>
      <p><a href="${o}" target="_blank">Notion</a></p>
    `}}},{path:".*",component:class extends e{render(){this.el.classList.add("container","not-found"),this.el.innerHTML=`
      <h1>
        Sorry..<br />
        Page Not Found.
      </h1>
    `}}}],function(){window.addEventListener("popstate",()=>{t(o)}),t(o)});const p=document.querySelector("#root");p?.append(new class extends e{render(){let e=new n().el,t=new s().el,i=document.createElement("router-view");this.el.append(e,i,t)}}().el),d();
//# sourceMappingURL=index.160a842b.js.map
