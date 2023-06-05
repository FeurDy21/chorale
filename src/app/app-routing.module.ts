import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RepertoireComponentComponent } from './repertoire-component/repertoire-component.component';
import { MembresComponent } from './membres/membres.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErreurLayoutComponent } from './erreur-layout/erreur-layout.component';
import { PrincipaleLayoutComponent } from './principale-layout/principale-layout.component';
import { ParametrageComponent } from './administration/parametrage/parametrage.component';
import { CommonModule } from '@angular/common';

import { AdminLayoutComponent } from './administration/admin-layout/admin-layout.component';
import { LoginComponent } from './administration/login/login.component';

const routes: Routes = [
  {path:'accueil', component:PrincipaleLayoutComponent,
  children:[{path:'',component:AccueilComponent}]},
  
  {path:'contactez-nous', component:PrincipaleLayoutComponent,
  children:[{path:'',component: ContactPageComponent}]},  
  
  {path:'repertoire-chants', component:PrincipaleLayoutComponent,
  children:[{path:'',component: RepertoireComponentComponent}]}, 
  
  {path:'liste-membre',component:PrincipaleLayoutComponent,
  children:[{path:'',component: MembresComponent}]}, 
  
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
 
  {path: 'parametrage', component: ParametrageComponent},

  {path:'login', component:AdminLayoutComponent,
  children:[
    {path:'',component:LoginComponent}
]},

  {path:'erreur',component:ErreurLayoutComponent,//ceci permet de signifier que ErreurLayoutComponent est le composant parent de PageNotFoundComponent
children:[{path:'',component: PageNotFoundComponent}]},
  /*{ path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) }*/
  
  
  { //Lazy load
    path:"admin", 
    loadChildren:()=>import('./administration/administration-routing.module').then((n)=>n.AdministrationRoutingModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
