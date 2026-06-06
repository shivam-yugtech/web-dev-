console.log("Starting...");

setTimeout(function () {
    console.log("1");
    setTimeout(function () {
        console.log("2");

        setTimeout(function () {
            console.log("3");

            console.log("Done!");
        }, 1000);

    }, 1000);

}, 1000);


