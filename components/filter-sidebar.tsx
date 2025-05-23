"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

interface FilterSidebarProps {
  isOpen: boolean
  onClose: () => void
  totalResults: number
}

export default function FilterSidebar({ isOpen, onClose, totalResults }: FilterSidebarProps) {
  const [priceRange, setPriceRange] = useState([233, 667])
  const [selectedBrands, setSelectedBrands] = useState<string[]>(["Apple"])

  const brands = [
    { id: "apple", name: "Apple" },
    { id: "samsung", name: "Samsung" },
    { id: "xiaomi", name: "Xiaomi" },
    { id: "raketa", name: "Raketa" },
  ]

  const handleBrandChange = (brand: string, checked: boolean) => {
    if (checked) {
      setSelectedBrands([...selectedBrands, brand])
    } else {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand))
    }
  }

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value)
  }

  const clearFilters = () => {
    setPriceRange([233, 667])
    setSelectedBrands([])
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-start justify-start" onClick={onClose}>
      <div className="bg-white h-full w-full max-w-xs overflow-y-auto shadow-lg" onClick={(e) => e.stopPropagation()}>
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="font-bold text-lg">Filter</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4">
          <Collapsible defaultOpen>
            <CollapsibleTrigger className="flex items-center justify-between w-full mb-4">
              <h3 className="font-medium">Cena</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span>{priceRange[0]} €</span>
                  <span>{priceRange[1]} €</span>
                </div>
                <Slider
                  defaultValue={priceRange}
                  min={233}
                  max={667}
                  step={1}
                  onValueChange={handlePriceChange}
                  className="my-4"
                />
              </div>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible defaultOpen>
            <CollapsibleTrigger className="flex items-center justify-between w-full mb-4">
              <h3 className="font-medium">Značka</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="mb-4">
                <div className="relative mb-4">
                  <Input type="text" placeholder="Hľadať" className="pl-8 h-9" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-500"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <div key={brand.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={brand.id}
                        checked={selectedBrands.includes(brand.name)}
                        onCheckedChange={(checked) => handleBrandChange(brand.name, checked as boolean)}
                      />
                      <label
                        htmlFor={brand.id}
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {brand.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible>
            <CollapsibleTrigger className="flex items-center justify-between w-full mb-4">
              <h3 className="font-medium">Zariadenie</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="mb-4">{/* Device filter content would go here */}</div>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible>
            <CollapsibleTrigger className="flex items-center justify-between w-full mb-4">
              <h3 className="font-medium">Model</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="mb-4">{/* Model filter content would go here */}</div>
            </CollapsibleContent>
          </Collapsible>
        </div>

        <div className="p-4 border-t flex items-center justify-between">
          <Button variant="ghost" className="text-gray-500 hover:text-gray-700 p-0 h-auto" onClick={clearFilters}>
            Vymazať filter
          </Button>
          <div className="bg-black text-white px-3 py-1.5 text-sm font-medium rounded">{totalResults} výsledkov</div>
        </div>
      </div>
    </div>
  )
}
