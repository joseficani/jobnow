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
      <div className="container mx-auto px-8 py-16 md:px-12 md:py-24">
        <div className="lg:-ml-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="max-w-[640px] md:max-w-[720px]">
              <h2 className="text-[20px] font-extrabold leading-[1.1] text-[var(--text)] md:text-[46px] md:leading-[1.05]">
                How it works
              </h2>

              <p className="mt-4 text-[12px] leading-5 text-[#9ca3af] md:mt-5 md:text-[16px] md:leading-7 md:text-[#6b7280]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis
                lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at
                lectus tristique auctor sit amet at turpis.
              </p>
            </div>

            <div className="hidden md:block md:pt-[68px]">
              <a
                href="#"
                className="inline-flex h-[61px] w-[188px] items-center justify-center rounded-[9px] border-2 border-[#00cc99] bg-transparent text-[14px] font-bold text-[#00cc99] transition-all duration-300 hover:bg-[#00cc99] hover:text-white hover:shadow-md"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 md:mt-14 md:grid-cols-4 md:gap-8">
            {steps.map((s) => (
              <div
                key={s.title}
                className="w-full rounded-[20px] bg-white px-5 py-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.10)] md:px-7 md:py-7"
              >
                <div className="h-[43px] w-[43px]">
                  <Image src={s.icon} alt="" width={43} height={43} />
                </div>

                <h3 className="mt-4 text-[12.5px] font-extrabold leading-4 text-[var(--text)] md:mt-5 md:text-base md:leading-5">
                  {s.title}
                </h3>

                <p className="mt-3 text-[9px] leading-[13px] text-[#b6bcc6] md:text-xs md:leading-5 md:text-[var(--muted)]">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center md:hidden">
            <a
              href="#"
              className="inline-flex h-[61px] w-[188px] items-center justify-center rounded-[9px] border-2 border-[#00cc99] bg-transparent text-[14px] font-bold text-[#00cc99] transition-all duration-300 hover:bg-[#00cc99] hover:text-white hover:shadow-md"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}