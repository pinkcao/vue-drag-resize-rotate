<template>
  <div
    class="vdr"
    :style="{ ...style, transform: 'rotateZ(' + deg + 'Deg)' }"
    :ref="defineCurrent"
    tabIndex="-1"
    @click="clickSon($event)"
    :class="active || isActive ? 'active' : 'inactive'"
    @mousedown.stop.prevent="bodyDown($event)"
    @touchstart.stop.prevent="bodyDown($event)"
  >
    <slot></slot>
    <div
      v-for="(stick, key) in sticks"
      :key="key"
      class="vdr-stick"
      :class="['vdr-stick-' + stick, isResizable ? '' : 'not-resizable']"
      @mousedown.stop.prevent="stickDown(stick, $event)"
      @touchstart.stop.prevent="stickDown(stick, $event)"
      :style="vdrStick(stick)"
    ></div>
    <div
      class="vdr-stick"
      :class="['vdr-stick-' + 'ro', isRotatable ? '' : 'not-rotatable']"
      @mousedown.stop.prevent="rotateDown($event)"
      @touchstart.stop.prevent="rotateDown($event)"
      :style="vdrStick('ro')"
      :ref="defineRo"
    ></div>
    <!-- <span
      class="iconfont icon-rotate"
      :style="currentHalfWidth"
      v-show="isRotatable && active"
      @mousedown.stop.prevent="rotateDown($event)"
      @touchstart.stop.prevent="rotateDown($event)"
    ></span> -->
  </div>
</template>
<script>
import {ref, onMounted} from 'vue'

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
export default {
  name: 'vue-drag-resize-rotate',
  emits: ['rotating','rotatestop','resizing','resizestop','dragging','dragstop','clicked','activated','deactivated'],
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
      validator: function(val) {
        return val >= 0
      }
    },
    parentH: {
      type: Number,
      default: 0,
      validator: function(val) {
        return val >= 0
      }
    },
    w: {
      type: Number,
      default: 100,
      validator: function(val) {
        return val > 0
      }
    },
    h: {
      type: Number,
      default: 30,
      validator: function(val) {
        return val > 0
      }
    },
    minw: {
      type: Number,
      default: 50,
      validator: function(val) {
        return val > 0
      }
    },
    minh: {
      type: Number,
      default: 10,
      validator: function(val) {
        return val > 0
      }
    },
    x: {
      type: Number,
      default: 0,
      validator: function(val) {
        return typeof val === 'number'
      }
    },
    y: {
      type: Number,
      default: 0,
      validator: function(val) {
        return typeof val === 'number'
      }
    },
    z: {
      type: [String, Number],
      default: 'auto',
      validator: function(val) {
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
      default: function() {
        return ['tl', 'tm', 'tr', 'mr', 'br', 'bm', 'bl', 'ml']
      }
    },
    aspectRatioSticks: {
      type: Array,
      default: function() {
        return ['tl', 'tm', 'tr', 'mr', 'br', 'bm', 'bl', 'ml']
      }
    },
    axis: {
      type: String,
      default: 'both',
      validator: function(val) {
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
        return val > 0;
      }
    },
    gridY: {
      type: Number,
      default: 50,
      validator(val) {
        return val > 0;
      }
    },
    type: {}
  },
  data: function() {
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
      ro: null,
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
  created: function() { 
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
  mounted: function() {
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
  beforeUnmount: function() {
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
      method.timeout = setTimeout(function() {
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
      console.log(this.rotateCenter)
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
    bodyDown: function(ev) {
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
        let alignTop = true;
        let alignLeft = true;

        let diffT = this.rawTop - Math.floor(this.rawTop / this.gridY) * this.gridY;
        let diffB =
          this.parentHeight -
          this.rawBottom -
          Math.floor((this.parentHeight - this.rawBottom) / this.gridY) * this.gridY;
        let diffL = this.rawLeft - Math.floor(this.rawLeft / this.gridX) * this.gridX;
        let diffR =
          this.parentWidth -
          this.rawRight -
          Math.floor((this.parentWidth - this.rawRight) / this.gridX) * this.gridX;

        if (diffT > this.gridY / 2) {
          diffT -= this.gridY;
        }
        if (diffB > this.gridY / 2) {
          diffB -= this.gridY;
        }
        if (diffL > this.gridX / 2) {
          diffL -= this.gridX;
        }
        if (diffR > this.gridX / 2) {
          diffR -= this.gridX;
        }

        if (Math.abs(diffB) < Math.abs(diffT)) {
          alignTop = false;
        }
        if (Math.abs(diffR) < Math.abs(diffL)) {
          alignLeft = false;
        }

        this.rawTop -= alignTop ? diffT : diffB;
        this.rawBottom = this.parentHeight - this.height - this.rawTop;
        this.rawLeft -= alignLeft ? diffL : diffR;
        this.rawRight = this.parentWidth - this.width - this.rawLeft;
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
    rotateDown: function(ev){
      if (!this.isRotatable || !this.active) {
        return
      }
      this.getCenter()
      this.rotateDrag = true
      this.rotateStart = [ev.clientX || ev.touches[0].pageX, ev.clientY || ev.touches[0].pageY]
    },
    rotateMove(event){
        var el = this.current
        let a = this.calculLength(this.rotateStart[0], event.clientX || event.touches[0].pageX, this.rotateStart[1], event.clientY || event.touches[0].pageY)
        let c = this.calculLength(this.rotateStart[0], this.rotateCenter[0], this.rotateStart[1], this.rotateCenter[1])
        let b = this.calculLength(this.rotateCenter[0], event.clientX || event.touches[0].pageX, this.rotateCenter[1], event.clientY || event.touches[0].pageY)
        let direct = this.calculClock(this.rotateCenter[0], this.rotateCenter[1], this.rotateStart[0], this.rotateStart[1], event.clientX || event.touches[0].pageX, event.clientY || event.touches[0].pageY) >= 0
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
    rotateUp(){
      this.rotateDrag = false
      this.$emit('rotating', this.rawDeg)
      this.$emit('rotatestop', this.rawDeg)
    },
    stickDown: function(stick, ev) {
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
        this.finalFixArray = [this.currentFixArray[0] - this.ro.getBoundingClientRect().x, this.currentFixArray[1] - this.ro.getBoundingClientRect().y]
      } else {
        this.finalFixArray = [this.currentFixArray[0] - this.ro[0].getBoundingClientRect().x, this.currentFixArray[1] - this.ro[0].getBoundingClientRect().y]
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
        this.finalFixArray = [this.currentFixArray[0] - this.ro.getBoundingClientRect().x, this.currentFixArray[1] - this.ro.getBoundingClientRect().y]
      } else {
        this.currentFixArray = [this.ro[0].getBoundingClientRect().x, this.ro[0].getBoundingClientRect().y]
        this.current.style.transformOrigin = 'center center'
        this.finalFixArray = [this.currentFixArray[0] - this.ro[0].getBoundingClientRect().x, this.currentFixArray[1] - this.ro[0].getBoundingClientRect().y]
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
        // if (stick != 'ro') {
          stickStyle[styleMapping.y[stick[0]]] = `${stickSize / this.parentScaleX / -2}px`
          stickStyle[styleMapping.x[stick[1]]] = `${stickSize / this.parentScaleX / -2}px`
        // }
        // console.log(stickStyle)
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
    },
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
}
</script>
<style>

.vdr {
  position: absolute;
  box-sizing: border-box;
}
span.rotate {
  font-size: 20px;
  position: absolute;
  top: -30px;
  cursor: pointer;
  right: -30px;
  color: #000000;
}
.vdr-stick {
  box-sizing: border-box;
  position: absolute;
  font-size: 1px;
  background: #ffffff;
  border: 1px solid #6c6c6c;
  box-shadow: 0 0 2px #bbb;
}
.inactive .vdr-stick {
  display: none;
}
.vdr-stick-tl,
.vdr-stick-br {
  cursor: nwse-resize;
}
.vdr-stick-tm,
.vdr-stick-bm {
  left: 50%;
  cursor: ns-resize;
}
.vdr-stick-tr,
.vdr-stick-bl {
  cursor: nesw-resize;
}
.vdr-stick-ml,
.vdr-stick-mr {
  top: 50%;
  cursor: ew-resize;
}
.vdr-stick-ro {
  left: 50%;
  top: -20px;
  cursor: pointer
}
.vdr-stick.not-resizable {
  display: none;
}
.vdr-stick.not-rotatable {
  display: none;
}
.vdr.active:before {
  cursor: move;
  /*显示移动光标*/
}
</style>
