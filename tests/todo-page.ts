import { Page } from '@playwright/test';

export class TodoPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('http://localhost:3000'); // Adjust URL as needed
  }

  async addToDo(text: string) {
    await this.page.fill('input[placeholder="Add a todo"]', text); // Adjust selector
    await this.page.press('input', 'Enter');
  }

  async removeAll() {
    // Implement cleanup logic
  }
}