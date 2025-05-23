import Image from "next/image";
import {
  Facebook,
  Instagram,
  Youtube,
  InstagramIcon as Tiktok,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Logo and Description Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Image src="/logo.png" alt="Mobilecare" width={32} height={32} />
            <span className="text-3xl font-bold">mobilecare</span>
          </div>
          <h2 className="text-3xl font-bold mb-3">Postaráme sa o vás</h2>
          <p className="text-gray-400 text-base max-w-lg">
            Odmeníme nekonečné možnosti s naším prémiovým výberom Apple
            produktov.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-medium mb-4">Kontaktné údaje</h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>+421 919 215 491</p>
              <p>Rastislavova 68, Košice</p>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-sm font-medium mb-4">Customer service</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-white">
                  Kontaktujte nás
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-white">
                  Vrátenie zásielky
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-white">
                  Doručenie
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-white">
                  Sledovanie zásielky
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-white">
                  Platby a cenová ponuka
                </a>
              </li>
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h3 className="text-sm font-medium mb-4">Iné</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-white">
                  Iné nie a niečo iné
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-white">
                  Iné nie a niečo iné
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-white">
                  Iné nie ešte
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-white">
                  Iné nie a iné
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="bg-[#6366F1] rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold">Získaj 10% zľavu</h3>
              <div className="bg-[#EF4444] rounded-full p-2">
                <span className="text-lg font-bold">%</span>
              </div>
            </div>
            <p className="text-sm mb-6">
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
                <button className="absolute right-2 top-1/2 -translate-y-1/2">
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
              <Tiktok className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Countries */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold">Slovensko</h3>
          </div>
          <div>
            <h3 className="text-xl font-bold">Česká republika</h3>
          </div>
          <div>
            <h3 className="text-xl font-bold">România</h3>
          </div>
          <div>
            <h3 className="text-xl font-bold">Polska</h3>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-xs text-gray-400">
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
            <Image
              src="/icon/visa.png"
              alt="Visa"
              width={32}
              height={20}
              className="object-contain"
            />
            <Image
              src="/icon/Mastercard.png"
              alt="Mastercard"
              width={32}
              height={20}
              className="object-contain"
            />
            <Image
              src="/icon/Maestro.png"
              alt="Maestro"
              width={32}
              height={20}
              className="object-contain"
            />
            <Image
              src="/icon/Payment Icons.png"
              alt="American Express"
              width={32}
              height={20}
              className="object-contain"
            />
            <Image
              src="/icon/GooglePay.png"
              alt="Google Pay"
              width={32}
              height={20}
              className="object-contain"
            />
            <Image
              src="/icon/ApplePay.png"
              alt="Apple Pay"
              width={32}
              height={20}
              className="object-contain"
            />
            <Image
              src="/icon/PayPal.png"
              alt="PayPal"
              width={32}
              height={20}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
