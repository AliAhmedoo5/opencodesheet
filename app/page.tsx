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
  desktopPromptShortcuts,
  builtinTools,
  permissionLevels,
  customCommands,
  customCommandOptions,
  envVars,
  experimentalEnvVars,
  varSubstitution,
  comboPatterns,
} from "@/lib/data";

export default function Home() {
  const { copied, setCopied } = useCopyToast();

  return (
    <>
      <StickyNav />

      <header className="relative text-center pt-20 pb-10 sm:pt-24 sm:pb-12 border-b border-border/50">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            OpenCode Cheatsheet
          </h1>
          <p className="text-text2 text-sm sm:text-lg mt-2 max-w-lg mx-auto leading-relaxed">
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
              <code key="f" className="font-mono text-xs text-accent px-1.5 py-0.5 rounded">{f.flag}</code>,
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
                    <code key="k" className="font-mono text-xs text-accent3 px-1.5 py-0.5 rounded whitespace-nowrap">{r.key}</code>,
                    <span key="a" className="text-text2">{r.action}</span>,
                  ])}
                />
              </div>
            ))}
          </div>
        </Section>

        {/* Desktop Prompt Shortcuts */}
        <div className="border border-border/50 rounded-xl p-4 sm:p-5 mt-6 mb-10">
          <h3 className="text-sm font-semibold mb-3">Desktop Prompt Shortcuts</h3>
          <p className="text-text2 text-xs sm:text-sm mb-3">Readline-style shortcuts for the desktop app prompt input (built-in, not configurable).</p>
          <DataTable
            headers={["Shortcut", "Action"]}
            rows={desktopPromptShortcuts.map((s) => [
              <code key="k" className="font-mono text-xs text-accent3 px-1.5 py-0.5 rounded whitespace-nowrap">{s.shortcut}</code>,
              <span key="a" className="text-text2">{s.action}</span>,
            ])}
          />
        </div>

        {/* Built-in Tools */}
        <Section id="tools" title="Built-in Tools" subtitle="Tools the LLM can use. Configure via permission in config.">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
            {builtinTools.map((tool, i) => (
              <CommandCard key={i} item={tool} variant="tool" />
            ))}
          </div>
          <div className="mt-5 border border-border/50 rounded-xl p-4 sm:p-5">
            <h3 className="text-sm font-semibold mb-3">Permission levels</h3>
            <DataTable
              headers={["Value", "Behavior"]}
              rows={permissionLevels.map((p) => [
                <code key="v" className="font-mono text-xs text-accent px-1.5 py-0.5 rounded">{`"${p.value}"`}</code>,
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
          <div className="mt-5 border border-border/50 rounded-xl p-4 sm:p-5">
            <h3 className="text-sm font-semibold mb-3">Command options</h3>
            <DataTable
              headers={["Option", "Description"]}
              rows={customCommandOptions.map((o) => [
                <code key="o" className="font-mono text-xs text-accent4 px-1.5 py-0.5 rounded">{o.option}</code>,
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
                className="group bg-transparent border border-border/50 rounded-xl p-4 sm:p-5 transition-all duration-250 hover:border-accent/20"
              >
                <h3 className="text-xs sm:text-sm font-semibold mb-1">
                  <code className="text-accent font-mono text-[0.7rem] sm:text-xs px-1.5 py-0.5 rounded">{v.title}</code>
                </h3>
                <p className="text-text2 text-xs sm:text-sm">{v.description}</p>
              </div>
            ))}
          </div>
          <h3 className="text-sm font-semibold mt-7 mb-3">Config variable substitution</h3>
          <DataTable
            headers={["Syntax", "Description"]}
            rows={varSubstitution.map((v) => [
              <code key="s" className="font-mono text-xs text-accent2 px-1.5 py-0.5 rounded whitespace-nowrap">{v.syntax}</code>,
              <span key="d" className="text-text2">{v.desc}</span>,
            ])}
          />
          <h3 className="text-sm font-semibold mt-7 mb-3">Experimental</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
            {experimentalEnvVars.map((v, i) => (
              <div
                key={i}
                className="group bg-transparent border border-border/50 rounded-xl p-4 sm:p-5 transition-all duration-250 hover:border-accent/20"
              >
                <h3 className="text-xs sm:text-sm font-semibold mb-1">
                  <code className="text-accent2 font-mono text-[0.7rem] sm:text-xs px-1.5 py-0.5 rounded">{v.title}</code>
                </h3>
                <p className="text-text2 text-xs sm:text-sm">{v.description}</p>
              </div>
            ))}
          </div>
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

      <footer className="text-center py-10 text-xs sm:text-sm text-text2 border-t border-border/50">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 space-y-1">
          <p>
            <a href="https://opencode.ai/docs" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Docs</a>
            <span className="mx-2 opacity-30">&middot;</span>
            <a href="https://github.com/anomalyco/opencode" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">GitHub</a>
            <span className="mx-2 opacity-30">&middot;</span>
            <a href="https://www.linkedin.com/in/aliahmed0516" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">LinkedIn</a>
          </p>
          <p className="text-[0.65rem] opacity-50">
            Built by <a href="https://www.linkedin.com/in/aliahmed0516" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Ali Ahmed</a>
          </p>
        </div>
      </footer>

      <BackToTop />
      <CopyToast text={copied} />
    </>
  );
}
