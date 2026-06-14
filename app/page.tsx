"use client";

import { StickyNav } from "@/app/components/StickyNav";
import { Section } from "@/app/components/Section";
import { CommandCard } from "@/app/components/CommandCard";
import { DataTable, DataList } from "@/app/components/DataTable";
import { ComboCard } from "@/app/components/ComboCard";
import { BackToTop } from "@/app/components/BackToTop";
import { CopyToast, useCopyToast } from "@/app/components/CopyToast";
import { CodeBlock } from "@/app/components/CodeBlock";
import {
  cliCommands,
  globalFlags,
  slashCommands,
  keybindGroups,
  builtinTools,
  permissionLevels,
  customCommands,
  customCommandOptions,
  envVars,
  varSubstitution,
  comboPatterns,
} from "@/lib/data";

export default function Home() {
  const { copied, setCopied } = useCopyToast();

  return (
    <>
      <StickyNav />

      <header className="relative overflow-hidden text-center pt-20 pb-10 sm:pt-24 sm:pb-12 bg-gradient-to-br from-bg via-bg to-[#1a1040] border-b border-border">
        <div className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 30% 50%, rgba(108,140,255,.06) 0%, transparent 50%),
                         radial-gradient(circle at 70% 50%, rgba(74,222,128,.04) 0%, transparent 50%)`
          }}
        />
        <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6">
          <span className="inline-block text-[0.65rem] font-semibold text-accent border border-accent/25 bg-accent/10 rounded-full px-3 py-1 mb-3">
            Open Source AI Coding Agent
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            OpenCode <span className="text-accent">Cheatsheet</span>
          </h1>
          <p className="text-text2 text-sm sm:text-lg mt-2 max-w-lg mx-auto">
            Every command, tool, keybind &amp; combination pattern — all in one place.
          </p>
        </div>
      </header>

      <main className="flex-1 max-w-[1300px] mx-auto w-full px-4 sm:px-6">

        {/* CLI Commands */}
        <Section id="cli" title="CLI Commands" subtitle="Terminal commands you run with opencode &lt;command&gt;">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
            {cliCommands.map((cmd, i) => (
              <CommandCard key={i} item={cmd} variant="cli" />
            ))}
          </div>
          <h3 className="text-sm sm:text-base font-semibold mt-7 mb-3">Global Flags</h3>
          <DataTable
            headers={["Flag", "Description"]}
            rows={globalFlags.map((f) => [
              <code key="f" className="font-mono text-xs bg-bg3 px-1.5 py-0.5 rounded">{f.flag}</code>,
              <span key="d" className="text-text2">{f.desc}</span>,
            ])}
          />
        </Section>

        {/* TUI Slash Commands */}
        <Section id="slash" title="TUI Slash Commands" subtitle="Type / in the TUI to run these commands">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
            {slashCommands.map((cmd, i) => (
              <CommandCard key={i} item={cmd} variant="slash" />
            ))}
          </div>
        </Section>

        {/* Keybinds */}
        <Section id="keybinds" title="Keybinds" subtitle={"Default keyboard shortcuts. Leader key: ctrl+x. Configurable in tui.json."}>
          <div className="space-y-6">
            {keybindGroups.map((group, i) => (
              <div key={i}>
                <h3 className="text-sm font-semibold mb-2">{group.title}</h3>
                <DataTable
                  headers={["Key", "Action"]}
                  rows={group.rows.map((r) => [
                    <code key="k" className="font-mono text-xs bg-bg3 px-1.5 py-0.5 rounded whitespace-nowrap">{r.key}</code>,
                    <span key="a" className="text-text2">{r.action}</span>,
                  ])}
                />
              </div>
            ))}
          </div>
        </Section>

        {/* Built-in Tools */}
        <Section id="tools" title="Built-in Tools" subtitle="Tools the LLM can use. Configure via permission in config.">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
            {builtinTools.map((tool, i) => (
              <CommandCard key={i} item={tool} variant="tool" />
            ))}
          </div>
          <div className="mt-5 bg-bg2 border border-border rounded-lg p-4 sm:p-5">
            <h3 className="text-sm font-semibold mb-3">Permission levels</h3>
            <DataTable
              headers={["Value", "Behavior"]}
              rows={permissionLevels.map((p) => [
                <code key="v" className="font-mono text-xs bg-bg3 px-1.5 py-0.5 rounded">{`"${p.value}"`}</code>,
                <span key="d" className="text-text2">{p.desc}</span>,
              ])}
            />
            <div className="mt-3">
              <CodeBlock>{'{ "permission": { "edit": "ask", "bash": "allow", "webfetch": "deny" } }'}</CodeBlock>
            </div>
          </div>
        </Section>

        {/* Custom Commands */}
        <Section id="custom" title="Custom Commands" subtitle="Define your own /command shortcuts in opencode.json or .opencode/commands/*.md">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
            {customCommands.map((cmd, i) => (
              <CommandCard key={i} item={cmd} variant="combo" />
            ))}
          </div>
          <div className="mt-5 bg-bg2 border border-border rounded-lg p-4 sm:p-5">
            <h3 className="text-sm font-semibold mb-3">Command options</h3>
            <DataTable
              headers={["Option", "Description"]}
              rows={customCommandOptions.map((o) => [
                <code key="o" className="font-mono text-xs bg-bg3 px-1.5 py-0.5 rounded">{o.option}</code>,
                <span key="d" className="text-text2">{o.desc}</span>,
              ])}
            />
          </div>
        </Section>

        {/* Environment Variables */}
        <Section id="env" title="Environment Variables" subtitle="Configure OpenCode behavior via environment variables">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
            {envVars.map((v, i) => (
              <div
                key={i}
                className="group bg-bg2 border border-border rounded-lg p-4 sm:p-5 transition-all hover:border-accent/30"
              >
                <h3 className="text-xs sm:text-sm font-semibold mb-1">
                  <code className="bg-bg3 text-text font-mono text-[0.7rem] sm:text-xs px-1.5 py-0.5 rounded">{v.title}</code>
                </h3>
                <p className="text-text2 text-xs sm:text-sm">{v.description}</p>
              </div>
            ))}
          </div>
          <h3 className="text-sm font-semibold mt-7 mb-3">Config variable substitution</h3>
          <DataTable
            headers={["Syntax", "Description"]}
            rows={varSubstitution.map((v) => [
              <code key="s" className="font-mono text-xs bg-bg3 px-1.5 py-0.5 rounded whitespace-nowrap">{v.syntax}</code>,
              <span key="d" className="text-text2">{v.desc}</span>,
            ])}
          />
        </Section>

        {/* Combination Patterns */}
        <Section id="combos" title="Combination Patterns" subtitle="Use commands together to create powerful workflows" className="border-none">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
            {comboPatterns.map((combo, i) => (
              <ComboCard key={i} item={combo} />
            ))}
          </div>
        </Section>

      </main>

      <footer className="text-center py-8 text-text2 text-xs sm:text-sm border-t border-border">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
          <p>
            OpenCode Cheatsheet &middot;{" "}
            <a href="https://opencode.ai/docs" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Official Docs
            </a>{" "}
            &middot;{" "}
            <a href="https://github.com/anomalyco/opencode" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              GitHub
            </a>{" "}
            &middot;{" "}
            <a href="https://www.linkedin.com/in/aliahmed0516" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              LinkedIn
            </a>
          </p>
          <p className="mt-1 text-[0.65rem] opacity-60">
            Built by <a href="https://www.linkedin.com/in/aliahmed0516" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Ali Ahmed</a> &middot; OpenCode is open source &middot; MIT License
          </p>
        </div>
      </footer>

      <BackToTop />
      <CopyToast text={copied} />
    </>
  );
}
