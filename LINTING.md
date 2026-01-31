# Linting & Code Quality

This project uses ESLint and Prettier to maintain code quality and consistent formatting.

## Tools

- **ESLint**: Identifies and reports code quality issues
- **Prettier**: Automatically formats code for consistency
- **TypeScript ESLint**: TypeScript-specific linting rules
- **React Plugins**: React and React Hooks specific rules

## Available Scripts

```bash
# Check for linting errors (fails on warnings)
npm run lint

# Automatically fix linting errors where possible
npm run lint:fix

# Format all files with Prettier
npm run format
```

## VS Code Integration

The `.vscode/settings.json` file configures VS Code to:

- Format code on save using Prettier
- Validate TypeScript and TSX files

### Recommended VS Code Extensions

Install these extensions for the best experience:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Configuration Files

- **`eslint.config.js`**: ESLint configuration (flat config format)
- **`.prettierrc`**: Prettier formatting rules
- **`.eslintignore`**: Files/folders to ignore during linting
- **`.prettierignore`**: Files/folders to ignore during formatting

## Common Issues

### React JSX Errors

If you see errors about unescaped entities (like quotes in JSX), you can:

1. Use the HTML entity: `&quot;` instead of `"`
2. Escape with a backslash: `{\"\"}`
3. Disable the rule for specific lines: `// eslint-disable-next-line react/no-unescaped-entities`

### Unused Variables

Prefix unused variables with underscore `_` to ignore them:

```typescript
const _unusedVar = someValue;
```

## Pre-commit Hooks (Optional)

Consider adding `husky` and `lint-staged` to run linting before commits:

```bash
npm install --save-dev husky lint-staged
npx husky init
```

Then configure `.husky/pre-commit` to run linting on staged files.
