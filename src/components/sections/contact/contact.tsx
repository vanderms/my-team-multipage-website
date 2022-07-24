import { useId } from "react";
import ContactCard from "@/components/cards/contact/contact-card";

export default function ContactSection() {
  const id = useId();

  return (
    <section aria-labelledby={id}>
      <div className="inner-container pt-20">
        <h1 id={id} className='title-lg text-center'>Contact</h1>
        <div className="mt-4">
          <ContactCard />
        </div>
      </div>
    </section>
  );
}
