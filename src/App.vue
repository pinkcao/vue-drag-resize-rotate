<template>
  <div id="app" style="width: 100vw; height: 100vh">
    <vue-drag-resize-rotate
      :isActive="active"
      :preventActiveBehavior="preventActiveBehavior"
      :w="width"
      :h="height"
      :x="left"
      :y="top"
      :z="zindex"
      :deg="deg"
      @resizing="resize"
      @dragging="resize"
      :parentLimitation="parentLimitation"
      :isDraggable="draggable"
      :isResizable="resizable"
      :isRotatable="rotatable"
      @rotating="testconsole"
      :snapToGrid="snapToGrid"
      :gridX="10"
      :gridY="50"
      :aspectRatio="snapToGrid"
      :aspectRatioSticks="aspectRatioSticks"
    >
      <div style="background-color: #555555; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; flex-direction: column">
      </div>
    </vue-drag-resize-rotate>
  </div>
</template>

<script>
import vueDragResizeRotate from './lib/vueDragResizeRotate.vue';

export default {
  components: {vueDragResizeRotate},
  name: 'app',
  data() {
    return {
      preventActiveBehavior: false,
      name: 'compA',
      active: false,
      ifshow: true,
      width: 200,
      height: 200,
      top: 100,
      left: 100,
      parentLimitation: false,
      aspectRatio: true,
      aspectRatioSticks: ['tl', 'tr', 'tm'],
      draggable: true,
      resizable: true,
      rotatable: true,
      index: 0,
      zindex: 0,
      mode: 'design',
      flag: false,
      snapToGrid: true,
      gridX: 10,
      gridY: 50,
      deg: 0,
    }
  },
  computed: {},
  created() {
  },
  mounted() {
  },

  methods: {
    resize(newRect) {
      this.width = newRect.width
      this.height = newRect.height
      this.top = newRect.top
      this.left = newRect.left
    },
    testconsole(deg) {
      this.deg = deg
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
