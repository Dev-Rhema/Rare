import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  ArrowRightIcon,
  BoxIcon,
  CloseIcon,
  UserIcon,
} from "../ui/Icons";

export default function AccountPopover() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [offers, setOffers] = useState(false);
  const rootRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => event.key === "Escape" && setOpen(false);
    const onPointer = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  const onSubmit = (event) => event.preventDefault();

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        className="rounded-lg p-2 text-black hover:bg-brand-yellow-light"
        aria-label="Account"
        title="Account"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <UserIcon />
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Sign in or create account"
          className="fixed inset-x-4 top-24 z-50 rounded-3xl border border-line bg-white p-5 shadow-2xl sm:absolute sm:inset-x-auto sm:right-0 sm:top-full sm:mt-3 sm:w-[24rem]"
        >
          <div className="flex items-center justify-between">
            <h2 className="pr-3 text-sm leading-snug">Sign in or create account</h2>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="rounded-full bg-surface p-2.5 hover:bg-line"
            >
              <CloseIcon />
            </button>
          </div>

          <button
            type="button"
            className="mt-5 flex w-full items-center justify-between rounded-full border border-line px-5 py-3.5 text-left transition-colors hover:bg-surface"
          >
            <span className="font-semibold">Continue with Shop</span>
            <span className="text-2xl font-extrabold lowercase tracking-tight text-[#5a31f4]">
              shop
            </span>
          </button>

          <div className="my-4 flex items-center gap-4 text-sm font-semibold text-muted">
            <span className="h-px flex-1 bg-line" />
            OR
            <span className="h-px flex-1 bg-line" />
          </div>

          <form onSubmit={onSubmit}>
            <div className="relative">
              <input
                id="account-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder=" "
                autoComplete="email"
                className="peer w-full rounded-full border border-black bg-white px-5 pb-2 pt-6 pr-14 text-base outline-none focus:ring-2 focus:ring-brand-blue/30"
              />
              <label
                htmlFor="account-email"
                className="pointer-events-none absolute left-5 top-2.5 text-xs text-muted transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-xs"
              >
                Email
              </label>
              <button
                type="submit"
                aria-label="Continue with email"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-muted hover:bg-surface hover:text-ink"
              >
                <ArrowRightIcon />
              </button>
            </div>

            <label className="mt-4 flex cursor-pointer items-center gap-3 text-base">
              <input
                type="checkbox"
                checked={offers}
                onChange={(event) => setOffers(event.target.checked)}
                className="h-5 w-5 rounded-full border-line accent-brand-blue"
              />
              Email me with news and offers
            </label>
          </form>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-full border border-line px-4 py-3.5 font-medium hover:bg-surface"
            >
              <BoxIcon />
              Orders
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-full border border-line px-4 py-3.5 font-medium hover:bg-surface"
            >
              <UserIcon />
              Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
