import ribbonImg from "@/assets/ribbon.png";
import moonImg from "@/assets/moon.png";
import bearImg from "@/assets/bear.png";
import kittyImg from "@/assets/kitty.png";

export const DecorativeElements = () => {
  return (
    <>
      {/* Ribbon - มุมซ้ายบน */}
      <img
        src={ribbonImg}
        alt="Ribbon decoration"
        className="absolute top-4 left-4 w-12 sm:top-8 sm:left-8 sm:w-20 md:w-24 lg:w-28 hover-float"
        style={{ imageRendering: 'pixelated' }}
      />
      
      {/* Moon - มุมขวาบน */}
      <img
        src={moonImg}
        alt="Moon decoration"
        className="absolute top-4 right-4 w-16 sm:top-8 sm:right-8 sm:w-24 md:w-28 lg:w-32 hover-float"
        style={{ imageRendering: 'pixelated', animationDelay: '0.5s' }}
      />
      
      {/* Bear - มุมซ้ายล่าง (ขยับลงมาในมือถือ) */}
      <img
        src={bearImg}
        alt="Bear friend"
        className="absolute bottom-32 left-4 w-20 sm:bottom-8 sm:left-8 sm:w-28 md:w-32 lg:w-36 hover-float"
        style={{ imageRendering: 'pixelated', animationDelay: '1s' }}
      />
      
      {/* Kitty - มุมขวาล่าง (ขยับลงมาในมือถือ) */}
      <img
        src={kittyImg}
        alt="Kitty friend"
        className="absolute bottom-32 right-4 w-16 sm:bottom-8 sm:right-8 sm:w-24 md:w-28 lg:w-32 hover-float"
        style={{ imageRendering: 'pixelated', animationDelay: '1.5s' }}
      />
    </>
  );
};
