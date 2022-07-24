import IconPerson from "@/assets/icon-person.svg";
import IconChart from "@/assets/icon-chart.svg";
import IconCog from "@/assets/icon-cog.svg";

export default function ContactCard() {
  return (
    <article>
      <h2 className="text-[2rem] leading-[3rem] text-secondary text-center">
        Ask us about
      </h2>
      <ul
        className={`mt-10 flex flex-col gap-6
        text-[1.125rem] leading-[1.75rem] font-bold 
        [&>li]:flex [&>li]:gap-6 [&>li]:items-center
      
      `}
      >
        <li>
          <img src={IconPerson} alt="" />
          <p>The quality of our talent network</p>
        </li>
        <li>
          <img src={IconChart} alt="" />
          <p>Usage &amp; implementation of our software</p>
        </li>
        <li>
          <img src={IconCog} alt="" />
          <p>How we help drive innovation</p>
        </li>
      </ul>
    </article>
  );
}
