import { StickyHeader } from "../hooks/setScrolled";
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

export const HeroImg = () => {
  const { scrolled } = StickyHeader();

  return (
    <div
      className={`flex h-screen justify-center mx-auto items-center relative`}
    >
      <div
        className={`fixed max-w-xl px-4 ${
          scrolled
            ? "transition ease-in-out duration-300 scale-50 -top-16 mt-3 sm:mt-0"
            : "scale-100 transition"
        }`}
      >
        <img
          className='w-full'
          src='https://ik.imagekit.io/y6pjjzivw/SoK-Banana-Stand/SOK_Banana_Logo_v8-06.png'
          alt='son of kong logo'
        />
      </div>
      <div
        className={`absolute bottom-0 max-w-xl px-4 animate-bounce ${
          scrolled ? "transition ease-out duration-400 invisible" : ""
        }`}
      >
        <ScrollArrowButton />
      </div>
    </div>
  );
};
