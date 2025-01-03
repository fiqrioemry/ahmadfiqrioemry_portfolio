import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full dark:border dark:border-primary rounded-md bg-background px-3 py-2 text-sm   disabled:cursor-not-allowed disabled:opacity-50  placeholder:text-primary/70 ",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
