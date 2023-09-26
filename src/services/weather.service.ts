import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
    private  url = "http://api.weatherstack.com/current";
    constructor(private httpClient: HttpClient) {}

    public getWeather() {

        // let url = "https://api.github.com/users/tekTutorialsHub/repos";
        // let url = "https://api.github.com/users/ShahbazAhmadSulaimani/followers";
        let queryParams = new HttpParams()
            .append("access_key", '9a352d67c6ecd0d89c236728f64f83bf')
            .append("query", 'Patna');
        return this.httpClient.get(this.url, {params: queryParams});

    }
}
