import { expect } from "@playwright/test";

export class General {
  constructor(page) {
    this.page = page;
  }

  async checkPageUrl(url) {
    await expect(this.page).toHaveURL(url);
  }

  async checkTheTypeOfData(data, type) {
    expect(typeof data).toBe(type);
  }

  async visitPage(url) {
    await this.page.goto(url);
    await this.page.waitForLoadState("load");
    await this.checkPageUrl(url);
  }

  async checkForElementVisibility(visible, ...elements) {
    for (const element of elements) {
      visible
        ? await expect(element).toBeVisible()
        : await expect(element).not.toBeVisible();
    }
  }
}
