import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[var(--left)]">
      <div className="grid md:grid-cols-2 min-h-[420px] md:min-h-[520px]">
        <div className="bg-[var(--left)]">
          <div className="container px-6 md:px-12 h-full">
            <div className="pt-10 pb-10 md:pt-20 md:pb-24 flex flex-col justify-center h-full">
              <div className="w-full max-w-[760px] text-center md:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-[50px] font-extrabold text-[var(--text)]">
                  Search, Find, &amp; Apply
                </h1>
                <p className="mt-6 text-lg md:text-xl leading-8 text-black">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                  quis lacus non orci euismod vestibulum vitae ut ex. Quisque ut
                  arcu at lectus tristique auctor sit amet at turpis.
                </p>

                <div className="mt-8">
                  <div
                    className="
                      rounded-2xl bg-white shadow-md
                      p-3 md:p-0
                      md:w-[651px] md:h-[84px] md:rounded-[20px]
                      md:flex md:items-center md:gap-4 md:px-5
                      mx-auto md:mx-0
                    "
                  >
                    <div className="flex items-center justify-center md:justify-start gap-3 md:gap-4 flex-nowrap w-full">
                      <div className="flex items-center gap-2 h-[44px] rounded-[10px] bg-[#f9f9f9] px-4 flex-1 min-w-0 md:w-[258px] md:flex-none">
                        <Image
                          src="/images/icon-search.png"
                          alt="Search"
                          width={18}
                          height={18}
                          className="shrink-0"
                        />
                        <input
                          className="w-full bg-transparent text-[13px] font-medium outline-none placeholder:text-[#7a7a7a]"
                          placeholder="Job title or Keyword"
                        />
                      </div>

                      <div className="relative h-[44px] rounded-[10px] bg-[#f9f9f9] flex-1 min-w-[120px] md:w-[210px] md:flex-none">
                        <Image
                          src="/images/icon-location.png"
                          alt="Location"
                          width={18}
                          height={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2"
                        />

                        <select
                          className="
                            w-full h-full appearance-none rounded-[10px]
                            bg-[#f9f9f9] pl-11 pr-10
                            text-[13px] font-semibold outline-none cursor-pointer
                          "
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Location
                          </option>
                          <option value="beirut">Beirut</option>
                          <option value="zahle">Zahle</option>
                          <option value="tripoli">Tripoli</option>
                          <option value="saida">Saida</option>
                        </select>

                        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs">
                          ▾
                        </span>
                      </div>

                      <button
                        className="
                          h-[44px] rounded-[10px]
                          bg-[var(--brand)]
                          text-[13px] font-bold text-white
                          px-6 shrink-0 md:w-[103px] md:px-0
                        "
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>

                <div className="h-8 md:hidden" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-[var(--brand)] md:rounded-bl-[60px]">
          <div className="container px-6 md:px-12 h-full">
            <div className="relative h-[420px] sm:h-[460px] md:h-full pt-4 pb-10 md:pt-8 md:pb-20">
              <div className="relative h-full">

                <div className="absolute left-[38px] top-[40px] md:left-[80px] md:top-[60px] grid h-16 w-16 -rotate-6 place-items-center rounded-2xl bg-white shadow-sm">
                    <Image
                        src="/images/tile-search.png"
                        alt="Tile Search"
                        width={34}
                        height={34}
                    />
                    </div>
                <div className="absolute right-[38px] top-[70px] md:right-[90px] md:top-[90px] grid h-16 w-16 rotate-6 place-items-center rounded-2xl bg-white shadow-sm">
                  <Image
                    src="/images/tile-chart.png"
                    alt="Tile Chart"
                    width={34}
                    height={34}
                  />
                </div>

               
                <div className="absolute left-[38px] top-[220px] md:left-[85px] md:top-[230px] grid h-16 w-16 -rotate-3 place-items-center rounded-2xl bg-white shadow-sm">
                    <Image
                        src="/images/tile-shield.png"
                        alt="Tile Shield"
                        width={34}
                        height={34}
                    />
                    </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
