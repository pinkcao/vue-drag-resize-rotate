!function(t,i){if("object"==typeof exports&&"object"==typeof module)module.exports=i();else if("function"==typeof define&&define.amd)define([],i);else{var e=i();for(var r in e)("object"==typeof exports?exports:t)[r]=e[r]}}("undefined"!=typeof self?self:this,function(){return function(t){function i(r){if(e[r])return e[r].exports;var s=e[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,i),s.l=!0,s.exports}var e={};return i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},i.p="/dist/",i(i.s=4)}([function(t,i){function e(t,i){var e=t[1]||"",s=t[3];if(!s)return e;if(i&&"function"==typeof btoa){var n=r(s);return[e].concat(s.sources.map(function(t){return"/*# sourceURL="+s.sourceRoot+t+" */"})).concat([n]).join("\n")}return[e].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var i=[];return i.toString=function(){return this.map(function(i){var r=e(i,t);return i[2]?"@media "+i[2]+"{"+r+"}":r}).join("")},i.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},s=0;s<this.length;s++){var n=this[s][0];"number"==typeof n&&(r[n]=!0)}for(s=0;s<t.length;s++){var a=t[s];"number"==typeof a[0]&&r[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),i.push(a))}},i}},function(t,i,e){function r(t){for(var i=0;i<t.length;i++){var e=t[i],r=u[e.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](e.parts[s]);for(;s<e.parts.length;s++)r.parts.push(n(e.parts[s]));r.parts.length>e.parts.length&&(r.parts.length=e.parts.length)}else{for(var a=[],s=0;s<e.parts.length;s++)a.push(n(e.parts[s]));u[e.id]={id:e.id,refs:1,parts:a}}}}function s(){var t=document.createElement("style");return t.type="text/css",l.appendChild(t),t}function n(t){var i,e,r=document.querySelector("style["+v+'~="'+t.id+'"]');if(r){if(m)return d;r.parentNode.removeChild(r)}if(x){var n=p++;r=f||(f=s()),i=a.bind(null,r,n,!1),e=a.bind(null,r,n,!0)}else r=s(),i=o.bind(null,r),e=function(){r.parentNode.removeChild(r)};return i(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;i(t=r)}else e()}}function a(t,i,e,r){var s=e?"":r.css;if(t.styleSheet)t.styleSheet.cssText=b(i,s);else{var n=document.createTextNode(s),a=t.childNodes;a[i]&&t.removeChild(a[i]),a.length?t.insertBefore(n,a[i]):t.appendChild(n)}}function o(t,i){var e=i.css,r=i.media,s=i.sourceMap;if(r&&t.setAttribute("media",r),g.ssrId&&t.setAttribute(v,i.id),s&&(e+="\n/*# sourceURL="+s.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}var h="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!h)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=e(8),u={},l=h&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,m=!1,d=function(){},g=null,v="data-vue-ssr-id",x="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,i,e,s){m=e,g=s||{};var n=c(t,i);return r(n),function(i){for(var e=[],s=0;s<n.length;s++){var a=n[s],o=u[a.id];o.refs--,e.push(o)}i?(n=c(t,i),r(n)):n=[];for(var s=0;s<e.length;s++){var o=e[s];if(0===o.refs){for(var h=0;h<o.parts.length;h++)o.parts[h]();delete u[o.id]}}}};var b=function(){var t=[];return function(i,e){return t[i]=e,t.filter(Boolean).join("\n")}}()},function(t,i,e){"use strict";var r={y:{t:"top",m:"marginTop",b:"bottom"},x:{l:"left",m:"marginLeft",r:"right"}};i.a={name:"vue-drag-resize-rotate",emits:["rotating","rotatestop","resizing","resizestop","dragging","dragstop","clicked","activated","deactivated"],props:{deg:{type:Number,default:0},item:{},parentScaleX:{type:Number,default:1},parentScaleY:{type:Number,default:1},isActive:{type:Boolean,default:!1},preventActiveBehavior:{type:Boolean,default:!1},isRotatable:{type:Boolean,default:!0},isDraggable:{type:Boolean,default:!0},isResizable:{type:Boolean,default:!0},aspectRatio:{type:Boolean,default:!1},parentLimitation:{type:Boolean,default:!1},parentW:{type:Number,default:0,validator:function(t){return t>=0}},parentH:{type:Number,default:0,validator:function(t){return t>=0}},w:{type:Number,default:100,validator:function(t){return t>0}},h:{type:Number,default:30,validator:function(t){return t>0}},minw:{type:Number,default:50,validator:function(t){return t>0}},minh:{type:Number,default:10,validator:function(t){return t>0}},x:{type:Number,default:0,validator:function(t){return"number"==typeof t}},y:{type:Number,default:0,validator:function(t){return"number"==typeof t}},z:{type:[String,Number],default:"auto",validator:function(t){return"string"==typeof t?"auto"===t:t>=0}},dragHandle:{type:String,default:null},dragCancel:{type:String,default:null},sticks:{type:Array,default:function(){return["tl","tm","tr","mr","br","bm","bl","ml"]}},aspectRatioSticks:{type:Array,default:function(){return["tl","tm","tr","mr","br","bm","bl","ml"]}},axis:{type:String,default:"both",validator:function(t){return-1!==["x","y","both","none"].indexOf(t)}},snapToGrid:{type:Boolean,default:!1},gridX:{type:Number,default:50,validator:function(t){return t>0}},gridY:{type:Number,default:50,validator:function(t){return t>0}},type:{}},data:function(){return{rawDeg:this.deg,rotateCenter:[],rotateEnd:[],rotateStart:[],active:this.isActive,rawWidth:this.w,rawHeight:this.h,rawLeft:this.x,rawTop:this.y,rawRight:null,rawBottom:null,zIndex:this.z,aspectFactor:this.w/this.h,parentWidth:null,parentHeight:null,left:this.x,top:this.y,right:null,bottom:null,minWidth:this.minw,minHeight:this.minh,currentFixArray:[],currentFixSpot:[],ratioStick:null,finalFixArray:[]}},created:function(){this.stickDrag=!1,this.bodyDrag=!1,this.rotateDrag=!1,this.stickAxis=null,this.stickStartPos={mouseX:0,mouseY:0,x:0,y:0,w:0,h:0},this.limits={minLeft:null,maxLeft:null,minRight:null,maxRight:null,minTop:null,maxTop:null,minBottom:null,maxBottom:null},this.currentStick=[]},mounted:function(){if(this.cacuFather(),document.documentElement.addEventListener("mousemove",this.move),document.documentElement.addEventListener("mouseup",this.up),document.documentElement.addEventListener("mouseleave",this.up),document.documentElement.addEventListener("mousedown",this.deselect),document.documentElement.addEventListener("touchmove",this.move,!0),document.documentElement.addEventListener("touchend touchcancel",this.up,!0),document.documentElement.addEventListener("touchstart",this.up,!0),this.getCenter(),this.dragHandle){var t=Array.prototype.slice.call(this.$el.querySelectorAll(this.dragHandle));for(var i in t)t[i].setAttribute("data-drag-handle",this._uid)}if(this.dragCancel){var e=Array.prototype.slice.call(this.$el.querySelectorAll(this.dragCancel));for(var r in e)e[r].setAttribute("data-drag-cancel",this._uid)}},beforeDestroy:function(){document.documentElement.removeEventListener("mousemove",this.move),document.documentElement.removeEventListener("mouseup",this.up),document.documentElement.removeEventListener("mouseleave",this.up),document.documentElement.removeEventListener("mousedown",this.deselect),document.documentElement.removeEventListener("touchmove",this.move,!0),document.documentElement.removeEventListener("touchend touchcancel",this.up,!0),document.documentElement.removeEventListener("touchstart",this.up,!0)},methods:{debounce:function(t,i,e){clearTimeout(t.timeout),t.timeout=setTimeout(function(){t.call(i,e)},300)},getCenter:function(){var t=this.$refs.current;this.rotateCenter=[t.getBoundingClientRect().left+t.getBoundingClientRect().width/2,t.getBoundingClientRect().top+t.getBoundingClientRect().height/2]},clickSon:function(t){t.target.focus(),t.stopPropagation()},cacuFather:function(){this.parentElement=this.$el.parentNode,this.parentWidth=this.parentW?this.parentW:this.parentElement.clientWidth,this.parentHeight=this.parentH?this.parentH:this.parentElement.clientHeight,this.rawRight=this.parentWidth-this.rawWidth-this.rawLeft,this.rawBottom=this.parentHeight-this.rawHeight-this.rawTop},deselect:function(){this.preventActiveBehavior||(this.active=!1)},move:function(t){(this.stickDrag||this.bodyDrag||this.rotateDrag)&&(t.stopPropagation(),this.stickDrag&&this.stickMove(t),this.bodyDrag&&this.bodyMove(t),this.rotateDrag&&this.rotateMove(t))},up:function(t){this.stickDrag&&this.stickUp(t),this.bodyDrag&&this.bodyUp(t),this.rotateDrag&&this.rotateUp(t)},bodyDown:function(t){var i=t.target||t.srcElement;this.preventActiveBehavior||(this.active=!0),t.button&&0!==t.button||(this.$emit("clicked",t),this.isDraggable&&this.active&&(this.dragHandle&&i.getAttribute("data-drag-handle")!==this._uid.toString()||this.dragCancel&&i.getAttribute("data-drag-cancel")===this._uid.toString()||(this.bodyDrag=!0,this.stickStartPos.mouseX=t.pageX||t.touches[0].pageX,this.stickStartPos.mouseY=t.pageY||t.touches[0].pageY,this.stickStartPos.left=this.left,this.stickStartPos.right=this.right,this.stickStartPos.top=this.top,this.stickStartPos.bottom=this.bottom,this.parentLimitation&&(this.limits=this.calcDragLimitation()))))},calcDragLimitation:function(){var t=this.parentWidth,i=this.parentHeight;return{minLeft:0,maxLeft:t-this.width,minRight:0,maxRight:t-this.width,minTop:0,maxTop:i-this.height,minBottom:0,maxBottom:i-this.height}},bodyMove:function(t){var i=this.stickStartPos,e={x:("y"!==this.axis&&"none"!==this.axis?i.mouseX-(t.pageX||t.touches[0].pageX):0)/this.parentScaleX,y:("x"!==this.axis&&"none"!==this.axis?i.mouseY-(t.pageY||t.touches[0].pageY):0)/this.parentScaleY};if(this.rawTop=i.top-e.y,this.rawBottom=i.bottom+e.y,this.rawLeft=i.left-e.x,this.rawRight=i.right+e.x,this.snapToGrid){var r=!0,s=!0,n=this.rawTop-Math.floor(this.rawTop/this.gridY)*this.gridY,a=this.parentHeight-this.rawBottom-Math.floor((this.parentHeight-this.rawBottom)/this.gridY)*this.gridY,o=this.rawLeft-Math.floor(this.rawLeft/this.gridX)*this.gridX,h=this.parentWidth-this.rawRight-Math.floor((this.parentWidth-this.rawRight)/this.gridX)*this.gridX;n>this.gridY/2&&(n-=this.gridY),a>this.gridY/2&&(a-=this.gridY),o>this.gridX/2&&(o-=this.gridX),h>this.gridX/2&&(h-=this.gridX),Math.abs(a)<Math.abs(n)&&(r=!1),Math.abs(h)<Math.abs(o)&&(s=!1),this.rawTop-=r?n:a,this.rawBottom=this.parentHeight-this.height-this.rawTop,this.rawLeft-=s?o:h,this.rawRight=this.parentWidth-this.width-this.rawLeft}this.$emit("dragging",this.rect)},bodyUp:function(){this.bodyDrag=!1,this.$emit("dragging",this.rect),this.$emit("dragstop",this.rect),this.stickStartPos={mouseX:0,mouseY:0,x:0,y:0,w:0,h:0},this.limits={minLeft:null,maxLeft:null,minRight:null,maxRight:null,minTop:null,maxTop:null,minBottom:null,maxBottom:null}},rotateDown:function(t){this.isRotatable&&this.active&&(this.getCenter(),this.rotateDrag=!0,this.rotateStart=[t.clientX||t.touches[0].pageX,t.clientY||t.touches[0].pageY])},rotateMove:function(t){var i=(this.$refs.current,this.calculLength(this.rotateStart[0],t.clientX||t.touches[0].pageX,this.rotateStart[1],t.clientY||t.touches[0].pageY)),e=this.calculLength(this.rotateStart[0],this.rotateCenter[0],this.rotateStart[1],this.rotateCenter[1]),r=this.calculLength(this.rotateCenter[0],t.clientX||t.touches[0].pageX,this.rotateCenter[1],t.clientY||t.touches[0].pageY),s=this.calculClock(this.rotateCenter[0],this.rotateCenter[1],this.rotateStart[0],this.rotateStart[1],t.clientX||t.touches[0].pageX,t.clientY||t.touches[0].pageY)>=0,n=this.calculrawDegA(i,r,e);n=Math.abs(n),s||(n=0-n);var a=this.rawDeg;a+=n,!(Math.abs(a)>360)||(a%=360),this.rawDeg=a,this.rotateStart[0]=t.clientX||t.touches[0].pageX,this.rotateStart[1]=t.clientY||t.touches[0].pageY,this.$emit("rotating",this.rawDeg)},rotateUp:function(){this.rotateDrag=!1,this.$emit("rotating",this.rawDeg),this.$emit("rotatestop",this.rawDeg)},stickDown:function(t,i){if(this.isResizable&&this.active){switch(this.stickDrag=!0,void 0===this.$refs.bl[0]?this.currentFixArray=[this.$refs.bl.getBoundingClientRect().x,this.$refs.bl.getBoundingClientRect().y]:this.currentFixArray=[this.$refs.bl[0].getBoundingClientRect().x,this.$refs.bl[0].getBoundingClientRect().y],t){case"tl":this.$refs.current.style.transformOrigin="bottom right";break;case"tm":this.$refs.current.style.transformOrigin="bottom center";break;case"tr":this.$refs.current.style.transformOrigin="bottom left";break;case"mr":this.$refs.current.style.transformOrigin="left center";break;case"br":this.$refs.current.style.transformOrigin="top left";break;case"bm":this.$refs.current.style.transformOrigin="top center";break;case"bl":this.$refs.current.style.transformOrigin="top right";break;case"ml":this.$refs.current.style.transformOrigin="right center"}switch(void 0===this.$refs.bl[0]?this.finalFixArray=[this.currentFixArray[0]-this.$refs.bl.getBoundingClientRect().x,this.currentFixArray[1]-this.$refs.bl.getBoundingClientRect().y]:this.finalFixArray=[this.currentFixArray[0]-this.$refs.bl[0].getBoundingClientRect().x,this.currentFixArray[1]-this.$refs.bl[0].getBoundingClientRect().y],this.left=this.left+this.finalFixArray[0]/this.parentScaleX,this.right=this.right-this.finalFixArray[0]/this.parentScaleX,this.top=this.top+this.finalFixArray[1]/this.parentScaleY,this.bottom=this.bottom-this.finalFixArray[1]/this.parentScaleY,this.stickStartPos.mouseX=i.pageX||i.touches[0].pageX,this.stickStartPos.mouseY=i.pageY||i.touches[0].pageY,this.stickStartPos.left=this.left,this.stickStartPos.right=this.right,this.stickStartPos.top=this.top,this.stickStartPos.bottom=this.bottom,this.currentStick=t.split(""),this.ratioStick=t,this.stickAxis=null,this.currentStick[0]){case"b":case"t":this.stickAxis="y"}switch(this.currentStick[1]){case"r":case"l":this.stickAxis="y"===this.stickAxis?"xy":"x"}this.limits=this.calcResizeLimitation()}},calcResizeLimitation:function(){var t=this.minWidth,i=this.minHeight,e=this.aspectFactor,r=this.width,s=this.height,n=this.bottom,a=this.top,o=this.left,h=this.right,c=this.stickAxis,u=this.parentLimitation?0:null;this.aspectRatio&&(t/i>e?i=t/e:t=e*i);var l={minLeft:u,maxLeft:o+(r-t),minRight:u,maxRight:h+(r-t),minTop:u,maxTop:a+(s-i),minBottom:u,maxBottom:n+(s-i)};if(this.aspectRatio){var f={minLeft:o-Math.min(a,n)*e*2,maxLeft:o+(s-i)/2*e*2,minRight:h-Math.min(a,n)*e*2,maxRight:h+(s-i)/2*e*2,minTop:a-Math.min(o,h)/e*2,maxTop:a+(r-t)/2/e*2,minBottom:n-Math.min(o,h)/e*2,maxBottom:n+(r-t)/2/e*2};"x"===c?l={minLeft:Math.max(l.minLeft,f.minLeft),maxLeft:Math.min(l.maxLeft,f.maxLeft),minRight:Math.max(l.minRight,f.minRight),maxRight:Math.min(l.maxRight,f.maxRight)}:"y"===c&&(l={minTop:Math.max(l.minTop,f.minTop),maxTop:Math.min(l.maxTop,f.maxTop),minBottom:Math.max(l.minBottom,f.minBottom),maxBottom:Math.min(l.maxBottom,f.maxBottom)})}return l},stickMove:function(t){if((t.pageX||void 0!=t.touches)&&(t.pageY||void 0!=t.touches)){var i=this.stickStartPos,e={x:(i.mouseX-(t.pageX||t.touches[0].pageX))/this.parentScaleX,y:(i.mouseY-(t.pageY||t.touches[0].pageY))/this.parentScaleY},r=Math.cos(-this.deg*Math.PI/180)*e.x-Math.sin(-this.deg*Math.PI/180)*e.y,s=Math.sin(-this.deg*Math.PI/180)*e.x+Math.cos(-this.deg*Math.PI/180)*e.y;switch(e.x=r,e.y=s,this.currentStick[0]){case"b":this.rawBottom=i.bottom+e.y;break;case"t":this.rawTop=i.top-e.y}switch(this.currentStick[1]){case"r":this.rawRight=i.right+e.x;break;case"l":this.rawLeft=i.left-e.x}this.$emit("resizing",this.rect)}},stickUp:function(){this.stickDrag=!1,this.stickStartPos={mouseX:0,mouseY:0,x:0,y:0,w:0,h:0},this.limits={minLeft:null,maxLeft:null,minRight:null,maxRight:null,minTop:null,maxTop:null,minBottom:null,maxBottom:null},void 0===this.$refs.bl[0]?(this.currentFixArray=[this.$refs.bl.getBoundingClientRect().x,this.$refs.bl.getBoundingClientRect().y],this.$refs.current.style.transformOrigin="center center",this.finalFixArray=[this.currentFixArray[0]-this.$refs.bl.getBoundingClientRect().x,this.currentFixArray[1]-this.$refs.bl.getBoundingClientRect().y]):(this.currentFixArray=[this.$refs.bl[0].getBoundingClientRect().x,this.$refs.bl[0].getBoundingClientRect().y],this.$refs.current.style.transformOrigin="center center",this.finalFixArray=[this.currentFixArray[0]-this.$refs.bl[0].getBoundingClientRect().x,this.currentFixArray[1]-this.$refs.bl[0].getBoundingClientRect().y]),this.left=this.left+this.finalFixArray[0]/this.parentScaleX,this.right=this.right-this.finalFixArray[0]/this.parentScaleX,this.top=this.top+this.finalFixArray[1]/this.parentScaleY,this.bottom=this.bottom-this.finalFixArray[1]/this.parentScaleY,this.stickAxis=null,this.$emit("resizing",this.rect),this.$emit("resizestop",this.rect)},aspectRatioCorrection:function(){if(this.aspectRatioStickFlag){var t=this.bottom,i=this.top,e=this.left,r=this.right,s=this.width,n=this.height,a=this.aspectFactor,o=this.currentStick;if(s/n>a){var h=a*n;"l"===o[1]?this.left=e+s-h:this.right=r+s-h}else{var c=s/a;"t"===o[0]?this.top=i+n-c:this.bottom=t+n-c}}},calculLength:function(t,i,e,r){return Math.hypot(t-i,e-r)},calculrawDegA:function(t,i,e){return Math.acos((i*i+e*e-t*t)/(2*i*e))*(180/Math.PI)},calculClock:function(t,i,e,r,s,n){return(e-t)*(n-i)-(r-i)*(s-t)}},computed:{currentHalfWidth:function(){return{"font-size":"30px",position:"absolute",top:"-50px",cursor:"pointer",left:"50%",marginLeft:"-12px",color:"#888888"}},style:function(){return{top:this.top+"px",left:this.left+"px",width:this.width+"px",height:this.height+"px",zIndex:this.zIndex}},vdrStick:function(){var t=this;return function(i){var e={width:8/t.parentScaleX+"px",height:8/t.parentScaleY+"px"};return e[r.y[i[0]]]=8/t.parentScaleX/-2+"px",e[r.x[i[1]]]=8/t.parentScaleX/-2+"px",e}},width:function(){return this.parentWidth-this.left-this.right},height:function(){return this.parentHeight-this.top-this.bottom},rect:function(){return{left:Math.round(this.left),top:Math.round(this.top),width:Math.round(this.width),height:Math.round(this.height)}},aspectRatioStickFlag:function(){return!!(this.aspectRatioSticks.indexOf(this.ratioStick)>=0&&this.aspectRatio)}},watch:{rawLeft:function(t){0==this.aspectRatioStickFlag&&(this.aspectFactor=this.width/this.height);var i=this.limits,e=this.stickAxis,r=this.aspectFactor,s=(this.aspectRatio,this.left),n=this.bottom,a=this.top;if(null!==i.minLeft&&t<i.minLeft?t=i.minLeft:null!==i.maxLeft&&i.maxLeft<t&&(t=i.maxLeft),this.aspectRatioStickFlag&&"x"===e){var o=s-t;this.rawTop=a-o/r/2,this.rawBottom=n-o/r/2}this.left=t},rawRight:function(t){var i=this.limits,e=this.stickAxis,r=this.aspectFactor,s=(this.aspectRatio,this.right),n=this.bottom,a=this.top;if(null!==i.minRight&&t<i.minRight?t=i.minRight:null!==i.maxRight&&i.maxRight<t&&(t=i.maxRight),this.aspectRatioStickFlag&&"x"===e){var o=s-t;this.rawTop=a-o/r/2,this.rawBottom=n-o/r/2}this.right=t},rawTop:function(t){0==this.aspectRatioStickFlag&&(this.aspectFactor=this.width/this.height);var i=this.limits,e=this.stickAxis,r=this.aspectFactor,s=(this.aspectRatio,this.right),n=this.left,a=this.top;if(null!==i.minTop&&t<i.minTop?t=i.minTop:null!==i.maxTop&&i.maxTop<t&&(t=i.maxTop),this.aspectRatioStickFlag&&"y"===e){var o=a-t;this.rawLeft=n-o*r/2,this.rawRight=s-o*r/2}this.top=t},rawBottom:function(t){var i=this.limits,e=this.stickAxis,r=this.aspectFactor,s=(this.aspectRatio,this.right),n=this.left,a=this.bottom;if(null!==i.minBottom&&t<i.minBottom?t=i.minBottom:null!==i.maxBottom&&i.maxBottom<t&&(t=i.maxBottom),this.aspectRatioStickFlag&&"y"===e){var o=a-t;this.rawLeft=n-o*r/2,this.rawRight=s-o*r/2}this.bottom=t},width:function(){this.aspectRatioCorrection()},height:function(){this.aspectRatioCorrection()},active:function(t){t?this.$emit("activated"):this.$emit("deactivated")},isActive:function(t){this.active=t},z:function(t){(t>=0||"auto"===t)&&(this.zIndex=t)},aspectRatio:function(t){t&&(this.aspectFactor=this.width/this.height)},minw:function(t){t>0&&t<=this.width&&(this.minWidth=t)},minh:function(t){t>0&&t<=this.height&&(this.minHeight=t)},x:function(){if(!this.stickDrag&&!this.bodyDrag){this.parentLimitation&&(this.limits=this.calcDragLimitation());var t=this.x-this.left;this.rawLeft=this.x,this.rawRight=this.right-t}},y:function(){if(!this.stickDrag&&!this.bodyDrag){this.parentLimitation&&(this.limits=this.calcDragLimitation());var t=this.y-this.top;this.rawTop=this.y,this.rawBottom=this.bottom-t}},w:function(){if(!this.stickDrag&&!this.bodyDrag){this.currentStick=["m","r"],this.stickAxis="x",this.parentLimitation&&(this.limits=this.calcResizeLimitation());var t=this.width-this.w;this.rawRight=this.right+t}},h:function(){if(!this.stickDrag&&!this.bodyDrag){this.currentStick=["b","m"],this.stickAxis="y",this.parentLimitation&&(this.limits=this.calcResizeLimitation());var t=this.height-this.h;this.rawBottom=this.bottom+t}},parentW:function(t){this.right=t-this.width-this.left,this.parentWidth=t},parentH:function(t){this.bottom=t-this.height-this.top,this.parentHeight=t}}}},function(t,i,e){t.exports=e.p+"iconfont.eot?dec562c54fd65441e9f83c9298d4b6de"},function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r=e(5),s=e(11);e.n(s);r.a.install=function(t){return t.component(r.a.name,r.a)},i.default=r.a},function(t,i,e){"use strict";function r(t){e(6)}var s=e(2),n=e(10),a=e(9),o=r,h=a(s.a,n.a,!1,o,null,null);i.a=h.exports},function(t,i,e){var r=e(7);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e(1)("30f97322",r,!0,{})},function(t,i,e){i=t.exports=e(0)(!1),i.push([t.i,".vdr{box-sizing:border-box}.vdr,span.rotate{position:absolute}span.rotate{font-size:20px;top:-30px;cursor:pointer;right:-30px;color:#000}.vdr-stick{box-sizing:border-box;position:absolute;font-size:1px;background:#fff;border:1px solid #6c6c6c;box-shadow:0 0 2px #bbb}.inactive .vdr-stick{display:none}.vdr-stick-br,.vdr-stick-tl{cursor:nwse-resize}.vdr-stick-bm,.vdr-stick-tm{left:50%;cursor:ns-resize}.vdr-stick-bl,.vdr-stick-tr{cursor:nesw-resize}.vdr-stick-ml,.vdr-stick-mr{top:50%;cursor:ew-resize}.vdr-stick.not-resizable{display:none}.vdr.active:before{cursor:move}",""])},function(t,i){t.exports=function(t,i){for(var e=[],r={},s=0;s<i.length;s++){var n=i[s],a=n[0],o=n[1],h=n[2],c=n[3],u={id:t+":"+s,css:o,media:h,sourceMap:c};r[a]?r[a].parts.push(u):e.push(r[a]={id:a,parts:[u]})}return e}},function(t,i){t.exports=function(t,i,e,r,s,n){var a,o=t=t||{},h=typeof t.default;"object"!==h&&"function"!==h||(a=t,o=t.default);var c="function"==typeof o?o.options:o;i&&(c.render=i.render,c.staticRenderFns=i.staticRenderFns,c._compiled=!0),e&&(c.functional=!0),s&&(c._scopeId=s);var u;if(n?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},c._ssrRegister=u):r&&(u=r),u){var l=c.functional,f=l?c.render:c.beforeCreate;l?(c._injectStyles=u,c.render=function(t,i){return u.call(i),f(t,i)}):c.beforeCreate=f?[].concat(f,u):[u]}return{esModule:a,exports:o,options:c}}},function(t,i,e){"use strict";var r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{ref:"current",staticClass:"vdr",class:t.active||t.isActive?"active":"inactive",style:Object.assign({},t.style,{transform:"rotateZ("+t.deg+"Deg)"}),attrs:{tabIndex:"-1"},on:{click:function(i){return t.clickSon(i)},mousedown:function(i){return i.stopPropagation(),i.preventDefault(),t.bodyDown(i)},touchstart:function(i){return i.stopPropagation(),i.preventDefault(),t.bodyDown(i)}}},[t._t("default"),t._v(" "),t._l(t.sticks,function(i,r){return e("div",{key:r,ref:i,refInFor:!0,staticClass:"vdr-stick",class:["vdr-stick-"+i,t.isResizable?"":"not-resizable"],style:t.vdrStick(i),on:{mousedown:function(e){return e.stopPropagation(),e.preventDefault(),t.stickDown(i,e)},touchstart:function(e){return e.stopPropagation(),e.preventDefault(),t.stickDown(i,e)}}})}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.isRotatable&&t.active,expression:"isRotatable && active"}],staticClass:"iconfont icon-rotate",style:t.currentHalfWidth,on:{mousedown:function(i){return i.stopPropagation(),i.preventDefault(),t.rotateDown(i)},touchstart:function(i){return i.stopPropagation(),i.preventDefault(),t.rotateDown(i)}}})],2)},s=[],n={render:r,staticRenderFns:s};i.a=n},function(t,i,e){var r=e(12);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e(1)("0b6cd7e8",r,!0,{})},function(t,i,e){var r=e(13);i=t.exports=e(0)(!1),i.push([t.i,"@font-face{font-family:iconfont;src:url("+r(e(3))+");src:url("+r(e(3))+'#iefix) format("embedded-opentype"),url("data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAL4AAsAAAAABqQAAAKsAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcAqBMIE8ATYCJAMICwYABCAFhG0HMBviBcgekiSQECIE66AcALAQwff7sd9z30U1qTeG6lm0kSyRKE0sEhKdkCiFSDb7kt+f/tU7QF268+pE5u86O9mcOkgV0QHqhKK7vAGPP7ic/gookHlAuc0xcA3AwNJAxxqUUFogAXjD2AUu4TCBWj08aC3HJmeDocwaFYgjqbgCDHNuWWaxaqGyZmEW1/RUp5P0BOAq/H68gygMSSoKVsHaYUw1hD/Z2QlFY9mo2Edw5jOCLaPAFJCJrdrwCh3ByDpqw7oGwL5ygye7svS1Yq9/nqhkZdeDLsi+J47LvdXsBHLcPQusjbqMNF1T9/aW/fKS8/r6/p43c3i96fhS7ttX3rv1Nq85eRPLdmNjdtqjN8amp7fjMw7ZOxdNlz3njWdPJbnJ33oFMbkJrm/2eOmzaYdOHcypsGEpRFbgv+E8u+6x4b3o7LGFlNMzP2EP1pPT03Nsh136jQzrf8xybc1uVC79FPymHu8Oh3CA8rhYLyL/5W/cCfTuyiyC/xvWZfAYs6cXOsvjDP2soPqMluDPcXo2ZZ1naVJWObXWZHbUyIRatSgB21v9jS26zXio1nGz1irdKRSqDaGZNAUV6sxApWpzUGtS3PI6bSgdkWswoQ1AaLYNSaN7KDR7RjPpFyp0+odKzaEDtXbCZsM6IyE1jqK4guFqVNmApFVExTk6ZhzlZmJxjaKCZnkhJRdTjdSHhDxBMRaHVZjOMUVTKxYxxiGOEiWKBcdhhYIgNSUyXMV4EsbUgXw+V/ciXhVRgrElFFaBwaohlRogUlUIFc7vzBiXPp8JE6uhUIG2lNWYc2GUhrR3RIhH0AONE6t6ld3LMxq1xEQYhoNwKEIJiQVGTGGHCURd308Gq8LwSEYE1QLxUTuur5i3vlT5AVmsCkuRwk4qVB4TdtMqAA==") format("woff2"),url('+r(e(14))+') format("woff"),url('+r(e(15))+') format("truetype"),url('+r(e(16))+'#iconfont) format("svg")}.iconfont{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-rotate:before{content:"\\E615"}',""])},function(t,i){t.exports=function(t){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},function(t,i,e){t.exports=e.p+"iconfont.woff?055eb59d253682bf5544443dab9054ea"},function(t,i,e){t.exports=e.p+"iconfont.ttf?323764f983e0c86be7b5607b4fdaa7cf"},function(t,i,e){t.exports=e.p+"iconfont.svg?e8088af32d25a5af865ac52655f62d7e"}])});
//# sourceMappingURL=vue-drag-resize-rotate.js.map