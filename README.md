# Exercice for NUAAV

### Project overview

This project is a robust End-to-End (E2E) automation framework developed for the SauceDemo e-commerce platform. It leverages Playwright for fast and reliable execution, integrated with **Cucumber (BDD)** to ensure test scenarios are human-readable and align with business requirements.

### Folder structure

![architecture](bdd_folder_structure.png)

The framework implements the Page Object Model (POM) design pattern to enhance code reusability and simplify maintenance.

### Tools used

    Language: TypeScript
    Core Engine: @playwright/test 1.59
    BDD Integration: @playwright-bdd 8.5.0.
    Reporting: allure-playwright 3.7.1

# Installation

```bash
#Install dependencies
npm install .
#Install playwright
npx playwright install
#generate the tests based on the feature files
npx bddgen
```

# Running the tests

### Running all the suite

```bash
npx playwright test
```

### Running the tests on a specific browser (by default they are executed in parallel)

```bash
npx playwright test --project chromium
```

### Filtering by tags

```bash
npx playwright test -g @smoke --project chromium
```

### Different browsers

```bash
npx playwright test --project webkit -g @smoke
```

### Number of workers

```bash
npx playwright test --workers=2
```

## Report

```bash
#Generate report
allure generate
#Serve the report
allure serve allure-results
```
