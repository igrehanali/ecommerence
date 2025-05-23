"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronRight,
  Laptop,
  Smartphone,
  Headphones,
  Watch,
  Tablet,
  Monitor,
  Cpu,
  Speaker,
} from "lucide-react";

type Category = {
  id: string;
  name: string;
  icon: React.ReactNode;
  subcategories?: { id: string; name: string }[];
};

export default function MegaMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [activeCategory, setActiveCategory] = useState<string>("macbook");

  const categories: Category[] = [
    {
      id: "iphone",
      name: "iPhone",
      icon: <Smartphone className="h-5 w-5" />,
      subcategories: [
        { id: "iphone-15", name: "iPhone 15" },
        { id: "iphone-14", name: "iPhone 14" },
        { id: "iphone-se", name: "iPhone SE" },
      ],
    },
    {
      id: "airpods",
      name: "Apple AirPods",
      icon: <Headphones className="h-5 w-5" />,
      subcategories: [
        { id: "airpods-pro", name: "AirPods Pro" },
        { id: "airpods-3", name: "AirPods 3" },
        { id: "airpods-max", name: "AirPods Max" },
      ],
    },
    {
      id: "macbook",
      name: "MacBook",
      icon: <Laptop className="h-5 w-5" />,
      subcategories: [
        { id: "air", name: "Air" },
        { id: "pro", name: "Pro" },
        { id: "mac-24", name: 'Mac 24"' },
        { id: "max", name: "Max" },
        { id: "studio", name: "Studio" },
        { id: "mac-pro", name: "Mac Pro" },
        { id: "chipset", name: "Chipset" },
        { id: "doplnky", name: "Doplnky pre Mac" },
      ],
    },
    {
      id: "ipad",
      name: "iPad",
      icon: <Tablet className="h-5 w-5" />,
      subcategories: [
        { id: "ipad-pro", name: "iPad Pro" },
        { id: "ipad-air", name: "iPad Air" },
        { id: "ipad-mini", name: "iPad Mini" },
      ],
    },
    {
      id: "watch",
      name: "Apple Watch",
      icon: <Watch className="h-5 w-5" />,
      subcategories: [
        { id: "series-9", name: "Series 9" },
        { id: "ultra", name: "Ultra" },
        { id: "se", name: "SE" },
      ],
    },
    {
      id: "prislusenstvo",
      name: "Príslušenstvo",
      icon: <Speaker className="h-5 w-5" />,
      subcategories: [
        { id: "cases", name: "Kryty" },
        { id: "chargers", name: "Nabíjačky" },
        { id: "cables", name: "Káble" },
      ],
    },
    {
      id: "smartfony",
      name: "Smartfóny",
      icon: <Smartphone className="h-5 w-5" />,
      subcategories: [
        { id: "samsung", name: "Samsung" },
        { id: "xiaomi", name: "Xiaomi" },
        { id: "google", name: "Google" },
      ],
    },
    {
      id: "pc",
      name: "PC",
      icon: <Monitor className="h-5 w-5" />,
      subcategories: [
        { id: "desktop", name: "Desktop" },
        { id: "monitors", name: "Monitory" },
        { id: "accessories", name: "Príslušenstvo" },
      ],
    },
    {
      id: "elektronika",
      name: "Elektronika",
      icon: <Cpu className="h-5 w-5" />,
      subcategories: [
        { id: "tv", name: "TV" },
        { id: "audio", name: "Audio" },
        { id: "smart-home", name: "Smart Home" },
      ],
    },
  ];

  const popularCategories = [
    { id: "najpredavanejsie", name: "Najpredávanejšie", badge: "NOVINKA" },
    { id: "zlavy", name: "Zľavy", badge: "VÝPREDAJ" },
  ];

  const otherLinks = [
    { id: "kontakt", name: "Kontakt" },
    { id: "faq", name: "Často kladené otázky" },
    { id: "blog", name: "Blog" },
    { id: "ochranne-pomocky", name: "Ochranné pomôcky" },
  ];

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div className="flex h-full" onClick={(e) => e.stopPropagation()}>
        {/* Left sidebar */}
        <div className="w-64 h-full overflow-y-auto bg-gradient-to-b from-indigo-600 to-indigo-800 text-white">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white flex items-center justify-center rounded">
                <div className="w-3 h-3 border-2 border-indigo-600 rounded"></div>
              </div>
              <span className="text-lg font-bold">mobilecare</span>
            </div>
            <button onClick={onClose} className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="p-4">
            <div className="bg-white bg-opacity-10 rounded p-2 mb-4 flex items-center justify-between">
              <span className="text-sm">Všetky kategórie</span>
              <ChevronRight className="h-4 w-4" />
            </div>

            <div className="space-y-1">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`w-full text-left p-2 rounded flex items-center justify-between ${
                    activeCategory === category.id
                      ? "bg-white bg-opacity-10"
                      : ""
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <div className="flex items-center gap-2">
                    {category.icon}
                    <span className="text-sm">{category.name}</span>
                  </div>
                  <ChevronRight className="h-4 w-4" />
                </button>
              ))}
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-medium mb-2">Najobľúbenejšie</h3>
              <div className="space-y-1">
                {popularCategories.map((category) => (
                  <div
                    key={category.id}
                    className="flex items-center justify-between p-2"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{category.name}</span>
                    </div>
                    <span className="text-xs px-1.5 py-0.5 rounded bg-yellow-400 text-black font-medium">
                      {category.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {otherLinks.map((link) => (
                <div key={link.id} className="flex items-center gap-2">
                  <span className="text-sm">{link.name}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-white border-opacity-20">
              <div className="flex justify-center space-x-4">
                <a href="#" aria-label="Facebook">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a href="#" aria-label="Instagram">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" aria-label="Youtube">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
                <a href="#" aria-label="TikTok">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Center panel - Categories */}
        <div className="w-64 h-full overflow-y-auto bg-white">
          <div className="p-4 border-b">
            <h2 className="font-medium text-lg">Všetky kategórie</h2>
          </div>

          <div className="p-4 space-y-4">
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex items-center justify-between p-2 hover:bg-gray-100 rounded cursor-pointer"
                onClick={() => setActiveCategory(category.id)}
              >
                <div className="flex items-center gap-3">
                  {category.icon}
                  <span>{category.name}</span>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </div>
            ))}

            <div className="mt-8">
              <div className="bg-pink-500 rounded-lg p-4 text-white relative">
                <div className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold p-1 rounded-full flex items-center justify-center w-10 h-10 rotate-12">
                  188€
                </div>
                <h3 className="font-bold mb-1">Apple AirPods 2</h3>
                <p className="text-sm mb-4">Airpody pre študentov!</p>
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Apple AirPods"
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right panel - Subcategories */}
        <div className="w-64 h-full overflow-y-auto bg-white border-l">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <h2 className="font-medium text-lg">
                {categories.find((c) => c.id === activeCategory)?.name ||
                  "MacBook"}
              </h2>
              <button className="bg-black text-white rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="p-4">
            <h3 className="text-sm text-gray-500 mb-2">Zoradiť podľa</h3>

            <div className="space-y-3">
              {categories
                .find((c) => c.id === activeCategory)
                ?.subcategories?.map((subcategory) => (
                  <div
                    key={subcategory.id}
                    className="hover:text-indigo-600 cursor-pointer"
                  >
                    {subcategory.name}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
