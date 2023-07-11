import { Component , OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

import { User } from '../user';
import { UserService } from '../user.service';




@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{

  constructor(private userService:UserService,
    private router: Router, private route: ActivatedRoute){}

  
    formdata : User={
      id: 0,
      name: '',
      email: ''
    }

  ngOnInit(): void{
    this.route.paramMap.subscribe((param) => {
      let id= Number(param.get('id'))
      this.getByid(id)
    })
  }

  getByid(id:number){
    this.userService.getById(id).subscribe((data) => {
      this.formdata=data;
    })

  }

  update(){
    this.userService.updateUser(this.formdata,this.formdata.id).subscribe(res=>{
      alert("update successfully")
    })
  }
      
   

}
