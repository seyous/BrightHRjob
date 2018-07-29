
package utility;

        import cucumber.api.java.After;
        import cucumber.api.java.Before;
        import org.openqa.selenium.WebDriver;
        import org.openqa.selenium.firefox.FirefoxDriver;
        import org.testng.annotations.AfterSuite;
        import org.testng.annotations.BeforeSuite;


public class Hooks {


    public static final WebDriver driver = new FirefoxDriver(); ;

@BeforeSuite
    public void openHomePage()  {


       }



@AfterSuite
    public void CloseBrowser() {
        driver.quit();
    }


}

