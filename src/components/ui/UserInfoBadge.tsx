import { cn } from "@/lib/utils"
import { CircleChevronDown } from "lucide-react"
import Image from "next/image"

interface UserInfoBadgeProps {
  expanded?: boolean
  collapseOnSmallScreens?: boolean
}

export const UserInfoBadge = ({
  expanded,
  collapseOnSmallScreens,
}: UserInfoBadgeProps) => {
  const userInfo = {
    name: "Guy Hawkins",
    role: "Admin",
    image: "/images/user.png",
  }
  return (
    <div className="group p-2 rounded-sm border border-textTertiary flex gap-2 justify-between text-xs cursor-pointer">
      <div className=" rounded-sm overflow-hidden">
        <Image src={userInfo.image} alt="user-image" height={30} width={30} />
      </div>

      {expanded && (
        <div
          className={cn(
            "flex justify-between gap-4 grow",
            collapseOnSmallScreens && "sm:flex hidden"
          )}
        >
          <div>
            <div>{userInfo.name}</div>
            <div>{userInfo.role}</div>
          </div>

          <CircleChevronDown />
        </div>
      )}
    </div>
  )
}
