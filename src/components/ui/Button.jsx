import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

const VARIANTS = {
  primary: "bg-brand-blue text-white hover:bg-brand-blue-dark",
  secondary: "bg-brand-yellow text-on-yellow hover:bg-brand-yellow-light",
  dark: "bg-black text-white hover:bg-black/80",
  outline: "border border-current hover:bg-black/5",
};

const SIZES = {
  sm: "px-3.5 py-2 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-sm",
};

export default function Button({
  variant = "primary",
  size = "md",
  to,
  type = "button",
  className,
  children,
  ...props
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50",
    VARIANTS[variant],
    SIZES[size],
    className,
  );

  if (to)
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
