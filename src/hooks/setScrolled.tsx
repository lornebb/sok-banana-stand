import { useCallback, useEffect, useRef, useState } from "react";

export const StickyHeader = (defaultScrolled = false) => {
  const [scrolled, setIsScrolled] = useState(defaultScrolled);
  const tableRef = useRef<HTMLInputElement>(null);
  const toggleScrolled = useCallback(
    ({ top, bottom }: any) => {
      if (top <= 0 && bottom > 2 * 68) {
        !scrolled && setIsScrolled(true);
      } else {
        scrolled && setIsScrolled(false);
      }
    },
    [scrolled]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset >= 200);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [toggleScrolled]);
  return { scrolled };
};
