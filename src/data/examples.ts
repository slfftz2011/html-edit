import type { ExampleItem } from '../types';

export const INITIAL_CODE = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <title>Hello HTML</title>
  <style>
    body { font-family: system-ui, -apple-system, sans-serif; padding: 24px; }
    h1 { color: #2b6cb0; }
  </style>
</head>
<body>
  <h1>Hello HTML</h1>
  <p>在左侧编辑代码，点击“运行”或按 Ctrl / Cmd + Enter 预览。</p>
</body>
</html>`;

export const EXAMPLES: ExampleItem[] = [
  {
    id: 'basic',
    title: '基础页面结构',
    code: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <title>基础页面</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>这是一个最基础的 HTML 页面。</p>
</body>
</html>`,
  },
  {
    id: 'flex',
    title: 'Flex 布局',
    code: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <style>
    .container { display: flex; gap: 12px; padding: 24px; }
    .box { flex: 1; padding: 24px; background: #bee3f8; border-radius: 8px; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>
  </div>
</body>
</html>`,
  },
  {
    id: 'grid',
    title: 'CSS Grid 布局',
    code: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <style>
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      padding: 24px;
    }
    .cell { padding: 24px; background: #c6f6d5; border-radius: 8px; text-align: center; }
  </style>
</head>
<body>
  <div class="grid">
    <div class="cell">1</div><div class="cell">2</div><div class="cell">3</div>
    <div class="cell">4</div><div class="cell">5</div><div class="cell">6</div>
  </div>
</body>
</html>`,
  },
];