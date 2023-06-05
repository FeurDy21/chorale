import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { ParametrageComponent } from './parametrage/parametrage.component';
import { CompteComponent } from './compte/compte.component';
import { AddRepertoireComponent } from './parametrage/add-repertoire/add-repertoire.component';
import { ListeRepertoireComponent } from './parametrage/liste-repertoire/liste-repertoire.component';
import { UpdateRepertoireComponent } from './parametrage/update-repertoire/update-repertoire.component';
import { AddMembreComponent } from './parametrage/add-membre/add-membre.component';
import { ListeMembreComponent } from './parametrage/liste-membre/liste-membre.component';
import { UpdateMembreComponent } from './parametrage/update-membre/update-membre.component';
import { HearderComponent } from './hearder/hearder.component';
import { FooterComponent } from './footer/footer.component';
import { FooterAdminComponent } from './footer-admin/footer-admin.component';
import { HearderAdminComponent } from './hearder-admin/hearder-admin.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { RepertoireAdminComponent } from './repertoire-admin/repertoire-admin.component';


@NgModule({
  declarations: [ParametrageComponent, CompteComponent, AddRepertoireComponent, ListeRepertoireComponent, UpdateRepertoireComponent, AddMembreComponent, ListeMembreComponent, UpdateMembreComponent, HearderComponent, FooterComponent, FooterAdminComponent, HearderAdminComponent, RepertoireAdminComponent],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
   HearderAdminComponent,
   FooterAdminComponent
  ]
})
export class AdministrationModule { }
