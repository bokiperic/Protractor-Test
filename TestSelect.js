/**
 * Created by Selenium on 08-12-2015.
 */
import SelectWrapper from './select-wrapper,js';
var mySelect = new SelectWrapper(by.id("userSelect"));

describe("Select Wrapper", () => {



    it("Handling the dropdown list", () => {


        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/customer");

       // mySelect.selectByText("Harry Potter");
        mySelect.selectByValue("3");
        browser.sleep(2000);

    }) ;


    it("Finding count and printing all dropdown items", () => {


      var dropoptions = mySelect.getOptions();

        dropoptions.then((options) => {

           console.log(options.length);


            for(var i=0; i<options.length-1;i++){


                element(by.repeater("cust in Customers").row(i)).getText().then((text) => {

                   console.log(text);

                });


            }


        });

        browser.sleep(2000);

    }) ;




});
