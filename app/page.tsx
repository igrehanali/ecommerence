import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import { Heart, HeartHandshake, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { Truck } from "lucide-react";

type CartItem = {
  id: string;
  name: string;
  capacity: string;
  color: string;
  price: number;
  oldPrice?: number;
  clubDiscount?: string;
  image: string;
  quantity: number;
};

const cartItems: CartItem[] = [
  {
    id: "iphone14",
    name: "iPhone 14",
    capacity: "128 GB",
    color: "Silver",
    price: 1229,
    oldPrice: 1299,
    clubDiscount: "Ušetríte 70 € s mobilecare klubom",
    image: "/image1.png",
    quantity: 1,
  },
  {
    id: "iphone14pro",
    name: "iPhone 14 PRO",
    capacity: "128 GB",
    color: "Silver",
    price: 1299,
    image: "/image1.png",
    quantity: 1,
  },
  {
    id: "airpods2gen",
    name: "Apple AirPods 2 GEN",
    capacity: "256 GB",
    color: "Silver",
    price: 129,
    image: "/image1.png",
    quantity: 1,
  },
];

const paymentMethods = [
  { alt: "Visa", src: "/icon/visa.png" },
  { alt: "Mastercard", src: "/icon/Mastercard.png" },
  { alt: "Maestro", src: "/icon/Maestro.png" },
  { alt: "American Express", src: "/icon/Payment Icons.png" },
  { alt: "Google Pay", src: "/icon/GooglePay.png" },
  { alt: "Apple Pay", src: "/icon/ApplePay.png" },
  { alt: "PayPal", src: "/icon/PayPal.png" },
];

const recommendations = [
  {
    id: 1,
    name: "iPhone 17 PRO (2023)",
    price: 1299,
    image: "/product/iphone.png",
    isNew: true,
    colors: ["bg-[#F4E8CE]", "bg-[#594F63]", "bg-[#F0F2F2]", "bg-[#403E3D]"],
  },
  {
    id: 2,
    name: "iPhone 17 PRO (2023)",
    price: 1299,
    image: "/product/mac.png",
    isNew: false,
    colors: ["bg-[#F4E8CE]", "bg-[#594F63]", "bg-[#F0F2F2]", "bg-[#403E3D]"],
  },
  {
    id: 3,
    name: "iPhone 17 PRO (2023)",
    price: 1299,
    image: "/product/Airpodes.png",
    isNew: true,
    colors: ["bg-[#F4E8CE]", "bg-[#594F63]", "bg-[#F0F2F2]", "bg-[#403E3D]"],
  },
  {
    id: 4,
    name: "iPhone 17 PRO (2023)",
    price: 1299,
    image: "/product/iphone.png",
    isNew: false,
    colors: ["bg-[#F4E8CE]", "bg-[#594F63]", "bg-[#F0F2F2]", "bg-[#403E3D]"],
  },
];

function CartProduct({ item }: { item: CartItem }) {
  return (
    <div className="bg-white p-6 border-b">
      <div className="flex gap-6">
        <div className="w-24 h-24 relative">
          <Image
            src={item.image}
            alt={item.name}
            width={96}
            height={96}
            className="object-contain"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-lg mb-2">{item.name}</h3>
          <p className="text-sm text-gray-500 mb-4">
            Kapacita: {item.capacity}, Farba: {item.color}
          </p>
          <div className="flex items-center">
            <Button variant="outline" className="px-4 py-2">
              <HeartHandshake className="h-5 w-5 text-gray-800 mr-2" />
              Odložiť na neskôr
            </Button>
          </div>
        </div>
        <div className="text-right">
          <div className="flex justify-end items-center gap-3">
            <div className="font-bold text-pink-500 text-lg">
              {item.price} €
            </div>
            {item.oldPrice && (
              <div className="text-sm text-gray-500 line-through">
                {item.oldPrice} €
              </div>
            )}
            <button className="text-gray-400 hover:text-gray-600 ml-2">
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
          {item.clubDiscount && (
            <div className="text-sm text-pink-600 mt-2">
              {item.clubDiscount}
            </div>
          )}
          <div className="mt-4 text-sm text-right">
            <p className="text-sm text-gray-500 mb-2">Zadajte množstvo tu</p>
            <div className="flex justify-end">
              <Select defaultValue={String(item.quantity)}>
                <SelectTrigger className="w-40 h-10 text-sm rounded">
                  <SelectValue placeholder={String(item.quantity)} />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3].map((qty) => (
                    <SelectItem key={qty} value={String(qty)}>
                      {qty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RecommendationCard({
  rec,
}: {
  rec: (typeof recommendations)[number];
}) {
  return (
    <div className="bg-white p-4 rounded-lg  relative   ">
      {rec.isNew && (
        <div className="absolute top-3 left-3 bg-[#A8FF96] text-black text-xs px-2 py-1 rounded">
          Novinka
        </div>
      )}
      <button className="absolute top-3 right-3 hover:text-gray-600">
        <Heart className="h-5 w-5" />
      </button>
      <div className="flex justify-center items-center h-[200px] mb-4 relative">
        <Image
          src={rec.image}
          alt={rec.name}
          width={132}
          height={256}
          className="object-contain max-h-[180px] w-auto"
          priority
        />
      </div>
      <div className="px-2">
        <div className="text-xs text-gray-500 mb-1">Smartfóny</div>
        <h3 className="text-base font-medium mb-2">{rec.name}</h3>
        <div className="font-bold text-lg mb-3">{rec.price} €</div>
        <div className="flex gap-2">
          {rec.colors.map((color, idx) => (
            <div
              key={idx}
              className={`w-5 h-5 rounded-full ${color} border border-gray-200`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-1 p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center flex-col mb-6">
            <h1 className="text-2xl font-bold mb-6">Váš košík</h1>
            <p className="text-sm text-gray-500 mb-6">
              V košíku máte aktuálne {cartItems.length} produkty
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Cart items */}
            <div className="md:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <CartProduct key={item.id} item={item} />
              ))}
            </div>

            {/* Order summary */}
            <div className="space-y-4 border border-[#F5F5F5] rounded-md">
              <div className="h-full space-y-4 border border-[#F5F5F5] rounded-md">
                <div className="bg-white rounded-md h-full">
                  <div className="bg-[#F5F5F5] p-4 rounded-md flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Truck size={20} />
                      <span className="text-[14px]">Doručíme</span>
                    </div>
                    <span className="text-gray-500 text-[14px]">
                      Pon, 19. 8 - Ut, 20. 8.
                    </span>
                  </div>
                  <div className="p-4 flex flex-col justify-between h-[calc(100%-64px)]">
                    <div className="space-y-6">
                      {/* Payment methods and other content */}
                      <div className="flex items-start justify-between">
                        <h3 className="text-base font-medium">
                          Akceptujeme platby
                        </h3>
                        <div className="flex items-center gap-3">
                          {paymentMethods.map((pm, index) => (
                            <div
                              key={`${pm.alt}-${index}`}
                              className="h-[30px] bg-white rounded-md p-1 border border-[#F9F7F6] flex items-center justify-center"
                            >
                              <Image
                                src={pm.src}
                                alt={pm.alt}
                                width={40}
                                height={30}
                                className="object-contain"
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-6 pt-4">
                        <div className="flex justify-between items-center">
                          <h3 className="text-lg font-medium">Voucher</h3>
                          <input
                            type="text"
                            placeholder="Zľavový kód"
                            className="w-[200px] px-4 py-2.5 border border-gray-200 rounded-md text-sm placeholder-gray-400"
                          />
                        </div>

                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-lg">Spolu položky</span>
                            <span className="text-lg">{total} €</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-lg">Doprava:</span>
                            <span className="text-lg">0 €</span>
                          </div>
                          <div className="flex justify-between items-center pt-2">
                            <div className="flex items-center gap-2">
                              <span className="text-xl font-medium">
                                Spolu:
                              </span>
                              <span className="text-gray-500">
                                (vrátane DPH)
                              </span>
                            </div>
                            <span className="text-xl font-bold">{total} €</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 pt-2">
                          <input
                            type="checkbox"
                            id="gdpr"
                            className="h-4 w-4"
                          />
                          <label
                            htmlFor="gdpr"
                            className="text-sm text-gray-600"
                          >
                            Súhlasím s obch. podmienkami (GDPR)
                          </label>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-6">
                          <Button
                            variant="outline"
                            className="w-full py-3 text-base rounded-md"
                          >
                            Pokračovať v nákupe
                          </Button>
                          <Button className="w-full py-3 text-base bg-black hover:bg-gray-800 rounded-md">
                            Do pokladne
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="mt-12">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/icon/Star.png"
                alt="recommendations"
                width={24}
                height={24}
              />
              <h2 className="text-2xl font-bold">Mohlo by vás zaujímať</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {recommendations.map((rec) => (
                <RecommendationCard key={rec.id} rec={rec} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
