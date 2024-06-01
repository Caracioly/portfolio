import { Link, LinkProps } from "react-router-dom";
import { ReactElement } from "react";

interface IconButtonProps extends LinkProps {
  text: string;
  children: ReactElement;
}

export function IconButton({ text, children, to,...rest }: IconButtonProps) {
  return (
    <div className="hover:bg-gray-400 rounded-md p-2 font-bold">
      <Link to={to} {...rest} className="flex flex-row gap-2 items-center">
        {children}
        <p className="max-md:hidden md:visible">{text}</p>
      </Link>
    </div>
  );
}
