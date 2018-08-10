// 'describe' block acts as container to your Testcases
// Your tests (testcases) go inside 'function()' block of 'describe' container
describe("Test entering into an input box", function() {

	//	'it' block contains your testcases. Each 'it' block is seperate Testcase.
	it("Executing input box test", function() {
		browser.get("https://www.angularjs.org");
		element(by.model("yourName")).sendKeys("Boki");
		element(by.binding("yourName")).getText().then(function(text){
			console.log(text);
		});
	}) 
})