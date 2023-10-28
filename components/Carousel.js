import { useRef, useState } from "react";

export default function Carousel({ children }) {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPosition(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - carouselRef.current.offsetLeft;
    const scroll = scrollLeft - x + startPosition;
    carouselRef.current.scrollLeft = scroll;
  };

  return (
    <div
      className="bg-gray-600/25 overflow-x-auto my-10 scrollbar-hide select-none"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      ref={carouselRef}
    >
      <div className="inline-flex">
        {children.map((child, index) => (
          <div key={index} className="min-w-[300px]">
            <div>{child}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
