import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FormComponent,RegisterComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'log-in';

  Register = true;

  toRegister(getRegister: boolean){
    this.Register = getRegister;
  }

  toSignup(getSignup: boolean){
    this.Register = getSignup;
  }
}
