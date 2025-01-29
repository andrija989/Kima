import { test } from "../../../modules/base/pomFixture";
import { DATA_TYPES } from "../../../../fixtures";

let response;

test.describe("Rpc status tests", () => {
  test.beforeEach("Get status response", async ({ status }) => {
    response = await status.getStatus();
  });

  test("Assert status response data types", async ({ general }) => {
    const jsonrpc = await response.jsonrpc;
    const id = await response.id;
    const result = await response.result;
    const syncInfo = await response.result.sync_info;
    await general.checkTheTypeOfData(jsonrpc, DATA_TYPES.STRING);
    await general.checkTheTypeOfData(id, DATA_TYPES.NUMBER);
    await general.checkTheTypeOfData(result, DATA_TYPES.OBJECT);
    await general.checkTheTypeOfData(syncInfo, DATA_TYPES.OBJECT);
  });
});
