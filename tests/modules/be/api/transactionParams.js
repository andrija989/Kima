import { expect } from "@playwright/test";

export class TransactionParamsAPI {
  constructor(page) {
    this.page = page;
  }

  async getTransactionParams(statusCode = 200) {
    const response = await this.page.request.get(
      `${process.env.BASE_API}/kima-finance/kima-blockchain/transaction/params`,
      {
        headers: { Accept: "application/json" },
      }
    );
    expect(response.status()).toBe(statusCode);
    const responseJson = await response.json();
    return responseJson;
  }
}
