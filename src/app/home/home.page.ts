import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //le temps restant
  public timeLeftInSeconds = 0;
  // temps de cuisson
  private durationInSeconds = 4*60;

  // le chrono sur zero (variable qui stcok mon chrono)
  public timer = null;
  
  
  constructor() {}

    // fonction chronometre
  public startTimer(){
    // le temps restant et egal a la durée mets le temps a 4 minutes
    if(this.timeLeftInSeconds==0){
      //le temps restant et egal a la la durée
      // uniquement quand on lance un nouveau chrono
      // et pas quand on reprend un chrono en pause
    this.timeLeftInSeconds=this.durationInSeconds;
    }
    
    // a chaque seconde on décrémente le temps restant
    this.timer = setInterval(
      ()=>{
        this.timeLeftInSeconds--;
        //arret du chrono quand le temps restant est egal à zéro
        if(this.timeLeftInSeconds==0){
          clearInterval(this.timer);
          this.timer= null;
        }
      },//  en décrémente toute les secondes
      1000

    );
  }
  // fonction pour transformer 4*60  en minutes  % modulo (reste de la division)
  public displayTime(timeLeftInSeconds){
    let minutes = Math.floor(timeLeftInSeconds/60);
    let seconds = timeLeftInSeconds % 60;
    return minutes +':'+ seconds;
  }
  // fonction qui arrete le chrono associer sur le bouton stop
  public stopTimer(){
    // clearInterval remet a 0 au click sur stop
    clearInterval(this.timer);
    this.timeLeftInSeconds = 0;

    this.timer= null;

  }
  //fonction de mise en pause du chrono
  public pauseTimer(){
    //arrete le chrono
    clearInterval(this.timer);
    this.timer=null;
  }

}
