describe("Greeter", function() {
    it("greets the person, even if they don't introduce themselves", function() {
        expect(greeter.greet()).toBe("Hello stranger!");
    });

    it("greets the person, if he knows her name", function() {
        expect(greeter.greet("World")).toBe("Hello World!");
    });

    it("complains unnecessarily", function() {
        expect(function(){throw new Error("arrrggh");}).toThrow("arrrggh");
    });
});