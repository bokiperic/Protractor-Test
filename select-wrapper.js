/**
 * Created by Selenium on 08-12-2015.
 */
var SelectWrapper = (selector) => {
    this.webElement = element(selector);
};
SelectWrapper.prototype.getOptions = () => {
    return this.webElement.all(by.tagName('option'));
};
SelectWrapper.prototype.getSelectedOptions = () => {
    return this.webElement.all(by.css('option[selected="selected"]'));
};
SelectWrapper.prototype.selectByValue = (value) => {
    return this.webElement.all(by.css('option[value="' + value + '"]')).click();
};
SelectWrapper.prototype.selectByPartialText = (text) => {
    return this.webElement.all(by.cssContainingText('option', text)).click();
};
SelectWrapper.prototype.selectByText = (text) => {
    return this.webElement.all(by.xpath('option[.="' + text + '"]')).click();
};

export default SelectWrapper;