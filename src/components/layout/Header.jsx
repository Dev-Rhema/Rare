import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "../ui/Container";
import Logo from "../ui/Logo";
import { CartIcon, CloseIcon, MenuIcon } from "../ui/Icons";
import AccountPopover from "./AccountPopover";
import NavLinks from "./NavLinks";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname, search } = useLocation();

  useEffect(() => setMenuOpen(false), [pathname, search]);

  return (
    <header className="sticky top-0 z-40 border-b border-black/15 bg-brand-yellow backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <Logo className="h-10 md:h-11" />
        </div>
        <NavLinks className="hidden items-center gap-2 md:flex text-center" />

        <div className="flex items-center gap-4 text-base">
          <AccountPopover />
          <Link
            to="/products"
            className="rounded-lg bg-brand-blue p-2 text-white hover:bg-brand-blue-dark"
            aria-label="Cart"
            title="Cart"
          >
            <CartIcon />
          </Link>
          <button
            type="button"
            className="rounded-lg p-1 text-black hover:bg-brand-yellow-light md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </Container>

      {menuOpen && (
        <Container className="pb-5 md:hidden">
          <NavLinks className="flex flex-col items-start gap-3" />
        </Container>
      )}
    </header>
  );
}
