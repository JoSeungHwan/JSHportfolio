// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dZI1r":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "7dd44675b7a05eb9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"jeorp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _app = require("./App");
var _appDefault = parcelHelpers.interopDefault(_app);
var _routes = require("./routes");
var _routesDefault = parcelHelpers.interopDefault(_routes);
const root = document.querySelector("#root");
root?.append(new (0, _appDefault.default)().el);
(0, _routesDefault.default)();

},{"./App":"lyqAI","./routes":"kvHxr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lyqAI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jo = require("./core/jo");
var _theHeader = require("./components/TheHeader");
var _theHeaderDefault = parcelHelpers.interopDefault(_theHeader);
var _theFooter = require("./components/TheFooter");
var _theFooterDefault = parcelHelpers.interopDefault(_theFooter);
var _widget = require("./components/Widget");
var _widgetDefault = parcelHelpers.interopDefault(_widget);
class App extends (0, _jo.Component) {
    render() {
        const theHeader = new (0, _theHeaderDefault.default)().el;
        const theFooter = new (0, _theFooterDefault.default)().el;
        const routerView = document.createElement("router-view");
        const widget = new (0, _widgetDefault.default)().el;
        this.el.append(theHeader, routerView, theFooter, widget);
    }
}
exports.default = App;

},{"./core/jo":"gH9Ow","./components/TheHeader":"6xxgL","./components/TheFooter":"k4gyF","./components/Widget":"9hdSB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gH9Ow":[function(require,module,exports) {
///// Component /////
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Component", ()=>Component);
parcelHelpers.export(exports, "createRouter", ()=>createRouter);
parcelHelpers.export(exports, "Store", ()=>Store);
class Component {
    constructor(payload = {}){
        const { tagName = "div", props = {}, state = {} } = payload;
        this.el = document.createElement(tagName);
        this.props = props;
        this.state = state;
        this.render();
    }
    render() {
    // 컴포넌트를 렌더링하는 함수
    // ...
    }
}
// 페이지 렌더링!
function routeRender(routes) {
    // 접속할 때 해시 모드가 아니면(해시가 없으면) /#/로 리다이렉트!
    if (!location.hash) history.replaceState(null, "", "/#/"); // (상태, 제목, 주소)
    const routerView = document.querySelector("router-view");
    const [hash, queryString = ""] = location.hash.split("?"); // 물음표를 기준으로 해시 정보와 쿼리스트링을 구분
    const query = queryString.split("&").reduce((acc, cur)=>{
        const [key, value] = cur.split("=");
        acc[key] = value;
        return acc;
    }, {});
    history.replaceState(query, ""); // (상태, 제목)
    // 2) 현재 라우트 정보를 찾아서 렌더링!
    const currentRoute = routes.find((route)=>new RegExp(`${route.path}/?$`).test(hash));
    if (routerView) {
        routerView.innerHTML = "";
        currentRoute && routerView.append(new currentRoute.component().el);
    }
    // 3) 화면 출력 후 스크롤 위치 복구!
    window.scrollTo(0, 0);
}
function createRouter(routes) {
    // 원하는(필요한) 곳에서 호출할 수 있도록 함수 데이터를 반환!
    return function() {
        window.addEventListener("popstate", ()=>{
            routeRender(routes);
        });
        routeRender(routes);
    };
}
class Store {
    constructor(state){
        this.state = {} // 상태(데이터)
        ;
        this.observers = {} // 상태 변경 감지를 통해 실행할 콜백
        ;
        for(const key in state)// 각 상태에 대한 변경 감시(Setter) 설정!
        Object.defineProperty(this.state, key, {
            // Getter
            get: ()=>state[key],
            // Setter
            set: (val)=>{
                state[key] = val;
                if (Array.isArray(this.observers[key])) // 호출할 콜백이 있는 경우!
                this.observers[key].forEach((observer)=>observer(val));
            }
        });
    }
    // 상태 변경 구독!
    subscribe(key, cb) {
        Array.isArray(this.observers[key]) // 이미 등록된 콜백이 있는지 확인!
         ? this.observers[key].push(cb) // 있으면 새로운 콜백 밀어넣기!
         : this.observers[key] = [
            cb
        ]; // 없으면 콜백 배열로 할당!
    // 예시)
    // observers = {
    //   구독할상태이름: [실행할콜백1, 실행할콜백2]
    //   movies: [cb, cb, cb],
    //   message: [cb]
    // }
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"6xxgL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jo = require("../core/jo");
class TheHeader extends (0, _jo.Component) {
    constructor(){
        super({
            tagName: "header",
            state: {
                menus: [
                    {
                        name: "git",
                        href: "https://github.com/JoSeungHwan"
                    },
                    {
                        name: "Notion",
                        href: "https://www.notion.so/IOS-Developer-e65fa672d22e45d3885e09503206a495?pvs=4"
                    },
                    {
                        name: "About",
                        href: "#/about"
                    }
                ]
            }
        });
        window.addEventListener("popstate", ()=>{
            this.render();
        });
    }
    render() {
        this.el.innerHTML = /* html */ `
      <a
        href="#/"
        class="logo">
        <span>JSH</span><span class="logo_span">.portfolio</span>
      </a>
      <nav>
        <ul>
          ${this.state.menus.map((menu)=>{
            const href = menu.href.split("?")[0];
            const hash = location.hash.split("?")[0];
            const isActive = href === hash;
            return /* html */ `
              <li>
                <a
                  class="${isActive ? "active" : ""}"
                  href="${menu.href}">
                  ${menu.name}
                </a>
              </li>`;
        }).join("")}
        </ul>
      </nav>
      <a href="#/about" class="user">
        <img src="https://avatars.githubusercontent.com/u/111415219?u=aff17905a0f1263d4f21cc37af3b3dece7e6c2ba&v=4" alt="User">
      </a>
    `;
    }
}
exports.default = TheHeader;

},{"../core/jo":"gH9Ow","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k4gyF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jo = require("../core/jo");
var _about = require("../store/about");
var _aboutDefault = parcelHelpers.interopDefault(_about);
class TheFooter extends (0, _jo.Component) {
    constructor(){
        super({
            tagName: "footer"
        });
    }
    render() {
        const { github, repository } = (0, _aboutDefault.default).state;
        this.el.innerHTML = /* html */ `
      <div>
        <a href="https://github.com/JoSeungHwan/JSHportfolio">
          GitHub Repository.
        </a>
      </div>
      <div>
        <a href="https://github.com/JoSeungHwan">
          ${new Date().getFullYear()}
          JoSeungHwan GitHub
        </a>
      </div>
    `;
    }
}
exports.default = TheFooter;

},{"../core/jo":"gH9Ow","../store/about":"cyOol","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cyOol":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jo = require("../core/jo");
exports.default = new (0, _jo.Store)({
    photo: "	https://avatars.githubusercontent.com/u/111415219?u=aff17905a0f1263d4f21cc37af3b3dece7e6c2ba&v=4",
    name: "Jo / JoSeungHwan",
    email: "swcc321@naver.com",
    Notion: "https://www.notion.so/IOS-Developer-e65fa672d22e45d3885e09503206a495?pvs=4",
    github: "https://github.com/JoSeungHwan",
    repository: "https://github.com/JoSeungHwan/JSHportfolio"
});

},{"../core/jo":"gH9Ow","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9hdSB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jo = require("../core/jo");
var _materialIconsCss = require("material-icons/iconfont/material-icons.css");
class Widget extends (0, _jo.Component) {
    render() {
        this.el.classList.add("widget");
        this.el.innerHTML = /* html */ `  
      <div id="to-top">
        <div class="material-icons-outlined">arrow_upward</div>
      </div>
    `;
        const badgeEl = document.querySelector("headline .badges");
        const toTopEls = this.el.querySelector("#to-top");
        toTopEls.addEventListener("click", ()=>{
            // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
            // gsap.to(window, 0.7, {
            //   scrollTo: 0,
            // });
            window.scrollTo({
                top: 0,
                // left: 100,
                behavior: "smooth"
            });
        });
    // const scroll = () => {
    //   if (window.scrollY !== 0) {
    //     setTimeout(() => {
    //       window.scrollTo(0, window.scrollY - 50);
    //       scroll();
    //     }, 0.9);
    //   }
    // };
    // toTopEls.addEventListener('click', scroll);
    }
}
exports.default = Widget;

},{"../core/jo":"gH9Ow","material-icons/iconfont/material-icons.css":"89tSA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"89tSA":[function() {},{}],"kvHxr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jo = require("../core/jo");
var _home = require("./Home");
var _homeDefault = parcelHelpers.interopDefault(_home);
var _about = require("./About");
var _aboutDefault = parcelHelpers.interopDefault(_about);
var _notFound = require("./NotFound");
var _notFoundDefault = parcelHelpers.interopDefault(_notFound);
exports.default = (0, _jo.createRouter)([
    {
        path: "#/",
        component: (0, _homeDefault.default)
    },
    {
        path: "#/about",
        component: (0, _aboutDefault.default)
    },
    {
        path: ".*",
        component: (0, _notFoundDefault.default)
    }
]);

},{"../core/jo":"gH9Ow","./Home":"5EgKb","./About":"cdAjJ","./NotFound":"4M8Vg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5EgKb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jo = require("../core/jo");
var _headline = require("../components/Headline");
var _headlineDefault = parcelHelpers.interopDefault(_headline);
var _aboutme = require("../components/Aboutme");
var _aboutmeDefault = parcelHelpers.interopDefault(_aboutme);
var _project = require("../components/Project");
var _projectDefault = parcelHelpers.interopDefault(_project);
class Home extends (0, _jo.Component) {
    render() {
        const headline = new (0, _headlineDefault.default)().el;
        const aboutme = new (0, _aboutmeDefault.default)().el;
        const project = new (0, _projectDefault.default)().el;
        this.el.classList.add("container");
        this.el.append(headline, aboutme, project);
    }
}
exports.default = Home;

},{"../core/jo":"gH9Ow","../components/Headline":"8TN2V","../components/Aboutme":"6k6h2","../components/Project":"fODwQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8TN2V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jo = require("../core/jo");
class Headline extends (0, _jo.Component) {
    render() {
        this.el.classList.add("headline");
        this.el.innerHTML = /* html */ `
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
    `;
    }
}
exports.default = Headline;

},{"../core/jo":"gH9Ow","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6k6h2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jo = require("../core/jo");
var _scrollmagic = require("scrollmagic");
class Aboutme extends (0, _jo.Component) {
    render() {
        this.el.classList.add("aboutme");
        this.el.innerHTML = /* html */ `
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
    `;
        const workEls = this.el.querySelector(".work");
        const skillEls = this.el.querySelector(".skill");
        var controller = new _scrollmagic.Controller();
        // var setMultipleClasses = TweenMax.to('.work', 0.5, {
        //   className: 'show',
        // });
        var scene = new _scrollmagic.Scene({
            // duration: 100,
            // offset: 200,
            triggerElement: workEls,
            triggerHook: 0.8
        });
        scene.setClassToggle(workEls, "show");
        // scene.setTween(setMultipleClasses);
        scene.addTo(controller);
        var scene = new _scrollmagic.Scene({
            // duration: 100,
            // offset: 200,
            triggerElement: skillEls,
            triggerHook: 0.8
        });
        scene.setClassToggle(skillEls, "show");
        // scene.setTween(setMultipleClasses);
        scene.addTo(controller);
    }
}
exports.default = Aboutme;

},{"../core/jo":"gH9Ow","scrollmagic":"1y1Qx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1y1Qx":[function(require,module,exports) {
/*!
 * ScrollMagic v2.0.8 (2020-08-14)
 * The javascript library for magical scroll interactions.
 * (c) 2020 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 * 
 * @version 2.0.8
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file ScrollMagic main library.
 */ /**
 * @namespace ScrollMagic
 */ (function(root, factory) {
    if (typeof define === "function" && define.amd) // AMD. Register as an anonymous module.
    define(factory);
    else // CommonJS
    module.exports = factory();
})(this, function() {
    "use strict";
    var ScrollMagic = function() {
        _util.log(2, "(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.");
    };
    ScrollMagic.version = "2.0.8";
    // TODO: temporary workaround for chrome's scroll jitter bug
    if (typeof window !== "undefined") window.addEventListener("mousewheel", void 0);
    // global const
    var PIN_SPACER_ATTRIBUTE = "data-scrollmagic-pin-spacer";
    /**
	 * The main class that is needed once per scroll container.
	 *
	 * @class
	 *
	 * @example
	 * // basic initialization
	 * var controller = new ScrollMagic.Controller();
	 *
	 * // passing options
	 * var controller = new ScrollMagic.Controller({container: "#myContainer", loglevel: 3});
	 *
	 * @param {object} [options] - An object containing one or more options for the controller.
	 * @param {(string|object)} [options.container=window] - A selector, DOM object that references the main container for scrolling.
	 * @param {boolean} [options.vertical=true] - Sets the scroll mode to vertical (`true`) or horizontal (`false`) scrolling.
	 * @param {object} [options.globalSceneOptions={}] - These options will be passed to every Scene that is added to the controller using the addScene method. For more information on Scene options see {@link ScrollMagic.Scene}.
	 * @param {number} [options.loglevel=2] Loglevel for debugging. Note that logging is disabled in the minified version of ScrollMagic.
											 ** `0` => silent
											 ** `1` => errors
											 ** `2` => errors, warnings
											 ** `3` => errors, warnings, debuginfo
	 * @param {boolean} [options.refreshInterval=100] - Some changes don't call events by default, like changing the container size or moving a scene trigger element.  
	 																										 This interval polls these parameters to fire the necessary events.  
	 																										 If you don't use custom containers, trigger elements or have static layouts, where the positions of the trigger elements don't change, you can set this to 0 disable interval checking and improve performance.
	 *
	 */ ScrollMagic.Controller = function(options) {
        /*
		 * ----------------------------------------------------------------
		 * settings
		 * ----------------------------------------------------------------
		 */ var NAMESPACE = "ScrollMagic.Controller", SCROLL_DIRECTION_FORWARD = "FORWARD", SCROLL_DIRECTION_REVERSE = "REVERSE", SCROLL_DIRECTION_PAUSED = "PAUSED", DEFAULT_OPTIONS = CONTROLLER_OPTIONS.defaults;
        /*
		 * ----------------------------------------------------------------
		 * private vars
		 * ----------------------------------------------------------------
		 */ var Controller = this, _options = _util.extend({}, DEFAULT_OPTIONS, options), _sceneObjects = [], _updateScenesOnNextCycle = false, _scrollPos = 0, _scrollDirection = SCROLL_DIRECTION_PAUSED, _isDocument = true, _viewPortSize = 0, _enabled = true, _updateTimeout, _refreshTimeout;
        /*
		 * ----------------------------------------------------------------
		 * private functions
		 * ----------------------------------------------------------------
		 */ /**
		 * Internal constructor function of the ScrollMagic Controller
		 * @private
		 */ var construct = function() {
            for(var key in _options)if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
                log(2, 'WARNING: Unknown option "' + key + '"');
                delete _options[key];
            }
            _options.container = _util.get.elements(_options.container)[0];
            // check ScrollContainer
            if (!_options.container) {
                log(1, "ERROR creating object " + NAMESPACE + ": No valid scroll container supplied");
                throw NAMESPACE + " init failed."; // cancel
            }
            _isDocument = _options.container === window || _options.container === document.body || !document.body.contains(_options.container);
            // normalize to window
            if (_isDocument) _options.container = window;
            // update container size immediately
            _viewPortSize = getViewportSize();
            // set event handlers
            _options.container.addEventListener("resize", onChange);
            _options.container.addEventListener("scroll", onChange);
            var ri = parseInt(_options.refreshInterval, 10);
            _options.refreshInterval = _util.type.Number(ri) ? ri : DEFAULT_OPTIONS.refreshInterval;
            scheduleRefresh();
            log(3, "added new " + NAMESPACE + " controller (v" + ScrollMagic.version + ")");
        };
        /**
		 * Schedule the next execution of the refresh function
		 * @private
		 */ var scheduleRefresh = function() {
            if (_options.refreshInterval > 0) _refreshTimeout = window.setTimeout(refresh, _options.refreshInterval);
        };
        /**
		 * Default function to get scroll pos - overwriteable using `Controller.scrollPos(newFunction)`
		 * @private
		 */ var getScrollPos = function() {
            return _options.vertical ? _util.get.scrollTop(_options.container) : _util.get.scrollLeft(_options.container);
        };
        /**
		 * Returns the current viewport Size (width vor horizontal, height for vertical)
		 * @private
		 */ var getViewportSize = function() {
            return _options.vertical ? _util.get.height(_options.container) : _util.get.width(_options.container);
        };
        /**
		 * Default function to set scroll pos - overwriteable using `Controller.scrollTo(newFunction)`
		 * Make available publicly for pinned mousewheel workaround.
		 * @private
		 */ var setScrollPos = this._setScrollPos = function(pos) {
            if (_options.vertical) {
                if (_isDocument) window.scrollTo(_util.get.scrollLeft(), pos);
                else _options.container.scrollTop = pos;
            } else if (_isDocument) window.scrollTo(pos, _util.get.scrollTop());
            else _options.container.scrollLeft = pos;
        };
        /**
		 * Handle updates in cycles instead of on scroll (performance)
		 * @private
		 */ var updateScenes = function() {
            if (_enabled && _updateScenesOnNextCycle) {
                // determine scenes to update
                var scenesToUpdate = _util.type.Array(_updateScenesOnNextCycle) ? _updateScenesOnNextCycle : _sceneObjects.slice(0);
                // reset scenes
                _updateScenesOnNextCycle = false;
                var oldScrollPos = _scrollPos;
                // update scroll pos now instead of onChange, as it might have changed since scheduling (i.e. in-browser smooth scroll)
                _scrollPos = Controller.scrollPos();
                var deltaScroll = _scrollPos - oldScrollPos;
                if (deltaScroll !== 0) _scrollDirection = deltaScroll > 0 ? SCROLL_DIRECTION_FORWARD : SCROLL_DIRECTION_REVERSE;
                // reverse order of scenes if scrolling reverse
                if (_scrollDirection === SCROLL_DIRECTION_REVERSE) scenesToUpdate.reverse();
                // update scenes
                scenesToUpdate.forEach(function(scene, index) {
                    log(3, "updating Scene " + (index + 1) + "/" + scenesToUpdate.length + " (" + _sceneObjects.length + " total)");
                    scene.update(true);
                });
                if (scenesToUpdate.length === 0 && _options.loglevel >= 3) log(3, "updating 0 Scenes (nothing added to controller)");
            }
        };
        /**
		 * Initializes rAF callback
		 * @private
		 */ var debounceUpdate = function() {
            _updateTimeout = _util.rAF(updateScenes);
        };
        /**
		 * Handles Container changes
		 * @private
		 */ var onChange = function(e) {
            log(3, "event fired causing an update:", e.type);
            if (e.type == "resize") {
                // resize
                _viewPortSize = getViewportSize();
                _scrollDirection = SCROLL_DIRECTION_PAUSED;
            }
            // schedule update
            if (_updateScenesOnNextCycle !== true) {
                _updateScenesOnNextCycle = true;
                debounceUpdate();
            }
        };
        var refresh = function() {
            if (!_isDocument) // simulate resize event. Only works for viewport relevant param (performance)
            {
                if (_viewPortSize != getViewportSize()) {
                    var resizeEvent;
                    try {
                        resizeEvent = new Event("resize", {
                            bubbles: false,
                            cancelable: false
                        });
                    } catch (e) {
                        resizeEvent = document.createEvent("Event");
                        resizeEvent.initEvent("resize", false, false);
                    }
                    _options.container.dispatchEvent(resizeEvent);
                }
            }
            _sceneObjects.forEach(function(scene, index) {
                scene.refresh();
            });
            scheduleRefresh();
        };
        /**
		 * Send a debug message to the console.
		 * provided publicly with _log for plugins
		 * @private
		 *
		 * @param {number} loglevel - The loglevel required to initiate output for the message.
		 * @param {...mixed} output - One or more variables that should be passed to the console.
		 */ var log = this._log = function(loglevel, output) {
            if (_options.loglevel >= loglevel) {
                Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ") ->");
                _util.log.apply(window, arguments);
            }
        };
        // for scenes we have getters for each option, but for the controller we don't, so we need to make it available externally for plugins
        this._options = _options;
        /**
		 * Sort scenes in ascending order of their start offset.
		 * @private
		 *
		 * @param {array} ScenesArray - an array of ScrollMagic Scenes that should be sorted
		 * @return {array} The sorted array of Scenes.
		 */ var sortScenes = function(ScenesArray) {
            if (ScenesArray.length <= 1) return ScenesArray;
            else {
                var scenes = ScenesArray.slice(0);
                scenes.sort(function(a, b) {
                    return a.scrollOffset() > b.scrollOffset() ? 1 : -1;
                });
                return scenes;
            }
        };
        /**
		 * ----------------------------------------------------------------
		 * public functions
		 * ----------------------------------------------------------------
		 */ /**
		 * Add one ore more scene(s) to the controller.  
		 * This is the equivalent to `Scene.addTo(controller)`.
		 * @public
		 * @example
		 * // with a previously defined scene
		 * controller.addScene(scene);
		 *
		 * // with a newly created scene.
		 * controller.addScene(new ScrollMagic.Scene({duration : 0}));
		 *
		 * // adding multiple scenes
		 * controller.addScene([scene, scene2, new ScrollMagic.Scene({duration : 0})]);
		 *
		 * @param {(ScrollMagic.Scene|array)} newScene - ScrollMagic Scene or Array of Scenes to be added to the controller.
		 * @return {Controller} Parent object for chaining.
		 */ this.addScene = function(newScene) {
            if (_util.type.Array(newScene)) newScene.forEach(function(scene, index) {
                Controller.addScene(scene);
            });
            else if (newScene instanceof ScrollMagic.Scene) {
                if (newScene.controller() !== Controller) newScene.addTo(Controller);
                else if (_sceneObjects.indexOf(newScene) < 0) {
                    // new scene
                    _sceneObjects.push(newScene); // add to array
                    _sceneObjects = sortScenes(_sceneObjects); // sort
                    newScene.on("shift.controller_sort", function() {
                        _sceneObjects = sortScenes(_sceneObjects);
                    });
                    // insert Global defaults.
                    for(var key in _options.globalSceneOptions)if (newScene[key]) newScene[key].call(newScene, _options.globalSceneOptions[key]);
                    log(3, "adding Scene (now " + _sceneObjects.length + " total)");
                }
            } else log(1, "ERROR: invalid argument supplied for '.addScene()'");
            return Controller;
        };
        /**
		 * Remove one ore more scene(s) from the controller.  
		 * This is the equivalent to `Scene.remove()`.
		 * @public
		 * @example
		 * // remove a scene from the controller
		 * controller.removeScene(scene);
		 *
		 * // remove multiple scenes from the controller
		 * controller.removeScene([scene, scene2, scene3]);
		 *
		 * @param {(ScrollMagic.Scene|array)} Scene - ScrollMagic Scene or Array of Scenes to be removed from the controller.
		 * @returns {Controller} Parent object for chaining.
		 */ this.removeScene = function(Scene) {
            if (_util.type.Array(Scene)) Scene.forEach(function(scene, index) {
                Controller.removeScene(scene);
            });
            else {
                var index = _sceneObjects.indexOf(Scene);
                if (index > -1) {
                    Scene.off("shift.controller_sort");
                    _sceneObjects.splice(index, 1);
                    log(3, "removing Scene (now " + _sceneObjects.length + " left)");
                    Scene.remove();
                }
            }
            return Controller;
        };
        /**
	 * Update one ore more scene(s) according to the scroll position of the container.  
	 * This is the equivalent to `Scene.update()`.  
	 * The update method calculates the scene's start and end position (based on the trigger element, trigger hook, duration and offset) and checks it against the current scroll position of the container.  
	 * It then updates the current scene state accordingly (or does nothing, if the state is already correct) – Pins will be set to their correct position and tweens will be updated to their correct progress.  
	 * _**Note:** This method gets called constantly whenever Controller detects a change. The only application for you is if you change something outside of the realm of ScrollMagic, like moving the trigger or changing tween parameters._
	 * @public
	 * @example
	 * // update a specific scene on next cycle
 	 * controller.updateScene(scene);
 	 *
	 * // update a specific scene immediately
	 * controller.updateScene(scene, true);
 	 *
	 * // update multiple scenes scene on next cycle
	 * controller.updateScene([scene1, scene2, scene3]);
	 *
	 * @param {ScrollMagic.Scene} Scene - ScrollMagic Scene or Array of Scenes that is/are supposed to be updated.
	 * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle.  
	 										  This is useful when changing multiple properties of the scene - this way it will only be updated once all new properties are set (updateScenes).
	 * @return {Controller} Parent object for chaining.
	 */ this.updateScene = function(Scene, immediately) {
            if (_util.type.Array(Scene)) Scene.forEach(function(scene, index) {
                Controller.updateScene(scene, immediately);
            });
            else {
                if (immediately) Scene.update(true);
                else if (_updateScenesOnNextCycle !== true && Scene instanceof ScrollMagic.Scene) {
                    // prep array for next update cycle
                    _updateScenesOnNextCycle = _updateScenesOnNextCycle || [];
                    if (_updateScenesOnNextCycle.indexOf(Scene) == -1) _updateScenesOnNextCycle.push(Scene);
                    _updateScenesOnNextCycle = sortScenes(_updateScenesOnNextCycle); // sort
                    debounceUpdate();
                }
            }
            return Controller;
        };
        /**
		 * Updates the controller params and calls updateScene on every scene, that is attached to the controller.  
		 * See `Controller.updateScene()` for more information about what this means.  
		 * In most cases you will not need this function, as it is called constantly, whenever ScrollMagic detects a state change event, like resize or scroll.  
		 * The only application for this method is when ScrollMagic fails to detect these events.  
		 * One application is with some external scroll libraries (like iScroll) that move an internal container to a negative offset instead of actually scrolling. In this case the update on the controller needs to be called whenever the child container's position changes.
		 * For this case there will also be the need to provide a custom function to calculate the correct scroll position. See `Controller.scrollPos()` for details.
		 * @public
		 * @example
		 * // update the controller on next cycle (saves performance due to elimination of redundant updates)
		 * controller.update();
		 *
		 * // update the controller immediately
		 * controller.update(true);
		 *
		 * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle (better performance)
		 * @return {Controller} Parent object for chaining.
		 */ this.update = function(immediately) {
            onChange({
                type: "resize"
            }); // will update size and set _updateScenesOnNextCycle to true
            if (immediately) updateScenes();
            return Controller;
        };
        /**
		 * Scroll to a numeric scroll offset, a DOM element, the start of a scene or provide an alternate method for scrolling.  
		 * For vertical controllers it will change the top scroll offset and for horizontal applications it will change the left offset.
		 * @public
		 *
		 * @since 1.1.0
		 * @example
		 * // scroll to an offset of 100
		 * controller.scrollTo(100);
		 *
		 * // scroll to a DOM element
		 * controller.scrollTo("#anchor");
		 *
		 * // scroll to the beginning of a scene
		 * var scene = new ScrollMagic.Scene({offset: 200});
		 * controller.scrollTo(scene);
		 *
		 * // define a new scroll position modification function (jQuery animate instead of jump)
		 * controller.scrollTo(function (newScrollPos) {
		 *	$("html, body").animate({scrollTop: newScrollPos});
		 * });
		 * controller.scrollTo(100); // call as usual, but the new function will be used instead
		 *
		 * // define a new scroll function with an additional parameter
		 * controller.scrollTo(function (newScrollPos, message) {
		 *  console.log(message);
		 *	$(this).animate({scrollTop: newScrollPos});
		 * });
		 * // call as usual, but supply an extra parameter to the defined custom function
		 * controller.scrollTo(100, "my message");
		 *
		 * // define a new scroll function with an additional parameter containing multiple variables
		 * controller.scrollTo(function (newScrollPos, options) {
		 *  someGlobalVar = options.a + options.b;
		 *	$(this).animate({scrollTop: newScrollPos});
		 * });
		 * // call as usual, but supply an extra parameter containing multiple options
		 * controller.scrollTo(100, {a: 1, b: 2});
		 *
		 * // define a new scroll function with a callback supplied as an additional parameter
		 * controller.scrollTo(function (newScrollPos, callback) {
		 *	$(this).animate({scrollTop: newScrollPos}, 400, "swing", callback);
		 * });
		 * // call as usual, but supply an extra parameter, which is used as a callback in the previously defined custom scroll function
		 * controller.scrollTo(100, function() {
		 *	console.log("scroll has finished.");
		 * });
		 *
		 * @param {mixed} scrollTarget - The supplied argument can be one of these types:
		 * 1. `number` -> The container will scroll to this new scroll offset.
		 * 2. `string` or `object` -> Can be a selector or a DOM object.  
		 *  The container will scroll to the position of this element.
		 * 3. `ScrollMagic Scene` -> The container will scroll to the start of this scene.
		 * 4. `function` -> This function will be used for future scroll position modifications.  
		 *  This provides a way for you to change the behaviour of scrolling and adding new behaviour like animation. The function receives the new scroll position as a parameter and a reference to the container element using `this`.  
		 *  It may also optionally receive an optional additional parameter (see below)  
		 *  _**NOTE:**  
		 *  All other options will still work as expected, using the new function to scroll._
		 * @param {mixed} [additionalParameter] - If a custom scroll function was defined (see above 4.), you may want to supply additional parameters to it, when calling it. You can do this using this parameter – see examples for details. Please note, that this parameter will have no effect, if you use the default scrolling function.
		 * @returns {Controller} Parent object for chaining.
		 */ this.scrollTo = function(scrollTarget, additionalParameter) {
            if (_util.type.Number(scrollTarget)) setScrollPos.call(_options.container, scrollTarget, additionalParameter);
            else if (scrollTarget instanceof ScrollMagic.Scene) {
                if (scrollTarget.controller() === Controller) Controller.scrollTo(scrollTarget.scrollOffset(), additionalParameter);
                else log(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", scrollTarget);
            } else if (_util.type.Function(scrollTarget)) setScrollPos = scrollTarget;
            else {
                var elem = _util.get.elements(scrollTarget)[0];
                if (elem) {
                    // if parent is pin spacer, use spacer position instead so correct start position is returned for pinned elements.
                    while(elem.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE))elem = elem.parentNode;
                    var param = _options.vertical ? "top" : "left", containerOffset = _util.get.offset(_options.container), elementOffset = _util.get.offset(elem);
                    if (!_isDocument) containerOffset[param] -= Controller.scrollPos();
                    Controller.scrollTo(elementOffset[param] - containerOffset[param], additionalParameter);
                } else log(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", scrollTarget);
            }
            return Controller;
        };
        /**
		 * **Get** the current scrollPosition or **Set** a new method to calculate it.  
		 * -> **GET**:
		 * When used as a getter this function will return the current scroll position.  
		 * To get a cached value use Controller.info("scrollPos"), which will be updated in the update cycle.  
		 * For vertical controllers it will return the top scroll offset and for horizontal applications it will return the left offset.
		 *
		 * -> **SET**:
		 * When used as a setter this method prodes a way to permanently overwrite the controller's scroll position calculation.  
		 * A typical usecase is when the scroll position is not reflected by the containers scrollTop or scrollLeft values, but for example by the inner offset of a child container.  
		 * Moving a child container inside a parent is a commonly used method for several scrolling frameworks, including iScroll.  
		 * By providing an alternate calculation function you can make sure ScrollMagic receives the correct scroll position.  
		 * Please also bear in mind that your function should return y values for vertical scrolls an x for horizontals.
		 *
		 * To change the current scroll position please use `Controller.scrollTo()`.
		 * @public
		 *
		 * @example
		 * // get the current scroll Position
		 * var scrollPos = controller.scrollPos();
		 *
		 * // set a new scroll position calculation method
		 * controller.scrollPos(function () {
		 *	return this.info("vertical") ? -mychildcontainer.y : -mychildcontainer.x
		 * });
		 *
		 * @param {function} [scrollPosMethod] - The function to be used for the scroll position calculation of the container.
		 * @returns {(number|Controller)} Current scroll position or parent object for chaining.
		 */ this.scrollPos = function(scrollPosMethod) {
            if (!arguments.length) return getScrollPos.call(Controller);
            else if (_util.type.Function(scrollPosMethod)) getScrollPos = scrollPosMethod;
            else log(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'.");
            return Controller;
        };
        /**
		 * **Get** all infos or one in particular about the controller.
		 * @public
		 * @example
		 * // returns the current scroll position (number)
		 * var scrollPos = controller.info("scrollPos");
		 *
		 * // returns all infos as an object
		 * var infos = controller.info();
		 *
		 * @param {string} [about] - If passed only this info will be returned instead of an object containing all.  
		 							 Valid options are:
		 							 ** `"size"` => the current viewport size of the container
		 							 ** `"vertical"` => true if vertical scrolling, otherwise false
		 							 ** `"scrollPos"` => the current scroll position
		 							 ** `"scrollDirection"` => the last known direction of the scroll
		 							 ** `"container"` => the container element
		 							 ** `"isDocument"` => true if container element is the document.
		 * @returns {(mixed|object)} The requested info(s).
		 */ this.info = function(about) {
            var values = {
                size: _viewPortSize,
                vertical: _options.vertical,
                scrollPos: _scrollPos,
                scrollDirection: _scrollDirection,
                container: _options.container,
                isDocument: _isDocument
            };
            if (!arguments.length) return values;
            else if (values[about] !== undefined) return values[about];
            else {
                log(1, 'ERROR: option "' + about + '" is not available');
                return;
            }
        };
        /**
		 * **Get** or **Set** the current loglevel option value.
		 * @public
		 *
		 * @example
		 * // get the current value
		 * var loglevel = controller.loglevel();
		 *
		 * // set a new value
		 * controller.loglevel(3);
		 *
		 * @param {number} [newLoglevel] - The new loglevel setting of the Controller. `[0-3]`
		 * @returns {(number|Controller)} Current loglevel or parent object for chaining.
		 */ this.loglevel = function(newLoglevel) {
            if (!arguments.length) return _options.loglevel;
            else if (_options.loglevel != newLoglevel) _options.loglevel = newLoglevel;
            return Controller;
        };
        /**
		 * **Get** or **Set** the current enabled state of the controller.  
		 * This can be used to disable all Scenes connected to the controller without destroying or removing them.
		 * @public
		 *
		 * @example
		 * // get the current value
		 * var enabled = controller.enabled();
		 *
		 * // disable the controller
		 * controller.enabled(false);
		 *
		 * @param {boolean} [newState] - The new enabled state of the controller `true` or `false`.
		 * @returns {(boolean|Controller)} Current enabled state or parent object for chaining.
		 */ this.enabled = function(newState) {
            if (!arguments.length) return _enabled;
            else if (_enabled != newState) {
                _enabled = !!newState;
                Controller.updateScene(_sceneObjects, true);
            }
            return Controller;
        };
        /**
		 * Destroy the Controller, all Scenes and everything.
		 * @public
		 *
		 * @example
		 * // without resetting the scenes
		 * controller = controller.destroy();
		 *
		 * // with scene reset
		 * controller = controller.destroy(true);
		 *
		 * @param {boolean} [resetScenes=false] - If `true` the pins and tweens (if existent) of all scenes will be reset.
		 * @returns {null} Null to unset handler variables.
		 */ this.destroy = function(resetScenes) {
            window.clearTimeout(_refreshTimeout);
            var i = _sceneObjects.length;
            while(i--)_sceneObjects[i].destroy(resetScenes);
            _options.container.removeEventListener("resize", onChange);
            _options.container.removeEventListener("scroll", onChange);
            _util.cAF(_updateTimeout);
            log(3, "destroyed " + NAMESPACE + " (reset: " + (resetScenes ? "true" : "false") + ")");
            return null;
        };
        // INIT
        construct();
        return Controller;
    };
    // store pagewide controller options
    var CONTROLLER_OPTIONS = {
        defaults: {
            container: window,
            vertical: true,
            globalSceneOptions: {},
            loglevel: 2,
            refreshInterval: 100
        }
    };
    /*
	 * method used to add an option to ScrollMagic Scenes.
	 */ ScrollMagic.Controller.addOption = function(name, defaultValue) {
        CONTROLLER_OPTIONS.defaults[name] = defaultValue;
    };
    // instance extension function for plugins
    ScrollMagic.Controller.extend = function(extension) {
        var oldClass = this;
        ScrollMagic.Controller = function() {
            oldClass.apply(this, arguments);
            this.$super = _util.extend({}, this); // copy parent state
            return extension.apply(this, arguments) || this;
        };
        _util.extend(ScrollMagic.Controller, oldClass); // copy properties
        ScrollMagic.Controller.prototype = oldClass.prototype; // copy prototype
        ScrollMagic.Controller.prototype.constructor = ScrollMagic.Controller; // restore constructor
    };
    /**
	 * A Scene defines where the controller should react and how.
	 *
	 * @class
	 *
	 * @example
	 * // create a standard scene and add it to a controller
	 * new ScrollMagic.Scene()
	 *		.addTo(controller);
	 *
	 * // create a scene with custom options and assign a handler to it.
	 * var scene = new ScrollMagic.Scene({
	 * 		duration: 100,
	 *		offset: 200,
	 *		triggerHook: "onEnter",
	 *		reverse: false
	 * });
	 *
	 * @param {object} [options] - Options for the Scene. The options can be updated at any time.  
	 							   Instead of setting the options for each scene individually you can also set them globally in the controller as the controllers `globalSceneOptions` option. The object accepts the same properties as the ones below.  
	 							   When a scene is added to the controller the options defined using the Scene constructor will be overwritten by those set in `globalSceneOptions`.
	 * @param {(number|string|function)} [options.duration=0] - The duration of the scene. 
	 					Please see `Scene.duration()` for details.
	 * @param {number} [options.offset=0] - Offset Value for the Trigger Position. If no triggerElement is defined this will be the scroll distance from the start of the page, after which the scene will start.
	 * @param {(string|object)} [options.triggerElement=null] - Selector or DOM object that defines the start of the scene. If undefined the scene will start right at the start of the page (unless an offset is set).
	 * @param {(number|string)} [options.triggerHook="onCenter"] - Can be a number between 0 and 1 defining the position of the trigger Hook in relation to the viewport.  
	 															  Can also be defined using a string:
	 															  ** `"onEnter"` => `1`
	 															  ** `"onCenter"` => `0.5`
	 															  ** `"onLeave"` => `0`
	 * @param {boolean} [options.reverse=true] - Should the scene reverse, when scrolling up?
	 * @param {number} [options.loglevel=2] - Loglevel for debugging. Note that logging is disabled in the minified version of ScrollMagic.
	 										  ** `0` => silent
	 										  ** `1` => errors
	 										  ** `2` => errors, warnings
	 										  ** `3` => errors, warnings, debuginfo
	 * 
	 */ ScrollMagic.Scene = function(options) {
        /*
		 * ----------------------------------------------------------------
		 * settings
		 * ----------------------------------------------------------------
		 */ var NAMESPACE = "ScrollMagic.Scene", SCENE_STATE_BEFORE = "BEFORE", SCENE_STATE_DURING = "DURING", SCENE_STATE_AFTER = "AFTER", DEFAULT_OPTIONS = SCENE_OPTIONS.defaults;
        /*
		 * ----------------------------------------------------------------
		 * private vars
		 * ----------------------------------------------------------------
		 */ var Scene = this, _options = _util.extend({}, DEFAULT_OPTIONS, options), _state = SCENE_STATE_BEFORE, _progress = 0, _scrollOffset = {
            start: 0,
            end: 0
        }, _triggerPos = 0, _enabled = true, _durationUpdateMethod, _controller;
        /**
		 * Internal constructor function of the ScrollMagic Scene
		 * @private
		 */ var construct = function() {
            for(var key in _options)if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
                log(2, 'WARNING: Unknown option "' + key + '"');
                delete _options[key];
            }
            // add getters/setters for all possible options
            for(var optionName in DEFAULT_OPTIONS)addSceneOption(optionName);
            // validate all options
            validateOption();
        };
        /*
		 * ----------------------------------------------------------------
		 * Event Management
		 * ----------------------------------------------------------------
		 */ var _listeners = {};
        /**
		 * Scene start event.  
		 * Fires whenever the scroll position its the starting point of the scene.  
		 * It will also fire when scrolling back up going over the start position of the scene. If you want something to happen only when scrolling down/right, use the scrollDirection parameter passed to the callback.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#start
		 *
		 * @example
		 * scene.on("start", function (event) {
		 * 	console.log("Hit start point of scene.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene `"BEFORE"` or `"DURING"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */ /**
		 * Scene end event.  
		 * Fires whenever the scroll position its the ending point of the scene.  
		 * It will also fire when scrolling back up from after the scene and going over its end position. If you want something to happen only when scrolling down/right, use the scrollDirection parameter passed to the callback.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#end
		 *
		 * @example
		 * scene.on("end", function (event) {
		 * 	console.log("Hit end point of scene.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene `"DURING"` or `"AFTER"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */ /**
		 * Scene enter event.  
		 * Fires whenever the scene enters the "DURING" state.  
		 * Keep in mind that it doesn't matter if the scene plays forward or backward: This event always fires when the scene enters its active scroll timeframe, regardless of the scroll-direction.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#enter
		 *
		 * @example
		 * scene.on("enter", function (event) {
		 * 	console.log("Scene entered.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene - always `"DURING"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */ /**
		 * Scene leave event.  
		 * Fires whenever the scene's state goes from "DURING" to either "BEFORE" or "AFTER".  
		 * Keep in mind that it doesn't matter if the scene plays forward or backward: This event always fires when the scene leaves its active scroll timeframe, regardless of the scroll-direction.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#leave
		 *
		 * @example
		 * scene.on("leave", function (event) {
		 * 	console.log("Scene left.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene `"BEFORE"` or `"AFTER"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */ /**
		 * Scene update event.  
		 * Fires whenever the scene is updated (but not necessarily changes the progress).
		 *
		 * @event ScrollMagic.Scene#update
		 *
		 * @example
		 * scene.on("update", function (event) {
		 * 	console.log("Scene updated.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.startPos - The starting position of the scene (in relation to the conainer)
		 * @property {number} event.endPos - The ending position of the scene (in relation to the conainer)
		 * @property {number} event.scrollPos - The current scroll position of the container
		 */ /**
		 * Scene progress event.  
		 * Fires whenever the progress of the scene changes.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#progress
		 *
		 * @example
		 * scene.on("progress", function (event) {
		 * 	console.log("Scene progress changed to " + event.progress);
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene `"BEFORE"`, `"DURING"` or `"AFTER"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */ /**
		 * Scene change event.  
		 * Fires whenvever a property of the scene is changed.
		 *
		 * @event ScrollMagic.Scene#change
		 *
		 * @example
		 * scene.on("change", function (event) {
		 * 	console.log("Scene Property \"" + event.what + "\" changed to " + event.newval);
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {string} event.what - Indicates what value has been changed
		 * @property {mixed} event.newval - The new value of the changed property
		 */ /**
		 * Scene shift event.  
		 * Fires whenvever the start or end **scroll offset** of the scene change.
		 * This happens explicitely, when one of these values change: `offset`, `duration` or `triggerHook`.
		 * It will fire implicitly when the `triggerElement` changes, if the new element has a different position (most cases).
		 * It will also fire implicitly when the size of the container changes and the triggerHook is anything other than `onLeave`.
		 *
		 * @event ScrollMagic.Scene#shift
		 * @since 1.1.0
		 *
		 * @example
		 * scene.on("shift", function (event) {
		 * 	console.log("Scene moved, because the " + event.reason + " has changed.)");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {string} event.reason - Indicates why the scene has shifted
		 */ /**
		 * Scene destroy event.  
		 * Fires whenvever the scene is destroyed.
		 * This can be used to tidy up custom behaviour used in events.
		 *
		 * @event ScrollMagic.Scene#destroy
		 * @since 1.1.0
		 *
		 * @example
		 * scene.on("enter", function (event) {
		 *        // add custom action
		 *        $("#my-elem").left("200");
		 *      })
		 *      .on("destroy", function (event) {
		 *        // reset my element to start position
		 *        if (event.reset) {
		 *          $("#my-elem").left("0");
		 *        }
		 *      });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {boolean} event.reset - Indicates if the destroy method was called with reset `true` or `false`.
		 */ /**
		 * Scene add event.  
		 * Fires when the scene is added to a controller.
		 * This is mostly used by plugins to know that change might be due.
		 *
		 * @event ScrollMagic.Scene#add
		 * @since 2.0.0
		 *
		 * @example
		 * scene.on("add", function (event) {
		 * 	console.log('Scene was added to a new controller.');
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {boolean} event.controller - The controller object the scene was added to.
		 */ /**
		 * Scene remove event.  
		 * Fires when the scene is removed from a controller.
		 * This is mostly used by plugins to know that change might be due.
		 *
		 * @event ScrollMagic.Scene#remove
		 * @since 2.0.0
		 *
		 * @example
		 * scene.on("remove", function (event) {
		 * 	console.log('Scene was removed from its controller.');
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 */ /**
		 * Add one ore more event listener.  
		 * The callback function will be fired at the respective event, and an object containing relevant data will be passed to the callback.
		 * @method ScrollMagic.Scene#on
		 *
		 * @example
		 * function callback (event) {
		 * 		console.log("Event fired! (" + event.type + ")");
		 * }
		 * // add listeners
		 * scene.on("change update progress start end enter leave", callback);
		 *
		 * @param {string} names - The name or names of the event the callback should be attached to.
		 * @param {function} callback - A function that should be executed, when the event is dispatched. An event object will be passed to the callback.
		 * @returns {Scene} Parent object for chaining.
		 */ this.on = function(names, callback) {
            if (_util.type.Function(callback)) {
                names = names.trim().split(" ");
                names.forEach(function(fullname) {
                    var nameparts = fullname.split("."), eventname = nameparts[0], namespace = nameparts[1];
                    if (eventname != "*") {
                        if (!_listeners[eventname]) _listeners[eventname] = [];
                        _listeners[eventname].push({
                            namespace: namespace || "",
                            callback: callback
                        });
                    }
                });
            } else log(1, "ERROR when calling '.on()': Supplied callback for '" + names + "' is not a valid function!");
            return Scene;
        };
        /**
		 * Remove one or more event listener.
		 * @method ScrollMagic.Scene#off
		 *
		 * @example
		 * function callback (event) {
		 * 		console.log("Event fired! (" + event.type + ")");
		 * }
		 * // add listeners
		 * scene.on("change update", callback);
		 * // remove listeners
		 * scene.off("change update", callback);
		 *
		 * @param {string} names - The name or names of the event that should be removed.
		 * @param {function} [callback] - A specific callback function that should be removed. If none is passed all callbacks to the event listener will be removed.
		 * @returns {Scene} Parent object for chaining.
		 */ this.off = function(names, callback) {
            if (!names) {
                log(1, "ERROR: Invalid event name supplied.");
                return Scene;
            }
            names = names.trim().split(" ");
            names.forEach(function(fullname, key) {
                var nameparts = fullname.split("."), eventname = nameparts[0], namespace = nameparts[1] || "", removeList = eventname === "*" ? Object.keys(_listeners) : [
                    eventname
                ];
                removeList.forEach(function(remove) {
                    var list = _listeners[remove] || [], i = list.length;
                    while(i--){
                        var listener = list[i];
                        if (listener && (namespace === listener.namespace || namespace === "*") && (!callback || callback == listener.callback)) list.splice(i, 1);
                    }
                    if (!list.length) delete _listeners[remove];
                });
            });
            return Scene;
        };
        /**
		 * Trigger an event.
		 * @method ScrollMagic.Scene#trigger
		 *
		 * @example
		 * this.trigger("change");
		 *
		 * @param {string} name - The name of the event that should be triggered.
		 * @param {object} [vars] - An object containing info that should be passed to the callback.
		 * @returns {Scene} Parent object for chaining.
		 */ this.trigger = function(name, vars) {
            if (name) {
                var nameparts = name.trim().split("."), eventname = nameparts[0], namespace = nameparts[1], listeners = _listeners[eventname];
                log(3, "event fired:", eventname, vars ? "->" : "", vars || "");
                if (listeners) listeners.forEach(function(listener, key) {
                    if (!namespace || namespace === listener.namespace) listener.callback.call(Scene, new ScrollMagic.Event(eventname, listener.namespace, Scene, vars));
                });
            } else log(1, "ERROR: Invalid event name supplied.");
            return Scene;
        };
        // set event listeners
        Scene.on("change.internal", function(e) {
            if (e.what !== "loglevel" && e.what !== "tweenChanges") {
                if (e.what === "triggerElement") updateTriggerElementPosition();
                else if (e.what === "reverse") Scene.update();
            }
        }).on("shift.internal", function(e) {
            updateScrollOffset();
            Scene.update(); // update scene to reflect new position
        });
        /**
		 * Send a debug message to the console.
		 * @private
		 * but provided publicly with _log for plugins
		 *
		 * @param {number} loglevel - The loglevel required to initiate output for the message.
		 * @param {...mixed} output - One or more variables that should be passed to the console.
		 */ var log = this._log = function(loglevel, output) {
            if (_options.loglevel >= loglevel) {
                Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ") ->");
                _util.log.apply(window, arguments);
            }
        };
        /**
		 * Add the scene to a controller.  
		 * This is the equivalent to `Controller.addScene(scene)`.
		 * @method ScrollMagic.Scene#addTo
		 *
		 * @example
		 * // add a scene to a ScrollMagic Controller
		 * scene.addTo(controller);
		 *
		 * @param {ScrollMagic.Controller} controller - The controller to which the scene should be added.
		 * @returns {Scene} Parent object for chaining.
		 */ this.addTo = function(controller) {
            if (!(controller instanceof ScrollMagic.Controller)) log(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller");
            else if (_controller != controller) {
                // new controller
                if (_controller) _controller.removeScene(Scene);
                _controller = controller;
                validateOption();
                updateDuration(true);
                updateTriggerElementPosition(true);
                updateScrollOffset();
                _controller.info("container").addEventListener("resize", onContainerResize);
                controller.addScene(Scene);
                Scene.trigger("add", {
                    controller: _controller
                });
                log(3, "added " + NAMESPACE + " to controller");
                Scene.update();
            }
            return Scene;
        };
        /**
		 * **Get** or **Set** the current enabled state of the scene.  
		 * This can be used to disable this scene without removing or destroying it.
		 * @method ScrollMagic.Scene#enabled
		 *
		 * @example
		 * // get the current value
		 * var enabled = scene.enabled();
		 *
		 * // disable the scene
		 * scene.enabled(false);
		 *
		 * @param {boolean} [newState] - The new enabled state of the scene `true` or `false`.
		 * @returns {(boolean|Scene)} Current enabled state or parent object for chaining.
		 */ this.enabled = function(newState) {
            if (!arguments.length) return _enabled;
            else if (_enabled != newState) {
                _enabled = !!newState;
                Scene.update(true);
            }
            return Scene;
        };
        /**
		 * Remove the scene from the controller.  
		 * This is the equivalent to `Controller.removeScene(scene)`.
		 * The scene will not be updated anymore until you readd it to a controller.
		 * To remove the pin or the tween you need to call removeTween() or removePin() respectively.
		 * @method ScrollMagic.Scene#remove
		 * @example
		 * // remove the scene from its controller
		 * scene.remove();
		 *
		 * @returns {Scene} Parent object for chaining.
		 */ this.remove = function() {
            if (_controller) {
                _controller.info("container").removeEventListener("resize", onContainerResize);
                var tmpParent = _controller;
                _controller = undefined;
                tmpParent.removeScene(Scene);
                Scene.trigger("remove");
                log(3, "removed " + NAMESPACE + " from controller");
            }
            return Scene;
        };
        /**
		 * Destroy the scene and everything.
		 * @method ScrollMagic.Scene#destroy
		 * @example
		 * // destroy the scene without resetting the pin and tween to their initial positions
		 * scene = scene.destroy();
		 *
		 * // destroy the scene and reset the pin and tween
		 * scene = scene.destroy(true);
		 *
		 * @param {boolean} [reset=false] - If `true` the pin and tween (if existent) will be reset.
		 * @returns {null} Null to unset handler variables.
		 */ this.destroy = function(reset) {
            Scene.trigger("destroy", {
                reset: reset
            });
            Scene.remove();
            Scene.off("*.*");
            log(3, "destroyed " + NAMESPACE + " (reset: " + (reset ? "true" : "false") + ")");
            return null;
        };
        /**
		 * Updates the Scene to reflect the current state.  
		 * This is the equivalent to `Controller.updateScene(scene, immediately)`.  
		 * The update method calculates the scene's start and end position (based on the trigger element, trigger hook, duration and offset) and checks it against the current scroll position of the container.  
		 * It then updates the current scene state accordingly (or does nothing, if the state is already correct) – Pins will be set to their correct position and tweens will be updated to their correct progress.
		 * This means an update doesn't necessarily result in a progress change. The `progress` event will be fired if the progress has indeed changed between this update and the last.  
		 * _**NOTE:** This method gets called constantly whenever ScrollMagic detects a change. The only application for you is if you change something outside of the realm of ScrollMagic, like moving the trigger or changing tween parameters._
		 * @method ScrollMagic.Scene#update
		 * @example
		 * // update the scene on next tick
		 * scene.update();
		 *
		 * // update the scene immediately
		 * scene.update(true);
		 *
		 * @fires Scene.update
		 *
		 * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle (better performance).
		 * @returns {Scene} Parent object for chaining.
		 */ this.update = function(immediately) {
            if (_controller) {
                if (immediately) {
                    if (_controller.enabled() && _enabled) {
                        var scrollPos = _controller.info("scrollPos"), newProgress;
                        if (_options.duration > 0) newProgress = (scrollPos - _scrollOffset.start) / (_scrollOffset.end - _scrollOffset.start);
                        else newProgress = scrollPos >= _scrollOffset.start ? 1 : 0;
                        Scene.trigger("update", {
                            startPos: _scrollOffset.start,
                            endPos: _scrollOffset.end,
                            scrollPos: scrollPos
                        });
                        Scene.progress(newProgress);
                    } else if (_pin && _state === SCENE_STATE_DURING) updatePinState(true); // unpin in position
                } else _controller.updateScene(Scene, false);
            }
            return Scene;
        };
        /**
		 * Updates dynamic scene variables like the trigger element position or the duration.
		 * This method is automatically called in regular intervals from the controller. See {@link ScrollMagic.Controller} option `refreshInterval`.
		 * 
		 * You can call it to minimize lag, for example when you intentionally change the position of the triggerElement.
		 * If you don't it will simply be updated in the next refresh interval of the container, which is usually sufficient.
		 *
		 * @method ScrollMagic.Scene#refresh
		 * @since 1.1.0
		 * @example
		 * scene = new ScrollMagic.Scene({triggerElement: "#trigger"});
		 * 
		 * // change the position of the trigger
		 * $("#trigger").css("top", 500);
		 * // immediately let the scene know of this change
		 * scene.refresh();
		 *
		 * @fires {@link Scene.shift}, if the trigger element position or the duration changed
		 * @fires {@link Scene.change}, if the duration changed
		 *
		 * @returns {Scene} Parent object for chaining.
		 */ this.refresh = function() {
            updateDuration();
            updateTriggerElementPosition();
            // update trigger element position
            return Scene;
        };
        /**
		 * **Get** or **Set** the scene's progress.  
		 * Usually it shouldn't be necessary to use this as a setter, as it is set automatically by scene.update().  
		 * The order in which the events are fired depends on the duration of the scene:
		 *  1. Scenes with `duration == 0`:  
		 *  Scenes that have no duration by definition have no ending. Thus the `end` event will never be fired.  
		 *  When the trigger position of the scene is passed the events are always fired in this order:  
		 *  `enter`, `start`, `progress` when scrolling forward  
		 *  and  
		 *  `progress`, `start`, `leave` when scrolling in reverse
		 *  2. Scenes with `duration > 0`:  
		 *  Scenes with a set duration have a defined start and end point.  
		 *  When scrolling past the start position of the scene it will fire these events in this order:  
		 *  `enter`, `start`, `progress`  
		 *  When continuing to scroll and passing the end point it will fire these events:  
		 *  `progress`, `end`, `leave`  
		 *  When reversing through the end point these events are fired:  
		 *  `enter`, `end`, `progress`  
		 *  And when continuing to scroll past the start position in reverse it will fire:  
		 *  `progress`, `start`, `leave`  
		 *  In between start and end the `progress` event will be called constantly, whenever the progress changes.
		 * 
		 * In short:  
		 * `enter` events will always trigger **before** the progress update and `leave` envents will trigger **after** the progress update.  
		 * `start` and `end` will always trigger at their respective position.
		 * 
		 * Please review the event descriptions for details on the events and the event object that is passed to the callback.
		 * 
		 * @method ScrollMagic.Scene#progress
		 * @example
		 * // get the current scene progress
		 * var progress = scene.progress();
		 *
		 * // set new scene progress
		 * scene.progress(0.3);
		 *
		 * @fires {@link Scene.enter}, when used as setter
		 * @fires {@link Scene.start}, when used as setter
		 * @fires {@link Scene.progress}, when used as setter
		 * @fires {@link Scene.end}, when used as setter
		 * @fires {@link Scene.leave}, when used as setter
		 *
		 * @param {number} [progress] - The new progress value of the scene `[0-1]`.
		 * @returns {number} `get` -  Current scene progress.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */ this.progress = function(progress) {
            if (!arguments.length) return _progress;
            else {
                var doUpdate = false, oldState = _state, scrollDirection = _controller ? _controller.info("scrollDirection") : "PAUSED", reverseOrForward = _options.reverse || progress >= _progress;
                if (_options.duration === 0) {
                    // zero duration scenes
                    doUpdate = _progress != progress;
                    _progress = progress < 1 && reverseOrForward ? 0 : 1;
                    _state = _progress === 0 ? SCENE_STATE_BEFORE : SCENE_STATE_DURING;
                } else {
                    // scenes with start and end
                    if (progress < 0 && _state !== SCENE_STATE_BEFORE && reverseOrForward) {
                        // go back to initial state
                        _progress = 0;
                        _state = SCENE_STATE_BEFORE;
                        doUpdate = true;
                    } else if (progress >= 0 && progress < 1 && reverseOrForward) {
                        _progress = progress;
                        _state = SCENE_STATE_DURING;
                        doUpdate = true;
                    } else if (progress >= 1 && _state !== SCENE_STATE_AFTER) {
                        _progress = 1;
                        _state = SCENE_STATE_AFTER;
                        doUpdate = true;
                    } else if (_state === SCENE_STATE_DURING && !reverseOrForward) updatePinState(); // in case we scrolled backwards mid-scene and reverse is disabled => update the pin position, so it doesn't move back as well.
                }
                if (doUpdate) {
                    // fire events
                    var eventVars = {
                        progress: _progress,
                        state: _state,
                        scrollDirection: scrollDirection
                    }, stateChanged = _state != oldState;
                    var trigger = function(eventName) {
                        Scene.trigger(eventName, eventVars);
                    };
                    if (stateChanged) {
                        if (oldState !== SCENE_STATE_DURING) {
                            trigger("enter");
                            trigger(oldState === SCENE_STATE_BEFORE ? "start" : "end");
                        }
                    }
                    trigger("progress");
                    if (stateChanged) {
                        if (_state !== SCENE_STATE_DURING) {
                            trigger(_state === SCENE_STATE_BEFORE ? "start" : "end");
                            trigger("leave");
                        }
                    }
                }
                return Scene;
            }
        };
        /**
		 * Update the start and end scrollOffset of the container.
		 * The positions reflect what the controller's scroll position will be at the start and end respectively.
		 * Is called, when:
		 *   - Scene event "change" is called with: offset, triggerHook, duration 
		 *   - scroll container event "resize" is called
		 *   - the position of the triggerElement changes
		 *   - the controller changes -> addTo()
		 * @private
		 */ var updateScrollOffset = function() {
            _scrollOffset = {
                start: _triggerPos + _options.offset
            };
            if (_controller && _options.triggerElement) // take away triggerHook portion to get relative to top
            _scrollOffset.start -= _controller.info("size") * _options.triggerHook;
            _scrollOffset.end = _scrollOffset.start + _options.duration;
        };
        /**
		 * Updates the duration if set to a dynamic function.
		 * This method is called when the scene is added to a controller and in regular intervals from the controller through scene.refresh().
		 * 
		 * @fires {@link Scene.change}, if the duration changed
		 * @fires {@link Scene.shift}, if the duration changed
		 *
		 * @param {boolean} [suppressEvents=false] - If true the shift event will be suppressed.
		 * @private
		 */ var updateDuration = function(suppressEvents) {
            // update duration
            if (_durationUpdateMethod) {
                var varname = "duration";
                if (changeOption(varname, _durationUpdateMethod.call(Scene)) && !suppressEvents) {
                    Scene.trigger("change", {
                        what: varname,
                        newval: _options[varname]
                    });
                    Scene.trigger("shift", {
                        reason: varname
                    });
                }
            }
        };
        /**
		 * Updates the position of the triggerElement, if present.
		 * This method is called ...
		 *  - ... when the triggerElement is changed
		 *  - ... when the scene is added to a (new) controller
		 *  - ... in regular intervals from the controller through scene.refresh().
		 * 
		 * @fires {@link Scene.shift}, if the position changed
		 *
		 * @param {boolean} [suppressEvents=false] - If true the shift event will be suppressed.
		 * @private
		 */ var updateTriggerElementPosition = function(suppressEvents) {
            var elementPos = 0, telem = _options.triggerElement;
            if (_controller && (telem || _triggerPos > 0)) {
                if (telem) {
                    if (telem.parentNode) {
                        var controllerInfo = _controller.info(), containerOffset = _util.get.offset(controllerInfo.container), param = controllerInfo.vertical ? "top" : "left"; // which param is of interest ?
                        // if parent is spacer, use spacer position instead so correct start position is returned for pinned elements.
                        while(telem.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE))telem = telem.parentNode;
                        var elementOffset = _util.get.offset(telem);
                        if (!controllerInfo.isDocument) containerOffset[param] -= _controller.scrollPos();
                        elementPos = elementOffset[param] - containerOffset[param];
                    } else {
                        log(2, "WARNING: triggerElement was removed from DOM and will be reset to", undefined);
                        Scene.triggerElement(undefined); // unset, so a change event is triggered
                    }
                }
                var changed = elementPos != _triggerPos;
                _triggerPos = elementPos;
                if (changed && !suppressEvents) Scene.trigger("shift", {
                    reason: "triggerElementPosition"
                });
            }
        };
        /**
		 * Trigger a shift event, when the container is resized and the triggerHook is > 1.
		 * @private
		 */ var onContainerResize = function(e) {
            if (_options.triggerHook > 0) Scene.trigger("shift", {
                reason: "containerResize"
            });
        };
        var _validate = _util.extend(SCENE_OPTIONS.validate, {
            // validation for duration handled internally for reference to private var _durationMethod
            duration: function(val) {
                if (_util.type.String(val) && val.match(/^(\.|\d)*\d+%$/)) {
                    // percentage value
                    var perc = parseFloat(val) / 100;
                    val = function() {
                        return _controller ? _controller.info("size") * perc : 0;
                    };
                }
                if (_util.type.Function(val)) {
                    // function
                    _durationUpdateMethod = val;
                    try {
                        val = parseFloat(_durationUpdateMethod.call(Scene));
                    } catch (e) {
                        val = -1; // will cause error below
                    }
                }
                // val has to be float
                val = parseFloat(val);
                if (!_util.type.Number(val) || val < 0) {
                    if (_durationUpdateMethod) {
                        _durationUpdateMethod = undefined;
                        throw [
                            'Invalid return value of supplied function for option "duration":',
                            val
                        ];
                    } else throw [
                        'Invalid value for option "duration":',
                        val
                    ];
                }
                return val;
            }
        });
        /**
		 * Checks the validity of a specific or all options and reset to default if neccessary.
		 * @private
		 */ var validateOption = function(check) {
            check = arguments.length ? [
                check
            ] : Object.keys(_validate);
            check.forEach(function(optionName, key) {
                var value;
                if (_validate[optionName]) try {
                    value = _validate[optionName](_options[optionName]);
                } catch (e) {
                    value = DEFAULT_OPTIONS[optionName];
                    var logMSG = _util.type.String(e) ? [
                        e
                    ] : e;
                    if (_util.type.Array(logMSG)) {
                        logMSG[0] = "ERROR: " + logMSG[0];
                        logMSG.unshift(1); // loglevel 1 for error msg
                        log.apply(this, logMSG);
                    } else log(1, "ERROR: Problem executing validation callback for option '" + optionName + "':", e.message);
                } finally{
                    _options[optionName] = value;
                }
            });
        };
        /**
		 * Helper used by the setter/getters for scene options
		 * @private
		 */ var changeOption = function(varname, newval) {
            var changed = false, oldval = _options[varname];
            if (_options[varname] != newval) {
                _options[varname] = newval;
                validateOption(varname); // resets to default if necessary
                changed = oldval != _options[varname];
            }
            return changed;
        };
        // generate getters/setters for all options
        var addSceneOption = function(optionName) {
            if (!Scene[optionName]) Scene[optionName] = function(newVal) {
                if (!arguments.length) return _options[optionName];
                else {
                    if (optionName === "duration") _durationUpdateMethod = undefined;
                    if (changeOption(optionName, newVal)) {
                        Scene.trigger("change", {
                            what: optionName,
                            newval: _options[optionName]
                        });
                        if (SCENE_OPTIONS.shifts.indexOf(optionName) > -1) Scene.trigger("shift", {
                            reason: optionName
                        });
                    }
                }
                return Scene;
            };
        };
        /**
		 * **Get** or **Set** the duration option value.
		 *
		 * As a **setter** it accepts three types of parameters:
		 * 1. `number`: Sets the duration of the scene to exactly this amount of pixels.  
		 *   This means the scene will last for exactly this amount of pixels scrolled. Sub-Pixels are also valid.
		 *   A value of `0` means that the scene is 'open end' and no end will be triggered. Pins will never unpin and animations will play independently of scroll progress.
		 * 2. `string`: Always updates the duration relative to parent scroll container.  
		 *   For example `"100%"` will keep the duration always exactly at the inner height of the scroll container.
		 *   When scrolling vertically the width is used for reference respectively.
		 * 3. `function`: The supplied function will be called to return the scene duration.
		 *   This is useful in setups where the duration depends on other elements who might change size. By supplying a function you can return a value instead of updating potentially multiple scene durations.  
		 *   The scene can be referenced inside the callback using `this`.
		 *   _**WARNING:** This is an easy way to kill performance, as the callback will be executed every time `Scene.refresh()` is called, which happens a lot. The interval is defined by the controller (see ScrollMagic.Controller option `refreshInterval`).  
		 *   It's recomended to avoid calculations within the function and use cached variables as return values.  
		 *   This counts double if you use the same function for multiple scenes._
		 *
		 * @method ScrollMagic.Scene#duration
		 * @example
		 * // get the current duration value
		 * var duration = scene.duration();
		 *
		 * // set a new duration
		 * scene.duration(300);
		 *
		 * // set duration responsively to container size
		 * scene.duration("100%");
		 *
		 * // use a function to randomize the duration for some reason.
		 * var durationValueCache;
		 * function durationCallback () {
		 *   return durationValueCache;
		 * }
		 * function updateDuration () {
		 *   durationValueCache = Math.random() * 100;
		 * }
		 * updateDuration(); // set to initial value
		 * scene.duration(durationCallback); // set duration callback
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @fires {@link Scene.shift}, when used as setter
		 * @param {(number|string|function)} [newDuration] - The new duration setting for the scene.
		 * @returns {number} `get` -  Current scene duration.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */ /**
		 * **Get** or **Set** the offset option value.
		 * @method ScrollMagic.Scene#offset
		 * @example
		 * // get the current offset
		 * var offset = scene.offset();
		 *
		 * // set a new offset
		 * scene.offset(100);
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @fires {@link Scene.shift}, when used as setter
		 * @param {number} [newOffset] - The new offset of the scene.
		 * @returns {number} `get` -  Current scene offset.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */ /**
		 * **Get** or **Set** the triggerElement option value.
		 * Does **not** fire `Scene.shift`, because changing the trigger Element doesn't necessarily mean the start position changes. This will be determined in `Scene.refresh()`, which is automatically triggered.
		 * @method ScrollMagic.Scene#triggerElement
		 * @example
		 * // get the current triggerElement
		 * var triggerElement = scene.triggerElement();
		 *
		 * // set a new triggerElement using a selector
		 * scene.triggerElement("#trigger");
		 * // set a new triggerElement using a DOM object
		 * scene.triggerElement(document.getElementById("trigger"));
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @param {(string|object)} [newTriggerElement] - The new trigger element for the scene.
		 * @returns {(string|object)} `get` -  Current triggerElement.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */ /**
		 * **Get** or **Set** the triggerHook option value.
		 * @method ScrollMagic.Scene#triggerHook
		 * @example
		 * // get the current triggerHook value
		 * var triggerHook = scene.triggerHook();
		 *
		 * // set a new triggerHook using a string
		 * scene.triggerHook("onLeave");
		 * // set a new triggerHook using a number
		 * scene.triggerHook(0.7);
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @fires {@link Scene.shift}, when used as setter
		 * @param {(number|string)} [newTriggerHook] - The new triggerHook of the scene. See {@link Scene} parameter description for value options.
		 * @returns {number} `get` -  Current triggerHook (ALWAYS numerical).
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */ /**
		 * **Get** or **Set** the reverse option value.
		 * @method ScrollMagic.Scene#reverse
		 * @example
		 * // get the current reverse option
		 * var reverse = scene.reverse();
		 *
		 * // set new reverse option
		 * scene.reverse(false);
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @param {boolean} [newReverse] - The new reverse setting of the scene.
		 * @returns {boolean} `get` -  Current reverse option value.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */ /**
		 * **Get** or **Set** the loglevel option value.
		 * @method ScrollMagic.Scene#loglevel
		 * @example
		 * // get the current loglevel
		 * var loglevel = scene.loglevel();
		 *
		 * // set new loglevel
		 * scene.loglevel(3);
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @param {number} [newLoglevel] - The new loglevel setting of the scene. `[0-3]`
		 * @returns {number} `get` -  Current loglevel.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */ /**
		 * **Get** the associated controller.
		 * @method ScrollMagic.Scene#controller
		 * @example
		 * // get the controller of a scene
		 * var controller = scene.controller();
		 *
		 * @returns {ScrollMagic.Controller} Parent controller or `undefined`
		 */ this.controller = function() {
            return _controller;
        };
        /**
		 * **Get** the current state.
		 * @method ScrollMagic.Scene#state
		 * @example
		 * // get the current state
		 * var state = scene.state();
		 *
		 * @returns {string} `"BEFORE"`, `"DURING"` or `"AFTER"`
		 */ this.state = function() {
            return _state;
        };
        /**
		 * **Get** the current scroll offset for the start of the scene.  
		 * Mind, that the scrollOffset is related to the size of the container, if `triggerHook` is bigger than `0` (or `"onLeave"`).  
		 * This means, that resizing the container or changing the `triggerHook` will influence the scene's start offset.
		 * @method ScrollMagic.Scene#scrollOffset
		 * @example
		 * // get the current scroll offset for the start and end of the scene.
		 * var start = scene.scrollOffset();
		 * var end = scene.scrollOffset() + scene.duration();
		 * console.log("the scene starts at", start, "and ends at", end);
		 *
		 * @returns {number} The scroll offset (of the container) at which the scene will trigger. Y value for vertical and X value for horizontal scrolls.
		 */ this.scrollOffset = function() {
            return _scrollOffset.start;
        };
        /**
		 * **Get** the trigger position of the scene (including the value of the `offset` option).  
		 * @method ScrollMagic.Scene#triggerPosition
		 * @example
		 * // get the scene's trigger position
		 * var triggerPosition = scene.triggerPosition();
		 *
		 * @returns {number} Start position of the scene. Top position value for vertical and left position value for horizontal scrolls.
		 */ this.triggerPosition = function() {
            var pos = _options.offset; // the offset is the basis
            if (_controller) {
                // get the trigger position
                if (_options.triggerElement) // Element as trigger
                pos += _triggerPos;
                else // return the height of the triggerHook to start at the beginning
                pos += _controller.info("size") * Scene.triggerHook();
            }
            return pos;
        };
        var _pin, _pinOptions;
        Scene.on("shift.internal", function(e) {
            var durationChanged = e.reason === "duration";
            if (_state === SCENE_STATE_AFTER && durationChanged || _state === SCENE_STATE_DURING && _options.duration === 0) // if [duration changed after a scene (inside scene progress updates pin position)] or [duration is 0, we are in pin phase and some other value changed].
            updatePinState();
            if (durationChanged) updatePinDimensions();
        }).on("progress.internal", function(e) {
            updatePinState();
        }).on("add.internal", function(e) {
            updatePinDimensions();
        }).on("destroy.internal", function(e) {
            Scene.removePin(e.reset);
        });
        /**
		 * Update the pin state.
		 * @private
		 */ var updatePinState = function(forceUnpin) {
            if (_pin && _controller) {
                var containerInfo = _controller.info(), pinTarget = _pinOptions.spacer.firstChild; // may be pin element or another spacer, if cascading pins
                if (!forceUnpin && _state === SCENE_STATE_DURING) {
                    // pinned state
                    if (_util.css(pinTarget, "position") != "fixed") {
                        // change state before updating pin spacer (position changes due to fixed collapsing might occur.)
                        _util.css(pinTarget, {
                            "position": "fixed"
                        });
                        // update pin spacer
                        updatePinDimensions();
                    }
                    var fixedPos = _util.get.offset(_pinOptions.spacer, true), scrollDistance = _options.reverse || _options.duration === 0 ? containerInfo.scrollPos - _scrollOffset.start // quicker
                     : Math.round(_progress * _options.duration * 10) / 10; // if no reverse and during pin the position needs to be recalculated using the progress
                    // add scrollDistance
                    fixedPos[containerInfo.vertical ? "top" : "left"] += scrollDistance;
                    // set new values
                    _util.css(_pinOptions.spacer.firstChild, {
                        top: fixedPos.top,
                        left: fixedPos.left
                    });
                } else {
                    // unpinned state
                    var newCSS = {
                        position: _pinOptions.inFlow ? "relative" : "absolute",
                        top: 0,
                        left: 0
                    }, change = _util.css(pinTarget, "position") != newCSS.position;
                    if (!_pinOptions.pushFollowers) newCSS[containerInfo.vertical ? "top" : "left"] = _options.duration * _progress;
                    else if (_options.duration > 0) {
                        if (_state === SCENE_STATE_AFTER && parseFloat(_util.css(_pinOptions.spacer, "padding-top")) === 0) change = true; // if in after state but havent updated spacer yet (jumped past pin)
                        else if (_state === SCENE_STATE_BEFORE && parseFloat(_util.css(_pinOptions.spacer, "padding-bottom")) === 0) change = true; // jumped past fixed state upward direction
                    }
                    // set new values
                    _util.css(pinTarget, newCSS);
                    if (change) // update pin spacer if state changed
                    updatePinDimensions();
                }
            }
        };
        /**
		 * Update the pin spacer and/or element size.
		 * The size of the spacer needs to be updated whenever the duration of the scene changes, if it is to push down following elements.
		 * @private
		 */ var updatePinDimensions = function() {
            if (_pin && _controller && _pinOptions.inFlow) {
                var after = _state === SCENE_STATE_AFTER, before = _state === SCENE_STATE_BEFORE, during = _state === SCENE_STATE_DURING, vertical = _controller.info("vertical"), pinTarget = _pinOptions.spacer.firstChild, marginCollapse = _util.isMarginCollapseType(_util.css(_pinOptions.spacer, "display")), css = {};
                // set new size
                // if relsize: spacer -> pin | else: pin -> spacer
                if (_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) {
                    if (during) _util.css(_pin, {
                        "width": _util.get.width(_pinOptions.spacer)
                    });
                    else _util.css(_pin, {
                        "width": "100%"
                    });
                } else {
                    // minwidth is needed for cascaded pins.
                    css["min-width"] = _util.get.width(vertical ? _pin : pinTarget, true, true);
                    css.width = during ? css["min-width"] : "auto";
                }
                if (_pinOptions.relSize.height) {
                    if (during) // the only padding the spacer should ever include is the duration (if pushFollowers = true), so we need to substract that.
                    _util.css(_pin, {
                        "height": _util.get.height(_pinOptions.spacer) - (_pinOptions.pushFollowers ? _options.duration : 0)
                    });
                    else _util.css(_pin, {
                        "height": "100%"
                    });
                } else {
                    // margin is only included if it's a cascaded pin to resolve an IE9 bug
                    css["min-height"] = _util.get.height(vertical ? pinTarget : _pin, true, !marginCollapse); // needed for cascading pins
                    css.height = during ? css["min-height"] : "auto";
                }
                // add space for duration if pushFollowers is true
                if (_pinOptions.pushFollowers) {
                    css["padding" + (vertical ? "Top" : "Left")] = _options.duration * _progress;
                    css["padding" + (vertical ? "Bottom" : "Right")] = _options.duration * (1 - _progress);
                }
                _util.css(_pinOptions.spacer, css);
            }
        };
        /**
		 * Updates the Pin state (in certain scenarios)
		 * If the controller container is not the document and we are mid-pin-phase scrolling or resizing the main document can result to wrong pin positions.
		 * So this function is called on resize and scroll of the document.
		 * @private
		 */ var updatePinInContainer = function() {
            if (_controller && _pin && _state === SCENE_STATE_DURING && !_controller.info("isDocument")) updatePinState();
        };
        /**
		 * Updates the Pin spacer size state (in certain scenarios)
		 * If container is resized during pin and relatively sized the size of the pin might need to be updated...
		 * So this function is called on resize of the container.
		 * @private
		 */ var updateRelativePinSpacer = function() {
            if (_controller && _pin && // well, duh
            _state === SCENE_STATE_DURING && // element in pinned state?
            ((_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) && _util.get.width(window) != _util.get.width(_pinOptions.spacer.parentNode) || _pinOptions.relSize.height && _util.get.height(window) != _util.get.height(_pinOptions.spacer.parentNode))) updatePinDimensions();
        };
        /**
		 * Is called, when the mousewhel is used while over a pinned element inside a div container.
		 * If the scene is in fixed state scroll events would be counted towards the body. This forwards the event to the scroll container.
		 * @private
		 */ var onMousewheelOverPin = function(e) {
            if (_controller && _pin && _state === SCENE_STATE_DURING && !_controller.info("isDocument")) {
                e.preventDefault();
                _controller._setScrollPos(_controller.info("scrollPos") - ((e.wheelDelta || e[_controller.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || -e.detail * 30));
            }
        };
        /**
		 * Pin an element for the duration of the scene.
		 * If the scene duration is 0 the element will only be unpinned, if the user scrolls back past the start position.  
		 * Make sure only one pin is applied to an element at the same time.
		 * An element can be pinned multiple times, but only successively.
		 * _**NOTE:** The option `pushFollowers` has no effect, when the scene duration is 0._
		 * @method ScrollMagic.Scene#setPin
		 * @example
		 * // pin element and push all following elements down by the amount of the pin duration.
		 * scene.setPin("#pin");
		 *
		 * // pin element and keeping all following elements in their place. The pinned element will move past them.
		 * scene.setPin("#pin", {pushFollowers: false});
		 *
		 * @param {(string|object)} element - A Selector targeting an element or a DOM object that is supposed to be pinned.
		 * @param {object} [settings] - settings for the pin
		 * @param {boolean} [settings.pushFollowers=true] - If `true` following elements will be "pushed" down for the duration of the pin, if `false` the pinned element will just scroll past them.  
		 												   Ignored, when duration is `0`.
		 * @param {string} [settings.spacerClass="scrollmagic-pin-spacer"] - Classname of the pin spacer element, which is used to replace the element.
		 *
		 * @returns {Scene} Parent object for chaining.
		 */ this.setPin = function(element, settings) {
            var defaultSettings = {
                pushFollowers: true,
                spacerClass: "scrollmagic-pin-spacer"
            };
            var pushFollowersActivelySet = settings && settings.hasOwnProperty("pushFollowers");
            settings = _util.extend({}, defaultSettings, settings);
            // validate Element
            element = _util.get.elements(element)[0];
            if (!element) {
                log(1, "ERROR calling method 'setPin()': Invalid pin element supplied.");
                return Scene; // cancel
            } else if (_util.css(element, "position") === "fixed") {
                log(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'.");
                return Scene; // cancel
            }
            if (_pin) {
                if (_pin === element) // same pin we already have -> do nothing
                return Scene; // cancel
                else // kill old pin
                Scene.removePin();
            }
            _pin = element;
            var parentDisplay = _pin.parentNode.style.display, boundsParams = [
                "top",
                "left",
                "bottom",
                "right",
                "margin",
                "marginLeft",
                "marginRight",
                "marginTop",
                "marginBottom"
            ];
            _pin.parentNode.style.display = "none"; // hack start to force css to return stylesheet values instead of calculated px values.
            var inFlow = _util.css(_pin, "position") != "absolute", pinCSS = _util.css(_pin, boundsParams.concat([
                "display"
            ])), sizeCSS = _util.css(_pin, [
                "width",
                "height"
            ]);
            _pin.parentNode.style.display = parentDisplay; // hack end.
            if (!inFlow && settings.pushFollowers) {
                log(2, "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled.");
                settings.pushFollowers = false;
            }
            window.setTimeout(function() {
                if (_pin && _options.duration === 0 && pushFollowersActivelySet && settings.pushFollowers) log(2, "WARNING: pushFollowers =", true, "has no effect, when scene duration is 0.");
            }, 0);
            // create spacer and insert
            var spacer = _pin.parentNode.insertBefore(document.createElement("div"), _pin), spacerCSS = _util.extend(pinCSS, {
                position: inFlow ? "relative" : "absolute",
                boxSizing: "content-box",
                mozBoxSizing: "content-box",
                webkitBoxSizing: "content-box"
            });
            if (!inFlow) _util.extend(spacerCSS, _util.css(_pin, [
                "width",
                "height"
            ]));
            _util.css(spacer, spacerCSS);
            spacer.setAttribute(PIN_SPACER_ATTRIBUTE, "");
            _util.addClass(spacer, settings.spacerClass);
            // set the pin Options
            _pinOptions = {
                spacer: spacer,
                relSize: {
                    width: sizeCSS.width.slice(-1) === "%",
                    height: sizeCSS.height.slice(-1) === "%",
                    autoFullWidth: sizeCSS.width === "auto" && inFlow && _util.isMarginCollapseType(pinCSS.display)
                },
                pushFollowers: settings.pushFollowers,
                inFlow: inFlow
            };
            if (!_pin.___origStyle) {
                _pin.___origStyle = {};
                var pinInlineCSS = _pin.style, copyStyles = boundsParams.concat([
                    "width",
                    "height",
                    "position",
                    "boxSizing",
                    "mozBoxSizing",
                    "webkitBoxSizing"
                ]);
                copyStyles.forEach(function(val) {
                    _pin.___origStyle[val] = pinInlineCSS[val] || "";
                });
            }
            // if relative size, transfer it to spacer and make pin calculate it...
            if (_pinOptions.relSize.width) _util.css(spacer, {
                width: sizeCSS.width
            });
            if (_pinOptions.relSize.height) _util.css(spacer, {
                height: sizeCSS.height
            });
            // now place the pin element inside the spacer	
            spacer.appendChild(_pin);
            // and set new css
            _util.css(_pin, {
                position: inFlow ? "relative" : "absolute",
                margin: "auto",
                top: "auto",
                left: "auto",
                bottom: "auto",
                right: "auto"
            });
            if (_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) _util.css(_pin, {
                boxSizing: "border-box",
                mozBoxSizing: "border-box",
                webkitBoxSizing: "border-box"
            });
            // add listener to document to update pin position in case controller is not the document.
            window.addEventListener("scroll", updatePinInContainer);
            window.addEventListener("resize", updatePinInContainer);
            window.addEventListener("resize", updateRelativePinSpacer);
            // add mousewheel listener to catch scrolls over fixed elements
            _pin.addEventListener("mousewheel", onMousewheelOverPin);
            _pin.addEventListener("DOMMouseScroll", onMousewheelOverPin);
            log(3, "added pin");
            // finally update the pin to init
            updatePinState();
            return Scene;
        };
        /**
		 * Remove the pin from the scene.
		 * @method ScrollMagic.Scene#removePin
		 * @example
		 * // remove the pin from the scene without resetting it (the spacer is not removed)
		 * scene.removePin();
		 *
		 * // remove the pin from the scene and reset the pin element to its initial position (spacer is removed)
		 * scene.removePin(true);
		 *
		 * @param {boolean} [reset=false] - If `false` the spacer will not be removed and the element's position will not be reset.
		 * @returns {Scene} Parent object for chaining.
		 */ this.removePin = function(reset) {
            if (_pin) {
                if (_state === SCENE_STATE_DURING) updatePinState(true); // force unpin at position
                if (reset || !_controller) {
                    var pinTarget = _pinOptions.spacer.firstChild; // usually the pin element, but may be another spacer (cascaded pins)...
                    if (pinTarget.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
                        var style = _pinOptions.spacer.style, values = [
                            "margin",
                            "marginLeft",
                            "marginRight",
                            "marginTop",
                            "marginBottom"
                        ], margins = {};
                        values.forEach(function(val) {
                            margins[val] = style[val] || "";
                        });
                        _util.css(pinTarget, margins);
                    }
                    _pinOptions.spacer.parentNode.insertBefore(pinTarget, _pinOptions.spacer);
                    _pinOptions.spacer.parentNode.removeChild(_pinOptions.spacer);
                    if (!_pin.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
                        // TODO: only correctly set for first pin (when cascading) - how to fix?
                        _util.css(_pin, _pin.___origStyle);
                        delete _pin.___origStyle;
                    }
                }
                window.removeEventListener("scroll", updatePinInContainer);
                window.removeEventListener("resize", updatePinInContainer);
                window.removeEventListener("resize", updateRelativePinSpacer);
                _pin.removeEventListener("mousewheel", onMousewheelOverPin);
                _pin.removeEventListener("DOMMouseScroll", onMousewheelOverPin);
                _pin = undefined;
                log(3, "removed pin (reset: " + (reset ? "true" : "false") + ")");
            }
            return Scene;
        };
        var _cssClasses, _cssClassElems = [];
        Scene.on("destroy.internal", function(e) {
            Scene.removeClassToggle(e.reset);
        });
        /**
		 * Define a css class modification while the scene is active.  
		 * When the scene triggers the classes will be added to the supplied element and removed, when the scene is over.
		 * If the scene duration is 0 the classes will only be removed if the user scrolls back past the start position.
		 * @method ScrollMagic.Scene#setClassToggle
		 * @example
		 * // add the class 'myclass' to the element with the id 'my-elem' for the duration of the scene
		 * scene.setClassToggle("#my-elem", "myclass");
		 *
		 * // add multiple classes to multiple elements defined by the selector '.classChange'
		 * scene.setClassToggle(".classChange", "class1 class2 class3");
		 *
		 * @param {(string|object)} element - A Selector targeting one or more elements or a DOM object that is supposed to be modified.
		 * @param {string} classes - One or more Classnames (separated by space) that should be added to the element during the scene.
		 *
		 * @returns {Scene} Parent object for chaining.
		 */ this.setClassToggle = function(element, classes) {
            var elems = _util.get.elements(element);
            if (elems.length === 0 || !_util.type.String(classes)) {
                log(1, "ERROR calling method 'setClassToggle()': Invalid " + (elems.length === 0 ? "element" : "classes") + " supplied.");
                return Scene;
            }
            if (_cssClassElems.length > 0) // remove old ones
            Scene.removeClassToggle();
            _cssClasses = classes;
            _cssClassElems = elems;
            Scene.on("enter.internal_class leave.internal_class", function(e) {
                var toggle = e.type === "enter" ? _util.addClass : _util.removeClass;
                _cssClassElems.forEach(function(elem, key) {
                    toggle(elem, _cssClasses);
                });
            });
            return Scene;
        };
        /**
		 * Remove the class binding from the scene.
		 * @method ScrollMagic.Scene#removeClassToggle
		 * @example
		 * // remove class binding from the scene without reset
		 * scene.removeClassToggle();
		 *
		 * // remove class binding and remove the changes it caused
		 * scene.removeClassToggle(true);
		 *
		 * @param {boolean} [reset=false] - If `false` and the classes are currently active, they will remain on the element. If `true` they will be removed.
		 * @returns {Scene} Parent object for chaining.
		 */ this.removeClassToggle = function(reset) {
            if (reset) _cssClassElems.forEach(function(elem, key) {
                _util.removeClass(elem, _cssClasses);
            });
            Scene.off("start.internal_class end.internal_class");
            _cssClasses = undefined;
            _cssClassElems = [];
            return Scene;
        };
        // INIT
        construct();
        return Scene;
    };
    // store pagewide scene options
    var SCENE_OPTIONS = {
        defaults: {
            duration: 0,
            offset: 0,
            triggerElement: undefined,
            triggerHook: 0.5,
            reverse: true,
            loglevel: 2
        },
        validate: {
            offset: function(val) {
                val = parseFloat(val);
                if (!_util.type.Number(val)) throw [
                    'Invalid value for option "offset":',
                    val
                ];
                return val;
            },
            triggerElement: function(val) {
                val = val || undefined;
                if (val) {
                    var elem = _util.get.elements(val)[0];
                    if (elem && elem.parentNode) val = elem;
                    else throw [
                        'Element defined in option "triggerElement" was not found:',
                        val
                    ];
                }
                return val;
            },
            triggerHook: function(val) {
                var translate = {
                    "onCenter": 0.5,
                    "onEnter": 1,
                    "onLeave": 0
                };
                if (_util.type.Number(val)) val = Math.max(0, Math.min(parseFloat(val), 1)); //  make sure its betweeen 0 and 1
                else if (val in translate) val = translate[val];
                else throw [
                    'Invalid value for option "triggerHook": ',
                    val
                ];
                return val;
            },
            reverse: function(val) {
                return !!val; // force boolean
            },
            loglevel: function(val) {
                val = parseInt(val);
                if (!_util.type.Number(val) || val < 0 || val > 3) throw [
                    'Invalid value for option "loglevel":',
                    val
                ];
                return val;
            }
        },
        shifts: [
            "duration",
            "offset",
            "triggerHook"
        ]
    };
    /*
	 * method used to add an option to ScrollMagic Scenes.
	 * TODO: DOC (private for dev)
	 */ ScrollMagic.Scene.addOption = function(name, defaultValue, validationCallback, shifts) {
        if (!(name in SCENE_OPTIONS.defaults)) {
            SCENE_OPTIONS.defaults[name] = defaultValue;
            SCENE_OPTIONS.validate[name] = validationCallback;
            if (shifts) SCENE_OPTIONS.shifts.push(name);
        } else ScrollMagic._util.log(1, "[static] ScrollMagic.Scene -> Cannot add Scene option '" + name + "', because it already exists.");
    };
    // instance extension function for plugins
    // TODO: DOC (private for dev)
    ScrollMagic.Scene.extend = function(extension) {
        var oldClass = this;
        ScrollMagic.Scene = function() {
            oldClass.apply(this, arguments);
            this.$super = _util.extend({}, this); // copy parent state
            return extension.apply(this, arguments) || this;
        };
        _util.extend(ScrollMagic.Scene, oldClass); // copy properties
        ScrollMagic.Scene.prototype = oldClass.prototype; // copy prototype
        ScrollMagic.Scene.prototype.constructor = ScrollMagic.Scene; // restore constructor
    };
    /**
	 * TODO: DOCS (private for dev)
	 * @class
	 * @private
	 */ ScrollMagic.Event = function(type, namespace, target, vars) {
        vars = vars || {};
        for(var key in vars)this[key] = vars[key];
        this.type = type;
        this.target = this.currentTarget = target;
        this.namespace = namespace || "";
        this.timeStamp = this.timestamp = Date.now();
        return this;
    };
    /*
	 * TODO: DOCS (private for dev)
	 */ var _util = ScrollMagic._util = function(window1) {
        var U = {}, i;
        /**
		 * ------------------------------
		 * internal helpers
		 * ------------------------------
		 */ // parse float and fall back to 0.
        var floatval = function(number) {
            return parseFloat(number) || 0;
        };
        // get current style IE safe (otherwise IE would return calculated values for 'auto')
        var _getComputedStyle = function(elem) {
            return elem.currentStyle ? elem.currentStyle : window1.getComputedStyle(elem);
        };
        // get element dimension (width or height)
        var _dimension = function(which, elem, outer, includeMargin) {
            elem = elem === document ? window1 : elem;
            if (elem === window1) includeMargin = false;
            else if (!_type.DomElement(elem)) return 0;
            which = which.charAt(0).toUpperCase() + which.substr(1).toLowerCase();
            var dimension = (outer ? elem["offset" + which] || elem["outer" + which] : elem["client" + which] || elem["inner" + which]) || 0;
            if (outer && includeMargin) {
                var style = _getComputedStyle(elem);
                dimension += which === "Height" ? floatval(style.marginTop) + floatval(style.marginBottom) : floatval(style.marginLeft) + floatval(style.marginRight);
            }
            return dimension;
        };
        // converts 'margin-top' into 'marginTop'
        var _camelCase = function(str) {
            return str.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(g) {
                return g[1].toUpperCase();
            });
        };
        /**
		 * ------------------------------
		 * external helpers
		 * ------------------------------
		 */ // extend obj – same as jQuery.extend({}, objA, objB)
        U.extend = function(obj) {
            obj = obj || {};
            for(i = 1; i < arguments.length; i++){
                if (!arguments[i]) continue;
                for(var key in arguments[i])if (arguments[i].hasOwnProperty(key)) obj[key] = arguments[i][key];
            }
            return obj;
        };
        // check if a css display type results in margin-collapse or not
        U.isMarginCollapseType = function(str) {
            return [
                "block",
                "flex",
                "list-item",
                "table",
                "-webkit-box"
            ].indexOf(str) > -1;
        };
        // implementation of requestAnimationFrame
        // based on https://gist.github.com/paulirish/1579671
        var lastTime = 0, vendors = [
            "ms",
            "moz",
            "webkit",
            "o"
        ];
        var _requestAnimationFrame = window1.requestAnimationFrame;
        var _cancelAnimationFrame = window1.cancelAnimationFrame;
        // try vendor prefixes if the above doesn't work
        for(i = 0; !_requestAnimationFrame && i < vendors.length; ++i){
            _requestAnimationFrame = window1[vendors[i] + "RequestAnimationFrame"];
            _cancelAnimationFrame = window1[vendors[i] + "CancelAnimationFrame"] || window1[vendors[i] + "CancelRequestAnimationFrame"];
        }
        // fallbacks
        if (!_requestAnimationFrame) _requestAnimationFrame = function(callback) {
            var currTime = new Date().getTime(), timeToCall = Math.max(0, 16 - (currTime - lastTime)), id = window1.setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
        if (!_cancelAnimationFrame) _cancelAnimationFrame = function(id) {
            window1.clearTimeout(id);
        };
        U.rAF = _requestAnimationFrame.bind(window1);
        U.cAF = _cancelAnimationFrame.bind(window1);
        var loglevels = [
            "error",
            "warn",
            "log"
        ], console = window1.console || {};
        console.log = console.log || function() {}; // no console log, well - do nothing then...
        // make sure methods for all levels exist.
        for(i = 0; i < loglevels.length; i++){
            var method = loglevels[i];
            if (!console[method]) console[method] = console.log; // prefer .log over nothing
        }
        U.log = function(loglevel) {
            if (loglevel > loglevels.length || loglevel <= 0) loglevel = loglevels.length;
            var now = new Date(), time = ("0" + now.getHours()).slice(-2) + ":" + ("0" + now.getMinutes()).slice(-2) + ":" + ("0" + now.getSeconds()).slice(-2) + ":" + ("00" + now.getMilliseconds()).slice(-3), method = loglevels[loglevel - 1], args = Array.prototype.splice.call(arguments, 1), func = Function.prototype.bind.call(console[method], console);
            args.unshift(time);
            func.apply(console, args);
        };
        /**
		 * ------------------------------
		 * type testing
		 * ------------------------------
		 */ var _type = U.type = function(v) {
            return Object.prototype.toString.call(v).replace(/^\[object (.+)\]$/, "$1").toLowerCase();
        };
        _type.String = function(v) {
            return _type(v) === "string";
        };
        _type.Function = function(v) {
            return _type(v) === "function";
        };
        _type.Array = function(v) {
            return Array.isArray(v);
        };
        _type.Number = function(v) {
            return !_type.Array(v) && v - parseFloat(v) + 1 >= 0;
        };
        _type.DomElement = function(o) {
            return typeof HTMLElement === "object" || typeof HTMLElement === "function" ? o instanceof HTMLElement || o instanceof SVGElement : o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string";
        };
        /**
		 * ------------------------------
		 * DOM Element info
		 * ------------------------------
		 */ // always returns a list of matching DOM elements, from a selector, a DOM element or an list of elements or even an array of selectors
        var _get = U.get = {};
        _get.elements = function(selector) {
            var arr = [];
            if (_type.String(selector)) try {
                selector = document.querySelectorAll(selector);
            } catch (e) {
                return arr;
            }
            if (_type(selector) === "nodelist" || _type.Array(selector) || selector instanceof NodeList) for(var i = 0, ref = arr.length = selector.length; i < ref; i++){
                var elem = selector[i];
                arr[i] = _type.DomElement(elem) ? elem : _get.elements(elem); // if not an element, try to resolve recursively
            }
            else if (_type.DomElement(selector) || selector === document || selector === window1) arr = [
                selector
            ]; // only the element
            return arr;
        };
        // get scroll top value
        _get.scrollTop = function(elem) {
            return elem && typeof elem.scrollTop === "number" ? elem.scrollTop : window1.pageYOffset || 0;
        };
        // get scroll left value
        _get.scrollLeft = function(elem) {
            return elem && typeof elem.scrollLeft === "number" ? elem.scrollLeft : window1.pageXOffset || 0;
        };
        // get element height
        _get.width = function(elem, outer, includeMargin) {
            return _dimension("width", elem, outer, includeMargin);
        };
        // get element width
        _get.height = function(elem, outer, includeMargin) {
            return _dimension("height", elem, outer, includeMargin);
        };
        // get element position (optionally relative to viewport)
        _get.offset = function(elem, relativeToViewport) {
            var offset = {
                top: 0,
                left: 0
            };
            if (elem && elem.getBoundingClientRect) {
                var rect = elem.getBoundingClientRect();
                offset.top = rect.top;
                offset.left = rect.left;
                if (!relativeToViewport) {
                    offset.top += _get.scrollTop();
                    offset.left += _get.scrollLeft();
                }
            }
            return offset;
        };
        /**
		 * ------------------------------
		 * DOM Element manipulation
		 * ------------------------------
		 */ U.addClass = function(elem, classname) {
            if (classname) {
                if (elem.classList) elem.classList.add(classname);
                else elem.className += " " + classname;
            }
        };
        U.removeClass = function(elem, classname) {
            if (classname) {
                if (elem.classList) elem.classList.remove(classname);
                else elem.className = elem.className.replace(new RegExp("(^|\\b)" + classname.split(" ").join("|") + "(\\b|$)", "gi"), " ");
            }
        };
        // if options is string -> returns css value
        // if options is array -> returns object with css value pairs
        // if options is object -> set new css values
        U.css = function(elem, options) {
            if (_type.String(options)) return _getComputedStyle(elem)[_camelCase(options)];
            else if (_type.Array(options)) {
                var obj = {}, style = _getComputedStyle(elem);
                options.forEach(function(option, key) {
                    obj[option] = style[_camelCase(option)];
                });
                return obj;
            } else for(var option in options){
                var val = options[option];
                if (val == parseFloat(val)) val += "px";
                elem.style[_camelCase(option)] = val;
            }
        };
        return U;
    }(window || {});
    ScrollMagic.Scene.prototype.addIndicators = function() {
        ScrollMagic._util.log(1, "(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js");
        return this;
    };
    ScrollMagic.Scene.prototype.removeIndicators = function() {
        ScrollMagic._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js");
        return this;
    };
    ScrollMagic.Scene.prototype.setTween = function() {
        ScrollMagic._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js");
        return this;
    };
    ScrollMagic.Scene.prototype.removeTween = function() {
        ScrollMagic._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js");
        return this;
    };
    ScrollMagic.Scene.prototype.setVelocity = function() {
        ScrollMagic._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js");
        return this;
    };
    ScrollMagic.Scene.prototype.removeVelocity = function() {
        ScrollMagic._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js");
        return this;
    };
    return ScrollMagic;
});

},{}],"fODwQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jo = require("../core/jo");
var _scrollmagic = require("scrollmagic");
class Project extends (0, _jo.Component) {
    render() {
        this.el.classList.add("project");
        this.el.innerHTML = /* html */ `
      <h1>Project</h1>
      <div class="project_btn">
        <div class="project_btn_in back-to-position to-top delay-0">
          <button class="all" id="modal">All</button>
          <button class="web">Web</button>
          <button class="app">App</button>
        </div>
      </div>
      <div class="project_project all">
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

      <div class="project_project_web">
        <div class="wrapper">

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

        </div>
      </div>

      <div class="project_project_app">
        <div class="wrapper">

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
    `;
        window.onload = function() {
            const btnEl = document.getElementById("modal");
            btnEl?.classList.add("active-button");
        };
        const allbtnEl = this.el.querySelector(".all");
        const webbtnEl = this.el.querySelector(".web");
        const appbtnEl = this.el.querySelector(".app");
        const alldivEl = this.el.querySelector(".project_project");
        const webdivEl = this.el.querySelector(".project_project_web");
        const appdivEl = this.el.querySelector(".project_project_app");
        allbtnEl.addEventListener("click", ()=>{
            alldivEl.classList.add("all");
            webdivEl.classList.remove("web");
            appdivEl.classList.remove("app");
            if (webdivEl.classList.container("web")) webdivEl.classList.remove("web");
            if (appdivEl.classList.container("app")) appdivEl.classList.remove("app");
        });
        webbtnEl.addEventListener("click", ()=>{
            allbtnEl.classList.remove("active-button");
            webdivEl.classList.add("web");
            alldivEl.classList.remove("all");
            appdivEl.classList.remove("app");
            if (alldivEl.classList.container("all")) alldivEl.classList.remove("all");
            if (appdivEl.classList.container("app")) appdivEl.classList.remove("app");
        });
        appbtnEl.addEventListener("click", ()=>{
            allbtnEl.classList.remove("active-button");
            appdivEl.classList.add("app");
            alldivEl.classList.remove("all");
            webdivEl.classList.remove("web");
            if (alldivEl.classList.container("all")) alldivEl.classList.remove("all");
            if (webdivEl.classList.container("web")) webdivEl.classList.remove("web");
        });
        const btnEls = this.el.querySelector(".project_btn");
        const projectEls = this.el.querySelector(".project_project");
        var controller = new _scrollmagic.Controller();
        // var setMultipleClasses = TweenMax.to(btnEls, 0.5, {
        //   className: 'show',
        // });
        var scene = new _scrollmagic.Scene({
            // duration: 100,
            // offset: 200,
            triggerElement: btnEls,
            triggerHook: 0.8
        });
        scene.setClassToggle(btnEls, "show");
        // scene.setTween(setMultipleClasses);
        scene.addTo(controller);
        var scene = new _scrollmagic.Scene({
            // duration: 100,
            // offset: 200,
            triggerElement: projectEls,
            triggerHook: 0.8
        });
        scene.setClassToggle(projectEls, "show");
        // scene.setTween(setMultipleClasses);
        scene.addTo(controller);
    }
}
exports.default = Project;

},{"../core/jo":"gH9Ow","scrollmagic":"1y1Qx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cdAjJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jo = require("../core/jo");
var _about = require("../store/about");
var _aboutDefault = parcelHelpers.interopDefault(_about);
class About extends (0, _jo.Component) {
    render() {
        const { photo, name, email, github, Notion } = (0, _aboutDefault.default).state;
        this.el.classList.add("container", "about");
        this.el.innerHTML = /* html */ `
      <div
        style="background-image: url(${photo})" 
        class="photo"></div>
      <p class="name">${name}</p>
      <p>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=${email}" target="_blank">
          ${email}
        </a>
      </p>
      <p><a href="${github}" target="_blank">GitHub</a></p>
      <p><a href="${Notion}" target="_blank">Notion</a></p>
    `;
    }
}
exports.default = About;

},{"../core/jo":"gH9Ow","../store/about":"cyOol","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4M8Vg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jo = require("../core/jo");
class NotFound extends (0, _jo.Component) {
    render() {
        this.el.classList.add("container", "not-found");
        this.el.innerHTML = /* html */ `
      <h1>
        Sorry..<br />
        Page Not Found.
      </h1>
    `;
    }
}
exports.default = NotFound;

},{"../core/jo":"gH9Ow","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["dZI1r","jeorp"], "jeorp", "parcelRequire2041")

//# sourceMappingURL=index.b7a05eb9.js.map
