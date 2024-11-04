# 🐺

# awrfstack

A minimal monorepo setup containing a sample Next.js web application under `apps/web`.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed (v18 or higher recommended).
- **pnpm**: This project uses `pnpm` as the package manager for efficient workspace handling.

  Install `pnpm` globally if not already installed:

  if you have npm already installed
  ```bash
  npm install -g pnpm
  ```

  or with standalone (POSIX)
  ```
  curl -fsSL https://get.pnpm.io/install.sh | sh -
  ```


## Getting Started
```bash
git clone <https://github.com/koda-git/awrfstack>
cd awrfstack
```

## Install Dependencies
Run the following command to install dependencies across the full-stack repo
```bash
pnpm install
```

## Run the sample webserver
Navigate to the web folder  and run the sample nextJS app
```bash
cd apps/web
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

