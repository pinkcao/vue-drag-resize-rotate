# vue-drag-resize-rotate

based on kirillmurashov vue-drag-resize, extended "rotate"

#### the Origin: https://github.com/kirillmurashov/vue-drag-resize

## Demo
[Demo](https://pinkcao.github.io/vue-drag-resize-rotate/index.html)


## Install and basic usage

```bash
$ npm install @pinkcao/vue-drag-resize-rotate
```

Register the component:

```js
import Vue from 'vue'
import vueDragResizeRotate from '@pinkcao/vue-drag-resize-rotate'

Vue.use(vueDragResizeRotate)
```

Use the component:

```vue
<template>
    <div id="app">
        <vue-drag-resize-rotate :isActive="true" :w="200" :h="200" :deg="deg" :isRotatable="rotatable" v-on:resizing="resize" v-on:dragging="resize" v-on:rotating="rotate">
            <h3>Hello World!</h3>
            <p>{{ top }} х {{ left }} </p>
            <p>{{ width }} х {{ height }}</p>
            <p>{{ deg }}</p>
        </vue-drag-resize-rotate>
    </div>
</template>

<script>
    import VueDragResizeRotate from '@pinkcao/vue-drag-resize-rotate';

    export default {
        name: 'app',

        components: {
            VueDragResizeRotate
        },

        data() {
            return {
                width: 0,
                height: 0,
                top: 0,
                left: 0,
                deg: 0,
                rotatable: true
            }
        },

        methods: {
            resize(newRect) {
                this.width = newRect.width;
                this.height = newRect.height;
                this.top = newRect.top;
                this.left = newRect.left;
            },
            rotate(deg) {
                this.deg = deg
            }
        }
    }
</script>
```



### Props

#### isActive
Type: `Boolean`<br>
Required: `false`<br>
Default: `false`

Determines whether the component should be active. 
确定组件是否应处于活动状态。

```html
<vue-drag-resize-rotate :isActive="true">
```

#### preventActiveBehavior
Type: `Boolean`<br>
Required: `false`<br>
Default: `false`

Disable behavior of the component by clicking on it and clicking outside the component's area (isActive: true / false).
If the prop is enabled, the component is oriented only to the specified.

通过单击组件并单击组件区域外部来禁用组件的行为（isActive：true / false）。
如果启用了prop，则组件仅面向指定的。

```html
<vue-drag-resize-rotate :preventActiveBehavior="true">
```

#### parentW
Type: `Number`<br>
Required: `false`<br>
Default: `0`

Define the initial width of the parent element. If not specified it calculated automatically.
With this parameter, you can set the bounding area for the component, and also it is used when resizing in real time.
定义父元素的初始宽度。 如果未指定，则自动计算。
使用此参数，您可以设置组件的边界区域，并在实时调整大小时使用它。
```html
<vue-drag-resize-rotate :parentW="2000">
```

#### parentH
Type: `Number`<br>
Required: `false`<br>
Default: `0`

Define the initial height of the parent element. If not specified it calculated automatically.
With this parameter, you can set the bounding area for the component, and also it is used when resizing in real time.
定义父元素的初始高度。 如果未指定，则自动计算。
使用此参数，您可以设置组件的边界区域，并在实时调整大小时使用它。

```html
<vue-drag-resize-rotate :parentH="2000">
```

#### parentScaleX
Type: `Number`<br>
Required: `false`<br>
Default: `1`

Define the initial horizontal scale or the parent element. Same value in parent's transform: scale() css definition.
The drag/resize and the sticks' sizes will computed with this value.
定义初始水平比例或父元素。父级的transform:scale（）css定义中的值相同。
拖动/调整大小和杆的大小将使用该值计算。
```html
<vue-drag-resize-rotate :parentScaleX="0.5">
```

#### parentScaleY
Type: `Number`<br>
Required: `false`<br>
Default: `1`

Define the initial vertical scale or the parent element. Same value in parent's transform: scale() css definition.
The drag/resize and the sticks' sizes will computed with this value.
定义初始垂直比例或父元素。父级的transform:scale（）css定义中的值相同。

拖动/调整大小和杆的大小将使用该值计算。

```html
<vue-drag-resize-rotate :parentScaleY="0.5">
```

#### isDraggable
Type: `Boolean`<br>
Required: `false`<br>
Default: `true`

Determines whether the component should draggable.
确定组件是否应可拖动。


```html
<vue-drag-resize-rotate :isDraggable="false">
```

#### isResizable
Type: `Boolean`<br>
Required: `false`<br>
Default: `true`

Determines whether the component should resize.
确定组件是否应调整大小。


```html
<vue-drag-resize-rotate :isResizable="false">
```

#### isRotatable
Type: `Boolean`<br>
Required: `false`<br>
Default: `true`

Determines whether the component can be rotated
确定组件是否可以旋转。

```html
<vue-drag-resize-rotate :isRotatable="true">
```

#### parentLimitation
Type: `Boolean`<br>
Required: `false`<br>
Default: `false`

Limits the scope of the component's change to its parent size.
将组件更改的范围限制为其父大小。


```html
<vue-drag-resize-rotate :parentLimitation="true">
```

#### aspectRatio
Type: `Boolean`<br>
Required: `false`<br>
Default: `false`

Determines whether the component should retain its proportions.
确定组件是否应保持其比例。


```html
<vue-drag-resize-rotate :aspectRatio="false">
```

#### aspectRatioSticks
Type: `Array`<br>
Required: `false`<br>
Default: `['tl', 'tm', 'tr', 'mr', 'br', 'bm', 'bl', 'ml']`

* `tl` - Top left
* `tm` - Top middle
* `tr` - Top right
* `mr` - Middle right
* `br` - Bottom right
* `bm` - Bottom middle
* `bl` - Bottom left
* `ml` - Middle left

Determines the sticks affected by aspectRatio, only works when aspectRatio is true
确定受到保持纵横比影响的握柄，仅当aspectRatio为true是生效。


```html
<vue-drag-resize-rotate :aspectRatioSticks="['tl', 'tm', 'tr']">
```

#### w
Type: `Number`<br>
Required: `false`<br>
Default: `200`

Define the initial width of the component.
定义组件的初始宽度。


```html
<vue-drag-resize-rotate :w="200">
```

#### h
Type: `Number`<br>
Required: `false`<br>
Default: `200`

Define the initial height of the component.
定义组件的初始高度。


```html
<vue-drag-resize-rotate :h="200">
```

#### deg
Type: `Number`<br>
Required: `false`<br>

Determines the rotate degree of the component
当前组件旋转的角度

```html
<vue-drag-resize-rotate :deg="120">
```

#### minw
Type: `Number`<br>
Required: `false`<br>
Default: `50`

Define the minimal width of the component.
定义组件的初始宽度。



```html
<vue-drag-resize-rotate :minw="50">
```

#### minh
Type: `Number`<br>
Required: `false`<br>
Default: `50`

Define the minimal height of the component.
定义组件的最小高度。


```html
<vue-drag-resize-rotate :minh="50">
```

#### x
Type: `Number`<br>
Required: `false`<br>
Default: `0`

Define the initial x position of the component.
定义组件的初始X位置。


```html
<vue-drag-resize-rotate :x="0">
```

#### y
Type: `Number`<br>
Required: `false`<br>
Default: `0`

Define the initial y position of the component.
定义组件的初始Y位置。


```html
<vue-drag-resize-rotate :y="0">
```

#### z
Type: `Number|String`<br>
Required: `false`<br>
Default: `auto`

Define the zIndex of the component.
定义组件的zindex(层级)。

```html
<vue-drag-resize-rotate :z="999">
```

#### stickSize
Type: `Number`<br>
Required: `false`<br>
Default `8`

Define the sticks' size.

```html
<vue-drag-resize-rotate :stickSize="12">
```

#### sticks
Type: `Array`<br>
Required: `false`<br>
Default: `['tl', 'tm', 'tr', 'mr', 'br', 'bm', 'bl', 'ml']`

Define the array of handles to restrict the element resizing:
定义句柄数组以限制元素大小调整：

* `tl` - Top left
* `tm` - Top middle
* `tr` - Top right
* `mr` - Middle right
* `br` - Bottom right
* `bm` - Bottom middle
* `bl` - Bottom left
* `ml` - Middle left

```html
<vue-drag-resize-rotate :sticks="['tm','bm','ml','mr']">
```

#### snapToGrid
Type: `Boolean`<br>
Required: `false`<br>
Default: `false`

Determine whether the component should snap to grid.
决定组件是否应该对齐至网格。

```html
<vue-drag-resize-rotate snapToGrid="true">
```

#### gridX
Type: `Number`<br>
Required: `false`<br>
Default: `50`

Define the grid on axisX.
定义X轴上的网格大小。

```html
<vue-drag-resize-rotate gridX="20">
```

#### gridY
Type: `Number`<br>
Required: `false`<br>
Default: `50`

Define the grid on axisY.
定义Y轴上的网格大小。

```html
<vue-drag-resize-rotate gridY="20">
```


#### axis
Type: `String`<br>
Required: `false`<br>
Default: `both`

Define the axis on which the element is draggable. Available values are `x`, `y`, `both` or `none`.
定义元素可拖动的轴。 可用值为`x`，`y`，`both`或`none`。

```html
<vue-drag-resize-rotate axis="x">
```

#### dragHandle
Type: `String`<br>
Required: `false`

Defines the selector that should be used to drag the component.
定义应该用于拖动组件的选择器。

```html
<vue-drag-resize-rotate dragHandle=".drag">
```

#### dragCancel
Type: `String`<br>
Required: `false`

Defines a selector that should be used to prevent drag initialization.
定义应该用于防止拖动初始化的选择器。

```html
<vue-drag-resize-rotate dragCancel=".drag">
```

#### contentClass
Type: `String`<br>
Required: `false`

Defines a class that is applied on the div with the class vdr

```html
<vue-drag-resize-rotate contentClass="box-shaddow">
```

---

### Events

#### clicked

Required: `false`<br>
Parameters: `Original event handler`

Called whenever the component gets clicked.
单击组件时调用。

```html
<vue-drag-resize-rotate @clicked="onActivated">
```

#### activated

Required: `false`<br>
Parameters: `-`

Called whenever the component gets clicked, in order to show handles.
单击组件时调用，以显示句柄。

```html
<vue-drag-resize-rotate @activated="onActivated">
```

#### deactivated

Required: `false`<br>
Parameters: `-`

Called whenever the user clicks anywhere outside the component, in order to deactivate it.
每当用户单击组件外部的任何位置时调用，以便将其停用。


```html
<vue-drag-resize-rotate @deactivated="onDeactivated">
```

#### resizing

Required: `false`<br>
Parameters: `object`

```javascript
{
    left: Number, //the X position of the component
    top: Number, //the Y position of the component
    width: Number, //the width of the component
    height: Number //the height of the component
}
```

Called whenever the component gets resized.
每当组件调整大小时调用。


```html
<vue-drag-resize-rotate @resizing="onResizing">
```

#### resizestop

Required: `false`<br>
Parameters: `object`
```javascript
{
    left: Number, //the X position of the component
    top: Number, //the Y position of the component
    width: Number, //the width of the component
    height: Number //the height of the component
}
```

Called whenever the component stops getting resized.
每当组件停止调整大小时调用。


```html
<vue-drag-resize-rotate @resizestop="onResizstop">
```

#### dragging

Required: `false`<br>
Parameters: `object`
```javascript
{
    left: Number, //the X position of the component
    top: Number, //the Y position of the component
    width: Number, //the width of the component
    height: Number //the height of the component
}
```

Called whenever the component gets dragged.
每当拖动组件时调用。


```html
<vue-drag-resize-rotate @dragging="onDragging">
```

#### dragstop

Required: `false`<br>
Parameters: `object`
```javascript
{
    left: Number, //the X position of the component
    top: Number, //the Y position of the component
    width: Number, //the width of the component
    height: Number //the height of the component
}
```

Called whenever the component stops getting dragged.
每当组件停止拖动时调用。


```html
<vue-drag-resize-rotate @dragstop="onDragstop">
```

#### rotating

Required: `false`<br>
Parameters: `Number`

Called whenever the rotate handler gets clicked and the cursor moving.
单击旋转握柄且旋转时调用。

```html
<vue-drag-resize-rotate @rotating="rotate">
```

#### rotatestop

Required: `false`<br>
Parameters: `Number`

Called whenever the component stops getting resized.
当组件停止旋转时调用。

```html
<vue-drag-resize-rotate @rotatestop="rotatestop">
```
