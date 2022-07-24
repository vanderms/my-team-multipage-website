import { useId } from "react";

export default function AboutSection() {
  const title = useId();

  return (
    <section aria-labelledby={title} className="relative about-pattern overflow-hidden">
      <div className="inner-container pt-20 pb-[6.75rem] md:py-[7rem] xl:py-[7.5rem]">
        <header className="max-w-[28.75rem] mx-auto xl:max-w-none xl:grid xl:grid-cols-[21.875rem,1fr] gap-[1.875rem]">
          <h1 id={title} className="title-lg text-center xl:text-left">
            About
          </h1>
          <p className="mt-4 text-center text-xl xl:text-left xl:mt-0">
            <span className="xl:block xl:w-[3.125rem] xl:h-1 xl:bg-secondary xl:mb-10"></span>
            We help companies build dynamic teams made up of top global talent. Using our
            network of passionate professionals we drive innovation and deliver incredible
            outcomes. Talented, diverse teams shape the best products and experiences.
            We&apos;ll bring those teams to you.
          </p>
        </header>
      </div>
    </section>
  );
}
