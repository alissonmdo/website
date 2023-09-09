import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitch,
  IconBrandTwitter,
  IconBrandYoutube,
  IconCode,
  IconDeviceGamepad2,
  IconFileDescription,
  IconHome,
  IconVinyl,
} from "@tabler/icons-react";

export type IconSelectorProps = {
  name:
    | "Github"
    | "Linkedin"
    | "Instagram"
    | "Youtube"
    | "Twitch"
    | "Twitter"
    | "playlists"
    | "games"
    | "projects"
    | "curriculum"
    | "home";
  size?: number;
};

export default function IconSelector({ name, size = 20 }: IconSelectorProps) {
  switch (name) {
    case "Github":
      return <IconBrandGithub size={size} />;
    case "Linkedin":
      return <IconBrandLinkedin size={size} />;
    case "Instagram":
      return <IconBrandInstagram size={size} />;
    case "Youtube":
      return <IconBrandYoutube size={size} />;
    case "Twitch":
      return <IconBrandTwitch size={size} />;
    case "Twitter":
      return <IconBrandTwitter size={size} />;
    case "playlists":
      return <IconVinyl size={size} />;
    case "games":
      return <IconDeviceGamepad2 size={size} />;
    case "projects":
      return <IconCode size={size} />;
    case "curriculum":
      return <IconFileDescription size={size} />;
    case "home":
      return <IconHome size={size} />;
    default:
      return null;
  }
}
