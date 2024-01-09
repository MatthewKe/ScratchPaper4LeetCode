var treeDatas = []
var targetTreeNodes = [];

window.addEventListener("message", ev => {
        if (ev.data.message == "treeDatas") {
            console.log("tree.js receive message");
            treeDatas = ev.data.context;
            targetTreeNodes = ev.data.targetTreeNodes;
            console.log(targetTreeNodes);
            renderTree();
        }
    }
);
document.getElementById("test").onclick = renderTree;

function renderTree() {
    if (treeDatas == null) {
        return;
    }

    var svg = document.getElementById('svg');
    while (svg.firstChild) {
        svg.removeChild(svg.firstChild);
    }

    console.log(treeDatas);
    var containers = [];
    var preContainerWidth = [];
    var svg = d3.select("svg"),
        width = +svg.attr("width"),
        height = +svg.attr("height");

    svg.append("defs").append("marker")
        .attr("id", "arrow")
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 5)
        .attr("refY", 0)
        .attr("markerWidth", 15)
        .attr("markerHeight", 30)
        .attr("orient", "270")
        .append("path")
        .attr("d", "M0,-5L10,0L0,5")
        .attr("fill", "DarkCyan")
        .attr("class", "arrowHead");

    for (let i = 0; i < treeDatas.length; i++) {

        var treeData = treeDatas[i];

        var nodes = d3.hierarchy(treeData);
        console.log(nodes);
        var depth = nodes.height; // 获取树的最大深度
        var nodeCount = nodes.descendants().length; // 获取节点数量
        var treeWidth = depth * 200; // 根据深度调整宽度
        var treeHeight = nodeCount * 50; // 根据节点数量调整高度

        var treemap = d3.tree().size([treeWidth, treeHeight]);

        var treeNodes = treemap(nodes);

        var rightestNode = treeNodes.descendants().reduce(function (prev, current) {
            return (prev.x > current.x) ? prev : current;
        });


        var preWidth = preContainerWidth[preContainerWidth.length - 1] || 0;
        preContainerWidth[preContainerWidth.length] = preWidth + rightestNode.x;

        var container = svg.append("g").attr("transform", "translate(" + preWidth + ",40)");
        containers.push(container);

        targetTreeNodes?.forEach(targetTreeNode => {
            var id = targetTreeNode.id;
            var name = targetTreeNode.name;
            var targetNode = container.selectAll(".node")
                .data(treeNodes.descendants())
                .enter().filter(function (d) {
                    return d.data.id === id;
                });
            targetNode
                .append("line")
                .attr("x1", function (d) {
                    return d.x;
                })
                .attr("y1", function (d) {
                    return d.y;
                })
                .attr("x2", function (d) {
                    return d.x;
                })
                .attr("y2", function (d) {
                    return d.y + 40;
                })
                .attr("marker-end", "url(#arrow)");

            targetNode.append("text")
                .attr("x", function (d) {
                    return d.x;
                })
                .attr("y", function (d) {
                    return d.y + 60;
                })
                .text(name)
                .attr("text-anchor", "middle")
                .attr("font-size", "15px");
        });

        var link = container.selectAll(".link")
            .data(treeNodes.links())
            .enter().append("path")
            .attr("class", "link")
            .filter(function (d) {
                return d.source.data.stub !== 1 && d.target.data.stub !== 1;
            })
            .attr("d", function (d) {
                // 创建直线路径
                return "M" + d.source.x + "," + d.source.y
                    + "L" + d.target.x + "," + d.target.y;
            });

        var node = container.selectAll(".node")
            .data(treeNodes.descendants())
            .enter().append("g")
            .attr("class", "node")
            .attr("transform", function (d) {
                return "translate(" + d.x + "," + d.y + ")";
            });

        node
            .filter(function (d) {
                return d.data.stub !== 1;
            })
            .append("circle")
            .attr("r", 30)
            .attr("fill", function (d) {
                return d.data.flag === 1 ? "lightblue" : "white"; // 如果 flag 为 1，则填充红色，否则填充黑色
            });

        node
            .filter(function (d) {
                return d.data.stub !== 1;
            })
            .append("text")
            .attr("dy", "0.35em")
            .text(function (d) {
                return d.data.value;
            });


    }

    var zoom = d3.zoom().on("zoom", function (event) {
        for (let i = 0; i < treeDatas.length; i++) {
            var container = containers[i];
            var newK = event.transform.k;
            var newX = event.transform.x + (preContainerWidth[i - 1] || 0) * newK;
            var newY = event.transform.y + 40;
            container.attr("transform", "translate(" + newX + "," + newY + ") scale(" + newK + ")");
        }
    });

    svg.call(zoom);

    document.getElementById("focus").onclick = focus;

    function focus() {
        console.log("focus");
        var cx;
        var cy;
        for (let i = 0; i < treeDatas.length; i++) {
            var container = containers[i];
            var node = container.selectAll(".node");
            let flaggedNodes = node.filter(function (d) {
                return d.data.flag === 1;
            });

            let flaggedNode = flaggedNodes._groups[0];
            if (flaggedNode[0] === undefined) {
                continue;
            }

            let nx = flaggedNode[0].__data__.x + (preContainerWidth[i - 1] || 0);
            let ny = flaggedNode[0].__data__.y;

            cx = width / 2 - nx;
            cy = height / 2 - ny;
        }

        svg.transition()
            .duration(750)
            .call(zoom.transform, d3.zoomIdentity.translate(cx, cy).scale(1));
    }

    document.getElementById("fit").onclick = fit;

    function fit() {
        console.log("fit");
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;

        containers.forEach(container => {
            const bbox = container.node().getBBox();
            minX = Math.min(minX, bbox.x);
            minY = Math.min(minY, bbox.y);
            maxX = Math.max(maxX, bbox.x + bbox.width);
            maxY = Math.max(maxY, bbox.y + bbox.height);
        });

        const height = maxY - minY + 80;
        const width = preContainerWidth[preContainerWidth.length - 1];
        const svgWidth = svg.node().clientWidth;
        const svgHeight = svg.node().clientHeight;

        const scaleX = svgWidth / width;
        const scaleY = svgHeight / height;
        const scale = Math.min(scaleX, scaleY);

        const translateX = -minX * scale;
        const translateY = -minY * scale;

        svg.transition()
            .duration(750)
            .call(zoom.transform, d3.zoomIdentity.translate(translateX, translateY).scale(scale));

    }

    fit();
}

document.getElementById("closeButton2").onclick = () => {
    window.parent.postMessage({message: "closeIframe2"}, "*");
};