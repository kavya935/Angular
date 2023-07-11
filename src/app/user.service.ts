import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './user';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  getAll(){
    return this.httpClient.get<User[]>('http://localhost:3000/users');
  }

  creat(data: User){
    return this.httpClient.post('http://localhost:3000/users',data);
    }

  

  getById(id:number){
    return this.httpClient.get<User>("http://localhost:3000/users/"+id);

    
  }

  updateUser(data: any, id:number){
    return this.httpClient.put<User>("http://localhost:3000/users/"+id,data);

  }

  deleteUser(id:number){

    return this.httpClient.delete<any>("http://localhost:3000/users/"+id);
  }
}
