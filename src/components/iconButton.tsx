import { ButtonHTMLAttributes, ReactElement } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  children: ReactElement;
}

export function IconButton({ text, children, ...rest }: IconButtonProps) {
  return (
    <div className="hover:bg-gray-400 rounded-md p-2 font-bold">
      <button {...rest} className="flex flex-row gap-2 items-center">
        {children}
        <p>{text}</p>
      </button>
    </div>
  );
}
