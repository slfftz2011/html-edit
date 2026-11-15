import type { ThemeName } from '../types';

interface Props {
  onRun: () => void;
  onReset: () => void;
  onClear: () => void;
  onDownload: () => void;
  onFullscreen: () => void;
  theme: ThemeName;
  setTheme: (t: ThemeName) => void;
}

const THEMES: { key: ThemeName; label: string }[] = [
  { key: 'light', label: '浅色' },
  { key: 'dark', label: '深色' },
  { key: 'bright', label: '明亮' },
];

export function Toolbar(p: Props) {
  return (
    <div className="toolbar">
      <button onClick={p.onRun}>运行 (Ctrl+Enter)</button>
      <button onClick={p.onReset}>重置</button>
      <button onClick={p.onClear}>清空</button>
      <button onClick={p.onDownload}>下载</button>
      <button onClick={p.onFullscreen}>全屏</button>
      <select
        value={p.theme}
        onChange={(e) => p.setTheme(e.target.value as ThemeName)}
      >
        {THEMES.map((t) => (
          <option key={t.key} value={t.key}>{t.label}</option>
        ))}
      </select>
    </div>
  );
}