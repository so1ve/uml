import type { CustomTab } from "./custom-tabs";

export interface ServerFunctions {
  getCustomTabs(): CustomTab[];
  customTabAction(name: string, action: number): Promise<boolean>;
}
