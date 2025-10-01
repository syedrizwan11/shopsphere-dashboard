"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { transactionSchema } from "./transaction.schema"
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
import { FulfillmentStatus, PaymentStatus, Transaction } from "@prisma/client"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { ApiResponse } from "@/types"
import z from "zod"
import { createTransaction, updateTransaction } from "@/actions"

interface formProps {
  transaction?: Transaction
}
export const TransactionForm = ({ transaction }: formProps) => {
  const router = useRouter()

  const form = useForm<z.infer<typeof transactionSchema>>({
    resolver: zodResolver(transactionSchema),
    defaultValues: {
      userId: transaction?.userId ?? 0,
      productId: transaction?.productId ?? 0,
      price: transaction?.price ?? 0,
      paymentStatus: transaction?.paymentStatus ?? "UNPAID",
      fulfillmentStatus: transaction?.fulfillmentStatus ?? "CANCELLED",
    },
  })

  const onSubmit = async (values: z.infer<typeof transactionSchema>) => {
    const isEditing = Boolean(transaction)
    let result: ApiResponse<Transaction>
    if (isEditing) {
      result = await updateTransaction({ ...values, id: transaction!.id })
    } else {
      result = await createTransaction(values)
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
      router.push(`/transactions`)
    } else {
      form.reset()
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="max-w-lg space-y-6 bg-bgPrimary p-6 shadow rounded-2xl">
          <div>
            <LargeHeading className="text-lg">
              Transaction Information
            </LargeHeading>
            <SmallText className="text-sm">
              Enter the Correct Transaction Information below.
            </SmallText>
          </div>

          <FormInput
            name="productId"
            label="Product Id"
            type="number"
            formControl={form.control}
          />
          <FormInput
            name="userId"
            label="User Id"
            type="number"
            formControl={form.control}
          />
          <FormInput
            name="price"
            label="Price"
            type="number"
            formControl={form.control}
          />
          <div className="flex gap-4">
            <FormSelect
              name="paymentStatus"
              label="Payment Status"
              formControl={form.control}
              selectableOptions={Object.keys(PaymentStatus)}
            />
            <FormSelect
              name="fulfillmentStatus"
              label="Fulfillment Status"
              formControl={form.control}
              selectableOptions={Object.keys(FulfillmentStatus)}
            />
          </div>
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
