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
const MIN_OPACITY = 1;
// gap between the docked logo and the top of the screen
const DOCKED_GAP = 12;

export const HeroImg = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const bandRef = useRef<HTMLDivElement>(null);

  // tie scale / position / opacity directly to scroll so the logo shrinks in time with it
  useEffect(() => {
    const logo = logoRef.current;
    if (!logo) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const p = Math.min(Math.max(window.scrollY / SHRINK_DISTANCE, 0), 1);
      // resting spot is centred; the docked spot is top-centre with a small gap above the shrunk logo
      const dockedTop = DOCKED_GAP - (logo.offsetHeight * (1 - MIN_SCALE)) / 2;
      const restingTop = (window.innerHeight - logo.offsetHeight) / 2;
      const y = (dockedTop - restingTop) * p;
      const scale = 1 - (1 - MIN_SCALE) * p;
      logo.style.transform = `translateY(${y}px) scale(${scale})`;
      logo.style.opacity = String(1 - (1 - MIN_OPACITY) * p);
      // soft header band so content scrolls out underneath the docked logo
      if (bandRef.current) {
        bandRef.current.style.height = `${
          DOCKED_GAP + logo.offsetHeight * MIN_SCALE + 28
        }px`;
        bandRef.current.style.opacity = String(p);
      }
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
      <div
        ref={bandRef}
        aria-hidden
        className='pointer-events-none fixed inset-x-0 top-0 z-30'
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,224,133,0.96) 65%, rgba(255,224,133,0))",
        }}
      />
      <div
        ref={logoRef}
        className='pointer-events-none fixed z-40 max-w-xl px-4 will-change-transform'
      >
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
