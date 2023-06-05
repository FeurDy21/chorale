import { Component } from '@angular/core';
import * as $ from 'jquery';
//declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'machorale';

  ngOnInit() {
   
   this.jQueryExampleModal();
 
     
    
  }

  scrollToTop() {
    $('html,body').animate({scrollTop:0}, 'slow');
}
  jQueryExampleModal() { // to show a modal with dummyId
    
    $(document).ready(function(){
    var a="je veux etre avec toi";
   
    $(".recensement").click(function(){
     $(this).hide();
    });
    // $('#dummyId').modal('show');


    });
  }

}
