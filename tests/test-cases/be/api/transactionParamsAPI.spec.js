import { test } from "../../../modules/base/pomFixture";
import { DATA_TYPES } from "../../../../fixtures";

let response;

test.describe("Transaction params API tests", () => {
  test.beforeEach("Get status response", async ({ transactionParamsAPI }) => {
    response = await transactionParamsAPI.getTransactionParams();
  });

  test("Assert transaction params response data types", async ({ general }) => {
    const params = await response.params;
    const kimaNftClass = await params.kimaNftClass;
    const id = await kimaNftClass.id;
    const epochLength = await params.epoch_length;
    await general.checkTheTypeOfData(params, DATA_TYPES.OBJECT);
    await general.checkTheTypeOfData(kimaNftClass, DATA_TYPES.OBJECT);
    await general.checkTheTypeOfData(id, DATA_TYPES.STRING);
    await general.checkTheTypeOfData(epochLength, DATA_TYPES.STRING);
  });
});
