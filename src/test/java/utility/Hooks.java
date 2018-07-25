
package utility;

        import cucumber.api.java.After;
        import cucumber.api.java.Before;
        import org.junit.AfterClass;
        import org.junit.BeforeClass;
        import org.openqa.selenium.WebDriver;
        import org.openqa.selenium.firefox.FirefoxDriver;



public class Hooks {


    public static WebDriver driver ;

    @BeforeClass
    public void openHomePage() {

    driver = new FirefoxDriver();
    System.setProperty("webdriver.gecko.driver", "C:\\Users\\OJO\\IdeaProjects\\BrightHRexercise\\src\\test\\resources\\geckodriver\\geckodriver.exe");
    String appl = "https://app.brighthr.com";
    Hooks.driver.get(appl);
    }



    @AfterClass
    public void CloseBrowser() {
        driver.quit();
    }


}

