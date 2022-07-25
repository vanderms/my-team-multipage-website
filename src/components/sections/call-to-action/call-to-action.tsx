import { useId } from "react";
import { ActionLink } from "@/components/buttons/action-link/action-link";

export default function CallToActionSection() {
  const title = useId();
  return (
    <section
      aria-labelledby={title}
      className="relative bg-secondary py-20 call-to-action-pattern md:py-[4.75rem]"
    >
      <div className="inner-container">
        <div
          className={`grid grid-cols-1 justify-items-center gap-6 md:max-w-[35.8125rem] 
          md:mx-auto md:grid-cols-[1fr,9.5625rem] md:justify-items-start md:items-center
          xl:max-w-[57.3125rem]`}
        >
          <h2 id={title} className="title-md text-center text-neutral-800 md:text-left">
            Ready to get started?
          </h2>
          <ActionLink to="/contact" className="border-neutral-800 text-neutral-800 hover:text-neutral-50 hover:bg-neutral-800">
            contact us
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
