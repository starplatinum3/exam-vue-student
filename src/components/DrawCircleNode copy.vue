<template>
  <div draggable="true" @dragstart="start(item, $event)" 
  @dragend.stop="$emit('get-node-info', end(item, $event))"
   @drag="$emit('get-node-info', setInfo(item, $event))" 
   @click="$emit('get-node-info', setBaseInfo(item, $event))" class="draw-circle-node">
    <el-card class="box-card node-circle node" :style="item.style">
      <el-tag closable type="warning" @close="$emit('remove-node', item)">
        <span>{{item.name}} {{ item.style.backgroundColor }}</span> 
        <el-button class="line-btn line-btn-circle" type="success"
         circle size="mini" @click="$emit('line-node', item)"></el-button>
      </el-tag>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'DrawCircleNode',
  props: ['item'],
  data: function () {
    return {
      baseX: '',
      baseY: '',
      beginX: '',
      beginY: '',
      moveX: '',
      moveY: '',
      endX: '',
      endY: '',
      itemBaseX: '',
      itemBaseY: '',
      flag: true,
      firstTime: true
    }
  },
  methods: {
    start (item, ev) {
      this.beginX = ev.screenX
      this.beginY = ev.screenY
      if (this.firstTime) {
        // item.style.backgroundColor = '#f2f2f2'
      // item.style.width = '80%'
      // item.style.height = '80%'
      // item.style.width = '200px'
      // item.style.height ='200px'
        this.baseX = ev.screenX
        this.baseY = ev.screenY
        this.itemBaseX = item.left
        this.itemBaseY = item.top
        this.firstTime = false
        console.log( "this.itemBaseX" )
        console.log( this.itemBaseX )
      }
    },
    move (item, ev) {
      this.moveX = ev.screenX - this.beginX
      this.moveY = ev.screenY - this.beginY
      this.endX = ev.screenX - this.baseX
      this.endY = ev.screenY - this.baseY
      this.start(item, ev)
    },
    end (item, ev) {
      const x = parseInt(ev.screenX) - parseInt(this.baseX)
      const y = parseInt(ev.screenY) - parseInt(this.baseY)
      item.left = parseInt(this.itemBaseX) + x
      item.top = parseInt(this.itemBaseY) + y

      console.log("item.left  end" );
      console.log(item.left );
      console.log("item.top" );
      console.log(item.top );
      // item.left = parseInt(ev.screenX)
      // item.top =parseInt(ev.screenY)

      item.style.left = item.left + '' + 'px'
      item.style.top = item.top + '' + 'px'
      item.style.backgroundColor =''
      item.style.width = ''
      item.style.height = ''
      this.firstTime=true
      return item
    },
    setInfo: function (item, e) {
      this.move(item, e)
      item.left = parseInt(item.left) + parseInt(this.moveX)
      item.top = parseInt(item.top) + parseInt(this.moveY)
      item.style.left = item.left + '' + 'px'
      item.style.top = item.top + '' + 'px'
      return item
    },
    setBaseInfo: function (item, e) {
      console.log("setBaseInfo item");
      console.log(item);
      // 灰色
      item.style.backgroundColor = '#f2f2f2'
      // item.style.width = '80%'
      // item.style.height = '80%'
      item.style.width = '200px'
      item.style.height ='200px'
      return item
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
