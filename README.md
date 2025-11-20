# Windows 7 Retro Theme

A retro-styled web application featuring a fully functional Windows 7 desktop environment, built with modern web technologies.

## Features

| Feature               | Description                                                                |
| :-------------------- | :------------------------------------------------------------------------- |
| **Retro UI**          | Authentic Windows 7 aesthetic with Aero glass effects and classic styling. |
| **Window Management** | Draggable, minimizable, and maximizable windows.                           |
| **Start Menu**        | Functional Start Menu with classic navigation structure.                   |
| **Authentication**    | Secure authentication system powered by Better Auth and Neon Postgres.     |
| **Modern Stack**      | Built on Next.js 16 and React 19 for high performance.                     |

## Tech Stack

| Component      | Technology              |
| :------------- | :---------------------- |
| **Framework**  | Next.js 16 (App Router) |
| **Language**   | TypeScript              |
| **Styling**    | Tailwind CSS v4         |
| **Auth**       | Better Auth             |
| **Database**   | Neon (PostgreSQL)       |
| **UI Library** | Radix UI                |

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/cHANGTEEZY/windows.git
   cd windows
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your database and auth configuration.

4. Run database migrations:

   ```bash
   pnpm dlx @better-auth/cli migrate
   ```

5. Start the development server:
   ```bash
   pnpm dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

| Script  | Command      | Description                                       |
| :------ | :----------- | :------------------------------------------------ |
| `dev`   | `next dev`   | Starts the development server.                    |
| `build` | `next build` | Builds the application for production.            |
| `start` | `next start` | Runs the built application in production mode.    |
| `lint`  | `eslint`     | Runs the linter to check for code quality issues. |

## License

Distributed under the MIT License. See `LICENSE` for more information.
