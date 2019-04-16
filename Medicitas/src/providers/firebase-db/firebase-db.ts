/*import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the FirebaseDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
@Injectable()
export class FirebaseDbProvider {

  constructor(public http: HttpClient) {
    console.log('Hello FirebaseDbProvider Provider');
  }

}*/
//import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase} from 'angularfire2/database';
import { Appointment } from '../../models/appointment.model';
import { Injectable } from '@angular/core';

@Injectable()
export class FirebaseDbProvider {

  constructor(public afDB:AngularFireDatabase) {
  console.log('Hello FirebaseDbProvider Provider');

  }
  addAppointment(appointment:Appointment) {
   return this.afDB.database.ref('appointments/'+appointment.date + appointment.time).set(appointment);
  }

  deleteAppointment(date, time) {
   this.afDB.database.ref('appointments/'+date+time).remove();
  }
  private appointmentsRef=this.afDB.list<Appointment>('appointments');
  getAppointments(){
   return this.appointmentsRef.valueChanges();
  }
}
