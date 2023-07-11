import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{

  dataModal: any;
  idTodelete:number = 0;

  allusers:User[]=[];
  
  constructor(private router: Router,private userService: UserService){}

  formdata:User={
    id: 0,
    name: '',
    email: ''
  }

  ngOnInit():void{
    this.getUser();
  }

  getUser(){
    this.userService.getAll()
    .subscribe(data => {
      this.allusers = data;
      console.log(".........",data)
    });
  }
 
  create(){
    this.userService.creat(this.formdata).subscribe({
      next:(data) => {
        this.router.navigate(["/user"])
      },
    })
  }

  editUser(item:any){
    debugger
  }

  

  delete(item:any){
    this.userService.deleteUser(item.id).subscribe( res =>{
      console.log(",,,,,,,,,,,,",res);
      alert("user deleted")
      this.getUser();
      
      },
      err => {
        alert("....")
      },
    )
  }
   
  //update(){
    //this.userService.updateUser(this.formdata,this.formdata.id).subscribe(res => {
      //alert("updated successfully")
    //})
  //}
}
