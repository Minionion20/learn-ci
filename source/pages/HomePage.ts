import { expect, Page } from '@playwright/test';
import { FreeTrialPage } from '../pages/FreeTrialPage';
import { env } from 'node:process';

import { BasePage } from './BasePage';

export class HomePage extends BasePage{

  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await this.page.goto(env.OREILLY_LOGIN_PAGE || 'http://google.com');
    expect(this.page.title()).resolves.toContain('Oreilly'); // Adjust URL as needed
  }

  async addToDo(text: string) {
    await this.page.fill('#APjFqb', text); // Adjust selector
  }

  async removeAll() {
    // Implement cleanup logic
  }

  async goToTrialPage() : Promise<FreeTrialPage> {
    await this.page.getByRole('link', { name: 'Start a free trial' }).click(); // Adjust selector
    return new FreeTrialPage(this.page);
  }
}