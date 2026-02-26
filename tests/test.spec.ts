import { test as base, expect } from '@playwright/test';
import { TodoPage } from './todo-page.ts';

// Declare the types of your fixtures.
type MyFixtures = {
  todoPage: TodoPage;
};

// Extend base test by providing "todoPage" and "settingsPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
  todoPage: async ({ page }, use) => {
    // Set up the fixture.
    const todoPage = new TodoPage(page);
    await todoPage.goto();
    await todoPage.addToDo('item1');
    await todoPage.addToDo('item2');

    // Use the fixture value in the test.
    await use(todoPage);

    // Clean up the fixture.
    await todoPage.removeAll();
  },
});
export { expect } from '@playwright/test';

test('should have 2 items in the list', async ({ todoPage }) => {
  // Use the fixture value in the test.
  const count = await todoPage.addToDo("item");
  expect(count).toBe(2);
}
);