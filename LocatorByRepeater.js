describe("Locator testing By Repeater => ", () => {

    it("Adding few records in a table", () => {
        browser.get("http://www.way2automation.com/angularjs-protractor/calc/");

        element(by.model("first")).sendKeys("5");
        element(by.model("second")).sendKeys("7");
        element(by.id("gobutton")).click();

        element(by.model("first")).sendKeys("4");
        element(by.model("second")).sendKeys("6");
        element(by.id("gobutton")).click();
    });

    it("Printing the first row data", () => {

        console.log("Printing the first row data");
        element(by.repeater("result in memory").row(0)).getText().then((text) => {
            console.log(text);
        });

    });

    it("Printing the first column data", () => {

        console.log("Printing the first column data");
        element.all(by.repeater("result in memory").column("result.timestamp")).getText().then((text) => {
            console.log(text);
        });

    });

    it("Printing the entire table data", () => {

        console.log("Printing the entire table data");
        element.all(by.repeater("result in memory")).getText().then((text) => {
            console.log(text);
        });

    });    

    it("Printing the the entire table data in new line", () => {

        console.log("Printing the entire table data in new line");
        element.all(by.repeater("result in memory")).getText().then((rows) => {
            let noOfItems = rows.lenght;
            for(let i=0; i<noOfItems; i++){
                let table = element(by.repeater("result in memory").row(i)).getText();
                table.then((text) => {
                    console.log(text);
                });
            }
        });

    })

})