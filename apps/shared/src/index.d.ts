import * as inventoryModel from "./models/inventory";
import * as userModel from "./models/user";
declare module "shared" {
  export const models = {
    user: userModel,
    inventory: inventoryModel,
  };
  export * from "./models/user";
  export * from "./models/inventory";
}
