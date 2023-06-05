import { Injectable } from '@angular/core';
import { Repertoire } from '../Models/repertoire.Model';
import {Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class RepertroireServiceService {

  private baseUrl:string="http://localhost:8284/service/";
 private  repertoi: any[];
 private r: Repertoire=new Repertoire();

  constructor(private htpp: HttpClient) { }


 public recherche(cle:string){
    this.repertoi=this.repertoi.filter(a=>a.gettitre()==cle || a.gettexte()==cle);

    return this.repertoi;
  }
  

  public getRepertoire(){
    this.repertoi = new Array<Repertoire>();
    let repert:Repertoire=new Repertoire();
  repert.setIdRep(1);
  repert.settitre("saint cohorte");
  repert.settexte("Oh Seigneur, mon âme est tranquille au près de toi");
  repert.setref_number(4);
  repert.setref_book("chant de victoire");
 
  this.repertoi.push(repert);

  let reper:Repertoire=new Repertoire();
  reper.setIdRep(3);
  reper.settitre("Chantez à Dieu");
  reper.settexte("Chantez à Dieu un cantique nouveau, car il a fait de grandes choses. Par son pourvoir saint et glorieux, il est victorieux.");
  reper.setref_number(null);
  reper.setref_book("album");
  this.repertoi.push(reper);

  var repe:Repertoire=new Repertoire();

  repe.setIdRep(2);
  repe.settitre("Ce que tu as fait");
  repe.settexte("Ce que tu as fait pour moi est grand, par amour SEIGNEUR tu m'as béni, tellement, tu m'as comblé de bien SEIGNEUR, c'estpourquoi je veux te glorifier.");
  repe.setref_number(null);
  repe.setref_book("Chanté par chorale menorah");
  this.repertoi.push(repe);

  console.log(this.repertoi);
    
  return this.repertoi;
  }



  public getAllRepertoire():Observable<any[]>{
  
    return this.htpp.get<any[]>(this.baseUrl+"getAllRepertoire")
  }

  public getRepertoireById(id:number):Observable<Repertoire>{
  // retrouver le repertoire par 
    return this.htpp.get<Repertoire>(this.baseUrl+"getOneRepertoire/?idRep="+id);
  }

    public findRepertoire(mot:string):Observable<Repertoire[]>{
    // retrouver des repertoire 
      return this.htpp.get<Repertoire[]>(this.baseUrl+"findRepertoire/"+mot);
    }

   public addRepertoire(rep:Repertoire):Observable<Repertoire>{
    return this.htpp.post<Repertoire>(this.baseUrl+"addRepertoire",rep);
   }

   public updateRepertoire(rep:Repertoire):Observable<Repertoire>{
     if(rep!=null)
    return this.htpp.put<Repertoire>(this.baseUrl+"updateRepertoire",rep);
   }

   public deleteRepertoire(id:number) : Observable<void>{
    return this.htpp.delete<void>(this.baseUrl+"deleteRepertoire/"+id);
   }


}
