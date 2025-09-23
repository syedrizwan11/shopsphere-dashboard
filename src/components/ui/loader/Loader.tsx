import React from "react"
import { ClipLoader } from "react-spinners"

export const Loader = ({
  size,
  className,
}: {
  size: number
  className?: string
}) => {
  return (
    <div>
      <ClipLoader
        className={className}
        size={size}
        color="#74a7f8"
        cssOverride={{ borderWidth: "4px" }}
      />
    </div>
  )
}
