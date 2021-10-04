import { Pipe, PipeTransform } from "@angular/core";
import { ILessonSubwork } from "../models/lesson-subwork.model";

@Pipe({
  name: "getDataTitle"
})
export class GetDataTitlePipe implements PipeTransform {
  transform(value: ILessonSubwork[]): string {
    if (value != undefined) var title = value.map(title => title.typeName)[0];
    return title;
  }
}
