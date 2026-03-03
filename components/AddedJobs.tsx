"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const jobs = [
  {
    title: "UI/UX Designer",
    company: "Dimension Studio",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique auctor sit amet at turpis.",
    location: "San Fransisco, CA",
    type: "Full Time",
    logo: "/images/job-1.png",
  },
  {
    title: "Full Stack Developer",
    company: "Alpander",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique auctor sit amet at turpis.",
    location: "San Fransisco, CA",
    type: "Full Time",
    logo: "/images/job-2.png",
  },
  {
    title: "Product Designer",
    company: "XReact Tech",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique auctor sit amet at turpis.",
    location: "San Fransisco, CA",
    type: "Full Time",
    logo: "/images/job-3.png",
  },
];

function PinIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M12 22s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 11.5a2.2 2.2 0 100-4.4 2.2 2.2 0 000 4.4z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BriefcaseIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M9 6V5a2 2 0 012-2h2a2 2 0 012 2v1"
        stroke="currentColor"
        strokeWidth="2.2"
      />
      <path
        d="M4 9h16v9a3 3 0 01-3 3H7a3 3 0 01-3-3V9z"
        stroke="currentColor"
        strokeWidth="2.2"
      />
      <path d="M4 13h16" stroke="currentColor" strokeWidth="2.2" />
    </svg>
  );
}

function JobCard({ title, company, desc, location, type, logo }: any) {
  return (
    <div
      className="
        flex flex-col bg-white
        shadow-[0_18px_45px_rgba(2,6,23,0.06)]
        transition-all duration-300 hover:-translate-y-1
        hover:shadow-[0_22px_55px_rgba(2,6,23,0.10)]
        md:w-full md:h-[510px] md:rounded-[20px] md:px-10 md:py-10
        w-[182px] h-[215px] rounded-[8px] px-[14px] py-[14px]
      "
    >
      <div className="h-[40px] w-[40px] md:h-[78px] md:w-[78px]">
        <Image
          src={logo}
          alt=""
          width={78}
          height={78}
          className="h-full w-full object-contain"
        />
      </div>
      <h3 className="mt-3 text-[11px] font-extrabold text-[var(--text)] md:mt-6 md:text-[22px]">
        {title}
      </h3>

      <p className="mt-1 text-[7px] font-semibold text-[var(--muted)] md:mt-2 md:text-[13px]">
        {company}
      </p>

      <p className="mt-2 text-[6.6px] leading-[10.5px] text-[var(--muted)] md:mt-6 md:text-[13px] md:leading-6">
        {desc}
      </p>
      <div className="mt-3 flex items-center gap-2 whitespace-nowrap md:mt-6 md:flex-wrap md:gap-3">
        <span className="inline-flex items-center gap-1 rounded-[6px] bg-[#f3f4f6] px-2 py-[3px] text-[6px] font-extrabold text-[var(--text)] md:gap-2 md:rounded-[10px] md:px-4 md:py-2 md:text-[12px]">
          <PinIcon className="h-[10px] w-[10px] md:h-[16px] md:w-[16px]" />
          {location}
        </span>

        <span className="inline-flex items-center gap-1 rounded-[6px] bg-[#f3f4f6] px-2 py-[3px] text-[6px] font-extrabold text-[var(--text)] md:gap-2 md:rounded-[10px] md:px-4 md:py-2 md:text-[12px]">
          <BriefcaseIcon className="h-[10px] w-[10px] md:h-[16px] md:w-[16px]" />
          {type}
        </span>
      </div>
      <a
        href="#"
        className="mt-3 inline-flex items-center gap-2 text-[7px] font-extrabold text-[var(--brand)] md:mt-6 md:text-[15px]"
      >
        Apply Now
        <span className="text-[10px] leading-none md:text-[18px]">›</span>
      </a>
    </div>
  );
}

export default function RecentlyAddedJobs() {
  return (
    <section className="w-full overflow-x-hidden bg-white">
      <div className="container mx-auto px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto text-center">
          <h2 className="text-[20px] font-extrabold text-[var(--text)] md:text-[34px]">
            Recently Added Jobs
          </h2>

          <p className="mx-auto mt-3 max-w-[720px] text-[12px] leading-6 text-[var(--muted)] md:text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.Sed quis lacus non orci euismod vestiblium vita at ex.Quiaque ut arcu at letus tristique auctor sit amet at turpis.
          </p>
        </div>
        <div className="mt-12">
          <Swiper
            grabCursor
            className="!overflow-visible"
            breakpoints={{
              0: { slidesPerView: 2.15, spaceBetween: 14 },
              420: { slidesPerView: 2.2, spaceBetween: 14 },
              640: { slidesPerView: 2.5, spaceBetween: 16 },
              1024: { slidesPerView: "auto", spaceBetween: 18 },
              1280: { slidesPerView: "auto", spaceBetween: 18 },
            }}
          >
            {jobs.map((job) => (
              <SwiperSlide
                key={job.title}
                className="!w-[182px] md:!w-[446px]"
              >
                <JobCard {...job} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-12 flex justify-center">
          <a
            href="#"
            className="
              inline-flex items-center justify-center
              h-[40px] w-[120px] rounded-[10px]
              border-2 border-[var(--brand)] bg-transparent
              text-[11px] font-bold text-[var(--brand)]
              transition-all duration-300 hover:bg-[var(--brand)] hover:text-white
            "
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
}