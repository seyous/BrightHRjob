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
  "name": "I verify that I am on my profile page",
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
  "duration": 227265181,
  "error_message": "java.lang.NullPointerException\r\n\tat stepdefs.loginpage.iNavigateToTheLoginPage(loginpage.java:25)\r\n\tat ✽.Given I navigate to the login page \"https://apps.brighthr.com\"(loginpage.feature:8)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "loginpage.iVerifyThatIAmOnMyProfilePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "absence request",
  "description": "",
  "id": "book-absence;absence-request",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "I click the \"request time off\" button",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I select \"Annual leave\" from the absence button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select the start date",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select the start time",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select the end date",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select the end time",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I input the reason for absence",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click the \"Add absence\" button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
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
  "status": "skipped"
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