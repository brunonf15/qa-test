const {
    element
} = require("protractor");
var f = [];

//Helper "class"
module.exports = {
    path: function () {
        return "http://test.getgrex.com/";
    },
    //Method to generate a random number, sendind the minimal and maximus range
    getNumber: function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            met = Math.floor(Math.random() * (max - min)) + min;
            return met
        }

        ,

    //Method to generate a random text
    getText: function randomText(tamanho) {
        var letters = 'abcdefghiklmnopqrstuvwxyz123456789';
        var random = '';
        for (var i = 0; i < tamanho; i++) {
            var rnum = Math.floor(Math.random() * letters.length);
            random += letters.substring(rnum, rnum + 1);
        }
        return random;
    },

    factoriallize: function factorial(n) {
        //Method to calculate a factorial
        if (n == 0 || n == 1)
            return 1;
        if (f[n] > 0)
            return f[n];
        return f[n] = factorial(n - 1) * n;
    },

    fillData: function (value) {
        //Mapping number field
        var number = element(by.id('number'));
        //Seding a value
        number.sendKeys(value);
        //Mapping get factorial button
        this.clickToCalculate();

    },

    clickToCalculate: function () {
        //Mapping get factorial button
        var factorial = element(by.id('getFactorial'));
        //Click on factorial button
        factorial.click();

    },

    cutText: function (phrase, a) {

        //First truncation  on String
        var firstTrunc = phrase.length - 17;
        //Using a auxiliar variable
        var trunc = phrase.substr(17, firstTrunc);

        //First truncation  on String
        var secondTrunc = trunc.length - a.toString().length;
        //Using a auxiliar variable
        trunc = trunc.substr(a.toString().length, secondTrunc);
        //Last truncation  on String
        var lastTrunc = trunc.length - 5;
        //Using a auxiliar variable
        trunc = trunc.substr(5, lastTrunc);
        //I want to compare only the first eight numbers, for this I did another truncation  on the strings
        trunc = trunc.substr(0, 8);
        a = a.toString().substr(0, 8);
        //I clean if have an blank space, only for security =D
        trunc = trunc.trim();
        a = trunc.trim();
        //Compare the strings
        expect(trunc.toString()).toEqual(a.toString());
    }

};