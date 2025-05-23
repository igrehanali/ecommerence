import type React from "react"

export const metadata = {
  title: "Products | Mobilecare",
  description: "Browse our products",
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
