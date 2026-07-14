import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type ActionButtonProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
  download?: boolean | string;
  variant?: "primary" | "secondary" | "quiet";
  className?: string;
};

export function ActionButton({ href, children, external, download, variant = "secondary", className = "" }: ActionButtonProps) {
  const classes = ["action-button", `action-button-${variant}`, className].filter(Boolean).join(" ");
  const Icon = external ? ArrowUpRight : ArrowRight;
  const isInternalRoute = href.startsWith("/") && !external && !download;

  const content = (
    <>
      <span>{children}</span>
      <Icon aria-hidden="true" size={17} strokeWidth={1.8} />
    </>
  );

  if (isInternalRoute) {
    return (
      <Link className={classes} to={href}>
        {content}
      </Link>
    );
  }

  return (
    <a
      className={classes}
      download={download}
      href={href}
      rel={external ? "noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      {content}
    </a>
  );
}
