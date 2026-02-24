"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative w-full">
      <div className="absolute inset-0 hidden md:grid md:grid-cols-2">
        <div className="bg-[var(--left)]" />
        <div className="bg-[var(--brand)]" />
      </div>
      <div className="relative bg-[var(--left)] md:bg-transparent">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 py-5">
          <div className="hidden md:grid md:grid-cols-2 items-center">
            <div className="flex items-center lg:-ml-12">
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
        <div className="md:hidden bg-[var(--left)]">
          <div className="mx-auto max-w-[1200px] px-6 pb-5">
            <nav className="flex flex-col gap-3 text-sm font-bold">
              <a href="#">Home</a>
              <a href="#">Job</a>
              <a href="#">About Us</a>
              <a href="#">Contact</a>
              <hr className="my-2 opacity-20" />
              <a href="#" className="font-bold">
                Sign In
              </a>
              <a
                href="#"
                className="w-fit rounded-xl bg-white px-4 py-2 text-sm font-bold text-[var(--text)] shadow"
              >
                Create Account
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}