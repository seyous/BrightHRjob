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


    private Select select;

    @Given("^I navigate to the login page \"([^\"]*)\"$")
    public void iNavigateToTheLoginPage(String arg1)  {
        System.setProperty("webdriver.gecko.driver", "C:\\Users\\OJO\\IdeaProjects\\BrightHRexercise\\src\\test\\resources\\geckodriver\\geckodriver.exe");
        String appl = "https://app.brighthr.com";
        Hooks.driver.get(appl);

    }


    @Given("^I fill the username with \"([^\"]*)\"$")
    public void i_fill_the_username_with(String arg1) {
        Hooks.driver.findElement(By.name("username")).sendKeys("Oluseyi.ojo@grr.la");
    }

    @Given("^I fill the password with \"([^\"]*)\"$")
    public void i_fill_the_password_with(String arg1) {
        Hooks.driver.findElement(By.name("password")).sendKeys("123456");
    }

    @Given("^I click on the \"([^\"]*)\" button$")
    public void i_click_on_the_button(String arg1) {
        Hooks.driver.findElement(By.id("loginBtn")).click();
    }

    @Then("^I verify that I am on my profile page$")
    public void iVerifyThatIAmOnMyProfilePage() {
        // Write code here that turns the phrase above into concrete actions
        String specificText = "Your absence";
        Assert.assertEquals(specificText, Hooks.driver.findElement(By.linkText("View my absences")).getText());
    }

    @When("^I click the \"([^\"]*)\" button$")
    public void i_click_the_button(String arg1) {
        Hooks.driver.findElement(By.className("cta mr-2")).click();
    }

    @When("^I select \"([^\"]*)\" from the absence button$")
    public void i_select_from_the_absence_button(String arg1) {
        select = new Select(Hooks.driver.findElement(By.xpath("//*[@id='absenceTypeSelect']")));
        select.selectByVisibleText("Annual Leave");
    }

    @And("^I select the start date$")
    public void iSelectTheStartDate() {
        WebElement datepicker = Hooks.driver.findElement(By.xpath("//*[@id='start-date']"));
        datepicker.sendKeys("30/07/2018");
    }


    @And("^I select the start time$")
    public void iSelectTheStartTime()  {
        select = new Select(Hooks.driver.findElement(By.className("ng-pristine ng-valid ng-touched")));
        select.selectByValue("Full Day");
    }

    @And("^I select the end date$")
    public void iSelectTheEndDate()  {
        WebElement datepicker = Hooks.driver.findElement(By.xpath("//*[@id='end-date']"));
        datepicker.sendKeys("30/08/2018");
    }


    @And("^I select the end time$")
    public void iSelectTheEndTime()  {
        select = new Select(Hooks.driver.findElement(By.className("ng-valid ng-dirty ng-touched")));
        select.selectByValue("Full Day");
    }




    @When("^I input the reason for absence$")
    public void i_input_the_reason_for_absence() {
        Hooks.driver.findElement(By.id("details")).sendKeys("To attend to urgent matter");
    }

    @Then("^I should see the message \"([^\"]*)\"$")
    public void i_should_see_the_message(String arg1) {
        WebElement MessageTitle = Hooks.driver.findElement(By.id("confirm"));
        String Message = MessageTitle.getText();
        String Expectedmessage = "Back to profile";
        Assert.assertEquals(Message, Expectedmessage);
    }



}