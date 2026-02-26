"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinkClass =
    "relative text-[var(--text)] transition-colors duration-200 hover:text-[var(--brand)] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--brand)] after:transition-all after:duration-200 hover:after:w-full";

  const navLinkWhiteClass =
    "relative text-white/90 transition-colors duration-200 hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-200 hover:after:w-full";

  const primaryBtnClass =
    "rounded-xl bg-white px-5 py-2 text-sm font-bold text-[var(--text)] shadow transition-all duration-200 hover:-translate-y-[1px] hover:shadow-md active:translate-y-0";

  const mobileMenuLinkClass =
    "w-fit text-[var(--text)] transition-colors duration-200 hover:text-[var(--brand)]";

  const mobileBtnClass =
    "grid h-12 w-12 place-items-center rounded-xl bg-[var(--brand)] text-white shadow-md transition-all duration-200 hover:brightness-95 hover:shadow-lg active:scale-[0.98]";

  return (
    <header className="relative w-full">
      <div className="relative bg-[var(--left)] md:bg-transparent">
        <div className="container mx-auto px-6 py-5 md:px-12">
          <div className="hidden items-center md:grid md:grid-cols-2">
            <div className="flex items-center">
              <div className="text-2xl font-extrabold leading-none tracking-tight">
                Job
                <span className="inline-flex items-baseline text-[var(--brand)]">
                  N
                  <span className="mx-[2px] inline-flex items-center justify-center">
                    <Image
                      src="/images/search-o.png"
                      alt="Search icon"
                      width={16}
                      height={16}
                      className="relative top-[1px]"
                      priority
                    />
                  </span>
                  w
                </span>
              </div>

              <nav className="ml-16 flex items-center gap-12 text-sm font-bold">
                <a href="#" className={navLinkClass}>
                  Home
                </a>
                <a href="#" className={navLinkClass}>
                  Job
                </a>
                <a href="#" className={navLinkClass}>
                  About Us
                </a>
                <a href="#" className={navLinkClass}>
                  Contact
                </a>
              </nav>
            </div>

            <div className="flex items-center justify-end gap-12">
              <a href="#" className={`text-sm font-bold ${navLinkWhiteClass}`}>
                Sign In
              </a>

              <a href="#" className={primaryBtnClass}>
                Create Account
              </a>
            </div>
          </div>

          <div className="relative h-[70px] md:hidden">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="text-3xl font-extrabold tracking-tight">
                Job
                <span className="inline-flex items-baseline text-[var(--brand)]">
                  N
                  <span className="mx-[3px] inline-flex items-center justify-center">
                    <Image
                      src="/images/search-o.png"
                      alt="Search icon"
                      width={18}
                      height={18}
                      className="relative top-[1px]"
                      priority
                    />
                  </span>
                  w
                </span>
              </div>
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <button
                onClick={() => setOpen((v) => !v)}
                className={mobileBtnClass}
                aria-label="Open menu"
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[9999] md:hidden">
          <button
            className="absolute inset-0 bg-black/20 transition-opacity duration-200 hover:bg-black/25"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />

          <div className="relative bg-[var(--left)] shadow-lg">
            <div className="container mx-auto px-6 pb-6 pt-6">
              <div className="mb-4 flex justify-end">
                <button
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-lg bg-white text-xl font-bold text-[var(--text)] shadow transition-all duration-200 hover:-translate-y-[1px] hover:shadow-md active:translate-y-0"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              <nav className="flex flex-col gap-3 text-sm font-bold">
                <a
                  href="#"
                  className={mobileMenuLinkClass}
                  onClick={() => setOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#"
                  className={mobileMenuLinkClass}
                  onClick={() => setOpen(false)}
                >
                  Job
                </a>
                <a
                  href="#"
                  className={mobileMenuLinkClass}
                  onClick={() => setOpen(false)}
                >
                  About Us
                </a>
                <a
                  href="#"
                  className={mobileMenuLinkClass}
                  onClick={() => setOpen(false)}
                >
                  Contact
                </a>

                <hr className="my-2 opacity-20" />

                <a
                  href="#"
                  className={`${mobileMenuLinkClass} font-bold`}
                  onClick={() => setOpen(false)}
                >
                  Sign In
                </a>

                <a
                  href="#"
                  className={`w-fit ${primaryBtnClass.replace(
                    "px-5 py-2",
                    "px-4 py-2"
                  )}`}
                  onClick={() => setOpen(false)}
                >
                  Create Account
                </a>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}