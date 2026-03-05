"use client";
import Image from "next/image";
import { useState } from "react";

const feedbacks = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex.",
    name: "Brown Garcia",
    role: "Full Stack Developer in XReact Tech",
    color: "#00cc99",
  },
  {
    quote:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
    name: "Nathalie Martin",
    role: "UI/UX Designer in Dimension Studio",
    color: "#3B82F6",
  },
  {
    quote:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    name: "John Jacob",
    role: "Product Designer in JobNow",
    color: "#F97316",
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
        "h-[36px] w-[36px]",
        isNext ? "bg-[#00cc99]" : "bg-[#e5e7eb]",
      ].join(" ")}
    >
      <Image
        src={isNext ? "/images/arrow-right.png" : "/images/arrow-left.png"}
        alt=""
        width={16}
        height={16}
        className="h-[16px] w-[16px]"
      />
    </button>
  );
}

export default function PeopleFeedback() {
  const [index, setIndex] = useState(0);
  const active = feedbacks[index];

  const prev = () =>
    setIndex((p) => (p - 1 + feedbacks.length) % feedbacks.length);

  const next = () =>
    setIndex((p) => (p + 1) % feedbacks.length);

  return (
    <section className="w-full bg-white overflow-x-hidden">
      <div className="container mx-auto px-6 py-14 md:px-12 md:py-24">

        <div className="grid items-start gap-6 md:grid-cols-3 md:gap-4">

          <div className="text-center md:text-left md:col-span-2">
            <h2 className="font-extrabold text-[var(--text)] text-[22px] leading-[1.2] md:text-[36px] md:w-[657px] md:whitespace-nowrap">
              People’s Feedback about JobNow!
            </h2>
            <p className="mx-auto mt-4 max-w-[520px] text-[16px] leading-7 text-[var(--muted)] md:mx-0 md:mt-5 md:max-w-[640px] md:text-[20px] md:leading-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis
              lacus non orci euismod vestibulum vitae ut ex.
            </p>
            <p className="mx-auto mt-6 max-w-[560px] text-[14px] font-extrabold leading-7 text-[var(--text)] md:mx-0 md:mt-10 md:max-w-[640px] md:text-[20px] md:leading-9">
              “{active.quote}”
            </p>
            <div className="mt-10 hidden md:block">
              <p className="text-[18px] font-extrabold text-[var(--text)]">
                {active.name}
              </p>

              <p className="mt-1 text-[14px] text-[var(--muted)]">
                {active.role}
              </p>

              <div className="mt-6 flex items-center gap-3">
                <ArrowBtn variant="prev" onClick={prev} />
                <ArrowBtn variant="next" onClick={next} />
              </div>

            </div>
            <div className="mt-14 flex flex-col items-center md:hidden">

              <div
                className="mt-6 h-[183px] w-[187px] rounded-[8px]"
                style={{ backgroundColor: active.color }}
              />

              <p className="mt-6 text-[14px] font-extrabold text-[var(--text)]">
                {active.name}
              </p>

              <p className="mt-1 text-[11px] text-[var(--muted)]">
                {active.role}
              </p>

              <div className="mt-4 flex items-center gap-3">
                <ArrowBtn variant="prev" onClick={prev} />
                <ArrowBtn variant="next" onClick={next} />
              </div>

            </div>

          </div>
          <div className="hidden md:flex justify-end">
            <div className="md:mt-[56px]">
              <div
                className="h-[474px] w-[484px] rounded-[20px]"
                style={{ backgroundColor: active.color }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}