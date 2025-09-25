"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { productSchema } from "./product.schema"
import z from "zod"

import { Button } from "@/components/primitives/button"
import { Form } from "@/components/primitives/form"
import { useForm } from "react-hook-form"
import {
  FormInput,
  FormSelect,
  FormImageUpload,
  LargeHeading,
  SmallText,
  Loader,
} from "@/components/ui"
import { ProductAvailabilityStatus } from "@/types/product"
import { useParams } from "next/navigation"
import { createProduct } from "@/actions/product/create"

export const ProductForm = () => {
  const { category } = useParams<{ category: string }>()

  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      price: 0,
      quantity: 1,
      status: "AVAILABLE",
      description: "",
      category,
    },
  })

  const onSubmit = async (values: z.infer<typeof productSchema>) => {
    await createProduct(values)
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-5 sm:flex-row flex-col"
      >
        <div className="basis-1/2 space-y-6 bg-bgPrimary p-6 shadow rounded-2xl">
          <div>
            <LargeHeading className="text-lg">Product Information</LargeHeading>
            <SmallText className="text-sm">
              Enter the Correct Product Information below.
            </SmallText>
          </div>

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
          <div>
            <LargeHeading className="text-lg">Product Images</LargeHeading>
            <SmallText className="text-sm">
              Enter the Product Images Below and only click Save when you are
              completely sure about All the information .
            </SmallText>
          </div>
          <FormImageUpload
            name="images"
            formControl={form.control}
            maxImages={4}
          />
          <Button type="submit">
            {form.formState.isSubmitting ? (
              <>
                <Loader size={25} />
              </>
            ) : (
              "Save Product"
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}
