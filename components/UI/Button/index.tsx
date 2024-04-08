import Link from "next/link";

export const LinkBtn = (href: any, name: any) => (
  <Link href={href}>{name}</Link>
);
