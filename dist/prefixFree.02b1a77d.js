// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"prefixFree.js":[function(require,module,exports) {
/**
 * StyleFix 1.0.3 & PrefixFree 1.0.7
 * @author Lea Verou
 * MIT license
 */
(function () {
  function m(a, b) {
    return [].slice.call((b || document).querySelectorAll(a));
  }

  if (window.addEventListener) {
    var e = window.StyleFix = {
      link: function link(a) {
        var b = a.href || a.getAttribute("data-href");

        try {
          if (!b || "stylesheet" !== a.rel || a.hasAttribute("data-noprefix")) return;
        } catch (p) {
          return;
        }

        var d = b.replace(/[^\/]+$/, ""),
            f = (/^[a-z]{3,10}:/.exec(d) || [""])[0],
            h = (/^[a-z]{3,10}:\/\/[^\/]+/.exec(d) || [""])[0],
            k = /^([^?]*)\??/.exec(b)[1],
            g = a.parentNode,
            c = new XMLHttpRequest(),
            l;

        c.onreadystatechange = function () {
          4 === c.readyState && l();
        };

        l = function l() {
          var b = c.responseText;

          if (b && a.parentNode && (!c.status || 400 > c.status || 600 < c.status)) {
            if ((b = e.fix(b, !0, a)) && d) var b = b.replace(/url\(\s*?((?:"|')?)(.+?)\1\s*?\)/gi, function (b, a, c) {
              return /^([a-z]{3,10}:|#)/i.test(c) ? b : /^\/\//.test(c) ? 'url("' + f + c + '")' : /^\//.test(c) ? 'url("' + h + c + '")' : /^\?/.test(c) ? 'url("' + k + c + '")' : 'url("' + d + c + '")';
            }),
                n = d.replace(/([\\\^\$*+[\]?{}.=!:(|)])/g, "\\$1"),
                b = b.replace(RegExp("\\b(behavior:\\s*?url\\('?\"?)" + n, "gi"), "$1");
            n = document.createElement("style");
            n.textContent = "/*# sourceURL=" + a.getAttribute("href") + " */\n/*@ sourceURL=" + a.getAttribute("href") + " */\n" + b;
            n.media = a.media;
            n.disabled = a.disabled;
            n.setAttribute("data-href", a.getAttribute("href"));
            a.id && (n.id = a.id);
            g.insertBefore(n, a);
            g.removeChild(a);
            n.media = a.media;
          }
        };

        try {
          c.open("GET", b), c.send(null);
        } catch (p) {
          "undefined" != typeof XDomainRequest && (c = new XDomainRequest(), c.onerror = c.onprogress = function () {}, c.onload = l, c.open("GET", b), c.send(null));
        }

        a.setAttribute("data-inprogress", "");
      },
      styleElement: function styleElement(a) {
        if (!a.hasAttribute("data-noprefix")) {
          var b = a.disabled;
          a.textContent = e.fix(a.textContent, !0, a);
          a.disabled = b;
        }
      },
      styleAttribute: function styleAttribute(a) {
        var b = a.getAttribute("style"),
            b = e.fix(b, !1, a);
        a.setAttribute("style", b);
      },
      process: function process() {
        m('link[rel="stylesheet"]:not([data-inprogress])').forEach(StyleFix.link);
        m("style").forEach(StyleFix.styleElement);
        m("[style]").forEach(StyleFix.styleAttribute);
      },
      register: function register(a, b) {
        (e.fixers = e.fixers || []).splice(void 0 === b ? e.fixers.length : b, 0, a);
      },
      fix: function fix(a, b, d) {
        if (e.fixers) for (var f = 0; f < e.fixers.length; f++) {
          a = e.fixers[f](a, b, d) || a;
        }
        return a;
      },
      camelCase: function camelCase(a) {
        return a.replace(/-([a-z])/g, function (b, a) {
          return a.toUpperCase();
        }).replace("-", "");
      },
      deCamelCase: function deCamelCase(a) {
        return a.replace(/[A-Z]/g, function (b) {
          return "-" + b.toLowerCase();
        });
      }
    };

    (function () {
      setTimeout(function () {
        m('link[rel="stylesheet"]').forEach(StyleFix.link);
      }, 10);
      document.addEventListener("DOMContentLoaded", StyleFix.process, !1);
    })();
  }
})();

(function (m) {
  function e(b, d, f, h, k) {
    b = a[b];
    b.length && (b = RegExp(d + "(" + b.join("|") + ")" + f, "gi"), k = k.replace(b, h));
    return k;
  }

  if (window.StyleFix && window.getComputedStyle) {
    var a = window.PrefixFree = {
      prefixCSS: function prefixCSS(b, d, f) {
        var h = a.prefix;
        -1 < a.functions.indexOf("linear-gradient") && (b = b.replace(/(\s|:|,)(repeating-)?linear-gradient\(\s*(-?\d*\.?\d*)deg/gi, function (b, a, d, f) {
          return a + (d || "") + "linear-gradient(" + (90 - f) + "deg";
        }));
        b = e("functions", "(\\s|:|,)", "\\s*\\(", "$1" + h + "$2(", b);
        b = e("keywords", "(\\s|:)", "(\\s|;|\\}|$)", "$1" + h + "$2$3", b);
        b = e("properties", "(^|\\{|\\s|;)", "\\s*:", "$1" + h + "$2:", b);

        if (a.properties.length) {
          var k = RegExp("\\b(" + a.properties.join("|") + ")(?!:)", "gi");
          b = e("valueProperties", "\\b", ":(.+?);", function (a) {
            return a.replace(k, h + "$1");
          }, b);
        }

        d && (b = e("selectors", "", "\\b", a.prefixSelector, b), b = e("atrules", "@", "\\b", "@" + h + "$1", b));
        b = b.replace(RegExp("-" + h, "g"), "-");
        return b = b.replace(/-\*-(?=[a-z]+)/gi, a.prefix);
      },
      property: function property(b) {
        return (0 <= a.properties.indexOf(b) ? a.prefix : "") + b;
      },
      value: function value(b, d) {
        b = e("functions", "(^|\\s|,)", "\\s*\\(", "$1" + a.prefix + "$2(", b);
        b = e("keywords", "(^|\\s)", "(\\s|$)", "$1" + a.prefix + "$2$3", b);
        0 <= a.valueProperties.indexOf(d) && (b = e("properties", "(^|\\s|,)", "($|\\s|,)", "$1" + a.prefix + "$2$3", b));
        return b;
      },
      prefixSelector: function prefixSelector(b) {
        return a.selectorMap[b] || b;
      },
      prefixProperty: function prefixProperty(b, d) {
        var f = a.prefix + b;
        return d ? StyleFix.camelCase(f) : f;
      }
    };

    (function () {
      var b = {},
          d = [],
          f = getComputedStyle(document.documentElement, null),
          h = document.createElement("div").style,
          k = function k(a) {
        if ("-" === a.charAt(0)) {
          d.push(a);
          a = a.split("-");
          var c = a[1];

          for (b[c] = ++b[c] || 1; 3 < a.length;) {
            a.pop(), c = a.join("-"), StyleFix.camelCase(c) in h && -1 === d.indexOf(c) && d.push(c);
          }
        }
      };

      if (f && 0 < f.length) for (var g = 0; g < f.length; g++) {
        k(f[g]);
      } else for (var c in f) {
        k(StyleFix.deCamelCase(c));
      }
      var g = 0,
          e,
          p;

      for (p in b) {
        f = b[p], g < f && (e = p, g = f);
      }

      a.prefix = "-" + e + "-";
      a.Prefix = StyleFix.camelCase(a.prefix);
      a.properties = [];

      for (g = 0; g < d.length; g++) {
        c = d[g], 0 === c.indexOf(a.prefix) && (e = c.slice(a.prefix.length), StyleFix.camelCase(e) in h || a.properties.push(e));
      }

      !("Ms" != a.Prefix || "transform" in h || "MsTransform" in h) && "msTransform" in h && a.properties.push("transform", "transform-origin");
      a.properties.sort();
    })();

    (function () {
      function b(a, b) {
        e[b] = "";
        e[b] = a;
        return !!e[b];
      }

      var d = {
        "linear-gradient": {
          property: "backgroundImage",
          params: "red, teal"
        },
        calc: {
          property: "width",
          params: "1px + 5%"
        },
        element: {
          property: "backgroundImage",
          params: "#foo"
        },
        "cross-fade": {
          property: "backgroundImage",
          params: "url(a.png), url(b.png), 50%"
        },
        "image-set": {
          property: "backgroundImage",
          params: "url(a.png) 1x, url(b.png) 2x"
        }
      };
      d["repeating-linear-gradient"] = d["repeating-radial-gradient"] = d["radial-gradient"] = d["linear-gradient"];
      var f = {
        initial: "color",
        grab: "cursor",
        grabbing: "cursor",
        "zoom-in": "cursor",
        "zoom-out": "cursor",
        box: "display",
        flexbox: "display",
        "inline-flexbox": "display",
        flex: "display",
        "inline-flex": "display",
        grid: "display",
        "inline-grid": "display",
        "max-content": "width",
        "min-content": "width",
        "fit-content": "width",
        "fill-available": "width",
        "contain-floats": "width"
      };
      a.functions = [];
      a.keywords = [];
      var e = document.createElement("div").style,
          k;

      for (k in d) {
        var g = d[k],
            c = g.property,
            g = k + "(" + g.params + ")";
        !b(g, c) && b(a.prefix + g, c) && a.functions.push(k);
      }

      for (var l in f) {
        c = f[l], !b(l, c) && b(a.prefix + l, c) && a.keywords.push(l);
      }
    })();

    (function () {
      function b(a) {
        h.textContent = a + "{}";
        return !!h.sheet.cssRules.length;
      }

      var d = {
        ":any-link": null,
        "::backdrop": null,
        ":fullscreen": null,
        ":full-screen": ":fullscreen",
        "::placeholder": null,
        ":placeholder": "::placeholder",
        "::input-placeholder": "::placeholder",
        ":input-placeholder": "::placeholder",
        ":read-only": null,
        ":read-write": null,
        "::selection": null
      },
          e = {
        keyframes: "name",
        viewport: null,
        document: 'regexp(".")'
      };
      a.selectors = [];
      a.selectorMap = {};
      a.atrules = [];
      var h = m.appendChild(document.createElement("style")),
          k;

      for (k in d) {
        var g = d[k] || k,
            c = k.replace(/::?/, function (b) {
          return b + a.prefix;
        });
        !b(g) && b(c) && (a.selectors.push(g), a.selectorMap[g] = c);
      }

      for (var l in e) {
        d = l + " " + (e[l] || ""), !b("@" + d) && b("@" + a.prefix + d) && a.atrules.push(l);
      }

      m.removeChild(h);
    })();

    a.valueProperties = ["transition", "transition-property", "will-change"];
    m.className += " " + a.prefix;
    StyleFix.register(a.prefixCSS);
  }
})(document.documentElement);
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54685" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","prefixFree.js"], null)
//# sourceMappingURL=/prefixFree.02b1a77d.js.map