import {Component, EventEmitter, Input, OnInit, Output,} from '@angular/core';

@Component({
  selector: 'app-top-header',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
  @Output() logout: EventEmitter<void> = new EventEmitter();
  @Input() user?: any;
  inicialName: string = '';
  select: any[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.inicialName = this.user
  }

  formatValue(business: any) {
    return `${business.documentType} : ${business.documentNumber}`;
  }

}
