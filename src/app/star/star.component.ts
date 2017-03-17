import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnInit {
  @Input() rating: number;
  startWidth: number;

  @Output() notify: EventEmitter<string>= new
    EventEmitter<string>();

  whenClick() {
    this.notify.emit('clicked');
  }
  constructor() { }

  ngOnInit() {
  }

}
