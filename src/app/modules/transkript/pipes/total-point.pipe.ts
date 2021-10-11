import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "totalPoint"
})
export class TotalPointPipe implements PipeTransform {
  transform(value: any[], tn: any): any {
    var multiply = 0;
    var length = 0;
    var result = 0;
    value.map(credit => (length += Number(credit.credit)));

    value.map(credit => (multiply += credit.credit * credit.endPoint));
    result = multiply / length;
    return result.toFixed(2);
  }
}
