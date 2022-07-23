import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";

interface ActionLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  className?: string;
}

export const ActionLink: React.FC<ActionLinkProps> = (props) => {
  return (
    <Link
      to={props.to}
      onClick={props?.onClick}
      className={`border-2 text-[1.125rem] rounded-full h-[3rem] grid w-[9.5625rem] place-items-center ${
        props.className ?? ""
      }`}
    >
      {props.children}
    </Link>
  );
};
