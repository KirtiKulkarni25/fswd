import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name: string = "John";
  onNameChange(value: string): void {
    this.name = value;
  }
  sayHello(): void {
    alert('Hello ' + this.name);
  } 
}