Feature: Filling form

Scenario: Entering your full name
    Given i am on the form
    When i enter my first name as Aymeric
    And i enter my last name as Giraudet
    And i click on the button
    Then i should be greeted as Aymeric Giraudet

Scenario: Entering your full name as John Doe
    Given i am on the form
    When i enter my first name as John
    And i enter my last name as Doe
    And i click on the button
    Then i should be greeted as John Doe