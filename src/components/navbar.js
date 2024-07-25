import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
  Button,
} from "@material-tailwind/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import  logo   from '../logos/bglogo.png'
import Image from "next/image";


function NavItem({ children, href }) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}      
        variant="small"
        className="font-medium"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"
    >
   <div className="container mx-auto flex items-center justify-between">    
         <Image src={logo} alt={""} className="w-[150px]"/>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          <NavItem>Ana Sayfa</NavItem>
          <NavItem>Hakkimizda</NavItem>
          <NavItem>Hizmetlerimiz</NavItem>
         
        </ul>
        <div className="hidden gap-2 lg:flex">
        <a href="https://wa.me/+905415212802?text=merhabalar.%20daha%20fazla%20bilgi%20alabilirmiyim?">
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm"
          >
            <i className="fa-brands fa-whatsapp text-base" />
          </IconButton>
          </a>
          <a href="https://www.instagram.com/aztek.robotics/"> 
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm"
          >
            <i className="fa-brands fa-instagram text-base" />
          </IconButton>
          </a>
          <a href="https://www.material-tailwind.com/blocks" target="_blank">
            <Button color={isScrolling ? "gray" : "white"} size="sm">
              Iletisime geciniz
            </Button>
          </a>
        </div>
        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
            <NavItem>Ana Sayfa</NavItem>
            <NavItem>Hakkimizda</NavItem>
            <NavItem>Hizmetlerimiz</NavItem>
          </ul>
          <div className="mt-4 flex gap-2">
          <a href="https://wa.me/+905415212802?text=merhabalar.%20daha%20fazla%20bilgi%20alabilirmiyim?">
            <IconButton variant="text" color="gray" size="sm">
              <i className="fa-brands fa-whatsapp text-base" />
              </IconButton>
              </a>
           
         
              <a href="https://www.instagram.com/aztek.robotics/"> 
              <IconButton variant="text" color="gray" size="sm"> <i className="fa-brands fa-instagram text-base" />
              </IconButton>
              </a>
             
          
            <a href="https://wa.me/+905415212802?text=merhabalar.%20daha%20fazla%20bilgi%20alabilirmiyim?" target="_blank">
              <Button color="gray" size="sm" className="ml-auto">
               Iletisime geciniz
              </Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;