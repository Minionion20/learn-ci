import { Page } from "@playwright/test";

export class FreeTrialPage {
    readonly page: Page;
    
    constructor(page : Page) {
        this.page = page;
    }

    async fillForm() {
        await this.page.fill('#firstName', 'John');
        await this.page.fill('#lastName', 'Doe');
        await this.page.fill('#email', 'joe');
    }


}