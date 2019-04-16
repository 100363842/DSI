import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Appointment } from '../../models/appointment.model';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import { DatePipe } from '@angular/common';

/**
 * Generated class for the DoctorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctor',
  templateUrl: 'doctor.html',
  providers: [DatePipe]
})
export class DoctorPage {

  appointments:  Appointment[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase: FirebaseDbProvider, private datePipe: DatePipe) {
  }
  goBack(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctorPage');
  }
  ionViewDidEnter(){
    this.dbFirebase.getAppointments().subscribe(listaCitas=>{this.appointments=listaCitas;});
  }
  isToday(date: Date){
    var now = new Date();
    var today = this.datePipe.transform(now, 'yyyy-MM-dd');
    var dateStr = this.datePipe.transform(date, 'yyyy-MM-dd');
    return today == dateStr;
  }
  delayAppointment(){
    var appointment1 = this.appointments[0];
    var appointment2 = this.appointments[1];
    this.appointments[0] = appointment2;
    this.appointments[1] = appointment1;
  }
  deleteAppointment(){
    this.appointments[0].finished = 1;
    this.dbFirebase.addAppointment(this.appointments[0]);
  }
}
