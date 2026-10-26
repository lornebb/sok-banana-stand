import { useEffect, useRef } from "react";
import { FaAngleDown } from "react-icons/fa";

const ScrollArrowButton: React.FC = () => {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <button className='scroll-arrow-button' onClick={handleScrollDown}>
      <FaAngleDown fontSize='150px' color='black' opacity={0.5} />
    </button>
  );
};

// scroll distance (px) over which the logo finishes shrinking
const SHRINK_DISTANCE = 250;
const MIN_SCALE = 0.5;
const MIN_OPACITY = 0.4;

export const HeroImg = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  // tie scale / position / opacity directly to scroll so the logo shrinks in time with it
  useEffect(() => {
    const logo = logoRef.current;
    if (!logo) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const p = Math.min(Math.max(window.scrollY / SHRINK_DISTANCE, 0), 1);
      // resting spot is centred; the docked spot is just above the top edge (matches old -top-16 / mt-3)
      const dockedTop = window.innerWidth >= 640 ? -64 : -52;
      const restingTop = (window.innerHeight - logo.offsetHeight) / 2;
      const y = (dockedTop - restingTop) * p;
      const scale = 1 - (1 - MIN_SCALE) * p;
      logo.style.transform = `translateY(${y}px) scale(${scale})`;
      logo.style.opacity = String(1 - (1 - MIN_OPACITY) * p);
      if (arrowRef.current) {
        arrowRef.current.style.opacity = String(1 - p);
        arrowRef.current.style.visibility = p >= 1 ? "hidden" : "visible";
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      className={`flex h-screen justify-center mx-auto items-center relative`}
    >
      <div ref={logoRef} className='fixed max-w-xl px-4 will-change-transform'>
        <img
          className='w-full'
          src='https://ik.imagekit.io/y6pjjzivw/SoK-Banana-Stand/SOK_Banana_Logo_v8-06.png'
          alt='son of kong logo'
        />
      </div>
      <div
        ref={arrowRef}
        className='absolute bottom-0 max-w-xl px-4 animate-bounce'
      >
        <ScrollArrowButton />
      </div>
    </div>
  );
};
