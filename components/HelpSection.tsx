export default function HelpDreamCompany() {
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto px-8 pb-16 pt-10 md:px-12 md:pb-24 md:pt-14">
        <div className="lg:-ml-10">
          <div className="grid items-center gap-10 md:grid-cols-[504px_1fr] md:gap-12">
            <div className="flex justify-center md:justify-start">
              <div className="h-[210px] w-[285px] rounded-[11px] bg-[#c4c4c4] md:h-[371px] md:w-[504px] md:rounded-[20px]" />
            </div>
            <div className="text-center md:text-left">
              <h3
                className="
                  mx-auto max-w-[246px]
                  text-[14px] font-extrabold leading-[1.25] text-[var(--text)]
                  md:mx-0 md:max-w-none md:text-[38px] md:leading-[1.15]
                "
              >
                We will help you to become an employee in your dream company
              </h3>

              <p
                className="
                  mx-auto mt-3 max-w-[248px]
                  text-[8.5px] leading-[1.45] text-[#9ca3af]
                  md:mx-0 md:mt-5 md:max-w-[640px] md:text-[16px] md:leading-7 md:text-[#6b7280]
                "
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis
                lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at
                lectus tristique auctor sit amet at turpis.
              </p>

              <div className="mt-4 flex justify-center md:mt-7 md:justify-start">
                <a
                  href="#"
                  className="
                    inline-flex items-center justify-center
                    h-[24px] w-[74px] rounded-[4px]
                    border-[0.8px] border-[#00cc99]
                    bg-transparent text-[8px] font-bold text-[#00cc99]
                    transition-all duration-300 hover:bg-[#00cc99] hover:text-white hover:shadow-md
                    md:h-[61px] md:w-[188px] md:rounded-[9px] md:border-2 md:text-[14px]
                  "
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}