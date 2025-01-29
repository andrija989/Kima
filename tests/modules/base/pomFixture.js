import { test as baseTest } from "@playwright/test";
import { HomePage } from "../ui/homePage";
import { General } from "../ui/general";
import { Header } from "../ui/header";
import { Sidebar } from "../ui/sidebar";
import { Status } from "../be/rpc/status";
import { TransactionParamsAPI } from "../be/api/transactionParams";

const testPages = baseTest.extend({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  general: async ({ page }, use) => {
    await use(new General(page));
  },
  header: async ({ page }, use) => {
    await use(new Header(page));
  },
  sidebar: async ({ page }, use) => {
    await use(new Sidebar(page));
  },
  status: async ({ page }, use) => {
    await use(new Status(page));
  },
  transactionParamsAPI: async ({ page }, use) => {
    await use(new TransactionParamsAPI(page));
  },
});

export const test = testPages;
