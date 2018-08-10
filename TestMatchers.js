// import winston from './log.js';
// let logger = winston;
// import { winston as logger } from "./log";
var logger = require('./log.js');

describe("Validating the Calculator App => ", () => {

    let title;

    beforeEach(() => {
        browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
        logger.log('info', 'Navigating to the Website');
        title = browser.getTitle();
    });

    it("Validate exact title", () => {
            title.then((text) => {
                console.log(text);
                expect(title).toEqual("Protractor practice website - Calculator");
                logger.log('info', 'Validating the exact title');
            });
    });

    it("Validate title should not match", () => {
        title.then((text) => {
            console.log(text);
            expect(title).not.toEqual("Protractor practice website - Calculator");
            logger.log('info', 'Validate title should not match');
        });
    });

    it("Validate partial title match", () => {
        title.then((text) => {
            console.log(text);
            expect(title).toMatch("practice");
        });
    });

});