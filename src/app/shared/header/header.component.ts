import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  public cabecalho: string;

  @Output()
  public clicked: EventEmitter<boolean>;

  constructor() {
    this.clicked = new EventEmitter<boolean>();
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(simpleObject: SimpleChanges) {
    console.log('ngOnChanges');
  }

  public onClick(): void {
    this.clicked.emit(true);
  }

}
