import {
  CloseCircleFilled_default
} from "./chunk-FALNGLJS.js";
import {
  ResizeObserver_es_default
} from "./chunk-YYITRGAA.js";
import {
  FormItemInputContext,
  NoFormStyle,
  VariantContext,
  useCSSVarCls_default,
  useSize_default
} from "./chunk-W2TI63V6.js";
import {
  ConfigContext,
  DisabledContext_default,
  Variants,
  _createSuper,
  _toConsumableArray,
  clearFix,
  devUseWarning,
  findDOMNode,
  genStyleHooks,
  merge2 as merge,
  omit,
  raf_default,
  resetComponent,
  toArray,
  unit,
  useLayoutEffect_default,
  useMergedState
} from "./chunk-QTXOSBRK.js";
import {
  _slicedToArray,
  composeRef,
  supportRef,
  useComposeRef,
  warning
} from "./chunk-C5TVQLKE.js";
import {
  _classCallCheck,
  _createClass,
  _inherits
} from "./chunk-NZXOJXNM.js";
import {
  _defineProperty,
  _extends,
  _objectSpread2,
  _objectWithoutProperties,
  _typeof,
  require_classnames
} from "./chunk-PQFH6TLA.js";
import {
  require_react
} from "./chunk-N4N5IM6X.js";
import {
  __toESM
} from "./chunk-LK32TJAX.js";

// node_modules/antd/es/input/TextArea.js
var React14 = __toESM(require_react());
var import_react9 = __toESM(require_react());
var import_classnames8 = __toESM(require_classnames());

// node_modules/rc-textarea/es/TextArea.js
var import_classnames4 = __toESM(require_classnames());

// node_modules/rc-input/es/BaseInput.js
var import_classnames = __toESM(require_classnames());
var import_react = __toESM(require_react());

// node_modules/rc-input/es/utils/commonUtils.js
function hasAddon(props) {
  return !!(props.addonBefore || props.addonAfter);
}
function hasPrefixSuffix(props) {
  return !!(props.prefix || props.suffix || props.allowClear);
}
function cloneEvent(event, target, value) {
  var currentTarget = target.cloneNode(true);
  var newEvent = Object.create(event, {
    target: {
      value: currentTarget
    },
    currentTarget: {
      value: currentTarget
    }
  });
  currentTarget.value = value;
  if (typeof target.selectionStart === "number" && typeof target.selectionEnd === "number") {
    currentTarget.selectionStart = target.selectionStart;
    currentTarget.selectionEnd = target.selectionEnd;
  }
  currentTarget.setSelectionRange = function() {
    target.setSelectionRange.apply(target, arguments);
  };
  return newEvent;
}
function resolveOnChange(target, e, onChange, targetValue) {
  if (!onChange) {
    return;
  }
  var event = e;
  if (e.type === "click") {
    event = cloneEvent(e, target, "");
    onChange(event);
    return;
  }
  if (target.type !== "file" && targetValue !== void 0) {
    event = cloneEvent(e, target, targetValue);
    onChange(event);
    return;
  }
  onChange(event);
}
function triggerFocus(element, option) {
  if (!element) return;
  element.focus(option);
  var _ref = option || {}, cursor = _ref.cursor;
  if (cursor) {
    var len = element.value.length;
    switch (cursor) {
      case "start":
        element.setSelectionRange(0, 0);
        break;
      case "end":
        element.setSelectionRange(len, len);
        break;
      default:
        element.setSelectionRange(0, len);
    }
  }
}

// node_modules/rc-input/es/BaseInput.js
var BaseInput = import_react.default.forwardRef(function(props, ref) {
  var _element$props, _element$props2;
  var inputEl = props.inputElement, children = props.children, prefixCls = props.prefixCls, prefix = props.prefix, suffix = props.suffix, addonBefore = props.addonBefore, addonAfter = props.addonAfter, className = props.className, style = props.style, disabled = props.disabled, readOnly = props.readOnly, focused = props.focused, triggerFocus3 = props.triggerFocus, allowClear = props.allowClear, value = props.value, handleReset = props.handleReset, hidden = props.hidden, classes = props.classes, classNames6 = props.classNames, dataAttrs = props.dataAttrs, styles = props.styles, components = props.components, onClear = props.onClear;
  var inputElement = children !== null && children !== void 0 ? children : inputEl;
  var AffixWrapperComponent = (components === null || components === void 0 ? void 0 : components.affixWrapper) || "span";
  var GroupWrapperComponent = (components === null || components === void 0 ? void 0 : components.groupWrapper) || "span";
  var WrapperComponent = (components === null || components === void 0 ? void 0 : components.wrapper) || "span";
  var GroupAddonComponent = (components === null || components === void 0 ? void 0 : components.groupAddon) || "span";
  var containerRef = (0, import_react.useRef)(null);
  var onInputClick = function onInputClick2(e) {
    var _containerRef$current;
    if ((_containerRef$current = containerRef.current) !== null && _containerRef$current !== void 0 && _containerRef$current.contains(e.target)) {
      triggerFocus3 === null || triggerFocus3 === void 0 || triggerFocus3();
    }
  };
  var hasAffix = hasPrefixSuffix(props);
  var element = (0, import_react.cloneElement)(inputElement, {
    value,
    className: (0, import_classnames.default)(inputElement.props.className, !hasAffix && (classNames6 === null || classNames6 === void 0 ? void 0 : classNames6.variant)) || null
  });
  var groupRef = (0, import_react.useRef)(null);
  import_react.default.useImperativeHandle(ref, function() {
    return {
      nativeElement: groupRef.current || containerRef.current
    };
  });
  if (hasAffix) {
    var clearIcon = null;
    if (allowClear) {
      var needClear = !disabled && !readOnly && value;
      var clearIconCls = "".concat(prefixCls, "-clear-icon");
      var iconNode = _typeof(allowClear) === "object" && allowClear !== null && allowClear !== void 0 && allowClear.clearIcon ? allowClear.clearIcon : "✖";
      clearIcon = import_react.default.createElement("span", {
        onClick: function onClick(event) {
          handleReset === null || handleReset === void 0 || handleReset(event);
          onClear === null || onClear === void 0 || onClear();
        },
        onMouseDown: function onMouseDown(e) {
          return e.preventDefault();
        },
        className: (0, import_classnames.default)(clearIconCls, _defineProperty(_defineProperty({}, "".concat(clearIconCls, "-hidden"), !needClear), "".concat(clearIconCls, "-has-suffix"), !!suffix)),
        role: "button",
        tabIndex: -1
      }, iconNode);
    }
    var affixWrapperPrefixCls = "".concat(prefixCls, "-affix-wrapper");
    var affixWrapperCls = (0, import_classnames.default)(affixWrapperPrefixCls, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-disabled"), disabled), "".concat(affixWrapperPrefixCls, "-disabled"), disabled), "".concat(affixWrapperPrefixCls, "-focused"), focused), "".concat(affixWrapperPrefixCls, "-readonly"), readOnly), "".concat(affixWrapperPrefixCls, "-input-with-clear-btn"), suffix && allowClear && value), classes === null || classes === void 0 ? void 0 : classes.affixWrapper, classNames6 === null || classNames6 === void 0 ? void 0 : classNames6.affixWrapper, classNames6 === null || classNames6 === void 0 ? void 0 : classNames6.variant);
    var suffixNode = (suffix || allowClear) && import_react.default.createElement("span", {
      className: (0, import_classnames.default)("".concat(prefixCls, "-suffix"), classNames6 === null || classNames6 === void 0 ? void 0 : classNames6.suffix),
      style: styles === null || styles === void 0 ? void 0 : styles.suffix
    }, clearIcon, suffix);
    element = import_react.default.createElement(AffixWrapperComponent, _extends({
      className: affixWrapperCls,
      style: styles === null || styles === void 0 ? void 0 : styles.affixWrapper,
      onClick: onInputClick
    }, dataAttrs === null || dataAttrs === void 0 ? void 0 : dataAttrs.affixWrapper, {
      ref: containerRef
    }), prefix && import_react.default.createElement("span", {
      className: (0, import_classnames.default)("".concat(prefixCls, "-prefix"), classNames6 === null || classNames6 === void 0 ? void 0 : classNames6.prefix),
      style: styles === null || styles === void 0 ? void 0 : styles.prefix
    }, prefix), element, suffixNode);
  }
  if (hasAddon(props)) {
    var wrapperCls = "".concat(prefixCls, "-group");
    var addonCls = "".concat(wrapperCls, "-addon");
    var groupWrapperCls = "".concat(wrapperCls, "-wrapper");
    var mergedWrapperClassName = (0, import_classnames.default)("".concat(prefixCls, "-wrapper"), wrapperCls, classes === null || classes === void 0 ? void 0 : classes.wrapper, classNames6 === null || classNames6 === void 0 ? void 0 : classNames6.wrapper);
    var mergedGroupClassName = (0, import_classnames.default)(groupWrapperCls, _defineProperty({}, "".concat(groupWrapperCls, "-disabled"), disabled), classes === null || classes === void 0 ? void 0 : classes.group, classNames6 === null || classNames6 === void 0 ? void 0 : classNames6.groupWrapper);
    element = import_react.default.createElement(GroupWrapperComponent, {
      className: mergedGroupClassName,
      ref: groupRef
    }, import_react.default.createElement(WrapperComponent, {
      className: mergedWrapperClassName
    }, addonBefore && import_react.default.createElement(GroupAddonComponent, {
      className: addonCls
    }, addonBefore), element, addonAfter && import_react.default.createElement(GroupAddonComponent, {
      className: addonCls
    }, addonAfter)));
  }
  return import_react.default.cloneElement(element, {
    className: (0, import_classnames.default)((_element$props = element.props) === null || _element$props === void 0 ? void 0 : _element$props.className, className) || null,
    style: _objectSpread2(_objectSpread2({}, (_element$props2 = element.props) === null || _element$props2 === void 0 ? void 0 : _element$props2.style), style),
    hidden
  });
});
var BaseInput_default = BaseInput;

// node_modules/rc-input/es/Input.js
var import_classnames2 = __toESM(require_classnames());
var import_react2 = __toESM(require_react());

// node_modules/rc-input/es/hooks/useCount.js
var React2 = __toESM(require_react());
var _excluded = ["show"];
function useCount(count, showCount) {
  return React2.useMemo(function() {
    var mergedConfig = {};
    if (showCount) {
      mergedConfig.show = _typeof(showCount) === "object" && showCount.formatter ? showCount.formatter : !!showCount;
    }
    mergedConfig = _objectSpread2(_objectSpread2({}, mergedConfig), count);
    var _ref = mergedConfig, show = _ref.show, rest = _objectWithoutProperties(_ref, _excluded);
    return _objectSpread2(_objectSpread2({}, rest), {}, {
      show: !!show,
      showFormatter: typeof show === "function" ? show : void 0,
      strategy: rest.strategy || function(value) {
        return value.length;
      }
    });
  }, [count, showCount]);
}

// node_modules/rc-input/es/Input.js
var _excluded2 = ["autoComplete", "onChange", "onFocus", "onBlur", "onPressEnter", "onKeyDown", "onKeyUp", "prefixCls", "disabled", "htmlSize", "className", "maxLength", "suffix", "showCount", "count", "type", "classes", "classNames", "styles", "onCompositionStart", "onCompositionEnd"];
var Input = (0, import_react2.forwardRef)(function(props, ref) {
  var autoComplete = props.autoComplete, onChange = props.onChange, onFocus = props.onFocus, onBlur = props.onBlur, onPressEnter = props.onPressEnter, onKeyDown = props.onKeyDown, onKeyUp = props.onKeyUp, _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-input" : _props$prefixCls, disabled = props.disabled, htmlSize = props.htmlSize, className = props.className, maxLength = props.maxLength, suffix = props.suffix, showCount = props.showCount, count = props.count, _props$type = props.type, type = _props$type === void 0 ? "text" : _props$type, classes = props.classes, classNames6 = props.classNames, styles = props.styles, _onCompositionStart = props.onCompositionStart, onCompositionEnd = props.onCompositionEnd, rest = _objectWithoutProperties(props, _excluded2);
  var _useState = (0, import_react2.useState)(false), _useState2 = _slicedToArray(_useState, 2), focused = _useState2[0], setFocused = _useState2[1];
  var compositionRef = (0, import_react2.useRef)(false);
  var keyLockRef = (0, import_react2.useRef)(false);
  var inputRef = (0, import_react2.useRef)(null);
  var holderRef = (0, import_react2.useRef)(null);
  var focus = function focus2(option) {
    if (inputRef.current) {
      triggerFocus(inputRef.current, option);
    }
  };
  var _useMergedState = useMergedState(props.defaultValue, {
    value: props.value
  }), _useMergedState2 = _slicedToArray(_useMergedState, 2), value = _useMergedState2[0], setValue = _useMergedState2[1];
  var formatValue = value === void 0 || value === null ? "" : String(value);
  var _useState3 = (0, import_react2.useState)(null), _useState4 = _slicedToArray(_useState3, 2), selection = _useState4[0], setSelection = _useState4[1];
  var countConfig = useCount(count, showCount);
  var mergedMax = countConfig.max || maxLength;
  var valueLength = countConfig.strategy(formatValue);
  var isOutOfRange = !!mergedMax && valueLength > mergedMax;
  (0, import_react2.useImperativeHandle)(ref, function() {
    var _holderRef$current;
    return {
      focus,
      blur: function blur() {
        var _inputRef$current;
        (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 || _inputRef$current.blur();
      },
      setSelectionRange: function setSelectionRange(start, end, direction) {
        var _inputRef$current2;
        (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 || _inputRef$current2.setSelectionRange(start, end, direction);
      },
      select: function select() {
        var _inputRef$current3;
        (_inputRef$current3 = inputRef.current) === null || _inputRef$current3 === void 0 || _inputRef$current3.select();
      },
      input: inputRef.current,
      nativeElement: ((_holderRef$current = holderRef.current) === null || _holderRef$current === void 0 ? void 0 : _holderRef$current.nativeElement) || inputRef.current
    };
  });
  (0, import_react2.useEffect)(function() {
    setFocused(function(prev) {
      return prev && disabled ? false : prev;
    });
  }, [disabled]);
  var triggerChange = function triggerChange2(e, currentValue, info) {
    var cutValue = currentValue;
    if (!compositionRef.current && countConfig.exceedFormatter && countConfig.max && countConfig.strategy(currentValue) > countConfig.max) {
      cutValue = countConfig.exceedFormatter(currentValue, {
        max: countConfig.max
      });
      if (currentValue !== cutValue) {
        var _inputRef$current4, _inputRef$current5;
        setSelection([((_inputRef$current4 = inputRef.current) === null || _inputRef$current4 === void 0 ? void 0 : _inputRef$current4.selectionStart) || 0, ((_inputRef$current5 = inputRef.current) === null || _inputRef$current5 === void 0 ? void 0 : _inputRef$current5.selectionEnd) || 0]);
      }
    } else if (info.source === "compositionEnd") {
      return;
    }
    setValue(cutValue);
    if (inputRef.current) {
      resolveOnChange(inputRef.current, e, onChange, cutValue);
    }
  };
  (0, import_react2.useEffect)(function() {
    if (selection) {
      var _inputRef$current6;
      (_inputRef$current6 = inputRef.current) === null || _inputRef$current6 === void 0 || _inputRef$current6.setSelectionRange.apply(_inputRef$current6, _toConsumableArray(selection));
    }
  }, [selection]);
  var onInternalChange = function onInternalChange2(e) {
    triggerChange(e, e.target.value, {
      source: "change"
    });
  };
  var onInternalCompositionEnd = function onInternalCompositionEnd2(e) {
    compositionRef.current = false;
    triggerChange(e, e.currentTarget.value, {
      source: "compositionEnd"
    });
    onCompositionEnd === null || onCompositionEnd === void 0 || onCompositionEnd(e);
  };
  var handleKeyDown = function handleKeyDown2(e) {
    if (onPressEnter && e.key === "Enter" && !keyLockRef.current) {
      keyLockRef.current = true;
      onPressEnter(e);
    }
    onKeyDown === null || onKeyDown === void 0 || onKeyDown(e);
  };
  var handleKeyUp = function handleKeyUp2(e) {
    if (e.key === "Enter") {
      keyLockRef.current = false;
    }
    onKeyUp === null || onKeyUp === void 0 || onKeyUp(e);
  };
  var handleFocus = function handleFocus2(e) {
    setFocused(true);
    onFocus === null || onFocus === void 0 || onFocus(e);
  };
  var handleBlur = function handleBlur2(e) {
    setFocused(false);
    onBlur === null || onBlur === void 0 || onBlur(e);
  };
  var handleReset = function handleReset2(e) {
    setValue("");
    focus();
    if (inputRef.current) {
      resolveOnChange(inputRef.current, e, onChange);
    }
  };
  var outOfRangeCls = isOutOfRange && "".concat(prefixCls, "-out-of-range");
  var getInputElement = function getInputElement2() {
    var otherProps = omit(props, [
      "prefixCls",
      "onPressEnter",
      "addonBefore",
      "addonAfter",
      "prefix",
      "suffix",
      "allowClear",
      // Input elements must be either controlled or uncontrolled,
      // specify either the value prop, or the defaultValue prop, but not both.
      "defaultValue",
      "showCount",
      "count",
      "classes",
      "htmlSize",
      "styles",
      "classNames",
      "onClear"
    ]);
    return import_react2.default.createElement("input", _extends({
      autoComplete
    }, otherProps, {
      onChange: onInternalChange,
      onFocus: handleFocus,
      onBlur: handleBlur,
      onKeyDown: handleKeyDown,
      onKeyUp: handleKeyUp,
      className: (0, import_classnames2.default)(prefixCls, _defineProperty({}, "".concat(prefixCls, "-disabled"), disabled), classNames6 === null || classNames6 === void 0 ? void 0 : classNames6.input),
      style: styles === null || styles === void 0 ? void 0 : styles.input,
      ref: inputRef,
      size: htmlSize,
      type,
      onCompositionStart: function onCompositionStart(e) {
        compositionRef.current = true;
        _onCompositionStart === null || _onCompositionStart === void 0 || _onCompositionStart(e);
      },
      onCompositionEnd: onInternalCompositionEnd
    }));
  };
  var getSuffix = function getSuffix2() {
    var hasMaxLength = Number(mergedMax) > 0;
    if (suffix || countConfig.show) {
      var dataCount = countConfig.showFormatter ? countConfig.showFormatter({
        value: formatValue,
        count: valueLength,
        maxLength: mergedMax
      }) : "".concat(valueLength).concat(hasMaxLength ? " / ".concat(mergedMax) : "");
      return import_react2.default.createElement(import_react2.default.Fragment, null, countConfig.show && import_react2.default.createElement("span", {
        className: (0, import_classnames2.default)("".concat(prefixCls, "-show-count-suffix"), _defineProperty({}, "".concat(prefixCls, "-show-count-has-suffix"), !!suffix), classNames6 === null || classNames6 === void 0 ? void 0 : classNames6.count),
        style: _objectSpread2({}, styles === null || styles === void 0 ? void 0 : styles.count)
      }, dataCount), suffix);
    }
    return null;
  };
  return import_react2.default.createElement(BaseInput_default, _extends({}, rest, {
    prefixCls,
    className: (0, import_classnames2.default)(className, outOfRangeCls),
    handleReset,
    value: formatValue,
    focused,
    triggerFocus: focus,
    suffix: getSuffix(),
    disabled,
    classes,
    classNames: classNames6,
    styles
  }), getInputElement());
});
var Input_default = Input;

// node_modules/rc-input/es/index.js
var es_default = Input_default;

// node_modules/rc-textarea/es/TextArea.js
var import_react3 = __toESM(require_react());

// node_modules/rc-textarea/es/ResizableTextArea.js
var import_classnames3 = __toESM(require_classnames());

// node_modules/rc-resize-observer/es/index.js
var React7 = __toESM(require_react());

// node_modules/rc-resize-observer/es/SingleObserver/index.js
var React6 = __toESM(require_react());

// node_modules/rc-resize-observer/es/Collection.js
var React4 = __toESM(require_react());
var CollectionContext = React4.createContext(null);
function Collection(_ref) {
  var children = _ref.children, onBatchResize = _ref.onBatchResize;
  var resizeIdRef = React4.useRef(0);
  var resizeInfosRef = React4.useRef([]);
  var onCollectionResize = React4.useContext(CollectionContext);
  var onResize2 = React4.useCallback(function(size, element, data) {
    resizeIdRef.current += 1;
    var currentId = resizeIdRef.current;
    resizeInfosRef.current.push({
      size,
      element,
      data
    });
    Promise.resolve().then(function() {
      if (currentId === resizeIdRef.current) {
        onBatchResize === null || onBatchResize === void 0 || onBatchResize(resizeInfosRef.current);
        resizeInfosRef.current = [];
      }
    });
    onCollectionResize === null || onCollectionResize === void 0 || onCollectionResize(size, element, data);
  }, [onBatchResize, onCollectionResize]);
  return React4.createElement(CollectionContext.Provider, {
    value: onResize2
  }, children);
}

// node_modules/rc-resize-observer/es/utils/observerUtil.js
var elementListeners = /* @__PURE__ */ new Map();
function onResize(entities) {
  entities.forEach(function(entity) {
    var _elementListeners$get;
    var target = entity.target;
    (_elementListeners$get = elementListeners.get(target)) === null || _elementListeners$get === void 0 || _elementListeners$get.forEach(function(listener) {
      return listener(target);
    });
  });
}
var resizeObserver = new ResizeObserver_es_default(onResize);
function observe(element, callback) {
  if (!elementListeners.has(element)) {
    elementListeners.set(element, /* @__PURE__ */ new Set());
    resizeObserver.observe(element);
  }
  elementListeners.get(element).add(callback);
}
function unobserve(element, callback) {
  if (elementListeners.has(element)) {
    elementListeners.get(element).delete(callback);
    if (!elementListeners.get(element).size) {
      resizeObserver.unobserve(element);
      elementListeners.delete(element);
    }
  }
}

// node_modules/rc-resize-observer/es/SingleObserver/DomWrapper.js
var React5 = __toESM(require_react());
var DomWrapper = function(_React$Component) {
  _inherits(DomWrapper2, _React$Component);
  var _super = _createSuper(DomWrapper2);
  function DomWrapper2() {
    _classCallCheck(this, DomWrapper2);
    return _super.apply(this, arguments);
  }
  _createClass(DomWrapper2, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return DomWrapper2;
}(React5.Component);

// node_modules/rc-resize-observer/es/SingleObserver/index.js
function SingleObserver(props, ref) {
  var children = props.children, disabled = props.disabled;
  var elementRef = React6.useRef(null);
  var wrapperRef = React6.useRef(null);
  var onCollectionResize = React6.useContext(CollectionContext);
  var isRenderProps = typeof children === "function";
  var mergedChildren = isRenderProps ? children(elementRef) : children;
  var sizeRef = React6.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  });
  var canRef = !isRenderProps && React6.isValidElement(mergedChildren) && supportRef(mergedChildren);
  var originRef = canRef ? mergedChildren.ref : null;
  var mergedRef = useComposeRef(originRef, elementRef);
  var getDom = function getDom2() {
    var _elementRef$current;
    return findDOMNode(elementRef.current) || // Support `nativeElement` format
    (elementRef.current && _typeof(elementRef.current) === "object" ? findDOMNode((_elementRef$current = elementRef.current) === null || _elementRef$current === void 0 ? void 0 : _elementRef$current.nativeElement) : null) || findDOMNode(wrapperRef.current);
  };
  React6.useImperativeHandle(ref, function() {
    return getDom();
  });
  var propsRef = React6.useRef(props);
  propsRef.current = props;
  var onInternalResize = React6.useCallback(function(target) {
    var _propsRef$current = propsRef.current, onResize2 = _propsRef$current.onResize, data = _propsRef$current.data;
    var _target$getBoundingCl = target.getBoundingClientRect(), width = _target$getBoundingCl.width, height = _target$getBoundingCl.height;
    var offsetWidth = target.offsetWidth, offsetHeight = target.offsetHeight;
    var fixedWidth = Math.floor(width);
    var fixedHeight = Math.floor(height);
    if (sizeRef.current.width !== fixedWidth || sizeRef.current.height !== fixedHeight || sizeRef.current.offsetWidth !== offsetWidth || sizeRef.current.offsetHeight !== offsetHeight) {
      var size = {
        width: fixedWidth,
        height: fixedHeight,
        offsetWidth,
        offsetHeight
      };
      sizeRef.current = size;
      var mergedOffsetWidth = offsetWidth === Math.round(width) ? width : offsetWidth;
      var mergedOffsetHeight = offsetHeight === Math.round(height) ? height : offsetHeight;
      var sizeInfo = _objectSpread2(_objectSpread2({}, size), {}, {
        offsetWidth: mergedOffsetWidth,
        offsetHeight: mergedOffsetHeight
      });
      onCollectionResize === null || onCollectionResize === void 0 || onCollectionResize(sizeInfo, target, data);
      if (onResize2) {
        Promise.resolve().then(function() {
          onResize2(sizeInfo, target);
        });
      }
    }
  }, []);
  React6.useEffect(function() {
    var currentElement = getDom();
    if (currentElement && !disabled) {
      observe(currentElement, onInternalResize);
    }
    return function() {
      return unobserve(currentElement, onInternalResize);
    };
  }, [elementRef.current, disabled]);
  return React6.createElement(DomWrapper, {
    ref: wrapperRef
  }, canRef ? React6.cloneElement(mergedChildren, {
    ref: mergedRef
  }) : mergedChildren);
}
var RefSingleObserver = React6.forwardRef(SingleObserver);
if (true) {
  RefSingleObserver.displayName = "SingleObserver";
}
var SingleObserver_default = RefSingleObserver;

// node_modules/rc-resize-observer/es/index.js
var INTERNAL_PREFIX_KEY = "rc-observer-key";
function ResizeObserver(props, ref) {
  var children = props.children;
  var childNodes = typeof children === "function" ? [children] : toArray(children);
  if (true) {
    if (childNodes.length > 1) {
      warning(false, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.");
    } else if (childNodes.length === 0) {
      warning(false, "`children` of ResizeObserver is empty. Nothing is in observe.");
    }
  }
  return childNodes.map(function(child, index) {
    var key = (child === null || child === void 0 ? void 0 : child.key) || "".concat(INTERNAL_PREFIX_KEY, "-").concat(index);
    return React7.createElement(SingleObserver_default, _extends({}, props, {
      key,
      ref: index === 0 ? ref : void 0
    }), child);
  });
}
var RefResizeObserver = React7.forwardRef(ResizeObserver);
if (true) {
  RefResizeObserver.displayName = "ResizeObserver";
}
RefResizeObserver.Collection = Collection;
var es_default2 = RefResizeObserver;

// node_modules/rc-textarea/es/ResizableTextArea.js
var React8 = __toESM(require_react());

// node_modules/rc-textarea/es/calculateNodeHeight.js
var HIDDEN_TEXTAREA_STYLE = "\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important;\n  pointer-events: none !important;\n";
var SIZING_STYLE = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break", "white-space"];
var computedStyleCache = {};
var hiddenTextarea;
function calculateNodeStyling(node) {
  var useCache = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var nodeRef = node.getAttribute("id") || node.getAttribute("data-reactid") || node.getAttribute("name");
  if (useCache && computedStyleCache[nodeRef]) {
    return computedStyleCache[nodeRef];
  }
  var style = window.getComputedStyle(node);
  var boxSizing = style.getPropertyValue("box-sizing") || style.getPropertyValue("-moz-box-sizing") || style.getPropertyValue("-webkit-box-sizing");
  var paddingSize = parseFloat(style.getPropertyValue("padding-bottom")) + parseFloat(style.getPropertyValue("padding-top"));
  var borderSize = parseFloat(style.getPropertyValue("border-bottom-width")) + parseFloat(style.getPropertyValue("border-top-width"));
  var sizingStyle = SIZING_STYLE.map(function(name) {
    return "".concat(name, ":").concat(style.getPropertyValue(name));
  }).join(";");
  var nodeInfo = {
    sizingStyle,
    paddingSize,
    borderSize,
    boxSizing
  };
  if (useCache && nodeRef) {
    computedStyleCache[nodeRef] = nodeInfo;
  }
  return nodeInfo;
}
function calculateAutoSizeStyle(uiTextNode) {
  var useCache = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var minRows = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
  var maxRows = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement("textarea");
    hiddenTextarea.setAttribute("tab-index", "-1");
    hiddenTextarea.setAttribute("aria-hidden", "true");
    hiddenTextarea.setAttribute("name", "hiddenTextarea");
    document.body.appendChild(hiddenTextarea);
  }
  if (uiTextNode.getAttribute("wrap")) {
    hiddenTextarea.setAttribute("wrap", uiTextNode.getAttribute("wrap"));
  } else {
    hiddenTextarea.removeAttribute("wrap");
  }
  var _calculateNodeStyling = calculateNodeStyling(uiTextNode, useCache), paddingSize = _calculateNodeStyling.paddingSize, borderSize = _calculateNodeStyling.borderSize, boxSizing = _calculateNodeStyling.boxSizing, sizingStyle = _calculateNodeStyling.sizingStyle;
  hiddenTextarea.setAttribute("style", "".concat(sizingStyle, ";").concat(HIDDEN_TEXTAREA_STYLE));
  hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || "";
  var minHeight = void 0;
  var maxHeight = void 0;
  var overflowY;
  var height = hiddenTextarea.scrollHeight;
  if (boxSizing === "border-box") {
    height += borderSize;
  } else if (boxSizing === "content-box") {
    height -= paddingSize;
  }
  if (minRows !== null || maxRows !== null) {
    hiddenTextarea.value = " ";
    var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
    if (minRows !== null) {
      minHeight = singleRowHeight * minRows;
      if (boxSizing === "border-box") {
        minHeight = minHeight + paddingSize + borderSize;
      }
      height = Math.max(minHeight, height);
    }
    if (maxRows !== null) {
      maxHeight = singleRowHeight * maxRows;
      if (boxSizing === "border-box") {
        maxHeight = maxHeight + paddingSize + borderSize;
      }
      overflowY = height > maxHeight ? "" : "hidden";
      height = Math.min(maxHeight, height);
    }
  }
  var style = {
    height,
    overflowY,
    resize: "none"
  };
  if (minHeight) {
    style.minHeight = minHeight;
  }
  if (maxHeight) {
    style.maxHeight = maxHeight;
  }
  return style;
}

// node_modules/rc-textarea/es/ResizableTextArea.js
var _excluded3 = ["prefixCls", "defaultValue", "value", "autoSize", "onResize", "className", "style", "disabled", "onChange", "onInternalAutoSize"];
var RESIZE_START = 0;
var RESIZE_MEASURING = 1;
var RESIZE_STABLE = 2;
var ResizableTextArea = React8.forwardRef(function(props, ref) {
  var _ref = props, prefixCls = _ref.prefixCls, defaultValue = _ref.defaultValue, value = _ref.value, autoSize = _ref.autoSize, onResize2 = _ref.onResize, className = _ref.className, style = _ref.style, disabled = _ref.disabled, onChange = _ref.onChange, onInternalAutoSize = _ref.onInternalAutoSize, restProps = _objectWithoutProperties(_ref, _excluded3);
  var _useMergedState = useMergedState(defaultValue, {
    value,
    postState: function postState(val) {
      return val !== null && val !== void 0 ? val : "";
    }
  }), _useMergedState2 = _slicedToArray(_useMergedState, 2), mergedValue = _useMergedState2[0], setMergedValue = _useMergedState2[1];
  var onInternalChange = function onInternalChange2(event) {
    setMergedValue(event.target.value);
    onChange === null || onChange === void 0 || onChange(event);
  };
  var textareaRef = React8.useRef();
  React8.useImperativeHandle(ref, function() {
    return {
      textArea: textareaRef.current
    };
  });
  var _React$useMemo = React8.useMemo(function() {
    if (autoSize && _typeof(autoSize) === "object") {
      return [autoSize.minRows, autoSize.maxRows];
    }
    return [];
  }, [autoSize]), _React$useMemo2 = _slicedToArray(_React$useMemo, 2), minRows = _React$useMemo2[0], maxRows = _React$useMemo2[1];
  var needAutoSize = !!autoSize;
  var fixFirefoxAutoScroll = function fixFirefoxAutoScroll2() {
    try {
      if (document.activeElement === textareaRef.current) {
        var _textareaRef$current = textareaRef.current, selectionStart = _textareaRef$current.selectionStart, selectionEnd = _textareaRef$current.selectionEnd, scrollTop = _textareaRef$current.scrollTop;
        textareaRef.current.setSelectionRange(selectionStart, selectionEnd);
        textareaRef.current.scrollTop = scrollTop;
      }
    } catch (e) {
    }
  };
  var _React$useState = React8.useState(RESIZE_STABLE), _React$useState2 = _slicedToArray(_React$useState, 2), resizeState = _React$useState2[0], setResizeState = _React$useState2[1];
  var _React$useState3 = React8.useState(), _React$useState4 = _slicedToArray(_React$useState3, 2), autoSizeStyle = _React$useState4[0], setAutoSizeStyle = _React$useState4[1];
  var startResize = function startResize2() {
    setResizeState(RESIZE_START);
    if (false) {
      onInternalAutoSize === null || onInternalAutoSize === void 0 || onInternalAutoSize();
    }
  };
  useLayoutEffect_default(function() {
    if (needAutoSize) {
      startResize();
    }
  }, [value, minRows, maxRows, needAutoSize]);
  useLayoutEffect_default(function() {
    if (resizeState === RESIZE_START) {
      setResizeState(RESIZE_MEASURING);
    } else if (resizeState === RESIZE_MEASURING) {
      var textareaStyles = calculateAutoSizeStyle(textareaRef.current, false, minRows, maxRows);
      setResizeState(RESIZE_STABLE);
      setAutoSizeStyle(textareaStyles);
    } else {
      fixFirefoxAutoScroll();
    }
  }, [resizeState]);
  var resizeRafRef = React8.useRef();
  var cleanRaf = function cleanRaf2() {
    raf_default.cancel(resizeRafRef.current);
  };
  var onInternalResize = function onInternalResize2(size) {
    if (resizeState === RESIZE_STABLE) {
      onResize2 === null || onResize2 === void 0 || onResize2(size);
      if (autoSize) {
        cleanRaf();
        resizeRafRef.current = raf_default(function() {
          startResize();
        });
      }
    }
  };
  React8.useEffect(function() {
    return cleanRaf;
  }, []);
  var mergedAutoSizeStyle = needAutoSize ? autoSizeStyle : null;
  var mergedStyle = _objectSpread2(_objectSpread2({}, style), mergedAutoSizeStyle);
  if (resizeState === RESIZE_START || resizeState === RESIZE_MEASURING) {
    mergedStyle.overflowY = "hidden";
    mergedStyle.overflowX = "hidden";
  }
  return React8.createElement(es_default2, {
    onResize: onInternalResize,
    disabled: !(autoSize || onResize2)
  }, React8.createElement("textarea", _extends({}, restProps, {
    ref: textareaRef,
    style: mergedStyle,
    className: (0, import_classnames3.default)(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-disabled"), disabled)),
    disabled,
    value: mergedValue,
    onChange: onInternalChange
  })));
});
var ResizableTextArea_default = ResizableTextArea;

// node_modules/rc-textarea/es/TextArea.js
var _excluded4 = ["defaultValue", "value", "onFocus", "onBlur", "onChange", "allowClear", "maxLength", "onCompositionStart", "onCompositionEnd", "suffix", "prefixCls", "showCount", "count", "className", "style", "disabled", "hidden", "classNames", "styles", "onResize", "onClear", "onPressEnter", "readOnly", "autoSize", "onKeyDown"];
var TextArea = import_react3.default.forwardRef(function(_ref, ref) {
  var _countConfig$max;
  var defaultValue = _ref.defaultValue, customValue = _ref.value, onFocus = _ref.onFocus, onBlur = _ref.onBlur, onChange = _ref.onChange, allowClear = _ref.allowClear, maxLength = _ref.maxLength, onCompositionStart = _ref.onCompositionStart, onCompositionEnd = _ref.onCompositionEnd, suffix = _ref.suffix, _ref$prefixCls = _ref.prefixCls, prefixCls = _ref$prefixCls === void 0 ? "rc-textarea" : _ref$prefixCls, showCount = _ref.showCount, count = _ref.count, className = _ref.className, style = _ref.style, disabled = _ref.disabled, hidden = _ref.hidden, classNames6 = _ref.classNames, styles = _ref.styles, onResize2 = _ref.onResize, onClear = _ref.onClear, onPressEnter = _ref.onPressEnter, readOnly = _ref.readOnly, autoSize = _ref.autoSize, onKeyDown = _ref.onKeyDown, rest = _objectWithoutProperties(_ref, _excluded4);
  var _useMergedState = useMergedState(defaultValue, {
    value: customValue,
    defaultValue
  }), _useMergedState2 = _slicedToArray(_useMergedState, 2), value = _useMergedState2[0], setValue = _useMergedState2[1];
  var formatValue = value === void 0 || value === null ? "" : String(value);
  var _React$useState = import_react3.default.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), focused = _React$useState2[0], setFocused = _React$useState2[1];
  var compositionRef = import_react3.default.useRef(false);
  var _React$useState3 = import_react3.default.useState(null), _React$useState4 = _slicedToArray(_React$useState3, 2), textareaResized = _React$useState4[0], setTextareaResized = _React$useState4[1];
  var holderRef = (0, import_react3.useRef)(null);
  var resizableTextAreaRef = (0, import_react3.useRef)(null);
  var getTextArea = function getTextArea2() {
    var _resizableTextAreaRef;
    return (_resizableTextAreaRef = resizableTextAreaRef.current) === null || _resizableTextAreaRef === void 0 ? void 0 : _resizableTextAreaRef.textArea;
  };
  var focus = function focus2() {
    getTextArea().focus();
  };
  (0, import_react3.useImperativeHandle)(ref, function() {
    var _holderRef$current;
    return {
      resizableTextArea: resizableTextAreaRef.current,
      focus,
      blur: function blur() {
        getTextArea().blur();
      },
      nativeElement: ((_holderRef$current = holderRef.current) === null || _holderRef$current === void 0 ? void 0 : _holderRef$current.nativeElement) || getTextArea()
    };
  });
  (0, import_react3.useEffect)(function() {
    setFocused(function(prev) {
      return !disabled && prev;
    });
  }, [disabled]);
  var _React$useState5 = import_react3.default.useState(null), _React$useState6 = _slicedToArray(_React$useState5, 2), selection = _React$useState6[0], setSelection = _React$useState6[1];
  import_react3.default.useEffect(function() {
    if (selection) {
      var _getTextArea;
      (_getTextArea = getTextArea()).setSelectionRange.apply(_getTextArea, _toConsumableArray(selection));
    }
  }, [selection]);
  var countConfig = useCount(count, showCount);
  var mergedMax = (_countConfig$max = countConfig.max) !== null && _countConfig$max !== void 0 ? _countConfig$max : maxLength;
  var hasMaxLength = Number(mergedMax) > 0;
  var valueLength = countConfig.strategy(formatValue);
  var isOutOfRange = !!mergedMax && valueLength > mergedMax;
  var triggerChange = function triggerChange2(e, currentValue) {
    var cutValue = currentValue;
    if (!compositionRef.current && countConfig.exceedFormatter && countConfig.max && countConfig.strategy(currentValue) > countConfig.max) {
      cutValue = countConfig.exceedFormatter(currentValue, {
        max: countConfig.max
      });
      if (currentValue !== cutValue) {
        setSelection([getTextArea().selectionStart || 0, getTextArea().selectionEnd || 0]);
      }
    }
    setValue(cutValue);
    resolveOnChange(e.currentTarget, e, onChange, cutValue);
  };
  var onInternalCompositionStart = function onInternalCompositionStart2(e) {
    compositionRef.current = true;
    onCompositionStart === null || onCompositionStart === void 0 || onCompositionStart(e);
  };
  var onInternalCompositionEnd = function onInternalCompositionEnd2(e) {
    compositionRef.current = false;
    triggerChange(e, e.currentTarget.value);
    onCompositionEnd === null || onCompositionEnd === void 0 || onCompositionEnd(e);
  };
  var onInternalChange = function onInternalChange2(e) {
    triggerChange(e, e.target.value);
  };
  var handleKeyDown = function handleKeyDown2(e) {
    if (e.key === "Enter" && onPressEnter) {
      onPressEnter(e);
    }
    onKeyDown === null || onKeyDown === void 0 || onKeyDown(e);
  };
  var handleFocus = function handleFocus2(e) {
    setFocused(true);
    onFocus === null || onFocus === void 0 || onFocus(e);
  };
  var handleBlur = function handleBlur2(e) {
    setFocused(false);
    onBlur === null || onBlur === void 0 || onBlur(e);
  };
  var handleReset = function handleReset2(e) {
    setValue("");
    focus();
    resolveOnChange(getTextArea(), e, onChange);
  };
  var suffixNode = suffix;
  var dataCount;
  if (countConfig.show) {
    if (countConfig.showFormatter) {
      dataCount = countConfig.showFormatter({
        value: formatValue,
        count: valueLength,
        maxLength: mergedMax
      });
    } else {
      dataCount = "".concat(valueLength).concat(hasMaxLength ? " / ".concat(mergedMax) : "");
    }
    suffixNode = import_react3.default.createElement(import_react3.default.Fragment, null, suffixNode, import_react3.default.createElement("span", {
      className: (0, import_classnames4.default)("".concat(prefixCls, "-data-count"), classNames6 === null || classNames6 === void 0 ? void 0 : classNames6.count),
      style: styles === null || styles === void 0 ? void 0 : styles.count
    }, dataCount));
  }
  var handleResize = function handleResize2(size) {
    var _getTextArea2;
    onResize2 === null || onResize2 === void 0 || onResize2(size);
    if ((_getTextArea2 = getTextArea()) !== null && _getTextArea2 !== void 0 && _getTextArea2.style.height) {
      setTextareaResized(true);
    }
  };
  var isPureTextArea = !autoSize && !showCount && !allowClear;
  return import_react3.default.createElement(BaseInput_default, {
    ref: holderRef,
    value: formatValue,
    allowClear,
    handleReset,
    suffix: suffixNode,
    prefixCls,
    classNames: _objectSpread2(_objectSpread2({}, classNames6), {}, {
      affixWrapper: (0, import_classnames4.default)(classNames6 === null || classNames6 === void 0 ? void 0 : classNames6.affixWrapper, _defineProperty(_defineProperty({}, "".concat(prefixCls, "-show-count"), showCount), "".concat(prefixCls, "-textarea-allow-clear"), allowClear))
    }),
    disabled,
    focused,
    className: (0, import_classnames4.default)(className, isOutOfRange && "".concat(prefixCls, "-out-of-range")),
    style: _objectSpread2(_objectSpread2({}, style), textareaResized && !isPureTextArea ? {
      height: "auto"
    } : {}),
    dataAttrs: {
      affixWrapper: {
        "data-count": typeof dataCount === "string" ? dataCount : void 0
      }
    },
    hidden,
    readOnly,
    onClear
  }, import_react3.default.createElement(ResizableTextArea_default, _extends({}, rest, {
    autoSize,
    maxLength,
    onKeyDown: handleKeyDown,
    onChange: onInternalChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onCompositionStart: onInternalCompositionStart,
    onCompositionEnd: onInternalCompositionEnd,
    className: (0, import_classnames4.default)(classNames6 === null || classNames6 === void 0 ? void 0 : classNames6.textarea),
    style: _objectSpread2(_objectSpread2({}, styles === null || styles === void 0 ? void 0 : styles.textarea), {}, {
      resize: style === null || style === void 0 ? void 0 : style.resize
    }),
    disabled,
    prefixCls,
    onResize: handleResize,
    ref: resizableTextAreaRef,
    readOnly
  })));
});
var TextArea_default = TextArea;

// node_modules/rc-textarea/es/index.js
var es_default3 = TextArea_default;

// node_modules/antd/es/_util/getAllowClear.js
var import_react4 = __toESM(require_react());
var getAllowClear = (allowClear) => {
  let mergedAllowClear;
  if (typeof allowClear === "object" && (allowClear === null || allowClear === void 0 ? void 0 : allowClear.clearIcon)) {
    mergedAllowClear = allowClear;
  } else if (allowClear) {
    mergedAllowClear = {
      clearIcon: import_react4.default.createElement(CloseCircleFilled_default, null)
    };
  }
  return mergedAllowClear;
};
var getAllowClear_default = getAllowClear;

// node_modules/antd/es/_util/statusUtils.js
var import_classnames5 = __toESM(require_classnames());
function getStatusClassNames(prefixCls, status, hasFeedback) {
  return (0, import_classnames5.default)({
    [`${prefixCls}-status-success`]: status === "success",
    [`${prefixCls}-status-warning`]: status === "warning",
    [`${prefixCls}-status-error`]: status === "error",
    [`${prefixCls}-status-validating`]: status === "validating",
    [`${prefixCls}-has-feedback`]: hasFeedback
  });
}
var getMergedStatus = (contextStatus, customStatus) => customStatus || contextStatus;

// node_modules/antd/es/form/hooks/useVariants.js
var import_react5 = __toESM(require_react());
var useVariant = function(component, variant) {
  let legacyBordered = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
  var _a, _b;
  const {
    variant: configVariant,
    [component]: componentConfig
  } = (0, import_react5.useContext)(ConfigContext);
  const ctxVariant = (0, import_react5.useContext)(VariantContext);
  const configComponentVariant = componentConfig === null || componentConfig === void 0 ? void 0 : componentConfig.variant;
  let mergedVariant;
  if (typeof variant !== "undefined") {
    mergedVariant = variant;
  } else if (legacyBordered === false) {
    mergedVariant = "borderless";
  } else {
    mergedVariant = (_b = (_a = ctxVariant !== null && ctxVariant !== void 0 ? ctxVariant : configComponentVariant) !== null && _a !== void 0 ? _a : configVariant) !== null && _b !== void 0 ? _b : "outlined";
  }
  const enableVariantCls = Variants.includes(mergedVariant);
  return [mergedVariant, enableVariantCls];
};
var useVariants_default = useVariant;

// node_modules/antd/es/input/Input.js
var import_react8 = __toESM(require_react());
var import_classnames7 = __toESM(require_classnames());

// node_modules/antd/es/_util/ContextIsolator.js
var import_react6 = __toESM(require_react());

// node_modules/antd/es/space/Compact.js
var React11 = __toESM(require_react());
var import_classnames6 = __toESM(require_classnames());

// node_modules/antd/es/space/style/compact.js
var genSpaceCompactStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      "&-block": {
        display: "flex",
        width: "100%"
      },
      "&-vertical": {
        flexDirection: "column"
      }
    }
  };
};
var compact_default = genSpaceCompactStyle;

// node_modules/antd/es/space/style/index.js
var genSpaceStyle = (token) => {
  const {
    componentCls,
    antCls
  } = token;
  return {
    [componentCls]: {
      display: "inline-flex",
      "&-rtl": {
        direction: "rtl"
      },
      "&-vertical": {
        flexDirection: "column"
      },
      "&-align": {
        flexDirection: "column",
        "&-center": {
          alignItems: "center"
        },
        "&-start": {
          alignItems: "flex-start"
        },
        "&-end": {
          alignItems: "flex-end"
        },
        "&-baseline": {
          alignItems: "baseline"
        }
      },
      [`${componentCls}-item:empty`]: {
        display: "none"
      },
      // https://github.com/ant-design/ant-design/issues/47875
      [`${componentCls}-item > ${antCls}-badge-not-a-wrapper:only-child`]: {
        display: "block"
      }
    }
  };
};
var genSpaceGapStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      "&-gap-row-small": {
        rowGap: token.spaceGapSmallSize
      },
      "&-gap-row-middle": {
        rowGap: token.spaceGapMiddleSize
      },
      "&-gap-row-large": {
        rowGap: token.spaceGapLargeSize
      },
      "&-gap-col-small": {
        columnGap: token.spaceGapSmallSize
      },
      "&-gap-col-middle": {
        columnGap: token.spaceGapMiddleSize
      },
      "&-gap-col-large": {
        columnGap: token.spaceGapLargeSize
      }
    }
  };
};
var style_default = genStyleHooks("Space", (token) => {
  const spaceToken = merge(token, {
    spaceGapSmallSize: token.paddingXS,
    spaceGapMiddleSize: token.padding,
    spaceGapLargeSize: token.paddingLG
  });
  return [genSpaceStyle(spaceToken), genSpaceGapStyle(spaceToken), compact_default(spaceToken)];
}, () => ({}), {
  // Space component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/40315
  resetStyle: false
});

// node_modules/antd/es/space/Compact.js
var __rest = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var SpaceCompactItemContext = React11.createContext(null);
var useCompactItemContext = (prefixCls, direction) => {
  const compactItemContext = React11.useContext(SpaceCompactItemContext);
  const compactItemClassnames = React11.useMemo(() => {
    if (!compactItemContext) {
      return "";
    }
    const {
      compactDirection,
      isFirstItem,
      isLastItem
    } = compactItemContext;
    const separator = compactDirection === "vertical" ? "-vertical-" : "-";
    return (0, import_classnames6.default)(`${prefixCls}-compact${separator}item`, {
      [`${prefixCls}-compact${separator}first-item`]: isFirstItem,
      [`${prefixCls}-compact${separator}last-item`]: isLastItem,
      [`${prefixCls}-compact${separator}item-rtl`]: direction === "rtl"
    });
  }, [prefixCls, direction, compactItemContext]);
  return {
    compactSize: compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactSize,
    compactDirection: compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactDirection,
    compactItemClassnames
  };
};
var NoCompactStyle = (_ref) => {
  let {
    children
  } = _ref;
  return React11.createElement(SpaceCompactItemContext.Provider, {
    value: null
  }, children);
};
var CompactItem = (_a) => {
  var {
    children
  } = _a, otherProps = __rest(_a, ["children"]);
  return React11.createElement(SpaceCompactItemContext.Provider, {
    value: otherProps
  }, children);
};
var Compact = (props) => {
  const {
    getPrefixCls,
    direction: directionConfig
  } = React11.useContext(ConfigContext);
  const {
    size,
    direction,
    block,
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    children
  } = props, restProps = __rest(props, ["size", "direction", "block", "prefixCls", "className", "rootClassName", "children"]);
  const mergedSize = useSize_default((ctx) => size !== null && size !== void 0 ? size : ctx);
  const prefixCls = getPrefixCls("space-compact", customizePrefixCls);
  const [wrapCSSVar, hashId] = style_default(prefixCls);
  const clx = (0, import_classnames6.default)(prefixCls, hashId, {
    [`${prefixCls}-rtl`]: directionConfig === "rtl",
    [`${prefixCls}-block`]: block,
    [`${prefixCls}-vertical`]: direction === "vertical"
  }, className, rootClassName);
  const compactItemContext = React11.useContext(SpaceCompactItemContext);
  const childNodes = toArray(children);
  const nodes = React11.useMemo(() => childNodes.map((child, i) => {
    const key = (child === null || child === void 0 ? void 0 : child.key) || `${prefixCls}-item-${i}`;
    return React11.createElement(CompactItem, {
      key,
      compactSize: mergedSize,
      compactDirection: direction,
      isFirstItem: i === 0 && (!compactItemContext || (compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.isFirstItem)),
      isLastItem: i === childNodes.length - 1 && (!compactItemContext || (compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.isLastItem))
    }, child);
  }), [size, childNodes, compactItemContext]);
  if (childNodes.length === 0) {
    return null;
  }
  return wrapCSSVar(React11.createElement("div", Object.assign({
    className: clx
  }, restProps), nodes));
};
var Compact_default = Compact;

// node_modules/antd/es/_util/ContextIsolator.js
var ContextIsolator = (props) => {
  const {
    space,
    form,
    children
  } = props;
  if (children === void 0 || children === null) {
    return null;
  }
  let result = children;
  if (form) {
    result = import_react6.default.createElement(NoFormStyle, {
      override: true,
      status: true
    }, result);
  }
  if (space) {
    result = import_react6.default.createElement(NoCompactStyle, null, result);
  }
  return result;
};
var ContextIsolator_default = ContextIsolator;

// node_modules/antd/es/input/hooks/useRemovePasswordTimeout.js
var import_react7 = __toESM(require_react());
function useRemovePasswordTimeout(inputRef, triggerOnMount) {
  const removePasswordTimeoutRef = (0, import_react7.useRef)([]);
  const removePasswordTimeout = () => {
    removePasswordTimeoutRef.current.push(setTimeout(() => {
      var _a, _b, _c, _d;
      if (((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.input) && ((_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.input.getAttribute("type")) === "password" && ((_c = inputRef.current) === null || _c === void 0 ? void 0 : _c.input.hasAttribute("value"))) {
        (_d = inputRef.current) === null || _d === void 0 ? void 0 : _d.input.removeAttribute("value");
      }
    }));
  };
  (0, import_react7.useEffect)(() => {
    if (triggerOnMount) {
      removePasswordTimeout();
    }
    return () => removePasswordTimeoutRef.current.forEach((timer) => {
      if (timer) {
        clearTimeout(timer);
      }
    });
  }, []);
  return removePasswordTimeout;
}

// node_modules/antd/es/style/compact-item.js
function compactItemBorder(token, parentCls, options) {
  const {
    focusElCls,
    focus,
    borderElCls
  } = options;
  const childCombinator = borderElCls ? "> *" : "";
  const hoverEffects = ["hover", focus ? "focus" : null, "active"].filter(Boolean).map((n) => `&:${n} ${childCombinator}`).join(",");
  return {
    [`&-item:not(${parentCls}-last-item)`]: {
      marginInlineEnd: token.calc(token.lineWidth).mul(-1).equal()
    },
    "&-item": Object.assign(Object.assign({
      [hoverEffects]: {
        zIndex: 2
      }
    }, focusElCls ? {
      [`&${focusElCls}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${childCombinator}`]: {
        zIndex: 0
      }
    })
  };
}
function compactItemBorderRadius(prefixCls, parentCls, options) {
  const {
    borderElCls
  } = options;
  const childCombinator = borderElCls ? `> ${borderElCls}` : "";
  return {
    [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item) ${childCombinator}`]: {
      borderRadius: 0
    },
    [`&-item:not(${parentCls}-last-item)${parentCls}-first-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${parentCls}-first-item)${parentCls}-last-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function genCompactItemStyle(token) {
  let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: true
  };
  const {
    componentCls
  } = token;
  const compactCls = `${componentCls}-compact`;
  return {
    [compactCls]: Object.assign(Object.assign({}, compactItemBorder(token, compactCls, options)), compactItemBorderRadius(componentCls, compactCls, options))
  };
}

// node_modules/antd/es/input/style/token.js
function initInputToken(token) {
  return merge(token, {
    inputAffixPadding: token.paddingXXS
  });
}
var initComponentToken = (token) => {
  const {
    controlHeight,
    fontSize,
    lineHeight,
    lineWidth,
    controlHeightSM,
    controlHeightLG,
    fontSizeLG,
    lineHeightLG,
    paddingSM,
    controlPaddingHorizontalSM,
    controlPaddingHorizontal,
    colorFillAlter,
    colorPrimaryHover,
    colorPrimary,
    controlOutlineWidth,
    controlOutline,
    colorErrorOutline,
    colorWarningOutline,
    colorBgContainer
  } = token;
  return {
    paddingBlock: Math.max(Math.round((controlHeight - fontSize * lineHeight) / 2 * 10) / 10 - lineWidth, 0),
    paddingBlockSM: Math.max(Math.round((controlHeightSM - fontSize * lineHeight) / 2 * 10) / 10 - lineWidth, 0),
    paddingBlockLG: Math.ceil((controlHeightLG - fontSizeLG * lineHeightLG) / 2 * 10) / 10 - lineWidth,
    paddingInline: paddingSM - lineWidth,
    paddingInlineSM: controlPaddingHorizontalSM - lineWidth,
    paddingInlineLG: controlPaddingHorizontal - lineWidth,
    addonBg: colorFillAlter,
    activeBorderColor: colorPrimary,
    hoverBorderColor: colorPrimaryHover,
    activeShadow: `0 0 0 ${controlOutlineWidth}px ${controlOutline}`,
    errorActiveShadow: `0 0 0 ${controlOutlineWidth}px ${colorErrorOutline}`,
    warningActiveShadow: `0 0 0 ${controlOutlineWidth}px ${colorWarningOutline}`,
    hoverBg: colorBgContainer,
    activeBg: colorBgContainer,
    inputFontSize: fontSize,
    inputFontSizeLG: fontSizeLG,
    inputFontSizeSM: fontSize
  };
};

// node_modules/antd/es/input/style/variants.js
var genHoverStyle = (token) => ({
  borderColor: token.hoverBorderColor,
  backgroundColor: token.hoverBg
});
var genDisabledStyle = (token) => ({
  color: token.colorTextDisabled,
  backgroundColor: token.colorBgContainerDisabled,
  borderColor: token.colorBorder,
  boxShadow: "none",
  cursor: "not-allowed",
  opacity: 1,
  "input[disabled], textarea[disabled]": {
    cursor: "not-allowed"
  },
  "&:hover:not([disabled])": Object.assign({}, genHoverStyle(merge(token, {
    hoverBorderColor: token.colorBorder,
    hoverBg: token.colorBgContainerDisabled
  })))
});
var genBaseOutlinedStyle = (token, options) => ({
  background: token.colorBgContainer,
  borderWidth: token.lineWidth,
  borderStyle: token.lineType,
  borderColor: options.borderColor,
  "&:hover": {
    borderColor: options.hoverBorderColor,
    backgroundColor: token.hoverBg
  },
  "&:focus, &:focus-within": {
    borderColor: options.activeBorderColor,
    boxShadow: options.activeShadow,
    outline: 0,
    backgroundColor: token.activeBg
  }
});
var genOutlinedStatusStyle = (token, options) => ({
  [`&${token.componentCls}-status-${options.status}:not(${token.componentCls}-disabled)`]: Object.assign(Object.assign({}, genBaseOutlinedStyle(token, options)), {
    [`${token.componentCls}-prefix, ${token.componentCls}-suffix`]: {
      color: options.affixColor
    }
  }),
  [`&${token.componentCls}-status-${options.status}${token.componentCls}-disabled`]: {
    borderColor: options.borderColor
  }
});
var genOutlinedStyle = (token, extraStyles) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, genBaseOutlinedStyle(token, {
    borderColor: token.colorBorder,
    hoverBorderColor: token.hoverBorderColor,
    activeBorderColor: token.activeBorderColor,
    activeShadow: token.activeShadow
  })), {
    [`&${token.componentCls}-disabled, &[disabled]`]: Object.assign({}, genDisabledStyle(token))
  }), genOutlinedStatusStyle(token, {
    status: "error",
    borderColor: token.colorError,
    hoverBorderColor: token.colorErrorBorderHover,
    activeBorderColor: token.colorError,
    activeShadow: token.errorActiveShadow,
    affixColor: token.colorError
  })), genOutlinedStatusStyle(token, {
    status: "warning",
    borderColor: token.colorWarning,
    hoverBorderColor: token.colorWarningBorderHover,
    activeBorderColor: token.colorWarning,
    activeShadow: token.warningActiveShadow,
    affixColor: token.colorWarning
  })), extraStyles)
});
var genOutlinedGroupStatusStyle = (token, options) => ({
  [`&${token.componentCls}-group-wrapper-status-${options.status}`]: {
    [`${token.componentCls}-group-addon`]: {
      borderColor: options.addonBorderColor,
      color: options.addonColor
    }
  }
});
var genOutlinedGroupStyle = (token) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign({
    [`${token.componentCls}-group`]: {
      "&-addon": {
        background: token.addonBg,
        border: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`
      },
      "&-addon:first-child": {
        borderInlineEnd: 0
      },
      "&-addon:last-child": {
        borderInlineStart: 0
      }
    }
  }, genOutlinedGroupStatusStyle(token, {
    status: "error",
    addonBorderColor: token.colorError,
    addonColor: token.colorErrorText
  })), genOutlinedGroupStatusStyle(token, {
    status: "warning",
    addonBorderColor: token.colorWarning,
    addonColor: token.colorWarningText
  })), {
    [`&${token.componentCls}-group-wrapper-disabled`]: {
      [`${token.componentCls}-group-addon`]: Object.assign({}, genDisabledStyle(token))
    }
  })
});
var genBorderlessStyle = (token, extraStyles) => {
  const {
    componentCls
  } = token;
  return {
    "&-borderless": Object.assign({
      background: "transparent",
      border: "none",
      "&:focus, &:focus-within": {
        outline: "none"
      },
      // >>>>> Disabled
      [`&${componentCls}-disabled, &[disabled]`]: {
        color: token.colorTextDisabled
      },
      // >>>>> Status
      [`&${componentCls}-status-error`]: {
        "&, & input, & textarea": {
          color: token.colorError
        }
      },
      [`&${componentCls}-status-warning`]: {
        "&, & input, & textarea": {
          color: token.colorWarning
        }
      }
    }, extraStyles)
  };
};
var genBaseFilledStyle = (token, options) => ({
  background: options.bg,
  borderWidth: token.lineWidth,
  borderStyle: token.lineType,
  borderColor: "transparent",
  "input&, & input, textarea&, & textarea": {
    color: options === null || options === void 0 ? void 0 : options.inputColor
  },
  "&:hover": {
    background: options.hoverBg
  },
  "&:focus, &:focus-within": {
    outline: 0,
    borderColor: options.activeBorderColor,
    backgroundColor: token.activeBg
  }
});
var genFilledStatusStyle = (token, options) => ({
  [`&${token.componentCls}-status-${options.status}:not(${token.componentCls}-disabled)`]: Object.assign(Object.assign({}, genBaseFilledStyle(token, options)), {
    [`${token.componentCls}-prefix, ${token.componentCls}-suffix`]: {
      color: options.affixColor
    }
  })
});
var genFilledStyle = (token, extraStyles) => ({
  "&-filled": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, genBaseFilledStyle(token, {
    bg: token.colorFillTertiary,
    hoverBg: token.colorFillSecondary,
    activeBorderColor: token.activeBorderColor
  })), {
    [`&${token.componentCls}-disabled, &[disabled]`]: Object.assign({}, genDisabledStyle(token))
  }), genFilledStatusStyle(token, {
    status: "error",
    bg: token.colorErrorBg,
    hoverBg: token.colorErrorBgHover,
    activeBorderColor: token.colorError,
    inputColor: token.colorErrorText,
    affixColor: token.colorError
  })), genFilledStatusStyle(token, {
    status: "warning",
    bg: token.colorWarningBg,
    hoverBg: token.colorWarningBgHover,
    activeBorderColor: token.colorWarning,
    inputColor: token.colorWarningText,
    affixColor: token.colorWarning
  })), extraStyles)
});
var genFilledGroupStatusStyle = (token, options) => ({
  [`&${token.componentCls}-group-wrapper-status-${options.status}`]: {
    [`${token.componentCls}-group-addon`]: {
      background: options.addonBg,
      color: options.addonColor
    }
  }
});
var genFilledGroupStyle = (token) => ({
  "&-filled": Object.assign(Object.assign(Object.assign({
    [`${token.componentCls}-group`]: {
      "&-addon": {
        background: token.colorFillTertiary
      },
      [`${token.componentCls}-filled:not(:focus):not(:focus-within)`]: {
        "&:not(:first-child)": {
          borderInlineStart: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`
        },
        "&:not(:last-child)": {
          borderInlineEnd: `${unit(token.lineWidth)} ${token.lineType} ${token.colorSplit}`
        }
      }
    }
  }, genFilledGroupStatusStyle(token, {
    status: "error",
    addonBg: token.colorErrorBg,
    addonColor: token.colorErrorText
  })), genFilledGroupStatusStyle(token, {
    status: "warning",
    addonBg: token.colorWarningBg,
    addonColor: token.colorWarningText
  })), {
    [`&${token.componentCls}-group-wrapper-disabled`]: {
      [`${token.componentCls}-group`]: {
        "&-addon": {
          background: token.colorFillTertiary,
          color: token.colorTextDisabled
        },
        "&-addon:first-child": {
          borderInlineStart: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
          borderTop: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
          borderBottom: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`
        },
        "&-addon:last-child": {
          borderInlineEnd: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
          borderTop: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
          borderBottom: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`
        }
      }
    }
  })
});

// node_modules/antd/es/input/style/index.js
var genPlaceholderStyle = (color) => ({
  // Firefox
  "&::-moz-placeholder": {
    opacity: 1
  },
  "&::placeholder": {
    color,
    userSelect: "none"
    // https://github.com/ant-design/ant-design/pull/32639
  },
  "&:placeholder-shown": {
    textOverflow: "ellipsis"
  }
});
var genInputLargeStyle = (token) => {
  const {
    paddingBlockLG,
    lineHeightLG,
    borderRadiusLG,
    paddingInlineLG
  } = token;
  return {
    padding: `${unit(paddingBlockLG)} ${unit(paddingInlineLG)}`,
    fontSize: token.inputFontSizeLG,
    lineHeight: lineHeightLG,
    borderRadius: borderRadiusLG
  };
};
var genInputSmallStyle = (token) => ({
  padding: `${unit(token.paddingBlockSM)} ${unit(token.paddingInlineSM)}`,
  fontSize: token.inputFontSizeSM,
  borderRadius: token.borderRadiusSM
});
var genBasicInputStyle = (token) => Object.assign(Object.assign({
  position: "relative",
  display: "inline-block",
  width: "100%",
  minWidth: 0,
  padding: `${unit(token.paddingBlock)} ${unit(token.paddingInline)}`,
  color: token.colorText,
  fontSize: token.inputFontSize,
  lineHeight: token.lineHeight,
  borderRadius: token.borderRadius,
  transition: `all ${token.motionDurationMid}`
}, genPlaceholderStyle(token.colorTextPlaceholder)), {
  // Reset height for `textarea`s
  "textarea&": {
    maxWidth: "100%",
    // prevent textarea resize from coming out of its container
    height: "auto",
    minHeight: token.controlHeight,
    lineHeight: token.lineHeight,
    verticalAlign: "bottom",
    transition: `all ${token.motionDurationSlow}, height 0s`,
    resize: "vertical"
  },
  // Size
  "&-lg": Object.assign({}, genInputLargeStyle(token)),
  "&-sm": Object.assign({}, genInputSmallStyle(token)),
  // RTL
  "&-rtl, &-textarea-rtl": {
    direction: "rtl"
  }
});
var genInputGroupStyle = (token) => {
  const {
    componentCls,
    antCls
  } = token;
  return {
    position: "relative",
    display: "table",
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    // Undo padding and float of grid classes
    "&[class*='col-']": {
      paddingInlineEnd: token.paddingXS,
      "&:last-child": {
        paddingInlineEnd: 0
      }
    },
    // Sizing options
    [`&-lg ${componentCls}, &-lg > ${componentCls}-group-addon`]: Object.assign({}, genInputLargeStyle(token)),
    [`&-sm ${componentCls}, &-sm > ${componentCls}-group-addon`]: Object.assign({}, genInputSmallStyle(token)),
    // Fix https://github.com/ant-design/ant-design/issues/5754
    [`&-lg ${antCls}-select-single ${antCls}-select-selector`]: {
      height: token.controlHeightLG
    },
    [`&-sm ${antCls}-select-single ${antCls}-select-selector`]: {
      height: token.controlHeightSM
    },
    [`> ${componentCls}`]: {
      display: "table-cell",
      "&:not(:first-child):not(:last-child)": {
        borderRadius: 0
      }
    },
    [`${componentCls}-group`]: {
      "&-addon, &-wrap": {
        display: "table-cell",
        width: 1,
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        "&:not(:first-child):not(:last-child)": {
          borderRadius: 0
        }
      },
      "&-wrap > *": {
        display: "block !important"
      },
      "&-addon": {
        position: "relative",
        padding: `0 ${unit(token.paddingInline)}`,
        color: token.colorText,
        fontWeight: "normal",
        fontSize: token.inputFontSize,
        textAlign: "center",
        borderRadius: token.borderRadius,
        transition: `all ${token.motionDurationSlow}`,
        lineHeight: 1,
        // Reset Select's style in addon
        [`${antCls}-select`]: {
          margin: `${unit(token.calc(token.paddingBlock).add(1).mul(-1).equal())} ${unit(token.calc(token.paddingInline).mul(-1).equal())}`,
          [`&${antCls}-select-single:not(${antCls}-select-customize-input):not(${antCls}-pagination-size-changer)`]: {
            [`${antCls}-select-selector`]: {
              backgroundColor: "inherit",
              border: `${unit(token.lineWidth)} ${token.lineType} transparent`,
              boxShadow: "none"
            }
          }
        },
        // https://github.com/ant-design/ant-design/issues/31333
        [`${antCls}-cascader-picker`]: {
          margin: `-9px ${unit(token.calc(token.paddingInline).mul(-1).equal())}`,
          backgroundColor: "transparent",
          [`${antCls}-cascader-input`]: {
            textAlign: "start",
            border: 0,
            boxShadow: "none"
          }
        }
      }
    },
    [componentCls]: {
      width: "100%",
      marginBottom: 0,
      textAlign: "inherit",
      "&:focus": {
        zIndex: 1,
        // Fix https://gw.alipayobjects.com/zos/rmsportal/DHNpoqfMXSfrSnlZvhsJ.png
        borderInlineEndWidth: 1
      },
      "&:hover": {
        zIndex: 1,
        borderInlineEndWidth: 1,
        [`${componentCls}-search-with-button &`]: {
          zIndex: 0
        }
      }
    },
    // Reset rounded corners
    [`> ${componentCls}:first-child, ${componentCls}-group-addon:first-child`]: {
      borderStartEndRadius: 0,
      borderEndEndRadius: 0,
      // Reset Select's style in addon
      [`${antCls}-select ${antCls}-select-selector`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${componentCls}-affix-wrapper`]: {
      [`&:not(:first-child) ${componentCls}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      },
      [`&:not(:last-child) ${componentCls}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${componentCls}:last-child, ${componentCls}-group-addon:last-child`]: {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0,
      // Reset Select's style in addon
      [`${antCls}-select ${antCls}-select-selector`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`${componentCls}-affix-wrapper`]: {
      "&:not(:last-child)": {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
        [`${componentCls}-search &`]: {
          borderStartStartRadius: token.borderRadius,
          borderEndStartRadius: token.borderRadius
        }
      },
      [`&:not(:first-child), ${componentCls}-search &:not(:first-child)`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&${componentCls}-group-compact`]: Object.assign(Object.assign({
      display: "block"
    }, clearFix()), {
      [`${componentCls}-group-addon, ${componentCls}-group-wrap, > ${componentCls}`]: {
        "&:not(:first-child):not(:last-child)": {
          borderInlineEndWidth: token.lineWidth,
          "&:hover, &:focus": {
            zIndex: 1
          }
        }
      },
      "& > *": {
        display: "inline-flex",
        float: "none",
        verticalAlign: "top",
        // https://github.com/ant-design/ant-design-pro/issues/139
        borderRadius: 0
      },
      [`
        & > ${componentCls}-affix-wrapper,
        & > ${componentCls}-number-affix-wrapper,
        & > ${antCls}-picker-range
      `]: {
        display: "inline-flex"
      },
      "& > *:not(:last-child)": {
        marginInlineEnd: token.calc(token.lineWidth).mul(-1).equal(),
        borderInlineEndWidth: token.lineWidth
      },
      // Undo float for .ant-input-group .ant-input
      [componentCls]: {
        float: "none"
      },
      // reset border for Select, DatePicker, AutoComplete, Cascader, Mention, TimePicker, Input
      [`& > ${antCls}-select > ${antCls}-select-selector,
      & > ${antCls}-select-auto-complete ${componentCls},
      & > ${antCls}-cascader-picker ${componentCls},
      & > ${componentCls}-group-wrapper ${componentCls}`]: {
        borderInlineEndWidth: token.lineWidth,
        borderRadius: 0,
        "&:hover, &:focus": {
          zIndex: 1
        }
      },
      [`& > ${antCls}-select-focused`]: {
        zIndex: 1
      },
      // update z-index for arrow icon
      [`& > ${antCls}-select > ${antCls}-select-arrow`]: {
        zIndex: 1
        // https://github.com/ant-design/ant-design/issues/20371
      },
      [`& > *:first-child,
      & > ${antCls}-select:first-child > ${antCls}-select-selector,
      & > ${antCls}-select-auto-complete:first-child ${componentCls},
      & > ${antCls}-cascader-picker:first-child ${componentCls}`]: {
        borderStartStartRadius: token.borderRadius,
        borderEndStartRadius: token.borderRadius
      },
      [`& > *:last-child,
      & > ${antCls}-select:last-child > ${antCls}-select-selector,
      & > ${antCls}-cascader-picker:last-child ${componentCls},
      & > ${antCls}-cascader-picker-focused:last-child ${componentCls}`]: {
        borderInlineEndWidth: token.lineWidth,
        borderStartEndRadius: token.borderRadius,
        borderEndEndRadius: token.borderRadius
      },
      // https://github.com/ant-design/ant-design/issues/12493
      [`& > ${antCls}-select-auto-complete ${componentCls}`]: {
        verticalAlign: "top"
      },
      [`${componentCls}-group-wrapper + ${componentCls}-group-wrapper`]: {
        marginInlineStart: token.calc(token.lineWidth).mul(-1).equal(),
        [`${componentCls}-affix-wrapper`]: {
          borderRadius: 0
        }
      },
      [`${componentCls}-group-wrapper:not(:last-child)`]: {
        [`&${componentCls}-search > ${componentCls}-group`]: {
          [`& > ${componentCls}-group-addon > ${componentCls}-search-button`]: {
            borderRadius: 0
          },
          [`& > ${componentCls}`]: {
            borderStartStartRadius: token.borderRadius,
            borderStartEndRadius: 0,
            borderEndEndRadius: 0,
            borderEndStartRadius: token.borderRadius
          }
        }
      }
    })
  };
};
var genInputStyle = (token) => {
  const {
    componentCls,
    controlHeightSM,
    lineWidth,
    calc
  } = token;
  const FIXED_CHROME_COLOR_HEIGHT = 16;
  const colorSmallPadding = calc(controlHeightSM).sub(calc(lineWidth).mul(2)).sub(FIXED_CHROME_COLOR_HEIGHT).div(2).equal();
  return {
    [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, resetComponent(token)), genBasicInputStyle(token)), genOutlinedStyle(token)), genFilledStyle(token)), genBorderlessStyle(token)), {
      '&[type="color"]': {
        height: token.controlHeight,
        [`&${componentCls}-lg`]: {
          height: token.controlHeightLG
        },
        [`&${componentCls}-sm`]: {
          height: controlHeightSM,
          paddingTop: colorSmallPadding,
          paddingBottom: colorSmallPadding
        }
      },
      '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration': {
        "-webkit-appearance": "none"
      }
    })
  };
};
var genAllowClearStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    // ========================= Input =========================
    [`${componentCls}-clear-icon`]: {
      margin: 0,
      color: token.colorTextQuaternary,
      fontSize: token.fontSizeIcon,
      verticalAlign: -1,
      // https://github.com/ant-design/ant-design/pull/18151
      // https://codesandbox.io/s/wizardly-sun-u10br
      cursor: "pointer",
      transition: `color ${token.motionDurationSlow}`,
      "&:hover": {
        color: token.colorTextTertiary
      },
      "&:active": {
        color: token.colorText
      },
      "&-hidden": {
        visibility: "hidden"
      },
      "&-has-suffix": {
        margin: `0 ${unit(token.inputAffixPadding)}`
      }
    }
  };
};
var genAffixStyle = (token) => {
  const {
    componentCls,
    inputAffixPadding,
    colorTextDescription,
    motionDurationSlow,
    colorIcon,
    colorIconHover,
    iconCls
  } = token;
  const affixCls = `${componentCls}-affix-wrapper`;
  const affixClsDisabled = `${componentCls}-affix-wrapper-disabled`;
  return {
    [affixCls]: Object.assign(Object.assign(Object.assign(Object.assign({}, genBasicInputStyle(token)), {
      display: "inline-flex",
      [`&:not(${componentCls}-disabled):hover`]: {
        zIndex: 1,
        [`${componentCls}-search-with-button &`]: {
          zIndex: 0
        }
      },
      "&-focused, &:focus": {
        zIndex: 1
      },
      [`> input${componentCls}`]: {
        padding: 0
      },
      [`> input${componentCls}, > textarea${componentCls}`]: {
        fontSize: "inherit",
        border: "none",
        borderRadius: 0,
        outline: "none",
        background: "transparent",
        color: "inherit",
        "&::-ms-reveal": {
          display: "none"
        },
        "&:focus": {
          boxShadow: "none !important"
        }
      },
      "&::before": {
        display: "inline-block",
        width: 0,
        visibility: "hidden",
        content: '"\\a0"'
      },
      [componentCls]: {
        "&-prefix, &-suffix": {
          display: "flex",
          flex: "none",
          alignItems: "center",
          "> *:not(:last-child)": {
            marginInlineEnd: token.paddingXS
          }
        },
        "&-show-count-suffix": {
          color: colorTextDescription
        },
        "&-show-count-has-suffix": {
          marginInlineEnd: token.paddingXXS
        },
        "&-prefix": {
          marginInlineEnd: inputAffixPadding
        },
        "&-suffix": {
          marginInlineStart: inputAffixPadding
        }
      }
    }), genAllowClearStyle(token)), {
      // password
      [`${iconCls}${componentCls}-password-icon`]: {
        color: colorIcon,
        cursor: "pointer",
        transition: `all ${motionDurationSlow}`,
        "&:hover": {
          color: colorIconHover
        }
      }
    }),
    [affixClsDisabled]: {
      // password disabled
      [`${iconCls}${componentCls}-password-icon`]: {
        color: colorIcon,
        cursor: "not-allowed",
        "&:hover": {
          color: colorIcon
        }
      }
    }
  };
};
var genGroupStyle = (token) => {
  const {
    componentCls,
    borderRadiusLG,
    borderRadiusSM
  } = token;
  return {
    [`${componentCls}-group`]: Object.assign(Object.assign(Object.assign({}, resetComponent(token)), genInputGroupStyle(token)), {
      "&-rtl": {
        direction: "rtl"
      },
      "&-wrapper": Object.assign(Object.assign(Object.assign({
        display: "inline-block",
        width: "100%",
        textAlign: "start",
        verticalAlign: "top",
        "&-rtl": {
          direction: "rtl"
        },
        // Size
        "&-lg": {
          [`${componentCls}-group-addon`]: {
            borderRadius: borderRadiusLG,
            fontSize: token.inputFontSizeLG
          }
        },
        "&-sm": {
          [`${componentCls}-group-addon`]: {
            borderRadius: borderRadiusSM
          }
        }
      }, genOutlinedGroupStyle(token)), genFilledGroupStyle(token)), {
        // '&-disabled': {
        //   [`${componentCls}-group-addon`]: {
        //     ...genDisabledStyle(token),
        //   },
        // },
        // Fix the issue of using icons in Space Compact mode
        // https://github.com/ant-design/ant-design/issues/42122
        [`&:not(${componentCls}-compact-first-item):not(${componentCls}-compact-last-item)${componentCls}-compact-item`]: {
          [`${componentCls}, ${componentCls}-group-addon`]: {
            borderRadius: 0
          }
        },
        [`&:not(${componentCls}-compact-last-item)${componentCls}-compact-first-item`]: {
          [`${componentCls}, ${componentCls}-group-addon`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        },
        [`&:not(${componentCls}-compact-first-item)${componentCls}-compact-last-item`]: {
          [`${componentCls}, ${componentCls}-group-addon`]: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0
          }
        },
        // Fix the issue of input use show-count param in space compact mode
        // https://github.com/ant-design/ant-design/issues/46872
        [`&:not(${componentCls}-compact-last-item)${componentCls}-compact-item`]: {
          [`${componentCls}-affix-wrapper`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        }
      })
    })
  };
};
var genSearchInputStyle = (token) => {
  const {
    componentCls,
    antCls
  } = token;
  const searchPrefixCls = `${componentCls}-search`;
  return {
    [searchPrefixCls]: {
      [componentCls]: {
        "&:hover, &:focus": {
          [`+ ${componentCls}-group-addon ${searchPrefixCls}-button:not(${antCls}-btn-primary)`]: {
            borderInlineStartColor: token.colorPrimaryHover
          }
        }
      },
      [`${componentCls}-affix-wrapper`]: {
        height: token.controlHeight,
        borderRadius: 0
      },
      // fix slight height diff in Firefox:
      // https://ant.design/components/auto-complete-cn/#auto-complete-demo-certain-category
      [`${componentCls}-lg`]: {
        lineHeight: token.calc(token.lineHeightLG).sub(2e-4).equal()
      },
      [`> ${componentCls}-group`]: {
        [`> ${componentCls}-group-addon:last-child`]: {
          insetInlineStart: -1,
          padding: 0,
          border: 0,
          [`${searchPrefixCls}-button`]: {
            // Fix https://github.com/ant-design/ant-design/issues/47150
            marginInlineEnd: -1,
            paddingTop: 0,
            paddingBottom: 0,
            borderStartStartRadius: 0,
            borderEndStartRadius: 0,
            boxShadow: "none"
          },
          [`${searchPrefixCls}-button:not(${antCls}-btn-primary)`]: {
            color: token.colorTextDescription,
            "&:hover": {
              color: token.colorPrimaryHover
            },
            "&:active": {
              color: token.colorPrimaryActive
            },
            [`&${antCls}-btn-loading::before`]: {
              insetInlineStart: 0,
              insetInlineEnd: 0,
              insetBlockStart: 0,
              insetBlockEnd: 0
            }
          }
        }
      },
      [`${searchPrefixCls}-button`]: {
        height: token.controlHeight,
        "&:hover, &:focus": {
          zIndex: 1
        }
      },
      "&-large": {
        [`${componentCls}-affix-wrapper, ${searchPrefixCls}-button`]: {
          height: token.controlHeightLG
        }
      },
      "&-small": {
        [`${componentCls}-affix-wrapper, ${searchPrefixCls}-button`]: {
          height: token.controlHeightSM
        }
      },
      "&-rtl": {
        direction: "rtl"
      },
      // ===================== Compact Item Customized Styles =====================
      [`&${componentCls}-compact-item`]: {
        [`&:not(${componentCls}-compact-last-item)`]: {
          [`${componentCls}-group-addon`]: {
            [`${componentCls}-search-button`]: {
              marginInlineEnd: token.calc(token.lineWidth).mul(-1).equal(),
              borderRadius: 0
            }
          }
        },
        [`&:not(${componentCls}-compact-first-item)`]: {
          [`${componentCls},${componentCls}-affix-wrapper`]: {
            borderRadius: 0
          }
        },
        [`> ${componentCls}-group-addon ${componentCls}-search-button,
        > ${componentCls},
        ${componentCls}-affix-wrapper`]: {
          "&:hover, &:focus, &:active": {
            zIndex: 2
          }
        },
        [`> ${componentCls}-affix-wrapper-focused`]: {
          zIndex: 2
        }
      }
    }
  };
};
var genTextAreaStyle = (token) => {
  const {
    componentCls,
    paddingLG
  } = token;
  const textareaPrefixCls = `${componentCls}-textarea`;
  return {
    [textareaPrefixCls]: {
      position: "relative",
      "&-show-count": {
        // https://github.com/ant-design/ant-design/issues/33049
        [`> ${componentCls}`]: {
          height: "100%"
        },
        [`${componentCls}-data-count`]: {
          position: "absolute",
          bottom: token.calc(token.fontSize).mul(token.lineHeight).mul(-1).equal(),
          insetInlineEnd: 0,
          color: token.colorTextDescription,
          whiteSpace: "nowrap",
          pointerEvents: "none"
        }
      },
      [`
        &-allow-clear > ${componentCls},
        &-affix-wrapper${textareaPrefixCls}-has-feedback ${componentCls}
      `]: {
        paddingInlineEnd: paddingLG
      },
      [`&-affix-wrapper${componentCls}-affix-wrapper`]: {
        padding: 0,
        [`> textarea${componentCls}`]: {
          fontSize: "inherit",
          border: "none",
          outline: "none",
          background: "transparent",
          "&:focus": {
            boxShadow: "none !important"
          }
        },
        [`${componentCls}-suffix`]: {
          margin: 0,
          "> *:not(:last-child)": {
            marginInline: 0
          },
          // Clear Icon
          [`${componentCls}-clear-icon`]: {
            position: "absolute",
            insetInlineEnd: token.paddingInline,
            insetBlockStart: token.paddingXS
          },
          // Feedback Icon
          [`${textareaPrefixCls}-suffix`]: {
            position: "absolute",
            top: 0,
            insetInlineEnd: token.paddingInline,
            bottom: 0,
            zIndex: 1,
            display: "inline-flex",
            alignItems: "center",
            margin: "auto",
            pointerEvents: "none"
          }
        }
      },
      [`&-affix-wrapper${componentCls}-affix-wrapper-sm`]: {
        [`${componentCls}-suffix`]: {
          [`${componentCls}-clear-icon`]: {
            insetInlineEnd: token.paddingInlineSM
          }
        }
      }
    }
  };
};
var genRangeStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-out-of-range`]: {
      [`&, & input, & textarea, ${componentCls}-show-count-suffix, ${componentCls}-data-count`]: {
        color: token.colorError
      }
    }
  };
};
var style_default2 = genStyleHooks("Input", (token) => {
  const inputToken = merge(token, initInputToken(token));
  return [
    genInputStyle(inputToken),
    genTextAreaStyle(inputToken),
    genAffixStyle(inputToken),
    genGroupStyle(inputToken),
    genSearchInputStyle(inputToken),
    genRangeStyle(inputToken),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    genCompactItemStyle(inputToken)
  ];
}, initComponentToken, {
  resetFont: false
});

// node_modules/antd/es/input/utils.js
function hasPrefixSuffix2(props) {
  return !!(props.prefix || props.suffix || props.allowClear || props.showCount);
}

// node_modules/antd/es/input/Input.js
var __rest2 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function triggerFocus2(element, option) {
  if (!element) {
    return;
  }
  element.focus(option);
  const {
    cursor
  } = option || {};
  if (cursor) {
    const len = element.value.length;
    switch (cursor) {
      case "start":
        element.setSelectionRange(0, 0);
        break;
      case "end":
        element.setSelectionRange(len, len);
        break;
      default:
        element.setSelectionRange(0, len);
    }
  }
}
var Input2 = (0, import_react8.forwardRef)((props, ref) => {
  var _a;
  const {
    prefixCls: customizePrefixCls,
    bordered = true,
    status: customStatus,
    size: customSize,
    disabled: customDisabled,
    onBlur,
    onFocus,
    suffix,
    allowClear,
    addonAfter,
    addonBefore,
    className,
    style,
    styles,
    rootClassName,
    onChange,
    classNames: classes,
    variant: customVariant
  } = props, rest = __rest2(props, ["prefixCls", "bordered", "status", "size", "disabled", "onBlur", "onFocus", "suffix", "allowClear", "addonAfter", "addonBefore", "className", "style", "styles", "rootClassName", "onChange", "classNames", "variant"]);
  if (true) {
    const {
      deprecated
    } = devUseWarning("Input");
    deprecated(!("bordered" in props), "bordered", "variant");
  }
  const {
    getPrefixCls,
    direction,
    input
  } = import_react8.default.useContext(ConfigContext);
  const prefixCls = getPrefixCls("input", customizePrefixCls);
  const inputRef = (0, import_react8.useRef)(null);
  const rootCls = useCSSVarCls_default(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = style_default2(prefixCls, rootCls);
  const {
    compactSize,
    compactItemClassnames
  } = useCompactItemContext(prefixCls, direction);
  const mergedSize = useSize_default((ctx) => {
    var _a2;
    return (_a2 = customSize !== null && customSize !== void 0 ? customSize : compactSize) !== null && _a2 !== void 0 ? _a2 : ctx;
  });
  const disabled = import_react8.default.useContext(DisabledContext_default);
  const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
  const {
    status: contextStatus,
    hasFeedback,
    feedbackIcon
  } = (0, import_react8.useContext)(FormItemInputContext);
  const mergedStatus = getMergedStatus(contextStatus, customStatus);
  const inputHasPrefixSuffix = hasPrefixSuffix2(props) || !!hasFeedback;
  const prevHasPrefixSuffix = (0, import_react8.useRef)(inputHasPrefixSuffix);
  if (true) {
    const warning2 = devUseWarning("Input");
    (0, import_react8.useEffect)(() => {
      var _a2;
      if (inputHasPrefixSuffix && !prevHasPrefixSuffix.current) {
        true ? warning2(document.activeElement === ((_a2 = inputRef.current) === null || _a2 === void 0 ? void 0 : _a2.input), "usage", `When Input is focused, dynamic add or remove prefix / suffix will make it lose focus caused by dom structure change. Read more: https://ant.design/components/input/#FAQ`) : void 0;
      }
      prevHasPrefixSuffix.current = inputHasPrefixSuffix;
    }, [inputHasPrefixSuffix]);
  }
  const removePasswordTimeout = useRemovePasswordTimeout(inputRef, true);
  const handleBlur = (e) => {
    removePasswordTimeout();
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
  };
  const handleFocus = (e) => {
    removePasswordTimeout();
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
  };
  const handleChange = (e) => {
    removePasswordTimeout();
    onChange === null || onChange === void 0 ? void 0 : onChange(e);
  };
  const suffixNode = (hasFeedback || suffix) && import_react8.default.createElement(import_react8.default.Fragment, null, suffix, hasFeedback && feedbackIcon);
  const mergedAllowClear = getAllowClear_default(allowClear !== null && allowClear !== void 0 ? allowClear : input === null || input === void 0 ? void 0 : input.allowClear);
  const [variant, enableVariantCls] = useVariants_default("input", customVariant, bordered);
  return wrapCSSVar(import_react8.default.createElement(es_default, Object.assign({
    ref: composeRef(ref, inputRef),
    prefixCls,
    autoComplete: input === null || input === void 0 ? void 0 : input.autoComplete
  }, rest, {
    disabled: mergedDisabled,
    onBlur: handleBlur,
    onFocus: handleFocus,
    style: Object.assign(Object.assign({}, input === null || input === void 0 ? void 0 : input.style), style),
    styles: Object.assign(Object.assign({}, input === null || input === void 0 ? void 0 : input.styles), styles),
    suffix: suffixNode,
    allowClear: mergedAllowClear,
    className: (0, import_classnames7.default)(className, rootClassName, cssVarCls, rootCls, compactItemClassnames, input === null || input === void 0 ? void 0 : input.className),
    onChange: handleChange,
    addonBefore: addonBefore && import_react8.default.createElement(ContextIsolator_default, {
      form: true,
      space: true
    }, addonBefore),
    addonAfter: addonAfter && import_react8.default.createElement(ContextIsolator_default, {
      form: true,
      space: true
    }, addonAfter),
    classNames: Object.assign(Object.assign(Object.assign({}, classes), input === null || input === void 0 ? void 0 : input.classNames), {
      input: (0, import_classnames7.default)({
        [`${prefixCls}-sm`]: mergedSize === "small",
        [`${prefixCls}-lg`]: mergedSize === "large",
        [`${prefixCls}-rtl`]: direction === "rtl"
      }, classes === null || classes === void 0 ? void 0 : classes.input, (_a = input === null || input === void 0 ? void 0 : input.classNames) === null || _a === void 0 ? void 0 : _a.input, hashId),
      variant: (0, import_classnames7.default)({
        [`${prefixCls}-${variant}`]: enableVariantCls
      }, getStatusClassNames(prefixCls, mergedStatus)),
      affixWrapper: (0, import_classnames7.default)({
        [`${prefixCls}-affix-wrapper-sm`]: mergedSize === "small",
        [`${prefixCls}-affix-wrapper-lg`]: mergedSize === "large",
        [`${prefixCls}-affix-wrapper-rtl`]: direction === "rtl"
      }, hashId),
      wrapper: (0, import_classnames7.default)({
        [`${prefixCls}-group-rtl`]: direction === "rtl"
      }, hashId),
      groupWrapper: (0, import_classnames7.default)({
        [`${prefixCls}-group-wrapper-sm`]: mergedSize === "small",
        [`${prefixCls}-group-wrapper-lg`]: mergedSize === "large",
        [`${prefixCls}-group-wrapper-rtl`]: direction === "rtl",
        [`${prefixCls}-group-wrapper-${variant}`]: enableVariantCls
      }, getStatusClassNames(`${prefixCls}-group-wrapper`, mergedStatus, hasFeedback), hashId)
    })
  })));
});
if (true) {
  Input2.displayName = "Input";
}
var Input_default2 = Input2;

// node_modules/antd/es/input/TextArea.js
var __rest3 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var TextArea2 = (0, import_react9.forwardRef)((props, ref) => {
  var _a, _b;
  const {
    prefixCls: customizePrefixCls,
    bordered = true,
    size: customizeSize,
    disabled: customDisabled,
    status: customStatus,
    allowClear,
    classNames: classes,
    rootClassName,
    className,
    style,
    styles,
    variant: customVariant
  } = props, rest = __rest3(props, ["prefixCls", "bordered", "size", "disabled", "status", "allowClear", "classNames", "rootClassName", "className", "style", "styles", "variant"]);
  if (true) {
    const {
      deprecated
    } = devUseWarning("TextArea");
    deprecated(!("bordered" in props), "bordered", "variant");
  }
  const {
    getPrefixCls,
    direction,
    textArea
  } = React14.useContext(ConfigContext);
  const mergedSize = useSize_default(customizeSize);
  const disabled = React14.useContext(DisabledContext_default);
  const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
  const {
    status: contextStatus,
    hasFeedback,
    feedbackIcon
  } = React14.useContext(FormItemInputContext);
  const mergedStatus = getMergedStatus(contextStatus, customStatus);
  const innerRef = React14.useRef(null);
  React14.useImperativeHandle(ref, () => {
    var _a2;
    return {
      resizableTextArea: (_a2 = innerRef.current) === null || _a2 === void 0 ? void 0 : _a2.resizableTextArea,
      focus: (option) => {
        var _a3, _b2;
        triggerFocus2((_b2 = (_a3 = innerRef.current) === null || _a3 === void 0 ? void 0 : _a3.resizableTextArea) === null || _b2 === void 0 ? void 0 : _b2.textArea, option);
      },
      blur: () => {
        var _a3;
        return (_a3 = innerRef.current) === null || _a3 === void 0 ? void 0 : _a3.blur();
      }
    };
  });
  const prefixCls = getPrefixCls("input", customizePrefixCls);
  const rootCls = useCSSVarCls_default(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = style_default2(prefixCls, rootCls);
  const [variant, enableVariantCls] = useVariants_default("textArea", customVariant, bordered);
  const mergedAllowClear = getAllowClear_default(allowClear !== null && allowClear !== void 0 ? allowClear : textArea === null || textArea === void 0 ? void 0 : textArea.allowClear);
  return wrapCSSVar(React14.createElement(es_default3, Object.assign({
    autoComplete: textArea === null || textArea === void 0 ? void 0 : textArea.autoComplete
  }, rest, {
    style: Object.assign(Object.assign({}, textArea === null || textArea === void 0 ? void 0 : textArea.style), style),
    styles: Object.assign(Object.assign({}, textArea === null || textArea === void 0 ? void 0 : textArea.styles), styles),
    disabled: mergedDisabled,
    allowClear: mergedAllowClear,
    className: (0, import_classnames8.default)(cssVarCls, rootCls, className, rootClassName, textArea === null || textArea === void 0 ? void 0 : textArea.className),
    classNames: Object.assign(Object.assign(Object.assign({}, classes), textArea === null || textArea === void 0 ? void 0 : textArea.classNames), {
      textarea: (0, import_classnames8.default)({
        [`${prefixCls}-sm`]: mergedSize === "small",
        [`${prefixCls}-lg`]: mergedSize === "large"
      }, hashId, classes === null || classes === void 0 ? void 0 : classes.textarea, (_a = textArea === null || textArea === void 0 ? void 0 : textArea.classNames) === null || _a === void 0 ? void 0 : _a.textarea),
      variant: (0, import_classnames8.default)({
        [`${prefixCls}-${variant}`]: enableVariantCls
      }, getStatusClassNames(prefixCls, mergedStatus)),
      affixWrapper: (0, import_classnames8.default)(`${prefixCls}-textarea-affix-wrapper`, {
        [`${prefixCls}-affix-wrapper-rtl`]: direction === "rtl",
        [`${prefixCls}-affix-wrapper-sm`]: mergedSize === "small",
        [`${prefixCls}-affix-wrapper-lg`]: mergedSize === "large",
        [`${prefixCls}-textarea-show-count`]: props.showCount || ((_b = props.count) === null || _b === void 0 ? void 0 : _b.show)
      }, hashId)
    }),
    prefixCls,
    suffix: hasFeedback && React14.createElement("span", {
      className: `${prefixCls}-textarea-suffix`
    }, feedbackIcon),
    ref: innerRef
  })));
});
var TextArea_default2 = TextArea2;

export {
  es_default2 as es_default,
  style_default,
  useCompactItemContext,
  Compact_default,
  genCompactItemStyle,
  ContextIsolator_default,
  getStatusClassNames,
  getMergedStatus,
  useVariants_default,
  initInputToken,
  initComponentToken,
  genDisabledStyle,
  genBaseOutlinedStyle,
  genOutlinedStyle,
  genOutlinedGroupStyle,
  genBorderlessStyle,
  genFilledStyle,
  genFilledGroupStyle,
  genPlaceholderStyle,
  genInputSmallStyle,
  genBasicInputStyle,
  genInputGroupStyle,
  style_default2,
  triggerFocus,
  BaseInput_default,
  getAllowClear_default,
  useRemovePasswordTimeout,
  Input_default2 as Input_default,
  es_default3 as es_default2,
  TextArea_default2 as TextArea_default
};
//# sourceMappingURL=chunk-3Q5JLB4D.js.map
