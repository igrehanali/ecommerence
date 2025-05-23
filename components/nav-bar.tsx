"use client";

import { useState } from "react";
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  Menu,
  Tag as TagIcon,
  Sparkles as SparklesIcon,
  Settings as SettingsIcon,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import MegaMenu from "./mega-menu";

const CONTACT_INFO = {
  address: "Rastislavova 68, Košice",
  phone: "+421 919 215 491",
};

const NAV_LINKS = [
  { label: "Sledovanie zásielky", href: "#" },
  { label: "Vrátenie tovaru", href: "#" },
  { label: "O nás", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Blog", href: "#" },
];

const CATEGORIES = [
  "iPhone",
  "iPad",
  "MacBook",
  "Apple Airpods",
  "Smarthome",
  "Príslušenstvo",
];

export default function Header() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  return (
    <header className="w-full text-sm font-medium">
      <TopBar />
      <SubNav links={NAV_LINKS} />
      <AnnouncementBanner message="Nové iPhone 14 PRO s 20% zľavou ✨" />
      <MainNav
        contactInfo={CONTACT_INFO}
        onMegaMenuOpen={() => setIsMegaMenuOpen(true)}
      />
      <CategoryBar
        categories={CATEGORIES}
        onMegaMenuOpen={() => setIsMegaMenuOpen(true)}
      />
      <MegaMenu
        isOpen={isMegaMenuOpen}
        onClose={() => setIsMegaMenuOpen(false)}
      />
    </header>
  );
}

function TopBar() {
  return (
    <div className="bg-black text-white px-4 py-1 flex justify-between items-center text-xs">
      <span className="opacity-60">Pomoc & kontakt</span>
      <div className="flex items-center gap-6">
        <span className="opacity-70">Rastislavova 68, Košice</span>
        <span className="opacity-70">+421 919 215 491</span>
      </div>
    </div>
  );
}

function SubNav({ links }: { links: { label: string; href: string }[] }) {
  return (
    <nav className="flex justify-end gap-6 text-sm text-gray-600 p-1">
      {links.map(({ label, href }) => (
        <a key={label} href={href} className="hover:text-black transition">
          {label}
        </a>
      ))}
    </nav>
  );
}

function AnnouncementBanner({ message }: { message: string }) {
  return (
    <div className="bg-[#ff4e87] text-white text-center py-1 text-xs font-semibold">
      {message}
    </div>
  );
}

function MainNav({}: {
  onMegaMenuOpen: () => void;
  contactInfo: typeof CONTACT_INFO;
}) {
  return (
    <div className="bg-black text-white p-3 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-6 text-sm whitespace-nowrap">
        <NavIcon label="Výpredaj" Icon={TagIcon} />
        <NavIcon label="Novinky" Icon={SparklesIcon} />
        <NavIcon label="MC Servis" Icon={SettingsIcon} />
      </div>

      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Mobilecare" className="h-6" />
        <img
          src="/US-UK_APP_Badge.png"
          alt="Apple Partner"
          className="h-6 ml-2"
        />
      </div>

      <div className="flex items-center gap-4">
        <User className="w-5 h-5 cursor-pointer" />
        <Heart className="w-5 h-5 cursor-pointer" />
        <ShoppingBag className="w-5 h-5 cursor-pointer" />
      </div>
    </div>
  );
}

function NavIcon({ label, Icon }: { label: string; Icon: React.ElementType }) {
  return (
    <span className="flex items-center gap-1">
      <Icon className="w-4 h-4" /> {label}
    </span>
  );
}

function CategoryBar({
  categories,
  onMegaMenuOpen,
}: {
  categories: string[];
  onMegaMenuOpen: () => void;
}) {
  return (
    <div className="bg-black px-4 py-3 text-white flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-6 text-sm font-medium flex-wrap">
        <Button
          variant="default"
          onClick={onMegaMenuOpen}
          className="bg-white text-black text-sm px-4 py-2 flex items-center gap-2 hover:bg-gray-200 rounded-md"
        >
          Všetky kategórie <Menu className="w-4 h-4" />
        </Button>
      </div>
      <div className="flex items-center gap-6 text-sm font-medium flex-wrap">
        {categories.map((cat) => (
          <a key={cat} href="#" className="hover:text-gray-300 transition">
            {cat}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-md w-full md:w-[300px]">
        <Search className="text-gray-500 w-4 h-4" />
        <Input
          className="border-none shadow-none text-sm p-0 focus-visible:ring-0 text-black placeholder:text-gray-700"
          placeholder="Zadajte názov produktu"
        />
      </div>
    </div>
  );
}
