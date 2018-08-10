describe("Validating the Title from Home Page", () => {

    let title;
    
    beforeEach(() => {
        browser.get("http://way2automation.com/angularjs-protractor/banking/#/login")
        browser.sleep(2000);    
        title = browser.getTitle();
    });

    it("Enter the correct title", () => {
        title.then((text) => {
            expect(title).toEqual("Protractor practice website - Banking App");
        });
    });

    it("Enter the incorrect title", () => {
        title.then((text) => {
            expect(title).toEqual("Protractor1 practice website - Calculator");
        });
    });

});