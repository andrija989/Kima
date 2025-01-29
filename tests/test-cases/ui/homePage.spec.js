import { test } from "../../modules/base/pomFixture";
import { expect } from "@playwright/test";
import { STATUS_CODES, HREF_ELEMENTS, URL_PATHS } from "../../../fixtures";

test.describe("Home page tests", async () => {
  test.beforeEach("Visit page", async ({ general, page }) => {
    const responsePromise = page.waitForResponse(URL_PATHS.SARDIS);
    await general.visitPage("");
    const response = await responsePromise;
    const statusCode = response.status();
    expect(statusCode).toBe(STATUS_CODES.OK);
  });

  test("Assert header elements on home page", async ({ general, header }) => {
    await general.checkForElementVisibility(
      true,
      await header.searchBar,
      await header.connectKeplr
    );
  });

  test("Assert sidebar elements on home page", async ({ general, sidebar }) => {
    await general.checkForElementVisibility(
      true,
      await sidebar.homeBtn,
      await sidebar.exploreBtn,
      await sidebar.getSidebarAnchorElements(HREF_ELEMENTS.DELEGATE),
      await sidebar.getSidebarAnchorElements(HREF_ELEMENTS.CLAIM),
      await sidebar.getSidebarAnchorElements(HREF_ELEMENTS.BRIDGE),
      await sidebar.getSidebarAnchorElements(HREF_ELEMENTS.EARN),
      await sidebar.getSidebarAnchorElements(HREF_ELEMENTS.ECOSYSTEM),
      await sidebar.getSidebarAnchorElements(HREF_ELEMENTS.TUTORIALS),
      await sidebar.audit,
      await sidebar.certik,
      await sidebar.halborn,
      await sidebar.cyberscope,
      await sidebar.overviewBtn,
      await sidebar.blocksBtn,
      await sidebar.transactionsBtn,
      await sidebar.transfersBtn,
      await sidebar.validatorsBtn,
      await sidebar.proposalsBtn,
      await sidebar.paramsBtn,
      await sidebar.liquidityBtn
    );
  });

  test("Assert home page elements", async ({ general, homePage }) => {
    await general.checkForElementVisibility(
      true,
      await homePage.heading,
      await homePage.latestBlocks,
      await homePage.totalTransactions,
      await homePage.transfers,
      await homePage.validators
    );
  });

  test("Open Blocks page", async ({ sidebar, general, page }) => {
    const responsePromise = page.waitForResponse(URL_PATHS.SARDIS);
    await sidebar.blocksBtn.click();
    const response = await responsePromise;
    const statusCode = response.status();
    expect(statusCode).toBe(STATUS_CODES.OK);
    await general.checkPageUrl(URL_PATHS.BLOCKS);
  });
});
