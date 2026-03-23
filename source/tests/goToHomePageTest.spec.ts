import { test as base, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

// Declare the types of your fixtures.
type MyFixtures = {
  homePage: HomePage;
};

// Extend base test by providing "todoPage" and "settingsPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    // Set up the fixture.
    const homePage = new HomePage(page);
    await homePage.goto();

    // Use the fixture value in the test.
    await use(homePage);

    // Clean up the fixture.
    await homePage.removeAll();
  },
});
export { expect } from '@playwright/test';

test('should go to the home page', async ({ homePage, page }) => {
  // Use the fixture value in the test.
  const count = await homePage.addToDo("item");
  expect(count).toBe(2);
}
);