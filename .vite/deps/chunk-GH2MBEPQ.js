import {
  ResizeObserver_es_default
} from "./chunk-YYITRGAA.js";
import {
  _classCallCheck,
  _createClass,
  _getPrototypeOf,
  _inherits,
  _isNativeReflectConstruct,
  _possibleConstructorReturn
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
  __commonJS,
  __toESM
} from "./chunk-LK32TJAX.js";

// node_modules/string-convert/camel2hyphen.js
var require_camel2hyphen = __commonJS({
  "node_modules/string-convert/camel2hyphen.js"(exports, module) {
    var camel2hyphen = function(str) {
      return str.replace(/[A-Z]/g, function(match) {
        return "-" + match.toLowerCase();
      }).toLowerCase();
    };
    module.exports = camel2hyphen;
  }
});

// node_modules/json2mq/index.js
var require_json2mq = __commonJS({
  "node_modules/json2mq/index.js"(exports, module) {
    var camel2hyphen = require_camel2hyphen();
    var isDimension = function(feature) {
      var re = /[height|width]$/;
      return re.test(feature);
    };
    var obj2mq = function(obj) {
      var mq = "";
      var features = Object.keys(obj);
      features.forEach(function(feature, index) {
        var value = obj[feature];
        feature = camel2hyphen(feature);
        if (isDimension(feature) && typeof value === "number") {
          value = value + "px";
        }
        if (value === true) {
          mq += feature;
        } else if (value === false) {
          mq += "not " + feature;
        } else {
          mq += "(" + feature + ": " + value + ")";
        }
        if (index < features.length - 1) {
          mq += " and ";
        }
      });
      return mq;
    };
    var json2mq2 = function(query) {
      var mq = "";
      if (typeof query === "string") {
        return query;
      }
      if (query instanceof Array) {
        query.forEach(function(q, index) {
          mq += obj2mq(q);
          if (index < query.length - 1) {
            mq += ", ";
          }
        });
        return mq;
      }
      return obj2mq(query);
    };
    module.exports = json2mq2;
  }
});

// node_modules/@ant-design/react-slick/es/slider.js
var import_react7 = __toESM(require_react());

// node_modules/@ant-design/react-slick/es/inner-slider.js
var import_react6 = __toESM(require_react());

// node_modules/@ant-design/react-slick/es/initial-state.js
var initialState = {
  animating: false,
  autoplaying: null,
  currentDirection: 0,
  currentLeft: null,
  currentSlide: 0,
  direction: 1,
  dragging: false,
  edgeDragged: false,
  initialized: false,
  lazyLoadedList: [],
  listHeight: null,
  listWidth: null,
  scrolling: false,
  slideCount: null,
  slideHeight: null,
  slideWidth: null,
  swipeLeft: null,
  swiped: false,
  // used by swipeEvent. differentites between touch and swipe.
  swiping: false,
  touchObject: {
    startX: 0,
    startY: 0,
    curX: 0,
    curY: 0
  },
  trackStyle: {},
  trackWidth: 0,
  targetSlide: 0
};
var initial_state_default = initialState;

// node_modules/throttle-debounce/esm/index.js
function throttle(delay, callback, options) {
  var _ref = options || {}, _ref$noTrailing = _ref.noTrailing, noTrailing = _ref$noTrailing === void 0 ? false : _ref$noTrailing, _ref$noLeading = _ref.noLeading, noLeading = _ref$noLeading === void 0 ? false : _ref$noLeading, _ref$debounceMode = _ref.debounceMode, debounceMode = _ref$debounceMode === void 0 ? void 0 : _ref$debounceMode;
  var timeoutID;
  var cancelled = false;
  var lastExec = 0;
  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  }
  function cancel(options2) {
    var _ref2 = options2 || {}, _ref2$upcomingOnly = _ref2.upcomingOnly, upcomingOnly = _ref2$upcomingOnly === void 0 ? false : _ref2$upcomingOnly;
    clearExistingTimeout();
    cancelled = !upcomingOnly;
  }
  function wrapper() {
    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
      arguments_[_key] = arguments[_key];
    }
    var self = this;
    var elapsed = Date.now() - lastExec;
    if (cancelled) {
      return;
    }
    function exec() {
      lastExec = Date.now();
      callback.apply(self, arguments_);
    }
    function clear() {
      timeoutID = void 0;
    }
    if (!noLeading && debounceMode && !timeoutID) {
      exec();
    }
    clearExistingTimeout();
    if (debounceMode === void 0 && elapsed > delay) {
      if (noLeading) {
        lastExec = Date.now();
        if (!noTrailing) {
          timeoutID = setTimeout(debounceMode ? clear : exec, delay);
        }
      } else {
        exec();
      }
    } else if (noTrailing !== true) {
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === void 0 ? delay - elapsed : delay);
    }
  }
  wrapper.cancel = cancel;
  return wrapper;
}
function debounce(delay, callback, options) {
  var _ref = options || {}, _ref$atBegin = _ref.atBegin, atBegin = _ref$atBegin === void 0 ? false : _ref$atBegin;
  return throttle(delay, callback, {
    debounceMode: atBegin !== false
  });
}

// node_modules/@ant-design/react-slick/es/inner-slider.js
var import_classnames4 = __toESM(require_classnames());

// node_modules/@ant-design/react-slick/es/utils/innerSliderUtils.js
var import_react2 = __toESM(require_react());

// node_modules/@ant-design/react-slick/es/default-props.js
var import_react = __toESM(require_react());
var defaultProps = {
  accessibility: true,
  adaptiveHeight: false,
  afterChange: null,
  appendDots: function appendDots(dots) {
    return import_react.default.createElement("ul", {
      style: {
        display: "block"
      }
    }, dots);
  },
  arrows: true,
  autoplay: false,
  autoplaySpeed: 3e3,
  beforeChange: null,
  centerMode: false,
  centerPadding: "50px",
  className: "",
  cssEase: "ease",
  customPaging: function customPaging(i) {
    return import_react.default.createElement("button", null, i + 1);
  },
  dots: false,
  dotsClass: "slick-dots",
  draggable: true,
  easing: "linear",
  edgeFriction: 0.35,
  fade: false,
  focusOnSelect: false,
  infinite: true,
  initialSlide: 0,
  lazyLoad: null,
  nextArrow: null,
  onEdge: null,
  onInit: null,
  onLazyLoadError: null,
  onReInit: null,
  pauseOnDotsHover: false,
  pauseOnFocus: false,
  pauseOnHover: true,
  prevArrow: null,
  responsive: null,
  rows: 1,
  rtl: false,
  slide: "div",
  slidesPerRow: 1,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 500,
  swipe: true,
  swipeEvent: null,
  swipeToSlide: false,
  touchMove: true,
  touchThreshold: 5,
  useCSS: true,
  useTransform: true,
  variableWidth: false,
  vertical: false,
  waitForAnimate: true,
  asNavFor: null
};
var default_props_default = defaultProps;

// node_modules/@ant-design/react-slick/es/utils/innerSliderUtils.js
function clamp(number, lowerBound, upperBound) {
  return Math.max(lowerBound, Math.min(number, upperBound));
}
var safePreventDefault = function safePreventDefault2(event) {
  var passiveEvents = ["onTouchStart", "onTouchMove", "onWheel"];
  if (!passiveEvents.includes(event._reactName)) {
    event.preventDefault();
  }
};
var getOnDemandLazySlides = function getOnDemandLazySlides2(spec) {
  var onDemandSlides = [];
  var startIndex = lazyStartIndex(spec);
  var endIndex = lazyEndIndex(spec);
  for (var slideIndex = startIndex; slideIndex < endIndex; slideIndex++) {
    if (spec.lazyLoadedList.indexOf(slideIndex) < 0) {
      onDemandSlides.push(slideIndex);
    }
  }
  return onDemandSlides;
};
var lazyStartIndex = function lazyStartIndex2(spec) {
  return spec.currentSlide - lazySlidesOnLeft(spec);
};
var lazyEndIndex = function lazyEndIndex2(spec) {
  return spec.currentSlide + lazySlidesOnRight(spec);
};
var lazySlidesOnLeft = function lazySlidesOnLeft2(spec) {
  return spec.centerMode ? Math.floor(spec.slidesToShow / 2) + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : 0;
};
var lazySlidesOnRight = function lazySlidesOnRight2(spec) {
  return spec.centerMode ? Math.floor((spec.slidesToShow - 1) / 2) + 1 + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : spec.slidesToShow;
};
var getWidth = function getWidth2(elem) {
  return elem && elem.offsetWidth || 0;
};
var getHeight = function getHeight2(elem) {
  return elem && elem.offsetHeight || 0;
};
var getSwipeDirection = function getSwipeDirection2(touchObject) {
  var verticalSwiping = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var xDist, yDist, r, swipeAngle;
  xDist = touchObject.startX - touchObject.curX;
  yDist = touchObject.startY - touchObject.curY;
  r = Math.atan2(yDist, xDist);
  swipeAngle = Math.round(r * 180 / Math.PI);
  if (swipeAngle < 0) {
    swipeAngle = 360 - Math.abs(swipeAngle);
  }
  if (swipeAngle <= 45 && swipeAngle >= 0 || swipeAngle <= 360 && swipeAngle >= 315) {
    return "left";
  }
  if (swipeAngle >= 135 && swipeAngle <= 225) {
    return "right";
  }
  if (verticalSwiping === true) {
    if (swipeAngle >= 35 && swipeAngle <= 135) {
      return "up";
    } else {
      return "down";
    }
  }
  return "vertical";
};
var canGoNext = function canGoNext2(spec) {
  var canGo = true;
  if (!spec.infinite) {
    if (spec.centerMode && spec.currentSlide >= spec.slideCount - 1) {
      canGo = false;
    } else if (spec.slideCount <= spec.slidesToShow || spec.currentSlide >= spec.slideCount - spec.slidesToShow) {
      canGo = false;
    }
  }
  return canGo;
};
var extractObject = function extractObject2(spec, keys) {
  var newObject = {};
  keys.forEach(function(key) {
    return newObject[key] = spec[key];
  });
  return newObject;
};
var initializedState = function initializedState2(spec) {
  var slideCount = import_react2.default.Children.count(spec.children);
  var listNode = spec.listRef;
  var listWidth = Math.ceil(getWidth(listNode));
  var trackNode = spec.trackRef && spec.trackRef.node;
  var trackWidth = Math.ceil(getWidth(trackNode));
  var slideWidth;
  if (!spec.vertical) {
    var centerPaddingAdj = spec.centerMode && parseInt(spec.centerPadding) * 2;
    if (typeof spec.centerPadding === "string" && spec.centerPadding.slice(-1) === "%") {
      centerPaddingAdj *= listWidth / 100;
    }
    slideWidth = Math.ceil((listWidth - centerPaddingAdj) / spec.slidesToShow);
  } else {
    slideWidth = listWidth;
  }
  var slideHeight = listNode && getHeight(listNode.querySelector('[data-index="0"]'));
  var listHeight = slideHeight * spec.slidesToShow;
  var currentSlide = spec.currentSlide === void 0 ? spec.initialSlide : spec.currentSlide;
  if (spec.rtl && spec.currentSlide === void 0) {
    currentSlide = slideCount - 1 - spec.initialSlide;
  }
  var lazyLoadedList = spec.lazyLoadedList || [];
  var slidesToLoad = getOnDemandLazySlides(_objectSpread2(_objectSpread2({}, spec), {}, {
    currentSlide,
    lazyLoadedList
  }));
  lazyLoadedList = lazyLoadedList.concat(slidesToLoad);
  var state = {
    slideCount,
    slideWidth,
    listWidth,
    trackWidth,
    currentSlide,
    slideHeight,
    listHeight,
    lazyLoadedList
  };
  if (spec.autoplaying === null && spec.autoplay) {
    state["autoplaying"] = "playing";
  }
  return state;
};
var slideHandler = function slideHandler2(spec) {
  var waitForAnimate = spec.waitForAnimate, animating = spec.animating, fade = spec.fade, infinite = spec.infinite, index = spec.index, slideCount = spec.slideCount, lazyLoad = spec.lazyLoad, currentSlide = spec.currentSlide, centerMode = spec.centerMode, slidesToScroll = spec.slidesToScroll, slidesToShow = spec.slidesToShow, useCSS = spec.useCSS;
  var lazyLoadedList = spec.lazyLoadedList;
  if (waitForAnimate && animating) return {};
  var animationSlide = index, finalSlide, animationLeft, finalLeft;
  var state = {}, nextState = {};
  var targetSlide = infinite ? index : clamp(index, 0, slideCount - 1);
  if (fade) {
    if (!infinite && (index < 0 || index >= slideCount)) return {};
    if (index < 0) {
      animationSlide = index + slideCount;
    } else if (index >= slideCount) {
      animationSlide = index - slideCount;
    }
    if (lazyLoad && lazyLoadedList.indexOf(animationSlide) < 0) {
      lazyLoadedList = lazyLoadedList.concat(animationSlide);
    }
    state = {
      animating: true,
      currentSlide: animationSlide,
      lazyLoadedList,
      targetSlide: animationSlide
    };
    nextState = {
      animating: false,
      targetSlide: animationSlide
    };
  } else {
    finalSlide = animationSlide;
    if (animationSlide < 0) {
      finalSlide = animationSlide + slideCount;
      if (!infinite) finalSlide = 0;
      else if (slideCount % slidesToScroll !== 0) finalSlide = slideCount - slideCount % slidesToScroll;
    } else if (!canGoNext(spec) && animationSlide > currentSlide) {
      animationSlide = finalSlide = currentSlide;
    } else if (centerMode && animationSlide >= slideCount) {
      animationSlide = infinite ? slideCount : slideCount - 1;
      finalSlide = infinite ? 0 : slideCount - 1;
    } else if (animationSlide >= slideCount) {
      finalSlide = animationSlide - slideCount;
      if (!infinite) finalSlide = slideCount - slidesToShow;
      else if (slideCount % slidesToScroll !== 0) finalSlide = 0;
    }
    if (!infinite && animationSlide + slidesToShow >= slideCount) {
      finalSlide = slideCount - slidesToShow;
    }
    animationLeft = getTrackLeft(_objectSpread2(_objectSpread2({}, spec), {}, {
      slideIndex: animationSlide
    }));
    finalLeft = getTrackLeft(_objectSpread2(_objectSpread2({}, spec), {}, {
      slideIndex: finalSlide
    }));
    if (!infinite) {
      if (animationLeft === finalLeft) animationSlide = finalSlide;
      animationLeft = finalLeft;
    }
    if (lazyLoad) {
      lazyLoadedList = lazyLoadedList.concat(getOnDemandLazySlides(_objectSpread2(_objectSpread2({}, spec), {}, {
        currentSlide: animationSlide
      })));
    }
    if (!useCSS) {
      state = {
        currentSlide: finalSlide,
        trackStyle: getTrackCSS(_objectSpread2(_objectSpread2({}, spec), {}, {
          left: finalLeft
        })),
        lazyLoadedList,
        targetSlide
      };
    } else {
      state = {
        animating: true,
        currentSlide: finalSlide,
        trackStyle: getTrackAnimateCSS(_objectSpread2(_objectSpread2({}, spec), {}, {
          left: animationLeft
        })),
        lazyLoadedList,
        targetSlide
      };
      nextState = {
        animating: false,
        currentSlide: finalSlide,
        trackStyle: getTrackCSS(_objectSpread2(_objectSpread2({}, spec), {}, {
          left: finalLeft
        })),
        swipeLeft: null,
        targetSlide
      };
    }
  }
  return {
    state,
    nextState
  };
};
var changeSlide = function changeSlide2(spec, options) {
  var indexOffset, previousInt, slideOffset, unevenOffset, targetSlide;
  var slidesToScroll = spec.slidesToScroll, slidesToShow = spec.slidesToShow, slideCount = spec.slideCount, currentSlide = spec.currentSlide, previousTargetSlide = spec.targetSlide, lazyLoad = spec.lazyLoad, infinite = spec.infinite;
  unevenOffset = slideCount % slidesToScroll !== 0;
  indexOffset = unevenOffset ? 0 : (slideCount - currentSlide) % slidesToScroll;
  if (options.message === "previous") {
    slideOffset = indexOffset === 0 ? slidesToScroll : slidesToShow - indexOffset;
    targetSlide = currentSlide - slideOffset;
    if (lazyLoad && !infinite) {
      previousInt = currentSlide - slideOffset;
      targetSlide = previousInt === -1 ? slideCount - 1 : previousInt;
    }
    if (!infinite) {
      targetSlide = previousTargetSlide - slidesToScroll;
    }
  } else if (options.message === "next") {
    slideOffset = indexOffset === 0 ? slidesToScroll : indexOffset;
    targetSlide = currentSlide + slideOffset;
    if (lazyLoad && !infinite) {
      targetSlide = (currentSlide + slidesToScroll) % slideCount + indexOffset;
    }
    if (!infinite) {
      targetSlide = previousTargetSlide + slidesToScroll;
    }
  } else if (options.message === "dots") {
    targetSlide = options.index * options.slidesToScroll;
  } else if (options.message === "children") {
    targetSlide = options.index;
    if (infinite) {
      var direction = siblingDirection(_objectSpread2(_objectSpread2({}, spec), {}, {
        targetSlide
      }));
      if (targetSlide > options.currentSlide && direction === "left") {
        targetSlide = targetSlide - slideCount;
      } else if (targetSlide < options.currentSlide && direction === "right") {
        targetSlide = targetSlide + slideCount;
      }
    }
  } else if (options.message === "index") {
    targetSlide = Number(options.index);
  }
  return targetSlide;
};
var keyHandler = function keyHandler2(e, accessibility, rtl) {
  if (e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !accessibility) return "";
  if (e.keyCode === 37) return rtl ? "next" : "previous";
  if (e.keyCode === 39) return rtl ? "previous" : "next";
  return "";
};
var swipeStart = function swipeStart2(e, swipe, draggable) {
  e.target.tagName === "IMG" && safePreventDefault(e);
  if (!swipe || !draggable && e.type.indexOf("mouse") !== -1) return "";
  return {
    dragging: true,
    touchObject: {
      startX: e.touches ? e.touches[0].pageX : e.clientX,
      startY: e.touches ? e.touches[0].pageY : e.clientY,
      curX: e.touches ? e.touches[0].pageX : e.clientX,
      curY: e.touches ? e.touches[0].pageY : e.clientY
    }
  };
};
var swipeMove = function swipeMove2(e, spec) {
  var scrolling = spec.scrolling, animating = spec.animating, vertical = spec.vertical, swipeToSlide = spec.swipeToSlide, verticalSwiping = spec.verticalSwiping, rtl = spec.rtl, currentSlide = spec.currentSlide, edgeFriction = spec.edgeFriction, edgeDragged = spec.edgeDragged, onEdge = spec.onEdge, swiped = spec.swiped, swiping = spec.swiping, slideCount = spec.slideCount, slidesToScroll = spec.slidesToScroll, infinite = spec.infinite, touchObject = spec.touchObject, swipeEvent = spec.swipeEvent, listHeight = spec.listHeight, listWidth = spec.listWidth;
  if (scrolling) return;
  if (animating) return safePreventDefault(e);
  if (vertical && swipeToSlide && verticalSwiping) safePreventDefault(e);
  var swipeLeft, state = {};
  var curLeft = getTrackLeft(spec);
  touchObject.curX = e.touches ? e.touches[0].pageX : e.clientX;
  touchObject.curY = e.touches ? e.touches[0].pageY : e.clientY;
  touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curX - touchObject.startX, 2)));
  var verticalSwipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curY - touchObject.startY, 2)));
  if (!verticalSwiping && !swiping && verticalSwipeLength > 10) {
    return {
      scrolling: true
    };
  }
  if (verticalSwiping) touchObject.swipeLength = verticalSwipeLength;
  var positionOffset = (!rtl ? 1 : -1) * (touchObject.curX > touchObject.startX ? 1 : -1);
  if (verticalSwiping) positionOffset = touchObject.curY > touchObject.startY ? 1 : -1;
  var dotCount = Math.ceil(slideCount / slidesToScroll);
  var swipeDirection = getSwipeDirection(spec.touchObject, verticalSwiping);
  var touchSwipeLength = touchObject.swipeLength;
  if (!infinite) {
    if (currentSlide === 0 && (swipeDirection === "right" || swipeDirection === "down") || currentSlide + 1 >= dotCount && (swipeDirection === "left" || swipeDirection === "up") || !canGoNext(spec) && (swipeDirection === "left" || swipeDirection === "up")) {
      touchSwipeLength = touchObject.swipeLength * edgeFriction;
      if (edgeDragged === false && onEdge) {
        onEdge(swipeDirection);
        state["edgeDragged"] = true;
      }
    }
  }
  if (!swiped && swipeEvent) {
    swipeEvent(swipeDirection);
    state["swiped"] = true;
  }
  if (!vertical) {
    if (!rtl) {
      swipeLeft = curLeft + touchSwipeLength * positionOffset;
    } else {
      swipeLeft = curLeft - touchSwipeLength * positionOffset;
    }
  } else {
    swipeLeft = curLeft + touchSwipeLength * (listHeight / listWidth) * positionOffset;
  }
  if (verticalSwiping) {
    swipeLeft = curLeft + touchSwipeLength * positionOffset;
  }
  state = _objectSpread2(_objectSpread2({}, state), {}, {
    touchObject,
    swipeLeft,
    trackStyle: getTrackCSS(_objectSpread2(_objectSpread2({}, spec), {}, {
      left: swipeLeft
    }))
  });
  if (Math.abs(touchObject.curX - touchObject.startX) < Math.abs(touchObject.curY - touchObject.startY) * 0.8) {
    return state;
  }
  if (touchObject.swipeLength > 10) {
    state["swiping"] = true;
    safePreventDefault(e);
  }
  return state;
};
var swipeEnd = function swipeEnd2(e, spec) {
  var dragging = spec.dragging, swipe = spec.swipe, touchObject = spec.touchObject, listWidth = spec.listWidth, touchThreshold = spec.touchThreshold, verticalSwiping = spec.verticalSwiping, listHeight = spec.listHeight, swipeToSlide = spec.swipeToSlide, scrolling = spec.scrolling, onSwipe = spec.onSwipe, targetSlide = spec.targetSlide, currentSlide = spec.currentSlide, infinite = spec.infinite;
  if (!dragging) {
    if (swipe) safePreventDefault(e);
    return {};
  }
  var minSwipe = verticalSwiping ? listHeight / touchThreshold : listWidth / touchThreshold;
  var swipeDirection = getSwipeDirection(touchObject, verticalSwiping);
  var state = {
    dragging: false,
    edgeDragged: false,
    scrolling: false,
    swiping: false,
    swiped: false,
    swipeLeft: null,
    touchObject: {}
  };
  if (scrolling) {
    return state;
  }
  if (!touchObject.swipeLength) {
    return state;
  }
  if (touchObject.swipeLength > minSwipe) {
    safePreventDefault(e);
    if (onSwipe) {
      onSwipe(swipeDirection);
    }
    var slideCount, newSlide;
    var activeSlide = infinite ? currentSlide : targetSlide;
    switch (swipeDirection) {
      case "left":
      case "up":
        newSlide = activeSlide + getSlideCount(spec);
        slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
        state["currentDirection"] = 0;
        break;
      case "right":
      case "down":
        newSlide = activeSlide - getSlideCount(spec);
        slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
        state["currentDirection"] = 1;
        break;
      default:
        slideCount = activeSlide;
    }
    state["triggerSlideHandler"] = slideCount;
  } else {
    var currentLeft = getTrackLeft(spec);
    state["trackStyle"] = getTrackAnimateCSS(_objectSpread2(_objectSpread2({}, spec), {}, {
      left: currentLeft
    }));
  }
  return state;
};
var getNavigableIndexes = function getNavigableIndexes2(spec) {
  var max = spec.infinite ? spec.slideCount * 2 : spec.slideCount;
  var breakpoint = spec.infinite ? spec.slidesToShow * -1 : 0;
  var counter = spec.infinite ? spec.slidesToShow * -1 : 0;
  var indexes = [];
  while (breakpoint < max) {
    indexes.push(breakpoint);
    breakpoint = counter + spec.slidesToScroll;
    counter += Math.min(spec.slidesToScroll, spec.slidesToShow);
  }
  return indexes;
};
var checkNavigable = function checkNavigable2(spec, index) {
  var navigables = getNavigableIndexes(spec);
  var prevNavigable = 0;
  if (index > navigables[navigables.length - 1]) {
    index = navigables[navigables.length - 1];
  } else {
    for (var n in navigables) {
      if (index < navigables[n]) {
        index = prevNavigable;
        break;
      }
      prevNavigable = navigables[n];
    }
  }
  return index;
};
var getSlideCount = function getSlideCount2(spec) {
  var centerOffset = spec.centerMode ? spec.slideWidth * Math.floor(spec.slidesToShow / 2) : 0;
  if (spec.swipeToSlide) {
    var swipedSlide;
    var slickList = spec.listRef;
    var slides = slickList.querySelectorAll && slickList.querySelectorAll(".slick-slide") || [];
    Array.from(slides).every(function(slide) {
      if (!spec.vertical) {
        if (slide.offsetLeft - centerOffset + getWidth(slide) / 2 > spec.swipeLeft * -1) {
          swipedSlide = slide;
          return false;
        }
      } else {
        if (slide.offsetTop + getHeight(slide) / 2 > spec.swipeLeft * -1) {
          swipedSlide = slide;
          return false;
        }
      }
      return true;
    });
    if (!swipedSlide) {
      return 0;
    }
    var currentIndex = spec.rtl === true ? spec.slideCount - spec.currentSlide : spec.currentSlide;
    var slidesTraversed = Math.abs(swipedSlide.dataset.index - currentIndex) || 1;
    return slidesTraversed;
  } else {
    return spec.slidesToScroll;
  }
};
var checkSpecKeys = function checkSpecKeys2(spec, keysArray) {
  return (
    // eslint-disable-next-line no-prototype-builtins
    keysArray.reduce(function(value, key) {
      return value && spec.hasOwnProperty(key);
    }, true) ? null : console.error("Keys Missing:", spec)
  );
};
var getTrackCSS = function getTrackCSS2(spec) {
  checkSpecKeys(spec, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
  var trackWidth, trackHeight;
  if (!spec.vertical) {
    trackWidth = getTotalSlides(spec) * spec.slideWidth;
  } else {
    var trackChildren = spec.unslick ? spec.slideCount : spec.slideCount + 2 * spec.slidesToShow;
    trackHeight = trackChildren * spec.slideHeight;
  }
  var style = {
    opacity: 1,
    transition: "",
    WebkitTransition: ""
  };
  if (spec.useTransform) {
    var WebkitTransform = !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)";
    var transform = !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)";
    var msTransform = !spec.vertical ? "translateX(" + spec.left + "px)" : "translateY(" + spec.left + "px)";
    style = _objectSpread2(_objectSpread2({}, style), {}, {
      WebkitTransform,
      transform,
      msTransform
    });
  } else {
    if (spec.vertical) {
      style["top"] = spec.left;
    } else {
      style["left"] = spec.left;
    }
  }
  if (spec.fade) style = {
    opacity: 1
  };
  if (trackWidth) style.width = trackWidth;
  if (trackHeight) style.height = trackHeight;
  if (window && !window.addEventListener && window.attachEvent) {
    if (!spec.vertical) {
      style.marginLeft = spec.left + "px";
    } else {
      style.marginTop = spec.left + "px";
    }
  }
  return style;
};
var getTrackAnimateCSS = function getTrackAnimateCSS2(spec) {
  checkSpecKeys(spec, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
  var style = getTrackCSS(spec);
  if (spec.useTransform) {
    style.WebkitTransition = "-webkit-transform " + spec.speed + "ms " + spec.cssEase;
    style.transition = "transform " + spec.speed + "ms " + spec.cssEase;
  } else {
    if (spec.vertical) {
      style.transition = "top " + spec.speed + "ms " + spec.cssEase;
    } else {
      style.transition = "left " + spec.speed + "ms " + spec.cssEase;
    }
  }
  return style;
};
var getTrackLeft = function getTrackLeft2(spec) {
  if (spec.unslick) {
    return 0;
  }
  checkSpecKeys(spec, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
  var slideIndex = spec.slideIndex, trackRef = spec.trackRef, infinite = spec.infinite, centerMode = spec.centerMode, slideCount = spec.slideCount, slidesToShow = spec.slidesToShow, slidesToScroll = spec.slidesToScroll, slideWidth = spec.slideWidth, listWidth = spec.listWidth, variableWidth = spec.variableWidth, slideHeight = spec.slideHeight, fade = spec.fade, vertical = spec.vertical;
  var slideOffset = 0;
  var targetLeft;
  var targetSlide;
  var verticalOffset = 0;
  if (fade || spec.slideCount === 1) {
    return 0;
  }
  var slidesToOffset = 0;
  if (infinite) {
    slidesToOffset = -getPreClones(spec);
    if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
      slidesToOffset = -(slideIndex > slideCount ? slidesToShow - (slideIndex - slideCount) : slideCount % slidesToScroll);
    }
    if (centerMode) {
      slidesToOffset += parseInt(slidesToShow / 2);
    }
  } else {
    if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
      slidesToOffset = slidesToShow - slideCount % slidesToScroll;
    }
    if (centerMode) {
      slidesToOffset = parseInt(slidesToShow / 2);
    }
  }
  slideOffset = slidesToOffset * slideWidth;
  verticalOffset = slidesToOffset * slideHeight;
  if (!vertical) {
    targetLeft = slideIndex * slideWidth * -1 + slideOffset;
  } else {
    targetLeft = slideIndex * slideHeight * -1 + verticalOffset;
  }
  if (variableWidth === true) {
    var targetSlideIndex;
    var trackElem = trackRef && trackRef.node;
    targetSlideIndex = slideIndex + getPreClones(spec);
    targetSlide = trackElem && trackElem.childNodes[targetSlideIndex];
    targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;
    if (centerMode === true) {
      targetSlideIndex = infinite ? slideIndex + getPreClones(spec) : slideIndex;
      targetSlide = trackElem && trackElem.children[targetSlideIndex];
      targetLeft = 0;
      for (var slide = 0; slide < targetSlideIndex; slide++) {
        targetLeft -= trackElem && trackElem.children[slide] && trackElem.children[slide].offsetWidth;
      }
      targetLeft -= parseInt(spec.centerPadding);
      targetLeft += targetSlide && (listWidth - targetSlide.offsetWidth) / 2;
    }
  }
  return targetLeft;
};
var getPreClones = function getPreClones2(spec) {
  if (spec.unslick || !spec.infinite) {
    return 0;
  }
  if (spec.variableWidth) {
    return spec.slideCount;
  }
  return spec.slidesToShow + (spec.centerMode ? 1 : 0);
};
var getPostClones = function getPostClones2(spec) {
  if (spec.unslick || !spec.infinite) {
    return 0;
  }
  return spec.slideCount;
};
var getTotalSlides = function getTotalSlides2(spec) {
  return spec.slideCount === 1 ? 1 : getPreClones(spec) + spec.slideCount + getPostClones(spec);
};
var siblingDirection = function siblingDirection2(spec) {
  if (spec.targetSlide > spec.currentSlide) {
    if (spec.targetSlide > spec.currentSlide + slidesOnRight(spec)) {
      return "left";
    }
    return "right";
  } else {
    if (spec.targetSlide < spec.currentSlide - slidesOnLeft(spec)) {
      return "right";
    }
    return "left";
  }
};
var slidesOnRight = function slidesOnRight2(_ref) {
  var slidesToShow = _ref.slidesToShow, centerMode = _ref.centerMode, rtl = _ref.rtl, centerPadding = _ref.centerPadding;
  if (centerMode) {
    var right = (slidesToShow - 1) / 2 + 1;
    if (parseInt(centerPadding) > 0) right += 1;
    if (rtl && slidesToShow % 2 === 0) right += 1;
    return right;
  }
  if (rtl) {
    return 0;
  }
  return slidesToShow - 1;
};
var slidesOnLeft = function slidesOnLeft2(_ref2) {
  var slidesToShow = _ref2.slidesToShow, centerMode = _ref2.centerMode, rtl = _ref2.rtl, centerPadding = _ref2.centerPadding;
  if (centerMode) {
    var left = (slidesToShow - 1) / 2 + 1;
    if (parseInt(centerPadding) > 0) left += 1;
    if (!rtl && slidesToShow % 2 === 0) left += 1;
    return left;
  }
  if (rtl) {
    return slidesToShow - 1;
  }
  return 0;
};
var canUseDOM = function canUseDOM2() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
};
var validSettings = Object.keys(default_props_default);
function filterSettings(settings) {
  return validSettings.reduce(function(acc, settingName) {
    if (settings.hasOwnProperty(settingName)) {
      acc[settingName] = settings[settingName];
    }
    return acc;
  }, {});
}

// node_modules/@ant-design/react-slick/es/track.js
var import_react3 = __toESM(require_react());
var import_classnames = __toESM(require_classnames());
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
var getSlideClasses = function getSlideClasses2(spec) {
  var slickActive, slickCenter, slickCloned;
  var centerOffset, index;
  if (spec.rtl) {
    index = spec.slideCount - 1 - spec.index;
  } else {
    index = spec.index;
  }
  slickCloned = index < 0 || index >= spec.slideCount;
  if (spec.centerMode) {
    centerOffset = Math.floor(spec.slidesToShow / 2);
    slickCenter = (index - spec.currentSlide) % spec.slideCount === 0;
    if (index > spec.currentSlide - centerOffset - 1 && index <= spec.currentSlide + centerOffset) {
      slickActive = true;
    }
  } else {
    slickActive = spec.currentSlide <= index && index < spec.currentSlide + spec.slidesToShow;
  }
  var focusedSlide;
  if (spec.targetSlide < 0) {
    focusedSlide = spec.targetSlide + spec.slideCount;
  } else if (spec.targetSlide >= spec.slideCount) {
    focusedSlide = spec.targetSlide - spec.slideCount;
  } else {
    focusedSlide = spec.targetSlide;
  }
  var slickCurrent = index === focusedSlide;
  return {
    "slick-slide": true,
    "slick-active": slickActive,
    "slick-center": slickCenter,
    "slick-cloned": slickCloned,
    "slick-current": slickCurrent
    // dubious in case of RTL
  };
};
var getSlideStyle = function getSlideStyle2(spec) {
  var style = {};
  if (spec.variableWidth === void 0 || spec.variableWidth === false) {
    style.width = spec.slideWidth;
  }
  if (spec.fade) {
    style.position = "relative";
    if (spec.vertical && spec.slideHeight) {
      style.top = -spec.index * parseInt(spec.slideHeight);
    } else {
      style.left = -spec.index * parseInt(spec.slideWidth);
    }
    style.opacity = spec.currentSlide === spec.index ? 1 : 0;
    style.zIndex = spec.currentSlide === spec.index ? 999 : 998;
    if (spec.useCSS) {
      style.transition = "opacity " + spec.speed + "ms " + spec.cssEase + ", visibility " + spec.speed + "ms " + spec.cssEase;
    }
  }
  return style;
};
var getKey = function getKey2(child, fallbackKey) {
  return child.key + "-" + fallbackKey;
};
var renderSlides = function renderSlides2(spec) {
  var key;
  var slides = [];
  var preCloneSlides = [];
  var postCloneSlides = [];
  var childrenCount = import_react3.default.Children.count(spec.children);
  var startIndex = lazyStartIndex(spec);
  var endIndex = lazyEndIndex(spec);
  import_react3.default.Children.forEach(spec.children, function(elem, index) {
    var child;
    var childOnClickOptions = {
      message: "children",
      index,
      slidesToScroll: spec.slidesToScroll,
      currentSlide: spec.currentSlide
    };
    if (!spec.lazyLoad || spec.lazyLoad && spec.lazyLoadedList.indexOf(index) >= 0) {
      child = elem;
    } else {
      child = import_react3.default.createElement("div", null);
    }
    var childStyle = getSlideStyle(_objectSpread2(_objectSpread2({}, spec), {}, {
      index
    }));
    var slideClass = child.props.className || "";
    var slideClasses = getSlideClasses(_objectSpread2(_objectSpread2({}, spec), {}, {
      index
    }));
    slides.push(import_react3.default.cloneElement(child, {
      key: "original" + getKey(child, index),
      "data-index": index,
      className: (0, import_classnames.default)(slideClasses, slideClass),
      tabIndex: "-1",
      "aria-hidden": !slideClasses["slick-active"],
      style: _objectSpread2(_objectSpread2({
        outline: "none"
      }, child.props.style || {}), childStyle),
      onClick: function onClick(e) {
        child.props && child.props.onClick && child.props.onClick(e);
        if (spec.focusOnSelect) {
          spec.focusOnSelect(childOnClickOptions);
        }
      }
    }));
    if (spec.infinite && childrenCount > 1 && spec.fade === false && !spec.unslick) {
      var preCloneNo = childrenCount - index;
      if (preCloneNo <= getPreClones(spec)) {
        key = -preCloneNo;
        if (key >= startIndex) {
          child = elem;
        }
        slideClasses = getSlideClasses(_objectSpread2(_objectSpread2({}, spec), {}, {
          index: key
        }));
        preCloneSlides.push(import_react3.default.cloneElement(child, {
          key: "precloned" + getKey(child, key),
          "data-index": key,
          tabIndex: "-1",
          className: (0, import_classnames.default)(slideClasses, slideClass),
          "aria-hidden": !slideClasses["slick-active"],
          style: _objectSpread2(_objectSpread2({}, child.props.style || {}), childStyle),
          onClick: function onClick(e) {
            child.props && child.props.onClick && child.props.onClick(e);
            if (spec.focusOnSelect) {
              spec.focusOnSelect(childOnClickOptions);
            }
          }
        }));
      }
      key = childrenCount + index;
      if (key < endIndex) {
        child = elem;
      }
      slideClasses = getSlideClasses(_objectSpread2(_objectSpread2({}, spec), {}, {
        index: key
      }));
      postCloneSlides.push(import_react3.default.cloneElement(child, {
        key: "postcloned" + getKey(child, key),
        "data-index": key,
        tabIndex: "-1",
        className: (0, import_classnames.default)(slideClasses, slideClass),
        "aria-hidden": !slideClasses["slick-active"],
        style: _objectSpread2(_objectSpread2({}, child.props.style || {}), childStyle),
        onClick: function onClick(e) {
          child.props && child.props.onClick && child.props.onClick(e);
          if (spec.focusOnSelect) {
            spec.focusOnSelect(childOnClickOptions);
          }
        }
      }));
    }
  });
  if (spec.rtl) {
    return preCloneSlides.concat(slides, postCloneSlides).reverse();
  } else {
    return preCloneSlides.concat(slides, postCloneSlides);
  }
};
var Track = function(_React$PureComponent) {
  function Track2() {
    var _this;
    _classCallCheck(this, Track2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Track2, [].concat(args));
    _defineProperty(_this, "node", null);
    _defineProperty(_this, "handleRef", function(ref) {
      _this.node = ref;
    });
    return _this;
  }
  _inherits(Track2, _React$PureComponent);
  return _createClass(Track2, [{
    key: "render",
    value: function render() {
      var slides = renderSlides(this.props);
      var _this$props = this.props, onMouseEnter = _this$props.onMouseEnter, onMouseOver = _this$props.onMouseOver, onMouseLeave = _this$props.onMouseLeave;
      var mouseEvents = {
        onMouseEnter,
        onMouseOver,
        onMouseLeave
      };
      return import_react3.default.createElement("div", _extends({
        ref: this.handleRef,
        className: "slick-track",
        style: this.props.trackStyle
      }, mouseEvents), slides);
    }
  }]);
}(import_react3.default.PureComponent);

// node_modules/@ant-design/react-slick/es/dots.js
var import_react4 = __toESM(require_react());
var import_classnames2 = __toESM(require_classnames());
function _callSuper2(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
var getDotCount = function getDotCount2(spec) {
  var dots;
  if (spec.infinite) {
    dots = Math.ceil(spec.slideCount / spec.slidesToScroll);
  } else {
    dots = Math.ceil((spec.slideCount - spec.slidesToShow) / spec.slidesToScroll) + 1;
  }
  return dots;
};
var Dots = function(_React$PureComponent) {
  function Dots2() {
    _classCallCheck(this, Dots2);
    return _callSuper2(this, Dots2, arguments);
  }
  _inherits(Dots2, _React$PureComponent);
  return _createClass(Dots2, [{
    key: "clickHandler",
    value: function clickHandler(options, e) {
      e.preventDefault();
      this.props.clickHandler(options);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props, onMouseEnter = _this$props.onMouseEnter, onMouseOver = _this$props.onMouseOver, onMouseLeave = _this$props.onMouseLeave, infinite = _this$props.infinite, slidesToScroll = _this$props.slidesToScroll, slidesToShow = _this$props.slidesToShow, slideCount = _this$props.slideCount, currentSlide = _this$props.currentSlide;
      var dotCount = getDotCount({
        slideCount,
        slidesToScroll,
        slidesToShow,
        infinite
      });
      var mouseEvents = {
        onMouseEnter,
        onMouseOver,
        onMouseLeave
      };
      var dots = [];
      for (var i = 0; i < dotCount; i++) {
        var _rightBound = (i + 1) * slidesToScroll - 1;
        var rightBound = infinite ? _rightBound : clamp(_rightBound, 0, slideCount - 1);
        var _leftBound = rightBound - (slidesToScroll - 1);
        var leftBound = infinite ? _leftBound : clamp(_leftBound, 0, slideCount - 1);
        var className = (0, import_classnames2.default)({
          "slick-active": infinite ? currentSlide >= leftBound && currentSlide <= rightBound : currentSlide === leftBound
        });
        var dotOptions = {
          message: "dots",
          index: i,
          slidesToScroll,
          currentSlide
        };
        var onClick = this.clickHandler.bind(this, dotOptions);
        dots = dots.concat(import_react4.default.createElement("li", {
          key: i,
          className
        }, import_react4.default.cloneElement(this.props.customPaging(i), {
          onClick
        })));
      }
      return import_react4.default.cloneElement(this.props.appendDots(dots), _objectSpread2({
        className: this.props.dotsClass
      }, mouseEvents));
    }
  }]);
}(import_react4.default.PureComponent);

// node_modules/@ant-design/react-slick/es/arrows.js
var import_react5 = __toESM(require_react());
var import_classnames3 = __toESM(require_classnames());
function _callSuper3(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
var PrevArrow = function(_React$PureComponent) {
  function PrevArrow2() {
    _classCallCheck(this, PrevArrow2);
    return _callSuper3(this, PrevArrow2, arguments);
  }
  _inherits(PrevArrow2, _React$PureComponent);
  return _createClass(PrevArrow2, [{
    key: "clickHandler",
    value: function clickHandler(options, e) {
      if (e) {
        e.preventDefault();
      }
      this.props.clickHandler(options, e);
    }
  }, {
    key: "render",
    value: function render() {
      var prevClasses = {
        "slick-arrow": true,
        "slick-prev": true
      };
      var prevHandler = this.clickHandler.bind(this, {
        message: "previous"
      });
      if (!this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow)) {
        prevClasses["slick-disabled"] = true;
        prevHandler = null;
      }
      var prevArrowProps = {
        key: "0",
        "data-role": "none",
        className: (0, import_classnames3.default)(prevClasses),
        style: {
          display: "block"
        },
        onClick: prevHandler
      };
      var customProps = {
        currentSlide: this.props.currentSlide,
        slideCount: this.props.slideCount
      };
      var prevArrow;
      if (this.props.prevArrow) {
        prevArrow = import_react5.default.cloneElement(this.props.prevArrow, _objectSpread2(_objectSpread2({}, prevArrowProps), customProps));
      } else {
        prevArrow = import_react5.default.createElement("button", _extends({
          key: "0",
          type: "button"
        }, prevArrowProps), " ", "Previous");
      }
      return prevArrow;
    }
  }]);
}(import_react5.default.PureComponent);
var NextArrow = function(_React$PureComponent2) {
  function NextArrow2() {
    _classCallCheck(this, NextArrow2);
    return _callSuper3(this, NextArrow2, arguments);
  }
  _inherits(NextArrow2, _React$PureComponent2);
  return _createClass(NextArrow2, [{
    key: "clickHandler",
    value: function clickHandler(options, e) {
      if (e) {
        e.preventDefault();
      }
      this.props.clickHandler(options, e);
    }
  }, {
    key: "render",
    value: function render() {
      var nextClasses = {
        "slick-arrow": true,
        "slick-next": true
      };
      var nextHandler = this.clickHandler.bind(this, {
        message: "next"
      });
      if (!canGoNext(this.props)) {
        nextClasses["slick-disabled"] = true;
        nextHandler = null;
      }
      var nextArrowProps = {
        key: "1",
        "data-role": "none",
        className: (0, import_classnames3.default)(nextClasses),
        style: {
          display: "block"
        },
        onClick: nextHandler
      };
      var customProps = {
        currentSlide: this.props.currentSlide,
        slideCount: this.props.slideCount
      };
      var nextArrow;
      if (this.props.nextArrow) {
        nextArrow = import_react5.default.cloneElement(this.props.nextArrow, _objectSpread2(_objectSpread2({}, nextArrowProps), customProps));
      } else {
        nextArrow = import_react5.default.createElement("button", _extends({
          key: "1",
          type: "button"
        }, nextArrowProps), " ", "Next");
      }
      return nextArrow;
    }
  }]);
}(import_react5.default.PureComponent);

// node_modules/@ant-design/react-slick/es/inner-slider.js
var _excluded = ["animating"];
function _callSuper4(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
var InnerSlider = function(_React$Component) {
  function InnerSlider2(props) {
    var _this;
    _classCallCheck(this, InnerSlider2);
    _this = _callSuper4(this, InnerSlider2, [props]);
    _defineProperty(_this, "listRefHandler", function(ref) {
      return _this.list = ref;
    });
    _defineProperty(_this, "trackRefHandler", function(ref) {
      return _this.track = ref;
    });
    _defineProperty(_this, "adaptHeight", function() {
      if (_this.props.adaptiveHeight && _this.list) {
        var elem = _this.list.querySelector('[data-index="'.concat(_this.state.currentSlide, '"]'));
        _this.list.style.height = getHeight(elem) + "px";
      }
    });
    _defineProperty(_this, "componentDidMount", function() {
      _this.props.onInit && _this.props.onInit();
      if (_this.props.lazyLoad) {
        var slidesToLoad = getOnDemandLazySlides(_objectSpread2(_objectSpread2({}, _this.props), _this.state));
        if (slidesToLoad.length > 0) {
          _this.setState(function(prevState) {
            return {
              lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
            };
          });
          if (_this.props.onLazyLoad) {
            _this.props.onLazyLoad(slidesToLoad);
          }
        }
      }
      var spec = _objectSpread2({
        listRef: _this.list,
        trackRef: _this.track
      }, _this.props);
      _this.updateState(spec, true, function() {
        _this.adaptHeight();
        _this.props.autoplay && _this.autoPlay("playing");
      });
      if (_this.props.lazyLoad === "progressive") {
        _this.lazyLoadTimer = setInterval(_this.progressiveLazyLoad, 1e3);
      }
      _this.ro = new ResizeObserver_es_default(function() {
        if (_this.state.animating) {
          _this.onWindowResized(false);
          _this.callbackTimers.push(setTimeout(function() {
            return _this.onWindowResized();
          }, _this.props.speed));
        } else {
          _this.onWindowResized();
        }
      });
      _this.ro.observe(_this.list);
      document.querySelectorAll && Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), function(slide) {
        slide.onfocus = _this.props.pauseOnFocus ? _this.onSlideFocus : null;
        slide.onblur = _this.props.pauseOnFocus ? _this.onSlideBlur : null;
      });
      if (window.addEventListener) {
        window.addEventListener("resize", _this.onWindowResized);
      } else {
        window.attachEvent("onresize", _this.onWindowResized);
      }
    });
    _defineProperty(_this, "componentWillUnmount", function() {
      if (_this.animationEndCallback) {
        clearTimeout(_this.animationEndCallback);
      }
      if (_this.lazyLoadTimer) {
        clearInterval(_this.lazyLoadTimer);
      }
      if (_this.callbackTimers.length) {
        _this.callbackTimers.forEach(function(timer) {
          return clearTimeout(timer);
        });
        _this.callbackTimers = [];
      }
      if (window.addEventListener) {
        window.removeEventListener("resize", _this.onWindowResized);
      } else {
        window.detachEvent("onresize", _this.onWindowResized);
      }
      if (_this.autoplayTimer) {
        clearInterval(_this.autoplayTimer);
      }
      _this.ro.disconnect();
    });
    _defineProperty(_this, "componentDidUpdate", function(prevProps) {
      _this.checkImagesLoad();
      _this.props.onReInit && _this.props.onReInit();
      if (_this.props.lazyLoad) {
        var slidesToLoad = getOnDemandLazySlides(_objectSpread2(_objectSpread2({}, _this.props), _this.state));
        if (slidesToLoad.length > 0) {
          _this.setState(function(prevState) {
            return {
              lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
            };
          });
          if (_this.props.onLazyLoad) {
            _this.props.onLazyLoad(slidesToLoad);
          }
        }
      }
      _this.adaptHeight();
      var spec = _objectSpread2(_objectSpread2({
        listRef: _this.list,
        trackRef: _this.track
      }, _this.props), _this.state);
      var setTrackStyle = _this.didPropsChange(prevProps);
      setTrackStyle && _this.updateState(spec, setTrackStyle, function() {
        if (_this.state.currentSlide >= import_react6.default.Children.count(_this.props.children)) {
          _this.changeSlide({
            message: "index",
            index: import_react6.default.Children.count(_this.props.children) - _this.props.slidesToShow,
            currentSlide: _this.state.currentSlide
          });
        }
        if (prevProps.autoplay !== _this.props.autoplay || prevProps.autoplaySpeed !== _this.props.autoplaySpeed) {
          if (!prevProps.autoplay && _this.props.autoplay) {
            _this.autoPlay("playing");
          } else if (_this.props.autoplay) {
            _this.autoPlay("update");
          } else {
            _this.pause("paused");
          }
        }
      });
    });
    _defineProperty(_this, "onWindowResized", function(setTrackStyle) {
      if (_this.debouncedResize) _this.debouncedResize.cancel();
      _this.debouncedResize = debounce(50, function() {
        return _this.resizeWindow(setTrackStyle);
      });
      _this.debouncedResize();
    });
    _defineProperty(_this, "resizeWindow", function() {
      var setTrackStyle = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
      var isTrackMounted = Boolean(_this.track && _this.track.node);
      if (!isTrackMounted) return;
      var spec = _objectSpread2(_objectSpread2({
        listRef: _this.list,
        trackRef: _this.track
      }, _this.props), _this.state);
      _this.updateState(spec, setTrackStyle, function() {
        if (_this.props.autoplay) _this.autoPlay("update");
        else _this.pause("paused");
      });
      _this.setState({
        animating: false
      });
      clearTimeout(_this.animationEndCallback);
      delete _this.animationEndCallback;
    });
    _defineProperty(_this, "updateState", function(spec, setTrackStyle, callback) {
      var updatedState = initializedState(spec);
      spec = _objectSpread2(_objectSpread2(_objectSpread2({}, spec), updatedState), {}, {
        slideIndex: updatedState.currentSlide
      });
      var targetLeft = getTrackLeft(spec);
      spec = _objectSpread2(_objectSpread2({}, spec), {}, {
        left: targetLeft
      });
      var trackStyle = getTrackCSS(spec);
      if (setTrackStyle || import_react6.default.Children.count(_this.props.children) !== import_react6.default.Children.count(spec.children)) {
        updatedState["trackStyle"] = trackStyle;
      }
      _this.setState(updatedState, callback);
    });
    _defineProperty(_this, "ssrInit", function() {
      if (_this.props.variableWidth) {
        var _trackWidth = 0, _trackLeft = 0;
        var childrenWidths = [];
        var preClones = getPreClones(_objectSpread2(_objectSpread2(_objectSpread2({}, _this.props), _this.state), {}, {
          slideCount: _this.props.children.length
        }));
        var postClones = getPostClones(_objectSpread2(_objectSpread2(_objectSpread2({}, _this.props), _this.state), {}, {
          slideCount: _this.props.children.length
        }));
        _this.props.children.forEach(function(child) {
          childrenWidths.push(child.props.style.width);
          _trackWidth += child.props.style.width;
        });
        for (var i = 0; i < preClones; i++) {
          _trackLeft += childrenWidths[childrenWidths.length - 1 - i];
          _trackWidth += childrenWidths[childrenWidths.length - 1 - i];
        }
        for (var _i = 0; _i < postClones; _i++) {
          _trackWidth += childrenWidths[_i];
        }
        for (var _i2 = 0; _i2 < _this.state.currentSlide; _i2++) {
          _trackLeft += childrenWidths[_i2];
        }
        var _trackStyle = {
          width: _trackWidth + "px",
          left: -_trackLeft + "px"
        };
        if (_this.props.centerMode) {
          var currentWidth = "".concat(childrenWidths[_this.state.currentSlide], "px");
          _trackStyle.left = "calc(".concat(_trackStyle.left, " + (100% - ").concat(currentWidth, ") / 2 ) ");
        }
        return {
          trackStyle: _trackStyle
        };
      }
      var childrenCount = import_react6.default.Children.count(_this.props.children);
      var spec = _objectSpread2(_objectSpread2(_objectSpread2({}, _this.props), _this.state), {}, {
        slideCount: childrenCount
      });
      var slideCount = getPreClones(spec) + getPostClones(spec) + childrenCount;
      var trackWidth = 100 / _this.props.slidesToShow * slideCount;
      var slideWidth = 100 / slideCount;
      var trackLeft = -slideWidth * (getPreClones(spec) + _this.state.currentSlide) * trackWidth / 100;
      if (_this.props.centerMode) {
        trackLeft += (100 - slideWidth * trackWidth / 100) / 2;
      }
      var trackStyle = {
        width: trackWidth + "%",
        left: trackLeft + "%"
      };
      return {
        slideWidth: slideWidth + "%",
        trackStyle
      };
    });
    _defineProperty(_this, "checkImagesLoad", function() {
      var images = _this.list && _this.list.querySelectorAll && _this.list.querySelectorAll(".slick-slide img") || [];
      var imagesCount = images.length, loadedCount = 0;
      Array.prototype.forEach.call(images, function(image) {
        var handler = function handler2() {
          return ++loadedCount && loadedCount >= imagesCount && _this.onWindowResized();
        };
        if (!image.onclick) {
          image.onclick = function() {
            return image.parentNode.focus();
          };
        } else {
          var prevClickHandler = image.onclick;
          image.onclick = function(e) {
            prevClickHandler(e);
            image.parentNode.focus();
          };
        }
        if (!image.onload) {
          if (_this.props.lazyLoad) {
            image.onload = function() {
              _this.adaptHeight();
              _this.callbackTimers.push(setTimeout(_this.onWindowResized, _this.props.speed));
            };
          } else {
            image.onload = handler;
            image.onerror = function() {
              handler();
              _this.props.onLazyLoadError && _this.props.onLazyLoadError();
            };
          }
        }
      });
    });
    _defineProperty(_this, "progressiveLazyLoad", function() {
      var slidesToLoad = [];
      var spec = _objectSpread2(_objectSpread2({}, _this.props), _this.state);
      for (var index = _this.state.currentSlide; index < _this.state.slideCount + getPostClones(spec); index++) {
        if (_this.state.lazyLoadedList.indexOf(index) < 0) {
          slidesToLoad.push(index);
          break;
        }
      }
      for (var _index = _this.state.currentSlide - 1; _index >= -getPreClones(spec); _index--) {
        if (_this.state.lazyLoadedList.indexOf(_index) < 0) {
          slidesToLoad.push(_index);
          break;
        }
      }
      if (slidesToLoad.length > 0) {
        _this.setState(function(state) {
          return {
            lazyLoadedList: state.lazyLoadedList.concat(slidesToLoad)
          };
        });
        if (_this.props.onLazyLoad) {
          _this.props.onLazyLoad(slidesToLoad);
        }
      } else {
        if (_this.lazyLoadTimer) {
          clearInterval(_this.lazyLoadTimer);
          delete _this.lazyLoadTimer;
        }
      }
    });
    _defineProperty(_this, "slideHandler", function(index) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var _this$props = _this.props, asNavFor = _this$props.asNavFor, beforeChange = _this$props.beforeChange, onLazyLoad = _this$props.onLazyLoad, speed = _this$props.speed, afterChange = _this$props.afterChange;
      var currentSlide = _this.state.currentSlide;
      var _slideHandler = slideHandler(_objectSpread2(_objectSpread2(_objectSpread2({
        index
      }, _this.props), _this.state), {}, {
        trackRef: _this.track,
        useCSS: _this.props.useCSS && !dontAnimate
      })), state = _slideHandler.state, nextState = _slideHandler.nextState;
      if (!state) return;
      beforeChange && beforeChange(currentSlide, state.currentSlide);
      var slidesToLoad = state.lazyLoadedList.filter(function(value) {
        return _this.state.lazyLoadedList.indexOf(value) < 0;
      });
      onLazyLoad && slidesToLoad.length > 0 && onLazyLoad(slidesToLoad);
      if (!_this.props.waitForAnimate && _this.animationEndCallback) {
        clearTimeout(_this.animationEndCallback);
        afterChange && afterChange(currentSlide);
        delete _this.animationEndCallback;
      }
      _this.setState(state, function() {
        if (asNavFor && _this.asNavForIndex !== index) {
          _this.asNavForIndex = index;
          asNavFor.innerSlider.slideHandler(index);
        }
        if (!nextState) return;
        _this.animationEndCallback = setTimeout(function() {
          var animating = nextState.animating, firstBatch = _objectWithoutProperties(nextState, _excluded);
          _this.setState(firstBatch, function() {
            _this.callbackTimers.push(setTimeout(function() {
              return _this.setState({
                animating
              });
            }, 10));
            afterChange && afterChange(state.currentSlide);
            delete _this.animationEndCallback;
          });
        }, speed);
      });
    });
    _defineProperty(_this, "changeSlide", function(options) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var spec = _objectSpread2(_objectSpread2({}, _this.props), _this.state);
      var targetSlide = changeSlide(spec, options);
      if (targetSlide !== 0 && !targetSlide) return;
      if (dontAnimate === true) {
        _this.slideHandler(targetSlide, dontAnimate);
      } else {
        _this.slideHandler(targetSlide);
      }
      _this.props.autoplay && _this.autoPlay("update");
      if (_this.props.focusOnSelect) {
        var nodes = _this.list.querySelectorAll(".slick-current");
        nodes[0] && nodes[0].focus();
      }
    });
    _defineProperty(_this, "clickHandler", function(e) {
      if (_this.clickable === false) {
        e.stopPropagation();
        e.preventDefault();
      }
      _this.clickable = true;
    });
    _defineProperty(_this, "keyHandler", function(e) {
      var dir = keyHandler(e, _this.props.accessibility, _this.props.rtl);
      dir !== "" && _this.changeSlide({
        message: dir
      });
    });
    _defineProperty(_this, "selectHandler", function(options) {
      _this.changeSlide(options);
    });
    _defineProperty(_this, "disableBodyScroll", function() {
      var preventDefault = function preventDefault2(e) {
        e = e || window.event;
        if (e.preventDefault) e.preventDefault();
        e.returnValue = false;
      };
      window.ontouchmove = preventDefault;
    });
    _defineProperty(_this, "enableBodyScroll", function() {
      window.ontouchmove = null;
    });
    _defineProperty(_this, "swipeStart", function(e) {
      if (_this.props.verticalSwiping) {
        _this.disableBodyScroll();
      }
      var state = swipeStart(e, _this.props.swipe, _this.props.draggable);
      state !== "" && _this.setState(state);
    });
    _defineProperty(_this, "swipeMove", function(e) {
      var state = swipeMove(e, _objectSpread2(_objectSpread2(_objectSpread2({}, _this.props), _this.state), {}, {
        trackRef: _this.track,
        listRef: _this.list,
        slideIndex: _this.state.currentSlide
      }));
      if (!state) return;
      if (state["swiping"]) {
        _this.clickable = false;
      }
      _this.setState(state);
    });
    _defineProperty(_this, "swipeEnd", function(e) {
      var state = swipeEnd(e, _objectSpread2(_objectSpread2(_objectSpread2({}, _this.props), _this.state), {}, {
        trackRef: _this.track,
        listRef: _this.list,
        slideIndex: _this.state.currentSlide
      }));
      if (!state) return;
      var triggerSlideHandler = state["triggerSlideHandler"];
      delete state["triggerSlideHandler"];
      _this.setState(state);
      if (triggerSlideHandler === void 0) return;
      _this.slideHandler(triggerSlideHandler);
      if (_this.props.verticalSwiping) {
        _this.enableBodyScroll();
      }
    });
    _defineProperty(_this, "touchEnd", function(e) {
      _this.swipeEnd(e);
      _this.clickable = true;
    });
    _defineProperty(_this, "slickPrev", function() {
      _this.callbackTimers.push(setTimeout(function() {
        return _this.changeSlide({
          message: "previous"
        });
      }, 0));
    });
    _defineProperty(_this, "slickNext", function() {
      _this.callbackTimers.push(setTimeout(function() {
        return _this.changeSlide({
          message: "next"
        });
      }, 0));
    });
    _defineProperty(_this, "slickGoTo", function(slide) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      slide = Number(slide);
      if (isNaN(slide)) return "";
      _this.callbackTimers.push(setTimeout(function() {
        return _this.changeSlide({
          message: "index",
          index: slide,
          currentSlide: _this.state.currentSlide
        }, dontAnimate);
      }, 0));
    });
    _defineProperty(_this, "play", function() {
      var nextIndex;
      if (_this.props.rtl) {
        nextIndex = _this.state.currentSlide - _this.props.slidesToScroll;
      } else {
        if (canGoNext(_objectSpread2(_objectSpread2({}, _this.props), _this.state))) {
          nextIndex = _this.state.currentSlide + _this.props.slidesToScroll;
        } else {
          return false;
        }
      }
      _this.slideHandler(nextIndex);
    });
    _defineProperty(_this, "autoPlay", function(playType) {
      if (_this.autoplayTimer) {
        clearInterval(_this.autoplayTimer);
      }
      var autoplaying = _this.state.autoplaying;
      if (playType === "update") {
        if (autoplaying === "hovered" || autoplaying === "focused" || autoplaying === "paused") {
          return;
        }
      } else if (playType === "leave") {
        if (autoplaying === "paused" || autoplaying === "focused") {
          return;
        }
      } else if (playType === "blur") {
        if (autoplaying === "paused" || autoplaying === "hovered") {
          return;
        }
      }
      _this.autoplayTimer = setInterval(_this.play, _this.props.autoplaySpeed + 50);
      _this.setState({
        autoplaying: "playing"
      });
    });
    _defineProperty(_this, "pause", function(pauseType) {
      if (_this.autoplayTimer) {
        clearInterval(_this.autoplayTimer);
        _this.autoplayTimer = null;
      }
      var autoplaying = _this.state.autoplaying;
      if (pauseType === "paused") {
        _this.setState({
          autoplaying: "paused"
        });
      } else if (pauseType === "focused") {
        if (autoplaying === "hovered" || autoplaying === "playing") {
          _this.setState({
            autoplaying: "focused"
          });
        }
      } else {
        if (autoplaying === "playing") {
          _this.setState({
            autoplaying: "hovered"
          });
        }
      }
    });
    _defineProperty(_this, "onDotsOver", function() {
      return _this.props.autoplay && _this.pause("hovered");
    });
    _defineProperty(_this, "onDotsLeave", function() {
      return _this.props.autoplay && _this.state.autoplaying === "hovered" && _this.autoPlay("leave");
    });
    _defineProperty(_this, "onTrackOver", function() {
      return _this.props.autoplay && _this.pause("hovered");
    });
    _defineProperty(_this, "onTrackLeave", function() {
      return _this.props.autoplay && _this.state.autoplaying === "hovered" && _this.autoPlay("leave");
    });
    _defineProperty(_this, "onSlideFocus", function() {
      return _this.props.autoplay && _this.pause("focused");
    });
    _defineProperty(_this, "onSlideBlur", function() {
      return _this.props.autoplay && _this.state.autoplaying === "focused" && _this.autoPlay("blur");
    });
    _defineProperty(_this, "render", function() {
      var className = (0, import_classnames4.default)("slick-slider", _this.props.className, {
        "slick-vertical": _this.props.vertical,
        "slick-initialized": true
      });
      var spec = _objectSpread2(_objectSpread2({}, _this.props), _this.state);
      var trackProps = extractObject(spec, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"]);
      var pauseOnHover = _this.props.pauseOnHover;
      trackProps = _objectSpread2(_objectSpread2({}, trackProps), {}, {
        onMouseEnter: pauseOnHover ? _this.onTrackOver : null,
        onMouseLeave: pauseOnHover ? _this.onTrackLeave : null,
        onMouseOver: pauseOnHover ? _this.onTrackOver : null,
        focusOnSelect: _this.props.focusOnSelect && _this.clickable ? _this.selectHandler : null
      });
      var dots;
      if (_this.props.dots === true && _this.state.slideCount >= _this.props.slidesToShow) {
        var dotProps = extractObject(spec, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]);
        var pauseOnDotsHover = _this.props.pauseOnDotsHover;
        dotProps = _objectSpread2(_objectSpread2({}, dotProps), {}, {
          clickHandler: _this.changeSlide,
          onMouseEnter: pauseOnDotsHover ? _this.onDotsLeave : null,
          onMouseOver: pauseOnDotsHover ? _this.onDotsOver : null,
          onMouseLeave: pauseOnDotsHover ? _this.onDotsLeave : null
        });
        dots = import_react6.default.createElement(Dots, dotProps);
      }
      var prevArrow, nextArrow;
      var arrowProps = extractObject(spec, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
      arrowProps.clickHandler = _this.changeSlide;
      if (_this.props.arrows) {
        prevArrow = import_react6.default.createElement(PrevArrow, arrowProps);
        nextArrow = import_react6.default.createElement(NextArrow, arrowProps);
      }
      var verticalHeightStyle = null;
      if (_this.props.vertical) {
        verticalHeightStyle = {
          height: _this.state.listHeight
        };
      }
      var centerPaddingStyle = null;
      if (_this.props.vertical === false) {
        if (_this.props.centerMode === true) {
          centerPaddingStyle = {
            padding: "0px " + _this.props.centerPadding
          };
        }
      } else {
        if (_this.props.centerMode === true) {
          centerPaddingStyle = {
            padding: _this.props.centerPadding + " 0px"
          };
        }
      }
      var listStyle = _objectSpread2(_objectSpread2({}, verticalHeightStyle), centerPaddingStyle);
      var touchMove = _this.props.touchMove;
      var listProps = {
        className: "slick-list",
        style: listStyle,
        onClick: _this.clickHandler,
        onMouseDown: touchMove ? _this.swipeStart : null,
        onMouseMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
        onMouseUp: touchMove ? _this.swipeEnd : null,
        onMouseLeave: _this.state.dragging && touchMove ? _this.swipeEnd : null,
        onTouchStart: touchMove ? _this.swipeStart : null,
        onTouchMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
        onTouchEnd: touchMove ? _this.touchEnd : null,
        onTouchCancel: _this.state.dragging && touchMove ? _this.swipeEnd : null,
        onKeyDown: _this.props.accessibility ? _this.keyHandler : null
      };
      var innerSliderProps = {
        className,
        dir: "ltr",
        style: _this.props.style
      };
      if (_this.props.unslick) {
        listProps = {
          className: "slick-list"
        };
        innerSliderProps = {
          className,
          style: _this.props.style
        };
      }
      return import_react6.default.createElement("div", innerSliderProps, !_this.props.unslick ? prevArrow : "", import_react6.default.createElement("div", _extends({
        ref: _this.listRefHandler
      }, listProps), import_react6.default.createElement(Track, _extends({
        ref: _this.trackRefHandler
      }, trackProps), _this.props.children)), !_this.props.unslick ? nextArrow : "", !_this.props.unslick ? dots : "");
    });
    _this.list = null;
    _this.track = null;
    _this.state = _objectSpread2(_objectSpread2({}, initial_state_default), {}, {
      currentSlide: _this.props.initialSlide,
      targetSlide: _this.props.initialSlide ? _this.props.initialSlide : 0,
      slideCount: import_react6.default.Children.count(_this.props.children)
    });
    _this.callbackTimers = [];
    _this.clickable = true;
    _this.debouncedResize = null;
    var ssrState = _this.ssrInit();
    _this.state = _objectSpread2(_objectSpread2({}, _this.state), ssrState);
    return _this;
  }
  _inherits(InnerSlider2, _React$Component);
  return _createClass(InnerSlider2, [{
    key: "didPropsChange",
    value: function didPropsChange(prevProps) {
      var setTrackStyle = false;
      for (var _i3 = 0, _Object$keys = Object.keys(this.props); _i3 < _Object$keys.length; _i3++) {
        var key = _Object$keys[_i3];
        if (!prevProps.hasOwnProperty(key)) {
          setTrackStyle = true;
          break;
        }
        if (_typeof(prevProps[key]) === "object" || typeof prevProps[key] === "function" || isNaN(prevProps[key])) {
          continue;
        }
        if (prevProps[key] !== this.props[key]) {
          setTrackStyle = true;
          break;
        }
      }
      return setTrackStyle || import_react6.default.Children.count(this.props.children) !== import_react6.default.Children.count(prevProps.children);
    }
  }]);
}(import_react6.default.Component);

// node_modules/@ant-design/react-slick/es/slider.js
var import_json2mq = __toESM(require_json2mq());
function _callSuper5(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
var Slider = function(_React$Component) {
  function Slider2(props) {
    var _this;
    _classCallCheck(this, Slider2);
    _this = _callSuper5(this, Slider2, [props]);
    _defineProperty(_this, "innerSliderRefHandler", function(ref) {
      return _this.innerSlider = ref;
    });
    _defineProperty(_this, "slickPrev", function() {
      return _this.innerSlider.slickPrev();
    });
    _defineProperty(_this, "slickNext", function() {
      return _this.innerSlider.slickNext();
    });
    _defineProperty(_this, "slickGoTo", function(slide) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      return _this.innerSlider.slickGoTo(slide, dontAnimate);
    });
    _defineProperty(_this, "slickPause", function() {
      return _this.innerSlider.pause("paused");
    });
    _defineProperty(_this, "slickPlay", function() {
      return _this.innerSlider.autoPlay("play");
    });
    _this.state = {
      breakpoint: null
    };
    _this._responsiveMediaHandlers = [];
    return _this;
  }
  _inherits(Slider2, _React$Component);
  return _createClass(Slider2, [{
    key: "media",
    value: function media(query, handler) {
      var mql = window.matchMedia(query);
      var listener = function listener2(_ref) {
        var matches = _ref.matches;
        if (matches) {
          handler();
        }
      };
      mql.addListener(listener);
      listener(mql);
      this._responsiveMediaHandlers.push({
        mql,
        query,
        listener
      });
    }
    // handles responsive breakpoints
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      if (this.props.responsive) {
        var breakpoints = this.props.responsive.map(function(breakpt) {
          return breakpt.breakpoint;
        });
        breakpoints.sort(function(x, y) {
          return x - y;
        });
        breakpoints.forEach(function(breakpoint, index) {
          var bQuery;
          if (index === 0) {
            bQuery = (0, import_json2mq.default)({
              minWidth: 0,
              maxWidth: breakpoint
            });
          } else {
            bQuery = (0, import_json2mq.default)({
              minWidth: breakpoints[index - 1] + 1,
              maxWidth: breakpoint
            });
          }
          canUseDOM() && _this2.media(bQuery, function() {
            _this2.setState({
              breakpoint
            });
          });
        });
        var query = (0, import_json2mq.default)({
          minWidth: breakpoints.slice(-1)[0]
        });
        canUseDOM() && this.media(query, function() {
          _this2.setState({
            breakpoint: null
          });
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._responsiveMediaHandlers.forEach(function(obj) {
        obj.mql.removeListener(obj.listener);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var settings;
      var newProps;
      if (this.state.breakpoint) {
        newProps = this.props.responsive.filter(function(resp) {
          return resp.breakpoint === _this3.state.breakpoint;
        });
        settings = newProps[0].settings === "unslick" ? "unslick" : _objectSpread2(_objectSpread2(_objectSpread2({}, default_props_default), this.props), newProps[0].settings);
      } else {
        settings = _objectSpread2(_objectSpread2({}, default_props_default), this.props);
      }
      if (settings.centerMode) {
        if (settings.slidesToScroll > 1 && true) {
          console.warn("slidesToScroll should be equal to 1 in centerMode, you are using ".concat(settings.slidesToScroll));
        }
        settings.slidesToScroll = 1;
      }
      if (settings.fade) {
        if (settings.slidesToShow > 1 && true) {
          console.warn("slidesToShow should be equal to 1 when fade is true, you're using ".concat(settings.slidesToShow));
        }
        if (settings.slidesToScroll > 1 && true) {
          console.warn("slidesToScroll should be equal to 1 when fade is true, you're using ".concat(settings.slidesToScroll));
        }
        settings.slidesToShow = 1;
        settings.slidesToScroll = 1;
      }
      var children = import_react7.default.Children.toArray(this.props.children);
      children = children.filter(function(child) {
        if (typeof child === "string") {
          return !!child.trim();
        }
        return !!child;
      });
      if (settings.variableWidth && (settings.rows > 1 || settings.slidesPerRow > 1)) {
        console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1");
        settings.variableWidth = false;
      }
      var newChildren = [];
      var currentWidth = null;
      for (var i = 0; i < children.length; i += settings.rows * settings.slidesPerRow) {
        var newSlide = [];
        for (var j = i; j < i + settings.rows * settings.slidesPerRow; j += settings.slidesPerRow) {
          var row = [];
          for (var k = j; k < j + settings.slidesPerRow; k += 1) {
            if (settings.variableWidth && children[k].props.style) {
              currentWidth = children[k].props.style.width;
            }
            if (k >= children.length) break;
            row.push(import_react7.default.cloneElement(children[k], {
              key: 100 * i + 10 * j + k,
              tabIndex: -1,
              style: {
                width: "".concat(100 / settings.slidesPerRow, "%"),
                display: "inline-block"
              }
            }));
          }
          newSlide.push(import_react7.default.createElement("div", {
            key: 10 * i + j
          }, row));
        }
        if (settings.variableWidth) {
          newChildren.push(import_react7.default.createElement("div", {
            key: i,
            style: {
              width: currentWidth
            }
          }, newSlide));
        } else {
          newChildren.push(import_react7.default.createElement("div", {
            key: i
          }, newSlide));
        }
      }
      if (settings === "unslick") {
        var className = "regular slider " + (this.props.className || "");
        return import_react7.default.createElement("div", {
          className
        }, children);
      } else if (newChildren.length <= settings.slidesToShow && !settings.infinite) {
        settings.unslick = true;
      }
      return import_react7.default.createElement(InnerSlider, _extends({
        style: this.props.style,
        ref: this.innerSliderRefHandler
      }, filterSettings(settings)), newChildren);
    }
  }]);
}(import_react7.default.Component);

// node_modules/@ant-design/react-slick/es/index.js
var es_default = Slider;

export {
  debounce,
  es_default
};
//# sourceMappingURL=chunk-GH2MBEPQ.js.map
