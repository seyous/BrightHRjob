package stepdefs;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;
import utility.Hooks;

public class loginpage {
    WebDriver driver;
    Select select;

    @Given("^I navigate to BrightHR webApp URL \"([^\"]*)\"$")
    public void i_navigate_to_BrightHR_webApp_URL(String arg1)  {
        System.setProperty("webdriver.gecko.driver", "C:\\Users\\OJO\\IdeaProjects\\BrightHRexercise\\src\\test\\resources\\geckodriver\\geckodriver.exe");
        driver = new FirefoxDriver();
        driver.get("https://app.brighthr.com/login");
        driver.manage().window().maximize();

    }

    @Given("^I fill the username with \"([^\"]*)\"$")
    public void i_fill_the_username_with(String arg1)  {
        driver.findElement(By.name("username")).sendKeys("Oluseyi.ojo@grr.la");
    }

    @Given("^I fill the password with \"([^\"]*)\"$")
    public void i_fill_the_password_with(String arg1)  {
        driver.findElement(By.name("password")).sendKeys("123456");
    }

    @Given("^I click on the \"([^\"]*)\" button$")
    public void i_click_on_the_button(String arg1)  {
        driver.findElement(By.id("loginBtn")).click();
    }

    @And("^I am on the my profile page$")
    public void iAmOnTheMyProfilePage()  {
        String specificText = "Your absence";
        Assert.assertEquals(specificText ,driver.findElement(By.xpath("/html/body/div[2]/main/div/div/div/div[2]/div/div[1]/h2")).getText());
        }


    @When("^I click the \"([^\"]*)\" button$")
    public void i_click_the_button(String arg1)  {
        driver.findElement(By.cssSelector(".mt-2")).click();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }

    @When("^I select \"([^\"]*)\" from the absence button$")
    public void i_select_from_the_absence_button(String arg1)  {
        select = new Select(driver.findElement(By.xpath("//*[@id=\"absenceTypeSelect\"]")));
        select.selectByVisibleText("Annual Leave");
    }

    @When("^I select the start date and time$")
    public void i_select_the_start_date_and_time()  {
        WebElement datepicker = driver.findElement(By.xpath("//*[@id=\"start-date\"]"));
        datepicker.sendKeys("30/07/2018");
    }

    @When("^I select the end date and time$")
    public void i_select_the_end_date_and_time()  {
        WebElement datepicker = driver.findElement(By.xpath("//*[@id=\"end-date\"]"));
        datepicker.sendKeys("30/08/2018");
    }

    @When("^I input the reason for absence$")
    public void i_input_the_reason_for_absence()  {
        driver.findElement(By.id("details")).sendKeys("To attend to urgent matter");
    }

    @Then("^I should see the message \"([^\"]*)\"$")
    public void i_should_see_the_message(String arg1)  {
        WebElement MessageTitle = driver.findElement(By.xpath("/html/body/div[2]/main/div/div/div/div[2]/ng-include/div/div[1]/div[2]/h1"));
        String Message = MessageTitle.getText();
        String Expectedmessage = "Annual Leave Requested";
        Assert.assertEquals(Message,Expectedmessage);
    }



}