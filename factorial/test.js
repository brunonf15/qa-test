var helper = require('../helper.js');
const {
    protractor
} = require('protractor/built/ptor');

describe('Test: The greatest factorial calculator!', function () {

    beforeEach(function () {
        //Acess the web site
        browser.driver.get(helper.path());
        //MAximize window
        browser.driver.manage().window().maximize();
        //Config to not to wait the load of DOM
        browser.waitForAngularEnabled(false)

    });


    it('1 - Should have a title', function () {
        //Simple test to check the Title of website
        expect(browser.getTitle()).toEqual('Factorial');

    });


    it('2 - The factorial of 1', async function () {
        //Fist testo to test a factorial of 1 and compare values, in this case, I sent 1 by default
        helper.fillData(1);
        // Method to calculate a factorial, I'm sending 1
        var a = helper.factoriallize(1);
        browser.sleep(6000);
        //Mapping phrase
        var phrase = await element(by.className('text-center top-space-20')).getText();
        //Comparing the expected phrase
        expect(phrase.toString()).toEqual("The factorial of 1 is: 1");

    });


    it('3 - Randomize a number (until 1000) to test factorial', async function () {
        //Generate random number 2 until 1000
        var randomNumber = helper.getNumber(2, 1000);
        //Fill with the random number generated 
        helper.fillData(randomNumber);
        //calculate a factorial of random number
        var saveRandomNumber = helper.factoriallize(randomNumber);
        //wait to element load, 
        //Note: It is not the best way, but the page is not angular, then is the my solution, if the page was angular may I use the presenceOf or visibilityOf
        browser.sleep(6000);
        //Mapping phrase
        var phrase = await element(by.className('text-center top-space-20')).getText();
        // If the phase contains Infinity then I only check the if the phase contains Infinity

        if (phrase.includes('Infinity')) {
            expect(phrase.toString()).toContain("Infinity");
        } else {
            //Else I will compare the values
            helper.cutText(phrase, saveRandomNumber);
        }

    });

    it('5 - Test to not send a number', async function () {
        //Click into button calculate
        helper.clickToCalculate();
        //Note: It is not the best way, but the page is not angular, then is the my solution, if the page was angular may I use the presenceOf or visibilityOf
        browser.sleep(6000);
        //Mapping phrase
        var phrase = await element(by.className('text-center top-space-20')).getText();
        //Comparing the expected phrase
        expect(phrase.toString()).toEqual("Please enter an integer");


    });


    it('6 - Test to write a string', async function () {

        //Generate and fill the field number with a string (five random letters)
        helper.fillData(helper.getText(5));
        //Note: It is not the best way, but the page is not angular, then is the my solution, if the page was angular may I use the presenceOf or visibilityOf
        browser.sleep(6000);
        //Mapping phrase
        var phrase = await element(by.className('text-center top-space-20')).getText();
        //Comparing the expected phrase

        expect(phrase.toString()).toEqual("Please enter an integer");

    });


    it('7 - Test to write a zero and negative number ', async function () {
        //Generate and fill the field with a negative number (until -100)
        var negative = -Math.floor(Math.random() * 100);
        helper.fillData(negative);
        //Note: It is not the best way, but the page is not angular, then is the my solution, if the page was angular may I use the presenceOf or visibilityOf
        browser.sleep(6000);
        //Mapping phrase
        var phrase = await element(by.className('text-center top-space-20')).getText();

        
        if (phrase.includes('The factorial of 0 is: 1')) {
            // If the number generated was 0, check the correct phase
            expect(phrase.toString()).toContain("The factorial of 0 is: 1");
        } else {
             //Comparing the expected phrase
            expect(phrase.toString()).toEqual("");
        }
        
    });


    it('8 - Test to write a non integer number', async function () {
        //Generate and fill the field with a non integer number
        var noninteger = Math.random(2);
        helper.fillData(noninteger);
        //Note: It is not the best way, but the page is not angular, then is the my solution, if the page was angular may I use the presenceOf or visibilityOf
        browser.sleep(6000);
        //Mapping phrase
        var phrase = await element(by.className('text-center top-space-20')).getText();
        //Comparing the expected phrase
        expect(phrase.toString()).toEqual("Please enter an integer");

    });

    it('9 - Privacy factorial', async function () {
        //Mapping the Privacy link
        element(by.linkText('Privacy')).click();
        //Simulating a check title on this page
        expect(browser.getTitle()).toContain('Privacy');

    });

    it('10 - Terms factorial', async function () {
        //Mapping the Privacy link
        element(by.linkText('Terms and Conditions')).click();
        //Simulating a check title on this page
        expect(browser.getTitle()).toContain('Terms');

    });

    it('11 - Terms factorial', async function () {

        //Mapping the Privacy link
        element(by.linkText('Qxf2 Services')).click();
        //Checking a title on this page
        expect(browser.getTitle()).toContain('Qxf2 Services');

    });






});