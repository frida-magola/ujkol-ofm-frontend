import Link from "next/link";

export default function CustomLink(props) {
  return (
    <Link href={props.href} className={props.style} onClick={props.onClick}>
      {props.text}
    </Link>
  );
}
