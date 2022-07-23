interface FeatureCardProps {
  title: string;
  children: React.ReactNode;
  icon: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = (props) => {
  return (
    <article className="grid grid-cols-1 justify-items-center md:grid-cols-[4.5rem,1fr] md:gap-x-6 md:justify-items-start">
      <img src={props.icon} alt="" className="md:[grid-area:1/1/span_3/auto]" />
      <h3 className="mt-4 title-sm text-secondary text-center md:text-left md:mt-0">
        {props.title}
      </h3>
      <div className="mt-2 body-md text-center opacity-80 md:text-left md:mt-4">{props.children}</div>
    </article>
  );
};
