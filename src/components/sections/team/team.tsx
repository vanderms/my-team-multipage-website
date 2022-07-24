import { useId } from "react";
import { TeamCard } from "@/components/cards/team/team-card";
import AvatarChristian from "@/assets/avatar-christian.jpg";
import AvatarCruz from "@/assets/avatar-cruz.jpg";
import AvatarDrake from "@/assets/avatar-drake.jpg";
import AvatarGriffin from "@/assets/avatar-griffin.jpg";
import AvatarNikita from "@/assets/avatar-nikita.jpg";
import AvatarAden from "@/assets/avatar-aden.jpg";

export default function TeamSection() {
  const id = useId();

  return (
    <section
      aria-labelledby={id}
      className="relative overflow-hidden team-section-pattern bg-primary-700"
    >
      <div className="inner-container py-[5.5rem] md:py-[6.25rem] xl:py-[8.75rem]">
        <h2 id={id} className="title-md text-center">
          Meet the directors
        </h2>
        <ul
          className={`mt-12 grid grid-cols-[min(100%,21.25rem)] justify-center gap-y-6 
            md:grid-cols-[17.5625rem,17.5625rem] md:gap-y-12 md:gap-x-[0.6875rem]
            xl:mt-16 xl:grid-cols-3 xl:gap-x-[1.875rem]
          `}
        >
          <li>
            <TeamCard
              name="Nikita Marks"
              role="Founder & CEO"
              avatar={AvatarNikita}
              twitter="https://www.twitter.com"
              linkedin="https://www.linkedin.com"
            >
              <p>
                “It always amazes me how much talent there is in every corner of the globe.”
              </p>
            </TeamCard>
          </li>
          <li>
            <TeamCard
              name="Cristian Duncan"
              role="Co-founder & COO"
              avatar={AvatarChristian}
              twitter="https://www.twitter.com"
              linkedin="https://www.linkedin.com"
            >
              <p>
                “Distributed teams required unique processes. You need to approach work in a
                new way.”
              </p>
            </TeamCard>
          </li>
          <li>
            <TeamCard
              name="Cruz Hamers"
              role="Co-founder & CTO"
              avatar={AvatarCruz}
              twitter="https://www.twitter.com"
              linkedin="https://www.linkedin.com"
            >
              <p>
                “Technology is at the forefront of enabling distributed teams. That's where
                we come in.”
              </p>
            </TeamCard>
          </li>
          <li>
            <TeamCard
              name="Drake Heaton"
              role="Business Development Lead"
              avatar={AvatarDrake}
              twitter="https://www.twitter.com"
              linkedin="https://www.linkedin.com"
            >
              <p>
                “Hiring similar people from similar backgrounds is a surefire way to stunt
                innovation.”
              </p>
            </TeamCard>
          </li>
          <li>
            <TeamCard
              name="Griffin Wise"
              role="Lead Marketing"
              avatar={AvatarGriffin}
              twitter="https://www.twitter.com"
              linkedin="https://www.linkedin.com"
            >
              <p>
                “Unique perspectives shape unique products, which is what you need to
                survive these days.”
              </p>
            </TeamCard>
          </li>
          <li>
            <TeamCard
              name="Aden Allan"
              role="Head of Talent"
              avatar={AvatarAden}
              twitter="https://www.twitter.com"
              linkedin="https://www.linkedin.com"
            >
              <p>
                “Empowered teams create truly amazing products. Set the north star and let
                them follow it.”
              </p>
            </TeamCard>
          </li>
        </ul>
      </div>
    </section>
  );
}
