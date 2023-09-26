export class WeatherReport {
    request: Request|undefined;
    location: Location|undefined;
    current: Current|undefined;
}

export class Request {
    type: string|undefined;
    query: string|undefined;
    language: string|undefined;
    unit: string|undefined;
}

export class Location {
    name: string|undefined;
    country: string|undefined;
    region: string|undefined;
    lat: string|undefined;
    lon: string|undefined;
    timezone_id: string|undefined;
    localtime: string|undefined;
    localtime_epoch: number|undefined;
    utc_offset: string|undefined;
}

export class Current {
    observation_time: string|undefined;
    temperature: number|undefined;
    weather_code: number|undefined;
    weather_icons: string[]|undefined;
    weather_descriptions: string[]|undefined;
    wind_speed: number|undefined;
    wind_degree: number|undefined;
    wind_dir: string|undefined;
    pressure: number|undefined;
    precip: number|undefined;
    humidity: number|undefined;
    cloudcover: number|undefined;
    feelslike: number|undefined;
    uv_index: number|undefined;
    visibility: number|undefined;
    is_day: string|undefined;
}
