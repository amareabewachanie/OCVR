import {Component, OnInit} from "@angular/core";
import {RouterOutlet} from "@angular/router";
import {Birth} from "../model/birth.model";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-birth',
  templateUrl:'./birth.component.html',
  styleUrls: ['./birth.component.css'],
  standalone: true,
  imports: [RouterOutlet,CommonModule]
})
export class BirthComponent implements OnInit {
 births: Birth[] = [];

 ngOnInit() {
   this.births = [{
     firstName: 'Belisa',
     lastName: 'Mohuammed',
     zone: 'W/Hararghe',
     woreda: 'Chiro',
     qebelie: '01',
     dateOfBirth: new Date()
   },
     {
       firstName: 'Belisa',
       lastName: 'Mohuammed',
       zone: 'W/Hararghe',
       woreda: 'Chiro',
       qebelie: '01',
       dateOfBirth:new Date()
     },
     {
       firstName: 'Belisa',
       lastName: 'Mohuammed',
       zone: 'W/Hararghe',
       woreda: 'Chiro',
       qebelie: '01',
       dateOfBirth: new Date()
     }];
   console.log(this.births)
 }

}
