"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { customerSchema } from "./customer.schema"
import { Button } from "@/components/primitives/button"
import { Form } from "@/components/primitives/form"
import { useForm } from "react-hook-form"
import {
  FormInput,
  FormSelect,
  LargeHeading,
  SmallText,
  Loader,
} from "@/components/ui"
import { Role, User } from "@prisma/client"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { ApiResponse } from "@/types"
import z from "zod"
import { createUser, updateUser } from "@/actions"

interface formProps {
  customer?: User
}
export const CustomerForm = ({ customer }: formProps) => {
  const router = useRouter()

  const form = useForm<z.infer<typeof customerSchema>>({
    resolver: zodResolver(customerSchema),
    defaultValues: {
      name: customer?.name ?? "",
      email: customer?.email ?? "",
      role: customer?.role ?? "USER",
    },
  })

  const onSubmit = async (values: z.infer<typeof customerSchema>) => {
    const isEditing = Boolean(customer)
    let result: ApiResponse<User>
    if (isEditing) {
      result = await updateUser({ ...values, id: customer!.id })
    } else {
      result = await createUser(values)
    }

    if (!result.success) {
      toast.error("Error In Saving This Product")
      return
    }

    toast.success(
      isEditing
        ? "Product updated successfully"
        : "Product created successfully"
    )

    if (isEditing) {
      router.push(`/customers`)
    } else {
      form.reset()
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="max-w-lg space-y-6 bg-bgPrimary p-6 shadow rounded-2xl">
          <div>
            <LargeHeading className="text-lg">User Information</LargeHeading>
            <SmallText className="text-sm">
              Enter the Correct Product Information below.
            </SmallText>
          </div>

          <FormInput name="name" label="Name" formControl={form.control} />

          <FormInput
            name="email"
            label="Email"
            type="text"
            formControl={form.control}
          />

          <FormSelect
            name="role"
            label="Role"
            formControl={form.control}
            selectableOptions={Object.keys(Role)}
          />

          <Button type="submit" className="w-full">
            {form.formState.isSubmitting ? (
              <>
                <Loader size={25} />
              </>
            ) : (
              "Save Customer"
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}
