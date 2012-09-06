/**
 * An example demonstrating how to use Sinon.js mocking library.
 * Check http://sinonjs.org for more info
 */
describe("JasmineFramework", function() {

    var clock;

    beforeEach(function () { clock = sinon.useFakeTimers(); });
    afterEach(function () { clock.restore(); });

    it("plays well with sinon.js mocking library", function() {

        var callback = sinon.spy();
        var throttled = throttle(callback);

        throttled();

        clock.tick(99);
        assert(callback.notCalled);

        clock.tick(1);
        assert(callback.calledOnce);
    });
});