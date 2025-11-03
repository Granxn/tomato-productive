import ribbonImg from "@/assets/ribbon.png";
import moonImg from "@/assets/moon.png";
import bearImg from "@/assets/bear.png";
import kittyImg from "@/assets/kitty.png";

export const DecorativeElements = () => {
  return (
    <>
      <img
        src={ribbonImg}
        alt="Ribbon decoration"
        className="absolute top-8 left-8 w-16 hover-float"
        style={{ imageRendering: 'pixelated' }}
      />
      <img
        src={moonImg}
        alt="Moon decoration"
        className="absolute top-8 right-8 w-20 hover-float"
        style={{ imageRendering: 'pixelated', animationDelay: '0.5s' }}
      />
      <img
        src={bearImg}
        alt="Bear friend"
        className="absolute bottom-8 left-8 w-24 hover-float"
        style={{ imageRendering: 'pixelated', animationDelay: '1s' }}
      />
      <img
        src={kittyImg}
        alt="Kitty friend"
        className="absolute bottom-8 right-8 w-20 hover-float"
        style={{ imageRendering: 'pixelated', animationDelay: '1.5s' }}
      />
    </>
  );
};
