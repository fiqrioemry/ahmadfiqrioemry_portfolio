import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md px-3 py-2 text-sm placeholder:text-primary/70 focus-visible:outline-none focus-visible:ring-2focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border dark:border-primary bg-background",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
