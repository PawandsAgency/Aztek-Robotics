"use client";

import { Button, Typography, Card } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/header.png')] bg-cover bg-no-repeat">
    <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
    <div className="grid min-h-screen px-8">
      <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
        <Typography
          variant="h1"
          color="white"
          className="md:max-w-full lg:max-w-3xl"
        >
         Özel Tasarım ve Üretim Çözümleri.
        </Typography>
        <div>
          <a href="https://wa.me/+905415212802?text=merhabalar.%20daha%20fazla%20bilgi%20alabilirmiyim?">
          <Button  variant="gradient" color="white">
           ILETISIME GECINIZ
          </Button>
          </a>
          
        </div>
      </div>
    </div>
  </div>
  );
}
export default Hero;