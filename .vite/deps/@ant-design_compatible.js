import {
  require_MapCache,
  require_Symbol,
  require_baseGetTag,
  require_eq,
  require_getNative,
  require_isArguments,
  require_isArray,
  require_isIndex,
  require_isLength,
  require_isObject,
  require_isObjectLike
} from "./chunk-RKRN6ZSB.js";
import {
  col_default,
  form_default,
  row_default,
  theme_default
} from "./chunk-PWD7H6QR.js";
import "./chunk-T64NNKEC.js";
import {
  CheckCircleFilled_default,
  ExclamationCircleFilled_default,
  Icon_default,
  create,
  icons_exports
} from "./chunk-Z3IXHJAQ.js";
import {
  LoadingOutlined_default
} from "./chunk-GJK67TDZ.js";
import "./chunk-GH2MBEPQ.js";
import "./chunk-KDTCYITJ.js";
import "./chunk-S6FHEU4P.js";
import "./chunk-UJPF3ZDV.js";
import "./chunk-3WEAYJEI.js";
import "./chunk-3Q5JLB4D.js";
import {
  CloseCircleFilled_default
} from "./chunk-FALNGLJS.js";
import "./chunk-YYITRGAA.js";
import {
  getTwoToneColor,
  setTwoToneColor
} from "./chunk-O7Q32L42.js";
import "./chunk-W2TI63V6.js";
import {
  ConfigContext,
  clearFix,
  config_provider_default,
  formatToken,
  omit,
  resetComponent,
  useStyleRegister
} from "./chunk-QTXOSBRK.js";
import {
  TinyColor,
  generate,
  warning_default
} from "./chunk-C5TVQLKE.js";
import "./chunk-NZXOJXNM.js";
import {
  require_classnames
} from "./chunk-PQFH6TLA.js";
import {
  require_react_dom
} from "./chunk-KLGTMP6T.js";
import {
  require_react
} from "./chunk-N4N5IM6X.js";
import {
  __commonJS,
  __toESM
} from "./chunk-LK32TJAX.js";

// node_modules/core-js/library/modules/_global.js
var require_global = __commonJS({
  "node_modules/core-js/library/modules/_global.js"(exports, module) {
    var global2 = module.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
    if (typeof __g == "number") __g = global2;
  }
});

// node_modules/core-js/library/modules/_core.js
var require_core = __commonJS({
  "node_modules/core-js/library/modules/_core.js"(exports, module) {
    var core = module.exports = { version: "2.6.12" };
    if (typeof __e == "number") __e = core;
  }
});

// node_modules/core-js/library/modules/_a-function.js
var require_a_function = __commonJS({
  "node_modules/core-js/library/modules/_a-function.js"(exports, module) {
    module.exports = function(it) {
      if (typeof it != "function") throw TypeError(it + " is not a function!");
      return it;
    };
  }
});

// node_modules/core-js/library/modules/_ctx.js
var require_ctx = __commonJS({
  "node_modules/core-js/library/modules/_ctx.js"(exports, module) {
    var aFunction = require_a_function();
    module.exports = function(fn, that, length) {
      aFunction(fn);
      if (that === void 0) return fn;
      switch (length) {
        case 1:
          return function(a) {
            return fn.call(that, a);
          };
        case 2:
          return function(a, b) {
            return fn.call(that, a, b);
          };
        case 3:
          return function(a, b, c) {
            return fn.call(that, a, b, c);
          };
      }
      return function() {
        return fn.apply(that, arguments);
      };
    };
  }
});

// node_modules/core-js/library/modules/_is-object.js
var require_is_object = __commonJS({
  "node_modules/core-js/library/modules/_is-object.js"(exports, module) {
    module.exports = function(it) {
      return typeof it === "object" ? it !== null : typeof it === "function";
    };
  }
});

// node_modules/core-js/library/modules/_an-object.js
var require_an_object = __commonJS({
  "node_modules/core-js/library/modules/_an-object.js"(exports, module) {
    var isObject = require_is_object();
    module.exports = function(it) {
      if (!isObject(it)) throw TypeError(it + " is not an object!");
      return it;
    };
  }
});

// node_modules/core-js/library/modules/_fails.js
var require_fails = __commonJS({
  "node_modules/core-js/library/modules/_fails.js"(exports, module) {
    module.exports = function(exec) {
      try {
        return !!exec();
      } catch (e) {
        return true;
      }
    };
  }
});

// node_modules/core-js/library/modules/_descriptors.js
var require_descriptors = __commonJS({
  "node_modules/core-js/library/modules/_descriptors.js"(exports, module) {
    module.exports = !require_fails()(function() {
      return Object.defineProperty({}, "a", { get: function() {
        return 7;
      } }).a != 7;
    });
  }
});

// node_modules/core-js/library/modules/_dom-create.js
var require_dom_create = __commonJS({
  "node_modules/core-js/library/modules/_dom-create.js"(exports, module) {
    var isObject = require_is_object();
    var document2 = require_global().document;
    var is = isObject(document2) && isObject(document2.createElement);
    module.exports = function(it) {
      return is ? document2.createElement(it) : {};
    };
  }
});

// node_modules/core-js/library/modules/_ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "node_modules/core-js/library/modules/_ie8-dom-define.js"(exports, module) {
    module.exports = !require_descriptors() && !require_fails()(function() {
      return Object.defineProperty(require_dom_create()("div"), "a", { get: function() {
        return 7;
      } }).a != 7;
    });
  }
});

// node_modules/core-js/library/modules/_to-primitive.js
var require_to_primitive = __commonJS({
  "node_modules/core-js/library/modules/_to-primitive.js"(exports, module) {
    var isObject = require_is_object();
    module.exports = function(it, S) {
      if (!isObject(it)) return it;
      var fn, val;
      if (S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it))) return val;
      if (typeof (fn = it.valueOf) == "function" && !isObject(val = fn.call(it))) return val;
      if (!S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it))) return val;
      throw TypeError("Can't convert object to primitive value");
    };
  }
});

// node_modules/core-js/library/modules/_object-dp.js
var require_object_dp = __commonJS({
  "node_modules/core-js/library/modules/_object-dp.js"(exports) {
    var anObject = require_an_object();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var toPrimitive = require_to_primitive();
    var dP = Object.defineProperty;
    exports.f = require_descriptors() ? Object.defineProperty : function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPrimitive(P, true);
      anObject(Attributes);
      if (IE8_DOM_DEFINE) try {
        return dP(O, P, Attributes);
      } catch (e) {
      }
      if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported!");
      if ("value" in Attributes) O[P] = Attributes.value;
      return O;
    };
  }
});

// node_modules/core-js/library/modules/_property-desc.js
var require_property_desc = __commonJS({
  "node_modules/core-js/library/modules/_property-desc.js"(exports, module) {
    module.exports = function(bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value
      };
    };
  }
});

// node_modules/core-js/library/modules/_hide.js
var require_hide = __commonJS({
  "node_modules/core-js/library/modules/_hide.js"(exports, module) {
    var dP = require_object_dp();
    var createDesc = require_property_desc();
    module.exports = require_descriptors() ? function(object, key, value) {
      return dP.f(object, key, createDesc(1, value));
    } : function(object, key, value) {
      object[key] = value;
      return object;
    };
  }
});

// node_modules/core-js/library/modules/_has.js
var require_has = __commonJS({
  "node_modules/core-js/library/modules/_has.js"(exports, module) {
    var hasOwnProperty = {}.hasOwnProperty;
    module.exports = function(it, key) {
      return hasOwnProperty.call(it, key);
    };
  }
});

// node_modules/core-js/library/modules/_export.js
var require_export = __commonJS({
  "node_modules/core-js/library/modules/_export.js"(exports, module) {
    var global2 = require_global();
    var core = require_core();
    var ctx = require_ctx();
    var hide = require_hide();
    var has2 = require_has();
    var PROTOTYPE = "prototype";
    var $export = function(type, name, source) {
      var IS_FORCED = type & $export.F;
      var IS_GLOBAL = type & $export.G;
      var IS_STATIC = type & $export.S;
      var IS_PROTO = type & $export.P;
      var IS_BIND = type & $export.B;
      var IS_WRAP = type & $export.W;
      var exports2 = IS_GLOBAL ? core : core[name] || (core[name] = {});
      var expProto = exports2[PROTOTYPE];
      var target = IS_GLOBAL ? global2 : IS_STATIC ? global2[name] : (global2[name] || {})[PROTOTYPE];
      var key, own, out;
      if (IS_GLOBAL) source = name;
      for (key in source) {
        own = !IS_FORCED && target && target[key] !== void 0;
        if (own && has2(exports2, key)) continue;
        out = own ? target[key] : source[key];
        exports2[key] = IS_GLOBAL && typeof target[key] != "function" ? source[key] : IS_BIND && own ? ctx(out, global2) : IS_WRAP && target[key] == out ? function(C) {
          var F = function(a, b, c) {
            if (this instanceof C) {
              switch (arguments.length) {
                case 0:
                  return new C();
                case 1:
                  return new C(a);
                case 2:
                  return new C(a, b);
              }
              return new C(a, b, c);
            }
            return C.apply(this, arguments);
          };
          F[PROTOTYPE] = C[PROTOTYPE];
          return F;
        }(out) : IS_PROTO && typeof out == "function" ? ctx(Function.call, out) : out;
        if (IS_PROTO) {
          (exports2.virtual || (exports2.virtual = {}))[key] = out;
          if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
        }
      }
    };
    $export.F = 1;
    $export.G = 2;
    $export.S = 4;
    $export.P = 8;
    $export.B = 16;
    $export.W = 32;
    $export.U = 64;
    $export.R = 128;
    module.exports = $export;
  }
});

// node_modules/core-js/library/modules/_cof.js
var require_cof = __commonJS({
  "node_modules/core-js/library/modules/_cof.js"(exports, module) {
    var toString = {}.toString;
    module.exports = function(it) {
      return toString.call(it).slice(8, -1);
    };
  }
});

// node_modules/core-js/library/modules/_iobject.js
var require_iobject = __commonJS({
  "node_modules/core-js/library/modules/_iobject.js"(exports, module) {
    var cof = require_cof();
    module.exports = Object("z").propertyIsEnumerable(0) ? Object : function(it) {
      return cof(it) == "String" ? it.split("") : Object(it);
    };
  }
});

// node_modules/core-js/library/modules/_defined.js
var require_defined = __commonJS({
  "node_modules/core-js/library/modules/_defined.js"(exports, module) {
    module.exports = function(it) {
      if (it == void 0) throw TypeError("Can't call method on  " + it);
      return it;
    };
  }
});

// node_modules/core-js/library/modules/_to-iobject.js
var require_to_iobject = __commonJS({
  "node_modules/core-js/library/modules/_to-iobject.js"(exports, module) {
    var IObject = require_iobject();
    var defined = require_defined();
    module.exports = function(it) {
      return IObject(defined(it));
    };
  }
});

// node_modules/core-js/library/modules/_to-integer.js
var require_to_integer = __commonJS({
  "node_modules/core-js/library/modules/_to-integer.js"(exports, module) {
    var ceil = Math.ceil;
    var floor = Math.floor;
    module.exports = function(it) {
      return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
    };
  }
});

// node_modules/core-js/library/modules/_to-length.js
var require_to_length = __commonJS({
  "node_modules/core-js/library/modules/_to-length.js"(exports, module) {
    var toInteger = require_to_integer();
    var min = Math.min;
    module.exports = function(it) {
      return it > 0 ? min(toInteger(it), 9007199254740991) : 0;
    };
  }
});

// node_modules/core-js/library/modules/_to-absolute-index.js
var require_to_absolute_index = __commonJS({
  "node_modules/core-js/library/modules/_to-absolute-index.js"(exports, module) {
    var toInteger = require_to_integer();
    var max = Math.max;
    var min = Math.min;
    module.exports = function(index, length) {
      index = toInteger(index);
      return index < 0 ? max(index + length, 0) : min(index, length);
    };
  }
});

// node_modules/core-js/library/modules/_array-includes.js
var require_array_includes = __commonJS({
  "node_modules/core-js/library/modules/_array-includes.js"(exports, module) {
    var toIObject = require_to_iobject();
    var toLength = require_to_length();
    var toAbsoluteIndex = require_to_absolute_index();
    module.exports = function(IS_INCLUDES) {
      return function($this, el, fromIndex) {
        var O = toIObject($this);
        var length = toLength(O.length);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        if (IS_INCLUDES && el != el) while (length > index) {
          value = O[index++];
          if (value != value) return true;
        }
        else for (; length > index; index++) if (IS_INCLUDES || index in O) {
          if (O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
      };
    };
  }
});

// node_modules/core-js/library/modules/_library.js
var require_library = __commonJS({
  "node_modules/core-js/library/modules/_library.js"(exports, module) {
    module.exports = true;
  }
});

// node_modules/core-js/library/modules/_shared.js
var require_shared = __commonJS({
  "node_modules/core-js/library/modules/_shared.js"(exports, module) {
    var core = require_core();
    var global2 = require_global();
    var SHARED = "__core-js_shared__";
    var store = global2[SHARED] || (global2[SHARED] = {});
    (module.exports = function(key, value) {
      return store[key] || (store[key] = value !== void 0 ? value : {});
    })("versions", []).push({
      version: core.version,
      mode: require_library() ? "pure" : "global",
      copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
    });
  }
});

// node_modules/core-js/library/modules/_uid.js
var require_uid = __commonJS({
  "node_modules/core-js/library/modules/_uid.js"(exports, module) {
    var id = 0;
    var px = Math.random();
    module.exports = function(key) {
      return "Symbol(".concat(key === void 0 ? "" : key, ")_", (++id + px).toString(36));
    };
  }
});

// node_modules/core-js/library/modules/_shared-key.js
var require_shared_key = __commonJS({
  "node_modules/core-js/library/modules/_shared-key.js"(exports, module) {
    var shared = require_shared()("keys");
    var uid = require_uid();
    module.exports = function(key) {
      return shared[key] || (shared[key] = uid(key));
    };
  }
});

// node_modules/core-js/library/modules/_object-keys-internal.js
var require_object_keys_internal = __commonJS({
  "node_modules/core-js/library/modules/_object-keys-internal.js"(exports, module) {
    var has2 = require_has();
    var toIObject = require_to_iobject();
    var arrayIndexOf = require_array_includes()(false);
    var IE_PROTO = require_shared_key()("IE_PROTO");
    module.exports = function(object, names) {
      var O = toIObject(object);
      var i = 0;
      var result = [];
      var key;
      for (key in O) if (key != IE_PROTO) has2(O, key) && result.push(key);
      while (names.length > i) if (has2(O, key = names[i++])) {
        ~arrayIndexOf(result, key) || result.push(key);
      }
      return result;
    };
  }
});

// node_modules/core-js/library/modules/_enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "node_modules/core-js/library/modules/_enum-bug-keys.js"(exports, module) {
    module.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
  }
});

// node_modules/core-js/library/modules/_object-keys.js
var require_object_keys = __commonJS({
  "node_modules/core-js/library/modules/_object-keys.js"(exports, module) {
    var $keys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    module.exports = Object.keys || function keys(O) {
      return $keys(O, enumBugKeys);
    };
  }
});

// node_modules/core-js/library/modules/_object-gops.js
var require_object_gops = __commonJS({
  "node_modules/core-js/library/modules/_object-gops.js"(exports) {
    exports.f = Object.getOwnPropertySymbols;
  }
});

// node_modules/core-js/library/modules/_object-pie.js
var require_object_pie = __commonJS({
  "node_modules/core-js/library/modules/_object-pie.js"(exports) {
    exports.f = {}.propertyIsEnumerable;
  }
});

// node_modules/core-js/library/modules/_to-object.js
var require_to_object = __commonJS({
  "node_modules/core-js/library/modules/_to-object.js"(exports, module) {
    var defined = require_defined();
    module.exports = function(it) {
      return Object(defined(it));
    };
  }
});

// node_modules/core-js/library/modules/_object-assign.js
var require_object_assign = __commonJS({
  "node_modules/core-js/library/modules/_object-assign.js"(exports, module) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var getKeys = require_object_keys();
    var gOPS = require_object_gops();
    var pIE = require_object_pie();
    var toObject = require_to_object();
    var IObject = require_iobject();
    var $assign = Object.assign;
    module.exports = !$assign || require_fails()(function() {
      var A = {};
      var B = {};
      var S = Symbol();
      var K = "abcdefghijklmnopqrst";
      A[S] = 7;
      K.split("").forEach(function(k) {
        B[k] = k;
      });
      return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join("") != K;
    }) ? function assign(target, source) {
      var T = toObject(target);
      var aLen = arguments.length;
      var index = 1;
      var getSymbols = gOPS.f;
      var isEnum = pIE.f;
      while (aLen > index) {
        var S = IObject(arguments[index++]);
        var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
        var length = keys.length;
        var j = 0;
        var key;
        while (length > j) {
          key = keys[j++];
          if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
        }
      }
      return T;
    } : $assign;
  }
});

// node_modules/core-js/library/modules/es6.object.assign.js
var require_es6_object_assign = __commonJS({
  "node_modules/core-js/library/modules/es6.object.assign.js"() {
    var $export = require_export();
    $export($export.S + $export.F, "Object", { assign: require_object_assign() });
  }
});

// node_modules/core-js/library/fn/object/assign.js
var require_assign = __commonJS({
  "node_modules/core-js/library/fn/object/assign.js"(exports, module) {
    require_es6_object_assign();
    module.exports = require_core().Object.assign;
  }
});

// node_modules/babel-runtime/core-js/object/assign.js
var require_assign2 = __commonJS({
  "node_modules/babel-runtime/core-js/object/assign.js"(exports, module) {
    module.exports = { "default": require_assign(), __esModule: true };
  }
});

// node_modules/babel-runtime/helpers/extends.js
var require_extends = __commonJS({
  "node_modules/babel-runtime/helpers/extends.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _assign = require_assign2();
    var _assign2 = _interopRequireDefault(_assign);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = _assign2.default || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  }
});

// node_modules/dom-scroll-into-view/lib/util.js
var require_util = __commonJS({
  "node_modules/dom-scroll-into-view/lib/util.js"(exports, module) {
    "use strict";
    var _extends10 = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var _typeof13 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
    function getClientPosition(elem) {
      var box = void 0;
      var x = void 0;
      var y = void 0;
      var doc = elem.ownerDocument;
      var body = doc.body;
      var docElem = doc && doc.documentElement;
      box = elem.getBoundingClientRect();
      x = box.left;
      y = box.top;
      x -= docElem.clientLeft || body.clientLeft || 0;
      y -= docElem.clientTop || body.clientTop || 0;
      return {
        left: x,
        top: y
      };
    }
    function getScroll(w, top) {
      var ret = w["page" + (top ? "Y" : "X") + "Offset"];
      var method = "scroll" + (top ? "Top" : "Left");
      if (typeof ret !== "number") {
        var d = w.document;
        ret = d.documentElement[method];
        if (typeof ret !== "number") {
          ret = d.body[method];
        }
      }
      return ret;
    }
    function getScrollLeft(w) {
      return getScroll(w);
    }
    function getScrollTop(w) {
      return getScroll(w, true);
    }
    function getOffset(el) {
      var pos = getClientPosition(el);
      var doc = el.ownerDocument;
      var w = doc.defaultView || doc.parentWindow;
      pos.left += getScrollLeft(w);
      pos.top += getScrollTop(w);
      return pos;
    }
    function _getComputedStyle(elem, name, computedStyle_) {
      var val = "";
      var d = elem.ownerDocument;
      var computedStyle2 = computedStyle_ || d.defaultView.getComputedStyle(elem, null);
      if (computedStyle2) {
        val = computedStyle2.getPropertyValue(name) || computedStyle2[name];
      }
      return val;
    }
    var _RE_NUM_NO_PX = new RegExp("^(" + RE_NUM + ")(?!px)[a-z%]+$", "i");
    var RE_POS = /^(top|right|bottom|left)$/;
    var CURRENT_STYLE = "currentStyle";
    var RUNTIME_STYLE = "runtimeStyle";
    var LEFT = "left";
    var PX = "px";
    function _getComputedStyleIE(elem, name) {
      var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];
      if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
        var style = elem.style;
        var left = style[LEFT];
        var rsLeft = elem[RUNTIME_STYLE][LEFT];
        elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];
        style[LEFT] = name === "fontSize" ? "1em" : ret || 0;
        ret = style.pixelLeft + PX;
        style[LEFT] = left;
        elem[RUNTIME_STYLE][LEFT] = rsLeft;
      }
      return ret === "" ? "auto" : ret;
    }
    var getComputedStyleX = void 0;
    if (typeof window !== "undefined") {
      getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
    }
    function each(arr, fn) {
      for (var i = 0; i < arr.length; i++) {
        fn(arr[i]);
      }
    }
    function isBorderBoxFn(elem) {
      return getComputedStyleX(elem, "boxSizing") === "border-box";
    }
    var BOX_MODELS = ["margin", "border", "padding"];
    var CONTENT_INDEX = -1;
    var PADDING_INDEX = 2;
    var BORDER_INDEX = 1;
    var MARGIN_INDEX = 0;
    function swap(elem, options, callback) {
      var old = {};
      var style = elem.style;
      var name = void 0;
      for (name in options) {
        if (options.hasOwnProperty(name)) {
          old[name] = style[name];
          style[name] = options[name];
        }
      }
      callback.call(elem);
      for (name in options) {
        if (options.hasOwnProperty(name)) {
          style[name] = old[name];
        }
      }
    }
    function getPBMWidth(elem, props, which) {
      var value = 0;
      var prop = void 0;
      var j = void 0;
      var i = void 0;
      for (j = 0; j < props.length; j++) {
        prop = props[j];
        if (prop) {
          for (i = 0; i < which.length; i++) {
            var cssProp = void 0;
            if (prop === "border") {
              cssProp = prop + which[i] + "Width";
            } else {
              cssProp = prop + which[i];
            }
            value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
          }
        }
      }
      return value;
    }
    function isWindow(obj) {
      return obj != null && obj == obj.window;
    }
    var domUtils = {};
    each(["Width", "Height"], function(name) {
      domUtils["doc" + name] = function(refWin) {
        var d = refWin.document;
        return Math.max(
          // firefox chrome documentElement.scrollHeight< body.scrollHeight
          // ie standard mode : documentElement.scrollHeight> body.scrollHeight
          d.documentElement["scroll" + name],
          // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
          d.body["scroll" + name],
          domUtils["viewport" + name](d)
        );
      };
      domUtils["viewport" + name] = function(win) {
        var prop = "client" + name;
        var doc = win.document;
        var body = doc.body;
        var documentElement = doc.documentElement;
        var documentElementProp = documentElement[prop];
        return doc.compatMode === "CSS1Compat" && documentElementProp || body && body[prop] || documentElementProp;
      };
    });
    function getWH(elem, name, extra) {
      if (isWindow(elem)) {
        return name === "width" ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
      } else if (elem.nodeType === 9) {
        return name === "width" ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
      }
      var which = name === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
      var borderBoxValue = name === "width" ? elem.offsetWidth : elem.offsetHeight;
      var computedStyle2 = getComputedStyleX(elem);
      var isBorderBox = isBorderBoxFn(elem, computedStyle2);
      var cssBoxValue = 0;
      if (borderBoxValue == null || borderBoxValue <= 0) {
        borderBoxValue = void 0;
        cssBoxValue = getComputedStyleX(elem, name);
        if (cssBoxValue == null || Number(cssBoxValue) < 0) {
          cssBoxValue = elem.style[name] || 0;
        }
        cssBoxValue = parseFloat(cssBoxValue) || 0;
      }
      if (extra === void 0) {
        extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
      }
      var borderBoxValueOrIsBorderBox = borderBoxValue !== void 0 || isBorderBox;
      var val = borderBoxValue || cssBoxValue;
      if (extra === CONTENT_INDEX) {
        if (borderBoxValueOrIsBorderBox) {
          return val - getPBMWidth(elem, ["border", "padding"], which, computedStyle2);
        }
        return cssBoxValue;
      }
      if (borderBoxValueOrIsBorderBox) {
        var padding = extra === PADDING_INDEX ? -getPBMWidth(elem, ["border"], which, computedStyle2) : getPBMWidth(elem, ["margin"], which, computedStyle2);
        return val + (extra === BORDER_INDEX ? 0 : padding);
      }
      return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle2);
    }
    var cssShow = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    };
    function getWHIgnoreDisplay(elem) {
      var val = void 0;
      var args = arguments;
      if (elem.offsetWidth !== 0) {
        val = getWH.apply(void 0, args);
      } else {
        swap(elem, cssShow, function() {
          val = getWH.apply(void 0, args);
        });
      }
      return val;
    }
    function css(el, name, v) {
      var value = v;
      if ((typeof name === "undefined" ? "undefined" : _typeof13(name)) === "object") {
        for (var i in name) {
          if (name.hasOwnProperty(i)) {
            css(el, i, name[i]);
          }
        }
        return void 0;
      }
      if (typeof value !== "undefined") {
        if (typeof value === "number") {
          value += "px";
        }
        el.style[name] = value;
        return void 0;
      }
      return getComputedStyleX(el, name);
    }
    each(["width", "height"], function(name) {
      var first = name.charAt(0).toUpperCase() + name.slice(1);
      domUtils["outer" + first] = function(el, includeMargin) {
        return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
      };
      var which = name === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
      domUtils[name] = function(elem, val) {
        if (val !== void 0) {
          if (elem) {
            var computedStyle2 = getComputedStyleX(elem);
            var isBorderBox = isBorderBoxFn(elem);
            if (isBorderBox) {
              val += getPBMWidth(elem, ["padding", "border"], which, computedStyle2);
            }
            return css(elem, name, val);
          }
          return void 0;
        }
        return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
      };
    });
    function setOffset(elem, offset) {
      if (css(elem, "position") === "static") {
        elem.style.position = "relative";
      }
      var old = getOffset(elem);
      var ret = {};
      var current = void 0;
      var key = void 0;
      for (key in offset) {
        if (offset.hasOwnProperty(key)) {
          current = parseFloat(css(elem, key)) || 0;
          ret[key] = current + offset[key] - old[key];
        }
      }
      css(elem, ret);
    }
    module.exports = _extends10({
      getWindow: function getWindow(node) {
        var doc = node.ownerDocument || node;
        return doc.defaultView || doc.parentWindow;
      },
      offset: function offset(el, value) {
        if (typeof value !== "undefined") {
          setOffset(el, value);
        } else {
          return getOffset(el);
        }
      },
      isWindow,
      each,
      css,
      clone: function clone(obj) {
        var ret = {};
        for (var i in obj) {
          if (obj.hasOwnProperty(i)) {
            ret[i] = obj[i];
          }
        }
        var overflow = obj.overflow;
        if (overflow) {
          for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
              ret.overflow[i] = obj.overflow[i];
            }
          }
        }
        return ret;
      },
      scrollLeft: function scrollLeft(w, v) {
        if (isWindow(w)) {
          if (v === void 0) {
            return getScrollLeft(w);
          }
          window.scrollTo(v, getScrollTop(w));
        } else {
          if (v === void 0) {
            return w.scrollLeft;
          }
          w.scrollLeft = v;
        }
      },
      scrollTop: function scrollTop(w, v) {
        if (isWindow(w)) {
          if (v === void 0) {
            return getScrollTop(w);
          }
          window.scrollTo(getScrollLeft(w), v);
        } else {
          if (v === void 0) {
            return w.scrollTop;
          }
          w.scrollTop = v;
        }
      },
      viewportWidth: 0,
      viewportHeight: 0
    }, domUtils);
  }
});

// node_modules/dom-scroll-into-view/lib/dom-scroll-into-view.js
var require_dom_scroll_into_view = __commonJS({
  "node_modules/dom-scroll-into-view/lib/dom-scroll-into-view.js"(exports, module) {
    "use strict";
    var util = require_util();
    function scrollIntoView2(elem, container, config) {
      config = config || {};
      if (container.nodeType === 9) {
        container = util.getWindow(container);
      }
      var allowHorizontalScroll = config.allowHorizontalScroll;
      var onlyScrollIfNeeded = config.onlyScrollIfNeeded;
      var alignWithTop = config.alignWithTop;
      var alignWithLeft = config.alignWithLeft;
      var offsetTop = config.offsetTop || 0;
      var offsetLeft = config.offsetLeft || 0;
      var offsetBottom = config.offsetBottom || 0;
      var offsetRight = config.offsetRight || 0;
      allowHorizontalScroll = allowHorizontalScroll === void 0 ? true : allowHorizontalScroll;
      var isWin = util.isWindow(container);
      var elemOffset = util.offset(elem);
      var eh = util.outerHeight(elem);
      var ew = util.outerWidth(elem);
      var containerOffset = void 0;
      var ch = void 0;
      var cw = void 0;
      var containerScroll = void 0;
      var diffTop = void 0;
      var diffBottom = void 0;
      var win = void 0;
      var winScroll = void 0;
      var ww = void 0;
      var wh = void 0;
      if (isWin) {
        win = container;
        wh = util.height(win);
        ww = util.width(win);
        winScroll = {
          left: util.scrollLeft(win),
          top: util.scrollTop(win)
        };
        diffTop = {
          left: elemOffset.left - winScroll.left - offsetLeft,
          top: elemOffset.top - winScroll.top - offsetTop
        };
        diffBottom = {
          left: elemOffset.left + ew - (winScroll.left + ww) + offsetRight,
          top: elemOffset.top + eh - (winScroll.top + wh) + offsetBottom
        };
        containerScroll = winScroll;
      } else {
        containerOffset = util.offset(container);
        ch = container.clientHeight;
        cw = container.clientWidth;
        containerScroll = {
          left: container.scrollLeft,
          top: container.scrollTop
        };
        diffTop = {
          left: elemOffset.left - (containerOffset.left + (parseFloat(util.css(container, "borderLeftWidth")) || 0)) - offsetLeft,
          top: elemOffset.top - (containerOffset.top + (parseFloat(util.css(container, "borderTopWidth")) || 0)) - offsetTop
        };
        diffBottom = {
          left: elemOffset.left + ew - (containerOffset.left + cw + (parseFloat(util.css(container, "borderRightWidth")) || 0)) + offsetRight,
          top: elemOffset.top + eh - (containerOffset.top + ch + (parseFloat(util.css(container, "borderBottomWidth")) || 0)) + offsetBottom
        };
      }
      if (diffTop.top < 0 || diffBottom.top > 0) {
        if (alignWithTop === true) {
          util.scrollTop(container, containerScroll.top + diffTop.top);
        } else if (alignWithTop === false) {
          util.scrollTop(container, containerScroll.top + diffBottom.top);
        } else {
          if (diffTop.top < 0) {
            util.scrollTop(container, containerScroll.top + diffTop.top);
          } else {
            util.scrollTop(container, containerScroll.top + diffBottom.top);
          }
        }
      } else {
        if (!onlyScrollIfNeeded) {
          alignWithTop = alignWithTop === void 0 ? true : !!alignWithTop;
          if (alignWithTop) {
            util.scrollTop(container, containerScroll.top + diffTop.top);
          } else {
            util.scrollTop(container, containerScroll.top + diffBottom.top);
          }
        }
      }
      if (allowHorizontalScroll) {
        if (diffTop.left < 0 || diffBottom.left > 0) {
          if (alignWithLeft === true) {
            util.scrollLeft(container, containerScroll.left + diffTop.left);
          } else if (alignWithLeft === false) {
            util.scrollLeft(container, containerScroll.left + diffBottom.left);
          } else {
            if (diffTop.left < 0) {
              util.scrollLeft(container, containerScroll.left + diffTop.left);
            } else {
              util.scrollLeft(container, containerScroll.left + diffBottom.left);
            }
          }
        } else {
          if (!onlyScrollIfNeeded) {
            alignWithLeft = alignWithLeft === void 0 ? true : !!alignWithLeft;
            if (alignWithLeft) {
              util.scrollLeft(container, containerScroll.left + diffTop.left);
            } else {
              util.scrollLeft(container, containerScroll.left + diffBottom.left);
            }
          }
        }
      }
    }
    module.exports = scrollIntoView2;
  }
});

// node_modules/dom-scroll-into-view/lib/index.js
var require_lib = __commonJS({
  "node_modules/dom-scroll-into-view/lib/index.js"(exports, module) {
    "use strict";
    module.exports = require_dom_scroll_into_view();
  }
});

// node_modules/lodash/_baseHas.js
var require_baseHas = __commonJS({
  "node_modules/lodash/_baseHas.js"(exports, module) {
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseHas(object, key) {
      return object != null && hasOwnProperty.call(object, key);
    }
    module.exports = baseHas;
  }
});

// node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "node_modules/lodash/isSymbol.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    module.exports = isSymbol;
  }
});

// node_modules/lodash/_isKey.js
var require_isKey = __commonJS({
  "node_modules/lodash/_isKey.js"(exports, module) {
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    var reIsPlainProp = /^\w*$/;
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
    }
    module.exports = isKey;
  }
});

// node_modules/lodash/memoize.js
var require_memoize = __commonJS({
  "node_modules/lodash/memoize.js"(exports, module) {
    var MapCache = require_MapCache();
    var FUNC_ERROR_TEXT = "Expected a function";
    function memoize(func, resolver) {
      if (typeof func != "function" || resolver != null && typeof resolver != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache)();
      return memoized;
    }
    memoize.Cache = MapCache;
    module.exports = memoize;
  }
});

// node_modules/lodash/_memoizeCapped.js
var require_memoizeCapped = __commonJS({
  "node_modules/lodash/_memoizeCapped.js"(exports, module) {
    var memoize = require_memoize();
    var MAX_MEMOIZE_SIZE = 500;
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });
      var cache = result.cache;
      return result;
    }
    module.exports = memoizeCapped;
  }
});

// node_modules/lodash/_stringToPath.js
var require_stringToPath = __commonJS({
  "node_modules/lodash/_stringToPath.js"(exports, module) {
    var memoizeCapped = require_memoizeCapped();
    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46) {
        result.push("");
      }
      string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
      });
      return result;
    });
    module.exports = stringToPath;
  }
});

// node_modules/lodash/_arrayMap.js
var require_arrayMap = __commonJS({
  "node_modules/lodash/_arrayMap.js"(exports, module) {
    function arrayMap(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length, result = Array(length);
      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }
    module.exports = arrayMap;
  }
});

// node_modules/lodash/_baseToString.js
var require_baseToString = __commonJS({
  "node_modules/lodash/_baseToString.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var arrayMap = require_arrayMap();
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isArray(value)) {
        return arrayMap(value, baseToString) + "";
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module.exports = baseToString;
  }
});

// node_modules/lodash/toString.js
var require_toString = __commonJS({
  "node_modules/lodash/toString.js"(exports, module) {
    var baseToString = require_baseToString();
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    module.exports = toString;
  }
});

// node_modules/lodash/_castPath.js
var require_castPath = __commonJS({
  "node_modules/lodash/_castPath.js"(exports, module) {
    var isArray = require_isArray();
    var isKey = require_isKey();
    var stringToPath = require_stringToPath();
    var toString = require_toString();
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }
    module.exports = castPath;
  }
});

// node_modules/lodash/_toKey.js
var require_toKey = __commonJS({
  "node_modules/lodash/_toKey.js"(exports, module) {
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    function toKey(value) {
      if (typeof value == "string" || isSymbol(value)) {
        return value;
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module.exports = toKey;
  }
});

// node_modules/lodash/_hasPath.js
var require_hasPath = __commonJS({
  "node_modules/lodash/_hasPath.js"(exports, module) {
    var castPath = require_castPath();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isIndex = require_isIndex();
    var isLength = require_isLength();
    var toKey = require_toKey();
    function hasPath(object, path, hasFunc) {
      path = castPath(path, object);
      var index = -1, length = path.length, result = false;
      while (++index < length) {
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
    }
    module.exports = hasPath;
  }
});

// node_modules/lodash/has.js
var require_has2 = __commonJS({
  "node_modules/lodash/has.js"(exports, module) {
    var baseHas = require_baseHas();
    var hasPath = require_hasPath();
    function has2(object, path) {
      return object != null && hasPath(object, path, baseHas);
    }
    module.exports = has2;
  }
});

// node_modules/babel-runtime/helpers/objectWithoutProperties.js
var require_objectWithoutProperties = __commonJS({
  "node_modules/babel-runtime/helpers/objectWithoutProperties.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.default = function(obj, keys) {
      var target = {};
      for (var i in obj) {
        if (keys.indexOf(i) >= 0) continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
        target[i] = obj[i];
      }
      return target;
    };
  }
});

// node_modules/core-js/library/modules/es6.object.define-property.js
var require_es6_object_define_property = __commonJS({
  "node_modules/core-js/library/modules/es6.object.define-property.js"() {
    var $export = require_export();
    $export($export.S + $export.F * !require_descriptors(), "Object", { defineProperty: require_object_dp().f });
  }
});

// node_modules/core-js/library/fn/object/define-property.js
var require_define_property = __commonJS({
  "node_modules/core-js/library/fn/object/define-property.js"(exports, module) {
    require_es6_object_define_property();
    var $Object = require_core().Object;
    module.exports = function defineProperty(it, key, desc) {
      return $Object.defineProperty(it, key, desc);
    };
  }
});

// node_modules/babel-runtime/core-js/object/define-property.js
var require_define_property2 = __commonJS({
  "node_modules/babel-runtime/core-js/object/define-property.js"(exports, module) {
    module.exports = { "default": require_define_property(), __esModule: true };
  }
});

// node_modules/babel-runtime/helpers/defineProperty.js
var require_defineProperty = __commonJS({
  "node_modules/babel-runtime/helpers/defineProperty.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _defineProperty15 = require_define_property2();
    var _defineProperty22 = _interopRequireDefault(_defineProperty15);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = function(obj, key, value) {
      if (key in obj) {
        (0, _defineProperty22.default)(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    };
  }
});

// node_modules/core-js/library/modules/_string-at.js
var require_string_at = __commonJS({
  "node_modules/core-js/library/modules/_string-at.js"(exports, module) {
    var toInteger = require_to_integer();
    var defined = require_defined();
    module.exports = function(TO_STRING) {
      return function(that, pos) {
        var s = String(defined(that));
        var i = toInteger(pos);
        var l = s.length;
        var a, b;
        if (i < 0 || i >= l) return TO_STRING ? "" : void 0;
        a = s.charCodeAt(i);
        return a < 55296 || a > 56319 || i + 1 === l || (b = s.charCodeAt(i + 1)) < 56320 || b > 57343 ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 55296 << 10) + (b - 56320) + 65536;
      };
    };
  }
});

// node_modules/core-js/library/modules/_redefine.js
var require_redefine = __commonJS({
  "node_modules/core-js/library/modules/_redefine.js"(exports, module) {
    module.exports = require_hide();
  }
});

// node_modules/core-js/library/modules/_iterators.js
var require_iterators = __commonJS({
  "node_modules/core-js/library/modules/_iterators.js"(exports, module) {
    module.exports = {};
  }
});

// node_modules/core-js/library/modules/_object-dps.js
var require_object_dps = __commonJS({
  "node_modules/core-js/library/modules/_object-dps.js"(exports, module) {
    var dP = require_object_dp();
    var anObject = require_an_object();
    var getKeys = require_object_keys();
    module.exports = require_descriptors() ? Object.defineProperties : function defineProperties(O, Properties) {
      anObject(O);
      var keys = getKeys(Properties);
      var length = keys.length;
      var i = 0;
      var P;
      while (length > i) dP.f(O, P = keys[i++], Properties[P]);
      return O;
    };
  }
});

// node_modules/core-js/library/modules/_html.js
var require_html = __commonJS({
  "node_modules/core-js/library/modules/_html.js"(exports, module) {
    var document2 = require_global().document;
    module.exports = document2 && document2.documentElement;
  }
});

// node_modules/core-js/library/modules/_object-create.js
var require_object_create = __commonJS({
  "node_modules/core-js/library/modules/_object-create.js"(exports, module) {
    var anObject = require_an_object();
    var dPs = require_object_dps();
    var enumBugKeys = require_enum_bug_keys();
    var IE_PROTO = require_shared_key()("IE_PROTO");
    var Empty = function() {
    };
    var PROTOTYPE = "prototype";
    var createDict = function() {
      var iframe = require_dom_create()("iframe");
      var i = enumBugKeys.length;
      var lt = "<";
      var gt = ">";
      var iframeDocument;
      iframe.style.display = "none";
      require_html().appendChild(iframe);
      iframe.src = "javascript:";
      iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(lt + "script" + gt + "document.F=Object" + lt + "/script" + gt);
      iframeDocument.close();
      createDict = iframeDocument.F;
      while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
      return createDict();
    };
    module.exports = Object.create || function create3(O, Properties) {
      var result;
      if (O !== null) {
        Empty[PROTOTYPE] = anObject(O);
        result = new Empty();
        Empty[PROTOTYPE] = null;
        result[IE_PROTO] = O;
      } else result = createDict();
      return Properties === void 0 ? result : dPs(result, Properties);
    };
  }
});

// node_modules/core-js/library/modules/_wks.js
var require_wks = __commonJS({
  "node_modules/core-js/library/modules/_wks.js"(exports, module) {
    var store = require_shared()("wks");
    var uid = require_uid();
    var Symbol2 = require_global().Symbol;
    var USE_SYMBOL = typeof Symbol2 == "function";
    var $exports = module.exports = function(name) {
      return store[name] || (store[name] = USE_SYMBOL && Symbol2[name] || (USE_SYMBOL ? Symbol2 : uid)("Symbol." + name));
    };
    $exports.store = store;
  }
});

// node_modules/core-js/library/modules/_set-to-string-tag.js
var require_set_to_string_tag = __commonJS({
  "node_modules/core-js/library/modules/_set-to-string-tag.js"(exports, module) {
    var def = require_object_dp().f;
    var has2 = require_has();
    var TAG = require_wks()("toStringTag");
    module.exports = function(it, tag, stat) {
      if (it && !has2(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
    };
  }
});

// node_modules/core-js/library/modules/_iter-create.js
var require_iter_create = __commonJS({
  "node_modules/core-js/library/modules/_iter-create.js"(exports, module) {
    "use strict";
    var create3 = require_object_create();
    var descriptor = require_property_desc();
    var setToStringTag = require_set_to_string_tag();
    var IteratorPrototype = {};
    require_hide()(IteratorPrototype, require_wks()("iterator"), function() {
      return this;
    });
    module.exports = function(Constructor, NAME, next) {
      Constructor.prototype = create3(IteratorPrototype, { next: descriptor(1, next) });
      setToStringTag(Constructor, NAME + " Iterator");
    };
  }
});

// node_modules/core-js/library/modules/_object-gpo.js
var require_object_gpo = __commonJS({
  "node_modules/core-js/library/modules/_object-gpo.js"(exports, module) {
    var has2 = require_has();
    var toObject = require_to_object();
    var IE_PROTO = require_shared_key()("IE_PROTO");
    var ObjectProto = Object.prototype;
    module.exports = Object.getPrototypeOf || function(O) {
      O = toObject(O);
      if (has2(O, IE_PROTO)) return O[IE_PROTO];
      if (typeof O.constructor == "function" && O instanceof O.constructor) {
        return O.constructor.prototype;
      }
      return O instanceof Object ? ObjectProto : null;
    };
  }
});

// node_modules/core-js/library/modules/_iter-define.js
var require_iter_define = __commonJS({
  "node_modules/core-js/library/modules/_iter-define.js"(exports, module) {
    "use strict";
    var LIBRARY = require_library();
    var $export = require_export();
    var redefine = require_redefine();
    var hide = require_hide();
    var Iterators = require_iterators();
    var $iterCreate = require_iter_create();
    var setToStringTag = require_set_to_string_tag();
    var getPrototypeOf = require_object_gpo();
    var ITERATOR = require_wks()("iterator");
    var BUGGY = !([].keys && "next" in [].keys());
    var FF_ITERATOR = "@@iterator";
    var KEYS = "keys";
    var VALUES = "values";
    var returnThis = function() {
      return this;
    };
    module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
      $iterCreate(Constructor, NAME, next);
      var getMethod = function(kind) {
        if (!BUGGY && kind in proto) return proto[kind];
        switch (kind) {
          case KEYS:
            return function keys() {
              return new Constructor(this, kind);
            };
          case VALUES:
            return function values() {
              return new Constructor(this, kind);
            };
        }
        return function entries() {
          return new Constructor(this, kind);
        };
      };
      var TAG = NAME + " Iterator";
      var DEF_VALUES = DEFAULT == VALUES;
      var VALUES_BUG = false;
      var proto = Base.prototype;
      var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
      var $default = $native || getMethod(DEFAULT);
      var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod("entries") : void 0;
      var $anyNative = NAME == "Array" ? proto.entries || $native : $native;
      var methods, key, IteratorPrototype;
      if ($anyNative) {
        IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
        if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
          setToStringTag(IteratorPrototype, TAG, true);
          if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != "function") hide(IteratorPrototype, ITERATOR, returnThis);
        }
      }
      if (DEF_VALUES && $native && $native.name !== VALUES) {
        VALUES_BUG = true;
        $default = function values() {
          return $native.call(this);
        };
      }
      if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
        hide(proto, ITERATOR, $default);
      }
      Iterators[NAME] = $default;
      Iterators[TAG] = returnThis;
      if (DEFAULT) {
        methods = {
          values: DEF_VALUES ? $default : getMethod(VALUES),
          keys: IS_SET ? $default : getMethod(KEYS),
          entries: $entries
        };
        if (FORCED) for (key in methods) {
          if (!(key in proto)) redefine(proto, key, methods[key]);
        }
        else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
      }
      return methods;
    };
  }
});

// node_modules/core-js/library/modules/es6.string.iterator.js
var require_es6_string_iterator = __commonJS({
  "node_modules/core-js/library/modules/es6.string.iterator.js"() {
    "use strict";
    var $at = require_string_at()(true);
    require_iter_define()(String, "String", function(iterated) {
      this._t = String(iterated);
      this._i = 0;
    }, function() {
      var O = this._t;
      var index = this._i;
      var point;
      if (index >= O.length) return { value: void 0, done: true };
      point = $at(O, index);
      this._i += point.length;
      return { value: point, done: false };
    });
  }
});

// node_modules/core-js/library/modules/_iter-call.js
var require_iter_call = __commonJS({
  "node_modules/core-js/library/modules/_iter-call.js"(exports, module) {
    var anObject = require_an_object();
    module.exports = function(iterator, fn, value, entries) {
      try {
        return entries ? fn(anObject(value)[0], value[1]) : fn(value);
      } catch (e) {
        var ret = iterator["return"];
        if (ret !== void 0) anObject(ret.call(iterator));
        throw e;
      }
    };
  }
});

// node_modules/core-js/library/modules/_is-array-iter.js
var require_is_array_iter = __commonJS({
  "node_modules/core-js/library/modules/_is-array-iter.js"(exports, module) {
    var Iterators = require_iterators();
    var ITERATOR = require_wks()("iterator");
    var ArrayProto = Array.prototype;
    module.exports = function(it) {
      return it !== void 0 && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
    };
  }
});

// node_modules/core-js/library/modules/_create-property.js
var require_create_property = __commonJS({
  "node_modules/core-js/library/modules/_create-property.js"(exports, module) {
    "use strict";
    var $defineProperty = require_object_dp();
    var createDesc = require_property_desc();
    module.exports = function(object, index, value) {
      if (index in object) $defineProperty.f(object, index, createDesc(0, value));
      else object[index] = value;
    };
  }
});

// node_modules/core-js/library/modules/_classof.js
var require_classof = __commonJS({
  "node_modules/core-js/library/modules/_classof.js"(exports, module) {
    var cof = require_cof();
    var TAG = require_wks()("toStringTag");
    var ARG = cof(/* @__PURE__ */ function() {
      return arguments;
    }()) == "Arguments";
    var tryGet = function(it, key) {
      try {
        return it[key];
      } catch (e) {
      }
    };
    module.exports = function(it) {
      var O, T, B;
      return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (T = tryGet(O = Object(it), TAG)) == "string" ? T : ARG ? cof(O) : (B = cof(O)) == "Object" && typeof O.callee == "function" ? "Arguments" : B;
    };
  }
});

// node_modules/core-js/library/modules/core.get-iterator-method.js
var require_core_get_iterator_method = __commonJS({
  "node_modules/core-js/library/modules/core.get-iterator-method.js"(exports, module) {
    var classof = require_classof();
    var ITERATOR = require_wks()("iterator");
    var Iterators = require_iterators();
    module.exports = require_core().getIteratorMethod = function(it) {
      if (it != void 0) return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
    };
  }
});

// node_modules/core-js/library/modules/_iter-detect.js
var require_iter_detect = __commonJS({
  "node_modules/core-js/library/modules/_iter-detect.js"(exports, module) {
    var ITERATOR = require_wks()("iterator");
    var SAFE_CLOSING = false;
    try {
      riter = [7][ITERATOR]();
      riter["return"] = function() {
        SAFE_CLOSING = true;
      };
      Array.from(riter, function() {
        throw 2;
      });
    } catch (e) {
    }
    var riter;
    module.exports = function(exec, skipClosing) {
      if (!skipClosing && !SAFE_CLOSING) return false;
      var safe = false;
      try {
        var arr = [7];
        var iter = arr[ITERATOR]();
        iter.next = function() {
          return { done: safe = true };
        };
        arr[ITERATOR] = function() {
          return iter;
        };
        exec(arr);
      } catch (e) {
      }
      return safe;
    };
  }
});

// node_modules/core-js/library/modules/es6.array.from.js
var require_es6_array_from = __commonJS({
  "node_modules/core-js/library/modules/es6.array.from.js"() {
    "use strict";
    var ctx = require_ctx();
    var $export = require_export();
    var toObject = require_to_object();
    var call = require_iter_call();
    var isArrayIter = require_is_array_iter();
    var toLength = require_to_length();
    var createProperty = require_create_property();
    var getIterFn = require_core_get_iterator_method();
    $export($export.S + $export.F * !require_iter_detect()(function(iter) {
      Array.from(iter);
    }), "Array", {
      // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
      from: function from(arrayLike) {
        var O = toObject(arrayLike);
        var C = typeof this == "function" ? this : Array;
        var aLen = arguments.length;
        var mapfn = aLen > 1 ? arguments[1] : void 0;
        var mapping = mapfn !== void 0;
        var index = 0;
        var iterFn = getIterFn(O);
        var length, result, step, iterator;
        if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : void 0, 2);
        if (iterFn != void 0 && !(C == Array && isArrayIter(iterFn))) {
          for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
            createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
          }
        } else {
          length = toLength(O.length);
          for (result = new C(length); length > index; index++) {
            createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
          }
        }
        result.length = index;
        return result;
      }
    });
  }
});

// node_modules/core-js/library/fn/array/from.js
var require_from = __commonJS({
  "node_modules/core-js/library/fn/array/from.js"(exports, module) {
    require_es6_string_iterator();
    require_es6_array_from();
    module.exports = require_core().Array.from;
  }
});

// node_modules/babel-runtime/core-js/array/from.js
var require_from2 = __commonJS({
  "node_modules/babel-runtime/core-js/array/from.js"(exports, module) {
    module.exports = { "default": require_from(), __esModule: true };
  }
});

// node_modules/babel-runtime/helpers/toConsumableArray.js
var require_toConsumableArray = __commonJS({
  "node_modules/babel-runtime/helpers/toConsumableArray.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _from = require_from2();
    var _from2 = _interopRequireDefault(_from);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = function(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      } else {
        return (0, _from2.default)(arr);
      }
    };
  }
});

// node_modules/object-assign/index.js
var require_object_assign2 = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/create-react-class/factory.js
var require_factory = __commonJS({
  "node_modules/create-react-class/factory.js"(exports, module) {
    "use strict";
    var _assign = require_object_assign2();
    var emptyObject = {};
    if (true) {
      Object.freeze(emptyObject);
    }
    var validateFormat = function validateFormat2(format) {
    };
    if (true) {
      validateFormat = function validateFormat2(format) {
        if (format === void 0) {
          throw new Error("invariant requires an error message argument");
        }
      };
    }
    function _invariant(condition, format, a, b, c, d, e, f) {
      validateFormat(format);
      if (!condition) {
        var error;
        if (format === void 0) {
          error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
        } else {
          var args = [a, b, c, d, e, f];
          var argIndex = 0;
          error = new Error(format.replace(/%s/g, function() {
            return args[argIndex++];
          }));
          error.name = "Invariant Violation";
        }
        error.framesToPop = 1;
        throw error;
      }
    }
    var warning3 = function() {
    };
    if (true) {
      printWarning = function printWarning2(format) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        var argIndex = 0;
        var message = "Warning: " + format.replace(/%s/g, function() {
          return args[argIndex++];
        });
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
      warning3 = function warning4(condition, format) {
        if (format === void 0) {
          throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
        }
        if (format.indexOf("Failed Composite propType: ") === 0) {
          return;
        }
        if (!condition) {
          for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            args[_key2 - 2] = arguments[_key2];
          }
          printWarning.apply(void 0, [format].concat(args));
        }
      };
    }
    var printWarning;
    var MIXINS_KEY = "mixins";
    function identity2(fn) {
      return fn;
    }
    var ReactPropTypeLocationNames;
    if (true) {
      ReactPropTypeLocationNames = {
        prop: "prop",
        context: "context",
        childContext: "child context"
      };
    } else {
      ReactPropTypeLocationNames = {};
    }
    function factory(ReactComponent, isValidElement2, ReactNoopUpdateQueue) {
      var injectedMixins = [];
      var ReactClassInterface = {
        /**
         * An array of Mixin objects to include when defining your component.
         *
         * @type {array}
         * @optional
         */
        mixins: "DEFINE_MANY",
        /**
         * An object containing properties and methods that should be defined on
         * the component's constructor instead of its prototype (static methods).
         *
         * @type {object}
         * @optional
         */
        statics: "DEFINE_MANY",
        /**
         * Definition of prop types for this component.
         *
         * @type {object}
         * @optional
         */
        propTypes: "DEFINE_MANY",
        /**
         * Definition of context types for this component.
         *
         * @type {object}
         * @optional
         */
        contextTypes: "DEFINE_MANY",
        /**
         * Definition of context types this component sets for its children.
         *
         * @type {object}
         * @optional
         */
        childContextTypes: "DEFINE_MANY",
        // ==== Definition methods ====
        /**
         * Invoked when the component is mounted. Values in the mapping will be set on
         * `this.props` if that prop is not specified (i.e. using an `in` check).
         *
         * This method is invoked before `getInitialState` and therefore cannot rely
         * on `this.state` or use `this.setState`.
         *
         * @return {object}
         * @optional
         */
        getDefaultProps: "DEFINE_MANY_MERGED",
        /**
         * Invoked once before the component is mounted. The return value will be used
         * as the initial value of `this.state`.
         *
         *   getInitialState: function() {
         *     return {
         *       isOn: false,
         *       fooBaz: new BazFoo()
         *     }
         *   }
         *
         * @return {object}
         * @optional
         */
        getInitialState: "DEFINE_MANY_MERGED",
        /**
         * @return {object}
         * @optional
         */
        getChildContext: "DEFINE_MANY_MERGED",
        /**
         * Uses props from `this.props` and state from `this.state` to render the
         * structure of the component.
         *
         * No guarantees are made about when or how often this method is invoked, so
         * it must not have side effects.
         *
         *   render: function() {
         *     var name = this.props.name;
         *     return <div>Hello, {name}!</div>;
         *   }
         *
         * @return {ReactComponent}
         * @required
         */
        render: "DEFINE_ONCE",
        // ==== Delegate methods ====
        /**
         * Invoked when the component is initially created and about to be mounted.
         * This may have side effects, but any external subscriptions or data created
         * by this method must be cleaned up in `componentWillUnmount`.
         *
         * @optional
         */
        componentWillMount: "DEFINE_MANY",
        /**
         * Invoked when the component has been mounted and has a DOM representation.
         * However, there is no guarantee that the DOM node is in the document.
         *
         * Use this as an opportunity to operate on the DOM when the component has
         * been mounted (initialized and rendered) for the first time.
         *
         * @param {DOMElement} rootNode DOM element representing the component.
         * @optional
         */
        componentDidMount: "DEFINE_MANY",
        /**
         * Invoked before the component receives new props.
         *
         * Use this as an opportunity to react to a prop transition by updating the
         * state using `this.setState`. Current props are accessed via `this.props`.
         *
         *   componentWillReceiveProps: function(nextProps, nextContext) {
         *     this.setState({
         *       likesIncreasing: nextProps.likeCount > this.props.likeCount
         *     });
         *   }
         *
         * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
         * transition may cause a state change, but the opposite is not true. If you
         * need it, you are probably looking for `componentWillUpdate`.
         *
         * @param {object} nextProps
         * @optional
         */
        componentWillReceiveProps: "DEFINE_MANY",
        /**
         * Invoked while deciding if the component should be updated as a result of
         * receiving new props, state and/or context.
         *
         * Use this as an opportunity to `return false` when you're certain that the
         * transition to the new props/state/context will not require a component
         * update.
         *
         *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
         *     return !equal(nextProps, this.props) ||
         *       !equal(nextState, this.state) ||
         *       !equal(nextContext, this.context);
         *   }
         *
         * @param {object} nextProps
         * @param {?object} nextState
         * @param {?object} nextContext
         * @return {boolean} True if the component should update.
         * @optional
         */
        shouldComponentUpdate: "DEFINE_ONCE",
        /**
         * Invoked when the component is about to update due to a transition from
         * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
         * and `nextContext`.
         *
         * Use this as an opportunity to perform preparation before an update occurs.
         *
         * NOTE: You **cannot** use `this.setState()` in this method.
         *
         * @param {object} nextProps
         * @param {?object} nextState
         * @param {?object} nextContext
         * @param {ReactReconcileTransaction} transaction
         * @optional
         */
        componentWillUpdate: "DEFINE_MANY",
        /**
         * Invoked when the component's DOM representation has been updated.
         *
         * Use this as an opportunity to operate on the DOM when the component has
         * been updated.
         *
         * @param {object} prevProps
         * @param {?object} prevState
         * @param {?object} prevContext
         * @param {DOMElement} rootNode DOM element representing the component.
         * @optional
         */
        componentDidUpdate: "DEFINE_MANY",
        /**
         * Invoked when the component is about to be removed from its parent and have
         * its DOM representation destroyed.
         *
         * Use this as an opportunity to deallocate any external resources.
         *
         * NOTE: There is no `componentDidUnmount` since your component will have been
         * destroyed by that point.
         *
         * @optional
         */
        componentWillUnmount: "DEFINE_MANY",
        /**
         * Replacement for (deprecated) `componentWillMount`.
         *
         * @optional
         */
        UNSAFE_componentWillMount: "DEFINE_MANY",
        /**
         * Replacement for (deprecated) `componentWillReceiveProps`.
         *
         * @optional
         */
        UNSAFE_componentWillReceiveProps: "DEFINE_MANY",
        /**
         * Replacement for (deprecated) `componentWillUpdate`.
         *
         * @optional
         */
        UNSAFE_componentWillUpdate: "DEFINE_MANY",
        // ==== Advanced methods ====
        /**
         * Updates the component's currently mounted DOM representation.
         *
         * By default, this implements React's rendering and reconciliation algorithm.
         * Sophisticated clients may wish to override this.
         *
         * @param {ReactReconcileTransaction} transaction
         * @internal
         * @overridable
         */
        updateComponent: "OVERRIDE_BASE"
      };
      var ReactClassStaticInterface = {
        /**
         * This method is invoked after a component is instantiated and when it
         * receives new props. Return an object to update state in response to
         * prop changes. Return null to indicate no change to state.
         *
         * If an object is returned, its keys will be merged into the existing state.
         *
         * @return {object || null}
         * @optional
         */
        getDerivedStateFromProps: "DEFINE_MANY_MERGED"
      };
      var RESERVED_SPEC_KEYS = {
        displayName: function(Constructor, displayName) {
          Constructor.displayName = displayName;
        },
        mixins: function(Constructor, mixins) {
          if (mixins) {
            for (var i = 0; i < mixins.length; i++) {
              mixSpecIntoComponent(Constructor, mixins[i]);
            }
          }
        },
        childContextTypes: function(Constructor, childContextTypes) {
          if (true) {
            validateTypeDef(Constructor, childContextTypes, "childContext");
          }
          Constructor.childContextTypes = _assign(
            {},
            Constructor.childContextTypes,
            childContextTypes
          );
        },
        contextTypes: function(Constructor, contextTypes) {
          if (true) {
            validateTypeDef(Constructor, contextTypes, "context");
          }
          Constructor.contextTypes = _assign(
            {},
            Constructor.contextTypes,
            contextTypes
          );
        },
        /**
         * Special case getDefaultProps which should move into statics but requires
         * automatic merging.
         */
        getDefaultProps: function(Constructor, getDefaultProps) {
          if (Constructor.getDefaultProps) {
            Constructor.getDefaultProps = createMergedResultFunction(
              Constructor.getDefaultProps,
              getDefaultProps
            );
          } else {
            Constructor.getDefaultProps = getDefaultProps;
          }
        },
        propTypes: function(Constructor, propTypes) {
          if (true) {
            validateTypeDef(Constructor, propTypes, "prop");
          }
          Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
        },
        statics: function(Constructor, statics) {
          mixStaticSpecIntoComponent(Constructor, statics);
        },
        autobind: function() {
        }
      };
      function validateTypeDef(Constructor, typeDef, location) {
        for (var propName in typeDef) {
          if (typeDef.hasOwnProperty(propName)) {
            if (true) {
              warning3(
                typeof typeDef[propName] === "function",
                "%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",
                Constructor.displayName || "ReactClass",
                ReactPropTypeLocationNames[location],
                propName
              );
            }
          }
        }
      }
      function validateMethodOverride(isAlreadyDefined, name) {
        var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;
        if (ReactClassMixin.hasOwnProperty(name)) {
          _invariant(
            specPolicy === "OVERRIDE_BASE",
            "ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",
            name
          );
        }
        if (isAlreadyDefined) {
          _invariant(
            specPolicy === "DEFINE_MANY" || specPolicy === "DEFINE_MANY_MERGED",
            "ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",
            name
          );
        }
      }
      function mixSpecIntoComponent(Constructor, spec) {
        if (!spec) {
          if (true) {
            var typeofSpec = typeof spec;
            var isMixinValid = typeofSpec === "object" && spec !== null;
            if (true) {
              warning3(
                isMixinValid,
                "%s: You're attempting to include a mixin that is either null or not an object. Check the mixins included by the component, as well as any mixins they include themselves. Expected object but got %s.",
                Constructor.displayName || "ReactClass",
                spec === null ? null : typeofSpec
              );
            }
          }
          return;
        }
        _invariant(
          typeof spec !== "function",
          "ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."
        );
        _invariant(
          !isValidElement2(spec),
          "ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object."
        );
        var proto = Constructor.prototype;
        var autoBindPairs = proto.__reactAutoBindPairs;
        if (spec.hasOwnProperty(MIXINS_KEY)) {
          RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
        }
        for (var name in spec) {
          if (!spec.hasOwnProperty(name)) {
            continue;
          }
          if (name === MIXINS_KEY) {
            continue;
          }
          var property = spec[name];
          var isAlreadyDefined = proto.hasOwnProperty(name);
          validateMethodOverride(isAlreadyDefined, name);
          if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
            RESERVED_SPEC_KEYS[name](Constructor, property);
          } else {
            var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
            var isFunction = typeof property === "function";
            var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;
            if (shouldAutoBind) {
              autoBindPairs.push(name, property);
              proto[name] = property;
            } else {
              if (isAlreadyDefined) {
                var specPolicy = ReactClassInterface[name];
                _invariant(
                  isReactClassMethod && (specPolicy === "DEFINE_MANY_MERGED" || specPolicy === "DEFINE_MANY"),
                  "ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",
                  specPolicy,
                  name
                );
                if (specPolicy === "DEFINE_MANY_MERGED") {
                  proto[name] = createMergedResultFunction(proto[name], property);
                } else if (specPolicy === "DEFINE_MANY") {
                  proto[name] = createChainedFunction(proto[name], property);
                }
              } else {
                proto[name] = property;
                if (true) {
                  if (typeof property === "function" && spec.displayName) {
                    proto[name].displayName = spec.displayName + "_" + name;
                  }
                }
              }
            }
          }
        }
      }
      function mixStaticSpecIntoComponent(Constructor, statics) {
        if (!statics) {
          return;
        }
        for (var name in statics) {
          var property = statics[name];
          if (!statics.hasOwnProperty(name)) {
            continue;
          }
          var isReserved = name in RESERVED_SPEC_KEYS;
          _invariant(
            !isReserved,
            'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',
            name
          );
          var isAlreadyDefined = name in Constructor;
          if (isAlreadyDefined) {
            var specPolicy = ReactClassStaticInterface.hasOwnProperty(name) ? ReactClassStaticInterface[name] : null;
            _invariant(
              specPolicy === "DEFINE_MANY_MERGED",
              "ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",
              name
            );
            Constructor[name] = createMergedResultFunction(Constructor[name], property);
            return;
          }
          Constructor[name] = property;
        }
      }
      function mergeIntoWithNoDuplicateKeys(one, two) {
        _invariant(
          one && two && typeof one === "object" && typeof two === "object",
          "mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects."
        );
        for (var key in two) {
          if (two.hasOwnProperty(key)) {
            _invariant(
              one[key] === void 0,
              "mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",
              key
            );
            one[key] = two[key];
          }
        }
        return one;
      }
      function createMergedResultFunction(one, two) {
        return function mergedResult() {
          var a = one.apply(this, arguments);
          var b = two.apply(this, arguments);
          if (a == null) {
            return b;
          } else if (b == null) {
            return a;
          }
          var c = {};
          mergeIntoWithNoDuplicateKeys(c, a);
          mergeIntoWithNoDuplicateKeys(c, b);
          return c;
        };
      }
      function createChainedFunction(one, two) {
        return function chainedFunction() {
          one.apply(this, arguments);
          two.apply(this, arguments);
        };
      }
      function bindAutoBindMethod(component, method) {
        var boundMethod = method.bind(component);
        if (true) {
          boundMethod.__reactBoundContext = component;
          boundMethod.__reactBoundMethod = method;
          boundMethod.__reactBoundArguments = null;
          var componentName = component.constructor.displayName;
          var _bind = boundMethod.bind;
          boundMethod.bind = function(newThis) {
            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            if (newThis !== component && newThis !== null) {
              if (true) {
                warning3(
                  false,
                  "bind(): React component methods may only be bound to the component instance. See %s",
                  componentName
                );
              }
            } else if (!args.length) {
              if (true) {
                warning3(
                  false,
                  "bind(): You are binding a component method to the component. React does this for you automatically in a high-performance way, so you can safely remove this call. See %s",
                  componentName
                );
              }
              return boundMethod;
            }
            var reboundMethod = _bind.apply(boundMethod, arguments);
            reboundMethod.__reactBoundContext = component;
            reboundMethod.__reactBoundMethod = method;
            reboundMethod.__reactBoundArguments = args;
            return reboundMethod;
          };
        }
        return boundMethod;
      }
      function bindAutoBindMethods(component) {
        var pairs = component.__reactAutoBindPairs;
        for (var i = 0; i < pairs.length; i += 2) {
          var autoBindKey = pairs[i];
          var method = pairs[i + 1];
          component[autoBindKey] = bindAutoBindMethod(component, method);
        }
      }
      var IsMountedPreMixin = {
        componentDidMount: function() {
          this.__isMounted = true;
        }
      };
      var IsMountedPostMixin = {
        componentWillUnmount: function() {
          this.__isMounted = false;
        }
      };
      var ReactClassMixin = {
        /**
         * TODO: This will be deprecated because state should always keep a consistent
         * type signature and the only use case for this, is to avoid that.
         */
        replaceState: function(newState, callback) {
          this.updater.enqueueReplaceState(this, newState, callback);
        },
        /**
         * Checks whether or not this composite component is mounted.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function() {
          if (true) {
            warning3(
              this.__didWarnIsMounted,
              "%s: isMounted is deprecated. Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.",
              this.constructor && this.constructor.displayName || this.name || "Component"
            );
            this.__didWarnIsMounted = true;
          }
          return !!this.__isMounted;
        }
      };
      var ReactClassComponent = function() {
      };
      _assign(
        ReactClassComponent.prototype,
        ReactComponent.prototype,
        ReactClassMixin
      );
      function createClass(spec) {
        var Constructor = identity2(function(props, context, updater) {
          if (true) {
            warning3(
              this instanceof Constructor,
              "Something is calling a React component directly. Use a factory or JSX instead. See: https://fb.me/react-legacyfactory"
            );
          }
          if (this.__reactAutoBindPairs.length) {
            bindAutoBindMethods(this);
          }
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
          this.state = null;
          var initialState = this.getInitialState ? this.getInitialState() : null;
          if (true) {
            if (initialState === void 0 && this.getInitialState._isMockFunction) {
              initialState = null;
            }
          }
          _invariant(
            typeof initialState === "object" && !Array.isArray(initialState),
            "%s.getInitialState(): must return an object or null",
            Constructor.displayName || "ReactCompositeComponent"
          );
          this.state = initialState;
        });
        Constructor.prototype = new ReactClassComponent();
        Constructor.prototype.constructor = Constructor;
        Constructor.prototype.__reactAutoBindPairs = [];
        injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));
        mixSpecIntoComponent(Constructor, IsMountedPreMixin);
        mixSpecIntoComponent(Constructor, spec);
        mixSpecIntoComponent(Constructor, IsMountedPostMixin);
        if (Constructor.getDefaultProps) {
          Constructor.defaultProps = Constructor.getDefaultProps();
        }
        if (true) {
          if (Constructor.getDefaultProps) {
            Constructor.getDefaultProps.isReactClassApproved = {};
          }
          if (Constructor.prototype.getInitialState) {
            Constructor.prototype.getInitialState.isReactClassApproved = {};
          }
        }
        _invariant(
          Constructor.prototype.render,
          "createClass(...): Class specification must implement a `render` method."
        );
        if (true) {
          warning3(
            !Constructor.prototype.componentShouldUpdate,
            "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
            spec.displayName || "A component"
          );
          warning3(
            !Constructor.prototype.componentWillRecieveProps,
            "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
            spec.displayName || "A component"
          );
          warning3(
            !Constructor.prototype.UNSAFE_componentWillRecieveProps,
            "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
            spec.displayName || "A component"
          );
        }
        for (var methodName in ReactClassInterface) {
          if (!Constructor.prototype[methodName]) {
            Constructor.prototype[methodName] = null;
          }
        }
        return Constructor;
      }
      return createClass;
    }
    module.exports = factory;
  }
});

// node_modules/create-react-class/index.js
var require_create_react_class = __commonJS({
  "node_modules/create-react-class/index.js"(exports, module) {
    "use strict";
    var React11 = require_react();
    var factory = require_factory();
    if (typeof React11 === "undefined") {
      throw Error(
        "create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class."
      );
    }
    var ReactNoopUpdateQueue = new React11.Component().updater;
    module.exports = factory(
      React11.Component,
      React11.isValidElement,
      ReactNoopUpdateQueue
    );
  }
});

// node_modules/async-validator/es/util.js
var require_util2 = __commonJS({
  "node_modules/async-validator/es/util.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _extends10 = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var _typeof13 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    exports.convertFieldsError = convertFieldsError;
    exports.format = format;
    exports.isEmptyValue = isEmptyValue;
    exports.isEmptyObject = isEmptyObject2;
    exports.asyncMap = asyncMap;
    exports.complementError = complementError;
    exports.deepMerge = deepMerge;
    var formatRegExp = /%[sdj%]/g;
    var warning3 = exports.warning = function warning4() {
    };
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      exports.warning = warning3 = function warning4(type, errors) {
        if (typeof console !== "undefined" && console.warn) {
          if (errors.every(function(e) {
            return typeof e === "string";
          })) {
            console.warn(type, errors);
          }
        }
      };
    }
    function convertFieldsError(errors) {
      if (!errors || !errors.length) return null;
      var fields = {};
      errors.forEach(function(error) {
        var field = error.field;
        fields[field] = fields[field] || [];
        fields[field].push(error);
      });
      return fields;
    }
    function format() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var i = 1;
      var f = args[0];
      var len = args.length;
      if (typeof f === "function") {
        return f.apply(null, args.slice(1));
      }
      if (typeof f === "string") {
        var str = String(f).replace(formatRegExp, function(x) {
          if (x === "%%") {
            return "%";
          }
          if (i >= len) {
            return x;
          }
          switch (x) {
            case "%s":
              return String(args[i++]);
            case "%d":
              return Number(args[i++]);
            case "%j":
              try {
                return JSON.stringify(args[i++]);
              } catch (_) {
                return "[Circular]";
              }
              break;
            default:
              return x;
          }
        });
        for (var arg = args[i]; i < len; arg = args[++i]) {
          str += " " + arg;
        }
        return str;
      }
      return f;
    }
    function isNativeStringType(type) {
      return type === "string" || type === "url" || type === "hex" || type === "email" || type === "pattern";
    }
    function isEmptyValue(value, type) {
      if (value === void 0 || value === null) {
        return true;
      }
      if (type === "array" && Array.isArray(value) && !value.length) {
        return true;
      }
      if (isNativeStringType(type) && typeof value === "string" && !value) {
        return true;
      }
      return false;
    }
    function isEmptyObject2(obj) {
      return Object.keys(obj).length === 0;
    }
    function asyncParallelArray(arr, func, callback) {
      var results = [];
      var total = 0;
      var arrLength = arr.length;
      function count(errors) {
        results.push.apply(results, errors);
        total++;
        if (total === arrLength) {
          callback(results);
        }
      }
      arr.forEach(function(a) {
        func(a, count);
      });
    }
    function asyncSerialArray(arr, func, callback) {
      var index = 0;
      var arrLength = arr.length;
      function next(errors) {
        if (errors && errors.length) {
          callback(errors);
          return;
        }
        var original = index;
        index = index + 1;
        if (original < arrLength) {
          func(arr[original], next);
        } else {
          callback([]);
        }
      }
      next([]);
    }
    function flattenObjArr(objArr) {
      var ret = [];
      Object.keys(objArr).forEach(function(k) {
        ret.push.apply(ret, objArr[k]);
      });
      return ret;
    }
    function asyncMap(objArr, option, func, callback) {
      if (option.first) {
        var flattenArr = flattenObjArr(objArr);
        return asyncSerialArray(flattenArr, func, callback);
      }
      var firstFields = option.firstFields || [];
      if (firstFields === true) {
        firstFields = Object.keys(objArr);
      }
      var objArrKeys = Object.keys(objArr);
      var objArrLength = objArrKeys.length;
      var total = 0;
      var results = [];
      var pending = new Promise(function(resolve, reject) {
        var next = function next2(errors) {
          results.push.apply(results, errors);
          total++;
          if (total === objArrLength) {
            callback(results);
            return results.length ? reject({ errors: results, fields: convertFieldsError(results) }) : resolve();
          }
        };
        objArrKeys.forEach(function(key) {
          var arr = objArr[key];
          if (firstFields.indexOf(key) !== -1) {
            asyncSerialArray(arr, func, next);
          } else {
            asyncParallelArray(arr, func, next);
          }
        });
      });
      pending["catch"](function(e) {
        return e;
      });
      return pending;
    }
    function complementError(rule) {
      return function(oe) {
        if (oe && oe.message) {
          oe.field = oe.field || rule.fullField;
          return oe;
        }
        return {
          message: typeof oe === "function" ? oe() : oe,
          field: oe.field || rule.fullField
        };
      };
    }
    function deepMerge(target, source) {
      if (source) {
        for (var s in source) {
          if (source.hasOwnProperty(s)) {
            var value = source[s];
            if ((typeof value === "undefined" ? "undefined" : _typeof13(value)) === "object" && _typeof13(target[s]) === "object") {
              target[s] = _extends10({}, target[s], value);
            } else {
              target[s] = value;
            }
          }
        }
      }
      return target;
    }
  }
});

// node_modules/async-validator/es/rule/required.js
var require_required = __commonJS({
  "node_modules/async-validator/es/rule/required.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _util = require_util2();
    var util = _interopRequireWildcard(_util);
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
          }
        }
        newObj["default"] = obj;
        return newObj;
      }
    }
    function required(rule, value, source, errors, options, type) {
      if (rule.required && (!source.hasOwnProperty(rule.field) || util.isEmptyValue(value, type || rule.type))) {
        errors.push(util.format(options.messages.required, rule.fullField));
      }
    }
    exports["default"] = required;
  }
});

// node_modules/async-validator/es/rule/whitespace.js
var require_whitespace = __commonJS({
  "node_modules/async-validator/es/rule/whitespace.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _util = require_util2();
    var util = _interopRequireWildcard(_util);
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
          }
        }
        newObj["default"] = obj;
        return newObj;
      }
    }
    function whitespace(rule, value, source, errors, options) {
      if (/^\s+$/.test(value) || value === "") {
        errors.push(util.format(options.messages.whitespace, rule.fullField));
      }
    }
    exports["default"] = whitespace;
  }
});

// node_modules/async-validator/es/rule/type.js
var require_type = __commonJS({
  "node_modules/async-validator/es/rule/type.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _typeof13 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var _util = require_util2();
    var util = _interopRequireWildcard(_util);
    var _required = require_required();
    var _required2 = _interopRequireDefault(_required);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
          }
        }
        newObj["default"] = obj;
        return newObj;
      }
    }
    var pattern = {
      // http://emailregex.com/
      email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", "i"),
      hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
    };
    var types = {
      integer: function integer(value) {
        return types.number(value) && parseInt(value, 10) === value;
      },
      float: function float(value) {
        return types.number(value) && !types.integer(value);
      },
      array: function array(value) {
        return Array.isArray(value);
      },
      regexp: function regexp(value) {
        if (value instanceof RegExp) {
          return true;
        }
        try {
          return !!new RegExp(value);
        } catch (e) {
          return false;
        }
      },
      date: function date(value) {
        return typeof value.getTime === "function" && typeof value.getMonth === "function" && typeof value.getYear === "function";
      },
      number: function number(value) {
        if (isNaN(value)) {
          return false;
        }
        return typeof value === "number";
      },
      object: function object(value) {
        return (typeof value === "undefined" ? "undefined" : _typeof13(value)) === "object" && !types.array(value);
      },
      method: function method(value) {
        return typeof value === "function";
      },
      email: function email(value) {
        return typeof value === "string" && !!value.match(pattern.email) && value.length < 255;
      },
      url: function url(value) {
        return typeof value === "string" && !!value.match(pattern.url);
      },
      hex: function hex(value) {
        return typeof value === "string" && !!value.match(pattern.hex);
      }
    };
    function type(rule, value, source, errors, options) {
      if (rule.required && value === void 0) {
        (0, _required2["default"])(rule, value, source, errors, options);
        return;
      }
      var custom = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"];
      var ruleType = rule.type;
      if (custom.indexOf(ruleType) > -1) {
        if (!types[ruleType](value)) {
          errors.push(util.format(options.messages.types[ruleType], rule.fullField, rule.type));
        }
      } else if (ruleType && (typeof value === "undefined" ? "undefined" : _typeof13(value)) !== rule.type) {
        errors.push(util.format(options.messages.types[ruleType], rule.fullField, rule.type));
      }
    }
    exports["default"] = type;
  }
});

// node_modules/async-validator/es/rule/range.js
var require_range = __commonJS({
  "node_modules/async-validator/es/rule/range.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _util = require_util2();
    var util = _interopRequireWildcard(_util);
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
          }
        }
        newObj["default"] = obj;
        return newObj;
      }
    }
    function range(rule, value, source, errors, options) {
      var len = typeof rule.len === "number";
      var min = typeof rule.min === "number";
      var max = typeof rule.max === "number";
      var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
      var val = value;
      var key = null;
      var num = typeof value === "number";
      var str = typeof value === "string";
      var arr = Array.isArray(value);
      if (num) {
        key = "number";
      } else if (str) {
        key = "string";
      } else if (arr) {
        key = "array";
      }
      if (!key) {
        return false;
      }
      if (arr) {
        val = value.length;
      }
      if (str) {
        val = value.replace(spRegexp, "_").length;
      }
      if (len) {
        if (val !== rule.len) {
          errors.push(util.format(options.messages[key].len, rule.fullField, rule.len));
        }
      } else if (min && !max && val < rule.min) {
        errors.push(util.format(options.messages[key].min, rule.fullField, rule.min));
      } else if (max && !min && val > rule.max) {
        errors.push(util.format(options.messages[key].max, rule.fullField, rule.max));
      } else if (min && max && (val < rule.min || val > rule.max)) {
        errors.push(util.format(options.messages[key].range, rule.fullField, rule.min, rule.max));
      }
    }
    exports["default"] = range;
  }
});

// node_modules/async-validator/es/rule/enum.js
var require_enum = __commonJS({
  "node_modules/async-validator/es/rule/enum.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _util = require_util2();
    var util = _interopRequireWildcard(_util);
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
          }
        }
        newObj["default"] = obj;
        return newObj;
      }
    }
    var ENUM = "enum";
    function enumerable(rule, value, source, errors, options) {
      rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
      if (rule[ENUM].indexOf(value) === -1) {
        errors.push(util.format(options.messages[ENUM], rule.fullField, rule[ENUM].join(", ")));
      }
    }
    exports["default"] = enumerable;
  }
});

// node_modules/async-validator/es/rule/pattern.js
var require_pattern = __commonJS({
  "node_modules/async-validator/es/rule/pattern.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _util = require_util2();
    var util = _interopRequireWildcard(_util);
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
          }
        }
        newObj["default"] = obj;
        return newObj;
      }
    }
    function pattern(rule, value, source, errors, options) {
      if (rule.pattern) {
        if (rule.pattern instanceof RegExp) {
          rule.pattern.lastIndex = 0;
          if (!rule.pattern.test(value)) {
            errors.push(util.format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
          }
        } else if (typeof rule.pattern === "string") {
          var _pattern = new RegExp(rule.pattern);
          if (!_pattern.test(value)) {
            errors.push(util.format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
          }
        }
      }
    }
    exports["default"] = pattern;
  }
});

// node_modules/async-validator/es/rule/index.js
var require_rule = __commonJS({
  "node_modules/async-validator/es/rule/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _required = require_required();
    var _required2 = _interopRequireDefault(_required);
    var _whitespace = require_whitespace();
    var _whitespace2 = _interopRequireDefault(_whitespace);
    var _type = require_type();
    var _type2 = _interopRequireDefault(_type);
    var _range = require_range();
    var _range2 = _interopRequireDefault(_range);
    var _enum = require_enum();
    var _enum2 = _interopRequireDefault(_enum);
    var _pattern = require_pattern();
    var _pattern2 = _interopRequireDefault(_pattern);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    exports["default"] = {
      required: _required2["default"],
      whitespace: _whitespace2["default"],
      type: _type2["default"],
      range: _range2["default"],
      "enum": _enum2["default"],
      pattern: _pattern2["default"]
    };
  }
});

// node_modules/async-validator/es/validator/string.js
var require_string = __commonJS({
  "node_modules/async-validator/es/validator/string.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _rule = require_rule();
    var _rule2 = _interopRequireDefault(_rule);
    var _util = require_util2();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function string(rule, value, callback, source, options) {
      var errors = [];
      var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
      if (validate) {
        if ((0, _util.isEmptyValue)(value, "string") && !rule.required) {
          return callback();
        }
        _rule2["default"].required(rule, value, source, errors, options, "string");
        if (!(0, _util.isEmptyValue)(value, "string")) {
          _rule2["default"].type(rule, value, source, errors, options);
          _rule2["default"].range(rule, value, source, errors, options);
          _rule2["default"].pattern(rule, value, source, errors, options);
          if (rule.whitespace === true) {
            _rule2["default"].whitespace(rule, value, source, errors, options);
          }
        }
      }
      callback(errors);
    }
    exports["default"] = string;
  }
});

// node_modules/async-validator/es/validator/method.js
var require_method = __commonJS({
  "node_modules/async-validator/es/validator/method.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _rule = require_rule();
    var _rule2 = _interopRequireDefault(_rule);
    var _util = require_util2();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function method(rule, value, callback, source, options) {
      var errors = [];
      var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
      if (validate) {
        if ((0, _util.isEmptyValue)(value) && !rule.required) {
          return callback();
        }
        _rule2["default"].required(rule, value, source, errors, options);
        if (value !== void 0) {
          _rule2["default"].type(rule, value, source, errors, options);
        }
      }
      callback(errors);
    }
    exports["default"] = method;
  }
});

// node_modules/async-validator/es/validator/number.js
var require_number = __commonJS({
  "node_modules/async-validator/es/validator/number.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _rule = require_rule();
    var _rule2 = _interopRequireDefault(_rule);
    var _util = require_util2();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function number(rule, value, callback, source, options) {
      var errors = [];
      var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
      if (validate) {
        if (value === "") {
          value = void 0;
        }
        if ((0, _util.isEmptyValue)(value) && !rule.required) {
          return callback();
        }
        _rule2["default"].required(rule, value, source, errors, options);
        if (value !== void 0) {
          _rule2["default"].type(rule, value, source, errors, options);
          _rule2["default"].range(rule, value, source, errors, options);
        }
      }
      callback(errors);
    }
    exports["default"] = number;
  }
});

// node_modules/async-validator/es/validator/boolean.js
var require_boolean = __commonJS({
  "node_modules/async-validator/es/validator/boolean.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _util = require_util2();
    var _rule = require_rule();
    var _rule2 = _interopRequireDefault(_rule);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function boolean(rule, value, callback, source, options) {
      var errors = [];
      var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
      if (validate) {
        if ((0, _util.isEmptyValue)(value) && !rule.required) {
          return callback();
        }
        _rule2["default"].required(rule, value, source, errors, options);
        if (value !== void 0) {
          _rule2["default"].type(rule, value, source, errors, options);
        }
      }
      callback(errors);
    }
    exports["default"] = boolean;
  }
});

// node_modules/async-validator/es/validator/regexp.js
var require_regexp = __commonJS({
  "node_modules/async-validator/es/validator/regexp.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _rule = require_rule();
    var _rule2 = _interopRequireDefault(_rule);
    var _util = require_util2();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function regexp(rule, value, callback, source, options) {
      var errors = [];
      var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
      if (validate) {
        if ((0, _util.isEmptyValue)(value) && !rule.required) {
          return callback();
        }
        _rule2["default"].required(rule, value, source, errors, options);
        if (!(0, _util.isEmptyValue)(value)) {
          _rule2["default"].type(rule, value, source, errors, options);
        }
      }
      callback(errors);
    }
    exports["default"] = regexp;
  }
});

// node_modules/async-validator/es/validator/integer.js
var require_integer = __commonJS({
  "node_modules/async-validator/es/validator/integer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _rule = require_rule();
    var _rule2 = _interopRequireDefault(_rule);
    var _util = require_util2();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function integer(rule, value, callback, source, options) {
      var errors = [];
      var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
      if (validate) {
        if ((0, _util.isEmptyValue)(value) && !rule.required) {
          return callback();
        }
        _rule2["default"].required(rule, value, source, errors, options);
        if (value !== void 0) {
          _rule2["default"].type(rule, value, source, errors, options);
          _rule2["default"].range(rule, value, source, errors, options);
        }
      }
      callback(errors);
    }
    exports["default"] = integer;
  }
});

// node_modules/async-validator/es/validator/float.js
var require_float = __commonJS({
  "node_modules/async-validator/es/validator/float.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _rule = require_rule();
    var _rule2 = _interopRequireDefault(_rule);
    var _util = require_util2();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function floatFn(rule, value, callback, source, options) {
      var errors = [];
      var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
      if (validate) {
        if ((0, _util.isEmptyValue)(value) && !rule.required) {
          return callback();
        }
        _rule2["default"].required(rule, value, source, errors, options);
        if (value !== void 0) {
          _rule2["default"].type(rule, value, source, errors, options);
          _rule2["default"].range(rule, value, source, errors, options);
        }
      }
      callback(errors);
    }
    exports["default"] = floatFn;
  }
});

// node_modules/async-validator/es/validator/array.js
var require_array = __commonJS({
  "node_modules/async-validator/es/validator/array.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _rule = require_rule();
    var _rule2 = _interopRequireDefault(_rule);
    var _util = require_util2();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function array(rule, value, callback, source, options) {
      var errors = [];
      var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
      if (validate) {
        if ((0, _util.isEmptyValue)(value, "array") && !rule.required) {
          return callback();
        }
        _rule2["default"].required(rule, value, source, errors, options, "array");
        if (!(0, _util.isEmptyValue)(value, "array")) {
          _rule2["default"].type(rule, value, source, errors, options);
          _rule2["default"].range(rule, value, source, errors, options);
        }
      }
      callback(errors);
    }
    exports["default"] = array;
  }
});

// node_modules/async-validator/es/validator/object.js
var require_object = __commonJS({
  "node_modules/async-validator/es/validator/object.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _rule = require_rule();
    var _rule2 = _interopRequireDefault(_rule);
    var _util = require_util2();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function object(rule, value, callback, source, options) {
      var errors = [];
      var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
      if (validate) {
        if ((0, _util.isEmptyValue)(value) && !rule.required) {
          return callback();
        }
        _rule2["default"].required(rule, value, source, errors, options);
        if (value !== void 0) {
          _rule2["default"].type(rule, value, source, errors, options);
        }
      }
      callback(errors);
    }
    exports["default"] = object;
  }
});

// node_modules/async-validator/es/validator/enum.js
var require_enum2 = __commonJS({
  "node_modules/async-validator/es/validator/enum.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _rule = require_rule();
    var _rule2 = _interopRequireDefault(_rule);
    var _util = require_util2();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var ENUM = "enum";
    function enumerable(rule, value, callback, source, options) {
      var errors = [];
      var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
      if (validate) {
        if ((0, _util.isEmptyValue)(value) && !rule.required) {
          return callback();
        }
        _rule2["default"].required(rule, value, source, errors, options);
        if (value) {
          _rule2["default"][ENUM](rule, value, source, errors, options);
        }
      }
      callback(errors);
    }
    exports["default"] = enumerable;
  }
});

// node_modules/async-validator/es/validator/pattern.js
var require_pattern2 = __commonJS({
  "node_modules/async-validator/es/validator/pattern.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _rule = require_rule();
    var _rule2 = _interopRequireDefault(_rule);
    var _util = require_util2();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function pattern(rule, value, callback, source, options) {
      var errors = [];
      var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
      if (validate) {
        if ((0, _util.isEmptyValue)(value, "string") && !rule.required) {
          return callback();
        }
        _rule2["default"].required(rule, value, source, errors, options);
        if (!(0, _util.isEmptyValue)(value, "string")) {
          _rule2["default"].pattern(rule, value, source, errors, options);
        }
      }
      callback(errors);
    }
    exports["default"] = pattern;
  }
});

// node_modules/async-validator/es/validator/date.js
var require_date = __commonJS({
  "node_modules/async-validator/es/validator/date.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _rule = require_rule();
    var _rule2 = _interopRequireDefault(_rule);
    var _util = require_util2();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function date(rule, value, callback, source, options) {
      var errors = [];
      var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
      if (validate) {
        if ((0, _util.isEmptyValue)(value) && !rule.required) {
          return callback();
        }
        _rule2["default"].required(rule, value, source, errors, options);
        if (!(0, _util.isEmptyValue)(value)) {
          var dateObject = void 0;
          if (typeof value === "number") {
            dateObject = new Date(value);
          } else {
            dateObject = value;
          }
          _rule2["default"].type(rule, dateObject, source, errors, options);
          if (dateObject) {
            _rule2["default"].range(rule, dateObject.getTime(), source, errors, options);
          }
        }
      }
      callback(errors);
    }
    exports["default"] = date;
  }
});

// node_modules/async-validator/es/validator/required.js
var require_required2 = __commonJS({
  "node_modules/async-validator/es/validator/required.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _typeof13 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var _rule = require_rule();
    var _rule2 = _interopRequireDefault(_rule);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function required(rule, value, callback, source, options) {
      var errors = [];
      var type = Array.isArray(value) ? "array" : typeof value === "undefined" ? "undefined" : _typeof13(value);
      _rule2["default"].required(rule, value, source, errors, options, type);
      callback(errors);
    }
    exports["default"] = required;
  }
});

// node_modules/async-validator/es/validator/type.js
var require_type2 = __commonJS({
  "node_modules/async-validator/es/validator/type.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _rule = require_rule();
    var _rule2 = _interopRequireDefault(_rule);
    var _util = require_util2();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function type(rule, value, callback, source, options) {
      var ruleType = rule.type;
      var errors = [];
      var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
      if (validate) {
        if ((0, _util.isEmptyValue)(value, ruleType) && !rule.required) {
          return callback();
        }
        _rule2["default"].required(rule, value, source, errors, options, ruleType);
        if (!(0, _util.isEmptyValue)(value, ruleType)) {
          _rule2["default"].type(rule, value, source, errors, options);
        }
      }
      callback(errors);
    }
    exports["default"] = type;
  }
});

// node_modules/async-validator/es/validator/index.js
var require_validator = __commonJS({
  "node_modules/async-validator/es/validator/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _string = require_string();
    var _string2 = _interopRequireDefault(_string);
    var _method = require_method();
    var _method2 = _interopRequireDefault(_method);
    var _number = require_number();
    var _number2 = _interopRequireDefault(_number);
    var _boolean = require_boolean();
    var _boolean2 = _interopRequireDefault(_boolean);
    var _regexp = require_regexp();
    var _regexp2 = _interopRequireDefault(_regexp);
    var _integer = require_integer();
    var _integer2 = _interopRequireDefault(_integer);
    var _float = require_float();
    var _float2 = _interopRequireDefault(_float);
    var _array = require_array();
    var _array2 = _interopRequireDefault(_array);
    var _object = require_object();
    var _object2 = _interopRequireDefault(_object);
    var _enum = require_enum2();
    var _enum2 = _interopRequireDefault(_enum);
    var _pattern = require_pattern2();
    var _pattern2 = _interopRequireDefault(_pattern);
    var _date = require_date();
    var _date2 = _interopRequireDefault(_date);
    var _required = require_required2();
    var _required2 = _interopRequireDefault(_required);
    var _type = require_type2();
    var _type2 = _interopRequireDefault(_type);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    exports["default"] = {
      string: _string2["default"],
      method: _method2["default"],
      number: _number2["default"],
      boolean: _boolean2["default"],
      regexp: _regexp2["default"],
      integer: _integer2["default"],
      float: _float2["default"],
      array: _array2["default"],
      object: _object2["default"],
      "enum": _enum2["default"],
      pattern: _pattern2["default"],
      date: _date2["default"],
      url: _type2["default"],
      hex: _type2["default"],
      email: _type2["default"],
      required: _required2["default"]
    };
  }
});

// node_modules/async-validator/es/messages.js
var require_messages = __commonJS({
  "node_modules/async-validator/es/messages.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.newMessages = newMessages;
    function newMessages() {
      return {
        "default": "Validation error on field %s",
        required: "%s is required",
        "enum": "%s must be one of %s",
        whitespace: "%s cannot be empty",
        date: {
          format: "%s date %s is invalid for format %s",
          parse: "%s date could not be parsed, %s is invalid ",
          invalid: "%s date %s is invalid"
        },
        types: {
          string: "%s is not a %s",
          method: "%s is not a %s (function)",
          array: "%s is not an %s",
          object: "%s is not an %s",
          number: "%s is not a %s",
          date: "%s is not a %s",
          boolean: "%s is not a %s",
          integer: "%s is not an %s",
          float: "%s is not a %s",
          regexp: "%s is not a valid %s",
          email: "%s is not a valid %s",
          url: "%s is not a valid %s",
          hex: "%s is not a valid %s"
        },
        string: {
          len: "%s must be exactly %s characters",
          min: "%s must be at least %s characters",
          max: "%s cannot be longer than %s characters",
          range: "%s must be between %s and %s characters"
        },
        number: {
          len: "%s must equal %s",
          min: "%s cannot be less than %s",
          max: "%s cannot be greater than %s",
          range: "%s must be between %s and %s"
        },
        array: {
          len: "%s must be exactly %s in length",
          min: "%s cannot be less than %s in length",
          max: "%s cannot be greater than %s in length",
          range: "%s must be between %s and %s in length"
        },
        pattern: {
          mismatch: "%s value %s does not match pattern %s"
        },
        clone: function clone() {
          var cloned = JSON.parse(JSON.stringify(this));
          cloned.clone = this.clone;
          return cloned;
        }
      };
    }
    var messages = exports.messages = newMessages();
  }
});

// node_modules/async-validator/es/index.js
var require_es = __commonJS({
  "node_modules/async-validator/es/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _extends10 = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var _typeof13 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var _util = require_util2();
    var _validator = require_validator();
    var _validator2 = _interopRequireDefault(_validator);
    var _messages2 = require_messages();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function Schema(descriptor) {
      this.rules = null;
      this._messages = _messages2.messages;
      this.define(descriptor);
    }
    Schema.prototype = {
      messages: function messages(_messages) {
        if (_messages) {
          this._messages = (0, _util.deepMerge)((0, _messages2.newMessages)(), _messages);
        }
        return this._messages;
      },
      define: function define(rules) {
        if (!rules) {
          throw new Error("Cannot configure a schema with no rules");
        }
        if ((typeof rules === "undefined" ? "undefined" : _typeof13(rules)) !== "object" || Array.isArray(rules)) {
          throw new Error("Rules must be an object");
        }
        this.rules = {};
        var z = void 0;
        var item = void 0;
        for (z in rules) {
          if (rules.hasOwnProperty(z)) {
            item = rules[z];
            this.rules[z] = Array.isArray(item) ? item : [item];
          }
        }
      },
      validate: function validate(source_) {
        var _this = this;
        var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var oc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
        };
        var source = source_;
        var options = o;
        var callback = oc;
        if (typeof options === "function") {
          callback = options;
          options = {};
        }
        if (!this.rules || Object.keys(this.rules).length === 0) {
          if (callback) {
            callback();
          }
          return Promise.resolve();
        }
        function complete(results) {
          var i = void 0;
          var errors = [];
          var fields = {};
          function add(e) {
            if (Array.isArray(e)) {
              var _errors;
              errors = (_errors = errors).concat.apply(_errors, e);
            } else {
              errors.push(e);
            }
          }
          for (i = 0; i < results.length; i++) {
            add(results[i]);
          }
          if (!errors.length) {
            errors = null;
            fields = null;
          } else {
            fields = (0, _util.convertFieldsError)(errors);
          }
          callback(errors, fields);
        }
        if (options.messages) {
          var messages = this.messages();
          if (messages === _messages2.messages) {
            messages = (0, _messages2.newMessages)();
          }
          (0, _util.deepMerge)(messages, options.messages);
          options.messages = messages;
        } else {
          options.messages = this.messages();
        }
        var arr = void 0;
        var value = void 0;
        var series = {};
        var keys = options.keys || Object.keys(this.rules);
        keys.forEach(function(z) {
          arr = _this.rules[z];
          value = source[z];
          arr.forEach(function(r) {
            var rule = r;
            if (typeof rule.transform === "function") {
              if (source === source_) {
                source = _extends10({}, source);
              }
              value = source[z] = rule.transform(value);
            }
            if (typeof rule === "function") {
              rule = {
                validator: rule
              };
            } else {
              rule = _extends10({}, rule);
            }
            rule.validator = _this.getValidationMethod(rule);
            rule.field = z;
            rule.fullField = rule.fullField || z;
            rule.type = _this.getType(rule);
            if (!rule.validator) {
              return;
            }
            series[z] = series[z] || [];
            series[z].push({
              rule,
              value,
              source,
              field: z
            });
          });
        });
        var errorFields = {};
        return (0, _util.asyncMap)(series, options, function(data, doIt) {
          var rule = data.rule;
          var deep = (rule.type === "object" || rule.type === "array") && (_typeof13(rule.fields) === "object" || _typeof13(rule.defaultField) === "object");
          deep = deep && (rule.required || !rule.required && data.value);
          rule.field = data.field;
          function addFullfield(key, schema) {
            return _extends10({}, schema, {
              fullField: rule.fullField + "." + key
            });
          }
          function cb() {
            var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
            var errors = e;
            if (!Array.isArray(errors)) {
              errors = [errors];
            }
            if (!options.suppressWarning && errors.length) {
              Schema.warning("async-validator:", errors);
            }
            if (errors.length && rule.message) {
              errors = [].concat(rule.message);
            }
            errors = errors.map((0, _util.complementError)(rule));
            if (options.first && errors.length) {
              errorFields[rule.field] = 1;
              return doIt(errors);
            }
            if (!deep) {
              doIt(errors);
            } else {
              if (rule.required && !data.value) {
                if (rule.message) {
                  errors = [].concat(rule.message).map((0, _util.complementError)(rule));
                } else if (options.error) {
                  errors = [options.error(rule, (0, _util.format)(options.messages.required, rule.field))];
                } else {
                  errors = [];
                }
                return doIt(errors);
              }
              var fieldsSchema = {};
              if (rule.defaultField) {
                for (var k in data.value) {
                  if (data.value.hasOwnProperty(k)) {
                    fieldsSchema[k] = rule.defaultField;
                  }
                }
              }
              fieldsSchema = _extends10({}, fieldsSchema, data.rule.fields);
              for (var f in fieldsSchema) {
                if (fieldsSchema.hasOwnProperty(f)) {
                  var fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
                  fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
                }
              }
              var schema = new Schema(fieldsSchema);
              schema.messages(options.messages);
              if (data.rule.options) {
                data.rule.options.messages = options.messages;
                data.rule.options.error = options.error;
              }
              schema.validate(data.value, data.rule.options || options, function(errs) {
                var finalErrors = [];
                if (errors && errors.length) {
                  finalErrors.push.apply(finalErrors, errors);
                }
                if (errs && errs.length) {
                  finalErrors.push.apply(finalErrors, errs);
                }
                doIt(finalErrors.length ? finalErrors : null);
              });
            }
          }
          var res = void 0;
          if (rule.asyncValidator) {
            res = rule.asyncValidator(rule, data.value, cb, data.source, options);
          } else if (rule.validator) {
            res = rule.validator(rule, data.value, cb, data.source, options);
            if (res === true) {
              cb();
            } else if (res === false) {
              cb(rule.message || rule.field + " fails");
            } else if (res instanceof Array) {
              cb(res);
            } else if (res instanceof Error) {
              cb(res.message);
            }
          }
          if (res && res.then) {
            res.then(function() {
              return cb();
            }, function(e) {
              return cb(e);
            });
          }
        }, function(results) {
          complete(results);
        });
      },
      getType: function getType(rule) {
        if (rule.type === void 0 && rule.pattern instanceof RegExp) {
          rule.type = "pattern";
        }
        if (typeof rule.validator !== "function" && rule.type && !_validator2["default"].hasOwnProperty(rule.type)) {
          throw new Error((0, _util.format)("Unknown rule type %s", rule.type));
        }
        return rule.type || "string";
      },
      getValidationMethod: function getValidationMethod(rule) {
        if (typeof rule.validator === "function") {
          return rule.validator;
        }
        var keys = Object.keys(rule);
        var messageIndex = keys.indexOf("message");
        if (messageIndex !== -1) {
          keys.splice(messageIndex, 1);
        }
        if (keys.length === 1 && keys[0] === "required") {
          return _validator2["default"].required;
        }
        return _validator2["default"][this.getType(rule)] || false;
      }
    };
    Schema.register = function register(type, validator) {
      if (typeof validator !== "function") {
        throw new Error("Cannot register a validator by type, validator is not a function");
      }
      _validator2["default"][type] = validator;
    };
    Schema.warning = _util.warning;
    Schema.messages = _messages2.messages;
    exports["default"] = Schema;
  }
});

// node_modules/warning/warning.js
var require_warning = __commonJS({
  "node_modules/warning/warning.js"(exports, module) {
    "use strict";
    var __DEV__ = true;
    var warning3 = function() {
    };
    if (__DEV__) {
      printWarning = function printWarning2(format, args) {
        var len = arguments.length;
        args = new Array(len > 1 ? len - 1 : 0);
        for (var key = 1; key < len; key++) {
          args[key - 1] = arguments[key];
        }
        var argIndex = 0;
        var message = "Warning: " + format.replace(/%s/g, function() {
          return args[argIndex++];
        });
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
      warning3 = function(condition, format, args) {
        var len = arguments.length;
        args = new Array(len > 2 ? len - 2 : 0);
        for (var key = 2; key < len; key++) {
          args[key - 2] = arguments[key];
        }
        if (format === void 0) {
          throw new Error(
            "`warning(condition, format, ...args)` requires a warning message argument"
          );
        }
        if (!condition) {
          printWarning.apply(null, [format].concat(args));
        }
      };
    }
    var printWarning;
    module.exports = warning3;
  }
});

// node_modules/lodash/_baseGet.js
var require_baseGet = __commonJS({
  "node_modules/lodash/_baseGet.js"(exports, module) {
    var castPath = require_castPath();
    var toKey = require_toKey();
    function baseGet(object, path) {
      path = castPath(path, object);
      var index = 0, length = path.length;
      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return index && index == length ? object : void 0;
    }
    module.exports = baseGet;
  }
});

// node_modules/lodash/get.js
var require_get = __commonJS({
  "node_modules/lodash/get.js"(exports, module) {
    var baseGet = require_baseGet();
    function get2(object, path, defaultValue) {
      var result = object == null ? void 0 : baseGet(object, path);
      return result === void 0 ? defaultValue : result;
    }
    module.exports = get2;
  }
});

// node_modules/lodash/_defineProperty.js
var require_defineProperty2 = __commonJS({
  "node_modules/lodash/_defineProperty.js"(exports, module) {
    var getNative = require_getNative();
    var defineProperty = function() {
      try {
        var func = getNative(Object, "defineProperty");
        func({}, "", {});
        return func;
      } catch (e) {
      }
    }();
    module.exports = defineProperty;
  }
});

// node_modules/lodash/_baseAssignValue.js
var require_baseAssignValue = __commonJS({
  "node_modules/lodash/_baseAssignValue.js"(exports, module) {
    var defineProperty = require_defineProperty2();
    function baseAssignValue(object, key, value) {
      if (key == "__proto__" && defineProperty) {
        defineProperty(object, key, {
          "configurable": true,
          "enumerable": true,
          "value": value,
          "writable": true
        });
      } else {
        object[key] = value;
      }
    }
    module.exports = baseAssignValue;
  }
});

// node_modules/lodash/_assignValue.js
var require_assignValue = __commonJS({
  "node_modules/lodash/_assignValue.js"(exports, module) {
    var baseAssignValue = require_baseAssignValue();
    var eq2 = require_eq();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq2(objValue, value)) || value === void 0 && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }
    module.exports = assignValue;
  }
});

// node_modules/lodash/_baseSet.js
var require_baseSet = __commonJS({
  "node_modules/lodash/_baseSet.js"(exports, module) {
    var assignValue = require_assignValue();
    var castPath = require_castPath();
    var isIndex = require_isIndex();
    var isObject = require_isObject();
    var toKey = require_toKey();
    function baseSet(object, path, value, customizer) {
      if (!isObject(object)) {
        return object;
      }
      path = castPath(path, object);
      var index = -1, length = path.length, lastIndex = length - 1, nested = object;
      while (nested != null && ++index < length) {
        var key = toKey(path[index]), newValue = value;
        if (key === "__proto__" || key === "constructor" || key === "prototype") {
          return object;
        }
        if (index != lastIndex) {
          var objValue = nested[key];
          newValue = customizer ? customizer(objValue, key, nested) : void 0;
          if (newValue === void 0) {
            newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
          }
        }
        assignValue(nested, key, newValue);
        nested = nested[key];
      }
      return object;
    }
    module.exports = baseSet;
  }
});

// node_modules/lodash/set.js
var require_set = __commonJS({
  "node_modules/lodash/set.js"(exports, module) {
    var baseSet = require_baseSet();
    function set3(object, path, value) {
      return object == null ? object : baseSet(object, path, value);
    }
    module.exports = set3;
  }
});

// node_modules/babel-runtime/helpers/classCallCheck.js
var require_classCallCheck = __commonJS({
  "node_modules/babel-runtime/helpers/classCallCheck.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.default = function(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };
  }
});

// node_modules/babel-runtime/helpers/createClass.js
var require_createClass = __commonJS({
  "node_modules/babel-runtime/helpers/createClass.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _defineProperty15 = require_define_property2();
    var _defineProperty22 = _interopRequireDefault(_defineProperty15);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          (0, _defineProperty22.default)(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
  }
});

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo2(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo2;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var require_hoist_non_react_statics_cjs = __commonJS({
  "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports, module) {
    "use strict";
    var reactIs = require_react_is();
    var REACT_STATICS = {
      childContextTypes: true,
      contextType: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromError: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true
    };
    var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true
    };
    var FORWARD_REF_STATICS = {
      "$$typeof": true,
      render: true,
      defaultProps: true,
      displayName: true,
      propTypes: true
    };
    var MEMO_STATICS = {
      "$$typeof": true,
      compare: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
      type: true
    };
    var TYPE_STATICS = {};
    TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
    function getStatics(component) {
      if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
      }
      return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
    }
    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = Object.prototype;
    function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== "string") {
        if (objectPrototype) {
          var inheritedComponent = getPrototypeOf(sourceComponent);
          if (inheritedComponent && inheritedComponent !== objectPrototype) {
            hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
          }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
          keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];
          if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
            var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
            try {
              defineProperty(targetComponent, key, descriptor);
            } catch (e) {
            }
          }
        }
      }
      return targetComponent;
    }
    module.exports = hoistNonReactStatics;
  }
});

// node_modules/core-js/library/modules/_add-to-unscopables.js
var require_add_to_unscopables = __commonJS({
  "node_modules/core-js/library/modules/_add-to-unscopables.js"(exports, module) {
    module.exports = function() {
    };
  }
});

// node_modules/core-js/library/modules/_iter-step.js
var require_iter_step = __commonJS({
  "node_modules/core-js/library/modules/_iter-step.js"(exports, module) {
    module.exports = function(done, value) {
      return { value, done: !!done };
    };
  }
});

// node_modules/core-js/library/modules/es6.array.iterator.js
var require_es6_array_iterator = __commonJS({
  "node_modules/core-js/library/modules/es6.array.iterator.js"(exports, module) {
    "use strict";
    var addToUnscopables = require_add_to_unscopables();
    var step = require_iter_step();
    var Iterators = require_iterators();
    var toIObject = require_to_iobject();
    module.exports = require_iter_define()(Array, "Array", function(iterated, kind) {
      this._t = toIObject(iterated);
      this._i = 0;
      this._k = kind;
    }, function() {
      var O = this._t;
      var kind = this._k;
      var index = this._i++;
      if (!O || index >= O.length) {
        this._t = void 0;
        return step(1);
      }
      if (kind == "keys") return step(0, index);
      if (kind == "values") return step(0, O[index]);
      return step(0, [index, O[index]]);
    }, "values");
    Iterators.Arguments = Iterators.Array;
    addToUnscopables("keys");
    addToUnscopables("values");
    addToUnscopables("entries");
  }
});

// node_modules/core-js/library/modules/web.dom.iterable.js
var require_web_dom_iterable = __commonJS({
  "node_modules/core-js/library/modules/web.dom.iterable.js"() {
    require_es6_array_iterator();
    var global2 = require_global();
    var hide = require_hide();
    var Iterators = require_iterators();
    var TO_STRING_TAG = require_wks()("toStringTag");
    var DOMIterables = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(",");
    for (i = 0; i < DOMIterables.length; i++) {
      NAME = DOMIterables[i];
      Collection = global2[NAME];
      proto = Collection && Collection.prototype;
      if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
      Iterators[NAME] = Iterators.Array;
    }
    var NAME;
    var Collection;
    var proto;
    var i;
  }
});

// node_modules/core-js/library/modules/_wks-ext.js
var require_wks_ext = __commonJS({
  "node_modules/core-js/library/modules/_wks-ext.js"(exports) {
    exports.f = require_wks();
  }
});

// node_modules/core-js/library/fn/symbol/iterator.js
var require_iterator = __commonJS({
  "node_modules/core-js/library/fn/symbol/iterator.js"(exports, module) {
    require_es6_string_iterator();
    require_web_dom_iterable();
    module.exports = require_wks_ext().f("iterator");
  }
});

// node_modules/babel-runtime/core-js/symbol/iterator.js
var require_iterator2 = __commonJS({
  "node_modules/babel-runtime/core-js/symbol/iterator.js"(exports, module) {
    module.exports = { "default": require_iterator(), __esModule: true };
  }
});

// node_modules/core-js/library/modules/_meta.js
var require_meta = __commonJS({
  "node_modules/core-js/library/modules/_meta.js"(exports, module) {
    var META = require_uid()("meta");
    var isObject = require_is_object();
    var has2 = require_has();
    var setDesc = require_object_dp().f;
    var id = 0;
    var isExtensible = Object.isExtensible || function() {
      return true;
    };
    var FREEZE = !require_fails()(function() {
      return isExtensible(Object.preventExtensions({}));
    });
    var setMeta = function(it) {
      setDesc(it, META, { value: {
        i: "O" + ++id,
        // object ID
        w: {}
        // weak collections IDs
      } });
    };
    var fastKey = function(it, create3) {
      if (!isObject(it)) return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
      if (!has2(it, META)) {
        if (!isExtensible(it)) return "F";
        if (!create3) return "E";
        setMeta(it);
      }
      return it[META].i;
    };
    var getWeak = function(it, create3) {
      if (!has2(it, META)) {
        if (!isExtensible(it)) return true;
        if (!create3) return false;
        setMeta(it);
      }
      return it[META].w;
    };
    var onFreeze = function(it) {
      if (FREEZE && meta.NEED && isExtensible(it) && !has2(it, META)) setMeta(it);
      return it;
    };
    var meta = module.exports = {
      KEY: META,
      NEED: false,
      fastKey,
      getWeak,
      onFreeze
    };
  }
});

// node_modules/core-js/library/modules/_wks-define.js
var require_wks_define = __commonJS({
  "node_modules/core-js/library/modules/_wks-define.js"(exports, module) {
    var global2 = require_global();
    var core = require_core();
    var LIBRARY = require_library();
    var wksExt = require_wks_ext();
    var defineProperty = require_object_dp().f;
    module.exports = function(name) {
      var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global2.Symbol || {});
      if (name.charAt(0) != "_" && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
    };
  }
});

// node_modules/core-js/library/modules/_enum-keys.js
var require_enum_keys = __commonJS({
  "node_modules/core-js/library/modules/_enum-keys.js"(exports, module) {
    var getKeys = require_object_keys();
    var gOPS = require_object_gops();
    var pIE = require_object_pie();
    module.exports = function(it) {
      var result = getKeys(it);
      var getSymbols = gOPS.f;
      if (getSymbols) {
        var symbols = getSymbols(it);
        var isEnum = pIE.f;
        var i = 0;
        var key;
        while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
      }
      return result;
    };
  }
});

// node_modules/core-js/library/modules/_is-array.js
var require_is_array = __commonJS({
  "node_modules/core-js/library/modules/_is-array.js"(exports, module) {
    var cof = require_cof();
    module.exports = Array.isArray || function isArray(arg) {
      return cof(arg) == "Array";
    };
  }
});

// node_modules/core-js/library/modules/_object-gopn.js
var require_object_gopn = __commonJS({
  "node_modules/core-js/library/modules/_object-gopn.js"(exports) {
    var $keys = require_object_keys_internal();
    var hiddenKeys = require_enum_bug_keys().concat("length", "prototype");
    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return $keys(O, hiddenKeys);
    };
  }
});

// node_modules/core-js/library/modules/_object-gopn-ext.js
var require_object_gopn_ext = __commonJS({
  "node_modules/core-js/library/modules/_object-gopn-ext.js"(exports, module) {
    var toIObject = require_to_iobject();
    var gOPN = require_object_gopn().f;
    var toString = {}.toString;
    var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    var getWindowNames = function(it) {
      try {
        return gOPN(it);
      } catch (e) {
        return windowNames.slice();
      }
    };
    module.exports.f = function getOwnPropertyNames(it) {
      return windowNames && toString.call(it) == "[object Window]" ? getWindowNames(it) : gOPN(toIObject(it));
    };
  }
});

// node_modules/core-js/library/modules/_object-gopd.js
var require_object_gopd = __commonJS({
  "node_modules/core-js/library/modules/_object-gopd.js"(exports) {
    var pIE = require_object_pie();
    var createDesc = require_property_desc();
    var toIObject = require_to_iobject();
    var toPrimitive = require_to_primitive();
    var has2 = require_has();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var gOPD = Object.getOwnPropertyDescriptor;
    exports.f = require_descriptors() ? gOPD : function getOwnPropertyDescriptor(O, P) {
      O = toIObject(O);
      P = toPrimitive(P, true);
      if (IE8_DOM_DEFINE) try {
        return gOPD(O, P);
      } catch (e) {
      }
      if (has2(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
    };
  }
});

// node_modules/core-js/library/modules/es6.symbol.js
var require_es6_symbol = __commonJS({
  "node_modules/core-js/library/modules/es6.symbol.js"() {
    "use strict";
    var global2 = require_global();
    var has2 = require_has();
    var DESCRIPTORS = require_descriptors();
    var $export = require_export();
    var redefine = require_redefine();
    var META = require_meta().KEY;
    var $fails = require_fails();
    var shared = require_shared();
    var setToStringTag = require_set_to_string_tag();
    var uid = require_uid();
    var wks = require_wks();
    var wksExt = require_wks_ext();
    var wksDefine = require_wks_define();
    var enumKeys = require_enum_keys();
    var isArray = require_is_array();
    var anObject = require_an_object();
    var isObject = require_is_object();
    var toObject = require_to_object();
    var toIObject = require_to_iobject();
    var toPrimitive = require_to_primitive();
    var createDesc = require_property_desc();
    var _create = require_object_create();
    var gOPNExt = require_object_gopn_ext();
    var $GOPD = require_object_gopd();
    var $GOPS = require_object_gops();
    var $DP = require_object_dp();
    var $keys = require_object_keys();
    var gOPD = $GOPD.f;
    var dP = $DP.f;
    var gOPN = gOPNExt.f;
    var $Symbol = global2.Symbol;
    var $JSON = global2.JSON;
    var _stringify = $JSON && $JSON.stringify;
    var PROTOTYPE = "prototype";
    var HIDDEN = wks("_hidden");
    var TO_PRIMITIVE = wks("toPrimitive");
    var isEnum = {}.propertyIsEnumerable;
    var SymbolRegistry = shared("symbol-registry");
    var AllSymbols = shared("symbols");
    var OPSymbols = shared("op-symbols");
    var ObjectProto = Object[PROTOTYPE];
    var USE_NATIVE = typeof $Symbol == "function" && !!$GOPS.f;
    var QObject = global2.QObject;
    var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
    var setSymbolDesc = DESCRIPTORS && $fails(function() {
      return _create(dP({}, "a", {
        get: function() {
          return dP(this, "a", { value: 7 }).a;
        }
      })).a != 7;
    }) ? function(it, key, D) {
      var protoDesc = gOPD(ObjectProto, key);
      if (protoDesc) delete ObjectProto[key];
      dP(it, key, D);
      if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
    } : dP;
    var wrap = function(tag) {
      var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
      sym._k = tag;
      return sym;
    };
    var isSymbol = USE_NATIVE && typeof $Symbol.iterator == "symbol" ? function(it) {
      return typeof it == "symbol";
    } : function(it) {
      return it instanceof $Symbol;
    };
    var $defineProperty = function defineProperty(it, key, D) {
      if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
      anObject(it);
      key = toPrimitive(key, true);
      anObject(D);
      if (has2(AllSymbols, key)) {
        if (!D.enumerable) {
          if (!has2(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
          it[HIDDEN][key] = true;
        } else {
          if (has2(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
          D = _create(D, { enumerable: createDesc(0, false) });
        }
        return setSymbolDesc(it, key, D);
      }
      return dP(it, key, D);
    };
    var $defineProperties = function defineProperties(it, P) {
      anObject(it);
      var keys = enumKeys(P = toIObject(P));
      var i = 0;
      var l = keys.length;
      var key;
      while (l > i) $defineProperty(it, key = keys[i++], P[key]);
      return it;
    };
    var $create = function create3(it, P) {
      return P === void 0 ? _create(it) : $defineProperties(_create(it), P);
    };
    var $propertyIsEnumerable = function propertyIsEnumerable(key) {
      var E = isEnum.call(this, key = toPrimitive(key, true));
      if (this === ObjectProto && has2(AllSymbols, key) && !has2(OPSymbols, key)) return false;
      return E || !has2(this, key) || !has2(AllSymbols, key) || has2(this, HIDDEN) && this[HIDDEN][key] ? E : true;
    };
    var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
      it = toIObject(it);
      key = toPrimitive(key, true);
      if (it === ObjectProto && has2(AllSymbols, key) && !has2(OPSymbols, key)) return;
      var D = gOPD(it, key);
      if (D && has2(AllSymbols, key) && !(has2(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
      return D;
    };
    var $getOwnPropertyNames = function getOwnPropertyNames(it) {
      var names = gOPN(toIObject(it));
      var result = [];
      var i = 0;
      var key;
      while (names.length > i) {
        if (!has2(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
      }
      return result;
    };
    var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
      var IS_OP = it === ObjectProto;
      var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
      var result = [];
      var i = 0;
      var key;
      while (names.length > i) {
        if (has2(AllSymbols, key = names[i++]) && (IS_OP ? has2(ObjectProto, key) : true)) result.push(AllSymbols[key]);
      }
      return result;
    };
    if (!USE_NATIVE) {
      $Symbol = function Symbol2() {
        if (this instanceof $Symbol) throw TypeError("Symbol is not a constructor!");
        var tag = uid(arguments.length > 0 ? arguments[0] : void 0);
        var $set = function(value) {
          if (this === ObjectProto) $set.call(OPSymbols, value);
          if (has2(this, HIDDEN) && has2(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
          setSymbolDesc(this, tag, createDesc(1, value));
        };
        if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
        return wrap(tag);
      };
      redefine($Symbol[PROTOTYPE], "toString", function toString() {
        return this._k;
      });
      $GOPD.f = $getOwnPropertyDescriptor;
      $DP.f = $defineProperty;
      require_object_gopn().f = gOPNExt.f = $getOwnPropertyNames;
      require_object_pie().f = $propertyIsEnumerable;
      $GOPS.f = $getOwnPropertySymbols;
      if (DESCRIPTORS && !require_library()) {
        redefine(ObjectProto, "propertyIsEnumerable", $propertyIsEnumerable, true);
      }
      wksExt.f = function(name) {
        return wrap(wks(name));
      };
    }
    $export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });
    for (es6Symbols = // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
    "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), j = 0; es6Symbols.length > j; ) wks(es6Symbols[j++]);
    var es6Symbols;
    var j;
    for (wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k; ) wksDefine(wellKnownSymbols[k++]);
    var wellKnownSymbols;
    var k;
    $export($export.S + $export.F * !USE_NATIVE, "Symbol", {
      // 19.4.2.1 Symbol.for(key)
      "for": function(key) {
        return has2(SymbolRegistry, key += "") ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
      },
      // 19.4.2.5 Symbol.keyFor(sym)
      keyFor: function keyFor(sym) {
        if (!isSymbol(sym)) throw TypeError(sym + " is not a symbol!");
        for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
      },
      useSetter: function() {
        setter = true;
      },
      useSimple: function() {
        setter = false;
      }
    });
    $export($export.S + $export.F * !USE_NATIVE, "Object", {
      // 19.1.2.2 Object.create(O [, Properties])
      create: $create,
      // 19.1.2.4 Object.defineProperty(O, P, Attributes)
      defineProperty: $defineProperty,
      // 19.1.2.3 Object.defineProperties(O, Properties)
      defineProperties: $defineProperties,
      // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
      getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
      // 19.1.2.7 Object.getOwnPropertyNames(O)
      getOwnPropertyNames: $getOwnPropertyNames,
      // 19.1.2.8 Object.getOwnPropertySymbols(O)
      getOwnPropertySymbols: $getOwnPropertySymbols
    });
    var FAILS_ON_PRIMITIVES = $fails(function() {
      $GOPS.f(1);
    });
    $export($export.S + $export.F * FAILS_ON_PRIMITIVES, "Object", {
      getOwnPropertySymbols: function getOwnPropertySymbols(it) {
        return $GOPS.f(toObject(it));
      }
    });
    $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function() {
      var S = $Symbol();
      return _stringify([S]) != "[null]" || _stringify({ a: S }) != "{}" || _stringify(Object(S)) != "{}";
    })), "JSON", {
      stringify: function stringify(it) {
        var args = [it];
        var i = 1;
        var replacer, $replacer;
        while (arguments.length > i) args.push(arguments[i++]);
        $replacer = replacer = args[1];
        if (!isObject(replacer) && it === void 0 || isSymbol(it)) return;
        if (!isArray(replacer)) replacer = function(key, value) {
          if (typeof $replacer == "function") value = $replacer.call(this, key, value);
          if (!isSymbol(value)) return value;
        };
        args[1] = replacer;
        return _stringify.apply($JSON, args);
      }
    });
    $Symbol[PROTOTYPE][TO_PRIMITIVE] || require_hide()($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
    setToStringTag($Symbol, "Symbol");
    setToStringTag(Math, "Math", true);
    setToStringTag(global2.JSON, "JSON", true);
  }
});

// node_modules/core-js/library/modules/es6.object.to-string.js
var require_es6_object_to_string = __commonJS({
  "node_modules/core-js/library/modules/es6.object.to-string.js"() {
  }
});

// node_modules/core-js/library/modules/es7.symbol.async-iterator.js
var require_es7_symbol_async_iterator = __commonJS({
  "node_modules/core-js/library/modules/es7.symbol.async-iterator.js"() {
    require_wks_define()("asyncIterator");
  }
});

// node_modules/core-js/library/modules/es7.symbol.observable.js
var require_es7_symbol_observable = __commonJS({
  "node_modules/core-js/library/modules/es7.symbol.observable.js"() {
    require_wks_define()("observable");
  }
});

// node_modules/core-js/library/fn/symbol/index.js
var require_symbol = __commonJS({
  "node_modules/core-js/library/fn/symbol/index.js"(exports, module) {
    require_es6_symbol();
    require_es6_object_to_string();
    require_es7_symbol_async_iterator();
    require_es7_symbol_observable();
    module.exports = require_core().Symbol;
  }
});

// node_modules/babel-runtime/core-js/symbol.js
var require_symbol2 = __commonJS({
  "node_modules/babel-runtime/core-js/symbol.js"(exports, module) {
    module.exports = { "default": require_symbol(), __esModule: true };
  }
});

// node_modules/babel-runtime/helpers/typeof.js
var require_typeof = __commonJS({
  "node_modules/babel-runtime/helpers/typeof.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _iterator = require_iterator2();
    var _iterator2 = _interopRequireDefault(_iterator);
    var _symbol = require_symbol2();
    var _symbol2 = _interopRequireDefault(_symbol);
    var _typeof13 = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj;
    };
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = typeof _symbol2.default === "function" && _typeof13(_iterator2.default) === "symbol" ? function(obj) {
      return typeof obj === "undefined" ? "undefined" : _typeof13(obj);
    } : function(obj) {
      return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof13(obj);
    };
  }
});

// node_modules/babel-runtime/helpers/possibleConstructorReturn.js
var require_possibleConstructorReturn = __commonJS({
  "node_modules/babel-runtime/helpers/possibleConstructorReturn.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _typeof22 = require_typeof();
    var _typeof32 = _interopRequireDefault(_typeof22);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = function(self2, call) {
      if (!self2) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof32.default)(call)) === "object" || typeof call === "function") ? call : self2;
    };
  }
});

// node_modules/core-js/library/modules/_set-proto.js
var require_set_proto = __commonJS({
  "node_modules/core-js/library/modules/_set-proto.js"(exports, module) {
    var isObject = require_is_object();
    var anObject = require_an_object();
    var check = function(O, proto) {
      anObject(O);
      if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
    };
    module.exports = {
      set: Object.setPrototypeOf || ("__proto__" in {} ? (
        // eslint-disable-line
        function(test, buggy, set3) {
          try {
            set3 = require_ctx()(Function.call, require_object_gopd().f(Object.prototype, "__proto__").set, 2);
            set3(test, []);
            buggy = !(test instanceof Array);
          } catch (e) {
            buggy = true;
          }
          return function setPrototypeOf(O, proto) {
            check(O, proto);
            if (buggy) O.__proto__ = proto;
            else set3(O, proto);
            return O;
          };
        }({}, false)
      ) : void 0),
      check
    };
  }
});

// node_modules/core-js/library/modules/es6.object.set-prototype-of.js
var require_es6_object_set_prototype_of = __commonJS({
  "node_modules/core-js/library/modules/es6.object.set-prototype-of.js"() {
    var $export = require_export();
    $export($export.S, "Object", { setPrototypeOf: require_set_proto().set });
  }
});

// node_modules/core-js/library/fn/object/set-prototype-of.js
var require_set_prototype_of = __commonJS({
  "node_modules/core-js/library/fn/object/set-prototype-of.js"(exports, module) {
    require_es6_object_set_prototype_of();
    module.exports = require_core().Object.setPrototypeOf;
  }
});

// node_modules/babel-runtime/core-js/object/set-prototype-of.js
var require_set_prototype_of2 = __commonJS({
  "node_modules/babel-runtime/core-js/object/set-prototype-of.js"(exports, module) {
    module.exports = { "default": require_set_prototype_of(), __esModule: true };
  }
});

// node_modules/core-js/library/modules/es6.object.create.js
var require_es6_object_create = __commonJS({
  "node_modules/core-js/library/modules/es6.object.create.js"() {
    var $export = require_export();
    $export($export.S, "Object", { create: require_object_create() });
  }
});

// node_modules/core-js/library/fn/object/create.js
var require_create = __commonJS({
  "node_modules/core-js/library/fn/object/create.js"(exports, module) {
    require_es6_object_create();
    var $Object = require_core().Object;
    module.exports = function create3(P, D) {
      return $Object.create(P, D);
    };
  }
});

// node_modules/babel-runtime/core-js/object/create.js
var require_create2 = __commonJS({
  "node_modules/babel-runtime/core-js/object/create.js"(exports, module) {
    module.exports = { "default": require_create(), __esModule: true };
  }
});

// node_modules/babel-runtime/helpers/inherits.js
var require_inherits = __commonJS({
  "node_modules/babel-runtime/helpers/inherits.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _setPrototypeOf3 = require_set_prototype_of2();
    var _setPrototypeOf22 = _interopRequireDefault(_setPrototypeOf3);
    var _create = require_create2();
    var _create2 = _interopRequireDefault(_create);
    var _typeof22 = require_typeof();
    var _typeof32 = _interopRequireDefault(_typeof22);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = function(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof32.default)(superClass)));
      }
      subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) _setPrototypeOf22.default ? (0, _setPrototypeOf22.default)(subClass, superClass) : subClass.__proto__ = superClass;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has3 = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has2 = require_has3();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has2;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has2(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign2();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has2 = require_has3();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement2, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement2(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has2(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has2(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has2(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement2(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/lodash.camelcase/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.camelcase/index.js"(exports, module) {
    var INFINITY = 1 / 0;
    var symbolTag = "[object Symbol]";
    var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
    var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
    var rsAstralRange = "\\ud800-\\udfff";
    var rsComboMarksRange = "\\u0300-\\u036f\\ufe20-\\ufe23";
    var rsComboSymbolsRange = "\\u20d0-\\u20f0";
    var rsDingbatRange = "\\u2700-\\u27bf";
    var rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff";
    var rsMathOpRange = "\\xac\\xb1\\xd7\\xf7";
    var rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf";
    var rsPunctuationRange = "\\u2000-\\u206f";
    var rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000";
    var rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde";
    var rsVarRange = "\\ufe0e\\ufe0f";
    var rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
    var rsApos = "['’]";
    var rsAstral = "[" + rsAstralRange + "]";
    var rsBreak = "[" + rsBreakRange + "]";
    var rsCombo = "[" + rsComboMarksRange + rsComboSymbolsRange + "]";
    var rsDigits = "\\d+";
    var rsDingbat = "[" + rsDingbatRange + "]";
    var rsLower = "[" + rsLowerRange + "]";
    var rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]";
    var rsFitz = "\\ud83c[\\udffb-\\udfff]";
    var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
    var rsNonAstral = "[^" + rsAstralRange + "]";
    var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
    var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
    var rsUpper = "[" + rsUpperRange + "]";
    var rsZWJ = "\\u200d";
    var rsLowerMisc = "(?:" + rsLower + "|" + rsMisc + ")";
    var rsUpperMisc = "(?:" + rsUpper + "|" + rsMisc + ")";
    var rsOptLowerContr = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?";
    var rsOptUpperContr = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?";
    var reOptMod = rsModifier + "?";
    var rsOptVar = "[" + rsVarRange + "]?";
    var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
    var rsSeq = rsOptVar + reOptMod + rsOptJoin;
    var rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq;
    var rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
    var reApos = RegExp(rsApos, "g");
    var reComboMark = RegExp(rsCombo, "g");
    var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
    var reUnicodeWord = RegExp([
      rsUpper + "?" + rsLower + "+" + rsOptLowerContr + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
      rsUpperMisc + "+" + rsOptUpperContr + "(?=" + [rsBreak, rsUpper + rsLowerMisc, "$"].join("|") + ")",
      rsUpper + "?" + rsLowerMisc + "+" + rsOptLowerContr,
      rsUpper + "+" + rsOptUpperContr,
      rsDigits,
      rsEmoji
    ].join("|"), "g");
    var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + "]");
    var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
    var deburredLetters = {
      // Latin-1 Supplement block.
      "À": "A",
      "Á": "A",
      "Â": "A",
      "Ã": "A",
      "Ä": "A",
      "Å": "A",
      "à": "a",
      "á": "a",
      "â": "a",
      "ã": "a",
      "ä": "a",
      "å": "a",
      "Ç": "C",
      "ç": "c",
      "Ð": "D",
      "ð": "d",
      "È": "E",
      "É": "E",
      "Ê": "E",
      "Ë": "E",
      "è": "e",
      "é": "e",
      "ê": "e",
      "ë": "e",
      "Ì": "I",
      "Í": "I",
      "Î": "I",
      "Ï": "I",
      "ì": "i",
      "í": "i",
      "î": "i",
      "ï": "i",
      "Ñ": "N",
      "ñ": "n",
      "Ò": "O",
      "Ó": "O",
      "Ô": "O",
      "Õ": "O",
      "Ö": "O",
      "Ø": "O",
      "ò": "o",
      "ó": "o",
      "ô": "o",
      "õ": "o",
      "ö": "o",
      "ø": "o",
      "Ù": "U",
      "Ú": "U",
      "Û": "U",
      "Ü": "U",
      "ù": "u",
      "ú": "u",
      "û": "u",
      "ü": "u",
      "Ý": "Y",
      "ý": "y",
      "ÿ": "y",
      "Æ": "Ae",
      "æ": "ae",
      "Þ": "Th",
      "þ": "th",
      "ß": "ss",
      // Latin Extended-A block.
      "Ā": "A",
      "Ă": "A",
      "Ą": "A",
      "ā": "a",
      "ă": "a",
      "ą": "a",
      "Ć": "C",
      "Ĉ": "C",
      "Ċ": "C",
      "Č": "C",
      "ć": "c",
      "ĉ": "c",
      "ċ": "c",
      "č": "c",
      "Ď": "D",
      "Đ": "D",
      "ď": "d",
      "đ": "d",
      "Ē": "E",
      "Ĕ": "E",
      "Ė": "E",
      "Ę": "E",
      "Ě": "E",
      "ē": "e",
      "ĕ": "e",
      "ė": "e",
      "ę": "e",
      "ě": "e",
      "Ĝ": "G",
      "Ğ": "G",
      "Ġ": "G",
      "Ģ": "G",
      "ĝ": "g",
      "ğ": "g",
      "ġ": "g",
      "ģ": "g",
      "Ĥ": "H",
      "Ħ": "H",
      "ĥ": "h",
      "ħ": "h",
      "Ĩ": "I",
      "Ī": "I",
      "Ĭ": "I",
      "Į": "I",
      "İ": "I",
      "ĩ": "i",
      "ī": "i",
      "ĭ": "i",
      "į": "i",
      "ı": "i",
      "Ĵ": "J",
      "ĵ": "j",
      "Ķ": "K",
      "ķ": "k",
      "ĸ": "k",
      "Ĺ": "L",
      "Ļ": "L",
      "Ľ": "L",
      "Ŀ": "L",
      "Ł": "L",
      "ĺ": "l",
      "ļ": "l",
      "ľ": "l",
      "ŀ": "l",
      "ł": "l",
      "Ń": "N",
      "Ņ": "N",
      "Ň": "N",
      "Ŋ": "N",
      "ń": "n",
      "ņ": "n",
      "ň": "n",
      "ŋ": "n",
      "Ō": "O",
      "Ŏ": "O",
      "Ő": "O",
      "ō": "o",
      "ŏ": "o",
      "ő": "o",
      "Ŕ": "R",
      "Ŗ": "R",
      "Ř": "R",
      "ŕ": "r",
      "ŗ": "r",
      "ř": "r",
      "Ś": "S",
      "Ŝ": "S",
      "Ş": "S",
      "Š": "S",
      "ś": "s",
      "ŝ": "s",
      "ş": "s",
      "š": "s",
      "Ţ": "T",
      "Ť": "T",
      "Ŧ": "T",
      "ţ": "t",
      "ť": "t",
      "ŧ": "t",
      "Ũ": "U",
      "Ū": "U",
      "Ŭ": "U",
      "Ů": "U",
      "Ű": "U",
      "Ų": "U",
      "ũ": "u",
      "ū": "u",
      "ŭ": "u",
      "ů": "u",
      "ű": "u",
      "ų": "u",
      "Ŵ": "W",
      "ŵ": "w",
      "Ŷ": "Y",
      "ŷ": "y",
      "Ÿ": "Y",
      "Ź": "Z",
      "Ż": "Z",
      "Ž": "Z",
      "ź": "z",
      "ż": "z",
      "ž": "z",
      "Ĳ": "IJ",
      "ĳ": "ij",
      "Œ": "Oe",
      "œ": "oe",
      "ŉ": "'n",
      "ſ": "ss"
    };
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    function arrayReduce(array, iteratee, accumulator, initAccum) {
      var index = -1, length = array ? array.length : 0;
      if (initAccum && length) {
        accumulator = array[++index];
      }
      while (++index < length) {
        accumulator = iteratee(accumulator, array[index], index, array);
      }
      return accumulator;
    }
    function asciiToArray(string) {
      return string.split("");
    }
    function asciiWords(string) {
      return string.match(reAsciiWord) || [];
    }
    function basePropertyOf(object) {
      return function(key) {
        return object == null ? void 0 : object[key];
      };
    }
    var deburrLetter = basePropertyOf(deburredLetters);
    function hasUnicode(string) {
      return reHasUnicode.test(string);
    }
    function hasUnicodeWord(string) {
      return reHasUnicodeWord.test(string);
    }
    function stringToArray(string) {
      return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
    }
    function unicodeToArray(string) {
      return string.match(reUnicode) || [];
    }
    function unicodeWords(string) {
      return string.match(reUnicodeWord) || [];
    }
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    var Symbol2 = root.Symbol;
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function baseSlice(array, start, end) {
      var index = -1, length = array.length;
      if (start < 0) {
        start = -start > length ? 0 : length + start;
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : end - start >>> 0;
      start >>>= 0;
      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === void 0 ? length : end;
      return !start && end >= length ? array : baseSlice(array, start, end);
    }
    function createCaseFirst(methodName) {
      return function(string) {
        string = toString(string);
        var strSymbols = hasUnicode(string) ? stringToArray(string) : void 0;
        var chr = strSymbols ? strSymbols[0] : string.charAt(0);
        var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
        return chr[methodName]() + trailing;
      };
    }
    function createCompounder(callback) {
      return function(string) {
        return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
      };
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    var camelCase2 = createCompounder(function(result, word, index) {
      word = word.toLowerCase();
      return result + (index ? capitalize(word) : word);
    });
    function capitalize(string) {
      return upperFirst2(toString(string).toLowerCase());
    }
    function deburr(string) {
      string = toString(string);
      return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
    }
    var upperFirst2 = createCaseFirst("toUpperCase");
    function words(string, pattern, guard) {
      string = toString(string);
      pattern = guard ? void 0 : pattern;
      if (pattern === void 0) {
        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
      }
      return string.match(pattern) || [];
    }
    module.exports = camelCase2;
  }
});

// node_modules/lodash.upperfirst/index.js
var require_lodash2 = __commonJS({
  "node_modules/lodash.upperfirst/index.js"(exports, module) {
    var INFINITY = 1 / 0;
    var symbolTag = "[object Symbol]";
    var rsAstralRange = "\\ud800-\\udfff";
    var rsComboMarksRange = "\\u0300-\\u036f\\ufe20-\\ufe23";
    var rsComboSymbolsRange = "\\u20d0-\\u20f0";
    var rsVarRange = "\\ufe0e\\ufe0f";
    var rsAstral = "[" + rsAstralRange + "]";
    var rsCombo = "[" + rsComboMarksRange + rsComboSymbolsRange + "]";
    var rsFitz = "\\ud83c[\\udffb-\\udfff]";
    var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
    var rsNonAstral = "[^" + rsAstralRange + "]";
    var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
    var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
    var rsZWJ = "\\u200d";
    var reOptMod = rsModifier + "?";
    var rsOptVar = "[" + rsVarRange + "]?";
    var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
    var rsSeq = rsOptVar + reOptMod + rsOptJoin;
    var rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
    var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
    var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + "]");
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    function asciiToArray(string) {
      return string.split("");
    }
    function hasUnicode(string) {
      return reHasUnicode.test(string);
    }
    function stringToArray(string) {
      return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
    }
    function unicodeToArray(string) {
      return string.match(reUnicode) || [];
    }
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    var Symbol2 = root.Symbol;
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function baseSlice(array, start, end) {
      var index = -1, length = array.length;
      if (start < 0) {
        start = -start > length ? 0 : length + start;
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : end - start >>> 0;
      start >>>= 0;
      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === void 0 ? length : end;
      return !start && end >= length ? array : baseSlice(array, start, end);
    }
    function createCaseFirst(methodName) {
      return function(string) {
        string = toString(string);
        var strSymbols = hasUnicode(string) ? stringToArray(string) : void 0;
        var chr = strSymbols ? strSymbols[0] : string.charAt(0);
        var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
        return chr[methodName]() + trailing;
      };
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    var upperFirst2 = createCaseFirst("toUpperCase");
    module.exports = upperFirst2;
  }
});

// node_modules/@ant-design/compatible/es/comment/index.js
var import_classnames = __toESM(require_classnames());
var React2 = __toESM(require_react());

// node_modules/@ant-design/compatible/es/comment/style/index.js
var React = __toESM(require_react());
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var genSharedButtonStyle = function genSharedButtonStyle2(token) {
  var componentCls = token.componentCls, colorBgContainer = token.colorBgContainer, fontSize = token.fontSize, fontSizeSM = token.fontSizeSM, padding = token.padding, paddingXS = token.paddingXS, marginSM = token.marginSM, marginXXS = token.marginXXS, controlHeight = token.controlHeight, lineHeightSM = token.lineHeightSM, colorText = token.colorText, colorTextSecondary = token.colorTextSecondary, colorTextTertiary = token.colorTextTertiary, motionDurationSlow = token.motionDurationSlow;
  return _defineProperty({}, componentCls, _objectSpread(_objectSpread({}, resetComponent(token)), {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
    position: "relative",
    backgroundColor: colorBgContainer
  }, "".concat(componentCls, "-inner"), {
    display: "flex",
    paddingBlock: padding
  }), "".concat(componentCls, "-avatar"), {
    position: "relative",
    flexShrink: 0,
    marginInlineEnd: marginSM,
    cursor: "pointer",
    img: {
      width: controlHeight,
      height: controlHeight,
      borderRadius: "50%"
    }
  }), "".concat(componentCls, "-content"), {
    position: "relative",
    flex: "auto",
    minWidth: 0,
    wordWrap: "break-word",
    "&-author": {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "flex-start",
      marginBottom: marginXXS,
      "& > a, & > span": {
        paddingInlineEnd: paddingXS,
        fontSize: fontSizeSM,
        lineHeight: lineHeightSM
      },
      "&-name": {
        color: colorTextSecondary,
        fontSize,
        transition: "color ".concat(motionDurationSlow),
        "> *": {
          color: colorTextSecondary,
          "&:hover": {
            color: colorTextSecondary
          }
        }
      },
      "&-time": {
        color: colorTextTertiary,
        whiteSpace: "nowrap",
        cursor: "auto"
      }
    },
    "&-detail p": {
      whiteSpace: "pre-wrap",
      marginBlock: 0
    }
  }), "".concat(componentCls, "-actions"), {
    marginTop: marginSM,
    marginBottom: 0,
    paddingInlineStart: 0,
    "> li": {
      display: "inline-block",
      color: colorTextSecondary,
      "> span": {
        marginInlineEnd: marginSM,
        color: colorTextSecondary,
        fontSize: fontSizeSM,
        cursor: "pointer",
        transition: "color ".concat(motionDurationSlow),
        userSelect: "none",
        "&:hover": {
          color: colorText
        }
      }
    }
  }), "".concat(componentCls, "-nested"), {
    marginInlineStart: 44
  })));
};
function useStyle(prefixCls) {
  var _antdTheme$useToken = theme_default.useToken(), theme = _antdTheme$useToken.theme, token = _antdTheme$useToken.token, hashId = _antdTheme$useToken.hashId;
  var _React$useContext = React.useContext(config_provider_default.ConfigContext), iconPrefixCls = _React$useContext.iconPrefixCls;
  return [useStyleRegister({
    theme,
    token,
    hashId,
    path: ["compatible", "Comment", prefixCls, iconPrefixCls]
  }, function() {
    var mergedToken = _objectSpread({
      componentCls: ".".concat(prefixCls)
    }, token);
    return [genSharedButtonStyle(mergedToken)];
  }), hashId];
}

// node_modules/@ant-design/compatible/es/comment/index.js
function _typeof2(o) {
  "@babel/helpers - typeof";
  return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof2(o);
}
var _excluded = ["actions", "author", "avatar", "children", "className", "content", "prefixCls", "datetime"];
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _defineProperty2(obj, key, value) {
  key = _toPropertyKey2(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey2(t) {
  var i = _toPrimitive2(t, "string");
  return "symbol" == _typeof2(i) ? i : String(i);
}
function _toPrimitive2(t, r) {
  if ("object" != _typeof2(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof2(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var ConfigContext2 = config_provider_default.ConfigContext;
var Comment = function Comment2(_ref) {
  var actions = _ref.actions, author = _ref.author, avatar = _ref.avatar, children = _ref.children, className = _ref.className, content = _ref.content, customizePrefixCls = _ref.prefixCls, datetime = _ref.datetime, otherProps = _objectWithoutProperties(_ref, _excluded);
  var _React$useContext = React2.useContext(ConfigContext2), getPrefixCls = _React$useContext.getPrefixCls, direction = _React$useContext.direction;
  var renderNested = function renderNested2(prefixCls2, nestedChildren) {
    return React2.createElement("div", {
      className: (0, import_classnames.default)("".concat(prefixCls2, "-nested"))
    }, nestedChildren);
  };
  var prefixCls = getPrefixCls("comment", customizePrefixCls);
  var _useStyle = useStyle(prefixCls), _useStyle2 = _slicedToArray(_useStyle, 2), wrapSSR = _useStyle2[0], hashId = _useStyle2[1];
  var avatarDom = avatar ? React2.createElement("div", {
    className: "".concat(prefixCls, "-avatar")
  }, typeof avatar === "string" ? React2.createElement("img", {
    src: avatar,
    alt: "comment-avatar"
  }) : avatar) : null;
  var actionDom = actions && actions.length ? React2.createElement("ul", {
    className: "".concat(prefixCls, "-actions")
  }, actions.map(function(action, index) {
    return React2.createElement("li", {
      key: "action-".concat(index)
    }, action);
  })) : null;
  var authorContent = (author || datetime) && React2.createElement("div", {
    className: "".concat(prefixCls, "-content-author")
  }, author && React2.createElement("span", {
    className: "".concat(prefixCls, "-content-author-name")
  }, author), datetime && React2.createElement("span", {
    className: "".concat(prefixCls, "-content-author-time")
  }, datetime));
  var contentDom = React2.createElement("div", {
    className: "".concat(prefixCls, "-content")
  }, authorContent, React2.createElement("div", {
    className: "".concat(prefixCls, "-content-detail")
  }, content), actionDom);
  var cls = (0, import_classnames.default)(prefixCls, _defineProperty2({}, "".concat(prefixCls, "-rtl"), direction === "rtl"), className, hashId);
  return wrapSSR(React2.createElement("div", _extends({}, otherProps, {
    className: cls
  }), React2.createElement("div", {
    className: "".concat(prefixCls, "-inner")
  }, avatarDom, contentDom), children ? renderNested(prefixCls, children) : null));
};
var comment_default = Comment;

// node_modules/@ant-design/compatible/es/form/Form.js
var React9 = __toESM(require_react());
var import_classnames3 = __toESM(require_classnames());

// node_modules/rc-form/es/createDOMForm.js
var import_extends5 = __toESM(require_extends());
var import_react_dom = __toESM(require_react_dom());
var import_dom_scroll_into_view = __toESM(require_lib());
var import_has = __toESM(require_has2());

// node_modules/rc-form/es/createBaseForm.js
var import_objectWithoutProperties = __toESM(require_objectWithoutProperties());
var import_defineProperty2 = __toESM(require_defineProperty());
var import_extends4 = __toESM(require_extends());
var import_toConsumableArray = __toESM(require_toConsumableArray());
var import_react3 = __toESM(require_react());
var import_create_react_class = __toESM(require_create_react_class());

// node_modules/rc-form/node_modules/rc-util/es/unsafeLifecyclesPolyfill.js
var import_react = __toESM(require_react());
var unsafeLifecyclesPolyfill = function unsafeLifecyclesPolyfill2(Component3) {
  var prototype = Component3.prototype;
  if (!prototype || !prototype.isReactComponent) {
    throw new Error("Can only polyfill class components");
  }
  if (typeof prototype.componentWillReceiveProps !== "function") {
    return Component3;
  }
  if (!import_react.default.Profiler) {
    return Component3;
  }
  prototype.UNSAFE_componentWillReceiveProps = prototype.componentWillReceiveProps;
  delete prototype.componentWillReceiveProps;
  return Component3;
};
var unsafeLifecyclesPolyfill_default = unsafeLifecyclesPolyfill;

// node_modules/rc-form/es/createBaseForm.js
var import_async_validator = __toESM(require_es());
var import_warning2 = __toESM(require_warning());
var import_get = __toESM(require_get());
var import_set2 = __toESM(require_set());
var import_eq = __toESM(require_eq());

// node_modules/rc-form/es/createFieldsStore.js
var import_defineProperty = __toESM(require_defineProperty());
var import_extends3 = __toESM(require_extends());
var import_classCallCheck2 = __toESM(require_classCallCheck());
var import_createClass = __toESM(require_createClass());
var import_set = __toESM(require_set());

// node_modules/rc-form/es/createFormField.js
var import_extends = __toESM(require_extends());
var import_classCallCheck = __toESM(require_classCallCheck());
var Field = function Field2(fields) {
  (0, import_classCallCheck.default)(this, Field2);
  (0, import_extends.default)(this, fields);
};
function isFormField(obj) {
  return obj instanceof Field;
}
function createFormField(field) {
  if (isFormField(field)) {
    return field;
  }
  return new Field(field);
}

// node_modules/rc-form/es/utils.js
var import_extends2 = __toESM(require_extends());
var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs());
var import_warning = __toESM(require_warning());
var import_react_is = __toESM(require_react_is());
function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "WrappedComponent";
}
function argumentContainer(Container, WrappedComponent) {
  Container.displayName = "Form(" + getDisplayName(WrappedComponent) + ")";
  Container.WrappedComponent = WrappedComponent;
  return (0, import_hoist_non_react_statics.default)(Container, WrappedComponent);
}
function identity(obj) {
  return obj;
}
function flattenArray(arr) {
  return Array.prototype.concat.apply([], arr);
}
function treeTraverse() {
  var path = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  var tree = arguments[1];
  var isLeafNode = arguments[2];
  var errorMessage = arguments[3];
  var callback = arguments[4];
  if (isLeafNode(path, tree)) {
    callback(path, tree);
  } else if (tree === void 0 || tree === null) {
  } else if (Array.isArray(tree)) {
    tree.forEach(function(subTree, index) {
      return treeTraverse(path + "[" + index + "]", subTree, isLeafNode, errorMessage, callback);
    });
  } else {
    if (typeof tree !== "object") {
      (0, import_warning.default)(false, errorMessage);
      return;
    }
    Object.keys(tree).forEach(function(subTreeKey) {
      var subTree = tree[subTreeKey];
      treeTraverse("" + path + (path ? "." : "") + subTreeKey, subTree, isLeafNode, errorMessage, callback);
    });
  }
}
function flattenFields(maybeNestedFields, isLeafNode, errorMessage) {
  var fields = {};
  treeTraverse(void 0, maybeNestedFields, isLeafNode, errorMessage, function(path, node) {
    fields[path] = node;
  });
  return fields;
}
function normalizeValidateRules(validate, rules, validateTrigger) {
  var validateRules = validate.map(function(item) {
    var newItem = (0, import_extends2.default)({}, item, {
      trigger: item.trigger || []
    });
    if (typeof newItem.trigger === "string") {
      newItem.trigger = [newItem.trigger];
    }
    return newItem;
  });
  if (rules) {
    validateRules.push({
      trigger: validateTrigger ? [].concat(validateTrigger) : [],
      rules
    });
  }
  return validateRules;
}
function getValidateTriggers(validateRules) {
  return validateRules.filter(function(item) {
    return !!item.rules && item.rules.length;
  }).map(function(item) {
    return item.trigger;
  }).reduce(function(pre, curr) {
    return pre.concat(curr);
  }, []);
}
function getValueFromEvent(e) {
  if (!e || !e.target) {
    return e;
  }
  var target = e.target;
  return target.type === "checkbox" ? target.checked : target.value;
}
function getErrorStrs(errors) {
  if (errors) {
    return errors.map(function(e) {
      if (e && e.message) {
        return e.message;
      }
      return e;
    });
  }
  return errors;
}
function getParams(ns, opt, cb) {
  var names = ns;
  var options = opt;
  var callback = cb;
  if (cb === void 0) {
    if (typeof names === "function") {
      callback = names;
      options = {};
      names = void 0;
    } else if (Array.isArray(names)) {
      if (typeof options === "function") {
        callback = options;
        options = {};
      } else {
        options = options || {};
      }
    } else {
      callback = options;
      options = names || {};
      names = void 0;
    }
  }
  return {
    names,
    options,
    callback
  };
}
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}
function hasRules(validate) {
  if (validate) {
    return validate.some(function(item) {
      return item.rules && item.rules.length;
    });
  }
  return false;
}
function startsWith(str, prefix) {
  return str.lastIndexOf(prefix, 0) === 0;
}
function supportRef(nodeOrComponent) {
  var type = (0, import_react_is.isMemo)(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type;
  if (typeof type === "function" && !(type.prototype && type.prototype.render)) {
    return false;
  }
  if (typeof nodeOrComponent === "function" && !(nodeOrComponent.prototype && nodeOrComponent.prototype.render)) {
    return false;
  }
  return true;
}

// node_modules/rc-form/es/createFieldsStore.js
function partOf(a, b) {
  return b.indexOf(a) === 0 && [".", "["].indexOf(b[a.length]) !== -1;
}
function internalFlattenFields(fields) {
  return flattenFields(fields, function(_, node) {
    return isFormField(node);
  }, "You must wrap field data with `createFormField`.");
}
var FieldsStore = function() {
  function FieldsStore2(fields) {
    (0, import_classCallCheck2.default)(this, FieldsStore2);
    _initialiseProps.call(this);
    this.fields = internalFlattenFields(fields);
    this.fieldsMeta = {};
  }
  (0, import_createClass.default)(FieldsStore2, [{
    key: "updateFields",
    value: function updateFields(fields) {
      this.fields = internalFlattenFields(fields);
    }
  }, {
    key: "flattenRegisteredFields",
    value: function flattenRegisteredFields(fields) {
      var validFieldsName = this.getAllFieldsName();
      return flattenFields(fields, function(path) {
        return validFieldsName.indexOf(path) >= 0;
      }, "You cannot set a form field before rendering a field associated with the value.");
    }
  }, {
    key: "setFields",
    value: function setFields(fields) {
      var _this = this;
      var fieldsMeta = this.fieldsMeta;
      var nowFields = (0, import_extends3.default)({}, this.fields, fields);
      var nowValues = {};
      Object.keys(fieldsMeta).forEach(function(f) {
        nowValues[f] = _this.getValueFromFields(f, nowFields);
      });
      Object.keys(nowValues).forEach(function(f) {
        var value = nowValues[f];
        var fieldMeta = _this.getFieldMeta(f);
        if (fieldMeta && fieldMeta.normalize) {
          var nowValue = fieldMeta.normalize(value, _this.getValueFromFields(f, _this.fields), nowValues);
          if (nowValue !== value) {
            nowFields[f] = (0, import_extends3.default)({}, nowFields[f], {
              value: nowValue
            });
          }
        }
      });
      this.fields = nowFields;
    }
  }, {
    key: "resetFields",
    value: function resetFields(ns) {
      var fields = this.fields;
      var names = ns ? this.getValidFieldsFullName(ns) : this.getAllFieldsName();
      return names.reduce(function(acc, name) {
        var field = fields[name];
        if (field && "value" in field) {
          acc[name] = {};
        }
        return acc;
      }, {});
    }
  }, {
    key: "setFieldMeta",
    value: function setFieldMeta(name, meta) {
      this.fieldsMeta[name] = meta;
    }
  }, {
    key: "setFieldsAsDirty",
    value: function setFieldsAsDirty() {
      var _this2 = this;
      Object.keys(this.fields).forEach(function(name) {
        var field = _this2.fields[name];
        var fieldMeta = _this2.fieldsMeta[name];
        if (field && fieldMeta && hasRules(fieldMeta.validate)) {
          _this2.fields[name] = (0, import_extends3.default)({}, field, {
            dirty: true
          });
        }
      });
    }
  }, {
    key: "getFieldMeta",
    value: function getFieldMeta(name) {
      this.fieldsMeta[name] = this.fieldsMeta[name] || {};
      return this.fieldsMeta[name];
    }
  }, {
    key: "getValueFromFields",
    value: function getValueFromFields(name, fields) {
      var field = fields[name];
      if (field && "value" in field) {
        return field.value;
      }
      var fieldMeta = this.getFieldMeta(name);
      return fieldMeta && fieldMeta.initialValue;
    }
  }, {
    key: "getValidFieldsName",
    value: function getValidFieldsName() {
      var _this3 = this;
      var fieldsMeta = this.fieldsMeta;
      return fieldsMeta ? Object.keys(fieldsMeta).filter(function(name) {
        return !_this3.getFieldMeta(name).hidden;
      }) : [];
    }
  }, {
    key: "getAllFieldsName",
    value: function getAllFieldsName() {
      var fieldsMeta = this.fieldsMeta;
      return fieldsMeta ? Object.keys(fieldsMeta) : [];
    }
  }, {
    key: "getValidFieldsFullName",
    value: function getValidFieldsFullName(maybePartialName) {
      var maybePartialNames = Array.isArray(maybePartialName) ? maybePartialName : [maybePartialName];
      return this.getValidFieldsName().filter(function(fullName) {
        return maybePartialNames.some(function(partialName) {
          return fullName === partialName || startsWith(fullName, partialName) && [".", "["].indexOf(fullName[partialName.length]) >= 0;
        });
      });
    }
  }, {
    key: "getFieldValuePropValue",
    value: function getFieldValuePropValue(fieldMeta) {
      var name = fieldMeta.name, getValueProps = fieldMeta.getValueProps, valuePropName = fieldMeta.valuePropName;
      var field = this.getField(name);
      var fieldValue = "value" in field ? field.value : fieldMeta.initialValue;
      if (getValueProps) {
        return getValueProps(fieldValue);
      }
      return (0, import_defineProperty.default)({}, valuePropName, fieldValue);
    }
  }, {
    key: "getField",
    value: function getField(name) {
      return (0, import_extends3.default)({}, this.fields[name], {
        name
      });
    }
  }, {
    key: "getNotCollectedFields",
    value: function getNotCollectedFields() {
      var _this4 = this;
      var fieldsName = this.getValidFieldsName();
      return fieldsName.filter(function(name) {
        return !_this4.fields[name];
      }).map(function(name) {
        return {
          name,
          dirty: false,
          value: _this4.getFieldMeta(name).initialValue
        };
      }).reduce(function(acc, field) {
        return (0, import_set.default)(acc, field.name, createFormField(field));
      }, {});
    }
  }, {
    key: "getNestedAllFields",
    value: function getNestedAllFields() {
      var _this5 = this;
      return Object.keys(this.fields).reduce(function(acc, name) {
        return (0, import_set.default)(acc, name, createFormField(_this5.fields[name]));
      }, this.getNotCollectedFields());
    }
  }, {
    key: "getFieldMember",
    value: function getFieldMember(name, member) {
      return this.getField(name)[member];
    }
  }, {
    key: "getNestedFields",
    value: function getNestedFields(names, getter) {
      var fields = names || this.getValidFieldsName();
      return fields.reduce(function(acc, f) {
        return (0, import_set.default)(acc, f, getter(f));
      }, {});
    }
  }, {
    key: "getNestedField",
    value: function getNestedField(name, getter) {
      var fullNames = this.getValidFieldsFullName(name);
      if (fullNames.length === 0 || // Not registered
      fullNames.length === 1 && fullNames[0] === name) {
        return getter(name);
      }
      var isArrayValue = fullNames[0][name.length] === "[";
      var suffixNameStartIndex = isArrayValue ? name.length : name.length + 1;
      return fullNames.reduce(function(acc, fullName) {
        return (0, import_set.default)(acc, fullName.slice(suffixNameStartIndex), getter(fullName));
      }, isArrayValue ? [] : {});
    }
  }, {
    key: "isValidNestedFieldName",
    // @private
    // BG: `a` and `a.b` cannot be use in the same form
    value: function isValidNestedFieldName(name) {
      var names = this.getAllFieldsName();
      return names.every(function(n) {
        return !partOf(n, name) && !partOf(name, n);
      });
    }
  }, {
    key: "clearField",
    value: function clearField(name) {
      delete this.fields[name];
      delete this.fieldsMeta[name];
    }
  }]);
  return FieldsStore2;
}();
var _initialiseProps = function _initialiseProps2() {
  var _this6 = this;
  this.setFieldsInitialValue = function(initialValues) {
    var flattenedInitialValues = _this6.flattenRegisteredFields(initialValues);
    var fieldsMeta = _this6.fieldsMeta;
    Object.keys(flattenedInitialValues).forEach(function(name) {
      if (fieldsMeta[name]) {
        _this6.setFieldMeta(name, (0, import_extends3.default)({}, _this6.getFieldMeta(name), {
          initialValue: flattenedInitialValues[name]
        }));
      }
    });
  };
  this.getAllValues = function() {
    var fieldsMeta = _this6.fieldsMeta, fields = _this6.fields;
    return Object.keys(fieldsMeta).reduce(function(acc, name) {
      return (0, import_set.default)(acc, name, _this6.getValueFromFields(name, fields));
    }, {});
  };
  this.getFieldsValue = function(names) {
    return _this6.getNestedFields(names, _this6.getFieldValue);
  };
  this.getFieldValue = function(name) {
    var fields = _this6.fields;
    return _this6.getNestedField(name, function(fullName) {
      return _this6.getValueFromFields(fullName, fields);
    });
  };
  this.getFieldsError = function(names) {
    return _this6.getNestedFields(names, _this6.getFieldError);
  };
  this.getFieldError = function(name) {
    return _this6.getNestedField(name, function(fullName) {
      return getErrorStrs(_this6.getFieldMember(fullName, "errors"));
    });
  };
  this.isFieldValidating = function(name) {
    return _this6.getFieldMember(name, "validating");
  };
  this.isFieldsValidating = function(ns) {
    var names = ns || _this6.getValidFieldsName();
    return names.some(function(n) {
      return _this6.isFieldValidating(n);
    });
  };
  this.isFieldTouched = function(name) {
    return _this6.getFieldMember(name, "touched");
  };
  this.isFieldsTouched = function(ns) {
    var names = ns || _this6.getValidFieldsName();
    return names.some(function(n) {
      return _this6.isFieldTouched(n);
    });
  };
};
function createFieldsStore(fields) {
  return new FieldsStore(fields);
}

// node_modules/rc-form/es/FieldElemWrapper.js
var import_classCallCheck3 = __toESM(require_classCallCheck());
var import_createClass2 = __toESM(require_createClass());
var import_possibleConstructorReturn = __toESM(require_possibleConstructorReturn());
var import_inherits = __toESM(require_inherits());
var import_react2 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
var FieldElemWrapper = function(_React$Component) {
  (0, import_inherits.default)(FieldElemWrapper2, _React$Component);
  function FieldElemWrapper2() {
    (0, import_classCallCheck3.default)(this, FieldElemWrapper2);
    return (0, import_possibleConstructorReturn.default)(this, (FieldElemWrapper2.__proto__ || Object.getPrototypeOf(FieldElemWrapper2)).apply(this, arguments));
  }
  (0, import_createClass2.default)(FieldElemWrapper2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props, name = _props.name, form = _props.form;
      form.domFields[name] = true;
      form.recoverClearedField(name);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _props2 = this.props, name = _props2.name, form = _props2.form;
      var fieldMeta = form.fieldsStore.getFieldMeta(name);
      if (!fieldMeta.preserve) {
        form.clearedFieldMetaCache[name] = {
          field: form.fieldsStore.getField(name),
          meta: fieldMeta
        };
        form.clearField(name);
      }
      delete form.domFields[name];
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return FieldElemWrapper2;
}(import_react2.default.Component);
var FieldElemWrapper_default = FieldElemWrapper;
FieldElemWrapper.propTypes = {
  name: import_prop_types.default.string,
  form: import_prop_types.default.shape({
    domFields: import_prop_types.default.objectOf(import_prop_types.default.bool),
    recoverClearedField: import_prop_types.default.func,
    fieldsStore: import_prop_types.default.shape({
      getFieldMeta: import_prop_types.default.func,
      getField: import_prop_types.default.func
    }),
    clearedFieldMetaCache: import_prop_types.default.objectOf(import_prop_types.default.shape({
      field: import_prop_types.default.object,
      meta: import_prop_types.default.object
    })),
    clearField: import_prop_types.default.func
  }),
  children: import_prop_types.default.node
};

// node_modules/rc-form/es/createBaseForm.js
var DEFAULT_TRIGGER = "onChange";
function createBaseForm() {
  var option = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var mixins = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  var validateMessages = option.validateMessages, onFieldsChange = option.onFieldsChange, onValuesChange = option.onValuesChange, _option$mapProps = option.mapProps, mapProps = _option$mapProps === void 0 ? identity : _option$mapProps, mapPropsToFields = option.mapPropsToFields, fieldNameProp = option.fieldNameProp, fieldMetaProp = option.fieldMetaProp, fieldDataProp = option.fieldDataProp, _option$formPropName = option.formPropName, formPropName = _option$formPropName === void 0 ? "form" : _option$formPropName, formName = option.name, withRef = option.withRef;
  return function decorate(WrappedComponent) {
    var Form2 = (0, import_create_react_class.default)({
      displayName: "Form",
      mixins,
      getInitialState: function getInitialState() {
        var _this = this;
        var fields = mapPropsToFields && mapPropsToFields(this.props);
        this.fieldsStore = createFieldsStore(fields || {});
        this.instances = {};
        this.cachedBind = {};
        this.clearedFieldMetaCache = {};
        this.renderFields = {};
        this.domFields = {};
        ["getFieldsValue", "getFieldValue", "setFieldsInitialValue", "getFieldsError", "getFieldError", "isFieldValidating", "isFieldsValidating", "isFieldsTouched", "isFieldTouched"].forEach(function(key) {
          _this[key] = function() {
            var _fieldsStore;
            if (true) {
              (0, import_warning2.default)(false, "you should not use `ref` on enhanced form, please use `wrappedComponentRef`. See: https://github.com/react-component/form#note-use-wrappedcomponentref-instead-of-withref-after-rc-form140");
            }
            return (_fieldsStore = _this.fieldsStore)[key].apply(_fieldsStore, arguments);
          };
        });
        return {
          submitting: false
        };
      },
      componentDidMount: function componentDidMount() {
        this.cleanUpUselessFields();
      },
      componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        if (mapPropsToFields) {
          this.fieldsStore.updateFields(mapPropsToFields(nextProps));
        }
      },
      componentDidUpdate: function componentDidUpdate() {
        this.cleanUpUselessFields();
      },
      onCollectCommon: function onCollectCommon(name, action, args) {
        var fieldMeta = this.fieldsStore.getFieldMeta(name);
        if (fieldMeta[action]) {
          fieldMeta[action].apply(fieldMeta, (0, import_toConsumableArray.default)(args));
        } else if (fieldMeta.originalProps && fieldMeta.originalProps[action]) {
          var _fieldMeta$originalPr;
          (_fieldMeta$originalPr = fieldMeta.originalProps)[action].apply(_fieldMeta$originalPr, (0, import_toConsumableArray.default)(args));
        }
        var value = fieldMeta.getValueFromEvent ? fieldMeta.getValueFromEvent.apply(fieldMeta, (0, import_toConsumableArray.default)(args)) : getValueFromEvent.apply(void 0, (0, import_toConsumableArray.default)(args));
        if (onValuesChange && value !== this.fieldsStore.getFieldValue(name)) {
          var valuesAll = this.fieldsStore.getAllValues();
          var valuesAllSet = {};
          valuesAll[name] = value;
          Object.keys(valuesAll).forEach(function(key) {
            return (0, import_set2.default)(valuesAllSet, key, valuesAll[key]);
          });
          onValuesChange((0, import_extends4.default)((0, import_defineProperty2.default)({}, formPropName, this.getForm()), this.props), (0, import_set2.default)({}, name, value), valuesAllSet);
        }
        var field = this.fieldsStore.getField(name);
        return { name, field: (0, import_extends4.default)({}, field, { value, touched: true }), fieldMeta };
      },
      onCollect: function onCollect(name_, action) {
        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }
        var _onCollectCommon = this.onCollectCommon(name_, action, args), name = _onCollectCommon.name, field = _onCollectCommon.field, fieldMeta = _onCollectCommon.fieldMeta;
        var validate = fieldMeta.validate;
        this.fieldsStore.setFieldsAsDirty();
        var newField = (0, import_extends4.default)({}, field, {
          dirty: hasRules(validate)
        });
        this.setFields((0, import_defineProperty2.default)({}, name, newField));
      },
      onCollectValidate: function onCollectValidate(name_, action) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }
        var _onCollectCommon2 = this.onCollectCommon(name_, action, args), field = _onCollectCommon2.field, fieldMeta = _onCollectCommon2.fieldMeta;
        var newField = (0, import_extends4.default)({}, field, {
          dirty: true
        });
        this.fieldsStore.setFieldsAsDirty();
        this.validateFieldsInternal([newField], {
          action,
          options: {
            firstFields: !!fieldMeta.validateFirst
          }
        });
      },
      getCacheBind: function getCacheBind(name, action, fn) {
        if (!this.cachedBind[name]) {
          this.cachedBind[name] = {};
        }
        var cache = this.cachedBind[name];
        if (!cache[action] || cache[action].oriFn !== fn) {
          cache[action] = {
            fn: fn.bind(this, name, action),
            oriFn: fn
          };
        }
        return cache[action].fn;
      },
      getFieldDecorator: function getFieldDecorator(name, fieldOption) {
        var _this2 = this;
        var props = this.getFieldProps(name, fieldOption);
        return function(fieldElem) {
          _this2.renderFields[name] = true;
          var fieldMeta = _this2.fieldsStore.getFieldMeta(name);
          var originalProps = fieldElem.props;
          if (true) {
            var valuePropName = fieldMeta.valuePropName;
            (0, import_warning2.default)(!(valuePropName in originalProps), "`getFieldDecorator` will override `" + valuePropName + "`, " + ("so please don't set `" + valuePropName + "` directly ") + "and use `setFieldsValue` to set it.");
            var defaultValuePropName = "default" + valuePropName[0].toUpperCase() + valuePropName.slice(1);
            (0, import_warning2.default)(!(defaultValuePropName in originalProps), "`" + defaultValuePropName + "` is invalid " + ("for `getFieldDecorator` will set `" + valuePropName + "`,") + " please use `option.initialValue` instead.");
          }
          fieldMeta.originalProps = originalProps;
          fieldMeta.ref = fieldElem.ref;
          var decoratedFieldElem = import_react3.default.cloneElement(fieldElem, (0, import_extends4.default)({}, props, _this2.fieldsStore.getFieldValuePropValue(fieldMeta)));
          return supportRef(fieldElem) ? decoratedFieldElem : import_react3.default.createElement(
            FieldElemWrapper_default,
            { name, form: _this2 },
            decoratedFieldElem
          );
        };
      },
      getFieldProps: function getFieldProps(name) {
        var _this3 = this;
        var usersFieldOption = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (!name) {
          throw new Error("Must call `getFieldProps` with valid name string!");
        }
        if (true) {
          (0, import_warning2.default)(this.fieldsStore.isValidNestedFieldName(name), "One field name cannot be part of another, e.g. `a` and `a.b`. Check field: " + name);
          (0, import_warning2.default)(!("exclusive" in usersFieldOption), "`option.exclusive` of `getFieldProps`|`getFieldDecorator` had been remove.");
        }
        delete this.clearedFieldMetaCache[name];
        var fieldOption = (0, import_extends4.default)({
          name,
          trigger: DEFAULT_TRIGGER,
          valuePropName: "value",
          validate: []
        }, usersFieldOption);
        var rules = fieldOption.rules, trigger = fieldOption.trigger, _fieldOption$validate = fieldOption.validateTrigger, validateTrigger = _fieldOption$validate === void 0 ? trigger : _fieldOption$validate, validate = fieldOption.validate;
        var fieldMeta = this.fieldsStore.getFieldMeta(name);
        if ("initialValue" in fieldOption) {
          fieldMeta.initialValue = fieldOption.initialValue;
        }
        var inputProps = (0, import_extends4.default)({}, this.fieldsStore.getFieldValuePropValue(fieldOption), {
          ref: this.getCacheBind(name, name + "__ref", this.saveRef)
        });
        if (fieldNameProp) {
          inputProps[fieldNameProp] = formName ? formName + "_" + name : name;
        }
        var validateRules = normalizeValidateRules(validate, rules, validateTrigger);
        var validateTriggers = getValidateTriggers(validateRules);
        validateTriggers.forEach(function(action) {
          if (inputProps[action]) return;
          inputProps[action] = _this3.getCacheBind(name, action, _this3.onCollectValidate);
        });
        if (trigger && validateTriggers.indexOf(trigger) === -1) {
          inputProps[trigger] = this.getCacheBind(name, trigger, this.onCollect);
        }
        var meta = (0, import_extends4.default)({}, fieldMeta, fieldOption, {
          validate: validateRules
        });
        this.fieldsStore.setFieldMeta(name, meta);
        if (fieldMetaProp) {
          inputProps[fieldMetaProp] = meta;
        }
        if (fieldDataProp) {
          inputProps[fieldDataProp] = this.fieldsStore.getField(name);
        }
        this.renderFields[name] = true;
        return inputProps;
      },
      getFieldInstance: function getFieldInstance(name) {
        return this.instances[name];
      },
      getRules: function getRules(fieldMeta, action) {
        var actionRules = fieldMeta.validate.filter(function(item) {
          return !action || item.trigger.indexOf(action) >= 0;
        }).map(function(item) {
          return item.rules;
        });
        return flattenArray(actionRules);
      },
      setFields: function setFields(maybeNestedFields, callback) {
        var _this4 = this;
        var fields = this.fieldsStore.flattenRegisteredFields(maybeNestedFields);
        this.fieldsStore.setFields(fields);
        if (onFieldsChange) {
          var changedFields = Object.keys(fields).reduce(function(acc, name) {
            return (0, import_set2.default)(acc, name, _this4.fieldsStore.getField(name));
          }, {});
          onFieldsChange((0, import_extends4.default)((0, import_defineProperty2.default)({}, formPropName, this.getForm()), this.props), changedFields, this.fieldsStore.getNestedAllFields());
        }
        this.forceUpdate(callback);
      },
      setFieldsValue: function setFieldsValue(changedValues, callback) {
        var fieldsMeta = this.fieldsStore.fieldsMeta;
        var values = this.fieldsStore.flattenRegisteredFields(changedValues);
        var newFields = Object.keys(values).reduce(function(acc, name) {
          var isRegistered = fieldsMeta[name];
          if (true) {
            (0, import_warning2.default)(isRegistered, "Cannot use `setFieldsValue` until you use `getFieldDecorator` or `getFieldProps` to register it.");
          }
          if (isRegistered) {
            var value = values[name];
            acc[name] = {
              value
            };
          }
          return acc;
        }, {});
        this.setFields(newFields, callback);
        if (onValuesChange) {
          var allValues = this.fieldsStore.getAllValues();
          onValuesChange((0, import_extends4.default)((0, import_defineProperty2.default)({}, formPropName, this.getForm()), this.props), changedValues, allValues);
        }
      },
      saveRef: function saveRef(name, _, component) {
        if (!component) {
          var _fieldMeta = this.fieldsStore.getFieldMeta(name);
          if (!_fieldMeta.preserve) {
            this.clearedFieldMetaCache[name] = {
              field: this.fieldsStore.getField(name),
              meta: _fieldMeta
            };
            this.clearField(name);
          }
          delete this.domFields[name];
          return;
        }
        this.domFields[name] = true;
        this.recoverClearedField(name);
        var fieldMeta = this.fieldsStore.getFieldMeta(name);
        if (fieldMeta) {
          var ref = fieldMeta.ref;
          if (ref) {
            if (typeof ref === "string") {
              throw new Error("can not set ref string for " + name);
            } else if (typeof ref === "function") {
              ref(component);
            } else if (Object.prototype.hasOwnProperty.call(ref, "current")) {
              ref.current = component;
            }
          }
        }
        this.instances[name] = component;
      },
      cleanUpUselessFields: function cleanUpUselessFields() {
        var _this5 = this;
        var fieldList = this.fieldsStore.getAllFieldsName();
        var removedList = fieldList.filter(function(field) {
          var fieldMeta = _this5.fieldsStore.getFieldMeta(field);
          return !_this5.renderFields[field] && !_this5.domFields[field] && !fieldMeta.preserve;
        });
        if (removedList.length) {
          removedList.forEach(this.clearField);
        }
        this.renderFields = {};
      },
      clearField: function clearField(name) {
        this.fieldsStore.clearField(name);
        delete this.instances[name];
        delete this.cachedBind[name];
      },
      resetFields: function resetFields(ns) {
        var _this6 = this;
        var newFields = this.fieldsStore.resetFields(ns);
        if (Object.keys(newFields).length > 0) {
          this.setFields(newFields);
        }
        if (ns) {
          var names = Array.isArray(ns) ? ns : [ns];
          names.forEach(function(name) {
            return delete _this6.clearedFieldMetaCache[name];
          });
        } else {
          this.clearedFieldMetaCache = {};
        }
      },
      recoverClearedField: function recoverClearedField(name) {
        if (this.clearedFieldMetaCache[name]) {
          this.fieldsStore.setFields((0, import_defineProperty2.default)({}, name, this.clearedFieldMetaCache[name].field));
          this.fieldsStore.setFieldMeta(name, this.clearedFieldMetaCache[name].meta);
          delete this.clearedFieldMetaCache[name];
        }
      },
      validateFieldsInternal: function validateFieldsInternal(fields, _ref, callback) {
        var _this7 = this;
        var fieldNames = _ref.fieldNames, action = _ref.action, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options;
        var allRules = {};
        var allValues = {};
        var allFields = {};
        var alreadyErrors = {};
        fields.forEach(function(field) {
          var name = field.name;
          if (options.force !== true && field.dirty === false) {
            if (field.errors) {
              (0, import_set2.default)(alreadyErrors, name, { errors: field.errors });
            }
            return;
          }
          var fieldMeta = _this7.fieldsStore.getFieldMeta(name);
          var newField = (0, import_extends4.default)({}, field);
          newField.errors = void 0;
          newField.validating = true;
          newField.dirty = true;
          allRules[name] = _this7.getRules(fieldMeta, action);
          allValues[name] = newField.value;
          allFields[name] = newField;
        });
        this.setFields(allFields);
        Object.keys(allValues).forEach(function(f) {
          allValues[f] = _this7.fieldsStore.getFieldValue(f);
        });
        if (callback && isEmptyObject(allFields)) {
          callback(isEmptyObject(alreadyErrors) ? null : alreadyErrors, this.fieldsStore.getFieldsValue(fieldNames));
          return;
        }
        var validator = new import_async_validator.default(allRules);
        if (validateMessages) {
          validator.messages(validateMessages);
        }
        validator.validate(allValues, options, function(errors) {
          var errorsGroup = (0, import_extends4.default)({}, alreadyErrors);
          if (errors && errors.length) {
            errors.forEach(function(e) {
              var errorFieldName = e.field;
              var fieldName = errorFieldName;
              Object.keys(allRules).some(function(ruleFieldName) {
                var rules = allRules[ruleFieldName] || [];
                if (ruleFieldName === errorFieldName) {
                  fieldName = ruleFieldName;
                  return true;
                }
                if (rules.every(function(_ref2) {
                  var type = _ref2.type;
                  return type !== "array";
                }) || errorFieldName.indexOf(ruleFieldName + ".") !== 0) {
                  return false;
                }
                var restPath = errorFieldName.slice(ruleFieldName.length + 1);
                if (/^\d+$/.test(restPath)) {
                  fieldName = ruleFieldName;
                  return true;
                }
                return false;
              });
              var field = (0, import_get.default)(errorsGroup, fieldName);
              if (typeof field !== "object" || Array.isArray(field)) {
                (0, import_set2.default)(errorsGroup, fieldName, { errors: [] });
              }
              var fieldErrors = (0, import_get.default)(errorsGroup, fieldName.concat(".errors"));
              fieldErrors.push(e);
            });
          }
          var expired = [];
          var nowAllFields = {};
          Object.keys(allRules).forEach(function(name) {
            var fieldErrors = (0, import_get.default)(errorsGroup, name);
            var nowField = _this7.fieldsStore.getField(name);
            if (!(0, import_eq.default)(nowField.value, allValues[name])) {
              expired.push({
                name
              });
            } else {
              nowField.errors = fieldErrors && fieldErrors.errors;
              nowField.value = allValues[name];
              nowField.validating = false;
              nowField.dirty = false;
              nowAllFields[name] = nowField;
            }
          });
          _this7.setFields(nowAllFields);
          if (callback) {
            if (expired.length) {
              expired.forEach(function(_ref3) {
                var name = _ref3.name;
                var fieldErrors = [{
                  message: name + " need to revalidate",
                  field: name
                }];
                (0, import_set2.default)(errorsGroup, name, {
                  expired: true,
                  errors: fieldErrors
                });
              });
            }
            callback(isEmptyObject(errorsGroup) ? null : errorsGroup, _this7.fieldsStore.getFieldsValue(fieldNames));
          }
        });
      },
      validateFields: function validateFields(ns, opt, cb) {
        var _this8 = this;
        var pending = new Promise(function(resolve, reject) {
          var _getParams = getParams(ns, opt, cb), names = _getParams.names, options = _getParams.options;
          var _getParams2 = getParams(ns, opt, cb), callback = _getParams2.callback;
          if (!callback || typeof callback === "function") {
            var oldCb = callback;
            callback = function callback2(errors, values) {
              if (oldCb) {
                oldCb(errors, values);
              }
              if (errors) {
                reject({ errors, values });
              } else {
                resolve(values);
              }
            };
          }
          var fieldNames = names ? _this8.fieldsStore.getValidFieldsFullName(names) : _this8.fieldsStore.getValidFieldsName();
          var fields = fieldNames.filter(function(name) {
            var fieldMeta = _this8.fieldsStore.getFieldMeta(name);
            return hasRules(fieldMeta.validate);
          }).map(function(name) {
            var field = _this8.fieldsStore.getField(name);
            field.value = _this8.fieldsStore.getFieldValue(name);
            return field;
          });
          if (!fields.length) {
            callback(null, _this8.fieldsStore.getFieldsValue(fieldNames));
            return;
          }
          if (!("firstFields" in options)) {
            options.firstFields = fieldNames.filter(function(name) {
              var fieldMeta = _this8.fieldsStore.getFieldMeta(name);
              return !!fieldMeta.validateFirst;
            });
          }
          _this8.validateFieldsInternal(fields, {
            fieldNames,
            options
          }, callback);
        });
        pending["catch"](function(e) {
          if (console.error && true) {
            console.error(e);
          }
          return e;
        });
        return pending;
      },
      isSubmitting: function isSubmitting() {
        if (true) {
          (0, import_warning2.default)(false, "`isSubmitting` is deprecated. Actually, it's more convenient to handle submitting status by yourself.");
        }
        return this.state.submitting;
      },
      submit: function submit(callback) {
        var _this9 = this;
        if (true) {
          (0, import_warning2.default)(false, "`submit` is deprecated. Actually, it's more convenient to handle submitting status by yourself.");
        }
        var fn = function fn2() {
          _this9.setState({
            submitting: false
          });
        };
        this.setState({
          submitting: true
        });
        callback(fn);
      },
      render: function render() {
        var _props = this.props, wrappedComponentRef = _props.wrappedComponentRef, restProps = (0, import_objectWithoutProperties.default)(_props, ["wrappedComponentRef"]);
        var formProps = (0, import_defineProperty2.default)({}, formPropName, this.getForm());
        if (withRef) {
          if (true) {
            (0, import_warning2.default)(false, "`withRef` is deprecated, please use `wrappedComponentRef` instead. See: https://github.com/react-component/form#note-use-wrappedcomponentref-instead-of-withref-after-rc-form140");
          }
          formProps.ref = "wrappedComponent";
        } else if (wrappedComponentRef) {
          formProps.ref = wrappedComponentRef;
        }
        var props = mapProps.call(this, (0, import_extends4.default)({}, formProps, restProps));
        return import_react3.default.createElement(WrappedComponent, props);
      }
    });
    return argumentContainer(unsafeLifecyclesPolyfill_default(Form2), WrappedComponent);
  };
}
var createBaseForm_default = createBaseForm;

// node_modules/rc-form/es/createForm.js
var mixin = {
  getForm: function getForm() {
    return {
      getFieldsValue: this.fieldsStore.getFieldsValue,
      getFieldValue: this.fieldsStore.getFieldValue,
      getFieldInstance: this.getFieldInstance,
      setFieldsValue: this.setFieldsValue,
      setFields: this.setFields,
      setFieldsInitialValue: this.fieldsStore.setFieldsInitialValue,
      getFieldDecorator: this.getFieldDecorator,
      getFieldProps: this.getFieldProps,
      getFieldsError: this.fieldsStore.getFieldsError,
      getFieldError: this.fieldsStore.getFieldError,
      isFieldValidating: this.fieldsStore.isFieldValidating,
      isFieldsValidating: this.fieldsStore.isFieldsValidating,
      isFieldsTouched: this.fieldsStore.isFieldsTouched,
      isFieldTouched: this.fieldsStore.isFieldTouched,
      isSubmitting: this.isSubmitting,
      submit: this.submit,
      validateFields: this.validateFields,
      resetFields: this.resetFields
    };
  }
};

// node_modules/rc-form/es/createDOMForm.js
function computedStyle(el, prop) {
  var getComputedStyle2 = window.getComputedStyle;
  var style = (
    // If we have getComputedStyle
    getComputedStyle2 ? (
      // Query it
      // TODO: From CSS-Query notes, we might need (node, null) for FF
      getComputedStyle2(el)
    ) : (
      // Otherwise, we are in IE and use currentStyle
      el.currentStyle
    )
  );
  if (style) {
    return style[
      // Switch to camelCase for CSSOM
      // DEV: Grabbed from jQuery
      // https://github.com/jquery/jquery/blob/1.9-stable/src/css.js#L191-L194
      // https://github.com/jquery/jquery/blob/1.9-stable/src/core.js#L593-L597
      prop.replace(/-(\w)/gi, function(word, letter) {
        return letter.toUpperCase();
      })
    ];
  }
  return void 0;
}
function getScrollableContainer(n) {
  var node = n;
  var nodeName = void 0;
  while ((nodeName = node.nodeName.toLowerCase()) !== "body") {
    var overflowY = computedStyle(node, "overflowY");
    if (node !== n && (overflowY === "auto" || overflowY === "scroll") && node.scrollHeight > node.clientHeight) {
      return node;
    }
    node = node.parentNode;
  }
  return nodeName === "body" ? node.ownerDocument : node;
}
var mixin2 = {
  getForm: function getForm2() {
    return (0, import_extends5.default)({}, mixin.getForm.call(this), {
      validateFieldsAndScroll: this.validateFieldsAndScroll
    });
  },
  validateFieldsAndScroll: function validateFieldsAndScroll(ns, opt, cb) {
    var _this = this;
    var _getParams = getParams(ns, opt, cb), names = _getParams.names, callback = _getParams.callback, options = _getParams.options;
    var newCb = function newCb2(error, values) {
      if (error) {
        var validNames = _this.fieldsStore.getValidFieldsName();
        var firstNode = void 0;
        var firstTop = void 0;
        validNames.forEach(function(name) {
          if ((0, import_has.default)(error, name)) {
            var instance = _this.getFieldInstance(name);
            if (instance) {
              var node = import_react_dom.default.findDOMNode(instance);
              var top = node.getBoundingClientRect().top;
              if (node.type !== "hidden" && (firstTop === void 0 || firstTop > top)) {
                firstTop = top;
                firstNode = node;
              }
            }
          }
        });
        if (firstNode) {
          var c = options.container || getScrollableContainer(firstNode);
          (0, import_dom_scroll_into_view.default)(firstNode, c, (0, import_extends5.default)({
            onlyScrollIfNeeded: true
          }, options.scroll));
        }
      }
      if (typeof callback === "function") {
        callback(error, values);
      }
    };
    return this.validateFields(names, options, newCb);
  }
};
function createDOMForm(option) {
  return createBaseForm_default((0, import_extends5.default)({}, option), [mixin2]);
}
var createDOMForm_default = createDOMForm;

// node_modules/@ant-design/compatible/es/_util/types.js
var tuple = function tuple2() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return args;
};

// node_modules/@ant-design/compatible/es/_util/warning.js
var warning_default2 = function(valid, component, message) {
  warning_default(valid, "[antd-compatible: ".concat(component, "] ").concat(message));
};

// node_modules/@ant-design/compatible/es/form/FormItem.js
var React7 = __toESM(require_react());
var ReactDOM2 = __toESM(require_react_dom());
var import_classnames2 = __toESM(require_classnames());

// node_modules/@ant-design/compatible/es/CompatibleConsumer.js
var MergedConfigConsumer = config_provider_default.ConfigContext.Consumer;
var CompatibleConsumer_default = MergedConfigConsumer;

// node_modules/@ant-design/compatible/es/form/constants.js
var FIELD_META_PROP = "data-__meta";
var FIELD_DATA_PROP = "data-__field";

// node_modules/@ant-design/compatible/es/form/context.js
var React6 = __toESM(require_react());
var FormContext = React6.createContext({
  labelAlign: "right",
  vertical: false
});
var context_default = FormContext;

// node_modules/@ant-design/compatible/es/form/FormItem.js
function _typeof3(o) {
  "@babel/helpers - typeof";
  return _typeof3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof3(o);
}
var _excluded2 = ["prefixCls", "style", "className"];
function _extends7() {
  _extends7 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends7.apply(this, arguments);
}
function _objectWithoutProperties3(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose2(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _classCallCheck4(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey3(descriptor.key), descriptor);
  }
}
function _createClass3(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _inherits2(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf3(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn2(this, result);
  };
}
function _possibleConstructorReturn2(self2, call) {
  if (call && (_typeof3(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self2);
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf3(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _defineProperty5(obj, key, value) {
  key = _toPropertyKey3(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey3(t) {
  var i = _toPrimitive3(t, "string");
  return "symbol" == _typeof3(i) ? i : String(i);
}
function _toPrimitive3(t, r) {
  if ("object" != _typeof3(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof3(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toConsumableArray2(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray2(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray2(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray2(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray2(arr);
}
function _arrayLikeToArray2(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
var V5FormItemInputContext = form_default.Item.useStatus.Context;
var ValidateStatuses = tuple("success", "warning", "error", "validating", "");
var FormLabelAligns = tuple("left", "right");
var IconMap = {
  success: CheckCircleFilled_default,
  warning: ExclamationCircleFilled_default,
  error: CloseCircleFilled_default,
  validating: LoadingOutlined_default
};
function intersperseSpace(list) {
  return list.reduce(function(current, item) {
    return [].concat(_toConsumableArray2(current), [" ", item]);
  }, []).slice(1);
}
var FormItem = function(_React$Component) {
  _inherits2(FormItem2, _React$Component);
  var _super = _createSuper(FormItem2);
  function FormItem2() {
    var _this;
    _classCallCheck4(this, FormItem2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty5(_assertThisInitialized(_this), "helpShow", false);
    _defineProperty5(_assertThisInitialized(_this), "onLabelClick", function() {
      var id = _this.props.id || _this.getId();
      if (!id) {
        return;
      }
      var formItemNode = ReactDOM2.findDOMNode(_assertThisInitialized(_this));
      var control = formItemNode.querySelector('[id="'.concat(id, '"]'));
      if (control && control.focus) {
        control.focus();
      }
    });
    _defineProperty5(_assertThisInitialized(_this), "renderFormItem", function(_ref) {
      var getPrefixCls = _ref.getPrefixCls;
      var _this$props = _this.props, customizePrefixCls = _this$props.prefixCls, style = _this$props.style, className = _this$props.className, restProps = _objectWithoutProperties3(_this$props, _excluded2);
      var prefixCls = getPrefixCls("legacy-form", customizePrefixCls);
      var children = _this.renderChildren(prefixCls);
      var itemClassName = _defineProperty5(_defineProperty5(_defineProperty5({}, "".concat(prefixCls, "-item"), true), "".concat(prefixCls, "-item-with-help"), _this.helpShow), "".concat(className), !!className);
      return React7.createElement(row_default, _extends7({
        className: (0, import_classnames2.default)(itemClassName),
        style
      }, omit(restProps, [
        "id",
        // It is deprecated because `htmlFor` is its replacement.
        "htmlFor",
        "label",
        "labelAlign",
        "labelCol",
        "wrapperCol",
        "help",
        "extra",
        "validateStatus",
        "hasFeedback",
        "required",
        "colon"
      ]), {
        key: "row"
      }), children);
    });
    return _this;
  }
  _createClass3(FormItem2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props, children = _this$props2.children, help = _this$props2.help, validateStatus = _this$props2.validateStatus, id = _this$props2.id;
      warning_default2(this.getControls(children, true).length <= 1 || help !== void 0 || validateStatus !== void 0, "Form.Item", "Cannot generate `validateStatus` and `help` automatically, while there are more than one `getFieldDecorator` in it.");
      warning_default2(!id, "Form.Item", "`id` is deprecated for its label `htmlFor`. Please use `htmlFor` directly.");
    }
  }, {
    key: "getHelpMessage",
    value: function getHelpMessage() {
      var help = this.props.help;
      if (help === void 0 && this.getOnlyControl()) {
        var _this$getField = this.getField(), errors = _this$getField.errors;
        if (errors) {
          return intersperseSpace(errors.map(function(e, index) {
            var node = null;
            if (React7.isValidElement(e)) {
              node = e;
            } else if (React7.isValidElement(e.message)) {
              node = e.message;
            }
            return node ? React7.cloneElement(node, {
              key: index
            }) : e.message;
          }));
        }
        return "";
      }
      return help;
    }
  }, {
    key: "getControls",
    value: function getControls(children, recursively) {
      var controls = [];
      var childrenArray = React7.Children.toArray(children);
      for (var i = 0; i < childrenArray.length; i += 1) {
        if (!recursively && controls.length > 0) {
          break;
        }
        var child = childrenArray[i];
        if (child.type && (child.type === FormItem2 || child.type.displayName === "FormItem")) {
          continue;
        }
        if (!child.props) {
          continue;
        }
        if (FIELD_META_PROP in child.props) {
          controls.push(child);
        } else if (child.props.children) {
          controls = controls.concat(this.getControls(child.props.children, recursively));
        }
      }
      return controls;
    }
  }, {
    key: "getOnlyControl",
    value: function getOnlyControl() {
      var child = this.getControls(this.props.children, false)[0];
      return child !== void 0 ? child : null;
    }
  }, {
    key: "getChildProp",
    value: function getChildProp(prop) {
      var child = this.getOnlyControl();
      return child && child.props && child.props[prop];
    }
  }, {
    key: "getId",
    value: function getId() {
      return this.getChildProp("id");
    }
  }, {
    key: "getMeta",
    value: function getMeta() {
      return this.getChildProp(FIELD_META_PROP);
    }
  }, {
    key: "getField",
    value: function getField() {
      return this.getChildProp(FIELD_DATA_PROP);
    }
  }, {
    key: "getValidateStatus",
    value: function getValidateStatus() {
      var onlyControl = this.getOnlyControl();
      if (!onlyControl) {
        return "";
      }
      var field = this.getField();
      if (field.validating) {
        return "validating";
      }
      if (field.errors) {
        return "error";
      }
      var fieldValue = "value" in field ? field.value : this.getMeta().initialValue;
      if (fieldValue !== void 0 && fieldValue !== null && fieldValue !== "") {
        return "success";
      }
      return "";
    }
  }, {
    key: "isRequired",
    value: (
      // onHelpAnimEnd = (_key: string, helpShow: boolean) => {
      //   this.helpShow = helpShow;
      //   if (!helpShow) {
      //     this.setState({});
      //   }
      // };
      function isRequired() {
        var required = this.props.required;
        if (required !== void 0) {
          return required;
        }
        if (this.getOnlyControl()) {
          var meta = this.getMeta() || {};
          var validate = meta.validate || [];
          return validate.filter(function(item) {
            return !!item.rules;
          }).some(function(item) {
            return item.rules.some(function(rule) {
              return rule.required;
            });
          });
        }
        return false;
      }
    )
  }, {
    key: "renderHelp",
    value: function renderHelp(prefixCls) {
      var help = this.getHelpMessage();
      var children = help ? React7.createElement("div", {
        className: "".concat(prefixCls, "-explain"),
        key: "help"
      }, help) : null;
      if (children) {
        this.helpShow = !!children;
      }
      return children;
    }
  }, {
    key: "renderExtra",
    value: function renderExtra(prefixCls) {
      var extra = this.props.extra;
      return extra ? React7.createElement("div", {
        className: "".concat(prefixCls, "-extra")
      }, extra) : null;
    }
  }, {
    key: "renderValidateWrapper",
    value: function renderValidateWrapper(prefixCls, c1, c2, c3) {
      var _this$props3 = this.props, hasFeedback = _this$props3.hasFeedback, validateStatus = _this$props3.validateStatus;
      var onlyControl = this.getOnlyControl;
      var mergedValidateStatus = validateStatus === void 0 && onlyControl ? this.getValidateStatus() : validateStatus;
      var classes = "".concat(prefixCls, "-item-control");
      if (mergedValidateStatus) {
        classes = (0, import_classnames2.default)("".concat(prefixCls, "-item-control"), {
          "has-feedback": hasFeedback || mergedValidateStatus === "validating",
          "has-success": mergedValidateStatus === "success",
          "has-warning": mergedValidateStatus === "warning",
          "has-error": mergedValidateStatus === "error",
          "is-validating": mergedValidateStatus === "validating"
        });
      }
      var IconComponent = mergedValidateStatus && IconMap[mergedValidateStatus];
      var feedbackIcon = IconComponent ? React7.createElement("span", {
        className: (0, import_classnames2.default)("".concat(prefixCls, "-item-feedback-icon"), "".concat(prefixCls, "-item-feedback-icon-").concat(mergedValidateStatus))
      }, React7.createElement(IconComponent, null)) : null;
      return React7.createElement("div", {
        className: classes
      }, React7.createElement("span", {
        className: "".concat(prefixCls, "-item-children")
      }, React7.createElement(V5FormItemInputContext.Provider, {
        value: {
          status: mergedValidateStatus,
          feedbackIcon,
          hasFeedback,
          isFormItemInput: true
        }
      }, c1)), c2, c3);
    }
  }, {
    key: "renderWrapper",
    value: function renderWrapper(prefixCls, children) {
      var _this2 = this;
      return React7.createElement(context_default.Consumer, {
        key: "wrapper"
      }, function(_ref2) {
        var contextWrapperCol = _ref2.wrapperCol, vertical = _ref2.vertical;
        var wrapperCol = _this2.props.wrapperCol;
        var mergedWrapperCol = ("wrapperCol" in _this2.props ? wrapperCol : contextWrapperCol) || {};
        var className = (0, import_classnames2.default)("".concat(prefixCls, "-item-control-wrapper"), mergedWrapperCol.className);
        return React7.createElement(context_default.Provider, {
          value: {
            vertical
          }
        }, React7.createElement(col_default, _extends7({}, mergedWrapperCol, {
          className
        }), children));
      });
    }
  }, {
    key: "renderLabel",
    value: function renderLabel(prefixCls) {
      var _this3 = this;
      return React7.createElement(context_default.Consumer, {
        key: "label"
      }, function(_ref3) {
        var vertical = _ref3.vertical, contextLabelAlign = _ref3.labelAlign, contextLabelCol = _ref3.labelCol, contextColon = _ref3.colon;
        var _this3$props = _this3.props, label = _this3$props.label, labelCol = _this3$props.labelCol, labelAlign = _this3$props.labelAlign, colon = _this3$props.colon, id = _this3$props.id, htmlFor = _this3$props.htmlFor;
        var required = _this3.isRequired();
        var mergedLabelCol = ("labelCol" in _this3.props ? labelCol : contextLabelCol) || {};
        var mergedLabelAlign = "labelAlign" in _this3.props ? labelAlign : contextLabelAlign;
        var labelClsBasic = "".concat(prefixCls, "-item-label");
        var labelColClassName = (0, import_classnames2.default)(labelClsBasic, mergedLabelAlign === "left" && "".concat(labelClsBasic, "-left"), mergedLabelCol.className);
        var labelChildren = label;
        var computedColon = colon === true || contextColon !== false && colon !== false;
        var haveColon = computedColon && !vertical;
        if (haveColon && typeof label === "string" && label.trim() !== "") {
          labelChildren = label.replace(/[：:]\s*$/, "");
        }
        var labelClassName = (0, import_classnames2.default)(_defineProperty5(_defineProperty5({}, "".concat(prefixCls, "-item-required"), required), "".concat(prefixCls, "-item-no-colon"), !computedColon));
        return label ? React7.createElement(col_default, _extends7({}, mergedLabelCol, {
          className: labelColClassName
        }), React7.createElement("label", {
          htmlFor: htmlFor || id || _this3.getId(),
          className: labelClassName,
          title: typeof label === "string" ? label : "",
          onClick: _this3.onLabelClick
        }, labelChildren)) : null;
      });
    }
  }, {
    key: "renderChildren",
    value: function renderChildren(prefixCls) {
      var children = this.props.children;
      return [this.renderLabel(prefixCls), this.renderWrapper(prefixCls, this.renderValidateWrapper(prefixCls, children, this.renderHelp(prefixCls), this.renderExtra(prefixCls)))];
    }
  }, {
    key: "render",
    value: function render() {
      return React7.createElement(CompatibleConsumer_default, null, this.renderFormItem);
    }
  }]);
  return FormItem2;
}(React7.Component);
_defineProperty5(FormItem, "defaultProps", {
  hasFeedback: false
});

// node_modules/@ant-design/compatible/es/_util/upgradeMessage.js
var upgradeMessage_default = function(component) {
  return warning_default2(false, component, "The legacy component has been deprecated, and ant design 4.0 now released! Please follow https://ant.design/components/".concat(component.toLowerCase()).concat(component === "Mention" ? "s" : "", " to upgrade."));
};

// node_modules/@ant-design/compatible/es/form/style/index.js
var React8 = __toESM(require_react());

// node_modules/@ant-design/compatible/es/form/style/mixin.js
function _typeof4(o) {
  "@babel/helpers - typeof";
  return _typeof4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof4(o);
}
function _defineProperty6(obj, key, value) {
  key = _toPropertyKey4(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey4(t) {
  var i = _toPrimitive4(t, "string");
  return "symbol" == _typeof4(i) ? i : String(i);
}
function _toPrimitive4(t, r) {
  if ("object" != _typeof4(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof4(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var resetForm = function resetForm2(token) {
  var colorText = token.colorText, colorTextSecondary = token.colorTextSecondary, fontSizeLG = token.fontSizeLG, lineHeight = token.lineHeight, lineWidth = token.lineWidth, lineType = token.lineType, colorBorder = token.colorBorder, fontSize = token.fontSize;
  return _defineProperty6(_defineProperty6(_defineProperty6(_defineProperty6(_defineProperty6(_defineProperty6(_defineProperty6({
    // Based on Bootstrap framework
    legend: {
      display: "block",
      width: "100%",
      marginBottom: "20px",
      padding: "0",
      color: colorTextSecondary,
      fontSize: fontSizeLG,
      lineHeight: "inherit",
      border: "0",
      borderBottom: "".concat(lineWidth, "px ").concat(lineType, " ").concat(colorBorder)
    },
    label: {
      fontSize
    }
  }, "input[type='search']", {
    boxSizing: "border-box"
  }), "input[type='radio'], input[type='checkbox']", {
    lineHeight: "normal"
  }), "input[type='file']", {
    display: "block"
  }), "input[type='range']", {
    display: "block",
    width: "100%"
  }), "select[multiple], select[size]", {
    height: "auto"
  }), "input[type='file']:focus, input[type='radio']:focus, input[type='checkbox']:focus", [{
    outline: "thin dotted"
  }, {
    outline: "5px auto -webkit-focus-ring-color",
    outlineOffset: "-2px"
  }]), "output", {
    display: "block",
    paddingTop: "15px",
    color: colorText,
    fontSize,
    lineHeight
  });
};
var genFormControlValidation = function genFormControlValidation2(componentCls, colorText) {
  return _defineProperty6({}, "".concat(componentCls, "-explain, ").concat(componentCls, "-split"), {
    color: colorText
  });
};

// node_modules/@ant-design/compatible/es/form/style/layout.js
function _typeof5(o) {
  "@babel/helpers - typeof";
  return _typeof5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof5(o);
}
function ownKeys2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys2(Object(t), true).forEach(function(r2) {
      _defineProperty7(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty7(obj, key, value) {
  key = _toPropertyKey5(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey5(t) {
  var i = _toPrimitive5(t, "string");
  return "symbol" == _typeof5(i) ? i : String(i);
}
function _toPrimitive5(t, r) {
  if ("object" != _typeof5(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof5(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var genVerticalLayoutLabel = function genVerticalLayoutLabel2(token) {
  var lineHeight = token.lineHeight;
  return {
    display: "block",
    margin: 0,
    padding: "0 0 8px",
    lineHeight,
    whiteSpace: "initial",
    textAlign: "left",
    flexBasis: "100%",
    "label::after": {
      display: "none"
    }
  };
};
var genVerticalLayoutControlWrapper = function genVerticalLayoutControlWrapper2() {
  return {
    flexBasis: "100%"
  };
};
var genVerticalLayout = function genVerticalLayout2(token) {
  var componentCls = token.componentCls;
  return _defineProperty7(_defineProperty7(_defineProperty7({}, "".concat(componentCls, "-item-label, ").concat(componentCls, "-item-control-wrapper"), {
    display: "block",
    width: "100%"
  }), "".concat(componentCls, "-item-label"), _objectSpread2({}, genVerticalLayoutLabel(token))), "".concat(componentCls, "-item-control-wrapper"), _objectSpread2({}, genVerticalLayoutControlWrapper()));
};
var genFormLayoutStyle = function genFormLayoutStyle2(token) {
  var antCls = token.antCls, componentCls = token.componentCls, lineHeight = token.lineHeight, formExplainPrecision = token.formExplainPrecision, marginLG = token.marginLG;
  return [
    // =============================== Vertical ===============================
    _defineProperty7(_defineProperty7(_defineProperty7(_defineProperty7(_defineProperty7(_defineProperty7({}, componentCls, _defineProperty7(_defineProperty7({}, "\n        &".concat(componentCls, "-vertical ").concat(componentCls, "-item-label,\n        ").concat(antCls, "-col-24").concat(componentCls, "-item-label,\n        ").concat(antCls, "-col-xl-24").concat(componentCls, "-item-label\n      "), _objectSpread2({}, genVerticalLayoutLabel(token))), "".concat(componentCls, "-vertical"), _defineProperty7(_defineProperty7(_defineProperty7(_defineProperty7({}, "".concat(componentCls, "-item"), {
      paddingBottom: "8px"
    }), "".concat(componentCls, "-item-control"), {
      lineHeight
    }), "".concat(componentCls, "-explain"), {
      marginTop: 2,
      marginBottom: "-4px -".concat(formExplainPrecision, "px")
    }), "".concat(componentCls, "-extra"), {
      marginTop: 2,
      marginBottom: -4
    }))), "@media (max-width: ".concat(token.screenXSMax, ")"), _objectSpread2(_objectSpread2({}, genVerticalLayout(token)), {}, _defineProperty7({}, "".concat(antCls, "-col-xs-24").concat(componentCls, "-item-label"), _objectSpread2({}, genVerticalLayoutLabel(token))))), "@media (max-width: ".concat(token.screenSMMax, ")"), _defineProperty7({}, "".concat(antCls, "-col-sm-24").concat(componentCls, "-item-label"), _objectSpread2({}, genVerticalLayoutLabel(token)))), "@media (max-width: ".concat(token.screenMDMax, ")"), _defineProperty7({}, "".concat(antCls, "-col-md-24").concat(componentCls, "-item-label"), _objectSpread2({}, genVerticalLayoutLabel(token)))), "@media (max-width: ".concat(token.screenLGMax, ")"), _defineProperty7({}, "".concat(antCls, "-col-lg-24").concat(componentCls, "-item-label"), _objectSpread2({}, genVerticalLayoutLabel(token)))), "@media (max-width: ".concat(token.screenXLMax, ")"), _defineProperty7({}, "".concat(antCls, "-col-xl-24").concat(componentCls, "-item-label"), _objectSpread2({}, genVerticalLayoutLabel(token)))),
    // ================================ Inline ================================
    _defineProperty7({}, "".concat(componentCls, "-inline"), _defineProperty7(_defineProperty7(_defineProperty7({}, "".concat(componentCls, "-item"), _defineProperty7({
      display: "inline-block",
      marginRight: "16px",
      marginBottom: "0",
      "&-with-help": {
        marginBottom: marginLG
      }
    }, "> ".concat(componentCls, "-item-control-wrapper, > ").concat(componentCls, "-item-label"), {
      display: "inline-block",
      verticalAlign: "top"
    })), "".concat(componentCls, "-text"), {
      display: "inline-block"
    }), ".has-feedback", {
      display: "inline-block"
    }))
  ];
};

// node_modules/@ant-design/compatible/es/form/style/feedback.js
function _typeof6(o) {
  "@babel/helpers - typeof";
  return _typeof6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof6(o);
}
function ownKeys3(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread3(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys3(Object(t), true).forEach(function(r2) {
      _defineProperty8(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys3(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty8(obj, key, value) {
  key = _toPropertyKey6(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey6(t) {
  var i = _toPrimitive6(t, "string");
  return "symbol" == _typeof6(i) ? i : String(i);
}
function _toPrimitive6(t, r) {
  if ("object" != _typeof6(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof6(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var genFeedbackStyle = function genFeedbackStyle2(token) {
  var componentCls = token.componentCls, colorSuccess = token.colorSuccess, colorInfo = token.colorInfo, colorWarning = token.colorWarning, colorError = token.colorError;
  return _defineProperty8({}, componentCls, _defineProperty8(_defineProperty8(_defineProperty8(_defineProperty8(_defineProperty8(_defineProperty8({}, "".concat(componentCls, "-item-feedback-icon-success"), {
    color: colorSuccess
  }), "".concat(componentCls, "-item-feedback-icon-validating"), {
    color: colorInfo
  }), "".concat(componentCls, "-item-feedback-icon-warning"), {
    color: colorWarning
  }), "".concat(componentCls, "-item-feedback-icon-error"), {
    color: colorError
  }), ".has-warning", _objectSpread3({}, genFormControlValidation(componentCls, colorWarning))), ".has-error", _objectSpread3({}, genFormControlValidation(componentCls, colorError))));
};

// node_modules/@ant-design/compatible/es/form/style/index.js
function _typeof7(o) {
  "@babel/helpers - typeof";
  return _typeof7 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof7(o);
}
function ownKeys4(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread4(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys4(Object(t), true).forEach(function(r2) {
      _defineProperty9(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys4(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty9(obj, key, value) {
  key = _toPropertyKey7(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey7(t) {
  var i = _toPrimitive7(t, "string");
  return "symbol" == _typeof7(i) ? i : String(i);
}
function _toPrimitive7(t, r) {
  if ("object" != _typeof7(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof7(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var genFormStyle = function genFormStyle2(token) {
  var antCls = token.antCls, iconCls = token.iconCls, componentCls = token.componentCls, controlHeightLG = token.controlHeightLG, controlHeight = token.controlHeight, colorTextHeading = token.colorTextHeading, colorHighlight = token.colorHighlight, colorTextSecondary = token.colorTextSecondary, fontSize = token.fontSize, lineHeight = token.lineHeight, marginXS = token.marginXS, marginXXS = token.marginXXS, marginLG = token.marginLG, motionEaseOut = token.motionEaseOut, motionDurationSlow = token.motionDurationSlow, paddingXXS = token.paddingXXS, paddingXS = token.paddingXS, formExplainPrecision = token.formExplainPrecision;
  var formExplainHeight = Math.floor(fontSize * lineHeight);
  var formHelpMarginTop = (controlHeight - controlHeightLG) / 2 + 2;
  return _defineProperty9({}, componentCls, _objectSpread4(_objectSpread4(_objectSpread4({}, resetComponent(token)), resetForm(token)), {}, _defineProperty9(_defineProperty9(_defineProperty9(_defineProperty9(_defineProperty9(_defineProperty9(_defineProperty9(_defineProperty9(_defineProperty9(_defineProperty9({}, "".concat(componentCls, "-item-required::before"), {
    display: "inline-block",
    marginRight: 4,
    color: colorHighlight,
    fontSize,
    fontFamily: "SimSun, sans-serif",
    lineHeight: 1,
    content: '" * "'
  }), "".concat(componentCls, "-hide-required-mark ").concat(componentCls, "-item-required::before"), {
    display: "none"
  }), "".concat(componentCls, "-item-label > label"), {
    color: colorTextHeading,
    "&::after": {
      content: '":"'
    },
    position: "relative",
    top: -0.5,
    margin: "0 ".concat(marginXS, "px 0 ").concat(marginXXS / 2, "px")
  }), "&".concat(componentCls, "-item-no-colon::after"), {
    content: '" "'
  }), "".concat(componentCls, "-item"), _objectSpread4(_objectSpread4({
    label: _defineProperty9({
      position: "relative"
    }, "> ".concat(iconCls), {
      fontSize,
      verticalAlign: "top"
    })
  }, resetComponent(token)), {}, _defineProperty9({
    marginBottom: marginLG,
    verticalAlign: "top",
    "&-control": _objectSpread4({
      position: "relative",
      lineHeight: "".concat(controlHeightLG, "px")
    }, clearFix()),
    "&-children": {
      position: "relative"
    },
    "&-with-help": {
      marginBottom: Math.max(0, marginLG - formExplainHeight - formHelpMarginTop)
    },
    "&-label": {
      display: "inline-block",
      overflow: "hidden",
      lineHeight: "".concat(controlHeightLG - 1e-4, "px"),
      whiteSpace: "nowrap",
      textAlign: "right",
      verticalAlign: "middle",
      flexGrow: "0",
      "&-left": {
        textAlign: "left"
      }
    },
    "&-control-wrapper": {
      flex: "1 1 0"
    }
  }, "".concat(antCls, "-switch"), {
    margin: "2px 0 4px"
  }))), "".concat(componentCls, "-explain, ").concat(componentCls, "-extra"), {
    clear: "both",
    minHeight: formExplainHeight + formExplainPrecision,
    marginTop: formHelpMarginTop,
    color: colorTextSecondary,
    fontSize,
    lineHeight,
    transition: "color ".concat(motionDurationSlow, " ").concat(motionEaseOut)
  }), "".concat(componentCls, "-explain"), {
    marginBottom: -formExplainPrecision
  }), "".concat(componentCls, "-extra"), {
    paddingTop: paddingXXS
  }), "".concat(componentCls, "-text"), {
    display: "inline-block",
    paddingRight: paddingXS
  }), "".concat(componentCls, "-split"), {
    display: "block",
    textAlign: "center"
  })));
};
function useStyle2(prefixCls) {
  var _antdTheme$useToken = theme_default.useToken(), theme = _antdTheme$useToken.theme, token = _antdTheme$useToken.token, hashId = _antdTheme$useToken.hashId;
  var _React$useContext = React8.useContext(config_provider_default.ConfigContext), iconPrefixCls = _React$useContext.iconPrefixCls, getPrefixCls = _React$useContext.getPrefixCls;
  var rootPrefixCls = getPrefixCls();
  return [useStyleRegister({
    theme,
    token,
    hashId,
    path: ["compatible", "Form", prefixCls, iconPrefixCls]
  }, function() {
    var mergedToken = _objectSpread4({
      componentCls: ".".concat(prefixCls),
      antCls: ".".concat(rootPrefixCls),
      iconCls: ".".concat(iconPrefixCls),
      formExplainPrecision: 1
    }, token);
    return [genFormStyle(mergedToken), genFormLayoutStyle(mergedToken), genFeedbackStyle(mergedToken)];
  }), hashId];
}

// node_modules/@ant-design/compatible/es/form/Form.js
function _typeof8(o) {
  "@babel/helpers - typeof";
  return _typeof8 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof8(o);
}
function ownKeys5(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread5(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys5(Object(t), true).forEach(function(r2) {
      _defineProperty10(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys5(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _slicedToArray2(arr, i) {
  return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray3(arr, i) || _nonIterableRest2();
}
function _nonIterableRest2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray3(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray3(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray3(o, minLen);
}
function _arrayLikeToArray3(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit2(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles2(arr) {
  if (Array.isArray(arr)) return arr;
}
function _extends8() {
  _extends8 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends8.apply(this, arguments);
}
function _classCallCheck5(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey8(descriptor.key), descriptor);
  }
}
function _createClass4(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties2(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties2(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _inherits3(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf2(subClass, superClass);
}
function _setPrototypeOf2(o, p) {
  _setPrototypeOf2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf3(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf2(o, p);
}
function _createSuper2(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct2();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf2(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf2(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn3(this, result);
  };
}
function _possibleConstructorReturn3(self2, call) {
  if (call && (_typeof8(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized2(self2);
}
function _assertThisInitialized2(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct2() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf2(o) {
  _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf3(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf2(o);
}
function _defineProperty10(obj, key, value) {
  key = _toPropertyKey8(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey8(t) {
  var i = _toPrimitive8(t, "string");
  return "symbol" == _typeof8(i) ? i : String(i);
}
function _toPrimitive8(t, r) {
  if ("object" != _typeof8(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof8(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var FormLayouts = tuple("horizontal", "inline", "vertical");
var Form = function(_React$Component) {
  _inherits3(Form2, _React$Component);
  var _super = _createSuper2(Form2);
  function Form2(props) {
    var _this;
    _classCallCheck5(this, Form2);
    _this = _super.call(this, props);
    _defineProperty10(_assertThisInitialized2(_this), "renderForm", function(_ref) {
      var getPrefixCls = _ref.getPrefixCls;
      var _this$props = _this.props, customizePrefixCls = _this$props.prefixCls, hideRequiredMark = _this$props.hideRequiredMark, _this$props$className = _this$props.className, className = _this$props$className === void 0 ? "" : _this$props$className, layout = _this$props.layout;
      var prefixCls = getPrefixCls("legacy-form", customizePrefixCls);
      var formClassName = (0, import_classnames3.default)(prefixCls, _defineProperty10(_defineProperty10(_defineProperty10(_defineProperty10({}, "".concat(prefixCls, "-horizontal"), layout === "horizontal"), "".concat(prefixCls, "-vertical"), layout === "vertical"), "".concat(prefixCls, "-inline"), layout === "inline"), "".concat(prefixCls, "-hide-required-mark"), hideRequiredMark), className);
      var formProps = omit(_this.props, ["prefixCls", "className", "layout", "form", "hideRequiredMark", "wrapperCol", "labelAlign", "labelCol", "colon"]);
      return React9.createElement("form", _extends8({}, formProps, {
        className: formClassName
      }));
    });
    warning_default2(!props.form, "Form", "It is unnecessary to pass `form` to `Form` after antd@1.7.0.");
    upgradeMessage_default("Form");
    return _this;
  }
  _createClass4(Form2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      try {
        warning_default2(getComputedStyle(document.querySelector(".ant-col"), null).getPropertyValue("position") === "relative", "Form", "If missing `Grid` style, you should import it, Please follow https://github.com/ant-design/compatible#faq.");
      } catch (error) {
        warning_default2(false, "Form", error);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props, wrapperCol = _this$props2.wrapperCol, labelAlign = _this$props2.labelAlign, labelCol = _this$props2.labelCol, layout = _this$props2.layout, colon = _this$props2.colon;
      return React9.createElement(context_default.Provider, {
        value: {
          wrapperCol,
          labelAlign,
          labelCol,
          vertical: layout === "vertical",
          colon
        }
      }, React9.createElement(CompatibleConsumer_default, null, this.renderForm));
    }
  }]);
  return Form2;
}(React9.Component);
var FormFC = React9.forwardRef(function(props, ref) {
  var customizePrefixCls = props.prefixCls, className = props.className;
  var _React$useContext = React9.useContext(ConfigContext), getPrefixCls = _React$useContext.getPrefixCls;
  var prefixCls = getPrefixCls("legacy-form", customizePrefixCls);
  var _useStyle = useStyle2(prefixCls), _useStyle2 = _slicedToArray2(_useStyle, 2), wrapSSR = _useStyle2[0], hashId = _useStyle2[1];
  return wrapSSR(React9.createElement(Form, _extends8({}, props, {
    ref,
    prefixCls,
    className: (0, import_classnames3.default)(className, hashId)
  })));
});
function create2() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return createDOMForm_default(_objectSpread5(_objectSpread5({
    fieldNameProp: "id"
  }, options), {}, {
    fieldMetaProp: FIELD_META_PROP,
    fieldDataProp: FIELD_DATA_PROP
  }));
}
FormFC.defaultProps = {
  colon: true,
  layout: "horizontal",
  hideRequiredMark: false,
  onSubmit: function onSubmit(e) {
    e.preventDefault();
  }
};
FormFC.Item = FormItem;
FormFC.createFormField = createFormField;
FormFC.create = create2;
if (true) {
  FormFC.displayName = "Form";
}
var Form_default = FormFC;

// node_modules/@ant-design/compatible/es/form/index.js
var form_default2 = Form_default;

// node_modules/@ant-design/compatible/es/icon/index.js
var import_react4 = __toESM(require_react());

// node_modules/@ant-design/compatible/es/icon/utils.js
var import_lodash = __toESM(require_lodash());
var import_lodash2 = __toESM(require_lodash2());
var fillTester = /-fill$/;
var outlineTester = /-o$/;
var twoToneTester = /-twotone$/;
function getThemeFromTypeName(type) {
  var result = null;
  if (fillTester.test(type)) {
    result = "filled";
  } else if (outlineTester.test(type)) {
    result = "outlined";
  } else if (twoToneTester.test(type)) {
    result = "twoTone";
  }
  return result;
}
function removeTypeTheme(type) {
  return type.replace(fillTester, "").replace(outlineTester, "").replace(twoToneTester, "");
}
var themeMap = {
  filled: "filled",
  outlined: "outlined",
  // default theme
  twoTone: "twoTone"
};
function withThemeSuffix(type, theme) {
  var result = (0, import_lodash2.default)((0, import_lodash.default)(type));
  var realTheme = (0, import_lodash2.default)(themeMap[theme]);
  if (theme !== "outlined" && !realTheme) {
    warning_default2(false, "Icon", "This icon '".concat(type, "' has unknown theme '").concat(theme, "'"));
  }
  return result + realTheme;
}
function alias(type) {
  var newType = type;
  switch (type) {
    case "cross":
      newType = "close";
      break;
    case "interation":
      newType = "interaction";
      break;
    case "canlendar":
      newType = "calendar";
      break;
    case "colum-height":
      newType = "column-height";
      break;
    default:
  }
  warning_default2(newType === type, "Icon", "Icon '".concat(type, "' was a typo and is now deprecated, please use '").concat(newType, "' instead."));
  return newType;
}

// node_modules/@ant-design/compatible/es/icon/index.js
function _extends9() {
  _extends9 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends9.apply(this, arguments);
}
var iconsMap = icons_exports;
var LegacyTypeIcon = function LegacyTypeIcon2(props) {
  var type = props.type, theme = props.theme;
  if (theme) {
    var themeInName = getThemeFromTypeName(type);
    warning_default2(!themeInName || theme === themeInName, "Icon", "The icon name '".concat(type, "' already specify a theme '").concat(themeInName, "',") + " the 'theme' prop '".concat(theme, "' will be ignored."));
  }
  var computedType = withThemeSuffix(removeTypeTheme(alias(type)), theme || "outlined");
  var targetIconComponent = iconsMap[computedType];
  warning_default2(targetIconComponent, "Icon", "The icon name '".concat(type, "'").concat(theme ? "with ".concat(theme) : "", " doesn't exist, please check it at https://ant.design/components/icon"));
  return targetIconComponent ? import_react4.default.createElement(targetIconComponent, props) : null;
};
var Icon = function Icon2(props) {
  var type = props.type, component = props.component, children = props.children;
  upgradeMessage_default("Icon");
  warning_default2(Boolean(type || component || children), "Icon", "Should have `type` prop or `component` prop or `children`.");
  if (component || children) {
    return import_react4.default.createElement(Icon_default, props);
  }
  if (typeof type === "string") {
    return import_react4.default.createElement(LegacyTypeIcon, _extends9({}, props, {
      type
    }));
  }
  return import_react4.default.createElement(Icon_default, null);
};
Icon.createFromIconfontCN = create;
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;
var icon_default = Icon;

// node_modules/@ant-design/compatible/es/theme/genColorMapToken.js
function _typeof9(o) {
  "@babel/helpers - typeof";
  return _typeof9 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof9(o);
}
function ownKeys6(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread6(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys6(Object(t), true).forEach(function(r2) {
      _defineProperty11(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys6(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty11(obj, key, value) {
  key = _toPropertyKey9(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey9(t) {
  var i = _toPrimitive9(t, "string");
  return "symbol" == _typeof9(i) ? i : String(i);
}
function _toPrimitive9(t, r) {
  if ("object" != _typeof9(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof9(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function genColorMapToken(seed, _ref) {
  var generateColorPalettes5 = _ref.generateColorPalettes, generateNeutralColorPalettes5 = _ref.generateNeutralColorPalettes;
  var colorSuccessBase = seed.colorSuccess, colorWarningBase = seed.colorWarning, colorErrorBase = seed.colorError, colorInfoBase = seed.colorInfo, colorPrimaryBase = seed.colorPrimary, colorBgBase = seed.colorBgBase, colorTextBase = seed.colorTextBase;
  var primaryColors = generateColorPalettes5(colorPrimaryBase);
  var successColors = generateColorPalettes5(colorSuccessBase);
  var warningColors = generateColorPalettes5(colorWarningBase);
  var errorColors = generateColorPalettes5(colorErrorBase);
  var infoColors = generateColorPalettes5(colorInfoBase);
  var neutralColors = generateNeutralColorPalettes5(colorBgBase, colorTextBase);
  return _objectSpread6(_objectSpread6({}, neutralColors), {}, {
    colorLink: primaryColors[6],
    colorLinkHover: primaryColors[4],
    colorLinkActive: primaryColors[7],
    colorPrimaryBg: primaryColors[1],
    colorPrimaryBgHover: primaryColors[2],
    colorPrimaryBorder: primaryColors[3],
    colorPrimaryBorderHover: primaryColors[4],
    colorPrimaryHover: primaryColors[5],
    colorPrimary: primaryColors[6],
    colorPrimaryActive: primaryColors[7],
    colorPrimaryTextHover: primaryColors[8],
    colorPrimaryText: primaryColors[9],
    colorPrimaryTextActive: primaryColors[10],
    colorSuccessBg: successColors[1],
    colorSuccessBgHover: successColors[2],
    colorSuccessBorder: successColors[3],
    colorSuccessBorderHover: successColors[4],
    colorSuccessHover: successColors[5],
    colorSuccess: successColors[6],
    colorSuccessActive: successColors[7],
    colorSuccessTextHover: successColors[8],
    colorSuccessText: successColors[9],
    colorSuccessTextActive: successColors[10],
    colorErrorBg: errorColors[1],
    colorErrorBgHover: errorColors[2],
    colorErrorBorder: errorColors[3],
    colorErrorBgActive: errorColors[3],
    colorErrorBorderHover: errorColors[4],
    colorErrorHover: errorColors[5],
    colorError: errorColors[6],
    colorErrorActive: errorColors[7],
    colorErrorTextHover: errorColors[8],
    colorErrorText: errorColors[9],
    colorErrorTextActive: errorColors[10],
    colorWarningBg: warningColors[1],
    colorWarningBgHover: warningColors[2],
    colorWarningBorder: warningColors[3],
    colorWarningBorderHover: warningColors[4],
    colorWarningHover: warningColors[5],
    colorWarning: warningColors[6],
    colorWarningActive: warningColors[7],
    colorWarningTextHover: warningColors[8],
    colorWarningText: warningColors[9],
    colorWarningTextActive: warningColors[10],
    colorInfoBg: infoColors[1],
    colorInfoBgHover: infoColors[2],
    colorInfoBorder: infoColors[3],
    colorInfoBorderHover: infoColors[4],
    colorInfoHover: infoColors[5],
    colorInfo: infoColors[6],
    colorInfoActive: infoColors[7],
    colorInfoTextHover: infoColors[8],
    colorInfoText: infoColors[9],
    colorInfoTextActive: infoColors[10],
    colorBgMask: new TinyColor("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}

// node_modules/@ant-design/compatible/es/theme/default.js
function _typeof10(o) {
  "@babel/helpers - typeof";
  return _typeof10 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof10(o);
}
function ownKeys7(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread7(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys7(Object(t), true).forEach(function(r2) {
      _defineProperty12(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys7(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty12(obj, key, value) {
  key = _toPropertyKey10(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey10(t) {
  var i = _toPrimitive10(t, "string");
  return "symbol" == _typeof10(i) ? i : String(i);
}
function _toPrimitive10(t, r) {
  if ("object" != _typeof10(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof10(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var defaultAlgorithm = theme_default.defaultAlgorithm;
var getAlphaColor = function getAlphaColor2(baseColor, alpha) {
  return new TinyColor(baseColor).setAlpha(alpha).toRgbString();
};
var getSolidColor = function getSolidColor2(baseColor, brightness) {
  var instance = new TinyColor(baseColor);
  return instance.darken(brightness).toHexString();
};
var generateColorPalettes = function generateColorPalettes2(baseColor) {
  var colors = generate(baseColor);
  return {
    1: colors[0],
    2: colors[1],
    3: colors[2],
    4: colors[3],
    5: colors[4],
    6: colors[5],
    7: colors[6],
    8: colors[4],
    9: colors[5],
    10: colors[6]
  };
};
var generateNeutralColorPalettes = function generateNeutralColorPalettes2(bgBaseColor, textBaseColor) {
  var colorBgBase = bgBaseColor || "#fff";
  var colorTextBase = textBaseColor || "#000";
  return {
    colorBgBase,
    colorTextBase,
    colorBgBlur: "transparent",
    colorText: getAlphaColor(colorTextBase, 0.85),
    colorTextSecondary: getAlphaColor(colorTextBase, 0.45),
    // Different from v5
    colorTextTertiary: getAlphaColor(colorTextBase, 0.45),
    colorTextQuaternary: getAlphaColor(colorTextBase, 0.25),
    colorFill: getAlphaColor(colorTextBase, 0.06),
    colorFillSecondary: getAlphaColor(colorTextBase, 0.04),
    colorFillTertiary: getAlphaColor(colorTextBase, 0.03),
    colorFillQuaternary: getAlphaColor(colorTextBase, 0.02),
    colorBgLayout: getSolidColor(colorBgBase, 4),
    colorBgContainer: getSolidColor(colorBgBase, 0),
    colorBgElevated: getSolidColor(colorBgBase, 0),
    colorBgSpotlight: getAlphaColor(colorTextBase, 0.85),
    colorBorder: getSolidColor(colorBgBase, 15),
    colorBorderSecondary: getSolidColor(colorBgBase, 6),
    colorSplit: getAlphaColor(colorTextBase, 0.06)
  };
};
var derivative = function derivative2(token, mapToken) {
  var mergedMapToken = mapToken !== null && mapToken !== void 0 ? mapToken : defaultAlgorithm(token);
  return _objectSpread7(_objectSpread7({}, mergedMapToken), genColorMapToken(mapToken !== null && mapToken !== void 0 ? mapToken : token, {
    generateColorPalettes,
    generateNeutralColorPalettes
  }));
};
var default_default = derivative;

// node_modules/@ant-design/compatible/es/theme/dark.js
function _typeof11(o) {
  "@babel/helpers - typeof";
  return _typeof11 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof11(o);
}
function ownKeys8(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread8(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys8(Object(t), true).forEach(function(r2) {
      _defineProperty13(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys8(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty13(obj, key, value) {
  key = _toPropertyKey11(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey11(t) {
  var i = _toPrimitive11(t, "string");
  return "symbol" == _typeof11(i) ? i : String(i);
}
function _toPrimitive11(t, r) {
  if ("object" != _typeof11(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof11(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var darkAlgorithm = theme_default.darkAlgorithm;
var getAlphaColor3 = function getAlphaColor4(baseColor, alpha) {
  return new TinyColor(baseColor).setAlpha(alpha).toRgbString();
};
var getSolidColor3 = function getSolidColor4(baseColor, brightness) {
  var instance = new TinyColor(baseColor);
  return instance.lighten(brightness).toHexString();
};
var generateColorPalettes3 = function generateColorPalettes4(baseColor) {
  var colors = generate(baseColor, {
    theme: "dark"
  });
  return {
    1: colors[0],
    2: colors[1],
    3: colors[2],
    4: colors[3],
    5: colors[6],
    6: colors[5],
    7: colors[4],
    8: colors[6],
    9: colors[5],
    10: colors[4]
  };
};
var generateNeutralColorPalettes3 = function generateNeutralColorPalettes4(bgBaseColor, textBaseColor) {
  var colorBgBase = bgBaseColor || "#000";
  var colorTextBase = textBaseColor || "#fff";
  return {
    colorBgBase,
    colorTextBase,
    colorBgBlur: "transparent",
    colorText: getAlphaColor3(colorTextBase, 0.85),
    colorTextSecondary: getAlphaColor3(colorTextBase, 0.45),
    // Different from v5
    colorTextTertiary: getAlphaColor3(colorTextBase, 0.45),
    colorTextQuaternary: getAlphaColor3(colorTextBase, 0.25),
    colorFill: getAlphaColor3(colorTextBase, 0.18),
    colorFillSecondary: getAlphaColor3(colorTextBase, 0.12),
    colorFillTertiary: getAlphaColor3(colorTextBase, 0.08),
    colorFillQuaternary: getAlphaColor3(colorTextBase, 0.04),
    colorBgElevated: getSolidColor3(colorBgBase, 12),
    colorBgContainer: getSolidColor3(colorBgBase, 8),
    colorBgLayout: getSolidColor3(colorBgBase, 0),
    colorBgSpotlight: getSolidColor3(colorBgBase, 26),
    colorBorder: getSolidColor3(colorBgBase, 26),
    colorBorderSecondary: getSolidColor3(colorBgBase, 19),
    colorSplit: getAlphaColor3(colorTextBase, 0.12)
  };
};
var derivative3 = function derivative4(token, mapToken) {
  var mergedMapToken = mapToken !== null && mapToken !== void 0 ? mapToken : darkAlgorithm(token);
  return _objectSpread8(_objectSpread8({}, mergedMapToken), genColorMapToken(mapToken !== null && mapToken !== void 0 ? mapToken : token, {
    generateColorPalettes: generateColorPalettes3,
    generateNeutralColorPalettes: generateNeutralColorPalettes3
  }));
};
var dark_default = derivative3;

// node_modules/@ant-design/compatible/es/theme/index.js
function _typeof12(o) {
  "@babel/helpers - typeof";
  return _typeof12 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof12(o);
}
function ownKeys9(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread9(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys9(Object(t), true).forEach(function(r2) {
      _defineProperty14(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys9(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty14(obj, key, value) {
  key = _toPropertyKey12(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey12(t) {
  var i = _toPrimitive12(t, "string");
  return "symbol" == _typeof12(i) ? i : String(i);
}
function _toPrimitive12(t, r) {
  if ("object" != _typeof12(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof12(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var v4Token = {
  token: {
    borderRadius: 2,
    colorPrimary: "#1890ff",
    wireframe: true
  }
};
var defaultTheme = _objectSpread9(_objectSpread9({}, v4Token), {}, {
  algorithm: default_default,
  components: {
    Menu: {
      itemBorderRadius: 0,
      subMenuItemBorderRadius: 0,
      itemHoverColor: "#1890ff",
      itemSelectedColor: "#1890ff",
      itemSelectedBg: "#e6f7ff",
      activeBarWidth: 3,
      itemMarginInline: 0,
      itemHoverBg: "transparent"
    }
  }
});
var darkTheme = _objectSpread9(_objectSpread9({}, v4Token), {}, {
  algorithm: dark_default,
  components: {
    Menu: {
      itemBorderRadius: 0,
      subMenuItemBorderRadius: 0,
      itemHoverColor: "transparent",
      itemSelectedColor: "#1890ff",
      itemSelectedBg: "#111b26",
      activeBarWidth: 3,
      itemMarginInline: 0,
      itemHoverBg: "transparent"
    }
  }
});

// node_modules/@ant-design/compatible/es/theme/convertLegacyToken.js
function convertLegacyToken(mapToken) {
  var token = formatToken(mapToken);
  var raw = {
    theme: "default",
    "ant-prefix": "ant",
    "html-selector": "html",
    // -------- Colors -----------
    // >>> Primary
    "primary-color": token.colorPrimary,
    "primary-color-hover": token.colorPrimaryHover,
    "primary-color-active": token.colorPrimaryActive,
    "primary-color-outline": "fade(@primary-color, @outline-fade)",
    "processing-color": token.colorPrimary,
    // >>> Info
    "info-color": token.colorInfo,
    "info-color-deprecated-bg": token.colorInfoBg,
    "info-color-deprecated-border": token.colorInfoBorder,
    // >>> Success
    "success-color": token.colorSuccess,
    "success-color-hover": token.colorSuccessBgHover,
    "success-color-active": token.colorSuccessActive,
    "success-color-outline": "fade(@success-color, @outline-fade)",
    "success-color-deprecated-bg": token.colorSuccessBg,
    "success-color-deprecated-border": token.colorSuccessBorder,
    // >>> Warning
    "warning-color": token.colorWarning,
    "warning-color-hover": token.colorWarningHover,
    "warning-color-active": token.colorWarningActive,
    "warning-color-outline": "fade(@warning-color, @outline-fade)",
    "warning-color-deprecated-bg": token.colorWarningBg,
    "warning-color-deprecated-border": token.colorWarningBorder,
    // >>> Error
    "error-color": token.colorError,
    "error-color-hover": token.colorErrorHover,
    "error-color-active": token.colorErrorActive,
    "error-color-outline": "fade(@error-color, @outline-fade)",
    "error-color-deprecated-bg": token.colorErrorBg,
    "error-color-deprecated-border": token.colorErrorBorder,
    "highlight-color": token.colorHighlight,
    "normal-color": "#d9d9d9",
    white: token.colorWhite,
    black: "#000",
    // Color used by default to control hover and active backgrounds and for
    // alert info backgrounds.
    "primary-1": token.colorPrimaryBg,
    "primary-2": token.colorPrimaryBgHover,
    "primary-3": token.colorPrimaryBorder,
    "primary-4": token.colorPrimaryBorderHover,
    "primary-5": token.colorPrimaryHover,
    "primary-6": token.colorPrimary,
    "primary-7": token.colorPrimaryActive,
    "primary-8": token.colorPrimaryTextHover,
    "primary-9": token.colorPrimaryText,
    "primary-10": token.colorPrimaryTextActive,
    // Base Scaffolding Variables
    // ---
    // Background color for `<body>`
    "body-background": token.colorBgBase,
    // Base background color for most components
    "component-background": token.colorBgContainer,
    // Popover background color
    "popover-background": token.colorBgElevated,
    "popover-customize-border-color": token.colorSplit,
    "font-family": token.fontFamily,
    "code-family": "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    "text-color": token.colorText,
    "text-color-secondary": token.colorTextSecondary,
    "text-color-inverse": token.colorWhite,
    "icon-color": token.colorIcon,
    "icon-color-hover": token.colorIconHover,
    "heading-color": token.colorTextHeading,
    "text-color-dark": "fade(@white, 85%)",
    "text-color-secondary-dark": "fade(@white, 65%)",
    "text-selection-bg": token.colorPrimary,
    "font-variant-base": "tabular-nums",
    "font-feature-settings-base": "tnum",
    "font-size-base": token.fontSize,
    "font-size-lg": token.fontSizeLG,
    "font-size-sm": token.fontSizeSM,
    "heading-1-size": token.fontSizeHeading1,
    "heading-2-size": token.fontSizeHeading2,
    "heading-3-size": token.fontSizeHeading3,
    "heading-4-size": token.fontSizeHeading4,
    "heading-5-size": token.fontSizeHeading5,
    // https://github.com/ant-design/ant-design/issues/20210
    "line-height-base": token.lineHeight,
    "border-radius-base": token.borderRadius,
    "border-radius-sm": token.borderRadiusSM,
    // control border
    "control-border-radius": token.borderRadius,
    // arrow border
    "arrow-border-radius": token.borderRadiusSM,
    //  2px;
    // vertical paddings
    "padding-lg": token.paddingLG,
    "padding-md": token.padding,
    "padding-sm": token.paddingSM,
    "padding-xs": token.paddingXS,
    "padding-xss": token.paddingXXS,
    // vertical padding for all form controls
    "control-padding-horizontal": token.paddingSM,
    //@padding-sm;
    "control-padding-horizontal-sm": token.paddingXS,
    // @padding-xs;
    // vertical margins
    "margin-lg": token.marginLG,
    "margin-md": token.margin,
    "margin-sm": token.marginSM,
    "margin-xs": token.marginXS,
    "margin-xss": token.marginXXS,
    // height rules
    "height-base": token.controlHeight,
    "height-lg": token.controlHeightLG,
    "height-sm": token.controlHeightSM,
    // The background colors for active and hover states for things like
    // list items or table cells.
    "item-active-bg": token.controlItemBgActive,
    "item-hover-bg": token.controlItemBgHover,
    // ICONFONT
    "iconfont-css-prefix": "anticon",
    // LINK
    "link-color": token.colorLink,
    "link-hover-color": token.colorLinkHover,
    "link-active-color": token.colorLinkActive,
    "link-decoration": "none",
    "link-hover-decoration": "none",
    "link-focus-decoration": "none",
    "link-focus-outline": 0,
    // Animation
    "ease-base-out": token.motionEaseOut,
    "ease-base-in": "cubic-bezier(0.9, 0, 0.3, 0.7)",
    "ease-out": token.motionEaseOut,
    "ease-in": "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
    "ease-in-out": token.motionEaseInOut,
    "ease-out-back": token.motionEaseOutBack,
    "ease-in-back": "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
    "ease-in-out-back": "cubic-bezier(0.71, -0.46, 0.29, 1.46)",
    "ease-out-circ": token.motionEaseOutCirc,
    "ease-in-circ": "cubic-bezier(0.6, 0.04, 0.98, 0.34)",
    "ease-in-out-circ": token.motionEaseInOutCirc,
    "ease-out-quint": token.motionEaseOutQuint,
    "ease-in-quint": token.motionEaseInQuint,
    "ease-in-out-quint": "cubic-bezier(0.86, 0, 0.07, 1)",
    // Border color
    "border-color-base": token.colorBorder,
    "border-color-split": token.colorSplit,
    "border-color-inverse": token.colorWhite,
    "border-width-base": token.lineWidth,
    "border-style-base": "solid",
    // Outline
    "outline-blur-size": 0,
    "outline-width": token.controlOutlineWidth,
    "outline-color": token.controlOutline,
    "outline-fade": "20%",
    "background-color-light": "hsv(0, 0, 98%)",
    // background of header and selected item
    "background-color-base": "hsv(0, 0, 96%)",
    // Default grey background color
    // Disabled states
    "disabled-color": token.colorTextDisabled,
    "disabled-bg": token.colorBgContainerDisabled,
    "disabled-active-bg": token.colorBgContainerDisabled,
    // tint(@black, 90%);
    "disabled-color-dark": "fade(#fff, 35%)",
    // Shadow
    "shadow-color": "rgba(0, 0, 0, 0.15)",
    "shadow-color-inverse": token.colorBgContainer,
    "box-shadow-base": token.boxShadow,
    "shadow-1-up": token.boxShadowDrawerUp,
    "shadow-1-down": token.boxShadowDrawerDown,
    "shadow-1-left": token.boxShadowDrawerLeft,
    "shadow-1-right": token.boxShadowDrawerRight,
    "shadow-2": token.boxShadowSecondary,
    // ==========================================================================
    // ==                              Components                              ==
    // ==========================================================================
    // Buttons
    "btn-font-weight": "400",
    "btn-border-radius-base": "@border-radius-base",
    "btn-border-radius-sm": "@border-radius-base",
    "btn-border-width": "@border-width-base",
    "btn-border-style": "@border-style-base",
    "btn-shadow": "0 2px 0 rgba(0, 0, 0, 0.015)",
    "btn-primary-shadow": "0 2px 0 rgba(0, 0, 0, 0.045)",
    "btn-text-shadow": "0 -1px 0 rgba(0, 0, 0, 0.12)",
    "btn-primary-color": "#fff",
    "btn-primary-bg": "@primary-color",
    "btn-default-color": "@text-color",
    "btn-default-bg": "@component-background",
    "btn-default-border": "@border-color-base",
    "btn-danger-color": "#fff",
    "btn-danger-bg": "@error-color",
    "btn-danger-border": "@error-color",
    "btn-disable-color": "@disabled-color",
    "btn-disable-bg": "@disabled-bg",
    "btn-disable-border": "@border-color-base",
    "btn-default-ghost-color": "@component-background",
    "btn-default-ghost-bg": "transparent",
    "btn-default-ghost-border": "@component-background",
    "btn-font-size-lg": "@font-size-lg",
    "btn-font-size-sm": "@font-size-base",
    "btn-padding-horizontal-base": "@padding-md - 1px",
    "btn-padding-horizontal-lg": "@btn-padding-horizontal-base",
    "btn-padding-horizontal-sm": "@padding-xs - 1px",
    "btn-height-base": "@height-base",
    "btn-height-lg": "@height-lg",
    "btn-height-sm": "@height-sm",
    "btn-line-height": "@line-height-base",
    "btn-circle-size": "@btn-height-base",
    "btn-circle-size-lg": "@btn-height-lg",
    "btn-circle-size-sm": "@btn-height-sm",
    "btn-square-size": "@btn-height-base",
    "btn-square-size-lg": "@btn-height-lg",
    "btn-square-size-sm": "@btn-height-sm",
    "btn-square-only-icon-size": "@font-size-base + 2px",
    "btn-square-only-icon-size-sm": "@font-size-base",
    "btn-square-only-icon-size-lg": "@btn-font-size-lg + 2px",
    "btn-group-border": "@primary-5",
    "btn-link-hover-bg": "transparent",
    "btn-text-hover-bg": "rgba(0, 0, 0, 0.018)",
    // Checkbox
    "checkbox-size": "16px",
    "checkbox-color": "@primary-color",
    "checkbox-check-color": "#fff",
    "checkbox-check-bg": "@checkbox-check-color",
    "checkbox-border-width": "@border-width-base",
    "checkbox-border-radius": "@border-radius-base",
    "checkbox-group-item-margin-right": "8px",
    // Descriptions
    "descriptions-bg": "#fafafa",
    "descriptions-title-margin-bottom": "20px",
    "descriptions-default-padding": "@padding-md @padding-lg",
    "descriptions-middle-padding": "@padding-sm @padding-lg",
    "descriptions-small-padding": "@padding-xs @padding-md",
    "descriptions-item-padding-bottom": "@padding-md",
    "descriptions-item-trailing-colon": "true",
    "descriptions-item-label-colon-margin-right": "8px",
    "descriptions-item-label-colon-margin-left": "2px",
    "descriptions-extra-color": "@text-color",
    // Divider
    "divider-text-padding": "1em",
    "divider-orientation-margin": "5%",
    "divider-color": "rgba(0, 0, 0, 6%)",
    "divider-vertical-gutter": "8px",
    // Dropdown
    "dropdown-selected-color": "@primary-color",
    "dropdown-menu-submenu-disabled-bg": "@component-background",
    "dropdown-selected-bg": "@item-active-bg",
    // Empty
    "empty-font-size": "@font-size-base",
    // Radio
    "radio-size": "16px",
    "radio-top": "0.2em",
    "radio-border-width": "1px",
    "radio-dot-size": "@radio-size - 8px",
    "radio-dot-color": "@primary-color",
    "radio-dot-disabled-color": "fade(@black, 20%)",
    "radio-solid-checked-color": "@component-background",
    // Radio buttons
    "radio-button-bg": "@btn-default-bg",
    "radio-button-checked-bg": "@btn-default-bg",
    "radio-button-color": "@btn-default-color",
    "radio-button-hover-color": "@primary-5",
    "radio-button-active-color": "@primary-7",
    "radio-button-padding-horizontal": "@padding-md - 1px",
    "radio-disabled-button-checked-bg": "@disabled-active-bg",
    "radio-disabled-button-checked-color": "@disabled-color",
    "radio-wrapper-margin-right": "8px",
    // Media queries breakpoints
    // @screen-xs and @screen-xs-min is not used in Grid
    // smallest break point is @screen-md
    "screen-xs": "480px",
    "screen-xs-min": "@screen-xs",
    // 👆 Extra small screen / phone
    // 👇 Small screen / tablet
    "screen-sm": "576px",
    "screen-sm-min": "@screen-sm",
    // Medium screen / desktop
    "screen-md": "768px",
    "screen-md-min": "@screen-md",
    // Large screen / wide desktop
    "screen-lg": "992px",
    "screen-lg-min": "@screen-lg",
    // Extra large screen / full hd
    "screen-xl": "1200px",
    "screen-xl-min": "@screen-xl",
    // Extra extra large screen / large desktop
    "screen-xxl": "1600px",
    "screen-xxl-min": "@screen-xxl",
    // provide a maximum
    "screen-xs-max": "(@screen-sm-min - 1px)",
    "screen-sm-max": "(@screen-md-min - 1px)",
    "screen-md-max": "(@screen-lg-min - 1px)",
    "screen-lg-max": "(@screen-xl-min - 1px)",
    "screen-xl-max": "(@screen-xxl-min - 1px)",
    // Grid system
    "grid-columns": "24",
    // Layout
    "layout-body-background": "#f0f2f5",
    "layout-header-background": "#001529",
    "layout-header-height": "64px",
    "layout-header-padding": "0 50px",
    "layout-header-color": "@text-color",
    "layout-footer-padding": "24px 50px",
    "layout-footer-background": "@layout-body-background",
    "layout-sider-background": "@layout-header-background",
    "layout-trigger-height": "48px",
    "layout-trigger-background": "#002140",
    "layout-trigger-color": "#fff",
    "layout-zero-trigger-width": "36px",
    "layout-zero-trigger-height": "42px",
    // Layout light theme
    "layout-sider-background-light": "#fff",
    "layout-trigger-background-light": "#fff",
    "layout-trigger-color-light": "@text-color",
    // z-index list, order by `z-index`
    "zindex-badge": "auto",
    "zindex-table-fixed": "2",
    "zindex-affix": "10",
    "zindex-back-top": "10",
    "zindex-picker-panel": "10",
    "zindex-popup-close": "10",
    "zindex-modal": "1000",
    "zindex-modal-mask": "1000",
    "zindex-message": "1010",
    "zindex-notification": "1010",
    "zindex-popover": "1030",
    "zindex-dropdown": "1050",
    "zindex-picker": "1050",
    "zindex-popoconfirm": "1060",
    "zindex-tooltip": "1070",
    "zindex-image": "1080",
    // Animation
    "animation-duration-slow": "0.3s",
    // Modal
    "animation-duration-base": "0.2s",
    "animation-duration-fast": "0.1s",
    // Tooltip
    //CollapsePanel
    "collapse-panel-border-radius": "@border-radius-base",
    //Dropdown
    "dropdown-menu-bg": "@component-background",
    "dropdown-vertical-padding": "5px",
    "dropdown-edge-child-vertical-padding": "4px",
    "dropdown-font-size": "@font-size-base",
    "dropdown-line-height": "22px",
    // Form
    // ---
    "label-required-color": "@highlight-color",
    "label-color": "@heading-color",
    "form-warning-input-bg": "@input-bg",
    "form-item-margin-bottom": "24px",
    "form-item-trailing-colon": "true",
    "form-vertical-label-padding": "0 0 8px",
    "form-vertical-label-margin": "0",
    "form-item-label-font-size": "@font-size-base",
    "form-item-label-height": "@input-height-base",
    "form-item-label-colon-margin-right": "8px",
    "form-item-label-colon-margin-left": "2px",
    "form-error-input-bg": "@input-bg",
    // Input
    // ---
    "input-height-base": "@height-base",
    "input-height-lg": "@height-lg",
    "input-height-sm": "@height-sm",
    "input-padding-horizontal": "@control-padding-horizontal - 1px",
    "input-padding-horizontal-base": "@input-padding-horizontal",
    "input-padding-horizontal-sm": "@control-padding-horizontal-sm - 1px",
    "input-padding-horizontal-lg": "@input-padding-horizontal",
    "input-padding-vertical-base": "max(\n  (round(((@input-height-base - @font-size-base * @line-height-base) / 2) * 10) / 10) -\n    @border-width-base,\n  3px\n)",
    "input-padding-vertical-sm": "max(\n  (round(((@input-height-sm - @font-size-base * @line-height-base) / 2) * 10) / 10) -\n    @border-width-base,\n  0\n)",
    "input-padding-vertical-lg": "(\n    ceil(((@input-height-lg - @font-size-lg * @line-height-base) / 2) * 10) / 10\n  ) - @border-width-base",
    "input-placeholder-color": "hsv(0, 0, 75%)",
    "input-color": "@text-color",
    "input-icon-color": "@input-color",
    "input-border-color": "@border-color-base",
    "input-bg": "@component-background",
    "input-number-hover-border-color": "@input-hover-border-color",
    "input-number-handler-active-bg": "#f4f4f4",
    "input-number-handler-hover-bg": "@primary-5",
    "input-number-handler-bg": "@component-background",
    "input-number-handler-border-color": "@border-color-base",
    "input-addon-bg": "@background-color-light",
    "input-hover-border-color": "@primary-5",
    "input-disabled-bg": "@disabled-bg",
    "input-outline-offset": "0 0",
    "input-icon-hover-color": "fade(@black, 85%)",
    "input-disabled-color": "@disabled-color",
    // Mentions
    // ---
    "mentions-dropdown-bg": "@component-background",
    "mentions-dropdown-menu-item-hover-bg": "@mentions-dropdown-bg",
    // Select
    // ---
    "select-border-color": "@border-color-base",
    "select-item-selected-color": "@text-color",
    "select-item-selected-font-weight": "600",
    "select-dropdown-bg": "@component-background",
    "select-item-selected-bg": "@primary-1",
    "select-item-active-bg": "@item-hover-bg",
    "select-dropdown-vertical-padding": "@dropdown-vertical-padding",
    "select-dropdown-font-size": "@dropdown-font-size",
    "select-dropdown-line-height": "@dropdown-line-height",
    "select-dropdown-height": "32px",
    "select-background": "@component-background",
    "select-clear-background": "@select-background",
    "select-selection-item-bg": "@background-color-base",
    "select-selection-item-border-color": "@border-color-split",
    "select-single-item-height-lg": "40px",
    "select-multiple-item-height": "@input-height-base - @input-padding-vertical-base * 2",
    // Normal 24px
    "select-multiple-item-height-lg": "32px",
    "select-multiple-item-spacing-half": "ceil((@input-padding-vertical-base / 2))",
    "select-multiple-disabled-background": "@input-disabled-bg",
    "select-multiple-item-disabled-color": "#bfbfbf",
    "select-multiple-item-disabled-border-color": "@select-border-color",
    // Cascader
    // ---
    "cascader-bg": "@component-background",
    "cascader-item-selected-bg": "@primary-1",
    "cascader-menu-bg": "@component-background",
    "cascader-menu-border-color-split": "@border-color-split",
    // Cascader
    // ----
    "cascader-dropdown-vertical-padding": "@dropdown-vertical-padding",
    "cascader-dropdown-edge-child-vertical-padding": "@dropdown-edge-child-vertical-padding",
    "cascader-dropdown-font-size": "@dropdown-font-size",
    "cascader-dropdown-line-height": "@dropdown-line-height",
    // Anchor
    // ---
    "anchor-bg": "transparent",
    "anchor-border-color": "@border-color-split",
    "anchor-link-top": "4px",
    "anchor-link-left": "16px",
    "anchor-link-padding": "@anchor-link-top 0 @anchor-link-top @anchor-link-left",
    // Tooltip
    // ---
    // Tooltip max width
    "tooltip-max-width": "250px",
    // Tooltip text color
    "tooltip-color": "#fff",
    // Tooltip background color
    "tooltip-bg": "rgba(0, 0, 0, 0.75)",
    // Tooltip arrow width
    "tooltip-arrow-width": "8px * sqrt(2)",
    // Tooltip distance with trigger
    "tooltip-distance": "@tooltip-arrow-width - 1px + 4px",
    // Tooltip arrow color
    "tooltip-arrow-color": "@tooltip-bg",
    "tooltip-border-radius": "@border-radius-base",
    // Popover
    // ---
    // Popover body background color
    "popover-bg": "@component-background",
    // Popover text color
    "popover-color": "@text-color",
    // Popover maximum width
    "popover-min-width": "177px",
    "popover-min-height": "32px",
    // Popover arrow width
    "popover-arrow-width": "@tooltip-arrow-width",
    // Popover arrow color
    "popover-arrow-color": "@popover-bg",
    // Popover outer arrow width
    // Popover outer arrow color
    "popover-arrow-outer-color": "@popover-bg",
    // Popover distance with trigger
    "popover-distance": "@popover-arrow-width + 4px",
    "popover-padding-horizontal": "@padding-md",
    // Modal
    // --
    "modal-header-padding-vertical": "@padding-md",
    "modal-header-padding-horizontal": "@padding-lg",
    "modal-body-padding": "@padding-lg",
    "modal-header-bg": "@component-background",
    "modal-header-padding": "@modal-header-padding-vertical @modal-header-padding-horizontal",
    "modal-header-border-width": "@border-width-base",
    "modal-header-border-style": "@border-style-base",
    "modal-header-title-line-height": "22px",
    "modal-header-title-font-size": "@font-size-lg",
    "modal-header-border-color-split": "@border-color-split",
    "modal-header-close-size": "@modal-header-title-line-height + 2 * @modal-header-padding-vertical",
    "modal-content-bg": "@component-background",
    "modal-heading-color": "@heading-color",
    "modal-close-color": "@text-color-secondary",
    "modal-footer-bg": "transparent",
    "modal-footer-border-color-split": "@border-color-split",
    "modal-footer-border-style": "@border-style-base",
    "modal-footer-padding-vertical": "10px",
    "modal-footer-padding-horizontal": "16px",
    "modal-footer-border-width": "@border-width-base",
    "modal-mask-bg": "fade(@black, 45%)",
    "modal-confirm-body-padding": "32px 32px 24px",
    "modal-confirm-title-font-size": "@font-size-lg",
    "modal-border-radius": "@border-radius-base",
    // Progress
    // --
    "progress-default-color": "@processing-color",
    "progress-remaining-color": "@background-color-base",
    "progress-info-text-color": "@progress-text-color",
    "progress-radius": "100px",
    "progress-steps-item-bg": "#f3f3f3",
    "progress-text-font-size": "1em",
    "progress-text-color": "@text-color",
    // This is for circle text color, should be renamed better
    "progress-circle-text-font-size": "1em",
    // Menu
    // ---
    "menu-inline-toplevel-item-height": "40px",
    "menu-item-height": "40px",
    "menu-item-group-height": "@line-height-base",
    "menu-collapsed-width": "80px",
    "menu-bg": "@component-background",
    "menu-popup-bg": "@component-background",
    "menu-item-color": "@text-color",
    "menu-inline-submenu-bg": "@background-color-light",
    "menu-highlight-color": "@primary-color",
    "menu-highlight-danger-color": "@error-color",
    "menu-item-active-bg": "@primary-1",
    "menu-item-active-danger-bg": "@red-1",
    "menu-item-active-border-width": "3px",
    "menu-item-group-title-color": "@text-color-secondary",
    "menu-item-vertical-margin": "4px",
    "menu-item-font-size": "@font-size-base",
    "menu-item-boundary-margin": "8px",
    "menu-item-padding-horizontal": "20px",
    "menu-item-padding": "0 @menu-item-padding-horizontal",
    "menu-horizontal-line-height": "46px",
    "menu-icon-margin-right": "10px",
    "menu-icon-size": "@menu-item-font-size",
    "menu-icon-size-lg": "@font-size-lg",
    "menu-item-group-title-font-size": "@menu-item-font-size",
    // dark theme
    "menu-dark-color": "@text-color-secondary-dark",
    "menu-dark-danger-color": "@error-color",
    "menu-dark-bg": "@layout-header-background",
    "menu-dark-arrow-color": "#fff",
    "menu-dark-inline-submenu-bg": "#000c17",
    "menu-dark-highlight-color": "#fff",
    "menu-dark-item-active-bg": "@primary-color",
    "menu-dark-item-active-danger-bg": "@error-color",
    "menu-dark-selected-item-icon-color": "@white",
    "menu-dark-selected-item-text-color": "@white",
    "menu-dark-item-hover-bg": "transparent",
    // Spin
    // ---
    "spin-dot-size-sm": "14px",
    "spin-dot-size": "20px",
    "spin-dot-size-lg": "32px",
    // Table
    // --
    "table-bg": "@component-background",
    "table-header-bg": "@background-color-light",
    "table-header-color": "@heading-color",
    "table-header-sort-bg": "@background-color-base",
    "table-body-sort-bg": "#fafafa",
    "table-row-hover-bg": "@background-color-light",
    "table-selected-row-color": "inherit",
    "table-selected-row-bg": "@primary-1",
    "table-body-selected-sort-bg": "@table-selected-row-bg",
    "table-selected-row-hover-bg": "darken(@table-selected-row-bg, 2%)",
    "table-expanded-row-bg": "#fbfbfb",
    "table-padding-vertical": "16px",
    "table-padding-horizontal": "16px",
    "table-padding-vertical-md": "(@table-padding-vertical * 3 / 4)",
    "table-padding-horizontal-md": "(@table-padding-horizontal / 2)",
    "table-padding-vertical-sm": "(@table-padding-vertical / 2)",
    "table-padding-horizontal-sm": "(@table-padding-horizontal / 2)",
    "table-border-color": "@border-color-split",
    "table-border-radius-base": "@border-radius-base",
    "table-footer-bg": "@background-color-light",
    "table-footer-color": "@heading-color",
    "table-header-bg-sm": "@table-header-bg",
    "table-font-size": "@font-size-base",
    "table-font-size-md": "@table-font-size",
    "table-font-size-sm": "@table-font-size",
    "table-header-cell-split-color": "rgba(0, 0, 0, 0.06)",
    // Sorter
    // Legacy: `table-header-sort-active-bg` is used for hover not real active
    "table-header-sort-active-bg": "rgba(0, 0, 0, 0.04)",
    "table-fixed-header-sort-active-bg": "hsv(0, 0, 96%)",
    // Filter
    "table-header-filter-active-bg": "rgba(0, 0, 0, 0.04)",
    "table-filter-btns-bg": "inherit",
    "table-filter-dropdown-bg": "@component-background",
    "table-expand-icon-bg": "@component-background",
    "table-selection-column-width": "32px",
    // Sticky
    "table-sticky-scroll-bar-bg": "fade(#000, 35%)",
    "table-sticky-scroll-bar-radius": "4px",
    // Tag
    // --
    "tag-border-radius": "@border-radius-base",
    "tag-default-bg": "@background-color-light",
    "tag-default-color": "@text-color",
    "tag-font-size": "@font-size-sm",
    "tag-line-height": "20px",
    // TimePicker
    // ---
    "picker-bg": "@component-background",
    "picker-basic-cell-hover-color": "@item-hover-bg",
    "picker-basic-cell-active-with-range-color": "@primary-1",
    "picker-basic-cell-hover-with-range-color": "lighten(@primary-color, 35%)",
    "picker-basic-cell-disabled-bg": "rgba(0, 0, 0, 0.04)",
    "picker-border-color": "@border-color-split",
    "picker-date-hover-range-border-color": "lighten(@primary-color, 20%)",
    "picker-date-hover-range-color": "@picker-basic-cell-hover-with-range-color",
    "picker-time-panel-column-width": "56px",
    "picker-time-panel-column-height": "224px",
    "picker-time-panel-cell-height": "28px",
    "picker-panel-cell-height": "24px",
    "picker-panel-cell-width": "36px",
    "picker-text-height": "40px",
    "picker-panel-without-time-cell-height": "66px",
    // Calendar
    // ---
    "calendar-bg": "@component-background",
    "calendar-input-bg": "@input-bg",
    "calendar-border-color": "@border-color-inverse",
    "calendar-item-active-bg": "@item-active-bg",
    "calendar-column-active-bg": "fade(@calendar-item-active-bg, 20%)",
    "calendar-full-bg": "@calendar-bg",
    "calendar-full-panel-bg": "@calendar-full-bg",
    // Carousel
    // ---
    "carousel-dot-width": "16px",
    "carousel-dot-height": "3px",
    "carousel-dot-active-width": "24px",
    // Badge
    // ---
    "badge-height": "20px",
    "badge-height-sm": "14px",
    "badge-dot-size": "6px",
    "badge-font-size": "@font-size-sm",
    "badge-font-size-sm": "@font-size-sm",
    "badge-font-weight": "normal",
    "badge-status-size": "6px",
    "badge-text-color": "@component-background",
    "badge-color": "@highlight-color",
    // Rate
    // ---
    "rate-star-color": "@yellow-6",
    "rate-star-bg": "@border-color-split",
    "rate-star-size": "20px",
    "rate-star-hover-scale": "scale(1.1)",
    // Card
    // ---
    "card-head-color": "@heading-color",
    "card-head-background": "transparent",
    "card-head-font-size": "@font-size-lg",
    "card-head-font-size-sm": "@font-size-base",
    "card-head-padding": "16px",
    "card-head-padding-sm": "(@card-head-padding / 2)",
    "card-head-height": "48px",
    "card-head-height-sm": "36px",
    "card-inner-head-padding": "12px",
    "card-padding-base": "24px",
    "card-padding-base-sm": "(@card-padding-base / 2)",
    "card-actions-background": "@component-background",
    "card-actions-li-margin": "12px 0",
    "card-skeleton-bg": "#cfd8dc",
    "card-background": "@component-background",
    "card-shadow": "0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12),\n  0 5px 12px 4px rgba(0, 0, 0, 0.09)",
    "card-radius": "@border-radius-base",
    "card-head-tabs-margin-bottom": "-17px",
    "card-head-extra-color": "@text-color",
    // Comment
    // ---
    "comment-bg": "inherit",
    "comment-padding-base": "@padding-md 0",
    "comment-nest-indent": "44px",
    "comment-font-size-base": "@font-size-base",
    "comment-font-size-sm": "@font-size-sm",
    "comment-author-name-color": "@text-color-secondary",
    "comment-author-time-color": "#ccc",
    "comment-action-color": "@text-color-secondary",
    "comment-action-hover-color": "#595959",
    "comment-actions-margin-bottom": "inherit",
    "comment-actions-margin-top": "@margin-sm",
    "comment-content-detail-p-margin-bottom": "inherit",
    // Tabs
    // ---
    "tabs-card-head-background": "@background-color-light",
    "tabs-card-height": "40px",
    "tabs-card-active-color": "@primary-color",
    "tabs-card-horizontal-padding": "(\n    (@tabs-card-height - floor(@font-size-base * @line-height-base)) / 2\n  ) - @border-width-base @padding-md",
    "tabs-card-horizontal-padding-sm": "6px @padding-md",
    "tabs-card-horizontal-padding-lg": "7px @padding-md 6px",
    "tabs-title-font-size": "@font-size-base",
    "tabs-title-font-size-lg": "@font-size-lg",
    "tabs-title-font-size-sm": "@font-size-base",
    "tabs-ink-bar-color": "@primary-color",
    "tabs-bar-margin": "0 0 @margin-md 0",
    "tabs-horizontal-gutter": "32px",
    "tabs-horizontal-margin": "0 0 0 @tabs-horizontal-gutter",
    "tabs-horizontal-margin-rtl": "0 0 0 32px",
    "tabs-horizontal-padding": "@padding-sm 0",
    "tabs-horizontal-padding-lg": "@padding-md 0",
    "tabs-horizontal-padding-sm": "@padding-xs 0",
    "tabs-vertical-padding": "@padding-xs @padding-lg",
    "tabs-vertical-margin": "@margin-md 0 0 0",
    "tabs-scrolling-size": "32px",
    "tabs-highlight-color": "@primary-color",
    "tabs-hover-color": "@primary-5",
    "tabs-active-color": "@primary-7",
    "tabs-card-gutter": "2px",
    "tabs-card-tab-active-border-top": "2px solid transparent",
    // BackTop
    // ---
    "back-top-color": "#fff",
    "back-top-bg": "@text-color-secondary",
    "back-top-hover-bg": "@text-color",
    // Avatar
    // ---
    "avatar-size-base": "32px",
    "avatar-size-lg": "40px",
    "avatar-size-sm": "24px",
    "avatar-font-size-base": "18px",
    "avatar-font-size-lg": "24px",
    "avatar-font-size-sm": "14px",
    "avatar-bg": "#ccc",
    "avatar-color": "#fff",
    "avatar-border-radius": "@border-radius-base",
    "avatar-group-overlapping": "-8px",
    "avatar-group-space": "3px",
    "avatar-group-border-color": "#fff",
    // Switch
    // ---
    "switch-height": "22px",
    "switch-sm-height": "16px",
    "switch-min-width": "44px",
    "switch-sm-min-width": "28px",
    "switch-disabled-opacity": "0.4",
    "switch-color": "@primary-color",
    "switch-bg": "@component-background",
    "switch-shadow-color": "fade(#00230b, 20%)",
    "switch-padding": "2px",
    "switch-inner-margin-min": "ceil(@switch-height * 0.3)",
    "switch-inner-margin-max": "ceil(@switch-height * 1.1)",
    "switch-sm-inner-margin-min": "ceil(@switch-sm-height * 0.3)",
    "switch-sm-inner-margin-max": "ceil(@switch-sm-height * 1.1)",
    // Pagination
    // ---
    "pagination-item-bg": "@component-background",
    "pagination-item-size": "@height-base",
    "pagination-item-size-sm": "24px",
    "pagination-font-family": "@font-family",
    "pagination-font-weight-active": "500",
    "pagination-item-bg-active": "@component-background",
    "pagination-item-link-bg": "@component-background",
    "pagination-item-disabled-color-active": "@disabled-color",
    "pagination-item-disabled-bg-active": "@disabled-active-bg",
    "pagination-item-input-bg": "@component-background",
    "pagination-mini-options-size-changer-top": "0px",
    // PageHeader
    // ---
    "page-header-padding": "@padding-lg",
    "page-header-padding-vertical": "@padding-md",
    "page-header-padding-breadcrumb": "@padding-sm",
    "page-header-content-padding-vertical": "@padding-sm",
    "page-header-back-color": "#000",
    "page-header-ghost-bg": "inherit",
    "page-header-heading-title": "@heading-4-size",
    "page-header-heading-sub-title": "14px",
    "page-header-tabs-tab-font-size": "16px",
    // Breadcrumb
    // ---
    "breadcrumb-base-color": "@text-color-secondary",
    "breadcrumb-last-item-color": "@text-color",
    "breadcrumb-font-size": "@font-size-base",
    "breadcrumb-icon-font-size": "@font-size-base",
    "breadcrumb-link-color": "@text-color-secondary",
    "breadcrumb-link-color-hover": "@text-color",
    "breadcrumb-separator-color": "@text-color-secondary",
    "breadcrumb-separator-margin": "0 @padding-xs",
    // Slider
    // ---
    "slider-margin": "10px 6px 10px",
    "slider-rail-background-color": "@background-color-base",
    "slider-rail-background-color-hover": "#e1e1e1",
    "slider-track-background-color": "@primary-3",
    "slider-track-background-color-hover": "@primary-4",
    "slider-handle-border-width": "2px",
    "slider-handle-background-color": "@component-background",
    "slider-handle-color": "@primary-3",
    "slider-handle-color-hover": "@primary-4",
    "slider-handle-color-focus": "tint(@primary-color, 20%)",
    "slider-handle-color-focus-shadow": "fade(@primary-color, 12%)",
    "slider-handle-color-tooltip-open": "@primary-color",
    "slider-handle-size": "14px",
    "slider-handle-margin-top": "-5px",
    "slider-handle-margin-left": "-5px",
    "slider-handle-shadow": "0",
    "slider-dot-border-color": "@border-color-split",
    "slider-dot-border-color-active": "tint(@primary-color, 50%)",
    "slider-disabled-color": "@disabled-color",
    "slider-disabled-background-color": "@component-background",
    // Tree
    // ---
    "tree-bg": "@component-background",
    "tree-title-height": "24px",
    "tree-child-padding": "18px",
    "tree-directory-selected-color": "#fff",
    "tree-directory-selected-bg": "@primary-color",
    "tree-node-hover-bg": "@item-hover-bg",
    "tree-node-selected-bg": "@primary-2",
    // Collapse
    // ---
    "collapse-header-padding": "@padding-sm @padding-md",
    "collapse-header-padding-extra": "40px",
    "collapse-header-bg": "@background-color-light",
    "collapse-content-padding": "@padding-md",
    "collapse-content-bg": "@component-background",
    "collapse-header-arrow-left": "16px",
    // Skeleton
    // ---
    "skeleton-color": "rgba(190, 190, 190, 0.2)",
    "skeleton-to-color": "shade(@skeleton-color, 5%)",
    "skeleton-paragraph-margin-top": "28px",
    "skeleton-paragraph-li-margin-top": "@margin-md",
    "skeleton-paragraph-li-height": "16px",
    "skeleton-title-height": "16px",
    "skeleton-title-paragraph-margin-top": "@margin-lg",
    // Transfer
    // ---
    "transfer-header-height": "40px",
    "transfer-item-height": "@height-base",
    "transfer-disabled-bg": "@disabled-bg",
    "transfer-list-height": "200px",
    "transfer-item-hover-bg": "@item-hover-bg",
    "transfer-item-selected-hover-bg": "darken(@item-active-bg, 2%)",
    "transfer-item-padding-vertical": "6px",
    "transfer-list-search-icon-top": "12px",
    // Message
    // ---
    "message-notice-content-padding": "10px 16px",
    "message-notice-content-bg": "@component-background",
    // Motion
    // ---
    "wave-animation-width": "6px",
    // Alert
    // ---
    "alert-success-border-color": token.colorSuccessBorder,
    "alert-success-bg-color": token.colorSuccessBg,
    "alert-success-icon-color": token.colorSuccess,
    "alert-info-border-color": token.colorInfoBorder,
    "alert-info-bg-color": token.colorInfoBg,
    "alert-info-icon-color": token.colorInfo,
    "alert-warning-border-color": token.colorWarningBorder,
    "alert-warning-bg-color": token.colorWarningBg,
    "alert-warning-icon-color": token.colorWarning,
    "alert-error-border-color": token.colorErrorBorder,
    "alert-error-bg-color": token.colorErrorBg,
    "alert-error-icon-color": "@error-color",
    "alert-message-color": "@heading-color",
    "alert-text-color": "@text-color",
    "alert-close-color": "@text-color-secondary",
    "alert-close-hover-color": "@icon-color-hover",
    "alert-padding-vertical": "@padding-xs",
    "alert-padding-horizontal": "@padding-md - 1px",
    "alert-no-icon-padding-vertical": "@padding-xs",
    "alert-with-description-no-icon-padding-vertical": "@padding-md - 1px",
    "alert-with-description-padding-vertical": "@padding-md - 1px",
    "alert-with-description-padding": "@alert-with-description-padding-vertical 15px\n  @alert-with-description-no-icon-padding-vertical @alert-with-description-icon-size",
    "alert-icon-top": "8px + @font-size-base * (@line-height-base / 2) - (@font-size-base / 2)",
    "alert-with-description-icon-size": "24px",
    // List
    // ---
    "list-header-background": "transparent",
    "list-footer-background": "transparent",
    "list-empty-text-padding": "@padding-md",
    "list-item-padding": "@padding-sm 0",
    "list-item-padding-sm": "@padding-xs @padding-md",
    "list-item-padding-lg": "16px 24px",
    "list-item-meta-margin-bottom": "@padding-md",
    "list-item-meta-avatar-margin-right": "@padding-md",
    "list-item-meta-title-margin-bottom": "@padding-sm",
    "list-customize-card-bg": "@component-background",
    "list-item-meta-description-font-size": "@font-size-base",
    // Statistic
    // ---
    "statistic-title-font-size": "@font-size-base",
    "statistic-content-font-size": "24px",
    "statistic-unit-font-size": "24px",
    "statistic-font-family": "@font-family",
    // Drawer
    // ---
    "drawer-header-padding": "@padding-md @padding-lg",
    "drawer-body-padding": "@padding-lg",
    "drawer-bg": "@component-background",
    "drawer-footer-padding-vertical": "@modal-footer-padding-vertical",
    "drawer-footer-padding-horizontal": "@modal-footer-padding-horizontal",
    "drawer-header-close-size": "56px",
    "drawer-title-font-size": "@font-size-lg",
    "drawer-title-line-height": "22px",
    // Timeline
    // ---
    "timeline-width": "2px",
    "timeline-color": "@border-color-split",
    "timeline-dot-border-width": "2px",
    "timeline-dot-color": "@primary-color",
    "timeline-dot-bg": "@component-background",
    "timeline-item-padding-bottom": "20px",
    // Typography
    // ---
    "typography-title-font-weight": "600",
    "typography-title-margin-top": "1.2em",
    "typography-title-margin-bottom": "0.5em",
    // Upload
    // ---
    "upload-actions-color": "@text-color-secondary",
    // Steps
    // ---
    "process-tail-color": "@border-color-split",
    "steps-nav-arrow-color": "fade(@black, 25%)",
    "steps-background": "@component-background",
    "steps-icon-size": "32px",
    "steps-icon-custom-size": "@steps-icon-size",
    "steps-icon-custom-top": "0px",
    "steps-icon-custom-font-size": "24px",
    "steps-icon-top": "-0.5px",
    "steps-icon-font-size": "@font-size-lg",
    "steps-icon-margin": "0 8px 0 0",
    "steps-title-line-height": "@height-base",
    "steps-small-icon-size": "24px",
    "steps-small-icon-margin": "0 8px 0 0",
    "steps-dot-size": "8px",
    "steps-dot-top": "2px",
    "steps-current-dot-size": "10px",
    "steps-description-max-width": "140px",
    "steps-nav-content-max-width": "auto",
    "steps-vertical-icon-width": "16px",
    "steps-vertical-tail-width": "16px",
    "steps-vertical-tail-width-sm": "12px",
    // Notification
    // ---
    "notification-bg": "@component-background",
    "notification-padding-vertical": "16px",
    "notification-padding-horizontal": "24px",
    // Result
    // ---
    "result-title-font-size": "24px",
    "result-subtitle-font-size": "@font-size-base",
    "result-icon-font-size": "72px",
    "result-extra-margin": "24px 0 0 0",
    // Image
    // ---
    "image-size-base": "48px",
    "image-font-size-base": "24px",
    "image-bg": "#f5f5f5",
    "image-color": "#fff",
    "image-mask-font-size": "16px",
    "image-preview-operation-size": "18px",
    "image-preview-operation-color": "@text-color-dark",
    "image-preview-operation-disabled-color": "fade(@image-preview-operation-color, 25%)",
    // Segmented
    // ---
    "segmented-bg": "fade(@black, 4%)",
    "segmented-hover-bg": "fade(@black, 6%)",
    "segmented-selected-bg": "@white",
    "segmented-label-color": "fade(@black, 65%)",
    "segmented-label-hover-color": "#262626"
  };
  Object.keys(token).forEach(function(key) {
    if (key !== key.toLowerCase()) {
      return;
    }
    var value = token[key];
    if (typeof value === "string") {
      raw[key] = value;
    }
  });
  var returnData = {};
  Object.keys(raw).forEach(function(key) {
    var value = raw[key];
    if (typeof value === "function") {
      returnData[key] = value(raw);
    } else if (typeof value === "number" && !key.includes("line-height")) {
      returnData[key] = "".concat(value, "px");
    } else {
      returnData[key] = "".concat(value);
    }
  });
  return returnData;
}
export {
  comment_default as Comment,
  form_default2 as Form,
  icon_default as Icon,
  convertLegacyToken,
  dark_default as darkAlgorithm,
  darkTheme,
  default_default as defaultAlgorithm,
  defaultTheme
};
/*! Bundled license information:

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=@ant-design_compatible.js.map
