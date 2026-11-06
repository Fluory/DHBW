import type { Root } from "hast";
import { toJsxRuntime, type Components } from "hast-util-to-jsx-runtime";
import Link from "next/link";
import type { ComponentProps } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Callout } from "@/components/reader/Callout";

function MarkdownLink({ href, children, ...rest }: ComponentProps<"a">) {
  if (typeof href === "string" && href.startsWith("/") && !href.startsWith("//")) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}

function Table(props: ComponentProps<"table">) {
  return (
    <div className="table-scroll" role="region" aria-label="Tabelle" tabIndex={0}>
      <table {...props} />
    </div>
  );
}

function Pre(props: ComponentProps<"pre">) {
  return <pre tabIndex={0} {...props} />;
}

const components: Partial<Components> = {
  a: MarkdownLink,
  table: Table,
  pre: Pre,
  aside: Callout as Components["aside"],
};

/** Rendert einen hast-Baum (aus processMarkdown) als React, ohne dangerouslySetInnerHTML. */
export function Markdown({ tree }: { tree: Root }) {
  return toJsxRuntime(tree, { Fragment, jsx, jsxs, components });
}
