/**
 * An example spec of a simple "hello world" js object
 */
describe("Greeter", function() {

    it("greets the person, even if they don't introduce themselves", function() {
        expect(greeter.greet()).toBe("Hello stranger!");
    });

    it("greets the person, if he knows her name", function() {
        expect(greeter.greet("World")).toBe("Hello World!");
    });
});