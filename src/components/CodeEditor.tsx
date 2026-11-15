import Editor from '@monaco-editor/react';

interface Props {
  value: string;
  onChange: (v: string) => void;
  theme: string; // Monaco theme name
}

export function CodeEditor({ value, onChange, theme }: Props) {
  return (
    <Editor
      height="100%"
      language="html"
      theme={theme}
      value={value}
      onChange={(v) => onChange(v ?? '')}
      options={{
        minimap: { enabled: false },
        fontSize: 14,
        wordWrap: 'on',
        automaticLayout: true,
        tabSize: 2,
        scrollBeyondLastLine: false,
      }}
    />
  );
}