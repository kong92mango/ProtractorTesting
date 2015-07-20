describe ("Protractor webpage title assertion", function() {

	it ("should be on the correct page", function() {
		browser.get("https://angular.github.io/protractor/#/tutorial");
		expect(browser.getCurrentUrl()).toEqual("https://angular.github.io/protractor/#/tutorial");
		expect(browser.getCurrentUrl()).toContain("protractor");
		expect(browser.getTitle()).toEqual('Protractor - end to end testing for AngularJS');
		//All of the three tests should pass
	});
});