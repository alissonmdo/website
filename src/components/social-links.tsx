import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitch,
  IconBrandYoutube,
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
  {
    name: "Youtube",
    url: "https://www.youtube.com/channel/UCLX6Flpkurs--elEENMDhZQ",
    icon: <IconBrandYoutube size={26} />,
  },
  {
    name: "Twitch",
    url: "https://www.twitch.tv/alissonmdo",
    icon: <IconBrandTwitch size={26} />,
  },
];

export default function SocialLinks() {
  return (
    <ul className="flex flex-row justify-center text-lg items-start gap-4 flex-wrap">
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex hover:text-accent"
          >
            {link.icon}
            <span>{link.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
