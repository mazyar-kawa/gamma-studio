"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

interface SelectOption {
  value: string
  label: string
}

interface Props {
  value: string
  options: SelectOption[]
  onChange: (value: string) => void
  className?: string
}

export function CustomSelect({ value, options, onChange, className = "" }: Props) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger
        className={cn(
          "h-8 border-white/15 bg-white/5 text-xs text-white hover:bg-white/10",
          className,
        )}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="border-white/15 bg-[#141414] text-white">
        {options.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            className="text-xs focus:bg-white/10 focus:text-white"
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
