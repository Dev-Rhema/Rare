import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "../ui/Container";
import Logo from "../ui/Logo";
import { CloseIcon, MenuIcon } from "../ui/Icons";
import NavLinks from "./NavLinks";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname, search } = useLocation();

  useEffect(() => setMenuOpen(false), [pathname, search]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-6">
        <div className="flex items-center gap-12">
          <Logo className="h-10 md:h-11" />
          <NavLinks className="hidden items-center gap-8 md:flex" />
        </div>

        <div className="flex items-center gap-6 text-sm">
          <Link
            to="/contact"
            className="hidden text-muted hover:text-ink sm:block"
          >
            Account
          </Link>
          <Link
            to="/products"
            className="rounded-full bg-brand-yellow px-4 py-2 font-semibold text-ink hover:bg-brand-yellow-light"
          >
            Cart (0)
          </Link>
          <button
            type="button"
            className="rounded-lg p-1 md:hidden"
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
