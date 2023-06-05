import { Input } from "@angular/core";
import { Chorales } from "./chorales.model";

export class Repertoire {
   public idrep:number;
    public codeRepe: string;
    public titreRepertoire: string;
    public livreRepertoire: string;
    public referenceRepertoire: number;
    public lienRepertoire:string;
    public partitionRepertoire: String;
    public paroleChant :  string ;
    public createdAt: Date;
    public updateAt: Date;
    public chorales:Chorales=new Chorales();
    public gamme :string;

 constructor(){
    
 }
    /*constructor(id:number,titre:string,book:string,ref_number:number,texte:string,pdf:string,partition:string) { 
       this.setIdRep(id);
       this.setpartition(partition);
       this.setpdf(pdf);
       this.settitre(titre);
       this.settexte(texte);
       this.setref_book(book);
       this.setref_number(ref_number);
    }*/

   public setIdRep(id:number){
        this.idrep=id;
   }

   

   public getIdRep(){
        return this.idrep;
    }

    public setgamme(g:string){
        this.gamme=g;
    }
    
    public getgamme(){
       return this.gamme;
    }

    public setChorales(g:Chorales){
        this.chorales=g;
    }
    public getChorales(){
       return this.chorales;
    }
    

    public settitre(titre: string){
       this.titreRepertoire =titre;
    }
    
    public gettitre(){
        return this.titreRepertoire;
    }
     
    public settexte(texte: string){
       this.paroleChant= texte;
    }



    public gettexte(){
        return this.paroleChant;
    }

    public setref_book(book: string){
        this.livreRepertoire =book;
    }

   
    public getref_book(){
        return this.livreRepertoire;
    }

    public setref_number(ref_number: number){
        this.referenceRepertoire =ref_number;
    }

   
    public getref_number(){
        return  this.referenceRepertoire ;
        ;
    }


     
    public setpartition(partition: string){
        this.partitionRepertoire=partition;
    }

   
    public getpartition(){
        return this.getpartition;
    }


    public setpdf(pdf: string){
        this.lienRepertoire=pdf;
    }

    
    public getpdf(){
        return this.lienRepertoire;
    }

}
