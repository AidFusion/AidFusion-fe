import React, { useRef } from 'react';
import { Button } from './ui/button';

export const Testimonials = ({ items, type }) => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -200,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: 200,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative">
      <div className="flex overflow-x-hidden overscroll-x-contain p-4 space-x-4 scroll-container" ref={containerRef}>
        {type === 'groceries' && items.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 p-4 rounded-lg shadow-md border bg-white"
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <p className="text-gray-800 font-semibold">{item.name}</p>
            <p className="text-gray-600">{item.items} items</p>
          </div>
        ))}
        {type === 'testimonials' && items.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 bg-white p-4 rounded-lg shadow-md border"
          >
            <div>{item.testimony}</div>
            <div>{item.name}</div>
          </div>
        ))}
      </div>
      <Button variant='icon' className='bg-transparent transform -translate-y-1/2 scroll-button' onClick={scrollLeft} />
      <Button title="&gt;" styles="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#2fac51] rounded-l-xl p-2 scroll-button" onClick={scrollRight} />
    </div>
  );
};