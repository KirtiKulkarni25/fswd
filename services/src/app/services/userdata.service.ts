import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users(){
    return[
      {name:'abc',age:28,email:'abc@gmail.com'},
      {name:'pqr',age:24,email:'pqr@gmail.com'},
      {name:'xyz',age:32,email:'xyz@gmail.com'},
    ]
  }
}
