import { CircleChevronDown } from "lucide-react"
import Image from "next/image"

interface UserInfoBadgeProps {
  expanded?: boolean
}

export const UserInfoBadge = ({ expanded }: UserInfoBadgeProps) => {
  const userInfo = {
    name: "Guy Hawkins",
    role: "Admin",
    image: "/images/user.png",
  }
  return (
    <div className="p-2 rounded-2xl border border-textTertiary flex gap-2 justify-between text-xs cursor-pointer">
      <Image src={userInfo.image} alt="user-image" height={30} width={30} />

      {expanded && (
        <div className="flex justify-between gap-4 grow">
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
