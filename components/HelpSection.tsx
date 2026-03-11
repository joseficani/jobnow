export default function HelpDreamCompany() {
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto px-12 pb-16 pt-10 md:pb-24 md:pt-14">
        <div className="grid items-center gap-14 md:grid-cols-[420px_1fr] md:gap-16 lg:grid-cols-[504px_1fr] lg:gap-20">
          <div className="flex justify-center md:justify-start">
            <div className="h-[210px] w-[285px] rounded-[11px] bg-[#c4c4c4] md:h-[300px] md:w-[420px] md:rounded-[20px] lg:h-[371px] lg:w-[504px]" />
          </div>
          <div className="self-center text-center md:text-left">
            <div className="px-6 md:px-0">
              <h3
                className="
                  text-[20px] font-semibold leading-[1.25] text-[var(--text)]
                  md:text-[12px] md:leading-[22px]
                  lg:text-[20px] lg:leading-[30px]
                  xl:text-[34px] xl:leading-[42px]
                "
              >
                We will help you to become an employee in your dream company
              </h3>
              <p
                className="
                  mt-3 text-[11px] leading-[1.6] text-[#9ca3af]
                  md:mt-4 md:max-w-[460px] md:text-[11px] md:leading-6 md:text-[#6b7280]
                  lg:mt-5 lg:max-w-[640px] lg:text-[17px] lg:leading-7
                  xl:text-[19px] xl:leading-8
                "
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis
                lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at
                lectus tristique auctor sit amet at turpis.
              </p>
            </div>
            <div className="mt-4 flex justify-center md:mt-6 md:justify-start">
              <a
                href="#"
                className="
                  inline-flex items-center justify-center
                  h-[32px] w-[110px] rounded-[6px]
                  border-[1px] border-[#00cc99]
                  bg-transparent text-[10px] font-bold text-[#00cc99]
                  transition-all duration-300 hover:bg-[#00cc99] hover:text-white hover:shadow-md
                  md:h-[46px] md:w-[140px] md:rounded-[9px] md:border-2 md:text-[12px]
                  lg:h-[56px] lg:w-[170px]
                  xl:h-[61px] xl:w-[188px] xl:text-[14px]
                "
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}