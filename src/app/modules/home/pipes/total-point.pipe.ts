import { Pipe, PipeTransform } from '@angular/core';
import { ICourseOverviewReportJournalModel } from 'src/app/shared/models/course-overview/course-overview-report-jurnal.model';

@Pipe({
  name: 'totalPoint'
})
export class TotalPointPipe implements PipeTransform {

  transform(reportJournal: ICourseOverviewReportJournalModel[], ...args: unknown[]): any {
    return reportJournal.filter(a => a.evaluationId == "2").map(a => a.averagePoint);

  }

}
