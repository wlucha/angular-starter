![Angular Starter Banner](https://user-images.githubusercontent.com/7531596/128626297-df86020b-1cdc-43b5-a692-6c4c45534ec1.png)

<p align="center">
  <a href="https://github.com/wlucha/angular-starter/blob/master/LICENSE"><img src="https://img.shields.io/github/license/wlucha/angular-starter" alt="License"></a>
  <a href="https://github.com/wlucha/angular-starter/stargazers"><img src="https://img.shields.io/github/stars/wlucha/angular-starter?style=social" alt="Stars"></a>
</p>

<p align="center"><strong>A production-ready Angular 22 starter template with modern tooling, testing, and best practices baked in.</strong></p>

---

## Features

| Category | Tool | Description |
|----------|------|-------------|
| **Framework** | Angular 22 | Latest Angular with signals, standalone components & new control flow |
| **UI** | Angular Material | Material Design component library |
| **Styling** | Tailwind CSS 4 | Utility-first CSS framework |
| **Unit Testing** | Jest 30 | Fast, reliable unit tests with `jest-preset-angular` 17 |
| **E2E Testing** | Playwright | Cross-browser E2E tests (Chromium, Firefox, WebKit) |
| **Linting** | ESLint 10 | Static analysis with Angular & TypeScript rules |
| **Formatting** | Prettier | Consistent code formatting |
| **i18n** | Transloco | Runtime internationalization |
| **Documentation** | Compodoc | Auto-generated project documentation |
| **Component Dev** | Storybook 10 | Isolated component development & showcase |
| **Bundle Analysis** | Source Map Explorer | Visualize bundle size & composition |
| **Containerization** | Docker | Production-ready Dockerfile |
| **Commit Quality** | Commitlint + Husky | Enforce conventional commits via Git hooks |
| **Security** | AuditJS | Dependency vulnerability scanning |
| **Changelog** | auto-changelog | Automatically generated CHANGELOG |

---

## Quick Start

```bash
# Clone the repository
git clone https://github.com/wlucha/angular-starter
cd angular-starter

# Install dependencies
npm install

# Start the development server
npm run start
```

Open [http://localhost:4200](http://localhost:4200) in your browser.

### Docker

```bash
docker build . -t angular-starter
docker run -p 3000:80 angular-starter
```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run start` | Start the dev server on `localhost:4200` |
| `npm run build:prod` | Production build with optimizations |
| `npm run test` | Run unit tests with Jest |
| `npm run test:ci` | Run unit tests in CI mode (sequential) |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run e2e` | Run E2E tests with Playwright |
| `npm run lint` | Lint the project with ESLint |
| `npm run prettier` | Format all files with Prettier |
| `npm run storybook` | Launch Storybook on `localhost:6006` |
| `npm run compodoc` | Generate documentation with Compodoc |
| `npm run analyze` | Analyze bundle size with Source Map Explorer |
| `npm run audit` | Audit dependencies for vulnerabilities |

---

## Project Structure

```
angular-starter/
├── src/
│   ├── app/              # Application source code
│   ├── assets/            # Static assets
│   ├── environments/      # Environment configs
│   └── stories/           # Storybook stories
├── tests/                 # Playwright E2E tests
├── angular.json           # Angular CLI configuration
├── jest.config.ts         # Jest configuration
├── playwright.config.ts   # Playwright configuration
├── eslint.config.mjs      # ESLint flat config
└── tsconfig.json          # TypeScript configuration
```

---

## Demo & Deployment

- **Live Demo**: [Open in StackBlitz](https://stackblitz.com/github/wlucha/angular-starter)
- **Deploy to Heroku**: [![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

---

## Contributing

Contributions are welcome! Please read the [Contribution Guidelines](CONTRIBUTING.md) before submitting a PR.

Have a feature request or found a bug? [Open an issue](https://github.com/wlucha/angular-starter/issues).

---

## License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">
  If this project helps you, please give it a ⭐ on <a href="https://github.com/wlucha/angular-starter">GitHub</a>!
</p>
