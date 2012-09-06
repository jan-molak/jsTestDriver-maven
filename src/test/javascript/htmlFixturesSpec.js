/**
 * An example demonstrating how to use html fixtures with Jasmine
 */
describe("JasmineFramework", function() {

    it("understands the html appended to the site", function() {
        /*:DOC += <p id="foo">bar</p> */
        var paragraph = document.getElementById('foo');

        expect(paragraph).not.toBe(null);
        expect(paragraph.innerHTML).toBe("bar");
    });

    it("understands the html set as private properties of the test", function() {
        /*:DOC foo = <p>bar</p>*/

        expect(this.foo).not.toBe(null);
        expect(this.foo.innerHTML).toBe("bar");
    });
});