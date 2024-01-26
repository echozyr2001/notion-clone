import { VariantProps, cva } from "class-variance-authority";
import { Loader } from "lucide-react";

import { cn } from "@/lib/utils";

const spinnerVariants = cva("text-muted-foreground animate-spin", {
  variants: {
    size: {
      defaule: "h-4 w-4",
      sm: "h-2 w-2",
      lg: "h-6 w-6",
      icon: "h-10 w-10",
    },
  },
  defaultVariants: {
    size: "defaule",
  },
});

interface SpinnerPops extends VariantProps<typeof spinnerVariants> {}

export default function Spinner({ size }: SpinnerPops) {
  return <Loader className={cn(spinnerVariants({ size }))} />;
}
