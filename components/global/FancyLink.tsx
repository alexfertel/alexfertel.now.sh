import * as React from "react";
import { classNames } from "../../lib/class-names";

interface FancyLinkProps {
  href: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const FancyLink = ({ children, className, ...props }: FancyLinkProps) => (
  <a
    {...props}
    rel="noopener noreferrer"
    target="_blank"
    className={classNames(
      "font-lora custom-underline inline-block transition-all transform hover:scale-[1.05] duration-500 ease-out text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500",
      className
    )}
  >
    {children}
  </a>
);

export default FancyLink;
