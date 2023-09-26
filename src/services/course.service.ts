import {Injectable} from "@angular/core";

@Injectable()
export class CoursesService {
  constructor() {
  }

  getData(): string[] {
    return ['Java', 'Angular', 'C++', 'React'];
  }
}
