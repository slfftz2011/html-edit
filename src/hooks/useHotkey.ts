import { useEffect } from 'react';

export function useHotkey(combo: { key: string; ctrl?: boolean }, handler: () => void) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const ctrlOk = combo.ctrl ? e.ctrlKey || e.metaKey : true;
      if (ctrlOk && e.key === combo.key) {
        e.preventDefault();
        handler();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [combo.key, combo.ctrl, handler]);
}