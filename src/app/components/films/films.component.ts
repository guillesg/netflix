import { Component, Input, OnInit } from '@angular/core';
import {  FilmsInterface } from "./../../models/films.interface"

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  @Input() films!: FilmsInterface;
  constructor() { }

  ngOnInit(): void {
    console.log("films", this.films)
  }

}
