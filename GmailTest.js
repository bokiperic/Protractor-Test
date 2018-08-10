let Objects = require('./Objects.json');
let using = require('jasmine-data-provider');

describe("Test Gmail", () => {

    beforeEach(() => {
        // Mandatory if you're working on non-Angular based website
        browser.ignoreSynchronization = true;
        browser.get(Objects.testsiteurl);
        console.log("Test site URL is: " + Objects.testsiteurl);
    });

    // Data Provider function
    function GmailCredentialsProvider() {
        return [
            {username:Objects.userdetails.username1, password:Objects.userdetails.password1},
            {username:Objects.userdetails.username2, password:Objects.userdetails.password2}
        ]
    };

    // Usage of Data Provider
    using(GmailCredentialsProvider(), (data) => {
        it("Validate user credentials", () => {
            element(by.xpath(Objects.locators.loginpage.username)).sendKeys(data.username);
            console.log(data.password);
            element(by.id(Objects.locators.loginpage.next)).click();
        });
    })
    

})
