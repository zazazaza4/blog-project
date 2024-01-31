## Scripts

- `npm run start` - Start the frontend project on webpack dev server
- `npm run start:vite` - Start the frontend project on vite
- `npm run start:dev` - Start the frontend project on webpack dev server + backend
- `npm run start:dev:vite` - Start the frontend project on vite + backend
- `npm run start:dev:server` - Start the backend server
- `npm run build:prod` - Build in production mode
- `npm run build:dev` - Build in dev mode (not minimized)
- `npm run lint:ts` - Check ts files with linter
- `npm run lint:ts:fix` - Fix ts files with linter
- `npm run lint:scss` - Check scss files with style linter
- `npm run lint:scss:fix` - Fix scss files with style linter
- `npm run test:unit` - Run unit tests with jest
- `npm run test:ui` - Run screenshot tests with loki
- `npm run test:ui:ok` - Confirm new screenshots
- `npm run test:ui:ci` - Run screenshot tests in CI
- `npm run test:ui:report` - Generate a full report for screenshot tests
- `npm run test:ui:json` - Generate a JSON report for screenshot tests
- `npm run test:ui:html` - Generate an HTML report for screenshot tests
- `npm run storybook` - Run Storybook
- `npm run storybook:build` - Build Storybook
- `npm run prepare` - Pre-commit hooks
- `npm run generate:slice` - Script to generate FSD slices

----

## Project Architecture

The project follows the Feature Sliced Design methodology.

Documentation for Feature Sliced Design - [Feature Sliced Design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Working with Translations

The project uses the i18next library for handling translations.
Translation files are stored in public/locales.

For a more comfortable workflow, it's recommended to install a plugin for WebStorm/VSCode.

i18next documentation - [https://react.i18next.com/](https://react.i18next.com/)

----

## Tests

The project utilizes 4 types of tests:
1) Regular unit tests with Jest - `npm run test:unit`
2) Component tests with React Testing Library - `npm run test:unit`
3) Snapshot testing with Loki - `npm run test:ui`
4) End-to-end (e2e) testing with Cypress - `npm run test:e2e`

More about tests - [Testing Documentation](/docs/tests.md)

----

## Linting

The project uses ESLint for checking TypeScript code and Stylelint for checking style files.

Additionally, for strict control over major architectural principles,
a custom ESLint plugin *eslint-plugin-ulbi-tv-plugin* is used,
which includes 3 rules:
1) path-checker - prohibits the use of absolute imports within the same module
2) layer-imports - checks the correctness of layer usage from the FSD perspective
   (for example, widgets cannot be used in features and entities)
3) public-api-imports - allows importing from other modules only from the public API. Has auto-fix.

##### Running linters
- `npm run lint:ts` - Check ts files with linter
- `npm run lint:ts:fix` - Fix ts files with linter
- `npm run lint:scss` - Check scss files with style linter
- `npm run lint:scss:fix` - Fix scss files with style linter

----

## Storybook

For each component in the project, story cases are described.
Server requests are mocked using storybook-addon-mock.

The file with story cases is created next to the component with the extension .stories.tsx.

You can run Storybook with the command:
- `npm run storybook`

More about [Storybook](/docs/storybook.md)

## Project Configuration

For development, the project contains 2 configurations:
1. Webpack - ./config/build
2. Vite - vite.config.ts

Both builders are adapted for the main features of the application.

All configurations are stored in /config:
- /config/babel - babel
- /config/build - webpack configuration
- /config/jest - test environment configuration
- /config/storybook - storybook configuration

Various scripts for refactoring, simplifying code writing, generating reports, etc., can be found in the `scripts` folder.

----

## CI Pipeline and Pre-commit Hooks

The GitHub Actions configuration is located in /.github/workflows.
In CI, all types of tests, project and storybook builds, and linting are executed.

In pre-commit hooks, the project is checked by linters. The configuration is in /.husky.

----

### Working with Data

Data interaction is done using Redux Toolkit.
Whenever possible, reusable entities should be normalized using EntityAdapter.

Server requests are sent using [RTK query](/src/shared/api/rtkApi.ts).

For asynchronously connecting reducers (to avoid pulling them into a common bundle), [DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx) is used.

----


## Entities

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Features

- [addCommentForm](/src/features/addCommentForm)
- [articleEditForm](/src/features/articleEditForm)
- [articleRating](/src/features/articleRating)
- [articleRecommendationsList](/src/features/articleRecommendationsList)
- [AuthByUsername](/src/features/AuthByUsername)
- [avatarDropdown](/src/features/avatarDropdown)
- [editableProfileCard](/src/features/editableProfileCard)
- [LangSwitcher](/src/features/LangSwitcher)
- [notificationButton](/src/features/notificationButton)
- [profileRating](/src/features/profileRating)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
- [UI](/src/features/UI)
