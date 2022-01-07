import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitantesComponent } from './visitantes/visitantes.component';
import { RegistroVisitanteComponent } from './registroVisitante/registroVisitante.component';
import { AddVisitanteComponent } from './addVisitante/addVisitante.component';

const routes: Routes = [
  { path: 'visitantes', component: VisitantesComponent },
  { path: 'registroVisitante', component: RegistroVisitanteComponent },
  { path: 'addVisitante', component: AddVisitanteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
