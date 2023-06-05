import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompteComponent } from './compte/compte.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

import { RepertoireAdminComponent } from './repertoire-admin/repertoire-admin.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component:AdminLayoutComponent,
  children:[
    { path: 'login',component:LoginComponent},
    { path: 'accueil',component: HomeComponent},
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'parametre-repertoire',component:RepertoireAdminComponent}
   
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
