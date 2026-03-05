import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[var(--left)] md:bg-[var(--left)]">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden md:block w-[44%] bg-[var(--brand)] rounded-bl-[50px]" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid min-h-[460px] w-full md:min-h-[580px] md:grid-cols-[56%_44%]">
          <div className="relative">
            <div className="h-full">
              <div className="flex h-full flex-col justify-center pb-10 pt-10 md:pb-24 md:pt-20">
                <div className="w-full max-w-[760px] text-center md:max-w-none md:pr-20 md:text-left">
                  <h1 className="text-2xl font-extrabold text-[var(--text)] sm:text-3xl md:text-[50px]">
                    Search, Find, &amp; Apply
                  </h1>
                  <p className="mt-6 text-[13px] leading-6 text-black sm:text-[15px] sm:leading-7 md:text-xl md:leading-8">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis lacus non
                    orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique auctor
                    sit amet at turpis.
                  </p>

                  <div className="mt-8">
                    <div className="mx-auto rounded-2xl bg-white p-3 shadow-md md:mx-0 md:flex md:h-[84px] md:w-[590px] md:items-center md:gap-4 md:rounded-[20px] md:px-5 md:py-0">
                      <div className="flex w-full flex-nowrap items-center justify-center gap-3 md:justify-start md:gap-4">
                        <div className="flex h-[44px] min-w-0 flex-1 items-center gap-2 rounded-[10px] bg-[#f9f9f9] px-4 md:w-[240px] md:flex-none">
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
                        <div className="flex h-[44px] min-w-[120px] flex-1 items-center gap-2 rounded-[10px] bg-[#f9f9f9] px-4 md:w-[190px] md:flex-none">
                          <Image
                            src="/images/icon-location.png"
                            alt="Location"
                            width={18}
                            height={18}
                            className="shrink-0"
                          />

                          <select
                            className="cursor-pointer appearance-none bg-transparent text-[13px] font-semibold outline-none"
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

                          <span className="text-xs">▾</span>
                        </div>

                        <button className="h-[44px] shrink-0 rounded-[10px] bg-[var(--brand)] px-6 text-[13px] font-bold text-white md:w-[92px] md:px-0">
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

          <div className="relative">
            <div className="relative -mx-6 bg-[var(--brand)] md:mx-0 md:bg-transparent">
              <div className="relative h-[460px] sm:h-[500px] md:h-full">
                <div className="absolute inset-0 md:hidden bg-[var(--brand)] rounded-bl-[90px]" />

                <div className="relative h-full">
                  <div className="absolute left-[38px] top-[40px] md:left-[80px] md:top-[70px] grid h-16 w-16 -rotate-6 place-items-center rounded-2xl bg-white shadow-sm">
                    <Image src="/images/tile-search.png" alt="" width={34} height={34} />
                  </div>

                  <div className="absolute right-[38px] top-[70px] md:right-[90px] md:top-[95px] grid h-16 w-16 rotate-6 place-items-center rounded-2xl bg-white shadow-sm">
                    <Image src="/images/tile-chart.png" alt="" width={34} height={34} />
                  </div>

                  <div className="absolute left-[38px] top-[250px] md:left-[85px] md:top-[320px] grid h-16 w-16 -rotate-3 place-items-center rounded-2xl bg-white shadow-sm">
                    <Image src="/images/tile-shield.png" alt="" width={34} height={34} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
