import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PatientOptionsPage } from '../patient-options/patient-options';
import { DoctorPage } from '../doctor/doctor';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  goToPatientPage(){
    this.navCtrl.push(PatientOptionsPage);
  }
  goToDoctorPage(){
    this.navCtrl.push(DoctorPage);
  }
}
