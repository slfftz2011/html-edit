export function StatusBar({ code }: { code: string }) {
    const lines = code ? code.split('\n').length : 0;
    return (
      <div className="statusbar">
        <span>行数: {lines}</span>
        <span>字符数: {code.length}</span>
      </div>
    );
  }