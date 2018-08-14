import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../../users/users.service';

@Component({
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss']
})
export class ListOrdersComponent implements OnInit {


  public titulo: string;
  public cabecalho: string;
  public clicked: boolean;
  public service: UsersService;

  constructor() {
    this.clicked = false;
   }

  ngOnInit() {
    this.titulo = 'Listagem de pedidos';
    this.cabecalho = 'Pedidos';
    console.log('ngOnInit');
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  public onClicked(clicked: boolean): void {
    this.clicked = clicked;
    this.cabecalho = 'Novo cabeçalho';

  }

}
