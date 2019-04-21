import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Appointment } from '../../models/appointment.model';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import { DatePipe } from '@angular/common';
/**
 * Generated class for the TimeTablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */





@Component({
  selector: 'page-time-table',
  templateUrl: 'time-table.html',
  providers: [DatePipe]
})
export class TimeTablePage {

  finishedAppointments:  Appointment[] = [];
  remainingAppointments:  Appointment[] = [];
  securityNumber: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase:FirebaseDbProvider, private datePipe: DatePipe) {
  }
  goBack(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimeTablePage');
  }

  deleteOldRemainingAppointments(remainingAppointments: Appointment[]){
    var i = 0;
    for (i = 0; i < remainingAppointments.length; i++) {
      if (this.isBeforeToday(remainingAppointments[i].date)) {
        this.dbFirebase.deleteRemainingAppointment(remainingAppointments[i]);
      }
    }
  }
  deleteOldFinishedAppointments(finishedAppointments: Appointment[]){
    var i = 0;
    for (i = 0; i < finishedAppointments.length; i++) {
      if (this.isBeforeToday(finishedAppointments[i].date)) {
        this.dbFirebase.deleteFinishedAppointment(finishedAppointments[i]);
      }
    }
  }

  ionViewDidEnter(){
    this.dbFirebase.getFinishedAppointments().subscribe(listaCitas=>{this.finishedAppointments=listaCitas;this.deleteOldFinishedAppointments(this.finishedAppointments);this.securityNumber = this.navParams.get('securityNumber');});
    this.dbFirebase.getRemainingAppointments().subscribe(listaCitas=>{this.remainingAppointments=listaCitas;this.deleteOldRemainingAppointments(this.remainingAppointments);this.securityNumber = this.navParams.get('securityNumber');});
  }
  isToday(date: Date){
    var now = new Date();
    var today = this.datePipe.transform(now, 'yyyy-MM-dd');
    var dateStr = this.datePipe.transform(date, 'yyyy-MM-dd');
    return today == dateStr;
  }
  isBeforeToday(date: Date){
    var now = new Date();
    var today = this.datePipe.transform(now, 'yyyy-MM-dd');
    var dateStr = this.datePipe.transform(date, 'yyyy-MM-dd');
    return today > dateStr;
  }
  getColor(number) {
      console.log(this.securityNumber);
    if (number == this.securityNumber) {
      return '#3F7FBF';
    } else{
      return 'black';
    }
  }

  /*function(appointment1: Appointment, appointment2: Appointment) {
    if (appointment1.time < appointment2.time) {
      return -1;
    } else {
      return 1;
    }
  }*/
}
