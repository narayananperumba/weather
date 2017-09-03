import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
 
import 'rxjs/add/operator/toPromise';
 
import { Weather } from './weather';

@Injectable()
export class WeatherService {
 
  private headers = new Headers({'Content-Type': 'application/json'});
  private openWeatherMapUrl = 'http://api.openweathermap.org/data/2.5/weather';  // URL to web api
  private apiKey = 'eff1c8a28e953afab8b4b96a149677b4'
  private weatherUrl = this.openWeatherMapUrl + '?appid=' + this.apiKey;
 
  constructor(private http: Http) { }
 
  getWeather(city): Promise<Weather[]> {
    if(!city) return;
    return this.http.get(this.weatherUrl+'&q='+city)
               .toPromise()
               .then(response => response.json() as Weather[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}