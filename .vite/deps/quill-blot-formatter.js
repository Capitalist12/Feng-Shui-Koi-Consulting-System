import {
  require_quill
} from "./chunk-HRWJE6N5.js";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS
} from "./chunk-LK32TJAX.js";

// node_modules/deepmerge/dist/es.js
var es_exports = {};
__export(es_exports, {
  default: () => es_default
});
function isNonNullObject(value) {
  return !!value && typeof value === "object";
}
function isSpecial(value) {
  var stringValue = Object.prototype.toString.call(value);
  return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
}
function isReactElement(value) {
  return value.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(val) {
  return Array.isArray(val) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(value, options) {
  return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}
function defaultArrayMerge(target, source, options) {
  return target.concat(source).map(function(element) {
    return cloneUnlessOtherwiseSpecified(element, options);
  });
}
function mergeObject(target, source, options) {
  var destination = {};
  if (options.isMergeableObject(target)) {
    Object.keys(target).forEach(function(key) {
      destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
    });
  }
  Object.keys(source).forEach(function(key) {
    if (!options.isMergeableObject(source[key]) || !target[key]) {
      destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
    } else {
      destination[key] = deepmerge(target[key], source[key], options);
    }
  });
  return destination;
}
function deepmerge(target, source, options) {
  options = options || {};
  options.arrayMerge = options.arrayMerge || defaultArrayMerge;
  options.isMergeableObject = options.isMergeableObject || isMergeableObject;
  var sourceIsArray = Array.isArray(source);
  var targetIsArray = Array.isArray(target);
  var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
  if (!sourceAndTargetTypesMatch) {
    return cloneUnlessOtherwiseSpecified(source, options);
  } else if (sourceIsArray) {
    return options.arrayMerge(target, source, options);
  } else {
    return mergeObject(target, source, options);
  }
}
var isMergeableObject, canUseSymbol, REACT_ELEMENT_TYPE, deepmerge_1, es_default;
var init_es = __esm({
  "node_modules/deepmerge/dist/es.js"() {
    isMergeableObject = function isMergeableObject2(value) {
      return isNonNullObject(value) && !isSpecial(value);
    };
    canUseSymbol = typeof Symbol === "function" && Symbol.for;
    REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
    deepmerge.all = function deepmergeAll(array, options) {
      if (!Array.isArray(array)) {
        throw new Error("first argument should be an array");
      }
      return array.reduce(function(prev, next) {
        return deepmerge(prev, next, options);
      }, {});
    };
    deepmerge_1 = deepmerge;
    es_default = deepmerge_1;
  }
});

// node_modules/quill-blot-formatter/dist/actions/Action.js
var require_Action = __commonJS({
  "node_modules/quill-blot-formatter/dist/actions/Action.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _BlotFormatter = require_BlotFormatter();
    var _BlotFormatter2 = _interopRequireDefault(_BlotFormatter);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var Action = function() {
      function Action2(formatter) {
        _classCallCheck(this, Action2);
        this.formatter = formatter;
      }
      _createClass(Action2, [{
        key: "onCreate",
        value: function onCreate() {
        }
      }, {
        key: "onDestroy",
        value: function onDestroy() {
        }
      }, {
        key: "onUpdate",
        value: function onUpdate() {
        }
      }]);
      return Action2;
    }();
    exports.default = Action;
  }
});

// node_modules/quill-blot-formatter/dist/BlotFormatter.js
var require_BlotFormatter = __commonJS({
  "node_modules/quill-blot-formatter/dist/BlotFormatter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _deepmerge = (init_es(), __toCommonJS(es_exports));
    var _deepmerge2 = _interopRequireDefault(_deepmerge);
    var _Options = require_Options();
    var _Options2 = _interopRequireDefault(_Options);
    var _Action = require_Action();
    var _Action2 = _interopRequireDefault(_Action);
    var _BlotSpec = require_BlotSpec();
    var _BlotSpec2 = _interopRequireDefault(_BlotSpec);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var dontMerge = function dontMerge2(destination, source) {
      return source;
    };
    var BlotFormatter = function() {
      function BlotFormatter2(quill) {
        var _this = this;
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        _classCallCheck(this, BlotFormatter2);
        this.onClick = function() {
          _this.hide();
        };
        this.quill = quill;
        this.options = (0, _deepmerge2.default)(_Options2.default, options, { arrayMerge: dontMerge });
        this.currentSpec = null;
        this.actions = [];
        this.overlay = document.createElement("div");
        this.overlay.classList.add(this.options.overlay.className);
        if (this.options.overlay.style) {
          Object.assign(this.overlay.style, this.options.overlay.style);
        }
        document.execCommand("enableObjectResizing", false, "false");
        this.quill.root.parentNode.style.position = this.quill.root.parentNode.style.position || "relative";
        this.quill.root.addEventListener("click", this.onClick);
        this.specs = this.options.specs.map(function(SpecClass) {
          return new SpecClass(_this);
        });
        this.specs.forEach(function(spec) {
          return spec.init();
        });
      }
      _createClass(BlotFormatter2, [{
        key: "show",
        value: function show(spec) {
          this.currentSpec = spec;
          this.currentSpec.setSelection();
          this.setUserSelect("none");
          this.quill.root.parentNode.appendChild(this.overlay);
          this.repositionOverlay();
          this.createActions(spec);
        }
      }, {
        key: "hide",
        value: function hide() {
          if (!this.currentSpec) {
            return;
          }
          this.currentSpec.onHide();
          this.currentSpec = null;
          this.quill.root.parentNode.removeChild(this.overlay);
          this.overlay.style.setProperty("display", "none");
          this.setUserSelect("");
          this.destroyActions();
        }
      }, {
        key: "update",
        value: function update() {
          this.repositionOverlay();
          this.actions.forEach(function(action) {
            return action.onUpdate();
          });
        }
      }, {
        key: "createActions",
        value: function createActions(spec) {
          var _this2 = this;
          this.actions = spec.getActions().map(function(ActionClass) {
            var action = new ActionClass(_this2);
            action.onCreate();
            return action;
          });
        }
      }, {
        key: "destroyActions",
        value: function destroyActions() {
          this.actions.forEach(function(action) {
            return action.onDestroy();
          });
          this.actions = [];
        }
      }, {
        key: "repositionOverlay",
        value: function repositionOverlay() {
          if (!this.currentSpec) {
            return;
          }
          var overlayTarget = this.currentSpec.getOverlayElement();
          if (!overlayTarget) {
            return;
          }
          var parent = this.quill.root.parentNode;
          var specRect = overlayTarget.getBoundingClientRect();
          var parentRect = parent.getBoundingClientRect();
          Object.assign(this.overlay.style, {
            display: "block",
            left: specRect.left - parentRect.left - 1 + parent.scrollLeft + "px",
            top: specRect.top - parentRect.top + parent.scrollTop + "px",
            width: specRect.width + "px",
            height: specRect.height + "px"
          });
        }
      }, {
        key: "setUserSelect",
        value: function setUserSelect(value) {
          var _this3 = this;
          var props = ["userSelect", "mozUserSelect", "webkitUserSelect", "msUserSelect"];
          props.forEach(function(prop) {
            _this3.quill.root.style.setProperty(prop, value);
            if (document.documentElement) {
              document.documentElement.style.setProperty(prop, value);
            }
          });
        }
      }]);
      return BlotFormatter2;
    }();
    exports.default = BlotFormatter;
  }
});

// node_modules/quill-blot-formatter/dist/actions/align/Aligner.js
var require_Aligner = __commonJS({
  "node_modules/quill-blot-formatter/dist/actions/align/Aligner.js"() {
    "use strict";
  }
});

// node_modules/quill-blot-formatter/dist/actions/align/DefaultAligner.js
var require_DefaultAligner = __commonJS({
  "node_modules/quill-blot-formatter/dist/actions/align/DefaultAligner.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _Aligner = require_Aligner();
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var LEFT_ALIGN = "left";
    var CENTER_ALIGN = "center";
    var RIGHT_ALIGN = "right";
    var DefaultAligner = function() {
      function DefaultAligner2(options) {
        var _this = this, _alignments;
        _classCallCheck(this, DefaultAligner2);
        this.applyStyle = options.aligner.applyStyle;
        this.alignAttribute = options.attribute;
        this.alignments = (_alignments = {}, _defineProperty(_alignments, LEFT_ALIGN, {
          name: LEFT_ALIGN,
          icon: options.icons.left,
          apply: function apply(el) {
            _this.setAlignment(el, LEFT_ALIGN);
            _this.setStyle(el, "inline", "left", "0 1em 1em 0");
          }
        }), _defineProperty(_alignments, CENTER_ALIGN, {
          name: CENTER_ALIGN,
          icon: options.icons.center,
          apply: function apply(el) {
            _this.setAlignment(el, CENTER_ALIGN);
            _this.setStyle(el, "block", null, "auto");
          }
        }), _defineProperty(_alignments, RIGHT_ALIGN, {
          name: RIGHT_ALIGN,
          icon: options.icons.right,
          apply: function apply(el) {
            _this.setAlignment(el, RIGHT_ALIGN);
            _this.setStyle(el, "inline", "right", "0 0 1em 1em");
          }
        }), _alignments);
      }
      _createClass(DefaultAligner2, [{
        key: "getAlignments",
        value: function getAlignments() {
          var _this2 = this;
          return Object.keys(this.alignments).map(function(k) {
            return _this2.alignments[k];
          });
        }
      }, {
        key: "clear",
        value: function clear(el) {
          el.removeAttribute(this.alignAttribute);
          this.setStyle(el, null, null, null);
        }
      }, {
        key: "isAligned",
        value: function isAligned(el, alignment) {
          return el.getAttribute(this.alignAttribute) === alignment.name;
        }
      }, {
        key: "setAlignment",
        value: function setAlignment(el, value) {
          el.setAttribute(this.alignAttribute, value);
        }
      }, {
        key: "setStyle",
        value: function setStyle(el, display, float, margin) {
          if (this.applyStyle) {
            el.style.setProperty("display", display);
            el.style.setProperty("float", float);
            el.style.setProperty("margin", margin);
          }
        }
      }]);
      return DefaultAligner2;
    }();
    exports.default = DefaultAligner;
  }
});

// node_modules/quill-blot-formatter/dist/actions/align/Toolbar.js
var require_Toolbar = __commonJS({
  "node_modules/quill-blot-formatter/dist/actions/align/Toolbar.js"() {
    "use strict";
    var _Aligner = require_Aligner();
    var _BlotFormatter = require_BlotFormatter();
    var _BlotFormatter2 = _interopRequireDefault(_BlotFormatter);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
  }
});

// node_modules/quill-blot-formatter/dist/actions/align/DefaultToolbar.js
var require_DefaultToolbar = __commonJS({
  "node_modules/quill-blot-formatter/dist/actions/align/DefaultToolbar.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _Toolbar = require_Toolbar();
    var _Aligner = require_Aligner();
    var _BlotFormatter = require_BlotFormatter();
    var _BlotFormatter2 = _interopRequireDefault(_BlotFormatter);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var DefaultToolbar = function() {
      function DefaultToolbar2() {
        _classCallCheck(this, DefaultToolbar2);
        this.toolbar = null;
        this.buttons = [];
      }
      _createClass(DefaultToolbar2, [{
        key: "create",
        value: function create(formatter, aligner) {
          var toolbar = document.createElement("div");
          toolbar.classList.add(formatter.options.align.toolbar.mainClassName);
          this.addToolbarStyle(formatter, toolbar);
          this.addButtons(formatter, toolbar, aligner);
          this.toolbar = toolbar;
          return this.toolbar;
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.toolbar = null;
          this.buttons = [];
        }
      }, {
        key: "getElement",
        value: function getElement() {
          return this.toolbar;
        }
      }, {
        key: "addToolbarStyle",
        value: function addToolbarStyle(formatter, toolbar) {
          if (formatter.options.align.toolbar.mainStyle) {
            Object.assign(toolbar.style, formatter.options.align.toolbar.mainStyle);
          }
        }
      }, {
        key: "addButtonStyle",
        value: function addButtonStyle(button, index, formatter) {
          if (formatter.options.align.toolbar.buttonStyle) {
            Object.assign(button.style, formatter.options.align.toolbar.buttonStyle);
            if (index > 0) {
              button.style.borderLeftWidth = "0";
            }
          }
          if (formatter.options.align.toolbar.svgStyle) {
            Object.assign(button.children[0].style, formatter.options.align.toolbar.svgStyle);
          }
        }
      }, {
        key: "addButtons",
        value: function addButtons(formatter, toolbar, aligner) {
          var _this = this;
          aligner.getAlignments().forEach(function(alignment, i) {
            var button = document.createElement("span");
            button.classList.add(formatter.options.align.toolbar.buttonClassName);
            button.innerHTML = alignment.icon;
            button.addEventListener("click", function() {
              _this.onButtonClick(button, formatter, alignment, aligner);
            });
            _this.preselectButton(button, alignment, formatter, aligner);
            _this.addButtonStyle(button, i, formatter);
            _this.buttons.push(button);
            toolbar.appendChild(button);
          });
        }
      }, {
        key: "preselectButton",
        value: function preselectButton(button, alignment, formatter, aligner) {
          if (!formatter.currentSpec) {
            return;
          }
          var target = formatter.currentSpec.getTargetElement();
          if (!target) {
            return;
          }
          if (aligner.isAligned(target, alignment)) {
            this.selectButton(formatter, button);
          }
        }
      }, {
        key: "onButtonClick",
        value: function onButtonClick(button, formatter, alignment, aligner) {
          if (!formatter.currentSpec) {
            return;
          }
          var target = formatter.currentSpec.getTargetElement();
          if (!target) {
            return;
          }
          this.clickButton(button, target, formatter, alignment, aligner);
        }
      }, {
        key: "clickButton",
        value: function clickButton(button, alignTarget, formatter, alignment, aligner) {
          var _this2 = this;
          this.buttons.forEach(function(b) {
            _this2.deselectButton(formatter, b);
          });
          if (aligner.isAligned(alignTarget, alignment)) {
            if (formatter.options.align.toolbar.allowDeselect) {
              aligner.clear(alignTarget);
            } else {
              this.selectButton(formatter, button);
            }
          } else {
            this.selectButton(formatter, button);
            alignment.apply(alignTarget);
          }
          formatter.update();
        }
      }, {
        key: "selectButton",
        value: function selectButton(formatter, button) {
          button.classList.add("is-selected");
          if (formatter.options.align.toolbar.addButtonSelectStyle) {
            button.style.setProperty("filter", "invert(20%)");
          }
        }
      }, {
        key: "deselectButton",
        value: function deselectButton(formatter, button) {
          button.classList.remove("is-selected");
          if (formatter.options.align.toolbar.addButtonSelectStyle) {
            button.style.removeProperty("filter");
          }
        }
      }]);
      return DefaultToolbar2;
    }();
    exports.default = DefaultToolbar;
  }
});

// node_modules/quill-blot-formatter/dist/actions/align/AlignAction.js
var require_AlignAction = __commonJS({
  "node_modules/quill-blot-formatter/dist/actions/align/AlignAction.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _Action2 = require_Action();
    var _Action3 = _interopRequireDefault(_Action2);
    var _BlotFormatter = require_BlotFormatter();
    var _BlotFormatter2 = _interopRequireDefault(_BlotFormatter);
    var _DefaultAligner = require_DefaultAligner();
    var _DefaultAligner2 = _interopRequireDefault(_DefaultAligner);
    var _Aligner = require_Aligner();
    var _Toolbar = require_Toolbar();
    var _DefaultToolbar = require_DefaultToolbar();
    var _DefaultToolbar2 = _interopRequireDefault(_DefaultToolbar);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var AlignAction = function(_Action) {
      _inherits(AlignAction2, _Action);
      function AlignAction2(formatter) {
        _classCallCheck(this, AlignAction2);
        var _this = _possibleConstructorReturn(this, (AlignAction2.__proto__ || Object.getPrototypeOf(AlignAction2)).call(this, formatter));
        _this.aligner = new _DefaultAligner2.default(formatter.options.align);
        _this.toolbar = new _DefaultToolbar2.default();
        return _this;
      }
      _createClass(AlignAction2, [{
        key: "onCreate",
        value: function onCreate() {
          var toolbar = this.toolbar.create(this.formatter, this.aligner);
          this.formatter.overlay.appendChild(toolbar);
        }
      }, {
        key: "onDestroy",
        value: function onDestroy() {
          var toolbar = this.toolbar.getElement();
          if (!toolbar) {
            return;
          }
          this.formatter.overlay.removeChild(toolbar);
          this.toolbar.destroy();
        }
      }]);
      return AlignAction2;
    }(_Action3.default);
    exports.default = AlignAction;
  }
});

// node_modules/quill-blot-formatter/dist/actions/ResizeAction.js
var require_ResizeAction = __commonJS({
  "node_modules/quill-blot-formatter/dist/actions/ResizeAction.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _Action2 = require_Action();
    var _Action3 = _interopRequireDefault(_Action2);
    var _BlotFormatter = require_BlotFormatter();
    var _BlotFormatter2 = _interopRequireDefault(_BlotFormatter);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var ResizeAction = function(_Action) {
      _inherits(ResizeAction2, _Action);
      function ResizeAction2(formatter) {
        _classCallCheck(this, ResizeAction2);
        var _this = _possibleConstructorReturn(this, (ResizeAction2.__proto__ || Object.getPrototypeOf(ResizeAction2)).call(this, formatter));
        _this.onMouseDown = function(event) {
          if (!(event.target instanceof HTMLElement)) {
            return;
          }
          _this.dragHandle = event.target;
          _this.setCursor(_this.dragHandle.style.cursor);
          if (!_this.formatter.currentSpec) {
            return;
          }
          var target = _this.formatter.currentSpec.getTargetElement();
          if (!target) {
            return;
          }
          var rect = target.getBoundingClientRect();
          _this.dragStartX = event.clientX;
          _this.preDragWidth = rect.width;
          _this.targetRatio = rect.height / rect.width;
          document.addEventListener("mousemove", _this.onDrag);
          document.addEventListener("mouseup", _this.onMouseUp);
        };
        _this.onDrag = function(event) {
          if (!_this.formatter.currentSpec) {
            return;
          }
          var target = _this.formatter.currentSpec.getTargetElement();
          if (!target) {
            return;
          }
          var deltaX = event.clientX - _this.dragStartX;
          var newWidth = 0;
          if (_this.dragHandle === _this.topLeftHandle || _this.dragHandle === _this.bottomLeftHandle) {
            newWidth = Math.round(_this.preDragWidth - deltaX);
          } else {
            newWidth = Math.round(_this.preDragWidth + deltaX);
          }
          var newHeight = _this.targetRatio * newWidth;
          target.setAttribute("width", "" + newWidth);
          target.setAttribute("height", "" + newHeight);
          _this.formatter.update();
        };
        _this.onMouseUp = function() {
          _this.setCursor("");
          document.removeEventListener("mousemove", _this.onDrag);
          document.removeEventListener("mouseup", _this.onMouseUp);
        };
        _this.topLeftHandle = _this.createHandle("top-left", "nwse-resize");
        _this.topRightHandle = _this.createHandle("top-right", "nesw-resize");
        _this.bottomRightHandle = _this.createHandle("bottom-right", "nwse-resize");
        _this.bottomLeftHandle = _this.createHandle("bottom-left", "nesw-resize");
        _this.dragHandle = null;
        _this.dragStartX = 0;
        _this.preDragWidth = 0;
        _this.targetRatio = 0;
        return _this;
      }
      _createClass(ResizeAction2, [{
        key: "onCreate",
        value: function onCreate() {
          this.formatter.overlay.appendChild(this.topLeftHandle);
          this.formatter.overlay.appendChild(this.topRightHandle);
          this.formatter.overlay.appendChild(this.bottomRightHandle);
          this.formatter.overlay.appendChild(this.bottomLeftHandle);
          this.repositionHandles(this.formatter.options.resize.handleStyle);
        }
      }, {
        key: "onDestroy",
        value: function onDestroy() {
          this.setCursor("");
          this.formatter.overlay.removeChild(this.topLeftHandle);
          this.formatter.overlay.removeChild(this.topRightHandle);
          this.formatter.overlay.removeChild(this.bottomRightHandle);
          this.formatter.overlay.removeChild(this.bottomLeftHandle);
        }
      }, {
        key: "createHandle",
        value: function createHandle(position, cursor) {
          var box = document.createElement("div");
          box.classList.add(this.formatter.options.resize.handleClassName);
          box.setAttribute("data-position", position);
          box.style.cursor = cursor;
          if (this.formatter.options.resize.handleStyle) {
            Object.assign(box.style, this.formatter.options.resize.handleStyle);
          }
          box.addEventListener("mousedown", this.onMouseDown);
          return box;
        }
      }, {
        key: "repositionHandles",
        value: function repositionHandles(handleStyle) {
          var handleXOffset = "0px";
          var handleYOffset = "0px";
          if (handleStyle) {
            if (handleStyle.width) {
              handleXOffset = -parseFloat(handleStyle.width) / 2 + "px";
            }
            if (handleStyle.height) {
              handleYOffset = -parseFloat(handleStyle.height) / 2 + "px";
            }
          }
          Object.assign(this.topLeftHandle.style, { left: handleXOffset, top: handleYOffset });
          Object.assign(this.topRightHandle.style, { right: handleXOffset, top: handleYOffset });
          Object.assign(this.bottomRightHandle.style, { right: handleXOffset, bottom: handleYOffset });
          Object.assign(this.bottomLeftHandle.style, { left: handleXOffset, bottom: handleYOffset });
        }
      }, {
        key: "setCursor",
        value: function setCursor(value) {
          if (document.body) {
            document.body.style.cursor = value;
          }
          if (this.formatter.currentSpec) {
            var target = this.formatter.currentSpec.getOverlayElement();
            if (target) {
              target.style.cursor = value;
            }
          }
        }
      }]);
      return ResizeAction2;
    }(_Action3.default);
    exports.default = ResizeAction;
  }
});

// node_modules/quill-blot-formatter/dist/actions/DeleteAction.js
var require_DeleteAction = __commonJS({
  "node_modules/quill-blot-formatter/dist/actions/DeleteAction.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _quill = require_quill();
    var _quill2 = _interopRequireDefault(_quill);
    var _Action2 = require_Action();
    var _Action3 = _interopRequireDefault(_Action2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var DeleteAction = function(_Action) {
      _inherits(DeleteAction2, _Action);
      function DeleteAction2() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, DeleteAction2);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DeleteAction2.__proto__ || Object.getPrototypeOf(DeleteAction2)).call.apply(_ref, [this].concat(args))), _this), _this.onKeyUp = function(e) {
          if (!_this.formatter.currentSpec) {
            return;
          }
          if (e.keyCode === 46 || e.keyCode === 8) {
            var blot = _quill2.default.find(_this.formatter.currentSpec.getTargetElement());
            if (blot) {
              blot.deleteAt(0);
            }
            _this.formatter.hide();
          }
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }
      _createClass(DeleteAction2, [{
        key: "onCreate",
        value: function onCreate() {
          document.addEventListener("keyup", this.onKeyUp, true);
          this.formatter.quill.root.addEventListener("input", this.onKeyUp, true);
        }
      }, {
        key: "onDestroy",
        value: function onDestroy() {
          document.removeEventListener("keyup", this.onKeyUp);
          this.formatter.quill.root.removeEventListener("input", this.onKeyUp);
        }
      }]);
      return DeleteAction2;
    }(_Action3.default);
    exports.default = DeleteAction;
  }
});

// node_modules/quill-blot-formatter/dist/specs/BlotSpec.js
var require_BlotSpec = __commonJS({
  "node_modules/quill-blot-formatter/dist/specs/BlotSpec.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _BlotFormatter = require_BlotFormatter();
    var _BlotFormatter2 = _interopRequireDefault(_BlotFormatter);
    var _Action = require_Action();
    var _Action2 = _interopRequireDefault(_Action);
    var _AlignAction = require_AlignAction();
    var _AlignAction2 = _interopRequireDefault(_AlignAction);
    var _ResizeAction = require_ResizeAction();
    var _ResizeAction2 = _interopRequireDefault(_ResizeAction);
    var _DeleteAction = require_DeleteAction();
    var _DeleteAction2 = _interopRequireDefault(_DeleteAction);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var BlotSpec = function() {
      function BlotSpec2(formatter) {
        _classCallCheck(this, BlotSpec2);
        this.formatter = formatter;
      }
      _createClass(BlotSpec2, [{
        key: "init",
        value: function init() {
        }
      }, {
        key: "getActions",
        value: function getActions() {
          return [_AlignAction2.default, _ResizeAction2.default, _DeleteAction2.default];
        }
      }, {
        key: "getTargetElement",
        value: function getTargetElement() {
          return null;
        }
      }, {
        key: "getOverlayElement",
        value: function getOverlayElement() {
          return this.getTargetElement();
        }
      }, {
        key: "setSelection",
        value: function setSelection() {
          this.formatter.quill.setSelection(null);
        }
      }, {
        key: "onHide",
        value: function onHide() {
        }
      }]);
      return BlotSpec2;
    }();
    exports.default = BlotSpec;
  }
});

// node_modules/quill-blot-formatter/dist/specs/ImageSpec.js
var require_ImageSpec = __commonJS({
  "node_modules/quill-blot-formatter/dist/specs/ImageSpec.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _BlotSpec2 = require_BlotSpec();
    var _BlotSpec3 = _interopRequireDefault(_BlotSpec2);
    var _BlotFormatter = require_BlotFormatter();
    var _BlotFormatter2 = _interopRequireDefault(_BlotFormatter);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var ImageSpec = function(_BlotSpec) {
      _inherits(ImageSpec2, _BlotSpec);
      function ImageSpec2(formatter) {
        _classCallCheck(this, ImageSpec2);
        var _this = _possibleConstructorReturn(this, (ImageSpec2.__proto__ || Object.getPrototypeOf(ImageSpec2)).call(this, formatter));
        _this.onClick = function(event) {
          var el = event.target;
          if (!(el instanceof HTMLElement) || el.tagName !== "IMG") {
            return;
          }
          _this.img = el;
          _this.formatter.show(_this);
        };
        _this.img = null;
        return _this;
      }
      _createClass(ImageSpec2, [{
        key: "init",
        value: function init() {
          this.formatter.quill.root.addEventListener("click", this.onClick);
        }
      }, {
        key: "getTargetElement",
        value: function getTargetElement() {
          return this.img;
        }
      }, {
        key: "onHide",
        value: function onHide() {
          this.img = null;
        }
      }]);
      return ImageSpec2;
    }(_BlotSpec3.default);
    exports.default = ImageSpec;
  }
});

// node_modules/quill-blot-formatter/dist/specs/UnclickableBlotSpec.js
var require_UnclickableBlotSpec = __commonJS({
  "node_modules/quill-blot-formatter/dist/specs/UnclickableBlotSpec.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _BlotSpec2 = require_BlotSpec();
    var _BlotSpec3 = _interopRequireDefault(_BlotSpec2);
    var _BlotFormatter = require_BlotFormatter();
    var _BlotFormatter2 = _interopRequireDefault(_BlotFormatter);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var MOUSE_ENTER_ATTRIBUTE = "data-blot-formatter-unclickable-bound";
    var PROXY_IMAGE_CLASS = "blot-formatter__proxy-image";
    var UnclickableBlotSpec = function(_BlotSpec) {
      _inherits(UnclickableBlotSpec2, _BlotSpec);
      function UnclickableBlotSpec2(formatter, selector) {
        _classCallCheck(this, UnclickableBlotSpec2);
        var _this = _possibleConstructorReturn(this, (UnclickableBlotSpec2.__proto__ || Object.getPrototypeOf(UnclickableBlotSpec2)).call(this, formatter));
        _this.onTextChange = function() {
          Array.from(document.querySelectorAll(_this.selector + ":not([" + MOUSE_ENTER_ATTRIBUTE + "])")).forEach(function(unclickable) {
            unclickable.setAttribute(MOUSE_ENTER_ATTRIBUTE, "true");
            unclickable.addEventListener("mouseenter", _this.onMouseEnter);
          });
        };
        _this.onMouseEnter = function(event) {
          var unclickable = event.target;
          if (!(unclickable instanceof HTMLElement)) {
            return;
          }
          _this.nextUnclickable = unclickable;
          _this.repositionProxyImage(_this.nextUnclickable);
        };
        _this.onProxyImageClick = function() {
          _this.unclickable = _this.nextUnclickable;
          _this.nextUnclickable = null;
          _this.formatter.show(_this);
          _this.hideProxyImage();
        };
        _this.selector = selector;
        _this.unclickable = null;
        _this.nextUnclickable = null;
        return _this;
      }
      _createClass(UnclickableBlotSpec2, [{
        key: "init",
        value: function init() {
          if (document.body) {
            document.body.appendChild(this.createProxyImage());
          }
          this.hideProxyImage();
          this.proxyImage.addEventListener("click", this.onProxyImageClick);
          this.formatter.quill.on("text-change", this.onTextChange);
        }
      }, {
        key: "getTargetElement",
        value: function getTargetElement() {
          return this.unclickable;
        }
      }, {
        key: "getOverlayElement",
        value: function getOverlayElement() {
          return this.unclickable;
        }
      }, {
        key: "onHide",
        value: function onHide() {
          this.hideProxyImage();
          this.nextUnclickable = null;
          this.unclickable = null;
        }
      }, {
        key: "createProxyImage",
        value: function createProxyImage() {
          var canvas = document.createElement("canvas");
          var context = canvas.getContext("2d");
          context.globalAlpha = 0;
          context.fillRect(0, 0, 1, 1);
          this.proxyImage = document.createElement("img");
          this.proxyImage.src = canvas.toDataURL("image/png");
          this.proxyImage.classList.add(PROXY_IMAGE_CLASS);
          Object.assign(this.proxyImage.style, {
            position: "absolute",
            margin: "0"
          });
          return this.proxyImage;
        }
      }, {
        key: "hideProxyImage",
        value: function hideProxyImage() {
          Object.assign(this.proxyImage.style, {
            display: "none"
          });
        }
      }, {
        key: "repositionProxyImage",
        value: function repositionProxyImage(unclickable) {
          var rect = unclickable.getBoundingClientRect();
          Object.assign(this.proxyImage.style, {
            display: "block",
            left: rect.left + window.pageXOffset + "px",
            top: rect.top + window.pageYOffset + "px",
            width: rect.width + "px",
            height: rect.height + "px"
          });
        }
      }]);
      return UnclickableBlotSpec2;
    }(_BlotSpec3.default);
    exports.default = UnclickableBlotSpec;
  }
});

// node_modules/quill-blot-formatter/dist/specs/IframeVideoSpec.js
var require_IframeVideoSpec = __commonJS({
  "node_modules/quill-blot-formatter/dist/specs/IframeVideoSpec.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _UnclickableBlotSpec2 = require_UnclickableBlotSpec();
    var _UnclickableBlotSpec3 = _interopRequireDefault(_UnclickableBlotSpec2);
    var _BlotFormatter = require_BlotFormatter();
    var _BlotFormatter2 = _interopRequireDefault(_BlotFormatter);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var IframeVideoSpec = function(_UnclickableBlotSpec) {
      _inherits(IframeVideoSpec2, _UnclickableBlotSpec);
      function IframeVideoSpec2(formatter) {
        _classCallCheck(this, IframeVideoSpec2);
        return _possibleConstructorReturn(this, (IframeVideoSpec2.__proto__ || Object.getPrototypeOf(IframeVideoSpec2)).call(this, formatter, "iframe.ql-video"));
      }
      return IframeVideoSpec2;
    }(_UnclickableBlotSpec3.default);
    exports.default = IframeVideoSpec;
  }
});

// node_modules/quill-blot-formatter/dist/Options.js
var require_Options = __commonJS({
  "node_modules/quill-blot-formatter/dist/Options.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _BlotSpec = require_BlotSpec();
    var _BlotSpec2 = _interopRequireDefault(_BlotSpec);
    var _ImageSpec = require_ImageSpec();
    var _ImageSpec2 = _interopRequireDefault(_ImageSpec);
    var _IframeVideoSpec = require_IframeVideoSpec();
    var _IframeVideoSpec2 = _interopRequireDefault(_IframeVideoSpec);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var DefaultOptions = {
      specs: [_ImageSpec2.default, _IframeVideoSpec2.default],
      overlay: {
        className: "blot-formatter__overlay",
        style: {
          position: "absolute",
          boxSizing: "border-box",
          border: "1px dashed #444"
        }
      },
      align: {
        attribute: "data-align",
        aligner: {
          applyStyle: true
        },
        icons: {
          left: '\n        <svg viewbox="0 0 18 18">\n          <line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"></line>\n          <line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"></line>\n          <line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"></line>\n        </svg>\n      ',
          center: '\n        <svg viewbox="0 0 18 18">\n           <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>\n          <line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"></line>\n          <line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"></line>\n        </svg>\n      ',
          right: '\n        <svg viewbox="0 0 18 18">\n          <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>\n          <line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"></line>\n          <line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"></line>\n        </svg>\n      '
        },
        toolbar: {
          allowDeselect: true,
          mainClassName: "blot-formatter__toolbar",
          mainStyle: {
            position: "absolute",
            top: "-12px",
            right: "0",
            left: "0",
            height: "0",
            minWidth: "100px",
            font: "12px/1.0 Arial, Helvetica, sans-serif",
            textAlign: "center",
            color: "#333",
            boxSizing: "border-box",
            cursor: "default",
            zIndex: "1"
          },
          buttonClassName: "blot-formatter__toolbar-button",
          addButtonSelectStyle: true,
          buttonStyle: {
            display: "inline-block",
            width: "24px",
            height: "24px",
            background: "white",
            border: "1px solid #999",
            verticalAlign: "middle"
          },
          svgStyle: {
            display: "inline-block",
            width: "24px",
            height: "24px",
            background: "white",
            border: "1px solid #999",
            verticalAlign: "middle"
          }
        }
      },
      resize: {
        handleClassName: "blot-formatter__resize-handle",
        handleStyle: {
          position: "absolute",
          height: "12px",
          width: "12px",
          backgroundColor: "white",
          border: "1px solid #777",
          boxSizing: "border-box",
          opacity: "0.80"
        }
      }
    };
    exports.default = DefaultOptions;
  }
});

// node_modules/quill-blot-formatter/dist/index.js
var require_dist = __commonJS({
  "node_modules/quill-blot-formatter/dist/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _Options = require_Options();
    Object.defineProperty(exports, "DefaultOptions", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_Options).default;
      }
    });
    var _BlotFormatter = require_BlotFormatter();
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_BlotFormatter).default;
      }
    });
    var _Action = require_Action();
    Object.defineProperty(exports, "Action", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_Action).default;
      }
    });
    var _AlignAction = require_AlignAction();
    Object.defineProperty(exports, "AlignAction", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_AlignAction).default;
      }
    });
    var _DefaultAligner = require_DefaultAligner();
    Object.defineProperty(exports, "DefaultAligner", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_DefaultAligner).default;
      }
    });
    var _DefaultToolbar = require_DefaultToolbar();
    Object.defineProperty(exports, "DefaultToolbar", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_DefaultToolbar).default;
      }
    });
    var _DeleteAction = require_DeleteAction();
    Object.defineProperty(exports, "DeleteAction", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_DeleteAction).default;
      }
    });
    var _ResizeAction = require_ResizeAction();
    Object.defineProperty(exports, "ResizeAction", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_ResizeAction).default;
      }
    });
    var _BlotSpec = require_BlotSpec();
    Object.defineProperty(exports, "BlotSpec", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_BlotSpec).default;
      }
    });
    var _ImageSpec = require_ImageSpec();
    Object.defineProperty(exports, "ImageSpec", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_ImageSpec).default;
      }
    });
    var _UnclickableBlotSpec = require_UnclickableBlotSpec();
    Object.defineProperty(exports, "UnclickableBlotSpec", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_UnclickableBlotSpec).default;
      }
    });
    var _IframeVideoSpec = require_IframeVideoSpec();
    Object.defineProperty(exports, "IframeVideoSpec", {
      enumerable: true,
      get: function get() {
        return _interopRequireDefault(_IframeVideoSpec).default;
      }
    });
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
  }
});
export default require_dist();
//# sourceMappingURL=quill-blot-formatter.js.map
