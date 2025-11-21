// 示例代码库
const examples = {
    1: `<!DOCTYPE html>
<html>
<head>
    <title>标题和段落示例</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background: #f0f8ff;
        }
        h1 { color: #2c5aa0; }
        h2 { color: #4a7bc8; }
        h3 { color: #6a8fd8; }
        p { line-height: 1.6; }
    </style>
</head>
<body>
    <h1>这是一个一级标题</h1>
    <h2>这是一个二级标题</h2>
    <h3>这是一个三级标题</h3>
    <p>这是一个段落。HTML中的段落用于显示文本内容，可以包含多行文字。</p>
    <p>这是另一个段落。每个段落都会自动换行并有一定的间距。</p>
</body>
</html>`,

    2: `<!DOCTYPE html>
<html>
<head>
    <title>图片和链接示例</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background: #fff0f5;
        }
        .container {
            text-align: center;
        }
        img {
            max-width: 100%;
            height: auto;
            border-radius: 10px;
            margin: 20px 0;
        }
        a {
            color: #e91e63;
            text-decoration: none;
            font-weight: bold;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>图片和链接演示</h1>
        <img src="https://picsum.photos/400/300?random=1" alt="示例风景图片">
        <p>点击下面的链接访问学习资源：</p>
        <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML" target="_blank">MDN HTML文档</a>
        <br>
        <a href="https://www.w3schools.com/html/" target="_blank">W3Schools HTML教程</a>
    </div>
</body>
</html>`,

    3: `<!DOCTYPE html>
<html>
<head>
    <title>表格示例</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background: #f0fff0;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }
        th {
            background-color: #4CAF50;
            color: white;
        }
        tr:nth-child(even) {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h1>HTML表格示例</h1>
    <table>
        <thead>
            <tr>
                <th>姓名</th>
                <th>年龄</th>
                <th>城市</th>
                <th>职业</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>张三</td>
                <td>25</td>
                <td>北京</td>
                <td>前端开发</td>
            </tr>
            <tr>
                <td>李四</td>
                <td>30</td>
                <td>上海</td>
                <td>UI设计师</td>
            </tr>
            <tr>
                <td>王五</td>
                <td>28</td>
                <td>深圳</td>
                <td>全栈开发</td>
            </tr>
        </tbody>
    </table>
</body>
</html>`,

    4: `<!DOCTYPE html>
<html>
<head>
    <title>列表示例</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background: #fffaf0;
        }
        .list-container {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
        }
        .list-box {
            background: white;
            padding: 20px;
            margin: 10px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            flex: 1;
            min-width: 300px;
        }
        ul { list-style-type: disc; }
        ol { list-style-type: decimal; }
        li { margin: 5px 0; }
    </style>
</head>
<body>
    <h1>HTML列表示例</h1>
    <div class="list-container">
        <div class="list-box">
            <h3>无序列表</h3>
            <ul>
                <li>HTML基础</li>
                <li>CSS样式</li>
                <li>JavaScript交互</li>
                <li>响应式设计</li>
            </ul>
        </div>
        <div class="list-box">
            <h3>有序列表</h3>
            <ol>
                <li>学习HTML标签</li>
                <li>掌握CSS选择器</li>
                <li>理解JavaScript语法</li>
                <li>构建完整项目</li>
            </ol>
        </div>
    </div>
</body>
</html>`,

    5: `<!DOCTYPE html>
<html>
<head>
    <title>文字样式示例</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background: #f8f8ff;
        }
        .text-sample {
            margin: 15px 0;
            padding: 10px;
            border-left: 4px solid #6a5acd;
            background: white;
        }
        .bold { font-weight: bold; color: #d35400; }
        .italic { font-style: italic; color: #2980b9; }
        .underline { text-decoration: underline; color: #27ae60; }
        .highlight {
            background-color: #fffacd;
            padding: 2px 4px;
        }
    </style>
</head>
<body>
    <h1>HTML文字样式示例</h1>
    <div class="text-sample">
        <p>这是<span class="bold">加粗</span>的文字效果</p>
        <p>这是<span class="italic">斜体</span>的文字效果</p>
        <p>这是<span class="underline">下划线</span>的文字效果</p>
        <p>这是<span class="highlight">高亮</span>的文字效果</p>
        <p>可以<span class="bold italic">同时使用</span>多种样式</p>
    </div>
</body>
</html>`,

    6: `<!DOCTYPE html>
<html>
<head>
    <title>CSS样式示例</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
        }
        .card {
            background: rgba(255,255,255,0.1);
            padding: 25px;
            margin: 15px 0;
            border-radius: 15px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.2);
        }
        .gradient-text {
            background: linear-gradient(45deg, #ff6b6b, #feca57);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: bold;
        }
        .button {
            background: linear-gradient(45deg, #ff6b6b, #feca57);
            border: none;
            padding: 12px 24px;
            border-radius: 25px;
            color: white;
            font-weight: bold;
            cursor: pointer;
            transition: transform 0.2s;
        }
        .button:hover {
            transform: translateY(-2px);
        }
    </style>
</head>
<body>
    <div class="card">
        <h1 class="gradient-text">CSS样式演示</h1>
        <p>这个示例展示了现代CSS特性：</p>
        <ul>
            <li>渐变背景</li>
            <li>毛玻璃效果</li>
            <li>动画过渡</li>
            <li>响应式布局</li>
        </ul>
        <button class="button">悬停效果按钮</button>
    </div>
</body>
</html>`
};

// 主题切换功能
function setTheme(theme) {
    document.body.className = document.body.className.replace(/theme-\w+/g, '');
    document.body.classList.add(`theme-${theme}`);
    localStorage.setItem('editorTheme', theme);
    
    // 同步两个主题选择器
    document.getElementById('theme-selector').value = theme;
    document.getElementById('mobile-theme-selector').value = theme;
    
    // 更新语法高亮
    updateCodeDisplay();
}

// 主题选择器事件
document.getElementById('theme-selector').addEventListener('change', function() {
    setTheme(this.value);
});

document.getElementById('mobile-theme-selector').addEventListener('change', function() {
    setTheme(this.value);
});


// 更新代码显示（带语法高亮）
function updateCodeDisplay() {
    const textarea = document.getElementById('html-code');
    const codeDisplay = document.getElementById('code-display');
    const code = textarea.value;
    
    // 应用语法高亮
    codeDisplay.textContent = code;
    hljs.highlightElement(codeDisplay);
    
    // 保持滚动位置同步
    codeDisplay.scrollTop = textarea.scrollTop;
    codeDisplay.scrollLeft = textarea.scrollLeft;
}

// 添加拖拽调整功能
document.addEventListener('DOMContentLoaded', function() {
    const resizer = document.getElementById('resizer');
    const editorPanel = document.getElementById('editor-panel');
    const previewPanel = document.getElementById('preview-panel');
    const container = document.querySelector('.editor-container');
    
    // 初始化编辑器高度
    const codeEditor = document.getElementById('html-code');
    codeEditor.style.height = 'auto';
    codeEditor.style.height = (codeEditor.scrollHeight) + 'px';

    hljs.configure({
        languages: ['html', 'css', 'javascript', 'xml']
    });
    
    // 运行初始代码
    runCode();
    setupEventListeners();
    
    // 拖拽功能实现
    let startX, startY, startWidth, startHeight;
    
    function initDrag(e) {
        startX = e.pageX;
        startY = e.pageY;
        startWidth = editorPanel.offsetWidth;
        startHeight = editorPanel.offsetHeight;
        
        document.addEventListener('mousemove', resize);
        document.addEventListener('mouseup', stopResize);
        document.addEventListener('touchmove', resize);
        document.addEventListener('touchend', stopResize);
        
        resizer.style.userSelect = 'none';
        resizer.style.touchAction = 'none';
    }
    
    function resize(e) {
        e.preventDefault();
        if (window.innerWidth > 768) { // 桌面模式 - 水平拖拽
            const width = startWidth + (e.pageX - startX);
            // 限制最小宽度
            if (width >= 300 && width <= container.offsetWidth - 300) {
                editorPanel.style.width = width + 'px';
                previewPanel.style.width = (container.offsetWidth - width - 8) + 'px';
            }
        } else { // 移动模式 - 垂直拖拽
            const height = startHeight + (e.pageY - startY);
            // 限制最小高度
            if (height >= 200 && height <= container.offsetHeight - 200) {
                editorPanel.style.height = height + 'px';
                previewPanel.style.height = (container.offsetHeight - height - 8) + 'px';
            }
        }
    }
    
    function stopResize() {
        document.removeEventListener('mousemove', resize);
        document.removeEventListener('mouseup', stopResize);
        document.removeEventListener('touchmove', resize);
        document.removeEventListener('touchend', stopResize);
    }
    
    resizer.addEventListener('mousedown', initDrag);
    resizer.addEventListener('touchstart', initDrag);
});

// 预览全屏功能
function openPreviewFullscreen() {
    const modal = document.getElementById('previewModal');
    const fullscreenFrame = document.getElementById('fullscreenPreview');
    const modalTitle = document.getElementById('modalTitle');
    const code = document.getElementById('html-code').value;
    
    // 提取页面标题
    const titleMatch = code.match(/<title>(.*?)<\/title>/i);
    modalTitle.textContent = titleMatch ? titleMatch[1] : '网页预览';
    
    // 设置iframe内容
    fullscreenFrame.srcdoc = code;
    
    // 显示模态框
    modal.style.display = 'flex';
}

function closePreviewFullscreen() {
    const modal = document.getElementById('previewModal');
    modal.style.display = 'none';
}

// 点击模态框背景关闭
document.getElementById('previewModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closePreviewFullscreen();
    }
});

// 编辑区全屏功能
function toggleEditorFullscreen() {
    const element = document.getElementById('editor-panel');
    const isFullscreen = element.classList.contains('fullscreen');
    
    if (isFullscreen) {
        // 退出全屏
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        
        element.classList.remove('fullscreen');
        // 恢复按钮
        const closeBtn = document.getElementById('editor-fullscreen-close');
        if (closeBtn) closeBtn.remove();
    } else {
        // 进入全屏
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
        
        element.classList.add('fullscreen');
    }
}

// 下载代码功能
function downloadCode() {
    const code = document.getElementById('html-code').value;
    const blob = new Blob([code], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'my-html-page.html';
    document.body.appendChild(a);
    a.click();
    
    // 清理
    setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }, 0);
    
    showMessage('代码已下载', 'success');
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    runCode(); // 初始运行示例代码
    setupEventListeners();
});

// 添加代码格式化功能
function formatCode() {
    const codeEditor = document.getElementById('html-code');
    try {
        // HTML格式化处理
        let formatted = '';
        let indent = 0;
        const lines = codeEditor.value.split('\n');
        
        lines.forEach(line => {
            const trimmed = line.trim();
            if (trimmed.startsWith('</')) indent = Math.max(0, indent - 4);
            formatted += ' '.repeat(indent) + trimmed + '\n';
            if (trimmed.startsWith('<') && !trimmed.startsWith('</') && !trimmed.endsWith('/>')) {
                indent += 4;
            }
        });
        
        codeEditor.value = formatted;
        codeEditor.style.height = 'auto';
        codeEditor.style.height = (codeEditor.scrollHeight) + 'px';
        showMessage('代码已格式化', 'success');
    } catch (error) {
        showMessage('格式化失败: ' + error.message, 'error');
    }
}

// 设置事件监听器
function setupEventListeners() {
    const codeEditor = document.getElementById('html-code');
    
    // 代码编辑器自动调整高度 + 自动保存
    codeEditor.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
        
        // 防抖处理：1秒内无输入才保存
        clearTimeout(this.saveTimer);
        this.saveTimer = setTimeout(() => {
            localStorage.setItem('htmlLearningCode', this.value);
            showMessage('代码已自动保存', 'info');
        }, 1000);
    });
    
    // 快捷键支持
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'Enter') {
            runCode();
            e.preventDefault(); // 防止默认行为
        }
    });
}

// 显示指定区域
function showSection(section) {
    // 隐藏所有区域
    document.getElementById('editor-section').classList.add('hidden');
    document.getElementById('examples-section').classList.add('hidden');
    document.getElementById('resources-section').classList.add('hidden');
    
    // 显示目标区域
    const targetSection = document.getElementById(section + '-section');
    targetSection.classList.remove('hidden');
    targetSection.classList.add('fade-in');
}

// 运行代码
function runCode() {
    const code = document.getElementById('html-code').value;
    const preview = document.getElementById('preview');
    
    try {
        // 清空预览区域
        preview.innerHTML = '';
        
        // 创建iframe来安全运行代码
        const iframe = document.createElement('iframe');
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none';
        
        iframe.onload = function() {
            // 增加对文档对象的检查
            const iframeWindow = iframe.contentWindow;
            if (!iframeWindow) {
                throw new Error("无法访问iframe窗口");
            }
            
            const iframeDoc = iframeWindow.document;
            if (!iframeDoc) {
                throw new Error("无法访问iframe文档");
            }
            
            iframeDoc.open();
            iframeDoc.write(code);
            iframeDoc.close();
        };
        
        // 先将iframe添加到DOM再加载内容
        preview.appendChild(iframe);
        
        // 保存代码到本地存储
        localStorage.setItem('htmlLearningCode', code);
        
        // 显示成功消息
        showMessage('代码运行成功!', 'success');
        
    } catch (error) {
        showMessage('运行出错: ' + error.message, 'error');
    }
}

// 重置代码
function resetCode() {
    const defaultCode = `<!DOCTYPE html>
<html>
<head>
    <title>我的第一个网页</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
        }
        .container {
            background: rgba(255,255,255,0.1);
            padding: 30px;
            border-radius: 15px;
            backdrop-filter: blur(10px);
        }
        h1 {
            text-align: center;
            margin-bottom: 30px;
        }
        .card {
            background: white;
            color: #333;
            padding: 20px;
            margin: 10px 0;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>欢迎学习HTML!</h1>
        <div class="card">
            <h2>HTML是什么?</h2>
            <p>HTML是网页的基础构建语言，用于创建网页结构。</p>
        </div>
        <div class="card">
            <h2>开始学习</h2>
            <p>修改左侧代码，然后点击运行按钮查看效果!</p>
        </div>
        <div class="card">
            <h2>参考示例</h2>
            <p>点击导航栏学习示例参考学习!</p>
        </div>
    </div>
</body>
</html>`;
    
    document.getElementById('html-code').value = defaultCode;
    runCode();
    showMessage('代码已重置为默认示例', 'info');
}

// 加载示例代码
function loadExample(exampleId) {
    if (examples[exampleId]) {
        document.getElementById('html-code').value = examples[exampleId];
        runCode();
        showSection('editor');
        showMessage('示例代码已加载，点击运行查看效果', 'info');
    }
}

// 显示消息提示
function showMessage(message, type) {
    // 移除现有消息
    const existingMessage = document.querySelector('.message-toast');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // 创建新消息
    const messageDiv = document.createElement('div');
    messageDiv.className = `message-toast fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 transition transform duration-300 ${
        type === 'success' ? 'bg-green-500' : 
         type === 'error' ? 'bg-red-500' : 'bg-blue-500'
    } text-white`;
    
    messageDiv.textContent = message;
    document.body.appendChild(messageDiv);
    
    // 3秒后自动消失
    setTimeout(() => {
        messageDiv.style.transform = 'translateX(100%)';
        setTimeout(() => messageDiv.remove(), 300);
    }, 3000);
}

// 从本地存储加载代码
function loadFromStorage() {
    const savedCode = localStorage.getItem('htmlLearningCode');
    if (savedCode) {
        document.getElementById('html-code').value = savedCode;
    }
}

// 初始化本地存储功能

loadFromStorage();
