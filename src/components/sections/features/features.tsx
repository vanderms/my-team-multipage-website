import { useId } from "react";
import { FeatureCard } from "@/components/cards/feature/feature-card";
import IconPerson from "@/assets/icon-person.svg";
import IconChart from "@/assets/icon-chart.svg";
import IconCog from "@/assets/icon-cog.svg";

export default function FeaturesSection() {
  const title = useId();
  return (
    <section aria-labelledby={title} className="relative bg-neutral-800">
      <div className="features-pattern-wrapper">
        <div className="features-pattern"></div>
      </div>
      <div className="py-16 relative outer-container md:py-[6.25rem] xl:py-[8.75rem]">
        <div className="inner-container md:px-14 xl:grid xl:grid-cols-[27.8125rem,33.75rem] xl:justify-between xl:px-0">
          <h2 id={title} className="title-md mr-24 xl:mr-0">
            <span className="block bg-secondary w-12 h-1 mb-8"></span>
            Build &amp; manage distributed teams like no one else.
          </h2>
          <ul className="mt-[3.625rem] flex flex-col gap-12 xl:gap-8">
            <li>
              <FeatureCard title="Experienced Individuals" icon={IconPerson}>
                Our network is made up of highly experienced professionals who are
                passionate about what they do.
              </FeatureCard>
            </li>
            <li>
              <FeatureCard title="Easy to Implement" icon={IconCog}>
                Our processes have been refined over years of implementation meaning our
                teams always deliver.
              </FeatureCard>
            </li>
            <li>
              <FeatureCard title="Enhanced Productivity" icon={IconChart}>
                Our customized platform with in-built analytics helps you manage your
                distributed teams.
              </FeatureCard>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
