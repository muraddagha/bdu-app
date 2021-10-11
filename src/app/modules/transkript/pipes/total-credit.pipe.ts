import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "totalCredit"
})
export class TotalCreditPipe implements PipeTransform {
  transform(value: any[], tn: any): any {
    var sum = 0;
    value.map(credit => (sum += Number(credit.credit)));
    return sum;
  }
}
