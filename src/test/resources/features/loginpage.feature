Feature: Book Absence
  As a user I want to Log into BrightHR WebApp
  I want to Book an Absence for myself



  Background: Successful login
    Given I navigate to the login page "https://apps.brighthr.com"
    When I fill the username with "oluseyi.ojo"
    And I fill the password with "123456"
    And I click on the "log me in" button
    Then I am on my profle page




  Scenario: absence request
    When I click the "request time off" button
    And I select "Annual leave" from the absence button
    And I select the start date
    And I select the start time
    And I select the end date
    And I select the end time
    And I input the reason for absence
    And I click the "Add absence" button
    Then I should see the message "Annual Leave requested"



