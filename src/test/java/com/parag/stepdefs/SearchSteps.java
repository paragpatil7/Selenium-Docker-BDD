package com.parag.stepdefs;

import java.net.MalformedURLException;
import java.net.URL;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.Assert;

import com.parag.searchmodule.pages.SearchPage;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SearchSteps {
	
	private SearchPage searchpage;
	private WebDriver driver;

	@Given("^I am on the website duck-duck-go$")
	public void i_am_on_the_website_duck_duck_go() throws Throwable {
	    searchpage=new SearchPage(driver); 
	    searchpage.GoTo();
	}

	@When("^I enter the \"([^\"]*)\" to search$")
	public void i_enter_the_to_search(String keyword) throws Throwable {
		searchpage.doSearch(keyword);
	}

	@When("^I navigate to videos search$")
	public void i_navigate_to_videos_search() throws Throwable {
		searchpage.goToVideos();
	}

	@Then("^I should get minimum (\\d+) search results$")
	public void i_should_get_minimum_search_results(int min) throws Throwable {
		int size = searchpage.getResult();
        Assert.assertTrue(size > min);
	
	}

	
	@Before
	public void SetUpDriver() throws MalformedURLException
	{
		
		
		this.driver=new ChromeDriver();
		
		
		/*
		 String host = "localhost";
	        DesiredCapabilities dc;

	        if(System.getProperty("BROWSER") != null &&
	                System.getProperty("BROWSER").equalsIgnoreCase("firefox")){
	            dc = DesiredCapabilities.firefox();
	        }else{
	            dc = DesiredCapabilities.chrome();
	        }

	        if(System.getProperty("HUB_HOST") != null){
	            host = System.getProperty("HUB_HOST");
	        }

	        String completeUrl = "http://" + host + ":4444/wd/hub";
	        this.driver = new RemoteWebDriver(new URL(completeUrl), dc);
		*/
		
	}
	
	
	@After
	public void quitDriver()
	{
	this.driver.quit();	
	}
	
	
}
