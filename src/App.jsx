import { useState } from "react";

const images = [
  "/Bougainvillea.webp",
  "/Bougainvillea_2.png",
  "/Bougainvillea_3.png",
];

function App() {
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
      }}
    >
      <div
        onClick={handleClick}
        style={{
          width: "50vw",
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          cursor: "pointer",
          transition: "all 0.3s ease",
          userSelect: "none",
          WebkitUserSelect: "none",
          MozUserSelect: "none",
          msUserSelect: "none",
          WebkitTapHighlightColor: "transparent",
        }}
      >
        <img
          src={images[index]}
          alt={`Frame ${index + 1}`}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            transition: "opacity 0.2s ease",
            userSelect: "none",
            WebkitUserSelect: "none",
            MozUserSelect: "none",
            msUserSelect: "none",
            pointerEvents: "none",
          }}
        />
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            div[style*="width: 50vw"] {
              width: 80vw !important;
              height: 60vh !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default App;
