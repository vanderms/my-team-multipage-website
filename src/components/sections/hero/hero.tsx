import { useId } from "react";

export default function HeroSection() {
  const title = useId();
  return (
    <section
      aria-labelledby={title}
      className="relative mt-20  md:mt-[7rem] xl:mt-[8.0625rem]"
    >
      <div className="hero-side-pattern-wrapper">
        <div className="hero-side-pattern"></div>
      </div>
      <div className="hero-bottom-pattern"></div>
      <div className="relative outer-container pb-[12.5rem] md:pb-[16rem] xl:pb-[15.625rem]">
        <div
          className={`inner-container relative z-10 grid grid-cols-1 gap-5 md:gap-6 xl:grid-cols-[1fr,27.8125rem]`}
        >
          <h1 id={title} className="title-xl text-center xl:text-left">
            Find the <br /> best <strong className="text-secondary"> talent</strong>
          </h1>
          <p className="body-xl text-center max-w-[28.5625rem] mx-auto xl:text-left">
            <span className="xl:block xl:w-[3.125rem] xl:h-1 xl:bg-primary-300 mb-[4.9375rem]"></span>
            Finding the right people and building high performing teams can be hard. Most
            companies aren&apos;t tapping int o the abundance of global talent. We&apos;re
            about to change that.
          </p>
        </div>
      </div>
    </section>
  );
}
