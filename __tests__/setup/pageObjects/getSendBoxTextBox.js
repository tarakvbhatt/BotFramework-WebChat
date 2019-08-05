import { By } from 'selenium-webdriver';

export default async function getSendBoxTextBox(driver) {
  return await driver.findElement(By.css('[role="form"] > * > form > input[type="text"]'));
}
