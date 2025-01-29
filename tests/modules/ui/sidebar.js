export class Sidebar {
  constructor(page) {
    this.page = page;
    this.homeBtn = page.locator("[href='https://dev-hub.kima.network']");
    this.exploreBtn = page.locator("a[role='button']");
    this.audit = page.getByText("Audit");
    this.certik = page.getByText("Certik");
    this.halborn = page.getByText("Halborn");
    this.cyberscope = page.getByText("Cyberscope");
    this.overviewBtn = page.getByText("Overview");
    this.blocksBtn = page.getByText("Blocks", { exact: true });
    this.transactionsBtn = page.getByText("Transactions", { exact: true });
    this.transfersBtn = page.getByText("Transfers");
    this.validatorsBtn = page.getByText("Validators", { exact: true }).first();
    this.proposalsBtn = page.getByText("Proposals");
    this.paramsBtn = page.getByText("Params");
    this.liquidityBtn = page.getByText("Liquidity");
  }

  async getSidebarAnchorElements(locator) {
    return this.page.locator(`[href*='${locator}']`);
  }
}
