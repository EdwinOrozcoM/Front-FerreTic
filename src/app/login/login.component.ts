import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ApiService} from "../Providers/api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form_login = this.fb.group({
    username:[''],
    password:['']
  })
  constructor(private fb:FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
  }

  login(){
    this.api.get_token(this.form_login.value)
      .subscribe(
        data =>{
          if(data!=undefined){
            console.log(data)
          }else{
            alert("Su nombre de usuario o su contraseña no son correctas.")
          }
        }
      )
  }

}
