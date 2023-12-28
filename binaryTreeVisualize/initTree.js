// 数据：定义二叉树的结构
var treeData = {
    name: "Root",
    children: [
        {
            name: "Left Child",
            children: [
                {name: "Left Grandchild"},
                {name: "Right Grandchild"}
            ]
        },
        {name: "Right Child"}
    ]
};

// 设置树的大小
var margin = {top: 20, right: 120, bottom: 20, left: 120},
    width = 960 - margin.right - margin.left,
    height = 500 - margin.top - margin.bottom;

// 创建树布局
var treemap = d3.tree().size([height, width]);

// 创建一个 SVG 画布
var svg = d3.select("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// 创建树的根节点
var root = d3.hierarchy(treeData);

// 计算节点和链接的位置
var treeData = treemap(root);

// 获取节点和链接
var nodes = treeData.descendants(),
    links = treeData.links();

// 绘制链接
svg.selectAll(".link")
    .data(links)
    .enter().append("path")
    .attr("class", "link")
    .attr("d", d3.linkHorizontal()
        .x(function (d) {
            return d.y;
        })
        .y(function (d) {
            return d.x;
        }));

// 绘制节点
var node = svg.selectAll(".node")
    .data(nodes)
    .enter().append("g")
    .attr("class", "node")
    .attr("transform", function (d) {
        return "translate(" + d.y + "," + d.x + ")";
    });

node.append("circle")
    .attr("r", 10);

node.append("text")
    .attr("dy", ".35em")
    .attr("x", function (d) {
        return d.children ? -13 : 13;
    })
    .style("text-anchor", function (d) {
        return d.children ? "end" : "start";
    })
    .text(function (d) {
        return d.data.name;
    });