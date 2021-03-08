import { assert } from "chai";
import "mocha";
import { pack, unpack } from "./sixbit";

describe("Six-bit pack/unpack", () => {
  it("should pack a simple string", () => {
    const result = pack("kbinXML");
    assert.deepEqual(result, Buffer.from("c27bb3897580", "hex"));
  });
  it("should unpack to a string", () => {
    const result = unpack(Buffer.from("c27bb3897580", "hex"));
    assert.deepEqual(result, "kbinXML");
  });
});
