import { Component, OnInit } from '@angular/core';
 
import { Weather }                from './weather';
import { WeatherService }         from './weather.service';

@Component({
  selector: 'weather-page',
  templateUrl: './weather.component.html',
  styleUrls: [ './app.component.css' ]
})

export class WeatherComponent implements OnInit {
  weather_data: Weather[];
  temperature: number;
  msg: string;
  button: string = '';
 
  constructor(
    private weatherService: WeatherService) { }
 
  getWeather(city): void {
    if(!city) return;
    
    this.weatherService
        .getWeather(city)
        .then(weather_data => {this.weather_data = weather_data
          this.temperature = (this.weather_data["main"].temp - 273.15);
        });
  }
  log(val): void { console.log(val); }
 
  ngOnInit(): void {
    //this.getWeather("");
  }
}