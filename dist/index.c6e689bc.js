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
})({"2SfhH":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "21818622c6e689bc";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
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
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
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
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
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
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
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
function hmrApply(bundle, asset) {
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
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"hZhzg":[function(require,module,exports) {
var _api = require("@atproto/api");
document.addEventListener("DOMContentLoaded", ()=>{
    const loginForm = document.getElementById("loginForm");
    const scheduleForm = document.getElementById("scheduleForm");
    const stopScheduleButton = document.getElementById("stop-schedule");
    let loggedInUsername = null;
    let loggedInApi = null;
    loginForm.addEventListener("submit", async (event)=>{
        event.preventDefault();
        const username = document.getElementById("loginUsername").value;
        const password = document.getElementById("loginPassword").value;
        try {
            const api = new (0, _api.BskyAgent)({
                service: "https://bsky.social"
            });
            await api.login({
                identifier: username,
                password
            });
            loggedInUsername = username;
            loggedInApi = api;
            loginForm.style.display = "none";
            scheduleForm.style.display = "block";
            alert("Logged in successfully!");
        } catch (error) {
            console.error("Error logging in:", error);
            alert("Error logging in");
        }
    });
    scheduleForm.addEventListener("submit", async (event)=>{
        event.preventDefault();
        const message = document.getElementById("message").value;
        const time = document.getElementById("time").value;
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: loggedInUsername,
                accessToken: loggedInApi.session.accessJwt,
                message,
                time
            })
        };
        try {
            const response = await fetch("/schedule", requestOptions);
            if (response.ok) alert("Scheduled successfully");
            else alert("Error scheduling the post");
        } catch (error) {
            console.error("Error scheduling the post:", error);
            alert("Error scheduling the post");
        }
    });
    stopScheduleButton.addEventListener("click", async ()=>{
        try {
            const response = await fetch("/stop-schedule", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: loggedInUsername
                })
            });
            if (response.status === 200) alert("Schedule stopped successfully!");
            else alert("Failed to stop schedule. No active schedule found for this user.");
        } catch (error) {
            console.error("Error stopping the schedule:", error);
            alert("Failed to stop schedule. Please try again later.");
        }
    });
});

},{"@atproto/api":"1jO0W"}],"1jO0W":[function(require,module,exports) {
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod2)=>function __require() {
        return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = {
            exports: {}
        }).exports, mod2), mod2.exports;
    };
var __export = (target, all)=>{
    for(var name2 in all)__defProp(target, name2, {
        get: all[name2],
        enumerable: true
    });
};
var __copyProps = (to, from3, except, desc)=>{
    if (from3 && typeof from3 === "object" || typeof from3 === "function") {
        for (let key of __getOwnPropNames(from3))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from3[key],
            enumerable: !(desc = __getOwnPropDesc(from3, key)) || desc.enumerable
        });
    }
    return to;
};
var __toESM = (mod2, isNodeMode, target)=>(target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", {
        value: mod2,
        enumerable: true
    }) : target, mod2));
var __toCommonJS = (mod2)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod2);
// ../../node_modules/iso-datestring-validator/dist/index.js
var require_dist = __commonJS({
    "../../node_modules/iso-datestring-validator/dist/index.js" (exports) {
        (()=>{
            "use strict";
            var e = {
                d: (t2, r2)=>{
                    for(var n2 in r2)e.o(r2, n2) && !e.o(t2, n2) && Object.defineProperty(t2, n2, {
                        enumerable: true,
                        get: r2[n2]
                    });
                },
                o: (e2, t2)=>Object.prototype.hasOwnProperty.call(e2, t2),
                r: (e2)=>{
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e2, "__esModule", {
                        value: true
                    });
                }
            }, t = {};
            function r(e2, t2) {
                return void 0 === t2 && (t2 = "-"), new RegExp("^(?!0{4}" + t2 + "0{2}" + t2 + "0{2})((?=[0-9]{4}" + t2 + "(((0[^2])|1[0-2])|02(?=" + t2 + "(([0-1][0-9])|2[0-8])))" + t2 + "[0-9]{2})|(?=((([13579][26])|([2468][048])|(0[48]))0{2})|([0-9]{2}((((0|[2468])[48])|[2468][048])|([13579][26])))" + t2 + "02" + t2 + "29))([0-9]{4})" + t2 + "(?!((0[469])|11)" + t2 + "31)((0[1,3-9]|1[0-2])|(02(?!" + t2 + "3)))" + t2 + "(0[1-9]|[1-2][0-9]|3[0-1])$").test(e2);
            }
            function n(e2) {
                var t2 = /\D/.exec(e2);
                return t2 ? t2[0] : "";
            }
            function i(e2, t2, r2) {
                void 0 === t2 && (t2 = ":"), void 0 === r2 && (r2 = false);
                var i2 = new RegExp("^([0-1]|2(?=([0-3])|4" + t2 + "00))[0-9]" + t2 + "[0-5][0-9](" + t2 + "([0-5]|6(?=0))[0-9])?(.[0-9]{1,9})?$");
                if (!r2 || !/[Z+\-]/.test(e2)) return i2.test(e2);
                if (/Z$/.test(e2)) return i2.test(e2.replace("Z", ""));
                var o2 = e2.includes("+"), a2 = e2.split(/[+-]/), u2 = a2[0], d2 = a2[1];
                return i2.test(u2) && function(e3, t3, r3) {
                    return void 0 === r3 && (r3 = ":"), new RegExp(t3 ? "^(0(?!(2" + r3 + "4)|0" + r3 + "3)|1(?=([0-1]|2(?=" + r3 + "[04])|[34](?=" + r3 + "0))))([03469](?=" + r3 + "[03])|[17](?=" + r3 + "0)|2(?=" + r3 + "[04])|5(?=" + r3 + "[034])|8(?=" + r3 + "[04]))" + r3 + "([03](?=0)|4(?=5))[05]$" : "^(0(?=[^0])|1(?=[0-2]))([39](?=" + r3 + "[03])|[0-24-8](?=" + r3 + "00))" + r3 + "[03]0$").test(e3);
                }(d2, o2, n(d2));
            }
            function o(e2) {
                var t2 = e2.split("T"), o2 = t2[0], a2 = t2[1], u2 = r(o2, n(o2));
                if (!a2) return false;
                var d2, s = (d2 = a2.match(/([^Z+\-\d])(?=\d+\1)/), Array.isArray(d2) ? d2[0] : "");
                return u2 && i(a2, s, true);
            }
            function a(e2, t2) {
                return void 0 === t2 && (t2 = "-"), new RegExp("^[0-9]{4}" + t2 + "(0(?=[^0])|1(?=[0-2]))[0-9]$").test(e2);
            }
            e.r(t), e.d(t, {
                isValidDate: ()=>r,
                isValidISODateString: ()=>o,
                isValidTime: ()=>i,
                isValidYearMonth: ()=>a
            });
            var u = exports;
            for(var d in t)u[d] = t[d];
            t.__esModule && Object.defineProperty(u, "__esModule", {
                value: true
            });
        })();
    }
});
// src/index.ts
var src_exports4 = {};
__export(src_exports4, {
    ActorNS: ()=>ActorNS,
    AdminNS: ()=>AdminNS,
    AppBskyActorDefs: ()=>defs_exports5,
    AppBskyActorGetProfile: ()=>getProfile_exports,
    AppBskyActorGetProfiles: ()=>getProfiles_exports,
    AppBskyActorGetSuggestions: ()=>getSuggestions_exports,
    AppBskyActorProfile: ()=>profile_exports,
    AppBskyActorSearchActors: ()=>searchActors_exports,
    AppBskyActorSearchActorsTypeahead: ()=>searchActorsTypeahead_exports,
    AppBskyEmbedExternal: ()=>external_exports,
    AppBskyEmbedImages: ()=>images_exports,
    AppBskyEmbedRecord: ()=>record_exports,
    AppBskyEmbedRecordWithMedia: ()=>recordWithMedia_exports,
    AppBskyFeedDefs: ()=>defs_exports6,
    AppBskyFeedGetAuthorFeed: ()=>getAuthorFeed_exports,
    AppBskyFeedGetLikes: ()=>getLikes_exports,
    AppBskyFeedGetPostThread: ()=>getPostThread_exports,
    AppBskyFeedGetRepostedBy: ()=>getRepostedBy_exports,
    AppBskyFeedGetTimeline: ()=>getTimeline_exports,
    AppBskyFeedLike: ()=>like_exports,
    AppBskyFeedPost: ()=>post_exports,
    AppBskyFeedRepost: ()=>repost_exports,
    AppBskyGraphFollow: ()=>follow_exports,
    AppBskyGraphGetFollowers: ()=>getFollowers_exports,
    AppBskyGraphGetFollows: ()=>getFollows_exports,
    AppBskyGraphGetMutes: ()=>getMutes_exports,
    AppBskyGraphMuteActor: ()=>muteActor_exports,
    AppBskyGraphUnmuteActor: ()=>unmuteActor_exports,
    AppBskyNotificationGetUnreadCount: ()=>getUnreadCount_exports,
    AppBskyNotificationListNotifications: ()=>listNotifications_exports,
    AppBskyNotificationUpdateSeen: ()=>updateSeen_exports,
    AppBskyRichtextFacet: ()=>facet_exports,
    AppBskyUnspeccedGetPopular: ()=>getPopular_exports,
    AppNS: ()=>AppNS,
    AtUri: ()=>AtUri,
    AtpAgent: ()=>AtpAgent,
    AtpBaseClient: ()=>AtpBaseClient,
    AtpServiceClient: ()=>AtpServiceClient,
    AtprotoNS: ()=>AtprotoNS,
    BlobRef: ()=>BlobRef,
    BskyAgent: ()=>BskyAgent,
    BskyNS: ()=>BskyNS,
    COM_ATPROTO_ADMIN: ()=>COM_ATPROTO_ADMIN,
    COM_ATPROTO_MODERATION: ()=>COM_ATPROTO_MODERATION,
    ComAtprotoAdminDefs: ()=>defs_exports,
    ComAtprotoAdminDisableInviteCodes: ()=>disableInviteCodes_exports,
    ComAtprotoAdminGetInviteCodes: ()=>getInviteCodes_exports,
    ComAtprotoAdminGetModerationAction: ()=>getModerationAction_exports,
    ComAtprotoAdminGetModerationActions: ()=>getModerationActions_exports,
    ComAtprotoAdminGetModerationReport: ()=>getModerationReport_exports,
    ComAtprotoAdminGetModerationReports: ()=>getModerationReports_exports,
    ComAtprotoAdminGetRecord: ()=>getRecord_exports,
    ComAtprotoAdminGetRepo: ()=>getRepo_exports,
    ComAtprotoAdminResolveModerationReports: ()=>resolveModerationReports_exports,
    ComAtprotoAdminReverseModerationAction: ()=>reverseModerationAction_exports,
    ComAtprotoAdminSearchRepos: ()=>searchRepos_exports,
    ComAtprotoAdminTakeModerationAction: ()=>takeModerationAction_exports,
    ComAtprotoAdminUpdateAccountHandle: ()=>updateAccountHandle_exports,
    ComAtprotoIdentityResolveHandle: ()=>resolveHandle_exports,
    ComAtprotoIdentityUpdateHandle: ()=>updateHandle_exports,
    ComAtprotoLabelDefs: ()=>defs_exports2,
    ComAtprotoLabelQueryLabels: ()=>queryLabels_exports,
    ComAtprotoLabelSubscribeLabels: ()=>subscribeLabels_exports,
    ComAtprotoModerationCreateReport: ()=>createReport_exports,
    ComAtprotoModerationDefs: ()=>defs_exports3,
    ComAtprotoRepoApplyWrites: ()=>applyWrites_exports,
    ComAtprotoRepoCreateRecord: ()=>createRecord_exports,
    ComAtprotoRepoDeleteRecord: ()=>deleteRecord_exports,
    ComAtprotoRepoDescribeRepo: ()=>describeRepo_exports,
    ComAtprotoRepoGetRecord: ()=>getRecord_exports2,
    ComAtprotoRepoListRecords: ()=>listRecords_exports,
    ComAtprotoRepoPutRecord: ()=>putRecord_exports,
    ComAtprotoRepoStrongRef: ()=>strongRef_exports,
    ComAtprotoRepoUploadBlob: ()=>uploadBlob_exports,
    ComAtprotoServerCreateAccount: ()=>createAccount_exports,
    ComAtprotoServerCreateInviteCode: ()=>createInviteCode_exports,
    ComAtprotoServerCreateInviteCodes: ()=>createInviteCodes_exports,
    ComAtprotoServerCreateSession: ()=>createSession_exports,
    ComAtprotoServerDefs: ()=>defs_exports4,
    ComAtprotoServerDeleteAccount: ()=>deleteAccount_exports,
    ComAtprotoServerDeleteSession: ()=>deleteSession_exports,
    ComAtprotoServerDescribeServer: ()=>describeServer_exports,
    ComAtprotoServerGetAccountInviteCodes: ()=>getAccountInviteCodes_exports,
    ComAtprotoServerGetSession: ()=>getSession_exports,
    ComAtprotoServerRefreshSession: ()=>refreshSession_exports,
    ComAtprotoServerRequestAccountDelete: ()=>requestAccountDelete_exports,
    ComAtprotoServerRequestPasswordReset: ()=>requestPasswordReset_exports,
    ComAtprotoServerResetPassword: ()=>resetPassword_exports,
    ComAtprotoSyncGetBlob: ()=>getBlob_exports,
    ComAtprotoSyncGetBlocks: ()=>getBlocks_exports,
    ComAtprotoSyncGetCheckout: ()=>getCheckout_exports,
    ComAtprotoSyncGetCommitPath: ()=>getCommitPath_exports,
    ComAtprotoSyncGetHead: ()=>getHead_exports,
    ComAtprotoSyncGetRecord: ()=>getRecord_exports3,
    ComAtprotoSyncGetRepo: ()=>getRepo_exports2,
    ComAtprotoSyncListBlobs: ()=>listBlobs_exports,
    ComAtprotoSyncListRepos: ()=>listRepos_exports,
    ComAtprotoSyncNotifyOfUpdate: ()=>notifyOfUpdate_exports,
    ComAtprotoSyncRequestCrawl: ()=>requestCrawl_exports,
    ComAtprotoSyncSubscribeRepos: ()=>subscribeRepos_exports,
    ComNS: ()=>ComNS,
    EmbedNS: ()=>EmbedNS,
    FeedNS: ()=>FeedNS,
    FollowRecord: ()=>FollowRecord,
    GraphNS: ()=>GraphNS,
    IdentityNS: ()=>IdentityNS,
    LabelNS: ()=>LabelNS,
    LikeRecord: ()=>LikeRecord,
    ModerationNS: ()=>ModerationNS,
    NotificationNS: ()=>NotificationNS,
    PostRecord: ()=>PostRecord,
    ProfileRecord: ()=>ProfileRecord,
    RepoNS: ()=>RepoNS,
    RepostRecord: ()=>RepostRecord,
    RichText: ()=>RichText,
    RichTextSegment: ()=>RichTextSegment,
    RichtextNS: ()=>RichtextNS,
    ServerNS: ()=>ServerNS,
    SyncNS: ()=>SyncNS,
    UnicodeString: ()=>UnicodeString,
    UnspeccedNS: ()=>UnspeccedNS,
    default: ()=>AtpAgent,
    jsonStringToLex: ()=>jsonStringToLex,
    jsonToLex: ()=>jsonToLex,
    lexToJson: ()=>lexToJson,
    sanitizeRichText: ()=>sanitizeRichText,
    stringifyLex: ()=>stringifyLex
});
module.exports = __toCommonJS(src_exports4);
// ../common-web/src/check.ts
var check_exports = {};
__export(check_exports, {
    assure: ()=>assure,
    is: ()=>is,
    isObject: ()=>isObject
});
var is = (obj, def2)=>{
    return def2.safeParse(obj).success;
};
var assure = (def2, obj)=>{
    return def2.parse(obj);
};
var isObject = (obj)=>{
    return typeof obj === "object" && obj !== null;
};
// ../../node_modules/multiformats/esm/vendor/varint.js
var encode_1 = encode;
var MSB = 128;
var REST = 127;
var MSBALL = ~REST;
var INT = Math.pow(2, 31);
function encode(num, out, offset) {
    out = out || [];
    offset = offset || 0;
    var oldOffset = offset;
    while(num >= INT){
        out[offset++] = num & 255 | MSB;
        num /= 128;
    }
    while(num & MSBALL){
        out[offset++] = num & 255 | MSB;
        num >>>= 7;
    }
    out[offset] = num | 0;
    encode.bytes = offset - oldOffset + 1;
    return out;
}
var decode = read;
var MSB$1 = 128;
var REST$1 = 127;
function read(buf, offset) {
    var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf.length;
    do {
        if (counter >= l) {
            read.bytes = 0;
            throw new RangeError("Could not decode varint");
        }
        b = buf[counter++];
        res += shift < 28 ? (b & REST$1) << shift : (b & REST$1) * Math.pow(2, shift);
        shift += 7;
    }while (b >= MSB$1);
    read.bytes = counter - offset;
    return res;
}
var N1 = Math.pow(2, 7);
var N2 = Math.pow(2, 14);
var N3 = Math.pow(2, 21);
var N4 = Math.pow(2, 28);
var N5 = Math.pow(2, 35);
var N6 = Math.pow(2, 42);
var N7 = Math.pow(2, 49);
var N8 = Math.pow(2, 56);
var N9 = Math.pow(2, 63);
var length = function(value) {
    return value < N1 ? 1 : value < N2 ? 2 : value < N3 ? 3 : value < N4 ? 4 : value < N5 ? 5 : value < N6 ? 6 : value < N7 ? 7 : value < N8 ? 8 : value < N9 ? 9 : 10;
};
var varint = {
    encode: encode_1,
    decode,
    encodingLength: length
};
var _brrp_varint = varint;
var varint_default = _brrp_varint;
// ../../node_modules/multiformats/esm/src/varint.js
var decode2 = (data, offset = 0)=>{
    const code2 = varint_default.decode(data, offset);
    return [
        code2,
        varint_default.decode.bytes
    ];
};
var encodeTo = (int, target, offset = 0)=>{
    varint_default.encode(int, target, offset);
    return target;
};
var encodingLength = (int)=>{
    return varint_default.encodingLength(int);
};
// ../../node_modules/multiformats/esm/src/bytes.js
var empty = new Uint8Array(0);
var equals = (aa, bb)=>{
    if (aa === bb) return true;
    if (aa.byteLength !== bb.byteLength) return false;
    for(let ii = 0; ii < aa.byteLength; ii++){
        if (aa[ii] !== bb[ii]) return false;
    }
    return true;
};
var coerce = (o)=>{
    if (o instanceof Uint8Array && o.constructor.name === "Uint8Array") return o;
    if (o instanceof ArrayBuffer) return new Uint8Array(o);
    if (ArrayBuffer.isView(o)) return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
    throw new Error("Unknown type, must be binary type");
};
var fromString = (str)=>new TextEncoder().encode(str);
var toString = (b)=>new TextDecoder().decode(b);
// ../../node_modules/multiformats/esm/src/hashes/digest.js
var create = (code2, digest2)=>{
    const size = digest2.byteLength;
    const sizeOffset = encodingLength(code2);
    const digestOffset = sizeOffset + encodingLength(size);
    const bytes2 = new Uint8Array(digestOffset + size);
    encodeTo(code2, bytes2, 0);
    encodeTo(size, bytes2, sizeOffset);
    bytes2.set(digest2, digestOffset);
    return new Digest(code2, size, digest2, bytes2);
};
var decode3 = (multihash)=>{
    const bytes2 = coerce(multihash);
    const [code2, sizeOffset] = decode2(bytes2);
    const [size, digestOffset] = decode2(bytes2.subarray(sizeOffset));
    const digest2 = bytes2.subarray(sizeOffset + digestOffset);
    if (digest2.byteLength !== size) throw new Error("Incorrect length");
    return new Digest(code2, size, digest2, bytes2);
};
var equals2 = (a, b)=>{
    if (a === b) return true;
    else return a.code === b.code && a.size === b.size && equals(a.bytes, b.bytes);
};
var Digest = class {
    constructor(code2, size, digest2, bytes2){
        this.code = code2;
        this.size = size;
        this.digest = digest2;
        this.bytes = bytes2;
    }
};
// ../../node_modules/multiformats/esm/src/bases/base58.js
var base58_exports = {};
__export(base58_exports, {
    base58btc: ()=>base58btc,
    base58flickr: ()=>base58flickr
});
// ../../node_modules/multiformats/esm/vendor/base-x.js
function base(ALPHABET, name2) {
    if (ALPHABET.length >= 255) throw new TypeError("Alphabet too long");
    var BASE_MAP = new Uint8Array(256);
    for(var j = 0; j < BASE_MAP.length; j++)BASE_MAP[j] = 255;
    for(var i = 0; i < ALPHABET.length; i++){
        var x = ALPHABET.charAt(i);
        var xc = x.charCodeAt(0);
        if (BASE_MAP[xc] !== 255) throw new TypeError(x + " is ambiguous");
        BASE_MAP[xc] = i;
    }
    var BASE = ALPHABET.length;
    var LEADER = ALPHABET.charAt(0);
    var FACTOR = Math.log(BASE) / Math.log(256);
    var iFACTOR = Math.log(256) / Math.log(BASE);
    function encode5(source) {
        if (source instanceof Uint8Array) ;
        else if (ArrayBuffer.isView(source)) source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
        else if (Array.isArray(source)) source = Uint8Array.from(source);
        if (!(source instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
        if (source.length === 0) return "";
        var zeroes = 0;
        var length2 = 0;
        var pbegin = 0;
        var pend = source.length;
        while(pbegin !== pend && source[pbegin] === 0){
            pbegin++;
            zeroes++;
        }
        var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
        var b58 = new Uint8Array(size);
        while(pbegin !== pend){
            var carry = source[pbegin];
            var i2 = 0;
            for(var it1 = size - 1; (carry !== 0 || i2 < length2) && it1 !== -1; it1--, i2++){
                carry += 256 * b58[it1] >>> 0;
                b58[it1] = carry % BASE >>> 0;
                carry = carry / BASE >>> 0;
            }
            if (carry !== 0) throw new Error("Non-zero carry");
            length2 = i2;
            pbegin++;
        }
        var it2 = size - length2;
        while(it2 !== size && b58[it2] === 0)it2++;
        var str = LEADER.repeat(zeroes);
        for(; it2 < size; ++it2)str += ALPHABET.charAt(b58[it2]);
        return str;
    }
    function decodeUnsafe(source) {
        if (typeof source !== "string") throw new TypeError("Expected String");
        if (source.length === 0) return new Uint8Array();
        var psz = 0;
        if (source[psz] === " ") return;
        var zeroes = 0;
        var length2 = 0;
        while(source[psz] === LEADER){
            zeroes++;
            psz++;
        }
        var size = (source.length - psz) * FACTOR + 1 >>> 0;
        var b256 = new Uint8Array(size);
        while(source[psz]){
            var carry = BASE_MAP[source.charCodeAt(psz)];
            if (carry === 255) return;
            var i2 = 0;
            for(var it3 = size - 1; (carry !== 0 || i2 < length2) && it3 !== -1; it3--, i2++){
                carry += BASE * b256[it3] >>> 0;
                b256[it3] = carry % 256 >>> 0;
                carry = carry / 256 >>> 0;
            }
            if (carry !== 0) throw new Error("Non-zero carry");
            length2 = i2;
            psz++;
        }
        if (source[psz] === " ") return;
        var it4 = size - length2;
        while(it4 !== size && b256[it4] === 0)it4++;
        var vch = new Uint8Array(zeroes + (size - it4));
        var j2 = zeroes;
        while(it4 !== size)vch[j2++] = b256[it4++];
        return vch;
    }
    function decode6(string3) {
        var buffer = decodeUnsafe(string3);
        if (buffer) return buffer;
        throw new Error(`Non-${name2} character`);
    }
    return {
        encode: encode5,
        decodeUnsafe,
        decode: decode6
    };
}
var src = base;
var _brrp__multiformats_scope_baseX = src;
var base_x_default = _brrp__multiformats_scope_baseX;
// ../../node_modules/multiformats/esm/src/bases/base.js
var Encoder = class {
    constructor(name2, prefix, baseEncode){
        this.name = name2;
        this.prefix = prefix;
        this.baseEncode = baseEncode;
    }
    encode(bytes2) {
        if (bytes2 instanceof Uint8Array) return `${this.prefix}${this.baseEncode(bytes2)}`;
        else throw Error("Unknown type, must be binary type");
    }
};
var Decoder = class {
    constructor(name2, prefix, baseDecode){
        this.name = name2;
        this.prefix = prefix;
        if (prefix.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
        this.prefixCodePoint = prefix.codePointAt(0);
        this.baseDecode = baseDecode;
    }
    decode(text) {
        if (typeof text === "string") {
            if (text.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
            return this.baseDecode(text.slice(this.prefix.length));
        } else throw Error("Can only multibase decode strings");
    }
    or(decoder2) {
        return or(this, decoder2);
    }
};
var ComposedDecoder = class {
    constructor(decoders){
        this.decoders = decoders;
    }
    or(decoder2) {
        return or(this, decoder2);
    }
    decode(input) {
        const prefix = input[0];
        const decoder2 = this.decoders[prefix];
        if (decoder2) return decoder2.decode(input);
        else throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
    }
};
var or = (left, right)=>new ComposedDecoder({
        ...left.decoders || {
            [left.prefix]: left
        },
        ...right.decoders || {
            [right.prefix]: right
        }
    });
var Codec = class {
    constructor(name2, prefix, baseEncode, baseDecode){
        this.name = name2;
        this.prefix = prefix;
        this.baseEncode = baseEncode;
        this.baseDecode = baseDecode;
        this.encoder = new Encoder(name2, prefix, baseEncode);
        this.decoder = new Decoder(name2, prefix, baseDecode);
    }
    encode(input) {
        return this.encoder.encode(input);
    }
    decode(input) {
        return this.decoder.decode(input);
    }
};
var from = ({ name: name2 , prefix , encode: encode5 , decode: decode6  })=>new Codec(name2, prefix, encode5, decode6);
var baseX = ({ prefix , name: name2 , alphabet: alphabet2  })=>{
    const { encode: encode5 , decode: decode6  } = base_x_default(alphabet2, name2);
    return from({
        prefix,
        name: name2,
        encode: encode5,
        decode: (text)=>coerce(decode6(text))
    });
};
var decode4 = (string3, alphabet2, bitsPerChar, name2)=>{
    const codes = {};
    for(let i = 0; i < alphabet2.length; ++i)codes[alphabet2[i]] = i;
    let end = string3.length;
    while(string3[end - 1] === "=")--end;
    const out = new Uint8Array(end * bitsPerChar / 8 | 0);
    let bits = 0;
    let buffer = 0;
    let written = 0;
    for(let i = 0; i < end; ++i){
        const value = codes[string3[i]];
        if (value === void 0) throw new SyntaxError(`Non-${name2} character`);
        buffer = buffer << bitsPerChar | value;
        bits += bitsPerChar;
        if (bits >= 8) {
            bits -= 8;
            out[written++] = 255 & buffer >> bits;
        }
    }
    if (bits >= bitsPerChar || 255 & buffer << 8 - bits) throw new SyntaxError("Unexpected end of data");
    return out;
};
var encode2 = (data, alphabet2, bitsPerChar)=>{
    const pad = alphabet2[alphabet2.length - 1] === "=";
    const mask = (1 << bitsPerChar) - 1;
    let out = "";
    let bits = 0;
    let buffer = 0;
    for(let i = 0; i < data.length; ++i){
        buffer = buffer << 8 | data[i];
        bits += 8;
        while(bits > bitsPerChar){
            bits -= bitsPerChar;
            out += alphabet2[mask & buffer >> bits];
        }
    }
    if (bits) out += alphabet2[mask & buffer << bitsPerChar - bits];
    if (pad) while(out.length * bitsPerChar & 7)out += "=";
    return out;
};
var rfc4648 = ({ name: name2 , prefix , bitsPerChar , alphabet: alphabet2  })=>{
    return from({
        prefix,
        name: name2,
        encode (input) {
            return encode2(input, alphabet2, bitsPerChar);
        },
        decode (input) {
            return decode4(input, alphabet2, bitsPerChar, name2);
        }
    });
};
// ../../node_modules/multiformats/esm/src/bases/base58.js
var base58btc = baseX({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
});
var base58flickr = baseX({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
});
// ../../node_modules/multiformats/esm/src/bases/base32.js
var base32_exports = {};
__export(base32_exports, {
    base32: ()=>base32,
    base32hex: ()=>base32hex,
    base32hexpad: ()=>base32hexpad,
    base32hexpadupper: ()=>base32hexpadupper,
    base32hexupper: ()=>base32hexupper,
    base32pad: ()=>base32pad,
    base32padupper: ()=>base32padupper,
    base32upper: ()=>base32upper,
    base32z: ()=>base32z
});
var base32 = rfc4648({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
});
var base32upper = rfc4648({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
});
var base32pad = rfc4648({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
});
var base32padupper = rfc4648({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
});
var base32hex = rfc4648({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
});
var base32hexupper = rfc4648({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
});
var base32hexpad = rfc4648({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
});
var base32hexpadupper = rfc4648({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
});
var base32z = rfc4648({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
});
// ../../node_modules/multiformats/esm/src/cid.js
var CID = class {
    constructor(version2, code2, multihash, bytes2){
        this.code = code2;
        this.version = version2;
        this.multihash = multihash;
        this.bytes = bytes2;
        this.byteOffset = bytes2.byteOffset;
        this.byteLength = bytes2.byteLength;
        this.asCID = this;
        this._baseCache = /* @__PURE__ */ new Map();
        Object.defineProperties(this, {
            byteOffset: hidden,
            byteLength: hidden,
            code: readonly,
            version: readonly,
            multihash: readonly,
            bytes: readonly,
            _baseCache: hidden,
            asCID: hidden
        });
    }
    toV0() {
        switch(this.version){
            case 0:
                return this;
            default:
                {
                    const { code: code2 , multihash  } = this;
                    if (code2 !== DAG_PB_CODE) throw new Error("Cannot convert a non dag-pb CID to CIDv0");
                    if (multihash.code !== SHA_256_CODE) throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");
                    return CID.createV0(multihash);
                }
        }
    }
    toV1() {
        switch(this.version){
            case 0:
                {
                    const { code: code2 , digest: digest2  } = this.multihash;
                    const multihash = create(code2, digest2);
                    return CID.createV1(this.code, multihash);
                }
            case 1:
                return this;
            default:
                throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`);
        }
    }
    equals(other) {
        return other && this.code === other.code && this.version === other.version && equals2(this.multihash, other.multihash);
    }
    toString(base3) {
        const { bytes: bytes2 , version: version2 , _baseCache  } = this;
        switch(version2){
            case 0:
                return toStringV0(bytes2, _baseCache, base3 || base58btc.encoder);
            default:
                return toStringV1(bytes2, _baseCache, base3 || base32.encoder);
        }
    }
    toJSON() {
        return {
            code: this.code,
            version: this.version,
            hash: this.multihash.bytes
        };
    }
    get [Symbol.toStringTag]() {
        return "CID";
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
        return "CID(" + this.toString() + ")";
    }
    static isCID(value) {
        deprecate(/^0\.0/, IS_CID_DEPRECATION);
        return !!(value && (value[cidSymbol] || value.asCID === value));
    }
    get toBaseEncodedString() {
        throw new Error("Deprecated, use .toString()");
    }
    get codec() {
        throw new Error('"codec" property is deprecated, use integer "code" property instead');
    }
    get buffer() {
        throw new Error("Deprecated .buffer property, use .bytes to get Uint8Array instead");
    }
    get multibaseName() {
        throw new Error('"multibaseName" property is deprecated');
    }
    get prefix() {
        throw new Error('"prefix" property is deprecated');
    }
    static asCID(value) {
        if (value instanceof CID) return value;
        else if (value != null && value.asCID === value) {
            const { version: version2 , code: code2 , multihash , bytes: bytes2  } = value;
            return new CID(version2, code2, multihash, bytes2 || encodeCID(version2, code2, multihash.bytes));
        } else if (value != null && value[cidSymbol] === true) {
            const { version: version2 , multihash , code: code2  } = value;
            const digest2 = decode3(multihash);
            return CID.create(version2, code2, digest2);
        } else return null;
    }
    static create(version2, code2, digest2) {
        if (typeof code2 !== "number") throw new Error("String codecs are no longer supported");
        switch(version2){
            case 0:
                if (code2 !== DAG_PB_CODE) throw new Error(`Version 0 CID must use dag-pb (code: ${DAG_PB_CODE}) block encoding`);
                else return new CID(version2, code2, digest2, digest2.bytes);
            case 1:
                {
                    const bytes2 = encodeCID(version2, code2, digest2.bytes);
                    return new CID(version2, code2, digest2, bytes2);
                }
            default:
                throw new Error("Invalid version");
        }
    }
    static createV0(digest2) {
        return CID.create(0, DAG_PB_CODE, digest2);
    }
    static createV1(code2, digest2) {
        return CID.create(1, code2, digest2);
    }
    static decode(bytes2) {
        const [cid2, remainder] = CID.decodeFirst(bytes2);
        if (remainder.length) throw new Error("Incorrect length");
        return cid2;
    }
    static decodeFirst(bytes2) {
        const specs = CID.inspectBytes(bytes2);
        const prefixSize = specs.size - specs.multihashSize;
        const multihashBytes = coerce(bytes2.subarray(prefixSize, prefixSize + specs.multihashSize));
        if (multihashBytes.byteLength !== specs.multihashSize) throw new Error("Incorrect length");
        const digestBytes = multihashBytes.subarray(specs.multihashSize - specs.digestSize);
        const digest2 = new Digest(specs.multihashCode, specs.digestSize, digestBytes, multihashBytes);
        const cid2 = specs.version === 0 ? CID.createV0(digest2) : CID.createV1(specs.codec, digest2);
        return [
            cid2,
            bytes2.subarray(specs.size)
        ];
    }
    static inspectBytes(initialBytes) {
        let offset = 0;
        const next = ()=>{
            const [i, length2] = decode2(initialBytes.subarray(offset));
            offset += length2;
            return i;
        };
        let version2 = next();
        let codec = DAG_PB_CODE;
        if (version2 === 18) {
            version2 = 0;
            offset = 0;
        } else if (version2 === 1) codec = next();
        if (version2 !== 0 && version2 !== 1) throw new RangeError(`Invalid CID version ${version2}`);
        const prefixSize = offset;
        const multihashCode = next();
        const digestSize = next();
        const size = offset + digestSize;
        const multihashSize = size - prefixSize;
        return {
            version: version2,
            codec,
            multihashCode,
            digestSize,
            multihashSize,
            size
        };
    }
    static parse(source, base3) {
        const [prefix, bytes2] = parseCIDtoBytes(source, base3);
        const cid2 = CID.decode(bytes2);
        cid2._baseCache.set(prefix, source);
        return cid2;
    }
};
var parseCIDtoBytes = (source, base3)=>{
    switch(source[0]){
        case "Q":
            {
                const decoder2 = base3 || base58btc;
                return [
                    base58btc.prefix,
                    decoder2.decode(`${base58btc.prefix}${source}`)
                ];
            }
        case base58btc.prefix:
            {
                const decoder2 = base3 || base58btc;
                return [
                    base58btc.prefix,
                    decoder2.decode(source)
                ];
            }
        case base32.prefix:
            {
                const decoder2 = base3 || base32;
                return [
                    base32.prefix,
                    decoder2.decode(source)
                ];
            }
        default:
            if (base3 == null) throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");
            return [
                source[0],
                base3.decode(source)
            ];
    }
};
var toStringV0 = (bytes2, cache, base3)=>{
    const { prefix  } = base3;
    if (prefix !== base58btc.prefix) throw Error(`Cannot string encode V0 in ${base3.name} encoding`);
    const cid2 = cache.get(prefix);
    if (cid2 == null) {
        const cid3 = base3.encode(bytes2).slice(1);
        cache.set(prefix, cid3);
        return cid3;
    } else return cid2;
};
var toStringV1 = (bytes2, cache, base3)=>{
    const { prefix  } = base3;
    const cid2 = cache.get(prefix);
    if (cid2 == null) {
        const cid3 = base3.encode(bytes2);
        cache.set(prefix, cid3);
        return cid3;
    } else return cid2;
};
var DAG_PB_CODE = 112;
var SHA_256_CODE = 18;
var encodeCID = (version2, code2, multihash)=>{
    const codeOffset = encodingLength(version2);
    const hashOffset = codeOffset + encodingLength(code2);
    const bytes2 = new Uint8Array(hashOffset + multihash.byteLength);
    encodeTo(version2, bytes2, 0);
    encodeTo(code2, bytes2, codeOffset);
    bytes2.set(multihash, hashOffset);
    return bytes2;
};
var cidSymbol = Symbol.for("@ipld/js-cid/CID");
var readonly = {
    writable: false,
    configurable: false,
    enumerable: true
};
var hidden = {
    writable: false,
    enumerable: false,
    configurable: false
};
var version = "0.0.0-dev";
var deprecate = (range, message)=>{
    if (range.test(version)) console.warn(message);
    else throw new Error(message);
};
var IS_CID_DEPRECATION = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`;
// ../../node_modules/multiformats/esm/src/bases/identity.js
var identity_exports = {};
__export(identity_exports, {
    identity: ()=>identity
});
var identity = from({
    prefix: "\0",
    name: "identity",
    encode: (buf)=>toString(buf),
    decode: (str)=>fromString(str)
});
// ../../node_modules/multiformats/esm/src/bases/base2.js
var base2_exports = {};
__export(base2_exports, {
    base2: ()=>base2
});
var base2 = rfc4648({
    prefix: "0",
    name: "base2",
    alphabet: "01",
    bitsPerChar: 1
});
// ../../node_modules/multiformats/esm/src/bases/base8.js
var base8_exports = {};
__export(base8_exports, {
    base8: ()=>base8
});
var base8 = rfc4648({
    prefix: "7",
    name: "base8",
    alphabet: "01234567",
    bitsPerChar: 3
});
// ../../node_modules/multiformats/esm/src/bases/base10.js
var base10_exports = {};
__export(base10_exports, {
    base10: ()=>base10
});
var base10 = baseX({
    prefix: "9",
    name: "base10",
    alphabet: "0123456789"
});
// ../../node_modules/multiformats/esm/src/bases/base16.js
var base16_exports = {};
__export(base16_exports, {
    base16: ()=>base16,
    base16upper: ()=>base16upper
});
var base16 = rfc4648({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4
});
var base16upper = rfc4648({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4
});
// ../../node_modules/multiformats/esm/src/bases/base36.js
var base36_exports = {};
__export(base36_exports, {
    base36: ()=>base36,
    base36upper: ()=>base36upper
});
var base36 = baseX({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
});
var base36upper = baseX({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
});
// ../../node_modules/multiformats/esm/src/bases/base64.js
var base64_exports = {};
__export(base64_exports, {
    base64: ()=>base64,
    base64pad: ()=>base64pad,
    base64url: ()=>base64url,
    base64urlpad: ()=>base64urlpad
});
var base64 = rfc4648({
    prefix: "m",
    name: "base64",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6
});
var base64pad = rfc4648({
    prefix: "M",
    name: "base64pad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6
});
var base64url = rfc4648({
    prefix: "u",
    name: "base64url",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6
});
var base64urlpad = rfc4648({
    prefix: "U",
    name: "base64urlpad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6
});
// ../../node_modules/multiformats/esm/src/bases/base256emoji.js
var base256emoji_exports = {};
__export(base256emoji_exports, {
    base256emoji: ()=>base256emoji
});
var alphabet = Array.from("\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42");
var alphabetBytesToChars = alphabet.reduce((p, c, i)=>{
    p[i] = c;
    return p;
}, []);
var alphabetCharsToBytes = alphabet.reduce((p, c, i)=>{
    p[c.codePointAt(0)] = i;
    return p;
}, []);
function encode3(data) {
    return data.reduce((p, c)=>{
        p += alphabetBytesToChars[c];
        return p;
    }, "");
}
function decode5(str) {
    const byts = [];
    for (const char of str){
        const byt = alphabetCharsToBytes[char.codePointAt(0)];
        if (byt === void 0) throw new Error(`Non-base256emoji character: ${char}`);
        byts.push(byt);
    }
    return new Uint8Array(byts);
}
var base256emoji = from({
    prefix: "\uD83D\uDE80",
    name: "base256emoji",
    encode: encode3,
    decode: decode5
});
// ../../node_modules/multiformats/esm/src/hashes/sha2-browser.js
var sha2_browser_exports = {};
__export(sha2_browser_exports, {
    sha256: ()=>sha256,
    sha512: ()=>sha512
});
// ../../node_modules/multiformats/esm/src/hashes/hasher.js
var from2 = ({ name: name2 , code: code2 , encode: encode5  })=>new Hasher(name2, code2, encode5);
var Hasher = class {
    constructor(name2, code2, encode5){
        this.name = name2;
        this.code = code2;
        this.encode = encode5;
    }
    digest(input) {
        if (input instanceof Uint8Array) {
            const result = this.encode(input);
            return result instanceof Uint8Array ? create(this.code, result) : result.then((digest2)=>create(this.code, digest2));
        } else throw Error("Unknown type, must be binary type");
    }
};
// ../../node_modules/multiformats/esm/src/hashes/sha2-browser.js
var sha = (name2)=>async (data)=>new Uint8Array(await crypto.subtle.digest(name2, data));
var sha256 = from2({
    name: "sha2-256",
    code: 18,
    encode: sha("SHA-256")
});
var sha512 = from2({
    name: "sha2-512",
    code: 19,
    encode: sha("SHA-512")
});
// ../../node_modules/multiformats/esm/src/hashes/identity.js
var identity_exports2 = {};
__export(identity_exports2, {
    identity: ()=>identity2
});
var code = 0;
var name = "identity";
var encode4 = coerce;
var digest = (input)=>create(code, encode4(input));
var identity2 = {
    code,
    name,
    encode: encode4,
    digest
};
// ../../node_modules/multiformats/esm/src/codecs/json.js
var textEncoder = new TextEncoder();
var textDecoder = new TextDecoder();
// ../../node_modules/multiformats/esm/src/basics.js
var bases = {
    ...identity_exports,
    ...base2_exports,
    ...base8_exports,
    ...base10_exports,
    ...base16_exports,
    ...base32_exports,
    ...base36_exports,
    ...base58_exports,
    ...base64_exports,
    ...base256emoji_exports
};
var hashes = {
    ...sha2_browser_exports,
    ...identity_exports2
};
// ../../node_modules/uint8arrays/esm/src/util/bases.js
function createCodec(name2, prefix, encode5, decode6) {
    return {
        name: name2,
        prefix,
        encoder: {
            name: name2,
            prefix,
            encode: encode5
        },
        decoder: {
            decode: decode6
        }
    };
}
var string = createCodec("utf8", "u", (buf)=>{
    const decoder2 = new TextDecoder("utf8");
    return "u" + decoder2.decode(buf);
}, (str)=>{
    const encoder2 = new TextEncoder();
    return encoder2.encode(str.substring(1));
});
var ascii = createCodec("ascii", "a", (buf)=>{
    let string3 = "a";
    for(let i = 0; i < buf.length; i++)string3 += String.fromCharCode(buf[i]);
    return string3;
}, (str)=>{
    str = str.substring(1);
    const buf = new Uint8Array(str.length);
    for(let i = 0; i < str.length; i++)buf[i] = str.charCodeAt(i);
    return buf;
});
var BASES = {
    utf8: string,
    "utf-8": string,
    hex: bases.base16,
    latin1: ascii,
    ascii,
    binary: ascii,
    ...bases
};
var bases_default = BASES;
// ../../node_modules/uint8arrays/esm/src/from-string.js
function fromString2(string3, encoding = "utf8") {
    const base3 = bases_default[encoding];
    if (!base3) throw new Error(`Unsupported encoding "${encoding}"`);
    return base3.decoder.decode(`${base3.prefix}${string3}`);
}
// ../../node_modules/uint8arrays/esm/src/to-string.js
function toString2(array2, encoding = "utf8") {
    const base3 = bases_default[encoding];
    if (!base3) throw new Error(`Unsupported encoding "${encoding}"`);
    return base3.encoder.encode(array2).substring(1);
}
// ../common-web/src/ipld.ts
var jsonToIpld = (val)=>{
    if (Array.isArray(val)) return val.map((item)=>jsonToIpld(item));
    if (val && typeof val === "object") {
        if (typeof val["$link"] === "string" && Object.keys(val).length === 1) return CID.parse(val["$link"]);
        if (typeof val["$bytes"] === "string" && Object.keys(val).length === 1) return fromString2(val["$bytes"], "base64");
        const toReturn = {};
        for (const key of Object.keys(val))toReturn[key] = jsonToIpld(val[key]);
        return toReturn;
    }
    return val;
};
var ipldToJson = (val)=>{
    if (Array.isArray(val)) return val.map((item)=>ipldToJson(item));
    if (val && typeof val === "object") {
        if (val instanceof Uint8Array) return {
            $bytes: toString2(val, "base64")
        };
        if (CID.asCID(val)) return {
            $link: val.toString()
        };
        const toReturn = {};
        for (const key of Object.keys(val))toReturn[key] = ipldToJson(val[key]);
        return toReturn;
    }
    return val;
};
// ../../node_modules/zod/lib/index.mjs
var util;
(function(util2) {
    util2.assertEqual = (val)=>val;
    function assertIs(_arg) {}
    util2.assertIs = assertIs;
    function assertNever(_x) {
        throw new Error();
    }
    util2.assertNever = assertNever;
    util2.arrayToEnum = (items)=>{
        const obj = {};
        for (const item of items)obj[item] = item;
        return obj;
    };
    util2.getValidEnumValues = (obj)=>{
        const validKeys = util2.objectKeys(obj).filter((k)=>typeof obj[obj[k]] !== "number");
        const filtered = {};
        for (const k of validKeys)filtered[k] = obj[k];
        return util2.objectValues(filtered);
    };
    util2.objectValues = (obj)=>{
        return util2.objectKeys(obj).map(function(e) {
            return obj[e];
        });
    };
    util2.objectKeys = typeof Object.keys === "function" ? (obj)=>Object.keys(obj) : (object2)=>{
        const keys = [];
        for(const key in object2)if (Object.prototype.hasOwnProperty.call(object2, key)) keys.push(key);
        return keys;
    };
    util2.find = (arr, checker)=>{
        for (const item of arr){
            if (checker(item)) return item;
        }
        return void 0;
    };
    util2.isInteger = typeof Number.isInteger === "function" ? (val)=>Number.isInteger(val) : (val)=>typeof val === "number" && isFinite(val) && Math.floor(val) === val;
    function joinValues(array2, separator = " | ") {
        return array2.map((val)=>typeof val === "string" ? `'${val}'` : val).join(separator);
    }
    util2.joinValues = joinValues;
    util2.jsonStringifyReplacer = (_, value)=>{
        if (typeof value === "bigint") return value.toString();
        return value;
    };
})(util || (util = {}));
var ZodParsedType = util.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set"
]);
var getParsedType = (data)=>{
    const t = typeof data;
    switch(t){
        case "undefined":
            return ZodParsedType.undefined;
        case "string":
            return ZodParsedType.string;
        case "number":
            return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
        case "boolean":
            return ZodParsedType.boolean;
        case "function":
            return ZodParsedType.function;
        case "bigint":
            return ZodParsedType.bigint;
        case "object":
            if (Array.isArray(data)) return ZodParsedType.array;
            if (data === null) return ZodParsedType.null;
            if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") return ZodParsedType.promise;
            if (typeof Map !== "undefined" && data instanceof Map) return ZodParsedType.map;
            if (typeof Set !== "undefined" && data instanceof Set) return ZodParsedType.set;
            if (typeof Date !== "undefined" && data instanceof Date) return ZodParsedType.date;
            return ZodParsedType.object;
        default:
            return ZodParsedType.unknown;
    }
};
var ZodIssueCode = util.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of"
]);
var quotelessJson = (obj)=>{
    const json = JSON.stringify(obj, null, 2);
    return json.replace(/"([^"]+)":/g, "$1:");
};
var ZodError = class extends Error {
    constructor(issues){
        super();
        this.issues = [];
        this.addIssue = (sub)=>{
            this.issues = [
                ...this.issues,
                sub
            ];
        };
        this.addIssues = (subs = [])=>{
            this.issues = [
                ...this.issues,
                ...subs
            ];
        };
        const actualProto = new.target.prototype;
        if (Object.setPrototypeOf) Object.setPrototypeOf(this, actualProto);
        else this.__proto__ = actualProto;
        this.name = "ZodError";
        this.issues = issues;
    }
    get errors() {
        return this.issues;
    }
    format(_mapper) {
        const mapper = _mapper || function(issue) {
            return issue.message;
        };
        const fieldErrors = {
            _errors: []
        };
        const processError = (error)=>{
            for (const issue of error.issues){
                if (issue.code === "invalid_union") issue.unionErrors.map(processError);
                else if (issue.code === "invalid_return_type") processError(issue.returnTypeError);
                else if (issue.code === "invalid_arguments") processError(issue.argumentsError);
                else if (issue.path.length === 0) fieldErrors._errors.push(mapper(issue));
                else {
                    let curr = fieldErrors;
                    let i = 0;
                    while(i < issue.path.length){
                        const el = issue.path[i];
                        const terminal = i === issue.path.length - 1;
                        if (!terminal) curr[el] = curr[el] || {
                            _errors: []
                        };
                        else {
                            curr[el] = curr[el] || {
                                _errors: []
                            };
                            curr[el]._errors.push(mapper(issue));
                        }
                        curr = curr[el];
                        i++;
                    }
                }
            }
        };
        processError(this);
        return fieldErrors;
    }
    toString() {
        return this.message;
    }
    get message() {
        return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
        return this.issues.length === 0;
    }
    flatten(mapper = (issue)=>issue.message) {
        const fieldErrors = {};
        const formErrors = [];
        for (const sub of this.issues)if (sub.path.length > 0) {
            fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
            fieldErrors[sub.path[0]].push(mapper(sub));
        } else formErrors.push(mapper(sub));
        return {
            formErrors,
            fieldErrors
        };
    }
    get formErrors() {
        return this.flatten();
    }
};
ZodError.create = (issues)=>{
    const error = new ZodError(issues);
    return error;
};
var errorMap = (issue, _ctx)=>{
    let message;
    switch(issue.code){
        case ZodIssueCode.invalid_type:
            if (issue.received === ZodParsedType.undefined) message = "Required";
            else message = `Expected ${issue.expected}, received ${issue.received}`;
            break;
        case ZodIssueCode.invalid_literal:
            message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
            break;
        case ZodIssueCode.unrecognized_keys:
            message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
            break;
        case ZodIssueCode.invalid_union:
            message = `Invalid input`;
            break;
        case ZodIssueCode.invalid_union_discriminator:
            message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
            break;
        case ZodIssueCode.invalid_enum_value:
            message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
            break;
        case ZodIssueCode.invalid_arguments:
            message = `Invalid function arguments`;
            break;
        case ZodIssueCode.invalid_return_type:
            message = `Invalid function return type`;
            break;
        case ZodIssueCode.invalid_date:
            message = `Invalid date`;
            break;
        case ZodIssueCode.invalid_string:
            if (typeof issue.validation === "object") {
                if ("startsWith" in issue.validation) message = `Invalid input: must start with "${issue.validation.startsWith}"`;
                else if ("endsWith" in issue.validation) message = `Invalid input: must end with "${issue.validation.endsWith}"`;
                else util.assertNever(issue.validation);
            } else if (issue.validation !== "regex") message = `Invalid ${issue.validation}`;
            else message = "Invalid";
            break;
        case ZodIssueCode.too_small:
            if (issue.type === "array") message = `Array must contain ${issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
            else if (issue.type === "string") message = `String must contain ${issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
            else if (issue.type === "number") message = `Number must be greater than ${issue.inclusive ? `or equal to ` : ``}${issue.minimum}`;
            else if (issue.type === "date") message = `Date must be greater than ${issue.inclusive ? `or equal to ` : ``}${new Date(issue.minimum)}`;
            else message = "Invalid input";
            break;
        case ZodIssueCode.too_big:
            if (issue.type === "array") message = `Array must contain ${issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
            else if (issue.type === "string") message = `String must contain ${issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
            else if (issue.type === "number") message = `Number must be less than ${issue.inclusive ? `or equal to ` : ``}${issue.maximum}`;
            else if (issue.type === "date") message = `Date must be smaller than ${issue.inclusive ? `or equal to ` : ``}${new Date(issue.maximum)}`;
            else message = "Invalid input";
            break;
        case ZodIssueCode.custom:
            message = `Invalid input`;
            break;
        case ZodIssueCode.invalid_intersection_types:
            message = `Intersection results could not be merged`;
            break;
        case ZodIssueCode.not_multiple_of:
            message = `Number must be a multiple of ${issue.multipleOf}`;
            break;
        default:
            message = _ctx.defaultError;
            util.assertNever(issue);
    }
    return {
        message
    };
};
var overrideErrorMap = errorMap;
function setErrorMap(map) {
    overrideErrorMap = map;
}
function getErrorMap() {
    return overrideErrorMap;
}
var makeIssue = (params2)=>{
    const { data , path , errorMaps , issueData  } = params2;
    const fullPath = [
        ...path,
        ...issueData.path || []
    ];
    const fullIssue = {
        ...issueData,
        path: fullPath
    };
    let errorMessage = "";
    const maps = errorMaps.filter((m)=>!!m).slice().reverse();
    for (const map of maps)errorMessage = map(fullIssue, {
        data,
        defaultError: errorMessage
    }).message;
    return {
        ...issueData,
        path: fullPath,
        message: issueData.message || errorMessage
    };
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
    const issue = makeIssue({
        issueData,
        data: ctx.data,
        path: ctx.path,
        errorMaps: [
            ctx.common.contextualErrorMap,
            ctx.schemaErrorMap,
            getErrorMap(),
            errorMap
        ].filter((x)=>!!x)
    });
    ctx.common.issues.push(issue);
}
var ParseStatus = class {
    constructor(){
        this.value = "valid";
    }
    dirty() {
        if (this.value === "valid") this.value = "dirty";
    }
    abort() {
        if (this.value !== "aborted") this.value = "aborted";
    }
    static mergeArray(status, results) {
        const arrayValue = [];
        for (const s of results){
            if (s.status === "aborted") return INVALID;
            if (s.status === "dirty") status.dirty();
            arrayValue.push(s.value);
        }
        return {
            status: status.value,
            value: arrayValue
        };
    }
    static async mergeObjectAsync(status, pairs) {
        const syncPairs = [];
        for (const pair of pairs)syncPairs.push({
            key: await pair.key,
            value: await pair.value
        });
        return ParseStatus.mergeObjectSync(status, syncPairs);
    }
    static mergeObjectSync(status, pairs) {
        const finalObject = {};
        for (const pair of pairs){
            const { key , value  } = pair;
            if (key.status === "aborted") return INVALID;
            if (value.status === "aborted") return INVALID;
            if (key.status === "dirty") status.dirty();
            if (value.status === "dirty") status.dirty();
            if (typeof value.value !== "undefined" || pair.alwaysSet) finalObject[key.value] = value.value;
        }
        return {
            status: status.value,
            value: finalObject
        };
    }
};
var INVALID = Object.freeze({
    status: "aborted"
});
var DIRTY = (value)=>({
        status: "dirty",
        value
    });
var OK = (value)=>({
        status: "valid",
        value
    });
var isAborted = (x)=>x.status === "aborted";
var isDirty = (x)=>x.status === "dirty";
var isValid = (x)=>x.status === "valid";
var isAsync = (x)=>x instanceof Promise;
var errorUtil;
(function(errorUtil2) {
    errorUtil2.errToObj = (message)=>typeof message === "string" ? {
            message
        } : message || {};
    errorUtil2.toString = (message)=>typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
})(errorUtil || (errorUtil = {}));
var ParseInputLazyPath = class {
    constructor(parent, value, path, key){
        this.parent = parent;
        this.data = value;
        this._path = path;
        this._key = key;
    }
    get path() {
        return this._path.concat(this._key);
    }
};
var handleResult = (ctx, result)=>{
    if (isValid(result)) return {
        success: true,
        data: result.value
    };
    else {
        if (!ctx.common.issues.length) throw new Error("Validation failed but no issues detected.");
        const error = new ZodError(ctx.common.issues);
        return {
            success: false,
            error
        };
    }
};
function processCreateParams(params2) {
    if (!params2) return {};
    const { errorMap: errorMap2 , invalid_type_error , required_error , description  } = params2;
    if (errorMap2 && (invalid_type_error || required_error)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    if (errorMap2) return {
        errorMap: errorMap2,
        description
    };
    const customMap = (iss, ctx)=>{
        if (iss.code !== "invalid_type") return {
            message: ctx.defaultError
        };
        if (typeof ctx.data === "undefined") return {
            message: required_error !== null && required_error !== void 0 ? required_error : ctx.defaultError
        };
        return {
            message: invalid_type_error !== null && invalid_type_error !== void 0 ? invalid_type_error : ctx.defaultError
        };
    };
    return {
        errorMap: customMap,
        description
    };
}
var ZodType = class {
    constructor(def2){
        this.spa = this.safeParseAsync;
        this.superRefine = this._refinement;
        this._def = def2;
        this.parse = this.parse.bind(this);
        this.safeParse = this.safeParse.bind(this);
        this.parseAsync = this.parseAsync.bind(this);
        this.safeParseAsync = this.safeParseAsync.bind(this);
        this.spa = this.spa.bind(this);
        this.refine = this.refine.bind(this);
        this.refinement = this.refinement.bind(this);
        this.superRefine = this.superRefine.bind(this);
        this.optional = this.optional.bind(this);
        this.nullable = this.nullable.bind(this);
        this.nullish = this.nullish.bind(this);
        this.array = this.array.bind(this);
        this.promise = this.promise.bind(this);
        this.or = this.or.bind(this);
        this.and = this.and.bind(this);
        this.transform = this.transform.bind(this);
        this.default = this.default.bind(this);
        this.describe = this.describe.bind(this);
        this.isNullable = this.isNullable.bind(this);
        this.isOptional = this.isOptional.bind(this);
    }
    get description() {
        return this._def.description;
    }
    _getType(input) {
        return getParsedType(input.data);
    }
    _getOrReturnCtx(input, ctx) {
        return ctx || {
            common: input.parent.common,
            data: input.data,
            parsedType: getParsedType(input.data),
            schemaErrorMap: this._def.errorMap,
            path: input.path,
            parent: input.parent
        };
    }
    _processInputParams(input) {
        return {
            status: new ParseStatus(),
            ctx: {
                common: input.parent.common,
                data: input.data,
                parsedType: getParsedType(input.data),
                schemaErrorMap: this._def.errorMap,
                path: input.path,
                parent: input.parent
            }
        };
    }
    _parseSync(input) {
        const result = this._parse(input);
        if (isAsync(result)) throw new Error("Synchronous parse encountered promise.");
        return result;
    }
    _parseAsync(input) {
        const result = this._parse(input);
        return Promise.resolve(result);
    }
    parse(data, params2) {
        const result = this.safeParse(data, params2);
        if (result.success) return result.data;
        throw result.error;
    }
    safeParse(data, params2) {
        var _a;
        const ctx = {
            common: {
                issues: [],
                async: (_a = params2 === null || params2 === void 0 ? void 0 : params2.async) !== null && _a !== void 0 ? _a : false,
                contextualErrorMap: params2 === null || params2 === void 0 ? void 0 : params2.errorMap
            },
            path: (params2 === null || params2 === void 0 ? void 0 : params2.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: getParsedType(data)
        };
        const result = this._parseSync({
            data,
            path: ctx.path,
            parent: ctx
        });
        return handleResult(ctx, result);
    }
    async parseAsync(data, params2) {
        const result = await this.safeParseAsync(data, params2);
        if (result.success) return result.data;
        throw result.error;
    }
    async safeParseAsync(data, params2) {
        const ctx = {
            common: {
                issues: [],
                contextualErrorMap: params2 === null || params2 === void 0 ? void 0 : params2.errorMap,
                async: true
            },
            path: (params2 === null || params2 === void 0 ? void 0 : params2.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data,
            parsedType: getParsedType(data)
        };
        const maybeAsyncResult = this._parse({
            data,
            path: [],
            parent: ctx
        });
        const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
        return handleResult(ctx, result);
    }
    refine(check, message) {
        const getIssueProperties = (val)=>{
            if (typeof message === "string" || typeof message === "undefined") return {
                message
            };
            else if (typeof message === "function") return message(val);
            else return message;
        };
        return this._refinement((val, ctx)=>{
            const result = check(val);
            const setError = ()=>ctx.addIssue({
                    code: ZodIssueCode.custom,
                    ...getIssueProperties(val)
                });
            if (typeof Promise !== "undefined" && result instanceof Promise) return result.then((data)=>{
                if (!data) {
                    setError();
                    return false;
                } else return true;
            });
            if (!result) {
                setError();
                return false;
            } else return true;
        });
    }
    refinement(check, refinementData) {
        return this._refinement((val, ctx)=>{
            if (!check(val)) {
                ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
                return false;
            } else return true;
        });
    }
    _refinement(refinement) {
        return new ZodEffects({
            schema: this,
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            effect: {
                type: "refinement",
                refinement
            }
        });
    }
    optional() {
        return ZodOptional.create(this);
    }
    nullable() {
        return ZodNullable.create(this);
    }
    nullish() {
        return this.optional().nullable();
    }
    array() {
        return ZodArray.create(this);
    }
    promise() {
        return ZodPromise.create(this);
    }
    or(option) {
        return ZodUnion.create([
            this,
            option
        ]);
    }
    and(incoming) {
        return ZodIntersection.create(this, incoming);
    }
    transform(transform) {
        return new ZodEffects({
            schema: this,
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            effect: {
                type: "transform",
                transform
            }
        });
    }
    default(def2) {
        const defaultValueFunc = typeof def2 === "function" ? def2 : ()=>def2;
        return new ZodDefault({
            innerType: this,
            defaultValue: defaultValueFunc,
            typeName: ZodFirstPartyTypeKind.ZodDefault
        });
    }
    brand() {
        return new ZodBranded({
            typeName: ZodFirstPartyTypeKind.ZodBranded,
            type: this,
            ...processCreateParams(void 0)
        });
    }
    describe(description) {
        const This = this.constructor;
        return new This({
            ...this._def,
            description
        });
    }
    isOptional() {
        return this.safeParse(void 0).success;
    }
    isNullable() {
        return this.safeParse(null).success;
    }
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var uuidRegex = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
var ZodString = class extends ZodType {
    constructor(){
        super(...arguments);
        this._regex = (regex, validation, message)=>this.refinement((data)=>regex.test(data), {
                validation,
                code: ZodIssueCode.invalid_string,
                ...errorUtil.errToObj(message)
            });
        this.nonempty = (message)=>this.min(1, errorUtil.errToObj(message));
        this.trim = ()=>new ZodString({
                ...this._def,
                checks: [
                    ...this._def.checks,
                    {
                        kind: "trim"
                    }
                ]
            });
    }
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.string) {
            const ctx2 = this._getOrReturnCtx(input);
            addIssueToContext(ctx2, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.string,
                received: ctx2.parsedType
            });
            return INVALID;
        }
        const status = new ParseStatus();
        let ctx = void 0;
        for (const check of this._def.checks){
            if (check.kind === "min") {
                if (input.data.length < check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        minimum: check.value,
                        type: "string",
                        inclusive: true,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "max") {
                if (input.data.length > check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        maximum: check.value,
                        type: "string",
                        inclusive: true,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "email") {
                if (!emailRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "email",
                        code: ZodIssueCode.invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "uuid") {
                if (!uuidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "uuid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "cuid") {
                if (!cuidRegex.test(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "cuid",
                        code: ZodIssueCode.invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "url") try {
                new URL(input.data);
            } catch (_a) {
                ctx = this._getOrReturnCtx(input, ctx);
                addIssueToContext(ctx, {
                    validation: "url",
                    code: ZodIssueCode.invalid_string,
                    message: check.message
                });
                status.dirty();
            }
            else if (check.kind === "regex") {
                check.regex.lastIndex = 0;
                const testResult = check.regex.test(input.data);
                if (!testResult) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        validation: "regex",
                        code: ZodIssueCode.invalid_string,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "trim") input.data = input.data.trim();
            else if (check.kind === "startsWith") {
                if (!input.data.startsWith(check.value)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: {
                            startsWith: check.value
                        },
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "endsWith") {
                if (!input.data.endsWith(check.value)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_string,
                        validation: {
                            endsWith: check.value
                        },
                        message: check.message
                    });
                    status.dirty();
                }
            } else util.assertNever(check);
        }
        return {
            status: status.value,
            value: input.data
        };
    }
    _addCheck(check) {
        return new ZodString({
            ...this._def,
            checks: [
                ...this._def.checks,
                check
            ]
        });
    }
    email(message) {
        return this._addCheck({
            kind: "email",
            ...errorUtil.errToObj(message)
        });
    }
    url(message) {
        return this._addCheck({
            kind: "url",
            ...errorUtil.errToObj(message)
        });
    }
    uuid(message) {
        return this._addCheck({
            kind: "uuid",
            ...errorUtil.errToObj(message)
        });
    }
    cuid(message) {
        return this._addCheck({
            kind: "cuid",
            ...errorUtil.errToObj(message)
        });
    }
    regex(regex, message) {
        return this._addCheck({
            kind: "regex",
            regex,
            ...errorUtil.errToObj(message)
        });
    }
    startsWith(value, message) {
        return this._addCheck({
            kind: "startsWith",
            value,
            ...errorUtil.errToObj(message)
        });
    }
    endsWith(value, message) {
        return this._addCheck({
            kind: "endsWith",
            value,
            ...errorUtil.errToObj(message)
        });
    }
    min(minLength, message) {
        return this._addCheck({
            kind: "min",
            value: minLength,
            ...errorUtil.errToObj(message)
        });
    }
    max(maxLength, message) {
        return this._addCheck({
            kind: "max",
            value: maxLength,
            ...errorUtil.errToObj(message)
        });
    }
    length(len, message) {
        return this.min(len, message).max(len, message);
    }
    get isEmail() {
        return !!this._def.checks.find((ch)=>ch.kind === "email");
    }
    get isURL() {
        return !!this._def.checks.find((ch)=>ch.kind === "url");
    }
    get isUUID() {
        return !!this._def.checks.find((ch)=>ch.kind === "uuid");
    }
    get isCUID() {
        return !!this._def.checks.find((ch)=>ch.kind === "cuid");
    }
    get minLength() {
        let min = null;
        for (const ch of this._def.checks){
            if (ch.kind === "min") {
                if (min === null || ch.value > min) min = ch.value;
            }
        }
        return min;
    }
    get maxLength() {
        let max = null;
        for (const ch of this._def.checks){
            if (ch.kind === "max") {
                if (max === null || ch.value < max) max = ch.value;
            }
        }
        return max;
    }
};
ZodString.create = (params2)=>{
    return new ZodString({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodString,
        ...processCreateParams(params2)
    });
};
function floatSafeRemainder(val, step) {
    const valDecCount = (val.toString().split(".")[1] || "").length;
    const stepDecCount = (step.toString().split(".")[1] || "").length;
    const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
    const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
    const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
    return valInt % stepInt / Math.pow(10, decCount);
}
var ZodNumber = class extends ZodType {
    constructor(){
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
        this.step = this.multipleOf;
    }
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.number) {
            const ctx2 = this._getOrReturnCtx(input);
            addIssueToContext(ctx2, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.number,
                received: ctx2.parsedType
            });
            return INVALID;
        }
        let ctx = void 0;
        const status = new ParseStatus();
        for (const check of this._def.checks){
            if (check.kind === "int") {
                if (!util.isInteger(input.data)) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_type,
                        expected: "integer",
                        received: "float",
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "min") {
                const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
                if (tooSmall) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        minimum: check.value,
                        type: "number",
                        inclusive: check.inclusive,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "max") {
                const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
                if (tooBig) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        maximum: check.value,
                        type: "number",
                        inclusive: check.inclusive,
                        message: check.message
                    });
                    status.dirty();
                }
            } else if (check.kind === "multipleOf") {
                if (floatSafeRemainder(input.data, check.value) !== 0) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.not_multiple_of,
                        multipleOf: check.value,
                        message: check.message
                    });
                    status.dirty();
                }
            } else util.assertNever(check);
        }
        return {
            status: status.value,
            value: input.data
        };
    }
    gte(value, message) {
        return this.setLimit("min", value, true, errorUtil.toString(message));
    }
    gt(value, message) {
        return this.setLimit("min", value, false, errorUtil.toString(message));
    }
    lte(value, message) {
        return this.setLimit("max", value, true, errorUtil.toString(message));
    }
    lt(value, message) {
        return this.setLimit("max", value, false, errorUtil.toString(message));
    }
    setLimit(kind, value, inclusive, message) {
        return new ZodNumber({
            ...this._def,
            checks: [
                ...this._def.checks,
                {
                    kind,
                    value,
                    inclusive,
                    message: errorUtil.toString(message)
                }
            ]
        });
    }
    _addCheck(check) {
        return new ZodNumber({
            ...this._def,
            checks: [
                ...this._def.checks,
                check
            ]
        });
    }
    int(message) {
        return this._addCheck({
            kind: "int",
            message: errorUtil.toString(message)
        });
    }
    positive(message) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: false,
            message: errorUtil.toString(message)
        });
    }
    negative(message) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: false,
            message: errorUtil.toString(message)
        });
    }
    nonpositive(message) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: true,
            message: errorUtil.toString(message)
        });
    }
    nonnegative(message) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: true,
            message: errorUtil.toString(message)
        });
    }
    multipleOf(value, message) {
        return this._addCheck({
            kind: "multipleOf",
            value,
            message: errorUtil.toString(message)
        });
    }
    get minValue() {
        let min = null;
        for (const ch of this._def.checks){
            if (ch.kind === "min") {
                if (min === null || ch.value > min) min = ch.value;
            }
        }
        return min;
    }
    get maxValue() {
        let max = null;
        for (const ch of this._def.checks){
            if (ch.kind === "max") {
                if (max === null || ch.value < max) max = ch.value;
            }
        }
        return max;
    }
    get isInt() {
        return !!this._def.checks.find((ch)=>ch.kind === "int");
    }
};
ZodNumber.create = (params2)=>{
    return new ZodNumber({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodNumber,
        ...processCreateParams(params2)
    });
};
var ZodBigInt = class extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.bigint) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.bigint,
                received: ctx.parsedType
            });
            return INVALID;
        }
        return OK(input.data);
    }
};
ZodBigInt.create = (params2)=>{
    return new ZodBigInt({
        typeName: ZodFirstPartyTypeKind.ZodBigInt,
        ...processCreateParams(params2)
    });
};
var ZodBoolean = class extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.boolean) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.boolean,
                received: ctx.parsedType
            });
            return INVALID;
        }
        return OK(input.data);
    }
};
ZodBoolean.create = (params2)=>{
    return new ZodBoolean({
        typeName: ZodFirstPartyTypeKind.ZodBoolean,
        ...processCreateParams(params2)
    });
};
var ZodDate = class extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.date) {
            const ctx2 = this._getOrReturnCtx(input);
            addIssueToContext(ctx2, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.date,
                received: ctx2.parsedType
            });
            return INVALID;
        }
        if (isNaN(input.data.getTime())) {
            const ctx2 = this._getOrReturnCtx(input);
            addIssueToContext(ctx2, {
                code: ZodIssueCode.invalid_date
            });
            return INVALID;
        }
        const status = new ParseStatus();
        let ctx = void 0;
        for (const check of this._def.checks){
            if (check.kind === "min") {
                if (input.data.getTime() < check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        message: check.message,
                        inclusive: true,
                        minimum: check.value,
                        type: "date"
                    });
                    status.dirty();
                }
            } else if (check.kind === "max") {
                if (input.data.getTime() > check.value) {
                    ctx = this._getOrReturnCtx(input, ctx);
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        message: check.message,
                        inclusive: true,
                        maximum: check.value,
                        type: "date"
                    });
                    status.dirty();
                }
            } else util.assertNever(check);
        }
        return {
            status: status.value,
            value: new Date(input.data.getTime())
        };
    }
    _addCheck(check) {
        return new ZodDate({
            ...this._def,
            checks: [
                ...this._def.checks,
                check
            ]
        });
    }
    min(minDate, message) {
        return this._addCheck({
            kind: "min",
            value: minDate.getTime(),
            message: errorUtil.toString(message)
        });
    }
    max(maxDate, message) {
        return this._addCheck({
            kind: "max",
            value: maxDate.getTime(),
            message: errorUtil.toString(message)
        });
    }
    get minDate() {
        let min = null;
        for (const ch of this._def.checks){
            if (ch.kind === "min") {
                if (min === null || ch.value > min) min = ch.value;
            }
        }
        return min != null ? new Date(min) : null;
    }
    get maxDate() {
        let max = null;
        for (const ch of this._def.checks){
            if (ch.kind === "max") {
                if (max === null || ch.value < max) max = ch.value;
            }
        }
        return max != null ? new Date(max) : null;
    }
};
ZodDate.create = (params2)=>{
    return new ZodDate({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodDate,
        ...processCreateParams(params2)
    });
};
var ZodUndefined = class extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.undefined) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.undefined,
                received: ctx.parsedType
            });
            return INVALID;
        }
        return OK(input.data);
    }
};
ZodUndefined.create = (params2)=>{
    return new ZodUndefined({
        typeName: ZodFirstPartyTypeKind.ZodUndefined,
        ...processCreateParams(params2)
    });
};
var ZodNull = class extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.null) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.null,
                received: ctx.parsedType
            });
            return INVALID;
        }
        return OK(input.data);
    }
};
ZodNull.create = (params2)=>{
    return new ZodNull({
        typeName: ZodFirstPartyTypeKind.ZodNull,
        ...processCreateParams(params2)
    });
};
var ZodAny = class extends ZodType {
    constructor(){
        super(...arguments);
        this._any = true;
    }
    _parse(input) {
        return OK(input.data);
    }
};
ZodAny.create = (params2)=>{
    return new ZodAny({
        typeName: ZodFirstPartyTypeKind.ZodAny,
        ...processCreateParams(params2)
    });
};
var ZodUnknown = class extends ZodType {
    constructor(){
        super(...arguments);
        this._unknown = true;
    }
    _parse(input) {
        return OK(input.data);
    }
};
ZodUnknown.create = (params2)=>{
    return new ZodUnknown({
        typeName: ZodFirstPartyTypeKind.ZodUnknown,
        ...processCreateParams(params2)
    });
};
var ZodNever = class extends ZodType {
    _parse(input) {
        const ctx = this._getOrReturnCtx(input);
        addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: ZodParsedType.never,
            received: ctx.parsedType
        });
        return INVALID;
    }
};
ZodNever.create = (params2)=>{
    return new ZodNever({
        typeName: ZodFirstPartyTypeKind.ZodNever,
        ...processCreateParams(params2)
    });
};
var ZodVoid = class extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.undefined) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.void,
                received: ctx.parsedType
            });
            return INVALID;
        }
        return OK(input.data);
    }
};
ZodVoid.create = (params2)=>{
    return new ZodVoid({
        typeName: ZodFirstPartyTypeKind.ZodVoid,
        ...processCreateParams(params2)
    });
};
var ZodArray = class extends ZodType {
    _parse(input) {
        const { ctx , status  } = this._processInputParams(input);
        const def2 = this._def;
        if (ctx.parsedType !== ZodParsedType.array) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.array,
                received: ctx.parsedType
            });
            return INVALID;
        }
        if (def2.minLength !== null) {
            if (ctx.data.length < def2.minLength.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_small,
                    minimum: def2.minLength.value,
                    type: "array",
                    inclusive: true,
                    message: def2.minLength.message
                });
                status.dirty();
            }
        }
        if (def2.maxLength !== null) {
            if (ctx.data.length > def2.maxLength.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_big,
                    maximum: def2.maxLength.value,
                    type: "array",
                    inclusive: true,
                    message: def2.maxLength.message
                });
                status.dirty();
            }
        }
        if (ctx.common.async) return Promise.all(ctx.data.map((item, i)=>{
            return def2.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
        })).then((result2)=>{
            return ParseStatus.mergeArray(status, result2);
        });
        const result = ctx.data.map((item, i)=>{
            return def2.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
        });
        return ParseStatus.mergeArray(status, result);
    }
    get element() {
        return this._def.type;
    }
    min(minLength, message) {
        return new ZodArray({
            ...this._def,
            minLength: {
                value: minLength,
                message: errorUtil.toString(message)
            }
        });
    }
    max(maxLength, message) {
        return new ZodArray({
            ...this._def,
            maxLength: {
                value: maxLength,
                message: errorUtil.toString(message)
            }
        });
    }
    length(len, message) {
        return this.min(len, message).max(len, message);
    }
    nonempty(message) {
        return this.min(1, message);
    }
};
ZodArray.create = (schema2, params2)=>{
    return new ZodArray({
        type: schema2,
        minLength: null,
        maxLength: null,
        typeName: ZodFirstPartyTypeKind.ZodArray,
        ...processCreateParams(params2)
    });
};
var objectUtil;
(function(objectUtil2) {
    objectUtil2.mergeShapes = (first, second)=>{
        return {
            ...first,
            ...second
        };
    };
})(objectUtil || (objectUtil = {}));
var AugmentFactory = (def2)=>(augmentation)=>{
        return new ZodObject({
            ...def2,
            shape: ()=>({
                    ...def2.shape(),
                    ...augmentation
                })
        });
    };
function deepPartialify(schema2) {
    if (schema2 instanceof ZodObject) {
        const newShape = {};
        for(const key in schema2.shape){
            const fieldSchema = schema2.shape[key];
            newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
        }
        return new ZodObject({
            ...schema2._def,
            shape: ()=>newShape
        });
    } else if (schema2 instanceof ZodArray) return ZodArray.create(deepPartialify(schema2.element));
    else if (schema2 instanceof ZodOptional) return ZodOptional.create(deepPartialify(schema2.unwrap()));
    else if (schema2 instanceof ZodNullable) return ZodNullable.create(deepPartialify(schema2.unwrap()));
    else if (schema2 instanceof ZodTuple) return ZodTuple.create(schema2.items.map((item)=>deepPartialify(item)));
    else return schema2;
}
var ZodObject = class extends ZodType {
    constructor(){
        super(...arguments);
        this._cached = null;
        this.nonstrict = this.passthrough;
        this.augment = AugmentFactory(this._def);
        this.extend = AugmentFactory(this._def);
    }
    _getCached() {
        if (this._cached !== null) return this._cached;
        const shape = this._def.shape();
        const keys = util.objectKeys(shape);
        return this._cached = {
            shape,
            keys
        };
    }
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.object) {
            const ctx2 = this._getOrReturnCtx(input);
            addIssueToContext(ctx2, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.object,
                received: ctx2.parsedType
            });
            return INVALID;
        }
        const { status , ctx  } = this._processInputParams(input);
        const { shape , keys: shapeKeys  } = this._getCached();
        const extraKeys = [];
        if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
            for(const key in ctx.data)if (!shapeKeys.includes(key)) extraKeys.push(key);
        }
        const pairs = [];
        for (const key of shapeKeys){
            const keyValidator = shape[key];
            const value = ctx.data[key];
            pairs.push({
                key: {
                    status: "valid",
                    value: key
                },
                value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
                alwaysSet: key in ctx.data
            });
        }
        if (this._def.catchall instanceof ZodNever) {
            const unknownKeys = this._def.unknownKeys;
            if (unknownKeys === "passthrough") for (const key of extraKeys)pairs.push({
                key: {
                    status: "valid",
                    value: key
                },
                value: {
                    status: "valid",
                    value: ctx.data[key]
                }
            });
            else if (unknownKeys === "strict") {
                if (extraKeys.length > 0) {
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.unrecognized_keys,
                        keys: extraKeys
                    });
                    status.dirty();
                }
            } else if (unknownKeys === "strip") ;
            else throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
        } else {
            const catchall = this._def.catchall;
            for (const key of extraKeys){
                const value = ctx.data[key];
                pairs.push({
                    key: {
                        status: "valid",
                        value: key
                    },
                    value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
                    alwaysSet: key in ctx.data
                });
            }
        }
        if (ctx.common.async) return Promise.resolve().then(async ()=>{
            const syncPairs = [];
            for (const pair of pairs){
                const key = await pair.key;
                syncPairs.push({
                    key,
                    value: await pair.value,
                    alwaysSet: pair.alwaysSet
                });
            }
            return syncPairs;
        }).then((syncPairs)=>{
            return ParseStatus.mergeObjectSync(status, syncPairs);
        });
        else return ParseStatus.mergeObjectSync(status, pairs);
    }
    get shape() {
        return this._def.shape();
    }
    strict(message) {
        errorUtil.errToObj;
        return new ZodObject({
            ...this._def,
            unknownKeys: "strict",
            ...message !== void 0 ? {
                errorMap: (issue, ctx)=>{
                    var _a, _b, _c, _d;
                    const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
                    if (issue.code === "unrecognized_keys") return {
                        message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError
                    };
                    return {
                        message: defaultError
                    };
                }
            } : {}
        });
    }
    strip() {
        return new ZodObject({
            ...this._def,
            unknownKeys: "strip"
        });
    }
    passthrough() {
        return new ZodObject({
            ...this._def,
            unknownKeys: "passthrough"
        });
    }
    setKey(key, schema2) {
        return this.augment({
            [key]: schema2
        });
    }
    merge(merging) {
        const merged = new ZodObject({
            unknownKeys: merging._def.unknownKeys,
            catchall: merging._def.catchall,
            shape: ()=>objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
            typeName: ZodFirstPartyTypeKind.ZodObject
        });
        return merged;
    }
    catchall(index) {
        return new ZodObject({
            ...this._def,
            catchall: index
        });
    }
    pick(mask) {
        const shape = {};
        util.objectKeys(mask).map((key)=>{
            if (this.shape[key]) shape[key] = this.shape[key];
        });
        return new ZodObject({
            ...this._def,
            shape: ()=>shape
        });
    }
    omit(mask) {
        const shape = {};
        util.objectKeys(this.shape).map((key)=>{
            if (util.objectKeys(mask).indexOf(key) === -1) shape[key] = this.shape[key];
        });
        return new ZodObject({
            ...this._def,
            shape: ()=>shape
        });
    }
    deepPartial() {
        return deepPartialify(this);
    }
    partial(mask) {
        const newShape = {};
        if (mask) {
            util.objectKeys(this.shape).map((key)=>{
                if (util.objectKeys(mask).indexOf(key) === -1) newShape[key] = this.shape[key];
                else newShape[key] = this.shape[key].optional();
            });
            return new ZodObject({
                ...this._def,
                shape: ()=>newShape
            });
        } else for(const key in this.shape){
            const fieldSchema = this.shape[key];
            newShape[key] = fieldSchema.optional();
        }
        return new ZodObject({
            ...this._def,
            shape: ()=>newShape
        });
    }
    required() {
        const newShape = {};
        for(const key in this.shape){
            const fieldSchema = this.shape[key];
            let newField = fieldSchema;
            while(newField instanceof ZodOptional)newField = newField._def.innerType;
            newShape[key] = newField;
        }
        return new ZodObject({
            ...this._def,
            shape: ()=>newShape
        });
    }
    keyof() {
        return createZodEnum(util.objectKeys(this.shape));
    }
};
ZodObject.create = (shape, params2)=>{
    return new ZodObject({
        shape: ()=>shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params2)
    });
};
ZodObject.strictCreate = (shape, params2)=>{
    return new ZodObject({
        shape: ()=>shape,
        unknownKeys: "strict",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params2)
    });
};
ZodObject.lazycreate = (shape, params2)=>{
    return new ZodObject({
        shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params2)
    });
};
var ZodUnion = class extends ZodType {
    _parse(input) {
        const { ctx  } = this._processInputParams(input);
        const options = this._def.options;
        function handleResults(results) {
            for (const result of results){
                if (result.result.status === "valid") return result.result;
            }
            for (const result of results)if (result.result.status === "dirty") {
                ctx.common.issues.push(...result.ctx.common.issues);
                return result.result;
            }
            const unionErrors = results.map((result)=>new ZodError(result.ctx.common.issues));
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_union,
                unionErrors
            });
            return INVALID;
        }
        if (ctx.common.async) return Promise.all(options.map(async (option)=>{
            const childCtx = {
                ...ctx,
                common: {
                    ...ctx.common,
                    issues: []
                },
                parent: null
            };
            return {
                result: await option._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: childCtx
                }),
                ctx: childCtx
            };
        })).then(handleResults);
        else {
            let dirty = void 0;
            const issues = [];
            for (const option of options){
                const childCtx = {
                    ...ctx,
                    common: {
                        ...ctx.common,
                        issues: []
                    },
                    parent: null
                };
                const result = option._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: childCtx
                });
                if (result.status === "valid") return result;
                else if (result.status === "dirty" && !dirty) dirty = {
                    result,
                    ctx: childCtx
                };
                if (childCtx.common.issues.length) issues.push(childCtx.common.issues);
            }
            if (dirty) {
                ctx.common.issues.push(...dirty.ctx.common.issues);
                return dirty.result;
            }
            const unionErrors = issues.map((issues2)=>new ZodError(issues2));
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_union,
                unionErrors
            });
            return INVALID;
        }
    }
    get options() {
        return this._def.options;
    }
};
ZodUnion.create = (types, params2)=>{
    return new ZodUnion({
        options: types,
        typeName: ZodFirstPartyTypeKind.ZodUnion,
        ...processCreateParams(params2)
    });
};
var ZodDiscriminatedUnion = class extends ZodType {
    _parse(input) {
        const { ctx  } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.object) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.object,
                received: ctx.parsedType
            });
            return INVALID;
        }
        const discriminator = this.discriminator;
        const discriminatorValue = ctx.data[discriminator];
        const option = this.options.get(discriminatorValue);
        if (!option) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_union_discriminator,
                options: this.validDiscriminatorValues,
                path: [
                    discriminator
                ]
            });
            return INVALID;
        }
        if (ctx.common.async) return option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
        });
        else return option._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
        });
    }
    get discriminator() {
        return this._def.discriminator;
    }
    get validDiscriminatorValues() {
        return Array.from(this.options.keys());
    }
    get options() {
        return this._def.options;
    }
    static create(discriminator, types, params2) {
        const options = /* @__PURE__ */ new Map();
        try {
            types.forEach((type)=>{
                const discriminatorValue = type.shape[discriminator].value;
                options.set(discriminatorValue, type);
            });
        } catch (e) {
            throw new Error("The discriminator value could not be extracted from all the provided schemas");
        }
        if (options.size !== types.length) throw new Error("Some of the discriminator values are not unique");
        return new ZodDiscriminatedUnion({
            typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
            discriminator,
            options,
            ...processCreateParams(params2)
        });
    }
};
function mergeValues(a, b) {
    const aType = getParsedType(a);
    const bType = getParsedType(b);
    if (a === b) return {
        valid: true,
        data: a
    };
    else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
        const bKeys = util.objectKeys(b);
        const sharedKeys = util.objectKeys(a).filter((key)=>bKeys.indexOf(key) !== -1);
        const newObj = {
            ...a,
            ...b
        };
        for (const key of sharedKeys){
            const sharedValue = mergeValues(a[key], b[key]);
            if (!sharedValue.valid) return {
                valid: false
            };
            newObj[key] = sharedValue.data;
        }
        return {
            valid: true,
            data: newObj
        };
    } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
        if (a.length !== b.length) return {
            valid: false
        };
        const newArray = [];
        for(let index = 0; index < a.length; index++){
            const itemA = a[index];
            const itemB = b[index];
            const sharedValue = mergeValues(itemA, itemB);
            if (!sharedValue.valid) return {
                valid: false
            };
            newArray.push(sharedValue.data);
        }
        return {
            valid: true,
            data: newArray
        };
    } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) return {
        valid: true,
        data: a
    };
    else return {
        valid: false
    };
}
var ZodIntersection = class extends ZodType {
    _parse(input) {
        const { status , ctx  } = this._processInputParams(input);
        const handleParsed = (parsedLeft, parsedRight)=>{
            if (isAborted(parsedLeft) || isAborted(parsedRight)) return INVALID;
            const merged = mergeValues(parsedLeft.value, parsedRight.value);
            if (!merged.valid) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_intersection_types
                });
                return INVALID;
            }
            if (isDirty(parsedLeft) || isDirty(parsedRight)) status.dirty();
            return {
                status: status.value,
                value: merged.data
            };
        };
        if (ctx.common.async) return Promise.all([
            this._def.left._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            }),
            this._def.right._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            })
        ]).then(([left, right])=>handleParsed(left, right));
        else return handleParsed(this._def.left._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
        }), this._def.right._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
        }));
    }
};
ZodIntersection.create = (left, right, params2)=>{
    return new ZodIntersection({
        left,
        right,
        typeName: ZodFirstPartyTypeKind.ZodIntersection,
        ...processCreateParams(params2)
    });
};
var ZodTuple = class extends ZodType {
    _parse(input) {
        const { status , ctx  } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.array) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.array,
                received: ctx.parsedType
            });
            return INVALID;
        }
        if (ctx.data.length < this._def.items.length) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.too_small,
                minimum: this._def.items.length,
                inclusive: true,
                type: "array"
            });
            return INVALID;
        }
        const rest = this._def.rest;
        if (!rest && ctx.data.length > this._def.items.length) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.too_big,
                maximum: this._def.items.length,
                inclusive: true,
                type: "array"
            });
            status.dirty();
        }
        const items = ctx.data.map((item, itemIndex)=>{
            const schema2 = this._def.items[itemIndex] || this._def.rest;
            if (!schema2) return null;
            return schema2._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
        }).filter((x)=>!!x);
        if (ctx.common.async) return Promise.all(items).then((results)=>{
            return ParseStatus.mergeArray(status, results);
        });
        else return ParseStatus.mergeArray(status, items);
    }
    get items() {
        return this._def.items;
    }
    rest(rest) {
        return new ZodTuple({
            ...this._def,
            rest
        });
    }
};
ZodTuple.create = (schemas2, params2)=>{
    if (!Array.isArray(schemas2)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new ZodTuple({
        items: schemas2,
        typeName: ZodFirstPartyTypeKind.ZodTuple,
        rest: null,
        ...processCreateParams(params2)
    });
};
var ZodRecord = class extends ZodType {
    get keySchema() {
        return this._def.keyType;
    }
    get valueSchema() {
        return this._def.valueType;
    }
    _parse(input) {
        const { status , ctx  } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.object) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.object,
                received: ctx.parsedType
            });
            return INVALID;
        }
        const pairs = [];
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        for(const key in ctx.data)pairs.push({
            key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
            value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key))
        });
        if (ctx.common.async) return ParseStatus.mergeObjectAsync(status, pairs);
        else return ParseStatus.mergeObjectSync(status, pairs);
    }
    get element() {
        return this._def.valueType;
    }
    static create(first, second, third) {
        if (second instanceof ZodType) return new ZodRecord({
            keyType: first,
            valueType: second,
            typeName: ZodFirstPartyTypeKind.ZodRecord,
            ...processCreateParams(third)
        });
        return new ZodRecord({
            keyType: ZodString.create(),
            valueType: first,
            typeName: ZodFirstPartyTypeKind.ZodRecord,
            ...processCreateParams(second)
        });
    }
};
var ZodMap = class extends ZodType {
    _parse(input) {
        const { status , ctx  } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.map) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.map,
                received: ctx.parsedType
            });
            return INVALID;
        }
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        const pairs = [
            ...ctx.data.entries()
        ].map(([key, value], index)=>{
            return {
                key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [
                    index,
                    "key"
                ])),
                value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [
                    index,
                    "value"
                ]))
            };
        });
        if (ctx.common.async) {
            const finalMap = /* @__PURE__ */ new Map();
            return Promise.resolve().then(async ()=>{
                for (const pair of pairs){
                    const key = await pair.key;
                    const value = await pair.value;
                    if (key.status === "aborted" || value.status === "aborted") return INVALID;
                    if (key.status === "dirty" || value.status === "dirty") status.dirty();
                    finalMap.set(key.value, value.value);
                }
                return {
                    status: status.value,
                    value: finalMap
                };
            });
        } else {
            const finalMap = /* @__PURE__ */ new Map();
            for (const pair of pairs){
                const key = pair.key;
                const value = pair.value;
                if (key.status === "aborted" || value.status === "aborted") return INVALID;
                if (key.status === "dirty" || value.status === "dirty") status.dirty();
                finalMap.set(key.value, value.value);
            }
            return {
                status: status.value,
                value: finalMap
            };
        }
    }
};
ZodMap.create = (keyType, valueType, params2)=>{
    return new ZodMap({
        valueType,
        keyType,
        typeName: ZodFirstPartyTypeKind.ZodMap,
        ...processCreateParams(params2)
    });
};
var ZodSet = class extends ZodType {
    _parse(input) {
        const { status , ctx  } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.set) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.set,
                received: ctx.parsedType
            });
            return INVALID;
        }
        const def2 = this._def;
        if (def2.minSize !== null) {
            if (ctx.data.size < def2.minSize.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_small,
                    minimum: def2.minSize.value,
                    type: "set",
                    inclusive: true,
                    message: def2.minSize.message
                });
                status.dirty();
            }
        }
        if (def2.maxSize !== null) {
            if (ctx.data.size > def2.maxSize.value) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_big,
                    maximum: def2.maxSize.value,
                    type: "set",
                    inclusive: true,
                    message: def2.maxSize.message
                });
                status.dirty();
            }
        }
        const valueType = this._def.valueType;
        function finalizeSet(elements2) {
            const parsedSet = /* @__PURE__ */ new Set();
            for (const element of elements2){
                if (element.status === "aborted") return INVALID;
                if (element.status === "dirty") status.dirty();
                parsedSet.add(element.value);
            }
            return {
                status: status.value,
                value: parsedSet
            };
        }
        const elements = [
            ...ctx.data.values()
        ].map((item, i)=>valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
        if (ctx.common.async) return Promise.all(elements).then((elements2)=>finalizeSet(elements2));
        else return finalizeSet(elements);
    }
    min(minSize, message) {
        return new ZodSet({
            ...this._def,
            minSize: {
                value: minSize,
                message: errorUtil.toString(message)
            }
        });
    }
    max(maxSize, message) {
        return new ZodSet({
            ...this._def,
            maxSize: {
                value: maxSize,
                message: errorUtil.toString(message)
            }
        });
    }
    size(size, message) {
        return this.min(size, message).max(size, message);
    }
    nonempty(message) {
        return this.min(1, message);
    }
};
ZodSet.create = (valueType, params2)=>{
    return new ZodSet({
        valueType,
        minSize: null,
        maxSize: null,
        typeName: ZodFirstPartyTypeKind.ZodSet,
        ...processCreateParams(params2)
    });
};
var ZodFunction = class extends ZodType {
    constructor(){
        super(...arguments);
        this.validate = this.implement;
    }
    _parse(input) {
        const { ctx  } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.function) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.function,
                received: ctx.parsedType
            });
            return INVALID;
        }
        function makeArgsIssue(args, error) {
            return makeIssue({
                data: args,
                path: ctx.path,
                errorMaps: [
                    ctx.common.contextualErrorMap,
                    ctx.schemaErrorMap,
                    getErrorMap(),
                    errorMap
                ].filter((x)=>!!x),
                issueData: {
                    code: ZodIssueCode.invalid_arguments,
                    argumentsError: error
                }
            });
        }
        function makeReturnsIssue(returns, error) {
            return makeIssue({
                data: returns,
                path: ctx.path,
                errorMaps: [
                    ctx.common.contextualErrorMap,
                    ctx.schemaErrorMap,
                    getErrorMap(),
                    errorMap
                ].filter((x)=>!!x),
                issueData: {
                    code: ZodIssueCode.invalid_return_type,
                    returnTypeError: error
                }
            });
        }
        const params2 = {
            errorMap: ctx.common.contextualErrorMap
        };
        const fn = ctx.data;
        if (this._def.returns instanceof ZodPromise) return OK(async (...args)=>{
            const error = new ZodError([]);
            const parsedArgs = await this._def.args.parseAsync(args, params2).catch((e)=>{
                error.addIssue(makeArgsIssue(args, e));
                throw error;
            });
            const result = await fn(...parsedArgs);
            const parsedReturns = await this._def.returns._def.type.parseAsync(result, params2).catch((e)=>{
                error.addIssue(makeReturnsIssue(result, e));
                throw error;
            });
            return parsedReturns;
        });
        else return OK((...args)=>{
            const parsedArgs = this._def.args.safeParse(args, params2);
            if (!parsedArgs.success) throw new ZodError([
                makeArgsIssue(args, parsedArgs.error)
            ]);
            const result = fn(...parsedArgs.data);
            const parsedReturns = this._def.returns.safeParse(result, params2);
            if (!parsedReturns.success) throw new ZodError([
                makeReturnsIssue(result, parsedReturns.error)
            ]);
            return parsedReturns.data;
        });
    }
    parameters() {
        return this._def.args;
    }
    returnType() {
        return this._def.returns;
    }
    args(...items) {
        return new ZodFunction({
            ...this._def,
            args: ZodTuple.create(items).rest(ZodUnknown.create())
        });
    }
    returns(returnType) {
        return new ZodFunction({
            ...this._def,
            returns: returnType
        });
    }
    implement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
    }
    strictImplement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
    }
    static create(args, returns, params2) {
        return new ZodFunction({
            args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
            returns: returns || ZodUnknown.create(),
            typeName: ZodFirstPartyTypeKind.ZodFunction,
            ...processCreateParams(params2)
        });
    }
};
var ZodLazy = class extends ZodType {
    get schema() {
        return this._def.getter();
    }
    _parse(input) {
        const { ctx  } = this._processInputParams(input);
        const lazySchema = this._def.getter();
        return lazySchema._parse({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
        });
    }
};
ZodLazy.create = (getter, params2)=>{
    return new ZodLazy({
        getter,
        typeName: ZodFirstPartyTypeKind.ZodLazy,
        ...processCreateParams(params2)
    });
};
var ZodLiteral = class extends ZodType {
    _parse(input) {
        if (input.data !== this._def.value) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_literal,
                expected: this._def.value
            });
            return INVALID;
        }
        return {
            status: "valid",
            value: input.data
        };
    }
    get value() {
        return this._def.value;
    }
};
ZodLiteral.create = (value, params2)=>{
    return new ZodLiteral({
        value,
        typeName: ZodFirstPartyTypeKind.ZodLiteral,
        ...processCreateParams(params2)
    });
};
function createZodEnum(values, params2) {
    return new ZodEnum({
        values,
        typeName: ZodFirstPartyTypeKind.ZodEnum,
        ...processCreateParams(params2)
    });
}
var ZodEnum = class extends ZodType {
    _parse(input) {
        if (typeof input.data !== "string") {
            const ctx = this._getOrReturnCtx(input);
            const expectedValues = this._def.values;
            addIssueToContext(ctx, {
                expected: util.joinValues(expectedValues),
                received: ctx.parsedType,
                code: ZodIssueCode.invalid_type
            });
            return INVALID;
        }
        if (this._def.values.indexOf(input.data) === -1) {
            const ctx = this._getOrReturnCtx(input);
            const expectedValues = this._def.values;
            addIssueToContext(ctx, {
                received: ctx.data,
                code: ZodIssueCode.invalid_enum_value,
                options: expectedValues
            });
            return INVALID;
        }
        return OK(input.data);
    }
    get options() {
        return this._def.values;
    }
    get enum() {
        const enumValues = {};
        for (const val of this._def.values)enumValues[val] = val;
        return enumValues;
    }
    get Values() {
        const enumValues = {};
        for (const val of this._def.values)enumValues[val] = val;
        return enumValues;
    }
    get Enum() {
        const enumValues = {};
        for (const val of this._def.values)enumValues[val] = val;
        return enumValues;
    }
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
    _parse(input) {
        const nativeEnumValues = util.getValidEnumValues(this._def.values);
        const ctx = this._getOrReturnCtx(input);
        if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
            const expectedValues = util.objectValues(nativeEnumValues);
            addIssueToContext(ctx, {
                expected: util.joinValues(expectedValues),
                received: ctx.parsedType,
                code: ZodIssueCode.invalid_type
            });
            return INVALID;
        }
        if (nativeEnumValues.indexOf(input.data) === -1) {
            const expectedValues = util.objectValues(nativeEnumValues);
            addIssueToContext(ctx, {
                received: ctx.data,
                code: ZodIssueCode.invalid_enum_value,
                options: expectedValues
            });
            return INVALID;
        }
        return OK(input.data);
    }
    get enum() {
        return this._def.values;
    }
};
ZodNativeEnum.create = (values, params2)=>{
    return new ZodNativeEnum({
        values,
        typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
        ...processCreateParams(params2)
    });
};
var ZodPromise = class extends ZodType {
    _parse(input) {
        const { ctx  } = this._processInputParams(input);
        if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.promise,
                received: ctx.parsedType
            });
            return INVALID;
        }
        const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
        return OK(promisified.then((data)=>{
            return this._def.type.parseAsync(data, {
                path: ctx.path,
                errorMap: ctx.common.contextualErrorMap
            });
        }));
    }
};
ZodPromise.create = (schema2, params2)=>{
    return new ZodPromise({
        type: schema2,
        typeName: ZodFirstPartyTypeKind.ZodPromise,
        ...processCreateParams(params2)
    });
};
var ZodEffects = class extends ZodType {
    innerType() {
        return this._def.schema;
    }
    _parse(input) {
        const { status , ctx  } = this._processInputParams(input);
        const effect = this._def.effect || null;
        if (effect.type === "preprocess") {
            const processed = effect.transform(ctx.data);
            if (ctx.common.async) return Promise.resolve(processed).then((processed2)=>{
                return this._def.schema._parseAsync({
                    data: processed2,
                    path: ctx.path,
                    parent: ctx
                });
            });
            else return this._def.schema._parseSync({
                data: processed,
                path: ctx.path,
                parent: ctx
            });
        }
        const checkCtx = {
            addIssue: (arg)=>{
                addIssueToContext(ctx, arg);
                if (arg.fatal) status.abort();
                else status.dirty();
            },
            get path () {
                return ctx.path;
            }
        };
        checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
        if (effect.type === "refinement") {
            const executeRefinement = (acc)=>{
                const result = effect.refinement(acc, checkCtx);
                if (ctx.common.async) return Promise.resolve(result);
                if (result instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                return acc;
            };
            if (ctx.common.async === false) {
                const inner = this._def.schema._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                });
                if (inner.status === "aborted") return INVALID;
                if (inner.status === "dirty") status.dirty();
                executeRefinement(inner.value);
                return {
                    status: status.value,
                    value: inner.value
                };
            } else return this._def.schema._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            }).then((inner)=>{
                if (inner.status === "aborted") return INVALID;
                if (inner.status === "dirty") status.dirty();
                return executeRefinement(inner.value).then(()=>{
                    return {
                        status: status.value,
                        value: inner.value
                    };
                });
            });
        }
        if (effect.type === "transform") {
            if (ctx.common.async === false) {
                const base3 = this._def.schema._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx
                });
                if (!isValid(base3)) return base3;
                const result = effect.transform(base3.value, checkCtx);
                if (result instanceof Promise) throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
                return {
                    status: status.value,
                    value: result
                };
            } else return this._def.schema._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: ctx
            }).then((base3)=>{
                if (!isValid(base3)) return base3;
                return Promise.resolve(effect.transform(base3.value, checkCtx)).then((result)=>({
                        status: status.value,
                        value: result
                    }));
            });
        }
        util.assertNever(effect);
    }
};
ZodEffects.create = (schema2, effect, params2)=>{
    return new ZodEffects({
        schema: schema2,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect,
        ...processCreateParams(params2)
    });
};
ZodEffects.createWithPreprocess = (preprocess, schema2, params2)=>{
    return new ZodEffects({
        schema: schema2,
        effect: {
            type: "preprocess",
            transform: preprocess
        },
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        ...processCreateParams(params2)
    });
};
var ZodOptional = class extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === ZodParsedType.undefined) return OK(void 0);
        return this._def.innerType._parse(input);
    }
    unwrap() {
        return this._def.innerType;
    }
};
ZodOptional.create = (type, params2)=>{
    return new ZodOptional({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodOptional,
        ...processCreateParams(params2)
    });
};
var ZodNullable = class extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === ZodParsedType.null) return OK(null);
        return this._def.innerType._parse(input);
    }
    unwrap() {
        return this._def.innerType;
    }
};
ZodNullable.create = (type, params2)=>{
    return new ZodNullable({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodNullable,
        ...processCreateParams(params2)
    });
};
var ZodDefault = class extends ZodType {
    _parse(input) {
        const { ctx  } = this._processInputParams(input);
        let data = ctx.data;
        if (ctx.parsedType === ZodParsedType.undefined) data = this._def.defaultValue();
        return this._def.innerType._parse({
            data,
            path: ctx.path,
            parent: ctx
        });
    }
    removeDefault() {
        return this._def.innerType;
    }
};
ZodDefault.create = (type, params2)=>{
    return new ZodOptional({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodOptional,
        ...processCreateParams(params2)
    });
};
var ZodNaN = class extends ZodType {
    _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== ZodParsedType.nan) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.nan,
                received: ctx.parsedType
            });
            return INVALID;
        }
        return {
            status: "valid",
            value: input.data
        };
    }
};
ZodNaN.create = (params2)=>{
    return new ZodNaN({
        typeName: ZodFirstPartyTypeKind.ZodNaN,
        ...processCreateParams(params2)
    });
};
var BRAND = Symbol("zod_brand");
var ZodBranded = class extends ZodType {
    _parse(input) {
        const { ctx  } = this._processInputParams(input);
        const data = ctx.data;
        return this._def.type._parse({
            data,
            path: ctx.path,
            parent: ctx
        });
    }
    unwrap() {
        return this._def.type;
    }
};
var custom = (check, params2 = {}, fatal)=>{
    if (check) return ZodAny.create().superRefine((data, ctx)=>{
        if (!check(data)) {
            const p = typeof params2 === "function" ? params2(data) : params2;
            const p2 = typeof p === "string" ? {
                message: p
            } : p;
            ctx.addIssue({
                code: "custom",
                ...p2,
                fatal
            });
        }
    });
    return ZodAny.create();
};
var late = {
    object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
    ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
    ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
    ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
    ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
    ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
    ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
    ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
    ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
    ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
    ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
    ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
    ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
    ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
    ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
    ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
    ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
    ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
    ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
    ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
    ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
    ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
    ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
    ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
    ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
    ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
    ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
    ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
    ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
    ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
    ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
    ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
    ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params2 = {
    message: `Input not instance of ${cls.name}`
})=>custom((data)=>data instanceof cls, params2, true);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var ostring = ()=>stringType().optional();
var onumber = ()=>numberType().optional();
var oboolean = ()=>booleanType().optional();
var NEVER = INVALID;
var mod = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    getParsedType,
    ZodParsedType,
    defaultErrorMap: errorMap,
    setErrorMap,
    getErrorMap,
    makeIssue,
    EMPTY_PATH,
    addIssueToContext,
    ParseStatus,
    INVALID,
    DIRTY,
    OK,
    isAborted,
    isDirty,
    isValid,
    isAsync,
    ZodType,
    ZodString,
    ZodNumber,
    ZodBigInt,
    ZodBoolean,
    ZodDate,
    ZodUndefined,
    ZodNull,
    ZodAny,
    ZodUnknown,
    ZodNever,
    ZodVoid,
    ZodArray,
    get objectUtil () {
        return objectUtil;
    },
    ZodObject,
    ZodUnion,
    ZodDiscriminatedUnion,
    ZodIntersection,
    ZodTuple,
    ZodRecord,
    ZodMap,
    ZodSet,
    ZodFunction,
    ZodLazy,
    ZodLiteral,
    ZodEnum,
    ZodNativeEnum,
    ZodPromise,
    ZodEffects,
    ZodTransformer: ZodEffects,
    ZodOptional,
    ZodNullable,
    ZodDefault,
    ZodNaN,
    BRAND,
    ZodBranded,
    custom,
    Schema: ZodType,
    ZodSchema: ZodType,
    late,
    get ZodFirstPartyTypeKind () {
        return ZodFirstPartyTypeKind;
    },
    any: anyType,
    array: arrayType,
    bigint: bigIntType,
    boolean: booleanType,
    date: dateType,
    discriminatedUnion: discriminatedUnionType,
    effect: effectsType,
    "enum": enumType,
    "function": functionType,
    "instanceof": instanceOfType,
    intersection: intersectionType,
    lazy: lazyType,
    literal: literalType,
    map: mapType,
    nan: nanType,
    nativeEnum: nativeEnumType,
    never: neverType,
    "null": nullType,
    nullable: nullableType,
    number: numberType,
    object: objectType,
    oboolean,
    onumber,
    optional: optionalType,
    ostring,
    preprocess: preprocessType,
    promise: promiseType,
    record: recordType,
    set: setType,
    strictObject: strictObjectType,
    string: stringType,
    transformer: effectsType,
    tuple: tupleType,
    "undefined": undefinedType,
    union: unionType,
    unknown: unknownType,
    "void": voidType,
    NEVER,
    ZodIssueCode,
    quotelessJson,
    ZodError
});
// ../common-web/src/types.ts
var cidSchema = mod.any().refine((obj)=>CID.asCID(obj) !== null, {
    message: "Not a CID"
}).transform((obj)=>CID.asCID(obj));
var schema = {
    cid: cidSchema,
    bytes: mod.instanceof(Uint8Array),
    string: mod.string(),
    array: mod.array(mod.unknown()),
    map: mod.record(mod.string(), mod.unknown()),
    unknown: mod.unknown()
};
var def = {
    cid: {
        name: "cid",
        schema: schema.cid
    },
    bytes: {
        name: "bytes",
        schema: schema.bytes
    },
    string: {
        name: "string",
        schema: schema.string
    },
    map: {
        name: "map",
        schema: schema.map
    },
    unknown: {
        name: "unknown",
        schema: schema.unknown
    }
};
// ../common-web/src/times.ts
var SECOND = 1e3;
var MINUTE = SECOND * 60;
var HOUR = MINUTE * 60;
var DAY = HOUR * 24;
// ../common-web/src/strings.ts
var utf8Len = (str)=>{
    return new TextEncoder().encode(str).byteLength;
};
var graphemeLen = (str)=>{
    return [
        ...new Intl.Segmenter().segment(str)
    ].length;
};
// ../identifier/src/reserved.ts
var atpSpecific = [
    "at",
    "atp",
    "plc",
    "pds",
    "did",
    "repo",
    "tid",
    "nsid",
    "xrpc",
    "lex",
    "lexicon",
    "bsky",
    "bluesky",
    "handle"
];
var commonlyReserved = [
    "about",
    "abuse",
    "access",
    "account",
    "accounts",
    "acme",
    "activate",
    "activities",
    "activity",
    "ad",
    "add",
    "address",
    "adm",
    "admanager",
    "admin",
    "administration",
    "administrator",
    "administrators",
    "admins",
    "ads",
    "adsense",
    "adult",
    "advertising",
    "adwords",
    "affiliate",
    "affiliatepage",
    "affiliates",
    "afp",
    "ajax",
    "all",
    "alpha",
    "analysis",
    "analytics",
    "android",
    "anon",
    "anonymous",
    "answer",
    "answers",
    "ap",
    "api",
    "apis",
    "app",
    "appengine",
    "appnews",
    "apps",
    "archive",
    "archives",
    "article",
    "asdf",
    "asset",
    "assets",
    "auth",
    "authentication",
    "avatar",
    "backup",
    "bank",
    "banner",
    "banners",
    "base",
    "beginners",
    "beta",
    "billing",
    "bin",
    "binaries",
    "binary",
    "blackberry",
    "blog",
    "blogs",
    "blogsearch",
    "board",
    "book",
    "bookmark",
    "bookmarks",
    "books",
    "bot",
    "bots",
    "bug",
    "bugs",
    "business",
    "buy",
    "buzz",
    "cache",
    "calendar",
    "call",
    "campaign",
    "cancel",
    "captcha",
    "career",
    "careers",
    "cart",
    "catalog",
    "catalogs",
    "categories",
    "category",
    "cdn",
    "cgi",
    "cgi-bin",
    "changelog",
    "chart",
    "charts",
    "chat",
    "check",
    "checked",
    "checking",
    "checkout",
    "client",
    "cliente",
    "clients",
    "clients1",
    "cnarne",
    "code",
    "comercial",
    "comment",
    "comments",
    "communities",
    "community",
    "company",
    "compare",
    "compras",
    "config",
    "configuration",
    "confirm",
    "confirmation",
    "connect",
    "contact",
    "contacts",
    "contactus",
    "contact-us",
    "contact_us",
    "content",
    "contest",
    "contribute",
    "contributor",
    "contributors",
    "coppa",
    "copyright",
    "copyrights",
    "core",
    "corp",
    "countries",
    "country",
    "cpanel",
    "create",
    "css",
    "cssproxy",
    "customise",
    "customize",
    "dashboard",
    "data",
    "db",
    "default",
    "delete",
    "demo",
    "design",
    "designer",
    "desktop",
    "destroy",
    "dev",
    "devel",
    "developer",
    "developers",
    "devs",
    "diagram",
    "diary",
    "dict",
    "dictionary",
    "die",
    "dir",
    "directory",
    "direct_messages",
    "direct-messages",
    "dist",
    "diversity",
    "dl",
    "dmca",
    "doc",
    "docs",
    "documentation",
    "documentations",
    "documents",
    "domain",
    "domains",
    "donate",
    "download",
    "downloads",
    "e",
    "e-mail",
    "earth",
    "ecommerce",
    "edit",
    "edits",
    "editor",
    "edu",
    "education",
    "email",
    "embed",
    "embedded",
    "employment",
    "employments",
    "empty",
    "enable",
    "encrypted",
    "end",
    "engine",
    "enterprise",
    "enterprises",
    "entries",
    "entry",
    "error",
    "errorlog",
    "errors",
    "eval",
    "event",
    "example",
    "examplecommunity",
    "exampleopenid",
    "examplesyn",
    "examplesyndicated",
    "exampleusername",
    "exchange",
    "exit",
    "explore",
    "faq",
    "faqs",
    "favorite",
    "favorites",
    "favourite",
    "favourites",
    "feature",
    "features",
    "feed",
    "feedback",
    "feedburner",
    "feedproxy",
    "feeds",
    "file",
    "files",
    "finance",
    "folder",
    "folders",
    "first",
    "following",
    "forgot",
    "form",
    "forms",
    "forum",
    "forums",
    "founder",
    "free",
    "friend",
    "friends",
    "ftp",
    "fuck",
    "fun",
    "fusion",
    "gadget",
    "gadgets",
    "game",
    "games",
    "gears",
    "general",
    "geographic",
    "get",
    "gettingstarted",
    "gift",
    "gifts",
    "gist",
    "git",
    "github",
    "gmail",
    "go",
    "golang",
    "goto",
    "gov",
    "graph",
    "graphs",
    "group",
    "groups",
    "guest",
    "guests",
    "guide",
    "guides",
    "hack",
    "hacks",
    "head",
    "help",
    "home",
    "homepage",
    "host",
    "hosting",
    "hostmaster",
    "hostname",
    "howto",
    "how-to",
    "how_to",
    "html",
    "htrnl",
    "http",
    "httpd",
    "https",
    "i",
    "iamges",
    "icon",
    "icons",
    "id",
    "idea",
    "ideas",
    "im",
    "image",
    "images",
    "img",
    "imap",
    "inbox",
    "inboxes",
    "index",
    "indexes",
    "info",
    "information",
    "inquiry",
    "intranet",
    "investor",
    "investors",
    "invitation",
    "invitations",
    "invite",
    "invoice",
    "invoices",
    "imac",
    "ios",
    "ipad",
    "iphone",
    "irc",
    "irnages",
    "irng",
    "is",
    "issue",
    "issues",
    "it",
    "item",
    "items",
    "java",
    "javascript",
    "job",
    "jobs",
    "join",
    "js",
    "json",
    "jump",
    "kb",
    "knowledge-base",
    "knowledgebase",
    "lab",
    "labs",
    "language",
    "languages",
    "last",
    "ldap_status",
    "ldap-status",
    "ldapstatus",
    "legal",
    "license",
    "licenses",
    "link",
    "links",
    "linux",
    "list",
    "lists",
    "livejournal",
    "lj",
    "local",
    "locale",
    "location",
    "log",
    "log-in",
    "log-out",
    "login",
    "logout",
    "logs",
    "log_in",
    "log_out",
    "m",
    "mac",
    "macos",
    "macosx",
    "mac-os",
    "mac-os-x",
    "mac_os_x",
    "mail",
    "mailer",
    "mailing",
    "main",
    "maintenance",
    "manage",
    "manager",
    "manual",
    "map",
    "maps",
    "marketing",
    "master",
    "me",
    "media",
    "member",
    "members",
    "memories",
    "memory",
    "merchandise",
    "message",
    "messages",
    "messenger",
    "mg",
    "microblog",
    "microblogs",
    "mine",
    "mis",
    "misc",
    "mms",
    "mob",
    "mobile",
    "model",
    "models",
    "money",
    "movie",
    "movies",
    "mp3",
    "mp4",
    "msg",
    "msn",
    "music",
    "mx",
    "my",
    "mymme",
    "mysql",
    "name",
    "named",
    "nan",
    "navi",
    "navigation",
    "net",
    "network",
    "networks",
    "new",
    "news",
    "newsletter",
    "nick",
    "nickname",
    "nil",
    "none",
    "notes",
    "noticias",
    "notification",
    "notifications",
    "notify",
    "ns",
    "ns1",
    "ns2",
    "ns3",
    "ns4",
    "ns5",
    "null",
    "oauth",
    "oauth-clients",
    "oauth_clients",
    "ocsp",
    "offer",
    "offers",
    "official",
    "old",
    "online",
    "openid",
    "operator",
    "option",
    "options",
    "order",
    "orders",
    "org",
    "organization",
    "organizations",
    "other",
    "overview",
    "owner",
    "owners",
    "p0rn",
    "pack",
    "page",
    "pager",
    "pages",
    "paid",
    "panel",
    "partner",
    "partnerpage",
    "partners",
    "password",
    "patch",
    "pay",
    "payment",
    "people",
    "perl",
    "person",
    "phone",
    "photo",
    "photoalbum",
    "photos",
    "php",
    "phpmyadmin",
    "phppgadmin",
    "phpredisadmin",
    "pic",
    "pics",
    "picture",
    "pictures",
    "ping",
    "pixel",
    "places",
    "plan",
    "plans",
    "plugin",
    "plugins",
    "podcasts",
    "policies",
    "policy",
    "pop",
    "pop3",
    "popular",
    "porn",
    "portal",
    "portals",
    "post",
    "postfix",
    "postmaster",
    "posts",
    "pr",
    "pr0n",
    "premium",
    "press",
    "price",
    "pricing",
    "principles",
    "print",
    "privacy",
    "privacy-policy",
    "privacypolicy",
    "privacy_policy",
    "private",
    "prod",
    "product",
    "production",
    "products",
    "profile",
    "profiles",
    "project",
    "projects",
    "promo",
    "promotions",
    "proxies",
    "proxy",
    "pub",
    "public",
    "purchase",
    "purpose",
    "put",
    "python",
    "queries",
    "query",
    "radio",
    "random",
    "ranking",
    "read",
    "reader",
    "readme",
    "recent",
    "recruit",
    "recruitment",
    "redirect",
    "register",
    "registration",
    "release",
    "remove",
    "replies",
    "report",
    "reports",
    "repositories",
    "repository",
    "req",
    "request",
    "requests",
    "research",
    "reset",
    "resolve",
    "resolver",
    "review",
    "rnail",
    "rnicrosoft",
    "roc",
    "root",
    "rss",
    "ruby",
    "rule",
    "sag",
    "sale",
    "sales",
    "sample",
    "samples",
    "sandbox",
    "save",
    "scholar",
    "school",
    "schools",
    "script",
    "scripts",
    "search",
    "secure",
    "security",
    "self",
    "seminars",
    "send",
    "server",
    "server-info",
    "server_info",
    "server-status",
    "server_status",
    "servers",
    "service",
    "services",
    "session",
    "sessions",
    "setting",
    "settings",
    "setup",
    "share",
    "shop",
    "shopping",
    "shortcut",
    "shortcuts",
    "show",
    "sign-in",
    "sign-up",
    "signin",
    "signout",
    "signup",
    "sign_in",
    "sign_up",
    "site",
    "sitemap",
    "sitemaps",
    "sitenews",
    "sites",
    "sketchup",
    "sky",
    "slash",
    "slashinvoice",
    "slut",
    "smartphone",
    "sms",
    "smtp",
    "soap",
    "software",
    "sorry",
    "source",
    "spec",
    "special",
    "spreadsheet",
    "spreadsheets",
    "sql",
    "src",
    "srntp",
    "ssh",
    "ssl",
    "ssladmin",
    "ssladministrator",
    "sslwebmaster",
    "ssytem",
    "staff",
    "stage",
    "staging",
    "start",
    "stat",
    "state",
    "static",
    "statistics",
    "stats",
    "status",
    "store",
    "stores",
    "stories",
    "style",
    "styleguide",
    "styles",
    "stylesheet",
    "stylesheets",
    "subdomain",
    "subscribe",
    "subscription",
    "subscriptions",
    "suggest",
    "suggestqueries",
    "support",
    "survey",
    "surveys",
    "surveytool",
    "svn",
    "swf",
    "syn",
    "sync",
    "syndicated",
    "sys",
    "sysadmin",
    "sysadministrator",
    "sysadmins",
    "system",
    "tablet",
    "tablets",
    "tag",
    "tags",
    "talk",
    "talkgadget",
    "task",
    "tasks",
    "team",
    "teams",
    "tech",
    "telnet",
    "term",
    "terms",
    "terms-of-service",
    "termsofservice",
    "terms_of_service",
    "test",
    "testing",
    "tests",
    "text",
    "theme",
    "themes",
    "thread",
    "threads",
    "ticket",
    "tickets",
    "tmp",
    "todo",
    "to-do",
    "to_do",
    "toml",
    "tool",
    "toolbar",
    "toolbars",
    "tools",
    "top",
    "topic",
    "topics",
    "tos",
    "tour",
    "trac",
    "translate",
    "trace",
    "translation",
    "translations",
    "translator",
    "trends",
    "tutorial",
    "tux",
    "tv",
    "twitter",
    "txt",
    "ul",
    "undef",
    "unfollow",
    "unsubscribe",
    "update",
    "updates",
    "upgrade",
    "upgrades",
    "upi",
    "upload",
    "uploads",
    "url",
    "usage",
    "user",
    "username",
    "usernames",
    "users",
    "uuid",
    "validation",
    "validations",
    "ver",
    "version",
    "video",
    "videos",
    "video-stats",
    "visitor",
    "visitors",
    "voice",
    "volunteer",
    "volunteers",
    "w",
    "watch",
    "wave",
    "weather",
    "web",
    "webdisk",
    "webhook",
    "webhooks",
    "webmail",
    "webmaster",
    "webmasters",
    "webrnail",
    "website",
    "websites",
    "welcome",
    "whm",
    "whois",
    "widget",
    "widgets",
    "wifi",
    "wiki",
    "wikis",
    "win",
    "windows",
    "word",
    "work",
    "works",
    "workshop",
    "wpad",
    "ww",
    "wws",
    "www",
    "wwws",
    "wwww",
    "xfn",
    "xhtml",
    "xhtrnl",
    "xml",
    "xmpp",
    "xpg",
    "xxx",
    "yaml",
    "year",
    "yml",
    "you",
    "yourdomain",
    "yourname",
    "yoursite",
    "yourusername"
];
var famousAccounts = [
    "10ronaldinho",
    "3gerardpique",
    "adele",
    "akshaykumar",
    "aliaa08",
    "aliciakeys",
    "amitshah",
    "andresiniesta8",
    "anushkasharma",
    "arianagrande",
    "arrahman",
    "arvindkejriwal",
    "avrillavigne",
    "barackobama",
    "bbcbreaking",
    "bbcworld",
    "beingsalmankhan",
    "billgates",
    "britneyspears",
    "brunomars",
    "bts_bighit",
    "bts_twt",
    "championsleague",
    "chrisbrown",
    "cnnbrk",
    "coldplay",
    "conanobrien",
    "cristiano",
    "danieltosh",
    "davidguetta",
    "ddlovato",
    "deepikapadukone",
    "drake",
    "elisapie",
    "ellendegeneres",
    "elonmusk",
    "eminem",
    "emmawatson",
    "fcbarcelona",
    "foxnews",
    "harry_styles",
    "hillaryclinton",
    "iamsrk",
    "ihrithik",
    "imvkohli",
    "instagram",
    "jimmyfallon",
    "jlo",
    "joebiden",
    "jtimberlake",
    "justinbieber",
    "kaka",
    "kanyewest",
    "katyperry",
    "kendalljenner",
    "kevinhart4real",
    "khloekardashian",
    "kimkardashian",
    "kingjames",
    "kourtneykardash",
    "kyliejenner",
    "ladygaga",
    "liampayne",
    "liltunechi",
    "manutd",
    "mariahcarey",
    "mileycyrus",
    "mohamadalarefe",
    "narendramodi",
    "nasa",
    "nba",
    "neymarjr",
    "nfl",
    "niallofficial",
    "nickiminaj",
    "npr",
    "nytimes",
    "onedirection",
    "oprah",
    "pink",
    "pitbull",
    "playstation",
    "pmoindia",
    "premierleague",
    "priyankachopra",
    "realdonaldtrump",
    "ricky_martin",
    "rihanna",
    "sachin_rt",
    "selenagomez",
    "shakira",
    "shawnmendes",
    "sportscenter",
    "srbachchan",
    "subhisharma100",
    "taylorswift13",
    "theeconomist",
    "twitter",
    "virendersehwag",
    "whitehouse45",
    "wizkhalifa",
    "youtube",
    "zaynmalik",
    "beyonce",
    "billieeilish",
    "leomessi",
    "natgeo",
    "nike",
    "snoopdogg",
    "taylorswift",
    "therock",
    "10downingstreet",
    "aoc",
    "carterjwm",
    "dril",
    "gretathunberg",
    "kamalaharris",
    "kremlinrussia_e",
    "potus",
    "rondesantisfl",
    "ukraine",
    "washingtonpost",
    "yousuck2020",
    "zelenskyyua"
];
var reservedSubdomains = [
    ...atpSpecific,
    ...commonlyReserved,
    ...famousAccounts
].reduce((acc, cur)=>{
    return {
        ...acc,
        [cur]: true
    };
}, {});
// ../identifier/src/handle.ts
var ensureValidHandle = (handle2)=>{
    if (!/^[a-zA-Z0-9.-]*$/.test(handle2)) throw new InvalidHandleError("Disallowed characters in handle (ASCII letters, digits, dashes, periods only)");
    if (handle2.length > 253) throw new InvalidHandleError("Handle is too long (253 chars max)");
    const labels = handle2.split(".");
    if (labels.length < 2) throw new InvalidHandleError("Handle domain needs at least two parts");
    for(let i = 0; i < labels.length; i++){
        const l = labels[i];
        if (l.length < 1) throw new InvalidHandleError("Handle parts can not be empty");
        if (l.length > 63) throw new InvalidHandleError("Handle part too long (max 63 chars)");
        if (l.endsWith("-") || l.startsWith("-")) throw new InvalidHandleError("Handle parts can not start or end with hyphens");
        if (i + 1 == labels.length && !/^[a-zA-Z]/.test(l)) throw new InvalidHandleError("Handle final component (TLD) must start with ASCII letter");
    }
};
var InvalidHandleError = class extends Error {
};
// ../identifier/src/did.ts
var ensureValidDid = (did2)=>{
    if (!/^[a-zA-Z0-9._:%-]*$/.test(did2)) throw new InvalidDidError("Disallowed characters in DID (ASCII letters, digits, and a couple other characters only)");
    const parts = did2.split(":");
    if (parts.length < 3) throw new InvalidDidError("DID requires prefix, method, and method-specific content");
    if (parts[0] != "did") throw new InvalidDidError('DID requires "did:" prefix');
    if (!/^[a-z]+$/.test(parts[1])) throw new InvalidDidError("DID method must be lower-case letters");
    if (did2.endsWith(":") || did2.endsWith("%")) throw new InvalidDidError('DID can not end with ":" or "%"');
    if (did2.length > 8192) throw new InvalidDidError("DID is far too long");
};
var InvalidDidError = class extends Error {
};
// ../nsid/src/index.ts
var NSID = class {
    constructor(nsid2){
        this.segments = [];
        ensureValidNsid(nsid2);
        this.segments = nsid2.split(".");
    }
    static parse(nsid2) {
        return new NSID(nsid2);
    }
    static create(authority, name2) {
        const segments = [
            ...authority.split(".").reverse(),
            name2
        ].join(".");
        return new NSID(segments);
    }
    static isValid(nsid2) {
        try {
            NSID.parse(nsid2);
            return true;
        } catch (e) {
            return false;
        }
    }
    get authority() {
        return this.segments.slice(0, this.segments.length - 1).reverse().join(".");
    }
    get name() {
        return this.segments.at(this.segments.length - 1);
    }
    toString() {
        return this.segments.join(".");
    }
};
var ensureValidNsid = (nsid2)=>{
    const split = nsid2.split(".");
    const toCheck = split.at(-1) === "*" ? split.slice(0, -1).join(".") : split.join(".");
    if (!/^[a-zA-Z0-9.-]*$/.test(toCheck)) throw new InvalidNsidError("Disallowed characters in NSID (ASCII letters, digits, dashes, periods only)");
    if (toCheck.length > 382) throw new InvalidNsidError("NSID is too long (382 chars max)");
    const labels = toCheck.split(".");
    if (split.length < 3) throw new InvalidNsidError("NSID needs at least three parts");
    for(let i = 0; i < labels.length; i++){
        const l = labels[i];
        if (l.length < 1) throw new InvalidNsidError("NSID parts can not be empty");
        if (l.length > 63 && i + 1 < labels.length) throw new InvalidNsidError("NSID domain part too long (max 63 chars)");
        if (l.length > 128 && i + 1 == labels.length) throw new InvalidNsidError("NSID name part too long (max 127 chars)");
        if (l.endsWith("-")) throw new InvalidNsidError("NSID parts can not end with hyphen");
        if (!/^[a-zA-Z]/.test(l)) throw new InvalidNsidError("NSID parts must start with ASCII letter");
    }
};
var InvalidNsidError = class extends Error {
};
// ../uri/src/validation.ts
var ensureValidAtUri = (uri2)=>{
    const uriParts = uri2.split("#");
    if (uriParts.length > 2) throw new Error('ATURI can have at most one "#", separating fragment out');
    const fragmentPart = uriParts[1] || null;
    uri2 = uriParts[0];
    if (!/^[a-zA-Z0-9._~:@!$&')(*+,;=%/-]*$/.test(uri2)) throw new Error("Disallowed characters in ATURI (ASCII)");
    const parts = uri2.split("/");
    if (parts.length >= 3 && (parts[0] != "at:" || parts[1].length != 0)) throw new Error('ATURI must start with "at://"');
    if (parts.length < 3) throw new Error("ATURI requires at least method and authority sections");
    try {
        ensureValidHandle(parts[2]);
    } catch  {
        try {
            ensureValidDid(parts[2]);
        } catch  {
            throw new Error("ATURI authority must be a valid handle or DID");
        }
    }
    if (parts.length >= 4) {
        if (parts[3].length == 0) throw new Error("ATURI can not have a slash after authority without a path segment");
        try {
            ensureValidNsid(parts[3]);
        } catch  {
            throw new Error("ATURI requires first path segment (if supplied) to be valid NSID");
        }
    }
    if (parts.length >= 5) {
        if (parts[4].length == 0) throw new Error("ATURI can not have a slash after collection, unless record key is provided");
    }
    if (parts.length >= 6) throw new Error("ATURI path can have at most two parts, and no trailing slash");
    if (uriParts.length >= 2 && fragmentPart == null) throw new Error("ATURI fragment must be non-empty and start with slash");
    if (fragmentPart != null) {
        if (fragmentPart.length == 0 || fragmentPart[0] != "/") throw new Error("ATURI fragment must be non-empty and start with slash");
        if (!/^\/[a-zA-Z0-9._~:@!$&')(*+,;=%[\]/-]*$/.test(fragmentPart)) throw new Error("Disallowed characters in ATURI fragment (ASCII)");
    }
    if (uri2.length > 8192) throw new Error("ATURI is far too long");
};
// ../uri/src/index.ts
var ATP_URI_REGEX = /^(at:\/\/)?((?:did:[a-z0-9:%-]+)|(?:[a-z0-9][a-z0-9.:-]*))(\/[^?#\s]*)?(\?[^#\s]+)?(#[^\s]+)?$/i;
var RELATIVE_REGEX = /^(\/[^?#\s]*)?(\?[^#\s]+)?(#[^\s]+)?$/i;
var AtUri = class {
    constructor(uri2, base3){
        let parsed;
        if (base3) {
            parsed = parse(base3);
            if (!parsed) throw new Error(`Invalid at uri: ${base3}`);
            const relativep = parseRelative(uri2);
            if (!relativep) throw new Error(`Invalid path: ${uri2}`);
            Object.assign(parsed, relativep);
        } else {
            parsed = parse(uri2);
            if (!parsed) throw new Error(`Invalid at uri: ${uri2}`);
        }
        this.hash = parsed.hash;
        this.host = parsed.host;
        this.pathname = parsed.pathname;
        this.searchParams = parsed.searchParams;
    }
    static make(handleOrDid, collection, rkey) {
        let str = handleOrDid;
        if (collection) str += "/" + collection;
        if (rkey) str += "/" + rkey;
        return new AtUri(str);
    }
    get protocol() {
        return "at:";
    }
    get origin() {
        return `at://${this.host}`;
    }
    get hostname() {
        return this.host;
    }
    set hostname(v) {
        this.host = v;
    }
    get search() {
        return this.searchParams.toString();
    }
    set search(v) {
        this.searchParams = new URLSearchParams(v);
    }
    get collection() {
        return this.pathname.split("/").filter(Boolean)[0] || "";
    }
    set collection(v) {
        const parts = this.pathname.split("/").filter(Boolean);
        parts[0] = v;
        this.pathname = parts.join("/");
    }
    get rkey() {
        return this.pathname.split("/").filter(Boolean)[1] || "";
    }
    set rkey(v) {
        const parts = this.pathname.split("/").filter(Boolean);
        if (!parts[0]) parts[0] = "undefined";
        parts[1] = v;
        this.pathname = parts.join("/");
    }
    get href() {
        return this.toString();
    }
    toString() {
        let path = this.pathname || "/";
        if (!path.startsWith("/")) path = `/${path}`;
        let qs = this.searchParams.toString();
        if (qs && !qs.startsWith("?")) qs = `?${qs}`;
        let hash = this.hash;
        if (hash && !hash.startsWith("#")) hash = `#${hash}`;
        return `at://${this.host}${path}${qs}${hash}`;
    }
};
function parse(str) {
    const match = ATP_URI_REGEX.exec(str);
    if (match) return {
        hash: match[5] || "",
        host: match[2] || "",
        pathname: match[3] || "",
        searchParams: new URLSearchParams(match[4] || "")
    };
    return void 0;
}
function parseRelative(str) {
    const match = RELATIVE_REGEX.exec(str);
    if (match) return {
        hash: match[3] || "",
        pathname: match[1] || "",
        searchParams: new URLSearchParams(match[2] || "")
    };
    return void 0;
}
// ../lexicon/src/types.ts
var lexBoolean = mod.object({
    type: mod.literal("boolean"),
    description: mod.string().optional(),
    default: mod.boolean().optional(),
    const: mod.boolean().optional()
});
var lexInteger = mod.object({
    type: mod.literal("integer"),
    description: mod.string().optional(),
    default: mod.number().int().optional(),
    minimum: mod.number().int().optional(),
    maximum: mod.number().int().optional(),
    enum: mod.number().int().array().optional(),
    const: mod.number().int().optional()
});
var lexStringFormat = mod.enum([
    "datetime",
    "uri",
    "at-uri",
    "did",
    "handle",
    "at-identifier",
    "nsid",
    "cid"
]);
var lexString = mod.object({
    type: mod.literal("string"),
    format: lexStringFormat.optional(),
    description: mod.string().optional(),
    default: mod.string().optional(),
    minLength: mod.number().int().optional(),
    maxLength: mod.number().int().optional(),
    minGraphemes: mod.number().int().optional(),
    maxGraphemes: mod.number().int().optional(),
    enum: mod.string().array().optional(),
    const: mod.string().optional(),
    knownValues: mod.string().array().optional()
});
var lexUnknown = mod.object({
    type: mod.literal("unknown"),
    description: mod.string().optional()
});
var lexPrimitive = mod.union([
    lexBoolean,
    lexInteger,
    lexString,
    lexUnknown
]);
var lexBytes = mod.object({
    type: mod.literal("bytes"),
    description: mod.string().optional(),
    maxLength: mod.number().optional(),
    minLength: mod.number().optional()
});
var lexCidLink = mod.object({
    type: mod.literal("cid-link"),
    description: mod.string().optional()
});
var lexIpldType = mod.union([
    lexBytes,
    lexCidLink
]);
var lexRef = mod.object({
    type: mod.literal("ref"),
    description: mod.string().optional(),
    ref: mod.string()
});
var lexRefUnion = mod.object({
    type: mod.literal("union"),
    description: mod.string().optional(),
    refs: mod.string().array(),
    closed: mod.boolean().optional()
});
var lexRefVariant = mod.union([
    lexRef,
    lexRefUnion
]);
var lexBlob = mod.object({
    type: mod.literal("blob"),
    description: mod.string().optional(),
    accept: mod.string().array().optional(),
    maxSize: mod.number().optional()
});
var lexArray = mod.object({
    type: mod.literal("array"),
    description: mod.string().optional(),
    items: mod.union([
        lexPrimitive,
        lexIpldType,
        lexBlob,
        lexRefVariant
    ]),
    minLength: mod.number().int().optional(),
    maxLength: mod.number().int().optional()
});
var lexPrimitiveArray = lexArray.merge(mod.object({
    items: lexPrimitive
}));
var lexToken = mod.object({
    type: mod.literal("token"),
    description: mod.string().optional()
});
var lexObject = mod.object({
    type: mod.literal("object"),
    description: mod.string().optional(),
    required: mod.string().array().optional(),
    nullable: mod.string().array().optional(),
    properties: mod.record(mod.union([
        lexRefVariant,
        lexIpldType,
        lexArray,
        lexBlob,
        lexPrimitive
    ])).optional()
});
var lexXrpcParameters = mod.object({
    type: mod.literal("params"),
    description: mod.string().optional(),
    required: mod.string().array().optional(),
    properties: mod.record(mod.union([
        lexPrimitive,
        lexPrimitiveArray
    ]))
});
var lexXrpcBody = mod.object({
    description: mod.string().optional(),
    encoding: mod.string(),
    schema: mod.union([
        lexRefVariant,
        lexObject
    ]).optional()
});
var lexXrpcSubscriptionMessage = mod.object({
    description: mod.string().optional(),
    schema: mod.union([
        lexRefVariant,
        lexObject
    ]).optional()
});
var lexXrpcError = mod.object({
    name: mod.string(),
    description: mod.string().optional()
});
var lexXrpcQuery = mod.object({
    type: mod.literal("query"),
    description: mod.string().optional(),
    parameters: lexXrpcParameters.optional(),
    output: lexXrpcBody.optional(),
    errors: lexXrpcError.array().optional()
});
var lexXrpcProcedure = mod.object({
    type: mod.literal("procedure"),
    description: mod.string().optional(),
    parameters: lexXrpcParameters.optional(),
    input: lexXrpcBody.optional(),
    output: lexXrpcBody.optional(),
    errors: lexXrpcError.array().optional()
});
var lexXrpcSubscription = mod.object({
    type: mod.literal("subscription"),
    description: mod.string().optional(),
    parameters: lexXrpcParameters.optional(),
    message: lexXrpcSubscriptionMessage.optional(),
    infos: lexXrpcError.array().optional(),
    errors: lexXrpcError.array().optional()
});
var lexRecord = mod.object({
    type: mod.literal("record"),
    description: mod.string().optional(),
    key: mod.string().optional(),
    record: lexObject
});
var lexUserType = mod.union([
    lexRecord,
    lexXrpcQuery,
    lexXrpcProcedure,
    lexXrpcSubscription,
    lexBlob,
    lexArray,
    lexToken,
    lexObject,
    lexBoolean,
    lexInteger,
    lexString,
    lexBytes,
    lexCidLink,
    lexUnknown
]);
var lexiconDoc = mod.object({
    lexicon: mod.literal(1),
    id: mod.string().refine((v)=>NSID.isValid(v), {
        message: "Must be a valid NSID"
    }),
    revision: mod.number().optional(),
    description: mod.string().optional(),
    defs: mod.record(lexUserType)
}).superRefine((doc, ctx)=>{
    for(const defId in doc.defs){
        const def2 = doc.defs[defId];
        if (defId !== "main" && (def2.type === "record" || def2.type === "procedure" || def2.type === "query" || def2.type === "subscription")) ctx.addIssue({
            code: mod.ZodIssueCode.custom,
            message: `Records, procedures, queries, and subscriptions must be the main definition.`
        });
    }
});
function isObj(obj) {
    return obj !== null && typeof obj === "object";
}
function hasProp(data, prop) {
    return prop in data;
}
var discriminatedObject = mod.object({
    $type: mod.string()
});
function isDiscriminatedObject(value) {
    return discriminatedObject.safeParse(value).success;
}
var LexiconDocMalformedError = class extends Error {
    constructor(message, schemaDef, issues){
        super(message);
        this.schemaDef = schemaDef;
        this.issues = issues;
        this.schemaDef = schemaDef;
        this.issues = issues;
    }
};
var ValidationError = class extends Error {
};
var InvalidLexiconError = class extends Error {
};
var LexiconDefNotFoundError = class extends Error {
};
// ../lexicon/src/validators/formats.ts
var import_iso_datestring_validator = __toESM(require_dist());
function datetime(path, value) {
    try {
        if (!(0, import_iso_datestring_validator.isValidISODateString)(value)) throw new Error();
    } catch  {
        return {
            success: false,
            error: new ValidationError(`${path} must be an iso8601 formatted datetime`)
        };
    }
    return {
        success: true,
        value
    };
}
function uri(path, value) {
    const isUri = value.match(/^\w+:(?:\/\/)?[^\s/][^\s]*$/) !== null;
    if (!isUri) return {
        success: false,
        error: new ValidationError(`${path} must be a uri`)
    };
    return {
        success: true,
        value
    };
}
function atUri(path, value) {
    try {
        ensureValidAtUri(value);
    } catch  {
        return {
            success: false,
            error: new ValidationError(`${path} must be a valid at-uri`)
        };
    }
    return {
        success: true,
        value
    };
}
function did(path, value) {
    try {
        ensureValidDid(value);
    } catch  {
        return {
            success: false,
            error: new ValidationError(`${path} must be a valid did`)
        };
    }
    return {
        success: true,
        value
    };
}
function handle(path, value) {
    try {
        ensureValidHandle(value);
    } catch  {
        return {
            success: false,
            error: new ValidationError(`${path} must be a valid handle`)
        };
    }
    return {
        success: true,
        value
    };
}
function atIdentifier(path, value) {
    const isDid = did(path, value);
    if (!isDid.success) {
        const isHandle2 = handle(path, value);
        if (!isHandle2.success) return {
            success: false,
            error: new ValidationError(`${path} must be a valid did or a handle`)
        };
    }
    return {
        success: true,
        value
    };
}
function nsid(path, value) {
    try {
        ensureValidNsid(value);
    } catch  {
        return {
            success: false,
            error: new ValidationError(`${path} must be a valid nsid`)
        };
    }
    return {
        success: true,
        value
    };
}
function cid(path, value) {
    try {
        CID.parse(value);
    } catch  {
        return {
            success: false,
            error: new ValidationError(`${path} must be a cid string`)
        };
    }
    return {
        success: true,
        value
    };
}
// ../lexicon/src/validators/primitives.ts
function validate(lexicons2, path, def2, value) {
    switch(def2.type){
        case "boolean":
            return boolean(lexicons2, path, def2, value);
        case "integer":
            return integer(lexicons2, path, def2, value);
        case "string":
            return string2(lexicons2, path, def2, value);
        case "bytes":
            return bytes(lexicons2, path, def2, value);
        case "cid-link":
            return cidLink(lexicons2, path, def2, value);
        case "unknown":
            return unknown(lexicons2, path, def2, value);
        default:
            return {
                success: false,
                error: new ValidationError(`Unexpected lexicon type: ${def2.type}`)
            };
    }
}
function boolean(lexicons2, path, def2, value) {
    def2;
    const type = typeof value;
    if (type === "undefined") {
        if (typeof def2.default === "boolean") return {
            success: true,
            value: def2.default
        };
        return {
            success: false,
            error: new ValidationError(`${path} must be a boolean`)
        };
    } else if (type !== "boolean") return {
        success: false,
        error: new ValidationError(`${path} must be a boolean`)
    };
    if (typeof def2.const === "boolean") {
        if (value !== def2.const) return {
            success: false,
            error: new ValidationError(`${path} must be ${def2.const}`)
        };
    }
    return {
        success: true,
        value
    };
}
function integer(lexicons2, path, def2, value) {
    def2;
    const type = typeof value;
    if (type === "undefined") {
        if (typeof def2.default === "number") return {
            success: true,
            value: def2.default
        };
        return {
            success: false,
            error: new ValidationError(`${path} must be an integer`)
        };
    } else if (!Number.isInteger(value)) return {
        success: false,
        error: new ValidationError(`${path} must be an integer`)
    };
    if (typeof def2.const === "number") {
        if (value !== def2.const) return {
            success: false,
            error: new ValidationError(`${path} must be ${def2.const}`)
        };
    }
    if (Array.isArray(def2.enum)) {
        if (!def2.enum.includes(value)) return {
            success: false,
            error: new ValidationError(`${path} must be one of (${def2.enum.join("|")})`)
        };
    }
    if (typeof def2.maximum === "number") {
        if (value > def2.maximum) return {
            success: false,
            error: new ValidationError(`${path} can not be greater than ${def2.maximum}`)
        };
    }
    if (typeof def2.minimum === "number") {
        if (value < def2.minimum) return {
            success: false,
            error: new ValidationError(`${path} can not be less than ${def2.minimum}`)
        };
    }
    return {
        success: true,
        value
    };
}
function string2(lexicons2, path, def2, value) {
    def2;
    if (typeof value === "undefined") {
        if (typeof def2.default === "string") return {
            success: true,
            value: def2.default
        };
        return {
            success: false,
            error: new ValidationError(`${path} must be a string`)
        };
    } else if (typeof value !== "string") return {
        success: false,
        error: new ValidationError(`${path} must be a string`)
    };
    if (typeof def2.const === "string") {
        if (value !== def2.const) return {
            success: false,
            error: new ValidationError(`${path} must be ${def2.const}`)
        };
    }
    if (Array.isArray(def2.enum)) {
        if (!def2.enum.includes(value)) return {
            success: false,
            error: new ValidationError(`${path} must be one of (${def2.enum.join("|")})`)
        };
    }
    if (typeof def2.maxLength === "number") {
        if (utf8Len(value) > def2.maxLength) return {
            success: false,
            error: new ValidationError(`${path} must not be longer than ${def2.maxLength} characters`)
        };
    }
    if (typeof def2.minLength === "number") {
        if (utf8Len(value) < def2.minLength) return {
            success: false,
            error: new ValidationError(`${path} must not be shorter than ${def2.minLength} characters`)
        };
    }
    if (typeof def2.maxGraphemes === "number") {
        if (graphemeLen(value) > def2.maxGraphemes) return {
            success: false,
            error: new ValidationError(`${path} must not be longer than ${def2.maxGraphemes} graphemes`)
        };
    }
    if (typeof def2.minGraphemes === "number") {
        if (graphemeLen(value) < def2.minGraphemes) return {
            success: false,
            error: new ValidationError(`${path} must not be shorter than ${def2.minGraphemes} graphemes`)
        };
    }
    if (typeof def2.format === "string") switch(def2.format){
        case "datetime":
            return datetime(path, value);
        case "uri":
            return uri(path, value);
        case "at-uri":
            return atUri(path, value);
        case "did":
            return did(path, value);
        case "handle":
            return handle(path, value);
        case "at-identifier":
            return atIdentifier(path, value);
        case "nsid":
            return nsid(path, value);
        case "cid":
            return cid(path, value);
    }
    return {
        success: true,
        value
    };
}
function bytes(lexicons2, path, def2, value) {
    def2;
    if (!value || !(value instanceof Uint8Array)) return {
        success: false,
        error: new ValidationError(`${path} must be a byte array`)
    };
    if (typeof def2.maxLength === "number") {
        if (value.byteLength > def2.maxLength) return {
            success: false,
            error: new ValidationError(`${path} must not be larger than ${def2.maxLength} bytes`)
        };
    }
    if (typeof def2.minLength === "number") {
        if (value.byteLength < def2.minLength) return {
            success: false,
            error: new ValidationError(`${path} must not be smaller than ${def2.minLength} bytes`)
        };
    }
    return {
        success: true,
        value
    };
}
function cidLink(lexicons2, path, def2, value) {
    if (CID.asCID(value) === null) return {
        success: false,
        error: new ValidationError(`${path} must be a CID`)
    };
    return {
        success: true,
        value
    };
}
function unknown(lexicons2, path, def2, value) {
    if (!value || typeof value !== "object") return {
        success: false,
        error: new ValidationError(`${path} must be an object`)
    };
    return {
        success: true,
        value
    };
}
// ../lexicon/src/blob-refs.ts
var typedJsonBlobRef = mod.object({
    $type: mod.literal("blob"),
    ref: schema.cid,
    mimeType: mod.string(),
    size: mod.number()
}).strict();
var untypedJsonBlobRef = mod.object({
    cid: mod.string(),
    mimeType: mod.string()
}).strict();
var jsonBlobRef = mod.union([
    typedJsonBlobRef,
    untypedJsonBlobRef
]);
var BlobRef = class {
    constructor(ref, mimeType, size, original){
        this.ref = ref;
        this.mimeType = mimeType;
        this.size = size;
        this.original = original ?? {
            $type: "blob",
            ref,
            mimeType,
            size
        };
    }
    static asBlobRef(obj) {
        if (check_exports.is(obj, jsonBlobRef)) return BlobRef.fromJsonRef(obj);
        return null;
    }
    static fromJsonRef(json) {
        if (check_exports.is(json, typedJsonBlobRef)) return new BlobRef(json.ref, json.mimeType, json.size);
        else return new BlobRef(CID.parse(json.cid), json.mimeType, -1, json);
    }
    ipld() {
        return {
            $type: "blob",
            ref: this.ref,
            mimeType: this.mimeType,
            size: this.size
        };
    }
    toJSON() {
        return ipldToJson(this.ipld());
    }
};
// ../lexicon/src/validators/blob.ts
function blob(lexicons2, path, def2, value) {
    if (!value || !(value instanceof BlobRef)) return {
        success: false,
        error: new ValidationError(`${path} should be a blob ref`)
    };
    return {
        success: true,
        value
    };
}
// ../lexicon/src/validators/complex.ts
function validate2(lexicons2, path, def2, value) {
    switch(def2.type){
        case "boolean":
            return boolean(lexicons2, path, def2, value);
        case "integer":
            return integer(lexicons2, path, def2, value);
        case "string":
            return string2(lexicons2, path, def2, value);
        case "bytes":
            return bytes(lexicons2, path, def2, value);
        case "cid-link":
            return cidLink(lexicons2, path, def2, value);
        case "unknown":
            return unknown(lexicons2, path, def2, value);
        case "object":
            return object(lexicons2, path, def2, value);
        case "array":
            return array(lexicons2, path, def2, value);
        case "blob":
            return blob(lexicons2, path, def2, value);
        default:
            return {
                success: false,
                error: new ValidationError(`Unexpected lexicon type: ${def2.type}`)
            };
    }
}
function array(lexicons2, path, def2, value) {
    if (!Array.isArray(value)) return {
        success: false,
        error: new ValidationError(`${path} must be an array`)
    };
    if (typeof def2.maxLength === "number") {
        if (value.length > def2.maxLength) return {
            success: false,
            error: new ValidationError(`${path} must not have more than ${def2.maxLength} elements`)
        };
    }
    if (typeof def2.minLength === "number") {
        if (value.length < def2.minLength) return {
            success: false,
            error: new ValidationError(`${path} must not have fewer than ${def2.minLength} elements`)
        };
    }
    const itemsDef = def2.items;
    for(let i = 0; i < value.length; i++){
        const itemValue = value[i];
        const itemPath = `${path}/${i}`;
        const res = validateOneOf(lexicons2, itemPath, itemsDef, itemValue);
        if (!res.success) return res;
    }
    return {
        success: true,
        value
    };
}
function object(lexicons2, path, def2, value) {
    def2;
    if (!value || typeof value !== "object") return {
        success: false,
        error: new ValidationError(`${path} must be an object`)
    };
    const requiredProps = new Set(def2.required);
    const nullableProps = new Set(def2.nullable);
    let resultValue = value;
    if (typeof def2.properties === "object") for(const key in def2.properties){
        if (value[key] === null && nullableProps.has(key)) continue;
        const propDef = def2.properties[key];
        const propPath = `${path}/${key}`;
        const validated = validateOneOf(lexicons2, propPath, propDef, value[key]);
        const propValue = validated.success ? validated.value : value[key];
        const propIsUndefined = typeof propValue === "undefined";
        if (propIsUndefined && requiredProps.has(key)) return {
            success: false,
            error: new ValidationError(`${path} must have the property "${key}"`)
        };
        else if (!propIsUndefined && !validated.success) return validated;
        if (propValue !== value[key]) {
            if (resultValue === value) resultValue = {
                ...value
            };
            resultValue[key] = propValue;
        }
    }
    return {
        success: true,
        value: resultValue
    };
}
// ../lexicon/src/util.ts
function toLexUri(str, baseUri) {
    if (str.startsWith("lex:")) return str;
    if (str.startsWith("#")) {
        if (!baseUri) throw new Error(`Unable to resolve uri without anchor: ${str}`);
        return `${baseUri}${str}`;
    }
    return `lex:${str}`;
}
function validateOneOf(lexicons2, path, def2, value, mustBeObj = false) {
    let error;
    let concreteDefs;
    if (def2.type === "union") {
        if (!isDiscriminatedObject(value)) return {
            success: false,
            error: new ValidationError(`${path} must be an object which includes the "$type" property`)
        };
        if (!def2.refs.includes(toLexUri(value.$type))) {
            if (def2.closed) return {
                success: false,
                error: new ValidationError(`${path} $type must be one of ${def2.refs.join(", ")}`)
            };
            return {
                success: true,
                value
            };
        } else concreteDefs = toConcreteTypes(lexicons2, {
            type: "ref",
            ref: value.$type
        });
    } else concreteDefs = toConcreteTypes(lexicons2, def2);
    for (const concreteDef of concreteDefs){
        const result = mustBeObj ? object(lexicons2, path, concreteDef, value) : validate2(lexicons2, path, concreteDef, value);
        if (result.success) return result;
        error ?? (error = result.error);
    }
    if (concreteDefs.length > 1) return {
        success: false,
        error: new ValidationError(`${path} did not match any of the expected definitions`)
    };
    return {
        success: false,
        error
    };
}
function assertValidOneOf(lexicons2, path, def2, value, mustBeObj = false) {
    const res = validateOneOf(lexicons2, path, def2, value, mustBeObj);
    if (!res.success) throw res.error;
    return res.value;
}
function toConcreteTypes(lexicons2, def2) {
    if (def2.type === "ref") return [
        lexicons2.getDefOrThrow(def2.ref)
    ];
    else if (def2.type === "union") return def2.refs.map((ref)=>lexicons2.getDefOrThrow(ref)).flat();
    else return [
        def2
    ];
}
// ../lexicon/src/validators/xrpc.ts
function params(lexicons2, path, def2, val) {
    const value = val && typeof val === "object" ? val : {};
    const requiredProps = new Set(def2.required ?? []);
    let resultValue = value;
    if (typeof def2.properties === "object") for(const key in def2.properties){
        const propDef = def2.properties[key];
        const validated = propDef.type === "array" ? array(lexicons2, key, propDef, value[key]) : validate(lexicons2, key, propDef, value[key]);
        const propValue = validated.success ? validated.value : value[key];
        const propIsUndefined = typeof propValue === "undefined";
        if (propIsUndefined && requiredProps.has(key)) return {
            success: false,
            error: new ValidationError(`${path} must have the property "${key}"`)
        };
        else if (!propIsUndefined && !validated.success) return validated;
        if (propValue !== value[key]) {
            if (resultValue === value) resultValue = {
                ...value
            };
            resultValue[key] = propValue;
        }
    }
    return {
        success: true,
        value: resultValue
    };
}
// ../lexicon/src/validation.ts
function assertValidRecord(lexicons2, def2, value) {
    const res = object(lexicons2, "Record", def2.record, value);
    if (!res.success) throw res.error;
    return res.value;
}
function assertValidXrpcParams(lexicons2, def2, value) {
    if (def2.parameters) {
        const res = params(lexicons2, "Params", def2.parameters, value);
        if (!res.success) throw res.error;
        return res.value;
    }
}
function assertValidXrpcInput(lexicons2, def2, value) {
    if (def2.input?.schema) return assertValidOneOf(lexicons2, "Input", def2.input.schema, value, true);
}
function assertValidXrpcOutput(lexicons2, def2, value) {
    if (def2.output?.schema) return assertValidOneOf(lexicons2, "Output", def2.output.schema, value, true);
}
function assertValidXrpcMessage(lexicons2, def2, value) {
    if (def2.message?.schema) return assertValidOneOf(lexicons2, "Message", def2.message.schema, value, true);
}
// ../lexicon/src/lexicons.ts
var Lexicons = class {
    constructor(docs){
        this.docs = /* @__PURE__ */ new Map();
        this.defs = /* @__PURE__ */ new Map();
        if (docs?.length) for (const doc of docs)this.add(doc);
    }
    add(doc) {
        try {
            lexiconDoc.parse(doc);
        } catch (e) {
            if (e instanceof ZodError) throw new LexiconDocMalformedError(`Failed to parse schema definition ${doc.id}`, doc, e.issues);
            else throw e;
        }
        const validatedDoc = doc;
        const uri2 = toLexUri(validatedDoc.id);
        if (this.docs.has(uri2)) throw new Error(`${uri2} has already been registered`);
        resolveRefUris(validatedDoc, uri2);
        this.docs.set(uri2, validatedDoc);
        for (const [defUri, def2] of iterDefs(validatedDoc))this.defs.set(defUri, def2);
    }
    remove(uri2) {
        uri2 = toLexUri(uri2);
        const doc = this.docs.get(uri2);
        if (!doc) throw new Error(`Unable to remove "${uri2}": does not exist`);
        for (const [defUri, _def] of iterDefs(doc))this.defs.delete(defUri);
        this.docs.delete(uri2);
    }
    get(uri2) {
        uri2 = toLexUri(uri2);
        return this.docs.get(uri2);
    }
    getDef(uri2) {
        uri2 = toLexUri(uri2);
        return this.defs.get(uri2);
    }
    getDefOrThrow(uri2, types) {
        const def2 = this.getDef(uri2);
        if (!def2) throw new LexiconDefNotFoundError(`Lexicon not found: ${uri2}`);
        if (types && !types.includes(def2.type)) throw new InvalidLexiconError(`Not a ${types.join(" or ")} lexicon: ${uri2}`);
        return def2;
    }
    validate(lexUri, value) {
        lexUri = toLexUri(lexUri);
        const def2 = this.getDefOrThrow(lexUri, [
            "record",
            "object"
        ]);
        if (!isObj(value)) throw new ValidationError(`Value must be an object`);
        if (def2.type === "record") return object(this, "Record", def2.record, value);
        else if (def2.type === "object") return object(this, "Object", def2, value);
        else throw new InvalidLexiconError("Definition must be a record or object");
    }
    assertValidRecord(lexUri, value) {
        lexUri = toLexUri(lexUri);
        const def2 = this.getDefOrThrow(lexUri, [
            "record"
        ]);
        if (!isObj(value)) throw new ValidationError(`Record must be an object`);
        if (!hasProp(value, "$type") || typeof value.$type !== "string") throw new ValidationError(`Record/$type must be a string`);
        const $type = value.$type || "";
        if (toLexUri($type) !== lexUri) throw new ValidationError(`Invalid $type: must be ${lexUri}, got ${$type}`);
        return assertValidRecord(this, def2, value);
    }
    assertValidXrpcParams(lexUri, value) {
        lexUri = toLexUri(lexUri);
        const def2 = this.getDefOrThrow(lexUri, [
            "query",
            "procedure",
            "subscription"
        ]);
        return assertValidXrpcParams(this, def2, value);
    }
    assertValidXrpcInput(lexUri, value) {
        lexUri = toLexUri(lexUri);
        const def2 = this.getDefOrThrow(lexUri, [
            "procedure"
        ]);
        return assertValidXrpcInput(this, def2, value);
    }
    assertValidXrpcOutput(lexUri, value) {
        lexUri = toLexUri(lexUri);
        const def2 = this.getDefOrThrow(lexUri, [
            "query",
            "procedure"
        ]);
        return assertValidXrpcOutput(this, def2, value);
    }
    assertValidXrpcMessage(lexUri, value) {
        lexUri = toLexUri(lexUri);
        const def2 = this.getDefOrThrow(lexUri, [
            "subscription"
        ]);
        return assertValidXrpcMessage(this, def2, value);
    }
    resolveLexUri(lexUri, ref) {
        lexUri = toLexUri(lexUri);
        return toLexUri(ref, lexUri);
    }
};
function* iterDefs(doc) {
    for(const defId in doc.defs){
        yield [
            `lex:${doc.id}#${defId}`,
            doc.defs[defId]
        ];
        if (defId === "main") yield [
            `lex:${doc.id}`,
            doc.defs[defId]
        ];
    }
}
function resolveRefUris(obj, baseUri) {
    for(const k in obj){
        if (obj.type === "ref") obj.ref = toLexUri(obj.ref, baseUri);
        else if (obj.type === "union") obj.refs = obj.refs.map((ref)=>toLexUri(ref, baseUri));
        else if (Array.isArray(obj[k])) obj[k] = obj[k].map((item)=>{
            if (typeof item === "string") return item.startsWith("#") ? toLexUri(item, baseUri) : item;
            else if (item && typeof item === "object") return resolveRefUris(item, baseUri);
            return item;
        });
        else if (obj[k] && typeof obj[k] === "object") obj[k] = resolveRefUris(obj[k], baseUri);
    }
    return obj;
}
// ../lexicon/src/serialize.ts
var lexToIpld = (val)=>{
    if (Array.isArray(val)) return val.map((item)=>lexToIpld(item));
    if (val && typeof val === "object") {
        if (val instanceof BlobRef) return val.original;
        if (CID.asCID(val) || val instanceof Uint8Array) return val;
        const toReturn = {};
        for (const key of Object.keys(val))toReturn[key] = lexToIpld(val[key]);
        return toReturn;
    }
    return val;
};
var ipldToLex = (val)=>{
    if (Array.isArray(val)) return val.map((item)=>ipldToLex(item));
    if (val && typeof val === "object") {
        if ((val["$type"] === "blob" || typeof val["cid"] === "string" && typeof val["mimeType"] === "string") && check_exports.is(val, jsonBlobRef)) return BlobRef.fromJsonRef(val);
        if (CID.asCID(val) || val instanceof Uint8Array) return val;
        const toReturn = {};
        for (const key of Object.keys(val))toReturn[key] = ipldToLex(val[key]);
        return toReturn;
    }
    return val;
};
var lexToJson = (val)=>{
    return ipldToJson(lexToIpld(val));
};
var stringifyLex = (val)=>{
    return JSON.stringify(lexToJson(val));
};
var jsonToLex = (val)=>{
    return ipldToLex(jsonToIpld(val));
};
var jsonStringToLex = (val)=>{
    return jsonToLex(JSON.parse(val));
};
// ../xrpc/src/types.ts
var errorResponseBody = mod.object({
    error: mod.string().optional(),
    message: mod.string().optional()
});
var ResponseType = /* @__PURE__ */ ((ResponseType2)=>{
    ResponseType2[ResponseType2["Unknown"] = 1] = "Unknown";
    ResponseType2[ResponseType2["InvalidResponse"] = 2] = "InvalidResponse";
    ResponseType2[ResponseType2["Success"] = 200] = "Success";
    ResponseType2[ResponseType2["InvalidRequest"] = 400] = "InvalidRequest";
    ResponseType2[ResponseType2["AuthRequired"] = 401] = "AuthRequired";
    ResponseType2[ResponseType2["Forbidden"] = 403] = "Forbidden";
    ResponseType2[ResponseType2["XRPCNotSupported"] = 404] = "XRPCNotSupported";
    ResponseType2[ResponseType2["PayloadTooLarge"] = 413] = "PayloadTooLarge";
    ResponseType2[ResponseType2["RateLimitExceeded"] = 429] = "RateLimitExceeded";
    ResponseType2[ResponseType2["InternalServerError"] = 500] = "InternalServerError";
    ResponseType2[ResponseType2["MethodNotImplemented"] = 501] = "MethodNotImplemented";
    ResponseType2[ResponseType2["UpstreamFailure"] = 502] = "UpstreamFailure";
    ResponseType2[ResponseType2["NotEnoughResouces"] = 503] = "NotEnoughResouces";
    ResponseType2[ResponseType2["UpstreamTimeout"] = 504] = "UpstreamTimeout";
    return ResponseType2;
})(ResponseType || {});
var ResponseTypeNames = {
    [2 /* InvalidResponse */ ]: "InvalidResponse",
    [200 /* Success */ ]: "Success",
    [400 /* InvalidRequest */ ]: "InvalidRequest",
    [401 /* AuthRequired */ ]: "AuthenticationRequired",
    [403 /* Forbidden */ ]: "Forbidden",
    [404 /* XRPCNotSupported */ ]: "XRPCNotSupported",
    [413 /* PayloadTooLarge */ ]: "PayloadTooLarge",
    [429 /* RateLimitExceeded */ ]: "RateLimitExceeded",
    [500 /* InternalServerError */ ]: "InternalServerError",
    [501 /* MethodNotImplemented */ ]: "MethodNotImplemented",
    [502 /* UpstreamFailure */ ]: "UpstreamFailure",
    [503 /* NotEnoughResouces */ ]: "NotEnoughResouces",
    [504 /* UpstreamTimeout */ ]: "UpstreamTimeout"
};
var ResponseTypeStrings = {
    [2 /* InvalidResponse */ ]: "Invalid Response",
    [200 /* Success */ ]: "Success",
    [400 /* InvalidRequest */ ]: "Invalid Request",
    [401 /* AuthRequired */ ]: "Authentication Required",
    [403 /* Forbidden */ ]: "Forbidden",
    [404 /* XRPCNotSupported */ ]: "XRPC Not Supported",
    [413 /* PayloadTooLarge */ ]: "Payload Too Large",
    [429 /* RateLimitExceeded */ ]: "Rate Limit Exceeded",
    [500 /* InternalServerError */ ]: "Internal Server Error",
    [501 /* MethodNotImplemented */ ]: "Method Not Implemented",
    [502 /* UpstreamFailure */ ]: "Upstream Failure",
    [503 /* NotEnoughResouces */ ]: "Not Enough Resouces",
    [504 /* UpstreamTimeout */ ]: "Upstream Timeout"
};
var XRPCResponse = class {
    constructor(data, headers){
        this.data = data;
        this.headers = headers;
        this.success = true;
    }
};
var XRPCError = class extends Error {
    constructor(status, error, message){
        super(message || error || ResponseTypeStrings[status]);
        this.status = status;
        this.error = error;
        this.success = false;
        if (!this.error) this.error = ResponseTypeNames[status];
    }
};
var XRPCInvalidResponseError = class extends XRPCError {
    constructor(lexiconNsid, validationError, responseBody){
        super(2 /* InvalidResponse */ , ResponseTypeStrings[2 /* InvalidResponse */ ], `The server gave an invalid response and may be out of date.`);
        this.lexiconNsid = lexiconNsid;
        this.validationError = validationError;
        this.responseBody = responseBody;
    }
};
// ../xrpc/src/util.ts
function getMethodSchemaHTTPMethod(schema2) {
    if (schema2.type === "procedure") return "post";
    return "get";
}
function constructMethodCallUri(nsid2, schema2, serviceUri, params2) {
    const uri2 = new URL(serviceUri);
    uri2.pathname = `/xrpc/${nsid2}`;
    if (params2) for (const [key, value] of Object.entries(params2)){
        const paramSchema = schema2.parameters?.properties?.[key];
        if (!paramSchema) throw new Error(`Invalid query parameter: ${key}`);
        if (value !== void 0) {
            if (paramSchema.type === "array") {
                const vals = [];
                vals.concat(value).forEach((val)=>{
                    uri2.searchParams.append(key, encodeQueryParam(paramSchema.items.type, val));
                });
            } else uri2.searchParams.set(key, encodeQueryParam(paramSchema.type, value));
        }
    }
    return uri2.toString();
}
function encodeQueryParam(type, value) {
    if (type === "string" || type === "unknown") return String(value);
    if (type === "float") return String(Number(value));
    else if (type === "integer") return String(Number(value) | 0);
    else if (type === "boolean") return value ? "true" : "false";
    else if (type === "datetime") {
        if (value instanceof Date) return value.toISOString();
        return String(value);
    }
    throw new Error(`Unsupported query param type: ${type}`);
}
function constructMethodCallHeaders(schema2, data, opts) {
    const headers = opts?.headers || {};
    if (schema2.type === "procedure") {
        if (opts?.encoding) headers["Content-Type"] = opts.encoding;
        if (data && typeof data === "object") {
            if (!headers["Content-Type"]) headers["Content-Type"] = "application/json";
        }
    }
    return headers;
}
function encodeMethodCallBody(headers, data) {
    if (!headers["Content-Type"] || typeof data === "undefined") return void 0;
    if (data instanceof ArrayBuffer) return data;
    if (headers["Content-Type"].startsWith("text/")) return new TextEncoder().encode(data.toString());
    if (headers["Content-Type"].startsWith("application/json")) return new TextEncoder().encode(stringifyLex(data));
    return data;
}
function httpResponseCodeToEnum(status) {
    let resCode;
    if (status in ResponseType) resCode = status;
    else if (status >= 100 && status < 200) resCode = 404 /* XRPCNotSupported */ ;
    else if (status >= 200 && status < 300) resCode = 200 /* Success */ ;
    else if (status >= 300 && status < 400) resCode = 404 /* XRPCNotSupported */ ;
    else if (status >= 400 && status < 500) resCode = 400 /* InvalidRequest */ ;
    else resCode = 500 /* InternalServerError */ ;
    return resCode;
}
function httpResponseBodyParse(mimeType, data) {
    if (mimeType) {
        if (mimeType.includes("application/json") && data?.byteLength) try {
            const str = new TextDecoder().decode(data);
            return jsonStringToLex(str);
        } catch (e) {
            throw new XRPCError(2 /* InvalidResponse */ , `Failed to parse response body: ${String(e)}`);
        }
        if (mimeType.startsWith("text/") && data?.byteLength) try {
            return new TextDecoder().decode(data);
        } catch (e) {
            throw new XRPCError(2 /* InvalidResponse */ , `Failed to parse response body: ${String(e)}`);
        }
    }
    if (data instanceof ArrayBuffer) return new Uint8Array(data);
    return data;
}
// ../xrpc/src/client.ts
var Client = class {
    constructor(){
        this.fetch = defaultFetchHandler;
        this.lex = new Lexicons();
    }
    async call(serviceUri, methodNsid, params2, data, opts) {
        return this.service(serviceUri).call(methodNsid, params2, data, opts);
    }
    service(serviceUri) {
        return new ServiceClient(this, serviceUri);
    }
    addLexicon(doc) {
        this.lex.add(doc);
    }
    addLexicons(docs) {
        for (const doc of docs)this.addLexicon(doc);
    }
    removeLexicon(uri2) {
        this.lex.remove(uri2);
    }
};
var ServiceClient = class {
    constructor(baseClient, serviceUri){
        this.headers = {};
        this.baseClient = baseClient;
        this.uri = typeof serviceUri === "string" ? new URL(serviceUri) : serviceUri;
    }
    setHeader(key, value) {
        this.headers[key] = value;
    }
    unsetHeader(key) {
        delete this.headers[key];
    }
    async call(methodNsid, params2, data, opts) {
        const def2 = this.baseClient.lex.getDefOrThrow(methodNsid);
        if (!def2 || def2.type !== "query" && def2.type !== "procedure") throw new Error(`Invalid lexicon: ${methodNsid}. Must be a query or procedure.`);
        const httpMethod = getMethodSchemaHTTPMethod(def2);
        const httpUri = constructMethodCallUri(methodNsid, def2, this.uri, params2);
        const httpHeaders = constructMethodCallHeaders(def2, data, {
            headers: {
                ...this.headers,
                ...opts?.headers
            },
            encoding: opts?.encoding
        });
        const res = await this.baseClient.fetch(httpUri, httpMethod, httpHeaders, data);
        const resCode = httpResponseCodeToEnum(res.status);
        if (resCode === 200 /* Success */ ) {
            try {
                this.baseClient.lex.assertValidXrpcOutput(methodNsid, res.body);
            } catch (e) {
                if (e instanceof ValidationError) throw new XRPCInvalidResponseError(methodNsid, e, res.body);
                else throw e;
            }
            return new XRPCResponse(res.body, res.headers);
        } else {
            if (res.body && isErrorResponseBody(res.body)) throw new XRPCError(resCode, res.body.error, res.body.message);
            else throw new XRPCError(resCode);
        }
    }
};
async function defaultFetchHandler(httpUri, httpMethod, httpHeaders, httpReqBody) {
    try {
        const reqInit = {
            method: httpMethod,
            headers: httpHeaders,
            body: encodeMethodCallBody(httpHeaders, httpReqBody),
            duplex: "half"
        };
        const res = await fetch(httpUri, reqInit);
        const resBody = await res.arrayBuffer();
        return {
            status: res.status,
            headers: Object.fromEntries(res.headers.entries()),
            body: httpResponseBodyParse(res.headers.get("content-type"), resBody)
        };
    } catch (e) {
        throw new XRPCError(1 /* Unknown */ , String(e));
    }
}
function isErrorResponseBody(v) {
    return errorResponseBody.safeParse(v).success;
}
// ../xrpc/src/index.ts
var defaultInst = new Client();
// src/client/lexicons.ts
var schemaDict = {
    ComAtprotoAdminDefs: {
        lexicon: 1,
        id: "com.atproto.admin.defs",
        defs: {
            actionView: {
                type: "object",
                required: [
                    "id",
                    "action",
                    "subject",
                    "subjectBlobCids",
                    "reason",
                    "createdBy",
                    "createdAt",
                    "resolvedReportIds"
                ],
                properties: {
                    id: {
                        type: "integer"
                    },
                    action: {
                        type: "ref",
                        ref: "lex:com.atproto.admin.defs#actionType"
                    },
                    subject: {
                        type: "union",
                        refs: [
                            "lex:com.atproto.admin.defs#repoRef",
                            "lex:com.atproto.repo.strongRef"
                        ]
                    },
                    subjectBlobCids: {
                        type: "array",
                        items: {
                            type: "string"
                        }
                    },
                    createLabelVals: {
                        type: "array",
                        items: {
                            type: "string"
                        }
                    },
                    negateLabelVals: {
                        type: "array",
                        items: {
                            type: "string"
                        }
                    },
                    reason: {
                        type: "string"
                    },
                    createdBy: {
                        type: "string",
                        format: "did"
                    },
                    createdAt: {
                        type: "string",
                        format: "datetime"
                    },
                    reversal: {
                        type: "ref",
                        ref: "lex:com.atproto.admin.defs#actionReversal"
                    },
                    resolvedReportIds: {
                        type: "array",
                        items: {
                            type: "integer"
                        }
                    }
                }
            },
            actionViewDetail: {
                type: "object",
                required: [
                    "id",
                    "action",
                    "subject",
                    "subjectBlobs",
                    "reason",
                    "createdBy",
                    "createdAt",
                    "resolvedReports"
                ],
                properties: {
                    id: {
                        type: "integer"
                    },
                    action: {
                        type: "ref",
                        ref: "lex:com.atproto.admin.defs#actionType"
                    },
                    subject: {
                        type: "union",
                        refs: [
                            "lex:com.atproto.admin.defs#repoView",
                            "lex:com.atproto.admin.defs#recordView"
                        ]
                    },
                    subjectBlobs: {
                        type: "array",
                        items: {
                            type: "ref",
                            ref: "lex:com.atproto.admin.defs#blobView"
                        }
                    },
                    createLabelVals: {
                        type: "array",
                        items: {
                            type: "string"
                        }
                    },
                    negateLabelVals: {
                        type: "array",
                        items: {
                            type: "string"
                        }
                    },
                    reason: {
                        type: "string"
                    },
                    createdBy: {
                        type: "string",
                        format: "did"
                    },
                    createdAt: {
                        type: "string",
                        format: "datetime"
                    },
                    reversal: {
                        type: "ref",
                        ref: "lex:com.atproto.admin.defs#actionReversal"
                    },
                    resolvedReports: {
                        type: "array",
                        items: {
                            type: "ref",
                            ref: "lex:com.atproto.admin.defs#reportView"
                        }
                    }
                }
            },
            actionViewCurrent: {
                type: "object",
                required: [
                    "id",
                    "action"
                ],
                properties: {
                    id: {
                        type: "integer"
                    },
                    action: {
                        type: "ref",
                        ref: "lex:com.atproto.admin.defs#actionType"
                    }
                }
            },
            actionReversal: {
                type: "object",
                required: [
                    "reason",
                    "createdBy",
                    "createdAt"
                ],
                properties: {
                    reason: {
                        type: "string"
                    },
                    createdBy: {
                        type: "string",
                        format: "did"
                    },
                    createdAt: {
                        type: "string",
                        format: "datetime"
                    }
                }
            },
            actionType: {
                type: "string",
                knownValues: [
                    "lex:com.atproto.admin.defs#takedown",
                    "lex:com.atproto.admin.defs#flag",
                    "lex:com.atproto.admin.defs#acknowledge"
                ]
            },
            takedown: {
                type: "token",
                description: "Moderation action type: Takedown. Indicates that content should not be served by the PDS."
            },
            flag: {
                type: "token",
                description: "Moderation action type: Flag. Indicates that the content was reviewed and considered to violate PDS rules, but may still be served."
            },
            acknowledge: {
                type: "token",
                description: "Moderation action type: Acknowledge. Indicates that the content was reviewed and not considered to violate PDS rules."
            },
            reportView: {
                type: "object",
                required: [
                    "id",
                    "reasonType",
                    "subject",
                    "reportedBy",
                    "createdAt",
                    "resolvedByActionIds"
                ],
                properties: {
                    id: {
                        type: "integer"
                    },
                    reasonType: {
                        type: "ref",
                        ref: "lex:com.atproto.moderation.defs#reasonType"
                    },
                    reason: {
                        type: "string"
                    },
                    subject: {
                        type: "union",
                        refs: [
                            "lex:com.atproto.admin.defs#repoRef",
                            "lex:com.atproto.repo.strongRef"
                        ]
                    },
                    reportedBy: {
                        type: "string",
                        format: "did"
                    },
                    createdAt: {
                        type: "string",
                        format: "datetime"
                    },
                    resolvedByActionIds: {
                        type: "array",
                        items: {
                            type: "integer"
                        }
                    }
                }
            },
            reportViewDetail: {
                type: "object",
                required: [
                    "id",
                    "reasonType",
                    "subject",
                    "reportedBy",
                    "createdAt",
                    "resolvedByActions"
                ],
                properties: {
                    id: {
                        type: "integer"
                    },
                    reasonType: {
                        type: "ref",
                        ref: "lex:com.atproto.moderation.defs#reasonType"
                    },
                    reason: {
                        type: "string"
                    },
                    subject: {
                        type: "union",
                        refs: [
                            "lex:com.atproto.admin.defs#repoView",
                            "lex:com.atproto.admin.defs#recordView"
                        ]
                    },
                    reportedBy: {
                        type: "string",
                        format: "did"
                    },
                    createdAt: {
                        type: "string",
                        format: "datetime"
                    },
                    resolvedByActions: {
                        type: "array",
                        items: {
                            type: "ref",
                            ref: "lex:com.atproto.admin.defs#actionView"
                        }
                    }
                }
            },
            repoView: {
                type: "object",
                required: [
                    "did",
                    "handle",
                    "relatedRecords",
                    "indexedAt",
                    "moderation"
                ],
                properties: {
                    did: {
                        type: "string",
                        format: "did"
                    },
                    handle: {
                        type: "string",
                        format: "handle"
                    },
                    email: {
                        type: "string"
                    },
                    relatedRecords: {
                        type: "array",
                        items: {
                            type: "unknown"
                        }
                    },
                    indexedAt: {
                        type: "string",
                        format: "datetime"
                    },
                    moderation: {
                        type: "ref",
                        ref: "lex:com.atproto.admin.defs#moderation"
                    },
                    invitedBy: {
                        type: "ref",
                        ref: "lex:com.atproto.server.defs#inviteCode"
                    }
                }
            },
            repoViewDetail: {
                type: "object",
                required: [
                    "did",
                    "handle",
                    "relatedRecords",
                    "indexedAt",
                    "moderation"
                ],
                properties: {
                    did: {
                        type: "string",
                        format: "did"
                    },
                    handle: {
                        type: "string",
                        format: "handle"
                    },
                    email: {
                        type: "string"
                    },
                    relatedRecords: {
                        type: "array",
                        items: {
                            type: "unknown"
                        }
                    },
                    indexedAt: {
                        type: "string",
                        format: "datetime"
                    },
                    moderation: {
                        type: "ref",
                        ref: "lex:com.atproto.admin.defs#moderationDetail"
                    },
                    invitedBy: {
                        type: "ref",
                        ref: "lex:com.atproto.server.defs#inviteCode"
                    },
                    invites: {
                        type: "array",
                        items: {
                            type: "ref",
                            ref: "lex:com.atproto.server.defs#inviteCode"
                        }
                    }
                }
            },
            repoRef: {
                type: "object",
                required: [
                    "did"
                ],
                properties: {
                    did: {
                        type: "string",
                        format: "did"
                    }
                }
            },
            recordView: {
                type: "object",
                required: [
                    "uri",
                    "cid",
                    "value",
                    "blobCids",
                    "indexedAt",
                    "moderation",
                    "repo"
                ],
                properties: {
                    uri: {
                        type: "string",
                        format: "at-uri"
                    },
                    cid: {
                        type: "string",
                        format: "cid"
                    },
                    value: {
                        type: "unknown"
                    },
                    blobCids: {
                        type: "array",
                        items: {
                            type: "string",
                            format: "cid"
                        }
                    },
                    indexedAt: {
                        type: "string",
                        format: "datetime"
                    },
                    moderation: {
                        type: "ref",
                        ref: "lex:com.atproto.admin.defs#moderation"
                    },
                    repo: {
                        type: "ref",
                        ref: "lex:com.atproto.admin.defs#repoView"
                    }
                }
            },
            recordViewDetail: {
                type: "object",
                required: [
                    "uri",
                    "cid",
                    "value",
                    "blobs",
                    "indexedAt",
                    "moderation",
                    "repo"
                ],
                properties: {
                    uri: {
                        type: "string",
                        format: "at-uri"
                    },
                    cid: {
                        type: "string",
                        format: "cid"
                    },
                    value: {
                        type: "unknown"
                    },
                    blobs: {
                        type: "array",
                        items: {
                            type: "ref",
                            ref: "lex:com.atproto.admin.defs#blobView"
                        }
                    },
                    indexedAt: {
                        type: "string",
                        format: "datetime"
                    },
                    moderation: {
                        type: "ref",
                        ref: "lex:com.atproto.admin.defs#moderationDetail"
                    },
                    repo: {
                        type: "ref",
                        ref: "lex:com.atproto.admin.defs#repoView"
                    }
                }
            },
            moderation: {
                type: "object",
                required: [],
                properties: {
                    currentAction: {
                        type: "ref",
                        ref: "lex:com.atproto.admin.defs#actionViewCurrent"
                    }
                }
            },
            moderationDetail: {
                type: "object",
                required: [
                    "actions",
                    "reports"
                ],
                properties: {
                    currentAction: {
                        type: "ref",
                        ref: "lex:com.atproto.admin.defs#actionViewCurrent"
                    },
                    actions: {
                        type: "array",
                        items: {
                            type: "ref",
                            ref: "lex:com.atproto.admin.defs#actionView"
                        }
                    },
                    reports: {
                        type: "array",
                        items: {
                            type: "ref",
                            ref: "lex:com.atproto.admin.defs#reportView"
                        }
                    }
                }
            },
            blobView: {
                type: "object",
                required: [
                    "cid",
                    "mimeType",
                    "size",
                    "createdAt"
                ],
                properties: {
                    cid: {
                        type: "string",
                        format: "cid"
                    },
                    mimeType: {
                        type: "string"
                    },
                    size: {
                        type: "integer"
                    },
                    createdAt: {
                        type: "string",
                        format: "datetime"
                    },
                    details: {
                        type: "union",
                        refs: [
                            "lex:com.atproto.admin.defs#imageDetails",
                            "lex:com.atproto.admin.defs#videoDetails"
                        ]
                    },
                    moderation: {
                        type: "ref",
                        ref: "lex:com.atproto.admin.defs#moderation"
                    }
                }
            },
            imageDetails: {
                type: "object",
                required: [
                    "width",
                    "height"
                ],
                properties: {
                    width: {
                        type: "integer"
                    },
                    height: {
                        type: "integer"
                    }
                }
            },
            videoDetails: {
                type: "object",
                required: [
                    "width",
                    "height",
                    "length"
                ],
                properties: {
                    width: {
                        type: "integer"
                    },
                    height: {
                        type: "integer"
                    },
                    length: {
                        type: "integer"
                    }
                }
            }
        }
    },
    ComAtprotoAdminDisableInviteCodes: {
        lexicon: 1,
        id: "com.atproto.admin.disableInviteCodes",
        defs: {
            main: {
                type: "procedure",
                description: "Disable some set of codes and/or all codes associated with a set of users",
                input: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        properties: {
                            codes: {
                                type: "array",
                                items: {
                                    type: "string"
                                }
                            },
                            accounts: {
                                type: "array",
                                items: {
                                    type: "string"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    ComAtprotoAdminGetInviteCodes: {
        lexicon: 1,
        id: "com.atproto.admin.getInviteCodes",
        defs: {
            main: {
                type: "query",
                description: "Admin view of invite codes",
                parameters: {
                    type: "params",
                    properties: {
                        sort: {
                            type: "string",
                            knownValues: [
                                "recent",
                                "usage"
                            ],
                            default: "recent"
                        },
                        limit: {
                            type: "integer",
                            minimum: 1,
                            maximum: 500,
                            default: 100
                        },
                        cursor: {
                            type: "string"
                        }
                    }
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "codes"
                        ],
                        properties: {
                            cursor: {
                                type: "string"
                            },
                            codes: {
                                type: "array",
                                items: {
                                    type: "ref",
                                    ref: "lex:com.atproto.server.defs#inviteCode"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    ComAtprotoAdminGetModerationAction: {
        lexicon: 1,
        id: "com.atproto.admin.getModerationAction",
        defs: {
            main: {
                type: "query",
                description: "View details about a moderation action.",
                parameters: {
                    type: "params",
                    required: [
                        "id"
                    ],
                    properties: {
                        id: {
                            type: "integer"
                        }
                    }
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "ref",
                        ref: "lex:com.atproto.admin.defs#actionViewDetail"
                    }
                }
            }
        }
    },
    ComAtprotoAdminGetModerationActions: {
        lexicon: 1,
        id: "com.atproto.admin.getModerationActions",
        defs: {
            main: {
                type: "query",
                description: "List moderation actions related to a subject.",
                parameters: {
                    type: "params",
                    properties: {
                        subject: {
                            type: "string"
                        },
                        limit: {
                            type: "integer",
                            minimum: 1,
                            maximum: 100,
                            default: 50
                        },
                        cursor: {
                            type: "string"
                        }
                    }
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "actions"
                        ],
                        properties: {
                            cursor: {
                                type: "string"
                            },
                            actions: {
                                type: "array",
                                items: {
                                    type: "ref",
                                    ref: "lex:com.atproto.admin.defs#actionView"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    ComAtprotoAdminGetModerationReport: {
        lexicon: 1,
        id: "com.atproto.admin.getModerationReport",
        defs: {
            main: {
                type: "query",
                description: "View details about a moderation report.",
                parameters: {
                    type: "params",
                    required: [
                        "id"
                    ],
                    properties: {
                        id: {
                            type: "integer"
                        }
                    }
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "ref",
                        ref: "lex:com.atproto.admin.defs#reportViewDetail"
                    }
                }
            }
        }
    },
    ComAtprotoAdminGetModerationReports: {
        lexicon: 1,
        id: "com.atproto.admin.getModerationReports",
        defs: {
            main: {
                type: "query",
                description: "List moderation reports related to a subject.",
                parameters: {
                    type: "params",
                    properties: {
                        subject: {
                            type: "string"
                        },
                        resolved: {
                            type: "boolean"
                        },
                        limit: {
                            type: "integer",
                            minimum: 1,
                            maximum: 100,
                            default: 50
                        },
                        cursor: {
                            type: "string"
                        }
                    }
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "reports"
                        ],
                        properties: {
                            cursor: {
                                type: "string"
                            },
                            reports: {
                                type: "array",
                                items: {
                                    type: "ref",
                                    ref: "lex:com.atproto.admin.defs#reportView"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    ComAtprotoAdminGetRecord: {
        lexicon: 1,
        id: "com.atproto.admin.getRecord",
        defs: {
            main: {
                type: "query",
                description: "View details about a record.",
                parameters: {
                    type: "params",
                    required: [
                        "uri"
                    ],
                    properties: {
                        uri: {
                            type: "string",
                            format: "at-uri"
                        },
                        cid: {
                            type: "string",
                            format: "cid"
                        }
                    }
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "ref",
                        ref: "lex:com.atproto.admin.defs#recordViewDetail"
                    }
                }
            }
        }
    },
    ComAtprotoAdminGetRepo: {
        lexicon: 1,
        id: "com.atproto.admin.getRepo",
        defs: {
            main: {
                type: "query",
                description: "View details about a repository.",
                parameters: {
                    type: "params",
                    required: [
                        "did"
                    ],
                    properties: {
                        did: {
                            type: "string",
                            format: "did"
                        }
                    }
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "ref",
                        ref: "lex:com.atproto.admin.defs#repoViewDetail"
                    }
                }
            }
        }
    },
    ComAtprotoAdminResolveModerationReports: {
        lexicon: 1,
        id: "com.atproto.admin.resolveModerationReports",
        defs: {
            main: {
                type: "procedure",
                description: "Resolve moderation reports by an action.",
                input: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "actionId",
                            "reportIds",
                            "createdBy"
                        ],
                        properties: {
                            actionId: {
                                type: "integer"
                            },
                            reportIds: {
                                type: "array",
                                items: {
                                    type: "integer"
                                }
                            },
                            createdBy: {
                                type: "string",
                                format: "did"
                            }
                        }
                    }
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "ref",
                        ref: "lex:com.atproto.admin.defs#actionView"
                    }
                }
            }
        }
    },
    ComAtprotoAdminReverseModerationAction: {
        lexicon: 1,
        id: "com.atproto.admin.reverseModerationAction",
        defs: {
            main: {
                type: "procedure",
                description: "Reverse a moderation action.",
                input: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "id",
                            "reason",
                            "createdBy"
                        ],
                        properties: {
                            id: {
                                type: "integer"
                            },
                            reason: {
                                type: "string"
                            },
                            createdBy: {
                                type: "string",
                                format: "did"
                            }
                        }
                    }
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "ref",
                        ref: "lex:com.atproto.admin.defs#actionView"
                    }
                }
            }
        }
    },
    ComAtprotoAdminSearchRepos: {
        lexicon: 1,
        id: "com.atproto.admin.searchRepos",
        defs: {
            main: {
                type: "query",
                description: "Find repositories based on a search term.",
                parameters: {
                    type: "params",
                    properties: {
                        term: {
                            type: "string"
                        },
                        invitedBy: {
                            type: "string"
                        },
                        limit: {
                            type: "integer",
                            minimum: 1,
                            maximum: 100,
                            default: 50
                        },
                        cursor: {
                            type: "string"
                        }
                    }
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "repos"
                        ],
                        properties: {
                            cursor: {
                                type: "string"
                            },
                            repos: {
                                type: "array",
                                items: {
                                    type: "ref",
                                    ref: "lex:com.atproto.admin.defs#repoView"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    ComAtprotoAdminTakeModerationAction: {
        lexicon: 1,
        id: "com.atproto.admin.takeModerationAction",
        defs: {
            main: {
                type: "procedure",
                description: "Take a moderation action on a repo.",
                input: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "action",
                            "subject",
                            "reason",
                            "createdBy"
                        ],
                        properties: {
                            action: {
                                type: "string",
                                knownValues: [
                                    "com.atproto.admin.defs#takedown",
                                    "com.atproto.admin.defs#flag",
                                    "com.atproto.admin.defs#acknowledge"
                                ]
                            },
                            subject: {
                                type: "union",
                                refs: [
                                    "lex:com.atproto.admin.defs#repoRef",
                                    "lex:com.atproto.repo.strongRef"
                                ]
                            },
                            subjectBlobCids: {
                                type: "array",
                                items: {
                                    type: "string",
                                    format: "cid"
                                }
                            },
                            createLabelVals: {
                                type: "array",
                                items: {
                                    type: "string"
                                }
                            },
                            negateLabelVals: {
                                type: "array",
                                items: {
                                    type: "string"
                                }
                            },
                            reason: {
                                type: "string"
                            },
                            createdBy: {
                                type: "string",
                                format: "did"
                            }
                        }
                    }
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "ref",
                        ref: "lex:com.atproto.admin.defs#actionView"
                    }
                },
                errors: [
                    {
                        name: "SubjectHasAction"
                    }
                ]
            }
        }
    },
    ComAtprotoAdminUpdateAccountHandle: {
        lexicon: 1,
        id: "com.atproto.admin.updateAccountHandle",
        defs: {
            main: {
                type: "procedure",
                description: "Administrative action to update an accounts handle",
                input: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "did",
                            "handle"
                        ],
                        properties: {
                            did: {
                                type: "string",
                                format: "did"
                            },
                            handle: {
                                type: "string",
                                format: "handle"
                            }
                        }
                    }
                }
            }
        }
    },
    ComAtprotoIdentityResolveHandle: {
        lexicon: 1,
        id: "com.atproto.identity.resolveHandle",
        defs: {
            main: {
                type: "query",
                description: "Provides the DID of a repo.",
                parameters: {
                    type: "params",
                    properties: {
                        handle: {
                            type: "string",
                            format: "handle",
                            description: "The handle to resolve. If not supplied, will resolve the host's own handle."
                        }
                    }
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "did"
                        ],
                        properties: {
                            did: {
                                type: "string",
                                format: "did"
                            }
                        }
                    }
                }
            }
        }
    },
    ComAtprotoIdentityUpdateHandle: {
        lexicon: 1,
        id: "com.atproto.identity.updateHandle",
        defs: {
            main: {
                type: "procedure",
                description: "Updates the handle of the account",
                input: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "handle"
                        ],
                        properties: {
                            handle: {
                                type: "string",
                                format: "handle"
                            }
                        }
                    }
                }
            }
        }
    },
    ComAtprotoLabelDefs: {
        lexicon: 1,
        id: "com.atproto.label.defs",
        defs: {
            label: {
                type: "object",
                description: "Metadata tag on an atproto resource (eg, repo or record)",
                required: [
                    "src",
                    "uri",
                    "val",
                    "cts"
                ],
                properties: {
                    src: {
                        type: "string",
                        format: "did",
                        description: "DID of the actor who created this label"
                    },
                    uri: {
                        type: "string",
                        format: "uri",
                        description: "AT URI of the record, repository (account), or other resource which this label applies to"
                    },
                    cid: {
                        type: "string",
                        format: "cid",
                        description: "optionally, CID specifying the specific version of 'uri' resource this label applies to"
                    },
                    val: {
                        type: "string",
                        maxLength: 128,
                        description: "the short string name of the value or type of this label"
                    },
                    neg: {
                        type: "boolean",
                        description: "if true, this is a negation label, overwriting a previous label"
                    },
                    cts: {
                        type: "string",
                        format: "datetime",
                        description: "timestamp when this label was created"
                    }
                }
            }
        }
    },
    ComAtprotoLabelQueryLabels: {
        lexicon: 1,
        id: "com.atproto.label.queryLabels",
        defs: {
            main: {
                type: "query",
                description: "Find labels relevant to the provided URI patterns.",
                parameters: {
                    type: "params",
                    required: [
                        "uriPatterns"
                    ],
                    properties: {
                        uriPatterns: {
                            type: "array",
                            items: {
                                type: "string"
                            },
                            description: "List of AT URI patterns to match (boolean 'OR'). Each may be a prefix (ending with '*'; will match inclusive of the string leading to '*'), or a full URI"
                        },
                        sources: {
                            type: "array",
                            items: {
                                type: "string",
                                format: "did"
                            },
                            description: "Optional list of label sources (DIDs) to filter on"
                        },
                        limit: {
                            type: "integer",
                            minimum: 1,
                            maximum: 250,
                            default: 50
                        },
                        cursor: {
                            type: "string"
                        }
                    }
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "labels"
                        ],
                        properties: {
                            cursor: {
                                type: "string"
                            },
                            labels: {
                                type: "array",
                                items: {
                                    type: "ref",
                                    ref: "lex:com.atproto.label.defs#label"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    ComAtprotoLabelSubscribeLabels: {
        lexicon: 1,
        id: "com.atproto.label.subscribeLabels",
        defs: {
            main: {
                type: "subscription",
                description: "Subscribe to label updates",
                parameters: {
                    type: "params",
                    properties: {
                        cursor: {
                            type: "integer",
                            description: "The last known event to backfill from."
                        }
                    }
                },
                message: {
                    schema: {
                        type: "union",
                        refs: [
                            "lex:com.atproto.label.subscribeLabels#labels",
                            "lex:com.atproto.label.subscribeLabels#info"
                        ]
                    }
                },
                errors: [
                    {
                        name: "FutureCursor"
                    }
                ]
            },
            labels: {
                type: "object",
                required: [
                    "seq",
                    "labels"
                ],
                properties: {
                    seq: {
                        type: "integer"
                    },
                    labels: {
                        type: "array",
                        items: {
                            type: "ref",
                            ref: "lex:com.atproto.label.defs#label"
                        }
                    }
                }
            },
            info: {
                type: "object",
                required: [
                    "name"
                ],
                properties: {
                    name: {
                        type: "string",
                        knownValues: [
                            "OutdatedCursor"
                        ]
                    },
                    message: {
                        type: "string"
                    }
                }
            }
        }
    },
    ComAtprotoModerationCreateReport: {
        lexicon: 1,
        id: "com.atproto.moderation.createReport",
        defs: {
            main: {
                type: "procedure",
                description: "Report a repo or a record.",
                input: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "reasonType",
                            "subject"
                        ],
                        properties: {
                            reasonType: {
                                type: "ref",
                                ref: "lex:com.atproto.moderation.defs#reasonType"
                            },
                            reason: {
                                type: "string"
                            },
                            subject: {
                                type: "union",
                                refs: [
                                    "lex:com.atproto.admin.defs#repoRef",
                                    "lex:com.atproto.repo.strongRef"
                                ]
                            }
                        }
                    }
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "id",
                            "reasonType",
                            "subject",
                            "reportedBy",
                            "createdAt"
                        ],
                        properties: {
                            id: {
                                type: "integer"
                            },
                            reasonType: {
                                type: "ref",
                                ref: "lex:com.atproto.moderation.defs#reasonType"
                            },
                            reason: {
                                type: "string"
                            },
                            subject: {
                                type: "union",
                                refs: [
                                    "lex:com.atproto.admin.defs#repoRef",
                                    "lex:com.atproto.repo.strongRef"
                                ]
                            },
                            reportedBy: {
                                type: "string",
                                format: "did"
                            },
                            createdAt: {
                                type: "string",
                                format: "datetime"
                            }
                        }
                    }
                }
            }
        }
    },
    ComAtprotoModerationDefs: {
        lexicon: 1,
        id: "com.atproto.moderation.defs",
        defs: {
            reasonType: {
                type: "string",
                knownValues: [
                    "com.atproto.moderation.defs#reasonSpam",
                    "com.atproto.moderation.defs#reasonOther"
                ]
            },
            reasonSpam: {
                type: "token",
                description: "Moderation report reason: Spam."
            },
            reasonOther: {
                type: "token",
                description: "Moderation report reason: Other."
            }
        }
    },
    ComAtprotoRepoApplyWrites: {
        lexicon: 1,
        id: "com.atproto.repo.applyWrites",
        defs: {
            main: {
                type: "procedure",
                description: "Apply a batch transaction of creates, updates, and deletes.",
                input: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "repo",
                            "writes"
                        ],
                        properties: {
                            repo: {
                                type: "string",
                                format: "at-identifier",
                                description: "The handle or DID of the repo."
                            },
                            validate: {
                                type: "boolean",
                                default: true,
                                description: "Validate the records?"
                            },
                            writes: {
                                type: "array",
                                items: {
                                    type: "union",
                                    refs: [
                                        "lex:com.atproto.repo.applyWrites#create",
                                        "lex:com.atproto.repo.applyWrites#update",
                                        "lex:com.atproto.repo.applyWrites#delete"
                                    ],
                                    closed: true
                                }
                            },
                            swapCommit: {
                                type: "string",
                                format: "cid"
                            }
                        }
                    }
                },
                errors: [
                    {
                        name: "InvalidSwap"
                    }
                ]
            },
            create: {
                type: "object",
                description: "Create a new record.",
                required: [
                    "action",
                    "collection",
                    "value"
                ],
                properties: {
                    collection: {
                        type: "string",
                        format: "nsid"
                    },
                    rkey: {
                        type: "string"
                    },
                    value: {
                        type: "unknown"
                    }
                }
            },
            update: {
                type: "object",
                description: "Update an existing record.",
                required: [
                    "action",
                    "collection",
                    "rkey",
                    "value"
                ],
                properties: {
                    collection: {
                        type: "string",
                        format: "nsid"
                    },
                    rkey: {
                        type: "string"
                    },
                    value: {
                        type: "unknown"
                    }
                }
            },
            delete: {
                type: "object",
                description: "Delete an existing record.",
                required: [
                    "action",
                    "collection",
                    "rkey"
                ],
                properties: {
                    collection: {
                        type: "string",
                        format: "nsid"
                    },
                    rkey: {
                        type: "string"
                    }
                }
            }
        }
    },
    ComAtprotoRepoCreateRecord: {
        lexicon: 1,
        id: "com.atproto.repo.createRecord",
        defs: {
            main: {
                type: "procedure",
                description: "Create a new record.",
                input: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "repo",
                            "collection",
                            "record"
                        ],
                        properties: {
                            repo: {
                                type: "string",
                                format: "at-identifier",
                                description: "The handle or DID of the repo."
                            },
                            collection: {
                                type: "string",
                                format: "nsid",
                                description: "The NSID of the record collection."
                            },
                            rkey: {
                                type: "string",
                                description: "The key of the record."
                            },
                            validate: {
                                type: "boolean",
                                default: true,
                                description: "Validate the record?"
                            },
                            record: {
                                type: "unknown",
                                description: "The record to create."
                            },
                            swapCommit: {
                                type: "string",
                                format: "cid",
                                description: "Compare and swap with the previous commit by cid."
                            }
                        }
                    }
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "uri",
                            "cid"
                        ],
                        properties: {
                            uri: {
                                type: "string",
                                format: "at-uri"
                            },
                            cid: {
                                type: "string",
                                format: "cid"
                            }
                        }
                    }
                },
                errors: [
                    {
                        name: "InvalidSwap"
                    }
                ]
            }
        }
    },
    ComAtprotoRepoDeleteRecord: {
        lexicon: 1,
        id: "com.atproto.repo.deleteRecord",
        defs: {
            main: {
                type: "procedure",
                description: "Delete a record, or ensure it doesn't exist.",
                input: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "repo",
                            "collection",
                            "rkey"
                        ],
                        properties: {
                            repo: {
                                type: "string",
                                format: "at-identifier",
                                description: "The handle or DID of the repo."
                            },
                            collection: {
                                type: "string",
                                format: "nsid",
                                description: "The NSID of the record collection."
                            },
                            rkey: {
                                type: "string",
                                description: "The key of the record."
                            },
                            swapRecord: {
                                type: "string",
                                format: "cid",
                                description: "Compare and swap with the previous record by cid."
                            },
                            swapCommit: {
                                type: "string",
                                format: "cid",
                                description: "Compare and swap with the previous commit by cid."
                            }
                        }
                    }
                },
                errors: [
                    {
                        name: "InvalidSwap"
                    }
                ]
            }
        }
    },
    ComAtprotoRepoDescribeRepo: {
        lexicon: 1,
        id: "com.atproto.repo.describeRepo",
        defs: {
            main: {
                type: "query",
                description: "Get information about the repo, including the list of collections.",
                parameters: {
                    type: "params",
                    required: [
                        "repo"
                    ],
                    properties: {
                        repo: {
                            type: "string",
                            format: "at-identifier",
                            description: "The handle or DID of the repo."
                        }
                    }
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "handle",
                            "did",
                            "didDoc",
                            "collections",
                            "handleIsCorrect"
                        ],
                        properties: {
                            handle: {
                                type: "string",
                                format: "handle"
                            },
                            did: {
                                type: "string",
                                format: "did"
                            },
                            didDoc: {
                                type: "unknown"
                            },
                            collections: {
                                type: "array",
                                items: {
                                    type: "string",
                                    format: "nsid"
                                }
                            },
                            handleIsCorrect: {
                                type: "boolean"
                            }
                        }
                    }
                }
            }
        }
    },
    ComAtprotoRepoGetRecord: {
        lexicon: 1,
        id: "com.atproto.repo.getRecord",
        defs: {
            main: {
                type: "query",
                description: "Get a record.",
                parameters: {
                    type: "params",
                    required: [
                        "repo",
                        "collection",
                        "rkey"
                    ],
                    properties: {
                        repo: {
                            type: "string",
                            format: "at-identifier",
                            description: "The handle or DID of the repo."
                        },
                        collection: {
                            type: "string",
                            format: "nsid",
                            description: "The NSID of the record collection."
                        },
                        rkey: {
                            type: "string",
                            description: "The key of the record."
                        },
                        cid: {
                            type: "string",
                            format: "cid",
                            description: "The CID of the version of the record. If not specified, then return the most recent version."
                        }
                    }
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "uri",
                            "value"
                        ],
                        properties: {
                            uri: {
                                type: "string",
                                format: "at-uri"
                            },
                            cid: {
                                type: "string",
                                format: "cid"
                            },
                            value: {
                                type: "unknown"
                            }
                        }
                    }
                }
            }
        }
    },
    ComAtprotoRepoListRecords: {
        lexicon: 1,
        id: "com.atproto.repo.listRecords",
        defs: {
            main: {
                type: "query",
                description: "List a range of records in a collection.",
                parameters: {
                    type: "params",
                    required: [
                        "repo",
                        "collection"
                    ],
                    properties: {
                        repo: {
                            type: "string",
                            format: "at-identifier",
                            description: "The handle or DID of the repo."
                        },
                        collection: {
                            type: "string",
                            format: "nsid",
                            description: "The NSID of the record type."
                        },
                        limit: {
                            type: "integer",
                            minimum: 1,
                            maximum: 100,
                            default: 50,
                            description: "The number of records to return."
                        },
                        cursor: {
                            type: "string"
                        },
                        rkeyStart: {
                            type: "string",
                            description: "DEPRECATED: The lowest sort-ordered rkey to start from (exclusive)"
                        },
                        rkeyEnd: {
                            type: "string",
                            description: "DEPRECATED: The highest sort-ordered rkey to stop at (exclusive)"
                        },
                        reverse: {
                            type: "boolean",
                            description: "Reverse the order of the returned records?"
                        }
                    }
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "records"
                        ],
                        properties: {
                            cursor: {
                                type: "string"
                            },
                            records: {
                                type: "array",
                                items: {
                                    type: "ref",
                                    ref: "lex:com.atproto.repo.listRecords#record"
                                }
                            }
                        }
                    }
                }
            },
            record: {
                type: "object",
                required: [
                    "uri",
                    "cid",
                    "value"
                ],
                properties: {
                    uri: {
                        type: "string",
                        format: "at-uri"
                    },
                    cid: {
                        type: "string",
                        format: "cid"
                    },
                    value: {
                        type: "unknown"
                    }
                }
            }
        }
    },
    ComAtprotoRepoPutRecord: {
        lexicon: 1,
        id: "com.atproto.repo.putRecord",
        defs: {
            main: {
                type: "procedure",
                description: "Write a record, creating or updating it as needed.",
                input: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "repo",
                            "collection",
                            "rkey",
                            "record"
                        ],
                        nullable: [
                            "swapRecord"
                        ],
                        properties: {
                            repo: {
                                type: "string",
                                format: "at-identifier",
                                description: "The handle or DID of the repo."
                            },
                            collection: {
                                type: "string",
                                format: "nsid",
                                description: "The NSID of the record collection."
                            },
                            rkey: {
                                type: "string",
                                description: "The key of the record."
                            },
                            validate: {
                                type: "boolean",
                                default: true,
                                description: "Validate the record?"
                            },
                            record: {
                                type: "unknown",
                                description: "The record to write."
                            },
                            swapRecord: {
                                type: "string",
                                format: "cid",
                                description: "Compare and swap with the previous record by cid."
                            },
                            swapCommit: {
                                type: "string",
                                format: "cid",
                                description: "Compare and swap with the previous commit by cid."
                            }
                        }
                    }
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "uri",
                            "cid"
                        ],
                        properties: {
                            uri: {
                                type: "string",
                                format: "at-uri"
                            },
                            cid: {
                                type: "string",
                                format: "cid"
                            }
                        }
                    }
                },
                errors: [
                    {
                        name: "InvalidSwap"
                    }
                ]
            }
        }
    },
    ComAtprotoRepoStrongRef: {
        lexicon: 1,
        id: "com.atproto.repo.strongRef",
        description: "A URI with a content-hash fingerprint.",
        defs: {
            main: {
                type: "object",
                required: [
                    "uri",
                    "cid"
                ],
                properties: {
                    uri: {
                        type: "string",
                        format: "at-uri"
                    },
                    cid: {
                        type: "string",
                        format: "cid"
                    }
                }
            }
        }
    },
    ComAtprotoRepoUploadBlob: {
        lexicon: 1,
        id: "com.atproto.repo.uploadBlob",
        defs: {
            main: {
                type: "procedure",
                description: "Upload a new blob to be added to repo in a later request.",
                input: {
                    encoding: "*/*"
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "blob"
                        ],
                        properties: {
                            blob: {
                                type: "blob"
                            }
                        }
                    }
                }
            }
        }
    },
    ComAtprotoServerCreateAccount: {
        lexicon: 1,
        id: "com.atproto.server.createAccount",
        defs: {
            main: {
                type: "procedure",
                description: "Create an account.",
                input: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "handle",
                            "email",
                            "password"
                        ],
                        properties: {
                            email: {
                                type: "string"
                            },
                            handle: {
                                type: "string",
                                format: "handle"
                            },
                            inviteCode: {
                                type: "string"
                            },
                            password: {
                                type: "string"
                            },
                            recoveryKey: {
                                type: "string"
                            }
                        }
                    }
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "accessJwt",
                            "refreshJwt",
                            "handle",
                            "did"
                        ],
                        properties: {
                            accessJwt: {
                                type: "string"
                            },
                            refreshJwt: {
                                type: "string"
                            },
                            handle: {
                                type: "string",
                                format: "handle"
                            },
                            did: {
                                type: "string",
                                format: "did"
                            }
                        }
                    }
                },
                errors: [
                    {
                        name: "InvalidHandle"
                    },
                    {
                        name: "InvalidPassword"
                    },
                    {
                        name: "InvalidInviteCode"
                    },
                    {
                        name: "HandleNotAvailable"
                    },
                    {
                        name: "UnsupportedDomain"
                    }
                ]
            }
        }
    },
    ComAtprotoServerCreateInviteCode: {
        lexicon: 1,
        id: "com.atproto.server.createInviteCode",
        defs: {
            main: {
                type: "procedure",
                description: "Create an invite code.",
                input: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "useCount"
                        ],
                        properties: {
                            useCount: {
                                type: "integer"
                            },
                            forAccount: {
                                type: "string",
                                format: "did"
                            }
                        }
                    }
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "code"
                        ],
                        properties: {
                            code: {
                                type: "string"
                            }
                        }
                    }
                }
            }
        }
    },
    ComAtprotoServerCreateInviteCodes: {
        lexicon: 1,
        id: "com.atproto.server.createInviteCodes",
        defs: {
            main: {
                type: "procedure",
                description: "Create an invite code.",
                input: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "codeCount",
                            "useCount"
                        ],
                        properties: {
                            codeCount: {
                                type: "integer",
                                default: 1
                            },
                            useCount: {
                                type: "integer"
                            },
                            forAccount: {
                                type: "string",
                                format: "did"
                            }
                        }
                    }
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "codes"
                        ],
                        properties: {
                            codes: {
                                type: "array",
                                items: {
                                    type: "string"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    ComAtprotoServerCreateSession: {
        lexicon: 1,
        id: "com.atproto.server.createSession",
        defs: {
            main: {
                type: "procedure",
                description: "Create an authentication session.",
                input: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "identifier",
                            "password"
                        ],
                        properties: {
                            identifier: {
                                type: "string",
                                description: "Handle or other identifier supported by the server for the authenticating user."
                            },
                            password: {
                                type: "string"
                            }
                        }
                    }
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "accessJwt",
                            "refreshJwt",
                            "handle",
                            "did"
                        ],
                        properties: {
                            accessJwt: {
                                type: "string"
                            },
                            refreshJwt: {
                                type: "string"
                            },
                            handle: {
                                type: "string",
                                format: "handle"
                            },
                            did: {
                                type: "string",
                                format: "did"
                            },
                            email: {
                                type: "string"
                            }
                        }
                    }
                },
                errors: [
                    {
                        name: "AccountTakedown"
                    }
                ]
            }
        }
    },
    ComAtprotoServerDefs: {
        lexicon: 1,
        id: "com.atproto.server.defs",
        defs: {
            inviteCode: {
                type: "object",
                required: [
                    "code",
                    "available",
                    "disabled",
                    "forAccount",
                    "createdBy",
                    "createdAt",
                    "uses"
                ],
                properties: {
                    code: {
                        type: "string"
                    },
                    available: {
                        type: "integer"
                    },
                    disabled: {
                        type: "boolean"
                    },
                    forAccount: {
                        type: "string"
                    },
                    createdBy: {
                        type: "string"
                    },
                    createdAt: {
                        type: "string",
                        format: "datetime"
                    },
                    uses: {
                        type: "array",
                        items: {
                            type: "ref",
                            ref: "lex:com.atproto.server.defs#inviteCodeUse"
                        }
                    }
                }
            },
            inviteCodeUse: {
                type: "object",
                required: [
                    "usedBy",
                    "usedAt"
                ],
                properties: {
                    usedBy: {
                        type: "string",
                        format: "did"
                    },
                    usedAt: {
                        type: "string",
                        format: "datetime"
                    }
                }
            }
        }
    },
    ComAtprotoServerDeleteAccount: {
        lexicon: 1,
        id: "com.atproto.server.deleteAccount",
        defs: {
            main: {
                type: "procedure",
                description: "Delete a user account with a token and password.",
                input: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "did",
                            "password",
                            "token"
                        ],
                        properties: {
                            did: {
                                type: "string",
                                format: "did"
                            },
                            password: {
                                type: "string"
                            },
                            token: {
                                type: "string"
                            }
                        }
                    }
                },
                errors: [
                    {
                        name: "ExpiredToken"
                    },
                    {
                        name: "InvalidToken"
                    }
                ]
            }
        }
    },
    ComAtprotoServerDeleteSession: {
        lexicon: 1,
        id: "com.atproto.server.deleteSession",
        defs: {
            main: {
                type: "procedure",
                description: "Delete the current session."
            }
        }
    },
    ComAtprotoServerDescribeServer: {
        lexicon: 1,
        id: "com.atproto.server.describeServer",
        defs: {
            main: {
                type: "query",
                description: "Get a document describing the service's accounts configuration.",
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "availableUserDomains"
                        ],
                        properties: {
                            inviteCodeRequired: {
                                type: "boolean"
                            },
                            availableUserDomains: {
                                type: "array",
                                items: {
                                    type: "string"
                                }
                            },
                            links: {
                                type: "ref",
                                ref: "lex:com.atproto.server.describeServer#links"
                            }
                        }
                    }
                }
            },
            links: {
                type: "object",
                properties: {
                    privacyPolicy: {
                        type: "string"
                    },
                    termsOfService: {
                        type: "string"
                    }
                }
            }
        }
    },
    ComAtprotoServerGetAccountInviteCodes: {
        lexicon: 1,
        id: "com.atproto.server.getAccountInviteCodes",
        defs: {
            main: {
                type: "query",
                description: "Get all invite codes for a given account",
                parameters: {
                    type: "params",
                    properties: {
                        includeUsed: {
                            type: "boolean",
                            default: true
                        },
                        createAvailable: {
                            type: "boolean",
                            default: true
                        }
                    }
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "codes"
                        ],
                        properties: {
                            codes: {
                                type: "array",
                                items: {
                                    type: "ref",
                                    ref: "lex:com.atproto.server.defs#inviteCode"
                                }
                            }
                        }
                    }
                },
                errors: [
                    {
                        name: "DuplicateCreate"
                    }
                ]
            }
        }
    },
    ComAtprotoServerGetSession: {
        lexicon: 1,
        id: "com.atproto.server.getSession",
        defs: {
            main: {
                type: "query",
                description: "Get information about the current session.",
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "handle",
                            "did"
                        ],
                        properties: {
                            handle: {
                                type: "string",
                                format: "handle"
                            },
                            did: {
                                type: "string",
                                format: "did"
                            },
                            email: {
                                type: "string"
                            }
                        }
                    }
                }
            }
        }
    },
    ComAtprotoServerRefreshSession: {
        lexicon: 1,
        id: "com.atproto.server.refreshSession",
        defs: {
            main: {
                type: "procedure",
                description: "Refresh an authentication session.",
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "accessJwt",
                            "refreshJwt",
                            "handle",
                            "did"
                        ],
                        properties: {
                            accessJwt: {
                                type: "string"
                            },
                            refreshJwt: {
                                type: "string"
                            },
                            handle: {
                                type: "string",
                                format: "handle"
                            },
                            did: {
                                type: "string",
                                format: "did"
                            }
                        }
                    }
                },
                errors: [
                    {
                        name: "AccountTakedown"
                    }
                ]
            }
        }
    },
    ComAtprotoServerRequestAccountDelete: {
        lexicon: 1,
        id: "com.atproto.server.requestAccountDelete",
        defs: {
            main: {
                type: "procedure",
                description: "Initiate a user account deletion via email."
            }
        }
    },
    ComAtprotoServerRequestPasswordReset: {
        lexicon: 1,
        id: "com.atproto.server.requestPasswordReset",
        defs: {
            main: {
                type: "procedure",
                description: "Initiate a user account password reset via email.",
                input: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "email"
                        ],
                        properties: {
                            email: {
                                type: "string"
                            }
                        }
                    }
                }
            }
        }
    },
    ComAtprotoServerResetPassword: {
        lexicon: 1,
        id: "com.atproto.server.resetPassword",
        defs: {
            main: {
                type: "procedure",
                description: "Reset a user account password using a token.",
                input: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "token",
                            "password"
                        ],
                        properties: {
                            token: {
                                type: "string"
                            },
                            password: {
                                type: "string"
                            }
                        }
                    }
                },
                errors: [
                    {
                        name: "ExpiredToken"
                    },
                    {
                        name: "InvalidToken"
                    }
                ]
            }
        }
    },
    ComAtprotoSyncGetBlob: {
        lexicon: 1,
        id: "com.atproto.sync.getBlob",
        defs: {
            main: {
                type: "query",
                description: "Get a blob associated with a given repo.",
                parameters: {
                    type: "params",
                    required: [
                        "did",
                        "cid"
                    ],
                    properties: {
                        did: {
                            type: "string",
                            format: "did",
                            description: "The DID of the repo."
                        },
                        cid: {
                            type: "string",
                            format: "cid",
                            description: "The CID of the blob to fetch"
                        }
                    }
                },
                output: {
                    encoding: "*/*"
                }
            }
        }
    },
    ComAtprotoSyncGetBlocks: {
        lexicon: 1,
        id: "com.atproto.sync.getBlocks",
        defs: {
            main: {
                type: "query",
                description: "Gets blocks from a given repo.",
                parameters: {
                    type: "params",
                    required: [
                        "did",
                        "cids"
                    ],
                    properties: {
                        did: {
                            type: "string",
                            format: "did",
                            description: "The DID of the repo."
                        },
                        cids: {
                            type: "array",
                            items: {
                                type: "string",
                                format: "cid"
                            }
                        }
                    }
                },
                output: {
                    encoding: "application/vnd.ipld.car"
                }
            }
        }
    },
    ComAtprotoSyncGetCheckout: {
        lexicon: 1,
        id: "com.atproto.sync.getCheckout",
        defs: {
            main: {
                type: "query",
                description: "Gets the repo state.",
                parameters: {
                    type: "params",
                    required: [
                        "did"
                    ],
                    properties: {
                        did: {
                            type: "string",
                            format: "did",
                            description: "The DID of the repo."
                        },
                        commit: {
                            type: "string",
                            format: "cid",
                            description: "The commit to get the checkout from. Defaults to current HEAD."
                        }
                    }
                },
                output: {
                    encoding: "application/vnd.ipld.car"
                }
            }
        }
    },
    ComAtprotoSyncGetCommitPath: {
        lexicon: 1,
        id: "com.atproto.sync.getCommitPath",
        defs: {
            main: {
                type: "query",
                description: "Gets the path of repo commits",
                parameters: {
                    type: "params",
                    required: [
                        "did"
                    ],
                    properties: {
                        did: {
                            type: "string",
                            format: "did",
                            description: "The DID of the repo."
                        },
                        latest: {
                            type: "string",
                            format: "cid",
                            description: "The most recent commit"
                        },
                        earliest: {
                            type: "string",
                            format: "cid",
                            description: "The earliest commit to start from"
                        }
                    }
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "commits"
                        ],
                        properties: {
                            commits: {
                                type: "array",
                                items: {
                                    type: "string",
                                    format: "cid"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    ComAtprotoSyncGetHead: {
        lexicon: 1,
        id: "com.atproto.sync.getHead",
        defs: {
            main: {
                type: "query",
                description: "Gets the current HEAD CID of a repo.",
                parameters: {
                    type: "params",
                    required: [
                        "did"
                    ],
                    properties: {
                        did: {
                            type: "string",
                            format: "did",
                            description: "The DID of the repo."
                        }
                    }
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "root"
                        ],
                        properties: {
                            root: {
                                type: "string",
                                format: "cid"
                            }
                        }
                    }
                }
            }
        }
    },
    ComAtprotoSyncGetRecord: {
        lexicon: 1,
        id: "com.atproto.sync.getRecord",
        defs: {
            main: {
                type: "query",
                description: "Gets blocks needed for existence or non-existence of record.",
                parameters: {
                    type: "params",
                    required: [
                        "did",
                        "collection",
                        "rkey"
                    ],
                    properties: {
                        did: {
                            type: "string",
                            format: "did",
                            description: "The DID of the repo."
                        },
                        collection: {
                            type: "string",
                            format: "nsid"
                        },
                        rkey: {
                            type: "string"
                        },
                        commit: {
                            type: "string",
                            format: "cid",
                            description: "An optional past commit CID."
                        }
                    }
                },
                output: {
                    encoding: "application/vnd.ipld.car"
                }
            }
        }
    },
    ComAtprotoSyncGetRepo: {
        lexicon: 1,
        id: "com.atproto.sync.getRepo",
        defs: {
            main: {
                type: "query",
                description: "Gets the repo state.",
                parameters: {
                    type: "params",
                    required: [
                        "did"
                    ],
                    properties: {
                        did: {
                            type: "string",
                            format: "did",
                            description: "The DID of the repo."
                        },
                        earliest: {
                            type: "string",
                            format: "cid",
                            description: "The earliest commit in the commit range (not inclusive)"
                        },
                        latest: {
                            type: "string",
                            format: "cid",
                            description: "The latest commit you in the commit range (inclusive"
                        }
                    }
                },
                output: {
                    encoding: "application/vnd.ipld.car"
                }
            }
        }
    },
    ComAtprotoSyncListBlobs: {
        lexicon: 1,
        id: "com.atproto.sync.listBlobs",
        defs: {
            main: {
                type: "query",
                description: "List blob cids for some range of commits",
                parameters: {
                    type: "params",
                    required: [
                        "did"
                    ],
                    properties: {
                        did: {
                            type: "string",
                            format: "did",
                            description: "The DID of the repo."
                        },
                        latest: {
                            type: "string",
                            format: "cid",
                            description: "The most recent commit"
                        },
                        earliest: {
                            type: "string",
                            format: "cid",
                            description: "The earliest commit to start from"
                        }
                    }
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "cids"
                        ],
                        properties: {
                            cids: {
                                type: "array",
                                items: {
                                    type: "string",
                                    format: "cid"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    ComAtprotoSyncListRepos: {
        lexicon: 1,
        id: "com.atproto.sync.listRepos",
        defs: {
            main: {
                type: "query",
                description: "List dids and root cids of hosted repos",
                parameters: {
                    type: "params",
                    properties: {
                        limit: {
                            type: "integer",
                            minimum: 1,
                            maximum: 1e3,
                            default: 500
                        },
                        cursor: {
                            type: "string"
                        }
                    }
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "repos"
                        ],
                        properties: {
                            cursor: {
                                type: "string"
                            },
                            repos: {
                                type: "array",
                                items: {
                                    type: "ref",
                                    ref: "lex:com.atproto.sync.listRepos#repo"
                                }
                            }
                        }
                    }
                }
            },
            repo: {
                type: "object",
                required: [
                    "did",
                    "head"
                ],
                properties: {
                    did: {
                        type: "string",
                        format: "did"
                    },
                    head: {
                        type: "string",
                        format: "cid"
                    }
                }
            }
        }
    },
    ComAtprotoSyncNotifyOfUpdate: {
        lexicon: 1,
        id: "com.atproto.sync.notifyOfUpdate",
        defs: {
            main: {
                type: "query",
                description: "Notify a crawling service of a recent update. Often when a long break between updates causes the connection with the crawling service to break.",
                parameters: {
                    type: "params",
                    required: [
                        "hostname"
                    ],
                    properties: {
                        hostname: {
                            type: "string",
                            description: "Hostname of the service that is notifying of update."
                        }
                    }
                }
            }
        }
    },
    ComAtprotoSyncRequestCrawl: {
        lexicon: 1,
        id: "com.atproto.sync.requestCrawl",
        defs: {
            main: {
                type: "query",
                description: "Request a service to persistently crawl hosted repos.",
                parameters: {
                    type: "params",
                    required: [
                        "hostname"
                    ],
                    properties: {
                        hostname: {
                            type: "string",
                            description: "Hostname of the service that is requesting to be crawled."
                        }
                    }
                }
            }
        }
    },
    ComAtprotoSyncSubscribeRepos: {
        lexicon: 1,
        id: "com.atproto.sync.subscribeRepos",
        defs: {
            main: {
                type: "subscription",
                description: "Subscribe to repo updates",
                parameters: {
                    type: "params",
                    properties: {
                        cursor: {
                            type: "integer",
                            description: "The last known event to backfill from."
                        }
                    }
                },
                message: {
                    schema: {
                        type: "union",
                        refs: [
                            "lex:com.atproto.sync.subscribeRepos#commit",
                            "lex:com.atproto.sync.subscribeRepos#handle",
                            "lex:com.atproto.sync.subscribeRepos#migrate",
                            "lex:com.atproto.sync.subscribeRepos#tombstone",
                            "lex:com.atproto.sync.subscribeRepos#info"
                        ]
                    }
                },
                errors: [
                    {
                        name: "FutureCursor"
                    }
                ]
            },
            commit: {
                type: "object",
                required: [
                    "seq",
                    "rebase",
                    "tooBig",
                    "repo",
                    "commit",
                    "prev",
                    "blocks",
                    "ops",
                    "blobs",
                    "time"
                ],
                nullable: [
                    "prev"
                ],
                properties: {
                    seq: {
                        type: "integer"
                    },
                    rebase: {
                        type: "boolean"
                    },
                    tooBig: {
                        type: "boolean"
                    },
                    repo: {
                        type: "string",
                        format: "did"
                    },
                    commit: {
                        type: "cid-link"
                    },
                    prev: {
                        type: "cid-link"
                    },
                    blocks: {
                        type: "bytes",
                        description: "CAR file containing relevant blocks",
                        maxLength: 1e6
                    },
                    ops: {
                        type: "array",
                        items: {
                            type: "ref",
                            ref: "lex:com.atproto.sync.subscribeRepos#repoOp"
                        },
                        maxLength: 200
                    },
                    blobs: {
                        type: "array",
                        items: {
                            type: "cid-link"
                        }
                    },
                    time: {
                        type: "string",
                        format: "datetime"
                    }
                }
            },
            handle: {
                type: "object",
                required: [
                    "seq",
                    "did",
                    "handle",
                    "time"
                ],
                properties: {
                    seq: {
                        type: "integer"
                    },
                    did: {
                        type: "string",
                        format: "did"
                    },
                    handle: {
                        type: "string",
                        format: "handle"
                    },
                    time: {
                        type: "string",
                        format: "datetime"
                    }
                }
            },
            migrate: {
                type: "object",
                required: [
                    "seq",
                    "did",
                    "migrateTo",
                    "time"
                ],
                nullable: [
                    "migrateTo"
                ],
                properties: {
                    seq: {
                        type: "integer"
                    },
                    did: {
                        type: "string",
                        format: "did"
                    },
                    migrateTo: {
                        type: "string"
                    },
                    time: {
                        type: "string",
                        format: "datetime"
                    }
                }
            },
            tombstone: {
                type: "object",
                required: [
                    "seq",
                    "did",
                    "time"
                ],
                properties: {
                    seq: {
                        type: "integer"
                    },
                    did: {
                        type: "string",
                        format: "did"
                    },
                    time: {
                        type: "string",
                        format: "datetime"
                    }
                }
            },
            info: {
                type: "object",
                required: [
                    "name"
                ],
                properties: {
                    name: {
                        type: "string",
                        knownValues: [
                            "OutdatedCursor"
                        ]
                    },
                    message: {
                        type: "string"
                    }
                }
            },
            repoOp: {
                type: "object",
                required: [
                    "action",
                    "path",
                    "cid"
                ],
                nullable: [
                    "cid"
                ],
                properties: {
                    action: {
                        type: "string",
                        knownValues: [
                            "create",
                            "update",
                            "delete"
                        ]
                    },
                    path: {
                        type: "string"
                    },
                    cid: {
                        type: "cid-link"
                    }
                }
            }
        }
    },
    AppBskyActorDefs: {
        lexicon: 1,
        id: "app.bsky.actor.defs",
        description: "A reference to an actor in the network.",
        defs: {
            profileViewBasic: {
                type: "object",
                required: [
                    "did",
                    "handle"
                ],
                properties: {
                    did: {
                        type: "string",
                        format: "did"
                    },
                    handle: {
                        type: "string",
                        format: "handle"
                    },
                    displayName: {
                        type: "string",
                        maxGraphemes: 64,
                        maxLength: 640
                    },
                    avatar: {
                        type: "string"
                    },
                    viewer: {
                        type: "ref",
                        ref: "lex:app.bsky.actor.defs#viewerState"
                    },
                    labels: {
                        type: "array",
                        items: {
                            type: "ref",
                            ref: "lex:com.atproto.label.defs#label"
                        }
                    }
                }
            },
            profileView: {
                type: "object",
                required: [
                    "did",
                    "handle"
                ],
                properties: {
                    did: {
                        type: "string",
                        format: "did"
                    },
                    handle: {
                        type: "string",
                        format: "handle"
                    },
                    displayName: {
                        type: "string",
                        maxGraphemes: 64,
                        maxLength: 640
                    },
                    description: {
                        type: "string",
                        maxGraphemes: 256,
                        maxLength: 2560
                    },
                    avatar: {
                        type: "string"
                    },
                    indexedAt: {
                        type: "string",
                        format: "datetime"
                    },
                    viewer: {
                        type: "ref",
                        ref: "lex:app.bsky.actor.defs#viewerState"
                    },
                    labels: {
                        type: "array",
                        items: {
                            type: "ref",
                            ref: "lex:com.atproto.label.defs#label"
                        }
                    }
                }
            },
            profileViewDetailed: {
                type: "object",
                required: [
                    "did",
                    "handle"
                ],
                properties: {
                    did: {
                        type: "string",
                        format: "did"
                    },
                    handle: {
                        type: "string",
                        format: "handle"
                    },
                    displayName: {
                        type: "string",
                        maxGraphemes: 64,
                        maxLength: 640
                    },
                    description: {
                        type: "string",
                        maxGraphemes: 256,
                        maxLength: 2560
                    },
                    avatar: {
                        type: "string"
                    },
                    banner: {
                        type: "string"
                    },
                    followersCount: {
                        type: "integer"
                    },
                    followsCount: {
                        type: "integer"
                    },
                    postsCount: {
                        type: "integer"
                    },
                    indexedAt: {
                        type: "string",
                        format: "datetime"
                    },
                    viewer: {
                        type: "ref",
                        ref: "lex:app.bsky.actor.defs#viewerState"
                    },
                    labels: {
                        type: "array",
                        items: {
                            type: "ref",
                            ref: "lex:com.atproto.label.defs#label"
                        }
                    }
                }
            },
            viewerState: {
                type: "object",
                properties: {
                    muted: {
                        type: "boolean"
                    },
                    following: {
                        type: "string",
                        format: "at-uri"
                    },
                    followedBy: {
                        type: "string",
                        format: "at-uri"
                    }
                }
            }
        }
    },
    AppBskyActorGetProfile: {
        lexicon: 1,
        id: "app.bsky.actor.getProfile",
        defs: {
            main: {
                type: "query",
                parameters: {
                    type: "params",
                    required: [
                        "actor"
                    ],
                    properties: {
                        actor: {
                            type: "string",
                            format: "at-identifier"
                        }
                    }
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "ref",
                        ref: "lex:app.bsky.actor.defs#profileViewDetailed"
                    }
                }
            }
        }
    },
    AppBskyActorGetProfiles: {
        lexicon: 1,
        id: "app.bsky.actor.getProfiles",
        defs: {
            main: {
                type: "query",
                parameters: {
                    type: "params",
                    required: [
                        "actors"
                    ],
                    properties: {
                        actors: {
                            type: "array",
                            items: {
                                type: "string",
                                format: "at-identifier"
                            },
                            maxLength: 25
                        }
                    }
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "profiles"
                        ],
                        properties: {
                            profiles: {
                                type: "array",
                                items: {
                                    type: "ref",
                                    ref: "lex:app.bsky.actor.defs#profileViewDetailed"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    AppBskyActorGetSuggestions: {
        lexicon: 1,
        id: "app.bsky.actor.getSuggestions",
        defs: {
            main: {
                type: "query",
                description: "Get a list of actors suggested for following. Used in discovery UIs.",
                parameters: {
                    type: "params",
                    properties: {
                        limit: {
                            type: "integer",
                            minimum: 1,
                            maximum: 100,
                            default: 50
                        },
                        cursor: {
                            type: "string"
                        }
                    }
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "actors"
                        ],
                        properties: {
                            cursor: {
                                type: "string"
                            },
                            actors: {
                                type: "array",
                                items: {
                                    type: "ref",
                                    ref: "lex:app.bsky.actor.defs#profileView"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    AppBskyActorProfile: {
        lexicon: 1,
        id: "app.bsky.actor.profile",
        defs: {
            main: {
                type: "record",
                key: "literal:self",
                record: {
                    type: "object",
                    properties: {
                        displayName: {
                            type: "string",
                            maxGraphemes: 64,
                            maxLength: 640
                        },
                        description: {
                            type: "string",
                            maxGraphemes: 256,
                            maxLength: 2560
                        },
                        avatar: {
                            type: "blob",
                            accept: [
                                "image/png",
                                "image/jpeg"
                            ],
                            maxSize: 1e6
                        },
                        banner: {
                            type: "blob",
                            accept: [
                                "image/png",
                                "image/jpeg"
                            ],
                            maxSize: 1e6
                        }
                    }
                }
            }
        }
    },
    AppBskyActorSearchActors: {
        lexicon: 1,
        id: "app.bsky.actor.searchActors",
        defs: {
            main: {
                type: "query",
                description: "Find actors matching search criteria.",
                parameters: {
                    type: "params",
                    properties: {
                        term: {
                            type: "string"
                        },
                        limit: {
                            type: "integer",
                            minimum: 1,
                            maximum: 100,
                            default: 50
                        },
                        cursor: {
                            type: "string"
                        }
                    }
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "actors"
                        ],
                        properties: {
                            cursor: {
                                type: "string"
                            },
                            actors: {
                                type: "array",
                                items: {
                                    type: "ref",
                                    ref: "lex:app.bsky.actor.defs#profileView"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    AppBskyActorSearchActorsTypeahead: {
        lexicon: 1,
        id: "app.bsky.actor.searchActorsTypeahead",
        defs: {
            main: {
                type: "query",
                description: "Find actor suggestions for a search term.",
                parameters: {
                    type: "params",
                    properties: {
                        term: {
                            type: "string"
                        },
                        limit: {
                            type: "integer",
                            minimum: 1,
                            maximum: 100,
                            default: 50
                        }
                    }
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "actors"
                        ],
                        properties: {
                            actors: {
                                type: "array",
                                items: {
                                    type: "ref",
                                    ref: "lex:app.bsky.actor.defs#profileViewBasic"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    AppBskyEmbedExternal: {
        lexicon: 1,
        id: "app.bsky.embed.external",
        description: "A representation of some externally linked content, embedded in another form of content",
        defs: {
            main: {
                type: "object",
                required: [
                    "external"
                ],
                properties: {
                    external: {
                        type: "ref",
                        ref: "lex:app.bsky.embed.external#external"
                    }
                }
            },
            external: {
                type: "object",
                required: [
                    "uri",
                    "title",
                    "description"
                ],
                properties: {
                    uri: {
                        type: "string",
                        format: "uri"
                    },
                    title: {
                        type: "string"
                    },
                    description: {
                        type: "string"
                    },
                    thumb: {
                        type: "blob",
                        accept: [
                            "image/*"
                        ],
                        maxSize: 1e6
                    }
                }
            },
            view: {
                type: "object",
                required: [
                    "external"
                ],
                properties: {
                    external: {
                        type: "ref",
                        ref: "lex:app.bsky.embed.external#viewExternal"
                    }
                }
            },
            viewExternal: {
                type: "object",
                required: [
                    "uri",
                    "title",
                    "description"
                ],
                properties: {
                    uri: {
                        type: "string",
                        format: "uri"
                    },
                    title: {
                        type: "string"
                    },
                    description: {
                        type: "string"
                    },
                    thumb: {
                        type: "string"
                    }
                }
            }
        }
    },
    AppBskyEmbedImages: {
        lexicon: 1,
        id: "app.bsky.embed.images",
        description: "A set of images embedded in some other form of content",
        defs: {
            main: {
                type: "object",
                required: [
                    "images"
                ],
                properties: {
                    images: {
                        type: "array",
                        items: {
                            type: "ref",
                            ref: "lex:app.bsky.embed.images#image"
                        },
                        maxLength: 4
                    }
                }
            },
            image: {
                type: "object",
                required: [
                    "image",
                    "alt"
                ],
                properties: {
                    image: {
                        type: "blob",
                        accept: [
                            "image/*"
                        ],
                        maxSize: 1e6
                    },
                    alt: {
                        type: "string"
                    }
                }
            },
            view: {
                type: "object",
                required: [
                    "images"
                ],
                properties: {
                    images: {
                        type: "array",
                        items: {
                            type: "ref",
                            ref: "lex:app.bsky.embed.images#viewImage"
                        },
                        maxLength: 4
                    }
                }
            },
            viewImage: {
                type: "object",
                required: [
                    "thumb",
                    "fullsize",
                    "alt"
                ],
                properties: {
                    thumb: {
                        type: "string"
                    },
                    fullsize: {
                        type: "string"
                    },
                    alt: {
                        type: "string"
                    }
                }
            }
        }
    },
    AppBskyEmbedRecord: {
        lexicon: 1,
        id: "app.bsky.embed.record",
        description: "A representation of a record embedded in another form of content",
        defs: {
            main: {
                type: "object",
                required: [
                    "record"
                ],
                properties: {
                    record: {
                        type: "ref",
                        ref: "lex:com.atproto.repo.strongRef"
                    }
                }
            },
            view: {
                type: "object",
                required: [
                    "record"
                ],
                properties: {
                    record: {
                        type: "union",
                        refs: [
                            "lex:app.bsky.embed.record#viewRecord",
                            "lex:app.bsky.embed.record#viewNotFound"
                        ]
                    }
                }
            },
            viewRecord: {
                type: "object",
                required: [
                    "uri",
                    "cid",
                    "author",
                    "value",
                    "indexedAt"
                ],
                properties: {
                    uri: {
                        type: "string",
                        format: "at-uri"
                    },
                    cid: {
                        type: "string",
                        format: "cid"
                    },
                    author: {
                        type: "ref",
                        ref: "lex:app.bsky.actor.defs#profileViewBasic"
                    },
                    value: {
                        type: "unknown"
                    },
                    embeds: {
                        type: "array",
                        items: {
                            type: "union",
                            refs: [
                                "lex:app.bsky.embed.images#view",
                                "lex:app.bsky.embed.external#view",
                                "lex:app.bsky.embed.record#view",
                                "lex:app.bsky.embed.recordWithMedia#view"
                            ]
                        }
                    },
                    indexedAt: {
                        type: "string",
                        format: "datetime"
                    }
                }
            },
            viewNotFound: {
                type: "object",
                required: [
                    "uri"
                ],
                properties: {
                    uri: {
                        type: "string",
                        format: "at-uri"
                    }
                }
            }
        }
    },
    AppBskyEmbedRecordWithMedia: {
        lexicon: 1,
        id: "app.bsky.embed.recordWithMedia",
        description: "A representation of a record embedded in another form of content, alongside other compatible embeds",
        defs: {
            main: {
                type: "object",
                required: [
                    "record",
                    "media"
                ],
                properties: {
                    record: {
                        type: "ref",
                        ref: "lex:app.bsky.embed.record"
                    },
                    media: {
                        type: "union",
                        refs: [
                            "lex:app.bsky.embed.images",
                            "lex:app.bsky.embed.external"
                        ]
                    }
                }
            },
            view: {
                type: "object",
                required: [
                    "record",
                    "media"
                ],
                properties: {
                    record: {
                        type: "ref",
                        ref: "lex:app.bsky.embed.record#view"
                    },
                    media: {
                        type: "union",
                        refs: [
                            "lex:app.bsky.embed.images#view",
                            "lex:app.bsky.embed.external#view"
                        ]
                    }
                }
            }
        }
    },
    AppBskyFeedDefs: {
        lexicon: 1,
        id: "app.bsky.feed.defs",
        defs: {
            postView: {
                type: "object",
                required: [
                    "uri",
                    "cid",
                    "author",
                    "record",
                    "indexedAt"
                ],
                properties: {
                    uri: {
                        type: "string",
                        format: "at-uri"
                    },
                    cid: {
                        type: "string",
                        format: "cid"
                    },
                    author: {
                        type: "ref",
                        ref: "lex:app.bsky.actor.defs#profileViewBasic"
                    },
                    record: {
                        type: "unknown"
                    },
                    embed: {
                        type: "union",
                        refs: [
                            "lex:app.bsky.embed.images#view",
                            "lex:app.bsky.embed.external#view",
                            "lex:app.bsky.embed.record#view",
                            "lex:app.bsky.embed.recordWithMedia#view"
                        ]
                    },
                    replyCount: {
                        type: "integer"
                    },
                    repostCount: {
                        type: "integer"
                    },
                    likeCount: {
                        type: "integer"
                    },
                    indexedAt: {
                        type: "string",
                        format: "datetime"
                    },
                    viewer: {
                        type: "ref",
                        ref: "lex:app.bsky.feed.defs#viewerState"
                    },
                    labels: {
                        type: "array",
                        items: {
                            type: "ref",
                            ref: "lex:com.atproto.label.defs#label"
                        }
                    }
                }
            },
            viewerState: {
                type: "object",
                properties: {
                    repost: {
                        type: "string",
                        format: "at-uri"
                    },
                    like: {
                        type: "string",
                        format: "at-uri"
                    }
                }
            },
            feedViewPost: {
                type: "object",
                required: [
                    "post"
                ],
                properties: {
                    post: {
                        type: "ref",
                        ref: "lex:app.bsky.feed.defs#postView"
                    },
                    reply: {
                        type: "ref",
                        ref: "lex:app.bsky.feed.defs#replyRef"
                    },
                    reason: {
                        type: "union",
                        refs: [
                            "lex:app.bsky.feed.defs#reasonRepost"
                        ]
                    }
                }
            },
            replyRef: {
                type: "object",
                required: [
                    "root",
                    "parent"
                ],
                properties: {
                    root: {
                        type: "ref",
                        ref: "lex:app.bsky.feed.defs#postView"
                    },
                    parent: {
                        type: "ref",
                        ref: "lex:app.bsky.feed.defs#postView"
                    }
                }
            },
            reasonRepost: {
                type: "object",
                required: [
                    "by",
                    "indexedAt"
                ],
                properties: {
                    by: {
                        type: "ref",
                        ref: "lex:app.bsky.actor.defs#profileViewBasic"
                    },
                    indexedAt: {
                        type: "string",
                        format: "datetime"
                    }
                }
            },
            threadViewPost: {
                type: "object",
                required: [
                    "post"
                ],
                properties: {
                    post: {
                        type: "ref",
                        ref: "lex:app.bsky.feed.defs#postView"
                    },
                    parent: {
                        type: "union",
                        refs: [
                            "lex:app.bsky.feed.defs#threadViewPost",
                            "lex:app.bsky.feed.defs#notFoundPost"
                        ]
                    },
                    replies: {
                        type: "array",
                        items: {
                            type: "union",
                            refs: [
                                "lex:app.bsky.feed.defs#threadViewPost",
                                "lex:app.bsky.feed.defs#notFoundPost"
                            ]
                        }
                    }
                }
            },
            notFoundPost: {
                type: "object",
                required: [
                    "uri",
                    "notFound"
                ],
                properties: {
                    uri: {
                        type: "string",
                        format: "at-uri"
                    },
                    notFound: {
                        type: "boolean",
                        const: true
                    }
                }
            }
        }
    },
    AppBskyFeedGetAuthorFeed: {
        lexicon: 1,
        id: "app.bsky.feed.getAuthorFeed",
        defs: {
            main: {
                type: "query",
                description: "A view of an actor's feed.",
                parameters: {
                    type: "params",
                    required: [
                        "actor"
                    ],
                    properties: {
                        actor: {
                            type: "string",
                            format: "at-identifier"
                        },
                        limit: {
                            type: "integer",
                            minimum: 1,
                            maximum: 100,
                            default: 50
                        },
                        cursor: {
                            type: "string"
                        }
                    }
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "feed"
                        ],
                        properties: {
                            cursor: {
                                type: "string"
                            },
                            feed: {
                                type: "array",
                                items: {
                                    type: "ref",
                                    ref: "lex:app.bsky.feed.defs#feedViewPost"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    AppBskyFeedGetLikes: {
        lexicon: 1,
        id: "app.bsky.feed.getLikes",
        defs: {
            main: {
                type: "query",
                parameters: {
                    type: "params",
                    required: [
                        "uri"
                    ],
                    properties: {
                        uri: {
                            type: "string",
                            format: "at-uri"
                        },
                        cid: {
                            type: "string",
                            format: "cid"
                        },
                        limit: {
                            type: "integer",
                            minimum: 1,
                            maximum: 100,
                            default: 50
                        },
                        cursor: {
                            type: "string"
                        }
                    }
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "uri",
                            "likes"
                        ],
                        properties: {
                            uri: {
                                type: "string",
                                format: "at-uri"
                            },
                            cid: {
                                type: "string",
                                format: "cid"
                            },
                            cursor: {
                                type: "string"
                            },
                            likes: {
                                type: "array",
                                items: {
                                    type: "ref",
                                    ref: "lex:app.bsky.feed.getLikes#like"
                                }
                            }
                        }
                    }
                }
            },
            like: {
                type: "object",
                required: [
                    "indexedAt",
                    "createdAt",
                    "actor"
                ],
                properties: {
                    indexedAt: {
                        type: "string",
                        format: "datetime"
                    },
                    createdAt: {
                        type: "string",
                        format: "datetime"
                    },
                    actor: {
                        type: "ref",
                        ref: "lex:app.bsky.actor.defs#profileView"
                    }
                }
            }
        }
    },
    AppBskyFeedGetPostThread: {
        lexicon: 1,
        id: "app.bsky.feed.getPostThread",
        defs: {
            main: {
                type: "query",
                parameters: {
                    type: "params",
                    required: [
                        "uri"
                    ],
                    properties: {
                        uri: {
                            type: "string",
                            format: "at-uri"
                        },
                        depth: {
                            type: "integer"
                        }
                    }
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "thread"
                        ],
                        properties: {
                            thread: {
                                type: "union",
                                refs: [
                                    "lex:app.bsky.feed.defs#threadViewPost",
                                    "lex:app.bsky.feed.defs#notFoundPost"
                                ]
                            }
                        }
                    }
                },
                errors: [
                    {
                        name: "NotFound"
                    }
                ]
            }
        }
    },
    AppBskyFeedGetRepostedBy: {
        lexicon: 1,
        id: "app.bsky.feed.getRepostedBy",
        defs: {
            main: {
                type: "query",
                parameters: {
                    type: "params",
                    required: [
                        "uri"
                    ],
                    properties: {
                        uri: {
                            type: "string",
                            format: "at-uri"
                        },
                        cid: {
                            type: "string",
                            format: "cid"
                        },
                        limit: {
                            type: "integer",
                            minimum: 1,
                            maximum: 100,
                            default: 50
                        },
                        cursor: {
                            type: "string"
                        }
                    }
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "uri",
                            "repostedBy"
                        ],
                        properties: {
                            uri: {
                                type: "string",
                                format: "at-uri"
                            },
                            cid: {
                                type: "string",
                                format: "cid"
                            },
                            cursor: {
                                type: "string"
                            },
                            repostedBy: {
                                type: "array",
                                items: {
                                    type: "ref",
                                    ref: "lex:app.bsky.actor.defs#profileView"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    AppBskyFeedGetTimeline: {
        lexicon: 1,
        id: "app.bsky.feed.getTimeline",
        defs: {
            main: {
                type: "query",
                description: "A view of the user's home timeline.",
                parameters: {
                    type: "params",
                    properties: {
                        algorithm: {
                            type: "string"
                        },
                        limit: {
                            type: "integer",
                            minimum: 1,
                            maximum: 100,
                            default: 50
                        },
                        cursor: {
                            type: "string"
                        }
                    }
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "feed"
                        ],
                        properties: {
                            cursor: {
                                type: "string"
                            },
                            feed: {
                                type: "array",
                                items: {
                                    type: "ref",
                                    ref: "lex:app.bsky.feed.defs#feedViewPost"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    AppBskyFeedLike: {
        lexicon: 1,
        id: "app.bsky.feed.like",
        defs: {
            main: {
                type: "record",
                key: "tid",
                record: {
                    type: "object",
                    required: [
                        "subject",
                        "createdAt"
                    ],
                    properties: {
                        subject: {
                            type: "ref",
                            ref: "lex:com.atproto.repo.strongRef"
                        },
                        createdAt: {
                            type: "string",
                            format: "datetime"
                        }
                    }
                }
            }
        }
    },
    AppBskyFeedPost: {
        lexicon: 1,
        id: "app.bsky.feed.post",
        defs: {
            main: {
                type: "record",
                key: "tid",
                record: {
                    type: "object",
                    required: [
                        "text",
                        "createdAt"
                    ],
                    properties: {
                        text: {
                            type: "string",
                            maxLength: 3e3,
                            maxGraphemes: 300
                        },
                        entities: {
                            type: "array",
                            description: "Deprecated: replaced by app.bsky.richtext.facet.",
                            items: {
                                type: "ref",
                                ref: "lex:app.bsky.feed.post#entity"
                            }
                        },
                        facets: {
                            type: "array",
                            items: {
                                type: "ref",
                                ref: "lex:app.bsky.richtext.facet"
                            }
                        },
                        reply: {
                            type: "ref",
                            ref: "lex:app.bsky.feed.post#replyRef"
                        },
                        embed: {
                            type: "union",
                            refs: [
                                "lex:app.bsky.embed.images",
                                "lex:app.bsky.embed.external",
                                "lex:app.bsky.embed.record",
                                "lex:app.bsky.embed.recordWithMedia"
                            ]
                        },
                        createdAt: {
                            type: "string",
                            format: "datetime"
                        }
                    }
                }
            },
            replyRef: {
                type: "object",
                required: [
                    "root",
                    "parent"
                ],
                properties: {
                    root: {
                        type: "ref",
                        ref: "lex:com.atproto.repo.strongRef"
                    },
                    parent: {
                        type: "ref",
                        ref: "lex:com.atproto.repo.strongRef"
                    }
                }
            },
            entity: {
                type: "object",
                description: "Deprecated: use facets instead.",
                required: [
                    "index",
                    "type",
                    "value"
                ],
                properties: {
                    index: {
                        type: "ref",
                        ref: "lex:app.bsky.feed.post#textSlice"
                    },
                    type: {
                        type: "string",
                        description: "Expected values are 'mention' and 'link'."
                    },
                    value: {
                        type: "string"
                    }
                }
            },
            textSlice: {
                type: "object",
                description: "Deprecated. Use app.bsky.richtext instead -- A text segment. Start is inclusive, end is exclusive. Indices are for utf16-encoded strings.",
                required: [
                    "start",
                    "end"
                ],
                properties: {
                    start: {
                        type: "integer",
                        minimum: 0
                    },
                    end: {
                        type: "integer",
                        minimum: 0
                    }
                }
            }
        }
    },
    AppBskyFeedRepost: {
        lexicon: 1,
        id: "app.bsky.feed.repost",
        defs: {
            main: {
                type: "record",
                key: "tid",
                record: {
                    type: "object",
                    required: [
                        "subject",
                        "createdAt"
                    ],
                    properties: {
                        subject: {
                            type: "ref",
                            ref: "lex:com.atproto.repo.strongRef"
                        },
                        createdAt: {
                            type: "string",
                            format: "datetime"
                        }
                    }
                }
            }
        }
    },
    AppBskyGraphFollow: {
        lexicon: 1,
        id: "app.bsky.graph.follow",
        defs: {
            main: {
                type: "record",
                description: "A social follow.",
                key: "tid",
                record: {
                    type: "object",
                    required: [
                        "subject",
                        "createdAt"
                    ],
                    properties: {
                        subject: {
                            type: "string",
                            format: "did"
                        },
                        createdAt: {
                            type: "string",
                            format: "datetime"
                        }
                    }
                }
            }
        }
    },
    AppBskyGraphGetFollowers: {
        lexicon: 1,
        id: "app.bsky.graph.getFollowers",
        defs: {
            main: {
                type: "query",
                description: "Who is following an actor?",
                parameters: {
                    type: "params",
                    required: [
                        "actor"
                    ],
                    properties: {
                        actor: {
                            type: "string",
                            format: "at-identifier"
                        },
                        limit: {
                            type: "integer",
                            minimum: 1,
                            maximum: 100,
                            default: 50
                        },
                        cursor: {
                            type: "string"
                        }
                    }
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "subject",
                            "followers"
                        ],
                        properties: {
                            subject: {
                                type: "ref",
                                ref: "lex:app.bsky.actor.defs#profileView"
                            },
                            cursor: {
                                type: "string"
                            },
                            followers: {
                                type: "array",
                                items: {
                                    type: "ref",
                                    ref: "lex:app.bsky.actor.defs#profileView"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    AppBskyGraphGetFollows: {
        lexicon: 1,
        id: "app.bsky.graph.getFollows",
        defs: {
            main: {
                type: "query",
                description: "Who is an actor following?",
                parameters: {
                    type: "params",
                    required: [
                        "actor"
                    ],
                    properties: {
                        actor: {
                            type: "string",
                            format: "at-identifier"
                        },
                        limit: {
                            type: "integer",
                            minimum: 1,
                            maximum: 100,
                            default: 50
                        },
                        cursor: {
                            type: "string"
                        }
                    }
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "subject",
                            "follows"
                        ],
                        properties: {
                            subject: {
                                type: "ref",
                                ref: "lex:app.bsky.actor.defs#profileView"
                            },
                            cursor: {
                                type: "string"
                            },
                            follows: {
                                type: "array",
                                items: {
                                    type: "ref",
                                    ref: "lex:app.bsky.actor.defs#profileView"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    AppBskyGraphGetMutes: {
        lexicon: 1,
        id: "app.bsky.graph.getMutes",
        defs: {
            main: {
                type: "query",
                description: "Who does the viewer mute?",
                parameters: {
                    type: "params",
                    properties: {
                        limit: {
                            type: "integer",
                            minimum: 1,
                            maximum: 100,
                            default: 50
                        },
                        cursor: {
                            type: "string"
                        }
                    }
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "mutes"
                        ],
                        properties: {
                            cursor: {
                                type: "string"
                            },
                            mutes: {
                                type: "array",
                                items: {
                                    type: "ref",
                                    ref: "lex:app.bsky.actor.defs#profileView"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    AppBskyGraphMuteActor: {
        lexicon: 1,
        id: "app.bsky.graph.muteActor",
        defs: {
            main: {
                type: "procedure",
                description: "Mute an actor by did or handle.",
                input: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "actor"
                        ],
                        properties: {
                            actor: {
                                type: "string",
                                format: "at-identifier"
                            }
                        }
                    }
                }
            }
        }
    },
    AppBskyGraphUnmuteActor: {
        lexicon: 1,
        id: "app.bsky.graph.unmuteActor",
        defs: {
            main: {
                type: "procedure",
                description: "Unmute an actor by did or handle.",
                input: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "actor"
                        ],
                        properties: {
                            actor: {
                                type: "string",
                                format: "at-identifier"
                            }
                        }
                    }
                }
            }
        }
    },
    AppBskyNotificationGetUnreadCount: {
        lexicon: 1,
        id: "app.bsky.notification.getUnreadCount",
        defs: {
            main: {
                type: "query",
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "count"
                        ],
                        properties: {
                            count: {
                                type: "integer"
                            }
                        }
                    }
                }
            }
        }
    },
    AppBskyNotificationListNotifications: {
        lexicon: 1,
        id: "app.bsky.notification.listNotifications",
        defs: {
            main: {
                type: "query",
                parameters: {
                    type: "params",
                    properties: {
                        limit: {
                            type: "integer",
                            minimum: 1,
                            maximum: 100,
                            default: 50
                        },
                        cursor: {
                            type: "string"
                        }
                    }
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "notifications"
                        ],
                        properties: {
                            cursor: {
                                type: "string"
                            },
                            notifications: {
                                type: "array",
                                items: {
                                    type: "ref",
                                    ref: "lex:app.bsky.notification.listNotifications#notification"
                                }
                            }
                        }
                    }
                }
            },
            notification: {
                type: "object",
                required: [
                    "uri",
                    "cid",
                    "author",
                    "reason",
                    "record",
                    "isRead",
                    "indexedAt"
                ],
                properties: {
                    uri: {
                        type: "string",
                        format: "at-uri"
                    },
                    cid: {
                        type: "string",
                        format: "cid"
                    },
                    author: {
                        type: "ref",
                        ref: "lex:app.bsky.actor.defs#profileView"
                    },
                    reason: {
                        type: "string",
                        description: "Expected values are 'like', 'repost', 'follow', 'mention', 'reply', and 'quote'.",
                        knownValues: [
                            "like",
                            "repost",
                            "follow",
                            "mention",
                            "reply",
                            "quote"
                        ]
                    },
                    reasonSubject: {
                        type: "string",
                        format: "at-uri"
                    },
                    record: {
                        type: "unknown"
                    },
                    isRead: {
                        type: "boolean"
                    },
                    indexedAt: {
                        type: "string",
                        format: "datetime"
                    },
                    labels: {
                        type: "array",
                        items: {
                            type: "ref",
                            ref: "lex:com.atproto.label.defs#label"
                        }
                    }
                }
            }
        }
    },
    AppBskyNotificationUpdateSeen: {
        lexicon: 1,
        id: "app.bsky.notification.updateSeen",
        defs: {
            main: {
                type: "procedure",
                description: "Notify server that the user has seen notifications.",
                input: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "seenAt"
                        ],
                        properties: {
                            seenAt: {
                                type: "string",
                                format: "datetime"
                            }
                        }
                    }
                }
            }
        }
    },
    AppBskyRichtextFacet: {
        lexicon: 1,
        id: "app.bsky.richtext.facet",
        defs: {
            main: {
                type: "object",
                required: [
                    "index",
                    "features"
                ],
                properties: {
                    index: {
                        type: "ref",
                        ref: "lex:app.bsky.richtext.facet#byteSlice"
                    },
                    features: {
                        type: "array",
                        items: {
                            type: "union",
                            refs: [
                                "lex:app.bsky.richtext.facet#mention",
                                "lex:app.bsky.richtext.facet#link"
                            ]
                        }
                    }
                }
            },
            mention: {
                type: "object",
                description: "A facet feature for actor mentions.",
                required: [
                    "did"
                ],
                properties: {
                    did: {
                        type: "string",
                        format: "did"
                    }
                }
            },
            link: {
                type: "object",
                description: "A facet feature for links.",
                required: [
                    "uri"
                ],
                properties: {
                    uri: {
                        type: "string",
                        format: "uri"
                    }
                }
            },
            byteSlice: {
                type: "object",
                description: "A text segment. Start is inclusive, end is exclusive. Indices are for utf8-encoded strings.",
                required: [
                    "byteStart",
                    "byteEnd"
                ],
                properties: {
                    byteStart: {
                        type: "integer",
                        minimum: 0
                    },
                    byteEnd: {
                        type: "integer",
                        minimum: 0
                    }
                }
            }
        }
    },
    AppBskyUnspeccedGetPopular: {
        lexicon: 1,
        id: "app.bsky.unspecced.getPopular",
        defs: {
            main: {
                type: "query",
                description: "An unspecced view of globally popular items",
                parameters: {
                    type: "params",
                    properties: {
                        limit: {
                            type: "integer",
                            minimum: 1,
                            maximum: 100,
                            default: 50
                        },
                        cursor: {
                            type: "string"
                        }
                    }
                },
                output: {
                    encoding: "application/json",
                    schema: {
                        type: "object",
                        required: [
                            "feed"
                        ],
                        properties: {
                            cursor: {
                                type: "string"
                            },
                            feed: {
                                type: "array",
                                items: {
                                    type: "ref",
                                    ref: "lex:app.bsky.feed.defs#feedViewPost"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};
var schemas = Object.values(schemaDict);
var lexicons = new Lexicons(schemas);
// src/client/types/com/atproto/admin/disableInviteCodes.ts
var disableInviteCodes_exports = {};
__export(disableInviteCodes_exports, {
    toKnownErr: ()=>toKnownErr
});
function toKnownErr(e) {
    return e;
}
// src/client/types/com/atproto/admin/getInviteCodes.ts
var getInviteCodes_exports = {};
__export(getInviteCodes_exports, {
    toKnownErr: ()=>toKnownErr2
});
function toKnownErr2(e) {
    return e;
}
// src/client/types/com/atproto/admin/getModerationAction.ts
var getModerationAction_exports = {};
__export(getModerationAction_exports, {
    toKnownErr: ()=>toKnownErr3
});
function toKnownErr3(e) {
    return e;
}
// src/client/types/com/atproto/admin/getModerationActions.ts
var getModerationActions_exports = {};
__export(getModerationActions_exports, {
    toKnownErr: ()=>toKnownErr4
});
function toKnownErr4(e) {
    return e;
}
// src/client/types/com/atproto/admin/getModerationReport.ts
var getModerationReport_exports = {};
__export(getModerationReport_exports, {
    toKnownErr: ()=>toKnownErr5
});
function toKnownErr5(e) {
    return e;
}
// src/client/types/com/atproto/admin/getModerationReports.ts
var getModerationReports_exports = {};
__export(getModerationReports_exports, {
    toKnownErr: ()=>toKnownErr6
});
function toKnownErr6(e) {
    return e;
}
// src/client/types/com/atproto/admin/getRecord.ts
var getRecord_exports = {};
__export(getRecord_exports, {
    toKnownErr: ()=>toKnownErr7
});
function toKnownErr7(e) {
    return e;
}
// src/client/types/com/atproto/admin/getRepo.ts
var getRepo_exports = {};
__export(getRepo_exports, {
    toKnownErr: ()=>toKnownErr8
});
function toKnownErr8(e) {
    return e;
}
// src/client/types/com/atproto/admin/resolveModerationReports.ts
var resolveModerationReports_exports = {};
__export(resolveModerationReports_exports, {
    toKnownErr: ()=>toKnownErr9
});
function toKnownErr9(e) {
    return e;
}
// src/client/types/com/atproto/admin/reverseModerationAction.ts
var reverseModerationAction_exports = {};
__export(reverseModerationAction_exports, {
    toKnownErr: ()=>toKnownErr10
});
function toKnownErr10(e) {
    return e;
}
// src/client/types/com/atproto/admin/searchRepos.ts
var searchRepos_exports = {};
__export(searchRepos_exports, {
    toKnownErr: ()=>toKnownErr11
});
function toKnownErr11(e) {
    return e;
}
// src/client/types/com/atproto/admin/takeModerationAction.ts
var takeModerationAction_exports = {};
__export(takeModerationAction_exports, {
    SubjectHasActionError: ()=>SubjectHasActionError,
    toKnownErr: ()=>toKnownErr12
});
var SubjectHasActionError = class extends XRPCError {
    constructor(src2){
        super(src2.status, src2.error, src2.message);
    }
};
function toKnownErr12(e) {
    if (e instanceof XRPCError) {
        if (e.error === "SubjectHasAction") return new SubjectHasActionError(e);
    }
    return e;
}
// src/client/types/com/atproto/admin/updateAccountHandle.ts
var updateAccountHandle_exports = {};
__export(updateAccountHandle_exports, {
    toKnownErr: ()=>toKnownErr13
});
function toKnownErr13(e) {
    return e;
}
// src/client/types/com/atproto/identity/resolveHandle.ts
var resolveHandle_exports = {};
__export(resolveHandle_exports, {
    toKnownErr: ()=>toKnownErr14
});
function toKnownErr14(e) {
    return e;
}
// src/client/types/com/atproto/identity/updateHandle.ts
var updateHandle_exports = {};
__export(updateHandle_exports, {
    toKnownErr: ()=>toKnownErr15
});
function toKnownErr15(e) {
    return e;
}
// src/client/types/com/atproto/label/queryLabels.ts
var queryLabels_exports = {};
__export(queryLabels_exports, {
    toKnownErr: ()=>toKnownErr16
});
function toKnownErr16(e) {
    return e;
}
// src/client/types/com/atproto/moderation/createReport.ts
var createReport_exports = {};
__export(createReport_exports, {
    toKnownErr: ()=>toKnownErr17
});
function toKnownErr17(e) {
    return e;
}
// src/client/types/com/atproto/repo/applyWrites.ts
var applyWrites_exports = {};
__export(applyWrites_exports, {
    InvalidSwapError: ()=>InvalidSwapError,
    isCreate: ()=>isCreate,
    isDelete: ()=>isDelete,
    isUpdate: ()=>isUpdate,
    toKnownErr: ()=>toKnownErr18,
    validateCreate: ()=>validateCreate,
    validateDelete: ()=>validateDelete,
    validateUpdate: ()=>validateUpdate
});
// src/client/util.ts
function isObj2(v) {
    return typeof v === "object" && v !== null;
}
function hasProp2(data, prop) {
    return prop in data;
}
// src/client/types/com/atproto/repo/applyWrites.ts
var InvalidSwapError = class extends XRPCError {
    constructor(src2){
        super(src2.status, src2.error, src2.message);
    }
};
function toKnownErr18(e) {
    if (e instanceof XRPCError) {
        if (e.error === "InvalidSwap") return new InvalidSwapError(e);
    }
    return e;
}
function isCreate(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "com.atproto.repo.applyWrites#create";
}
function validateCreate(v) {
    return lexicons.validate("com.atproto.repo.applyWrites#create", v);
}
function isUpdate(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "com.atproto.repo.applyWrites#update";
}
function validateUpdate(v) {
    return lexicons.validate("com.atproto.repo.applyWrites#update", v);
}
function isDelete(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "com.atproto.repo.applyWrites#delete";
}
function validateDelete(v) {
    return lexicons.validate("com.atproto.repo.applyWrites#delete", v);
}
// src/client/types/com/atproto/repo/createRecord.ts
var createRecord_exports = {};
__export(createRecord_exports, {
    InvalidSwapError: ()=>InvalidSwapError2,
    toKnownErr: ()=>toKnownErr19
});
var InvalidSwapError2 = class extends XRPCError {
    constructor(src2){
        super(src2.status, src2.error, src2.message);
    }
};
function toKnownErr19(e) {
    if (e instanceof XRPCError) {
        if (e.error === "InvalidSwap") return new InvalidSwapError2(e);
    }
    return e;
}
// src/client/types/com/atproto/repo/deleteRecord.ts
var deleteRecord_exports = {};
__export(deleteRecord_exports, {
    InvalidSwapError: ()=>InvalidSwapError3,
    toKnownErr: ()=>toKnownErr20
});
var InvalidSwapError3 = class extends XRPCError {
    constructor(src2){
        super(src2.status, src2.error, src2.message);
    }
};
function toKnownErr20(e) {
    if (e instanceof XRPCError) {
        if (e.error === "InvalidSwap") return new InvalidSwapError3(e);
    }
    return e;
}
// src/client/types/com/atproto/repo/describeRepo.ts
var describeRepo_exports = {};
__export(describeRepo_exports, {
    toKnownErr: ()=>toKnownErr21
});
function toKnownErr21(e) {
    return e;
}
// src/client/types/com/atproto/repo/getRecord.ts
var getRecord_exports2 = {};
__export(getRecord_exports2, {
    toKnownErr: ()=>toKnownErr22
});
function toKnownErr22(e) {
    return e;
}
// src/client/types/com/atproto/repo/listRecords.ts
var listRecords_exports = {};
__export(listRecords_exports, {
    isRecord: ()=>isRecord,
    toKnownErr: ()=>toKnownErr23,
    validateRecord: ()=>validateRecord
});
function toKnownErr23(e) {
    return e;
}
function isRecord(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "com.atproto.repo.listRecords#record";
}
function validateRecord(v) {
    return lexicons.validate("com.atproto.repo.listRecords#record", v);
}
// src/client/types/com/atproto/repo/putRecord.ts
var putRecord_exports = {};
__export(putRecord_exports, {
    InvalidSwapError: ()=>InvalidSwapError4,
    toKnownErr: ()=>toKnownErr24
});
var InvalidSwapError4 = class extends XRPCError {
    constructor(src2){
        super(src2.status, src2.error, src2.message);
    }
};
function toKnownErr24(e) {
    if (e instanceof XRPCError) {
        if (e.error === "InvalidSwap") return new InvalidSwapError4(e);
    }
    return e;
}
// src/client/types/com/atproto/repo/uploadBlob.ts
var uploadBlob_exports = {};
__export(uploadBlob_exports, {
    toKnownErr: ()=>toKnownErr25
});
function toKnownErr25(e) {
    return e;
}
// src/client/types/com/atproto/server/createAccount.ts
var createAccount_exports = {};
__export(createAccount_exports, {
    HandleNotAvailableError: ()=>HandleNotAvailableError,
    InvalidHandleError: ()=>InvalidHandleError2,
    InvalidInviteCodeError: ()=>InvalidInviteCodeError,
    InvalidPasswordError: ()=>InvalidPasswordError,
    UnsupportedDomainError: ()=>UnsupportedDomainError,
    toKnownErr: ()=>toKnownErr26
});
var InvalidHandleError2 = class extends XRPCError {
    constructor(src2){
        super(src2.status, src2.error, src2.message);
    }
};
var InvalidPasswordError = class extends XRPCError {
    constructor(src2){
        super(src2.status, src2.error, src2.message);
    }
};
var InvalidInviteCodeError = class extends XRPCError {
    constructor(src2){
        super(src2.status, src2.error, src2.message);
    }
};
var HandleNotAvailableError = class extends XRPCError {
    constructor(src2){
        super(src2.status, src2.error, src2.message);
    }
};
var UnsupportedDomainError = class extends XRPCError {
    constructor(src2){
        super(src2.status, src2.error, src2.message);
    }
};
function toKnownErr26(e) {
    if (e instanceof XRPCError) {
        if (e.error === "InvalidHandle") return new InvalidHandleError2(e);
        if (e.error === "InvalidPassword") return new InvalidPasswordError(e);
        if (e.error === "InvalidInviteCode") return new InvalidInviteCodeError(e);
        if (e.error === "HandleNotAvailable") return new HandleNotAvailableError(e);
        if (e.error === "UnsupportedDomain") return new UnsupportedDomainError(e);
    }
    return e;
}
// src/client/types/com/atproto/server/createInviteCode.ts
var createInviteCode_exports = {};
__export(createInviteCode_exports, {
    toKnownErr: ()=>toKnownErr27
});
function toKnownErr27(e) {
    return e;
}
// src/client/types/com/atproto/server/createInviteCodes.ts
var createInviteCodes_exports = {};
__export(createInviteCodes_exports, {
    toKnownErr: ()=>toKnownErr28
});
function toKnownErr28(e) {
    return e;
}
// src/client/types/com/atproto/server/createSession.ts
var createSession_exports = {};
__export(createSession_exports, {
    AccountTakedownError: ()=>AccountTakedownError,
    toKnownErr: ()=>toKnownErr29
});
var AccountTakedownError = class extends XRPCError {
    constructor(src2){
        super(src2.status, src2.error, src2.message);
    }
};
function toKnownErr29(e) {
    if (e instanceof XRPCError) {
        if (e.error === "AccountTakedown") return new AccountTakedownError(e);
    }
    return e;
}
// src/client/types/com/atproto/server/deleteAccount.ts
var deleteAccount_exports = {};
__export(deleteAccount_exports, {
    ExpiredTokenError: ()=>ExpiredTokenError,
    InvalidTokenError: ()=>InvalidTokenError,
    toKnownErr: ()=>toKnownErr30
});
var ExpiredTokenError = class extends XRPCError {
    constructor(src2){
        super(src2.status, src2.error, src2.message);
    }
};
var InvalidTokenError = class extends XRPCError {
    constructor(src2){
        super(src2.status, src2.error, src2.message);
    }
};
function toKnownErr30(e) {
    if (e instanceof XRPCError) {
        if (e.error === "ExpiredToken") return new ExpiredTokenError(e);
        if (e.error === "InvalidToken") return new InvalidTokenError(e);
    }
    return e;
}
// src/client/types/com/atproto/server/deleteSession.ts
var deleteSession_exports = {};
__export(deleteSession_exports, {
    toKnownErr: ()=>toKnownErr31
});
function toKnownErr31(e) {
    return e;
}
// src/client/types/com/atproto/server/describeServer.ts
var describeServer_exports = {};
__export(describeServer_exports, {
    isLinks: ()=>isLinks,
    toKnownErr: ()=>toKnownErr32,
    validateLinks: ()=>validateLinks
});
function toKnownErr32(e) {
    return e;
}
function isLinks(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "com.atproto.server.describeServer#links";
}
function validateLinks(v) {
    return lexicons.validate("com.atproto.server.describeServer#links", v);
}
// src/client/types/com/atproto/server/getAccountInviteCodes.ts
var getAccountInviteCodes_exports = {};
__export(getAccountInviteCodes_exports, {
    DuplicateCreateError: ()=>DuplicateCreateError,
    toKnownErr: ()=>toKnownErr33
});
var DuplicateCreateError = class extends XRPCError {
    constructor(src2){
        super(src2.status, src2.error, src2.message);
    }
};
function toKnownErr33(e) {
    if (e instanceof XRPCError) {
        if (e.error === "DuplicateCreate") return new DuplicateCreateError(e);
    }
    return e;
}
// src/client/types/com/atproto/server/getSession.ts
var getSession_exports = {};
__export(getSession_exports, {
    toKnownErr: ()=>toKnownErr34
});
function toKnownErr34(e) {
    return e;
}
// src/client/types/com/atproto/server/refreshSession.ts
var refreshSession_exports = {};
__export(refreshSession_exports, {
    AccountTakedownError: ()=>AccountTakedownError2,
    toKnownErr: ()=>toKnownErr35
});
var AccountTakedownError2 = class extends XRPCError {
    constructor(src2){
        super(src2.status, src2.error, src2.message);
    }
};
function toKnownErr35(e) {
    if (e instanceof XRPCError) {
        if (e.error === "AccountTakedown") return new AccountTakedownError2(e);
    }
    return e;
}
// src/client/types/com/atproto/server/requestAccountDelete.ts
var requestAccountDelete_exports = {};
__export(requestAccountDelete_exports, {
    toKnownErr: ()=>toKnownErr36
});
function toKnownErr36(e) {
    return e;
}
// src/client/types/com/atproto/server/requestPasswordReset.ts
var requestPasswordReset_exports = {};
__export(requestPasswordReset_exports, {
    toKnownErr: ()=>toKnownErr37
});
function toKnownErr37(e) {
    return e;
}
// src/client/types/com/atproto/server/resetPassword.ts
var resetPassword_exports = {};
__export(resetPassword_exports, {
    ExpiredTokenError: ()=>ExpiredTokenError2,
    InvalidTokenError: ()=>InvalidTokenError2,
    toKnownErr: ()=>toKnownErr38
});
var ExpiredTokenError2 = class extends XRPCError {
    constructor(src2){
        super(src2.status, src2.error, src2.message);
    }
};
var InvalidTokenError2 = class extends XRPCError {
    constructor(src2){
        super(src2.status, src2.error, src2.message);
    }
};
function toKnownErr38(e) {
    if (e instanceof XRPCError) {
        if (e.error === "ExpiredToken") return new ExpiredTokenError2(e);
        if (e.error === "InvalidToken") return new InvalidTokenError2(e);
    }
    return e;
}
// src/client/types/com/atproto/sync/getBlob.ts
var getBlob_exports = {};
__export(getBlob_exports, {
    toKnownErr: ()=>toKnownErr39
});
function toKnownErr39(e) {
    return e;
}
// src/client/types/com/atproto/sync/getBlocks.ts
var getBlocks_exports = {};
__export(getBlocks_exports, {
    toKnownErr: ()=>toKnownErr40
});
function toKnownErr40(e) {
    return e;
}
// src/client/types/com/atproto/sync/getCheckout.ts
var getCheckout_exports = {};
__export(getCheckout_exports, {
    toKnownErr: ()=>toKnownErr41
});
function toKnownErr41(e) {
    return e;
}
// src/client/types/com/atproto/sync/getCommitPath.ts
var getCommitPath_exports = {};
__export(getCommitPath_exports, {
    toKnownErr: ()=>toKnownErr42
});
function toKnownErr42(e) {
    return e;
}
// src/client/types/com/atproto/sync/getHead.ts
var getHead_exports = {};
__export(getHead_exports, {
    toKnownErr: ()=>toKnownErr43
});
function toKnownErr43(e) {
    return e;
}
// src/client/types/com/atproto/sync/getRecord.ts
var getRecord_exports3 = {};
__export(getRecord_exports3, {
    toKnownErr: ()=>toKnownErr44
});
function toKnownErr44(e) {
    return e;
}
// src/client/types/com/atproto/sync/getRepo.ts
var getRepo_exports2 = {};
__export(getRepo_exports2, {
    toKnownErr: ()=>toKnownErr45
});
function toKnownErr45(e) {
    return e;
}
// src/client/types/com/atproto/sync/listBlobs.ts
var listBlobs_exports = {};
__export(listBlobs_exports, {
    toKnownErr: ()=>toKnownErr46
});
function toKnownErr46(e) {
    return e;
}
// src/client/types/com/atproto/sync/listRepos.ts
var listRepos_exports = {};
__export(listRepos_exports, {
    isRepo: ()=>isRepo,
    toKnownErr: ()=>toKnownErr47,
    validateRepo: ()=>validateRepo
});
function toKnownErr47(e) {
    return e;
}
function isRepo(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "com.atproto.sync.listRepos#repo";
}
function validateRepo(v) {
    return lexicons.validate("com.atproto.sync.listRepos#repo", v);
}
// src/client/types/com/atproto/sync/notifyOfUpdate.ts
var notifyOfUpdate_exports = {};
__export(notifyOfUpdate_exports, {
    toKnownErr: ()=>toKnownErr48
});
function toKnownErr48(e) {
    return e;
}
// src/client/types/com/atproto/sync/requestCrawl.ts
var requestCrawl_exports = {};
__export(requestCrawl_exports, {
    toKnownErr: ()=>toKnownErr49
});
function toKnownErr49(e) {
    return e;
}
// src/client/types/app/bsky/actor/getProfile.ts
var getProfile_exports = {};
__export(getProfile_exports, {
    toKnownErr: ()=>toKnownErr50
});
function toKnownErr50(e) {
    return e;
}
// src/client/types/app/bsky/actor/getProfiles.ts
var getProfiles_exports = {};
__export(getProfiles_exports, {
    toKnownErr: ()=>toKnownErr51
});
function toKnownErr51(e) {
    return e;
}
// src/client/types/app/bsky/actor/getSuggestions.ts
var getSuggestions_exports = {};
__export(getSuggestions_exports, {
    toKnownErr: ()=>toKnownErr52
});
function toKnownErr52(e) {
    return e;
}
// src/client/types/app/bsky/actor/searchActors.ts
var searchActors_exports = {};
__export(searchActors_exports, {
    toKnownErr: ()=>toKnownErr53
});
function toKnownErr53(e) {
    return e;
}
// src/client/types/app/bsky/actor/searchActorsTypeahead.ts
var searchActorsTypeahead_exports = {};
__export(searchActorsTypeahead_exports, {
    toKnownErr: ()=>toKnownErr54
});
function toKnownErr54(e) {
    return e;
}
// src/client/types/app/bsky/feed/getAuthorFeed.ts
var getAuthorFeed_exports = {};
__export(getAuthorFeed_exports, {
    toKnownErr: ()=>toKnownErr55
});
function toKnownErr55(e) {
    return e;
}
// src/client/types/app/bsky/feed/getLikes.ts
var getLikes_exports = {};
__export(getLikes_exports, {
    isLike: ()=>isLike,
    toKnownErr: ()=>toKnownErr56,
    validateLike: ()=>validateLike
});
function toKnownErr56(e) {
    return e;
}
function isLike(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "app.bsky.feed.getLikes#like";
}
function validateLike(v) {
    return lexicons.validate("app.bsky.feed.getLikes#like", v);
}
// src/client/types/app/bsky/feed/getPostThread.ts
var getPostThread_exports = {};
__export(getPostThread_exports, {
    NotFoundError: ()=>NotFoundError,
    toKnownErr: ()=>toKnownErr57
});
var NotFoundError = class extends XRPCError {
    constructor(src2){
        super(src2.status, src2.error, src2.message);
    }
};
function toKnownErr57(e) {
    if (e instanceof XRPCError) {
        if (e.error === "NotFound") return new NotFoundError(e);
    }
    return e;
}
// src/client/types/app/bsky/feed/getRepostedBy.ts
var getRepostedBy_exports = {};
__export(getRepostedBy_exports, {
    toKnownErr: ()=>toKnownErr58
});
function toKnownErr58(e) {
    return e;
}
// src/client/types/app/bsky/feed/getTimeline.ts
var getTimeline_exports = {};
__export(getTimeline_exports, {
    toKnownErr: ()=>toKnownErr59
});
function toKnownErr59(e) {
    return e;
}
// src/client/types/app/bsky/graph/getFollowers.ts
var getFollowers_exports = {};
__export(getFollowers_exports, {
    toKnownErr: ()=>toKnownErr60
});
function toKnownErr60(e) {
    return e;
}
// src/client/types/app/bsky/graph/getFollows.ts
var getFollows_exports = {};
__export(getFollows_exports, {
    toKnownErr: ()=>toKnownErr61
});
function toKnownErr61(e) {
    return e;
}
// src/client/types/app/bsky/graph/getMutes.ts
var getMutes_exports = {};
__export(getMutes_exports, {
    toKnownErr: ()=>toKnownErr62
});
function toKnownErr62(e) {
    return e;
}
// src/client/types/app/bsky/graph/muteActor.ts
var muteActor_exports = {};
__export(muteActor_exports, {
    toKnownErr: ()=>toKnownErr63
});
function toKnownErr63(e) {
    return e;
}
// src/client/types/app/bsky/graph/unmuteActor.ts
var unmuteActor_exports = {};
__export(unmuteActor_exports, {
    toKnownErr: ()=>toKnownErr64
});
function toKnownErr64(e) {
    return e;
}
// src/client/types/app/bsky/notification/getUnreadCount.ts
var getUnreadCount_exports = {};
__export(getUnreadCount_exports, {
    toKnownErr: ()=>toKnownErr65
});
function toKnownErr65(e) {
    return e;
}
// src/client/types/app/bsky/notification/listNotifications.ts
var listNotifications_exports = {};
__export(listNotifications_exports, {
    isNotification: ()=>isNotification,
    toKnownErr: ()=>toKnownErr66,
    validateNotification: ()=>validateNotification
});
function toKnownErr66(e) {
    return e;
}
function isNotification(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "app.bsky.notification.listNotifications#notification";
}
function validateNotification(v) {
    return lexicons.validate("app.bsky.notification.listNotifications#notification", v);
}
// src/client/types/app/bsky/notification/updateSeen.ts
var updateSeen_exports = {};
__export(updateSeen_exports, {
    toKnownErr: ()=>toKnownErr67
});
function toKnownErr67(e) {
    return e;
}
// src/client/types/app/bsky/unspecced/getPopular.ts
var getPopular_exports = {};
__export(getPopular_exports, {
    toKnownErr: ()=>toKnownErr68
});
function toKnownErr68(e) {
    return e;
}
// src/client/types/com/atproto/admin/defs.ts
var defs_exports = {};
__export(defs_exports, {
    ACKNOWLEDGE: ()=>ACKNOWLEDGE,
    FLAG: ()=>FLAG,
    TAKEDOWN: ()=>TAKEDOWN,
    isActionReversal: ()=>isActionReversal,
    isActionView: ()=>isActionView,
    isActionViewCurrent: ()=>isActionViewCurrent,
    isActionViewDetail: ()=>isActionViewDetail,
    isBlobView: ()=>isBlobView,
    isImageDetails: ()=>isImageDetails,
    isModeration: ()=>isModeration,
    isModerationDetail: ()=>isModerationDetail,
    isRecordView: ()=>isRecordView,
    isRecordViewDetail: ()=>isRecordViewDetail,
    isRepoRef: ()=>isRepoRef,
    isRepoView: ()=>isRepoView,
    isRepoViewDetail: ()=>isRepoViewDetail,
    isReportView: ()=>isReportView,
    isReportViewDetail: ()=>isReportViewDetail,
    isVideoDetails: ()=>isVideoDetails,
    validateActionReversal: ()=>validateActionReversal,
    validateActionView: ()=>validateActionView,
    validateActionViewCurrent: ()=>validateActionViewCurrent,
    validateActionViewDetail: ()=>validateActionViewDetail,
    validateBlobView: ()=>validateBlobView,
    validateImageDetails: ()=>validateImageDetails,
    validateModeration: ()=>validateModeration,
    validateModerationDetail: ()=>validateModerationDetail,
    validateRecordView: ()=>validateRecordView,
    validateRecordViewDetail: ()=>validateRecordViewDetail,
    validateRepoRef: ()=>validateRepoRef,
    validateRepoView: ()=>validateRepoView,
    validateRepoViewDetail: ()=>validateRepoViewDetail,
    validateReportView: ()=>validateReportView,
    validateReportViewDetail: ()=>validateReportViewDetail,
    validateVideoDetails: ()=>validateVideoDetails
});
function isActionView(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "com.atproto.admin.defs#actionView";
}
function validateActionView(v) {
    return lexicons.validate("com.atproto.admin.defs#actionView", v);
}
function isActionViewDetail(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "com.atproto.admin.defs#actionViewDetail";
}
function validateActionViewDetail(v) {
    return lexicons.validate("com.atproto.admin.defs#actionViewDetail", v);
}
function isActionViewCurrent(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "com.atproto.admin.defs#actionViewCurrent";
}
function validateActionViewCurrent(v) {
    return lexicons.validate("com.atproto.admin.defs#actionViewCurrent", v);
}
function isActionReversal(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "com.atproto.admin.defs#actionReversal";
}
function validateActionReversal(v) {
    return lexicons.validate("com.atproto.admin.defs#actionReversal", v);
}
var TAKEDOWN = "com.atproto.admin.defs#takedown";
var FLAG = "com.atproto.admin.defs#flag";
var ACKNOWLEDGE = "com.atproto.admin.defs#acknowledge";
function isReportView(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "com.atproto.admin.defs#reportView";
}
function validateReportView(v) {
    return lexicons.validate("com.atproto.admin.defs#reportView", v);
}
function isReportViewDetail(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "com.atproto.admin.defs#reportViewDetail";
}
function validateReportViewDetail(v) {
    return lexicons.validate("com.atproto.admin.defs#reportViewDetail", v);
}
function isRepoView(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "com.atproto.admin.defs#repoView";
}
function validateRepoView(v) {
    return lexicons.validate("com.atproto.admin.defs#repoView", v);
}
function isRepoViewDetail(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "com.atproto.admin.defs#repoViewDetail";
}
function validateRepoViewDetail(v) {
    return lexicons.validate("com.atproto.admin.defs#repoViewDetail", v);
}
function isRepoRef(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "com.atproto.admin.defs#repoRef";
}
function validateRepoRef(v) {
    return lexicons.validate("com.atproto.admin.defs#repoRef", v);
}
function isRecordView(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "com.atproto.admin.defs#recordView";
}
function validateRecordView(v) {
    return lexicons.validate("com.atproto.admin.defs#recordView", v);
}
function isRecordViewDetail(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "com.atproto.admin.defs#recordViewDetail";
}
function validateRecordViewDetail(v) {
    return lexicons.validate("com.atproto.admin.defs#recordViewDetail", v);
}
function isModeration(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "com.atproto.admin.defs#moderation";
}
function validateModeration(v) {
    return lexicons.validate("com.atproto.admin.defs#moderation", v);
}
function isModerationDetail(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "com.atproto.admin.defs#moderationDetail";
}
function validateModerationDetail(v) {
    return lexicons.validate("com.atproto.admin.defs#moderationDetail", v);
}
function isBlobView(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "com.atproto.admin.defs#blobView";
}
function validateBlobView(v) {
    return lexicons.validate("com.atproto.admin.defs#blobView", v);
}
function isImageDetails(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "com.atproto.admin.defs#imageDetails";
}
function validateImageDetails(v) {
    return lexicons.validate("com.atproto.admin.defs#imageDetails", v);
}
function isVideoDetails(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "com.atproto.admin.defs#videoDetails";
}
function validateVideoDetails(v) {
    return lexicons.validate("com.atproto.admin.defs#videoDetails", v);
}
// src/client/types/com/atproto/label/defs.ts
var defs_exports2 = {};
__export(defs_exports2, {
    isLabel: ()=>isLabel,
    validateLabel: ()=>validateLabel
});
function isLabel(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "com.atproto.label.defs#label";
}
function validateLabel(v) {
    return lexicons.validate("com.atproto.label.defs#label", v);
}
// src/client/types/com/atproto/label/subscribeLabels.ts
var subscribeLabels_exports = {};
__export(subscribeLabels_exports, {
    isInfo: ()=>isInfo,
    isLabels: ()=>isLabels,
    validateInfo: ()=>validateInfo,
    validateLabels: ()=>validateLabels
});
function isLabels(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "com.atproto.label.subscribeLabels#labels";
}
function validateLabels(v) {
    return lexicons.validate("com.atproto.label.subscribeLabels#labels", v);
}
function isInfo(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "com.atproto.label.subscribeLabels#info";
}
function validateInfo(v) {
    return lexicons.validate("com.atproto.label.subscribeLabels#info", v);
}
// src/client/types/com/atproto/moderation/defs.ts
var defs_exports3 = {};
__export(defs_exports3, {
    REASONOTHER: ()=>REASONOTHER,
    REASONSPAM: ()=>REASONSPAM
});
var REASONSPAM = "com.atproto.moderation.defs#reasonSpam";
var REASONOTHER = "com.atproto.moderation.defs#reasonOther";
// src/client/types/com/atproto/repo/strongRef.ts
var strongRef_exports = {};
__export(strongRef_exports, {
    isMain: ()=>isMain,
    validateMain: ()=>validateMain
});
function isMain(v) {
    return isObj2(v) && hasProp2(v, "$type") && (v.$type === "com.atproto.repo.strongRef#main" || v.$type === "com.atproto.repo.strongRef");
}
function validateMain(v) {
    return lexicons.validate("com.atproto.repo.strongRef#main", v);
}
// src/client/types/com/atproto/server/defs.ts
var defs_exports4 = {};
__export(defs_exports4, {
    isInviteCode: ()=>isInviteCode,
    isInviteCodeUse: ()=>isInviteCodeUse,
    validateInviteCode: ()=>validateInviteCode,
    validateInviteCodeUse: ()=>validateInviteCodeUse
});
function isInviteCode(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "com.atproto.server.defs#inviteCode";
}
function validateInviteCode(v) {
    return lexicons.validate("com.atproto.server.defs#inviteCode", v);
}
function isInviteCodeUse(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "com.atproto.server.defs#inviteCodeUse";
}
function validateInviteCodeUse(v) {
    return lexicons.validate("com.atproto.server.defs#inviteCodeUse", v);
}
// src/client/types/com/atproto/sync/subscribeRepos.ts
var subscribeRepos_exports = {};
__export(subscribeRepos_exports, {
    isCommit: ()=>isCommit,
    isHandle: ()=>isHandle,
    isInfo: ()=>isInfo2,
    isMigrate: ()=>isMigrate,
    isRepoOp: ()=>isRepoOp,
    isTombstone: ()=>isTombstone,
    validateCommit: ()=>validateCommit,
    validateHandle: ()=>validateHandle,
    validateInfo: ()=>validateInfo2,
    validateMigrate: ()=>validateMigrate,
    validateRepoOp: ()=>validateRepoOp,
    validateTombstone: ()=>validateTombstone
});
function isCommit(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "com.atproto.sync.subscribeRepos#commit";
}
function validateCommit(v) {
    return lexicons.validate("com.atproto.sync.subscribeRepos#commit", v);
}
function isHandle(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "com.atproto.sync.subscribeRepos#handle";
}
function validateHandle(v) {
    return lexicons.validate("com.atproto.sync.subscribeRepos#handle", v);
}
function isMigrate(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "com.atproto.sync.subscribeRepos#migrate";
}
function validateMigrate(v) {
    return lexicons.validate("com.atproto.sync.subscribeRepos#migrate", v);
}
function isTombstone(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "com.atproto.sync.subscribeRepos#tombstone";
}
function validateTombstone(v) {
    return lexicons.validate("com.atproto.sync.subscribeRepos#tombstone", v);
}
function isInfo2(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "com.atproto.sync.subscribeRepos#info";
}
function validateInfo2(v) {
    return lexicons.validate("com.atproto.sync.subscribeRepos#info", v);
}
function isRepoOp(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "com.atproto.sync.subscribeRepos#repoOp";
}
function validateRepoOp(v) {
    return lexicons.validate("com.atproto.sync.subscribeRepos#repoOp", v);
}
// src/client/types/app/bsky/actor/defs.ts
var defs_exports5 = {};
__export(defs_exports5, {
    isProfileView: ()=>isProfileView,
    isProfileViewBasic: ()=>isProfileViewBasic,
    isProfileViewDetailed: ()=>isProfileViewDetailed,
    isViewerState: ()=>isViewerState,
    validateProfileView: ()=>validateProfileView,
    validateProfileViewBasic: ()=>validateProfileViewBasic,
    validateProfileViewDetailed: ()=>validateProfileViewDetailed,
    validateViewerState: ()=>validateViewerState
});
function isProfileViewBasic(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "app.bsky.actor.defs#profileViewBasic";
}
function validateProfileViewBasic(v) {
    return lexicons.validate("app.bsky.actor.defs#profileViewBasic", v);
}
function isProfileView(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "app.bsky.actor.defs#profileView";
}
function validateProfileView(v) {
    return lexicons.validate("app.bsky.actor.defs#profileView", v);
}
function isProfileViewDetailed(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "app.bsky.actor.defs#profileViewDetailed";
}
function validateProfileViewDetailed(v) {
    return lexicons.validate("app.bsky.actor.defs#profileViewDetailed", v);
}
function isViewerState(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "app.bsky.actor.defs#viewerState";
}
function validateViewerState(v) {
    return lexicons.validate("app.bsky.actor.defs#viewerState", v);
}
// src/client/types/app/bsky/actor/profile.ts
var profile_exports = {};
__export(profile_exports, {
    isRecord: ()=>isRecord2,
    validateRecord: ()=>validateRecord2
});
function isRecord2(v) {
    return isObj2(v) && hasProp2(v, "$type") && (v.$type === "app.bsky.actor.profile#main" || v.$type === "app.bsky.actor.profile");
}
function validateRecord2(v) {
    return lexicons.validate("app.bsky.actor.profile#main", v);
}
// src/client/types/app/bsky/embed/external.ts
var external_exports = {};
__export(external_exports, {
    isExternal: ()=>isExternal,
    isMain: ()=>isMain2,
    isView: ()=>isView,
    isViewExternal: ()=>isViewExternal,
    validateExternal: ()=>validateExternal,
    validateMain: ()=>validateMain2,
    validateView: ()=>validateView,
    validateViewExternal: ()=>validateViewExternal
});
function isMain2(v) {
    return isObj2(v) && hasProp2(v, "$type") && (v.$type === "app.bsky.embed.external#main" || v.$type === "app.bsky.embed.external");
}
function validateMain2(v) {
    return lexicons.validate("app.bsky.embed.external#main", v);
}
function isExternal(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "app.bsky.embed.external#external";
}
function validateExternal(v) {
    return lexicons.validate("app.bsky.embed.external#external", v);
}
function isView(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "app.bsky.embed.external#view";
}
function validateView(v) {
    return lexicons.validate("app.bsky.embed.external#view", v);
}
function isViewExternal(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "app.bsky.embed.external#viewExternal";
}
function validateViewExternal(v) {
    return lexicons.validate("app.bsky.embed.external#viewExternal", v);
}
// src/client/types/app/bsky/embed/images.ts
var images_exports = {};
__export(images_exports, {
    isImage: ()=>isImage,
    isMain: ()=>isMain3,
    isView: ()=>isView2,
    isViewImage: ()=>isViewImage,
    validateImage: ()=>validateImage,
    validateMain: ()=>validateMain3,
    validateView: ()=>validateView2,
    validateViewImage: ()=>validateViewImage
});
function isMain3(v) {
    return isObj2(v) && hasProp2(v, "$type") && (v.$type === "app.bsky.embed.images#main" || v.$type === "app.bsky.embed.images");
}
function validateMain3(v) {
    return lexicons.validate("app.bsky.embed.images#main", v);
}
function isImage(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "app.bsky.embed.images#image";
}
function validateImage(v) {
    return lexicons.validate("app.bsky.embed.images#image", v);
}
function isView2(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "app.bsky.embed.images#view";
}
function validateView2(v) {
    return lexicons.validate("app.bsky.embed.images#view", v);
}
function isViewImage(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "app.bsky.embed.images#viewImage";
}
function validateViewImage(v) {
    return lexicons.validate("app.bsky.embed.images#viewImage", v);
}
// src/client/types/app/bsky/embed/record.ts
var record_exports = {};
__export(record_exports, {
    isMain: ()=>isMain4,
    isView: ()=>isView3,
    isViewNotFound: ()=>isViewNotFound,
    isViewRecord: ()=>isViewRecord,
    validateMain: ()=>validateMain4,
    validateView: ()=>validateView3,
    validateViewNotFound: ()=>validateViewNotFound,
    validateViewRecord: ()=>validateViewRecord
});
function isMain4(v) {
    return isObj2(v) && hasProp2(v, "$type") && (v.$type === "app.bsky.embed.record#main" || v.$type === "app.bsky.embed.record");
}
function validateMain4(v) {
    return lexicons.validate("app.bsky.embed.record#main", v);
}
function isView3(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "app.bsky.embed.record#view";
}
function validateView3(v) {
    return lexicons.validate("app.bsky.embed.record#view", v);
}
function isViewRecord(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "app.bsky.embed.record#viewRecord";
}
function validateViewRecord(v) {
    return lexicons.validate("app.bsky.embed.record#viewRecord", v);
}
function isViewNotFound(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "app.bsky.embed.record#viewNotFound";
}
function validateViewNotFound(v) {
    return lexicons.validate("app.bsky.embed.record#viewNotFound", v);
}
// src/client/types/app/bsky/embed/recordWithMedia.ts
var recordWithMedia_exports = {};
__export(recordWithMedia_exports, {
    isMain: ()=>isMain5,
    isView: ()=>isView4,
    validateMain: ()=>validateMain5,
    validateView: ()=>validateView4
});
function isMain5(v) {
    return isObj2(v) && hasProp2(v, "$type") && (v.$type === "app.bsky.embed.recordWithMedia#main" || v.$type === "app.bsky.embed.recordWithMedia");
}
function validateMain5(v) {
    return lexicons.validate("app.bsky.embed.recordWithMedia#main", v);
}
function isView4(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "app.bsky.embed.recordWithMedia#view";
}
function validateView4(v) {
    return lexicons.validate("app.bsky.embed.recordWithMedia#view", v);
}
// src/client/types/app/bsky/feed/defs.ts
var defs_exports6 = {};
__export(defs_exports6, {
    isFeedViewPost: ()=>isFeedViewPost,
    isNotFoundPost: ()=>isNotFoundPost,
    isPostView: ()=>isPostView,
    isReasonRepost: ()=>isReasonRepost,
    isReplyRef: ()=>isReplyRef,
    isThreadViewPost: ()=>isThreadViewPost,
    isViewerState: ()=>isViewerState2,
    validateFeedViewPost: ()=>validateFeedViewPost,
    validateNotFoundPost: ()=>validateNotFoundPost,
    validatePostView: ()=>validatePostView,
    validateReasonRepost: ()=>validateReasonRepost,
    validateReplyRef: ()=>validateReplyRef,
    validateThreadViewPost: ()=>validateThreadViewPost,
    validateViewerState: ()=>validateViewerState2
});
function isPostView(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "app.bsky.feed.defs#postView";
}
function validatePostView(v) {
    return lexicons.validate("app.bsky.feed.defs#postView", v);
}
function isViewerState2(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "app.bsky.feed.defs#viewerState";
}
function validateViewerState2(v) {
    return lexicons.validate("app.bsky.feed.defs#viewerState", v);
}
function isFeedViewPost(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "app.bsky.feed.defs#feedViewPost";
}
function validateFeedViewPost(v) {
    return lexicons.validate("app.bsky.feed.defs#feedViewPost", v);
}
function isReplyRef(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "app.bsky.feed.defs#replyRef";
}
function validateReplyRef(v) {
    return lexicons.validate("app.bsky.feed.defs#replyRef", v);
}
function isReasonRepost(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "app.bsky.feed.defs#reasonRepost";
}
function validateReasonRepost(v) {
    return lexicons.validate("app.bsky.feed.defs#reasonRepost", v);
}
function isThreadViewPost(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "app.bsky.feed.defs#threadViewPost";
}
function validateThreadViewPost(v) {
    return lexicons.validate("app.bsky.feed.defs#threadViewPost", v);
}
function isNotFoundPost(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "app.bsky.feed.defs#notFoundPost";
}
function validateNotFoundPost(v) {
    return lexicons.validate("app.bsky.feed.defs#notFoundPost", v);
}
// src/client/types/app/bsky/feed/like.ts
var like_exports = {};
__export(like_exports, {
    isRecord: ()=>isRecord3,
    validateRecord: ()=>validateRecord3
});
function isRecord3(v) {
    return isObj2(v) && hasProp2(v, "$type") && (v.$type === "app.bsky.feed.like#main" || v.$type === "app.bsky.feed.like");
}
function validateRecord3(v) {
    return lexicons.validate("app.bsky.feed.like#main", v);
}
// src/client/types/app/bsky/feed/post.ts
var post_exports = {};
__export(post_exports, {
    isEntity: ()=>isEntity,
    isRecord: ()=>isRecord4,
    isReplyRef: ()=>isReplyRef2,
    isTextSlice: ()=>isTextSlice,
    validateEntity: ()=>validateEntity,
    validateRecord: ()=>validateRecord4,
    validateReplyRef: ()=>validateReplyRef2,
    validateTextSlice: ()=>validateTextSlice
});
function isRecord4(v) {
    return isObj2(v) && hasProp2(v, "$type") && (v.$type === "app.bsky.feed.post#main" || v.$type === "app.bsky.feed.post");
}
function validateRecord4(v) {
    return lexicons.validate("app.bsky.feed.post#main", v);
}
function isReplyRef2(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "app.bsky.feed.post#replyRef";
}
function validateReplyRef2(v) {
    return lexicons.validate("app.bsky.feed.post#replyRef", v);
}
function isEntity(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "app.bsky.feed.post#entity";
}
function validateEntity(v) {
    return lexicons.validate("app.bsky.feed.post#entity", v);
}
function isTextSlice(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "app.bsky.feed.post#textSlice";
}
function validateTextSlice(v) {
    return lexicons.validate("app.bsky.feed.post#textSlice", v);
}
// src/client/types/app/bsky/feed/repost.ts
var repost_exports = {};
__export(repost_exports, {
    isRecord: ()=>isRecord5,
    validateRecord: ()=>validateRecord5
});
function isRecord5(v) {
    return isObj2(v) && hasProp2(v, "$type") && (v.$type === "app.bsky.feed.repost#main" || v.$type === "app.bsky.feed.repost");
}
function validateRecord5(v) {
    return lexicons.validate("app.bsky.feed.repost#main", v);
}
// src/client/types/app/bsky/graph/follow.ts
var follow_exports = {};
__export(follow_exports, {
    isRecord: ()=>isRecord6,
    validateRecord: ()=>validateRecord6
});
function isRecord6(v) {
    return isObj2(v) && hasProp2(v, "$type") && (v.$type === "app.bsky.graph.follow#main" || v.$type === "app.bsky.graph.follow");
}
function validateRecord6(v) {
    return lexicons.validate("app.bsky.graph.follow#main", v);
}
// src/client/types/app/bsky/richtext/facet.ts
var facet_exports = {};
__export(facet_exports, {
    isByteSlice: ()=>isByteSlice,
    isLink: ()=>isLink,
    isMain: ()=>isMain6,
    isMention: ()=>isMention,
    validateByteSlice: ()=>validateByteSlice,
    validateLink: ()=>validateLink,
    validateMain: ()=>validateMain6,
    validateMention: ()=>validateMention
});
function isMain6(v) {
    return isObj2(v) && hasProp2(v, "$type") && (v.$type === "app.bsky.richtext.facet#main" || v.$type === "app.bsky.richtext.facet");
}
function validateMain6(v) {
    return lexicons.validate("app.bsky.richtext.facet#main", v);
}
function isMention(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "app.bsky.richtext.facet#mention";
}
function validateMention(v) {
    return lexicons.validate("app.bsky.richtext.facet#mention", v);
}
function isLink(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "app.bsky.richtext.facet#link";
}
function validateLink(v) {
    return lexicons.validate("app.bsky.richtext.facet#link", v);
}
function isByteSlice(v) {
    return isObj2(v) && hasProp2(v, "$type") && v.$type === "app.bsky.richtext.facet#byteSlice";
}
function validateByteSlice(v) {
    return lexicons.validate("app.bsky.richtext.facet#byteSlice", v);
}
// src/client/index.ts
var COM_ATPROTO_ADMIN = {
    DefsTakedown: "com.atproto.admin.defs#takedown",
    DefsFlag: "com.atproto.admin.defs#flag",
    DefsAcknowledge: "com.atproto.admin.defs#acknowledge"
};
var COM_ATPROTO_MODERATION = {
    DefsReasonSpam: "com.atproto.moderation.defs#reasonSpam",
    DefsReasonOther: "com.atproto.moderation.defs#reasonOther"
};
var AtpBaseClient = class {
    constructor(){
        this.xrpc = new Client();
        this.xrpc.addLexicons(schemas);
    }
    service(serviceUri) {
        return new AtpServiceClient(this, this.xrpc.service(serviceUri));
    }
};
var AtpServiceClient = class {
    constructor(baseClient, xrpcService){
        this._baseClient = baseClient;
        this.xrpc = xrpcService;
        this.com = new ComNS(this);
        this.app = new AppNS(this);
    }
    setHeader(key, value) {
        this.xrpc.setHeader(key, value);
    }
};
var ComNS = class {
    constructor(service){
        this._service = service;
        this.atproto = new AtprotoNS(service);
    }
};
var AtprotoNS = class {
    constructor(service){
        this._service = service;
        this.admin = new AdminNS(service);
        this.identity = new IdentityNS(service);
        this.label = new LabelNS(service);
        this.moderation = new ModerationNS(service);
        this.repo = new RepoNS(service);
        this.server = new ServerNS(service);
        this.sync = new SyncNS(service);
    }
};
var AdminNS = class {
    constructor(service){
        this._service = service;
    }
    disableInviteCodes(data, opts) {
        return this._service.xrpc.call("com.atproto.admin.disableInviteCodes", opts?.qp, data, opts).catch((e)=>{
            throw toKnownErr(e);
        });
    }
    getInviteCodes(params2, opts) {
        return this._service.xrpc.call("com.atproto.admin.getInviteCodes", params2, void 0, opts).catch((e)=>{
            throw toKnownErr2(e);
        });
    }
    getModerationAction(params2, opts) {
        return this._service.xrpc.call("com.atproto.admin.getModerationAction", params2, void 0, opts).catch((e)=>{
            throw toKnownErr3(e);
        });
    }
    getModerationActions(params2, opts) {
        return this._service.xrpc.call("com.atproto.admin.getModerationActions", params2, void 0, opts).catch((e)=>{
            throw toKnownErr4(e);
        });
    }
    getModerationReport(params2, opts) {
        return this._service.xrpc.call("com.atproto.admin.getModerationReport", params2, void 0, opts).catch((e)=>{
            throw toKnownErr5(e);
        });
    }
    getModerationReports(params2, opts) {
        return this._service.xrpc.call("com.atproto.admin.getModerationReports", params2, void 0, opts).catch((e)=>{
            throw toKnownErr6(e);
        });
    }
    getRecord(params2, opts) {
        return this._service.xrpc.call("com.atproto.admin.getRecord", params2, void 0, opts).catch((e)=>{
            throw toKnownErr7(e);
        });
    }
    getRepo(params2, opts) {
        return this._service.xrpc.call("com.atproto.admin.getRepo", params2, void 0, opts).catch((e)=>{
            throw toKnownErr8(e);
        });
    }
    resolveModerationReports(data, opts) {
        return this._service.xrpc.call("com.atproto.admin.resolveModerationReports", opts?.qp, data, opts).catch((e)=>{
            throw toKnownErr9(e);
        });
    }
    reverseModerationAction(data, opts) {
        return this._service.xrpc.call("com.atproto.admin.reverseModerationAction", opts?.qp, data, opts).catch((e)=>{
            throw toKnownErr10(e);
        });
    }
    searchRepos(params2, opts) {
        return this._service.xrpc.call("com.atproto.admin.searchRepos", params2, void 0, opts).catch((e)=>{
            throw toKnownErr11(e);
        });
    }
    takeModerationAction(data, opts) {
        return this._service.xrpc.call("com.atproto.admin.takeModerationAction", opts?.qp, data, opts).catch((e)=>{
            throw toKnownErr12(e);
        });
    }
    updateAccountHandle(data, opts) {
        return this._service.xrpc.call("com.atproto.admin.updateAccountHandle", opts?.qp, data, opts).catch((e)=>{
            throw toKnownErr13(e);
        });
    }
};
var IdentityNS = class {
    constructor(service){
        this._service = service;
    }
    resolveHandle(params2, opts) {
        return this._service.xrpc.call("com.atproto.identity.resolveHandle", params2, void 0, opts).catch((e)=>{
            throw toKnownErr14(e);
        });
    }
    updateHandle(data, opts) {
        return this._service.xrpc.call("com.atproto.identity.updateHandle", opts?.qp, data, opts).catch((e)=>{
            throw toKnownErr15(e);
        });
    }
};
var LabelNS = class {
    constructor(service){
        this._service = service;
    }
    queryLabels(params2, opts) {
        return this._service.xrpc.call("com.atproto.label.queryLabels", params2, void 0, opts).catch((e)=>{
            throw toKnownErr16(e);
        });
    }
};
var ModerationNS = class {
    constructor(service){
        this._service = service;
    }
    createReport(data, opts) {
        return this._service.xrpc.call("com.atproto.moderation.createReport", opts?.qp, data, opts).catch((e)=>{
            throw toKnownErr17(e);
        });
    }
};
var RepoNS = class {
    constructor(service){
        this._service = service;
    }
    applyWrites(data, opts) {
        return this._service.xrpc.call("com.atproto.repo.applyWrites", opts?.qp, data, opts).catch((e)=>{
            throw toKnownErr18(e);
        });
    }
    createRecord(data, opts) {
        return this._service.xrpc.call("com.atproto.repo.createRecord", opts?.qp, data, opts).catch((e)=>{
            throw toKnownErr19(e);
        });
    }
    deleteRecord(data, opts) {
        return this._service.xrpc.call("com.atproto.repo.deleteRecord", opts?.qp, data, opts).catch((e)=>{
            throw toKnownErr20(e);
        });
    }
    describeRepo(params2, opts) {
        return this._service.xrpc.call("com.atproto.repo.describeRepo", params2, void 0, opts).catch((e)=>{
            throw toKnownErr21(e);
        });
    }
    getRecord(params2, opts) {
        return this._service.xrpc.call("com.atproto.repo.getRecord", params2, void 0, opts).catch((e)=>{
            throw toKnownErr22(e);
        });
    }
    listRecords(params2, opts) {
        return this._service.xrpc.call("com.atproto.repo.listRecords", params2, void 0, opts).catch((e)=>{
            throw toKnownErr23(e);
        });
    }
    putRecord(data, opts) {
        return this._service.xrpc.call("com.atproto.repo.putRecord", opts?.qp, data, opts).catch((e)=>{
            throw toKnownErr24(e);
        });
    }
    uploadBlob(data, opts) {
        return this._service.xrpc.call("com.atproto.repo.uploadBlob", opts?.qp, data, opts).catch((e)=>{
            throw toKnownErr25(e);
        });
    }
};
var ServerNS = class {
    constructor(service){
        this._service = service;
    }
    createAccount(data, opts) {
        return this._service.xrpc.call("com.atproto.server.createAccount", opts?.qp, data, opts).catch((e)=>{
            throw toKnownErr26(e);
        });
    }
    createInviteCode(data, opts) {
        return this._service.xrpc.call("com.atproto.server.createInviteCode", opts?.qp, data, opts).catch((e)=>{
            throw toKnownErr27(e);
        });
    }
    createInviteCodes(data, opts) {
        return this._service.xrpc.call("com.atproto.server.createInviteCodes", opts?.qp, data, opts).catch((e)=>{
            throw toKnownErr28(e);
        });
    }
    createSession(data, opts) {
        return this._service.xrpc.call("com.atproto.server.createSession", opts?.qp, data, opts).catch((e)=>{
            throw toKnownErr29(e);
        });
    }
    deleteAccount(data, opts) {
        return this._service.xrpc.call("com.atproto.server.deleteAccount", opts?.qp, data, opts).catch((e)=>{
            throw toKnownErr30(e);
        });
    }
    deleteSession(data, opts) {
        return this._service.xrpc.call("com.atproto.server.deleteSession", opts?.qp, data, opts).catch((e)=>{
            throw toKnownErr31(e);
        });
    }
    describeServer(params2, opts) {
        return this._service.xrpc.call("com.atproto.server.describeServer", params2, void 0, opts).catch((e)=>{
            throw toKnownErr32(e);
        });
    }
    getAccountInviteCodes(params2, opts) {
        return this._service.xrpc.call("com.atproto.server.getAccountInviteCodes", params2, void 0, opts).catch((e)=>{
            throw toKnownErr33(e);
        });
    }
    getSession(params2, opts) {
        return this._service.xrpc.call("com.atproto.server.getSession", params2, void 0, opts).catch((e)=>{
            throw toKnownErr34(e);
        });
    }
    refreshSession(data, opts) {
        return this._service.xrpc.call("com.atproto.server.refreshSession", opts?.qp, data, opts).catch((e)=>{
            throw toKnownErr35(e);
        });
    }
    requestAccountDelete(data, opts) {
        return this._service.xrpc.call("com.atproto.server.requestAccountDelete", opts?.qp, data, opts).catch((e)=>{
            throw toKnownErr36(e);
        });
    }
    requestPasswordReset(data, opts) {
        return this._service.xrpc.call("com.atproto.server.requestPasswordReset", opts?.qp, data, opts).catch((e)=>{
            throw toKnownErr37(e);
        });
    }
    resetPassword(data, opts) {
        return this._service.xrpc.call("com.atproto.server.resetPassword", opts?.qp, data, opts).catch((e)=>{
            throw toKnownErr38(e);
        });
    }
};
var SyncNS = class {
    constructor(service){
        this._service = service;
    }
    getBlob(params2, opts) {
        return this._service.xrpc.call("com.atproto.sync.getBlob", params2, void 0, opts).catch((e)=>{
            throw toKnownErr39(e);
        });
    }
    getBlocks(params2, opts) {
        return this._service.xrpc.call("com.atproto.sync.getBlocks", params2, void 0, opts).catch((e)=>{
            throw toKnownErr40(e);
        });
    }
    getCheckout(params2, opts) {
        return this._service.xrpc.call("com.atproto.sync.getCheckout", params2, void 0, opts).catch((e)=>{
            throw toKnownErr41(e);
        });
    }
    getCommitPath(params2, opts) {
        return this._service.xrpc.call("com.atproto.sync.getCommitPath", params2, void 0, opts).catch((e)=>{
            throw toKnownErr42(e);
        });
    }
    getHead(params2, opts) {
        return this._service.xrpc.call("com.atproto.sync.getHead", params2, void 0, opts).catch((e)=>{
            throw toKnownErr43(e);
        });
    }
    getRecord(params2, opts) {
        return this._service.xrpc.call("com.atproto.sync.getRecord", params2, void 0, opts).catch((e)=>{
            throw toKnownErr44(e);
        });
    }
    getRepo(params2, opts) {
        return this._service.xrpc.call("com.atproto.sync.getRepo", params2, void 0, opts).catch((e)=>{
            throw toKnownErr45(e);
        });
    }
    listBlobs(params2, opts) {
        return this._service.xrpc.call("com.atproto.sync.listBlobs", params2, void 0, opts).catch((e)=>{
            throw toKnownErr46(e);
        });
    }
    listRepos(params2, opts) {
        return this._service.xrpc.call("com.atproto.sync.listRepos", params2, void 0, opts).catch((e)=>{
            throw toKnownErr47(e);
        });
    }
    notifyOfUpdate(params2, opts) {
        return this._service.xrpc.call("com.atproto.sync.notifyOfUpdate", params2, void 0, opts).catch((e)=>{
            throw toKnownErr48(e);
        });
    }
    requestCrawl(params2, opts) {
        return this._service.xrpc.call("com.atproto.sync.requestCrawl", params2, void 0, opts).catch((e)=>{
            throw toKnownErr49(e);
        });
    }
};
var AppNS = class {
    constructor(service){
        this._service = service;
        this.bsky = new BskyNS(service);
    }
};
var BskyNS = class {
    constructor(service){
        this._service = service;
        this.actor = new ActorNS(service);
        this.embed = new EmbedNS(service);
        this.feed = new FeedNS(service);
        this.graph = new GraphNS(service);
        this.notification = new NotificationNS(service);
        this.richtext = new RichtextNS(service);
        this.unspecced = new UnspeccedNS(service);
    }
};
var ActorNS = class {
    constructor(service){
        this._service = service;
        this.profile = new ProfileRecord(service);
    }
    getProfile(params2, opts) {
        return this._service.xrpc.call("app.bsky.actor.getProfile", params2, void 0, opts).catch((e)=>{
            throw toKnownErr50(e);
        });
    }
    getProfiles(params2, opts) {
        return this._service.xrpc.call("app.bsky.actor.getProfiles", params2, void 0, opts).catch((e)=>{
            throw toKnownErr51(e);
        });
    }
    getSuggestions(params2, opts) {
        return this._service.xrpc.call("app.bsky.actor.getSuggestions", params2, void 0, opts).catch((e)=>{
            throw toKnownErr52(e);
        });
    }
    searchActors(params2, opts) {
        return this._service.xrpc.call("app.bsky.actor.searchActors", params2, void 0, opts).catch((e)=>{
            throw toKnownErr53(e);
        });
    }
    searchActorsTypeahead(params2, opts) {
        return this._service.xrpc.call("app.bsky.actor.searchActorsTypeahead", params2, void 0, opts).catch((e)=>{
            throw toKnownErr54(e);
        });
    }
};
var ProfileRecord = class {
    constructor(service){
        this._service = service;
    }
    async list(params2) {
        const res = await this._service.xrpc.call("com.atproto.repo.listRecords", {
            collection: "app.bsky.actor.profile",
            ...params2
        });
        return res.data;
    }
    async get(params2) {
        const res = await this._service.xrpc.call("com.atproto.repo.getRecord", {
            collection: "app.bsky.actor.profile",
            ...params2
        });
        return res.data;
    }
    async create(params2, record, headers) {
        record.$type = "app.bsky.actor.profile";
        const res = await this._service.xrpc.call("com.atproto.repo.createRecord", void 0, {
            collection: "app.bsky.actor.profile",
            rkey: "self",
            ...params2,
            record
        }, {
            encoding: "application/json",
            headers
        });
        return res.data;
    }
    async delete(params2, headers) {
        await this._service.xrpc.call("com.atproto.repo.deleteRecord", void 0, {
            collection: "app.bsky.actor.profile",
            ...params2
        }, {
            headers
        });
    }
};
var EmbedNS = class {
    constructor(service){
        this._service = service;
    }
};
var FeedNS = class {
    constructor(service){
        this._service = service;
        this.like = new LikeRecord(service);
        this.post = new PostRecord(service);
        this.repost = new RepostRecord(service);
    }
    getAuthorFeed(params2, opts) {
        return this._service.xrpc.call("app.bsky.feed.getAuthorFeed", params2, void 0, opts).catch((e)=>{
            throw toKnownErr55(e);
        });
    }
    getLikes(params2, opts) {
        return this._service.xrpc.call("app.bsky.feed.getLikes", params2, void 0, opts).catch((e)=>{
            throw toKnownErr56(e);
        });
    }
    getPostThread(params2, opts) {
        return this._service.xrpc.call("app.bsky.feed.getPostThread", params2, void 0, opts).catch((e)=>{
            throw toKnownErr57(e);
        });
    }
    getRepostedBy(params2, opts) {
        return this._service.xrpc.call("app.bsky.feed.getRepostedBy", params2, void 0, opts).catch((e)=>{
            throw toKnownErr58(e);
        });
    }
    getTimeline(params2, opts) {
        return this._service.xrpc.call("app.bsky.feed.getTimeline", params2, void 0, opts).catch((e)=>{
            throw toKnownErr59(e);
        });
    }
};
var LikeRecord = class {
    constructor(service){
        this._service = service;
    }
    async list(params2) {
        const res = await this._service.xrpc.call("com.atproto.repo.listRecords", {
            collection: "app.bsky.feed.like",
            ...params2
        });
        return res.data;
    }
    async get(params2) {
        const res = await this._service.xrpc.call("com.atproto.repo.getRecord", {
            collection: "app.bsky.feed.like",
            ...params2
        });
        return res.data;
    }
    async create(params2, record, headers) {
        record.$type = "app.bsky.feed.like";
        const res = await this._service.xrpc.call("com.atproto.repo.createRecord", void 0, {
            collection: "app.bsky.feed.like",
            ...params2,
            record
        }, {
            encoding: "application/json",
            headers
        });
        return res.data;
    }
    async delete(params2, headers) {
        await this._service.xrpc.call("com.atproto.repo.deleteRecord", void 0, {
            collection: "app.bsky.feed.like",
            ...params2
        }, {
            headers
        });
    }
};
var PostRecord = class {
    constructor(service){
        this._service = service;
    }
    async list(params2) {
        const res = await this._service.xrpc.call("com.atproto.repo.listRecords", {
            collection: "app.bsky.feed.post",
            ...params2
        });
        return res.data;
    }
    async get(params2) {
        const res = await this._service.xrpc.call("com.atproto.repo.getRecord", {
            collection: "app.bsky.feed.post",
            ...params2
        });
        return res.data;
    }
    async create(params2, record, headers) {
        record.$type = "app.bsky.feed.post";
        const res = await this._service.xrpc.call("com.atproto.repo.createRecord", void 0, {
            collection: "app.bsky.feed.post",
            ...params2,
            record
        }, {
            encoding: "application/json",
            headers
        });
        return res.data;
    }
    async delete(params2, headers) {
        await this._service.xrpc.call("com.atproto.repo.deleteRecord", void 0, {
            collection: "app.bsky.feed.post",
            ...params2
        }, {
            headers
        });
    }
};
var RepostRecord = class {
    constructor(service){
        this._service = service;
    }
    async list(params2) {
        const res = await this._service.xrpc.call("com.atproto.repo.listRecords", {
            collection: "app.bsky.feed.repost",
            ...params2
        });
        return res.data;
    }
    async get(params2) {
        const res = await this._service.xrpc.call("com.atproto.repo.getRecord", {
            collection: "app.bsky.feed.repost",
            ...params2
        });
        return res.data;
    }
    async create(params2, record, headers) {
        record.$type = "app.bsky.feed.repost";
        const res = await this._service.xrpc.call("com.atproto.repo.createRecord", void 0, {
            collection: "app.bsky.feed.repost",
            ...params2,
            record
        }, {
            encoding: "application/json",
            headers
        });
        return res.data;
    }
    async delete(params2, headers) {
        await this._service.xrpc.call("com.atproto.repo.deleteRecord", void 0, {
            collection: "app.bsky.feed.repost",
            ...params2
        }, {
            headers
        });
    }
};
var GraphNS = class {
    constructor(service){
        this._service = service;
        this.follow = new FollowRecord(service);
    }
    getFollowers(params2, opts) {
        return this._service.xrpc.call("app.bsky.graph.getFollowers", params2, void 0, opts).catch((e)=>{
            throw toKnownErr60(e);
        });
    }
    getFollows(params2, opts) {
        return this._service.xrpc.call("app.bsky.graph.getFollows", params2, void 0, opts).catch((e)=>{
            throw toKnownErr61(e);
        });
    }
    getMutes(params2, opts) {
        return this._service.xrpc.call("app.bsky.graph.getMutes", params2, void 0, opts).catch((e)=>{
            throw toKnownErr62(e);
        });
    }
    muteActor(data, opts) {
        return this._service.xrpc.call("app.bsky.graph.muteActor", opts?.qp, data, opts).catch((e)=>{
            throw toKnownErr63(e);
        });
    }
    unmuteActor(data, opts) {
        return this._service.xrpc.call("app.bsky.graph.unmuteActor", opts?.qp, data, opts).catch((e)=>{
            throw toKnownErr64(e);
        });
    }
};
var FollowRecord = class {
    constructor(service){
        this._service = service;
    }
    async list(params2) {
        const res = await this._service.xrpc.call("com.atproto.repo.listRecords", {
            collection: "app.bsky.graph.follow",
            ...params2
        });
        return res.data;
    }
    async get(params2) {
        const res = await this._service.xrpc.call("com.atproto.repo.getRecord", {
            collection: "app.bsky.graph.follow",
            ...params2
        });
        return res.data;
    }
    async create(params2, record, headers) {
        record.$type = "app.bsky.graph.follow";
        const res = await this._service.xrpc.call("com.atproto.repo.createRecord", void 0, {
            collection: "app.bsky.graph.follow",
            ...params2,
            record
        }, {
            encoding: "application/json",
            headers
        });
        return res.data;
    }
    async delete(params2, headers) {
        await this._service.xrpc.call("com.atproto.repo.deleteRecord", void 0, {
            collection: "app.bsky.graph.follow",
            ...params2
        }, {
            headers
        });
    }
};
var NotificationNS = class {
    constructor(service){
        this._service = service;
    }
    getUnreadCount(params2, opts) {
        return this._service.xrpc.call("app.bsky.notification.getUnreadCount", params2, void 0, opts).catch((e)=>{
            throw toKnownErr65(e);
        });
    }
    listNotifications(params2, opts) {
        return this._service.xrpc.call("app.bsky.notification.listNotifications", params2, void 0, opts).catch((e)=>{
            throw toKnownErr66(e);
        });
    }
    updateSeen(data, opts) {
        return this._service.xrpc.call("app.bsky.notification.updateSeen", opts?.qp, data, opts).catch((e)=>{
            throw toKnownErr67(e);
        });
    }
};
var RichtextNS = class {
    constructor(service){
        this._service = service;
    }
};
var UnspeccedNS = class {
    constructor(service){
        this._service = service;
    }
    getPopular(params2, opts) {
        return this._service.xrpc.call("app.bsky.unspecced.getPopular", params2, void 0, opts).catch((e)=>{
            throw toKnownErr68(e);
        });
    }
};
// src/agent.ts
var REFRESH_SESSION = "com.atproto.server.refreshSession";
var _AtpAgent = class {
    constructor(opts){
        this.uploadBlob = (data, opts)=>this.api.com.atproto.repo.uploadBlob(data, opts);
        this.resolveHandle = (params2, opts)=>this.api.com.atproto.identity.resolveHandle(params2, opts);
        this.updateHandle = (data, opts)=>this.api.com.atproto.identity.updateHandle(data, opts);
        this.createModerationReport = (data, opts)=>this.api.com.atproto.moderation.createReport(data, opts);
        this.service = opts.service instanceof URL ? opts.service : new URL(opts.service);
        this._persistSession = opts.persistSession;
        this._baseClient = new AtpBaseClient();
        this._baseClient.xrpc.fetch = this._fetch.bind(this);
        this.api = this._baseClient.service(opts.service);
    }
    get com() {
        return this.api.com;
    }
    static configure(opts) {
        _AtpAgent.fetch = opts.fetch;
    }
    get hasSession() {
        return !!this.session;
    }
    setPersistSessionHandler(handler) {
        this._persistSession = handler;
    }
    async createAccount(opts) {
        try {
            const res = await this.api.com.atproto.server.createAccount({
                handle: opts.handle,
                password: opts.password,
                email: opts.email,
                inviteCode: opts.inviteCode
            });
            this.session = {
                accessJwt: res.data.accessJwt,
                refreshJwt: res.data.refreshJwt,
                handle: res.data.handle,
                did: res.data.did,
                email: opts.email
            };
            return res;
        } catch (e) {
            this.session = void 0;
            throw e;
        } finally{
            if (this.session) this._persistSession?.("create", this.session);
            else this._persistSession?.("create-failed", void 0);
        }
    }
    async login(opts) {
        try {
            const res = await this.api.com.atproto.server.createSession({
                identifier: opts.identifier,
                password: opts.password
            });
            this.session = {
                accessJwt: res.data.accessJwt,
                refreshJwt: res.data.refreshJwt,
                handle: res.data.handle,
                did: res.data.did,
                email: res.data.email
            };
            return res;
        } catch (e) {
            this.session = void 0;
            throw e;
        } finally{
            if (this.session) this._persistSession?.("create", this.session);
            else this._persistSession?.("create-failed", void 0);
        }
    }
    async resumeSession(session) {
        try {
            this.session = session;
            const res = await this.api.com.atproto.server.getSession();
            if (!res.success || res.data.did !== this.session.did) throw new Error("Invalid session");
            this.session.email = res.data.email;
            this.session.handle = res.data.handle;
            return res;
        } catch (e) {
            this.session = void 0;
            throw e;
        } finally{
            if (this.session) this._persistSession?.("create", this.session);
            else this._persistSession?.("create-failed", void 0);
        }
    }
    _addAuthHeader(reqHeaders) {
        if (!reqHeaders.authorization && this.session?.accessJwt) return {
            ...reqHeaders,
            authorization: `Bearer ${this.session.accessJwt}`
        };
        return reqHeaders;
    }
    async _fetch(reqUri, reqMethod, reqHeaders, reqBody) {
        if (!_AtpAgent.fetch) throw new Error("AtpAgent fetch() method not configured");
        await this._refreshSessionPromise;
        let res = await _AtpAgent.fetch(reqUri, reqMethod, this._addAuthHeader(reqHeaders), reqBody);
        if (isErrorResponse(res, [
            "ExpiredToken"
        ]) && this.session?.refreshJwt) {
            await this._refreshSession();
            res = await _AtpAgent.fetch(reqUri, reqMethod, this._addAuthHeader(reqHeaders), reqBody);
        }
        return res;
    }
    async _refreshSession() {
        if (this._refreshSessionPromise) return this._refreshSessionPromise;
        this._refreshSessionPromise = this._refreshSessionInner();
        try {
            await this._refreshSessionPromise;
        } finally{
            this._refreshSessionPromise = void 0;
        }
    }
    async _refreshSessionInner() {
        if (!_AtpAgent.fetch) throw new Error("AtpAgent fetch() method not configured");
        if (!this.session?.refreshJwt) return;
        const url = new URL(this.service.origin);
        url.pathname = `/xrpc/${REFRESH_SESSION}`;
        const res = await _AtpAgent.fetch(url.toString(), "POST", {
            authorization: `Bearer ${this.session.refreshJwt}`
        }, void 0);
        if (isErrorResponse(res, [
            "ExpiredToken",
            "InvalidToken"
        ])) {
            this.session = void 0;
            this._persistSession?.("expired", void 0);
        } else if (isNewSessionObject(this._baseClient, res.body)) {
            this.session = {
                accessJwt: res.body.accessJwt,
                refreshJwt: res.body.refreshJwt,
                handle: res.body.handle,
                did: res.body.did
            };
            this._persistSession?.("update", this.session);
        }
    }
};
var AtpAgent = _AtpAgent;
AtpAgent.fetch = defaultFetchHandler;
function isErrorObject(v) {
    return errorResponseBody.safeParse(v).success;
}
function isErrorResponse(res, errorNames) {
    if (res.status !== 400) return false;
    if (!isErrorObject(res.body)) return false;
    return typeof res.body.error === "string" && errorNames.includes(res.body.error);
}
function isNewSessionObject(client, v) {
    try {
        client.xrpc.lex.assertValidXrpcOutput("com.atproto.server.refreshSession", v);
        return true;
    } catch  {
        return false;
    }
}
// src/rich-text/unicode.ts
var encoder = new TextEncoder();
var decoder = new TextDecoder();
var UnicodeString = class {
    constructor(utf16){
        this.utf16 = utf16;
        this.utf8 = encoder.encode(utf16);
    }
    get length() {
        return this.utf8.byteLength;
    }
    get graphemeLength() {
        if (!this._graphemeLen) this._graphemeLen = graphemeLen(this.utf16);
        return this._graphemeLen;
    }
    slice(start, end) {
        return decoder.decode(this.utf8.slice(start, end));
    }
    utf16IndexToUtf8Index(i) {
        return encoder.encode(this.utf16.slice(0, i)).byteLength;
    }
    toString() {
        return this.utf16;
    }
};
// src/rich-text/sanitization.ts
var EXCESS_SPACE_RE = /[\r\n]([\u00AD\u2060\u200D\u200C\u200B\s]*[\r\n]){2,}/;
var REPLACEMENT_STR = "\n\n";
function sanitizeRichText(richText, opts) {
    if (opts.cleanNewlines) richText = clean(richText, EXCESS_SPACE_RE, REPLACEMENT_STR);
    return richText;
}
function clean(richText, targetRegexp, replacementString) {
    richText = richText.clone();
    let match = richText.unicodeText.utf16.match(targetRegexp);
    while(match && typeof match.index !== "undefined"){
        const oldText = richText.unicodeText;
        const removeStartIndex = richText.unicodeText.utf16IndexToUtf8Index(match.index);
        const removeEndIndex = removeStartIndex + new UnicodeString(match[0]).length;
        richText.delete(removeStartIndex, removeEndIndex);
        if (richText.unicodeText.utf16 === oldText.utf16) break;
        richText.insert(removeStartIndex, replacementString);
        match = richText.unicodeText.utf16.match(targetRegexp);
    }
    return richText;
}
// ../../node_modules/tlds/index.json
var tlds_default = [
    "aaa",
    "aarp",
    "abarth",
    "abb",
    "abbott",
    "abbvie",
    "abc",
    "able",
    "abogado",
    "abudhabi",
    "ac",
    "academy",
    "accenture",
    "accountant",
    "accountants",
    "aco",
    "actor",
    "ad",
    "ads",
    "adult",
    "ae",
    "aeg",
    "aero",
    "aetna",
    "af",
    "afl",
    "africa",
    "ag",
    "agakhan",
    "agency",
    "ai",
    "aig",
    "airbus",
    "airforce",
    "airtel",
    "akdn",
    "al",
    "alfaromeo",
    "alibaba",
    "alipay",
    "allfinanz",
    "allstate",
    "ally",
    "alsace",
    "alstom",
    "am",
    "amazon",
    "americanexpress",
    "americanfamily",
    "amex",
    "amfam",
    "amica",
    "amsterdam",
    "analytics",
    "android",
    "anquan",
    "anz",
    "ao",
    "aol",
    "apartments",
    "app",
    "apple",
    "aq",
    "aquarelle",
    "ar",
    "arab",
    "aramco",
    "archi",
    "army",
    "arpa",
    "art",
    "arte",
    "as",
    "asda",
    "asia",
    "associates",
    "at",
    "athleta",
    "attorney",
    "au",
    "auction",
    "audi",
    "audible",
    "audio",
    "auspost",
    "author",
    "auto",
    "autos",
    "avianca",
    "aw",
    "aws",
    "ax",
    "axa",
    "az",
    "azure",
    "ba",
    "baby",
    "baidu",
    "banamex",
    "bananarepublic",
    "band",
    "bank",
    "bar",
    "barcelona",
    "barclaycard",
    "barclays",
    "barefoot",
    "bargains",
    "baseball",
    "basketball",
    "bauhaus",
    "bayern",
    "bb",
    "bbc",
    "bbt",
    "bbva",
    "bcg",
    "bcn",
    "bd",
    "be",
    "beats",
    "beauty",
    "beer",
    "bentley",
    "berlin",
    "best",
    "bestbuy",
    "bet",
    "bf",
    "bg",
    "bh",
    "bharti",
    "bi",
    "bible",
    "bid",
    "bike",
    "bing",
    "bingo",
    "bio",
    "biz",
    "bj",
    "black",
    "blackfriday",
    "blockbuster",
    "blog",
    "bloomberg",
    "blue",
    "bm",
    "bms",
    "bmw",
    "bn",
    "bnpparibas",
    "bo",
    "boats",
    "boehringer",
    "bofa",
    "bom",
    "bond",
    "boo",
    "book",
    "booking",
    "bosch",
    "bostik",
    "boston",
    "bot",
    "boutique",
    "box",
    "br",
    "bradesco",
    "bridgestone",
    "broadway",
    "broker",
    "brother",
    "brussels",
    "bs",
    "bt",
    "build",
    "builders",
    "business",
    "buy",
    "buzz",
    "bv",
    "bw",
    "by",
    "bz",
    "bzh",
    "ca",
    "cab",
    "cafe",
    "cal",
    "call",
    "calvinklein",
    "cam",
    "camera",
    "camp",
    "canon",
    "capetown",
    "capital",
    "capitalone",
    "car",
    "caravan",
    "cards",
    "care",
    "career",
    "careers",
    "cars",
    "casa",
    "case",
    "cash",
    "casino",
    "cat",
    "catering",
    "catholic",
    "cba",
    "cbn",
    "cbre",
    "cbs",
    "cc",
    "cd",
    "center",
    "ceo",
    "cern",
    "cf",
    "cfa",
    "cfd",
    "cg",
    "ch",
    "chanel",
    "channel",
    "charity",
    "chase",
    "chat",
    "cheap",
    "chintai",
    "christmas",
    "chrome",
    "church",
    "ci",
    "cipriani",
    "circle",
    "cisco",
    "citadel",
    "citi",
    "citic",
    "city",
    "cityeats",
    "ck",
    "cl",
    "claims",
    "cleaning",
    "click",
    "clinic",
    "clinique",
    "clothing",
    "cloud",
    "club",
    "clubmed",
    "cm",
    "cn",
    "co",
    "coach",
    "codes",
    "coffee",
    "college",
    "cologne",
    "com",
    "comcast",
    "commbank",
    "community",
    "company",
    "compare",
    "computer",
    "comsec",
    "condos",
    "construction",
    "consulting",
    "contact",
    "contractors",
    "cooking",
    "cookingchannel",
    "cool",
    "coop",
    "corsica",
    "country",
    "coupon",
    "coupons",
    "courses",
    "cpa",
    "cr",
    "credit",
    "creditcard",
    "creditunion",
    "cricket",
    "crown",
    "crs",
    "cruise",
    "cruises",
    "cu",
    "cuisinella",
    "cv",
    "cw",
    "cx",
    "cy",
    "cymru",
    "cyou",
    "cz",
    "dabur",
    "dad",
    "dance",
    "data",
    "date",
    "dating",
    "datsun",
    "day",
    "dclk",
    "dds",
    "de",
    "deal",
    "dealer",
    "deals",
    "degree",
    "delivery",
    "dell",
    "deloitte",
    "delta",
    "democrat",
    "dental",
    "dentist",
    "desi",
    "design",
    "dev",
    "dhl",
    "diamonds",
    "diet",
    "digital",
    "direct",
    "directory",
    "discount",
    "discover",
    "dish",
    "diy",
    "dj",
    "dk",
    "dm",
    "dnp",
    "do",
    "docs",
    "doctor",
    "dog",
    "domains",
    "dot",
    "download",
    "drive",
    "dtv",
    "dubai",
    "dunlop",
    "dupont",
    "durban",
    "dvag",
    "dvr",
    "dz",
    "earth",
    "eat",
    "ec",
    "eco",
    "edeka",
    "edu",
    "education",
    "ee",
    "eg",
    "email",
    "emerck",
    "energy",
    "engineer",
    "engineering",
    "enterprises",
    "epson",
    "equipment",
    "er",
    "ericsson",
    "erni",
    "es",
    "esq",
    "estate",
    "et",
    "etisalat",
    "eu",
    "eurovision",
    "eus",
    "events",
    "exchange",
    "expert",
    "exposed",
    "express",
    "extraspace",
    "fage",
    "fail",
    "fairwinds",
    "faith",
    "family",
    "fan",
    "fans",
    "farm",
    "farmers",
    "fashion",
    "fast",
    "fedex",
    "feedback",
    "ferrari",
    "ferrero",
    "fi",
    "fiat",
    "fidelity",
    "fido",
    "film",
    "final",
    "finance",
    "financial",
    "fire",
    "firestone",
    "firmdale",
    "fish",
    "fishing",
    "fit",
    "fitness",
    "fj",
    "fk",
    "flickr",
    "flights",
    "flir",
    "florist",
    "flowers",
    "fly",
    "fm",
    "fo",
    "foo",
    "food",
    "foodnetwork",
    "football",
    "ford",
    "forex",
    "forsale",
    "forum",
    "foundation",
    "fox",
    "fr",
    "free",
    "fresenius",
    "frl",
    "frogans",
    "frontdoor",
    "frontier",
    "ftr",
    "fujitsu",
    "fun",
    "fund",
    "furniture",
    "futbol",
    "fyi",
    "ga",
    "gal",
    "gallery",
    "gallo",
    "gallup",
    "game",
    "games",
    "gap",
    "garden",
    "gay",
    "gb",
    "gbiz",
    "gd",
    "gdn",
    "ge",
    "gea",
    "gent",
    "genting",
    "george",
    "gf",
    "gg",
    "ggee",
    "gh",
    "gi",
    "gift",
    "gifts",
    "gives",
    "giving",
    "gl",
    "glass",
    "gle",
    "global",
    "globo",
    "gm",
    "gmail",
    "gmbh",
    "gmo",
    "gmx",
    "gn",
    "godaddy",
    "gold",
    "goldpoint",
    "golf",
    "goo",
    "goodyear",
    "goog",
    "google",
    "gop",
    "got",
    "gov",
    "gp",
    "gq",
    "gr",
    "grainger",
    "graphics",
    "gratis",
    "green",
    "gripe",
    "grocery",
    "group",
    "gs",
    "gt",
    "gu",
    "guardian",
    "gucci",
    "guge",
    "guide",
    "guitars",
    "guru",
    "gw",
    "gy",
    "hair",
    "hamburg",
    "hangout",
    "haus",
    "hbo",
    "hdfc",
    "hdfcbank",
    "health",
    "healthcare",
    "help",
    "helsinki",
    "here",
    "hermes",
    "hgtv",
    "hiphop",
    "hisamitsu",
    "hitachi",
    "hiv",
    "hk",
    "hkt",
    "hm",
    "hn",
    "hockey",
    "holdings",
    "holiday",
    "homedepot",
    "homegoods",
    "homes",
    "homesense",
    "honda",
    "horse",
    "hospital",
    "host",
    "hosting",
    "hot",
    "hoteles",
    "hotels",
    "hotmail",
    "house",
    "how",
    "hr",
    "hsbc",
    "ht",
    "hu",
    "hughes",
    "hyatt",
    "hyundai",
    "ibm",
    "icbc",
    "ice",
    "icu",
    "id",
    "ie",
    "ieee",
    "ifm",
    "ikano",
    "il",
    "im",
    "imamat",
    "imdb",
    "immo",
    "immobilien",
    "in",
    "inc",
    "industries",
    "infiniti",
    "info",
    "ing",
    "ink",
    "institute",
    "insurance",
    "insure",
    "int",
    "international",
    "intuit",
    "investments",
    "io",
    "ipiranga",
    "iq",
    "ir",
    "irish",
    "is",
    "ismaili",
    "ist",
    "istanbul",
    "it",
    "itau",
    "itv",
    "jaguar",
    "java",
    "jcb",
    "je",
    "jeep",
    "jetzt",
    "jewelry",
    "jio",
    "jll",
    "jm",
    "jmp",
    "jnj",
    "jo",
    "jobs",
    "joburg",
    "jot",
    "joy",
    "jp",
    "jpmorgan",
    "jprs",
    "juegos",
    "juniper",
    "kaufen",
    "kddi",
    "ke",
    "kerryhotels",
    "kerrylogistics",
    "kerryproperties",
    "kfh",
    "kg",
    "kh",
    "ki",
    "kia",
    "kids",
    "kim",
    "kinder",
    "kindle",
    "kitchen",
    "kiwi",
    "km",
    "kn",
    "koeln",
    "komatsu",
    "kosher",
    "kp",
    "kpmg",
    "kpn",
    "kr",
    "krd",
    "kred",
    "kuokgroup",
    "kw",
    "ky",
    "kyoto",
    "kz",
    "la",
    "lacaixa",
    "lamborghini",
    "lamer",
    "lancaster",
    "lancia",
    "land",
    "landrover",
    "lanxess",
    "lasalle",
    "lat",
    "latino",
    "latrobe",
    "law",
    "lawyer",
    "lb",
    "lc",
    "lds",
    "lease",
    "leclerc",
    "lefrak",
    "legal",
    "lego",
    "lexus",
    "lgbt",
    "li",
    "lidl",
    "life",
    "lifeinsurance",
    "lifestyle",
    "lighting",
    "like",
    "lilly",
    "limited",
    "limo",
    "lincoln",
    "link",
    "lipsy",
    "live",
    "living",
    "lk",
    "llc",
    "llp",
    "loan",
    "loans",
    "locker",
    "locus",
    "lol",
    "london",
    "lotte",
    "lotto",
    "love",
    "lpl",
    "lplfinancial",
    "lr",
    "ls",
    "lt",
    "ltd",
    "ltda",
    "lu",
    "lundbeck",
    "luxe",
    "luxury",
    "lv",
    "ly",
    "ma",
    "madrid",
    "maif",
    "maison",
    "makeup",
    "man",
    "management",
    "mango",
    "map",
    "market",
    "marketing",
    "markets",
    "marriott",
    "marshalls",
    "maserati",
    "mattel",
    "mba",
    "mc",
    "mckinsey",
    "md",
    "me",
    "med",
    "media",
    "meet",
    "melbourne",
    "meme",
    "memorial",
    "men",
    "menu",
    "merckmsd",
    "mg",
    "mh",
    "miami",
    "microsoft",
    "mil",
    "mini",
    "mint",
    "mit",
    "mitsubishi",
    "mk",
    "ml",
    "mlb",
    "mls",
    "mm",
    "mma",
    "mn",
    "mo",
    "mobi",
    "mobile",
    "moda",
    "moe",
    "moi",
    "mom",
    "monash",
    "money",
    "monster",
    "mormon",
    "mortgage",
    "moscow",
    "moto",
    "motorcycles",
    "mov",
    "movie",
    "mp",
    "mq",
    "mr",
    "ms",
    "msd",
    "mt",
    "mtn",
    "mtr",
    "mu",
    "museum",
    "music",
    "mutual",
    "mv",
    "mw",
    "mx",
    "my",
    "mz",
    "na",
    "nab",
    "nagoya",
    "name",
    "natura",
    "navy",
    "nba",
    "nc",
    "ne",
    "nec",
    "net",
    "netbank",
    "netflix",
    "network",
    "neustar",
    "new",
    "news",
    "next",
    "nextdirect",
    "nexus",
    "nf",
    "nfl",
    "ng",
    "ngo",
    "nhk",
    "ni",
    "nico",
    "nike",
    "nikon",
    "ninja",
    "nissan",
    "nissay",
    "nl",
    "no",
    "nokia",
    "northwesternmutual",
    "norton",
    "now",
    "nowruz",
    "nowtv",
    "np",
    "nr",
    "nra",
    "nrw",
    "ntt",
    "nu",
    "nyc",
    "nz",
    "obi",
    "observer",
    "office",
    "okinawa",
    "olayan",
    "olayangroup",
    "oldnavy",
    "ollo",
    "om",
    "omega",
    "one",
    "ong",
    "onl",
    "online",
    "ooo",
    "open",
    "oracle",
    "orange",
    "org",
    "organic",
    "origins",
    "osaka",
    "otsuka",
    "ott",
    "ovh",
    "pa",
    "page",
    "panasonic",
    "paris",
    "pars",
    "partners",
    "parts",
    "party",
    "passagens",
    "pay",
    "pccw",
    "pe",
    "pet",
    "pf",
    "pfizer",
    "pg",
    "ph",
    "pharmacy",
    "phd",
    "philips",
    "phone",
    "photo",
    "photography",
    "photos",
    "physio",
    "pics",
    "pictet",
    "pictures",
    "pid",
    "pin",
    "ping",
    "pink",
    "pioneer",
    "pizza",
    "pk",
    "pl",
    "place",
    "play",
    "playstation",
    "plumbing",
    "plus",
    "pm",
    "pn",
    "pnc",
    "pohl",
    "poker",
    "politie",
    "porn",
    "post",
    "pr",
    "pramerica",
    "praxi",
    "press",
    "prime",
    "pro",
    "prod",
    "productions",
    "prof",
    "progressive",
    "promo",
    "properties",
    "property",
    "protection",
    "pru",
    "prudential",
    "ps",
    "pt",
    "pub",
    "pw",
    "pwc",
    "py",
    "qa",
    "qpon",
    "quebec",
    "quest",
    "racing",
    "radio",
    "re",
    "read",
    "realestate",
    "realtor",
    "realty",
    "recipes",
    "red",
    "redstone",
    "redumbrella",
    "rehab",
    "reise",
    "reisen",
    "reit",
    "reliance",
    "ren",
    "rent",
    "rentals",
    "repair",
    "report",
    "republican",
    "rest",
    "restaurant",
    "review",
    "reviews",
    "rexroth",
    "rich",
    "richardli",
    "ricoh",
    "ril",
    "rio",
    "rip",
    "ro",
    "rocher",
    "rocks",
    "rodeo",
    "rogers",
    "room",
    "rs",
    "rsvp",
    "ru",
    "rugby",
    "ruhr",
    "run",
    "rw",
    "rwe",
    "ryukyu",
    "sa",
    "saarland",
    "safe",
    "safety",
    "sakura",
    "sale",
    "salon",
    "samsclub",
    "samsung",
    "sandvik",
    "sandvikcoromant",
    "sanofi",
    "sap",
    "sarl",
    "sas",
    "save",
    "saxo",
    "sb",
    "sbi",
    "sbs",
    "sc",
    "sca",
    "scb",
    "schaeffler",
    "schmidt",
    "scholarships",
    "school",
    "schule",
    "schwarz",
    "science",
    "scot",
    "sd",
    "se",
    "search",
    "seat",
    "secure",
    "security",
    "seek",
    "select",
    "sener",
    "services",
    "seven",
    "sew",
    "sex",
    "sexy",
    "sfr",
    "sg",
    "sh",
    "shangrila",
    "sharp",
    "shaw",
    "shell",
    "shia",
    "shiksha",
    "shoes",
    "shop",
    "shopping",
    "shouji",
    "show",
    "showtime",
    "si",
    "silk",
    "sina",
    "singles",
    "site",
    "sj",
    "sk",
    "ski",
    "skin",
    "sky",
    "skype",
    "sl",
    "sling",
    "sm",
    "smart",
    "smile",
    "sn",
    "sncf",
    "so",
    "soccer",
    "social",
    "softbank",
    "software",
    "sohu",
    "solar",
    "solutions",
    "song",
    "sony",
    "soy",
    "spa",
    "space",
    "sport",
    "spot",
    "sr",
    "srl",
    "ss",
    "st",
    "stada",
    "staples",
    "star",
    "statebank",
    "statefarm",
    "stc",
    "stcgroup",
    "stockholm",
    "storage",
    "store",
    "stream",
    "studio",
    "study",
    "style",
    "su",
    "sucks",
    "supplies",
    "supply",
    "support",
    "surf",
    "surgery",
    "suzuki",
    "sv",
    "swatch",
    "swiss",
    "sx",
    "sy",
    "sydney",
    "systems",
    "sz",
    "tab",
    "taipei",
    "talk",
    "taobao",
    "target",
    "tatamotors",
    "tatar",
    "tattoo",
    "tax",
    "taxi",
    "tc",
    "tci",
    "td",
    "tdk",
    "team",
    "tech",
    "technology",
    "tel",
    "temasek",
    "tennis",
    "teva",
    "tf",
    "tg",
    "th",
    "thd",
    "theater",
    "theatre",
    "tiaa",
    "tickets",
    "tienda",
    "tiffany",
    "tips",
    "tires",
    "tirol",
    "tj",
    "tjmaxx",
    "tjx",
    "tk",
    "tkmaxx",
    "tl",
    "tm",
    "tmall",
    "tn",
    "to",
    "today",
    "tokyo",
    "tools",
    "top",
    "toray",
    "toshiba",
    "total",
    "tours",
    "town",
    "toyota",
    "toys",
    "tr",
    "trade",
    "trading",
    "training",
    "travel",
    "travelchannel",
    "travelers",
    "travelersinsurance",
    "trust",
    "trv",
    "tt",
    "tube",
    "tui",
    "tunes",
    "tushu",
    "tv",
    "tvs",
    "tw",
    "tz",
    "ua",
    "ubank",
    "ubs",
    "ug",
    "uk",
    "unicom",
    "university",
    "uno",
    "uol",
    "ups",
    "us",
    "uy",
    "uz",
    "va",
    "vacations",
    "vana",
    "vanguard",
    "vc",
    "ve",
    "vegas",
    "ventures",
    "verisign",
    "verm\xf6gensberater",
    "verm\xf6gensberatung",
    "versicherung",
    "vet",
    "vg",
    "vi",
    "viajes",
    "video",
    "vig",
    "viking",
    "villas",
    "vin",
    "vip",
    "virgin",
    "visa",
    "vision",
    "viva",
    "vivo",
    "vlaanderen",
    "vn",
    "vodka",
    "volkswagen",
    "volvo",
    "vote",
    "voting",
    "voto",
    "voyage",
    "vu",
    "vuelos",
    "wales",
    "walmart",
    "walter",
    "wang",
    "wanggou",
    "watch",
    "watches",
    "weather",
    "weatherchannel",
    "webcam",
    "weber",
    "website",
    "wed",
    "wedding",
    "weibo",
    "weir",
    "wf",
    "whoswho",
    "wien",
    "wiki",
    "williamhill",
    "win",
    "windows",
    "wine",
    "winners",
    "wme",
    "wolterskluwer",
    "woodside",
    "work",
    "works",
    "world",
    "wow",
    "ws",
    "wtc",
    "wtf",
    "xbox",
    "xerox",
    "xfinity",
    "xihuan",
    "xin",
    "xxx",
    "xyz",
    "yachts",
    "yahoo",
    "yamaxun",
    "yandex",
    "ye",
    "yodobashi",
    "yoga",
    "yokohama",
    "you",
    "youtube",
    "yt",
    "yun",
    "za",
    "zappos",
    "zara",
    "zero",
    "zip",
    "zm",
    "zone",
    "zuerich",
    "zw",
    "ελ",
    "ευ",
    "бг",
    "бел",
    "дети",
    "ею",
    "католик",
    "ком",
    "мкд",
    "мон",
    "москва",
    "онлайн",
    "орг",
    "рус",
    "рф",
    "сайт",
    "срб",
    "укр",
    "қаз",
    "հայ",
    "ישראל",
    "קום",
    "ابوظبي",
    "اتصالات",
    "ارامكو",
    "الاردن",
    "البحرين",
    "الجزائر",
    "السعودية",
    "العليان",
    "المغرب",
    "امارات",
    "ایران",
    "بارت",
    "بازار",
    "بيتك",
    "بھارت",
    "تونس",
    "سودان",
    "سورية",
    "شبكة",
    "عراق",
    "عرب",
    "عمان",
    "فلسطين",
    "قطر",
    "كاثوليك",
    "كوم",
    "مصر",
    "مليسيا",
    "موريتانيا",
    "موقع",
    "همراه",
    "پاکستان",
    "ڀارت",
    "कॉम",
    "नेट",
    "भारत",
    "भारतम्",
    "भारोत",
    "संगठन",
    "বাংলা",
    "ভারত",
    "ভাৰত",
    "ਭਾਰਤ",
    "ભારત",
    "ଭାରତ",
    "இந்தியா",
    "இலங்கை",
    "சிங்கப்பூர்",
    "భారత్",
    "ಭಾರತ",
    "ഭാരതം",
    "ලංකා",
    "คอม",
    "ไทย",
    "ລາວ",
    "გე",
    "みんな",
    "アマゾン",
    "クラウド",
    "グーグル",
    "コム",
    "ストア",
    "セール",
    "ファッション",
    "ポイント",
    "世界",
    "中信",
    "中国",
    "中國",
    "中文网",
    "亚马逊",
    "企业",
    "佛山",
    "信息",
    "健康",
    "八卦",
    "公司",
    "公益",
    "台湾",
    "台灣",
    "商城",
    "商店",
    "商标",
    "嘉里",
    "嘉里大酒店",
    "在线",
    "大拿",
    "天主教",
    "娱乐",
    "家電",
    "广东",
    "微博",
    "慈善",
    "我爱你",
    "手机",
    "招聘",
    "政务",
    "政府",
    "新加坡",
    "新闻",
    "时尚",
    "書籍",
    "机构",
    "淡马锡",
    "游戏",
    "澳門",
    "点看",
    "移动",
    "组织机构",
    "网址",
    "网店",
    "网站",
    "网络",
    "联通",
    "谷歌",
    "购物",
    "通販",
    "集团",
    "電訊盈科",
    "飞利浦",
    "食品",
    "餐厅",
    "香格里拉",
    "香港",
    "닷넷",
    "닷컴",
    "삼성",
    "한국"
];
// src/rich-text/detection.ts
function detectFacets(text) {
    let match;
    const facets = [];
    {
        const re = /(^|\s|\()(@)([a-zA-Z0-9.-]+)(\b)/g;
        while(match = re.exec(text.utf16)){
            if (!isValidDomain(match[3]) && !match[3].endsWith(".test")) continue;
            const start = text.utf16.indexOf(match[3], match.index) - 1;
            facets.push({
                $type: "app.bsky.richtext.facet",
                index: {
                    byteStart: text.utf16IndexToUtf8Index(start),
                    byteEnd: text.utf16IndexToUtf8Index(start + match[3].length + 1)
                },
                features: [
                    {
                        $type: "app.bsky.richtext.facet#mention",
                        did: match[3]
                    }
                ]
            });
        }
    }
    {
        const re = /(^|\s|\()((https?:\/\/[\S]+)|((?<domain>[a-z][a-z0-9]*(\.[a-z0-9]+)+)[\S]*))/gim;
        while(match = re.exec(text.utf16)){
            let uri2 = match[2];
            if (!uri2.startsWith("http")) {
                const domain = match.groups?.domain;
                if (!domain || !isValidDomain(domain)) continue;
                uri2 = `https://${uri2}`;
            }
            const start = text.utf16.indexOf(match[2], match.index);
            const index = {
                start,
                end: start + match[2].length
            };
            if (/[.,;!?]$/.test(uri2)) {
                uri2 = uri2.slice(0, -1);
                index.end--;
            }
            if (/[)]$/.test(uri2) && !uri2.includes("(")) {
                uri2 = uri2.slice(0, -1);
                index.end--;
            }
            facets.push({
                index: {
                    byteStart: text.utf16IndexToUtf8Index(index.start),
                    byteEnd: text.utf16IndexToUtf8Index(index.end)
                },
                features: [
                    {
                        $type: "app.bsky.richtext.facet#link",
                        uri: uri2
                    }
                ]
            });
        }
    }
    return facets.length > 0 ? facets : void 0;
}
function isValidDomain(str) {
    return !!tlds_default.find((tld)=>{
        const i = str.lastIndexOf(tld);
        if (i === -1) return false;
        return str.charAt(i - 1) === "." && i === str.length - tld.length;
    });
}
// src/rich-text/rich-text.ts
var RichTextSegment = class {
    constructor(text, facet){
        this.text = text;
        this.facet = facet;
    }
    get link() {
        const link = this.facet?.features.find(facet_exports.isLink);
        if (facet_exports.isLink(link)) return link;
        return void 0;
    }
    isLink() {
        return !!this.link;
    }
    get mention() {
        const mention = this.facet?.features.find(facet_exports.isMention);
        if (facet_exports.isMention(mention)) return mention;
        return void 0;
    }
    isMention() {
        return !!this.mention;
    }
};
var RichText = class {
    constructor(props, opts){
        this.unicodeText = new UnicodeString(props.text);
        this.facets = props.facets;
        if (!this.facets?.length && props.entities?.length) this.facets = entitiesToFacets(this.unicodeText, props.entities);
        if (this.facets) this.facets.sort(facetSort);
        if (opts?.cleanNewlines) sanitizeRichText(this, {
            cleanNewlines: true
        }).copyInto(this);
    }
    get text() {
        return this.unicodeText.toString();
    }
    get length() {
        return this.unicodeText.length;
    }
    get graphemeLength() {
        return this.unicodeText.graphemeLength;
    }
    clone() {
        return new RichText({
            text: this.unicodeText.utf16,
            facets: cloneDeep(this.facets)
        });
    }
    copyInto(target) {
        target.unicodeText = this.unicodeText;
        target.facets = cloneDeep(this.facets);
    }
    *segments() {
        const facets = this.facets || [];
        if (!facets.length) {
            yield new RichTextSegment(this.unicodeText.utf16);
            return;
        }
        let textCursor = 0;
        let facetCursor = 0;
        do {
            const currFacet = facets[facetCursor];
            if (textCursor < currFacet.index.byteStart) yield new RichTextSegment(this.unicodeText.slice(textCursor, currFacet.index.byteStart));
            else if (textCursor > currFacet.index.byteStart) {
                facetCursor++;
                continue;
            }
            if (currFacet.index.byteStart < currFacet.index.byteEnd) {
                const subtext = this.unicodeText.slice(currFacet.index.byteStart, currFacet.index.byteEnd);
                if (!subtext.trim()) yield new RichTextSegment(subtext);
                else yield new RichTextSegment(subtext, currFacet);
            }
            textCursor = currFacet.index.byteEnd;
            facetCursor++;
        }while (facetCursor < facets.length);
        if (textCursor < this.unicodeText.length) yield new RichTextSegment(this.unicodeText.slice(textCursor, this.unicodeText.length));
    }
    insert(insertIndex, insertText) {
        this.unicodeText = new UnicodeString(this.unicodeText.slice(0, insertIndex) + insertText + this.unicodeText.slice(insertIndex));
        if (!this.facets?.length) return this;
        const numCharsAdded = insertText.length;
        for (const ent of this.facets){
            if (insertIndex <= ent.index.byteStart) {
                ent.index.byteStart += numCharsAdded;
                ent.index.byteEnd += numCharsAdded;
            } else if (insertIndex >= ent.index.byteStart && insertIndex < ent.index.byteEnd) ent.index.byteEnd += numCharsAdded;
        }
        return this;
    }
    delete(removeStartIndex, removeEndIndex) {
        this.unicodeText = new UnicodeString(this.unicodeText.slice(0, removeStartIndex) + this.unicodeText.slice(removeEndIndex));
        if (!this.facets?.length) return this;
        const numCharsRemoved = removeEndIndex - removeStartIndex;
        for (const ent of this.facets){
            if (removeStartIndex <= ent.index.byteStart && removeEndIndex >= ent.index.byteEnd) {
                ent.index.byteStart = 0;
                ent.index.byteEnd = 0;
            } else if (removeStartIndex > ent.index.byteEnd) ;
            else if (removeStartIndex > ent.index.byteStart && removeStartIndex <= ent.index.byteEnd && removeEndIndex > ent.index.byteEnd) ent.index.byteEnd = removeStartIndex;
            else if (removeStartIndex >= ent.index.byteStart && removeEndIndex <= ent.index.byteEnd) ent.index.byteEnd -= numCharsRemoved;
            else if (removeStartIndex < ent.index.byteStart && removeEndIndex >= ent.index.byteStart && removeEndIndex <= ent.index.byteEnd) {
                ent.index.byteStart = removeStartIndex;
                ent.index.byteEnd -= numCharsRemoved;
            } else if (removeEndIndex < ent.index.byteStart) {
                ent.index.byteStart -= numCharsRemoved;
                ent.index.byteEnd -= numCharsRemoved;
            }
        }
        this.facets = this.facets.filter((ent)=>ent.index.byteStart < ent.index.byteEnd);
        return this;
    }
    async detectFacets(agent) {
        this.facets = detectFacets(this.unicodeText);
        if (this.facets) {
            for (const facet of this.facets){
                for (const feature of facet.features)if (facet_exports.isMention(feature)) {
                    const did2 = await agent.resolveHandle({
                        handle: feature.did
                    }).catch((_)=>void 0).then((res)=>res?.data.did);
                    feature.did = did2 || "";
                }
            }
            this.facets.sort(facetSort);
        }
    }
    detectFacetsWithoutResolution() {
        this.facets = detectFacets(this.unicodeText);
        if (this.facets) this.facets.sort(facetSort);
    }
};
var facetSort = (a, b)=>a.index.byteStart - b.index.byteStart;
function entitiesToFacets(text, entities) {
    const facets = [];
    for (const ent of entities){
        if (ent.type === "link") facets.push({
            $type: "app.bsky.richtext.facet",
            index: {
                byteStart: text.utf16IndexToUtf8Index(ent.index.start),
                byteEnd: text.utf16IndexToUtf8Index(ent.index.end)
            },
            features: [
                {
                    $type: "app.bsky.richtext.facet#link",
                    uri: ent.value
                }
            ]
        });
        else if (ent.type === "mention") facets.push({
            $type: "app.bsky.richtext.facet",
            index: {
                byteStart: text.utf16IndexToUtf8Index(ent.index.start),
                byteEnd: text.utf16IndexToUtf8Index(ent.index.end)
            },
            features: [
                {
                    $type: "app.bsky.richtext.facet#mention",
                    did: ent.value
                }
            ]
        });
    }
    return facets;
}
function cloneDeep(v) {
    if (typeof v === "undefined") return v;
    return JSON.parse(JSON.stringify(v));
}
// src/bsky-agent.ts
var BskyAgent = class extends AtpAgent {
    constructor(){
        super(...arguments);
        this.getTimeline = (params2, opts)=>this.api.app.bsky.feed.getTimeline(params2, opts);
        this.getAuthorFeed = (params2, opts)=>this.api.app.bsky.feed.getAuthorFeed(params2, opts);
        this.getPostThread = (params2, opts)=>this.api.app.bsky.feed.getPostThread(params2, opts);
        this.getPost = (params2)=>this.api.app.bsky.feed.post.get(params2);
        this.getLikes = (params2, opts)=>this.api.app.bsky.feed.getLikes(params2, opts);
        this.getRepostedBy = (params2, opts)=>this.api.app.bsky.feed.getRepostedBy(params2, opts);
        this.getFollows = (params2, opts)=>this.api.app.bsky.graph.getFollows(params2, opts);
        this.getFollowers = (params2, opts)=>this.api.app.bsky.graph.getFollowers(params2, opts);
        this.getProfile = (params2, opts)=>this.api.app.bsky.actor.getProfile(params2, opts);
        this.getProfiles = (params2, opts)=>this.api.app.bsky.actor.getProfiles(params2, opts);
        this.searchActors = (params2, opts)=>this.api.app.bsky.actor.searchActors(params2, opts);
        this.searchActorsTypeahead = (params2, opts)=>this.api.app.bsky.actor.searchActorsTypeahead(params2, opts);
        this.listNotifications = (params2, opts)=>this.api.app.bsky.notification.listNotifications(params2, opts);
        this.countUnreadNotifications = (params2, opts)=>this.api.app.bsky.notification.getUnreadCount(params2, opts);
    }
    get app() {
        return this.api.app;
    }
    async post(record) {
        if (!this.session) throw new Error("Not logged in");
        record.createdAt = record.createdAt || new Date().toISOString();
        return this.api.app.bsky.feed.post.create({
            repo: this.session.did
        }, record);
    }
    async deletePost(postUri) {
        if (!this.session) throw new Error("Not logged in");
        const postUrip = new AtUri(postUri);
        return await this.api.app.bsky.feed.post.delete({
            repo: postUrip.hostname,
            rkey: postUrip.rkey
        });
    }
    async like(uri2, cid2) {
        if (!this.session) throw new Error("Not logged in");
        return await this.api.app.bsky.feed.like.create({
            repo: this.session.did
        }, {
            subject: {
                uri: uri2,
                cid: cid2
            },
            createdAt: new Date().toISOString()
        });
    }
    async deleteLike(likeUri) {
        if (!this.session) throw new Error("Not logged in");
        const likeUrip = new AtUri(likeUri);
        return await this.api.app.bsky.feed.like.delete({
            repo: likeUrip.hostname,
            rkey: likeUrip.rkey
        });
    }
    async repost(uri2, cid2) {
        if (!this.session) throw new Error("Not logged in");
        return await this.api.app.bsky.feed.repost.create({
            repo: this.session.did
        }, {
            subject: {
                uri: uri2,
                cid: cid2
            },
            createdAt: new Date().toISOString()
        });
    }
    async deleteRepost(repostUri) {
        if (!this.session) throw new Error("Not logged in");
        const repostUrip = new AtUri(repostUri);
        return await this.api.app.bsky.feed.repost.delete({
            repo: repostUrip.hostname,
            rkey: repostUrip.rkey
        });
    }
    async follow(subjectDid) {
        if (!this.session) throw new Error("Not logged in");
        return await this.api.app.bsky.graph.follow.create({
            repo: this.session.did
        }, {
            subject: subjectDid,
            createdAt: new Date().toISOString()
        });
    }
    async deleteFollow(followUri) {
        if (!this.session) throw new Error("Not logged in");
        const followUrip = new AtUri(followUri);
        return await this.api.app.bsky.graph.follow.delete({
            repo: followUrip.hostname,
            rkey: followUrip.rkey
        });
    }
    async upsertProfile(updateFn) {
        if (!this.session) throw new Error("Not logged in");
        let retriesRemaining = 5;
        while(retriesRemaining >= 0){
            const existing = await this.com.atproto.repo.getRecord({
                repo: this.session.did,
                collection: "app.bsky.actor.profile",
                rkey: "self"
            }).catch((_)=>void 0);
            const updated = await updateFn(existing?.data.value);
            if (updated) updated.$type = "app.bsky.actor.profile";
            const validation = profile_exports.validateRecord(updated);
            if (!validation.success) throw validation.error;
            try {
                await this.com.atproto.repo.putRecord({
                    repo: this.session.did,
                    collection: "app.bsky.actor.profile",
                    rkey: "self",
                    record: updated,
                    swapRecord: existing?.data.cid || null
                });
            } catch (e) {
                if (retriesRemaining > 0 && e instanceof putRecord_exports.InvalidSwapError) {
                    retriesRemaining--;
                    continue;
                } else throw e;
            }
            break;
        }
    }
    async mute(actor) {
        return this.api.app.bsky.graph.muteActor({
            actor
        });
    }
    async unmute(actor) {
        return this.api.app.bsky.graph.unmuteActor({
            actor
        });
    }
    async updateSeenNotifications(seenAt) {
        seenAt = seenAt || new Date().toISOString();
        return this.api.app.bsky.notification.updateSeen({
            seenAt
        });
    }
};

},{}]},["2SfhH","hZhzg"], "hZhzg", "parcelRequirec87c")

//# sourceMappingURL=index.c6e689bc.js.map
