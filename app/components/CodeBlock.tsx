import { CopyButton } from "./CopyButton";

export function CodeBlock({
  children,
  type = "example",
}: {
  children: string;
  type?: "example" | "syntax";
}) {
  const isExample = type === "example";

  return (
    <div className="group relative mt-2">
      <pre
        className={`
          font-mono text-xs sm:text-[0.78rem] rounded-md px-2.5 py-1.5 pr-8 overflow-x-auto
          ${isExample
            ? "text-accent2 bg-accent2/5 border border-accent2/15"
            : "text-accent5 bg-accent5/5 border border-accent5/15"
          }
        `}
      >
        {children}
      </pre>
      <CopyButton text={typeof children === "string" ? children : ""} />
    </div>
  );
}
