describe("Locator testing By Bindings => ", () => {

    it("Validating Calculator", () => {
        browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
        element(by.model("first")).sendKeys("5");
        element(by.model("second")).sendKeys("7");

        element(by.id("gobutton")).click();

        element(by.binding("latest")).getText().then((text) => {
            console.log(text);
        });

    })
})