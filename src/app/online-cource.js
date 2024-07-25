"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  CheckBadgeIcon,
  InboxIcon,
  BuildingStorefrontIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "@/components/feature-card";

const FEATURES = [
  {
    icon: BuildingStorefrontIcon,
    title: "Özel Makinalar",
    description:
      "fabrikaniza ve işletmenize özgü makina imalati",
  },
  {
    icon: CubeTransparentIcon,
    title: "Hizli ve ücretsiz teslimat",
    description:
      "ekibimiz makinalari güvenli bir şekildde fakrikaniza ulaştiriyor",
  },
  {
    icon: CheckBadgeIcon,
    title: "Tamamen Hazir",
    description: "aztek robotics olarak makinalarinizi 100% çalişma ve garantili çalişma seviyesine getirerek işletmeniz için hazir ve kulanişli makinalar üretiyoruz",
  },
];

export function OnlineCourse() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto grid grid-cols-1 place-items-center lg:grid-cols-3">
        <div className="col-span-1 rounded-xl lg:mb-0 mb-12">
          <Image
            width={768}
            height={500}
            src="/image/code.jpg"
            className="h-full max-h-[500px] w-full object-cover scale-110"
            alt="online course"
          />
        </div>
        <div className="col-span-2 lg:pl-24">
          <Typography variant="h2" color="blue-gray" className="mb-4">
          Müşteriye Özel, Mükemmel Çözümler.
          </Typography>
          <Typography
            variant="lead"
            className="mb-5 max-w-lg px-4 text-left text-lg !text-gray-500 lg:px-0  "
          >
            Aztek Robotics, özel tasarım ve üretim çözümleri sunan lider bir mühendislik firmasıdır. Müşterilerimize en yüksek kalitede ve özel ihtiyaçlarına uygun makine ve otomasyon çözümleri sunmaktayız.
          </Typography>

          <div className="col-span-2 grid grid-cols-1 gap-10 sm:grid-cols-3 ">
            {FEATURES.map(({ icon, title, description }) => (
              <FeatureCard key={title} icon={icon} title={title}>
                {description}
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OnlineCourse;