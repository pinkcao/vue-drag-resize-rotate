<template>
  <div class="home">
    <vue-drag-resize-rotate
      v-for="(item, i) in squares"
      :key="i"
      :isActive="item.active"
      :preventActiveBehavior="item.preventActiveBehavior"
      :w="item.width"
      :h="item.height"
      :x="item.left"
      :y="item.top"
      :z="item.zindex"
      :deg="item.deg"
      @resizing="resize($event, item.index)"
      @dragging="resize($event, item.index)"
      @rotating="rotate($event, item.index)"
      :parentLimitation="item.parentLimitation"
      :isDraggable="item.draggable"
      :isResizable="item.resizable"
      :isRotatable="item.rotatable"
      :snapToGrid="item.snapToGrid"
      :gridX="item.gridX"
      :gridY="item.gridY"
      :aspectRatio="item.aspectRatio"
      :aspectRatioSticks="item.aspectRatioSticks"
      @activated="activated(item.index)"
      @deactivated="deactivated(item.index)"
    >
      <div :style="item.squareStyle">
        active: {{ item.active }}<br />
        snapToGrid: {{ item.snapToGrid }}<br />
        gridX: {{ item.gridX }}<br />
        gridY: {{ item.gridY }}<br />
        rotatable: {{ item.rotatable }}<br />
        aspectRatio: {{ item.aspectRatio }}<br />
        aspectRatioSticks: {{ item.aspectRatioSticks }}
      </div>
    </vue-drag-resize-rotate>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      squares: [
        {
          preventActiveBehavior: false,
          active: false,
          width: 200,
          height: 200,
          top: 100,
          left: 100,
          parentLimitation: false,
          aspectRatio: true,
          draggable: true,
          resizable: true,
          rotatable: true,
          index: 0,
          zindex: 0,
          mode: 'design',
          flag: false,
          snapToGrid: false,
          aspectRatioSticks: ['tl', 'tr', 'bl', 'br'],
          gridX: 10,
          gridY: 50,
          deg: 0,
          squareStyle: {
            'background-color': '#aaffff',
            width: '100%',
            height: '100%',
            display: 'flex',
            'justify-content': 'center',
            'align-items': 'center',
            'flex-direction': 'column'
          }
        },
        {
          preventActiveBehavior: false,
          active: false,
          width: 200,
          height: 200,
          top: 100,
          left: 320,
          parentLimitation: false,
          aspectRatio: true,
          draggable: true,
          resizable: true,
          rotatable: true,
          index: 1,
          zindex: 1,
          mode: 'design',
          flag: false,
          snapToGrid: true,
          gridX: 10,
          gridY: 50,
          deg: 0,
          squareStyle: {
            'background-color': '#ffaaff',
            width: '100%',
            height: '100%',
            display: 'flex',
            'justify-content': 'center',
            'align-items': 'center',
            'flex-direction': 'column'
          }
        },
        {
          preventActiveBehavior: false,
          active: false,
          width: 200,
          height: 200,
          top: 320,
          left: 100,
          parentLimitation: false,
          aspectRatio: false,
          draggable: true,
          resizable: true,
          rotatable: false,
          index: 2,
          zindex: 2,
          mode: 'design',
          flag: false,
          snapToGrid: true,
          gridX: 10,
          gridY: 20,
          deg: 0,
          squareStyle: {
            'background-color': '#ffffaa',
            width: '100%',
            height: '100%',
            display: 'flex',
            'justify-content': 'center',
            'align-items': 'center',
            'flex-direction': 'column'
          }
        }
      ]
    }
  },
  computed: {},
  created() {},
  mounted() {},

  methods: {
    resize(newRect, index) {
      this.squares[index].width = newRect.width
      this.squares[index].height = newRect.height
      this.squares[index].top = newRect.top
      this.squares[index].left = newRect.left
    },
    rotate(deg, index) {
      this.squares[index].deg = deg
    },
    activated(index) {
      for (let i = 0; i < this.squares.length; i++) {
        console.log(this.squares[i].index != index)
        if (this.squares[i].index != index) {
          this.squares[i].active = false
        } else {
          this.squares[i].active = true
        }
      }
    },
    deactivated(index) {
      this.squares[index].active = false
    }
  }
}
</script>
