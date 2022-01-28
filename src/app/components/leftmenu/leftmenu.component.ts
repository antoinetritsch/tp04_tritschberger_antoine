import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DataState } from 'src/app/shared/states/data_state';

@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.css']
})
export class LeftmenuComponent implements OnInit {

  @Select(DataState.getProductsLength) productsLength$!: Observable<number>;

  constructor() { }

  ngOnInit(): void {
  }

}
