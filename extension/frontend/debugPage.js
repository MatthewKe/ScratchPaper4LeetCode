require.config({paths: {'vs': '../lib/min/vs'}});
require(['vs/editor/editor.main'], function () {

    var context = 'public class Main {\n' +
        '    public static void main(String[] args) {\n' +
        '        Solution solution = new Solution();\n' +
        '        solution.constructMaximumBinaryTree(new int[]{1, 2, 3});\n' +
        '        System.out.println("hello world");\n' +
        '    }\n' +
        '}\n' +
        '\n' +
        'class Solution {\n' +
        '    public TreeNode constructMaximumBinaryTree(int[] nums) {\n' +
        '        return construct(nums, 0, nums.length - 1);\n' +
        '    }\n' +
        '\n' +
        '    public TreeNode construct(int[] nums, int left, int right) {\n' +
        '        if (left > right) {\n' +
        '            return null;\n' +
        '        }\n' +
        '        int best = left;\n' +
        '        for (int i = left + 1; i <= right; ++i) {\n' +
        '            if (nums[i] > nums[best]) {\n' +
        '                best = i;\n' +
        '            }\n' +
        '        }\n' +
        '        TreeNode node = new TreeNode(nums[best]);\n' +
        '        node.left = construct(nums, left, best - 1);\n' +
        '        node.right = construct(nums, best + 1, right);\n' +
        '        return node;\n' +
        '    }\n' +
        '}';
    var value = '/**\nfailed to fetch context\n*/';
    var editor = monaco.editor.create(document.getElementById('editor'), {
        value: 'public class Main {\n' +
            '    public static void main(String[] args) {\n' +
            '        Solution solution = new Solution();\n' +
            '        solution.constructMaximumBinaryTree(new int[]{1, 2, 3});\n' +
            '        System.out.println("hello world");\n' +
            '    }\n' +
            '}\n' +
            '\n' +
            'class Solution {\n' +
            '    public TreeNode constructMaximumBinaryTree(int[] nums) {\n' +
            '        return construct(nums, 0, nums.length - 1);\n' +
            '    }\n' +
            '\n' +
            '    public TreeNode construct(int[] nums, int left, int right) {\n' +
            '        if (left > right) {\n' +
            '            return null;\n' +
            '        }\n' +
            '        int best = left;\n' +
            '        for (int i = left + 1; i <= right; ++i) {\n' +
            '            if (nums[i] > nums[best]) {\n' +
            '                best = i;\n' +
            '            }\n' +
            '        }\n' +
            '        TreeNode node = new TreeNode(nums[best]);\n' +
            '        node.left = construct(nums, left, best - 1);\n' +
            '        node.right = construct(nums, best + 1, right);\n' +
            '        return node;\n' +
            '    }\n' +
            '}',
        language: 'java',
        glyphMargin: true // 启用装订线边距
    });
    var isProgrammaticChange = false;
    editor.onDidChangeModelContent(e => {
        console.log("change happened");
        if (isProgrammaticChange) {
            isProgrammaticChange = false
        } else {
            context = editor.getValue();
            var solutionClassRegex = /class Solution \{[\s\S]*?\n\}/;
            var match = context.match(solutionClassRegex);
            var solutionClassCode = match ? match[0] : null;
            window.parent.postMessage({message: "debugEditorChange", context: solutionClassCode}, "*");
        }
    });

    window.addEventListener("message", ev => {
        if (ev.data.message === "debugPageInitializedWithContext") {
            console.log("debugPage.js receive message debugPageInitializedWithContext");
            window.parent.postMessage({message: "fetchContext"}, "*");
        } else if (ev.data.message === "context") {
            console.log("debugPage.js receive message context");
            context = ev.data.context;
            editor.setValue(context);
        } else if (ev.data.message === "leetcodeEditorChange") {
            isProgrammaticChange = true;
            var originalCode = editor.getValue();
            var newSolutionCode = ev.data.context;
            var replacedCode = originalCode.replace(/class Solution \{[\s\S]*?\n\}/, newSolutionCode);
            editor.setValue(replacedCode);
        }
        if (ev.data.message === "languageType") {
            console.log("已传送");
            console.log('是' + ev.data.type);
            document.getElementById('language').innerText = ev.data.type;
        }
    })

    var observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.addedNodes.length) {
                var breakpoints = document.getElementsByClassName("cgmr codicon myGlyphMarginClass");
                for (let i = 0; i < breakpoints.length; i++) {
                    breakpoints[i].style.height = "10px";
                    breakpoints[i].style.width = "10px";
                }
            }
        });
    });
    observer.observe(document.body, {childList: true, subtree: true});


    var decorations = [];
    var breakpointsLines = [];
    var lineToHighlight = -1;

    editor.onMouseDown(e => {
        if (
            e.target.type === monaco.editor.MouseTargetType.GUTTER_GLYPH_MARGIN ||
            e.target.type === monaco.editor.MouseTargetType.GUTTER_LINE_NUMBERS
        ) {
            const lineNumber = e.target.position.lineNumber;
            if (breakpointsLines.includes(lineNumber)) {
                breakpointsLines.splice(breakpointsLines.indexOf(lineNumber), 1);
            } else {
                breakpointsLines.push(lineNumber);
            }
            decorateEditor();
        }
    });

    function decorateEditor() {
        var newDecorations = [];
        breakpointsLines.forEach(i => {
            var newDecoration = {
                range: new monaco.Range(i, 1, i, 1),
                options: {isWholeLine: true, glyphMarginClassName: 'myGlyphMarginClass'}
            };
            newDecorations.push(newDecoration);
        })
        if (lineToHighlight > 0) {
            newDecorations.push({
                range: new monaco.Range(lineToHighlight, 1, lineToHighlight, 1),
                options: {
                    isWholeLine: true,
                    className: '.lineHighLight'
                }
            });
        }
        console.log(newDecorations);
        decorations = editor.deltaDecorations(decorations, newDecorations);
    }


    window.parent.postMessage({message: "debugPageInitialized"}, "*");

    console.log("Monaco Editor initialized");

    const ip = "http://localhost:8080";

    document.getElementById("run").onclick = () => {
        //显示输出区
        let outputArea = document.getElementById('output');
        let editArea = document.getElementById('editor');
        editArea.style.height = '170px';
        console.log(editor);
        editor.layout();
        document.getElementById('dragLine').style.height = '5px';
        document.getElementById('dragLine').style.top = '200px';
        outputArea.style.height = '170px';

        console.log("sendCodeToBackend");
        let jsonData = {
            context: context,
            breakpointsLines: []
        };

        let requestOptions = {
            method: 'POST', // 请求方法
            headers: {
                'Content-Type': 'application/json' // 指定内容类型为 JSON
            },
            body: JSON.stringify(jsonData), // 将 JSON 对象转换为字符串
            redirect: 'follow' // 自动重定向
        };
        fetch(ip + '/runCode', requestOptions)
            .then(response => response.json()) // 转换响应为 JSON
            .then(result => {
                console.log(result)
                // 输出结果，显示输出结果区域
                outputArea.innerText = result.message;
            }) // 处理结果
            .catch(error => console.log('error', error)); //
    }


    document.getElementById("debug").onclick = () => {
        let isDragging = false;
        let dragStartY;
        let preUp = 170;
        let preDown = 170;
        let newUp, newDown;
        //拖拽条
        let dragLine = document.getElementById('dragLine');
        dragLine.addEventListener('mousedown', (e) => {
            e.preventDefault();
            // console.log("mousedown")
            isDragging = true;
            dragStartY = e.clientY;
            console.log(newUp)
            console.log(newDown)
            if (newUp != undefined && newDown != undefined) {
                console.log("有效")
                preUp = newUp
                preDown = newDown
            }
        });
        document.addEventListener('mousemove', (e) => {
            // console.log("mousemove")
            if (!isDragging) return;
            e.preventDefault();

            let length = e.clientY - dragStartY;

            let outputArea = document.getElementById('output');
            let editArea = document.getElementById('editor');
            newUp = (preUp + length);
            newDown = (preDown - length);

            editArea.style.height = newUp + 'px';
            editor.layout();
            outputArea.style.height = newDown + 'px';
        });
        document.addEventListener('mouseup', () => {
            // console.log("mouseup")
            console.log(newUp)
            console.log(newDown)
            //preUp = newUp
            //preDown = newDown
            isDragging = false;
            console.log("停止拖拽")

        });

        var debugButton = document.getElementById("debug");
        debugButton.onclick = debugCode;

        function debugCode() {
            document.getElementById("step").style.display = 'inline';
            document.getElementById("next").style.display = 'inline';
            document.getElementById("stepUp").style.display = 'inline';
            document.getElementById("cont").style.display = 'inline';

            let jsonData = {
                context: context,
                breakpointsLines: breakpointsLines
            };

            let requestOptions = {
                method: 'POST', // 请求方法
                headers: {
                    'Content-Type': 'application/json' // 指定内容类型为 JSON
                },
                body: JSON.stringify(jsonData), // 将 JSON 对象转换为字符串
                redirect: 'follow' // 自动重定向
            };
            fetch(ip + '/debugCode', requestOptions)
                .then(response => response.json())
                .then(result => {
                    debugStep(result);
                })
                .catch(error => console.log('error', error));
        }
    }

    document.getElementById("step").onclick = () => {

        fetch(ip + '/step')
            .then(response => response.json())
            .then(result => {
                debugStep(result);
            })
            .catch(error => console.log('error', error));
    };

    document.getElementById("next").onclick = () => {
        fetch(ip + '/next')
            .then(response => response.json())
            .then(result => {
                debugStep(result);
            })
            .catch(error => console.log('error', error));
    };

    document.getElementById("stepUp").onclick = () => {
        fetch(ip + '/stepUp')
            .then(response => response.json())
            .then(result => {
                debugStep(result);
            })
            .catch(error => console.log('error', error));
    };

    document.getElementById("cont").onclick = () => {
        fetch(ip + '/cont')
            .then(response => response.json())
            .then(result => {
                debugStep(result);
            })
            .catch(error => console.log('error', error));
    };

    document.getElementById("exit").onclick = () => {
        fetch(ip + '/exit')
            .then(response => response.json())
            .then(result => {
                debugStep(result);
            })
            .catch(error => console.log('error', error));
    };

    function debugStep(result) {
        console.log(result);
        lineToHighlight = result.debugInfo.currentLine;
        decorateEditor();
    }


})