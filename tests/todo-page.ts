import { Page } from '@playwright/test';

export class TodoPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('http://google.com'); // Adjust URL as needed
  }

  async addToDo(text: string) {
    await this.page.fill('#APjFqb', text); // Adjust selector
  }

  async removeAll() {
    // Implement cleanup logic
  }
}