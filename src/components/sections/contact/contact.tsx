import { useId } from "react";
import ContactCard from "@/components/cards/contact/contact-card";
import ContactForm from "@/components/forms/contact/contact-form";

export default function ContactSection() {
  const id = useId();

  return (
    <section
      aria-labelledby={id}
      className="py-20 md:py-[7rem] xl:py-[7.5rem] relative contact-section-pattern overflow-hidden"
    >
      <div className="inner-container grid grid-cols-1 gap-14 md:gap-16 xl:grid-cols-2 justify-between">
        <div className="relative z-10 w-full max-w-[33.75rem] mx-auto">
          <h1 id={id} className="title-lg text-center xl:text-left">
            Contact
          </h1>
          <div className="mt-4">
            <ContactCard />
          </div>
        </div>
        <div className="relative z-10 w-full max-w-[33.75rem] mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
