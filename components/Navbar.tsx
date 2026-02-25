"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative w-full">
      <div className="relative bg-[var(--left)] md:bg-transparent">
        <div className="container mx-auto px-6 md:px-12 py-5">
          <div className="hidden md:grid md:grid-cols-2 items-center">
            <div className="flex items-center lg:-ml-10">
              <div className="text-2xl font-extrabold tracking-tight leading-none">
                Job
                <span className="text-[var(--brand)] inline-flex items-baseline">
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
                <a href="#">Home</a>
                <a href="#">Job</a>
                <a href="#">About Us</a>
                <a href="#">Contact</a>
              </nav>
            </div>

            <div className="flex items-center justify-end gap-12">
              <a href="#" className="text-sm font-bold text-white">
                Sign In
              </a>

              <a
                href="#"
                className="rounded-xl bg-white px-5 py-2 text-sm font-bold text-[var(--text)] shadow"
              >
                Create Account
              </a>
            </div>
          </div>

          <div className="relative md:hidden h-[70px]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="text-3xl font-extrabold tracking-tight">
                Job
                <span className="text-[var(--brand)] inline-flex items-baseline">
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
                className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--brand)] text-white shadow-md"
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
            className="absolute inset-0 bg-black/20"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />

          <div className="relative bg-[var(--left)] shadow-lg">
            <div className="container mx-auto px-6 pb-6 pt-6">
              <div className="mb-4 flex justify-end">
                <button
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-lg bg-white text-xl font-bold text-[var(--text)] shadow"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              <nav className="flex flex-col gap-3 text-sm font-bold">
                <a href="#" onClick={() => setOpen(false)}>
                  Home
                </a>
                <a href="#" onClick={() => setOpen(false)}>
                  Job
                </a>
                <a href="#" onClick={() => setOpen(false)}>
                  About Us
                </a>
                <a href="#" onClick={() => setOpen(false)}>
                  Contact
                </a>
                <hr className="my-2 opacity-20" />
                <a href="#" className="font-bold" onClick={() => setOpen(false)}>
                  Sign In
                </a>
                <a
                  href="#"
                  className="w-fit rounded-xl bg-white px-4 py-2 text-sm font-bold text-[var(--text)] shadow"
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