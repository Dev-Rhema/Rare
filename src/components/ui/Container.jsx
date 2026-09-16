import { cn } from "../../utils/cn";

export default function Container({ className, children }) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-2 sm:px-3", className)}>
      {children}
    </div>
  );
}
