"use client"

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/primitives/form"
import { Input } from "@/components/primitives/input"
import { Textarea } from "@/components/primitives/textarea"
import { Control, FieldValues, Path } from "react-hook-form"

interface FormInputProps<T extends FieldValues> {
  name: Path<T>
  formControl: Control<T>
  label?: string
  placeholder?: string
  type?: "text" | "number" | "textarea"
  disabled?: boolean
}

export const FormInput = <T extends FieldValues>({
  name,
  formControl,
  label,
  disabled,
  placeholder = "",
  type = "text",
}: FormInputProps<T>) => {
  return (
    <FormField
      control={formControl}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            {type === "textarea" ? (
              <Textarea
                placeholder={placeholder}
                {...field}
                disabled={disabled}
              />
            ) : (
              <Input
                placeholder={placeholder}
                type={type}
                {...field}
                disabled={disabled}
              />
            )}
          </FormControl>
          {/* <FormDescription>This is your public display name.</FormDescription> */}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
