import { errorToast, successToast } from "@/lib/toast"
import { ApiResponse } from "@/types"
import { useCallback, useState } from "react"

export const useOptimisticDelete = <T extends { id: number }>(
  initialData: T[],
  deleteAction: (id: number) => Promise<ApiResponse<T>>,
  messages?: { success?: string; error?: string }
) => {
  const [data, setData] = useState<T[]>(initialData)
  const handleDeleteRecord = useCallback(
    async (row: T) => {
      setData((prev) => prev.filter((p) => p.id !== row.id))
      const res = await deleteAction(row.id!)
      if (!res.success) {
        errorToast(
          messages?.error || "Error In Deleting This Record",
          res.error
        )
        setData(initialData)
      }
      if (res.success)
        successToast(messages?.success || "Successfully Deleted this Record.")
    },
    [deleteAction, initialData, messages]
  )
  return { data, handleDeleteRecord }
}
