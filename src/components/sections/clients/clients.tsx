import { useId } from "react";
import TheVerge from "@/assets/logo-the-verge.png";
import JakartaPost from "@/assets/logo-jakarta-post.png";
import TheGuardian from "@/assets/logo-the-guardian.png";
import TechRadar from "@/assets/logo-tech-radar.png";
import GadgetsNow from "@/assets/logo-gadgets-now.png";

export default function ClientsSection() {
  const id = useId();
  return (
    <section
      aria-labelledby={id}
      className="bg-neutral-800 py-[5.5rem] md:py-[6.25rem] xl:py-[8.75rem] relative clients-section-pattern overflow-hidden"
    >
      <div className="inner-container ">
        <h2 className="title-md text-center">Some of our clients</h2>

        <ul
          className={`mt-16 flex flex-col items-center gap-14 [&>li]:max-w-[10.125rem] 
            md:flex-row md:[&>li]:max-w-[6.25rem] md:gap-0 md:justify-between md:mt-12
            xl:[&>li]:max-w-[11.25rem] xl:mt-16
          `}
        >
          <li>
            <img src={TheVerge} alt="The Verge" />
          </li>
          <li>
            <img src={JakartaPost} alt="Jakarta Post" />
          </li>
          <li>
            <img src={TheGuardian} alt="The Guardian" />
          </li>
          <li>
            <img src={TechRadar} alt="Tech Radar" />
          </li>
          <li className="w-[5.625rem] md:w-[3.75rem] xl:w-[6.25rem]">
            <img src={GadgetsNow} alt="Gadgets Now" />
          </li>
        </ul>
      </div>
    </section>
  );
}
