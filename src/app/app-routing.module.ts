import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';

const routes: Routes = [
  { path: '', component: CabecalhoComponent },
  {path: '', redirectTo: '/cabecalho', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
