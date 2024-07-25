"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import {
  ChartPieIcon,
  CloudArrowDownIcon,
  CloudIcon,
  Cog6ToothIcon,
  KeyIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

import BackgroundCard from "@/components/background-card";

function Option({ icon: Icon, title, children }) {
  return (
    <div className="flex gap-4">
      <div className="mb-4">
        <Icon className="text-gray-900 h-6 w-6" />
      </div>
      <div>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography className="mb-2 md:w-10/12 font-normal !text-gray-500">
          {children}
        </Typography>
      </div>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section className="w-full max-w-4xl mx-auto flex flex-col items-center px-4 py-10">
      <Typography variant="h2" className="text-center mb-2" color="blue-gray">
        Sizlere sunduğmuz hizmetler
      </Typography>
      <Typography
        variant="lead"
        className="mb-16 w-full text-center font-normal !text-gray-500 lg:w-10/12"
      >
       
      </Typography>
      <div className="mt-8">
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-12 mb-24">
          <BackgroundCard title="Yüksek Kalite Routerlar">
      
          </BackgroundCard>
          <div className="space-y-8">
            <div className="my-4">
              <Option icon={Cog6ToothIcon} title="CNC Router ve CNC Freze Makineleri">
              Özel ebat ve isteğe bağlı CNC Router ve CNC freze makineleri tasarımı ve üretimi.
              </Option>
            </div>
            <div className="mb-4 flex gap-4">
              <Option icon={Cog6ToothIcon} title="Paketleme Makineleri">
              Her türlü paketleme makinelerinin tasarımı ve üretimi.
              </Option>
            </div>
            <Option icon={Cog6ToothIcon} title="Streç ve Selofan Sarma Makineleri">
            Yüksek verimlilik ve kalite sağlayan streç ve selofan sarma makineleri.
            </Option>
            <Option icon={Cog6ToothIcon} title="Kağıt Kesim Makineleri">
            Her ebatta kağıt kesim makinelerinin tasarımı ve üretimi.
              </Option>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-12 mb-24">
          <div className="space-y-8">
            <div className="my-4">
              <Option icon={KeyIcon} title="Vakum Taşıma Sistemleri">
              Güvenilir ve etkili vakum taşıma sistemlerinin tasarımı ve montajı.
              </Option>
            </div>
            <div className="mb-4 flex gap-4">
              <Option icon={KeyIcon} title="Kağıt Bobin Kesme Makineleri">
              Kağıt bobinlerinizi istenilen ölçülerde kesen makinelerin üretimi.
              </Option>
            </div>
            <Option icon={KeyIcon} title="Serigrafi Baskı Makineleri">
            Yüksek kaliteli baskılar için serigrafi baskı makinelerinin tasarımı ve üretimi.
            </Option>
            <Option icon={KeyIcon} title="PLC ve Otomasyon Hizmetleri">
            Endüstriyel otomasyon ve PLC hizmetlerinde uzman çözümler.
              </Option>
          </div>
          <BackgroundCard title="Otumasyon Makineleri">

          </BackgroundCard>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;