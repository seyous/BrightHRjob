$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("loginpage.feature");
formatter.feature({
  "line": 1,
  "name": "Book Absence",
  "description": "As a user I want to Log into BrightHR WebApp\r\nI want to Book an Absence for myself",
  "id": "book-absence",
  "keyword": "Feature"
});
formatter.background({
  "line": 7,
  "name": "Successful login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I navigate to the login page \"https://apps.brighthr.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I fill the username with \"oluseyi.ojo\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I fill the password with \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on the \"log me in\" button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I am on my profle page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://apps.brighthr.com",
      "offset": 30
    }
  ],
  "location": "loginpage.iNavigateToTheLoginPage(String)"
});
formatter.result({
  "duration": 21992966450,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "oluseyi.ojo",
      "offset": 26
    }
  ],
  "location": "loginpage.i_fill_the_username_with(String)"
});
formatter.result({
  "duration": 414358827,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 26
    }
  ],
  "location": "loginpage.i_fill_the_password_with(String)"
});
formatter.result({
  "duration": 159428550,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "log me in",
      "offset": 16
    }
  ],
  "location": "loginpage.i_click_on_the_button(String)"
});
formatter.result({
  "duration": 482072899,
  "status": "passed"
});
formatter.match({
  "location": "loginpage.iAmOnMyProflePage()"
});
formatter.result({
  "duration": 27772,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "absence request",
  "description": "",
  "id": "book-absence;absence-request",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I click the \"request time off\" button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I select \"Annual leave\" from the absence button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select the start date",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select the start time",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select the end date",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select the end time",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I input the reason for absence",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click the \"Add absence\" button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see the message \"Annual Leave requested\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "request time off",
      "offset": 13
    }
  ],
  "location": "loginpage.i_click_the_button(String)"
});
formatter.result({
  "duration": 168595711,
  "error_message": "org.openqa.selenium.NoSuchWindowException: Unable to locate window: Dashboard - BrightHR\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027OJO-PC\u0027, ip: \u0027192.168.43.249\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 61.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:headless: false, moz:processID: 8092, moz:profile: C:\\Users\\OJO\\AppData\\Local\\..., moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: XP, platformName: XP, platformVersion: 6.1, rotatable: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}}\nSession ID: cded52b1-5c63-4b91-ba00-a68e1867531b\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.window(RemoteWebDriver.java:902)\r\n\tat stepdefs.loginpage.i_click_the_button(loginpage.java:60)\r\n\tat ✽.When I click the \"request time off\" button(loginpage.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Annual leave",
      "offset": 10
    }
  ],
  "location": "loginpage.i_select_from_the_absence_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginpage.iSelectTheStartDate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginpage.iSelectTheStartTime()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginpage.iSelectTheEndDate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginpage.iSelectTheEndTime()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "loginpage.i_input_the_reason_for_absence()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Add absence",
      "offset": 13
    }
  ],
  "location": "loginpage.i_click_the_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Annual Leave requested",
      "offset": 26
    }
  ],
  "location": "loginpage.i_should_see_the_message(String)"
});
formatter.result({
  "status": "skipped"
});
});