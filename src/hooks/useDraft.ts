import { useEffect, useRef, useState } from 'react';

const KEY = 'html-edit:draft';

export function useDraft(initial: string) {
  const [code, setCode] = useState(
    () => localStorage.getItem(KEY) ?? initial,
  );
  const timer = useRef<number>();

  useEffect(() => {
    clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      localStorage.setItem(KEY, code);
    }, 300);
    return () => clearTimeout(timer.current);
  }, [code]);

  const clearDraft = () => localStorage.removeItem(KEY);

  return { code, setCode, clearDraft };
}