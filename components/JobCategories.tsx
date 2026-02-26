"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const categories = [
  { title: "Design and\nDevelopment", jobs: "350 Job Vacancy", icon: "/images/cat-design.png" },
  { title: "Accounting and\nFinance", jobs: "350 Job Vacancy", icon: "/images/cat-accounting.png" },
  { title: "Bank\nInstitution", jobs: "350 Job Vacancy", icon: "/images/cat-bank.png" },
  { title: "Product\nManagement", jobs: "350 Job Vacancy", icon: "/images/cat-product.png" },
  { title: "Customer\nSupport", jobs: "350 Job Vacancy", icon: "/images/cat-support.png" },
];

const ICON_WHITE = "brightness-0 invert";

function CategoryCard({
  title,
  jobs,
  icon,
  active,
  onActivate,
}: {
  title: string;
  jobs: string;
  icon: string;
  active: boolean;
  onActivate: () => void;
}) {
  return (
    <div
      onMouseEnter={onActivate}
      onClick={onActivate}
      className={[
        "flex flex-col transition-all duration-300",
        "shadow-[0_12px_30px_rgba(0,0,0,0.06)]",
        "hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.10)]",
        active ? "bg-[var(--brand)] text-white" : "bg-white text-[var(--text)]",
        "w-full h-[93px] rounded-[7px] p-[10px]",
        "md:h-[248px] md:rounded-[20px] md:p-7",
      ].join(" ")}
    >
      <div className="h-[18px] w-[18px] md:h-[49px] md:w-[49px]">
        <Image
          src={icon}
          alt=""
          width={49}
          height={49}
          className={["transition-all duration-300", active ? ICON_WHITE : ""].join(" ")}
        />
      </div>

      <h3
        className={[
          "whitespace-pre-line font-extrabold",
          "mt-[8px] text-[6.5px] leading-[10px]",
          "md:mt-7 md:text-[18px] md:leading-[1.25]",
        ].join(" ")}
      >
        {title}
      </h3>

      <p
        className={[
          "mt-auto font-medium whitespace-nowrap",
          "text-[5px]",
          "md:text-[12px]",
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis lacus non orci euismod
            vestibulum vitae ut ex. Quisque ut arcu at lectus tristique auctor sit amet at turpis.
          </p>
        </div>

        <div className="mt-10 md:mt-14">
          <div className="overflow-visible pb-8">
            <Swiper
              grabCursor
              className="!overflow-visible"
              slidesPerView={"auto"}
              spaceBetween={16}
              breakpoints={{
                768: {
                  slidesPerView: 4.2,
                  spaceBetween: 24,
                },
              }}
            >
              {categories.map((c, i) => (
                <SwiperSlide key={c.title} className="!overflow-visible !w-[106px] md:!w-[285px] pb-8">
                  <CategoryCard
                    title={c.title}
                    jobs={c.jobs}
                    icon={c.icon}
                    active={i === activeIndex}
                    onActivate={() => setActiveIndex(i)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
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