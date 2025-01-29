export class Header {
  constructor(page) {
    this.page = page;
    this.searchBar = page.locator("input");
    this.connectKeplr = page.getByText("Connect Keplr");
  }
}
