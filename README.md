# Exercice for NUAAV

### Project overview

This project is a robust End-to-End (E2E) automation framework developed for the SauceDemo e-commerce platform. It leverages Playwright for fast and reliable execution, integrated with **Cucumber (BDD)** to ensure test scenarios are human-readable and align with business requirements.

### Key Features

- Gherkin Scenarios: Test cases defined in natural language (Given, When, Then) for better stakeholder collaboration.
- Cross-Browser Support: Pre-configured execution across Chromium, Firefox, and WebKit.
- Parallel Execution: Utilizes Playwright's native sharding to significantly reduce CI/CD execution time.
- State Management: Efficient authentication handling by reusing signed-in browser states.
- Artifact Collection: Automatic screenshots, video recording, and trace logs generated upon test failure.

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
npx playwright test --project "chromium"
```

### Filtering by tags

```bash
npx playwright test -g "@smoke"
```

### Different browsers

```bash
npx playwright test --project "webkit"
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

# Onboarding a Junior Engineer

To ensure a seamless integration into the team, it is essential to first conduct a thorough assessment of his strengths and areas for improvement. Beyond identifying these core competencies, we should place a strong emphasis on his technical proficiency, specifically regarding his mastery of the current toolset and his commitment to industry-standard best practices.

Furthermore, we aim to cultivate his critical thinking capabilities. This will enable him to move beyond routine execution, allowing for a more analytical approach when diagnosing and resolving the complex, daily challenges inherent in the QA lifecycle. By balancing technical skill with proactive problem-solving, he will be better equipped to contribute to the team's overall quality goals.
