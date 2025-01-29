export class HomePage {
  constructor(page) {
    this.page = page;
    this.heading = page.locator("h1:has-text('Kima explorer')");
    this.latestBlocks = page.locator("h3:has-text('Latest Blocks')");
    this.totalTransactions = page.locator("h3:has-text('Total Transactions')");
    this.transfers = page.locator("h3:has-text('Transfers')");
    this.validators = page.locator("h3:has-text('Validators')");
  }
}
