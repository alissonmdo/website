import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import type { ReactNode } from "react";

const links: { name: string; url: string; icon: ReactNode }[] = [
  {
    name: "Github",
    url: "https://github.com/alissonmdo",
    icon: <IconBrandGithub size={26} />,
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/alissonmdo/",
    icon: <IconBrandLinkedin size={26} />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/alissonmdo/",
    icon: <IconBrandInstagram size={26} />,
  },
];

export default function Links() {
  return (
    <ul className="flex flex-col text-lg items-start">
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 hover:text-accent"
          >
            {">"} {link.icon}
            <span>{link.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
