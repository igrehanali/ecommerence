import Image from "next/image"
import { Facebook, Instagram, Youtube, InstagramIcon as Tiktok } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Logo and company info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white flex items-center justify-center rounded">
                <div className="w-6 h-6 border-2 border-black rounded"></div>
              </div>
              <span className="text-2xl font-bold">mobilecare</span>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Postaráme sa o vás</h3>
              <p className="text-sm text-gray-400">
                Odmeníme nekonečné možnosti s naším prémiovým výberom Apple produktov.
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="text-sm font-medium mb-2">Kontaktné údaje</h4>
              <p className="text-sm text-gray-400">+421 919 215 491</p>
              <p className="text-sm text-gray-400">Rastislavova 83, Košice</p>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2">Sledujte nás</h4>
              <div className="flex gap-4">
                <a href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5 text-gray-400 hover:text-white" />
                </a>
                <a href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5 text-gray-400 hover:text-white" />
                </a>
                <a href="#" aria-label="Youtube">
                  <Youtube className="h-5 w-5 text-gray-400 hover:text-white" />
                </a>
                <a href="#" aria-label="TikTok">
                  <Tiktok className="h-5 w-5 text-gray-400 hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Links columns */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-medium">Customer service</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white">
                    Kontaktujte nás
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white">
                    Výmenné zásielky
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white">
                    Doručenie
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white">
                    Sledovanie zásielky
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white">
                    Platby a cenová ponuka
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Iné</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white">
                    Iné nie a niečo iné
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white">
                    Iné nie a niečo iné
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white">
                    Iné nie ešte
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white">
                    Iné nie a mé
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-medium">Mobilecare</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white">
                    O nás
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white">
                    Kariéra
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Členstvo, zľavy a akcie</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white">
                    Odporúč nás a dostań zľavu 10%
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white">
                    Vernostný program
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter signup */}
          <div className="bg-indigo-600 rounded-lg p-6 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Získaj 10% zľavu</h3>
              <div className="bg-red-500 rounded-full p-1">
                <span className="text-white font-bold">%</span>
              </div>
            </div>

            <p className="text-sm mb-6">
              Ušetrite 10% na ďalšom nákupe produktov Apple, ak sa ešte dnes pripojíte k našej komunite odberateľov
              noviniek!
            </p>

            <div className="flex flex-col gap-2">
              <div className="relative">
                <Input
                  className="bg-white text-black pl-4 pr-10 py-2 rounded w-full"
                  placeholder="Vaša e-mailová adresa"
                />
                <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-white p-1 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
              <Button className="bg-black hover:bg-gray-800 text-white w-full">Odoslať</Button>
            </div>
          </div>
        </div>

        {/* Countries */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-2">Slovensko</h3>
          </div>
          <div>
            <h3 className="font-bold mb-2">Česká republika</h3>
          </div>
          <div>
            <h3 className="font-bold mb-2">România</h3>
          </div>
          <div>
            <h3 className="font-bold mb-2">Polska</h3>
          </div>
        </div>

        {/* Payment methods and legal */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-2 text-xs text-gray-400">
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

          <div className="flex gap-2">
            <Image src="/placeholder.svg?height=30&width=40" alt="Visa" width={40} height={30} />
            <Image src="/placeholder.svg?height=30&width=40" alt="Mastercard" width={40} height={30} />
            <Image src="/placeholder.svg?height=30&width=40" alt="Maestro" width={40} height={30} />
            <Image src="/placeholder.svg?height=30&width=40" alt="American Express" width={40} height={30} />
            <Image src="/placeholder.svg?height=30&width=40" alt="Google Pay" width={40} height={30} />
            <Image src="/placeholder.svg?height=30&width=40" alt="Apple Pay" width={40} height={30} />
            <Image src="/placeholder.svg?height=30&width=40" alt="PayPal" width={40} height={30} />
          </div>
        </div>
      </div>
    </footer>
  )
}
