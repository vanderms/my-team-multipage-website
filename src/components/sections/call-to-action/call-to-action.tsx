import { useId } from "react";

export default function CallToActionSection() {
  const title = useId();
  return (
    <section aria-labelledby={title}>
      <h2 id={title}></h2>
    </section>
  );
}
