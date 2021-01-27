$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("search.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    },
    {
      "line": 21,
      "value": "#@tag"
    },
    {
      "line": 22,
      "value": "#Feature: Title of your feature"
    },
    {
      "line": 23,
      "value": "#  I want to use this template for my feature file"
    },
    {
      "line": 25,
      "value": "#  @tag1"
    },
    {
      "line": 26,
      "value": "#  Scenario: Title of your scenario"
    },
    {
      "line": 27,
      "value": "#    Given I want to write a step with precondition"
    },
    {
      "line": 28,
      "value": "#   And some other precondition"
    },
    {
      "line": 29,
      "value": "#  When I complete action"
    },
    {
      "line": 30,
      "value": "# And some other action"
    },
    {
      "line": 31,
      "value": "#And yet another action"
    },
    {
      "line": 32,
      "value": "#Then I validate the outcomes"
    },
    {
      "line": 33,
      "value": "#And check more outcomes"
    },
    {
      "line": 35,
      "value": "#@tag2"
    },
    {
      "line": 36,
      "value": "#Scenario Outline: Title of your scenario outline"
    },
    {
      "line": 37,
      "value": "# Given I want to write a step with \u003cname\u003e"
    },
    {
      "line": 38,
      "value": "#When I check for the \u003cvalue\u003e in step"
    },
    {
      "line": 39,
      "value": "#Then I verify the \u003cstatus\u003e in step"
    },
    {
      "line": 41,
      "value": "#Examples:"
    },
    {
      "line": 42,
      "value": "# | name  | value | status  |"
    },
    {
      "line": 43,
      "value": "#| name1 |     5 | success |"
    },
    {
      "line": 44,
      "value": "#| name2 |     7 | Fail    |"
    }
  ],
  "line": 48,
  "name": "search on Duck duck go page.",
  "description": "",
  "id": "search-on-duck-duck-go-page.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 50,
  "name": "I want to search on duck-duck-go site",
  "description": "",
  "id": "search-on-duck-duck-go-page.;i-want-to-search-on-duck-duck-go-site",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 51,
  "name": "I am on the website duck-duck-go",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "I enter the \"\u003ckeyword\u003e\" to search",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "I navigate to videos search",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I should get minimum 2 search results",
  "keyword": "Then "
});
formatter.examples({
  "line": 56,
  "name": "",
  "description": "",
  "id": "search-on-duck-duck-go-page.;i-want-to-search-on-duck-duck-go-site;",
  "rows": [
    {
      "cells": [
        "keyword"
      ],
      "line": 57,
      "id": "search-on-duck-duck-go-page.;i-want-to-search-on-duck-duck-go-site;;1"
    },
    {
      "cells": [
        "java"
      ],
      "line": 58,
      "id": "search-on-duck-duck-go-page.;i-want-to-search-on-duck-duck-go-site;;2"
    },
    {
      "cells": [
        "webdriver"
      ],
      "line": 59,
      "id": "search-on-duck-duck-go-page.;i-want-to-search-on-duck-duck-go-site;;3"
    },
    {
      "cells": [
        "docker"
      ],
      "line": 60,
      "id": "search-on-duck-duck-go-page.;i-want-to-search-on-duck-duck-go-site;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3869562064,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "I want to search on duck-duck-go site",
  "description": "",
  "id": "search-on-duck-duck-go-page.;i-want-to-search-on-duck-duck-go-site;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 51,
  "name": "I am on the website duck-duck-go",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "I enter the \"java\" to search",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "I navigate to videos search",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I should get minimum 2 search results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.i_am_on_the_website_duck_duck_go()"
});
formatter.result({
  "duration": 1457716624,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "java",
      "offset": 13
    }
  ],
  "location": "SearchSteps.i_enter_the_to_search(String)"
});
formatter.result({
  "duration": 3478387245,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.i_navigate_to_videos_search()"
});
formatter.result({
  "duration": 498076020,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "SearchSteps.i_should_get_minimum_search_results(int)"
});
formatter.result({
  "duration": 387241764,
  "status": "passed"
});
formatter.after({
  "duration": 932941946,
  "status": "passed"
});
formatter.before({
  "duration": 3204189396,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "I want to search on duck-duck-go site",
  "description": "",
  "id": "search-on-duck-duck-go-page.;i-want-to-search-on-duck-duck-go-site;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 51,
  "name": "I am on the website duck-duck-go",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "I enter the \"webdriver\" to search",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "I navigate to videos search",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I should get minimum 2 search results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.i_am_on_the_website_duck_duck_go()"
});
formatter.result({
  "duration": 1235424885,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver",
      "offset": 13
    }
  ],
  "location": "SearchSteps.i_enter_the_to_search(String)"
});
formatter.result({
  "duration": 2441338081,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.i_navigate_to_videos_search()"
});
formatter.result({
  "duration": 804535777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "SearchSteps.i_should_get_minimum_search_results(int)"
});
formatter.result({
  "duration": 380768797,
  "status": "passed"
});
formatter.after({
  "duration": 944507703,
  "status": "passed"
});
formatter.before({
  "duration": 3046746863,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "I want to search on duck-duck-go site",
  "description": "",
  "id": "search-on-duck-duck-go-page.;i-want-to-search-on-duck-duck-go-site;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 51,
  "name": "I am on the website duck-duck-go",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "I enter the \"docker\" to search",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "I navigate to videos search",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I should get minimum 2 search results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.i_am_on_the_website_duck_duck_go()"
});
formatter.result({
  "duration": 1120785622,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "docker",
      "offset": 13
    }
  ],
  "location": "SearchSteps.i_enter_the_to_search(String)"
});
formatter.result({
  "duration": 4007902174,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.i_navigate_to_videos_search()"
});
formatter.result({
  "duration": 295941895,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "SearchSteps.i_should_get_minimum_search_results(int)"
});
formatter.result({
  "duration": 384598927,
  "status": "passed"
});
formatter.after({
  "duration": 804671526,
  "status": "passed"
});
});