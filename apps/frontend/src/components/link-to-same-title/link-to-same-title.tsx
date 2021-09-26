import LinkSVG from "./reply-solid.svg";

import "./link-to-same-title.scss";

export default function LinkToSameTitle({ link }: { link: string }) {
  return (
    <a className="linkToSameTitle" href={link}>
      <img
        className="linkToSameTitle__icon"
        src={LinkSVG}
        alt="reply link icon"
      />{" "}
      Link
    </a>
  );
}
