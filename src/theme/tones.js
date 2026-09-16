import { createContext, useContext } from "react";

/**
 * One source of truth for how a section looks on each background.
 * <Section tone="blue"> provides these classes so every child
 * (headers, chips, search bars) adapts without extra props.
 */
const light = {
  bg: "bg-white",
  text: "text-ink",
  muted: "text-muted",
  accent: "text-brand-blue",
  link: "text-brand-blue hover:text-brand-blue-dark",
  rule: "border-line",
  chip: "border-line bg-white text-muted hover:border-ink hover:text-ink",
  chipActive: "border-black bg-black text-white",
  field: "border-ink text-ink placeholder:text-muted",
  button: "primary",
};

export const TONES = {
  white: light,
  gray: { ...light, bg: "bg-surface" },
  blue: {
    bg: "bg-brand-blue",
    text: "text-white",
    muted: "text-white/75",
    accent: "text-brand-yellow",
    link: "text-brand-yellow hover:text-white",
    rule: "border-white/20",
    chip: "border-white/30 text-white/85 hover:border-white hover:text-white",
    chipActive: "border-brand-yellow bg-brand-yellow text-on-yellow",
    field: "border-white text-white placeholder:text-white/60",
    button: "secondary",
  },
  yellow: {
    bg: "bg-brand-yellow",
    text: "text-on-yellow",
    muted: "text-black/70",
    accent: "text-brand-blue",
    link: "text-brand-blue hover:text-black",
    rule: "border-black/15",
    chip: "border-black/25 text-black/80 hover:border-black hover:text-black",
    chipActive: "border-brand-blue bg-brand-blue text-white",
    field: "border-black text-black placeholder:text-black/50",
    button: "primary",
  },
};

export const ToneContext = createContext(TONES.white);
export const useTone = () => useContext(ToneContext);
