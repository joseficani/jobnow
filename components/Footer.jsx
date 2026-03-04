"use client";

import Image from "next/image";

export default function FooterWithCta() {
  return (
    <section className="w-full bg-[var(--brand)] mt-16 md:mt-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="relative -top-[64px] md:-top-[90px]">
          <div
            className="
              mx-auto w-full
              rounded-[20px] bg-[#003a2c]
              px-6 py-10
              md:h-[322px] md:w-[1240px] md:px-12 md:py-0
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

            <button className="mt-6 h-[42px] px-8 rounded-[8px] border border-white text-white text-[12px] font-bold">
              Register Now
            </button>
          </div>
        </div>
        <div className="pb-14 md:pb-20">
          <div className="hidden md:grid md:grid-cols-12 md:items-start">
            <div className="col-span-4 pt-6">
              <div className="flex items-center leading-none">

                <span className="text-[44px] font-extrabold text-black">
                  Job
                </span>

                <span className="ml-3 text-[44px] font-extrabold text-white">
                  N
                </span>

                <Image
                  src="/images/icon-search.png"
                  alt="Search"
                  width={32}
                  height={32}
                  className="h-[32px] w-[32px] object-contain brightness-0 invert"
                  priority
                />

                <span className="text-[44px] font-extrabold text-white">
                  w
                </span>

              </div>

              <p className="mt-4 max-w-[280px] text-[12px] leading-6 text-white/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                consequat facilisis nibh vel faucibus.
              </p>

            </div>
            <div className="col-span-3">
              <h3 className="text-[16px] font-extrabold text-white">Company</h3>
              <div className="mt-4 text-[12px] leading-5 text-white/80 md:space-y-2">
                <p>Address : 123 Fifth Avenue, New York</p>
                <p>- 1060, USA</p>
                <p>Call Us : + (100) 456 7890</p>
                <p>Email : youid@example.com</p>
                <p>Mon Sat : 9:00 AM - 19:00 PM</p>
              </div>
            </div>
            <div className="col-span-1" />
            <div className="col-span-2">
              <h3 className="text-[16px] font-extrabold text-white">Pages</h3>

              <ul className="mt-4 space-y-2 text-[12px] text-white/80">
                <li className="flex items-center gap-2"><span>›</span> Home</li>
                <li className="flex items-center gap-2"><span>›</span> Booking</li>
                <li className="flex items-center gap-2"><span>›</span> Facilities</li>
                <li className="flex items-center gap-2"><span>›</span> About Us</li>
                <li className="flex items-center gap-2"><span>›</span> Location</li>
                <li className="flex items-center gap-2"><span>›</span> Contact</li>
              </ul>
            </div>
            <div className="col-span-2">
              <h3 className="text-[16px] font-extrabold text-white">Contact Us</h3>

              <div className="mt-4 flex items-center gap-4">
                <Image src="/images/social-google.png" alt="Google" width={20} height={20}/>
                <Image src="/images/social-facebook.png" alt="Facebook" width={20} height={20}/>
                <Image src="/images/social-twitter.png" alt="Twitter" width={20} height={20}/>
                <Image src="/images/social-linkedin.png" alt="LinkedIn" width={20} height={20}/>
              </div>
            </div>

          </div>
          <div className="md:hidden">
            <div className="pt-2">
              <div className="flex items-center leading-none">

                <span className="text-[44px] font-extrabold text-black">
                  Job
                </span>

                <span className="ml-3 text-[44px] font-extrabold text-white">
                  N
                </span>

                <Image
                  src="/images/icon-search.png"
                  alt="Search"
                  width={32}
                  height={32}
                  className="h-[32px] w-[32px] object-contain brightness-0 invert"
                  priority
                />

                <span className="text-[44px] font-extrabold text-white">
                  w
                </span>

              </div>

              <p className="mt-4 max-w-[260px] text-[12px] leading-6 text-white/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                consequat facilisis nibh vel faucibus.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-x-10">
              <div>
                <h3 className="text-[16px] font-extrabold text-white">Company</h3>
                <div className="mt-4 text-[12px] leading-5 text-white/80">
                  <p>Address : 123 Fifth Avenue, New York - 1060, USA</p>
                  <p>Call Us : + (100) 456 7890</p>
                  <p>Email : youid@example.com</p>
                  <p>Mon Sat : 9:00 AM - 19:00 PM</p>
                </div>
              </div>
              <div>
                <h3 className="text-[16px] font-extrabold text-white">Pages</h3>

                <ul className="mt-4 space-y-2 text-[12px] text-white/80">
                  <li className="flex items-center gap-2"><span>›</span> Home</li>
                  <li className="flex items-center gap-2"><span>›</span> Booking</li>
                  <li className="flex items-center gap-2"><span>›</span> Facilities</li>
                  <li className="flex items-center gap-2"><span>›</span> About Us</li>
                  <li className="flex items-center gap-2"><span>›</span> Location</li>
                  <li className="flex items-center gap-2"><span>›</span> Contact</li>
                </ul>
              </div>

            </div>
            <div className="mt-10">
              <h3 className="text-[16px] font-extrabold text-white">Contact Us</h3>

              <div className="mt-4 flex items-center gap-4">
                <Image src="/images/social-google.png" alt="Google" width={20} height={20}/>
                <Image src="/images/social-facebook.png" alt="Facebook" width={20} height={20}/>
                <Image src="/images/social-twitter.png" alt="Twitter" width={20} height={20}/>
                <Image src="/images/social-linkedin.png" alt="LinkedIn" width={20} height={20}/>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}