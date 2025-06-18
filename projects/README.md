# NextJS Project

A modern Next.js application built with TypeScript, featuring a comprehensive development environment and best practices.

## Features

- Next.js 14 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- ESLint and Prettier for code quality
- Jest and React Testing Library for testing
- Husky for git hooks
- Bundle analyzer for optimization

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 8.0.0

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript type checking
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run analyze` - Analyze bundle size

## Project Structure

```
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   ├── contexts/         # React contexts
│   ├── features/         # Feature modules
│   ├── hooks/           # Custom React hooks
│   ├── services/        # API services
│   ├── store/           # State management
│   └── utils/           # Utility functions
├── public/              # Static assets
├── tests/               # Test files
├── types/               # TypeScript type definitions
└── docs/                # Documentation
```

## Environment Variables

Copy `.env.example` to `.env.local` and update the values:

```bash
cp .env.example .env.local
```

## Testing

Run the test suite:

```bash
npm test
```

## Code Quality

This project uses:
- ESLint for linting
- Prettier for code formatting
- Husky for pre-commit hooks
- TypeScript for type checking

## License

This project is private and proprietary.