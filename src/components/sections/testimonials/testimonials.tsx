import { useId } from "react";

export default function TestimonialsSection() {
  const title = useId();
  return (
    <section aria-labelledby={title}>
      <h2 id={title}></h2>
    </section>
  );
}
