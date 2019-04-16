import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import { Appointment } from '../../models/appointment.model';

@IonicPage()
@Component({
  selector: 'page-appointment',
  templateUrl: 'appointment.html',
})
export class AppointmentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase:FirebaseDbProvider) {
  }

  goBack(){
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentPage');
  }
  createAppointment(value: {date:Date, time:string}) {
    let appointment: Appointment;
    appointment = {
      date: value.date,
      time: value.time,
      finished: 0
    };
    this.dbFirebase.addAppointment(appointment);
    document.getElementById("modalBox").style.display = "block";
    document.getElementById("modalBackground").style.display = "block";
  }

}
