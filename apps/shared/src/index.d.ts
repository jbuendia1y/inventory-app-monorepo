import * as inventoryModel from "./models/inventory";
import * as userModel from "./models/user";

declare module "shared" {
  export * from "./models/inventory";
  export * from "./models/user";
}
