import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/primitives/alert-dialog"
import { ReactNode } from "react"

interface ActionWithConfirmationPromptProps {
  trigger?: ReactNode
  description?: string
  onConfirmation?: () => void
}

export const ActionWithConfirmationPrompt = ({
  trigger,
  description,
  onConfirmation,
}: ActionWithConfirmationPromptProps) => {
  return (
    <AlertDialog>
      {trigger && <AlertDialogTrigger>{trigger}</AlertDialogTrigger>}

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            {description ||
              "This action cannot be undone. This will permanently delete the record from the server."}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirmation}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
