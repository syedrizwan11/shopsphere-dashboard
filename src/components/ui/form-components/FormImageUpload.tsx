"use client"

import { Control, FieldValues, Path } from "react-hook-form"
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/primitives/form"
import { useRef, useCallback } from "react"
import { ImageIcon, X } from "lucide-react"
import Image from "next/image"

interface ImageUploadProps<T extends FieldValues> {
  name: Path<T>
  formControl: Control<T>
  label?: string
  maxImages?: number
}

export const FormImageUpload = <T extends FieldValues>({
  name,
  formControl,
  label,
  maxImages = 4,
}: ImageUploadProps<T>) => {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFiles = useCallback(
    (
      event: React.ChangeEvent<HTMLInputElement>,
      files: File[],
      onChangeField: (val: File[]) => void
    ) => {
      const newFiles = event.target.files ? Array.from(event.target.files) : []
      const updated = [...files, ...newFiles].slice(0, maxImages)
      onChangeField(updated)
      event.target.value = ""
    },
    [maxImages]
  )

  const handleRemove = useCallback(
    (index: number, files: File[], onChangeField: (val: File[]) => void) => {
      const updated = files.filter((_, i) => i !== index)
      onChangeField(updated)
    },
    []
  )

  return (
    <FormField
      control={formControl}
      name={name}
      render={({ field }) => {
        const files: File[] = field.value || []
        return (
          <FormItem>
            {label && <FormLabel>{label}</FormLabel>}
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: maxImages }).map((_, idx) => {
                const file = files[idx]
                return (
                  <div
                    key={idx}
                    className="relative min-w-20 flex-1 flex flex-col items-center justify-center border-2 border-dashed rounded-lg h-28 cursor-pointer bg-blue-50 hover:bg-blue-100"
                    onClick={() => !file && fileInputRef.current?.click()}
                  >
                    {file ? (
                      <>
                        <Image
                          src={URL.createObjectURL(file)}
                          alt={`Photo ${idx + 1}`}
                          className="rounded object-cover"
                          fill
                        />
                        <button
                          type="button"
                          className="absolute top-1 right-1 p-1 bg-white rounded-full shadow hover:bg-gray-100"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleRemove(idx, files, field.onChange)
                          }}
                        >
                          <X className="w-4 h-4 text-red-500" />
                        </button>
                      </>
                    ) : (
                      <>
                        <ImageIcon className="h-8 w-8 text-blue-400" />
                        <span className="text-xs text-gray-500">
                          Photo {idx + 1}
                        </span>
                      </>
                    )}
                  </div>
                )
              })}
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              hidden
              onChange={(e) => handleFiles(e, files, field.onChange)}
            />

            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}
