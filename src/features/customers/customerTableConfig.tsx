import { ColumnConfig } from "@/components/ui"
import { User } from "@prisma/client"

export const CustomerTableConfig = [
  {
    key: "id",
    header: "ID",
    sortable: true,
  },
  {
    key: "name",
    header: "Name",
    sortable: true,
  },
  { key: "email", header: "Email", sortable: true, canHide: true },
  { key: "role", header: "Role", sortable: true, canHide: true },
  {
    key: "createdAt",
    header: "Date",
    render: (p: User) => <div>{p.createdAt.toLocaleDateString()}</div>,
    sortable: true,
    canHide: true,
  },
] satisfies ColumnConfig<User>[]
