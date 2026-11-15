import { useCallback, useEffect, useRef, useState } from 'react';

const KEY = 'html-edit:draft';

export function useDraft(initial: string) {
  const [code, setCode] = useState<string>(
    () => localStorage.getItem(KEY) ?? initial,
  );
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (timer.current !== undefined) {
      clearTimeout(timer.current);
    }
    timer.current = window.setTimeout(() => {
      localStorage.setItem(KEY, code);
    }, 300);
    return () => {
      if (timer.current !== undefined) {
        clearTimeout(timer.current);
      }
    };
  }, [code]);

  const clearDraft = useCallback(() => {
    if (timer.current !== undefined) {
      clearTimeout(timer.current);
    }
    localStorage.removeItem(KEY);
  }, []);

  return { code, setCode, clearDraft };
}