import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [InputTextModule,FloatLabelModule,ButtonModule,CheckboxModule,CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  time = 0;
  interval:any;
  timeLeft: number = 2;
  images: string[] = [
    'https://c4.wallpaperflare.com/wallpaper/881/499/584/moon-lake-mountains-cold-night-nature-scenery-wallpaper-preview.jpg',
    'https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D',
    'https://i.pinimg.com/originals/fc/58/68/fc58680a30c8e4d27c4837a6909578af.gif',]

    constructor(){
      // setInterval(()=>{
      //   this.time++;
      // },5000);
    }

    startTimer() {
      this.interval = setInterval(() => {
        if(this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          this.timeLeft = 2;
        }
      },2000)
    }
  
    pauseTimer() {
      clearInterval(this.interval);
    }

    // getImages(){
    //   setInterval(()=>{
    //     this.time++;
    //   },5000)
    // }


    ngOnInit(): void {
    }

    

    
}
