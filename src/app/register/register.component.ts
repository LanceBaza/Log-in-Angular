import { Component, Output,EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatButtonModule,MatInputModule,MatCardModule,CommonModule,FormsModule,MatDatepickerModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  @Output() Signup = new EventEmitter<boolean>();
  pass = '';
  user = '';
  toSignup: any;

  gotoSignup(){
    this.toSignup = true;
    this.Signup.emit(this.toSignup);
  }
}
