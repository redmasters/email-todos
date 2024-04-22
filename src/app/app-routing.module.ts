import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarEmailComponent } from './componentes/conteudo/criar-email/criar-email.component';
import { EmailCriadoComponent } from './componentes/conteudo/email-criado/email-criado.component';
import { HomeComponent } from './componentes/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'criar-email', component: CriarEmailComponent },
  { path: 'email-criado', component: EmailCriadoComponent},
  { path: '', redirectTo: '/criar-email', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
