import Image from "next/image";

const CARD_W = 285;
const GAP = 24;
const PEEK = 0.3;
const extraPeekPx = GAP + Math.round(CARD_W * PEEK);

const categories = [
  {
    title: "Design and\nDevelopment",
    jobs: "350 Job Vacancy",
    icon: "/images/cat-design.png",
    active: true,
  },
  {
    title: "Accounting and\nFinance",
    jobs: "350 Job Vacancy",
    icon: "/images/cat-accounting.png",
  },
  {
    title: "Bank\nInstitution",
    jobs: "350 Job Vacancy",
    icon: "/images/cat-bank.png",
  },
  {
    title: "Product\nManagement",
    jobs: "350 Job Vacancy",
    icon: "/images/cat-product.png",
  },
  {
    title: "Customer\nSupport",
    jobs: "350 Job Vacancy",
    icon: "/images/cat-support.png",
  },
];

function CategoryCard({
  title,
  jobs,
  icon,
  active,
}: {
  title: string;
  jobs: string;
  icon: string;
  active?: boolean;
}) {
  return (
    <div
      className={[
        "w-[285px] h-[248px] shrink-0 rounded-[20px] p-7",
        "shadow-[0_12px_30px_rgba(0,0,0,0.06)]",
        "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.10)]",
        active ? "bg-[var(--brand)]" : "bg-white",
      ].join(" ")}
    >
      <div className="h-[49px] w-[49px]">
        <Image
          src={icon}
          alt=""
          width={49}
          height={49}
          className={active ? "brightness-[10]" : ""}
        />
      </div>

      <h3
        className={[
          "mt-7 whitespace-pre-line text-[16px] font-extrabold leading-[1.25]",
          active ? "text-white" : "text-[var(--text)]",
        ].join(" ")}
      >
        {title}
      </h3>

      <p className={["mt-10 text-[10px] font-medium", active ? "text-white/80" : "text-[#9aa3ad]"].join(" ")}>
        {jobs}
      </p>
    </div>
  );
}

export default function PopularJobCategories() {
  return (
    <section className="w-full overflow-x-hidden bg-[#eaf8f3]">
      <div className="container mx-auto px-6 py-14 md:px-12 md:py-20">
        <div className="mx-auto text-center">
          <h2 className="text-[14px] font-extrabold leading-[1.2] text-[var(--text)] md:text-[44px] md:leading-[1.1]">
            Popular Job Categories
          </h2>

          <p className="mx-auto mt-3 max-w-[280px] text-[8.5px] leading-[1.55] text-[#97a1ab] md:mt-4 md:max-w-[760px] md:text-[14px] md:leading-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis lacus non orci euismod
            vestibulum vitae ut ex. Quisque ut arcu at lectus tristique auctor sit amet at turpis.
          </p>
        </div>

        <div className="mt-10 md:mt-14">
          <div className="grid grid-cols-3 gap-4 md:hidden">
            {categories.slice(0, 3).map((c) => (
              <div
                key={c.title}
                className={[
                  "rounded-[14px] p-4 shadow-[0_10px_26px_rgba(0,0,0,0.06)]",
                  c.active ? "bg-[var(--brand)]" : "bg-white",
                ].join(" ")}
              >
                <div className="h-[28px] w-[28px]">
                  <Image
                    src={c.icon}
                    alt=""
                    width={28}
                    height={28}
                    className={c.active ? "brightness-[10]" : ""}
                  />
                </div>

                <h3
                  className={[
                    "mt-3 whitespace-pre-line text-[9.5px] font-extrabold leading-[1.25]",
                    c.active ? "text-white" : "text-[var(--text)]",
                  ].join(" ")}
                >
                  {c.title}
                </h3>

                <p className={["mt-3 text-[7px] font-medium", c.active ? "text-white/80" : "text-[#9aa3ad]"].join(" ")}>
                  {c.jobs}
                </p>
              </div>
            ))}
          </div>
          <div className="hidden md:block">
            <div className="overflow-hidden" style={{ width: `calc(100% + ${extraPeekPx}px)` }}>
              <div className="flex gap-6">
                {categories.map((c) => (
                  <CategoryCard
                    key={c.title}
                    title={c.title}
                    jobs={c.jobs}
                    icon={c.icon}
                    active={c.active}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center md:mt-12">
          <a
            href="#"
            className="
              inline-flex items-center justify-center
              h-[32px] w-[105px] rounded-[8px]
              border-2 border-[#00cc99] bg-transparent
              text-[10px] font-bold text-[#00cc99]
              transition-all duration-300 hover:bg-[#00cc99] hover:text-white hover:shadow-md
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