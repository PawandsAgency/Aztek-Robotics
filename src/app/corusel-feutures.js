"use client";

import Image from "next/image";
import React from "react";
import { Typography, Carousel } from "@material-tailwind/react";


export function CarouselFeatures() {
  return (
    <div>
    <section className="px-8 pt-40 pb-20">
      <div className="flex mb-16 flex-col items-center">
        <Typography variant="h2" className="text-center mb-2" color="blue-gray">
          Değerli Müşterilerimiz ve Partnerlerimiz bizim hakimizda ne düşümüyor
        </Typography>
        <Typography
          variant="lead"
          className="mb-3 w-full text-center font-normal !text-gray-500 lg:w-10/12"
        >
         Aztek robotics olarak teknoloji ve sanayi dünyasinda başarili işletmelerle çalişmaktan  gurur duyuyuruz.
        </Typography>
      </div>
      <div className="container mx-auto !rounded-lg bg-[url('/image/Background.png')] bg-center py-10 lg:px-16">
        <Carousel
          transition={{ duration: 1 }}
          nextArrow={() => <></>}
          prevArrow={() => <></>}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute left-16 bottom-0 z-50 flex h-5 w-20 -translate-x-2/4 gap-2 md:left-2/4">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 w-10 cursor-pointer transition-all content-[''] ${
                    activeIndex === i ? "bg-white" : "bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          {new Array(1).fill("").map((_, i) => (
            <div
              key={i}
              className="!relative flex grid-cols-1 flex-col-reverse gap-6 px-10 py-14 md:grid md:grid-cols-5  md:gap-14 md:py-20"
            >
              <div className="col-span-3 flex flex-col items-start justify-center">
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-5 text-xl font-normal "
                >
                Aztek Robotics ile çalışmak, beklentilerimizin ötesine geçen bir deneyim oldu. Profesyonel yaklaşımınız ve müşteri odaklı hizmet anlayışınız, projelerimizin başarıya ulaşmasında önemli bir rol oynadı.

Sizlerle olan işbirliğimizin devamını diliyor ve bu süreçte gösterdiğiniz destek için tüm Aztek Robotics ekibine teşekkür ediyoruz.
                </Typography>
                <Typography
                  variant="small"
                  color="white"
                  className="font-medium uppercase"
                >
                  Rıza Talebi,{" "}
                  <span className="font-normal opacity-60">
                   CEO @ Pawands.CO
                  </span>
                </Typography>
              </div>
              <div className="col-span-2 flex w-full shrink-0 md:!justify-end">
              
              </div>
            </div>
            
          ))}
        </Carousel>
      </div>
    </section>
    </div>
  );
}

export default CarouselFeatures;