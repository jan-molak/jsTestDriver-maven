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

    it("understands the html appended to the site", function() {
        /*:DOC += <p id="foo">bar</p> */
        var paragraph = document.getElementById('foo');

        expect(paragraph).not.toBe(null);
        expect(paragraph.innerHTML).toBe("bar");
    });

    it("understands the html set on private properties of the test", function() {
        /*:DOC foo = <p>bar</p>*/

        expect(this.foo).not.toBe(null);
        expect(this.foo.innerHTML).toBe("bar");
    });
});