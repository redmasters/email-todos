import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {
  isCollapsed = true;

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

}
