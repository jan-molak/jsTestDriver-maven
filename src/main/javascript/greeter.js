var greeter = (function(undefined) {
    function greet(stranger) {
        var name = determineTheName(stranger);

        return "Hello " + name + "!";
    }

    function determineTheName(stranger) {
        return (stranger === undefined)
            ? "stranger"
            : stranger;
    }

    return {
        greet: greet
    }
}());