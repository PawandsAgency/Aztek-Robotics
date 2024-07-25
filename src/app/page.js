import { Navbar, Footer } from "@/components";

// sections
import Hero from "./Hero";
import OnlineCourse from "./online-cource";
import WhyChooseUs from "./why-choose-us";
import CarouselFeatures from "./corusel-feutures";


export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <OnlineCourse />
      <WhyChooseUs />
      <CarouselFeatures />
      <Footer />
    </>
  );
}