import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const frame = window.requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ block: "start", behavior: "auto" });
      });
      return () => window.cancelAnimationFrame(frame);
    }

    window.scrollTo({ left: 0, top: 0, behavior: "auto" });
    return undefined;
  }, [hash, pathname]);

  return null;
}
