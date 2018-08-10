describe("Test Automation of a banking app", function() {

	it("Validates customer login test", function() {
		browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
		element(by.buttonText("Customer Login")).click();
		expect(browser.getTitle()).toContain("Protractor practice");
		element.all(by.css("#userSelect option")).then(function(items){
			// Printing values from dropdown list
			console.log("----- Printing values from dropdown list -----");
			console.log("Total values in dropdown are: " + items.length);
			console.log("List of values:");
			for(i=0; i<items.length; i++){
				items[i].getText().then(function(text){
					console.log(text);
				});
			}
			
			console.log("----- Printing value attributes from dropdown list -----");
			for(i=0; i<items.length; i++){
				items[i].getAttribute("value").then(function(value){
					console.log(value);
				});
			}
			
			element(by.model("custId")).$("[value='2']").click();
			var selection = element(by.model("custId")).$("[value='2']").getText();
			element(by.buttonText("Login")).click();
//			element(by.binding("user")).getText().then(function(text){
//				console.log(text);
//			});
			expect(element(by.binding("user")).getText()).toEqual(selection);
		});
		browser.sleep(3000);
	}) 
	
})