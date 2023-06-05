import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { HearderComponent } from './hearder/hearder.component';
import { FooterComponent } from './footer/footer.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MembresComponent } from './membres/membres.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErreurLayoutComponent } from './erreur-layout/erreur-layout.component';
import { PrincipaleLayoutComponent } from './principale-layout/principale-layout.component';
import { CommonModule } from '@angular/common';
import { RepertoireComponentComponent } from './repertoire-component/repertoire-component.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CKEditorModule } from 'ckeditor4-angular';
import { AdminLayoutComponent } from './administration/admin-layout/admin-layout.component';
import { HearderAdminComponent } from './administration/hearder-admin/hearder-admin.component';
import { FooterAdminComponent } from './administration/footer-admin/footer-admin.component';

import { RepertoireAdminComponent } from './administration/repertoire-admin/repertoire-admin.component';
import { HomeComponent } from './administration/home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HearderComponent,
    FooterComponent,
    ContactPageComponent,
    AccueilComponent,
    MembresComponent,
    PageNotFoundComponent,
    ErreurLayoutComponent,
    PrincipaleLayoutComponent,
    RepertoireComponentComponent,
    AdminLayoutComponent,
    HearderAdminComponent,
    FooterAdminComponent,
    HomeComponent,
    RepertoireAdminComponent
    

  
  ],
  imports: [
    BrowserModule,
    CommonModule,  //ce module doit etre importer afin de permettre qu'un composant fils communique avec un parent
    AppRoutingModule,
    FormsModule, // il faut permert à ce module de fonctionner afin de pourvoir utiliser les directive ngFor, ngIf, ngModel...
    HttpClientModule, //il faut importer ce modul pour permettre à httpclient de fonctionner dans tout ce module
    CKEditorModule//importation de CkEditor pour permettre de l'integrer dans un composant de ce module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
