import Image from "next/image";

const steps = [
  {
    title: "Register",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis lacus non orci.",
    icon: "/images/how-register.png",
  },
  {
    title: "Create a Resume",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis lacus non orci.",
    icon: "/images/how-resume.png",
  },
  {
    title: "Find Job",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis lacus non orci.",
    icon: "/images/how-find.png",
  },
  {
    title: "Apply Job",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis lacus non orci.",
    icon: "/images/how-apply.png",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto px-8 py-14 md:px-12 md:py-20">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <div>
            <h2 className="text-[20px] font-extrabold leading-[1.1] text-[var(--text)] md:text-[46px] md:leading-[1.05]">
              How it works
            </h2>

            <p className="mt-3 max-w-[560px] text-[12px] leading-5 text-[#9ca3af] md:mt-4 md:max-w-[640px] md:text-[16px] md:leading-7">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis
              lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at
              lectus tristique auctor sit amet at turpis.
            </p>
          </div>

          <div className="hidden md:block md:pt-[68px]">
            <a
              href="#"
              className="inline-flex h-[61px] w-[188px] items-center justify-center rounded-[9px] border-2 border-[#00cc99] bg-transparent text-[14px] font-bold text-[#00cc99]"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 justify-items-center gap-5 md:mt-12 md:grid-cols-4 md:justify-items-stretch md:gap-6">
          {steps.map((s) => (
            <div
              key={s.title}
              className="w-full max-w-[175px] rounded-2xl bg-white px-5 py-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] md:max-w-none md:px-7 md:py-7"
            >
              <div className="h-9 w-9">
                <Image src={s.icon} alt="" width={36} height={36} />
              </div>
              <h3 className="mt-3 text-[12.5px] font-extrabold leading-4 text-[var(--text)] md:mt-4 md:text-base md:leading-5">
                {s.title}
              </h3>
              <p className="mt-2 max-w-[135px] text-[9px] leading-[13px] text-[#b6bcc6] md:max-w-none md:text-xs md:leading-5 md:text-[var(--muted)]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center md:hidden">
          <a
            href="#"
            className="inline-flex h-[61px] w-[188px] items-center justify-center rounded-[9px] border-2 border-[#00cc99] bg-transparent text-[14px] font-bold text-[#00cc99]"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}