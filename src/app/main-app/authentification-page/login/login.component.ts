import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AuthentificationPageService, Credentials} from "../authentification-page.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  message: string = ""
  title: string = "Login"
  credentials?: Credentials
  hidden: boolean = false

  form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    }
  );

  constructor(private authentificationPageService: AuthentificationPageService,
              private router: Router,
              private dialogRef: MatDialogRef<LoginComponent>,
              @Inject(MAT_DIALOG_DATA) data: any) {
  }

  ngOnInit(): void {
    if(this.router.url.includes('register')){
      this.dialogRef.close(true)
    }
  }

  submit(){
    if(!this.hidden){
      this.authentificationPageService.login(this.form.value).subscribe(creds => {
        this.credentials = creds

        if(!!this.credentials){
          this.message = "Login success!!"
          this.dialogRef.close(true);
          if(this.credentials?.role === 'ADMIN'){
            this.router.navigate(['/admin'])
          }
          else if(this.credentials?.role === 'CLIENT'){
            this.router.navigate(['client', 'allocated-devices', this.credentials?.id])
          }
        }
        else{
          this.message = "Username or password is invalid!!"
        }
      })
    }
    else{
      this.authentificationPageService.register(this.form.value).subscribe(() => {})

      this.dialogRef.close(true)
      this.router.navigate(['/login'])
    }

  }

  clicked(){
    this.hidden = true
    this.title = 'Register'
    this.dialogRef.updateSize('350px', '47%')
  }

  get usernameControl(){
    return this.form.controls['email']
  }

  get passwordControl(){
    return this.form.controls['password']
  }

}
