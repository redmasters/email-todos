import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { pt_BR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";
import { ConteudoComponent } from './componentes/conteudo/conteudo.component';
import { Sessao1Component } from './componentes/conteudo/sessao1/sessao1.component';
import { Sessao2Component } from './componentes/conteudo/sessao2/sessao2.component';
import { Sessao3Component } from './componentes/conteudo/sessao3/sessao3.component';
import { Sessao4Component } from './componentes/conteudo/sessao4/sessao4.component';

registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    ConteudoComponent,
    Sessao1Component,
    Sessao2Component,
    Sessao3Component,
    Sessao4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    NzIconModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: pt_BR }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
