import { useEffect, useState } from "react";
import type { CursorState } from "@/interfaces";

const initial: CursorState = { x: -200, y: -200, on: false, label: "" };

export function useCursor() {
  const [cur, setCur] = useState<CursorState>(initial);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setCur((s) => ({ ...s, x: e.clientX, y: e.clientY }));
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const curOn = (label: string) => {
    setCur((s) => ({ ...s, on: true, label }));
  };

  const curOff = () => {
    setCur((s) => ({ ...s, on: false }));
  };

  return { cur, curOn, curOff };
}
