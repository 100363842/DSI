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

  appointments:  Appointment[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase:FirebaseDbProvider, private datePipe: DatePipe) {
  }
  goBack(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimeTablePage');
  }

  ionViewDidEnter(){
    this.dbFirebase.getAppointments().subscribe(listaCitas=>{
      this.appointments=listaCitas;
      /*function(appointment1: Appointment, appointment2: Appointment) {
        if (appointment1.time < appointment2.time) {
          return -1;
        } else {
          return 1;
        }
      }*/
    });
  }
  isToday(date: Date){
    var now = new Date();
    var today = this.datePipe.transform(now, 'yyyy-MM-dd');
    var dateStr = this.datePipe.transform(date, 'yyyy-MM-dd');
    return today == dateStr;
  }

}
