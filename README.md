# LintingFormattingPractice - ESLint and Prettier

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

## Project Description

This Angular project has been configured to use ESLint for linting and Prettier for code formatting. The setup includes a pre-commit hook using Husky to ensure that linting and formatting checks are performed before each commit. The goal is to maintain high code quality and consistency throughout the project.

## Setup Instructions

### 1. Clone the Repository

Clone the repository using the following command:

```bash
git clone https://github.com/RhodyArthur/angular-code-quality-enforcer.git
cd angular-code-quality-enforcer
```

#### 2. Install Dependencies
Install the necessary dependencies using npm

```bash
    npm install
```

## Configure ESLint
```bash
    ng add @angular-eslint/schematics
```
This creates the .eslintrc.json file. It also updates the angular.json and package.json files.
Added custom rules: 
 - semi and quotes.
 - @typescript-eslint/no-explicit-any: Ensures explicit usage of any type is avoided.

## Fix Linting Errors and Warnings
Run ESlint
```bash
    ng lint
```

Initial results:

5 errors
4 warnings related to the use of single quotes in app.component.ts.
Fixes Applied
Created an interface to replace the usage of any type.
Updated code to adhere to single quote conventions.

Run ESLint again to confirm all issues are resolved:
```bash
    ng lint
```


## Integrate Prettier
Install Prettier and Related Packages
```bash
    npm install --save-dev prettier eslint-plugin-prettier eslint-config-prettier
```

Creates .prettierrc file
Adds settings that ensures:
- Use of 4 spaces for indentation.
- Adherence to single quotes for strings.
- Semicolons at the end of statements.

## Configure Prettier to Work with ESLint
Add "plugin:prettier/recommended" to the extends array


## npm Scripts for Linting and Formatting
```bash
    `npm start`: Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
    `ng lint`: Executes linting checks for the Angular project.
    `prettier --write .`: Formats all code files in the project directory according to Prettier's rules.
    `prettier --check .`: Checks all code files in the project directory for formatting issues without making any changes.
    `npm run lint:fix && npm run format`: Executes linting fixes followed by code formatting
```

## Set Up a Pre-Commit Hook Using Husky
Install Husky and Lint-Staged: this creates husky directory with pre-commit file and other files
```bash
    npm install --save-dev husky lint-staged
```

Add the following content to the .husky/pre-commit file:
```bash
    npx lint-staged
```

