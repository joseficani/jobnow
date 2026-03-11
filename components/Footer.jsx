"use client";

import Image from "next/image";

export default function FooterWithCta() {
  return (
    <section className="w-full bg-[var(--brand)] mt-40 md:mt-48 lg:mt-40 xl:mt-56">
      <div className="container mx-auto px-6 md:px-12">
        <div className="relative -top-[90px] md:-top-[130px] lg:-top-[110px] xl:-top-[160px]">
          <div
            className="
              mx-auto
              w-full
              max-w-[1240px]
              rounded-[20px]
              bg-[#003a2c]
              px-6 py-10
              md:px-12 md:py-16
              flex flex-col items-center justify-center text-center
            "
          >
            <h3 className="text-[20px] font-extrabold text-white md:text-[34px]">
              Register your CV now!
            </h3>

            <p className="mt-3 max-w-[560px] text-[11px] leading-5 text-white/75 md:text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis
              lacus non orci euismod vestibulum vitae ut ex.
            </p>

            <a
              href="#"
              className="mt-6 inline-flex h-[42px] items-center justify-center px-8 rounded-[8px] border border-white text-white text-[12px] font-bold"
            >
              Register Now
            </a>
          </div>
        </div>
        <div className="pb-14 md:pb-20">
          <div className="hidden md:grid md:grid-cols-12 md:items-start">
            <div className="col-span-4 pt-6">
              <div className="flex items-center leading-none">

                <span className="text-[34px] md:text-[34px] lg:text-[44px] font-extrabold text-black">
                  Job
                </span>

                <span className="ml-3 text-[34px] md:text-[34px] lg:text-[44px] font-extrabold text-white">
                  N
                </span>

                <Image
                  src="/images/icon-search.png"
                  alt="Search"
                  width={32}
                  height={32}
                  className="h-[24px] w-[24px] md:h-[24px] md:w-[24px] lg:h-[32px] lg:w-[32px] object-contain brightness-0 invert"
                  priority
                />

                <span className="text-[34px] md:text-[34px] lg:text-[44px] font-extrabold text-white">
                  w
                </span>

              </div>

              <p className="mt-2 max-w-[220px] md:max-w-[220px] lg:max-w-[250px] text-[10px] md:text-[10px] lg:text-[12px] leading-4 md:leading-4 lg:leading-5 text-white/85">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                consequat facilisis nibh vel faucibus.
              </p>

            </div>
            <div className="col-span-3">
              <h3 className="text-[18px] font-extrabold text-white">
                Company
              </h3>

              <div className="mt-3 text-[14px] leading-5 text-white/85 space-y-1">
                <p>Address : 123 Fifth Avenue, New York - 1060, USA</p>
                <p>Call Us : + (100) 456 7890</p>
                <p>Email : youid@example.com</p>
                <p>Mon Sat : 9:00 AM - 19:00 PM</p>
              </div>

            </div>

            <div className="col-span-1" />
            <div className="col-span-2">
              <h3 className="text-[18px] font-extrabold text-white">
                Pages
              </h3>

              <ul className="mt-3 space-y-1 text-[14px] text-white/85">
                <li><a href="#" className="flex items-center gap-2"><span>›</span> Home</a></li>
                <li><a href="#" className="flex items-center gap-2"><span>›</span> Booking</a></li>
                <li><a href="#" className="flex items-center gap-2"><span>›</span> Facilities</a></li>
                <li><a href="#" className="flex items-center gap-2"><span>›</span> About Us</a></li>
                <li><a href="#" className="flex items-center gap-2"><span>›</span> Location</a></li>
                <li><a href="#" className="flex items-center gap-2"><span>›</span> Contact</a></li>
              </ul>

            </div>
            <div className="col-span-2">

              <h3 className="text-[18px] font-extrabold text-white">
                Contact Us
              </h3>

              <div className="mt-4 flex items-center gap-4">

                <a href="https://www.google.com" target="_blank">
                  <Image src="/images/social-google.png" alt="Google" width={20} height={20}/>
                </a>

                <a href="https://www.facebook.com" target="_blank">
                  <Image src="/images/social-facebook.png" alt="Facebook" width={20} height={20}/>
                </a>

                <a href="https://twitter.com" target="_blank">
                  <Image src="/images/social-twitter.png" alt="Twitter" width={20} height={20}/>
                </a>

                <a href="https://www.linkedin.com" target="_blank">
                  <Image src="/images/social-linkedin.png" alt="LinkedIn" width={20} height={20}/>
                </a>

              </div>

            </div>

          </div>
          <div className="md:hidden">
            <div className="pt-4">
              <div className="flex items-center leading-none">

                <span className="text-[40px] font-extrabold text-black">
                  Job
                </span>

                <span className="ml-3 text-[40px] font-extrabold text-white">
                  N
                </span>

                <Image
                  src="/images/icon-search.png"
                  alt="Search"
                  width={28}
                  height={28}
                  className="brightness-0 invert"
                />

                <span className="text-[40px] font-extrabold text-white">
                  w
                </span>

              </div>

              <p className="mt-4 max-w-[260px] text-[11px] leading-5 text-white/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                consequat facilisis nibh vel faucibus.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-[18px] font-extrabold text-white">
                  Company
                </h3>

                <div className="mt-3 text-[12px] leading-5 text-white/80 space-y-1">
                  <p>Address : 123 Fifth Avenue</p>
                  <p>Call Us : + (100) 456 7890</p>
                  <p>Email : youid@example.com</p>
                </div>
              </div>
              <div>
                <h3 className="text-[18px] font-extrabold text-white">
                  Pages
                </h3>

                <ul className="mt-3 text-[12px] text-white/80 space-y-1">
                  <li>› Home</li>
                  <li>› Booking</li>
                  <li>› Facilities</li>
                  <li>› About</li>
                  <li>› Contact</li>
                </ul>
              </div>

            </div>
            <div className="mt-8 flex gap-4">

              <Image src="/images/social-google.png" alt="" width={20} height={20}/>
              <Image src="/images/social-facebook.png" alt="" width={20} height={20}/>
              <Image src="/images/social-twitter.png" alt="" width={20} height={20}/>
              <Image src="/images/social-linkedin.png" alt="" width={20} height={20}/>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}