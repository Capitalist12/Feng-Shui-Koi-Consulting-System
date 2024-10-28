import {
  collapse_default,
  zoomIn
} from "./chunk-3WEAYJEI.js";
import {
  FormContext,
  FormProvider,
  VariantContext,
  es_default,
  useCSSVarCls_default,
  useForm_default,
  useSize_default
} from "./chunk-W2TI63V6.js";
import {
  ConfigContext,
  DisabledContextProvider,
  DisabledContext_default,
  SizeContext_default,
  devUseWarning,
  genStyleHooks,
  getDOM,
  merge2 as merge,
  resetComponent,
  unit,
  validateMessagesContext_default
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

// node_modules/antd/es/form/Form.js
var React2 = __toESM(require_react());
var import_react2 = __toESM(require_react());
var import_classnames = __toESM(require_classnames());

// node_modules/antd/es/form/hooks/useForm.js
var React = __toESM(require_react());

// node_modules/compute-scroll-into-view/dist/index.js
var t = (t2) => "object" == typeof t2 && null != t2 && 1 === t2.nodeType;
var e = (t2, e3) => (!e3 || "hidden" !== t2) && ("visible" !== t2 && "clip" !== t2);
var n = (t2, n2) => {
  if (t2.clientHeight < t2.scrollHeight || t2.clientWidth < t2.scrollWidth) {
    const o3 = getComputedStyle(t2, null);
    return e(o3.overflowY, n2) || e(o3.overflowX, n2) || ((t3) => {
      const e3 = ((t4) => {
        if (!t4.ownerDocument || !t4.ownerDocument.defaultView) return null;
        try {
          return t4.ownerDocument.defaultView.frameElement;
        } catch (t5) {
          return null;
        }
      })(t3);
      return !!e3 && (e3.clientHeight < t3.scrollHeight || e3.clientWidth < t3.scrollWidth);
    })(t2);
  }
  return false;
};
var o = (t2, e3, n2, o3, l2, r2, i, s) => r2 < t2 && i > e3 || r2 > t2 && i < e3 ? 0 : r2 <= t2 && s <= n2 || i >= e3 && s >= n2 ? r2 - t2 - o3 : i > e3 && s < n2 || r2 < t2 && s > n2 ? i - e3 + l2 : 0;
var l = (t2) => {
  const e3 = t2.parentElement;
  return null == e3 ? t2.getRootNode().host || null : e3;
};
var r = (e3, r2) => {
  var i, s, d, h;
  if ("undefined" == typeof document) return [];
  const { scrollMode: c, block: f, inline: u, boundary: a, skipOverflowHiddenElements: g } = r2, p = "function" == typeof a ? a : (t2) => t2 !== a;
  if (!t(e3)) throw new TypeError("Invalid target");
  const m = document.scrollingElement || document.documentElement, w = [];
  let W = e3;
  for (; t(W) && p(W); ) {
    if (W = l(W), W === m) {
      w.push(W);
      break;
    }
    null != W && W === document.body && n(W) && !n(document.documentElement) || null != W && n(W, g) && w.push(W);
  }
  const b = null != (s = null == (i = window.visualViewport) ? void 0 : i.width) ? s : innerWidth, H = null != (h = null == (d = window.visualViewport) ? void 0 : d.height) ? h : innerHeight, { scrollX: y, scrollY: M } = window, { height: v, width: E, top: x, right: C, bottom: I, left: R } = e3.getBoundingClientRect(), { top: T, right: B, bottom: F, left: V } = ((t2) => {
    const e4 = window.getComputedStyle(t2);
    return { top: parseFloat(e4.scrollMarginTop) || 0, right: parseFloat(e4.scrollMarginRight) || 0, bottom: parseFloat(e4.scrollMarginBottom) || 0, left: parseFloat(e4.scrollMarginLeft) || 0 };
  })(e3);
  let k = "start" === f || "nearest" === f ? x - T : "end" === f ? I + F : x + v / 2 - T + F, D = "center" === u ? R + E / 2 - V + B : "end" === u ? C + B : R - V;
  const L = [];
  for (let t2 = 0; t2 < w.length; t2++) {
    const e4 = w[t2], { height: n2, width: l2, top: r3, right: i2, bottom: s2, left: d2 } = e4.getBoundingClientRect();
    if ("if-needed" === c && x >= 0 && R >= 0 && I <= H && C <= b && x >= r3 && I <= s2 && R >= d2 && C <= i2) return L;
    const h2 = getComputedStyle(e4), a2 = parseInt(h2.borderLeftWidth, 10), g2 = parseInt(h2.borderTopWidth, 10), p2 = parseInt(h2.borderRightWidth, 10), W2 = parseInt(h2.borderBottomWidth, 10);
    let T2 = 0, B2 = 0;
    const F2 = "offsetWidth" in e4 ? e4.offsetWidth - e4.clientWidth - a2 - p2 : 0, V2 = "offsetHeight" in e4 ? e4.offsetHeight - e4.clientHeight - g2 - W2 : 0, S = "offsetWidth" in e4 ? 0 === e4.offsetWidth ? 0 : l2 / e4.offsetWidth : 0, X = "offsetHeight" in e4 ? 0 === e4.offsetHeight ? 0 : n2 / e4.offsetHeight : 0;
    if (m === e4) T2 = "start" === f ? k : "end" === f ? k - H : "nearest" === f ? o(M, M + H, H, g2, W2, M + k, M + k + v, v) : k - H / 2, B2 = "start" === u ? D : "center" === u ? D - b / 2 : "end" === u ? D - b : o(y, y + b, b, a2, p2, y + D, y + D + E, E), T2 = Math.max(0, T2 + M), B2 = Math.max(0, B2 + y);
    else {
      T2 = "start" === f ? k - r3 - g2 : "end" === f ? k - s2 + W2 + V2 : "nearest" === f ? o(r3, s2, n2, g2, W2 + V2, k, k + v, v) : k - (r3 + n2 / 2) + V2 / 2, B2 = "start" === u ? D - d2 - a2 : "center" === u ? D - (d2 + l2 / 2) + F2 / 2 : "end" === u ? D - i2 + p2 + F2 : o(d2, i2, l2, a2, p2 + F2, D, D + E, E);
      const { scrollLeft: t3, scrollTop: h3 } = e4;
      T2 = 0 === X ? 0 : Math.max(0, Math.min(h3 + T2 / X, e4.scrollHeight - n2 / X + V2)), B2 = 0 === S ? 0 : Math.max(0, Math.min(t3 + B2 / S, e4.scrollWidth - l2 / S + F2)), k += h3 - T2, D += t3 - B2;
    }
    L.push({ el: e4, top: T2, left: B2 });
  }
  return L;
};

// node_modules/scroll-into-view-if-needed/dist/index.js
var o2 = (t2) => false === t2 ? { block: "end", inline: "nearest" } : ((t3) => t3 === Object(t3) && 0 !== Object.keys(t3).length)(t2) ? t2 : { block: "start", inline: "nearest" };
function e2(e3, r2) {
  if (!e3.isConnected || !((t2) => {
    let o3 = t2;
    for (; o3 && o3.parentNode; ) {
      if (o3.parentNode === document) return true;
      o3 = o3.parentNode instanceof ShadowRoot ? o3.parentNode.host : o3.parentNode;
    }
    return false;
  })(e3)) return;
  const n2 = ((t2) => {
    const o3 = window.getComputedStyle(t2);
    return { top: parseFloat(o3.scrollMarginTop) || 0, right: parseFloat(o3.scrollMarginRight) || 0, bottom: parseFloat(o3.scrollMarginBottom) || 0, left: parseFloat(o3.scrollMarginLeft) || 0 };
  })(e3);
  if (((t2) => "object" == typeof t2 && "function" == typeof t2.behavior)(r2)) return r2.behavior(r(e3, r2));
  const l2 = "boolean" == typeof r2 || null == r2 ? void 0 : r2.behavior;
  for (const { el: a, top: i, left: s } of r(e3, o2(r2))) {
    const t2 = i - n2.top + n2.bottom, o3 = s - n2.left + n2.right;
    a.scroll({ top: t2, left: o3, behavior: l2 });
  }
}

// node_modules/antd/es/form/util.js
var formItemNameBlackList = ["parentNode"];
var defaultItemNamePrefixCls = "form_item";
function toArray(candidate) {
  if (candidate === void 0 || candidate === false) return [];
  return Array.isArray(candidate) ? candidate : [candidate];
}
function getFieldId(namePath, formName) {
  if (!namePath.length) {
    return void 0;
  }
  const mergedId = namePath.join("_");
  if (formName) {
    return `${formName}_${mergedId}`;
  }
  const isIllegalName = formItemNameBlackList.includes(mergedId);
  return isIllegalName ? `${defaultItemNamePrefixCls}_${mergedId}` : mergedId;
}
function getStatus(errors, warnings, meta, defaultValidateStatus, hasFeedback, validateStatus) {
  let status = defaultValidateStatus;
  if (validateStatus !== void 0) {
    status = validateStatus;
  } else if (meta.validating) {
    status = "validating";
  } else if (errors.length) {
    status = "error";
  } else if (warnings.length) {
    status = "warning";
  } else if (meta.touched || hasFeedback && meta.validated) {
    status = "success";
  }
  return status;
}

// node_modules/antd/es/form/hooks/useForm.js
function toNamePathStr(name) {
  const namePath = toArray(name);
  return namePath.join("_");
}
function getFieldDOMNode(name, wrapForm) {
  const field = wrapForm.getFieldInstance(name);
  const fieldDom = getDOM(field);
  if (fieldDom) {
    return fieldDom;
  }
  const fieldId = getFieldId(toArray(name), wrapForm.__INTERNAL__.name);
  if (fieldId) {
    return document.getElementById(fieldId);
  }
}
function useForm(form) {
  const [rcForm] = useForm_default();
  const itemsRef = React.useRef({});
  const wrapForm = React.useMemo(() => form !== null && form !== void 0 ? form : Object.assign(Object.assign({}, rcForm), {
    __INTERNAL__: {
      itemRef: (name) => (node) => {
        const namePathStr = toNamePathStr(name);
        if (node) {
          itemsRef.current[namePathStr] = node;
        } else {
          delete itemsRef.current[namePathStr];
        }
      }
    },
    scrollToField: function(name) {
      let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      const node = getFieldDOMNode(name, wrapForm);
      if (node) {
        e2(node, Object.assign({
          scrollMode: "if-needed",
          block: "nearest"
        }, options));
      }
    },
    getFieldInstance: (name) => {
      const namePathStr = toNamePathStr(name);
      return itemsRef.current[namePathStr];
    }
  }), [form, rcForm]);
  return [wrapForm];
}

// node_modules/antd/es/form/hooks/useFormWarning.js
var import_react = __toESM(require_react());
var names = {};
function useFormWarning(_ref) {
  let {
    name
  } = _ref;
  const warning = devUseWarning("Form");
  (0, import_react.useEffect)(() => {
    if (name) {
      names[name] = (names[name] || 0) + 1;
      true ? warning(names[name] <= 1, "usage", "There exist multiple Form with same `name`.") : void 0;
      return () => {
        names[name] -= 1;
      };
    }
  }, [name]);
}

// node_modules/antd/es/form/style/explain.js
var genFormValidateMotionStyle = (token) => {
  const {
    componentCls
  } = token;
  const helpCls = `${componentCls}-show-help`;
  const helpItemCls = `${componentCls}-show-help-item`;
  return {
    [helpCls]: {
      // Explain holder
      transition: `opacity ${token.motionDurationSlow} ${token.motionEaseInOut}`,
      "&-appear, &-enter": {
        opacity: 0,
        "&-active": {
          opacity: 1
        }
      },
      "&-leave": {
        opacity: 1,
        "&-active": {
          opacity: 0
        }
      },
      // Explain
      [helpItemCls]: {
        overflow: "hidden",
        transition: `height ${token.motionDurationSlow} ${token.motionEaseInOut},
                     opacity ${token.motionDurationSlow} ${token.motionEaseInOut},
                     transform ${token.motionDurationSlow} ${token.motionEaseInOut} !important`,
        [`&${helpItemCls}-appear, &${helpItemCls}-enter`]: {
          transform: `translateY(-5px)`,
          opacity: 0,
          "&-active": {
            transform: "translateY(0)",
            opacity: 1
          }
        },
        [`&${helpItemCls}-leave-active`]: {
          transform: `translateY(-5px)`
        }
      }
    }
  };
};
var explain_default = genFormValidateMotionStyle;

// node_modules/antd/es/form/style/index.js
var resetForm = (token) => ({
  legend: {
    display: "block",
    width: "100%",
    marginBottom: token.marginLG,
    padding: 0,
    color: token.colorTextDescription,
    fontSize: token.fontSizeLG,
    lineHeight: "inherit",
    border: 0,
    borderBottom: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`
  },
  'input[type="search"]': {
    boxSizing: "border-box"
  },
  // Position radios and checkboxes better
  'input[type="radio"], input[type="checkbox"]': {
    lineHeight: "normal"
  },
  'input[type="file"]': {
    display: "block"
  },
  // Make range inputs behave like textual form controls
  'input[type="range"]': {
    display: "block",
    width: "100%"
  },
  // Make multiple select elements height not fixed
  "select[multiple], select[size]": {
    height: "auto"
  },
  // Focus for file, radio, and checkbox
  [`input[type='file']:focus,
  input[type='radio']:focus,
  input[type='checkbox']:focus`]: {
    outline: 0,
    boxShadow: `0 0 0 ${unit(token.controlOutlineWidth)} ${token.controlOutline}`
  },
  // Adjust output element
  output: {
    display: "block",
    paddingTop: 15,
    color: token.colorText,
    fontSize: token.fontSize,
    lineHeight: token.lineHeight
  }
});
var genFormSize = (token, height) => {
  const {
    formItemCls
  } = token;
  return {
    [formItemCls]: {
      [`${formItemCls}-label > label`]: {
        height
      },
      [`${formItemCls}-control-input`]: {
        minHeight: height
      }
    }
  };
};
var genFormStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [token.componentCls]: Object.assign(Object.assign(Object.assign({}, resetComponent(token)), resetForm(token)), {
      [`${componentCls}-text`]: {
        display: "inline-block",
        paddingInlineEnd: token.paddingSM
      },
      // ================================================================
      // =                             Size                             =
      // ================================================================
      "&-small": Object.assign({}, genFormSize(token, token.controlHeightSM)),
      "&-large": Object.assign({}, genFormSize(token, token.controlHeightLG))
    })
  };
};
var genFormItemStyle = (token) => {
  const {
    formItemCls,
    iconCls,
    componentCls,
    rootPrefixCls,
    antCls,
    labelRequiredMarkColor,
    labelColor,
    labelFontSize,
    labelHeight,
    labelColonMarginInlineStart,
    labelColonMarginInlineEnd,
    itemMarginBottom
  } = token;
  return {
    [formItemCls]: Object.assign(Object.assign({}, resetComponent(token)), {
      marginBottom: itemMarginBottom,
      verticalAlign: "top",
      "&-with-help": {
        transition: "none"
      },
      [`&-hidden,
        &-hidden${antCls}-row`]: {
        // https://github.com/ant-design/ant-design/issues/26141
        display: "none"
      },
      "&-has-warning": {
        [`${formItemCls}-split`]: {
          color: token.colorError
        }
      },
      "&-has-error": {
        [`${formItemCls}-split`]: {
          color: token.colorWarning
        }
      },
      // ==============================================================
      // =                            Label                           =
      // ==============================================================
      [`${formItemCls}-label`]: {
        flexGrow: 0,
        overflow: "hidden",
        whiteSpace: "nowrap",
        textAlign: "end",
        verticalAlign: "middle",
        "&-left": {
          textAlign: "start"
        },
        "&-wrap": {
          overflow: "unset",
          lineHeight: token.lineHeight,
          whiteSpace: "unset"
        },
        "> label": {
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          maxWidth: "100%",
          height: labelHeight,
          color: labelColor,
          fontSize: labelFontSize,
          [`> ${iconCls}`]: {
            fontSize: token.fontSize,
            verticalAlign: "top"
          },
          // Required mark
          [`&${formItemCls}-required:not(${formItemCls}-required-mark-optional)::before`]: {
            display: "inline-block",
            marginInlineEnd: token.marginXXS,
            color: labelRequiredMarkColor,
            fontSize: token.fontSize,
            fontFamily: "SimSun, sans-serif",
            lineHeight: 1,
            content: '"*"',
            [`${componentCls}-hide-required-mark &`]: {
              display: "none"
            }
          },
          // Optional mark
          [`${formItemCls}-optional`]: {
            display: "inline-block",
            marginInlineStart: token.marginXXS,
            color: token.colorTextDescription,
            [`${componentCls}-hide-required-mark &`]: {
              display: "none"
            }
          },
          // Optional mark
          [`${formItemCls}-tooltip`]: {
            color: token.colorTextDescription,
            cursor: "help",
            writingMode: "horizontal-tb",
            marginInlineStart: token.marginXXS
          },
          "&::after": {
            content: '":"',
            position: "relative",
            marginBlock: 0,
            marginInlineStart: labelColonMarginInlineStart,
            marginInlineEnd: labelColonMarginInlineEnd
          },
          [`&${formItemCls}-no-colon::after`]: {
            content: '"\\a0"'
          }
        }
      },
      // ==============================================================
      // =                            Input                           =
      // ==============================================================
      [`${formItemCls}-control`]: {
        ["--ant-display"]: "flex",
        flexDirection: "column",
        flexGrow: 1,
        [`&:first-child:not([class^="'${rootPrefixCls}-col-'"]):not([class*="' ${rootPrefixCls}-col-'"])`]: {
          width: "100%"
        },
        "&-input": {
          position: "relative",
          display: "flex",
          alignItems: "center",
          minHeight: token.controlHeight,
          "&-content": {
            flex: "auto",
            maxWidth: "100%"
          }
        }
      },
      // ==============================================================
      // =                           Explain                          =
      // ==============================================================
      [formItemCls]: {
        "&-explain, &-extra": {
          clear: "both",
          color: token.colorTextDescription,
          fontSize: token.fontSize,
          lineHeight: token.lineHeight
        },
        "&-explain-connected": {
          width: "100%"
        },
        "&-extra": {
          minHeight: token.controlHeightSM,
          transition: `color ${token.motionDurationMid} ${token.motionEaseOut}`
          // sync input color transition
        },
        "&-explain": {
          "&-error": {
            color: token.colorError
          },
          "&-warning": {
            color: token.colorWarning
          }
        }
      },
      [`&-with-help ${formItemCls}-explain`]: {
        height: "auto",
        opacity: 1
      },
      // ==============================================================
      // =                        Feedback Icon                       =
      // ==============================================================
      [`${formItemCls}-feedback-icon`]: {
        fontSize: token.fontSize,
        textAlign: "center",
        visibility: "visible",
        animationName: zoomIn,
        animationDuration: token.motionDurationMid,
        animationTimingFunction: token.motionEaseOutBack,
        pointerEvents: "none",
        "&-success": {
          color: token.colorSuccess
        },
        "&-error": {
          color: token.colorError
        },
        "&-warning": {
          color: token.colorWarning
        },
        "&-validating": {
          color: token.colorPrimary
        }
      }
    })
  };
};
var genHorizontalStyle = (token, className) => {
  const {
    formItemCls
  } = token;
  return {
    [`${className}-horizontal`]: {
      [`${formItemCls}-label`]: {
        flexGrow: 0
      },
      [`${formItemCls}-control`]: {
        flex: "1 1 0",
        // https://github.com/ant-design/ant-design/issues/32777
        // https://github.com/ant-design/ant-design/issues/33773
        minWidth: 0
      },
      // Do not change this to `ant-col-24`! `-24` match all the responsive rules
      // https://github.com/ant-design/ant-design/issues/32980
      // https://github.com/ant-design/ant-design/issues/34903
      // https://github.com/ant-design/ant-design/issues/44538
      [`${formItemCls}-label[class$='-24'], ${formItemCls}-label[class*='-24 ']`]: {
        [`& + ${formItemCls}-control`]: {
          minWidth: "unset"
        }
      }
    }
  };
};
var genInlineStyle = (token) => {
  const {
    componentCls,
    formItemCls,
    inlineItemMarginBottom
  } = token;
  return {
    [`${componentCls}-inline`]: {
      display: "flex",
      flexWrap: "wrap",
      [formItemCls]: {
        flex: "none",
        marginInlineEnd: token.margin,
        marginBottom: inlineItemMarginBottom,
        "&-row": {
          flexWrap: "nowrap"
        },
        [`> ${formItemCls}-label,
        > ${formItemCls}-control`]: {
          display: "inline-block",
          verticalAlign: "top"
        },
        [`> ${formItemCls}-label`]: {
          flex: "none"
        },
        [`${componentCls}-text`]: {
          display: "inline-block"
        },
        [`${formItemCls}-has-feedback`]: {
          display: "inline-block"
        }
      }
    }
  };
};
var makeVerticalLayoutLabel = (token) => ({
  padding: token.verticalLabelPadding,
  margin: token.verticalLabelMargin,
  whiteSpace: "initial",
  textAlign: "start",
  "> label": {
    margin: 0,
    "&::after": {
      // https://github.com/ant-design/ant-design/issues/43538
      visibility: "hidden"
    }
  }
});
var makeVerticalLayout = (token) => {
  const {
    componentCls,
    formItemCls,
    rootPrefixCls
  } = token;
  return {
    [`${formItemCls} ${formItemCls}-label`]: makeVerticalLayoutLabel(token),
    // ref: https://github.com/ant-design/ant-design/issues/45122
    [`${componentCls}:not(${componentCls}-inline)`]: {
      [formItemCls]: {
        flexWrap: "wrap",
        [`${formItemCls}-label, ${formItemCls}-control`]: {
          // When developer pass `xs: { span }`,
          // It should follow the `xs` screen config
          // ref: https://github.com/ant-design/ant-design/issues/44386
          [`&:not([class*=" ${rootPrefixCls}-col-xs"])`]: {
            flex: "0 0 100%",
            maxWidth: "100%"
          }
        }
      }
    }
  };
};
var genVerticalStyle = (token) => {
  const {
    componentCls,
    formItemCls,
    antCls
  } = token;
  return {
    [`${componentCls}-vertical`]: {
      [`${formItemCls}:not(${formItemCls}-horizontal)`]: {
        [`${formItemCls}-row`]: {
          flexDirection: "column"
        },
        [`${formItemCls}-label > label`]: {
          height: "auto"
        },
        [`${formItemCls}-control`]: {
          width: "100%"
        },
        [`${formItemCls}-label,
        ${antCls}-col-24${formItemCls}-label,
        ${antCls}-col-xl-24${formItemCls}-label`]: makeVerticalLayoutLabel(token)
      }
    },
    [`@media (max-width: ${unit(token.screenXSMax)})`]: [makeVerticalLayout(token), {
      [componentCls]: {
        [`${formItemCls}:not(${formItemCls}-horizontal)`]: {
          [`${antCls}-col-xs-24${formItemCls}-label`]: makeVerticalLayoutLabel(token)
        }
      }
    }],
    [`@media (max-width: ${unit(token.screenSMMax)})`]: {
      [componentCls]: {
        [`${formItemCls}:not(${formItemCls}-horizontal)`]: {
          [`${antCls}-col-sm-24${formItemCls}-label`]: makeVerticalLayoutLabel(token)
        }
      }
    },
    [`@media (max-width: ${unit(token.screenMDMax)})`]: {
      [componentCls]: {
        [`${formItemCls}:not(${formItemCls}-horizontal)`]: {
          [`${antCls}-col-md-24${formItemCls}-label`]: makeVerticalLayoutLabel(token)
        }
      }
    },
    [`@media (max-width: ${unit(token.screenLGMax)})`]: {
      [componentCls]: {
        [`${formItemCls}:not(${formItemCls}-horizontal)`]: {
          [`${antCls}-col-lg-24${formItemCls}-label`]: makeVerticalLayoutLabel(token)
        }
      }
    }
  };
};
var genItemVerticalStyle = (token) => {
  const {
    formItemCls,
    antCls
  } = token;
  return {
    [`${formItemCls}-vertical`]: {
      [`${formItemCls}-row`]: {
        flexDirection: "column"
      },
      [`${formItemCls}-label > label`]: {
        height: "auto"
      },
      [`${formItemCls}-control`]: {
        width: "100%"
      }
    },
    [`${formItemCls}-vertical ${formItemCls}-label,
      ${antCls}-col-24${formItemCls}-label,
      ${antCls}-col-xl-24${formItemCls}-label`]: makeVerticalLayoutLabel(token),
    [`@media (max-width: ${unit(token.screenXSMax)})`]: [makeVerticalLayout(token), {
      [formItemCls]: {
        [`${antCls}-col-xs-24${formItemCls}-label`]: makeVerticalLayoutLabel(token)
      }
    }],
    [`@media (max-width: ${unit(token.screenSMMax)})`]: {
      [formItemCls]: {
        [`${antCls}-col-sm-24${formItemCls}-label`]: makeVerticalLayoutLabel(token)
      }
    },
    [`@media (max-width: ${unit(token.screenMDMax)})`]: {
      [formItemCls]: {
        [`${antCls}-col-md-24${formItemCls}-label`]: makeVerticalLayoutLabel(token)
      }
    },
    [`@media (max-width: ${unit(token.screenLGMax)})`]: {
      [formItemCls]: {
        [`${antCls}-col-lg-24${formItemCls}-label`]: makeVerticalLayoutLabel(token)
      }
    }
  };
};
var prepareComponentToken = (token) => ({
  labelRequiredMarkColor: token.colorError,
  labelColor: token.colorTextHeading,
  labelFontSize: token.fontSize,
  labelHeight: token.controlHeight,
  labelColonMarginInlineStart: token.marginXXS / 2,
  labelColonMarginInlineEnd: token.marginXS,
  itemMarginBottom: token.marginLG,
  verticalLabelPadding: `0 0 ${token.paddingXS}px`,
  verticalLabelMargin: 0,
  inlineItemMarginBottom: 0
});
var prepareToken = (token, rootPrefixCls) => {
  const formToken = merge(token, {
    formItemCls: `${token.componentCls}-item`,
    rootPrefixCls
  });
  return formToken;
};
var style_default = genStyleHooks("Form", (token, _ref) => {
  let {
    rootPrefixCls
  } = _ref;
  const formToken = prepareToken(token, rootPrefixCls);
  return [genFormStyle(formToken), genFormItemStyle(formToken), explain_default(formToken), genHorizontalStyle(formToken, formToken.componentCls), genHorizontalStyle(formToken, formToken.formItemCls), genInlineStyle(formToken), genVerticalStyle(formToken), genItemVerticalStyle(formToken), collapse_default(formToken), zoomIn];
}, prepareComponentToken, {
  // Let From style before the Grid
  // ref https://github.com/ant-design/ant-design/issues/44386
  order: -1e3
});

// node_modules/antd/es/form/Form.js
var __rest = function(s, e3) {
  var t2 = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e3.indexOf(p) < 0) t2[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e3.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t2[p[i]] = s[p[i]];
  }
  return t2;
};
var InternalForm = (props, ref) => {
  const contextDisabled = React2.useContext(DisabledContext_default);
  const {
    getPrefixCls,
    direction,
    form: contextForm
  } = React2.useContext(ConfigContext);
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    size,
    disabled = contextDisabled,
    form,
    colon,
    labelAlign,
    labelWrap,
    labelCol,
    wrapperCol,
    hideRequiredMark,
    layout = "horizontal",
    scrollToFirstError,
    requiredMark,
    onFinishFailed,
    name,
    style,
    feedbackIcons,
    variant
  } = props, restFormProps = __rest(props, ["prefixCls", "className", "rootClassName", "size", "disabled", "form", "colon", "labelAlign", "labelWrap", "labelCol", "wrapperCol", "hideRequiredMark", "layout", "scrollToFirstError", "requiredMark", "onFinishFailed", "name", "style", "feedbackIcons", "variant"]);
  const mergedSize = useSize_default(size);
  const contextValidateMessages = React2.useContext(validateMessagesContext_default);
  if (true) {
    useFormWarning(props);
  }
  const mergedRequiredMark = (0, import_react2.useMemo)(() => {
    if (requiredMark !== void 0) {
      return requiredMark;
    }
    if (hideRequiredMark) {
      return false;
    }
    if (contextForm && contextForm.requiredMark !== void 0) {
      return contextForm.requiredMark;
    }
    return true;
  }, [hideRequiredMark, requiredMark, contextForm]);
  const mergedColon = colon !== null && colon !== void 0 ? colon : contextForm === null || contextForm === void 0 ? void 0 : contextForm.colon;
  const prefixCls = getPrefixCls("form", customizePrefixCls);
  const rootCls = useCSSVarCls_default(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = style_default(prefixCls, rootCls);
  const formClassName = (0, import_classnames.default)(prefixCls, `${prefixCls}-${layout}`, {
    [`${prefixCls}-hide-required-mark`]: mergedRequiredMark === false,
    [`${prefixCls}-rtl`]: direction === "rtl",
    [`${prefixCls}-${mergedSize}`]: mergedSize
  }, cssVarCls, rootCls, hashId, contextForm === null || contextForm === void 0 ? void 0 : contextForm.className, className, rootClassName);
  const [wrapForm] = useForm(form);
  const {
    __INTERNAL__
  } = wrapForm;
  __INTERNAL__.name = name;
  const formContextValue = (0, import_react2.useMemo)(() => ({
    name,
    labelAlign,
    labelCol,
    labelWrap,
    wrapperCol,
    vertical: layout === "vertical",
    colon: mergedColon,
    requiredMark: mergedRequiredMark,
    itemRef: __INTERNAL__.itemRef,
    form: wrapForm,
    feedbackIcons
  }), [name, labelAlign, labelCol, wrapperCol, layout, mergedColon, mergedRequiredMark, wrapForm, feedbackIcons]);
  const nativeElementRef = React2.useRef(null);
  React2.useImperativeHandle(ref, () => {
    var _a;
    return Object.assign(Object.assign({}, wrapForm), {
      nativeElement: (_a = nativeElementRef.current) === null || _a === void 0 ? void 0 : _a.nativeElement
    });
  });
  const scrollToField = (options, fieldName) => {
    if (options) {
      let defaultScrollToFirstError = {
        block: "nearest"
      };
      if (typeof options === "object") {
        defaultScrollToFirstError = options;
      }
      wrapForm.scrollToField(fieldName, defaultScrollToFirstError);
    }
  };
  const onInternalFinishFailed = (errorInfo) => {
    onFinishFailed === null || onFinishFailed === void 0 ? void 0 : onFinishFailed(errorInfo);
    if (errorInfo.errorFields.length) {
      const fieldName = errorInfo.errorFields[0].name;
      if (scrollToFirstError !== void 0) {
        scrollToField(scrollToFirstError, fieldName);
        return;
      }
      if (contextForm && contextForm.scrollToFirstError !== void 0) {
        scrollToField(contextForm.scrollToFirstError, fieldName);
      }
    }
  };
  return wrapCSSVar(React2.createElement(VariantContext.Provider, {
    value: variant
  }, React2.createElement(DisabledContextProvider, {
    disabled
  }, React2.createElement(SizeContext_default.Provider, {
    value: mergedSize
  }, React2.createElement(FormProvider, {
    // This is not list in API, we pass with spread
    validateMessages: contextValidateMessages
  }, React2.createElement(FormContext.Provider, {
    value: formContextValue
  }, React2.createElement(es_default, Object.assign({
    id: name
  }, restFormProps, {
    name,
    onFinishFailed: onInternalFinishFailed,
    form: wrapForm,
    ref: nativeElementRef,
    style: Object.assign(Object.assign({}, contextForm === null || contextForm === void 0 ? void 0 : contextForm.style), style),
    className: formClassName
  }))))))));
};
var Form = React2.forwardRef(InternalForm);
if (true) {
  Form.displayName = "Form";
}
var Form_default = Form;

export {
  e2 as e,
  toArray,
  getFieldId,
  getStatus,
  useForm,
  prepareToken,
  style_default,
  Form_default
};
//# sourceMappingURL=chunk-UJPF3ZDV.js.map
