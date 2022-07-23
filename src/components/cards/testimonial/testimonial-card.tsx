import IconQuotes from "@/assets/icon-quotes.svg";

interface TestimonialCardProps {
  name: string;
  role: string;
  avatar: string;
  children: React.ReactNode;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = (props) => {
  return (
    <figure className="flex flex-col items-center">
      <img src={IconQuotes} alt="" className="w-[4.1875rem] h-[3.5rem]" />
      <blockquote className="mt-[-1.25rem] text-center body-md">
        {props.children}
      </blockquote>
      <figcaption className="mt-4 flex flex-col items-center xl:mt-6">
        <span className="mt-[0.125rem] title-sm text-primary-300">{props.name}</span>
        <span className="text-[0.8125rem] leading-[1.125rem] font-medium italic">
          {props.role}
        </span>
        <img
          src={props.avatar}
          alt={props.name}
          className="mt-4 w-[3.875rem] h-[3.875rem] rounded-full border-2 border-[#C4FFFE] xl:mt-8"
        />
      </figcaption>
    </figure>
  );
};
