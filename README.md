<p align="center">
  <img src="https://github.com/dunamismax/images/blob/main/Vanilla-JS-Logo.png" alt="Node.js CLI & API Monorepo" width="200" />
</p>

<p align="center">
  <a href="https://github.com/dunamismax/node-cli">
    <img src="https://readme-typing-svg.demolab.com/?font=Fira+Code&size=24&pause=1000&color=F7DF1E&center=true&vCenter=true&width=1000&lines=Node.js+CLI+%26+API+Development+Monorepo;Pure+JavaScript+%2B+Fastify+%2B+Yargs;High-Performance+RESTful+APIs;Interactive+Command-Line+Tools;MongoDB+Native+Driver+Integration;VineJS+Validation+%2B+Error+Handling;Shared+Utilities+%2B+ES+Modules;ESLint+%2B+Prettier+%2B+Code+Quality;Enquirer+Prompts+%2B+Chalk+Styling;Ora+Spinners+%2B+Figlet+Banners;Production+Deployment+Ready;Zero+TypeScript+Overhead;Maximum+Performance+Control;pnpm+Workspaces+%2B+Architecture;Linux+%2B+systemd+%2B+Caddy;4-Step+Development+Setup;Real-World+CLI+Applications;Monorepo+Package+Architecture;Environment+Config+%2B+dotenv;GitHub+Actions+CI%2FCD+Pipeline;MIT+Licensed+Open+Source" alt="Typing SVG" />
  </a>
</p>

<p align="center">
  <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-18+-339933.svg?logo=node.js" alt="Node.js Version"></a>
  <a href="https://www.fastify.io/"><img src="https://img.shields.io/badge/Fastify-4.25+-000000.svg?logo=fastify" alt="Fastify Version"></a>
  <a href="https://yargs.js.org/"><img src="https://img.shields.io/badge/CLI-Yargs-FF6B6B.svg?logo=terminal" alt="Yargs CLI"></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/Pure_JS-ES2022+-F7DF1E.svg?logo=javascript" alt="Pure JavaScript"></a>
  <a href="https://eslint.org/"><img src="https://img.shields.io/badge/Code_Quality-ESLint-4B32C3.svg?logo=eslint" alt="ESLint"></a>
  <a href="https://prettier.io/"><img src="https://img.shields.io/badge/Code_Format-Prettier-F7B93E.svg?logo=prettier" alt="Prettier"></a>
  <a href="https://pnpm.io/"><img src="https://img.shields.io/badge/Package_Manager-pnpm-F69220.svg?logo=pnpm" alt="pnpm"></a>
  <a href="https://caddyserver.com/"><img src="https://img.shields.io/badge/Deploy-Caddy-1F88C0.svg" alt="Caddy"></a>
  <a href="https://www.linux.org/"><img src="https://img.shields.io/badge/Platform-Linux-FCC624.svg?logo=linux" alt="Linux"></a>
  <a href="https://systemd.io/"><img src="https://img.shields.io/badge/Process-systemd-000000.svg" alt="systemd"></a>
  <a href="https://docs.github.com/en/actions"><img src="https://img.shields.io/badge/CI%2FCD-GitHub_Actions-2088FF.svg?logo=github-actions" alt="GitHub Actions"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-green.svg" alt="MIT License"></a>
</p>

---

# Node.js CLI & API Development Monorepo

A production-ready Node.js monorepo featuring high-performance RESTful APIs and interactive command-line tools. Built with Fastify, Yargs, MongoDB, and pure JavaScript. Create scalable backend services and powerful CLI applications with shared utilities and modern development practices.

## Features

- **High-Performance APIs** with Fastify, MongoDB, and VineJS validation
- **Interactive CLI Tools** with Yargs, Enquirer prompts, and beautiful styling
- **Shared Utilities** including API responses, logging, validation, and common helpers
- **Real Applications** RESTful API server and feature-rich CLI with tech stack explorer
- **Development Tools** ESLint, Prettier, and pnpm workspaces for seamless development
- **Production Ready** environment configuration, deployment scripts, and security best practices

## Project Structure

```sh
├── apps/
│   ├── node-api/              # Fastify RESTful API with MongoDB
│   └── node-cli/              # Interactive CLI with Yargs and Enquirer
├── packages/
│   ├── shared-utils/          # API responses, validation, logging utilities
│   └── shared-config/         # ESLint configuration for JavaScript
├── scripts/                   # Setup and deployment scripts
└── Configuration files        # ESLint, Prettier, pnpm workspaces
```

---

<p align="center">
  <img src="https://github.com/dunamismax/images/blob/main/JavaScript-logo.png" alt="JavaScript" width="100" />
</p>

## Quick Start

**Prerequisites:** [Node.js 18+](https://nodejs.org/) and [pnpm 8+](https://pnpm.io/)

### Get Running in 4 Steps

```bash
# 1. Clone and install
git clone https://github.com/dunamismax/node-cli.git
cd node-cli && pnpm install

# 2. Configure environment (optional MongoDB connection)
cp .env.example .env
# Edit .env with your MongoDB URI if needed

# 3. Start development servers
pnpm dev

# 4. Test the CLI application
cd apps/node-cli && node src/index.js --help
```

**Access:** API server at `http://localhost:3000`, CLI tools available via command line

## Tech Stack

**Core:** Node.js 18+, Pure JavaScript ES Modules, Fastify, MongoDB Native Driver
**CLI:** Yargs argument parser, Enquirer interactive prompts, Chalk styling, Ora spinners
**Shared:** VineJS validation, API response utilities, logging helpers
**Tools:** ESLint, Prettier, pnpm workspaces, environment management
**Deployment:** Linux, systemd, Caddy reverse proxy

<p align="center">
  <img src="https://github.com/dunamismax/images/blob/main/js-evolution-wallpaper.jpg" alt="JavaScript Evolution" width="450" />
</p>

## Architecture

**Monorepo Structure:** pnpm workspaces with shared packages and independent applications

- **`@node-cli/shared-utils`** - API responses, validation helpers, logging utilities, common functions
- **`@node-cli/shared-config`** - ESLint configuration optimized for JavaScript development
- **`@node-cli/api`** - High-performance Fastify server with MongoDB, CORS, rate limiting, and security
- **`@node-cli/cli`** - Interactive command-line application with tech stack explorer, project tools, and utilities

## Development Scripts

```bash
# Development
pnpm dev             # Start all applications in development mode
pnpm install         # Install all workspace dependencies

# Code Quality
pnpm lint            # Lint all JavaScript files with ESLint
pnpm format          # Format code with Prettier
pnpm format:check    # Check code formatting

# Production
pnpm build           # Build all packages (no compilation needed for JS)
pnpm start           # Start all applications in production mode
```

## Key Features

**Fastify API Server:** High-performance HTTP server with plugins for CORS, helmet, rate limiting
**MongoDB Integration:** Native driver with connection pooling and error handling
**VineJS Validation:** Fast and lightweight schema validation for API endpoints
**Interactive CLI:** Beautiful command-line interface with prompts, spinners, and styled output
**Shared Utilities:** Centralized API response formatting, logging, and validation helpers
**Development Tools:** Hot reload with --watch, code formatting, and quality checks

## Environment Setup

**API Server** (`.env`):

```bash
MONGODB_URI=mongodb://localhost:27017
DB_NAME=node_cli_db
PORT=3000
HOST=0.0.0.0
```

**CLI Application** requires no additional configuration and works out of the box

## Production Deployment

**Quick Deploy:**

```bash
pnpm build    # Prepare for production
pnpm start    # Production mode
```

**Self-Hosting:** Use systemd services and Caddy reverse proxy for production deployment on Linux servers. Applications are configured for environment-based settings and secure database connections.

## Code Examples

**Using Shared API Responses:**

```javascript
import {
  createSuccessResponse,
  createErrorResponse,
} from "@node-cli/shared-utils";

// Success response
return createSuccessResponse({ users: allUsers });

// Error response
return createErrorResponse("User not found");
```

**CLI Interactive Prompts:**

```javascript
import enquirer from "enquirer";
const { Select, Input } = enquirer;

const prompt = new Select({
  name: "action",
  message: "What would you like to do?",
  choices: ["Create", "Update", "Delete"],
});

const answer = await prompt.run();
```

**Fastify Route with Validation:**

```javascript
import { createUserSchema } from "../schemas/user.js";

server.post("/", async (request, reply) => {
  const validatedData = await createUserSchema.validate(request.body);
  // Handle validated data
});
```

**MongoDB Operations:**

```javascript
import { getDatabase } from "../database.js";

const db = getDatabase();
const users = db.collection("users");
const allUsers = await users.find({}).toArray();
```

## CLI Commands

**Tech Stack Explorer:**

```bash
node src/index.js tech-stack --interactive    # Interactive tech stack browser
node src/index.js tech-stack --list          # List all technologies
node src/index.js tech-stack --category cli  # Filter by category
```

**Project Tools:**

```bash
node src/index.js project --interactive  # Interactive project manager
node src/index.js project --info         # Show project information
```

**Utility Tools:**

```bash
node src/index.js utils --interactive    # Interactive utility browser
node src/index.js utils --generate id    # Generate unique ID
node src/index.js utils --validate email # Validate email address
```

## API Endpoints

**Health Checks:**

```bash
GET /health        # Basic health check
GET /health/ready  # Readiness check
```

**Tech Stack:**

```bash
GET /api/tech-stack            # Get full tech stack
GET /api/tech-stack/categories # Get all categories
GET /api/tech-stack/category/cli # Get technologies by category
```

**User Management:**

```bash
GET    /api/users     # Get all users
POST   /api/users     # Create user
GET    /api/users/:id # Get user by ID
PUT    /api/users/:id # Update user
DELETE /api/users/:id # Delete user
```

## Contributing

1. Fork and create feature branch
2. Make changes following existing patterns
3. Run `pnpm lint && pnpm format`
4. Submit pull request

**Code Style:** Uses ESLint and Prettier with shared configurations from `@node-cli/shared-config`

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  <a href="https://www.buymeacoffee.com/dunamismax">
    <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" >
  </a>
</p>

<p align="center">
  <a href="https://twitter.com/dunamismax" target="_blank"><img src="https://img.shields.io/badge/Twitter-%231DA1F2.svg?&style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter"></a>
  <a href="https://bsky.app/profile/dunamismax.bsky.social" target="_blank"><img src="https://img.shields.io/badge/Bluesky-blue?style=for-the-badge&logo=bluesky&logoColor=white" alt="Bluesky"></a>
  <a href="https://reddit.com/user/dunamismax" target="_blank"><img src="https://img.shields.io/badge/Reddit-%23FF4500.svg?&style=for-the-badge&logo=reddit&logoColor=white" alt="Reddit"></a>
  <a href="https://discord.com/users/dunamismax" target="_blank"><img src="https://img.shields.io/badge/Discord-dunamismax-7289DA.svg?style=for-the-badge&logo=discord&logoColor=white" alt="Discord"></a>
  <a href="https://signal.me/#p/+dunamismax.66" target="_blank"><img src="https://img.shields.io/badge/Signal-dunamismax.66-3A76F0.svg?style=for-the-badge&logo=signal&logoColor=white" alt="Signal"></a>
</p>

---

<p align="center">
  <strong>Node.js CLI & API Development Monorepo</strong><br>
  <sub>Pure JavaScript • Node.js • Fastify • Yargs • MongoDB • pnpm Workspaces • Linux • Self-Hosted</sub>
</p>

<p align="center">
  <img src="https://github.com/dunamismax/images/blob/main/js-coffee-particles.jpg" alt="JavaScript Coffee" width="450" />
</p>
