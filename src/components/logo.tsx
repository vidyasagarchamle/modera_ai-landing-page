import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "default" | "icon";
}

export function Logo({ className, variant = "default" }: LogoProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <div className="relative h-8 w-8 overflow-hidden">
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <rect
            width="64"
            height="64"
            rx="14"
            className="fill-primary/10 dark:fill-primary/20"
          />
          <path
            d="M18 20C18 18.8954 18.8954 18 20 18H44C45.1046 18 46 18.8954 46 20V44C46 45.1046 45.1046 46 44 46H20C18.8954 46 18 45.1046 18 44V20Z"
            className="fill-primary/80"
          />
          <path
            d="M32 14L38 20H26L32 14Z"
            className="fill-primary"
          />
          <path
            d="M32 50L38 44H26L32 50Z"
            className="fill-primary"
          />
          <path
            d="M14 32L20 26V38L14 32Z"
            className="fill-primary"
          />
          <path
            d="M50 32L44 26V38L50 32Z"
            className="fill-primary"
          />
          <circle
            cx="32"
            cy="32"
            r="8"
            className="fill-background"
          />
          <path
            d="M30 28L36 32L30 36V28Z"
            className="fill-primary"
          />
        </svg>
      </div>
      
      {variant === "default" && (
        <div className="ml-2 flex flex-col">
          <span className="text-xl font-bold tracking-tight">Modly</span>
          <span className="text-xs font-medium text-muted-foreground -mt-1">AI</span>
        </div>
      )}
    </div>
  );
} 