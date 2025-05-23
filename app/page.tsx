import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import { Heart, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

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
  { alt: "Visa", src: "/placeholder.svg?height=30&width=40" },
  { alt: "Mastercard", src: "/placeholder.svg?height=30&width=40" },
  { alt: "American Express", src: "/placeholder.svg?height=30&width=40" },
  { alt: "Apple Pay", src: "/placeholder.svg?height=30&width=40" },
];

const recommendations = [
  {
    id: 1,
    name: "iPhone 17 PRO (2023)",
    price: 1299,
    image: "/placeholder.svg?height=120&width=120",
    isNew: true,
    colors: ["bg-gray-800", "bg-purple-800"],
  },
  {
    id: 2,
    name: "iPhone 17 PRO (2023)",
    price: 1299,
    image: "/placeholder.svg?height=120&width=120",
    isNew: false,
    colors: ["bg-gray-800", "bg-purple-800"],
  },
  {
    id: 3,
    name: "iPhone 17 PRO (2023)",
    price: 1299,
    image: "/placeholder.svg?height=120&width=120",
    isNew: true,
    colors: ["bg-gray-800", "bg-purple-800"],
  },
  {
    id: 4,
    name: "iPhone 17 PRO (2023)",
    price: 1299,
    image: "/placeholder.svg?height=120&width=120",
    isNew: false,
    colors: ["bg-gray-800", "bg-purple-800"],
  },
];

function CartProduct({ item }: { item: CartItem }) {
  return (
    <div className="bg-white p-4 border-b">
      <div className="flex gap-4">
        <div className="w-20 h-20 relative">
          <Image
            src={item.image}
            alt={item.name}
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-medium">{item.name}</h3>
          <p className="text-sm text-gray-500">
            Kapacita: {item.capacity}, Farba: {item.color}
          </p>
          <div className="flex items-center mt-2">
            <Button variant="outline">
              <HeartHandshake className="h-5 w-5 text-gray-800" />
              Odložiť na neskôr
            </Button>
          </div>
        </div>
        <div className="text-right">
          <div className="font-bold">{item.price} €</div>
          {item.oldPrice && (
            <div className="text-xs text-gray-500 line-through">
              {item.oldPrice} €
            </div>
          )}
          {item.clubDiscount && (
            <div className="text-xs text-pink-600">{item.clubDiscount}</div>
          )}
          <div className="mt-2 text-sm">
            <p className="text-xs text-gray-500 mb-1">Zvoľte množstvo:</p>
            <Select defaultValue={String(item.quantity)}>
              <SelectTrigger className="w-20 h-8 text-xs rounded-sm">
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
  );
}

function RecommendationCard({
  rec,
}: {
  rec: (typeof recommendations)[number];
}) {
  return (
    <div className="bg-white p-3 rounded-md shadow-sm relative">
      {rec.isNew && (
        <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded">
          Novinka
        </div>
      )}
      <button className="absolute top-2 right-2">
        <Heart className="h-5 w-5" />
      </button>
      <div className="flex justify-center mb-4">
        <Image
          src={rec.image}
          alt={rec.name}
          width={120}
          height={120}
          className="object-contain"
        />
      </div>
      <h3 className="text-sm font-medium mb-1">{rec.name}</h3>
      <div className="font-bold mb-2">{rec.price} €</div>
      <div className="flex gap-1">
        {rec.colors.map((color, idx) => (
          <div
            key={idx}
            className={`w-4 h-4 rounded-full ${color} border border-gray-300`}
          ></div>
        ))}
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
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h3 className="font-medium mb-4">Doručenie</h3>
                <div className="flex items-center gap-2 mb-4">
                  {paymentMethods.map((pm) => (
                    <Image
                      key={pm.alt}
                      src={pm.src}
                      alt={pm.alt}
                      width={40}
                      height={30}
                    />
                  ))}
                </div>
                <h3 className="font-medium mb-2">Voucher</h3>
                <div className="text-sm text-gray-500 mb-4">Doprava 0€</div>
                <h3 className="font-medium mb-2">Spôsob platby</h3>
                <div className="text-right font-bold text-lg mb-2">
                  {total} €
                </div>
                <h3 className="font-medium mb-2">Doprava:</h3>
                <div className="text-right mb-4">0 €</div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">Spolu:</h3>
                  <div className="text-right font-bold text-2xl">{total} €</div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <input type="checkbox" id="gdpr" />
                  <label htmlFor="gdpr" className="text-xs">
                    Súhlasím s obch. podmienkami (GDPR)
                  </label>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="w-full rounded-sm">
                    Pokračovať v nákupe
                  </Button>
                  <Button className="w-full bg-black hover:bg-gray-800 rounded-sm">
                    Do pokladne
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="mt-12">
            <h2 className="text-xl font-bold mb-6">Mohlo by vás zaujímať</h2>
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
