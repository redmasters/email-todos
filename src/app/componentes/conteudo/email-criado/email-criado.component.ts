import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-criado',
  templateUrl: './email-criado.component.html',
  styleUrls: ['./email-criado.component.css']
})
export class EmailCriadoComponent implements OnInit {

  emailInfo: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.emailInfo = history.state.emailCriado;
  }

}
