export interface CommandItem {
  label?: string;
  title: string;
  description: string;
  example?: string;
  syntax?: string;
}

export interface KeybindGroup {
  title: string;
  rows: { key: string; action: string }[];
}

export interface ComboItem {
  title: string;
  description: string;
  steps: string[];
  syntax: string;
}

export interface TableItem {
  label?: string;
  title?: string;
  description?: string;
  example?: string;
  syntax?: string;
}

export const cliCommands: CommandItem[] = [
  { label: "opencode", title: "opencode", description: "Start the TUI. Pass a project path to open a specific directory.", example: "opencode /path/to/project", syntax: "Flags: --continue, --session, --fork, --prompt, --model, --agent, --port, --hostname, --mdns, --cors" },
  { label: "opencode run", title: "opencode run", description: "Run a prompt in non-interactive mode. Great for scripting and automation.", example: "opencode run \"Explain closures in JS\"", syntax: "Flags: --model, --agent, --file, --continue, --session, --fork, --share, --format, --title, --attach, --password, --username, --dir, --port, --variant, --thinking, --dangerously-skip-permissions" },
  { label: "opencode serve", title: "opencode serve", description: "Start a headless HTTP server for API access. Set OPENCODE_SERVER_PASSWORD for auth.", example: "opencode serve --port 4096", syntax: "Flags: --port, --hostname, --mdns, --mdns-domain, --cors" },
  { label: "opencode web", title: "opencode web", description: "Start a server with a web UI. Opens a browser for GUI access.", example: "opencode web --hostname 0.0.0.0", syntax: "Flags: --port, --hostname, --mdns, --mdns-domain, --cors" },
  { label: "opencode attach", title: "opencode attach", description: "Attach a TUI to a running backend server (serve / web).", example: "opencode attach http://10.0.0.5:4096", syntax: "Flags: --dir, --continue, --session, --fork, --password, --username" },
  { label: "opencode auth", title: "opencode auth", description: "Manage provider credentials. Subcommands: login, list/ls, logout.", example: "opencode auth login --provider anthropic", syntax: "login flags: --provider, --method" },
  { label: "opencode agent", title: "opencode agent", description: "Manage agents. Subcommands: create, list.", example: "opencode agent create --description \"Senior JS dev\"", syntax: "create flags: --path, --description, --mode, --permissions, --model" },
  { label: "opencode session", title: "opencode session", description: "Manage sessions. Subcommands: list, delete.", example: "opencode session list --format json", syntax: "list flags: --max-count/-n, --format (table|json)" },
  { label: "opencode models", title: "opencode models", description: "List available models from configured providers.", example: "opencode models anthropic --refresh", syntax: "Flags: --refresh, --verbose" },
  { label: "opencode mcp", title: "opencode mcp", description: "Manage MCP servers. Subcommands: add, list/ls, auth, logout, debug.", example: "opencode mcp add" },
  { label: "opencode stats", title: "opencode stats", description: "Show token usage &amp; cost stats.", example: "opencode stats --days 7 --models 5", syntax: "Flags: --days, --tools, --models (top N), --project" },
  { label: "opencode export", title: "opencode export", description: "Export session data as JSON. Pass a session ID or select interactively.", example: "opencode export --sanitize" },
  { label: "opencode import", title: "opencode import", description: "Import session data from a JSON file or share URL.", example: "opencode import https://opncd.ai/s/abc123" },
  { label: "opencode pr", title: "opencode pr", description: "Fetch & checkout a GitHub PR branch and open OpenCode.", example: "opencode pr 42" },
  { label: "opencode github", title: "opencode github", description: "GitHub agent for repo automation. Subcommands: install, run.", example: "opencode github install", syntax: "run flags: --event, --token" },
  { label: "opencode plugin", title: "opencode plugin", description: "Install a plugin from npm. Alias: opencode plug.", example: "opencode plugin opencode-helicone-session -g", syntax: "Flags: --global/-g, --force/-f" },
  { label: "opencode acp", title: "opencode acp", description: "Start an ACP (Agent Client Protocol) server.", example: "opencode acp --port 4097", syntax: "Flags: --cwd, --port, --hostname, --mdns, --mdns-domain, --cors" },
  { label: "opencode db", title: "opencode db", description: "Database tools. Run queries or print the database path.", example: "opencode db path", syntax: "Flags: --format (json|tsv)" },
  { label: "opencode debug", title: "opencode debug", description: "Debugging & troubleshooting tools.", example: "opencode debug config" },
  { label: "opencode upgrade", title: "opencode upgrade", description: "Update to the latest or a specific version.", example: "opencode upgrade v0.2.0", syntax: "Flags: --method (curl|npm|pnpm|bun|brew)" },
  { label: "opencode uninstall", title: "opencode uninstall", description: "Remove OpenCode and all its files.", example: "opencode uninstall --keep-config", syntax: "Flags: --keep-config/-c, --keep-data/-d, --dry-run, --force/-f" },
];

export const globalFlags: { flag: string; desc: string }[] = [
  { flag: "-h, --help", desc: "Display help" },
  { flag: "-v, --version", desc: "Print version" },
  { flag: "--print-logs", desc: "Print logs to stderr" },
  { flag: "--log-level", desc: "DEBUG, INFO, WARN, ERROR" },
  { flag: "--pure", desc: "Run without external plugins" },
];

export const slashCommands: CommandItem[] = [
  { label: "/connect", title: "/connect", description: "Add a provider. Select from available providers and paste API key." },
  { label: "/init", title: "/init", description: "Guided setup for creating or updating AGENTS.md in your project." },
  { label: "/help", title: "/help", description: "Show the help dialog with all available commands." },
  { label: "/new", title: "/new", description: "Start a fresh session. Alias: /clear. Keybind: ctrl+x n" },
  { label: "/undo", title: "/undo", description: "Undo last message and all file changes. Requires Git. Keybind: ctrl+x u" },
  { label: "/redo", title: "/redo", description: "Redo a previously undone message. Requires Git. Keybind: ctrl+x r" },
  { label: "/compact", title: "/compact", description: "Compact current session. Alias: /summarize. Keybind: ctrl+x c" },
  { label: "/share", title: "/share", description: "Share the current session via a link." },
  { label: "/unshare", title: "/unshare", description: "Unshare the current session." },
  { label: "/sessions", title: "/sessions", description: "List and switch sessions. Aliases: /resume, /continue. Keybind: ctrl+x l" },
  { label: "/models", title: "/models", description: "List all available models. Keybind: ctrl+x m" },
  { label: "/themes", title: "/themes", description: "List and switch themes. Keybind: ctrl+x t" },
  { label: "/editor", title: "/editor", description: "Open external editor for composing messages. Keybind: ctrl+x e" },
  { label: "/export", title: "/export", description: "Export session to Markdown in editor. Keybind: ctrl+x x" },
  { label: "/details", title: "/details", description: "Toggle tool execution details on/off." },
  { label: "/thinking", title: "/thinking", description: "Toggle display of reasoning blocks. Only controls visibility — use ctrl+t to toggle actual reasoning capabilities." },
  { label: "/exit", title: "/exit", description: "Exit OpenCode. Aliases: /quit, /q. Keybind: ctrl+x q" },
];

export const keybindGroups: KeybindGroup[] = [
  {
    title: "Session",
    rows: [
      { key: "ctrl+x n", action: "New session" },
      { key: "ctrl+x l", action: "List / switch sessions" },
      { key: "ctrl+x g", action: "Session timeline" },
      { key: "ctrl+x u", action: "Undo last message" },
      { key: "ctrl+x r", action: "Redo" },
      { key: "ctrl+x c", action: "Compact / summarize" },
      { key: "ctrl+x q", action: "Exit" },
      { key: "ctrl+x x", action: "Export session" },
      { key: "ctrl+x e", action: "Open editor" },
      { key: "ctrl+x s", action: "Status view" },
      { key: "ctrl+x b", action: "Toggle sidebar" },
      { key: "ctrl+x y", action: "Copy message" },
      { key: "ctrl+x h", action: "Toggle conceal" },
      { key: "escape", action: "Interrupt current response" },
      { key: "ctrl+r", action: "Rename session" },
      { key: "ctrl+d", action: "Delete session / character" },
    ],
  },
  {
    title: "Model & agent",
    rows: [
      { key: "ctrl+x m", action: "List models" },
      { key: "ctrl+x t", action: "List themes" },
      { key: "ctrl+x a", action: "List agents" },
      { key: "tab", action: "Cycle agents (build ↔ plan)" },
      { key: "shift+tab", action: "Cycle agents reverse" },
      { key: "ctrl+t", action: "Cycle model variants" },
      { key: "f2", action: "Cycle recent models" },
      { key: "shift+f2", action: "Cycle recent models reverse" },
      { key: "ctrl+f", action: "Toggle favorite model" },
      { key: "ctrl+p", action: "Command palette" },
      { key: "ctrl+a", action: "Provider list" },
      { key: "ctrl+g", action: "Cancel popovers / abort" },
    ],
  },
  {
    title: "Input editing",
    rows: [
      { key: "enter", action: "Submit message" },
      { key: "shift+enter / ctrl+enter / alt+enter", action: "New line in input" },
      { key: "ctrl+v", action: "Paste (configurable)" },
      { key: "ctrl+z / super+z", action: "Undo in input" },
      { key: "ctrl+. / super+shift+z", action: "Redo in input" },
      { key: "ctrl+a / ctrl+e", action: "Line start / end" },
      { key: "ctrl+u", action: "Kill to start of line" },
      { key: "ctrl+k", action: "Kill to end of line" },
      { key: "ctrl+w / ctrl+backspace", action: "Delete previous word" },
      { key: "alt+d / alt+delete", action: "Delete next word" },
      { key: "ctrl+d / delete", action: "Delete character under cursor" },
      { key: "ctrl+shift+d", action: "Delete entire line" },
      { key: "ctrl+c", action: "Clear input" },
      { key: "super+a", action: "Select all" },
      { key: "home / end", action: "Buffer start / end" },
      { key: "↑ / ↓", action: "Navigate history" },
    ],
  },
  {
    title: "Cursor navigation",
    rows: [
      { key: "← →", action: "Move cursor left / right" },
      { key: "alt+← / alt+→", action: "Move cursor word by word" },
      { key: "ctrl+← / ctrl+→", action: "Move cursor word by word" },
      { key: "ctrl+b / ctrl+f", action: "Move cursor back / forward" },
      { key: "shift+← / shift+→", action: "Select character by character" },
      { key: "alt+shift+← / →", action: "Select word by word" },
      { key: "alt+a / alt+e", action: "Visual line home / end" },
    ],
  },
  {
    title: "Sub-agent navigation",
    rows: [
      { key: "→", action: "Enter child session" },
      { key: "←", action: "Back to parent session" },
      { key: "↑", action: "Go to parent session" },
      { key: "ctrl+x ↓", action: "Open first child session" },
    ],
  },
  {
    title: "Message navigation",
    rows: [
      { key: "pageup / ctrl+alt+b", action: "Page up" },
      { key: "pagedown / ctrl+alt+f", action: "Page down" },
      { key: "ctrl+alt+y", action: "Line up" },
      { key: "ctrl+alt+e", action: "Line down" },
      { key: "ctrl+alt+u", action: "Half page up" },
      { key: "ctrl+alt+d", action: "Half page down" },
      { key: "ctrl+g / home", action: "First message" },
      { key: "ctrl+alt+g / end", action: "Last message" },
    ],
  },
  {
    title: "Which-key (popup hints)",
    rows: [
      { key: "ctrl+alt+k", action: "Toggle which-key" },
      { key: "ctrl+alt+shift+k", action: "Toggle layout" },
      { key: "ctrl+alt+← / →", action: "Previous / next group" },
      { key: "ctrl+alt+↑ / ↓", action: "Scroll up / down" },
    ],
  },
  {
    title: "Dialog navigation",
    rows: [
      { key: "↑ / ↓ or ctrl+p / ctrl+n", action: "Select previous / next" },
      { key: "pageup / pagedown", action: "Page up / down" },
      { key: "home / end", action: "First / last item" },
      { key: "enter", action: "Submit / confirm" },
      { key: "space", action: "Toggle MCP server selection" },
      { key: "ctrl+f", action: "Toggle permission fullscreen" },
    ],
  },
];

export const desktopPromptShortcuts: { shortcut: string; action: string }[] = [
  { shortcut: "ctrl+a", action: "Move to start of line" },
  { shortcut: "ctrl+e", action: "Move to end of line" },
  { shortcut: "ctrl+b / ctrl+f", action: "Move cursor back / forward one char" },
  { shortcut: "alt+b / alt+f", action: "Move cursor back / forward one word" },
  { shortcut: "ctrl+d", action: "Delete character under cursor" },
  { shortcut: "ctrl+k", action: "Kill to end of line" },
  { shortcut: "ctrl+u", action: "Kill to start of line" },
  { shortcut: "ctrl+w", action: "Kill previous word" },
  { shortcut: "alt+d", action: "Kill next word" },
  { shortcut: "ctrl+t", action: "Transpose characters" },
  { shortcut: "ctrl+g", action: "Cancel popovers / abort running response" },
];

export const builtinTools: CommandItem[] = [
  { label: "bash", title: "bash", description: "Execute shell commands. Run npm install, git status, etc." },
  { label: "edit", title: "edit", description: "Modify existing files via exact string replacement. Primary way to edit code." },
  { label: "write", title: "write", description: "Create new files or overwrite existing ones. Controlled by edit permission." },
  { label: "read", title: "read", description: "Read file contents. Supports reading specific line ranges." },
  { label: "grep", title: "grep", description: "Search file contents with regex. Supports file pattern filtering." },
  { label: "glob", title: "glob", description: "Find files by glob patterns like **/*.js or src/**/*.ts." },
  { label: "apply_patch", title: "apply_patch", description: "Apply patch files. Uses marker lines (*** Add/Update/Delete File:). Controlled by edit permission." },
  { label: "webfetch", title: "webfetch", description: "Fetch content from a URL. Use for docs & research." },
  { label: "websearch", title: "websearch", description: "Search the web. Available with the OpenCode provider, or set OPENCODE_ENABLE_EXA=1." },
  { label: "question", title: "question", description: "Ask the user questions with options during a task." },
  { label: "task", title: "task", description: "Launch subagents for complex multi-step tasks without polluting primary context." },
  { label: "skill", title: "skill", description: "Load a SKILL.md file into the conversation." },
  { label: "todowrite", title: "todowrite", description: "Create & manage todo lists during complex tasks." },
  { label: "lsp (experimental)", title: "lsp", description: "Code intelligence: definitions, references, hover, call hierarchy. Requires OPENCODE_EXPERIMENTAL_LSP_TOOL=true." },
];

export const permissionLevels: { value: string; desc: string }[] = [
  { value: "allow", desc: "Tool runs without asking (default for most tools)" },
  { value: "ask", desc: "Prompt user for approval each time (default for external_directory, doom_loop)" },
  { value: "deny", desc: "Block the tool entirely" },
];

export const customCommandOptions: { option: string; desc: string }[] = [
  { option: "template", desc: "The prompt sent to the LLM (required)" },
  { option: "description", desc: "Shown in the TUI command list" },
  { option: "agent", desc: "Agent to run this command (e.g. build, plan)" },
  { option: "model", desc: "Override the model for this command" },
  { option: "subtask", desc: "Force subagent invocation (true/false)" },
];

export const customCommands: CommandItem[] = [
  { label: "JSON config", title: "command in opencode.json", description: "Define commands with template, description, agent, and model.", syntax: "\"command\": { \"test\": { \"template\": \"Run tests...\", \"description\": \"Run tests with coverage\" } }" },
  { label: "Markdown files", title: ".opencode/commands/*.md", description: "Place markdown files in .opencode/commands/ (project) or ~/.config/opencode/commands/ (global). The filename becomes the command name.", syntax: ".opencode/commands/test.md with frontmatter" },
  { label: "Arguments", title: "$ARGUMENTS / $1, $2", description: "Pass arguments to commands. Use $ARGUMENTS for everything, or positional params like $1, $2, $3.", example: "/component Button → $1 = \"Button\"" },
  { label: "Shell injection", title: "!`command`", description: "Inject bash command output into your prompt template.", example: "!`git log --oneline -5`" },
  { label: "File references", title: "@filename", description: "Include file contents in the prompt automatically.", example: "Review @src/components/Button.tsx" },
];

export const envVars: CommandItem[] = [
  { title: "OPENCODE_CONFIG", description: "Path to config file" },
  { title: "OPENCODE_TUI_CONFIG", description: "Path to TUI config file" },
  { title: "OPENCODE_CONFIG_DIR", description: "Path to config directory" },
  { title: "OPENCODE_CONFIG_CONTENT", description: "Inline JSON config content" },
  { title: "OPENCODE_SERVER_PASSWORD", description: "Basic auth password for serve/web" },
  { title: "OPENCODE_SERVER_USERNAME", description: "Override basic auth username (default: opencode)" },
  { title: "OPENCODE_PERMISSION", description: "Inline JSON permissions config" },
  { title: "OPENCODE_DISABLE_AUTOUPDATE", description: "Disable automatic update checks" },
  { title: "OPENCODE_ENABLE_EXA", description: "Enable Exa web search (websearch tool)" },
  { title: "OPENCODE_EXPERIMENTAL", description: "Enable all experimental features (umbrella flag)" },
  { title: "OPENCODE_FAKE_VCS", description: "Fake VCS provider for testing" },
  { title: "OPENCODE_DISABLE_MOUSE", description: "Disable mouse capture in TUI" },
  { title: "OPENCODE_AUTO_SHARE", description: "Automatically share sessions" },
  { title: "OPENCODE_GIT_BASH_PATH", description: "Path to Git Bash executable on Windows" },
  { title: "OPENCODE_DISABLE_PRUNE", description: "Disable pruning of old data" },
  { title: "OPENCODE_DISABLE_TERMINAL_TITLE", description: "Disable automatic terminal title updates" },
  { title: "OPENCODE_DISABLE_DEFAULT_PLUGINS", description: "Disable default plugins" },
  { title: "OPENCODE_DISABLE_LSP_DOWNLOAD", description: "Disable automatic LSP server downloads" },
  { title: "OPENCODE_ENABLE_EXPERIMENTAL_MODELS", description: "Enable experimental models" },
  { title: "OPENCODE_DISABLE_AUTOCOMPACT", description: "Disable automatic context compaction" },
  { title: "OPENCODE_DISABLE_CLAUDE_CODE", description: "Disable reading .claude files (prompt + skills)" },
  { title: "OPENCODE_DISABLE_CLAUDE_CODE_PROMPT", description: "Disable reading ~/.claude/CLAUDE.md" },
  { title: "OPENCODE_DISABLE_CLAUDE_CODE_SKILLS", description: "Disable loading .claude/skills" },
  { title: "OPENCODE_DISABLE_MODELS_FETCH", description: "Disable fetching models from remote sources" },
  { title: "OPENCODE_CLIENT", description: "Client identifier (defaults to 'cli')" },
  { title: "OPENCODE_MODELS_URL", description: "Custom URL for fetching models configuration" },
];

export const experimentalEnvVars: CommandItem[] = [
  { title: "OPENCODE_EXPERIMENTAL", description: "Enable all experimental features (umbrella)" },
  { title: "OPENCODE_EXPERIMENTAL_LSP_TOOL", description: "Enable experimental LSP tool" },
  { title: "OPENCODE_EXPERIMENTAL_PLAN_MODE", description: "Enable plan mode" },
  { title: "OPENCODE_EXPERIMENTAL_BACKGROUND_SUBAGENTS", description: "Enable background subagent tasks" },
  { title: "OPENCODE_EXPERIMENTAL_FILEWATCHER", description: "Enable file watcher for entire directory" },
  { title: "OPENCODE_EXPERIMENTAL_DISABLE_FILEWATCHER", description: "Disable file watcher" },
  { title: "OPENCODE_EXPERIMENTAL_WORKSPACES", description: "Enable workspace support" },
  { title: "OPENCODE_EXPERIMENTAL_SCOUT", description: "Enable Scout subagent" },
  { title: "OPENCODE_EXPERIMENTAL_EVENT_SYSTEM", description: "Enable experimental event system" },
  { title: "OPENCODE_EXPERIMENTAL_NATIVE_LLM", description: "Enable native LLM request path" },
  { title: "OPENCODE_EXPERIMENTAL_PARALLEL", description: "Enable parallel web search execution" },
  { title: "OPENCODE_EXPERIMENTAL_EXA", description: "Enable experimental Exa features" },
  { title: "OPENCODE_EXPERIMENTAL_ICON_DISCOVERY", description: "Enable icon discovery" },
  { title: "OPENCODE_EXPERIMENTAL_DISABLE_COPY_ON_SELECT", description: "Disable copy on select in TUI" },
  { title: "OPENCODE_EXPERIMENTAL_BASH_DEFAULT_TIMEOUT_MS", description: "Default timeout (ms) for bash commands" },
  { title: "OPENCODE_EXPERIMENTAL_OUTPUT_TOKEN_MAX", description: "Max output tokens for LLM responses" },
  { title: "OPENCODE_EXPERIMENTAL_OXFMT", description: "Enable oxfmt formatter" },
  { title: "OPENCODE_EXPERIMENTAL_LSP_TY", description: "Enable TY LSP for Python files" },
];

export const varSubstitution: { syntax: string; desc: string }[] = [
  { syntax: "{env:VARIABLE_NAME}", desc: "Substitute environment variable value" },
  { syntax: "{file:path/to/file}", desc: "Substitute file contents (supports ~ and absolute/relative paths)" },
];

export const comboPatterns: ComboItem[] = [
  {
    title: "Plan → Build",
    description: "Use Plan mode to design, then Build mode to implement.",
    steps: [
      "Press tab to switch to Plan agent",
      "Describe the feature — OpenCode designs the approach",
      "Iterate on the plan with feedback",
      "Press tab to switch back to Build",
      "Say \"Go ahead and make the changes\"",
    ],
    syntax: "tab → describe plan → tab → \"implement it\"",
  },
  {
    title: "/undo + /redo",
    description: "Revert mistakes and restore. Requires Git.",
    steps: [
      "Agent makes wrong changes → type /undo",
      "All file changes are reverted automatically",
      "Tweak your prompt and try again",
      "Changed your mind? /redo restores everything",
    ],
    syntax: "/undo → edit prompt → /redo",
  },
  {
    title: "@file + !bash",
    description: "Reference files and run commands in a single message.",
    steps: [
      "Use @path/to/file to include file contents",
      "Use !git log --oneline -5 to inject command output",
      "Everything is sent as context to the LLM",
    ],
    syntax: "Review @src/index.ts and !npm test",
  },
  {
    title: "opencode run + opencode serve",
    description: "Fast non-interactive queries with a warm server.",
    steps: [
      "Start opencode serve (keeps MCP servers warm)",
      "Run opencode run --attach http://localhost:4096",
      "Bypasses cold boot — responses are instant",
    ],
    syntax: "opencode serve & opencode run --attach http://localhost:4096 \"fix this bug\"",
  },
  {
    title: "Custom /command + $ARGUMENTS",
    description: "Reusable templates with parameters.",
    steps: [
      "Define /component with template using $ARGUMENTS",
      "Run /component Button, /component Modal",
      "Each invocation generates a new component",
    ],
    syntax: "/component Button → /component Modal",
  },
  {
    title: "opencode pr + opencode run",
    description: "Review any PR directly from your terminal.",
    steps: [
      "opencode pr 42 — fetches PR #42, checks out branch",
      "Opens OpenCode ready to review",
    ],
    syntax: "opencode pr 42",
  },
  {
    title: "/export + /share",
    description: "Save and share your work.",
    steps: [
      "/export — saves session as Markdown in your editor",
      "/share — creates a shareable link",
      "Use opencode import <url> to load shared sessions",
    ],
    syntax: "/export → /share → opencode import <url>",
  },
  {
    title: "/sessions + --fork",
    description: "Branch your work without losing context.",
    steps: [
      "Start a session, explore a direction",
      "Use --fork with --continue to branch",
      "Original session remains unchanged",
    ],
    syntax: "opencode --continue --fork",
  },
  {
    title: "Multiple agents",
    description: "Run parallel agents on the same project.",
    steps: [
      "Open multiple terminal tabs",
      "Run opencode in each (same project dir)",
      "Each agent works independently",
    ],
    syntax: "tab 1: \"add auth\" · tab 2: \"write tests\"",
  },
  {
    title: "!`cmd` in custom commands",
    description: "Auto-inject live data into command templates.",
    steps: [
      "Create /analyze-coverage with !`npm test`",
      "Create /review-changes with !`git log --oneline -10`",
      "Every invocation pulls fresh data",
    ],
    syntax: "/analyze-coverage → /review-changes",
  },
  {
    title: "/new + /compact",
    description: "Keep context clean during long sessions.",
    steps: [
      "Session getting long? Hit /compact (or ctrl+x c)",
      "OpenCode summarizes the session to save tokens",
      "Still too long? Start fresh with /new",
    ],
    syntax: "/compact → continue → /new",
  },
  {
    title: "opencode stats + --models",
    description: "Track your usage and optimize costs.",
    steps: [
      "opencode stats --days 30 — last month's usage",
      "opencode stats --models 5 — top 5 models by usage",
    ],
    syntax: "opencode stats --days 7 --models",
  },
];
