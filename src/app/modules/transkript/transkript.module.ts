import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranskriptComponent } from "./components/transkript/transkript.component";
import { TotalPointPipe } from './pipes/total-point.pipe';
import { TotalCreditPipe } from './pipes/total-credit.pipe';
import { TotalCourseCreditPipe } from './pipes/total-course-credit.pipe';
@NgModule({
  declarations: [TranskriptComponent, TotalPointPipe, TotalCreditPipe, TotalCourseCreditPipe],
  imports: [CommonModule]
})
export class TranskriptModule {}
