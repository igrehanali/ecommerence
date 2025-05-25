import Image from "next/image";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaTiktok } from "react-icons/fa"; // ✅ Use TikTok icon from react-icons

export default function Footer() {
  return (
    <footer className="bg-black text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Top Logo and Tagline */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-12">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo.png" alt="Mobilecare" width={200} height={40} />
              {/* <span className="text-2xl font-semibold">mobilecare</span> */}
            </div>
            <h2 className="text-3xl font-bold mb-2">Postaráme sa o vás</h2>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Odmeníme nekonečné možnosti s naším prémiovým výberom Apple
              produktov.
            </p>
          </div>

          <div className="bg-[#6366F1] p-6 rounded-2xl text-black max-w-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Získaj 10% zľavu</h3>
              <div className="bg-[#EF4444] text-white rounded-full p-2 px-3">
                <span className="font-bold text-lg">%</span>
              </div>
            </div>
            <p className="text-white text-sm mb-4">
              Ušetrite 10% na ďalšom nákupe produktov Apple, ak sa ešte dnes
              pripojíte k našej komunite odberateľov noviniek!
            </p>
            <div className="space-y-3">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Vaša e-mailová adresa"
                  className="w-full bg-white text-black pl-4 pr-12 py-2.5 rounded-lg"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-black">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 19L13 13M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <Button className="w-full bg-black hover:bg-gray-900 text-white py-2.5 rounded-lg">
                Odoslať
              </Button>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {/* Contact Info */}
          <div>
            <h3 className="text-base font-medium mb-4">Kontaktné údaje</h3>
            <p className="text-gray-400 mb-1">+421 919 215 491</p>
            <p className="text-gray-400">Rastislavova 68, Košice</p>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-base font-medium mb-4">Customer service</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Kontaktujte nás
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Vrátenie zásielky
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Doručenie
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Sledovanie zásielky
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Platby a cenová ponuka
                </a>
              </li>
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h3 className="text-base font-medium mb-4">Iné</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Iné nie a niečo iné
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Iné nie a niečo iné
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Iné nie ešte
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Iné nie a iné
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
        </div>

        {/* Social Media */}
        <div className="mt-12">
          <h3 className="text-sm font-medium mb-4">Sledujte nás</h3>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTiktok className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Countries */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Slovensko", "Česká republika", "România", "Polska"].map(
            (country) => (
              <h3 key={country} className="text-lg font-semibold">
                {country}
              </h3>
            )
          )}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-400">
          <div className="flex gap-3">
            <a href="#" className="hover:text-white">
              Podmienky používania
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white">
              GDPR
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white">
              Ochrana osobných údajov
            </a>
          </div>

          <div className="flex items-center gap-3">
            {[
              "visa.png",
              "Mastercard.png",
              "Maestro.png",
              "Payment Icons.png",
              "GooglePay.png",
              "ApplePay.png",
              "PayPal.png",
            ].map((src, i) => (
              <Image
                key={i}
                src={`/icon/${src}`}
                alt={src}
                width={32}
                height={20}
                className="object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
