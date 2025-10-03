import { toast } from "sonner"

const errorToast = (message: string, description?: string) =>
  toast.error(message, {
    description: description,
    action: {
      label: "Okay",
      onClick: () => console.log("Undo"),
    },
    actionButtonStyle: { background: "#f8a0a0ff", color: "black" },
  })
const successToast = (message: string) =>
  toast.success(message, {
    action: {
      label: "Okay",
      onClick: () => console.log("Undo"),
    },
    actionButtonStyle: { background: "#9df58bff", color: "black" },
  })

export { errorToast, successToast }
