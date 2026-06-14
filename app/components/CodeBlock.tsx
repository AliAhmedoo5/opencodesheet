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
          font-mono text-xs sm:text-[0.78rem] rounded-lg px-3 py-2 pr-8 overflow-x-auto border
          ${isExample
            ? "text-accent2 border-accent2/12 bg-accent2/[.025]"
            : "text-accent5 border-accent5/12 bg-accent5/[.025]"
          }
        `}
      >
        {children}
      </pre>
      <CopyButton text={typeof children === "string" ? children : ""} />
    </div>
  );
}
