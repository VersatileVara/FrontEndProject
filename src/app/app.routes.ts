import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientCreationComponent } from './client-creation/client-creation.component';
import { MeetingScheduleComponent } from './meeting-schedule/meeting-schedule.component';

export const routes: Routes = [
  { path: 'client-creation', component: ClientCreationComponent },
  { path: 'meeting-schedule', component: MeetingScheduleComponent },
  // ... other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
