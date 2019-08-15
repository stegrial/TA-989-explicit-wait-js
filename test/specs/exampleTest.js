const { By, Builder } = require('trueautomation-selenium-webdriver');
const { ta } = require('trueautomation-helper');
const { Key, until } = require('selenium-webdriver');

(async function example() {
    const driver = new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://trueautomation.io');

        // await driver.wait(until.titleIs('TrueAutomation.IO – AI-based web testing automation'), 5000);
        let element1 = await driver.findElement(By.css("header div.jet-button__container > a"));
        await driver.wait(until.elementIsVisible(element1), 5000);

        await driver.findElement(By.css(ta('ta_website:login_btn', "header div.jet-button__container > a"))).click;
        // await driver.findElement(By.css("header div.jet-button__container > a")).click();

        let element2 = await driver.findElement(By.css("[name='username']"));
        await driver.wait(until.elementIsVisible(element2), 5000);

        await driver.findElement(By.css(ta('ta_wapp:email_field', "[name='username']"))).sendKeys('webdriver', Key.RETURN);
        // await driver.findElement(By.css("[name='username']")).sendKeys('webdriver', Key.RETURN);
    } finally {
        await driver.quit();
    }
})();