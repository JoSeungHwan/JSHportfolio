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
class App extends (0, _jo.Component) {
    render() {
        const theHeader = new (0, _theHeaderDefault.default)().el;
        const theFooter = new (0, _theFooterDefault.default)().el;
        const routerView = document.createElement("router-view");
        this.el.append(theHeader, routerView, theFooter);
    }
}
exports.default = App;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./core/jo":"gH9Ow","./components/TheHeader":"6xxgL","./components/TheFooter":"k4gyF"}],"gkKU3":[function(require,module,exports) {
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

},{}],"gH9Ow":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6xxgL":[function(require,module,exports) {
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
    repository: "https://github.com/JoSeungHwan/-vanillajs-movie-app"
});

},{"../core/jo":"gH9Ow","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kvHxr":[function(require,module,exports) {
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

},{"../core/jo":"gH9Ow","../components/Headline":"8TN2V","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../components/Aboutme":"6k6h2","../components/Project":"fODwQ"}],"8TN2V":[function(require,module,exports) {
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
    `;
    }
}
exports.default = Headline;

},{"../core/jo":"gH9Ow","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6k6h2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jo = require("../core/jo");
class Aboutme extends (0, _jo.Component) {
    render() {
        this.el.classList.add("aboutme");
        this.el.innerHTML = /* html */ `
      <div class="h11">
        <h1>Work</h1>
      </div>
      <div class="work">
        <div class="work1">
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

        <div class="work2">
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

      <!-- <div class="work3">
        <div class="work33">
          <h2>\u{BE44}\u{AC1C}\u{BC1C}</h2>
          <h3>(\u{C8FC})ACT(\u{BE44}\u{AC1C}\u{BC1C})</h3>
          <span>2019.11 ~ 2021.03</span>
          <br/>
          <br/>
          <h3>(\u{C8FC})\u{B098}\u{C774}\u{C2A4}\u{C528}\u{C5E0}\u{C5D0}\u{C2A4}(\u{BE44}\u{AC1C}\u{BC1C})</h3>
          <span>2018.04 ~ 2019.11</span>
          <br/>
          <br/>
          <h3>LG\u{C774}\u{B178}\u{D14D}(\u{BE44}\u{AC1C}\u{BC1C})</h3>
          <span>2016.07 ~ 2016.11(\u{ACC4}\u{C57D}\u{C9C1}\u{ADFC}\u{BB34})</span>
        </div>
      </div> -->

      <div class="">
        <h1 class="skill_tools">Skill & Tools</h1>
      </div>

      <div class="skill">
        <div class="skillLogo">
          <div class="front_skill">
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
          <div class="app_skill">
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
        </div>
      </div>
    `;
    }
}
exports.default = Aboutme;

},{"../core/jo":"gH9Ow","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fODwQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jo = require("../core/jo");
class Project extends (0, _jo.Component) {
    render() {
        this.el.classList.add("project");
        this.el.innerHTML = /* html */ `
      <h1>Project</h1>
      <div>App</div>
      <div>Front-end</div>

    `;
    }
}
exports.default = Project;

},{"../core/jo":"gH9Ow","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cdAjJ":[function(require,module,exports) {
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
