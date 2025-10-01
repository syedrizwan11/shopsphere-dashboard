import { BreadCrumb, LargeHeading } from "@/components/ui"

export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <LargeHeading>Customers</LargeHeading>
      <BreadCrumb />
      {children}
    </div>
  )
}
