import { useCallback, useRef, useState } from 'react';
import { CodeEditor } from './components/CodeEditor';
import { PreviewPane } from './components/PreviewPane';
import { Toolbar } from './components/Toolbar';
import { StatusBar } from './components/StatusBar';
import { ResourceSection } from './components/ResourceSection';
import { useTheme } from './hooks/useTheme';
import { useDraft } from './hooks/useDraft';
import { useHotkey } from './hooks/useHotkey';
import { INITIAL_CODE, EXAMPLES } from './data/examples';

export default function App() {
  const { theme, setTheme, monacoTheme } = useTheme();
  const { code, setCode, clearDraft } = useDraft(INITIAL_CODE);
  const [runKey, setRunKey] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const run = useCallback(() => setRunKey((k) => k + 1), []);
  useHotkey({ key: 'Enter', ctrl: true }, run);

  const reset = () => setCode(INITIAL_CODE);
  const clear = () => { clearDraft(); setCode(''); };

  const download = () => {
    const blob = new Blob([code], { type: 'text/html' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'index.html';
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const fullscreen = () => {
    const el = containerRef.current;
    if (!el) return;
    document.fullscreenElement ? document.exitFullscreen() : el.requestFullscreen();
  };

  return (
    <div className="app" ref={containerRef}>
      <Toolbar
        onRun={run} onReset={reset} onClear={clear}
        onDownload={download} onFullscreen={fullscreen}
        theme={theme} setTheme={setTheme}
      />
      <main className="workspace">
        <section className="editor-pane">
          <CodeEditor value={code} onChange={setCode} theme={monacoTheme} />
        </section>
        <section className="preview-pane">
          <PreviewPane html={code} runKey={runKey} />
        </section>
      </main>
      <StatusBar code={code} />
      <ResourceSection examples={EXAMPLES} />
    </div>
  );
}