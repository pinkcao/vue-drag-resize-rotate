(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-drag-resize-rotate"] = factory(require("vue"));
	else
		root["vue-drag-resize-rotate"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0d93":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_vueDragResizeRotate_vue_vue_type_style_index_0_id_321a4480_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("faf3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_vueDragResizeRotate_vue_vue_type_style_index_0_id_321a4480_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_vueDragResizeRotate_vue_vue_type_style_index_0_id_321a4480_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "faf3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./packages/vueDragResizeRotate/vueDragResizeRotate.vue?vue&type=template&id=321a4480


function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    class: ["vdr", _ctx.active || $props.isActive ? 'active' : 'inactive'],
    style: { ...$options.style, transform: 'rotateZ(' + $props.deg + 'Deg)' },
    ref: $options.defineCurrent,
    tabIndex: "-1",
    onClick: _cache[3] || (_cache[3] = $event => ($options.clickSon($event))),
    onMousedown: _cache[4] || (_cache[4] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => ($options.bodyDown($event)), ["stop","prevent"])),
    onTouchstart: _cache[5] || (_cache[5] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => ($options.bodyDown($event)), ["stop","prevent"]))
  }, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default"),
    (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($props.sticks, (stick, key) => {
      return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
        key: key,
        class: ["vdr-stick", ['vdr-stick-' + stick, $props.isResizable ? '' : 'not-resizable']],
        onMousedown: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => ($options.stickDown(stick, $event)), ["stop","prevent"]),
        onTouchstart: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => ($options.stickDown(stick, $event)), ["stop","prevent"]),
        style: $options.vdrStick(stick)
      }, null, 46, ["onMousedown", "onTouchstart"]))
    }), 128)),
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
      class: ["vdr-stick", ['vdr-stick-' + 'ro', $props.isRotatable ? '' : 'not-rotatable']],
      onMousedown: _cache[1] || (_cache[1] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => ($options.rotateDown($event)), ["stop","prevent"])),
      onTouchstart: _cache[2] || (_cache[2] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => ($options.rotateDown($event)), ["stop","prevent"])),
      style: $options.vdrStick('ro'),
      ref: $options.defineRo
    }, null, 38)
  ], 38))
}
// CONCATENATED MODULE: ./packages/vueDragResizeRotate/vueDragResizeRotate.vue?vue&type=template&id=321a4480

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./packages/vueDragResizeRotate/vueDragResizeRotate.vue?vue&type=script&lang=js



const stickSize = 8
const styleMapping = {
  y: {
    t: 'top',
    m: 'marginTop',
    b: 'bottom',
    r: 'marginTop'
  },
  x: {
    l: 'left',
    m: 'marginLeft',
    r: 'right',
    o: 'marginLeft'
  }
}
/* harmony default export */ var vueDragResizeRotatevue_type_script_lang_js = ({
  name: 'vue-drag-resize-rotate',
  emits: [
    'rotating',
    'rotatestop',
    'resizing',
    'resizestop',
    'dragging',
    'dragstop',
    'clicked',
    'activated',
    'deactivated'
  ],
  props: {
    deg: {
      type: Number,
      default: 0
    },
    item: {},
    parentScaleX: {
      type: Number,
      default: 1
    },
    parentScaleY: {
      type: Number,
      default: 1
    },
    isActive: {
      type: Boolean,
      default: false
    },
    preventActiveBehavior: {
      type: Boolean,
      default: false
    },
    isRotatable: {
      type: Boolean,
      default: true
    },
    isDraggable: {
      type: Boolean,
      default: true
    },
    isResizable: {
      type: Boolean,
      default: true
    },
    aspectRatio: {
      type: Boolean,
      default: false
    },
    parentLimitation: {
      type: Boolean,
      default: false
    },
    parentW: {
      type: Number,
      default: 0,
      validator: function (val) {
        return val >= 0
      }
    },
    parentH: {
      type: Number,
      default: 0,
      validator: function (val) {
        return val >= 0
      }
    },
    w: {
      type: Number,
      default: 100,
      validator: function (val) {
        return val > 0
      }
    },
    h: {
      type: Number,
      default: 30,
      validator: function (val) {
        return val > 0
      }
    },
    minw: {
      type: Number,
      default: 50,
      validator: function (val) {
        return val > 0
      }
    },
    minh: {
      type: Number,
      default: 10,
      validator: function (val) {
        return val > 0
      }
    },
    x: {
      type: Number,
      default: 0,
      validator: function (val) {
        return typeof val === 'number'
      }
    },
    y: {
      type: Number,
      default: 0,
      validator: function (val) {
        return typeof val === 'number'
      }
    },
    z: {
      type: [String, Number],
      default: 'auto',
      validator: function (val) {
        let valid = typeof val === 'string' ? val === 'auto' : val >= 0
        return valid
      }
    },
    dragHandle: {
      type: String,
      default: null
    },
    dragCancel: {
      type: String,
      default: null
    },
    sticks: {
      type: Array,
      default: function () {
        return ['tl', 'tm', 'tr', 'mr', 'br', 'bm', 'bl', 'ml']
      }
    },
    aspectRatioSticks: {
      type: Array,
      default: function () {
        return ['tl', 'tm', 'tr', 'mr', 'br', 'bm', 'bl', 'ml']
      }
    },
    axis: {
      type: String,
      default: 'both',
      validator: function (val) {
        return ['x', 'y', 'both', 'none'].indexOf(val) !== -1
      }
    },
    snapToGrid: {
      type: Boolean,
      default: false
    },
    gridX: {
      type: Number,
      default: 50,
      validator(val) {
        return val > 0
      }
    },
    gridY: {
      type: Number,
      default: 50,
      validator(val) {
        return val > 0
      }
    },
    type: {}
  },
  data: function () {
    return {
      rawDeg: this.deg,
      rotateCenter: [],
      rotateEnd: [],
      rotateStart: [],
      active: this.isActive,
      rawWidth: this.w,
      rawHeight: this.h,
      rawLeft: this.x,
      rawTop: this.y,
      rawRight: null,
      rawBottom: null,
      zIndex: this.z,
      aspectFactor: this.w / this.h,
      parentWidth: null,
      parentHeight: null,
      left: this.x,
      top: this.y,
      right: null,
      bottom: null,
      minWidth: this.minw,
      minHeight: this.minh,
      currentFixArray: [],
      currentFixSpot: [],
      ratioStick: null,
      finalFixArray: [],

      current: null,
      ro: null
    }
  },
  // setup(props, context) {
  //     let rawDeg = this.deg
  //     let rotateCenter= []
  //     let rotateEnd= []
  //     let rotateStart= []
  //     let active= this.isActive
  //     let rawWidth= this.w
  //     let rawHeight= this.h
  //     let rawLeft= this.x
  //     let rawTop= this.y
  //     let rawRight= null
  //     let rawBottom= null
  //     let zIndex= this.z
  //     let aspectFactor= this.w / this.h
  //     let parentWidth= null
  //     let parentHeight= null
  //     let left= this.x
  //     let top= this.y
  //     let right= null
  //     let bottom= null
  //     let minWidth= this.minw
  //     let minHeight= this.minh
  //     let currentFixArray= []
  //     let currentFixSpot= []
  //     let ratioStick= null
  //     let finalFixArray= []
  //   //set the sticks refs
  //   let current = ref(null)
  //   let ro = ref(null)
  //   onMounted(() => {
  //     console.log(current)
  //     console.log(current.value)
  //   })
  //   return {
  //     current,
  //     ro
  //   }
  // },
  created: function () {
    this.stickDrag = false
    this.bodyDrag = false
    this.rotateDrag = false
    this.stickAxis = null
    this.stickStartPos = { mouseX: 0, mouseY: 0, x: 0, y: 0, w: 0, h: 0 }
    this.limits = {
      minLeft: null,
      maxLeft: null,
      minRight: null,
      maxRight: null,
      minTop: null,
      maxTop: null,
      minBottom: null,
      maxBottom: null
    }
    this.currentStick = []
  },
  mounted: function () {
    this.calcuFather()
    document.documentElement.addEventListener('mousemove', this.move)
    document.documentElement.addEventListener('mouseup', this.up)
    document.documentElement.addEventListener('mouseleave', this.up)
    document.documentElement.addEventListener('mousedown', this.deselect)
    document.documentElement.addEventListener('touchmove', this.move, true)
    document.documentElement.addEventListener('touchend touchcancel', this.up, true)
    document.documentElement.addEventListener('touchstart', this.up, true)
    this.getCenter()
    if (this.dragHandle) {
      let dragHandles = Array.prototype.slice.call(this.$el.querySelectorAll(this.dragHandle))
      for (let i in dragHandles) {
        dragHandles[i].setAttribute('data-drag-handle', this._uid)
      }
    }
    if (this.dragCancel) {
      let cancelHandles = Array.prototype.slice.call(this.$el.querySelectorAll(this.dragCancel))
      for (let i in cancelHandles) {
        cancelHandles[i].setAttribute('data-drag-cancel', this._uid)
      }
    }
  },
  beforeUnmount: function () {
    document.documentElement.removeEventListener('mousemove', this.move)
    document.documentElement.removeEventListener('mouseup', this.up)
    document.documentElement.removeEventListener('mouseleave', this.up)
    document.documentElement.removeEventListener('mousedown', this.deselect)
    document.documentElement.removeEventListener('touchmove', this.move, true)
    document.documentElement.removeEventListener('touchend touchcancel', this.up, true)
    document.documentElement.removeEventListener('touchstart', this.up, true)
  },
  methods: {
    debounce(method, context, params) {
      clearTimeout(method.timeout)
      method.timeout = setTimeout(function () {
        method.call(context, params)
      }, 300)
    },
    defineCurrent(el) {
      if (el) {
        this.current = el
      }
    },
    defineRo(el) {
      if (el) {
        this.ro = el
      }
    },
    getCenter() {
      let el = this.current
      this.rotateCenter = [
        el.getBoundingClientRect().left + el.getBoundingClientRect().width / 2,
        el.getBoundingClientRect().top + el.getBoundingClientRect().height / 2
      ]
    },
    clickSon(e) {
      e.target.focus()
      e.stopPropagation()
    },
    calcuFather() {
      this.parentElement = this.$el.parentNode
      this.parentWidth = this.parentW ? this.parentW : this.parentElement.clientWidth
      this.parentHeight = this.parentH ? this.parentH : this.parentElement.clientHeight
      this.rawRight = this.parentWidth - this.rawWidth - this.rawLeft
      this.rawBottom = this.parentHeight - this.rawHeight - this.rawTop
    },
    deselect() {
      if (this.preventActiveBehavior) {
        return
      }
      this.active = false
    },
    move(ev) {
      if (!this.stickDrag && !this.bodyDrag && !this.rotateDrag) {
        return
      }
      ev.stopPropagation()
      if (this.stickDrag) {
        this.stickMove(ev)
      }
      if (this.bodyDrag) {
        this.bodyMove(ev)
      }
      if (this.rotateDrag) {
        this.rotateMove(ev)
      }
    },
    up(ev) {
      if (this.stickDrag) {
        this.stickUp(ev)
      }
      if (this.bodyDrag) {
        this.bodyUp(ev)
      }
      if (this.rotateDrag) {
        this.rotateUp(ev)
      }
    },
    bodyDown: function (ev) {
      let target = ev.target || ev.srcElement
      if (!this.preventActiveBehavior) {
        this.active = true
      }
      if (ev.button && ev.button !== 0) {
        return
      }
      this.$emit('clicked', ev)
      if (!this.isDraggable || !this.active) {
        return
      }
      if (this.dragHandle && target.getAttribute('data-drag-handle') !== this._uid.toString()) {
        return
      }
      if (this.dragCancel && target.getAttribute('data-drag-cancel') === this._uid.toString()) {
        return
      }
      this.bodyDrag = true
      this.stickStartPos.mouseX = ev.pageX || ev.touches[0].pageX
      this.stickStartPos.mouseY = ev.pageY || ev.touches[0].pageY
      this.stickStartPos.left = this.left
      this.stickStartPos.right = this.right
      this.stickStartPos.top = this.top
      this.stickStartPos.bottom = this.bottom
      if (this.parentLimitation) {
        this.limits = this.calcDragLimitation()
      }
    },
    calcDragLimitation() {
      const parentWidth = this.parentWidth
      const parentHeight = this.parentHeight
      return {
        minLeft: 0,
        maxLeft: parentWidth - this.width,
        minRight: 0,
        maxRight: parentWidth - this.width,
        minTop: 0,
        maxTop: parentHeight - this.height,
        minBottom: 0,
        maxBottom: parentHeight - this.height
      }
    },
    bodyMove(ev) {
      const stickStartPos = this.stickStartPos
      let delta = {
        x:
          (this.axis !== 'y' && this.axis !== 'none' ? stickStartPos.mouseX - (ev.pageX || ev.touches[0].pageX) : 0) /
          this.parentScaleX,
        y:
          (this.axis !== 'x' && this.axis !== 'none' ? stickStartPos.mouseY - (ev.pageY || ev.touches[0].pageY) : 0) /
          this.parentScaleY
      }
      this.rawTop = stickStartPos.top - delta.y
      this.rawBottom = stickStartPos.bottom + delta.y
      this.rawLeft = stickStartPos.left - delta.x
      this.rawRight = stickStartPos.right + delta.x
      if (this.snapToGrid) {
        let alignTop = true
        let alignLeft = true

        let diffT = this.rawTop - Math.floor(this.rawTop / this.gridY) * this.gridY
        let diffB =
          this.parentHeight -
          this.rawBottom -
          Math.floor((this.parentHeight - this.rawBottom) / this.gridY) * this.gridY
        let diffL = this.rawLeft - Math.floor(this.rawLeft / this.gridX) * this.gridX
        let diffR =
          this.parentWidth - this.rawRight - Math.floor((this.parentWidth - this.rawRight) / this.gridX) * this.gridX

        if (diffT > this.gridY / 2) {
          diffT -= this.gridY
        }
        if (diffB > this.gridY / 2) {
          diffB -= this.gridY
        }
        if (diffL > this.gridX / 2) {
          diffL -= this.gridX
        }
        if (diffR > this.gridX / 2) {
          diffR -= this.gridX
        }

        if (Math.abs(diffB) < Math.abs(diffT)) {
          alignTop = false
        }
        if (Math.abs(diffR) < Math.abs(diffL)) {
          alignLeft = false
        }

        this.rawTop -= alignTop ? diffT : diffB
        this.rawBottom = this.parentHeight - this.height - this.rawTop
        this.rawLeft -= alignLeft ? diffL : diffR
        this.rawRight = this.parentWidth - this.width - this.rawLeft
      }

      this.$emit('dragging', this.rect)
    },
    bodyUp() {
      this.bodyDrag = false
      this.$emit('dragging', this.rect)
      this.$emit('dragstop', this.rect)
      this.stickStartPos = { mouseX: 0, mouseY: 0, x: 0, y: 0, w: 0, h: 0 }
      this.limits = {
        minLeft: null,
        maxLeft: null,
        minRight: null,
        maxRight: null,
        minTop: null,
        maxTop: null,
        minBottom: null,
        maxBottom: null
      }
    },
    rotateDown: function (ev) {
      if (!this.isRotatable || !this.active) {
        return
      }
      this.getCenter()
      this.rotateDrag = true
      this.rotateStart = [ev.clientX || ev.touches[0].pageX, ev.clientY || ev.touches[0].pageY]
    },
    rotateMove(event) {
      var el = this.current
      let a = this.calculLength(
        this.rotateStart[0],
        event.clientX || event.touches[0].pageX,
        this.rotateStart[1],
        event.clientY || event.touches[0].pageY
      )
      let c = this.calculLength(this.rotateStart[0], this.rotateCenter[0], this.rotateStart[1], this.rotateCenter[1])
      let b = this.calculLength(
        this.rotateCenter[0],
        event.clientX || event.touches[0].pageX,
        this.rotateCenter[1],
        event.clientY || event.touches[0].pageY
      )
      let direct =
        this.calculClock(
          this.rotateCenter[0],
          this.rotateCenter[1],
          this.rotateStart[0],
          this.rotateStart[1],
          event.clientX || event.touches[0].pageX,
          event.clientY || event.touches[0].pageY
        ) >= 0
      let rawDeg = this.calculrawDegA(a, b, c)
      rawDeg = Math.abs(rawDeg)
      //determine clockwise
      if (!direct) {
        rawDeg = 0 - rawDeg
      }
      var srawDeg = this.rawDeg
      srawDeg += rawDeg
      Math.abs(srawDeg) > 360 ? (srawDeg %= 360) : true
      this.rawDeg = srawDeg
      this.rotateStart[0] = event.clientX || event.touches[0].pageX
      this.rotateStart[1] = event.clientY || event.touches[0].pageY
      this.$emit('rotating', this.rawDeg)
    },
    rotateUp() {
      this.rotateDrag = false
      this.$emit('rotating', this.rawDeg)
      this.$emit('rotatestop', this.rawDeg)
    },
    stickDown: function (stick, ev) {
      if (!this.isResizable || !this.active) {
        return
      }
      this.stickDrag = true
      this.currentFixArray = [this.ro.getBoundingClientRect().x, this.ro.getBoundingClientRect().y]
      switch (stick) {
        case 'tl':
          this.current.style.transformOrigin = 'bottom right'
          break
        case 'tm':
          this.current.style.transformOrigin = 'bottom center'
          break
        case 'tr':
          this.current.style.transformOrigin = 'bottom left'
          break
        case 'mr':
          this.current.style.transformOrigin = 'left center'
          break
        case 'br':
          this.current.style.transformOrigin = 'top left'
          break
        case 'bm':
          this.current.style.transformOrigin = 'top center'
          break
        case 'bl':
          this.current.style.transformOrigin = 'top right'
          break
        case 'ml':
          this.current.style.transformOrigin = 'right center'
          break
      }
      // eslint-disable-next-line prettier/prettier
      if (this.ro[0] === undefined) {
        this.finalFixArray = [
          this.currentFixArray[0] - this.ro.getBoundingClientRect().x,
          this.currentFixArray[1] - this.ro.getBoundingClientRect().y
        ]
      } else {
        this.finalFixArray = [
          this.currentFixArray[0] - this.ro[0].getBoundingClientRect().x,
          this.currentFixArray[1] - this.ro[0].getBoundingClientRect().y
        ]
      }
      this.left = this.left + this.finalFixArray[0] / this.parentScaleX
      this.right = this.right - this.finalFixArray[0] / this.parentScaleX
      this.top = this.top + this.finalFixArray[1] / this.parentScaleY
      this.bottom = this.bottom - this.finalFixArray[1] / this.parentScaleY
      this.stickStartPos.mouseX = ev.pageX || ev.touches[0].pageX
      this.stickStartPos.mouseY = ev.pageY || ev.touches[0].pageY
      this.stickStartPos.left = this.left
      this.stickStartPos.right = this.right
      this.stickStartPos.top = this.top
      this.stickStartPos.bottom = this.bottom
      this.currentStick = stick.split('')
      this.ratioStick = stick
      this.stickAxis = null
      switch (this.currentStick[0]) {
        case 'b':
          this.stickAxis = 'y'
          break
        case 't':
          this.stickAxis = 'y'
          break
      }
      switch (this.currentStick[1]) {
        case 'r':
          this.stickAxis = this.stickAxis === 'y' ? 'xy' : 'x'
          break
        case 'l':
          this.stickAxis = this.stickAxis === 'y' ? 'xy' : 'x'
          break
      }
      this.limits = this.calcResizeLimitation()
    },
    calcResizeLimitation() {
      let minw = this.minWidth
      let minh = this.minHeight
      const aspectFactor = this.aspectFactor
      const width = this.width
      const height = this.height
      const bottom = this.bottom
      const top = this.top
      const left = this.left
      const right = this.right
      const stickAxis = this.stickAxis
      const parentLim = this.parentLimitation ? 0 : null
      if (this.aspectRatio) {
        if (minw / minh > aspectFactor) {
          minh = minw / aspectFactor
        } else {
          minw = aspectFactor * minh
        }
      }
      let limits = {
        minLeft: parentLim,
        maxLeft: left + (width - minw),
        minRight: parentLim,
        maxRight: right + (width - minw),
        minTop: parentLim,
        maxTop: top + (height - minh),
        minBottom: parentLim,
        maxBottom: bottom + (height - minh)
      }
      if (this.aspectRatio) {
        const aspectLimits = {
          minLeft: left - Math.min(top, bottom) * aspectFactor * 2,
          maxLeft: left + ((height - minh) / 2) * aspectFactor * 2,
          minRight: right - Math.min(top, bottom) * aspectFactor * 2,
          maxRight: right + ((height - minh) / 2) * aspectFactor * 2,
          minTop: top - (Math.min(left, right) / aspectFactor) * 2,
          maxTop: top + ((width - minw) / 2 / aspectFactor) * 2,
          minBottom: bottom - (Math.min(left, right) / aspectFactor) * 2,
          maxBottom: bottom + ((width - minw) / 2 / aspectFactor) * 2
        }
        if (stickAxis === 'x') {
          limits = {
            minLeft: Math.max(limits.minLeft, aspectLimits.minLeft),
            maxLeft: Math.min(limits.maxLeft, aspectLimits.maxLeft),
            minRight: Math.max(limits.minRight, aspectLimits.minRight),
            maxRight: Math.min(limits.maxRight, aspectLimits.maxRight)
          }
        } else if (stickAxis === 'y') {
          limits = {
            minTop: Math.max(limits.minTop, aspectLimits.minTop),
            maxTop: Math.min(limits.maxTop, aspectLimits.maxTop),
            minBottom: Math.max(limits.minBottom, aspectLimits.minBottom),
            maxBottom: Math.min(limits.maxBottom, aspectLimits.maxBottom)
          }
        }
      }
      return limits
    },
    stickMove(ev) {
      if ((ev.pageX || ev.touches != undefined) && (ev.pageY || ev.touches != undefined)) {
        const stickStartPos = this.stickStartPos
        const delta = {
          x: (stickStartPos.mouseX - (ev.pageX || ev.touches[0].pageX)) / this.parentScaleX,
          y: (stickStartPos.mouseY - (ev.pageY || ev.touches[0].pageY)) / this.parentScaleY
        }
        let tempDeltaX =
          Math.cos((-this.deg * Math.PI) / 180) * delta.x - Math.sin((-this.deg * Math.PI) / 180) * delta.y
        let tempDeltaY =
          Math.sin((-this.deg * Math.PI) / 180) * delta.x + Math.cos((-this.deg * Math.PI) / 180) * delta.y
        delta.x = tempDeltaX
        delta.y = tempDeltaY
        switch (this.currentStick[0]) {
          case 'b':
            this.rawBottom = stickStartPos.bottom + delta.y
            break
          case 't':
            this.rawTop = stickStartPos.top - delta.y
            break
        }
        switch (this.currentStick[1]) {
          case 'r':
            this.rawRight = stickStartPos.right + delta.x
            break
          case 'l':
            this.rawLeft = stickStartPos.left - delta.x
            break
        }
        this.$emit('resizing', this.rect)
      }
    },
    stickUp() {
      this.stickDrag = false
      this.stickStartPos = {
        mouseX: 0,
        mouseY: 0,
        x: 0,
        y: 0,
        w: 0,
        h: 0
      }
      this.limits = {
        minLeft: null,
        maxLeft: null,
        minRight: null,
        maxRight: null,
        minTop: null,
        maxTop: null,
        minBottom: null,
        maxBottom: null
      }
      if (this.ro[0] === undefined) {
        this.currentFixArray = [this.ro.getBoundingClientRect().x, this.ro.getBoundingClientRect().y]
        this.current.style.transformOrigin = 'center center'
        this.finalFixArray = [
          this.currentFixArray[0] - this.ro.getBoundingClientRect().x,
          this.currentFixArray[1] - this.ro.getBoundingClientRect().y
        ]
      } else {
        this.currentFixArray = [this.ro[0].getBoundingClientRect().x, this.ro[0].getBoundingClientRect().y]
        this.current.style.transformOrigin = 'center center'
        this.finalFixArray = [
          this.currentFixArray[0] - this.ro[0].getBoundingClientRect().x,
          this.currentFixArray[1] - this.ro[0].getBoundingClientRect().y
        ]
      }
      this.left = this.left + this.finalFixArray[0] / this.parentScaleX
      this.right = this.right - this.finalFixArray[0] / this.parentScaleX
      this.top = this.top + this.finalFixArray[1] / this.parentScaleY
      this.bottom = this.bottom - this.finalFixArray[1] / this.parentScaleY
      // this.rawTop = this.top
      // this.rawBottom = this.bottom
      // this.rawLeft = this.left
      // this.rawRight = this.right
      this.stickAxis = null
      this.$emit('resizing', this.rect)
      this.$emit('resizestop', this.rect)
    },
    aspectRatioCorrection() {
      if (!this.aspectRatioStickFlag) {
        return
      }
      const bottom = this.bottom
      const top = this.top
      const left = this.left
      const right = this.right
      const width = this.width
      const height = this.height
      const aspectFactor = this.aspectFactor
      const currentStick = this.currentStick
      if (width / height > aspectFactor) {
        let newWidth = aspectFactor * height
        if (currentStick[1] === 'l') {
          this.left = left + width - newWidth
        } else {
          this.right = right + width - newWidth
        }
      } else {
        let newHeight = width / aspectFactor
        if (currentStick[0] === 't') {
          this.top = top + height - newHeight
        } else {
          this.bottom = bottom + height - newHeight
        }
      }
    },
    //朴素的两点间距离公式
    calculLength(x1, x2, y1, y2) {
      return Math.hypot(x1 - x2, y1 - y2)
    },
    //余弦定理求角度
    calculrawDegA(a, b, c) {
      return Math.acos((b * b + c * c - a * a) / (2 * b * c)) * (180 / Math.PI)
    },
    //六个点坐标，通过矢量叉积获取旋转方向
    calculClock(x1, y1, x2, y2, x3, y3) {
      return (x2 - x1) * (y3 - y1) - (y2 - y1) * (x3 - x1)
    }
  },
  computed: {
    currentHalfWidth() {
      return {
        'font-size': '30px',
        position: 'absolute',
        top: '-50px',
        cursor: 'pointer',
        left: '50%',
        marginLeft: '-12px',
        color: '#888888'
      }
    },
    style() {
      return {
        top: this.top + 'px',
        left: this.left + 'px',
        width: this.width + 'px',
        height: this.height + 'px',
        zIndex: this.zIndex
      }
    },
    vdrStick() {
      return stick => {
        const stickStyle = {
          width: `${stickSize / this.parentScaleX}px`,
          height: `${stickSize / this.parentScaleY}px`
        }

        stickStyle[styleMapping.y[stick[0]]] = `${stickSize / this.parentScaleX / -2}px`
        stickStyle[styleMapping.x[stick[1]]] = `${stickSize / this.parentScaleX / -2}px`

        return stickStyle
      }
    },
    width() {
      return this.parentWidth - this.left - this.right
    },
    height() {
      return this.parentHeight - this.top - this.bottom
    },
    rect() {
      return {
        left: Math.round(this.left),
        top: Math.round(this.top),
        width: Math.round(this.width),
        height: Math.round(this.height)
      }
    },
    aspectRatioStickFlag() {
      if (this.aspectRatioSticks.indexOf(this.ratioStick) >= 0 && this.aspectRatio) {
        return true
      }
      return false
    }
  },
  watch: {
    rawLeft(newLeft) {
      if (this.aspectRatioStickFlag == false) {
        this.aspectFactor = this.width / this.height
      }
      const limits = this.limits
      const stickAxis = this.stickAxis
      const aspectFactor = this.aspectFactor
      const aspectRatio = this.aspectRatio
      const left = this.left
      const bottom = this.bottom
      const top = this.top
      if (limits.minLeft !== null && newLeft < limits.minLeft) {
        newLeft = limits.minLeft
      } else if (limits.maxLeft !== null && limits.maxLeft < newLeft) {
        newLeft = limits.maxLeft
      }
      if (this.aspectRatioStickFlag && stickAxis === 'x') {
        const delta = left - newLeft
        this.rawTop = top - delta / aspectFactor / 2
        this.rawBottom = bottom - delta / aspectFactor / 2
      }
      this.left = newLeft
    },
    rawRight(newRight) {
      const limits = this.limits
      const stickAxis = this.stickAxis
      const aspectFactor = this.aspectFactor
      const aspectRatio = this.aspectRatio
      const right = this.right
      const bottom = this.bottom
      const top = this.top
      if (limits.minRight !== null && newRight < limits.minRight) {
        newRight = limits.minRight
      } else if (limits.maxRight !== null && limits.maxRight < newRight) {
        newRight = limits.maxRight
      }
      if (this.aspectRatioStickFlag && stickAxis === 'x') {
        const delta = right - newRight
        this.rawTop = top - delta / aspectFactor / 2
        this.rawBottom = bottom - delta / aspectFactor / 2
      }
      this.right = newRight
    },
    rawTop(newTop) {
      if (this.aspectRatioStickFlag == false) {
        this.aspectFactor = this.width / this.height
      }
      const limits = this.limits
      const stickAxis = this.stickAxis
      const aspectFactor = this.aspectFactor
      const aspectRatio = this.aspectRatio
      const right = this.right
      const left = this.left
      const top = this.top
      if (limits.minTop !== null && newTop < limits.minTop) {
        newTop = limits.minTop
      } else if (limits.maxTop !== null && limits.maxTop < newTop) {
        newTop = limits.maxTop
      }
      if (this.aspectRatioStickFlag && stickAxis === 'y') {
        const delta = top - newTop
        this.rawLeft = left - (delta * aspectFactor) / 2
        this.rawRight = right - (delta * aspectFactor) / 2
      }
      this.top = newTop
    },
    rawBottom(newBottom) {
      const limits = this.limits
      const stickAxis = this.stickAxis
      const aspectFactor = this.aspectFactor
      const aspectRatio = this.aspectRatio
      const right = this.right
      const left = this.left
      const bottom = this.bottom
      if (limits.minBottom !== null && newBottom < limits.minBottom) {
        newBottom = limits.minBottom
      } else if (limits.maxBottom !== null && limits.maxBottom < newBottom) {
        newBottom = limits.maxBottom
      }
      if (this.aspectRatioStickFlag && stickAxis === 'y') {
        const delta = bottom - newBottom
        this.rawLeft = left - (delta * aspectFactor) / 2
        this.rawRight = right - (delta * aspectFactor) / 2
      }
      this.bottom = newBottom
    },
    width() {
      this.aspectRatioCorrection()
    },
    height() {
      this.aspectRatioCorrection()
    },
    active(isActive) {
      if (isActive) {
        this.$emit('activated')
      } else {
        this.$emit('deactivated')
      }
    },
    isActive(val) {
      this.active = val
    },
    z(val) {
      if (val >= 0 || val === 'auto') {
        this.zIndex = val
      }
    },
    aspectRatio(val) {
      if (val) {
        this.aspectFactor = this.width / this.height
      }
    },
    minw(val) {
      if (val > 0 && val <= this.width) {
        this.minWidth = val
      }
    },
    minh(val) {
      if (val > 0 && val <= this.height) {
        this.minHeight = val
      }
    },
    x() {
      if (this.stickDrag || this.bodyDrag) {
        return
      }
      if (this.parentLimitation) {
        this.limits = this.calcDragLimitation()
      }
      let delta = this.x - this.left
      this.rawLeft = this.x
      this.rawRight = this.right - delta
    },
    y() {
      if (this.stickDrag || this.bodyDrag) {
        return
      }
      if (this.parentLimitation) {
        this.limits = this.calcDragLimitation()
      }
      let delta = this.y - this.top
      this.rawTop = this.y
      this.rawBottom = this.bottom - delta
    },
    w() {
      if (this.stickDrag || this.bodyDrag) {
        return
      }
      this.currentStick = ['m', 'r']
      this.stickAxis = 'x'
      if (this.parentLimitation) {
        this.limits = this.calcResizeLimitation()
      }
      let delta = this.width - this.w
      this.rawRight = this.right + delta
    },
    h() {
      if (this.stickDrag || this.bodyDrag) {
        return
      }
      this.currentStick = ['b', 'm']
      this.stickAxis = 'y'
      if (this.parentLimitation) {
        this.limits = this.calcResizeLimitation()
      }
      let delta = this.height - this.h
      this.rawBottom = this.bottom + delta
    },
    parentW(val) {
      this.right = val - this.width - this.left
      this.parentWidth = val
    },
    parentH(val) {
      this.bottom = val - this.height - this.top
      this.parentHeight = val
    }
  }
});

// CONCATENATED MODULE: ./packages/vueDragResizeRotate/vueDragResizeRotate.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./packages/vueDragResizeRotate/vueDragResizeRotate.vue?vue&type=style&index=0&id=321a4480&lang=css
var vueDragResizeRotatevue_type_style_index_0_id_321a4480_lang_css = __webpack_require__("0d93");

// CONCATENATED MODULE: ./packages/vueDragResizeRotate/vueDragResizeRotate.vue





vueDragResizeRotatevue_type_script_lang_js.render = render

/* harmony default export */ var vueDragResizeRotate = (vueDragResizeRotatevue_type_script_lang_js);
// CONCATENATED MODULE: ./packages/vueDragResizeRotate/index.js



// CONCATENATED MODULE: ./packages/index.js
// // 导入入口样式文件
// import './styles/index.scss'
// 导入所有组件

const components = {
  vueDragResizeRotate: vueDragResizeRotate
}
// 定义 install 方法，在Vue中注册组件。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  //判断是否已经注册
  if (install.installed) return
  //循环注册组件
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
}
// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
const API = {
  install,
  ...components
}
/* harmony default export */ var packages_0 = (API);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});
//# sourceMappingURL=vue-drag-resize-rotate.umd.js.map