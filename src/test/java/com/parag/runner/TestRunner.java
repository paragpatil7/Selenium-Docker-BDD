package com.parag.runner;

//import junit.framework.Test;
//import junit.framework.TestCase;
//import junit.framework.TestSuite;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@CucumberOptions
(
			features="src/test/resources/features",
			glue={"com.parag.stepdefs"},
			tags={"~@ignore"},
			format = {
						"pretty",
						"html:target/cucumber-reports/cucumber-pretty",
				        "json:target/cucumber-reports/json-reports/CucumberTestReport.json",
				        "rerun:target/cucumber-reports/rerun-reports/rerun.txt"
					}
		
)


public class TestRunner extends AbstractTestNGCucumberTests
{


}
