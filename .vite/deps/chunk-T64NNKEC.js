import {
  CheckOutlined_default,
  CopyOutlined_default,
  EditOutlined_default,
  EnterOutlined_default,
  LoadingOutlined_default
} from "./chunk-GJK67TDZ.js";
import {
  initZoomMotion
} from "./chunk-3WEAYJEI.js";
import {
  ContextIsolator_default,
  TextArea_default,
  es_default as es_default2
} from "./chunk-3Q5JLB4D.js";
import {
  getShadowRoot
} from "./chunk-O7Q32L42.js";
import {
  ConfigContext,
  PresetColors,
  _toConsumableArray,
  defaultPrefixCls,
  devUseWarning,
  es_default,
  genPresetColor,
  genStyleHooks,
  isDOM,
  merge2 as merge,
  omit,
  operationUnit,
  resetComponent,
  toArray,
  unit,
  useEvent,
  useLayoutEffect_default,
  useLocale_default,
  useMergedState,
  useToken
} from "./chunk-QTXOSBRK.js";
import {
  _slicedToArray,
  canUseDom,
  composeRef,
  fillRef,
  gold,
  removeCSS,
  supportRef,
  updateCSS,
  useComposeRef,
  warning,
  warning_default
} from "./chunk-C5TVQLKE.js";
import {
  _extends,
  _objectSpread2,
  _objectWithoutProperties,
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

// node_modules/toggle-selection/index.js
var require_toggle_selection = __commonJS({
  "node_modules/toggle-selection/index.js"(exports, module) {
    module.exports = function() {
      var selection = document.getSelection();
      if (!selection.rangeCount) {
        return function() {
        };
      }
      var active = document.activeElement;
      var ranges = [];
      for (var i = 0; i < selection.rangeCount; i++) {
        ranges.push(selection.getRangeAt(i));
      }
      switch (active.tagName.toUpperCase()) {
        case "INPUT":
        case "TEXTAREA":
          active.blur();
          break;
        default:
          active = null;
          break;
      }
      selection.removeAllRanges();
      return function() {
        selection.type === "Caret" && selection.removeAllRanges();
        if (!selection.rangeCount) {
          ranges.forEach(function(range) {
            selection.addRange(range);
          });
        }
        active && active.focus();
      };
    };
  }
});

// node_modules/copy-to-clipboard/index.js
var require_copy_to_clipboard = __commonJS({
  "node_modules/copy-to-clipboard/index.js"(exports, module) {
    "use strict";
    var deselectCurrent = require_toggle_selection();
    var clipboardToIE11Formatting = {
      "text/plain": "Text",
      "text/html": "Url",
      "default": "Text"
    };
    var defaultMessage = "Copy to clipboard: #{key}, Enter";
    function format(message) {
      var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
      return message.replace(/#{\s*key\s*}/g, copyKey);
    }
    function copy2(text, options) {
      var debug, message, reselectPrevious, range, selection, mark, success = false;
      if (!options) {
        options = {};
      }
      debug = options.debug || false;
      try {
        reselectPrevious = deselectCurrent();
        range = document.createRange();
        selection = document.getSelection();
        mark = document.createElement("span");
        mark.textContent = text;
        mark.ariaHidden = "true";
        mark.style.all = "unset";
        mark.style.position = "fixed";
        mark.style.top = 0;
        mark.style.clip = "rect(0, 0, 0, 0)";
        mark.style.whiteSpace = "pre";
        mark.style.webkitUserSelect = "text";
        mark.style.MozUserSelect = "text";
        mark.style.msUserSelect = "text";
        mark.style.userSelect = "text";
        mark.addEventListener("copy", function(e) {
          e.stopPropagation();
          if (options.format) {
            e.preventDefault();
            if (typeof e.clipboardData === "undefined") {
              debug && console.warn("unable to use e.clipboardData");
              debug && console.warn("trying IE specific stuff");
              window.clipboardData.clearData();
              var format2 = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
              window.clipboardData.setData(format2, text);
            } else {
              e.clipboardData.clearData();
              e.clipboardData.setData(options.format, text);
            }
          }
          if (options.onCopy) {
            e.preventDefault();
            options.onCopy(e.clipboardData);
          }
        });
        document.body.appendChild(mark);
        range.selectNodeContents(mark);
        selection.addRange(range);
        var successful = document.execCommand("copy");
        if (!successful) {
          throw new Error("copy command was unsuccessful");
        }
        success = true;
      } catch (err) {
        debug && console.error("unable to copy using execCommand: ", err);
        debug && console.warn("trying IE specific stuff");
        try {
          window.clipboardData.setData(options.format || "text", text);
          options.onCopy && options.onCopy(window.clipboardData);
          success = true;
        } catch (err2) {
          debug && console.error("unable to copy using clipboardData: ", err2);
          debug && console.error("falling back to prompt");
          message = format("message" in options ? options.message : defaultMessage);
          window.prompt(message, text);
        }
      } finally {
        if (selection) {
          if (typeof selection.removeRange == "function") {
            selection.removeRange(range);
          } else {
            selection.removeAllRanges();
          }
        }
        if (mark) {
          document.body.removeChild(mark);
        }
        reselectPrevious();
      }
      return success;
    }
    module.exports = copy2;
  }
});

// node_modules/antd/es/typography/Title.js
var React31 = __toESM(require_react());

// node_modules/antd/es/typography/Base/index.js
var React30 = __toESM(require_react());
var import_classnames12 = __toESM(require_classnames());

// node_modules/rc-util/es/Dom/styleChecker.js
var isStyleNameSupport = function isStyleNameSupport2(styleName) {
  if (canUseDom() && window.document.documentElement) {
    var styleNameList = Array.isArray(styleName) ? styleName : [styleName];
    var documentElement = window.document.documentElement;
    return styleNameList.some(function(name) {
      return name in documentElement.style;
    });
  }
  return false;
};
var isStyleValueSupport = function isStyleValueSupport2(styleName, value) {
  if (!isStyleNameSupport(styleName)) {
    return false;
  }
  var ele = document.createElement("div");
  var origin = ele.style[styleName];
  ele.style[styleName] = value;
  return ele.style[styleName] !== origin;
};
function isStyleSupport(styleName, styleValue) {
  if (!Array.isArray(styleName) && styleValue !== void 0) {
    return isStyleValueSupport(styleName, styleValue);
  }
  return isStyleNameSupport(styleName);
}

// node_modules/antd/es/_util/styleChecker.js
var canUseDocElement = () => canUseDom() && window.document.documentElement;

// node_modules/antd/es/tooltip/index.js
var React22 = __toESM(require_react());
var import_classnames8 = __toESM(require_classnames());

// node_modules/rc-tooltip/es/Popup.js
var import_classnames = __toESM(require_classnames());
var React = __toESM(require_react());
function Popup(props) {
  var children = props.children, prefixCls = props.prefixCls, id = props.id, overlayInnerStyle = props.overlayInnerStyle, className = props.className, style = props.style;
  return React.createElement("div", {
    className: (0, import_classnames.default)("".concat(prefixCls, "-content"), className),
    style
  }, React.createElement("div", {
    className: "".concat(prefixCls, "-inner"),
    id,
    role: "tooltip",
    style: overlayInnerStyle
  }, typeof children === "function" ? children() : children));
}

// node_modules/@rc-component/portal/es/Portal.js
var React5 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// node_modules/@rc-component/portal/es/Context.js
var React2 = __toESM(require_react());
var OrderContext = React2.createContext(null);
var Context_default = OrderContext;

// node_modules/@rc-component/portal/es/useDom.js
var React3 = __toESM(require_react());
var EMPTY_LIST = [];
function useDom(render, debug) {
  var _React$useState = React3.useState(function() {
    if (!canUseDom()) {
      return null;
    }
    var defaultEle = document.createElement("div");
    if (debug) {
      defaultEle.setAttribute("data-debug", debug);
    }
    return defaultEle;
  }), _React$useState2 = _slicedToArray(_React$useState, 1), ele = _React$useState2[0];
  var appendedRef = React3.useRef(false);
  var queueCreate = React3.useContext(Context_default);
  var _React$useState3 = React3.useState(EMPTY_LIST), _React$useState4 = _slicedToArray(_React$useState3, 2), queue = _React$useState4[0], setQueue = _React$useState4[1];
  var mergedQueueCreate = queueCreate || (appendedRef.current ? void 0 : function(appendFn) {
    setQueue(function(origin) {
      var newQueue = [appendFn].concat(_toConsumableArray(origin));
      return newQueue;
    });
  });
  function append() {
    if (!ele.parentElement) {
      document.body.appendChild(ele);
    }
    appendedRef.current = true;
  }
  function cleanup() {
    var _ele$parentElement;
    (_ele$parentElement = ele.parentElement) === null || _ele$parentElement === void 0 ? void 0 : _ele$parentElement.removeChild(ele);
    appendedRef.current = false;
  }
  useLayoutEffect_default(function() {
    if (render) {
      if (queueCreate) {
        queueCreate(append);
      } else {
        append();
      }
    } else {
      cleanup();
    }
    return cleanup;
  }, [render]);
  useLayoutEffect_default(function() {
    if (queue.length) {
      queue.forEach(function(appendFn) {
        return appendFn();
      });
      setQueue(EMPTY_LIST);
    }
  }, [queue]);
  return [ele, mergedQueueCreate];
}

// node_modules/@rc-component/portal/es/useScrollLocker.js
var React4 = __toESM(require_react());

// node_modules/rc-util/es/getScrollBarSize.js
var cached;
function measureScrollbarSize(ele) {
  var randomId = "rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7));
  var measureEle = document.createElement("div");
  measureEle.id = randomId;
  var measureStyle = measureEle.style;
  measureStyle.position = "absolute";
  measureStyle.left = "0";
  measureStyle.top = "0";
  measureStyle.width = "100px";
  measureStyle.height = "100px";
  measureStyle.overflow = "scroll";
  var fallbackWidth;
  var fallbackHeight;
  if (ele) {
    var targetStyle = getComputedStyle(ele);
    measureStyle.scrollbarColor = targetStyle.scrollbarColor;
    measureStyle.scrollbarWidth = targetStyle.scrollbarWidth;
    var webkitScrollbarStyle = getComputedStyle(ele, "::-webkit-scrollbar");
    var width = parseInt(webkitScrollbarStyle.width, 10);
    var height = parseInt(webkitScrollbarStyle.height, 10);
    try {
      var widthStyle = width ? "width: ".concat(webkitScrollbarStyle.width, ";") : "";
      var heightStyle = height ? "height: ".concat(webkitScrollbarStyle.height, ";") : "";
      updateCSS("\n#".concat(randomId, "::-webkit-scrollbar {\n").concat(widthStyle, "\n").concat(heightStyle, "\n}"), randomId);
    } catch (e) {
      console.error(e);
      fallbackWidth = width;
      fallbackHeight = height;
    }
  }
  document.body.appendChild(measureEle);
  var scrollWidth = ele && fallbackWidth && !isNaN(fallbackWidth) ? fallbackWidth : measureEle.offsetWidth - measureEle.clientWidth;
  var scrollHeight = ele && fallbackHeight && !isNaN(fallbackHeight) ? fallbackHeight : measureEle.offsetHeight - measureEle.clientHeight;
  document.body.removeChild(measureEle);
  removeCSS(randomId);
  return {
    width: scrollWidth,
    height: scrollHeight
  };
}
function getScrollBarSize(fresh) {
  if (typeof document === "undefined") {
    return 0;
  }
  if (fresh || cached === void 0) {
    cached = measureScrollbarSize();
  }
  return cached.width;
}
function getTargetScrollBarSize(target) {
  if (typeof document === "undefined" || !target || !(target instanceof Element)) {
    return {
      width: 0,
      height: 0
    };
  }
  return measureScrollbarSize(target);
}

// node_modules/@rc-component/portal/es/util.js
function isBodyOverflowing() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}

// node_modules/@rc-component/portal/es/useScrollLocker.js
var UNIQUE_ID = "rc-util-locker-".concat(Date.now());
var uuid = 0;
function useScrollLocker(lock) {
  var mergedLock = !!lock;
  var _React$useState = React4.useState(function() {
    uuid += 1;
    return "".concat(UNIQUE_ID, "_").concat(uuid);
  }), _React$useState2 = _slicedToArray(_React$useState, 1), id = _React$useState2[0];
  useLayoutEffect_default(function() {
    if (mergedLock) {
      var scrollbarSize = getTargetScrollBarSize(document.body).width;
      var isOverflow = isBodyOverflowing();
      updateCSS("\nhtml body {\n  overflow-y: hidden;\n  ".concat(isOverflow ? "width: calc(100% - ".concat(scrollbarSize, "px);") : "", "\n}"), id);
    } else {
      removeCSS(id);
    }
    return function() {
      removeCSS(id);
    };
  }, [mergedLock, id]);
}

// node_modules/@rc-component/portal/es/mock.js
var inline = false;
function inlineMock(nextInline) {
  if (typeof nextInline === "boolean") {
    inline = nextInline;
  }
  return inline;
}

// node_modules/@rc-component/portal/es/Portal.js
var getPortalContainer = function getPortalContainer2(getContainer) {
  if (getContainer === false) {
    return false;
  }
  if (!canUseDom() || !getContainer) {
    return null;
  }
  if (typeof getContainer === "string") {
    return document.querySelector(getContainer);
  }
  if (typeof getContainer === "function") {
    return getContainer();
  }
  return getContainer;
};
var Portal = React5.forwardRef(function(props, ref) {
  var open = props.open, autoLock = props.autoLock, getContainer = props.getContainer, debug = props.debug, _props$autoDestroy = props.autoDestroy, autoDestroy = _props$autoDestroy === void 0 ? true : _props$autoDestroy, children = props.children;
  var _React$useState = React5.useState(open), _React$useState2 = _slicedToArray(_React$useState, 2), shouldRender = _React$useState2[0], setShouldRender = _React$useState2[1];
  var mergedRender = shouldRender || open;
  if (true) {
    warning_default(canUseDom() || !open, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR.");
  }
  React5.useEffect(function() {
    if (autoDestroy || open) {
      setShouldRender(open);
    }
  }, [open, autoDestroy]);
  var _React$useState3 = React5.useState(function() {
    return getPortalContainer(getContainer);
  }), _React$useState4 = _slicedToArray(_React$useState3, 2), innerContainer = _React$useState4[0], setInnerContainer = _React$useState4[1];
  React5.useEffect(function() {
    var customizeContainer = getPortalContainer(getContainer);
    setInnerContainer(customizeContainer !== null && customizeContainer !== void 0 ? customizeContainer : null);
  });
  var _useDom = useDom(mergedRender && !innerContainer, debug), _useDom2 = _slicedToArray(_useDom, 2), defaultContainer = _useDom2[0], queueCreate = _useDom2[1];
  var mergedContainer = innerContainer !== null && innerContainer !== void 0 ? innerContainer : defaultContainer;
  useScrollLocker(autoLock && open && canUseDom() && (mergedContainer === defaultContainer || mergedContainer === document.body));
  var childRef = null;
  if (children && supportRef(children) && ref) {
    var _ref = children;
    childRef = _ref.ref;
  }
  var mergedRef = useComposeRef(childRef, ref);
  if (!mergedRender || !canUseDom() || innerContainer === void 0) {
    return null;
  }
  var renderInline = mergedContainer === false || inlineMock();
  var reffedChildren = children;
  if (ref) {
    reffedChildren = React5.cloneElement(children, {
      ref: mergedRef
    });
  }
  return React5.createElement(Context_default.Provider, {
    value: queueCreate
  }, renderInline ? reffedChildren : (0, import_react_dom.createPortal)(reffedChildren, mergedContainer));
});
if (true) {
  Portal.displayName = "Portal";
}
var Portal_default = Portal;

// node_modules/@rc-component/portal/es/index.js
var es_default3 = Portal_default;

// node_modules/@rc-component/trigger/es/index.js
var import_classnames5 = __toESM(require_classnames());

// node_modules/rc-util/es/hooks/useId.js
var React6 = __toESM(require_react());
function getUseId() {
  var fullClone = _objectSpread2({}, React6);
  return fullClone.useId;
}
var uuid2 = 0;
var useOriginId = getUseId();
var useId_default = useOriginId ? (
  // Use React `useId`
  function useId(id) {
    var reactId = useOriginId();
    if (id) {
      return id;
    }
    if (false) {
      return "test-id";
    }
    return reactId;
  }
) : (
  // Use compatible of `useId`
  function useCompatId(id) {
    var _React$useState = React6.useState("ssr-id"), _React$useState2 = _slicedToArray(_React$useState, 2), innerId = _React$useState2[0], setInnerId = _React$useState2[1];
    React6.useEffect(function() {
      var nextId = uuid2;
      uuid2 += 1;
      setInnerId("rc_unique_".concat(nextId));
    }, []);
    if (id) {
      return id;
    }
    if (false) {
      return "test-id";
    }
    return innerId;
  }
);

// node_modules/rc-util/es/isMobile.js
var isMobile_default = function() {
  if (typeof navigator === "undefined" || typeof window === "undefined") {
    return false;
  }
  var agent = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(agent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(agent === null || agent === void 0 ? void 0 : agent.substr(0, 4));
};

// node_modules/@rc-component/trigger/es/index.js
var React16 = __toESM(require_react());

// node_modules/@rc-component/trigger/es/Popup/index.js
var import_classnames4 = __toESM(require_classnames());
var React10 = __toESM(require_react());

// node_modules/@rc-component/trigger/es/Popup/Arrow.js
var import_classnames2 = __toESM(require_classnames());
var React7 = __toESM(require_react());
function Arrow(props) {
  var prefixCls = props.prefixCls, align = props.align, arrow = props.arrow, arrowPos = props.arrowPos;
  var _ref = arrow || {}, className = _ref.className, content = _ref.content;
  var _arrowPos$x = arrowPos.x, x = _arrowPos$x === void 0 ? 0 : _arrowPos$x, _arrowPos$y = arrowPos.y, y = _arrowPos$y === void 0 ? 0 : _arrowPos$y;
  var arrowRef = React7.useRef();
  if (!align || !align.points) {
    return null;
  }
  var alignStyle = {
    position: "absolute"
  };
  if (align.autoArrow !== false) {
    var popupPoints = align.points[0];
    var targetPoints = align.points[1];
    var popupTB = popupPoints[0];
    var popupLR = popupPoints[1];
    var targetTB = targetPoints[0];
    var targetLR = targetPoints[1];
    if (popupTB === targetTB || !["t", "b"].includes(popupTB)) {
      alignStyle.top = y;
    } else if (popupTB === "t") {
      alignStyle.top = 0;
    } else {
      alignStyle.bottom = 0;
    }
    if (popupLR === targetLR || !["l", "r"].includes(popupLR)) {
      alignStyle.left = x;
    } else if (popupLR === "l") {
      alignStyle.left = 0;
    } else {
      alignStyle.right = 0;
    }
  }
  return React7.createElement("div", {
    ref: arrowRef,
    className: (0, import_classnames2.default)("".concat(prefixCls, "-arrow"), className),
    style: alignStyle
  }, content);
}

// node_modules/@rc-component/trigger/es/Popup/Mask.js
var import_classnames3 = __toESM(require_classnames());
var React8 = __toESM(require_react());
function Mask(props) {
  var prefixCls = props.prefixCls, open = props.open, zIndex = props.zIndex, mask = props.mask, motion = props.motion;
  if (!mask) {
    return null;
  }
  return React8.createElement(es_default, _extends({}, motion, {
    motionAppear: true,
    visible: open,
    removeOnLeave: true
  }), function(_ref) {
    var className = _ref.className;
    return React8.createElement("div", {
      style: {
        zIndex
      },
      className: (0, import_classnames3.default)("".concat(prefixCls, "-mask"), className)
    });
  });
}

// node_modules/@rc-component/trigger/es/Popup/PopupContent.js
var React9 = __toESM(require_react());
var PopupContent = React9.memo(function(_ref) {
  var children = _ref.children;
  return children;
}, function(_, next) {
  return next.cache;
});
if (true) {
  PopupContent.displayName = "PopupContent";
}
var PopupContent_default = PopupContent;

// node_modules/@rc-component/trigger/es/Popup/index.js
var Popup2 = React10.forwardRef(function(props, ref) {
  var popup = props.popup, className = props.className, prefixCls = props.prefixCls, style = props.style, target = props.target, _onVisibleChanged = props.onVisibleChanged, open = props.open, keepDom = props.keepDom, fresh = props.fresh, onClick = props.onClick, mask = props.mask, arrow = props.arrow, arrowPos = props.arrowPos, align = props.align, motion = props.motion, maskMotion = props.maskMotion, forceRender = props.forceRender, getPopupContainer = props.getPopupContainer, autoDestroy = props.autoDestroy, Portal2 = props.portal, zIndex = props.zIndex, onMouseEnter = props.onMouseEnter, onMouseLeave = props.onMouseLeave, onPointerEnter = props.onPointerEnter, ready = props.ready, offsetX = props.offsetX, offsetY = props.offsetY, offsetR = props.offsetR, offsetB = props.offsetB, onAlign = props.onAlign, onPrepare = props.onPrepare, stretch = props.stretch, targetWidth = props.targetWidth, targetHeight = props.targetHeight;
  var childNode = typeof popup === "function" ? popup() : popup;
  var isNodeVisible = open || keepDom;
  var getPopupContainerNeedParams = (getPopupContainer === null || getPopupContainer === void 0 ? void 0 : getPopupContainer.length) > 0;
  var _React$useState = React10.useState(!getPopupContainer || !getPopupContainerNeedParams), _React$useState2 = _slicedToArray(_React$useState, 2), show = _React$useState2[0], setShow = _React$useState2[1];
  useLayoutEffect_default(function() {
    if (!show && getPopupContainerNeedParams && target) {
      setShow(true);
    }
  }, [show, getPopupContainerNeedParams, target]);
  if (!show) {
    return null;
  }
  var AUTO = "auto";
  var offsetStyle = {
    left: "-1000vw",
    top: "-1000vh",
    right: AUTO,
    bottom: AUTO
  };
  if (ready || !open) {
    var _experimental;
    var points = align.points;
    var dynamicInset = align.dynamicInset || ((_experimental = align._experimental) === null || _experimental === void 0 ? void 0 : _experimental.dynamicInset);
    var alignRight = dynamicInset && points[0][1] === "r";
    var alignBottom = dynamicInset && points[0][0] === "b";
    if (alignRight) {
      offsetStyle.right = offsetR;
      offsetStyle.left = AUTO;
    } else {
      offsetStyle.left = offsetX;
      offsetStyle.right = AUTO;
    }
    if (alignBottom) {
      offsetStyle.bottom = offsetB;
      offsetStyle.top = AUTO;
    } else {
      offsetStyle.top = offsetY;
      offsetStyle.bottom = AUTO;
    }
  }
  var miscStyle = {};
  if (stretch) {
    if (stretch.includes("height") && targetHeight) {
      miscStyle.height = targetHeight;
    } else if (stretch.includes("minHeight") && targetHeight) {
      miscStyle.minHeight = targetHeight;
    }
    if (stretch.includes("width") && targetWidth) {
      miscStyle.width = targetWidth;
    } else if (stretch.includes("minWidth") && targetWidth) {
      miscStyle.minWidth = targetWidth;
    }
  }
  if (!open) {
    miscStyle.pointerEvents = "none";
  }
  return React10.createElement(Portal2, {
    open: forceRender || isNodeVisible,
    getContainer: getPopupContainer && function() {
      return getPopupContainer(target);
    },
    autoDestroy
  }, React10.createElement(Mask, {
    prefixCls,
    open,
    zIndex,
    mask,
    motion: maskMotion
  }), React10.createElement(es_default2, {
    onResize: onAlign,
    disabled: !open
  }, function(resizeObserverRef) {
    return React10.createElement(es_default, _extends({
      motionAppear: true,
      motionEnter: true,
      motionLeave: true,
      removeOnLeave: false,
      forceRender,
      leavedClassName: "".concat(prefixCls, "-hidden")
    }, motion, {
      onAppearPrepare: onPrepare,
      onEnterPrepare: onPrepare,
      visible: open,
      onVisibleChanged: function onVisibleChanged(nextVisible) {
        var _motion$onVisibleChan;
        motion === null || motion === void 0 || (_motion$onVisibleChan = motion.onVisibleChanged) === null || _motion$onVisibleChan === void 0 || _motion$onVisibleChan.call(motion, nextVisible);
        _onVisibleChanged(nextVisible);
      }
    }), function(_ref, motionRef) {
      var motionClassName = _ref.className, motionStyle = _ref.style;
      var cls = (0, import_classnames4.default)(prefixCls, motionClassName, className);
      return React10.createElement("div", {
        ref: composeRef(resizeObserverRef, ref, motionRef),
        className: cls,
        style: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({
          "--arrow-x": "".concat(arrowPos.x || 0, "px"),
          "--arrow-y": "".concat(arrowPos.y || 0, "px")
        }, offsetStyle), miscStyle), motionStyle), {}, {
          boxSizing: "border-box",
          zIndex
        }, style),
        onMouseEnter,
        onMouseLeave,
        onPointerEnter,
        onClick
      }, arrow && React10.createElement(Arrow, {
        prefixCls,
        arrow,
        arrowPos,
        align
      }), React10.createElement(PopupContent_default, {
        cache: !open && !fresh
      }, childNode));
    });
  }));
});
if (true) {
  Popup2.displayName = "Popup";
}
var Popup_default = Popup2;

// node_modules/@rc-component/trigger/es/TriggerWrapper.js
var React11 = __toESM(require_react());
var TriggerWrapper = React11.forwardRef(function(props, ref) {
  var children = props.children, getTriggerDOMNode = props.getTriggerDOMNode;
  var canUseRef = supportRef(children);
  var setRef = React11.useCallback(function(node) {
    fillRef(ref, getTriggerDOMNode ? getTriggerDOMNode(node) : node);
  }, [getTriggerDOMNode]);
  var mergedRef = useComposeRef(setRef, children.ref);
  return canUseRef ? React11.cloneElement(children, {
    ref: mergedRef
  }) : children;
});
if (true) {
  TriggerWrapper.displayName = "TriggerWrapper";
}
var TriggerWrapper_default = TriggerWrapper;

// node_modules/@rc-component/trigger/es/context.js
var React12 = __toESM(require_react());
var TriggerContext = React12.createContext(null);
var context_default = TriggerContext;

// node_modules/@rc-component/trigger/es/hooks/useAction.js
var React13 = __toESM(require_react());
function toArray2(val) {
  return val ? Array.isArray(val) ? val : [val] : [];
}
function useAction(mobile, action, showAction, hideAction) {
  return React13.useMemo(function() {
    var mergedShowAction = toArray2(showAction !== null && showAction !== void 0 ? showAction : action);
    var mergedHideAction = toArray2(hideAction !== null && hideAction !== void 0 ? hideAction : action);
    var showActionSet = new Set(mergedShowAction);
    var hideActionSet = new Set(mergedHideAction);
    if (mobile) {
      if (showActionSet.has("hover")) {
        showActionSet.delete("hover");
        showActionSet.add("click");
      }
      if (hideActionSet.has("hover")) {
        hideActionSet.delete("hover");
        hideActionSet.add("click");
      }
    }
    return [showActionSet, hideActionSet];
  }, [mobile, action, showAction, hideAction]);
}

// node_modules/rc-util/es/Dom/isVisible.js
var isVisible_default = function(element) {
  if (!element) {
    return false;
  }
  if (element instanceof Element) {
    if (element.offsetParent) {
      return true;
    }
    if (element.getBBox) {
      var _getBBox = element.getBBox(), width = _getBBox.width, height = _getBBox.height;
      if (width || height) {
        return true;
      }
    }
    if (element.getBoundingClientRect) {
      var _element$getBoundingC = element.getBoundingClientRect(), _width = _element$getBoundingC.width, _height = _element$getBoundingC.height;
      if (_width || _height) {
        return true;
      }
    }
  }
  return false;
};

// node_modules/@rc-component/trigger/es/hooks/useAlign.js
var React14 = __toESM(require_react());

// node_modules/@rc-component/trigger/es/util.js
function isPointsEq() {
  var a1 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  var a2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  var isAlignPoint = arguments.length > 2 ? arguments[2] : void 0;
  if (isAlignPoint) {
    return a1[0] === a2[0];
  }
  return a1[0] === a2[0] && a1[1] === a2[1];
}
function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
  var points = align.points;
  var placements2 = Object.keys(builtinPlacements);
  for (var i = 0; i < placements2.length; i += 1) {
    var _builtinPlacements$pl;
    var placement = placements2[i];
    if (isPointsEq((_builtinPlacements$pl = builtinPlacements[placement]) === null || _builtinPlacements$pl === void 0 ? void 0 : _builtinPlacements$pl.points, points, isAlignPoint)) {
      return "".concat(prefixCls, "-placement-").concat(placement);
    }
  }
  return "";
}
function getMotion(prefixCls, motion, animation, transitionName) {
  if (motion) {
    return motion;
  }
  if (animation) {
    return {
      motionName: "".concat(prefixCls, "-").concat(animation)
    };
  }
  if (transitionName) {
    return {
      motionName: transitionName
    };
  }
  return null;
}
function getWin(ele) {
  return ele.ownerDocument.defaultView;
}
function collectScroller(ele) {
  var scrollerList = [];
  var current = ele === null || ele === void 0 ? void 0 : ele.parentElement;
  var scrollStyle = ["hidden", "scroll", "clip", "auto"];
  while (current) {
    var _getWin$getComputedSt = getWin(current).getComputedStyle(current), overflowX = _getWin$getComputedSt.overflowX, overflowY = _getWin$getComputedSt.overflowY, overflow = _getWin$getComputedSt.overflow;
    if ([overflowX, overflowY, overflow].some(function(o) {
      return scrollStyle.includes(o);
    })) {
      scrollerList.push(current);
    }
    current = current.parentElement;
  }
  return scrollerList;
}
function toNum(num) {
  var defaultValue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(num) ? defaultValue : num;
}
function getPxValue(val) {
  return toNum(parseFloat(val), 0);
}
function getVisibleArea(initArea, scrollerList) {
  var visibleArea = _objectSpread2({}, initArea);
  (scrollerList || []).forEach(function(ele) {
    if (ele instanceof HTMLBodyElement || ele instanceof HTMLHtmlElement) {
      return;
    }
    var _getWin$getComputedSt2 = getWin(ele).getComputedStyle(ele), overflow = _getWin$getComputedSt2.overflow, overflowClipMargin = _getWin$getComputedSt2.overflowClipMargin, borderTopWidth = _getWin$getComputedSt2.borderTopWidth, borderBottomWidth = _getWin$getComputedSt2.borderBottomWidth, borderLeftWidth = _getWin$getComputedSt2.borderLeftWidth, borderRightWidth = _getWin$getComputedSt2.borderRightWidth;
    var eleRect = ele.getBoundingClientRect();
    var eleOutHeight = ele.offsetHeight, eleInnerHeight = ele.clientHeight, eleOutWidth = ele.offsetWidth, eleInnerWidth = ele.clientWidth;
    var borderTopNum = getPxValue(borderTopWidth);
    var borderBottomNum = getPxValue(borderBottomWidth);
    var borderLeftNum = getPxValue(borderLeftWidth);
    var borderRightNum = getPxValue(borderRightWidth);
    var scaleX = toNum(Math.round(eleRect.width / eleOutWidth * 1e3) / 1e3);
    var scaleY = toNum(Math.round(eleRect.height / eleOutHeight * 1e3) / 1e3);
    var eleScrollWidth = (eleOutWidth - eleInnerWidth - borderLeftNum - borderRightNum) * scaleX;
    var eleScrollHeight = (eleOutHeight - eleInnerHeight - borderTopNum - borderBottomNum) * scaleY;
    var scaledBorderTopWidth = borderTopNum * scaleY;
    var scaledBorderBottomWidth = borderBottomNum * scaleY;
    var scaledBorderLeftWidth = borderLeftNum * scaleX;
    var scaledBorderRightWidth = borderRightNum * scaleX;
    var clipMarginWidth = 0;
    var clipMarginHeight = 0;
    if (overflow === "clip") {
      var clipNum = getPxValue(overflowClipMargin);
      clipMarginWidth = clipNum * scaleX;
      clipMarginHeight = clipNum * scaleY;
    }
    var eleLeft = eleRect.x + scaledBorderLeftWidth - clipMarginWidth;
    var eleTop = eleRect.y + scaledBorderTopWidth - clipMarginHeight;
    var eleRight = eleLeft + eleRect.width + 2 * clipMarginWidth - scaledBorderLeftWidth - scaledBorderRightWidth - eleScrollWidth;
    var eleBottom = eleTop + eleRect.height + 2 * clipMarginHeight - scaledBorderTopWidth - scaledBorderBottomWidth - eleScrollHeight;
    visibleArea.left = Math.max(visibleArea.left, eleLeft);
    visibleArea.top = Math.max(visibleArea.top, eleTop);
    visibleArea.right = Math.min(visibleArea.right, eleRight);
    visibleArea.bottom = Math.min(visibleArea.bottom, eleBottom);
  });
  return visibleArea;
}

// node_modules/@rc-component/trigger/es/hooks/useAlign.js
function getUnitOffset(size) {
  var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var offsetStr = "".concat(offset);
  var cells = offsetStr.match(/^(.*)\%$/);
  if (cells) {
    return size * (parseFloat(cells[1]) / 100);
  }
  return parseFloat(offsetStr);
}
function getNumberOffset(rect, offset) {
  var _ref = offset || [], _ref2 = _slicedToArray(_ref, 2), offsetX = _ref2[0], offsetY = _ref2[1];
  return [getUnitOffset(rect.width, offsetX), getUnitOffset(rect.height, offsetY)];
}
function splitPoints() {
  var points = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [points[0], points[1]];
}
function getAlignPoint(rect, points) {
  var topBottom = points[0];
  var leftRight = points[1];
  var x;
  var y;
  if (topBottom === "t") {
    y = rect.y;
  } else if (topBottom === "b") {
    y = rect.y + rect.height;
  } else {
    y = rect.y + rect.height / 2;
  }
  if (leftRight === "l") {
    x = rect.x;
  } else if (leftRight === "r") {
    x = rect.x + rect.width;
  } else {
    x = rect.x + rect.width / 2;
  }
  return {
    x,
    y
  };
}
function reversePoints(points, index) {
  var reverseMap = {
    t: "b",
    b: "t",
    l: "r",
    r: "l"
  };
  return points.map(function(point, i) {
    if (i === index) {
      return reverseMap[point] || "c";
    }
    return point;
  }).join("");
}
function useAlign(open, popupEle, target, placement, builtinPlacements, popupAlign, onPopupAlign) {
  var _React$useState = React14.useState({
    ready: false,
    offsetX: 0,
    offsetY: 0,
    offsetR: 0,
    offsetB: 0,
    arrowX: 0,
    arrowY: 0,
    scaleX: 1,
    scaleY: 1,
    align: builtinPlacements[placement] || {}
  }), _React$useState2 = _slicedToArray(_React$useState, 2), offsetInfo = _React$useState2[0], setOffsetInfo = _React$useState2[1];
  var alignCountRef = React14.useRef(0);
  var scrollerList = React14.useMemo(function() {
    if (!popupEle) {
      return [];
    }
    return collectScroller(popupEle);
  }, [popupEle]);
  var prevFlipRef = React14.useRef({});
  var resetFlipCache = function resetFlipCache2() {
    prevFlipRef.current = {};
  };
  if (!open) {
    resetFlipCache();
  }
  var onAlign = useEvent(function() {
    if (popupEle && target && open) {
      let getIntersectionVisibleArea = function(offsetX, offsetY) {
        var area = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : visibleArea;
        var l = popupRect.x + offsetX;
        var t = popupRect.y + offsetY;
        var r = l + popupWidth;
        var b = t + popupHeight;
        var visibleL = Math.max(l, area.left);
        var visibleT = Math.max(t, area.top);
        var visibleR = Math.min(r, area.right);
        var visibleB = Math.min(b, area.bottom);
        return Math.max(0, (visibleR - visibleL) * (visibleB - visibleT));
      }, syncNextPopupPosition = function() {
        nextPopupY = popupRect.y + nextOffsetY;
        nextPopupBottom = nextPopupY + popupHeight;
        nextPopupX = popupRect.x + nextOffsetX;
        nextPopupRight = nextPopupX + popupWidth;
      };
      var _popupElement$parentE, _popupRect$x, _popupRect$y, _popupElement$parentE2;
      var popupElement = popupEle;
      var doc = popupElement.ownerDocument;
      var win = getWin(popupElement);
      var _win$getComputedStyle = win.getComputedStyle(popupElement), width = _win$getComputedStyle.width, height = _win$getComputedStyle.height, popupPosition = _win$getComputedStyle.position;
      var originLeft = popupElement.style.left;
      var originTop = popupElement.style.top;
      var originRight = popupElement.style.right;
      var originBottom = popupElement.style.bottom;
      var originOverflow = popupElement.style.overflow;
      var placementInfo = _objectSpread2(_objectSpread2({}, builtinPlacements[placement]), popupAlign);
      var placeholderElement = doc.createElement("div");
      (_popupElement$parentE = popupElement.parentElement) === null || _popupElement$parentE === void 0 || _popupElement$parentE.appendChild(placeholderElement);
      placeholderElement.style.left = "".concat(popupElement.offsetLeft, "px");
      placeholderElement.style.top = "".concat(popupElement.offsetTop, "px");
      placeholderElement.style.position = popupPosition;
      placeholderElement.style.height = "".concat(popupElement.offsetHeight, "px");
      placeholderElement.style.width = "".concat(popupElement.offsetWidth, "px");
      popupElement.style.left = "0";
      popupElement.style.top = "0";
      popupElement.style.right = "auto";
      popupElement.style.bottom = "auto";
      popupElement.style.overflow = "hidden";
      var targetRect;
      if (Array.isArray(target)) {
        targetRect = {
          x: target[0],
          y: target[1],
          width: 0,
          height: 0
        };
      } else {
        var _rect$x, _rect$y;
        var rect = target.getBoundingClientRect();
        rect.x = (_rect$x = rect.x) !== null && _rect$x !== void 0 ? _rect$x : rect.left;
        rect.y = (_rect$y = rect.y) !== null && _rect$y !== void 0 ? _rect$y : rect.top;
        targetRect = {
          x: rect.x,
          y: rect.y,
          width: rect.width,
          height: rect.height
        };
      }
      var popupRect = popupElement.getBoundingClientRect();
      popupRect.x = (_popupRect$x = popupRect.x) !== null && _popupRect$x !== void 0 ? _popupRect$x : popupRect.left;
      popupRect.y = (_popupRect$y = popupRect.y) !== null && _popupRect$y !== void 0 ? _popupRect$y : popupRect.top;
      var _doc$documentElement = doc.documentElement, clientWidth = _doc$documentElement.clientWidth, clientHeight = _doc$documentElement.clientHeight, scrollWidth = _doc$documentElement.scrollWidth, scrollHeight = _doc$documentElement.scrollHeight, scrollTop = _doc$documentElement.scrollTop, scrollLeft = _doc$documentElement.scrollLeft;
      var popupHeight = popupRect.height;
      var popupWidth = popupRect.width;
      var targetHeight = targetRect.height;
      var targetWidth = targetRect.width;
      var visibleRegion = {
        left: 0,
        top: 0,
        right: clientWidth,
        bottom: clientHeight
      };
      var scrollRegion = {
        left: -scrollLeft,
        top: -scrollTop,
        right: scrollWidth - scrollLeft,
        bottom: scrollHeight - scrollTop
      };
      var htmlRegion = placementInfo.htmlRegion;
      var VISIBLE = "visible";
      var VISIBLE_FIRST = "visibleFirst";
      if (htmlRegion !== "scroll" && htmlRegion !== VISIBLE_FIRST) {
        htmlRegion = VISIBLE;
      }
      var isVisibleFirst = htmlRegion === VISIBLE_FIRST;
      var scrollRegionArea = getVisibleArea(scrollRegion, scrollerList);
      var visibleRegionArea = getVisibleArea(visibleRegion, scrollerList);
      var visibleArea = htmlRegion === VISIBLE ? visibleRegionArea : scrollRegionArea;
      var adjustCheckVisibleArea = isVisibleFirst ? visibleRegionArea : visibleArea;
      popupElement.style.left = "auto";
      popupElement.style.top = "auto";
      popupElement.style.right = "0";
      popupElement.style.bottom = "0";
      var popupMirrorRect = popupElement.getBoundingClientRect();
      popupElement.style.left = originLeft;
      popupElement.style.top = originTop;
      popupElement.style.right = originRight;
      popupElement.style.bottom = originBottom;
      popupElement.style.overflow = originOverflow;
      (_popupElement$parentE2 = popupElement.parentElement) === null || _popupElement$parentE2 === void 0 || _popupElement$parentE2.removeChild(placeholderElement);
      var _scaleX = toNum(Math.round(popupWidth / parseFloat(width) * 1e3) / 1e3);
      var _scaleY = toNum(Math.round(popupHeight / parseFloat(height) * 1e3) / 1e3);
      if (_scaleX === 0 || _scaleY === 0 || isDOM(target) && !isVisible_default(target)) {
        return;
      }
      var offset = placementInfo.offset, targetOffset2 = placementInfo.targetOffset;
      var _getNumberOffset = getNumberOffset(popupRect, offset), _getNumberOffset2 = _slicedToArray(_getNumberOffset, 2), popupOffsetX = _getNumberOffset2[0], popupOffsetY = _getNumberOffset2[1];
      var _getNumberOffset3 = getNumberOffset(targetRect, targetOffset2), _getNumberOffset4 = _slicedToArray(_getNumberOffset3, 2), targetOffsetX = _getNumberOffset4[0], targetOffsetY = _getNumberOffset4[1];
      targetRect.x -= targetOffsetX;
      targetRect.y -= targetOffsetY;
      var _ref3 = placementInfo.points || [], _ref4 = _slicedToArray(_ref3, 2), popupPoint = _ref4[0], targetPoint = _ref4[1];
      var targetPoints = splitPoints(targetPoint);
      var popupPoints = splitPoints(popupPoint);
      var targetAlignPoint = getAlignPoint(targetRect, targetPoints);
      var popupAlignPoint = getAlignPoint(popupRect, popupPoints);
      var nextAlignInfo = _objectSpread2({}, placementInfo);
      var nextOffsetX = targetAlignPoint.x - popupAlignPoint.x + popupOffsetX;
      var nextOffsetY = targetAlignPoint.y - popupAlignPoint.y + popupOffsetY;
      var originIntersectionVisibleArea = getIntersectionVisibleArea(nextOffsetX, nextOffsetY);
      var originIntersectionRecommendArea = getIntersectionVisibleArea(nextOffsetX, nextOffsetY, visibleRegionArea);
      var targetAlignPointTL = getAlignPoint(targetRect, ["t", "l"]);
      var popupAlignPointTL = getAlignPoint(popupRect, ["t", "l"]);
      var targetAlignPointBR = getAlignPoint(targetRect, ["b", "r"]);
      var popupAlignPointBR = getAlignPoint(popupRect, ["b", "r"]);
      var overflow = placementInfo.overflow || {};
      var adjustX = overflow.adjustX, adjustY = overflow.adjustY, shiftX = overflow.shiftX, shiftY = overflow.shiftY;
      var supportAdjust = function supportAdjust2(val) {
        if (typeof val === "boolean") {
          return val;
        }
        return val >= 0;
      };
      var nextPopupY;
      var nextPopupBottom;
      var nextPopupX;
      var nextPopupRight;
      syncNextPopupPosition();
      var needAdjustY = supportAdjust(adjustY);
      var sameTB = popupPoints[0] === targetPoints[0];
      if (needAdjustY && popupPoints[0] === "t" && (nextPopupBottom > adjustCheckVisibleArea.bottom || prevFlipRef.current.bt)) {
        var tmpNextOffsetY = nextOffsetY;
        if (sameTB) {
          tmpNextOffsetY -= popupHeight - targetHeight;
        } else {
          tmpNextOffsetY = targetAlignPointTL.y - popupAlignPointBR.y - popupOffsetY;
        }
        var newVisibleArea = getIntersectionVisibleArea(nextOffsetX, tmpNextOffsetY);
        var newVisibleRecommendArea = getIntersectionVisibleArea(nextOffsetX, tmpNextOffsetY, visibleRegionArea);
        if (
          // Of course use larger one
          newVisibleArea > originIntersectionVisibleArea || newVisibleArea === originIntersectionVisibleArea && (!isVisibleFirst || // Choose recommend one
          newVisibleRecommendArea >= originIntersectionRecommendArea)
        ) {
          prevFlipRef.current.bt = true;
          nextOffsetY = tmpNextOffsetY;
          popupOffsetY = -popupOffsetY;
          nextAlignInfo.points = [reversePoints(popupPoints, 0), reversePoints(targetPoints, 0)];
        } else {
          prevFlipRef.current.bt = false;
        }
      }
      if (needAdjustY && popupPoints[0] === "b" && (nextPopupY < adjustCheckVisibleArea.top || prevFlipRef.current.tb)) {
        var _tmpNextOffsetY = nextOffsetY;
        if (sameTB) {
          _tmpNextOffsetY += popupHeight - targetHeight;
        } else {
          _tmpNextOffsetY = targetAlignPointBR.y - popupAlignPointTL.y - popupOffsetY;
        }
        var _newVisibleArea = getIntersectionVisibleArea(nextOffsetX, _tmpNextOffsetY);
        var _newVisibleRecommendArea = getIntersectionVisibleArea(nextOffsetX, _tmpNextOffsetY, visibleRegionArea);
        if (
          // Of course use larger one
          _newVisibleArea > originIntersectionVisibleArea || _newVisibleArea === originIntersectionVisibleArea && (!isVisibleFirst || // Choose recommend one
          _newVisibleRecommendArea >= originIntersectionRecommendArea)
        ) {
          prevFlipRef.current.tb = true;
          nextOffsetY = _tmpNextOffsetY;
          popupOffsetY = -popupOffsetY;
          nextAlignInfo.points = [reversePoints(popupPoints, 0), reversePoints(targetPoints, 0)];
        } else {
          prevFlipRef.current.tb = false;
        }
      }
      var needAdjustX = supportAdjust(adjustX);
      var sameLR = popupPoints[1] === targetPoints[1];
      if (needAdjustX && popupPoints[1] === "l" && (nextPopupRight > adjustCheckVisibleArea.right || prevFlipRef.current.rl)) {
        var tmpNextOffsetX = nextOffsetX;
        if (sameLR) {
          tmpNextOffsetX -= popupWidth - targetWidth;
        } else {
          tmpNextOffsetX = targetAlignPointTL.x - popupAlignPointBR.x - popupOffsetX;
        }
        var _newVisibleArea2 = getIntersectionVisibleArea(tmpNextOffsetX, nextOffsetY);
        var _newVisibleRecommendArea2 = getIntersectionVisibleArea(tmpNextOffsetX, nextOffsetY, visibleRegionArea);
        if (
          // Of course use larger one
          _newVisibleArea2 > originIntersectionVisibleArea || _newVisibleArea2 === originIntersectionVisibleArea && (!isVisibleFirst || // Choose recommend one
          _newVisibleRecommendArea2 >= originIntersectionRecommendArea)
        ) {
          prevFlipRef.current.rl = true;
          nextOffsetX = tmpNextOffsetX;
          popupOffsetX = -popupOffsetX;
          nextAlignInfo.points = [reversePoints(popupPoints, 1), reversePoints(targetPoints, 1)];
        } else {
          prevFlipRef.current.rl = false;
        }
      }
      if (needAdjustX && popupPoints[1] === "r" && (nextPopupX < adjustCheckVisibleArea.left || prevFlipRef.current.lr)) {
        var _tmpNextOffsetX = nextOffsetX;
        if (sameLR) {
          _tmpNextOffsetX += popupWidth - targetWidth;
        } else {
          _tmpNextOffsetX = targetAlignPointBR.x - popupAlignPointTL.x - popupOffsetX;
        }
        var _newVisibleArea3 = getIntersectionVisibleArea(_tmpNextOffsetX, nextOffsetY);
        var _newVisibleRecommendArea3 = getIntersectionVisibleArea(_tmpNextOffsetX, nextOffsetY, visibleRegionArea);
        if (
          // Of course use larger one
          _newVisibleArea3 > originIntersectionVisibleArea || _newVisibleArea3 === originIntersectionVisibleArea && (!isVisibleFirst || // Choose recommend one
          _newVisibleRecommendArea3 >= originIntersectionRecommendArea)
        ) {
          prevFlipRef.current.lr = true;
          nextOffsetX = _tmpNextOffsetX;
          popupOffsetX = -popupOffsetX;
          nextAlignInfo.points = [reversePoints(popupPoints, 1), reversePoints(targetPoints, 1)];
        } else {
          prevFlipRef.current.lr = false;
        }
      }
      syncNextPopupPosition();
      var numShiftX = shiftX === true ? 0 : shiftX;
      if (typeof numShiftX === "number") {
        if (nextPopupX < visibleRegionArea.left) {
          nextOffsetX -= nextPopupX - visibleRegionArea.left - popupOffsetX;
          if (targetRect.x + targetWidth < visibleRegionArea.left + numShiftX) {
            nextOffsetX += targetRect.x - visibleRegionArea.left + targetWidth - numShiftX;
          }
        }
        if (nextPopupRight > visibleRegionArea.right) {
          nextOffsetX -= nextPopupRight - visibleRegionArea.right - popupOffsetX;
          if (targetRect.x > visibleRegionArea.right - numShiftX) {
            nextOffsetX += targetRect.x - visibleRegionArea.right + numShiftX;
          }
        }
      }
      var numShiftY = shiftY === true ? 0 : shiftY;
      if (typeof numShiftY === "number") {
        if (nextPopupY < visibleRegionArea.top) {
          nextOffsetY -= nextPopupY - visibleRegionArea.top - popupOffsetY;
          if (targetRect.y + targetHeight < visibleRegionArea.top + numShiftY) {
            nextOffsetY += targetRect.y - visibleRegionArea.top + targetHeight - numShiftY;
          }
        }
        if (nextPopupBottom > visibleRegionArea.bottom) {
          nextOffsetY -= nextPopupBottom - visibleRegionArea.bottom - popupOffsetY;
          if (targetRect.y > visibleRegionArea.bottom - numShiftY) {
            nextOffsetY += targetRect.y - visibleRegionArea.bottom + numShiftY;
          }
        }
      }
      var popupLeft = popupRect.x + nextOffsetX;
      var popupRight = popupLeft + popupWidth;
      var popupTop = popupRect.y + nextOffsetY;
      var popupBottom = popupTop + popupHeight;
      var targetLeft = targetRect.x;
      var targetRight = targetLeft + targetWidth;
      var targetTop = targetRect.y;
      var targetBottom = targetTop + targetHeight;
      var maxLeft = Math.max(popupLeft, targetLeft);
      var minRight = Math.min(popupRight, targetRight);
      var xCenter = (maxLeft + minRight) / 2;
      var nextArrowX = xCenter - popupLeft;
      var maxTop = Math.max(popupTop, targetTop);
      var minBottom = Math.min(popupBottom, targetBottom);
      var yCenter = (maxTop + minBottom) / 2;
      var nextArrowY = yCenter - popupTop;
      onPopupAlign === null || onPopupAlign === void 0 || onPopupAlign(popupEle, nextAlignInfo);
      var offsetX4Right = popupMirrorRect.right - popupRect.x - (nextOffsetX + popupRect.width);
      var offsetY4Bottom = popupMirrorRect.bottom - popupRect.y - (nextOffsetY + popupRect.height);
      if (_scaleX === 1) {
        nextOffsetX = Math.round(nextOffsetX);
        offsetX4Right = Math.round(offsetX4Right);
      }
      if (_scaleY === 1) {
        nextOffsetY = Math.round(nextOffsetY);
        offsetY4Bottom = Math.round(offsetY4Bottom);
      }
      var nextOffsetInfo = {
        ready: true,
        offsetX: nextOffsetX / _scaleX,
        offsetY: nextOffsetY / _scaleY,
        offsetR: offsetX4Right / _scaleX,
        offsetB: offsetY4Bottom / _scaleY,
        arrowX: nextArrowX / _scaleX,
        arrowY: nextArrowY / _scaleY,
        scaleX: _scaleX,
        scaleY: _scaleY,
        align: nextAlignInfo
      };
      setOffsetInfo(nextOffsetInfo);
    }
  });
  var triggerAlign = function triggerAlign2() {
    alignCountRef.current += 1;
    var id = alignCountRef.current;
    Promise.resolve().then(function() {
      if (alignCountRef.current === id) {
        onAlign();
      }
    });
  };
  var resetReady = function resetReady2() {
    setOffsetInfo(function(ori) {
      return _objectSpread2(_objectSpread2({}, ori), {}, {
        ready: false
      });
    });
  };
  useLayoutEffect_default(resetReady, [placement]);
  useLayoutEffect_default(function() {
    if (!open) {
      resetReady();
    }
  }, [open]);
  return [offsetInfo.ready, offsetInfo.offsetX, offsetInfo.offsetY, offsetInfo.offsetR, offsetInfo.offsetB, offsetInfo.arrowX, offsetInfo.arrowY, offsetInfo.scaleX, offsetInfo.scaleY, offsetInfo.align, triggerAlign];
}

// node_modules/@rc-component/trigger/es/hooks/useWatch.js
function useWatch(open, target, popup, onAlign, onScroll) {
  useLayoutEffect_default(function() {
    if (open && target && popup) {
      let notifyScroll = function() {
        onAlign();
        onScroll();
      };
      var targetElement = target;
      var popupElement = popup;
      var targetScrollList = collectScroller(targetElement);
      var popupScrollList = collectScroller(popupElement);
      var win = getWin(popupElement);
      var mergedList = new Set([win].concat(_toConsumableArray(targetScrollList), _toConsumableArray(popupScrollList)));
      mergedList.forEach(function(scroller) {
        scroller.addEventListener("scroll", notifyScroll, {
          passive: true
        });
      });
      win.addEventListener("resize", notifyScroll, {
        passive: true
      });
      onAlign();
      return function() {
        mergedList.forEach(function(scroller) {
          scroller.removeEventListener("scroll", notifyScroll);
          win.removeEventListener("resize", notifyScroll);
        });
      };
    }
  }, [open, target, popup]);
}

// node_modules/@rc-component/trigger/es/hooks/useWinClick.js
var React15 = __toESM(require_react());
function useWinClick(open, clickToHide, targetEle, popupEle, mask, maskClosable, inPopupOrChild, triggerOpen) {
  var openRef = React15.useRef(open);
  openRef.current = open;
  React15.useEffect(function() {
    if (clickToHide && popupEle && (!mask || maskClosable)) {
      var onTriggerClose = function onTriggerClose2(e) {
        var _e$composedPath;
        if (openRef.current && !inPopupOrChild(((_e$composedPath = e.composedPath) === null || _e$composedPath === void 0 || (_e$composedPath = _e$composedPath.call(e)) === null || _e$composedPath === void 0 ? void 0 : _e$composedPath[0]) || e.target)) {
          triggerOpen(false);
        }
      };
      var win = getWin(popupEle);
      win.addEventListener("mousedown", onTriggerClose, true);
      win.addEventListener("contextmenu", onTriggerClose, true);
      var targetShadowRoot = getShadowRoot(targetEle);
      if (targetShadowRoot) {
        targetShadowRoot.addEventListener("mousedown", onTriggerClose, true);
        targetShadowRoot.addEventListener("contextmenu", onTriggerClose, true);
      }
      if (true) {
        var _targetEle$getRootNod, _popupEle$getRootNode;
        var targetRoot = targetEle === null || targetEle === void 0 || (_targetEle$getRootNod = targetEle.getRootNode) === null || _targetEle$getRootNod === void 0 ? void 0 : _targetEle$getRootNod.call(targetEle);
        var popupRoot = (_popupEle$getRootNode = popupEle.getRootNode) === null || _popupEle$getRootNode === void 0 ? void 0 : _popupEle$getRootNode.call(popupEle);
        warning(targetRoot === popupRoot, "trigger element and popup element should in same shadow root.");
      }
      return function() {
        win.removeEventListener("mousedown", onTriggerClose, true);
        win.removeEventListener("contextmenu", onTriggerClose, true);
        if (targetShadowRoot) {
          targetShadowRoot.removeEventListener("mousedown", onTriggerClose, true);
          targetShadowRoot.removeEventListener("contextmenu", onTriggerClose, true);
        }
      };
    }
  }, [clickToHide, targetEle, popupEle, mask, maskClosable]);
}

// node_modules/@rc-component/trigger/es/index.js
var _excluded = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function generateTrigger() {
  var PortalComponent = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : es_default3;
  var Trigger = React16.forwardRef(function(props, ref) {
    var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-trigger-popup" : _props$prefixCls, children = props.children, _props$action = props.action, action = _props$action === void 0 ? "hover" : _props$action, showAction = props.showAction, hideAction = props.hideAction, popupVisible = props.popupVisible, defaultPopupVisible = props.defaultPopupVisible, onPopupVisibleChange = props.onPopupVisibleChange, afterPopupVisibleChange = props.afterPopupVisibleChange, mouseEnterDelay = props.mouseEnterDelay, _props$mouseLeaveDela = props.mouseLeaveDelay, mouseLeaveDelay = _props$mouseLeaveDela === void 0 ? 0.1 : _props$mouseLeaveDela, focusDelay = props.focusDelay, blurDelay = props.blurDelay, mask = props.mask, _props$maskClosable = props.maskClosable, maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable, getPopupContainer = props.getPopupContainer, forceRender = props.forceRender, autoDestroy = props.autoDestroy, destroyPopupOnHide = props.destroyPopupOnHide, popup = props.popup, popupClassName = props.popupClassName, popupStyle = props.popupStyle, popupPlacement = props.popupPlacement, _props$builtinPlaceme = props.builtinPlacements, builtinPlacements = _props$builtinPlaceme === void 0 ? {} : _props$builtinPlaceme, popupAlign = props.popupAlign, zIndex = props.zIndex, stretch = props.stretch, getPopupClassNameFromAlign = props.getPopupClassNameFromAlign, fresh = props.fresh, alignPoint = props.alignPoint, onPopupClick = props.onPopupClick, onPopupAlign = props.onPopupAlign, arrow = props.arrow, popupMotion = props.popupMotion, maskMotion = props.maskMotion, popupTransitionName = props.popupTransitionName, popupAnimation = props.popupAnimation, maskTransitionName = props.maskTransitionName, maskAnimation = props.maskAnimation, className = props.className, getTriggerDOMNode = props.getTriggerDOMNode, restProps = _objectWithoutProperties(props, _excluded);
    var mergedAutoDestroy = autoDestroy || destroyPopupOnHide || false;
    var _React$useState = React16.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), mobile = _React$useState2[0], setMobile = _React$useState2[1];
    useLayoutEffect_default(function() {
      setMobile(isMobile_default());
    }, []);
    var subPopupElements = React16.useRef({});
    var parentContext = React16.useContext(context_default);
    var context = React16.useMemo(function() {
      return {
        registerSubPopup: function registerSubPopup(id2, subPopupEle) {
          subPopupElements.current[id2] = subPopupEle;
          parentContext === null || parentContext === void 0 || parentContext.registerSubPopup(id2, subPopupEle);
        }
      };
    }, [parentContext]);
    var id = useId_default();
    var _React$useState3 = React16.useState(null), _React$useState4 = _slicedToArray(_React$useState3, 2), popupEle = _React$useState4[0], setPopupEle = _React$useState4[1];
    var externalPopupRef = React16.useRef(null);
    var setPopupRef = useEvent(function(node) {
      externalPopupRef.current = node;
      if (isDOM(node) && popupEle !== node) {
        setPopupEle(node);
      }
      parentContext === null || parentContext === void 0 || parentContext.registerSubPopup(id, node);
    });
    var _React$useState5 = React16.useState(null), _React$useState6 = _slicedToArray(_React$useState5, 2), targetEle = _React$useState6[0], setTargetEle = _React$useState6[1];
    var externalForwardRef = React16.useRef(null);
    var setTargetRef = useEvent(function(node) {
      if (isDOM(node) && targetEle !== node) {
        setTargetEle(node);
        externalForwardRef.current = node;
      }
    });
    var child = React16.Children.only(children);
    var originChildProps = (child === null || child === void 0 ? void 0 : child.props) || {};
    var cloneProps = {};
    var inPopupOrChild = useEvent(function(ele) {
      var _getShadowRoot, _getShadowRoot2;
      var childDOM = targetEle;
      return (childDOM === null || childDOM === void 0 ? void 0 : childDOM.contains(ele)) || ((_getShadowRoot = getShadowRoot(childDOM)) === null || _getShadowRoot === void 0 ? void 0 : _getShadowRoot.host) === ele || ele === childDOM || (popupEle === null || popupEle === void 0 ? void 0 : popupEle.contains(ele)) || ((_getShadowRoot2 = getShadowRoot(popupEle)) === null || _getShadowRoot2 === void 0 ? void 0 : _getShadowRoot2.host) === ele || ele === popupEle || Object.values(subPopupElements.current).some(function(subPopupEle) {
        return (subPopupEle === null || subPopupEle === void 0 ? void 0 : subPopupEle.contains(ele)) || ele === subPopupEle;
      });
    });
    var mergePopupMotion = getMotion(prefixCls, popupMotion, popupAnimation, popupTransitionName);
    var mergeMaskMotion = getMotion(prefixCls, maskMotion, maskAnimation, maskTransitionName);
    var _React$useState7 = React16.useState(defaultPopupVisible || false), _React$useState8 = _slicedToArray(_React$useState7, 2), internalOpen = _React$useState8[0], setInternalOpen = _React$useState8[1];
    var mergedOpen = popupVisible !== null && popupVisible !== void 0 ? popupVisible : internalOpen;
    var setMergedOpen = useEvent(function(nextOpen) {
      if (popupVisible === void 0) {
        setInternalOpen(nextOpen);
      }
    });
    useLayoutEffect_default(function() {
      setInternalOpen(popupVisible || false);
    }, [popupVisible]);
    var openRef = React16.useRef(mergedOpen);
    openRef.current = mergedOpen;
    var lastTriggerRef = React16.useRef([]);
    lastTriggerRef.current = [];
    var internalTriggerOpen = useEvent(function(nextOpen) {
      var _lastTriggerRef$curre;
      setMergedOpen(nextOpen);
      if (((_lastTriggerRef$curre = lastTriggerRef.current[lastTriggerRef.current.length - 1]) !== null && _lastTriggerRef$curre !== void 0 ? _lastTriggerRef$curre : mergedOpen) !== nextOpen) {
        lastTriggerRef.current.push(nextOpen);
        onPopupVisibleChange === null || onPopupVisibleChange === void 0 || onPopupVisibleChange(nextOpen);
      }
    });
    var delayRef = React16.useRef();
    var clearDelay = function clearDelay2() {
      clearTimeout(delayRef.current);
    };
    var triggerOpen = function triggerOpen2(nextOpen) {
      var delay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      clearDelay();
      if (delay === 0) {
        internalTriggerOpen(nextOpen);
      } else {
        delayRef.current = setTimeout(function() {
          internalTriggerOpen(nextOpen);
        }, delay * 1e3);
      }
    };
    React16.useEffect(function() {
      return clearDelay;
    }, []);
    var _React$useState9 = React16.useState(false), _React$useState10 = _slicedToArray(_React$useState9, 2), inMotion = _React$useState10[0], setInMotion = _React$useState10[1];
    useLayoutEffect_default(function(firstMount) {
      if (!firstMount || mergedOpen) {
        setInMotion(true);
      }
    }, [mergedOpen]);
    var _React$useState11 = React16.useState(null), _React$useState12 = _slicedToArray(_React$useState11, 2), motionPrepareResolve = _React$useState12[0], setMotionPrepareResolve = _React$useState12[1];
    var _React$useState13 = React16.useState(null), _React$useState14 = _slicedToArray(_React$useState13, 2), mousePos = _React$useState14[0], setMousePos = _React$useState14[1];
    var setMousePosByEvent = function setMousePosByEvent2(event) {
      setMousePos([event.clientX, event.clientY]);
    };
    var _useAlign = useAlign(mergedOpen, popupEle, alignPoint && mousePos !== null ? mousePos : targetEle, popupPlacement, builtinPlacements, popupAlign, onPopupAlign), _useAlign2 = _slicedToArray(_useAlign, 11), ready = _useAlign2[0], offsetX = _useAlign2[1], offsetY = _useAlign2[2], offsetR = _useAlign2[3], offsetB = _useAlign2[4], arrowX = _useAlign2[5], arrowY = _useAlign2[6], scaleX = _useAlign2[7], scaleY = _useAlign2[8], alignInfo = _useAlign2[9], onAlign = _useAlign2[10];
    var _useAction = useAction(mobile, action, showAction, hideAction), _useAction2 = _slicedToArray(_useAction, 2), showActions = _useAction2[0], hideActions = _useAction2[1];
    var clickToShow = showActions.has("click");
    var clickToHide = hideActions.has("click") || hideActions.has("contextMenu");
    var triggerAlign = useEvent(function() {
      if (!inMotion) {
        onAlign();
      }
    });
    var onScroll = function onScroll2() {
      if (openRef.current && alignPoint && clickToHide) {
        triggerOpen(false);
      }
    };
    useWatch(mergedOpen, targetEle, popupEle, triggerAlign, onScroll);
    useLayoutEffect_default(function() {
      triggerAlign();
    }, [mousePos, popupPlacement]);
    useLayoutEffect_default(function() {
      if (mergedOpen && !(builtinPlacements !== null && builtinPlacements !== void 0 && builtinPlacements[popupPlacement])) {
        triggerAlign();
      }
    }, [JSON.stringify(popupAlign)]);
    var alignedClassName = React16.useMemo(function() {
      var baseClassName = getAlignPopupClassName(builtinPlacements, prefixCls, alignInfo, alignPoint);
      return (0, import_classnames5.default)(baseClassName, getPopupClassNameFromAlign === null || getPopupClassNameFromAlign === void 0 ? void 0 : getPopupClassNameFromAlign(alignInfo));
    }, [alignInfo, getPopupClassNameFromAlign, builtinPlacements, prefixCls, alignPoint]);
    React16.useImperativeHandle(ref, function() {
      return {
        nativeElement: externalForwardRef.current,
        popupElement: externalPopupRef.current,
        forceAlign: triggerAlign
      };
    });
    var _React$useState15 = React16.useState(0), _React$useState16 = _slicedToArray(_React$useState15, 2), targetWidth = _React$useState16[0], setTargetWidth = _React$useState16[1];
    var _React$useState17 = React16.useState(0), _React$useState18 = _slicedToArray(_React$useState17, 2), targetHeight = _React$useState18[0], setTargetHeight = _React$useState18[1];
    var syncTargetSize = function syncTargetSize2() {
      if (stretch && targetEle) {
        var rect = targetEle.getBoundingClientRect();
        setTargetWidth(rect.width);
        setTargetHeight(rect.height);
      }
    };
    var onTargetResize = function onTargetResize2() {
      syncTargetSize();
      triggerAlign();
    };
    var onVisibleChanged = function onVisibleChanged2(visible) {
      setInMotion(false);
      onAlign();
      afterPopupVisibleChange === null || afterPopupVisibleChange === void 0 || afterPopupVisibleChange(visible);
    };
    var onPrepare = function onPrepare2() {
      return new Promise(function(resolve) {
        syncTargetSize();
        setMotionPrepareResolve(function() {
          return resolve;
        });
      });
    };
    useLayoutEffect_default(function() {
      if (motionPrepareResolve) {
        onAlign();
        motionPrepareResolve();
        setMotionPrepareResolve(null);
      }
    }, [motionPrepareResolve]);
    function wrapperAction(eventName, nextOpen, delay, preEvent) {
      cloneProps[eventName] = function(event) {
        var _originChildProps$eve;
        preEvent === null || preEvent === void 0 || preEvent(event);
        triggerOpen(nextOpen, delay);
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        (_originChildProps$eve = originChildProps[eventName]) === null || _originChildProps$eve === void 0 || _originChildProps$eve.call.apply(_originChildProps$eve, [originChildProps, event].concat(args));
      };
    }
    if (clickToShow || clickToHide) {
      cloneProps.onClick = function(event) {
        var _originChildProps$onC;
        if (openRef.current && clickToHide) {
          triggerOpen(false);
        } else if (!openRef.current && clickToShow) {
          setMousePosByEvent(event);
          triggerOpen(true);
        }
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        (_originChildProps$onC = originChildProps.onClick) === null || _originChildProps$onC === void 0 || _originChildProps$onC.call.apply(_originChildProps$onC, [originChildProps, event].concat(args));
      };
    }
    useWinClick(mergedOpen, clickToHide, targetEle, popupEle, mask, maskClosable, inPopupOrChild, triggerOpen);
    var hoverToShow = showActions.has("hover");
    var hoverToHide = hideActions.has("hover");
    var onPopupMouseEnter;
    var onPopupMouseLeave;
    if (hoverToShow) {
      wrapperAction("onMouseEnter", true, mouseEnterDelay, function(event) {
        setMousePosByEvent(event);
      });
      wrapperAction("onPointerEnter", true, mouseEnterDelay, function(event) {
        setMousePosByEvent(event);
      });
      onPopupMouseEnter = function onPopupMouseEnter2(event) {
        if ((mergedOpen || inMotion) && popupEle !== null && popupEle !== void 0 && popupEle.contains(event.target)) {
          triggerOpen(true, mouseEnterDelay);
        }
      };
      if (alignPoint) {
        cloneProps.onMouseMove = function(event) {
          var _originChildProps$onM;
          (_originChildProps$onM = originChildProps.onMouseMove) === null || _originChildProps$onM === void 0 || _originChildProps$onM.call(originChildProps, event);
        };
      }
    }
    if (hoverToHide) {
      wrapperAction("onMouseLeave", false, mouseLeaveDelay);
      wrapperAction("onPointerLeave", false, mouseLeaveDelay);
      onPopupMouseLeave = function onPopupMouseLeave2() {
        triggerOpen(false, mouseLeaveDelay);
      };
    }
    if (showActions.has("focus")) {
      wrapperAction("onFocus", true, focusDelay);
    }
    if (hideActions.has("focus")) {
      wrapperAction("onBlur", false, blurDelay);
    }
    if (showActions.has("contextMenu")) {
      cloneProps.onContextMenu = function(event) {
        var _originChildProps$onC2;
        if (openRef.current && hideActions.has("contextMenu")) {
          triggerOpen(false);
        } else {
          setMousePosByEvent(event);
          triggerOpen(true);
        }
        event.preventDefault();
        for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          args[_key3 - 1] = arguments[_key3];
        }
        (_originChildProps$onC2 = originChildProps.onContextMenu) === null || _originChildProps$onC2 === void 0 || _originChildProps$onC2.call.apply(_originChildProps$onC2, [originChildProps, event].concat(args));
      };
    }
    if (className) {
      cloneProps.className = (0, import_classnames5.default)(originChildProps.className, className);
    }
    var mergedChildrenProps = _objectSpread2(_objectSpread2({}, originChildProps), cloneProps);
    var passedProps = {};
    var passedEventList = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    passedEventList.forEach(function(eventName) {
      if (restProps[eventName]) {
        passedProps[eventName] = function() {
          var _mergedChildrenProps$;
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }
          (_mergedChildrenProps$ = mergedChildrenProps[eventName]) === null || _mergedChildrenProps$ === void 0 || _mergedChildrenProps$.call.apply(_mergedChildrenProps$, [mergedChildrenProps].concat(args));
          restProps[eventName].apply(restProps, args);
        };
      }
    });
    var triggerNode = React16.cloneElement(child, _objectSpread2(_objectSpread2({}, mergedChildrenProps), passedProps));
    var arrowPos = {
      x: arrowX,
      y: arrowY
    };
    var innerArrow = arrow ? _objectSpread2({}, arrow !== true ? arrow : {}) : null;
    return React16.createElement(React16.Fragment, null, React16.createElement(es_default2, {
      disabled: !mergedOpen,
      ref: setTargetRef,
      onResize: onTargetResize
    }, React16.createElement(TriggerWrapper_default, {
      getTriggerDOMNode
    }, triggerNode)), React16.createElement(context_default.Provider, {
      value: context
    }, React16.createElement(Popup_default, {
      portal: PortalComponent,
      ref: setPopupRef,
      prefixCls,
      popup,
      className: (0, import_classnames5.default)(popupClassName, alignedClassName),
      style: popupStyle,
      target: targetEle,
      onMouseEnter: onPopupMouseEnter,
      onMouseLeave: onPopupMouseLeave,
      onPointerEnter: onPopupMouseEnter,
      zIndex,
      open: mergedOpen,
      keepDom: inMotion,
      fresh,
      onClick: onPopupClick,
      mask,
      motion: mergePopupMotion,
      maskMotion: mergeMaskMotion,
      onVisibleChanged,
      onPrepare,
      forceRender,
      autoDestroy: mergedAutoDestroy,
      getPopupContainer,
      align: alignInfo,
      arrow: innerArrow,
      arrowPos,
      ready,
      offsetX,
      offsetY,
      offsetR,
      offsetB,
      onAlign: triggerAlign,
      stretch,
      targetWidth: targetWidth / scaleX,
      targetHeight: targetHeight / scaleY
    })));
  });
  if (true) {
    Trigger.displayName = "Trigger";
  }
  return Trigger;
}
var es_default4 = generateTrigger(es_default3);

// node_modules/rc-tooltip/es/Tooltip.js
var React17 = __toESM(require_react());
var import_react = __toESM(require_react());

// node_modules/rc-tooltip/es/placements.js
var autoAdjustOverflowTopBottom = {
  shiftX: 64,
  adjustY: 1
};
var autoAdjustOverflowLeftRight = {
  adjustX: 1,
  shiftY: true
};
var targetOffset = [0, 0];
var placements = {
  left: {
    points: ["cr", "cl"],
    overflow: autoAdjustOverflowLeftRight,
    offset: [-4, 0],
    targetOffset
  },
  right: {
    points: ["cl", "cr"],
    overflow: autoAdjustOverflowLeftRight,
    offset: [4, 0],
    targetOffset
  },
  top: {
    points: ["bc", "tc"],
    overflow: autoAdjustOverflowTopBottom,
    offset: [0, -4],
    targetOffset
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: autoAdjustOverflowTopBottom,
    offset: [0, 4],
    targetOffset
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: autoAdjustOverflowTopBottom,
    offset: [0, -4],
    targetOffset
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: autoAdjustOverflowLeftRight,
    offset: [-4, 0],
    targetOffset
  },
  topRight: {
    points: ["br", "tr"],
    overflow: autoAdjustOverflowTopBottom,
    offset: [0, -4],
    targetOffset
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: autoAdjustOverflowLeftRight,
    offset: [4, 0],
    targetOffset
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: autoAdjustOverflowTopBottom,
    offset: [0, 4],
    targetOffset
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: autoAdjustOverflowLeftRight,
    offset: [4, 0],
    targetOffset
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: autoAdjustOverflowTopBottom,
    offset: [0, 4],
    targetOffset
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: autoAdjustOverflowLeftRight,
    offset: [-4, 0],
    targetOffset
  }
};

// node_modules/rc-tooltip/es/Tooltip.js
var _excluded2 = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow"];
var Tooltip = function Tooltip2(props, ref) {
  var overlayClassName = props.overlayClassName, _props$trigger = props.trigger, trigger = _props$trigger === void 0 ? ["hover"] : _props$trigger, _props$mouseEnterDela = props.mouseEnterDelay, mouseEnterDelay = _props$mouseEnterDela === void 0 ? 0 : _props$mouseEnterDela, _props$mouseLeaveDela = props.mouseLeaveDelay, mouseLeaveDelay = _props$mouseLeaveDela === void 0 ? 0.1 : _props$mouseLeaveDela, overlayStyle = props.overlayStyle, _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-tooltip" : _props$prefixCls, children = props.children, onVisibleChange = props.onVisibleChange, afterVisibleChange = props.afterVisibleChange, transitionName = props.transitionName, animation = props.animation, motion = props.motion, _props$placement = props.placement, placement = _props$placement === void 0 ? "right" : _props$placement, _props$align = props.align, align = _props$align === void 0 ? {} : _props$align, _props$destroyTooltip = props.destroyTooltipOnHide, destroyTooltipOnHide = _props$destroyTooltip === void 0 ? false : _props$destroyTooltip, defaultVisible = props.defaultVisible, getTooltipContainer = props.getTooltipContainer, overlayInnerStyle = props.overlayInnerStyle, arrowContent = props.arrowContent, overlay = props.overlay, id = props.id, _props$showArrow = props.showArrow, showArrow = _props$showArrow === void 0 ? true : _props$showArrow, restProps = _objectWithoutProperties(props, _excluded2);
  var triggerRef = (0, import_react.useRef)(null);
  (0, import_react.useImperativeHandle)(ref, function() {
    return triggerRef.current;
  });
  var extraProps = _objectSpread2({}, restProps);
  if ("visible" in props) {
    extraProps.popupVisible = props.visible;
  }
  var getPopupElement = function getPopupElement2() {
    return React17.createElement(Popup, {
      key: "content",
      prefixCls,
      id,
      overlayInnerStyle
    }, overlay);
  };
  return React17.createElement(es_default4, _extends({
    popupClassName: overlayClassName,
    prefixCls,
    popup: getPopupElement,
    action: trigger,
    builtinPlacements: placements,
    popupPlacement: placement,
    ref: triggerRef,
    popupAlign: align,
    getPopupContainer: getTooltipContainer,
    onPopupVisibleChange: onVisibleChange,
    afterPopupVisibleChange: afterVisibleChange,
    popupTransitionName: transitionName,
    popupAnimation: animation,
    popupMotion: motion,
    defaultPopupVisible: defaultVisible,
    autoDestroy: destroyTooltipOnHide,
    mouseLeaveDelay,
    popupStyle: overlayStyle,
    mouseEnterDelay,
    arrow: showArrow
  }, extraProps), children);
};
var Tooltip_default = (0, import_react.forwardRef)(Tooltip);

// node_modules/rc-tooltip/es/index.js
var es_default5 = Tooltip_default;

// node_modules/antd/es/_util/hooks/useZIndex.js
var import_react3 = __toESM(require_react());

// node_modules/antd/es/_util/zindexContext.js
var import_react2 = __toESM(require_react());
var zIndexContext = import_react2.default.createContext(void 0);
if (true) {
  zIndexContext.displayName = "zIndexContext";
}
var zindexContext_default = zIndexContext;

// node_modules/antd/es/_util/hooks/useZIndex.js
var CONTAINER_OFFSET = 100;
var CONTAINER_OFFSET_MAX_COUNT = 10;
var CONTAINER_MAX_OFFSET = CONTAINER_OFFSET * CONTAINER_OFFSET_MAX_COUNT;
var CONTAINER_MAX_OFFSET_WITH_CHILDREN = CONTAINER_MAX_OFFSET + CONTAINER_OFFSET;
var containerBaseZIndexOffset = {
  Modal: CONTAINER_OFFSET,
  Drawer: CONTAINER_OFFSET,
  Popover: CONTAINER_OFFSET,
  Popconfirm: CONTAINER_OFFSET,
  Tooltip: CONTAINER_OFFSET,
  Tour: CONTAINER_OFFSET,
  FloatButton: CONTAINER_OFFSET
};
var consumerBaseZIndexOffset = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function isContainerType(type) {
  return type in containerBaseZIndexOffset;
}
var useZIndex = (componentType, customZIndex) => {
  const [, token] = useToken();
  const parentZIndex = import_react3.default.useContext(zindexContext_default);
  const isContainer = isContainerType(componentType);
  let result;
  if (customZIndex !== void 0) {
    result = [customZIndex, customZIndex];
  } else {
    let zIndex = parentZIndex !== null && parentZIndex !== void 0 ? parentZIndex : 0;
    if (isContainer) {
      zIndex += // Use preset token zIndex by default but not stack when has parent container
      (parentZIndex ? 0 : token.zIndexPopupBase) + // Container offset
      containerBaseZIndexOffset[componentType];
    } else {
      zIndex += consumerBaseZIndexOffset[componentType];
    }
    result = [parentZIndex === void 0 ? customZIndex : zIndex, zIndex];
  }
  if (true) {
    const warning2 = devUseWarning(componentType);
    const maxZIndex = token.zIndexPopupBase + CONTAINER_MAX_OFFSET_WITH_CHILDREN;
    const currentZIndex = result[0] || 0;
    true ? warning2(customZIndex !== void 0 || currentZIndex <= maxZIndex, "usage", "`zIndex` is over design token `zIndexPopupBase` too much. It may cause unexpected override.") : void 0;
  }
  return result;
};

// node_modules/antd/es/_util/motion.js
var getCollapsedHeight = () => ({
  height: 0,
  opacity: 0
});
var getRealHeight = (node) => {
  const {
    scrollHeight
  } = node;
  return {
    height: scrollHeight,
    opacity: 1
  };
};
var getCurrentHeight = (node) => ({
  height: node ? node.offsetHeight : 0
});
var skipOpacityTransition = (_, event) => (event === null || event === void 0 ? void 0 : event.deadline) === true || event.propertyName === "height";
var initCollapseMotion = function() {
  let rootCls = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : defaultPrefixCls;
  return {
    motionName: `${rootCls}-motion-collapse`,
    onAppearStart: getCollapsedHeight,
    onEnterStart: getCollapsedHeight,
    onAppearActive: getRealHeight,
    onEnterActive: getRealHeight,
    onLeaveStart: getCurrentHeight,
    onLeaveActive: getCollapsedHeight,
    onAppearEnd: skipOpacityTransition,
    onEnterEnd: skipOpacityTransition,
    onLeaveEnd: skipOpacityTransition,
    motionDeadline: 500
  };
};
var getTransitionName = (rootPrefixCls, motion, transitionName) => {
  if (transitionName !== void 0) {
    return transitionName;
  }
  return `${rootPrefixCls}-${motion}`;
};
var motion_default = initCollapseMotion;

// node_modules/antd/es/style/roundedArrow.js
function getArrowToken(token) {
  const {
    sizePopupArrow,
    borderRadiusXS,
    borderRadiusOuter
  } = token;
  const unitWidth = sizePopupArrow / 2;
  const ax = 0;
  const ay = unitWidth;
  const bx = borderRadiusOuter * 1 / Math.sqrt(2);
  const by = unitWidth - borderRadiusOuter * (1 - 1 / Math.sqrt(2));
  const cx = unitWidth - borderRadiusXS * (1 / Math.sqrt(2));
  const cy = borderRadiusOuter * (Math.sqrt(2) - 1) + borderRadiusXS * (1 / Math.sqrt(2));
  const dx = 2 * unitWidth - cx;
  const dy = cy;
  const ex = 2 * unitWidth - bx;
  const ey = by;
  const fx = 2 * unitWidth - ax;
  const fy = ay;
  const shadowWidth = unitWidth * Math.sqrt(2) + borderRadiusOuter * (Math.sqrt(2) - 2);
  const polygonOffset = borderRadiusOuter * (Math.sqrt(2) - 1);
  const arrowPolygon = `polygon(${polygonOffset}px 100%, 50% ${polygonOffset}px, ${2 * unitWidth - polygonOffset}px 100%, ${polygonOffset}px 100%)`;
  const arrowPath = `path('M ${ax} ${ay} A ${borderRadiusOuter} ${borderRadiusOuter} 0 0 0 ${bx} ${by} L ${cx} ${cy} A ${borderRadiusXS} ${borderRadiusXS} 0 0 1 ${dx} ${dy} L ${ex} ${ey} A ${borderRadiusOuter} ${borderRadiusOuter} 0 0 0 ${fx} ${fy} Z')`;
  return {
    arrowShadowWidth: shadowWidth,
    arrowPath,
    arrowPolygon
  };
}
var genRoundedArrow = (token, bgColor, boxShadow) => {
  const {
    sizePopupArrow,
    arrowPolygon,
    arrowPath,
    arrowShadowWidth,
    borderRadiusXS,
    calc
  } = token;
  return {
    pointerEvents: "none",
    width: sizePopupArrow,
    height: sizePopupArrow,
    overflow: "hidden",
    "&::before": {
      position: "absolute",
      bottom: 0,
      insetInlineStart: 0,
      width: sizePopupArrow,
      height: calc(sizePopupArrow).div(2).equal(),
      background: bgColor,
      clipPath: {
        _multi_value_: true,
        value: [arrowPolygon, arrowPath]
      },
      content: '""'
    },
    "&::after": {
      content: '""',
      position: "absolute",
      width: arrowShadowWidth,
      height: arrowShadowWidth,
      bottom: 0,
      insetInline: 0,
      margin: "auto",
      borderRadius: {
        _skip_check_: true,
        value: `0 0 ${unit(borderRadiusXS)} 0`
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow,
      zIndex: 0,
      background: "transparent"
    }
  };
};

// node_modules/antd/es/style/placementArrow.js
var MAX_VERTICAL_CONTENT_RADIUS = 8;
function getArrowOffsetToken(options) {
  const {
    contentRadius,
    limitVerticalRadius
  } = options;
  const arrowOffset = contentRadius > 12 ? contentRadius + 2 : 12;
  const arrowOffsetVertical = limitVerticalRadius ? MAX_VERTICAL_CONTENT_RADIUS : arrowOffset;
  return {
    arrowOffsetHorizontal: arrowOffset,
    arrowOffsetVertical
  };
}
function isInject(valid, code) {
  if (!valid) {
    return {};
  }
  return code;
}
function getArrowStyle(token, colorBg, options) {
  const {
    componentCls,
    boxShadowPopoverArrow,
    arrowOffsetVertical,
    arrowOffsetHorizontal
  } = token;
  const {
    arrowDistance = 0,
    arrowPlacement = {
      left: true,
      right: true,
      top: true,
      bottom: true
    }
  } = options || {};
  return {
    [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign({
      // ============================ Basic ============================
      [`${componentCls}-arrow`]: [Object.assign(Object.assign({
        position: "absolute",
        zIndex: 1,
        display: "block"
      }, genRoundedArrow(token, colorBg, boxShadowPopoverArrow)), {
        "&:before": {
          background: colorBg
        }
      })]
    }, isInject(!!arrowPlacement.top, {
      [[`&-placement-top > ${componentCls}-arrow`, `&-placement-topLeft > ${componentCls}-arrow`, `&-placement-topRight > ${componentCls}-arrow`].join(",")]: {
        bottom: arrowDistance,
        transform: "translateY(100%) rotate(180deg)"
      },
      [`&-placement-top > ${componentCls}-arrow`]: {
        left: {
          _skip_check_: true,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(100%) rotate(180deg)"
      },
      "&-placement-topLeft": {
        "--arrow-offset-horizontal": arrowOffsetHorizontal,
        [`> ${componentCls}-arrow`]: {
          left: {
            _skip_check_: true,
            value: arrowOffsetHorizontal
          }
        }
      },
      "&-placement-topRight": {
        "--arrow-offset-horizontal": `calc(100% - ${unit(arrowOffsetHorizontal)})`,
        [`> ${componentCls}-arrow`]: {
          right: {
            _skip_check_: true,
            value: arrowOffsetHorizontal
          }
        }
      }
    })), isInject(!!arrowPlacement.bottom, {
      [[`&-placement-bottom > ${componentCls}-arrow`, `&-placement-bottomLeft > ${componentCls}-arrow`, `&-placement-bottomRight > ${componentCls}-arrow`].join(",")]: {
        top: arrowDistance,
        transform: `translateY(-100%)`
      },
      [`&-placement-bottom > ${componentCls}-arrow`]: {
        left: {
          _skip_check_: true,
          value: "50%"
        },
        transform: `translateX(-50%) translateY(-100%)`
      },
      "&-placement-bottomLeft": {
        "--arrow-offset-horizontal": arrowOffsetHorizontal,
        [`> ${componentCls}-arrow`]: {
          left: {
            _skip_check_: true,
            value: arrowOffsetHorizontal
          }
        }
      },
      "&-placement-bottomRight": {
        "--arrow-offset-horizontal": `calc(100% - ${unit(arrowOffsetHorizontal)})`,
        [`> ${componentCls}-arrow`]: {
          right: {
            _skip_check_: true,
            value: arrowOffsetHorizontal
          }
        }
      }
    })), isInject(!!arrowPlacement.left, {
      [[`&-placement-left > ${componentCls}-arrow`, `&-placement-leftTop > ${componentCls}-arrow`, `&-placement-leftBottom > ${componentCls}-arrow`].join(",")]: {
        right: {
          _skip_check_: true,
          value: arrowDistance
        },
        transform: "translateX(100%) rotate(90deg)"
      },
      [`&-placement-left > ${componentCls}-arrow`]: {
        top: {
          _skip_check_: true,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(100%) rotate(90deg)"
      },
      [`&-placement-leftTop > ${componentCls}-arrow`]: {
        top: arrowOffsetVertical
      },
      [`&-placement-leftBottom > ${componentCls}-arrow`]: {
        bottom: arrowOffsetVertical
      }
    })), isInject(!!arrowPlacement.right, {
      [[`&-placement-right > ${componentCls}-arrow`, `&-placement-rightTop > ${componentCls}-arrow`, `&-placement-rightBottom > ${componentCls}-arrow`].join(",")]: {
        left: {
          _skip_check_: true,
          value: arrowDistance
        },
        transform: "translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-right > ${componentCls}-arrow`]: {
        top: {
          _skip_check_: true,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-rightTop > ${componentCls}-arrow`]: {
        top: arrowOffsetVertical
      },
      [`&-placement-rightBottom > ${componentCls}-arrow`]: {
        bottom: arrowOffsetVertical
      }
    }))
  };
}

// node_modules/antd/es/_util/placements.js
function getOverflowOptions(placement, arrowOffset, arrowWidth, autoAdjustOverflow) {
  if (autoAdjustOverflow === false) {
    return {
      adjustX: false,
      adjustY: false
    };
  }
  const overflow = autoAdjustOverflow && typeof autoAdjustOverflow === "object" ? autoAdjustOverflow : {};
  const baseOverflow = {};
  switch (placement) {
    case "top":
    case "bottom":
      baseOverflow.shiftX = arrowOffset.arrowOffsetHorizontal * 2 + arrowWidth;
      baseOverflow.shiftY = true;
      baseOverflow.adjustY = true;
      break;
    case "left":
    case "right":
      baseOverflow.shiftY = arrowOffset.arrowOffsetVertical * 2 + arrowWidth;
      baseOverflow.shiftX = true;
      baseOverflow.adjustX = true;
      break;
  }
  const mergedOverflow = Object.assign(Object.assign({}, baseOverflow), overflow);
  if (!mergedOverflow.shiftX) {
    mergedOverflow.adjustX = true;
  }
  if (!mergedOverflow.shiftY) {
    mergedOverflow.adjustY = true;
  }
  return mergedOverflow;
}
var PlacementAlignMap = {
  left: {
    points: ["cr", "cl"]
  },
  right: {
    points: ["cl", "cr"]
  },
  top: {
    points: ["bc", "tc"]
  },
  bottom: {
    points: ["tc", "bc"]
  },
  topLeft: {
    points: ["bl", "tl"]
  },
  leftTop: {
    points: ["tr", "tl"]
  },
  topRight: {
    points: ["br", "tr"]
  },
  rightTop: {
    points: ["tl", "tr"]
  },
  bottomRight: {
    points: ["tr", "br"]
  },
  rightBottom: {
    points: ["bl", "br"]
  },
  bottomLeft: {
    points: ["tl", "bl"]
  },
  leftBottom: {
    points: ["br", "bl"]
  }
};
var ArrowCenterPlacementAlignMap = {
  topLeft: {
    points: ["bl", "tc"]
  },
  leftTop: {
    points: ["tr", "cl"]
  },
  topRight: {
    points: ["br", "tc"]
  },
  rightTop: {
    points: ["tl", "cr"]
  },
  bottomRight: {
    points: ["tr", "bc"]
  },
  rightBottom: {
    points: ["bl", "cr"]
  },
  bottomLeft: {
    points: ["tl", "bc"]
  },
  leftBottom: {
    points: ["br", "cl"]
  }
};
var DisableAutoArrowList = /* @__PURE__ */ new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);
function getPlacements(config) {
  const {
    arrowWidth,
    autoAdjustOverflow,
    arrowPointAtCenter,
    offset,
    borderRadius,
    visibleFirst
  } = config;
  const halfArrowWidth = arrowWidth / 2;
  const placementMap = {};
  Object.keys(PlacementAlignMap).forEach((key) => {
    const template = arrowPointAtCenter && ArrowCenterPlacementAlignMap[key] || PlacementAlignMap[key];
    const placementInfo = Object.assign(Object.assign({}, template), {
      offset: [0, 0],
      dynamicInset: true
    });
    placementMap[key] = placementInfo;
    if (DisableAutoArrowList.has(key)) {
      placementInfo.autoArrow = false;
    }
    switch (key) {
      case "top":
      case "topLeft":
      case "topRight":
        placementInfo.offset[1] = -halfArrowWidth - offset;
        break;
      case "bottom":
      case "bottomLeft":
      case "bottomRight":
        placementInfo.offset[1] = halfArrowWidth + offset;
        break;
      case "left":
      case "leftTop":
      case "leftBottom":
        placementInfo.offset[0] = -halfArrowWidth - offset;
        break;
      case "right":
      case "rightTop":
      case "rightBottom":
        placementInfo.offset[0] = halfArrowWidth + offset;
        break;
    }
    const arrowOffset = getArrowOffsetToken({
      contentRadius: borderRadius,
      limitVerticalRadius: true
    });
    if (arrowPointAtCenter) {
      switch (key) {
        case "topLeft":
        case "bottomLeft":
          placementInfo.offset[0] = -arrowOffset.arrowOffsetHorizontal - halfArrowWidth;
          break;
        case "topRight":
        case "bottomRight":
          placementInfo.offset[0] = arrowOffset.arrowOffsetHorizontal + halfArrowWidth;
          break;
        case "leftTop":
        case "rightTop":
          placementInfo.offset[1] = -arrowOffset.arrowOffsetHorizontal * 2 + halfArrowWidth;
          break;
        case "leftBottom":
        case "rightBottom":
          placementInfo.offset[1] = arrowOffset.arrowOffsetHorizontal * 2 - halfArrowWidth;
          break;
      }
    }
    placementInfo.overflow = getOverflowOptions(key, arrowOffset, arrowWidth, autoAdjustOverflow);
    if (visibleFirst) {
      placementInfo.htmlRegion = "visibleFirst";
    }
  });
  return placementMap;
}

// node_modules/antd/es/_util/reactNode.js
var import_react4 = __toESM(require_react());
function isFragment(child) {
  return child && import_react4.default.isValidElement(child) && child.type === import_react4.default.Fragment;
}
var replaceElement = (element, replacement, props) => {
  if (!import_react4.default.isValidElement(element)) {
    return replacement;
  }
  return import_react4.default.cloneElement(element, typeof props === "function" ? props(element.props || {}) : props);
};
function cloneElement4(element, props) {
  return replaceElement(element, element, props);
}

// node_modules/antd/es/tooltip/PurePanel.js
var React21 = __toESM(require_react());
var import_classnames7 = __toESM(require_classnames());

// node_modules/antd/es/tooltip/style/index.js
var genTooltipStyle = (token) => {
  const {
    componentCls,
    // ant-tooltip
    tooltipMaxWidth,
    tooltipColor,
    tooltipBg,
    tooltipBorderRadius,
    zIndexPopup,
    controlHeight,
    boxShadowSecondary,
    paddingSM,
    paddingXS
  } = token;
  return [
    {
      [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign({}, resetComponent(token)), {
        position: "absolute",
        zIndex: zIndexPopup,
        display: "block",
        width: "max-content",
        maxWidth: tooltipMaxWidth,
        visibility: "visible",
        // When use `autoArrow`, origin will follow the arrow position
        "--valid-offset-x": "var(--arrow-offset-horizontal, var(--arrow-x))",
        transformOrigin: [`var(--valid-offset-x, 50%)`, `var(--arrow-y, 50%)`].join(" "),
        "&-hidden": {
          display: "none"
        },
        "--antd-arrow-background-color": tooltipBg,
        // Wrapper for the tooltip content
        [`${componentCls}-inner`]: {
          minWidth: "1em",
          minHeight: controlHeight,
          padding: `${unit(token.calc(paddingSM).div(2).equal())} ${unit(paddingXS)}`,
          color: tooltipColor,
          textAlign: "start",
          textDecoration: "none",
          wordWrap: "break-word",
          backgroundColor: tooltipBg,
          borderRadius: tooltipBorderRadius,
          boxShadow: boxShadowSecondary,
          boxSizing: "border-box"
        },
        // Limit left and right placement radius
        [[`&-placement-left`, `&-placement-leftTop`, `&-placement-leftBottom`, `&-placement-right`, `&-placement-rightTop`, `&-placement-rightBottom`].join(",")]: {
          [`${componentCls}-inner`]: {
            borderRadius: token.min(tooltipBorderRadius, MAX_VERTICAL_CONTENT_RADIUS)
          }
        },
        [`${componentCls}-content`]: {
          position: "relative"
        }
      }), genPresetColor(token, (colorKey, _ref) => {
        let {
          darkColor
        } = _ref;
        return {
          [`&${componentCls}-${colorKey}`]: {
            [`${componentCls}-inner`]: {
              backgroundColor: darkColor
            },
            [`${componentCls}-arrow`]: {
              "--antd-arrow-background-color": darkColor
            }
          }
        };
      })), {
        // RTL
        "&-rtl": {
          direction: "rtl"
        }
      })
    },
    // Arrow Style
    getArrowStyle(token, "var(--antd-arrow-background-color)"),
    // Pure Render
    {
      [`${componentCls}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: token.sizePopupArrow
      }
    }
  ];
};
var prepareComponentToken = (token) => Object.assign(Object.assign({
  zIndexPopup: token.zIndexPopupBase + 70
}, getArrowOffsetToken({
  contentRadius: token.borderRadius,
  limitVerticalRadius: true
})), getArrowToken(merge(token, {
  borderRadiusOuter: Math.min(token.borderRadiusOuter, 4)
})));
var style_default = function(prefixCls) {
  let injectStyle = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  const useStyle = genStyleHooks("Tooltip", (token) => {
    const {
      borderRadius,
      colorTextLightSolid,
      colorBgSpotlight
    } = token;
    const TooltipToken = merge(token, {
      // default variables
      tooltipMaxWidth: 250,
      tooltipColor: colorTextLightSolid,
      tooltipBorderRadius: borderRadius,
      tooltipBg: colorBgSpotlight
    });
    return [genTooltipStyle(TooltipToken), initZoomMotion(token, "zoom-big-fast")];
  }, prepareComponentToken, {
    resetStyle: false,
    // Popover use Tooltip as internal component. We do not need to handle this.
    injectStyle
  });
  return useStyle(prefixCls);
};

// node_modules/antd/es/tooltip/util.js
var import_classnames6 = __toESM(require_classnames());

// node_modules/antd/es/_util/colors.js
var inverseColors = PresetColors.map((color) => `${color}-inverse`);
var PresetStatusColorTypes = ["success", "processing", "error", "default", "warning"];
function isPresetColor(color) {
  let includeInverse = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  if (includeInverse) {
    return [].concat(_toConsumableArray(inverseColors), _toConsumableArray(PresetColors)).includes(color);
  }
  return PresetColors.includes(color);
}
function isPresetStatusColor(color) {
  return PresetStatusColorTypes.includes(color);
}

// node_modules/antd/es/tooltip/util.js
function parseColor(prefixCls, color) {
  const isInternalColor = isPresetColor(color);
  const className = (0, import_classnames6.default)({
    [`${prefixCls}-${color}`]: color && isInternalColor
  });
  const overlayStyle = {};
  const arrowStyle = {};
  if (color && !isInternalColor) {
    overlayStyle.background = color;
    arrowStyle["--antd-arrow-background-color"] = color;
  }
  return {
    className,
    overlayStyle,
    arrowStyle
  };
}

// node_modules/antd/es/tooltip/PurePanel.js
var PurePanel = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    placement = "top",
    title,
    color,
    overlayInnerStyle
  } = props;
  const {
    getPrefixCls
  } = React21.useContext(ConfigContext);
  const prefixCls = getPrefixCls("tooltip", customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = style_default(prefixCls);
  const colorInfo = parseColor(prefixCls, color);
  const arrowContentStyle = colorInfo.arrowStyle;
  const formattedOverlayInnerStyle = Object.assign(Object.assign({}, overlayInnerStyle), colorInfo.overlayStyle);
  const cls = (0, import_classnames7.default)(hashId, cssVarCls, prefixCls, `${prefixCls}-pure`, `${prefixCls}-placement-${placement}`, className, colorInfo.className);
  return wrapCSSVar(React21.createElement("div", {
    className: cls,
    style: arrowContentStyle
  }, React21.createElement("div", {
    className: `${prefixCls}-arrow`
  }), React21.createElement(Popup, Object.assign({}, props, {
    className: hashId,
    prefixCls,
    overlayInnerStyle: formattedOverlayInnerStyle
  }), title)));
};
var PurePanel_default = PurePanel;

// node_modules/antd/es/tooltip/index.js
var __rest = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var InternalTooltip = React22.forwardRef((props, ref) => {
  var _a, _b;
  const {
    prefixCls: customizePrefixCls,
    openClassName,
    getTooltipContainer,
    overlayClassName,
    color,
    overlayInnerStyle,
    children,
    afterOpenChange,
    afterVisibleChange,
    destroyTooltipOnHide,
    arrow = true,
    title,
    overlay,
    builtinPlacements,
    arrowPointAtCenter = false,
    autoAdjustOverflow = true
  } = props;
  const mergedShowArrow = !!arrow;
  const [, token] = useToken();
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    direction
  } = React22.useContext(ConfigContext);
  const warning2 = devUseWarning("Tooltip");
  const tooltipRef = React22.useRef(null);
  const forceAlign = () => {
    var _a2;
    (_a2 = tooltipRef.current) === null || _a2 === void 0 ? void 0 : _a2.forceAlign();
  };
  React22.useImperativeHandle(ref, () => {
    var _a2;
    return {
      forceAlign,
      forcePopupAlign: () => {
        warning2.deprecated(false, "forcePopupAlign", "forceAlign");
        forceAlign();
      },
      nativeElement: (_a2 = tooltipRef.current) === null || _a2 === void 0 ? void 0 : _a2.nativeElement
    };
  });
  if (true) {
    [["visible", "open"], ["defaultVisible", "defaultOpen"], ["onVisibleChange", "onOpenChange"], ["afterVisibleChange", "afterOpenChange"], ["arrowPointAtCenter", "arrow={{ pointAtCenter: true }}"]].forEach((_ref) => {
      let [deprecatedName, newName] = _ref;
      warning2.deprecated(!(deprecatedName in props), deprecatedName, newName);
    });
    true ? warning2(!destroyTooltipOnHide || typeof destroyTooltipOnHide === "boolean", "usage", "`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly.") : void 0;
    true ? warning2(!arrow || typeof arrow === "boolean" || !("arrowPointAtCenter" in arrow), "deprecated", "`arrowPointAtCenter` in `arrow` is deprecated. Please use `pointAtCenter` instead.") : void 0;
  }
  const [open, setOpen] = useMergedState(false, {
    value: (_a = props.open) !== null && _a !== void 0 ? _a : props.visible,
    defaultValue: (_b = props.defaultOpen) !== null && _b !== void 0 ? _b : props.defaultVisible
  });
  const noTitle = !title && !overlay && title !== 0;
  const onOpenChange = (vis) => {
    var _a2, _b2;
    setOpen(noTitle ? false : vis);
    if (!noTitle) {
      (_a2 = props.onOpenChange) === null || _a2 === void 0 ? void 0 : _a2.call(props, vis);
      (_b2 = props.onVisibleChange) === null || _b2 === void 0 ? void 0 : _b2.call(props, vis);
    }
  };
  const tooltipPlacements = React22.useMemo(() => {
    var _a2, _b2;
    let mergedArrowPointAtCenter = arrowPointAtCenter;
    if (typeof arrow === "object") {
      mergedArrowPointAtCenter = (_b2 = (_a2 = arrow.pointAtCenter) !== null && _a2 !== void 0 ? _a2 : arrow.arrowPointAtCenter) !== null && _b2 !== void 0 ? _b2 : arrowPointAtCenter;
    }
    return builtinPlacements || getPlacements({
      arrowPointAtCenter: mergedArrowPointAtCenter,
      autoAdjustOverflow,
      arrowWidth: mergedShowArrow ? token.sizePopupArrow : 0,
      borderRadius: token.borderRadius,
      offset: token.marginXXS,
      visibleFirst: true
    });
  }, [arrowPointAtCenter, arrow, builtinPlacements, token]);
  const memoOverlay = React22.useMemo(() => {
    if (title === 0) {
      return title;
    }
    return overlay || title || "";
  }, [overlay, title]);
  const memoOverlayWrapper = React22.createElement(ContextIsolator_default, {
    space: true
  }, typeof memoOverlay === "function" ? memoOverlay() : memoOverlay);
  const {
    getPopupContainer,
    placement = "top",
    mouseEnterDelay = 0.1,
    mouseLeaveDelay = 0.1,
    overlayStyle,
    rootClassName
  } = props, otherProps = __rest(props, ["getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName"]);
  const prefixCls = getPrefixCls("tooltip", customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  const injectFromPopover = props["data-popover-inject"];
  let tempOpen = open;
  if (!("open" in props) && !("visible" in props) && noTitle) {
    tempOpen = false;
  }
  const child = React22.isValidElement(children) && !isFragment(children) ? children : React22.createElement("span", null, children);
  const childProps = child.props;
  const childCls = !childProps.className || typeof childProps.className === "string" ? (0, import_classnames8.default)(childProps.className, openClassName || `${prefixCls}-open`) : childProps.className;
  const [wrapCSSVar, hashId, cssVarCls] = style_default(prefixCls, !injectFromPopover);
  const colorInfo = parseColor(prefixCls, color);
  const arrowContentStyle = colorInfo.arrowStyle;
  const formattedOverlayInnerStyle = Object.assign(Object.assign({}, overlayInnerStyle), colorInfo.overlayStyle);
  const customOverlayClassName = (0, import_classnames8.default)(overlayClassName, {
    [`${prefixCls}-rtl`]: direction === "rtl"
  }, colorInfo.className, rootClassName, hashId, cssVarCls);
  const [zIndex, contextZIndex] = useZIndex("Tooltip", otherProps.zIndex);
  const content = React22.createElement(es_default5, Object.assign({}, otherProps, {
    zIndex,
    showArrow: mergedShowArrow,
    placement,
    mouseEnterDelay,
    mouseLeaveDelay,
    prefixCls,
    overlayClassName: customOverlayClassName,
    overlayStyle: Object.assign(Object.assign({}, arrowContentStyle), overlayStyle),
    getTooltipContainer: getPopupContainer || getTooltipContainer || getContextPopupContainer,
    ref: tooltipRef,
    builtinPlacements: tooltipPlacements,
    overlay: memoOverlayWrapper,
    visible: tempOpen,
    onVisibleChange: onOpenChange,
    afterVisibleChange: afterOpenChange !== null && afterOpenChange !== void 0 ? afterOpenChange : afterVisibleChange,
    overlayInnerStyle: formattedOverlayInnerStyle,
    arrowContent: React22.createElement("span", {
      className: `${prefixCls}-arrow-content`
    }),
    motion: {
      motionName: getTransitionName(rootPrefixCls, "zoom-big-fast", props.transitionName),
      motionDeadline: 1e3
    },
    destroyTooltipOnHide: !!destroyTooltipOnHide
  }), tempOpen ? cloneElement4(child, {
    className: childCls
  }) : child);
  return wrapCSSVar(React22.createElement(zindexContext_default.Provider, {
    value: contextZIndex
  }, content));
});
var Tooltip3 = InternalTooltip;
if (true) {
  Tooltip3.displayName = "Tooltip";
}
Tooltip3._InternalPanelDoNotUseOrYouWillBeFired = PurePanel_default;
var tooltip_default = Tooltip3;

// node_modules/antd/es/typography/Editable.js
var React23 = __toESM(require_react());
var import_classnames9 = __toESM(require_classnames());

// node_modules/rc-util/es/KeyCode.js
var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35,
  // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36,
  // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST
  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40,
  // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46,
  // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  // needs localization
  /**
   * DASH
   */
  DASH: 189,
  // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187,
  // needs localization
  /**
   * COMMA
   */
  COMMA: 188,
  // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190,
  // needs localization
  /**
   * SLASH
   */
  SLASH: 191,
  // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================
  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e) {
    var keyCode = e.keyCode;
    if (e.altKey && !e.ctrlKey || e.metaKey || // Function keys don't generate text
    keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
      return false;
    }
    switch (keyCode) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return false;
      default:
        return true;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function isCharacterKey(keyCode) {
    if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
      return true;
    }
    if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
      return true;
    }
    if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
      return true;
    }
    if (window.navigator.userAgent.indexOf("WebKit") !== -1 && keyCode === 0) {
      return true;
    }
    switch (keyCode) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return true;
      default:
        return false;
    }
  }
};
var KeyCode_default = KeyCode;

// node_modules/antd/es/typography/style/mixins.js
var getTitleStyle = (fontSize, lineHeight, color, token) => {
  const {
    titleMarginBottom,
    fontWeightStrong
  } = token;
  return {
    marginBottom: titleMarginBottom,
    color,
    fontWeight: fontWeightStrong,
    fontSize,
    lineHeight
  };
};
var getTitleStyles = (token) => {
  const headings = [1, 2, 3, 4, 5];
  const styles = {};
  headings.forEach((headingLevel) => {
    styles[`
      h${headingLevel}&,
      div&-h${headingLevel},
      div&-h${headingLevel} > textarea,
      h${headingLevel}
    `] = getTitleStyle(token[`fontSizeHeading${headingLevel}`], token[`lineHeightHeading${headingLevel}`], token.colorTextHeading, token);
  });
  return styles;
};
var getLinkStyles = (token) => {
  const {
    componentCls
  } = token;
  return {
    "a&, a": Object.assign(Object.assign({}, operationUnit(token)), {
      [`&[disabled], &${componentCls}-disabled`]: {
        color: token.colorTextDisabled,
        cursor: "not-allowed",
        "&:active, &:hover": {
          color: token.colorTextDisabled
        },
        "&:active": {
          pointerEvents: "none"
        }
      }
    })
  };
};
var getResetStyles = (token) => ({
  code: {
    margin: "0 0.2em",
    paddingInline: "0.4em",
    paddingBlock: "0.2em 0.1em",
    fontSize: "85%",
    fontFamily: token.fontFamilyCode,
    background: "rgba(150, 150, 150, 0.1)",
    border: "1px solid rgba(100, 100, 100, 0.2)",
    borderRadius: 3
  },
  kbd: {
    margin: "0 0.2em",
    paddingInline: "0.4em",
    paddingBlock: "0.15em 0.1em",
    fontSize: "90%",
    fontFamily: token.fontFamilyCode,
    background: "rgba(150, 150, 150, 0.06)",
    border: "1px solid rgba(100, 100, 100, 0.2)",
    borderBottomWidth: 2,
    borderRadius: 3
  },
  mark: {
    padding: 0,
    // FIXME hardcode in v4
    backgroundColor: gold[2]
  },
  "u, ins": {
    textDecoration: "underline",
    textDecorationSkipInk: "auto"
  },
  "s, del": {
    textDecoration: "line-through"
  },
  strong: {
    fontWeight: 600
  },
  // list
  "ul, ol": {
    marginInline: 0,
    marginBlock: "0 1em",
    padding: 0,
    li: {
      marginInline: "20px 0",
      marginBlock: 0,
      paddingInline: "4px 0",
      paddingBlock: 0
    }
  },
  ul: {
    listStyleType: "circle",
    ul: {
      listStyleType: "disc"
    }
  },
  ol: {
    listStyleType: "decimal"
  },
  // pre & block
  "pre, blockquote": {
    margin: "1em 0"
  },
  pre: {
    padding: "0.4em 0.6em",
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
    background: "rgba(150, 150, 150, 0.1)",
    border: "1px solid rgba(100, 100, 100, 0.2)",
    borderRadius: 3,
    fontFamily: token.fontFamilyCode,
    // Compatible for marked
    code: {
      display: "inline",
      margin: 0,
      padding: 0,
      fontSize: "inherit",
      fontFamily: "inherit",
      background: "transparent",
      border: 0
    }
  },
  blockquote: {
    paddingInline: "0.6em 0",
    paddingBlock: 0,
    borderInlineStart: "4px solid rgba(100, 100, 100, 0.2)",
    opacity: 0.85
  }
});
var getEditableStyles = (token) => {
  const {
    componentCls,
    paddingSM
  } = token;
  const inputShift = paddingSM;
  return {
    "&-edit-content": {
      position: "relative",
      "div&": {
        insetInlineStart: token.calc(token.paddingSM).mul(-1).equal(),
        marginTop: token.calc(inputShift).mul(-1).equal(),
        marginBottom: `calc(1em - ${unit(inputShift)})`
      },
      [`${componentCls}-edit-content-confirm`]: {
        position: "absolute",
        insetInlineEnd: token.calc(token.marginXS).add(2).equal(),
        insetBlockEnd: token.marginXS,
        color: token.colorTextDescription,
        // default style
        fontWeight: "normal",
        fontSize: token.fontSize,
        fontStyle: "normal",
        pointerEvents: "none"
      },
      textarea: {
        margin: "0!important",
        // Fix Editable Textarea flash in Firefox
        MozTransition: "none",
        height: "1em"
      }
    }
  };
};
var getCopyableStyles = (token) => ({
  [`${token.componentCls}-copy-success`]: {
    [`
    &,
    &:hover,
    &:focus`]: {
      color: token.colorSuccess
    }
  },
  [`${token.componentCls}-copy-icon-only`]: {
    marginInlineStart: 0
  }
});
var getEllipsisStyles = () => ({
  [`
  a&-ellipsis,
  span&-ellipsis
  `]: {
    display: "inline-block",
    maxWidth: "100%"
  },
  "&-ellipsis-single-line": {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    // https://blog.csdn.net/iefreer/article/details/50421025
    "a&, span&": {
      verticalAlign: "bottom"
    },
    "> code": {
      paddingBlock: 0,
      maxWidth: "calc(100% - 1.2em)",
      display: "inline-block",
      overflow: "hidden",
      textOverflow: "ellipsis",
      verticalAlign: "bottom",
      // https://github.com/ant-design/ant-design/issues/45953
      boxSizing: "content-box"
    }
  },
  "&-ellipsis-multiple-line": {
    display: "-webkit-box",
    overflow: "hidden",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical"
  }
});

// node_modules/antd/es/typography/style/index.js
var genTypographyStyle = (token) => {
  const {
    componentCls,
    titleMarginTop
  } = token;
  return {
    [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
      color: token.colorText,
      wordBreak: "break-word",
      lineHeight: token.lineHeight,
      [`&${componentCls}-secondary`]: {
        color: token.colorTextDescription
      },
      [`&${componentCls}-success`]: {
        color: token.colorSuccess
      },
      [`&${componentCls}-warning`]: {
        color: token.colorWarning
      },
      [`&${componentCls}-danger`]: {
        color: token.colorError,
        "a&:active, a&:focus": {
          color: token.colorErrorActive
        },
        "a&:hover": {
          color: token.colorErrorHover
        }
      },
      [`&${componentCls}-disabled`]: {
        color: token.colorTextDisabled,
        cursor: "not-allowed",
        userSelect: "none"
      },
      [`
        div&,
        p
      `]: {
        marginBottom: "1em"
      }
    }, getTitleStyles(token)), {
      [`
      & + h1${componentCls},
      & + h2${componentCls},
      & + h3${componentCls},
      & + h4${componentCls},
      & + h5${componentCls}
      `]: {
        marginTop: titleMarginTop
      },
      [`
      div,
      ul,
      li,
      p,
      h1,
      h2,
      h3,
      h4,
      h5`]: {
        [`
        + h1,
        + h2,
        + h3,
        + h4,
        + h5
        `]: {
          marginTop: titleMarginTop
        }
      }
    }), getResetStyles(token)), getLinkStyles(token)), {
      // Operation
      [`
        ${componentCls}-expand,
        ${componentCls}-collapse,
        ${componentCls}-edit,
        ${componentCls}-copy
      `]: Object.assign(Object.assign({}, operationUnit(token)), {
        marginInlineStart: token.marginXXS
      })
    }), getEditableStyles(token)), getCopyableStyles(token)), getEllipsisStyles()), {
      "&-rtl": {
        direction: "rtl"
      }
    })
  };
};
var prepareComponentToken2 = () => ({
  titleMarginTop: "1.2em",
  titleMarginBottom: "0.5em"
});
var style_default2 = genStyleHooks("Typography", (token) => [genTypographyStyle(token)], prepareComponentToken2);

// node_modules/antd/es/typography/Editable.js
var Editable = (props) => {
  const {
    prefixCls,
    "aria-label": ariaLabel,
    className,
    style,
    direction,
    maxLength,
    autoSize = true,
    value,
    onSave,
    onCancel,
    onEnd,
    component,
    enterIcon = React23.createElement(EnterOutlined_default, null)
  } = props;
  const ref = React23.useRef(null);
  const inComposition = React23.useRef(false);
  const lastKeyCode = React23.useRef();
  const [current, setCurrent] = React23.useState(value);
  React23.useEffect(() => {
    setCurrent(value);
  }, [value]);
  React23.useEffect(() => {
    var _a;
    if ((_a = ref.current) === null || _a === void 0 ? void 0 : _a.resizableTextArea) {
      const {
        textArea
      } = ref.current.resizableTextArea;
      textArea.focus();
      const {
        length
      } = textArea.value;
      textArea.setSelectionRange(length, length);
    }
  }, []);
  const onChange = (_ref) => {
    let {
      target
    } = _ref;
    setCurrent(target.value.replace(/[\n\r]/g, ""));
  };
  const onCompositionStart = () => {
    inComposition.current = true;
  };
  const onCompositionEnd = () => {
    inComposition.current = false;
  };
  const onKeyDown = (_ref2) => {
    let {
      keyCode
    } = _ref2;
    if (inComposition.current) return;
    lastKeyCode.current = keyCode;
  };
  const confirmChange = () => {
    onSave(current.trim());
  };
  const onKeyUp = (_ref3) => {
    let {
      keyCode,
      ctrlKey,
      altKey,
      metaKey,
      shiftKey
    } = _ref3;
    if (lastKeyCode.current !== keyCode || inComposition.current || ctrlKey || altKey || metaKey || shiftKey) {
      return;
    }
    if (keyCode === KeyCode_default.ENTER) {
      confirmChange();
      onEnd === null || onEnd === void 0 ? void 0 : onEnd();
    } else if (keyCode === KeyCode_default.ESC) {
      onCancel();
    }
  };
  const onBlur = () => {
    confirmChange();
  };
  const [wrapCSSVar, hashId, cssVarCls] = style_default2(prefixCls);
  const textAreaClassName = (0, import_classnames9.default)(prefixCls, `${prefixCls}-edit-content`, {
    [`${prefixCls}-rtl`]: direction === "rtl",
    [`${prefixCls}-${component}`]: !!component
  }, className, hashId, cssVarCls);
  return wrapCSSVar(React23.createElement("div", {
    className: textAreaClassName,
    style
  }, React23.createElement(TextArea_default, {
    ref,
    maxLength,
    value: current,
    onChange,
    onKeyDown,
    onKeyUp,
    onCompositionStart,
    onCompositionEnd,
    onBlur,
    "aria-label": ariaLabel,
    rows: 1,
    autoSize
  }), enterIcon !== null ? cloneElement4(enterIcon, {
    className: `${prefixCls}-edit-content-confirm`
  }) : null));
};
var Editable_default = Editable;

// node_modules/antd/es/typography/hooks/useCopyClick.js
var React24 = __toESM(require_react());
var import_copy_to_clipboard = __toESM(require_copy_to_clipboard());

// node_modules/antd/es/_util/toList.js
function toList(candidate) {
  let skipEmpty = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  if (skipEmpty && (candidate === void 0 || candidate === null)) return [];
  return Array.isArray(candidate) ? candidate : [candidate];
}

// node_modules/antd/es/typography/hooks/useCopyClick.js
var __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var useCopyClick = (_ref) => {
  let {
    copyConfig,
    children
  } = _ref;
  const [copied, setCopied] = React24.useState(false);
  const [copyLoading, setCopyLoading] = React24.useState(false);
  const copyIdRef = React24.useRef(null);
  const cleanCopyId = () => {
    if (copyIdRef.current) {
      clearTimeout(copyIdRef.current);
    }
  };
  const copyOptions = {};
  if (copyConfig.format) {
    copyOptions.format = copyConfig.format;
  }
  React24.useEffect(() => cleanCopyId, []);
  const onClick = useEvent((e) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    e === null || e === void 0 ? void 0 : e.preventDefault();
    e === null || e === void 0 ? void 0 : e.stopPropagation();
    setCopyLoading(true);
    try {
      const text = typeof copyConfig.text === "function" ? yield copyConfig.text() : copyConfig.text;
      (0, import_copy_to_clipboard.default)(text || toList(children, true).join("") || "", copyOptions);
      setCopyLoading(false);
      setCopied(true);
      cleanCopyId();
      copyIdRef.current = setTimeout(() => {
        setCopied(false);
      }, 3e3);
      (_a = copyConfig.onCopy) === null || _a === void 0 ? void 0 : _a.call(copyConfig, e);
    } catch (error) {
      setCopyLoading(false);
      throw error;
    }
  }));
  return {
    copied,
    copyLoading,
    onClick
  };
};
var useCopyClick_default = useCopyClick;

// node_modules/antd/es/typography/hooks/useMergedConfig.js
var React25 = __toESM(require_react());
function useMergedConfig(propConfig, templateConfig) {
  return React25.useMemo(() => {
    const support = !!propConfig;
    return [support, Object.assign(Object.assign({}, templateConfig), support && typeof propConfig === "object" ? propConfig : null)];
  }, [propConfig]);
}

// node_modules/antd/es/typography/hooks/usePrevious.js
var import_react5 = __toESM(require_react());
var usePrevious = (value) => {
  const ref = (0, import_react5.useRef)();
  (0, import_react5.useEffect)(() => {
    ref.current = value;
  });
  return ref.current;
};
var usePrevious_default = usePrevious;

// node_modules/antd/es/typography/hooks/useTooltipProps.js
var import_react6 = __toESM(require_react());
var useTooltipProps = (tooltip, editConfigText, children) => (0, import_react6.useMemo)(() => {
  if (tooltip === true) {
    return {
      title: editConfigText !== null && editConfigText !== void 0 ? editConfigText : children
    };
  }
  if ((0, import_react6.isValidElement)(tooltip)) {
    return {
      title: tooltip
    };
  }
  if (typeof tooltip === "object") {
    return Object.assign({
      title: editConfigText !== null && editConfigText !== void 0 ? editConfigText : children
    }, tooltip);
  }
  return {
    title: tooltip
  };
}, [tooltip, editConfigText, children]);
var useTooltipProps_default = useTooltipProps;

// node_modules/antd/es/typography/Typography.js
var React26 = __toESM(require_react());
var import_classnames10 = __toESM(require_classnames());
var __rest2 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var Typography = React26.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    component: Component = "article",
    className,
    rootClassName,
    setContentRef,
    children,
    direction: typographyDirection,
    style
  } = props, restProps = __rest2(props, ["prefixCls", "component", "className", "rootClassName", "setContentRef", "children", "direction", "style"]);
  const {
    getPrefixCls,
    direction: contextDirection,
    typography
  } = React26.useContext(ConfigContext);
  const direction = typographyDirection !== null && typographyDirection !== void 0 ? typographyDirection : contextDirection;
  const mergedRef = setContentRef ? composeRef(ref, setContentRef) : ref;
  const prefixCls = getPrefixCls("typography", customizePrefixCls);
  if (true) {
    const warning2 = devUseWarning("Typography");
    warning2.deprecated(!setContentRef, "setContentRef", "ref");
  }
  const [wrapCSSVar, hashId, cssVarCls] = style_default2(prefixCls);
  const componentClassName = (0, import_classnames10.default)(prefixCls, typography === null || typography === void 0 ? void 0 : typography.className, {
    [`${prefixCls}-rtl`]: direction === "rtl"
  }, className, rootClassName, hashId, cssVarCls);
  const mergedStyle = Object.assign(Object.assign({}, typography === null || typography === void 0 ? void 0 : typography.style), style);
  return wrapCSSVar(
    // @ts-expect-error: Expression produces a union type that is too complex to represent.
    React26.createElement(Component, Object.assign({
      className: componentClassName,
      style: mergedStyle,
      ref: mergedRef
    }, restProps), children)
  );
});
if (true) {
  Typography.displayName = "Typography";
}
var Typography_default = Typography;

// node_modules/antd/es/typography/Base/CopyBtn.js
var React27 = __toESM(require_react());
var import_classnames11 = __toESM(require_classnames());

// node_modules/antd/es/typography/Base/util.js
function toList2(val) {
  if (val === false) {
    return [false, false];
  }
  return Array.isArray(val) ? val : [val];
}
function getNode(dom, defaultNode, needDom) {
  if (dom === true || dom === void 0) {
    return defaultNode;
  }
  return dom || needDom && defaultNode;
}
function isEleEllipsis(ele) {
  const childDiv = document.createElement("em");
  ele.appendChild(childDiv);
  if (true) {
    childDiv.className = "ant-typography-css-ellipsis-content-measure";
  }
  const rect = ele.getBoundingClientRect();
  const childRect = childDiv.getBoundingClientRect();
  ele.removeChild(childDiv);
  return (
    // Horizontal out of range
    rect.left > childRect.left || childRect.right > rect.right || // Vertical out of range
    rect.top > childRect.top || childRect.bottom > rect.bottom
  );
}
var isValidText = (val) => ["string", "number"].includes(typeof val);

// node_modules/antd/es/typography/Base/CopyBtn.js
var CopyBtn = (_ref) => {
  let {
    prefixCls,
    copied,
    locale,
    iconOnly,
    tooltips,
    icon,
    tabIndex,
    onCopy,
    loading: btnLoading
  } = _ref;
  const tooltipNodes = toList2(tooltips);
  const iconNodes = toList2(icon);
  const {
    copied: copiedText,
    copy: copyText
  } = locale !== null && locale !== void 0 ? locale : {};
  const systemStr = copied ? copiedText : copyText;
  const copyTitle = getNode(tooltipNodes[copied ? 1 : 0], systemStr);
  const ariaLabel = typeof copyTitle === "string" ? copyTitle : systemStr;
  return React27.createElement(tooltip_default, {
    title: copyTitle
  }, React27.createElement("button", {
    type: "button",
    className: (0, import_classnames11.default)(`${prefixCls}-copy`, {
      [`${prefixCls}-copy-success`]: copied,
      [`${prefixCls}-copy-icon-only`]: iconOnly
    }),
    onClick: onCopy,
    "aria-label": ariaLabel,
    tabIndex
  }, copied ? getNode(iconNodes[1], React27.createElement(CheckOutlined_default, null), true) : getNode(iconNodes[0], btnLoading ? React27.createElement(LoadingOutlined_default, null) : React27.createElement(CopyOutlined_default, null), true)));
};
var CopyBtn_default = CopyBtn;

// node_modules/antd/es/typography/Base/Ellipsis.js
var React28 = __toESM(require_react());
var MeasureText = React28.forwardRef((_ref, ref) => {
  let {
    style,
    children
  } = _ref;
  const spanRef = React28.useRef(null);
  React28.useImperativeHandle(ref, () => ({
    isExceed: () => {
      const span = spanRef.current;
      return span.scrollHeight > span.clientHeight;
    },
    getHeight: () => spanRef.current.clientHeight
  }));
  return React28.createElement("span", {
    "aria-hidden": true,
    ref: spanRef,
    style: Object.assign({
      position: "fixed",
      display: "block",
      left: 0,
      top: 0,
      pointerEvents: "none",
      backgroundColor: "rgba(255, 0, 0, 0.65)"
    }, style)
  }, children);
});
var getNodesLen = (nodeList) => nodeList.reduce((totalLen, node) => totalLen + (isValidText(node) ? String(node).length : 1), 0);
function sliceNodes(nodeList, len) {
  let currLen = 0;
  const currentNodeList = [];
  for (let i = 0; i < nodeList.length; i += 1) {
    if (currLen === len) {
      return currentNodeList;
    }
    const node = nodeList[i];
    const canCut = isValidText(node);
    const nodeLen = canCut ? String(node).length : 1;
    const nextLen = currLen + nodeLen;
    if (nextLen > len) {
      const restLen = len - currLen;
      currentNodeList.push(String(node).slice(0, restLen));
      return currentNodeList;
    }
    currentNodeList.push(node);
    currLen = nextLen;
  }
  return nodeList;
}
var STATUS_MEASURE_NONE = 0;
var STATUS_MEASURE_PREPARE = 1;
var STATUS_MEASURE_START = 2;
var STATUS_MEASURE_NEED_ELLIPSIS = 3;
var STATUS_MEASURE_NO_NEED_ELLIPSIS = 4;
var lineClipStyle = {
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical"
};
function EllipsisMeasure(props) {
  const {
    enableMeasure,
    width,
    text,
    children,
    rows,
    expanded,
    miscDeps,
    onEllipsis
  } = props;
  const nodeList = React28.useMemo(() => toArray(text), [text]);
  const nodeLen = React28.useMemo(() => getNodesLen(nodeList), [text]);
  const fullContent = React28.useMemo(() => children(nodeList, false), [text]);
  const [ellipsisCutIndex, setEllipsisCutIndex] = React28.useState(null);
  const cutMidRef = React28.useRef(null);
  const measureWhiteSpaceRef = React28.useRef(null);
  const needEllipsisRef = React28.useRef(null);
  const descRowsEllipsisRef = React28.useRef(null);
  const symbolRowEllipsisRef = React28.useRef(null);
  const [canEllipsis, setCanEllipsis] = React28.useState(false);
  const [needEllipsis, setNeedEllipsis] = React28.useState(STATUS_MEASURE_NONE);
  const [ellipsisHeight, setEllipsisHeight] = React28.useState(0);
  const [parentWhiteSpace, setParentWhiteSpace] = React28.useState(null);
  useLayoutEffect_default(() => {
    if (enableMeasure && width && nodeLen) {
      setNeedEllipsis(STATUS_MEASURE_PREPARE);
    } else {
      setNeedEllipsis(STATUS_MEASURE_NONE);
    }
  }, [width, text, rows, enableMeasure, nodeList]);
  useLayoutEffect_default(() => {
    var _a, _b, _c, _d;
    if (needEllipsis === STATUS_MEASURE_PREPARE) {
      setNeedEllipsis(STATUS_MEASURE_START);
      const nextWhiteSpace = measureWhiteSpaceRef.current && getComputedStyle(measureWhiteSpaceRef.current).whiteSpace;
      setParentWhiteSpace(nextWhiteSpace);
    } else if (needEllipsis === STATUS_MEASURE_START) {
      const isOverflow = !!((_a = needEllipsisRef.current) === null || _a === void 0 ? void 0 : _a.isExceed());
      setNeedEllipsis(isOverflow ? STATUS_MEASURE_NEED_ELLIPSIS : STATUS_MEASURE_NO_NEED_ELLIPSIS);
      setEllipsisCutIndex(isOverflow ? [0, nodeLen] : null);
      setCanEllipsis(isOverflow);
      const baseRowsEllipsisHeight = ((_b = needEllipsisRef.current) === null || _b === void 0 ? void 0 : _b.getHeight()) || 0;
      const descRowsEllipsisHeight = rows === 1 ? 0 : ((_c = descRowsEllipsisRef.current) === null || _c === void 0 ? void 0 : _c.getHeight()) || 0;
      const symbolRowEllipsisHeight = ((_d = symbolRowEllipsisRef.current) === null || _d === void 0 ? void 0 : _d.getHeight()) || 0;
      const maxRowsHeight = Math.max(
        baseRowsEllipsisHeight,
        // height of rows with ellipsis
        descRowsEllipsisHeight + symbolRowEllipsisHeight
      );
      setEllipsisHeight(maxRowsHeight + 1);
      onEllipsis(isOverflow);
    }
  }, [needEllipsis]);
  const cutMidIndex = ellipsisCutIndex ? Math.ceil((ellipsisCutIndex[0] + ellipsisCutIndex[1]) / 2) : 0;
  useLayoutEffect_default(() => {
    var _a;
    const [minIndex, maxIndex] = ellipsisCutIndex || [0, 0];
    if (minIndex !== maxIndex) {
      const midHeight = ((_a = cutMidRef.current) === null || _a === void 0 ? void 0 : _a.getHeight()) || 0;
      const isOverflow = midHeight > ellipsisHeight;
      let targetMidIndex = cutMidIndex;
      if (maxIndex - minIndex === 1) {
        targetMidIndex = isOverflow ? minIndex : maxIndex;
      }
      setEllipsisCutIndex(isOverflow ? [minIndex, targetMidIndex] : [targetMidIndex, maxIndex]);
    }
  }, [ellipsisCutIndex, cutMidIndex]);
  const finalContent = React28.useMemo(() => {
    if (!enableMeasure) {
      return children(nodeList, false);
    }
    if (needEllipsis !== STATUS_MEASURE_NEED_ELLIPSIS || !ellipsisCutIndex || ellipsisCutIndex[0] !== ellipsisCutIndex[1]) {
      const content = children(nodeList, false);
      if ([STATUS_MEASURE_NO_NEED_ELLIPSIS, STATUS_MEASURE_NONE].includes(needEllipsis)) {
        return content;
      }
      return React28.createElement("span", {
        style: Object.assign(Object.assign({}, lineClipStyle), {
          WebkitLineClamp: rows
        })
      }, content);
    }
    return children(expanded ? nodeList : sliceNodes(nodeList, ellipsisCutIndex[0]), canEllipsis);
  }, [expanded, needEllipsis, ellipsisCutIndex, nodeList].concat(_toConsumableArray(miscDeps)));
  const measureStyle = {
    width,
    margin: 0,
    padding: 0,
    whiteSpace: parentWhiteSpace === "nowrap" ? "normal" : "inherit"
  };
  return React28.createElement(React28.Fragment, null, finalContent, needEllipsis === STATUS_MEASURE_START && React28.createElement(React28.Fragment, null, React28.createElement(MeasureText, {
    style: Object.assign(Object.assign(Object.assign({}, measureStyle), lineClipStyle), {
      WebkitLineClamp: rows
    }),
    ref: needEllipsisRef
  }, fullContent), React28.createElement(MeasureText, {
    style: Object.assign(Object.assign(Object.assign({}, measureStyle), lineClipStyle), {
      WebkitLineClamp: rows - 1
    }),
    ref: descRowsEllipsisRef
  }, fullContent), React28.createElement(MeasureText, {
    style: Object.assign(Object.assign(Object.assign({}, measureStyle), lineClipStyle), {
      WebkitLineClamp: 1
    }),
    ref: symbolRowEllipsisRef
  }, children([], true))), needEllipsis === STATUS_MEASURE_NEED_ELLIPSIS && ellipsisCutIndex && ellipsisCutIndex[0] !== ellipsisCutIndex[1] && React28.createElement(MeasureText, {
    style: Object.assign(Object.assign({}, measureStyle), {
      top: 400
    }),
    ref: cutMidRef
  }, children(sliceNodes(nodeList, cutMidIndex), true)), needEllipsis === STATUS_MEASURE_PREPARE && React28.createElement("span", {
    style: {
      whiteSpace: "inherit"
    },
    ref: measureWhiteSpaceRef
  }));
}

// node_modules/antd/es/typography/Base/EllipsisTooltip.js
var React29 = __toESM(require_react());
var EllipsisTooltip = (_ref) => {
  let {
    enableEllipsis,
    isEllipsis,
    children,
    tooltipProps
  } = _ref;
  if (!(tooltipProps === null || tooltipProps === void 0 ? void 0 : tooltipProps.title) || !enableEllipsis) {
    return children;
  }
  return React29.createElement(tooltip_default, Object.assign({
    open: isEllipsis ? void 0 : false
  }, tooltipProps), children);
};
if (true) {
  EllipsisTooltip.displayName = "EllipsisTooltip";
}
var EllipsisTooltip_default = EllipsisTooltip;

// node_modules/antd/es/typography/Base/index.js
var __rest3 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function wrapperDecorations(_ref, content) {
  let {
    mark,
    code,
    underline,
    delete: del,
    strong,
    keyboard,
    italic
  } = _ref;
  let currentContent = content;
  function wrap(tag, needed) {
    if (!needed) {
      return;
    }
    currentContent = React30.createElement(tag, {}, currentContent);
  }
  wrap("strong", strong);
  wrap("u", underline);
  wrap("del", del);
  wrap("code", code);
  wrap("mark", mark);
  wrap("kbd", keyboard);
  wrap("i", italic);
  return currentContent;
}
var ELLIPSIS_STR = "...";
var Base = React30.forwardRef((props, ref) => {
  var _a;
  const {
    prefixCls: customizePrefixCls,
    className,
    style,
    type,
    disabled,
    children,
    ellipsis,
    editable,
    copyable,
    component,
    title
  } = props, restProps = __rest3(props, ["prefixCls", "className", "style", "type", "disabled", "children", "ellipsis", "editable", "copyable", "component", "title"]);
  const {
    getPrefixCls,
    direction
  } = React30.useContext(ConfigContext);
  const [textLocale] = useLocale_default("Text");
  const typographyRef = React30.useRef(null);
  const editIconRef = React30.useRef(null);
  const prefixCls = getPrefixCls("typography", customizePrefixCls);
  const textProps = omit(restProps, ["mark", "code", "delete", "underline", "strong", "keyboard", "italic"]);
  const [enableEdit, editConfig] = useMergedConfig(editable);
  const [editing, setEditing] = useMergedState(false, {
    value: editConfig.editing
  });
  const {
    triggerType = ["icon"]
  } = editConfig;
  const triggerEdit = (edit) => {
    var _a2;
    if (edit) {
      (_a2 = editConfig.onStart) === null || _a2 === void 0 ? void 0 : _a2.call(editConfig);
    }
    setEditing(edit);
  };
  const prevEditing = usePrevious_default(editing);
  useLayoutEffect_default(() => {
    var _a2;
    if (!editing && prevEditing) {
      (_a2 = editIconRef.current) === null || _a2 === void 0 ? void 0 : _a2.focus();
    }
  }, [editing]);
  const onEditClick = (e) => {
    e === null || e === void 0 ? void 0 : e.preventDefault();
    triggerEdit(true);
  };
  const onEditChange = (value) => {
    var _a2;
    (_a2 = editConfig.onChange) === null || _a2 === void 0 ? void 0 : _a2.call(editConfig, value);
    triggerEdit(false);
  };
  const onEditCancel = () => {
    var _a2;
    (_a2 = editConfig.onCancel) === null || _a2 === void 0 ? void 0 : _a2.call(editConfig);
    triggerEdit(false);
  };
  const [enableCopy, copyConfig] = useMergedConfig(copyable);
  const {
    copied,
    copyLoading,
    onClick: onCopyClick
  } = useCopyClick_default({
    copyConfig,
    children
  });
  const [isLineClampSupport, setIsLineClampSupport] = React30.useState(false);
  const [isTextOverflowSupport, setIsTextOverflowSupport] = React30.useState(false);
  const [isJsEllipsis, setIsJsEllipsis] = React30.useState(false);
  const [isNativeEllipsis, setIsNativeEllipsis] = React30.useState(false);
  const [isNativeVisible, setIsNativeVisible] = React30.useState(true);
  const [enableEllipsis, ellipsisConfig] = useMergedConfig(ellipsis, {
    expandable: false,
    symbol: (isExpanded) => isExpanded ? textLocale === null || textLocale === void 0 ? void 0 : textLocale.collapse : textLocale === null || textLocale === void 0 ? void 0 : textLocale.expand
  });
  const [expanded, setExpanded] = useMergedState(ellipsisConfig.defaultExpanded || false, {
    value: ellipsisConfig.expanded
  });
  const mergedEnableEllipsis = enableEllipsis && (!expanded || ellipsisConfig.expandable === "collapsible");
  const {
    rows = 1
  } = ellipsisConfig;
  const needMeasureEllipsis = React30.useMemo(() => (
    // Disable ellipsis
    mergedEnableEllipsis && // Provide suffix
    (ellipsisConfig.suffix !== void 0 || ellipsisConfig.onEllipsis || // Can't use css ellipsis since we need to provide the place for button
    ellipsisConfig.expandable || enableEdit || enableCopy)
  ), [mergedEnableEllipsis, ellipsisConfig, enableEdit, enableCopy]);
  useLayoutEffect_default(() => {
    if (enableEllipsis && !needMeasureEllipsis) {
      setIsLineClampSupport(isStyleSupport("webkitLineClamp"));
      setIsTextOverflowSupport(isStyleSupport("textOverflow"));
    }
  }, [needMeasureEllipsis, enableEllipsis]);
  const [cssEllipsis, setCssEllipsis] = React30.useState(mergedEnableEllipsis);
  const canUseCssEllipsis = React30.useMemo(() => {
    if (needMeasureEllipsis) {
      return false;
    }
    if (rows === 1) {
      return isTextOverflowSupport;
    }
    return isLineClampSupport;
  }, [needMeasureEllipsis, isTextOverflowSupport, isLineClampSupport]);
  useLayoutEffect_default(() => {
    setCssEllipsis(canUseCssEllipsis && mergedEnableEllipsis);
  }, [canUseCssEllipsis, mergedEnableEllipsis]);
  const isMergedEllipsis = mergedEnableEllipsis && (cssEllipsis ? isNativeEllipsis : isJsEllipsis);
  const cssTextOverflow = mergedEnableEllipsis && rows === 1 && cssEllipsis;
  const cssLineClamp = mergedEnableEllipsis && rows > 1 && cssEllipsis;
  const onExpandClick = (e, info) => {
    var _a2;
    setExpanded(info.expanded);
    (_a2 = ellipsisConfig.onExpand) === null || _a2 === void 0 ? void 0 : _a2.call(ellipsisConfig, e, info);
  };
  const [ellipsisWidth, setEllipsisWidth] = React30.useState(0);
  const onResize = (_ref2) => {
    let {
      offsetWidth
    } = _ref2;
    setEllipsisWidth(offsetWidth);
  };
  const onJsEllipsis = (jsEllipsis) => {
    var _a2;
    setIsJsEllipsis(jsEllipsis);
    if (isJsEllipsis !== jsEllipsis) {
      (_a2 = ellipsisConfig.onEllipsis) === null || _a2 === void 0 ? void 0 : _a2.call(ellipsisConfig, jsEllipsis);
    }
  };
  React30.useEffect(() => {
    const textEle = typographyRef.current;
    if (enableEllipsis && cssEllipsis && textEle) {
      const currentEllipsis = isEleEllipsis(textEle);
      if (isNativeEllipsis !== currentEllipsis) {
        setIsNativeEllipsis(currentEllipsis);
      }
    }
  }, [enableEllipsis, cssEllipsis, children, cssLineClamp, isNativeVisible, ellipsisWidth]);
  React30.useEffect(() => {
    const textEle = typographyRef.current;
    if (typeof IntersectionObserver === "undefined" || !textEle || !cssEllipsis || !mergedEnableEllipsis) {
      return;
    }
    const observer = new IntersectionObserver(() => {
      setIsNativeVisible(!!textEle.offsetParent);
    });
    observer.observe(textEle);
    return () => {
      observer.disconnect();
    };
  }, [cssEllipsis, mergedEnableEllipsis]);
  const tooltipProps = useTooltipProps_default(ellipsisConfig.tooltip, editConfig.text, children);
  const topAriaLabel = React30.useMemo(() => {
    if (!enableEllipsis || cssEllipsis) {
      return void 0;
    }
    return [editConfig.text, children, title, tooltipProps.title].find(isValidText);
  }, [enableEllipsis, cssEllipsis, title, tooltipProps.title, isMergedEllipsis]);
  if (editing) {
    return React30.createElement(Editable_default, {
      value: (_a = editConfig.text) !== null && _a !== void 0 ? _a : typeof children === "string" ? children : "",
      onSave: onEditChange,
      onCancel: onEditCancel,
      onEnd: editConfig.onEnd,
      prefixCls,
      className,
      style,
      direction,
      component,
      maxLength: editConfig.maxLength,
      autoSize: editConfig.autoSize,
      enterIcon: editConfig.enterIcon
    });
  }
  const renderExpand = () => {
    const {
      expandable,
      symbol
    } = ellipsisConfig;
    return expandable ? React30.createElement("button", {
      type: "button",
      key: "expand",
      className: `${prefixCls}-${expanded ? "collapse" : "expand"}`,
      onClick: (e) => onExpandClick(e, {
        expanded: !expanded
      }),
      "aria-label": expanded ? textLocale.collapse : textLocale === null || textLocale === void 0 ? void 0 : textLocale.expand
    }, typeof symbol === "function" ? symbol(expanded) : symbol) : null;
  };
  const renderEdit = () => {
    if (!enableEdit) {
      return;
    }
    const {
      icon,
      tooltip,
      tabIndex
    } = editConfig;
    const editTitle = toArray(tooltip)[0] || (textLocale === null || textLocale === void 0 ? void 0 : textLocale.edit);
    const ariaLabel = typeof editTitle === "string" ? editTitle : "";
    return triggerType.includes("icon") ? React30.createElement(tooltip_default, {
      key: "edit",
      title: tooltip === false ? "" : editTitle
    }, React30.createElement("button", {
      type: "button",
      ref: editIconRef,
      className: `${prefixCls}-edit`,
      onClick: onEditClick,
      "aria-label": ariaLabel,
      tabIndex
    }, icon || React30.createElement(EditOutlined_default, {
      role: "button"
    }))) : null;
  };
  const renderCopy = () => {
    if (!enableCopy) {
      return null;
    }
    return React30.createElement(CopyBtn_default, Object.assign({
      key: "copy"
    }, copyConfig, {
      prefixCls,
      copied,
      locale: textLocale,
      onCopy: onCopyClick,
      loading: copyLoading,
      iconOnly: children === null || children === void 0
    }));
  };
  const renderOperations = (canEllipsis) => [canEllipsis && renderExpand(), renderEdit(), renderCopy()];
  const renderEllipsis = (canEllipsis) => [canEllipsis && !expanded && React30.createElement("span", {
    "aria-hidden": true,
    key: "ellipsis"
  }, ELLIPSIS_STR), ellipsisConfig.suffix, renderOperations(canEllipsis)];
  return React30.createElement(es_default2, {
    onResize,
    disabled: !mergedEnableEllipsis
  }, (resizeRef) => React30.createElement(EllipsisTooltip_default, {
    tooltipProps,
    enableEllipsis: mergedEnableEllipsis,
    isEllipsis: isMergedEllipsis
  }, React30.createElement(Typography_default, Object.assign({
    className: (0, import_classnames12.default)({
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-ellipsis`]: enableEllipsis,
      [`${prefixCls}-ellipsis-single-line`]: cssTextOverflow,
      [`${prefixCls}-ellipsis-multiple-line`]: cssLineClamp
    }, className),
    prefixCls: customizePrefixCls,
    style: Object.assign(Object.assign({}, style), {
      WebkitLineClamp: cssLineClamp ? rows : void 0
    }),
    component,
    ref: composeRef(resizeRef, typographyRef, ref),
    direction,
    onClick: triggerType.includes("text") ? onEditClick : void 0,
    "aria-label": topAriaLabel === null || topAriaLabel === void 0 ? void 0 : topAriaLabel.toString(),
    title
  }, textProps), React30.createElement(EllipsisMeasure, {
    enableMeasure: mergedEnableEllipsis && !cssEllipsis,
    text: children,
    rows,
    width: ellipsisWidth,
    onEllipsis: onJsEllipsis,
    expanded,
    miscDeps: [copied, expanded, copyLoading, enableEdit, enableCopy]
  }, (node, canEllipsis) => wrapperDecorations(props, React30.createElement(React30.Fragment, null, node.length > 0 && canEllipsis && !expanded && topAriaLabel ? React30.createElement("span", {
    key: "show-content",
    "aria-hidden": true
  }, node) : node, renderEllipsis(canEllipsis)))))));
});
var Base_default = Base;

// node_modules/antd/es/typography/Title.js
var __rest4 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var TITLE_ELE_LIST = [1, 2, 3, 4, 5];
var Title = React31.forwardRef((props, ref) => {
  const {
    level = 1
  } = props, restProps = __rest4(props, ["level"]);
  if (true) {
    const warning2 = devUseWarning("Typography.Title");
    true ? warning2(TITLE_ELE_LIST.includes(level), "usage", "Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version.") : void 0;
  }
  const component = TITLE_ELE_LIST.includes(level) ? `h${level}` : `h1`;
  return React31.createElement(Base_default, Object.assign({
    ref
  }, restProps, {
    component
  }));
});
var Title_default = Title;

export {
  isFragment,
  replaceElement,
  cloneElement4 as cloneElement,
  KeyCode_default,
  zindexContext_default,
  CONTAINER_MAX_OFFSET,
  useZIndex,
  getTransitionName,
  motion_default,
  isVisible_default,
  getScrollBarSize,
  getTargetScrollBarSize,
  es_default3 as es_default,
  useId_default,
  isStyleSupport,
  canUseDocElement,
  isMobile_default,
  es_default4 as es_default2,
  Popup,
  getArrowToken,
  genRoundedArrow,
  MAX_VERTICAL_CONTENT_RADIUS,
  getArrowOffsetToken,
  getArrowStyle,
  getPlacements,
  isPresetColor,
  isPresetStatusColor,
  tooltip_default,
  toList,
  Typography_default,
  Base_default,
  Title_default
};
//# sourceMappingURL=chunk-T64NNKEC.js.map
