
import G6 from "@antv/g6"; //注意引入

export function renderMap(data,graph){
    const COLLAPSE_ICON = function COLLAPSE_ICON(x, y, r) {
      return [
        ['M', x - r, y - r],
        ['a', r, r, 0, 1, 0, r * 2, 0],
        ['a', r, r, 0, 1, 0, -r * 2, 0],
        ['M', x + 2 - r, y - r],
        ['L', x + r - 2, y - r],
      ];
    };
    const EXPAND_ICON = function EXPAND_ICON(x, y, r) {
      return [
        ['M', x - r, y - r],
        ['a', r, r, 0, 1, 0, r * 2, 0],
        ['a', r, r, 0, 1, 0, -r * 2, 0],
        ['M', x + 2 - r, y - r],
        ['L', x + r - 2, y - r],
        ['M', x, y - 2 * r + 2],
        ['L', x, y - 2],
      ];
    };
    G6.Util.traverseTree(data, (d) => {
      d.leftIcon = {
        style: {
          fill: '#3759B0',
          stroke: '#e6fffb',
        },
      };
      return true;
    });
    
    G6.registerNode('icon-node', {
      options: {
        size: [60, 20],
        stroke: '#73D13D',
        fill: '#fff'
      },
      draw(cfg, group) {
        const styles = this.getShapeStyle(cfg)
        const { labelCfg = {} } = cfg
    
        const keyShape = group.addShape('rect', {
          attrs: {
            ...styles,
            x: 0,
            y: 0
          }
        })
    
        /**
         * leftIcon 格式如下：
         *  {
         *    style: ShapeStyle;
         *    img: ''
         *  }
         */
       // console.log('cfg.leftIcon', cfg.leftIcon);
        if (cfg.leftIcon) {
          const { style, img } = cfg.leftIcon
          group.addShape('rect', {
            attrs: {
              x: 10,
              y: 8,
              width: 24,
              radius: 12,
              height: styles.height - 16,
              fill: '#8c8c8c',
              ...style
            }
          })
          group.addShape('text', {
              attrs: {
                text: cfg.name,
                x: 22,
                y: 21,
                fill: '#ffffff',
                fontSize: 12,
                textAlign: 'center',
                textBaseline: 'middle',
                fontWeight: 'bold',
              },
              name: 'text-shape',
            });
          group.addShape('image', {
            attrs: {
              x: 8,
              y: 8,
              width: 24,
              height: 24,
            },
            name: 'image-shape',
          });
        }
    
        // 如果不需要动态增加或删除元素，则不需要 add 这两个 marker
        group.addShape('marker', {
          attrs: {
            x: 130,
            y: 18,
            r: 6,
            stroke: '#707070',
            cursor: 'pointer',
            symbol: EXPAND_ICON
          },
          name: 'add-item'
        })
    
        group.addShape('marker', {
          attrs: {
            x: 130,
            y: 36,
            r: 6,
            stroke: '#5C5C5C',
            cursor: 'pointer',
            symbol: COLLAPSE_ICON
          },
          name: 'remove-item'
        })
    
        if (cfg.label) {
          group.addShape('text', {
            attrs: {
              ...labelCfg.style,
              text: cfg.label,
              x: 50,
              y: 25,
            }
          })
        }
    
        return keyShape
      }
    }, 'rect')
    
    G6.registerEdge('flow-line', {
      draw(cfg, group) {
        const startPoint = cfg.startPoint;
        const endPoint = cfg.endPoint;
    
        const { style } = cfg
        const shape = group.addShape('path', {
          attrs: {
            stroke: style.stroke,
            endArrow: style.endArrow,
            path: [
              ['M', startPoint.x, startPoint.y],
              ['L', startPoint.x, (startPoint.y + endPoint.y) / 2],
              ['L', endPoint.x, (startPoint.y + endPoint.y) / 2,],
              ['L', endPoint.x, endPoint.y],
            ],
          },
        });
    
        return shape;
      }
    });
    
    const width = document.getElementById('container').scrollWidth;
    const height = document.getElementById('container').scrollHeight || 500;
   
    graph.data(data);
    graph.render();
    graph.fitView();
   
    graph.on('node:mouseenter', evt => {
      const { item } = evt
      graph.setItemState(item, 'hover', true)
    })
    
    graph.on('node:mouseleave', evt => {
      const { item } = evt
      graph.setItemState(item, 'hover', false)
    })
  }

  // D:\proj\bishe\exam-vue-admin3\src\utils\G6Util.js
 let  G6Util={
  showChartG6Tree(containerId,data){
    this.showChartG6TreeDo(containerId,data)
    // setTimeout(() => {
    //   this.showChartG6TreeDo(containerId,data)
    // }, 3000);
    // showChartG6TreeDo()
  },
    //生成树图
    showChartG6TreeDo(containerId,data) {
      // const data = this.treedata[0];
      const container = document.getElementById(containerId);

      console.log("container");
      console.log(container);

      // const container = document.getElementById("container");
      if (container) {
        // const width=1000
        const width = container.clientWidth;
        const height = container.clientHeight;
        // new G6.TreeGraph 更新数据
        const graph = new G6.TreeGraph({
          // 图的DOM 容器，可以传入该 DOM 的 id 或者直接传入容器的 HTML 节点对象。
          container: container,
          width: width,
          height: height,
          // 设置画布的模式 包含default 模式和 edit 模式
          modes: {
            // default 模式中包含点击选中节点行为和拖拽画布行为
            default: [
              {
                type: "collapse-expand",
                trigger: "click",
              },
              // 拖拽画布 和 缩放画布
              "drag-canvas",
              "zoom-canvas",
            ],
          },
          // 默认的节点设置
          defaultNode: {
            //节点的大小
            size: 14,
            // 指定边连入节点的连接点的位置
            anchorPoints: [
              [0, 0.5],
              [1, 0.5],
            ],
            // 节点样式
            style: {
              fill: "#C6E5FF",
              stroke: "#5B8FF9",
            },
          },
          // 默认的配置
          defaultEdge: {
            type: "cubic-horizontal",
            style: {
              stroke: "#A3B1BF",
            },
          },
          layout: {
            type: "compactBox",
            direction: "LR",
            // 指定节点 ID
            getId: function getId(d) {
              return d.id;
            },
            // 指定节点高度
            getHeight: function getHeight() {
              return 16;
            },
            //指定节点宽度
            getWidth: function getWidth() {
              return 16;
            },
            // 指定节点之间的垂直间距
            getVGap: function getVGap() {
              return 10;
            },
            // 指定节点之间的水平间距
            getHGap: function getHGap() {
              return 100;
            },
          },
        });

        // 为不同节点进行不同的配置 必须在 render 之前调用
        graph.node(function (node) {
          return {
            style: {
              fill: node.depth == 2 && node.status ? "#c1422b" : "#c6e5ff",
              stroke: node.depth == 2 && node.status ? "#c1422b" : "#6b9bfa",
            },
            //String 类型。标签文本的文字内容
            label: node.label,
            labelCfg: {
              // 文本的偏移
              offset: 10,
              // 文本相对于节点的位置
              position:
                node.children && node.children.length > 0 ? "left" : "right",
              //文本样式
              style: {
                fill: node.depth == 2 && node.status ? "#c1422b" : "#2c3e50",
              },
            },
          };
        });
        console.log('初始化数据');
        console.log("data");
        console.log(data);

        //初始化数据
        graph.data(data);
        //渲染视图
        console.log('渲染视图');

        graph.render();
        console.log('让画布内容适应视口');

        //让画布内容适应视口
        graph.fitView();
        // this.graph=graph
      }
      return graph
    },
  }

  export default G6Util