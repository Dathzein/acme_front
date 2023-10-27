import { Component, OnInit } from '@angular/core';
import '../../../../node_modules/bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { LocalService } from 'src/app/services/local.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginLoading: boolean = false;

  constructor(
    private services: DataService,
    private fb: FormBuilder,
    private local: LocalService,
    private router:Router) {

  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['',[ Validators.required, Validators.email ]],
      password:['',[ Validators.required, Validators.minLength(8) ]],
    });
  }

  login(){
    this.loginLoading = true;
    let data = this.loginForm.value

    this.services.login(data).subscribe((res:any)=>{
      if(res){
        let usuario = {
          email:res.user.email,
          token: res.access_token,
          name:res.user.name,
          id:res.user.id
        }
        // console.log(usuario)
        this.local.setJsonValue('usuario',usuario);
        this.router.navigateByUrl('/home');
        this.loginLoading = false;
      }else{
        //todo:mostrar error
        this.local.clearToken();
      }
    })
  }

}
