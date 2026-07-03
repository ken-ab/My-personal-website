import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { MouseEvent, ReactNode } from "react";
import { Link } from "react-router-dom";

type ActionButtonProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
  variant?: "primary" | "secondary" | "quiet";
  className?: string;
};

export function ActionButton({ href, children, external, variant = "secondary", className = "" }: ActionButtonProps) {
  const classes = ["action-button", `action-button-${variant}`, className].filter(Boolean).join(" ");
  const Icon = external ? ArrowUpRight : ArrowRight;
  const isInternalRoute = href.startsWith("/") && !external;
  const isPlaceholder = href === "#";

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
      href={href}
      onClick={isPlaceholder ? preventPlaceholderNavigation : undefined}
      rel={external ? "noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      {content}
    </a>
  );
}

function preventPlaceholderNavigation(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
}
