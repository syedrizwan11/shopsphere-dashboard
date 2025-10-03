import { ColumnConfig } from "@/components/ui"
import { User } from "@prisma/client"

export const CustomerTableConfig = [
  {
    key: "name",
    header: "Name",
    render: (u: User) => (
      <div>
        <div className="text-blue">ID: {u.id}</div>
        <div>{u.name}</div>
      </div>
    ),
    sortable: true,
  },
  {
    key: "contact",
    header: "Contact",
    render: (u: User) => (
      <div>
        <div>{u.email}</div>
        <div>{u.contact}</div>
      </div>
    ),
    sortable: true,
    canHide: true,
  },
  {
    key: "amountSpent",
    header: "Spending",
    render: (u: User) => <div>{u.amountSpent ?? 0}</div>,
    sortable: true,
    canHide: true,
  },
  {
    key: "ordersQuantity",
    header: "Orders Qty",
    render: (u: User) => <div>{u.ordersQuantity ?? 0}</div>,
    sortable: true,
    canHide: true,
  },
  {
    key: "address",
    header: "Address",
    render: (u: User) => (
      <div className="whitespace-break-spaces">{u.address}</div>
    ),
    sortable: true,
    canHide: true,
  },
] satisfies ColumnConfig<User>[]
