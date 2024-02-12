import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ClientCreationComponent } from './client-creation/client-creation.component';
import { MeetingScheduleComponent } from './meeting-schedule/meeting-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientCreationComponent,
    MeetingScheduleComponent,
    // ... other components
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]), // Add your route configuration here if not already added
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
