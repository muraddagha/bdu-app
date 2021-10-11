import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "totalCourseCredit"
})
export class TotalCourseCreditPipe implements PipeTransform {
  transform(value: any[], id: any): any {
    console.log(value.find(a => a.tn == id));
  }
}
