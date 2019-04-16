import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppointmentPage } from '../appointment/appointment';
import { TimeTablePage } from '../time-table/time-table';


@Component({
  selector: 'page-patient-options',
  templateUrl: 'patient-options.html',
})
export class PatientOptionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToAppointmentPage(){
    this.navCtrl.push(AppointmentPage);
  }
  goToTimeTablePage(){
    this.navCtrl.push(TimeTablePage);
  }
  goBack(){
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PatientOptionsPage');
  }
}
