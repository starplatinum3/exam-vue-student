<template>
  <canvas id="canvas" class="canvas" width="2000" height="700"></canvas>
</template>

<script>
export default {
  name: 'Canvas',
  props: ['lines'],
  data: function () {
    return {
      context: {}
    }
  },
  methods: {
    initDraw () {
      const canvas = document.getElementById('canvas')
      this.context = canvas.getContext('2d')


      

    },
    drawArrow (arrow) {
      // console.log("arrow");
      // console.log(arrow);
      var ctx = typeof (arrow.ctx) !== 'undefined' ? arrow.ctx : this.context
      // console.log("ctx");
      // console.log(ctx);
   
      var fromX = arrow.fromX
      var fromY = arrow.fromY
      var toX = arrow.toX
      var toY = arrow.toY
      var controlX = typeof (arrow.controlX) !== 'undefined' ? arrow.controlX : arrow.fromX
      var controlY = typeof (arrow.controlY) !== 'undefined' ? arrow.controlY : arrow.fromY
      var theta = typeof (arrow.theta) !== 'undefined' ? arrow.theta : 30
      var headlen = typeof (arrow.headlen) !== 'undefined' ? arrow.headlen : 10
      var width = typeof (arrow.width) !== 'undefined' ? arrow.width : 1
      var color = typeof (arrow.color) !== 'undefined' ? arrow.color : '#000'
      var angle = Math.atan2(fromY - toY, fromX - toX) * 180 / Math.PI
      var type = typeof (arrow.type) !== 'undefined' ? arrow.type : 'line'
      if (type === 'curve') {
        angle = Math.atan2(controlY - toY, controlX - toX) * 180 / Math.PI
      } else if (type === 'broken') {
        angle = Math.atan2(toY - toY, fromX - toX) * 180 / Math.PI
      }
      var angle1 = (angle + theta) * Math.PI / 180
      var angle2 = (angle - theta) * Math.PI / 180
      var topX = headlen * Math.cos(angle1)
      var topY = headlen * Math.sin(angle1)
      var botX = headlen * Math.cos(angle2)
      var botY = headlen * Math.sin(angle2)
      ctx.save()
      ctx.beginPath()
      var arrowX = fromX - topX
      var arrowY = fromY - topY
      if (type === 'line') {
        ctx.moveTo(arrowX, arrowY)
        ctx.moveTo(fromX, fromY)
        ctx.lineTo(toX, toY)
      } else if (type === 'broken') {
        ctx.moveTo(fromX, fromY)
        ctx.lineTo(fromX, toY)
        ctx.lineTo(toX, toY)
      } else if (type === 'curve') {
        ctx.moveTo(fromX, fromY)
        ctx.quadraticCurveTo(controlX, controlY, toX, toY)
      }
      arrowX = toX + topX
      arrowY = toY + topY
      ctx.moveTo(arrowX, arrowY)
      ctx.lineTo(toX, toY)
      arrowX = toX + botX
      arrowY = toY + botY
      ctx.lineTo(arrowX, arrowY)
      ctx.strokeStyle = color
      ctx.lineWidth = width
      // ctx.lineWidth =20
      // console.log("ctx.lineWidth");
      // console.log(ctx.lineWidth);

      // ctx.lineTo(40, 40)
      ctx.stroke()
      ctx.restore()
    }
  },
  watch: {
    lines: function () {
      this.context.clearRect(0, 0, 2000, 700)
      // console.log(" this.lines");
      // console.log( this.lines);
      this.lines.forEach(line => {
        this.drawArrow(line)
      })
    //   var ctx =this.context

    //   // var ctx = typeof (arrow.ctx) !== 'undefined' ? arrow.ctx : this.context
    //   //画线条的颜色
		// ctx.strokeStyle = "#00BBEE";
		// ctx.moveTo(10,10);
		// ctx.lineTo(180,80);
		// ctx.lineTo(10,80);
		// ctx.stroke();
    // console.log("ctx");
    // console.log(ctx);
    }
  },
  mounted () {
    this.initDraw()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.canvas {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  /* z-index: 1; */
  /* z-index: 0; */
}
</style>
