"use client"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/primitives/alert-dialog"
import { OctagonAlert } from "lucide-react"
import { useRouter } from "next/navigation"

interface ErrorAlertProps {
  description?: string
  actionButtonText?: string
  onActionButtonClick?: () => void
}

export const ErrorAlert = ({
  description,
  actionButtonText,
  onActionButtonClick,
}: ErrorAlertProps) => {
  const router = useRouter()
  return (
    <AlertDialog open>
      <AlertDialogContent className="border-2 border-dashed border-red-900">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex gap-2 items-center">
            <OctagonAlert color="#e86e6eff" /> Error Alert!
          </AlertDialogTitle>
          <AlertDialogDescription>
            {description || "Something went wrong. Please try again later."}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex justify-end">
          <AlertDialogAction onClick={() => router.back()}>
            go Back
          </AlertDialogAction>
          <AlertDialogAction
            onClick={() =>
              onActionButtonClick ? onActionButtonClick() : router.refresh()
            }
          >
            {actionButtonText || "Refresh"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
