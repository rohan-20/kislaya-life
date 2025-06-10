import { useEffect, useState } from "react";
import "./index.css";

const images = [
  "/Bougainvillea.webp",
  "/Bougainvillea_2.png",
  "/Bougainvillea_3.png",
];

function App() {
  const [index, setIndex] = useState(0);

  // Preload images
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const handleClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-white overflow-hidden">
      <div
        onClick={handleClick}
        className={`
          flex justify-center items-center bg-white cursor-pointer
          select-none transition-all duration-300
          w-[100vw] h-[100vh]
          sm:w-[50vw] sm:h-[50vh]
        `}
      >
        <img
          src={images[index]}
          alt={`Frame ${index + 1}`}
          className="max-w-full max-h-full object-contain transition-opacity duration-200 pointer-events-none select-none"
        />
      </div>
    </div>
  );
}

export default App;
