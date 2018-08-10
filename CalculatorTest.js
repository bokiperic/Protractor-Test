
describe("Validating the Calculator App => ", () => {

    // Global variables
    let expected_text;

    // Will run before every TESTCASE
    beforeEach(() => {
        browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
        element(by.model("first")).sendKeys("7");
        element(by.model("second")).sendKeys("7");
        element(by.buttonText("Go!")).click();

        expected_text =  element(by.binding("latest")).getText();
    });

    // Will run after every TESTCASE
    afterEach(() => {
        browser.sleep(3000);
        console.log("After Each Block");
    });

    it("validate 7 + 7 = 14", () => {
        expected_text.then((text) => {
            console.log("Result is: " + text);
            expect(parseInt(text)).toBe(14);
        })
    });

    it("validate 7 + 7 != 10", () => {
        expected_text.then((text) => {
            console.log("Result is: " + text);
            expect(parseInt(text)).not.toBe(10);
        })
    });

    it("validate 7 + 7 = 13", () => {
        expected_text.then((text) => {
            console.log("Result is: " + text);
            expect(parseInt(text)).toBe(13);
        })
    });

});