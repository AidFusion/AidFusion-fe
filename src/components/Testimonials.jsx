import React, { useRef, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from './ui/button';

export const Testimonials = ({sectionId}) => {
  const cards = [
    {
      title: "Card Title 1",
      description: "Card Description 1",
      content: "Card Content 1",
      footer: "Card Footer 1",
    },
    {
      title: "Card Title 2",
      description: "Card Description 2",
      content: "Card Content 2",
      footer: "Card Footer 2",
    },
    {
      title: "Card Title 3",
      description: "Card Description 3",
      content: "Card Content 3",
      footer: "Card Footer 3",
    },
    {
      title: "Card Title 2",
      description: "Card Description 2",
      content: "Card Content 2",
      footer: "Card Footer 2",
    },
    {
      title: "Card Title 3",
      description: "Card Description 3",
      content: "Card Content 3",
      footer: "Card Footer 3",
    },
    {
      title: "Card Title 2",
      description: "Card Description 2",
      content: "Card Content 2",
      footer: "Card Footer 2",
    },
    {
      title: "Card Title 3",
      description: "Card Description 3",
      content: "Card Content 3",
      footer: "Card Footer 3",
    },
  ];

  const cardContainerRef = useRef(null);
  const scrollInterval = 3000; // Adjust the interval (in milliseconds) for auto-scrolling

  const scrollLeft = () => {
    cardContainerRef.current.scrollBy({
      left: -200, // Adjust the scroll distance as needed
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    cardContainerRef.current.scrollBy({
      left: 200, // Adjust the scroll distance as needed
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    let interval;

    const autoScroll = () => {
      interval = setInterval(() => {
        scrollRight();
      }, scrollInterval);
    };

    autoScroll();

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="py-10 px-2 md:p-10 flex flex-col gap-10" id={sectionId}>
      <div className="text-2xl text-center font-semibold p-5">TESTIMONIALS</div>
      <div className="flex md:gap-12 gap-6 items-center relative">
        <Button variant="icon" className="scroll-button left hidden md:block rounded-full bg-secondary text-white" onClick={scrollLeft}>&lt;</Button>
        <div
          className="flex card-container overflow-x-hidden overscroll-x-contain px-10 md:p-4 space-x-4 scroll-container"
          ref={cardContainerRef}
        >
          {cards.map((card, index) => (
            <Card key={index} className="flex-shrink-0 md:w-1/2 w-[100%] text-center bg-secondary">
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{card.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button variant="icon" className="scroll-button right hidden md:block rounded-full bg-secondary text-white" onClick={scrollRight}> &gt;</Button>
      </div>
    </div>
  );
};