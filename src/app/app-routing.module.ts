import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmpleadosComponent } from './Components/create-empleados/create-empleados.component';
import { ListEmpleadosComponent } from './Components/list-empleados/list-empleados.component';

const routes: Routes = [
  {path:'', redirectTo:'list-empleados',pathMatch:'full'},
  {path:'list-empleados', component: ListEmpleadosComponent},
  {path: 'create-empleados', component:CreateEmpleadosComponent},
  {path: 'editEmpleado/:id', component:CreateEmpleadosComponent},
  {path: '**', redirectTo:'list-empleados',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
