import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full overflow-hidden ">
      <div className="container mx-auto px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="grid min-h-[460px] w-full md:min-h-[580px] md:grid-cols-[56%_44%]">
          <div className="bg-[var(--left)]">
            <div className="relative h-full">
              <div className="flex h-full flex-col justify-center pb-10 pt-10 md:pb-24 md:pt-20">
                <div className="w-full max-w-[760px] text-center md:max-w-none md:pr-20 md:text-left">
                  <h1 className="text-2xl font-extrabold text-[var(--text)] sm:text-3xl md:text-[25px] lg:text-[40px] xl:text-[50px]">
                    Search, Find, &amp; Apply
                  </h1>

                  <p className="mt-6 text-[13px] leading-6 text-black sm:text-[15px] sm:leading-7 md:text-[12px] md:leading-5 lg:text-[18px] lg:leading-8 xl:text-xl xl:leading-8">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis lacus non
                    orci euismod vestibulum vitae ut ex. Quisque ut arcu at lectus tristique auctor
                    sit amet at turpis.
                  </p>

                  <div className="mt-8">
                    <div
                      className="
                        mx-auto rounded-2xl bg-white p-3 shadow-md
                        md:mx-0 md:flex md:items-center md:rounded-[20px] md:py-0
                        md:h-[64px] lg:h-[80px] xl:h-[84px]
                        md:w-[330px]
                        lg:w-[480px]
                        xl:w-[560px]
                        md:gap-2 lg:gap-4
                        md:px-3 lg:px-5
                      "
                    >
                      <div className="flex w-full flex-nowrap items-center justify-center gap-3 md:justify-start md:gap-2 lg:gap-4">
                        <div
                          className="
                            flex h-[40px] min-w-0 flex-1 items-center gap-2 rounded-[10px] bg-[#f9f9f9] px-3
                            md:flex-none md:w-[138px]
                            lg:w-[200px]
                            xl:w-[240px]
                          "
                        >
                          <Image
                            src="/images/icon-search.png"
                            alt="Search"
                            width={16}
                            height={16}
                            className="shrink-0 md:h-[14px] md:w-[14px] lg:h-[18px] lg:w-[18px]"
                          />
                          <input
                            className="w-full bg-transparent text-[12px] font-medium outline-none placeholder:text-[#7a7a7a] md:text-[10px] lg:text-[13px]"
                            placeholder="Job title or Keyword"
                          />
                        </div>

                        <div
                          className="
                            flex h-[40px] min-w-[110px] flex-1 items-center gap-2 rounded-[10px] bg-[#f9f9f9] px-3
                            md:flex-none md:w-[100px]
                            lg:w-[160px]
                            xl:w-[190px]
                          "
                        >
                          <Image
                            src="/images/icon-location.png"
                            alt="Location"
                            width={16}
                            height={16}
                            className="shrink-0 md:h-[14px] md:w-[14px] lg:h-[18px] lg:w-[18px]"
                          />

                          <select
                            className="cursor-pointer appearance-none bg-transparent text-[12px] font-semibold outline-none md:text-[10px] lg:text-[13px]"
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

                          <span className="text-[10px] md:text-[9px] lg:text-xs">▾</span>
                        </div>

                        <button
                          className="
                            h-[36px] shrink-0 rounded-[10px] bg-[var(--brand)] px-3 text-[11px] font-bold text-white
                            md:w-[42px] md:px-0 md:text-[9px]
                            lg:w-[60px] lg:text-[12px]
                            xl:w-[70px]
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
          <div className="bg-[var(--brand)] md:rounded-bl-[50px]">
            <div className="relative h-[460px] overflow-hidden rounded-bl-[90px] sm:h-[500px] md:h-full md:min-h-[580px] ">
              <div className="absolute left-[28%] top-[18%] grid h-14 w-14 -rotate-6 place-items-center rounded-2xl bg-white shadow-sm md:h-16 md:w-16">
                <Image src="/images/tile-search.png" alt="" width={34} height={34} />
              </div>

              <div className="absolute right-[24%] top-[26%] grid h-14 w-14 rotate-6 place-items-center rounded-2xl bg-white shadow-sm md:h-16 md:w-16">
                <Image src="/images/tile-chart.png" alt="" width={34} height={34} />
              </div>

              <div className="absolute left-[30%] top-[60%] grid h-14 w-14 -rotate-3 place-items-center rounded-2xl bg-white shadow-sm md:h-16 md:w-16">
                <Image src="/images/tile-shield.png" alt="" width={34} height={34} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

