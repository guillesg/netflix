import { Component, Input, OnInit } from '@angular/core';
import { TopGallery } from '../../models/top.interface';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  @Input() top!: TopGallery;
  constructor() {}

  ngOnInit(): void {
    console.log('top', this.top);
  }
}
