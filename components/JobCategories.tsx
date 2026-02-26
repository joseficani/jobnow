"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const categories = [
  {
    title: "Design and\nDevelopment",
    jobs: "350 Job Vacancy",
    icon: "/images/cat-design.png",
  },
  {
    title: "Accounting and\nFinance",
    jobs: "350 Job Vacancy",
    icon: "/images/cat-accounting.png",
  },
  {
    title: "Bank\nInstitution",
    jobs: "350 Job Vacancy",
    icon: "/images/cat-bank.png",
  },
  {
    title: "Product\nManagement",
    jobs: "350 Job Vacancy",
    icon: "/images/cat-product.png",
  },
  {
    title: "Customer\nSupport",
    jobs: "350 Job Vacancy",
    icon: "/images/cat-support.png",
  },
];

const ICON_WHITE = "brightness-0 invert";

function CategoryCard({
  title,
  jobs,
  icon,
  index,
  activeIndex,
  setActiveIndex,
}: {
  title: string;
  jobs: string;
  icon: string;
  index: number;
  activeIndex: number;
  setActiveIndex: (i: number) => void;
}) {
  const active = index === activeIndex;

  return (
    <div
      onMouseEnter={() => setActiveIndex(index)}
      className={[
        "w-[285px] h-[248px] shrink-0 rounded-[20px] p-7",
        "shadow-[0_12px_30px_rgba(0,0,0,0.06)]",
        "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.10)]",
        active ? "bg-[var(--brand)] text-white" : "bg-white text-[var(--text)]",
      ].join(" ")}
    >
      <div className="h-[49px] w-[49px]">
        <Image
          src={icon}
          alt=""
          width={49}
          height={49}
          className={[
            "transition-all duration-300",
            active ? ICON_WHITE : "", 
          ].join(" ")}
        />
      </div>

      <h3 className="mt-7 whitespace-pre-line text-[16px] font-extrabold leading-[1.25]">
        {title}
      </h3>

      <p
        className={[
          "mt-10 text-[10px] font-medium whitespace-nowrap",
          active ? "text-white/80" : "text-[var(--muted)]",
        ].join(" ")}
      >
        {jobs}
      </p>
    </div>
  );
}

function MobileCard({
  title,
  jobs,
  icon,
  index,
  activeIndex,
  setActiveIndex,
}: {
  title: string;
  jobs: string;
  icon: string;
  index: number;
  activeIndex: number;
  setActiveIndex: (i: number) => void;
}) {
  const active = index === activeIndex;

  return (
    <div
      onMouseEnter={() => setActiveIndex(index)}
      onClick={() => setActiveIndex(index)}
      className={[
        "w-[106px] h-[93px] rounded-[7px]",
        "shadow-[0_10px_26px_rgba(0,0,0,0.06)]",
        "transition-all duration-300",
        active ? "bg-[var(--brand)]" : "bg-white",
      ].join(" ")}
      style={{ padding: 10 }}
    >
      <div className="h-[18px] w-[18px]">
        <Image
          src={icon}
          alt=""
          width={18}
          height={18}
          className={[
            "transition-all duration-300",
            active ? ICON_WHITE : "",
          ].join(" ")}
        />
      </div>

      <h3
        className={[
          "mt-[8px] whitespace-pre-line font-extrabold leading-[10px]",
          "w-[56px] h-[21px] text-[7px]",
          active ? "text-white" : "text-[var(--text)]",
        ].join(" ")}
      >
        {title}
      </h3>

      <p
        className={[
          "mt-[6px] font-medium leading-[5px]",
          "text-[5px] whitespace-nowrap",
          active ? "text-white/80" : "text-[var(--muted)]",
        ].join(" ")}
      >
        {jobs}
      </p>
    </div>
  );
}

export default function PopularJobCategories() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full overflow-x-hidden bg-[#eaf8f3]">
      <div className="container mx-auto px-6 py-14 md:px-12 md:py-20">
        <div className="mx-auto text-center">
          <h2 className="text-[14px] font-extrabold leading-[1.2] text-[var(--text)] md:text-[44px] md:leading-[1.1]">
            Popular Job Categories
          </h2>

          <p className="mx-auto mt-3 max-w-[280px] text-[8.5px] leading-[1.55] text-[var(--muted)] md:mt-4 md:max-w-[760px] md:text-[14px] md:leading-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        <div className="mt-10 md:mt-14">
          <div className="md:hidden overflow-hidden">
            <Swiper slidesPerView="auto" spaceBetween={16} grabCursor className="!overflow-visible">
              {categories.map((c, i) => (
                <SwiperSlide key={c.title} style={{ width: 106 }}>
                  <MobileCard
                    title={c.title}
                    jobs={c.jobs}
                    icon={c.icon}
                    index={i}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="hidden md:block">
            <div className="overflow-hidden -mr-[110px]">
              <Swiper slidesPerView="auto" spaceBetween={24} grabCursor className="!overflow-visible">
                {categories.map((c, i) => (
                  <SwiperSlide key={c.title} style={{ width: 285 }}>
                    <CategoryCard
                      title={c.title}
                      jobs={c.jobs}
                      icon={c.icon}
                      index={i}
                      activeIndex={activeIndex}
                      setActiveIndex={setActiveIndex}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center md:mt-12">
          <a
            href="#"
            className="
              inline-flex items-center justify-center
              h-[32px] w-[105px] rounded-[8px]
              border-2 border-[var(--brand)] bg-transparent
              text-[10px] font-bold text-[var(--brand)]
              transition-all duration-300 hover:bg-[var(--brand)] hover:text-white hover:shadow-md
              md:h-[40px] md:w-[120px] md:rounded-[10px] md:text-[11px]
            "
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
}