import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AppointmentPage } from '../pages/appointment/appointment';
import { DoctorPage } from '../pages/doctor/doctor';
import { PatientOptionsPage } from '../pages/patient-options/patient-options';
import { TimeTablePage } from '../pages/time-table/time-table';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseDbProvider } from '../providers/firebase-db/firebase-db';


export const fireBaseConfig={
  apiKey: "AIzaSyA6STZ07TTEv-igavCXZP-t60Ua0bOUPLQ",
  authDomain: "medicitas-e8618.firebaseapp.com",
  databaseURL: "https://medicitas-e8618.firebaseio.com",
  projectId: "medicitas-e8618",
  storageBucket: "medicitas-e8618.appspot.com",
  messagingSenderId: "535129531194"
}
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AppointmentPage,
    DoctorPage,
    PatientOptionsPage,
    TimeTablePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(fireBaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AppointmentPage,
    DoctorPage,
    PatientOptionsPage,
    TimeTablePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseDbProvider,

  ]
})
export class AppModule {}
