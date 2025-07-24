<p align="center">
  <img src="https://github.com/dunamismax/images/blob/main/javascript/Vanilla-JS-Logo.png" alt="Node.js CLI & API Development Monorepo" width="200" />
</p>

<p align="center">
  <a href="https://github.com/dunamismax/node-cli">
    <img src="https://readme-typing-svg.demolab.com/?font=Fira+Code&size=24&pause=1000&color=F7DF1E&center=true&vCenter=true&width=1000&lines=Node.js+CLI+%26+API+Development+Monorepo;Pure+JavaScript+%2B+Fastify+%2B+Yargs;High-Performance+RESTful+APIs;Interactive+Command-Line+Tools;MongoDB+Native+Driver+Integration;VineJS+Validation+%2B+Error+Handling;Shared+Utilities+%2B+ES+Modules;ESLint+%2B+Prettier+%2B+Code+Quality;Enquirer+Prompts+%2B+Chalk+Styling;Ora+Spinners+%2B+Figlet+Banners;Production+Deployment+Ready;Zero+TypeScript+Overhead;Maximum+Performance+Control;pnpm+Workspaces+%2B+Architecture;Linux+%2B+systemd+%2B+Caddy;4-Step+Development+Setup;Real-World+CLI+Applications;Monorepo+Package+Architecture;Environment+Config+%2B+dotenv;GitHub+Actions+CI%2FCD+Pipeline;MIT+Licensed+Open+Source" alt="Typing SVG" />
  </a>
</p>

<p align="center">
  <a href="#yargs-cli---powerful-command-line-interface"><img src="https://img.shields.io/badge/CLI_Framework-Yargs-FF6B6B.svg" alt="Yargs CLI"></a>
  <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-18+-339933.svg?logo=node.js" alt="Node.js Version"></a>
  <a href="https://fastify.dev/"><img src="https://img.shields.io/badge/Fastify-5.4+-000000.svg?logo=fastify" alt="Fastify Version"></a>
  <a href="https://www.mongodb.com/"><img src="https://img.shields.io/badge/MongoDB-6.18+-47A248.svg?logo=mongodb" alt="MongoDB Version"></a>
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

- **High-Performance APIs** - Fastify server with MongoDB, VineJS validation, and rate limiting
- **Interactive CLI Tools** - Yargs argument parsing with Enquirer prompts and beautiful styling
- **Shared Utilities** - Centralized API responses, logging, validation, and common helpers
- **Real Applications** - RESTful API server and feature-rich CLI with tech stack explorer
- **Modern Toolchain** - ESLint, Prettier, pnpm workspaces for seamless development
- **Production Ready** - Environment configuration, deployment scripts, and security best practices
- **Zero Dependencies** - Pure JavaScript with minimal external dependencies
- **Monorepo Architecture** - Shared packages and independent applications

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
  <img src="https://github.com/dunamismax/images/blob/main/javascript/JavaScript-logo.png" alt="JavaScript" width="100" />
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

## Yargs CLI - Powerful Command-Line Interface

Yargs powers the interactive command-line interface, providing argument parsing, command routing, and help generation for professional CLI applications.

### Key Features

- **Argument Parsing** - Robust command-line argument parsing with validation
- **Interactive Prompts** - Enquirer integration for beautiful interactive experiences
- **Command Routing** - Structured command hierarchy with sub-commands
- **Help Generation** - Automatic help text generation and usage examples
- **Input Validation** - Built-in validation for arguments and options
- **Styling & Feedback** - Chalk colors, Ora spinners, and Figlet banners

### CLI Capabilities

| Feature             | Implementation                        | Benefits                        |
| ------------------- | ------------------------------------- | ------------------------------- |
| Tech Stack Explorer | Interactive browser with filtering    | Discover technologies and tools |
| Project Tools       | Project management and utilities      | Streamline development workflow |
| Utility Functions   | ID generation, validation, formatting | Common development tasks        |
| API Integration     | Direct API calls from CLI             | Unified development experience  |
| Beautiful Output    | Styled text, spinners, progress bars  | Professional user experience    |

## Tech Stack

**Core:** Node.js 18+, Pure JavaScript ES Modules, Fastify, MongoDB Native Driver
**CLI:** Yargs argument parser, Enquirer interactive prompts, Chalk styling, Ora spinners
**API:** VineJS validation, CORS, helmet security, rate limiting middleware
**Shared:** Centralized utilities, logging helpers, response formatting
**Tools:** ESLint, Prettier, pnpm workspaces, environment management
**Deployment:** Linux, systemd process management, Caddy reverse proxy

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
pnpm dev:api         # Start only API server
pnpm dev:cli         # Run CLI in development mode
pnpm install         # Install all workspace dependencies

# Code Quality
pnpm lint            # Lint all JavaScript files with ESLint
pnpm lint:fix        # Auto-fix linting issues
pnpm format          # Format code with Prettier
pnpm format:check    # Check code formatting

# Production
pnpm build           # Build all packages (no compilation needed for JS)
pnpm start           # Start all applications in production mode
pnpm clean           # Clean temporary files and artifacts

# Database
pnpm db:init         # Initialize MongoDB database
pnpm db:seed         # Seed database with sample data
pnpm db:reset        # Reset and reseed database
```

---

<p align="center">
  <img src="https://github.com/dunamismax/images/blob/main/javascript/js-evolution-wallpaper.jpg" alt="JavaScript Evolution" width="450" />
</p>

## Key Features

**High Performance:** Fastify HTTP server with optimized plugins, MongoDB native driver, connection pooling, efficient request handling

**Interactive CLI:** Beautiful command-line interface with Yargs parsing, Enquirer prompts, Chalk styling, Ora spinners, comprehensive help system

**Shared Architecture:** Centralized utilities for API responses, validation helpers, logging system, configuration management, code reusability

**Production Ready:** Environment-based configuration, security middleware, rate limiting, deployment scripts, systemd service management

## Applications

**API Server (Node.js + Fastify):**

- High-performance RESTful API with optimized middleware
- MongoDB integration with native driver and connection pooling
- VineJS schema validation for request/response data
- CORS, helmet security headers, and rate limiting
- Health check endpoints and monitoring capabilities
- Environment-based configuration and secrets management

**CLI Application (Yargs + Enquirer):**

- Interactive tech stack explorer with filtering and search
- Project management tools and development utilities
- Beautiful terminal interface with colors and animations
- Argument parsing with validation and help generation
- Direct integration with API server for data operations
- Utility functions for common development tasks

## CLI Commands

**Tech Stack Explorer:**

```bash
node src/index.js tech-stack --interactive    # Interactive tech stack browser
node src/index.js tech-stack --list          # List all technologies
node src/index.js tech-stack --category cli  # Filter by category
node src/index.js tech-stack --search node   # Search technologies
```

**Project Tools:**

```bash
node src/index.js project --interactive  # Interactive project manager
node src/index.js project --info         # Show project information
node src/index.js project --stats        # Display project statistics
```

**Utility Tools:**

```bash
node src/index.js utils --interactive    # Interactive utility browser
node src/index.js utils --generate id    # Generate unique ID
node src/index.js utils --validate email # Validate email address
node src/index.js utils --format json    # Format JSON data
```

## API Endpoints

**Health & Monitoring:**

```bash
GET /health        # Basic health check
GET /health/ready  # Readiness check with database
GET /health/live   # Liveness check
```

**Tech Stack Management:**

```bash
GET /api/tech-stack            # Get full tech stack
GET /api/tech-stack/categories # Get all categories
GET /api/tech-stack/category/:name # Get technologies by category
POST /api/tech-stack           # Add new technology
```

**User Management:**

```bash
GET    /api/users     # Get all users with pagination
POST   /api/users     # Create user with validation
GET    /api/users/:id # Get user by ID
PUT    /api/users/:id # Update user with validation
DELETE /api/users/:id # Delete user
```

## Environment Setup

**API Server Configuration:**

```bash
MONGODB_URI=mongodb://localhost:27017
DB_NAME=node_cli_db
PORT=3000
HOST=0.0.0.0
NODE_ENV=development
```

**CLI Application Configuration:**

The CLI application requires no additional configuration and works out of the box. Optional settings can be configured through command-line arguments or environment variables.

## Production Deployment

**Quick Deploy:**

```bash
pnpm build    # Prepare for production
pnpm start    # Start production mode
```

**Self-Hosting:** Use systemd services and Caddy reverse proxy for production deployment on Linux servers. Applications are configured for environment-based settings and secure database connections.

## Contributing

1. Fork and create feature branch
2. Make changes following existing patterns and architecture
3. Run `pnpm lint && pnpm format && pnpm build`
4. Test changes in both development and production modes
5. Submit pull request with clear description

**Code Style:** Uses ESLint and Prettier with shared configurations from `@node-cli/shared-config`

## Author

<img src="https://gravatar.com/nachounabashed3164d5c433" alt="dunamismax" width="80" style="border-radius: 50%;" />

**dunamismax** - Creator and maintainer of this Node.js CLI & API Development Monorepo.

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
  <img src="https://github.com/dunamismax/images/blob/main/javascript/js-coffee-particles.jpg" alt="JavaScript Coffee" width="450" />
</p>
