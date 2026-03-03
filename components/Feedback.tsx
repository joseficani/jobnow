"use client";

import Image from "next/image";
import { useState } from "react";

const feedbacks = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex.Quisque ut arcu at lectus tristique auctor sit amet at turpis.",
    name: "Brown Garcia",
    role: "Full Stack Developer in XReact Tech",
  },
  {
    quote:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    name: "John Jacob",
    role: "Product Designer in JobNow",
  },
  {
    quote:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
    name: "Nathalie Martin",
    role: "UI/UX Designer in Dimension Studio",
  },
];

function ArrowBtn({
  variant,
  onClick,
}: {
  variant: "prev" | "next";
  onClick: () => void;
}) {
  const isNext = variant === "next";

  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "inline-flex items-center justify-center rounded-full transition-all duration-200",
        "h-[34px] w-[34px]",
        isNext ? "bg-[#00cc99]" : "bg-[#e5e7eb]",
      ].join(" ")}
    >
      <Image
        src={isNext ? "/images/arrow-right.png" : "/images/arrow-left.png"}
        alt=""
        width={14}
        height={14}
        className="h-[14px] w-[14px] object-contain"
      />
    </button>
  );
}
export default function PeopleFeedback() {
  const [index, setIndex] = useState(0);
  const active = feedbacks[index];

  const prev = () => setIndex((p) => (p - 1 + feedbacks.length) % feedbacks.length);
  const next = () => setIndex((p) => (p + 1) % feedbacks.length);

  return (
    <section className="w-full bg-white">
      <div className="container mx-auto px-6 py-14 md:px-12 md:py-24">
        <div className="grid items-start gap-6 md:grid-cols-2 md:gap-8">
          <div className="text-center md:text-left">
            <h2 className="font-extrabold text-[var(--text)] text-[18px] leading-[1.15] md:text-[34px] md:w-[657px] md:whitespace-nowrap">
              People’s Feedback about JobNow!
            </h2>

            <p className="mx-auto mt-3 max-w-[320px] text-[10px] leading-5 text-[var(--muted)] md:mx-0 md:mt-4 md:max-w-[520px] md:text-[14px] md:leading-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis lacus non orci euismod
              vestibulum vitae ut ex.
            </p>
            <p className="mx-auto mt-5 max-w-[330px] text-[10px] font-extrabold leading-5 text-[var(--text)] md:mx-0 md:mt-8 md:max-w-[560px] md:text-[14px] md:leading-6">
              “{active.quote}”
            </p>

            <div className="mt-14 flex flex-col items-center md:hidden">
              <div className="h-[183px] w-[187px] rounded-[8px] bg-[#00cc99]" />
              <p className="mt-6 text-[12px] font-extrabold text-[var(--text)]">
                {active.name}
              </p>
              <p className="mt-1 text-[9px] text-[var(--muted)]">{active.role}</p>
              <div className="mt-4 flex items-center gap-3">
                <ArrowBtn variant="prev" onClick={prev} />
                <ArrowBtn variant="next" onClick={next} />
              </div>
            </div>
            <div className="mt-10 hidden md:block">
              <p className="text-[14px] font-extrabold text-[var(--text)]">
                {active.name}
              </p>
              <p className="mt-1 text-[12px] text-[var(--muted)]">{active.role}</p>

              <div className="mt-6 flex items-center gap-3">
                <ArrowBtn variant="prev" onClick={prev} />
                <ArrowBtn variant="next" onClick={next} />
              </div>
            </div>
          </div>
          <div className="hidden md:flex justify-center md:justify-end md:pt-[52px]">
            <div className="h-[474px] w-[484px] rounded-[20px] bg-[#00cc99]" />
          </div>
        </div>
      </div>
    </section>
  );
}