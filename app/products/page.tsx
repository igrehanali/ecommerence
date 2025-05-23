"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import NavBar from "@/components/nav-bar"
import Footer from "@/components/footer"
import FilterSidebar from "@/components/filter-sidebar"

const products = [
  {
    id: 1,
    name: "iPhone 17 PRO (2023)",
    category: "Smartfóny",
    price: 1299,
    image: "/placeholder.svg?height=200&width=200",
    isNew: true,
  },
  {
    id: 2,
    name: "MacBook Pro (2023)",
    category: "Notebooky",
    price: 1899,
    image: "/placeholder.svg?height=200&width=200",
    isNew: false,
  },
  {
    id: 3,
    name: "iPhone 17 PRO (2023)",
    category: "Smartfóny",
    price: 1299,
    image: "/placeholder.svg?height=200&width=200",
    isNew: false,
  },
  {
    id: 4,
    name: "AirPods Pro 2",
    category: "Slúchadlá",
    price: 279,
    image: "/placeholder.svg?height=200&width=200",
    isNew: true,
  },
  {
    id: 5,
    name: "iPhone 17 PRO (2023)",
    category: "Smartfóny",
    price: 1299,
    image: "/placeholder.svg?height=200&width=200",
    isNew: false,
  },
  {
    id: 6,
    name: "MacBook Air (2023)",
    category: "Notebooky",
    price: 1299,
    image: "/placeholder.svg?height=200&width=200",
    isNew: true,
  },
]

export default function ProductsPage() {
  const [filterOpen, setFilterOpen] = useState(false)
  const totalResults = 1772

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-1 bg-gray-100">
        {/* Announcement banner */}
        <div className="bg-pink-600 text-white text-center py-2 px-4">
          <p className="text-sm font-medium">Nové iPhone 14 PRO s 20% zľavou ✨</p>
        </div>

        {/* Product listing */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold mb-1">Meno kategórie, napríklad Apple iPhone</h1>
              <p className="text-sm text-gray-500">{totalResults} nájdených produktov</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="text-sm" onClick={() => setFilterOpen(true)}>
                Filter
              </Button>
              <div className="relative">
                <Button variant="outline" size="sm" className="text-sm flex items-center gap-1">
                  Zobraziť podľa
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-md shadow-sm overflow-hidden group">
                <div className="relative p-4">
                  {product.isNew && (
                    <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded z-10">
                      Novinka
                    </div>
                  )}
                  <button className="absolute top-2 right-2 z-10 text-gray-400 hover:text-red-500">
                    <Heart className="h-5 w-5" />
                  </button>
                  <div className="relative h-48 flex items-center justify-center">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="object-contain transition-transform group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                  <p className="font-bold">{product.price} €</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />

      {/* Filter sidebar */}
      <FilterSidebar isOpen={filterOpen} onClose={() => setFilterOpen(false)} totalResults={totalResults} />
    </div>
  )
}
