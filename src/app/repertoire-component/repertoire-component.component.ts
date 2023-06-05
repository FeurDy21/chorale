import { CommonModule } from '@angular/common';
import { Component, OnInit,Directive ,NgModule, ViewChild, ViewEncapsulation} from '@angular/core';
import { Repertoire } from '../Models/repertoire.Model';
import { FormsModule } from '@angular/forms';
import { Repertoire_interface } from '../Interfaces/repertoire_interface';
import { RepertroireServiceService } from '../Services/repertroire-service.service';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { stringify } from 'querystring';
import { CKEditor4 } from 'ckeditor4-angular/ckeditor';
import { data } from 'jquery';//importation de Jquery

declare var $:any; //declaration de variable pour manipuler les objets jquery dans angular



@Component({
  selector: 'app-repertoire-component',
  templateUrl: './repertoire-component.component.html',
  styleUrls: ['./repertoire-component.component.css'],
  encapsulation: ViewEncapsulation.None //ceci permet d'activer le systeme permettant d'agir sur le contenu innerHTML en css
})
export class RepertoireComponentComponent  implements OnInit {
  
  //trepert.ref_number(1);
 

//rep_int:Repertoire_interface=new;
 
display:boolean=false;
object:any[]=new Array();
repertoire:Repertoire[]=new Array<Repertoire>();
repertoireModel:Repertoire=new Repertoire();
titre:string;
nom:string;
mavar:string="Galogbe est un ingnieur developpeur fullstack";
private subscriptions : Subscription=new Subscription();
  status:string;
  fileName:string;
  file:File;
 

  @ViewChild("adForm") addForm:any; //pour la recuperation des données d'un formulaire

constructor(private repertoire_service:RepertroireServiceService) { }
  
 
  ngOnInit(): void {
   
   this.findAllRepertoire();
     this.JqueryFunctions();
  }



 

 public recherche(m:string){
 //Recherche rapide via des mots clés
    this.subscriptions= this.repertoire_service.findRepertoire(m).subscribe(
      (data:Repertoire[])=>{
       this.object.push(data);
       for(let va of this.object){
        this.repertoire=va["data"];
       }
       console.log("Good request");
      },
      (error:HttpErrorResponse)=>{
      console.log("Exception: something wrong" + error.message);
      }
    );
  }


  onFileSelected(event) {

    const file:File = event.target.files[0];

    if (file) {

        this.fileName = file.name;

        const formData = new FormData();

        formData.append("thumbnail", file);

        ///const upload$ = this.http.post("/api/thumbnail-upload", formData);

       // upload$.subscribe();
    }
}
  
  public findAllRepertoire():void{
    //recuperation de tous les repertoire au chargement de la page
    this.subscriptions=this.repertoire_service.getAllRepertoire().subscribe(
        (data:Repertoire[])=>{
          this.object.push(data);
          console.log(data);
          for(let va of this.object){
        
            this.status=va["status"];//on recupere  le status

            if(this.status=="200"){ // on verifie le status
              this.repertoire=va["data"];
            
            }else{
              alert("Aucune donnée n'a été trouvée");
           console.log("LA rêquete de l'affichage a échoué");
             
            }
          }
         
         
          console.log(this.repertoire);
        },
        (error:HttpErrorResponse)=>{
          console.log("Une erreur s'est produite lors de la recuperation de tous le repertoire"+ error.message);
        }
    );
  }

  public onSubmit(repertoire:Repertoire):void{
    $("#traitement_en_cours").modal("show");
    if(this.repertoire!=null){
 
      this.subscriptions=this.repertoire_service.addRepertoire(repertoire).subscribe(
        data=>{
          if(data!=null){
            
           
          $("#afficher_message .message").html("Enregistrement reussi");
          $("#traitement_en_cours").modal("hide");
          $("#afficher_message").modal("show");
          }
        },(error:HttpErrorResponse)=>{
         
          $("#afficher_message .message").html("Echec d'enregistrement");
          $("#traitement_en_cours").modal("hide");
          $("#afficher_message").modal("show");
          console.log("Echec d'enregistrement "+ error.message);
        }
        );
        
    }else{
      
      $("#afficher_message .message").html("Veuillez bien renseigner le formulaire");
      $("#traitement_en_cours").modal("hide");
      $("#afficher_message").hide()
      console.log("Veuillez bien renseigner le formulaire");
    }
  }

  
   public updateMachine(repertoire:Repertoire){
     this.subscriptions=this.repertoire_service.updateRepertoire(repertoire).subscribe(
      (data:Repertoire)=>{  
       if(data!=null){
         alert("Mise à jour reussie");
         $(".fermer_edit").text("rafraichir");
         $(".fermer_edit").addClass("bg-danger");
         $(".fermer_edit").addClass("rafraichir");
       }
      },(erreur:HttpErrorResponse)=>{
        
        alert("Echec de la mise à jour" + erreur.message);
        console.log("Exception: mise à jour echouée " + erreur.message);
      }
     );
   }


  public findCertainsRepertoire():void{
    //recuperation de tous les repertoire
    this.subscriptions=this.repertoire_service.getAllRepertoire().subscribe(
        (data:Repertoire[])=>{
          this.object.push(data);
          console.log(data);
          for(let va of this.object){
        
            this.status=va["status"];//on recupere  le status

            if(this.status=="200"){ // on verifie le status
              this.repertoire=va["data"];
            
            }else{
              alert("Aucune donnée n'a été trouvée");
           console.log("LA rêquete de l'affichage a échoué");
             
            }
          }
         
         
          console.log(this.repertoire);
        },
        (error:HttpErrorResponse)=>{
          console.log("Une erreur s'est produite lors de la recuperation de tous le repertoire"+ error.message);
        }
    );
  }


  JqueryFunctions() { // to show a modal with dummyId
    
    $(document).ready(function(){
    //var a="je veux etre avec toi";
   
    $(".recensement").click(function(){
     $(this).hide();
    });

    
     $(document).on("click","#add_repertoire",function(){
      $('#afficher_document').modal('show');
     });
    
    });
  }

  goToItems() {
    //this.router.navigate(['items'], { relativeTo: this.route });
  }


  /*
  public updateMachine(equipement:Machines){
    this.subscriptions=this.serviceglobal.updateMachine(equipement).subscribe(
     (data:Machines)=>{  
      if(data!=null){
        alert("Mise à jour reussie");
        $(".fermer_edit").text("rafraichir");
        $(.fermer_edit").addClass("bg-danger");
        $(".fermer_edit").addClass("rafraichir");
      }
     },(erreur:HttpErrorResponse)=>{
       console.log("Exception: une excpetion a été levé");
       alert("Echec de la mise à jour" + erreur.message);
     }
    )
  }

 public getAllEquipement():void{
   this.subscriptions=this.serviceglobal.allMachine().subscribe(
       (data:Machines[])=>{
         this.allmachine=data;
       },(error:HttpErrorResponse)=>{
         alert("Une erreur pour recuperation des equipement "+ error.message);
       }
   );
 }

 formModal(){
   
   $("#FormulaireDajout").modal("show");
   
   $(".fermer").click(function(){
     this.navigation();
      $("#FormulaireDajout").modal("hide");

      
   });

  

 }

 editModal(mac:Machines){
   
   this.edit_machine=mac;
   $("#FormulaireEdit").modal("show");
   
   $(".fermer_edit").click(function(){

     $(".fermer_edit").text("Fermer");
        $(".fermer_edit").removeClass("bg-danger");
        $(".fermer_edit").removeClass("rafraichir");

      $("#FormulaireEdit").modal("hide");

      this.navigation();
   });

   $(".rafraichir").click(function(){
     this.subscriptions.unsubscribe();
     this.navigation();
      
   });
  

 }


 suppEquipement(id: String){
  
   if(confirm("Voulez-vous supprimer?")){
     this.subscriptions=this.serviceglobal.deleteMachine(id).subscribe(
       data=>{
       
         alert("Suppresion reussie");

         this.navigation();
        
       },(error:HttpErrorResponse)=>{
         alert("ERREUR: Une erreur s'est produite "+ error.message);
       });
     
    
   }
 }

public navigation(){
 this.location.navigate(['/machines']);
}*/
}
