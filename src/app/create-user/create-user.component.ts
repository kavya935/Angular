import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  submitted: boolean = false;

  constructor(private userService:UserService,
    private router:Router){}

  formdata : User={
    id: 0,
    name: '',
    email: ''
  }  


  create(){
    this.userService.creat(this.formdata).subscribe({
      next:(data) => {
        this.router.navigate(["user"])
      },
      error:(er) =>{
        console.log(er);
      }
    })


  }

}



