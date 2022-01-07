import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisitantesComponent } from './visitantes/visitantes.component';
import { RegistroVisitanteComponent } from './registroVisitante/registroVisitante.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddVisitanteComponent } from './addVisitante/addVisitante.component';

@NgModule({
  declarations: [	
    AppComponent,
      VisitantesComponent,
      RegistroVisitanteComponent,
      AddVisitanteComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
