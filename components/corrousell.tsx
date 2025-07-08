import React, { useState, useEffect } from "react";

interface CarouselItem {
  image: string;
  text: string;
}

interface CarousellProps {
  items: CarouselItem[];
  autoplayInterval?: number;
}

const Carrousell: React.FC<CarousellProps> = ({
  items,
  autoplayInterval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [items.length, autoplayInterval]);

  if (items.length === 0) return null;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full grid items-center justify-items-center">
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white cursor-pointer text-2xl transition-colors hover:bg-white/40 rounded-full h-10 w-10 z-10"
        onClick={goToPrevious}
      >
        &#8249;
      </button>
      <div className="w-1/2 h-80 overflow-hidden my-9 relative">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${items.length * 100}%`,
          }}
        >
          {items.map((item, idx) => (
            <div key={idx} className="w-full h-full flex-shrink-0 relative">
              {item.text && (
                <h2 className="w-full bg-black/50 ">
                  {item.text}
                </h2>
              )}
              <img
                src={item.image}
                alt={item.text || `Slide ${idx + 1}`}
                className="object-cover h-full "
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white cursor-pointer text-2xl transition-colors hover:bg-white/40 rounded-full h-10 w-10 z-10"
        onClick={goToNext}
      >
        &#8250;
      </button>
      <div style={{ marginTop: "10px" }}>
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            style={{
              margin: "0 4px",
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              border: "none",
              background: idx === currentIndex ? "#333" : "#ccc",
              cursor: "pointer",
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carrousell;
