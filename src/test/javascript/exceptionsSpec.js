/**
 * An example demonstrating assertion on exceptions thrown
 */
describe("JasmineFramework", function() {

    it("understands exceptions", function() {
        expect(function(){throw new Error("arrrggh");}).toThrow("arrrggh");
    });
});