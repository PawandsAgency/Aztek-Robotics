import { Typography, Button, Input } from "@material-tailwind/react";

const LINKS = [
  {
    title: "Aztek Robotıcs",
    items: ["Hakımızda", "Aztek Robotics olarak, müşterilerimizin ihtiyaçlarına göre özelleştirilmiş çözümler sunma misyonuyla hareket ediyoruz. Yüksek kalite standartlarımız ve yenilikçi yaklaşımımızla, endüstriyel otomasyon ve makine üretimi alanında öncü olmayı hedefliyoruz.", "Turkiye Istanbul , Tuzla Birlik Organize Sanayi", "+90 (541) 521 28 02"],
  },

 
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <div>
    <footer className="px-8 pt-24 pb-8">
      <div className="container max-w-6xl flex flex-col mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 !w-full ">
          <div className="flex col-span-2 items-center gap-10 mb-10 lg:mb-0 md:gap-36">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography variant="h6" color="blue-gray" className="mb-4">
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      
                      className="py-1 font-normal !text-gray-700 transition-colors"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
     
        </div>
        <Typography
          color="blue-gray"
          className="md:text-center mt-16 font-normal !text-gray-700"
        >
          &copy; 2025 yapildi{" "}
          <a href="https://aztekrobotics.com" target="_blank">
          Aztek Robotics
          </a>{" "}
          Tarafindan{" "}
          <a href="https://pawands.co" target="_blank">
           pawands.co
          </a>
          .
        </Typography>
      </div>
    </footer>
    </div>
  );
}

export default Footer;