
import Image from "next/image";

export default function Hero() {
  return (
     <section className="w-full bg-[var(--left)]">
      <div className="grid w-full md:grid-cols-2">
        <div className="bg-[var(--left)]">
          <div
            className="
              px-6
              pt-10 pb-10
              md:px-24 md:pt-32 md:pb-32
              text-center md:text-left
              flex flex-col justify-center
              min-h-[520px] md:min-h-[650px]
            "
          >
            <h1 className="text-2xl sm:text-3xl md:text-[50px] font-extrabold text-[var(--text)]">
              Search, Find, &amp; Apply
            </h1>

            <p className="mt-4 text-sm leading-6 text-[var(--muted)] max-w-[520px] mx-auto md:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis
              lacus non orci euismod vestibulum vitae ut ex. Quisque ut arcu at
              lectus tristique auctor sit amet at turpis.
            </p>
            <div className="mt-8 max-w-[620px] mx-auto md:mx-0 rounded-2xl bg-white shadow-md p-3 md:p-4">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:flex-nowrap md:gap-4">
                <div className="flex flex-1 min-w-[170px] items-center gap-2 rounded-xl bg-[#e5e7eb] px-3 py-2.5 md:px-4 md:py-3">
                  <Image
                    src="/images/icon-search.png"
                    alt="Search"
                    width={18}
                    height={18}
                    className="shrink-0"
                  />
                  <input
                    className="w-full bg-transparent text-sm font-medium outline-none"
                    placeholder="Job title or Keyword"
                  />
                </div>
                <div className="flex w-[150px] md:w-[180px] items-center justify-between rounded-xl bg-[#e5e7eb] px-3 py-2.5 md:px-4 md:py-3 text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/icon-location.png"
                      alt="Location"
                      width={18}
                      height={18}
                      className="shrink-0"
                    />
                    <span>Location</span>
                  </div>
                  <span className="text-xs">▾</span>
                </div>
                <button className="rounded-xl bg-[var(--brand)] px-5 py-2.5 md:px-6 md:py-3 text-sm font-bold text-white">
                  Search
                </button>
              </div>
            </div>
            <div className="h-10 md:hidden" />
          </div>
        </div>
        <div className="relative bg-[var(--brand)] md:rounded-bl-[60px]">
          <div className="relative px-6 py-14 md:px-24 md:py-20">
            <div className="relative h-[360px] sm:h-[390px] md:h-[520px]">
              <div className="absolute left-[52px] top-[95px] md:left-[80px] md:top-[120px] grid h-16 w-16 -rotate-6 place-items-center rounded-2xl bg-white shadow-sm">
                <Image
                  src="/images/tile-search.png"
                  alt="Tile Search"
                  width={34}
                  height={34}
                />
              </div>
              <div className="absolute right-[60px] top-[160px] md:right-[90px] md:top-[200px] grid h-16 w-16 rotate-6 place-items-center rounded-2xl bg-white shadow-sm">
                <Image
                  src="/images/tile-chart.png"
                  alt="Tile Chart"
                  width={34}
                  height={34}
                />
              </div>
              <div className="absolute left-[58px] top-[235px] md:left-[85px] md:top-[330px] grid h-16 w-16 -rotate-3 place-items-center rounded-2xl bg-white shadow-sm">
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
    </section>
  );
}
