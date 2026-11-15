interface Props {
    html: string;
    runKey: number; // 变化即强制重载 iframe
  }
  
  export function PreviewPane({ html, runKey }: Props) {
    return (
      <iframe
        key={runKey}
        title="preview"
        className="preview-frame"
        sandbox="allow-scripts allow-modals"
        srcDoc={html}
      />
    );
  }