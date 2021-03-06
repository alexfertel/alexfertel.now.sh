import * as React from "react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { HomeIcon, OpenSourceIcon } from "../icons";

const NavigationIcon = ({ children, href }) => (
  <Link href={href}>
    <a
      className="text-amber-500 dark:text-gray-300
    focus:outline-none focus-visible:outline-none rounded-full focus-visible:ring-2 focus:ring-offset-2
    focus-visible:ring-amber-500 dark:focus-visible:ring-gray-300 transition-all hover:scale-110 duration-100 ease-out"
    >
      {children}
    </a>
  </Link>
);

const Navigation = () => (
  <div className="z-10 absolute px-4 pt-4 top-0 left-0 right-0 flex justify-between">
    <div className="flex items-center justify-between w-14">
      <NavigationIcon href="/">
        <HomeIcon className="h-5 w-5 text-amber-500 dark:text-coolGray-100 " />
      </NavigationIcon>
      <NavigationIcon href="/open-source">
        <OpenSourceIcon className="h-5 w-5 text-amber-500 dark:text-coolGray-100" />
      </NavigationIcon>
    </div>

    <ThemeToggle />
  </div>
);

export default Navigation;
