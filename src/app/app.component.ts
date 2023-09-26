import {Component} from '@angular/core';
import {CoursesService} from "../services/course.service";
import {WeatherService} from "../services/weather.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WeatherStock';
  // @ts-ignore
  courses: string[];
  weatherReport:any;

  constructor(private coursesService: CoursesService, private weatherService: WeatherService) {
  }

  ngOnInit() {
    // this.courses = this.coursesService.getData();
    this.weatherService.getWeather().subscribe(response => {
      console.log("Weather Report :np -->"+JSON.stringify(response));
      this.weatherReport = JSON.stringify(response);

    });
  }
}
