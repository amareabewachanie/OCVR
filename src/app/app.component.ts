import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BirthComponent} from "./birth/birth.component";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,BirthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'overa';
}
