"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { productSchema } from "./product.schema"
import z from "zod"

import { Button } from "@/components/primitives/button"
import { Form } from "@/components/primitives/form"
import { useForm } from "react-hook-form"
import { FormInput } from "@/components/ui/FormInput"
import { FormSelect } from "@/components/ui/FormSelect"
import { ProductAvailabilityStatus } from "@/types/product"
import { useParams } from "next/navigation"

export const ProductForm = () => {
  const { category } = useParams<{ category: string }>()

  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      price: 0,
      quantity: 0,
      status: "AVAILABLE",
      description: "",
      category,
    },
  })

  function onSubmit(values: z.infer<typeof productSchema>) {
    console.log(values)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-5 ">
        <div className="basis-1/2 space-y-6 bg-bgPrimary p-6 shadow rounded-2xl">
          <FormInput name="name" label="Name" formControl={form.control} />
          <div className="flex [&>*]:flex-1 gap-2">
            <FormInput
              name="price"
              label="Price"
              type="number"
              formControl={form.control}
            />
            <FormInput
              name="quantity"
              label="Quantity"
              type="number"
              formControl={form.control}
            />
          </div>
          <div className="flex [&>*]:flex-1 gap-2">
            <FormSelect
              name="status"
              label="Status"
              formControl={form.control}
              selectableOptions={Object.keys(ProductAvailabilityStatus)}
            />
            <FormInput
              name="category"
              label="Category"
              disabled
              formControl={form.control}
            />
          </div>
          <FormInput
            name="description"
            label="Description"
            type="textarea"
            formControl={form.control}
          />
        </div>
        <div className="basis-1/2 space-y-6 bg-bgPrimary p-6 shadow rounded-2xl h-fit">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  )
}
