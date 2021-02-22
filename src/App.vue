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
      :deg="style.deg"
      @resizing="resize"
      @dragging="resize"
      :parentLimitation="parentLimitation"
      :isDraggable="draggable"
      :isResizable="resizable"
      :isRotatable="rotatable"
      @rotating="testconsole"
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
      // colorSet: [],
      // imgurl: require('@/assets/图表组件.png')
      preventActiveBehavior: false,
      name: 'compA',
      active: false,
      ifshow: true,
      width: 200,
      height: 200,
      top: 100,
      left: 100,
      parentLimitation: false,
      draggable: true,
      resizable: true,
      rotatable: true,
      index: 0,
      zindex: 0,
      mode: 'design',
      flag: false,
      title: '综合图表',
      subTitle: 'fake data',
      dataSource: {
        data: [
          ['department', '2018', '2019'],
          ['finance', 43.3, 85.8],
          ['humanResource', 83.1, 73.4],
          ['sales', 86.4, 65.2],
          ['product', 72.4, 53.9],
          ['qualityAssurance', 55.1, 66.5]
        ]
      },
      style: {
        opacity: 1,
        legendvis: true,
        titlevis: true,
        deg: 0
      },
      backgroundStyle: {
        width: '100%',
        height: '100%'
      }
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
      this.style.deg = deg
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
