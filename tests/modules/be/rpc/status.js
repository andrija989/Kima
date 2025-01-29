import { expect } from "@playwright/test";

export class Status {
  constructor(page) {
    this.page = page;
  }

  async getStatus(statusCode = 200) {
    const response = await this.page.request.get(
      `${process.env.BASE_RPC}/status`,
      {
        headers: { Accept: "application/json" },
      }
    );
    expect(response.status()).toBe(statusCode);
    const responseJson = await response.json();
    return responseJson;
  }
}
