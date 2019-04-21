import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Push, PushObject, PushOptions } from '@ionic-native/push'

import { HomePage } from '../pages/home/home';
import { AppointmentPage } from '../pages/appointment/appointment';
import { DoctorPage } from '../pages/doctor/doctor';
import { PatientOptionsPage } from '../pages/patient-options/patient-options';
import { TimeTablePage } from '../pages/time-table/time-table';
import { SignInPatientPage } from '../pages/sign-in-patient/sign-in-patient';
import { SignInDoctorPage } from '../pages/sign-in-doctor/sign-in-doctor';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private push: Push) {

    platform.ready().then(() => {
      this.pushSetup();
    });


    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'AppointmentPage', component: AppointmentPage },
      { title: 'DoctorPage', component: DoctorPage },
      { title: 'PatientOptionsPage', component: PatientOptionsPage },
      { title: 'TimeTablePage', component: TimeTablePage },
      { title: 'SignInPatientPage', component: SignInPatientPage },
      { title: 'SignInDoctorPage', component: SignInDoctorPage },
    ];

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  pushSetup() {
    const options: PushOptions = {
      android: {
        senderID: '16303439601'
      }
    }
   
    const pushObject: PushObject = this.push.init(options);
    
    
    pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));
    
    pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));
    
    pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
  }
}
