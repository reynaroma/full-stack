"use client";
import { Category } from "@/sanity.types";
import { useRouter } from "next/router";
import { useState } from "react";

import { ChevronsUpDown, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "./button";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandInput,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface CategorySelectorProps {
  categories: Category[];
}

export function CategorySelectorComponent({
  categories,
}: CategorySelectorProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const router = useRouter();

  <Popover open={open} onOpenChange={setOpen}>
    <PopoverTrigger asChild>
      <Button
        variant="outline"
        role="combobox"
        aria-expanded={open}
        className="w-full max-w-full relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded"
      >
        {value
          ? categories.find((category) => category._id === value)?.title
          : "Filter by Category"}
        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0" />
      </Button>
    </PopoverTrigger>
    
    <PopoverContent className="w-full p-0">

    </PopoverContent>
  </Popover>

}