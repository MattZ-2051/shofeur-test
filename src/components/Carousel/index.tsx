'use client';
import { useState } from 'react';
import Image from 'next/image';

type CarouselItem = {
  img: string;
  title: string;
  subTitle: string;
};

interface IProps {
  items: CarouselItem[];
}

const Carousel = ({ items }: IProps) => {
  const [slide, setSlide] = useState<number>(0);

  const handleSlide = (e: any) => {
    const id = e.target.id;
    if (id === 'next') {
      setSlide((prevState) => {
        return prevState + 1 === items.length ? 0 : prevState + 1;
      });
    } else if (id === 'prev') {
      setSlide((prevState) => {
        return prevState === 0 ? items.length - 1 : prevState - 1;
      });
    }
  };

  return (
    <div className="relative rounded-lg">
      <div className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0">
        {items.map((item, index) => {
          return (
            <div key={index}>
              <button
                type="button"
                onClick={() => setSlide(index)}
                className="bg-white  mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none "
              ></button>
            </div>
          );
        })}
      </div>

      <div className="relative w-full overflow-hidden">
        {items.map((item, index) => {
          return (
            <div
              className={`relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none ${
                slide === index ? '' : 'hidden'
              } `}
              style={{ backfaceVisibility: 'hidden' }}
              key={index}
            >
              <Image
                src={item.img}
                className="block w-full h-[500px] brightness-75"
                alt="..."
                width={1000}
                height={500}
              />
              <div className="absolute inset-x-[15%] bottom-5 py-5 text-center text-white md:block">
                <h5 className="text-xl">{item.title}</h5>
                <p>{item.subTitle}</p>
              </div>
            </div>
          );
        })}
      </div>

      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        onClick={handleSlide}
        id="prev"
      >
        <span className="inline-block w-8 h-8" id="prev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
            id="prev"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Previous
        </span>
      </button>
      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        onClick={handleSlide}
        id="next"
      >
        <span className="inline-block w-8 h-8" id="next">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
            id="next"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Next
        </span>
      </button>
    </div>
  );
};

export default Carousel;
