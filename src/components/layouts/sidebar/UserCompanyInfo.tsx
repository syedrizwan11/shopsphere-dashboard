import { cn } from "@/lib/utils"
import Image from "next/image"
interface UserCompanyInfoProps {
  fullView?: boolean
}
export const UserCompanyInfo = ({ fullView }: UserCompanyInfoProps) => {
  return (
    <div
      className={cn(
        "rounded-xl flex py-1 px-4 border border-gray-300 items-center",
        !fullView && "px-2"
      )}
    >
      {fullView ? (
        <>
          <Image
            src="/images/company-logo.png"
            alt="compony-logo"
            height={50}
            width={50}
          />

          <div>
            <p className="text-textTertiary">Company</p>
            <p className="text-primary font-bold">Lanky Store</p>
          </div>
        </>
      ) : (
        <Image
          src="/images/company-logo.png"
          alt="compony-logo"
          height={50}
          width={50}
        />
      )}
    </div>
  )
}
