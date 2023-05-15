
import eventBus from "@/utils/eventBus";
import { uniqueId } from '@/utils'
let startPoint = null
let startItem = null
let endPoint = {}
let activeItem = null
let curInPoint = null
export default {
    getEvents() {
        return {
            mousemove: 'onMousemove',
            mouseup: 'onMouseup',
            'node:mouseover': 'onMouseover',
            'node:mouseleave': 'onMouseleave'
        };
    },
    onMouseup(e) {
        const item = e.item
        if (item && item.getType() === 'node') {
            const group = item.getContainer()
//             这段代码是用于判断释放鼠标的目标元素是否为输入连接点，并根据判断结果执行相应的操作。

// 首先，通过访问`e.target._attrs.isInPoint`属性，判断释放鼠标的目标元素是否为输入连接点。如果是输入连接点，则进入`if`语句块。

// 在`if`语句块中，首先获取节点容器元素的子元素列表，保存在`children`变量中。然后使用`children.map()`方法遍历子元素列表。

// 在每次迭代中，判断当前子元素是否为输出连接点（`child._attrs.isInPointOut`）并且其父节点与释放鼠标的目标元素的ID相匹配（`child._attrs.parent === e.target._attrs.id`）。如果满足这两个条件，将该子元素赋值给变量`activeItem`。

// 最后，将释放鼠标的目标元素保存在变量`curInPoint`中。

// 总而言之，这段代码用于检测释放鼠标的目标元素是否为输入连接点，并在满足条件时将相关的子元素赋值给相应的变量。这可能是在处理节点连接操作时，根据用户操作来确定输入连接点和输出连接点的关联关系。
            if (e.target._attrs.isInPoint) {
                const children = group._cfg.children
                children.map(child => {
                    if (child._attrs.isInPointOut && child._attrs.parent === e.target._attrs.id) {
                        activeItem = child
                    }
                })
                curInPoint = e.target
            } else if (e.target._attrs.isInPointOut) {
                activeItem = e.target
                const children = group._cfg.children
                children.map(child => {
                    if (child._attrs.isInPoint && child._attrs.id === e.target._attrs.parent) {
                        curInPoint = child
                    }
                })
            }
//             在这段代码中，首先检查是否存在活动连接点（activeItem）。如果存在，说明之前已经选择了一个输出连接点，并将当前的输入连接点保存在curInPoint中。然后，获取输入连接点的坐标并存储在endPoint对象中。

// 接下来，检查是否存在边（this.edge）。如果存在，则从图形中移除当前的边。然后，创建一个包含边的模型对象，其中包括边的ID、源节点、目标节点、起始坐标、结束坐标、形状等属性。最后，通过事件总线（eventBus）发出一个addItem事件，并传递边的模型对象。

// 如果没有活动连接点，则检查是否存在边。如果存在边，则从图形中移除它。

// 这段代码的作用是在节点连接过程中处理连接的终点和边的创建与移除。如果存在活动连接点，则根据连接点的位置和信息创建边，并将其添加到图形中。如果没有活动连接点，则移除现有的边。
            if (activeItem) {
                const endX = parseInt(curInPoint._attrs.x)
                const endY = parseInt(curInPoint._attrs.y)
                endPoint = { x: endX, y: endY };
                if (this.edge) {
                    this.graph.removeItem(this.edge);
                    const model = {
                        id: 'edge' + uniqueId(),
                        source: startItem,
                        target: item,
                        sourceId: startItem._cfg.id,
                        targetId: item._cfg.id,
                        start: startPoint,
                        end: endPoint,
                        shape: 'customEdge',
                        type: 'edge'
                    }
                    eventBus.$emit('addItem', model)
                }
            } else {
                if (this.edge)
                    this.graph.removeItem(this.edge);
            }
        } else {
            // if not (item && item.getType() === 'node') { 
            if (this.edge)
                this.graph.removeItem(this.edge);
        }
        this.graph.find("node", node => {
            const group = node.get('group')
            const children = group._cfg.children
            children.map(child => {
                if (child._attrs.isInPointOut) {
                    child.attr("opacity", "0")
                }
                if (child._attrs.isInPoint) {
                    child.attr("opacity", "0")
                }
                if (child._attrs.isOutPoint) {
                    child.attr("opacity", "0")
                    child.attr("fill", "#fff")
                }
            })
        })
        // 在每个子元素的迭代中，根据子元素的属性进行条件判断。如果子元素是输出连接点的连接线（child._attrs.isInPointOut），则将其透明度设置为0。如果子元素是输入连接点（child._attrs.isInPoint），则也将其透明度设置为0。如果子元素是输出连接点（child._attrs.isOutPoint），则将其透明度设置为0，并将填充颜色设置为白色（"#fff"）。
        if (startItem) {
            this.graph.setItemState(startItem, 'hover', false);
        }

        this.graph.paint()
        startPoint = null
        startItem = null
        endPoint = {}
        activeItem = null
        curInPoint = null
        this.graph.setMode('default')
//         这段代码用于设置图形对象的模式（mode）为"default"。

// 在图形编辑器或图形绘制应用中，通常会有不同的模式或操作模式，用于指定不同的交互行为。例如，"default"模式可能是用于常规的拖拽、缩放、选择等操作。

// 通过调用`this.graph.setMode('default')`方法，将图形对象的模式设置为"default"，以确保用户在进行后续操作时处于默认模式下。这可以是为了确保在节点连接操作完成后，将编辑器或应用程序的交互模式恢复为默认状态，以便进行其他类型的操作。
    },
    onMousemove(e) {
        const item = e.item
        if (!startPoint) {
            this.graph.find("node", node => {
                const group = node.get('group')
                const children = group._cfg.children
                children.map(child => {
                    if (child._attrs.isInPointOut) {
                        child.attr("opacity", "0.3")
                    }
                    if (child._attrs.isInPoint) {
                        child.attr("opacity", "1")
                    }
                })
            })
            const startX = parseInt(e.target._attrs.x)
            const startY = parseInt(e.target._attrs.y)
            startPoint = { x: startX, y: startY };
            startItem = item
            this.edge = this.graph.addItem('edge', {
                source: item,
                target: item,
                start: startPoint,
                end: startPoint,
                shape: 'link-edge'
            });
        } else {
            // if  (startPoint) {
            const point = { x: e.x, y: e.y };
            if (this.edge) {
                // 增加边的过程中，移动时边跟着移动
                this.graph.updateItem(this.edge, {
                    //  start: startPoint,
                    target: point
                });
            }
//             在这个条件语句中，首先检查是否存在边（this.edge）。如果存在，说明正在创建边的过程中。

// 然后，通过调用this.graph.updateItem()方法，更新边的属性。在这里，将边的target属性设置为point，即鼠标当前的坐标位置。

// 这样，当鼠标移动时，边的目标位置会随之改变，从而实现边随鼠标移动的效果。
        }
    },
    onMouseover(e) {
        const item = e.item
        if (item && item.getType() === 'node') {
            if (e.target._attrs.isInPointOut && !this.hasTran) {
                this.hasTran = true
                e.target.transform([
                    ['t', 0, 3],
                    ['s', 1.2, 1.2],
                ])
            }
//             ['t', 0, 3]表示对连接线进行平移变换，将其在垂直方向上向下移动3个单位。
// ['s', 1.2, 1.2]表示对连接线进行缩放变换，将其在水平和垂直方向上都放大1.2倍。
// 通过这些变换操作，可以实现对连接线的平移和缩放效果，从而提供一种视觉上的交互反馈。
            this.graph.paint()
        }
    },
    onMouseleave() {
        this.graph.find("node", node => {
            const group = node.get('group')
            const children = group._cfg.children
            children.map(child => {
                if (child._attrs.isInPointOut) {
                    child.resetMatrix()
                }
            })
        })
        this.hasTran = false
        this.graph.paint()
    }
}
