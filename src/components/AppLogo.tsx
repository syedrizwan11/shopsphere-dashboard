import Image from "next/image"
import React from "react"

export const AppLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image src="/favicon.ico" alt="shopsphere-logo" width={30} height={30} />
      <div className="text-xl font-bold text-textPrimary">ShopSphere</div>
    </div>
  )
}
