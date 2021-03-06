import * as React from "react";
import Image from "next/image";
import FancyLink from "./global/FancyLink";
import { StarIcon } from "./icons";
import { ForkIcon } from "./icons/ForkIcon";
import * as HoverCard from "@radix-ui/react-hover-card";
import { Transition } from "@headlessui/react";

interface IRepository {
  nameWithOwner: string;
  description: string;
  url: string;
  image_url: string;
  stargazerCount: number;
  forks: number;
}

const formatThousand = (n: number): string => `${Math.round(n / 100) / 10}k`;

const reposILove: IRepository[] = [
  {
    nameWithOwner: "rust-analyzer/rust-analyzer",
    url: "https://github.com/rust-analyzer/rust-analyzer",
    image_url:
      "https://opengraph.githubassets.com/1/rust-analyzer/rust-analyzer",
    description: "A Rust compiler front-end for IDEs",
    stargazerCount: 7100,
    forks: 719,
  },
  {
    nameWithOwner: "rust-lang/regex",
    url: "https://github.com/rust-lang/regex",
    image_url: "https://opengraph.githubassets.com/1/rust-lang/regex",
    description: "An implementation of regular expressions for Rust.",
    stargazerCount: 2000,
    forks: 290,
  },
  {
    nameWithOwner: "starship/starship",
    url: "https://github.com/starship/starship",
    image_url: "https://opengraph.githubassets.com/1/starship/starship",
    description:
      "The minimal, blazing-fast, and infinitely customizable prompt for any shell!",
    stargazerCount: 18300,
    forks: 767,
  },
  {
    nameWithOwner: "vercel/next.js",
    url: "https://github.com/vercel/next.js",
    image_url: "https://opengraph.githubassets.com/1/vercel/next.js",
    description: "The React Framework",
    stargazerCount: 72500,
    forks: 14000,
  },
];

const Repo = ({ repo }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <div className="pt-1 flex justify-between">
        <div className="flex items-center">
          <HoverCard.Root
            openDelay={100}
            onOpenChange={(open) => {
              setIsOpen(open);
            }}
          >
            <HoverCard.Trigger
              as={FancyLink}
              href={repo.url}
              title={repo.description}
              className="ml-2 text-lg"
            >
              {repo.nameWithOwner}
            </HoverCard.Trigger>

            <HoverCard.Content side="top">
              <Transition
                show={isOpen}
                appear
                enter="transform transition duration-300 origin-bottom ease-out"
                enterFrom="opacity-0 translate-y-2 scale-0"
                enterTo="opacity-100 translate-y-0 scale-100"
                className="shadow-xl rounded-xl"
              >
                <a
                  href={repo.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="block p-1 bg-white border border-transparent shadow-sm rounded-lg hover:border-amber-500"
                >
                  <Image
                    width={500}
                    height={250}
                    src={repo.image_url}
                    alt={repo.title}
                    layout="fixed"
                    loading="eager"
                  />
                </a>
              </Transition>
            </HoverCard.Content>
          </HoverCard.Root>
        </div>
        <div className="flex items-center text-red-600 dark:text-red-400">
          <p className="text-base">{formatThousand(repo.stargazerCount)}</p>
          <StarIcon className="pl-1 h-5 w-5" />

          <p className="pl-2 text-base">{repo.forks}</p>
          <ForkIcon className="pl-1 h-5 w-5" />
        </div>
      </div>
      <div>
        <p className="pl-6 pt-1 text-base opacity-75 max-w-sm">{repo.title}</p>
      </div>
    </div>
  );
};

const RepoList = () => (
  <div className="w-full p-5 justify-between items-center text-xl">
    <div className="text-center">
      <h2 className="font-lora font-semibold text-2xl text-amber-500 leading-8">
        Favorite
      </h2>
    </div>

    <div className="pt-3 flex flex-col gap-y-2">
      {reposILove.map((repo: IRepository) => (
        <Repo repo={repo} key={repo.nameWithOwner} />
      ))}
    </div>
  </div>
);

export default RepoList;
