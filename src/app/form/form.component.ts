import { Component, Output,EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';




@Component({
  selector: 'app-form',
  standalone: true,
  imports: [MatButtonModule,MatInputModule,MatCardModule,CommonModule,FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Output() Register = new EventEmitter<boolean>();
  isRegister: any;
  user = "";
  pass = "";

  authorize = "null";


  confirm(){
    if(this.user === "Admin" && this.pass === "Admin"){
      this.authorize = "true";
      setTimeout(()=>{this.authorize = "null"},2000);
    }
    else
    {
      this.authorize = "false";
      setTimeout(()=>{this.authorize = "null"},2000);
    }
  }

  gotoRegister(){
    this.isRegister = false;
    this.Register.emit(this.isRegister);
  }

}
