<template>
  <div class="page">
    <div :id="pageId" class="graph-container" style="position: relative;"></div>
  </div>
</template>


<script>
// import G6 from "@antv/g6/build/g6";
import G6 from "@antv/g6";

import { initBehavors } from "@/behavior";
export default {
  data() {
    return {
      pageId: "graph-container",
      graph: null
    };
  },
  props: {
    height: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 0
    },
    data: {
      type: Object,
      default: () => {}
    }
  },
  created() {
    initBehavors();
  },
  mounted() {
//     `this.$nextTick()`是Vue.js中的一个特殊方法，用于在DOM更新完成后执行回调函数。
// 它的作用是等待Vue实例更新完毕后再执行特定的操作，以确保操作基于最新的DOM状态。
// 在这段代码中，`this.$nextTick()`被用来延迟执行`this.init()`方法。原因是在Vue中，
// 当数据发生改变时，Vue会异步地更新DOM，因此在更新完成之前，DOM可能还没有被正确地渲染和更新。
// 为了确保在更新完成后执行`this.init()`，可以将其放在`this.$nextTick()`的回调函数中。
// 这样，当DOM更新完成后，Vue会调用回调函数，并执行`this.init()`方法。
// 总而言之，这段代码的目的是在Vue实例更新DOM后，延迟执行`this.init()`方法，以确保基于最新的DOM状态进行初始化操作。
    this.$nextTick(() => {
      this.init();
    });
  },
  methods: {
    init() {
      const height =  this.height - 42 
      const width =  this.width - 400

      /**
       * 这段代码创建了一个G6.Graph对象，并将其赋值给this.graph属性。
       * G6是一个图形可视化库，它用于创建和操作图形。在这里，通过传递一个包含配置选项的对象，
       * 我们创建了一个图形对象。其中，container属性指定了图形渲染的容器元素的ID为graph-container，
       * height和width属性使用前面计算得到的值来设置图形的高度和宽度。modes属性定义了一组支持的行为（behavior），
       * 例如拖拽画布、缩放画布、悬停节点、选择节点、悬停边、键盘操作等。
       */
      this.graph = new G6.Graph({
        container: "graph-container",
        height: height,
        width: width,
        modes: {
          // 支持的 behavior
          default: [
            "drag-canvas",
            "zoom-canvas",
            "hover-node",
            "select-node",
            "hover-edge",
            "keyboard",
            "customer-events",
            "add-menu"
          ],
          mulitSelect: ["mulit-select"],
          addEdge: ["add-edge"],
          moveNode:[ "drag-item"]
        }
      });
      const { editor, command } = this.$parent;
      console.log("editor");
      console.log(editor);

      editor.emit("afterAddPage", { graph: this.graph, command });

      this.readData();
    },
    readData() {
      let data = this.data;
      if (data) {
        this.graph.read(data);
      }
    }
  }
};
</script>

<style scoped>
.page{
  margin-left:200px;
  margin-right: 200px;
}
</style>