import { TestimonialCard } from "@/components/cards/testimonial/testimonial-card";
import { useId } from "react";
import AvatarKady from "@/assets/avatar-kady.jpg";
import AvatarAiysha from "@/assets/avatar-aiysha.jpg";
import AvatarArthur from "@/assets/avatar-arthur.jpg";

export default function TestimonialsSection() {
  const title = useId();
  return (
    <section
      aria-labelledby={title}
      className="relative testimonials-pattern bg-primary-700"
    >
      <div className="relative outer-container py-[8.75rem]  md:py-[6.25rem] xl:py-[8.75rem]">
        <div className="inner-container md:px-14 xl:px-0">
          <h2 id={title} className="title-md text-center max-w-[58.25rem] mx-auto">
            Delivering real results for top companies. Some of our{" "}
            <strong className="text-primary-300">success stories.</strong>
          </h2>
          <ul className="mt-12 flex flex-col gap-12 xl:flex-row xl:gap-[1.875rem] xl:mt-14 xl:pb-[0.6875rem]">
            <li>
              <TestimonialCard
                name="Kady Baker"
                role="Product Manager at Bookmark"
                avatar={AvatarKady}
              >
                <p>
                  “The team perfectly fit the specialized skill set required. They focused
                  on the most essential features helping us launch the platform eight months
                  faster than planned.”
                </p>
              </TestimonialCard>
            </li>
            <li>
              <TestimonialCard
                name="Aiysha Reese"
                role="Founder of Manage"
                avatar={AvatarAiysha}
              >
                <p>
                  “We needed to automate our entire onboarding process. The team came in and
                  built out the whole journey. Since going live, user retention has gone
                  through the roof!”
                </p>
              </TestimonialCard>
            </li>
            <li>
              <TestimonialCard
                name="Arthur Clarke"
                role="Co-founder of MyPhysio"
                avatar={AvatarArthur}
              >
                <p>
                  “Amazing. Our team helped us build an app that delivered a new experience
                  for hiring a physio. The launch was an instant success with 100k downloads
                  in the first month.”
                </p>
              </TestimonialCard>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
