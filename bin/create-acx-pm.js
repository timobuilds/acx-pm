#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const os = require("os");

const ROOT = path.join(__dirname, "..", "acx-pm");
const PLUGIN_JSON = path.join(ROOT, ".cursor-plugin", "plugin.json");

const c = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
  cyan: "\x1b[36m",
};

function log(msg) {
  console.log(msg);
}

function fail(msg) {
  console.error(`${c.red}Error:${c.reset} ${msg}`);
  process.exit(1);
}

function readVersion() {
  try {
    const manifest = JSON.parse(fs.readFileSync(PLUGIN_JSON, "utf8"));
    return manifest.version || "unknown";
  } catch {
    return "unknown";
  }
}

function parseArgs(argv) {
  const opts = {
    target: "cursor-global",
    force: false,
    help: false,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    switch (arg) {
      case "--help":
      case "-h":
        opts.help = true;
        break;
      case "--force":
      case "-f":
        opts.force = true;
        break;
      case "--project":
      case "-p":
        opts.target = "cursor-project";
        break;
      case "--claude":
        opts.target = "claude-global";
        break;
      case "--global":
      case "-g":
        opts.target = "cursor-global";
        break;
      default:
        fail(`Unknown option: ${arg}\nRun create-acx-pm --help for usage.`);
    }
  }

  return opts;
}

function resolveDest(target) {
  switch (target) {
    case "cursor-global":
      return path.join(os.homedir(), ".cursor", "skills", "acx-pm");
    case "cursor-project":
      return path.join(process.cwd(), ".cursor", "skills", "acx-pm");
    case "claude-global":
      return path.join(os.homedir(), ".claude", "skills", "acx-pm");
    default:
      fail(`Unknown target: ${target}`);
  }
}

function copyEntry(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src)) {
      copyEntry(path.join(src, entry), path.join(dest, entry));
    }
    return;
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}

function installPlugin(dest, force) {
  if (!fs.existsSync(ROOT)) {
    fail(`Plugin source not found at ${ROOT}. Reinstall create-acx-pm.`);
  }

  if (fs.existsSync(dest) && !force) {
    fail(
      `Already installed at ${dest}\nRe-run with ${c.cyan}--force${c.reset} to overwrite.`,
    );
  }

  if (fs.existsSync(dest)) {
    fs.rmSync(dest, { recursive: true, force: true });
  }

  fs.mkdirSync(dest, { recursive: true });
  copyEntry(path.join(ROOT, "skills"), path.join(dest, "skills"));
  fs.copyFileSync(
    path.join(ROOT, "CONVENTIONS.md"),
    path.join(dest, "CONVENTIONS.md"),
  );
}

function printHelp() {
  log(`
${c.bold}create-acx-pm${c.reset} — install acx-pm skills locally

${c.bold}Usage${c.reset}
  npx create-acx-pm [options]

${c.bold}Options${c.reset}
  ${c.cyan}-g, --global${c.reset}     Install to ~/.cursor/skills/acx-pm ${c.dim}(default)${c.reset}
  ${c.cyan}-p, --project${c.reset}    Install to ./.cursor/skills/acx-pm in the current directory
      ${c.cyan}--claude${c.reset}     Install to ~/.claude/skills/acx-pm (Claude Code / Cowork)
  ${c.cyan}-f, --force${c.reset}      Overwrite an existing install
  ${c.cyan}-h, --help${c.reset}       Show this help

${c.bold}Examples${c.reset}
  npx create-acx-pm
  npx create-acx-pm --project
  npx github:timobuilds/acx-pm -- --claude

${c.bold}Note${c.reset}
  This installs skills only. For managed updates via Cursor Customize, use the
  ACX team marketplace instead (see README).
`);
}

function main() {
  const opts = parseArgs(process.argv.slice(2));
  if (opts.help) {
    printHelp();
    return;
  }

  const version = readVersion();
  const dest = resolveDest(opts.target);

  log("");
  log(`${c.bold}acx-pm${c.reset} ${c.dim}v${version}${c.reset}`);
  log(`${c.dim}Installing to${c.reset} ${dest}`);
  log("");

  installPlugin(dest, opts.force);

  log(`${c.green}✓${c.reset} Installed 15 skills + CONVENTIONS.md`);
  log("");
  log(`${c.bold}Next steps${c.reset}`);
  log(`  1. Enable MCPs in Cursor Settings → Plugins (Slack, Atlassian, …)`);
  log(`  2. Open a new Agent chat and run ${c.cyan}/setup${c.reset}`);
  log("");
  log(
    `${c.dim}Team marketplace install (recommended for ACX PMs): see github.com/timobuilds/acx-pm${c.reset}`,
  );
  log("");
}

main();
