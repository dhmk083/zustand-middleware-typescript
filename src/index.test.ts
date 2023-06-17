import { immer } from "zustand/middleware/immer";
import create from "zustand";
import { foo } from "./";

it("test", () => {
  const useBearStore = create(foo(() => ({ bears: 0 }), "hello"));
  console.log(useBearStore.foo.toUpperCase());
});
