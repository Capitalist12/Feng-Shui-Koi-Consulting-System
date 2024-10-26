import {
  BarsOutlined_default,
  LeftOutlined_default,
  RightOutlined_default
} from "./chunk-S6FHEU4P.js";
import {
  ConfigContext,
  _toConsumableArray,
  genStyleHooks,
  omit,
  toArray,
  unit
} from "./chunk-QTXOSBRK.js";
import {
  require_classnames
} from "./chunk-PQFH6TLA.js";
import {
  require_react
} from "./chunk-N4N5IM6X.js";
import {
  __toESM
} from "./chunk-LK32TJAX.js";

// node_modules/antd/es/layout/layout.js
var React3 = __toESM(require_react());
var import_classnames2 = __toESM(require_classnames());

// node_modules/antd/es/layout/context.js
var React = __toESM(require_react());
var LayoutContext = React.createContext({
  siderHook: {
    addSider: () => null,
    removeSider: () => null
  }
});

// node_modules/antd/es/layout/Sider.js
var React2 = __toESM(require_react());
var import_react = __toESM(require_react());
var import_classnames = __toESM(require_classnames());

// node_modules/antd/es/_util/isNumeric.js
var isNumeric = (value) => !isNaN(parseFloat(value)) && isFinite(value);
var isNumeric_default = isNumeric;

// node_modules/antd/es/layout/style/index.js
var genLayoutStyle = (token) => {
  const {
    antCls,
    // .ant
    componentCls,
    // .ant-layout
    colorText,
    footerBg,
    headerHeight,
    headerPadding,
    headerColor,
    footerPadding,
    fontSize,
    bodyBg,
    headerBg
  } = token;
  return {
    [componentCls]: {
      display: "flex",
      flex: "auto",
      flexDirection: "column",
      /* fix firefox can't set height smaller than content on flex item */
      minHeight: 0,
      background: bodyBg,
      "&, *": {
        boxSizing: "border-box"
      },
      [`&${componentCls}-has-sider`]: {
        flexDirection: "row",
        [`> ${componentCls}, > ${componentCls}-content`]: {
          // https://segmentfault.com/a/1190000019498300
          width: 0
        }
      },
      [`${componentCls}-header, &${componentCls}-footer`]: {
        flex: "0 0 auto"
      },
      // RTL
      "&-rtl": {
        direction: "rtl"
      }
    },
    // ==================== Header ====================
    [`${componentCls}-header`]: {
      height: headerHeight,
      padding: headerPadding,
      color: headerColor,
      lineHeight: unit(headerHeight),
      background: headerBg,
      // Other components/menu/style/index.less line:686
      // Integration with header element so menu items have the same height
      [`${antCls}-menu`]: {
        lineHeight: "inherit"
      }
    },
    // ==================== Footer ====================
    [`${componentCls}-footer`]: {
      padding: footerPadding,
      color: colorText,
      fontSize,
      background: footerBg
    },
    // =================== Content ====================
    [`${componentCls}-content`]: {
      flex: "auto",
      color: colorText,
      // fix firefox can't set height smaller than content on flex item
      minHeight: 0
    }
  };
};
var prepareComponentToken = (token) => {
  const {
    colorBgLayout,
    controlHeight,
    controlHeightLG,
    colorText,
    controlHeightSM,
    marginXXS,
    colorTextLightSolid,
    colorBgContainer
  } = token;
  const paddingInline = controlHeightLG * 1.25;
  return {
    // Deprecated
    colorBgHeader: "#001529",
    colorBgBody: colorBgLayout,
    colorBgTrigger: "#002140",
    bodyBg: colorBgLayout,
    headerBg: "#001529",
    headerHeight: controlHeight * 2,
    headerPadding: `0 ${paddingInline}px`,
    headerColor: colorText,
    footerPadding: `${controlHeightSM}px ${paddingInline}px`,
    footerBg: colorBgLayout,
    siderBg: "#001529",
    triggerHeight: controlHeightLG + marginXXS * 2,
    triggerBg: "#002140",
    triggerColor: colorTextLightSolid,
    zeroTriggerWidth: controlHeightLG,
    zeroTriggerHeight: controlHeightLG,
    lightSiderBg: colorBgContainer,
    lightTriggerBg: colorBgContainer,
    lightTriggerColor: colorText
  };
};
var DEPRECATED_TOKENS = [["colorBgBody", "bodyBg"], ["colorBgHeader", "headerBg"], ["colorBgTrigger", "triggerBg"]];
var style_default = genStyleHooks("Layout", (token) => [genLayoutStyle(token)], prepareComponentToken, {
  deprecatedTokens: DEPRECATED_TOKENS
});

// node_modules/antd/es/layout/style/sider.js
var genSiderStyle = (token) => {
  const {
    componentCls,
    siderBg,
    motionDurationMid,
    motionDurationSlow,
    antCls,
    triggerHeight,
    triggerColor,
    triggerBg,
    headerHeight,
    zeroTriggerWidth,
    zeroTriggerHeight,
    borderRadius,
    lightSiderBg,
    lightTriggerColor,
    lightTriggerBg,
    bodyBg
  } = token;
  return {
    [componentCls]: {
      position: "relative",
      // fix firefox can't set width smaller than content on flex item
      minWidth: 0,
      background: siderBg,
      transition: `all ${motionDurationMid}, background 0s`,
      "&-has-trigger": {
        paddingBottom: triggerHeight
      },
      "&-right": {
        order: 1
      },
      [`${componentCls}-children`]: {
        height: "100%",
        // Hack for fixing margin collapse bug
        // https://github.com/ant-design/ant-design/issues/7967
        // solution from https://stackoverflow.com/a/33132624/3040605
        marginTop: -0.1,
        paddingTop: 0.1,
        [`${antCls}-menu${antCls}-menu-inline-collapsed`]: {
          width: "auto"
        }
      },
      [`${componentCls}-trigger`]: {
        position: "fixed",
        bottom: 0,
        zIndex: 1,
        height: triggerHeight,
        color: triggerColor,
        lineHeight: unit(triggerHeight),
        textAlign: "center",
        background: triggerBg,
        cursor: "pointer",
        transition: `all ${motionDurationMid}`
      },
      "&-zero-width": {
        "> *": {
          overflow: "hidden"
        },
        [`${componentCls}-trigger`]: {
          position: "absolute",
          top: headerHeight,
          insetInlineEnd: token.calc(zeroTriggerWidth).mul(-1).equal(),
          zIndex: 1,
          width: zeroTriggerWidth,
          height: zeroTriggerHeight,
          color: triggerColor,
          fontSize: token.fontSizeXL,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: siderBg,
          borderStartStartRadius: 0,
          borderStartEndRadius: borderRadius,
          borderEndEndRadius: borderRadius,
          borderEndStartRadius: 0,
          cursor: "pointer",
          transition: `background ${motionDurationSlow} ease`,
          "&::after": {
            position: "absolute",
            inset: 0,
            background: "transparent",
            transition: `all ${motionDurationSlow}`,
            content: '""'
          },
          "&:hover::after": {
            background: `rgba(255, 255, 255, 0.2)`
          },
          "&-right": {
            insetInlineStart: token.calc(zeroTriggerWidth).mul(-1).equal(),
            borderStartStartRadius: borderRadius,
            borderStartEndRadius: 0,
            borderEndEndRadius: 0,
            borderEndStartRadius: borderRadius
          }
        }
      },
      // Light
      "&-light": {
        background: lightSiderBg,
        [`${componentCls}-trigger`]: {
          color: lightTriggerColor,
          background: lightTriggerBg
        },
        [`${componentCls}-zero-width-trigger`]: {
          color: lightTriggerColor,
          background: lightTriggerBg,
          border: `1px solid ${bodyBg}`,
          // Safe to modify to any other color
          borderInlineStart: 0
        }
      }
    }
  };
};
var sider_default = genStyleHooks(["Layout", "Sider"], (token) => [genSiderStyle(token)], prepareComponentToken, {
  deprecatedTokens: DEPRECATED_TOKENS
});

// node_modules/antd/es/layout/Sider.js
var __rest = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var dimensionMaxMap = {
  xs: "479.98px",
  sm: "575.98px",
  md: "767.98px",
  lg: "991.98px",
  xl: "1199.98px",
  xxl: "1599.98px"
};
var SiderContext = React2.createContext({});
var generateId = /* @__PURE__ */ (() => {
  let i = 0;
  return function() {
    let prefix = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    i += 1;
    return `${prefix}${i}`;
  };
})();
var Sider = React2.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    trigger,
    children,
    defaultCollapsed = false,
    theme = "dark",
    style = {},
    collapsible = false,
    reverseArrow = false,
    width = 200,
    collapsedWidth = 80,
    zeroWidthTriggerStyle,
    breakpoint,
    onCollapse,
    onBreakpoint
  } = props, otherProps = __rest(props, ["prefixCls", "className", "trigger", "children", "defaultCollapsed", "theme", "style", "collapsible", "reverseArrow", "width", "collapsedWidth", "zeroWidthTriggerStyle", "breakpoint", "onCollapse", "onBreakpoint"]);
  const {
    siderHook
  } = (0, import_react.useContext)(LayoutContext);
  const [collapsed, setCollapsed] = (0, import_react.useState)("collapsed" in props ? props.collapsed : defaultCollapsed);
  const [below, setBelow] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    if ("collapsed" in props) {
      setCollapsed(props.collapsed);
    }
  }, [props.collapsed]);
  const handleSetCollapsed = (value, type) => {
    if (!("collapsed" in props)) {
      setCollapsed(value);
    }
    onCollapse === null || onCollapse === void 0 ? void 0 : onCollapse(value, type);
  };
  const {
    getPrefixCls
  } = (0, import_react.useContext)(ConfigContext);
  const prefixCls = getPrefixCls("layout-sider", customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = sider_default(prefixCls);
  const responsiveHandlerRef = (0, import_react.useRef)();
  responsiveHandlerRef.current = (mql) => {
    setBelow(mql.matches);
    onBreakpoint === null || onBreakpoint === void 0 ? void 0 : onBreakpoint(mql.matches);
    if (collapsed !== mql.matches) {
      handleSetCollapsed(mql.matches, "responsive");
    }
  };
  (0, import_react.useEffect)(() => {
    function responsiveHandler(mql2) {
      return responsiveHandlerRef.current(mql2);
    }
    let mql;
    if (typeof window !== "undefined") {
      const {
        matchMedia
      } = window;
      if (matchMedia && breakpoint && breakpoint in dimensionMaxMap) {
        mql = matchMedia(`screen and (max-width: ${dimensionMaxMap[breakpoint]})`);
        try {
          mql.addEventListener("change", responsiveHandler);
        } catch (_a) {
          mql.addListener(responsiveHandler);
        }
        responsiveHandler(mql);
      }
    }
    return () => {
      try {
        mql === null || mql === void 0 ? void 0 : mql.removeEventListener("change", responsiveHandler);
      } catch (_a) {
        mql === null || mql === void 0 ? void 0 : mql.removeListener(responsiveHandler);
      }
    };
  }, [breakpoint]);
  (0, import_react.useEffect)(() => {
    const uniqueId = generateId("ant-sider-");
    siderHook.addSider(uniqueId);
    return () => siderHook.removeSider(uniqueId);
  }, []);
  const toggle = () => {
    handleSetCollapsed(!collapsed, "clickTrigger");
  };
  const renderSider = () => {
    const divProps = omit(otherProps, ["collapsed"]);
    const rawWidth = collapsed ? collapsedWidth : width;
    const siderWidth = isNumeric_default(rawWidth) ? `${rawWidth}px` : String(rawWidth);
    const zeroWidthTrigger = parseFloat(String(collapsedWidth || 0)) === 0 ? React2.createElement("span", {
      onClick: toggle,
      className: (0, import_classnames.default)(`${prefixCls}-zero-width-trigger`, `${prefixCls}-zero-width-trigger-${reverseArrow ? "right" : "left"}`),
      style: zeroWidthTriggerStyle
    }, trigger || React2.createElement(BarsOutlined_default, null)) : null;
    const iconObj = {
      expanded: reverseArrow ? React2.createElement(RightOutlined_default, null) : React2.createElement(LeftOutlined_default, null),
      collapsed: reverseArrow ? React2.createElement(LeftOutlined_default, null) : React2.createElement(RightOutlined_default, null)
    };
    const status = collapsed ? "collapsed" : "expanded";
    const defaultTrigger = iconObj[status];
    const triggerDom = trigger !== null ? zeroWidthTrigger || React2.createElement("div", {
      className: `${prefixCls}-trigger`,
      onClick: toggle,
      style: {
        width: siderWidth
      }
    }, trigger || defaultTrigger) : null;
    const divStyle = Object.assign(Object.assign({}, style), {
      flex: `0 0 ${siderWidth}`,
      maxWidth: siderWidth,
      minWidth: siderWidth,
      width: siderWidth
    });
    const siderCls = (0, import_classnames.default)(prefixCls, `${prefixCls}-${theme}`, {
      [`${prefixCls}-collapsed`]: !!collapsed,
      [`${prefixCls}-has-trigger`]: collapsible && trigger !== null && !zeroWidthTrigger,
      [`${prefixCls}-below`]: !!below,
      [`${prefixCls}-zero-width`]: parseFloat(siderWidth) === 0
    }, className, hashId, cssVarCls);
    return React2.createElement("aside", Object.assign({
      className: siderCls
    }, divProps, {
      style: divStyle,
      ref
    }), React2.createElement("div", {
      className: `${prefixCls}-children`
    }, children), collapsible || below && zeroWidthTrigger ? triggerDom : null);
  };
  const contextValue = React2.useMemo(() => ({
    siderCollapsed: collapsed
  }), [collapsed]);
  return wrapCSSVar(React2.createElement(SiderContext.Provider, {
    value: contextValue
  }, renderSider()));
});
if (true) {
  Sider.displayName = "Sider";
}
var Sider_default = Sider;

// node_modules/antd/es/layout/hooks/useHasSider.js
function useHasSider(siders, children, hasSider) {
  if (typeof hasSider === "boolean") {
    return hasSider;
  }
  if (siders.length) {
    return true;
  }
  const childNodes = toArray(children);
  return childNodes.some((node) => node.type === Sider_default);
}

// node_modules/antd/es/layout/layout.js
var __rest2 = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function generator(_ref) {
  let {
    suffixCls,
    tagName,
    displayName
  } = _ref;
  return (BasicComponent) => {
    const Adapter = React3.forwardRef((props, ref) => React3.createElement(BasicComponent, Object.assign({
      ref,
      suffixCls,
      tagName
    }, props)));
    if (true) {
      Adapter.displayName = displayName;
    }
    return Adapter;
  };
}
var Basic = React3.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    suffixCls,
    className,
    tagName: TagName
  } = props, others = __rest2(props, ["prefixCls", "suffixCls", "className", "tagName"]);
  const {
    getPrefixCls
  } = React3.useContext(ConfigContext);
  const prefixCls = getPrefixCls("layout", customizePrefixCls);
  const [wrapSSR, hashId, cssVarCls] = style_default(prefixCls);
  const prefixWithSuffixCls = suffixCls ? `${prefixCls}-${suffixCls}` : prefixCls;
  return wrapSSR(React3.createElement(TagName, Object.assign({
    className: (0, import_classnames2.default)(customizePrefixCls || prefixWithSuffixCls, className, hashId, cssVarCls),
    ref
  }, others)));
});
var BasicLayout = React3.forwardRef((props, ref) => {
  const {
    direction
  } = React3.useContext(ConfigContext);
  const [siders, setSiders] = React3.useState([]);
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    children,
    hasSider,
    tagName: Tag,
    style
  } = props, others = __rest2(props, ["prefixCls", "className", "rootClassName", "children", "hasSider", "tagName", "style"]);
  const passedProps = omit(others, ["suffixCls"]);
  const {
    getPrefixCls,
    layout
  } = React3.useContext(ConfigContext);
  const prefixCls = getPrefixCls("layout", customizePrefixCls);
  const mergedHasSider = useHasSider(siders, children, hasSider);
  const [wrapCSSVar, hashId, cssVarCls] = style_default(prefixCls);
  const classString = (0, import_classnames2.default)(prefixCls, {
    [`${prefixCls}-has-sider`]: mergedHasSider,
    [`${prefixCls}-rtl`]: direction === "rtl"
  }, layout === null || layout === void 0 ? void 0 : layout.className, className, rootClassName, hashId, cssVarCls);
  const contextValue = React3.useMemo(() => ({
    siderHook: {
      addSider: (id) => {
        setSiders((prev) => [].concat(_toConsumableArray(prev), [id]));
      },
      removeSider: (id) => {
        setSiders((prev) => prev.filter((currentId) => currentId !== id));
      }
    }
  }), []);
  return wrapCSSVar(React3.createElement(LayoutContext.Provider, {
    value: contextValue
  }, React3.createElement(Tag, Object.assign({
    ref,
    className: classString,
    style: Object.assign(Object.assign({}, layout === null || layout === void 0 ? void 0 : layout.style), style)
  }, passedProps), children)));
});
var Layout = generator({
  tagName: "div",
  displayName: "Layout"
})(BasicLayout);
var Header = generator({
  suffixCls: "header",
  tagName: "header",
  displayName: "Header"
})(Basic);
var Footer = generator({
  suffixCls: "footer",
  tagName: "footer",
  displayName: "Footer"
})(Basic);
var Content = generator({
  suffixCls: "content",
  tagName: "main",
  displayName: "Content"
})(Basic);
var layout_default = Layout;

export {
  SiderContext,
  Sider_default,
  Header,
  Footer,
  Content,
  layout_default
};
//# sourceMappingURL=chunk-KDTCYITJ.js.map
