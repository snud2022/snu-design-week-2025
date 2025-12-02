import { HeaderClient } from "./HeaderClient";

const navItems = [
  { label: "ABOUT", href: "/about" },
  { label: "WORKS", href: "/works" },
  { label: "PEOPLE", href: "/people" },
  { label: "PROGRAM", href: "/program" },
  { label: "PARTNERS", href: "/partners" },
];

export const Header = () => {
  return <HeaderClient navItems={navItems} />;
};
