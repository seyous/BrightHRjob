
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
       }



    @AfterClass
    public void CloseBrowser() {
        driver.quit();
    }


}

