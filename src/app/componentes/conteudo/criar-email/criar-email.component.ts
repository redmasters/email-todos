import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-email',
  templateUrl: './criar-email.component.html',
  styleUrls: ['./criar-email.component.css']
})
export class CriarEmailComponent {
  constructor(private router: Router) { }

  nome: string = '';
  email: string = '';
  senha: string = '';


  criarEmail() {
    console.log({
      nome: this.nome,
      email: this.email,
      senha: this.senha


    });

    const emailCriado = {
      nome: this.nome,
      email: this.email
    }

    this.router.navigate(['/email-criado'], { state: { emailCriado } });
  }

}
