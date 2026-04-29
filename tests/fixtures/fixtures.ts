import { test as base, createBdd } from 'playwright-bdd';
import * as Pages from '../pages/index';
import { Page } from 'playwright-core';

type MyFixtures = {
  loginPage: Pages.LoginPage;
};

const createTestFunction =
  <T extends new (page: Page) => InstanceType<T>>(PageClass: T) =>
  (
    { page }: { page: Page },
    use: (fixture: InstanceType<T>) => Promise<void>
  ) =>
    use(new PageClass(page));

export const test = base.extend<MyFixtures>({
  loginPage: createTestFunction(Pages.LoginPage),
});
