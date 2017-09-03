import { browser, by, element } from 'protractor';

export class WeatherPage {
  navigateTo() {
    return browser.get('/weather');
  }

  getParagraphText() {
    return element(by.css('weather-app h1')).getText();
  }
}
