import { getAllUsers } from "@/actions"
export const dynamic = "force-dynamic"
const Customers = async () => {
  const result = await getAllUsers(1)

  if (!result.success) return <div>{result.error}</div>
  return result.data.map((el) => <div key={el.id}>{el.name}</div>)
}

export default Customers
